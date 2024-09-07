const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/userController');
const {getUserProfile, updateUserProfile, changeUserPassword} = require('../controllers/userController');

// register a new user 
router.post('/register', registerUser);

// retrieve user profile 
router.get('/:userId', getUserProfile);

// update user profile 
router.put('/:userId', updateUserProfile);

// change user password 
router.put('/:userId/password', changeUserPassword);

module.exports = router;