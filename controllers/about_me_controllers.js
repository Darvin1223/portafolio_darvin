const { render } = require("ejs");
const conexion = require("../database/database");

class About_me {

    Show_abaout_me_admin(req,res){
        try{
            conexion.query("SELECT * FROM about_me", (results)=>{
                res.render("layouts/about_me",{
                    title: "Sobre mi",
                    results: results
                })
            });
        }catch(error){
            console.error(` este es el error ${error}`)
        };
        
    }
   
}

module.exports = new About_me();