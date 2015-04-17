angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, sharedArray, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('ProgramsCtrl', function($scope, sharedArray) {
$scope.array = null;
sharedArray.getArray().then(function (resp) {
	$scope.array = JSON.parse(window.localStorage['sharedArray']);
	$scope.programs = [];
	for (i=0;i<$scope.array.length; i++) {
		if ($scope.array[i][1] == "") {
			break;
		}
		$scope.programs.push({ title: $scope.array[i][1],
								id: i });
		}
	});
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
