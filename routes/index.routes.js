// Calling Module
const router = require('express').Router();

// Calling controller
const {indexController,resumenController,contactController,authController} = require('../controllers')


router.get('/', indexController.home);
router.get("/Resumen-Darvin-Rodriguez",resumenController.downloadResumen);
router.get('/login',indexController.login);

// POST
router.post("/sendMail",contactController.sendMail);
// router.post("/token",authController.login);

module.exports = router;