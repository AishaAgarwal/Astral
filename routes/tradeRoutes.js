const express = require("express");
const router = express.Router();
const {
  initiateBuyRequest,
  initiateSellRequest,
} = require("../controllers/tradeController");

// initiate buy request
router.post("/buy", initiateBuyRequest);

// initiate sell request
router.post("/sell", initiateSellRequest);

module.exports = router;
