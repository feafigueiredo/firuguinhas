<?php
// Aqui voce se conecta ao banco
$mysqli = new mysqli("mysql.hostinger.com.br", "u474620514_adm", "H0st1ng3r!", "u474620514_db");

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	
	// Le o json diretamente dos dados enviados no POST (input)
	$json = file_get_contents('php://input');
	$obj_php = json_decode($json); // $obj_php agora eh exatamente o objeto/array enviado pelo servidor
	
	foreach ( $obj_php as $u) { 
	   $sql = "INSERT INTO usuario (user, name, pass) VALUES " +
	   		"('" . $u->nome . "', " +
	   		"'" . $u->user . "', " +
	   		"md5('" . $u->pass . "'))"; 
	   
	   echo $sql;
	   
	   $query = $mysqli->query($sql);
	}


}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
	// Executa uma consulta que pega cinco noticias
	$sql = "SELECT name FROM usuario"; 
	echo $sql . "<br>";
	
	if(!$query = $mysqli->query($sql)){
		echo "Falhei na consulta.";
	}else{
		echo $query . "<br>";
	}
	
	if($query === FALSE) {
	    die(mysql_error()); 
	}
	
	
	$arr = array();
	while ($dados = $query->fetch_array()) {
		echo $dados[name] . "<br>";
		array_push($arr, $dados[name]);
	}
	
	echo json_encode($arr);
}

mysqli_close($mysqli);
echo "Fechei a conexao!";
?>