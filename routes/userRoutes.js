const express = require('express');
const router = express.Router();
const {registerUser, getUserNotifications} = require('../controllers/userController');
const {getUserProfile, updateUserProfile, changeUserPassword, deleteUserAccount} = require('../controllers/userController');

// register a new user 
router.post('/register', registerUser);

// retrieve user profile 
router.get('/:userId', getUserProfile);

// update user profile 
router.put('/:userId', updateUserProfile);

// change user password 
router.put('/:userId/password', changeUserPassword);

// delete user account 
router.delete('/:userId', deleteUserAccount);

// retrieve user notifications 
router.get('/:userId/notifications', getUserNotifications);

module.exports = router;