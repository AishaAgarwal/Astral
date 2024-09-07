const Shipment = require('../models/shipmentModel');
const SpaceStation = require('../models/spaceStationModel');
const Goods = require('../models/goodsModel');

// create a shipment order 
const createShipmentOrder = async(req,res) => {
    const {sourceStationId, destinationStationId, goodsId, quantity, shipmentDetails} = req.body;

    if(!sourceStationId || !destinationStationId || !goodsId || !quantity || !shipmentDetails){
        return res.status(400).json({
            message : 'invalid data'
        });
    }
    try{
        const sourceStation = await SpaceStation.findById(sourceStationId);
        const destinationStation = await SpaceStation.findById(destinationStationId);
        const goods = await Goods.findById(goodsId);

        if(!sourceStation || !destinationStation || !goods){
            return res.status(404).json({
                message : 'space station or goods not found'
            });
        }

        const shipment = new Shipment({
            sourceStationId,
            destinationStationId,
            goodsId,
            quantity,
            shipmentDetails
        });

        await shipment.save();

        return res.status(201).json({
            shipmentId: shipment._id,
            status : shipment.status,
            message : 'shipment order created successfully'
        });
    }
    catch(error){
        console.error(error);
        return res.status(500).json({
            message : 'server error'
        });
    }
};

module.exports = {createShipmentOrder};