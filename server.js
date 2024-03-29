const express = require("express");
const dotenv = require("dotenv").config({path : __dirname + '/env/' + process.env.NODE_ENV + '.env'});;
const cors = require("cors");
const path = require("path");
const localIpV4Address = require("local-ipv4-address");
const expressLayouts = require("express-ejs-layouts");
const session = require('./middleware/sessions.middleware');
const error = require('./middleware/errors.middleware');

// Calling routes.
const {indexRouter,adminRouter} = require('./routes');

// DotEnv config

// Setting server
const server = express();

// Setting the cors.
server.use(cors());


// Setting PORT AND HOST
server.set('port', process.env.PORT || 3000);
server.set('host', process.env.HOST || '127.0.0.1');
const PORT = server.get('port');
const HOST = server.get('host');

// Middleware JSON
server.use(express.urlencoded({ extended: false}));
server.use(express.json());

// View Engine
server.set('view engine','ejs');
server.set('views', path.join(__dirname, 'views'));

// Layouts
server.use(expressLayouts);
server.set('layout','layouts/layout');

// Sessions
server.use(session);

// Using routes.
server.use(indexRouter,adminRouter);

// Serving static files
server.use(express.static(path.join(path.join(__dirname, 'public'))));

// Error.
server.use(error);

// Listing 
// server.listen(PORT, ()=>{
//     console.log(`Page service is running at http://${HOST}:${PORT}`);
// });

localIpV4Address().then((ipAddress)=>{
    server.listen(PORT, ()=>{
        console.log(`Page service is running on local http://${HOST}:${PORT} || Network http://${ipAddress}:${PORT}`);
    });
});