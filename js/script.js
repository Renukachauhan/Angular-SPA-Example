var myApp = angular.module('myApp', ['ngRoute']);
 
// configure routes
 
myApp.config(function($routeProvider) {   
    $routeProvider
   
  
    
    
   
        .when('/home', {
            templateUrl : 'pages/home.html'
        })
        .when('/about', {
            templateUrl : 'pages/about.html'
        })
        .when('/services', {
            templateUrl : 'pages/services.html'
        });
});


