<?php
include_once("dbcon.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if (isset($postdata) && !empty($postdata)) {
  $pwd = mysqli_real_escape_string($mysqli, trim($request->password));
  $email = mysqli_real_escape_string($mysqli, trim($request->username));
  $sql = "SELECT * FROM users WHERE email='$email' AND password='$pwd' AND (user_type='admin' OR user_type='manager')";
  if ($result = mysqli_query($mysqli, $sql)) {
    $rows = array();
    while ($row = mysqli_fetch_assoc($result)) {
      $rows[] = $row;
    }
    echo json_encode($rows);
  } else {
    http_response_code(404);
  }
}
