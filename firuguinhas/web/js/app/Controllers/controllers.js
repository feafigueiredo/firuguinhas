/*
 ******************************************************************************
 * Auth
 ******************************************************************************
 */
app.controller('AuthCtrl', ['$rootScope', '$scope', 
    function($rootScope, $scope){
		console.log("Initialized!");
		$rootScope.autenticado = false;
  
		$scope.logout = function(){
			console.log("Loging off!");
			$rootScope.autenticado = false;	  
		};

	}
]);

/*
 ******************************************************************************
 * Home
 ******************************************************************************
 */
app.controller('HomeCtrl', ['$rootScope', '$location', 
    function($rootScope, $location){
		$rootScope.activetab = $location.path();
	}
]);
 
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

		$scope.items = $UsuarioService.get();
  
	}
]);

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
app.controller('SignUpCtrl',['$rootScope', '$scope', '$location', '$UserService', 
    function($rootScope, $scope, $location, $UserService){
		$rootScope.activetab = $location.path();
		
		$scope.entrar = function(){
			console.log("SignUp:");
			console.log("User: " + $scope.user);
			console.log("Name: " + $scope.name);
			console.log("Pass: " + $scope.pass);
			
			if($UserService.signup($scope.user, $scope.name, $scope.pass)){
				console.log("Autenticado!");
				$rootScope.autenticado = true;
				$rootScope.usuario = $scope.usuario;
				$location.path('/');				
			}else{
				console.log("Nao autenticado!");
			}
		};
	}
]);
