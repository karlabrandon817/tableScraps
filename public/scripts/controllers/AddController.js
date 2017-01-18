angular.module('myApp').controller('AddController', ['$scope', '$http', function($scope, $http) {
    console.log('in AddController');

    $scope.addItem = function() {
        var itemToSend = {
            food_type: $scope.food_type,
            food_pic: $scope.food_pic,
            safeToEat: $scope.safeToEat,
            benefits: $scope.benefits,
            toxicity_level: $scope.toxicity_level,
            harms: $scope.harms
        };//end itemToSend
        $http.post('/addFood', itemToSend)
            .then(function(response) {
                console.log('Item Added');
            }).catch(function(response) {
                console.log('PSYCHE: ', response);
            });//end $http.post
    };//end $scope.addItem

}]); //end AddController
