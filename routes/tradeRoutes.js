const express = require("express");
const router = express.Router();
const {
  initiateBuyRequest,
  initiateSellRequest,
  checkTradeStatus
} = require("../controllers/tradeController");

// initiate buy request
router.post("/buy", initiateBuyRequest);

// initiate sell request
router.post("/sell", initiateSellRequest);

// checking trade status 
router.get('/status/:transactionId', checkTradeStatus);

module.exports = router;
