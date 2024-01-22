<?php
include_once("database.php");


if ($mysqli->connect_error) {
  die('Error : ('. $mysqli->connect_errno .') '. $mysqli->connect_error);
}

$sql = "SELECT username,sum(wpm) as wpm,sum(mistakes) as mistakes,sum(cpm) as cpm FROM NewRanking group by username order by wpm desc";
$result = $mysqli->query($sql);

$data = [];

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $data[] = $row;
  }
}

$mysqli->close();

echo json_encode($data);
?>
