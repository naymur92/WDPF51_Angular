<?php
require '../dbcon.php';
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['id']) : false;
// if(!$id)
// {
// 	return http_response_code(400);
// }

$sql = "DELETE FROM products WHERE p_id =$id";
if($mysqli->query($sql))
{
  echo json_encode(['success' => 'Successfully Deleted']);
	// http_response_code(204);
}
else
{
	return http_response_code(422);
}