"use strict";

// Calling module.
const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const {v4: uuidv4 } = require('uuid');

// Configurates de folders and destinations
const storageResumen = multer.diskStorage({
    destination: 'public/assets/resumen',
    filename: (req,file,cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});
const storageCertificates = multer.diskStorage({
    destination: 'public/assets/certificates',
    filename: (req,file,cb) => {
        cb(null, uuidv4() + path.extname(file.originalname).toLocaleLowerCase());
    }
});

// Updating to the destinetion

const uploadResumen = multer({
    storage: storageResumen,
    dest: 'public/assets/resumen'
});

const uploadCertificates = multer({
    storage: storageCertificates,
    dest: 'public/assets/certificates'
});


// Calling controller 
const {adminController,portafolioController,about_MeController,certificateController,userController} = require('../controllers');

// Making routes

/* Gets */
router.get('/admin', adminController.index);
router.get('/portafolio', portafolioController.showPortafolios);
router.get("/about_me",about_MeController.Show_abaout_me_admin);
router.get("/certificates", certificateController.show_certificate_Admin);
router.get("/users", userController.show_users);


/* POST */
router.post("/create_user", userController.create_user);


// Export module and route
module.exports = router;