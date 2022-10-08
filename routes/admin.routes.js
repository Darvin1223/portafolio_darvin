"use strict";

// Calling module.
const router = require('express').Router();

// Calling controller 
const {adminController,portafolioController,about_MeController} = require('../controllers');

// Making routes

router.get('/admin', adminController.index);
router.get('/portafolio', portafolioController.showPortafolios);
router.post("/about_me",about_MeController.Show_abaout_me_admin);
// Export module and route
module.exports = router;