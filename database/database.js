const mysql2 = require('mysql2');

const conexion = mysql2.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

try{
    conexion.connect(()=>{
        console.log("Connected!");
    });
}catch(error){
    console.error(error);
};

module.exports = conexion;