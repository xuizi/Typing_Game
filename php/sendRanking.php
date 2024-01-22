<?php
include_once("database.php");
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);

    
    $username = isset($request->username) ? trim($request->username) : '';
    $mistakes = isset($request->mistakes) ? mysqli_real_escape_string($mysqli, trim($request->mistakes)) : 0;
    $wpm = isset($request->wpm) ? mysqli_real_escape_string($mysqli, trim($request->wpm)) : 0;
    $cpm = isset($request->cpm) ? mysqli_real_escape_string($mysqli, trim($request->cpm)) : 0;

    
    $sql = "INSERT INTO NewRanking (username, mistakes, wpm, cpm) VALUES ('$username', $mistakes, $wpm, $cpm)";

    if ($mysqli->query($sql) === TRUE) {
        $authdata = [
            'username' => $username,
            'mistakes' => $mistakes,
            'wpm' => $wpm,
            'cpm' => $cpm,
            'id' => $mysqli->insert_id
        ];

        echo json_encode($authdata);
    } else {
        echo json_encode(['erro' => 'Erro ao inserir dados no banco de dados: ' . $mysqli->error]);
    }
}
?>
