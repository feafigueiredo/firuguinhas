<?php
// get database connection
include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Config/Database.php';

include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Config/Database.php';
 
$database = new Database();
$db = $database->getConnection();
 
// instantiate dao object
include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/DAO/UsuarioDAO.php';
$userDao = new UsuarioDAO($db);

include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Objects/Usuario.php';
$user = new Usuario();


error_log( "########## Services - Usuario ##########");

switch($_SERVER['REQUEST_METHOD']){
	case 'POST': 
	// get posted data
	$json = file_get_contents("php://input");
	error_log( "POST:");

	$obj = json_decode($json); 
	
	$jwt = new JWT($obj->token);
	
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
	break;// POST

	case 'GET':
	error_log("GET");
	
	$user->user = $_GET["user"];

	error_log("(#)User: " . $user->user);
	$userDao->userData = $user;
	
	if($userDao->get()){
		echo json_encode($userDao->list);
	}
	break; // GET
	
	default:
		error_log( "Solicitacao invalida." );
		http_response_code(404);
		
}
?>