<?php

include($_SERVER["DOCUMENT_ROOT"] . '/options/connection_database.php');

if(isset($_POST["id"]))
{
    $id = $_POST["id"];
    $sql = "DELETE FROM tbl_products WHERE id = '$id'";
    $stmt= $conn->prepare($sql);

    if($conn->query($sql)){

        header("Location: index.php");
    }
    else{
        echo "Ошибка: " . $conn->error;
    }
    $conn->close();
}
?>
