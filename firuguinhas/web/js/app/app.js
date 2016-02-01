var app = angular.module('app',['ngRoute']);
 
app.config(function($routeProvider, $locationProvider)
{
   // remove o # da url
   $locationProvider.html5Mode(true);
 
   $routeProvider
 
   // para a rota '#/', carregaremos o template home.html e o controller 'HomeCtrl'
   .when('/', {
      templateUrl : '/MyTest/app/Views/home.html',
      controller     : 'HomeCtrl',
   })
 
   // para a rota '#/sobre', carregaremos o template sobre.html e o controller 'SobreCtrl'
   .when('/about', {
      templateUrl : '/MyTest/app/Views/about.html',
      controller  : 'SobreCtrl',
   })
 
   // para a rota '#/contato', carregaremos o template contato.html e o controller 'ContatoCtrl'
   .when('/contact', {
      templateUrl : '/MyTest/app/Views/contact.html',
      controller  : 'ContatoCtrl',
   })

    // para a rota '/login', carregaremos o template contato.html e o controller 'LoginCtrl'
   .when('/login', {
      templateUrl : '/MyTest/app/Views/login.html',
      controller  : 'LoginCtrl',
   })
   // caso não seja nenhum desses, redirecione para a rota '/'
   .otherwise ({ redirectTo: '/' });
});