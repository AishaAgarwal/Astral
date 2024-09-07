const express = require('express');
const router = express.Router();
const {createShipmentOrder, trackShipment} = require('../controllers/shipmentController');

// create shipment order 
router.post('/create', createShipmentOrder);

// tracking 
router.get('/tracking/:trackingId', trackShipment);

module.exports = router;