angular.module('myApp').controller('AddController', ['$scope', '$http', '$window', function($scope, $http, $window) {
    console.log('in AddController');

    // $scope.checkLogin = function() {
    //     $http.get('/auth')
    //         .then(function successCallback(response) {
    //             console.log('success', response);
    //         }, function errorCallback(error) {
    //             console.log('error occurred!');
    //             $window.location.href = '#!/login';
    //         });
    // };
    // $scope.checkLogin();

    $scope.addItem = function() {
        var itemToSend = {
            food_type: $scope.food_type,
            food_pic: $scope.food_pic,
            safeToEat: $scope.safeToEat,
            benefits: $scope.benefits,
            toxicity_level: $scope.toxicity_level,
            harms: $scope.harms
        }; //end itemToSend
        $http.post('/addFood', itemToSend)
            .then(function(response) {
                console.log('Item Added');
            }).catch(function(response) {
                console.log('PSYCHE: ', response);
            }); //end $http.post
    }; //end $scope.addItem

}]); //end AddController
