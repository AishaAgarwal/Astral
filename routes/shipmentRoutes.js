const express = require('express');
const router = express.Router();
const {createShipmentOrder, trackShipment, reportShipmentIssue} = require('../controllers/shipmentController');
const {auth} = require('../middlewares/authenticate');

// create shipment order 
router.post('/create', auth, createShipmentOrder);

// tracking 
router.get('/tracking/:trackingId', auth, trackShipment);

// report shipment issues 
router.post('/issues', auth, reportShipmentIssue);

module.exports = router;