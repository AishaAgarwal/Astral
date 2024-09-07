const express = require('express');
const {listSpaceStations, getSpaceStationDetails, updateInventory} = require('../controllers/spaceStationController');

const router = express.Router();

router.get('/spaceStations', listSpaceStations);

router.get('/spaceStations/:id', getSpaceStationDetails);

router.post('/spaceStations/:id/inventory', updateInventory);

module.exports = router;