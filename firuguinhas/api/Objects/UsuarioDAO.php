<?php
class UsuarioDAO{
      
    // database connection and table name
    private $conn;
    private $table_name = "Usuario";
      
    // object properties
    public $user;
    public $name;
    public $pass;
    public $list;
    
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
    
    public function create(){
    	 
    	// query to insert record
    	$query = "INSERT INTO " . $this->table_name . "
            SET
    			user=:user, 
    			name=:name, 
    			pass=:pass";
    	 
    	// prepare query
    	$stmt = $this->conn->prepare($query);
    
    	// bind values
    	$stmt->bindParam(":user", $this->user);
    	$stmt->bindParam(":name", $this->name);
    	$stmt->bindParam(":pass", $this->pass);
    	 
    	// execute query
    	if($stmt->execute()){
    		return true;
    	}else{
    		echo "<pre>";
    		print_r($stmt->errorInfo());
    		echo "</pre>";
    
    		return false;
    	}
    }
    
    public function get(){
    	$query = "SELECT user, name FROM " . $this->table_name;
    	if($this->user != null){
    		$query = $query . " WHERE user = '" . user . "'";
    	}
    	
    	if(!$rs = $this->conn->query($query)){
    		return false;
    	}
    	
    	$this->list = array();

    	foreach ($rs as $dados){
    		$newUser = new UsuarioDAO($this->db);
    		
    		$newUser->user = $dados[user];
    		$newUser->name = $dados[name];
    		
    		array_push($list, $newUser);
    	}
    	
    	return true;
    }
}
?>