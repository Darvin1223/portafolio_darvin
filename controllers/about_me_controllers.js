const { render } = require("ejs");
const conexion = require("../database/database");

class About_me {

    Show_abaout_me_admin(req,res){
        conexion.query("SELECT * FROM about_me", (results, error)=>{
            if(error){
                console.error(` este es el error ${error}`);
            }else{
                res.render("layouts/about_me",{
                    title: "Sobre mi",
                    results: results
                });
               
            }
            
        });
     
        
    }
   
}

module.exports = new About_me();