<?php
include_once("dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $id = trim($request->id);

  $mysqli->query("DELETE FROM users WHERE id='$id'");

  if($mysqli->affected_rows == 1){
    echo json_encode(['success' => 'Successfully Deleted']);
  } else{
    echo json_encode(['failed' => 'Failed to Delete']);
  }
}
