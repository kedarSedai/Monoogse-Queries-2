const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.PORT || 3000;

const app = express();

//Import routes
const apiRoutes = require('./api/Profile');

//Middleware for body-parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//DATABASE CONNECTION
mongoose
    .connect(process.env.DB, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log( 'Database Connected' ))
    .catch(err => console.log( 'not connected' )); 

//Middleware for routes
app.use('/', apiRoutes)

//Starting server 
app.listen(port, () => console.log(`Server is running at ${port}`));