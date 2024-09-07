const express = require('express');
const router = express.Router();
const {createShipmentOrder, trackShipment, reportShipmentIssue} = require('../controllers/shipmentController');

// create shipment order 
router.post('/create', createShipmentOrder);

// tracking 
router.get('/tracking/:trackingId', trackShipment);

// report shipment issues 
router.post('/issues', reportShipmentIssue);

module.exports = router;