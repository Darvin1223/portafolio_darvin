const jwt = require("jsonwebtoken"),
      bcryptjs = require("bcryptjs"), 
      conexion = require("../database/database");


class Users{

    show_users(req,res){
        res.render("layouts/user");
    }

    async create_user(req,res){
        const email = req.body.email.toLowerCase();
        const name = req.body.name;
        const password = req.body.password;
        const rol = req.body.rol;
        const passwordHaash = await bcryptjs.hash(password, 8);

        console.log(email,name,password,rol);


        // conexion.query("INSERT INTO `user` SET ?", {user_name:name, user_email:email, user_password:passwordHaash, user_rol:rol},async (resul,err) =>{
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("se envio")
        //         return res.redirect('/users');
        //     }
          
        // })

        try{
            conexion.query("INSERT INTO `user` SET ?", {user_name:name, user_email:email, user_password:passwordHaash, user_rol:rol},async (resul) =>{
                console.log("se envio")
                return res.redirect('/users');
            })
        }catch(error){
            console.log(error);
        }
    }
}

module.exports = new Users();