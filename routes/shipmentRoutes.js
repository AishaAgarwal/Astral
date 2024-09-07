const express = require('express');
const router = express.Router();
const {createShipmentOrder} = require('../controllers/shipmentController');

// craete shipment order 
router.post('/create', createShipmentOrder);

module.exports = router;