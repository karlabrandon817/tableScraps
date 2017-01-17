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
