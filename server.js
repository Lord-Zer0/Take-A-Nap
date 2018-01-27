// server.js

// BASE SETUP
// =============================================================================

// call necessary packages
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser
// use to get data from a POST request
app.use(bodyParser.urlencoded({ extended : true }));