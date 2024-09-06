const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/userController');

// register a new user 
router.post('/register', registerUser);

module.exports = router;