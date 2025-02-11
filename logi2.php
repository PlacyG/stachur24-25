<?php
session_start();
$log=$_SESSION['login'];
$has=$_SESSION['haslo'];

echo $log;
echo "<br>";
echo $has;


?>