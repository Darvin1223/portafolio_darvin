// Calling Module
const router = require('express').Router();

// Calling controller
const {indexController} = require('../controllers')


router.get('/', indexController.home);
router.get('/login',indexController.login);

module.exports = router;