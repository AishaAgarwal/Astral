const express = require('express');
const router = express.Router();
const {initiateBuyRequest} = require('../controllers/tradeController');

// initiate buy request 
router.post('/buy', initiateBuyRequest);

module.exports = router;

