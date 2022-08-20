'use strict';

const express = require('express');
const app = express();
const routes = require("./routes")
require('dotenv/config')

const PORT = 7000;
const HOST = '0.0.0.0';

const mongoose = require("mongoose");

//var uri = 'mongodb+srv://andreeaBarbu:luIVVAXPLgaR5c53@cluster0.lzrjzcx.mongodb.net/?retryWrites=true&w=majority';
//process.env.DB_CONNECTION
mongoose
.connect(process.env.DB_CONNECTION, { useUnifiedTopology: true, useNewUrlParser: true })
.then(() => {

    const app = express()

    app.use(express.json())
    app.use("/api", routes)
    console.log('connected to bd');
    // App Initialization and startup
    app.listen(PORT, HOST);
    console.log(`Running on http://${HOST}:${PORT}`);
});