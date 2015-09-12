'use strict';

// Importing express module for our node middleware
var express = require('express');

var fs = require('fs');

var bodyParser = require('body-parser');

//Our Supplies Model
var supplies = require('./data/supplies.js');

//Our Philanthropist Controller
var PhilanthropistRoute = require('./data/philanthropists-controller.js');
var TransactionRoute = require('./data/transactions-controller.js');

// ------------------------------------------------------------------
// Configurable variables section...
// ------------------------------------------------------------------
// Web server port
// If 8080 doesn't work try 9080
var BASE_PORT = 8080;

// Compute the working directory for serving static files
// makes assumptions about layout of node and directory structure
// working directories/projects etd.
var ROOT_DIR = __dirname + '/';
ROOT_DIR = fs.realpathSync(ROOT_DIR);
if (!fs.existsSync(ROOT_DIR)) {
	console.log('Error: cannot find working directory: ' + ROOT_DIR);
	exit();
}

/**
 * Create the "express" server for routing and static files.
 **/
var app = express();

/**
 * Adds a simple logging, "mounted" on the root path.
 * Using Express middleware
 **/
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

/**
 * Allows us to parse http body parameters as json
 **/
app.use(bodyParser.json());

/**
 * On a 404 give explanation to user about the page not being found.
 * Using Express middleware
 **/
// app.use(function(req, res) {
// 	res.type('text/plain');
// 	res.status(404);
// 	res.send('404 - ' + req.method + ': ' + req.url + ' Not Found');
// });

/**
 * On a 500 let the user know the server died.
 * Using Express middleware
 **/
// app.use(function(err, req, res) {
// 	console.error(err.stack);
// 	res.type('text/plain');
// 	res.status(500);
// 	res.send('500 - Whoops... a server error');
// });

//Setting up philanthropist controller
PhilanthropistRoute.controller(app);

//Setting up transaction controller
TransactionRoute.controller(app);

/**
 * URL to get initial amount of supplies for the day.
 **/
app.get('/data/initial-supplies', function(req, res) {
	//Return our supplies model
	res.json(supplies.getSupplies());
});

/**
 * URL to get product costs for application.
 **/
app.get('/data/product/costs', function(req, res) {
	
	//Product costs model
	var costs = {
		'largeLemonade': 3, 
		'mediumLemonade': 2,
		'healthySnack': 1,
		'treat': 1
	};

	res.json(costs);

});

/**
 * URL to get application sales information.
 **/
app.get('/data/sales', function(req, res) {
	
	//Sales information model
	var sales = {
		'todayNetProfit': 100, 
		'todayItemSales': 24
	};

	res.json(sales);
});

/**
 * Attach the static file server to this working directory and start it.
 * Using express middleware
 **/
app.use(express.static(ROOT_DIR));

app.listen(BASE_PORT, function() {
	console.log('Node server started @ http://localhost:' + BASE_PORT);
	console.log('Serving static files from ' + ROOT_DIR);
	console.log('Press Ctrl + c for server termination');
});