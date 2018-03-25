const express = require('express');
const routes = require('./routes/routes');
const app = express();
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
if (process.env.NODE_ENV !== "test") mongoose.connect('mongodb://localhost/ride-share');



app.use(express.json())
app.use(express.urlencoded({extended: true}))
routes(app);

module.exports = app;