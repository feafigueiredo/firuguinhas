<?php

include_once $_SERVER['DOCUMENT_ROOT'].'/firuguinhas/api/Objects/Usuario.php';

class UsuarioDAO{
      
    // database connection and table name
    private $conn;
    private $table_name = "Usuario";

    public $list;
    public $userData;
    
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    public function insert(){
    	 
    	$user = $this->userData;
    	
    	// query to insert record
    	$query = "INSERT INTO $this->table_name
            SET
    			codigo=:codigo, 
    			nome=:nome";
    	 
    	// prepare query
    	$stmt = $this->conn->prepare($query);
    
    	// bind values
    	$stmt->bindParam(":codigo", $user->id);
    	$stmt->bindParam(":nome", $user->name);
    	 
    	// execute query
    	if($stmt->execute()){
    		return true;
    	}else{
    		$arr = $stmt->errorInfo();
    		
    		foreach ($arr as $line){
	    		error_log($line);
    		}
    		return false;
    	}
    }
    
    public function get(){
    	
    	$user = $this->userData;
    	
    	$query = "SELECT codigo, usuario, pontos FROM $this->table_name";
    	if($user->user != null){
    		$query = $query . " WHERE usuario = '$user->user'";
    	}
    	
    	if(!$rs = $this->conn->query($query)){
    		return false;
    	}
    	
    	$this->list = array();

    	foreach ($rs as $dados){
    		$newUser = new Usuario();
    		
    		$newUser->user = $dados[user];
    		$newUser->name = $dados[name];
    		
    		array_push($this->list, $newUser);
    	}
    	
    	return true;
    }
}
?>