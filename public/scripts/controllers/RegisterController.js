angular.module('myApp').controller('RegisterController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {

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
                console.log('success', response);
                $window.location.href = '#!/confirmation';
            }, function errorCallback(error) {
                console.log('error occurred!');
            });
        }; //end $http post
    }

]); //end RegisterController
