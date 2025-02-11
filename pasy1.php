<?php
$con = new mysqli("127.0.0.1", "root", "", "shasession");
$login =$_GET['login'];
$haslo =$_GET['haslo'];
$hasz = sha1($haslo);

$q = "SELECT login , haslo FROM pasy WHERE login = '$login' && haslo = '$hasz'";


if(isset($login) && isset($haslo))
{
    $wynik = $con -> query($q);
    if($wynik -> num_rows > 0)
    {
        session_start();
        $_SESSION['login'] = $_GET['login'];
        $_SESSION['haslo'] = $_GET['haslo'];
        echo "<a href='pasy2.php'> Kolejna strona </a>";
    }
    else
    { 
        echo "zle dane mordzia";
    }


}

?>