const express = require("express");
const router = express.Router();
const {
  initiateBuyRequest,
  initiateSellRequest,
  checkTradeStatus, getUserTrades
} = require("../controllers/tradeController");
const { authenticate } = require("passport");

// initiate buy request
router.post("/buy", initiateBuyRequest);

// initiate sell request
router.post("/sell", initiateSellRequest);

// checking trade status 
router.get('/status/:transactionId', checkTradeStatus);

// getting user trades 
router.get('/:userId',authenticate, getUserTrades);

module.exports = router;
