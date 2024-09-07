const express = require('express');
const {createItem, getItemDetails, updateItem, deleteItem} = require('../controllers/goodsController');

const router = express.Router();

// create a new item 
router.post('/create', createItem);

// retrieve an item by ID 
router.get('/:goodsId',getItemDetails);

// update an item 
router.put('/:goodsId', updateItem);

//delete item 
router.delete('/:goodsId',deleteItem);

module.exports = router;