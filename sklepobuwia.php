
<form action="wyslany.php" method="get">
    <?php
    $con = new mysqli ("127.0.0.1", "root", "", "kapoki");
    $n=$_GET['lala'];
    $q="SELECT * FROM buty WHERE id='".$n."'";
    
    if($wynik=$con->query($q)){
    while($row=$wynik->fetch_array())
    echo($row[0] . ";" . $row[1] . ";". $row[2] . "<br/>");
    }
    


    $q1="SELECT * FROM buty WHERE id='".$n."'";

    $wynik1=$con->query($q1);
    $row1=$wynik1->fetch_array();

    echo("<input type='text' name='ii' value=".$row1['FIRMA'].">");
    echo("<input type='text' name='uu' value=".$row1['NAZWA'].">");
    echo("<input type='hidden' name='ula' value=".$n.">");
    ?>
    
    <input type="submit" value="Submit">
</form>
    
</body>
</html>