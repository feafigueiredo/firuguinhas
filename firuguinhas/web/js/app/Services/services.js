'use strict';
 
app.service('UsuarioService', ['$http', function($http){
	var baseUrl = "/api/usuario/";

	this.signup = function(token) {
		console.log("Sign Up - Service")
	
		var data = { 'token': token };
		
        return $http.post(baseUrl, data)
	        .then(
	        	function(response) {
	        		console.log("Status: " + response.status);
	    			return true;
	        	},
	        	function(response){
	        		console.log("Status: " + response.status);
	        		return false;
	        	}
	        );
	};
	
	this.getUsers = function(){
		console.log("Get Users - Service");
		
		var data = "";
		return $http.get(baseUrl, data)
	    	.then(function(response) {
	    		console.log("Users: " + response.data.length);
	    		
	    		return response.data;
	        });
	};
	
}]);