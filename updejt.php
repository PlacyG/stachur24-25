<form action= "sklepobuwia.php" method="get" enctype="text/plain">

<?php
$con = new mysqli("127.0.0.1","root","","kapoki");
 
$q="SELECT * FROM buty";
 
if($wynik=$con->query($q))
while($row=$wynik->fetch_array())

echo("<input type='radio' name= 'lala' value=".$row[0].">" . $row[1] . ";" . $row[2] . ";" . $row[3] . "<br/>" . "<br/>" . "<br/>");

?>

<input type="submit" value= "Wysyłanie formularza">;
</form>