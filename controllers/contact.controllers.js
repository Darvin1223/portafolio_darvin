'use strict';

const nodemailer = require("nodemailer");

class Contact{

    sendMail(req,res){
      const {fullName,email,subject,message} = req.body;
        
     
        const transporter = nodemailer.createTransport({
            host: 'mail.necodt.com',
            port: 465,
            secure: true,
            auth: {
              user: 'darvinrodriguez@necodt.com', 
              pass: "Darvin2505", 
            }
        });

        try{
          let mail = transporter.sendMail({
            from:email,
            to:'darvinrodriguez@necodt.com',
            subject:subject,
            text:`${fullName}

            ${message}
            `
          });
        }catch (err){
          console.log(err)
        }

    }

  
}


module.exports = new Contact();