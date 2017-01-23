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


    $scope.logout = function() {
        console.log('logout button clicked');
        $http({
            method: 'GET',
            url: '/logout',
        }).then(function successCallback(response) {
            // console.log(response);
            $window.location.href = '/';
        }, function errorCallback(error) {
            console.log('error', error);
            //  $window.location.href = '#!/register';
        }); //end $http.get
    }; //end $scope.logout

$scope.checkLogin();

}]); //end NavController
