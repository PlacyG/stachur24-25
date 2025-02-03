<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<?php
$con = new mysqli("127.0.0.1" , "root" , "" , "coca");
$imie = $_GET['imie'];
$rozm = $_GET['rozmiar'];

$q="SELECT imie, rozmiar FROM cola where imie='$imie' and rozmiar='$rozm'";
if($wynik=$con->query($q))
while($row=$wynik->fetch_array())


if($imie=='imie' && $rozm=='rozmiar'){
  echo("nazwa" . $imie . " oraz rozmiar " . $rozm . "  sa w bazie");
}
    else{
        echo("nazwa" . $imie . " oraz rozmiar " . $rozm . "  nie sa w bazie");
}
?>

</body>
</html>