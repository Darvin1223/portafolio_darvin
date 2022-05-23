"use strict";

// Calling module.
const router = require('express').Router();

// Calling controller 
const {adminController,portafolioController} = require('../controllers');

// Making routes

router.get('/admin', adminController.index);
router.get('/portafolio', portafolioController.showPortafolios);
// Export module and route
module.exports = router;