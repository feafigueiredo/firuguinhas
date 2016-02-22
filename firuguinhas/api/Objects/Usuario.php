<?php
class Usuario{
	// object properties
	public $id;
	public $user;
	public $points;
	
	public function log(){
		error_log("(#)ID: " . $this->id . "\n(#)User: " . $this->user . "\n(#)Points: " . $this->points);
	}
}
?>