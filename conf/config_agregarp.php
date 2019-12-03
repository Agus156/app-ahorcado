<?php
/**
 * Conectamos a la base de datos
 */
$bd_host = "localhost";
$bd_nombre = "ahorcado";
$bd_usuario = "margarito";
$bd_password = "1234";

$conexion = @mysqli_connect($bd_host, $bd_usuario, $bd_password, $bd_nombre) or die ("no se puede conectar a la Base de Datos");

 mysqli_set_charset( $conexion, 'utf8');
 



include_once("lib/tpl.inc.php");

session_start();
$tpl = new tpl("");
?>
 