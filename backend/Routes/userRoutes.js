const express = require('express');
const router = express.Router();
const {registerController} = require('../api/Controller/authController')

router.post('/register',registerController);

module.exports = router