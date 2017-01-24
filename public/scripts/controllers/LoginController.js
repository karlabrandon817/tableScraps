angular.module('myApp').controller('LoginController', ['$scope', 'ngDialog', '$http', '$window', function($scope, ngDialog, $http, $window) {
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
            $window.location.href = '/';
        }, function errorCallback(error) {
            console.log('error', error);
            if (error.data === "Unauthorized") {
                //alert('Incorrect login credentials. If you do not have an account, head to the \'Register\' tab to signup.');
              $scope.loginError();
            }
        }); //end post call
    }; //end $scope.login

    $scope.loginError = function () {
        ngDialog.open({ template: 'templateId' });
    };//end loginError function

    $scope.checkLogin = function() {
        $http.get('/auth')
            .then(function successCallback(response) {
                console.log('success', response);
                if (response.status === 200) {
                    $window.location.href = '#!/profile';
                }
            }, function errorCallback(error) {
                console.log('error occurred!');
                $window.location.href = '#!/login';
            }); //end $scope.checkLogin
          }; //end checkLogin function
          $scope.checkLogin();

}]); //end LoginController
