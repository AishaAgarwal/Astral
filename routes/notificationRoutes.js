const express = require('express');
const {notifyUsers} = require('../controllers/notificationController');

const router = express.Router();

router.post('/user', notifyUsers);

module.exports = router;