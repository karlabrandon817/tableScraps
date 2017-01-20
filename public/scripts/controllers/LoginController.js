angular.module('myApp').controller('LoginController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in LoginController');

        $scope.login = function() {
            var userInfo = {
                username: $scope.username,
                password: $scope.password
            }; //end userInfo
            $http({
                method: 'POST',
                url: '/',
                data: userInfo
            }).then(function successCallback(response) {
                console.log('login response', response.config.data.username);
                sessionStorage.setItem('username', response.config.data.username);
                $window.location.href = '#!/profile';
            }, function errorCallback(error) {
                console.log('error', error);
                $window.location.href = '#!/register';
            }); //end post call
        }; //end $scope.login

    } //end function
]); //end LoginController
