<?php



$dane = fread(fopen("ubraniazapis.txt", "r"), filesize("ubraniazapis.txt"));
echo $dane;
?>

