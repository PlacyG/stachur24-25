<?php
session_start();
$nazwa = $_SESSION['nazwa'];
$pin = $_SESSION['pin'];

echo $nazwa . "</br>" . $pin

?>