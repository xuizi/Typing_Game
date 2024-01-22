<?php
require_once 'database.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$query = "CREATE TABLE Cadastro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(50),
    confirmPassword VARCHAR(50)
)";

if ($mysqli->query($query) === TRUE) {
    echo "Table 'Cadastro' created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}


$mysqli->close();
?>