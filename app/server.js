var connect = require('connect');
var serveStatic = require('serve-static');
var fs = require("fs");

// ------------------------------------------------------------------
// Configurable variables section...
// ------------------------------------------------------------------
// Web server port
// If 8080 doesn't work try 9080
var BASE_PORT = 8080;

// Compute the working directory for serving static files
// makes assumptions about layout of node and directory structure
// working directories/projects etd.
var ROOT_DIR = __dirname + "/";
ROOT_DIR = fs.realpathSync(ROOT_DIR);
if (!fs.existsSync(ROOT_DIR)) {
	console.log("Error: cannot find working directory: " + ROOT_DIR);
	exit();
}

// Create the "connect" server for routing and static files
var app = connect();

// Add simple logging, "mounted" on the root path
app.use(function(req, res, next) {
	console.log('%s %s', req.method, req.url);
	next();
});

// Attach the static file server to this working directory and start it
app.use(serveStatic(ROOT_DIR));
app.listen(BASE_PORT);
console.log("Serving static files from " + ROOT_DIR);

var http = require("http");
// Not using the http server for anything much so don't need callback
var server = http.createServer(null);

console.log("Node server started...");
