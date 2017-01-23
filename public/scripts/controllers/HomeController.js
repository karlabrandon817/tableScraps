angular.module('myApp').controller('HomeController', ['dogFactory', '$scope', '$http', '$window', function(dogFactory, $scope, $http, $window) {
    console.log('in HomeController');

    $scope.checkLogin = function() {
        $http.get('/auth')
            .then(function successCallback(response) {
                console.log('success', response);
                if (response.status === 200) {
                    $scope.loggedIn = true;
                } else {
                    $scope.loggedIn = false;
                }
            }); //end $http.get

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
        
    }; //end $scope.checkLogin
    $scope.checkLogin();

}]); //end HomeController
