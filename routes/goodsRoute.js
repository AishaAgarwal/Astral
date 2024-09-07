const express = require('express');
const {createItem} = require('../controllers/goodsController');

const router = express.Router();

// create a new item 
router.post('/create', createItem);

module.exports = router;