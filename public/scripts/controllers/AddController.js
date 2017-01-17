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
        };
        $http.post('/addFood', itemToSend)
            .then(function(response) {
                console.log('Item Added');
            }).catch(function(response) {
                console.log('PSYCHE: ', response);
                if (response.status === 401) {
                    $window.location.href = '#!/login';
                }

            });
        $scope.food_type = '';
        $scope.food_pic = '';
        $scope.safeToEat = '';
        $scope.benefits = '';
    };

}]); //end AddController
