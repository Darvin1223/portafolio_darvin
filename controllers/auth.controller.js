const bcryptjs = require("bcryptjs"), conexion = require("../database/database");

class Auth{

   

   async login(req,res){
        const email = req.body.email.toLowerCase();
        const password = req.body.password;
        const time = 3600000;
       
        
        conexion.query("SELECT * FROM `user` WHERE user_email = ?",[email],async(err,result)=>{
            const verifyPassword = await bcryptjs.compare(password, result[0].user_password);
            if(verifyPassword === false){
                console.log(err);
                res.redirect("/login");
            }else{
                req.session.loggedin = true;
                req.session.cookie.expires = (new Date() + time);
                req.session.cookie.maxAge = time;
                req.session.rol = result[0].user_rol;
                return res.redirect('/admin');
            }
        })
    }
    logout(req, res) {
        req.session.destroy(() => {
            res.redirect('/');
        });

    }
}

module.exports = new Auth();