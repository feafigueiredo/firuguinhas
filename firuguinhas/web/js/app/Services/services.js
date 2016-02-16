'use strict';
 
app.factory('UsuarioService', ['$http', function($http){
	var baseUrl = "/firuguinhas/api/Services/usuario.php";

	function signup(user, name, pass) {
		console.log("Sign Up - Service")
	
		var data = 
			{
				'newUser' : {
					'user': user,
					'name': name,
					'pass': pass
				}
			};
		
        $http.post(baseUrl, data)
        	.success(function(data, status) {
        		return true;
        	})
        	.error(function(){
        		return false;
        	});
	};
	
	function getUsers(){
		console.log("Get Users - Service")
		
		var data = "";
		$http.get(baseUrl, data)
    	.then(function(response) {
    		console.log("Status: " + response.status);
    		console.log("  Data: " + response.data );
    		console.log("Header: " + response.headers );
    		console.log("  Text: " + response.statusText );
    		
    		return response.data;
        });
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