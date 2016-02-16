'use strict';
 
app.service('UsuarioService', ['$http', function($http){
	var baseUrl = "/firuguinhas/api/Services/usuario.php";

	this.signup = function(user, name, pass) {
		console.log("Sign Up - Service")
	
		var data = 
			{
				'user': user,
				'name': name,
				'pass': pass
			};
		
        $http.post(baseUrl, data)
        	.success(function(data, status) {
        		return true;
        	})
        	.error(function(){
        		return false;
        	});
	};
	
	this.getUsers = function(){
		console.log("Get Users - Service")
		
		var data = "";
		return $http.get(baseUrl, data)
    	.then(function(response) {
    		console.log("Users: " + response.data.length);
    		
    		return response.data;
        });
	};
}]);