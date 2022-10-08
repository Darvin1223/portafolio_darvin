const conexion = require("../database/database");

class About_me {

    Show_abaout_me_admin(req,res){
        try{
            conexion.query("SELECT * FROM `about_me`", results => {
                console.log(results);
            });
        }catch(error){
            console.error(error);
        }
    
        
    }
}

module.exports = new About_me();