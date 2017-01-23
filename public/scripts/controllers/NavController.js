angular.module('myApp').controller('NavController', ['$scope', 'authFactory', '$http', '$window', function($scope, authFactory, $http, $window) {
    console.log('in NavController');

      $scope.loggedIn = authFactory.status;

    $scope.checkLogin = function() {
        $http.get('/auth')
            .then(function successCallback(response) {
                console.log('success', response);
                if (response.status === 200) {
                    authFactory.status = true;
                    $scope.loggedIn = authFactory.status;
                } else {
                    $scope.loggedIn = false;
                }
            }); //end $http.get
    }; //end $scope.checkLogin


$scope.checkLogin();

}]); //end NavController
