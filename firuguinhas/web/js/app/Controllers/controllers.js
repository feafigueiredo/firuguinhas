/*
 ******************************************************************************
 * Auth
 ******************************************************************************
 */
app.controller('AuthCtrl', ['$rootScope', '$scope', 
    function($rootScope, $scope){
		console.log("Initialized!");
		$scope.autenticado = false;
		
		$scope.onSignIn = function(googleUser) {
			  var profile = googleUser.getBasicProfile();
			
			  console.log("Logado como: " + profile.getName());
			  
			  $rootScope.email = profile.getEmail();
			  $rootScope.image = profile.getImageUrl();
			  $rootScope.user = profile.getName();
			  
			  $scope.autenticado = true;	
		};

		window.onSignIn = $scope.onSignIn;
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
		
		$scope.refresh = function(){
			UsuarioService.getUsers().then(function(users){
				$scope.items = users;
			});
		};
		
		$scope.refresh();
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
			
			UsuarioService.signup($scope.user).then(function(resp){
				if(resp){
					console.log("Cadastrado com sucesso!");
					$rootScope.autenticado = true;
					$rootScope.usuario = $scope.user;
					$location.path('/');				
				}else{
					console.log("Nao cadastrado!");
				}
			})
		
		};
	}
]);
