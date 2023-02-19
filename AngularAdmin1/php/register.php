<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $name = trim($request->name);
  $pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));
  $email = mysqli_real_escape_string($mysqli, trim($request->email));

  $sql = "SELECT email from users WHERE email='$email'";
  $result = $mysqli->query($sql);
  if($result->num_rows > 0){
    echo json_encode(['failed' => 'Try with different email']);
  } else{
    $sql = "INSERT INTO users(name,password,email) VALUES ('$name','$pwd','$email')";
    if ($mysqli->query($sql) === TRUE) {
      // $authdata = [
      //   'name' => $name,
      //   'pwd' => '',
      //   'email' => $email,
      //   'Id' => mysqli_insert_id($mysqli)
      // ];
      // echo json_encode($authdata);
      echo json_encode(['success' => 'Successfully Registered']);
    }
  }

}
