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
    }; //end $scope.checkLogin
    $scope.checkLogin();

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

}]); //end ResultsController
