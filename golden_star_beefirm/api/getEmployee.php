<?php
include_once("dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $id = trim($request->id);

  $result = $mysqli->query("SELECT * FROM users WHERE id='$id'");
  
  $row = $result->fetch_assoc();

  echo json_encode($row);
}
