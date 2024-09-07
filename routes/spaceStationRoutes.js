const express = require('express');
const {listSpaceStations} = require('../controllers/spaceStationController');

const router = express.Router();

router.get('/spaceStations', listSpaceStations);

module.exports = router;