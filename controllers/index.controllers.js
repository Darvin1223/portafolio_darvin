const conexion = require("../database/database");

class Index {

    // This methodt render the view of home == Index
    home(req,res){
        conexion.query("SELECT * FROM certificados", (err,results_certificates)=>{
            if(err){
                console.log(err);
            }else{
                res.render("index", {
                    layout:false,
                    title: "Portafolio - Darvin Rodriguez",
                    certificates: results_certificates
                });
            }
        });
      
    };

    
    // This render the view of login 
    login(req,res){
        res.render("login",{
            layout: false
        })
    }
}

module.exports = new Index();