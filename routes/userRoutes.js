const express = require('express');
const router = express.Router();
const {registerUser} = require('../controllers/userController');
const {getUserProfile} = require('../controllers/userController');

// register a new user 
router.post('/register', registerUser);

router.get('/:userId', getUserProfile);



module.exports = router;