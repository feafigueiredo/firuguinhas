<?php 
class Database{ // specify your own database credentials 
	public $conn; // get the database connection 

	private $host = "mysql.hostinger.com.br"; 
	private $db_name = "u474620514_db"; 
	private $username = "u474620514_adm"; 
	private $password = "H0st1ng3r!"; 
	
	public function getConnection(){ 
		
		$this->conn = null;
         
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
         
        return $this->conn;
    }
}
?>