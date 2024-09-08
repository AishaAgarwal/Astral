const express = require("express");
const router = express.Router();
const {
  initiateBuyRequest,
  initiateSellRequest,
  checkTradeStatus, getUserTrades
} = require("../controllers/tradeController");
const { auth } = require("../middlewares/authenticate");

// initiate buy request
router.post("/buy", auth, initiateBuyRequest);

// initiate sell request
router.post("/sell", auth, initiateSellRequest);

// checking trade status 
router.get('/status/:transactionId', checkTradeStatus);

// getting user trades 
router.get('/:userId',auth, getUserTrades);

module.exports = router;
