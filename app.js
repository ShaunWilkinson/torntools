const express = require('express');
const path = require('path');
const requireDir = require('require-dir')
const db = require('./config/db');
const DashboardController = require('./controllers/dashboardController');

var app = express();
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
const routes = requireDir('./routes')
for(var i in routes) app.use('/', routes[i])

// Models
const ExampleModel = require('./models/exampleModel');
const exampleModel = new ExampleModel()

app.set('exampleModel', exampleModel);

// Controllers
const dashboardController = new DashboardController(exampleModel);

app.set('dashboardController', dashboardController);

console.log("Server started, connect to http://localhost:3300")
module.exports = app;