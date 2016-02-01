app.controller('AutenticacaoCtrl', function($rootScope, $scope){
  $rootScope.autenticado = false;
  
  $rootScope.logout = function(){
	console.log("Loging off!");
    $rootScope.autenticado = false;	  
  };
});

app.controller('HomeCtrl', function($rootScope, $location)
{
  $rootScope.activetab = $location.path();
});
 
app.controller('SobreCtrl', function($rootScope, $scope, $location, $http)
{
  $rootScope.activetab = $location.path();


  $scope.sendPost = function() {
        console.log("Nome recebido:" + $scope.nome);
        var data = {nome: $scope.nome};

        $http.post("/MyTest/Services/usuario.php", data).success(function(data, status) {
            $location.path('/');
        })
    } 

$http({
  method: 'GET',
  url: '/MyTest/Services/usuario.php'
}).then(function successCallback(response) {
    $rootScope.items = response.data;
  }, function errorCallback(response) {
    $rootScope.items = ['Teste', 'Teste2'];
  });
  
});
 
app.controller('ContatoCtrl', function($rootScope, $location)
{
  $rootScope.activetab = $location.path();
});

app.controller('LoginCtrl', function($rootScope, $scope, $location){
	$rootScope.activetab = $location.path();
	
	$scope.entrar = function(){
		console.log("Login:");
		console.log("User: " + $scope.usuario);
		console.log("Pass: " + $scope.senha);
		$rootScope.autenticado = true;
		$rootScope.usuario = $scope.usuario;
		$location.path('/');
	};
});	