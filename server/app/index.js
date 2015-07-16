'use strict'; 

var app = require('express')();
var path = require('path');
var User = require('../api/users/user.model');
var crypto = require('crypto');

app.use(require('./logging.middleware'));

app.use(require('./sass.middleware'));

app.use(require('./requestState.middleware'));

app.use(require('./statics.middleware'));

app.use('/api', require('../api'));

//post request has a payload, while GET requests do not (have to use query)
app.post('/auth/login', function(req, res, next){
	User.findOne({email: req.body.email}).exec()
	.then(function(user){
		if (user.hashedPassword === crypto.pbkdf2Sync(req.body.password, user.salt, 0, 16).toString('base64')) {
			res.json(user);
		}
		else {
			var err = new Error('Not Authenticated');
			err.status = 401;
			next(err);
		}
	})
	.then(null, next);
});

app.get('/*', function (req, res) {
	var index = path.join(__dirname, '..', '..', 'public', 'index.html');
	res.sendFile(index);
});

app.use(require('./error.middleware'));

module.exports = app;