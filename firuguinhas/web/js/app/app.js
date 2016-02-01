var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);
 
   $routeProvider
 
   // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : '/Views/home.html',
      controller     : 'HomeCtrl',
   })
 
   // para a rota '/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/about', {
      templateUrl : '/Views/about.html',
      controller  : 'AboutCtrl',
   })
 
   // para a rota '/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contact', {
      templateUrl : '/Views/contact.html',
      controller  : 'ContactCtrl',
   })

    // para a rota '/login', carregaremos o template contato.html e o controller 'LoginCtrl'
   .when('/login', {
      templateUrl : '/Views/login.html',
      controller  : 'LoginCtrl',
   })
   
   // para a rota '/login', carregaremos o template contato.html e o controller 'LoginCtrl'
   .when('/signup', {
      templateUrl : '/Views/signup.html',
      controller  : 'SignUpCtrl',
   })
   
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});