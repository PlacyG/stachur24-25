<?php 
$con = new mysqli ("127.0.0.1","root", "", "kapoki");

$q="SELECT Firma, Nazwa, Model FROM buty";
if($wynik=$con->query($q))
while ($row = $wynik->fetch_array())
echo $row["Firma"] . " ; " . $row["Nazwa"] . " ; " . $row["Model"] . "</br>";
else 
echo $con->errno . "". $conerror;
?>