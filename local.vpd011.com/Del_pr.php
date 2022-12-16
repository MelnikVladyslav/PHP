<!DOCTYPE html>
<html>
<head>
    <title>Видалення продукт</title>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
<?php include($_SERVER["DOCUMENT_ROOT"] . '/_header.php'); ?>

<h1 class="text-center">Видалення продукт</h1>

<h2>Список power banks</h2>
<?php
include($_SERVER["DOCUMENT_ROOT"] . '/options/connection_database.php');
$sql = "SELECT * FROM tbl_products";
if($result = $conn->query($sql)) {
    echo "<table><tr><th>Id</th><th>Name</th><th></th></tr>";
    foreach ($result as $row) {
        echo "<tr>";
        echo "<td>" . $row["id"] . "</td>";
        echo "<td>" . $row["name"] . "</td>";
        echo "<td><form action='delete.php' method='post'>
                        <input type='hidden' name='id' value='" . $row["id"] . "' />
                        <input type='submit' value='Удалить'>
                </form></td>";
        echo "</tr>";
    }
}
?>
</body>
</html>