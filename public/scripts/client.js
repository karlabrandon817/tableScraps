var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/addFood', {
            templateUrl: 'views/partials/addFood.html',
            controller: 'AddController'
        })
        .when('/home', {
            templateUrl: 'views/partials/home.html'
        })
        .when('/login', {
            templateUrl: 'views/partials/login.html',
        })
        .when('/register', {
            templateUrl: 'views/partials/register.html',
        })
        .otherwise({
            redirectTo: '/home'
        }); //end routes
}]); //end routeProvider

myApp.controller('AddController', ['$scope', '$http',  function($scope, $http){
  console.log('in AddController');

  $scope.addItem = function(){
    var itemToSend = {
      food_type: $scope.food_type,
      food_pic: $scope.food_pic,
      safeToEat: $scope.safeToEat,
      benefits: $scope.benefits,
      toxicity_level: $scope.toxicity_level,
      harms: $scope.harms
    };
    $http.post('/addFood', itemToSend)
    .then(function(response){
      console.log('POST hit');
    }).catch(function(response){
      console.log('PSYCHE: ', response);
      if(response.status === 401) {
        $window.location.href = '#!/login';
      }

    });
  };
}]);//end AddController
