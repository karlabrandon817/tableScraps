angular.module('myApp').controller('ResultsController', ['$scope', 'dogFactory', '$http', '$window', function($scope, dogFactory, $http, $window) {
  console.log('in Results Controller');

$scope.foods = dogFactory.foods;

}]); //end ResultsController
