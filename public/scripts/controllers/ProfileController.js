angular.module('myApp').controller('ProfileController', ['$scope', '$http', '$window',
    function($scope, $http, $window) {
        console.log('in ProfileController');

        $scope.displayLikes = function(){
          $http.get('/userInfo')
          .then(function(response){
            console.log('likes response --->', response);
            $scope.likes = response.data;
          });
        };
        $scope.displayLikes();



        $scope.logout = function() {
            console.log('logout button clicked');
            $http({
                method: 'GET',
                url: '/logout',
            }).then(function successCallback(response) {
                // console.log(response);
                $window.location.href = '#!/home';
            }, function errorCallback(error) {
                console.log('error', error);
                //  $window.location.href = '#!/register';
            });
        };
    }
]); //end ProfileController
