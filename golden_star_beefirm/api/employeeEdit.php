<?php
include_once("dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $id = trim($request->id);
  $name = trim($request->name);
  $email = mysqli_real_escape_string($mysqli, trim($request->email));
  $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
  $emp_type = mysqli_real_escape_string($mysqli, trim($request->emp_type));

  $sql = "SELECT email from users WHERE email='$email'";
  $result = $mysqli->query($sql);
  if($result->num_rows > 1){
    echo json_encode(['dupemail' => 'Try with different email']);
  } else{
    $sql = "UPDATE users SET name='$name', email='$email', password='$pwd',user_type='$emp_type' WHERE id='$id'";
    $mysqli->query($sql);
    if ($mysqli->affected_rows == 1) {      
      echo json_encode(['success' => 'Successfully Updated']);
    } else {
      echo json_encode(['failed' => 'Try Again']);
    }
  }

}
