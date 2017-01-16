var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
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
