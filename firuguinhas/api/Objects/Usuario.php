<?php
class Usuario{
	// object properties
	public $user;
	public $name;
	public $pass;
	
	public function log(){
		error_log("(#)User: " . $this->user . "\n(#)Name: " . $this->name . "\n(#)Pass: " . $this->pass);
	}
}
?>