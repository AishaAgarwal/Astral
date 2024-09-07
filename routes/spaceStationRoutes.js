const express = require('express');
const {createSpaceStation,listSpaceStations, getSpaceStationDetails, updateInventory} = require('../controllers/spaceStationController');

const router = express.Router();

router.post('/create', createSpaceStation);

router.get('/spaceStations', listSpaceStations);

router.get('/spaceStations/:id', getSpaceStationDetails);

router.post('/spaceStations/:id/inventory', updateInventory);

module.exports = router;