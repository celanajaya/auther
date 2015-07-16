'use strict';

app.config(function ($stateProvider) {
	$stateProvider.state('login', {
		url: '/login',
		controller: 'loginCtrl',
		templateUrl: '/browser/app/login/login.html'
	});
});