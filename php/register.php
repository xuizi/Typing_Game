<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    $username = trim($request->username);
    $password = mysqli_real_escape_string($mysqli, trim($request->password));
    $confirmPassword = mysqli_real_escape_string($mysqli, trim($request->confirmPassword));
    $email = mysqli_real_escape_string($mysqli, trim($request->email));
    $sql = "INSERT INTO Cadastro(username,email,password,confirmPassword) VALUES ('$username','$email','$password','$confirmPassword')";
    if ($mysqli->query($sql) === TRUE) {
    $authdata = [
    'username' => $username,
    'password' => '',
    'confirmPassword' => '',
    'email' => $email,
    'Id' => mysqli_insert_id($mysqli)
    ];
    echo json_encode($authdata);
    }
}

?>
