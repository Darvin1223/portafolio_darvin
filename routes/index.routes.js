// Calling Module
const router = require('express').Router();

// Calling controller
const {indexController,resumenController,contactController,authController,certificateController} = require('../controllers')


router.get('/', indexController.home);
router.get("/Resumen-Darvin-Rodriguez",resumenController.downloadResumen);
router.get("/certificate_download", certificateController.download_certificate);
router.get('/login',indexController.login);

// POST
router.post("/sendMail",contactController.sendMail);
router.post("/sign-in",authController.login);
// router.post("/token",authController.login);

module.exports = router;