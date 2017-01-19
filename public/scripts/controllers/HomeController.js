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

    $scope.likeFood = function (index){
      console.log('like button clicked', $scope.foods[index], sessionStorage.getItem('username'));
      $http({
        method: 'PUT',
        url: '/userInfo',
        data: {
          food_info: $scope.foods[index],
          username: sessionStorage.getItem('username')
        }
      }).then(function successCallback(response) {
      //  $window.location.href = '#!/profile';
      }, function errorCallback(error) {
        console.log('error', error);
        // $window.location.href = '#!/register';
      });//end post call
    };

}]); //end HomeController
