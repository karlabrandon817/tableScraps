angular.module('myApp').controller('HomeController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    console.log('in HomeController');

    $scope.search = function() {
        console.log('search button clicked');
        var searchToSend = {
            food_type: $scope.searchedFood.toLowerCase()
        }; //end searchToSend
        console.log('searchToSend:', searchToSend);


        $http.post('/search', searchToSend)
            .then(function(response) {
                console.log(response);
                  $scope.foods = response.data;
            }).catch(function(response) {
                console.log(response);
            });
    }; //end scope.search

}]); //end HomeController
