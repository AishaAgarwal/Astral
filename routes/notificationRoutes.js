const express = require('express');
const {notifyUsers} = require('../controllers/notificationController');
const {auth} = require('../middlewares/authenticate');

const router = express.Router();

router.post('/user', auth, notifyUsers);

module.exports = router;