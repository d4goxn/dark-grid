'use strict';

var express = require('express'),
	path = require('path');

exports.serve = function() {
	var app = express();

	app.use(express.static(path.join(__dirname, '../client')));

	var port = 3000;
	app.listen(port);
	console.log('Listening on port', port);

	return app;
};
