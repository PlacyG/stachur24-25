<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="polskacss.css">
</head>
<body>



<form method="post">

<label for="liczba1">Wpisz pierwsza liczbe</label>
<input type="number" name="liczba1" id="liczba1">
<label for="liczba2">Wpisz druga liczbe</label>
<input type="number" name="liczba2" id="liczba2">

<button type="submit"></button>

</form>

<?php


if(isset($_POST['liczba1']) && isset($_POST['liczba2'])){

$liczba1 = $_POST['liczba1'];
$liczba2 = $_POST['liczba2'];


    for($i=0; $i<$liczba1; $i++){

        for($j=0; $j<$liczba2; $j++){

            echo " <img src= 'kmicic.jpg'>";
        }
    }

    else{
        echo " zle dane";
    }

}


?>



</body>
</html>