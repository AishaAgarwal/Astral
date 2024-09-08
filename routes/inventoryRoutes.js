const express = require('express');
const router = express.Router();
const {checkStockLevels, updateStockLevels} = require('../controllers/inventoryController');
const {auth} = require('../middlewares/authenticate');

// updating stock levels 
router.post('/update', auth, updateStockLevels);

// checking stock levels 
router.get('/check/:goodsId', checkStockLevels);

module.exports = router;