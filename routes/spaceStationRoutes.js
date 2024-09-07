const express = require('express');
const {listSpaceStations, getSpaceStationDetails} = require('../controllers/spaceStationController');

const router = express.Router();

router.get('/spaceStations', listSpaceStations);

router.get('/spaceStations/:id', getSpaceStationDetails);

module.exports = router;