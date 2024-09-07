const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/userController');
const {getUserProfile, updateUserProfile} = require('../controllers/userController');

// register a new user 
router.post('/register', registerUser);

// retrieve user profile 
router.get('/:userId', getUserProfile);

// update user profile 
router.put('/:userId', updateUserProfile);

module.exports = router;