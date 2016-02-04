<?php
// Aqui voce se conecta ao banco
$mysqli = new mysqli("mysql.hostinger.com.br", "u474620514_adm", "H0st1ng3r!", "u474620514_db");

if($_SERVER['REQUEST_METHOD'] == 'POST'){

// l� o json diretamente dos dados enviados no POST (input)
$json = file_get_contents('php://input');
$obj_php = json_decode($json); // $obj_php agora � exatamente o objeto/array enviado pelo servidor

foreach ( $obj_php as $u) { 
   $sql = "INSERT INTO usuario (user, name, pass) VALUES " +
   		"('" . $u->nome . "', " +
   		"'" . $u->user . "', " +
   		"md5('" . $u->pass . "'))"; 
   $query = $mysqli->query($sql);
}


}

if($_SERVER['REQUEST_METHOD'] == 'GET'){
// Executa uma consulta que pega cinco not�cias
$sql = "SELECT name FROM usuario"; 

$query = $mysqli->query($sql);

if($query === FALSE) {
    die(mysql_error()); 
}
echo $query;

$arr = array();
while ($dados = $query->fetch_array()) {
  array_push($arr, $dados[name]);
}

echo json_encode($arr);
}

mysqli_close($mysqli);

?>