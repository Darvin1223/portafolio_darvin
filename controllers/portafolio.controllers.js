const conexion = require("./../database/database");
const fs = require("fs");
const path = require("path");

class portafolio {

    showPortafolios(req,res){
        conexion.query("SELECT * FROM portafolie", (error,results)=>{
            try{
                res.render("layouts/portafolio", {
                    title: "Dashboard || Portafolio",
                    results: results
                })
            }catch(error){
                throw new Error(error);
            }
        })
      
    };

    addPortafolioProject (req,res){
        const {title,url_proyecto} = req.body;
        const { filename } = req.file;
            console.log(title, url_proyecto, filename);
        if(filename == null || filename == ""){
            console.log("Debe subir imagen")
        }else{
            conexion.query("INSERT INTO portafolie SET ?", {
                portafolie_name:title,
                portafolie_img:filename,
                portafolie_tecnologies:null,
                portafolie_url:url_proyecto
            }, (error,msg) => {
                try{
                    res.redirect("/portafolio");
                }catch{
                    throw error;
                }
            })
        }
    }
}

module.exports = new portafolio();