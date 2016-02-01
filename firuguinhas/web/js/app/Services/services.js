'use strict';
 
app.factory('UsuarioService', ['$http', function($http){
	var baseUrl = "/firuguinhas/api/usuario.php";

	function signup(user, name, pass) {
		console.log("Sign Up - Service")
		console.log("User:" + user);
		console.log("Name:" + name);
		console.log("Pass:" + pass);
		
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
	
	function get(){
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
}]);