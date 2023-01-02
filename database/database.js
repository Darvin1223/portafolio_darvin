const mysql2 = require('mysql2');


const conexion = mysql2.createPool({
    connectionLimit:4,
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
});


conexion.getConnection((err,connection)=> {
    if(err)
    throw err;
    console.log('Database connected successfully');
    connection.release();
  });

module.exports = conexion;