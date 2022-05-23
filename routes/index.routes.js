// Calling Module
const router = require('express').Router();

// Calling controller
const {indexController,resumenController} = require('../controllers')


router.get('/', indexController.home);
router.get("/cv",resumenController.downloadResumen);
router.get('/login',indexController.login);

module.exports = router;