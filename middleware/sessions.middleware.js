const session = require('express-session');
const horas = 500000;

// Generate caracter.
const generarSecrect = (num) => {

    // All caracter
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = "";
    const charactersLength = characters.length;
    for(let i = 0; i < num; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    };

    return result;
};

// A ramdon number.
const random = () => {
    return Math.floor((Math.random() * (30 - 10 +1)) + 10);
}

// Generar secrect.
const secrect = generarSecrect(random());

const sessionExpress = session({
    secret: secrect,
    resave: true,
    saveUninitialized: true
});

module.exports = sessionExpress;