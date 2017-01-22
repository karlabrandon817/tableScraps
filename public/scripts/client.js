var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/addFood', {
            templateUrl: 'views/partials/addFood.html',
            controller: 'AddController'
        })
        .when('/home', {
            templateUrl: 'views/partials/home.html',
            controller: 'HomeController'
        })
        .when('/login', {
            templateUrl: 'views/partials/login.html',
            controller: 'LoginController'
        })
        .when('/profile', {
            templateUrl: 'views/partials/profile.html',
            controller: 'ProfileController'
        })
        .when('/register', {
            templateUrl: 'views/partials/register.html',
            controller: 'RegisterController'
        })
        .when('/results', {
            templateUrl: 'views/partials/results.html',
            controller: 'ResultsController'
        })
        .otherwise({
            redirectTo: '/home',
        }); //end routes
}]); //end routeProvider
