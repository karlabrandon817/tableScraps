myApp.controller('RegisterController', ['$scope', '$http',
    function($scope, $http) {
        console.log('inside register controller');

        $scope.register = function() {
            var petInfo = {
                username: $scope.username,
                password: $scope.password,
                pet_name: $scope.pet_name
            };
            console.log(petInfo);

            // $http({
            //   method: 'POST',
            //   url: '/register',
            //   data: userInfo
            // }).then(function successCallback(response) {
            //   console.log('success', response);
            //   $window.location.href = '#!/login';
            // }, function errorCallback(error) {
            //   console.log('error occurred!');
            // });
        };

    }
]);
