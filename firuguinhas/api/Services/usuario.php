<?php
// get database connection
include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Config/Database.php';
 
$database = new Database();
$db = $database->getConnection();
 
// instantiate product object
include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Objects/UsuarioDAO.php';
$user = new UsuarioDAO($db);


if($_SERVER['REQUEST_METHOD'] == 'POST'){
	// get posted data
	$data = json_decode(file_get_contents("php://input")); 
	
	foreach($data as $obj){
		$user->user = $obj["user"];
		$user->name = $obj["name"];
		$user->pass = $obj["pass"];
		     
		// create the product
		if($user->insert()){
		    echo "Product was created.";
		}
		 
		// if unable to create the product, tell the user
		else{
		    echo "Unable to create product.";
		}
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