const jwt = require("jsonwebtoken"),
      bcryptjs = require("bcryptjs"), conexion = require("../database/database");

class Auth{

   

    login(req,res){
        const {email,password} = req.body;
     
    }
}

module.exports = new Auth();