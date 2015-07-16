'use strict';

var app = require('./app'),
	db = require('./db'),
	fs = require('fs'),
	https = require('https');

var options = {
	key: fs.readFileSync('key.pem'),
	cert: fs.readFileSync('cert.pem')
};


var server = https.createServer(options,app).listen(8080, function () {
	console.log('HTTP server patiently listening on port', 8080);
});

module.exports = server;