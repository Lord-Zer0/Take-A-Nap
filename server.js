// server.js

// BASE SETUP
// =============================================================================

// call necessary packages
var express    = require('express');        // call express
var app        = express();                 // define app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser
// use to get data from a POST request
app.use(bodyParser.urlencoded({ extended : true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR API
// =============================================================================
var router = express.Router();              // get an instance of the express router

// test route to ensure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'api routes are functional' });
})

// more routes to be added here

// REGISTER THE ROUTES -------------------------------
// all routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Server running on port ' + port);