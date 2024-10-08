const express = require('express');
const {createItem, getItemDetails, updateItem, deleteItem} = require('../controllers/goodsController');
const {auth} = require('../middlewares/authenticate');

const router = express.Router();

// create a new item 
router.post('/create',auth, createItem);

// retrieve an item by ID 
router.get('/:goodsId',getItemDetails);

// update an item 
router.put('/:goodsId', auth, updateItem);

//delete item 
router.delete('/:goodsId',auth, deleteItem);

module.exports = router;