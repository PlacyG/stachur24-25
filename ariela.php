<?php
$con = new mysqli("127.0.0.1", "root", "", "shasession");

$nazwa=$_GET['nazwa'];
$pin=$_GET['pin'];
$secure=sha1($pin);

$q= "SELECT login, haslo FROM pasy WHERE login = '$nazwa' && haslo = '$secure'";


if(isset($nazwa) && isset($pin))
{
    $wynik = $con -> query($q);
    if($wynik -> num_rows > 0)
    {
        session_start();
        $_SESSION['nazwa'] = $_GET['nazwa'];
        $_SESSION['pin'] = $_GET['pin'];
        echo "<a href=syrenka.php> KOLEJNA STRONA </a>";
    }
    else
    {
        echo "wpisales zle dane";
    }

}



?>