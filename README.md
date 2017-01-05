# Angular-SPA-Example
Create three HTML page

Create three HTML pages Home, About, Services pages and save to 'pages' folder.

home.html

<div class="home">
    <h2>Home</h2>
    <p>Home page content here...</p>
</div>
about.html

<div class="about">
    <h2>About</h2>
    <p>About page content here...</p>
</div>
services.html

<div class="services">
    <h2>Services</h2>
    <p>Services page content here...</p>
</div>
Create JS file (js/script.js)

We can configure a route by using the when function of the $routeProvider. Specify the route first, then in a second parameter provide an object with a templateUrl property and a controller property.

var myApp = angular.module('myApp', ['ngRoute']);
 
// configure routes
 
myApp.config(function($routeProvider) {   
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'
        })
        .when('/about', {
            templateUrl : 'pages/about.html'
        })
        .when('/services', {
            templateUrl : 'pages/services.html'
        });
});
Create CSS file (css/style.js)

I just created simple css style for allignment. You can use Boostrap style or custom style.

body{
    font-family: Arial;
    font-size: 16px;
    margin: 20px 50px;
    padding: 20px 25px;
    border: 1px solid #ddd;
}
h1{ font-size: 32px; }
h2{ font-size: 28px; }
ul.menu{
    overflow: hidden;
    padding: 0;
    margin: 0;
    background: #4D4D4D;
}
ul.menu li{
    display: inline-block;
}
ul.menu li a{
    display: block;
    padding: 13px 20px;
    text-decoration: none;
    color: #fff;
}
ul.menu li a:hover{
    background: #333;
}
.contentwrap{
    text-align: center;
    background: #EEE;
    overflow: hidden;
    padding: 100px 50px;
}
Create Index page

Create a index page and call angular.min.js, angular-route.js, script.js, style.css in header. Apply Angular app (shanidkvApp) to the HTML of this application. Create a ng-view directive. ng-view is the directive that angular uses as a container to switch between views.

Save index page in root folder (See the above structure).

<!DOCTYPE HTML>
<html ng-app="myApp">
    <head>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.2.25/angular-route.js"></script>
        <script type="text/javascript" src="js/script.js"></script>
        <link rel="stylesheet" type="text/css" href="css/style.css">
    </head>
    <body>
        <h1>AngularJS Routing</h1>
        <ul class="menu"> 
            <li><a href="#/">Home</a></li>
            <li><a href="#/about">About</a></li>
            <li><a href="#/services">Services</a></li>
        </ul>
        <div class="contentwrap" ng-view>Loading...</div>
    </body>
</html>
