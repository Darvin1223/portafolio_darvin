const conexion = require("../database/database");
const fs = require("fs");
const path = require("path");

class certificate {
    show_certificate_Admin(req,res){
        conexion.query("SELECT * FROM certificados",(error,results)=>{
            if(error){
                console.log(error);
            }else{
                res.render("layouts/certificate", {
                    title: "Dashboard || Certificados",
                    certificates: results
                });
            }
        })
    }
    add_certificate_Admin(req,res){
        const {title,fecha,name_empresa,url_certificate} = req.body;
        let elements = [];
        let pdf_file_certificate, img_certificate; 
        // const {destination, filename} = req.files;
        if(req.files != undefined){
            req.files.forEach((element) => {
                elements.push(element.filename);
            });
        }
        function getFileExtension3(filename) {
            return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
          }

       elements.forEach(element =>{
            if(getFileExtension3(element) == "pdf"){
                pdf_file_certificate = element;
            }else{
                img_certificate = element;
            }
       })
        conexion.query("INSERT INTO certificados SET ?", {
            certificados_name:title,
            certificados_fecha: fecha,
            certificados_empresa: name_empresa,
            certificados_certificado_pdf:pdf_file_certificate,
            certificados_img:img_certificate,
            certificados_url:url_certificate
        }, (error) => {
            if(error){
                console.log(error)
            }else{
                res.redirect("/certificates");
            }
        })
        
    }
     
    download_certificate(req,res){
        const id = req.query.id;
        
        conexion.query("SELECT * FROM certificados WHERE certificados_id = ?", [id], (err,result)=>{
            const path_certifiques = `../public/assets/certificates/${result[0].certificados_certificado_pdf}`;
            res.sendFile(path.join(__dirname, path_certifiques));
        });
    }
};

module.exports = new certificate();