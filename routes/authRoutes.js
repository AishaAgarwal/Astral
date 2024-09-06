const express = require('express');
const router = express.Router();
const {Auth} = require('../controllers/authController');

// register a new user 
router.post('/login', Auth);

module.exports = router;