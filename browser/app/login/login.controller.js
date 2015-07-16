app.controller('loginCtrl', function($scope, Auth, $state){
	$scope.login = {
		email: null,
		password: null
	};

	$scope.submit = function(){
		Auth.login($scope.login)
		.then(function(){
			$state.go('stories');
		})
		.catch(function(e){
			console.log('error logging in');
		});
	};
});