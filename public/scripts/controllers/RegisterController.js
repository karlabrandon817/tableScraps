angular.module('myApp').controller('RegisterController', ['$scope', 'ngDialog', '$http', '$window', function($scope, ngDialog, $http, $window) {
    console.log('in RegisterController');

    $scope.register = function() {
        var petInfo = {
            username: $scope.username,
            password: $scope.password,
            pet_name: $scope.pet_name
        }; //end petInfo
        console.log(petInfo.username);
        $http({
            method: 'POST',
            url: '/userInfo',
            data: petInfo
        }).then(function successCallback(response) {
            console.log('success', response.status);
            if (response.status === 201) {
                //alert('Your profile has been created. Login to continue.');
                $scope.registerSuccess();
                $window.location.href = '#!/login';
            }
        }, function errorCallback(error) {
            if (error.status === 500) {
                console.log('error occurred!');
              //  alert('Username in use. Please choose new username.');
                $scope.registerError();
            }
        }); //end $http.post
    }; //end $scope.register
    $scope.registerError = function () {
        ngDialog.open({ template: 'errorId' });
    };//end registerError function

    $scope.registerSuccess = function () {
        ngDialog.open({ template: 'successId' });
    };//end registerSuccess function

}]); //end RegisterController
