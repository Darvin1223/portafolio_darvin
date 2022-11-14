"use strict";

// Calling module.
const router = require('express').Router();
const multer = require('multer');
const path = require('path');
const {v4: uuidv4 } = require('uuid');
const verifyLoggedIn = require("../middleware/auth_verification.middleware.js");

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

const storageImgCertificare = multer.diskStorage({
    destination: 'public/assets/img_certificate',
    filename: (req,file,cb)=>{
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
router.get('/admin', verifyLoggedIn,adminController.index);
router.get('/portafolio',verifyLoggedIn, portafolioController.showPortafolios);
router.get("/about_me",verifyLoggedIn,about_MeController.Show_abaout_me_admin);
router.get("/certificates", verifyLoggedIn,certificateController.show_certificate_Admin);
router.get("/users", verifyLoggedIn,userController.show_users_admin);


/* POST */
router.post("/create_user", verifyLoggedIn,userController.create_user);
router.post("/upload_certificate",verifyLoggedIn,uploadCertificates.array("certificate",2), function (req,res,next){certificateController.add_certificate_Admin(req,res,next)});
// router.post("/upload_certificate",uploadCertificates.single("certificate"),uploadImgCertificates.single("img_certificate"),certificateController.add_certificate_Admin);


// Export module and route
module.exports = router;