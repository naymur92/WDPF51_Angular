<?php
include '../database.php';
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	// Validate.
	if(trim($request['name']) === '' || trim($request['email']) === '' || trim($request['password']) === '')
	{
		return http_response_code(400);
	}
	$name = mysqli_real_escape_string($db, trim($request['name']));
	$email = mysqli_real_escape_string($db, trim($request['email']));
	$password = mysqli_real_escape_string($db, trim($request['password']));
	$sql = "INSERT INTO users (id,name,email,password) VALUES (null,'$name','$email','$password')";
	if($db->query($sql))
	{
		http_response_code(201);
		$user = [
		'id' => mysqli_insert_id($db),'name' => $name,
		'email' => $email, 'password' => $password ];
		echo json_encode($user);
	}
	else
	{
		http_response_code(422);
	}
}