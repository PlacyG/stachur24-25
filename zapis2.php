<?php

$cz = $_GET['czapka'];
$na = $_GET['naszyjnik'];
$ts = $_GET['Tshirt'];
$sp = $_GET['Spodnie'];
$bu = $_GET['Buty'];
$zmienne = $cz . ", " . $na . ", " . $ts .  ", " . $sp . ", " . $bu;
$fp = fopen("ubraniazapis.txt", "w");

fputs($fp, $zmienne);
fclose($fp);

echo "<a href='zapis3.php'>kolejna strona</a> "
?>