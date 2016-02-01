/*
 ******************************************************************************
 * Auth
 ******************************************************************************
 */
app.controller('AuthCtrl', function($rootScope, $scope){
  $rootScope.autenticado = false;
  
  $rootScope.logout = function(){
	console.log("Loging off!");
    $rootScope.autenticado = false;	  
  };
});

/*
 ******************************************************************************
 * Home
 ******************************************************************************
 */
app.controller('HomeCtrl', function($rootScope, $location)
{
  $rootScope.activetab = $location.path();
});
 
/*
 ******************************************************************************
 * About
 ******************************************************************************
 */
app.controller('AboutCtrl', ['$rootScope', '$scope', '$location', '$UsuarioService',
    function($rootScope, $scope, $location, $UsuarioService){
		$rootScope.activetab = $location.path();
		$scope.sendPost = function(){
			$UsuarioService.signup(user, name, pass);
		};

		$UsuarioService.get();
  
});

/*
 ******************************************************************************
 * Contact
 ******************************************************************************
 */
app.controller('ContactCtrl', ['$rootScope', '$location', 
    function($rootScope, $location){
		$rootScope.activetab = $location.path();
	}
]);

/*
 ******************************************************************************
 * Login
 ******************************************************************************
 */
app.controller('LoginCtrl',['$rootScope', '$scope', '$location',
    function($rootScope, $scope, $location){
		$rootScope.activetab = $location.path();
		
		$scope.login = function(){
			console.log("Login:");
			console.log("User: " + $scope.user);
			console.log("Pass: " + $scope.pass);
			$rootScope.autenticado = true;
			$rootScope.user = $scope.user;
			$location.path('/');
		};
	}
]);	

/*
 ******************************************************************************
 * Sign Up
 ******************************************************************************
 */
app.controller('SignUpCtrl',['$rootScope', '$scope', '$location', '$userService', 
    function($rootScope, $scope, $location, $userService){
		$rootScope.activetab = $location.path();
		
		$scope.entrar = function(){
			console.log("SignUp:");
			console.log("User: " + $scope.user);
			console.log("Name: " + $scope.name);
			console.log("Pass: " + $scope.pass);
			$rootScope.autenticado = true;
			$rootScope.usuario = $scope.usuario;
			$location.path('/');
		};
	}
]);
