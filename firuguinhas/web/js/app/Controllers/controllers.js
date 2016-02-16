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
app.controller('AboutCtrl', ['$rootScope', '$scope', '$location', 'UsuarioService',
    function($rootScope, $scope, $location, UsuarioService){
		$rootScope.activetab = $location.path();
		
		$scope.items = UsuarioService.getUsers();
		
		$scope.refresh = function(){
			UsuarioService.getUsers().then(function(users){
				$scope.items = users;
			});
		};
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
app.controller('SignUpCtrl',['$rootScope', '$scope', '$location', 'UsuarioService', 
    function($rootScope, $scope, $location, UsuarioService){
		$rootScope.activetab = $location.path();
		
		$scope.signup = function(){
			console.log("SignUp:");
			
			if(UsuarioService.signup($scope.user, $scope.name, $scope.pass)){
				console.log("Autenticado com sucesso!");
				$rootScope.autenticado = true;
				$rootScope.usuario = $scope.user;
				$location.path('/');				
			}else{
				console.log("Nao autenticado!");
			}
		};
	}
]);
