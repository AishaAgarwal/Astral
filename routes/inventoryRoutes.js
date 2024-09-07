const express = require('express');
const router = express.Router();
const {checkStockLevels, updateStockLevels} = require('../controllers/inventoryController');

// updating stock levels 
router.post('/update', updateStockLevels);

// checking stock levels 
router.get('/check/:goodsId', checkStockLevels);

module.exports = router;