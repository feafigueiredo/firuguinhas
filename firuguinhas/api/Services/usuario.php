<?php
// get database connection
include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Config/Database.php';
 
$database = new Database();
$db = $database->getConnection();
 
// instantiate dao object
include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/DAO/UsuarioDAO.php';
$userDao = new UsuarioDAO($db);

include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Objects/Usuario.php';
$user = new Usuario();


error_log( "########## Services - Usuario ##########");


if($_SERVER['REQUEST_METHOD'] == 'POST'){
	// get posted data
	$json = file_get_contents("php://input");
	error_log( "POST:");

	$obj = json_decode($json); 
	
	$user->user = $obj->user;
	$user->name = $obj->name;
	$user->pass = $obj->pass;
	
	$user->log();
	
	$userDao->userData = $user;
	
	// create the product
	if($userDao->insert()){
	    error_log(  "User was created." );
	    http_response_code(200);
	}
	 
	// if unable to create the product, tell the user
	else{
	    error_log( "Unable to create user." );
	    http_response_code(403);
	}
}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
	error_log("GET");
	
	$user->user = $_GET["user"];
	$user->name = $_GET["name"];

	error_log("(#)User: " . $user->user . "\n(#)Name: " . $user->name);
	$userDao->userData = $user;
	
	if($userDao->get()){
		echo json_encode($userDao->list);
	}

}
?>