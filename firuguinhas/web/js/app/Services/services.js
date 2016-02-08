'use strict';
 
app.factory('UsuarioService', ['$http', function($http){
	var baseUrl = "/firuguinhas/api/usuario.php";

	function signup(user, name, pass) {
		console.log("Sign Up - Service")
	
		var data = 
			{
				'user': user,
				'name': name,
				'pass': pass
			};

		console.log("data: " + data);
		
        $http.post(baseUrl, data)
        	.success(function(data, status) {
        		return true;
        	})
        	.error(function(){
        		return false;
        	});
	};
	
	function getUsers(){
		var data = "";
		$http.get(baseUrl, data)
    	.success(function(data, status) {
    		return response.data;
    	})
    	.error(function(){
    		return;
    	});
		/*
		$http({
			  method: 'GET',
			  url: baseUrl
			}).then(function successCallback(response) {
			    $rootScope.items = response.data;
			  }, function errorCallback(response) {
			    $rootScope.items = ['Teste', 'Teste2'];
			  });
			  */
	};
	
	return {
		signup: function(user, name, pass) {
            signup(user, name, pass)
        },
        signin: function(user, pass) {
            signin(user, pass)
        },
        logout: function(success) {
        	delete $localStorage.token;
        },
        getUsers: function(success, error) {
        	getUsers();
        }
    };
}]);