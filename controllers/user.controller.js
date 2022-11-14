const bcryptjs = require("bcryptjs"), 
      conexion = require("../database/database");


class Users{

    show_users_admin(req,res){
        conexion.query("SELECT * FROM user",(error,results)=>{
            if(!error){
                res.render("layouts/user",{
                    users: results,
                    title:"Usuario Dashboard"
                });
            }    
        });
    }
   
    async create_user(req,res){
        const {name,password,rol} = req.body;
        const email = req.body.email.toLowerCase();
       
        let passwordHaash = await bcryptjs.hash(password, 8);
        
        conexion.query('INSERT INTO user SET ?',{
            user_name: name,
            user_email: email,
            user_password: passwordHaash,
            user_rol: rol
        }, async (err)=>{
            if(!err){
                 res.redirect('/users');
            }else{
                console.log(err);
            }
        });

      
    }
}

module.exports = new Users();