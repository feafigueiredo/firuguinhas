<?php 
class JWT{ // specify your own database credentials 
	
	private $aud = "";
	public $id;
	public $user;
	
	// constructor with $token received
	public function __construct($token){
		$json = file_get_contents("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=$token");
		$jwt = json_decode($json);
		
		if($jwt->aud == $this->aud){
			$this->id = $jwt->sub;
			
			$u = explode("@", $jwt->email);
			$this->user = $u[0];
		}else{
			$this->id = null;
		}
		
	}

}
?>
