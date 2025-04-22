<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularz z wynikami</title>
    <link rel="stylesheet" href="chatsprawdzian.css">
</head>
<body>
   
    <header>
        <h1>Barcelona zdobędzie pięć pucharów w 2025!</h1>
    </header>

    
    <div id="content">
      
        <div id="left">
           
        </div>

        <div id="right">
           
            <form method="POST">
                <label for="wiersze">Liczba wierszy:</label>
                <input type="number" id="wiersze" name="wiersze" required>

                <label for="kolumny">Liczba kolumn:</label>
                <input type="number" id="kolumny" name="kolumny" required>

                <label for="pilkarz">Numer pilkarza</label>
                <input type="number" id="pilkarz" name="pilkarz" required>

                <button type="submit">Wyślij</button>
            </form>



            <pilkarz>
            <?php
            // WYPISYWANIE Z BAZY
            // --------------------------------------------------------
        
            
            
        $con = new mysqli("127.0.0.1" , "root" , "" , "numer");
        $pilkarz = $_POST['pilkarz'];

        $a = "SELECT *FROM pilakrze";
        if($result = $con->query($a))
            while($ruw=$result->fetch_array())
        echo $ruw[0]  .$ruw[1]  . $ruw[2] ;
        

        // --------------------------------------------------------
        $q = "SELECT Imie , Nazwisko FROM pilakrze WHERE Id=$pilkarz"; 
        $wynik = $con->query($q);
        if($wynik && $wynik -> num_rows > 0){
            while($row=$wynik->fetch_assoc())
            echo  "</br> </br> Pilkarz z podanym numerem to: </br>" . $row['Imie'] ."&nbsp" . $row['Nazwisko'] . "</br>";

        }
        else{
            echo "brak danych";
            echo "</br> </br>";
        }
         



// FORMULARZ KOLUMNY
// --------------------------------------------------------
// --------------------------------------------------------
// --------------------------------------------------------
if (isset($_POST['wiersze']) && isset($_POST['kolumny'])) {
    $wiersze = $_POST['wiersze'];
    $kolumny = $_POST['kolumny'];
   


    for ($i = 0; $i < $wiersze; $i++) {
        for ($j = 0; $j < $kolumny; $j++) {
            echo "<img src = 'kmicic.jpg'>";
        }
        echo "<br>";
    }
} else {
  
    echo "Zle danisze towarzysu";
}
?>

        </div>
    </div>

    <footer>
        23 Filip Pacyga
    </footer>


</body>
</html>
