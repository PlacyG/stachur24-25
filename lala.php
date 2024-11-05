<?php

$firma = $_GET['Firma'];
$nazwa = $_GET['Nazwa'];
$model = $_GET['Model'];
$rozmiar = $_GET['Rozmiar'];
$cena = $_GET['Cena'];

echo "$firma";
echo($nazwa);
echo($rozmiar);

$con = new mysqli("127.0.0.1","root","","kapoki");

$q="INSERT INTO `buty` (`ID`, `Firma`, `Nazwa`, `Model`, `Rozmiar`, `Cena`) VALUES (NULL, '$firma', '$nazwa', '$model', '$rozmiar', '$cena');";

$con->query($q);

?>