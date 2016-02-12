<?php
// get database connection
include_once dirname(__FILE__).'/Config/Database.php';
 
$database = new Database();
$db = $database->getConnection();
 
// instantiate product object
include_once dirname(__FILE__).'/Objects/UsuarioDAO.php';
$user = new UsuarioDAO($db);


if($_SERVER['REQUEST_METHOD'] == 'POST'){
	// get posted data
	$data = json_decode(file_get_contents("php://input")); 
	 
	// set product property values
	$product->user = $data["user"];
	$product->name = $data["name"];
	$product->pass = $data["pass"];
	     
	// create the product
	if($product->create()){
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

	if($user->get()){
		echo json_encode($user->list);
	}else{
		echo "Error.";
	}

	
}
?>