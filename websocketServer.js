const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8082 });

// Handle new connections
wss.on('connection', ws => {
    console.log('New client connected');

    // Handle incoming messages
   
    ws.onmessage = (event) => {
        const message = JSON.parse(event.data);
        
        if (message.type === 'notification') {
            console.log('New notification:', message.data);
            
        } else if (message.type === 'transaction') {
            console.log('Transaction update:', message.data);
            
        }
    };
    // Handle client disconnections
    ws.on('close', () => {
        console.log('Client disconnected');
    });

    // Handle WebSocket errors
    ws.on('error', error => {
        console.error('WebSocket error:', error);
    });
});

console.log('WebSocket server is listening on ws://localhost:8082');



module.exports = wss; 