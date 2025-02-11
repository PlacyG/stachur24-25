<?php
 session_start();
 $login = $_SESSION['login'];
 $haslo = $_SESSION['haslo'];

 echo $login;
 echo "</br>";
 echo $haslo;
?>