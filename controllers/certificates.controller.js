const conexion = require("../database/database");

class certificate {
    show_certificate_Admin(req,res){
        res.render("layouts/certificate")
    }
     
};

module.exports = new certificate();