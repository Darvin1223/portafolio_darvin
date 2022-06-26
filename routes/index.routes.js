// Calling Module
const router = require('express').Router();

// Calling controller
const {indexController,resumenController,contactController} = require('../controllers')


router.get('/', indexController.home);
router.get("/Resumen-Darvin-Rodriguez",resumenController.downloadResumen);
router.get('/login',indexController.login);

// POST
router.post("/sendMail",contactController.sendMail);

module.exports = router;