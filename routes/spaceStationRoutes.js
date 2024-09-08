const express = require('express');
const {createSpaceStation,listSpaceStations, getSpaceStationDetails, updateInventory} = require('../controllers/spaceStationController');
const {auth} = require('../middlewares/authenticate');
const router = express.Router();

router.post('/create', auth, createSpaceStation);

router.get('/spaceStations', listSpaceStations);

router.get('/spaceStations/:id', getSpaceStationDetails);

router.post('/spaceStations/:id/inventory',auth, updateInventory);

module.exports = router;