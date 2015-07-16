app.controller('signupCtrl', function($scope, Auth, $state){
	$scope.signup = {
		email: null,
		password: null
	};

	$scope.submit = function(){
		Auth.signup($scope.signup)
		.then(function(newUser){
			console.log("good job!", newUser);
			$state.go('stories');
		});
	};
});