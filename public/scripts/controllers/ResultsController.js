angular.module('myApp').controller('ResultsController', ['$scope', 'dogFactory', '$http', '$window', function($scope, dogFactory, $http, $window) {
    console.log('in Results Controller');

    $scope.foods = dogFactory.foods;

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

            $scope.likeFood = function(index) {
                console.log('like button clicked', $scope.foods[index], sessionStorage.getItem('username'));
                $http({
                    method: 'PUT',
                    url: '/userInfo',
                    data: {
                        food_info: $scope.foods[index],
                        username: sessionStorage.getItem('username')
                    } //end http.put
                }).then(function successCallback(response) {
                    //  $window.location.href = '#!/profile';
                }, function errorCallback(error) {
                    console.log('error', error);
                    // $window.location.href = '#!/register';
                }); //end post call
            };

            $scope.dislikeFood = function(index) {
                console.log('dislike button clicked', $scope.foods[index], sessionStorage.getItem('username'));
                $http({
                    method: 'PUT',
                    url: '/dislike',
                    data: {
                        food_info: $scope.foods[index],
                        username: sessionStorage.getItem('username')
                    } // end http.put
                }).then(function successCallback(response) {
                    //  $window.location.href = '#!/profile';
                }, function errorCallback(error) {
                    console.log('error', error);
                    // $window.location.href = '#!/register';
                }); //end post call
            }; //end $scope.dislikeFood


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
        }); //end $http.get

    }; //end $scope.logout

    $scope.search = function() {
        console.log('search button clicked');
        if ($scope.searchedFood.length < 1) {
            return;
        }
        var slicedFood = $scope.searchedFood.slice(0, 3);
        console.log(slicedFood);
        var searchToSend = {
            food_type: slicedFood.toLowerCase()
        }; //end searchToSend
        console.log('searchToSend:', searchToSend);

        $http.post('/search', searchToSend)
            .then(function(response) {
                console.log('search returning', response);
                $scope.foods = response.data;
                if (response.data[0].safeToEat === false) {
                    alert(response.data[0].food_type + ' ' + 'may be harmful to your dog');
                }
                if (response.status === 200) {
                    $scope.result = true;
                }
                $scope.searchedFood = '';
            }).catch(function(response) {
                console.log(response);
            }); //end http.post
    }; //end scope.search
}; //end $scope.checkLogin
$scope.checkLogin();
}]); //end ResultsController
