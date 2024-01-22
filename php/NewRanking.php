<?php
require_once 'database.php';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$query = "CREATE TABLE NewRanking (
    id serial primary key,
    username VARCHAR(50),
    mistakes INTEGER,
    wpm INTEGER,
    cpm INTEGER,
    insertion_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($mysqli->query($query) === TRUE) {
    echo "Table NewRanking created successfully";
} else {
    echo "Error creating table: " . $conn->error;
}

$mysqli->close();
?>