const Trade = require('./models/tradeModel');
const Shipment = require('./models/shipmentModel');
const Inventory = require('./models/inventoryModel');

module.exports = function(io) {
    io.on('connection', (socket) => {
        console.log('New client connected');

        // Emit real-time data
        const emitMetrics = async () => {
            try {
                const trades = await Trade.aggregate([
                    { $group: { _id: null, totalValue: { $sum: "$quantity" } } }
                ]);

                const shipments = await Shipment.countDocuments({ status: 'Active' });

                const inventory = await Inventory.aggregate([
                    { $group: { _id: "$goodsId", totalStock: { $sum: "$stockLevel" } } }
                ]);

                socket.emit('updateMetrics', { trades, shipments, inventory });
            } catch (error) {
                console.error('Error fetching metrics:', error);
            }
        };

        emitMetrics(); // Emit initial metrics

        // Update metrics every 5 seconds
        const intervalId = setInterval(emitMetrics, 5000);

        socket.on('disconnect', () => {
            console.log('Client disconnected');
            clearInterval(intervalId); // Clear the interval when the client disconnects
        });
    });
};
