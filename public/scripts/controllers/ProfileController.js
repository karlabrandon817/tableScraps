angular.module('myApp').controller('ProfileController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    console.log('in ProfileController');

    $scope.checkLogin = function() {
        $http.get('/auth')
            .then(function successCallback(response) {
                console.log('success', response);
                if (response.status === 200) {
                    $scope.displayLikes();
                    $scope.displayDislikes();
                }
            }, function errorCallback(error) {
                console.log('error occurred!');
                $window.location.href = '#!/login';
            }); //end $scope.checkLogin

        $scope.displayLikes = function() {
            $http.get('/userInfo')
                .then(function(response) {
                    console.log('likes response --->', response);
                    $scope.likes = response.data;
                }); //end $http.get
        }; //end $scope.displayLikes

        $scope.displayDislikes = function() {
            $http.get('/dislike')
                .then(function(response) {
                    console.log('dislikes response --->', response);
                    $scope.dislikes = response.data;
                }); //end $http.get
        }; //end $scope.displayDislikes


        $scope.deleteItem = function(food) {
          console.log('delete item----->', food);
            // $http.delete('/item/' + id)
            //     .then(function(response) {
            //         console.log('delete hit', response);
            //         if (response.data.message === 'Not your item!') {
            //             alert(response.data.message);
            //         }
            //         $scope.displayItems();
            //     }).catch(function(response) {
            //         console.log('delete error', response);
            //         if (response.status === 401) {
            //             $window.location.href = '#!/login';
            //         }
            //     });
        };

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
            }); //end $http.get
        }; //end $scope.logout
    }; //end checkLogin function
    $scope.checkLogin();

}]); //end ProfileController
