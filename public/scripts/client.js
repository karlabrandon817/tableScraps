var myApp = angular.module('myApp', ['ngRoute']);
angular.module('myApp.controllers', []);

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
            controller: 'RegisterController'
        })
        .otherwise({
            redirectTo: '/home'
        }); //end routes
}]); //end routeProvider

myApp.controller('AddController', ['$scope', '$http', function($scope, $http) {
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

myApp.controller('RegisterController', ['$scope', '$http',
    function($scope, $http) {
        console.log('inside register controller');

        $scope.register = function() {
            var petInfo = {
                username: $scope.username,
                password: $scope.password,
                pet_name: $scope.pet_name
            };
            console.log(petInfo);

            // $http({
            //   method: 'POST',
            //   url: '/register',
            //   data: userInfo
            // }).then(function successCallback(response) {
            //   console.log('success', response);
            //   $window.location.href = '#!/login';
            // }, function errorCallback(error) {
            //   console.log('error occurred!');
            // });
        };

    }
]);
