<?php
require '../database.php';
$postdata = file_get_contents('php://input');

if(isset($postdata) && !empty($postdata))
{
	$request = json_decode($postdata,true);
	if (trim($request['name']) == '' || trim($request['email']) == '') {
		return http_response_code(400);
	}
	$id = mysqli_real_escape_string($db, (int)$request['id']);
	$name = mysqli_real_escape_string($db, trim($request['name']));
	$email = mysqli_real_escape_string($db, trim($request['email']));
	$sql = "UPDATE users SET name='$name',email='$email' WHERE id = $id";
	
	if($db->query($sql))
	{
		http_response_code(204);
	}
	else
	{
		return http_response_code(422);
	}
}