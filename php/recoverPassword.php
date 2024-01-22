<?php

include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $username = trim($request->username);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $confirmPassword = mysqli_real_escape_string($mysqli, trim($request->confirmPassword));

    
    $checkUserExistQuery = "SELECT * FROM Cadastro WHERE username = '$username'";
    $result = $mysqli->query($checkUserExistQuery);

    if ($result && $result->num_rows > 0) {
        $sql = "UPDATE Cadastro SET password='$password',confirmPassword='$confirmPassword' WHERE username='$username'";
        if ($mysqli->query($sql) === TRUE) {
            $authdata = [
                'username' => $username,
                'password' => '',
                'confirmPassword' => '',
                'Id' => mysqli_insert_id($mysqli)
            ];
            echo json_encode($authdata);
        }
    } else {
        http_response_code(404);
        echo json_encode(['error' => 'Usuário não encontrado']);
    }
}



?>