const express = require('express');
const {createItem, getItemDetails} = require('../controllers/goodsController');

const router = express.Router();

// create a new item 
router.post('/create', createItem);

// retrieve an item by ID 
router.get('/:goodsId',getItemDetails);

module.exports = router;