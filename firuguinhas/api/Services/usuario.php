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

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	// get posted data
	$json = file_get_contents("php://input");
	$error_log( "User received: " . $json);

	$obj = json_decode($json); 
	
	$user->user = $obj["user"];
	$user->name = $obj["name"];
	$user->pass = $obj["pass"];
	     
	// create the product
	if($userDao->insert()){
	    echo "Product was created.";
	}
	 
	// if unable to create the product, tell the user
	else{
	    echo "Unable to create product.";
	}
}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
	$user->user = $_GET["user"];
	$user->name = $_GET["name"];

	$userDao->userData = $user;
	
	if($userDao->get()){
		echo json_encode($userDao->list);
	}else{
		echo "Error.";
	}

	
}
?>