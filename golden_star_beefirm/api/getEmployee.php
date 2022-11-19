<?php
include_once("dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $id = trim($request->id);

  $i = 0;
  $result = $mysqli->query("SELECT * FROM users WHERE id='$id'");

  $row = $result->fetch_assoc();

  $employee[$i]['id'] = $row['id'];
  $employee[$i]['name'] = $row['name'];
  $employee[$i]['email'] = $row['email'];
  $employee[$i]['password'] = $row['password'];
  $employee[$i]['employee_type'] = $row['user_type'];

  echo json_encode($employee[$i]);
}
