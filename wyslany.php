
    <?php
$con = new mysqli("127.0.0.1", "root", "", "kapoki");
$i=$_GET['ii'];
$u=$_GET['uu'];
$ula=$_GET['ula'];

$sql = "UPDATE buty SET Firma='$i', Nazwa='$u'  WHERE ID='$ula'";
$wynik=$con->query($sql);

$q="SELECT * FROM buty";
$wynik=$con->query($q);
if($wynik=$con->query($q))
    while($row=$wynik->fetch_array())
echo($row[0] . ";" . $row[1] . ";" . $row[2]  ."<br/>");
?>
</body>
</html>