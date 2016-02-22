<?php 
class JWT{ // specify your own database credentials 
	public $conn; // get the database connection 

	private $key = ""; 
	private $token;
	
	private $header;
	private $payload;
	private $signature;
	
	// constructor with $token received
	public function __construct($token){
		$this->token = $token;
		
		list($hr, $pd, $se) = explode(".", $token);
		
		$this->header = base64_decode($hr);
		$this->payload = base64_decode($pd);
		
		error_log($this->header);
	}
}
?>