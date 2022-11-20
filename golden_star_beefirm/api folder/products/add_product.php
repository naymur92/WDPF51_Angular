<?php
include_once("../dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $name = trim($request->name);
  $price = mysqli_real_escape_string($mysqli, trim($request->price));
  $category = mysqli_real_escape_string($mysqli, trim($request->category));
  $stock = mysqli_real_escape_string($mysqli, trim($request->stock));
  $thumbnail = mysqli_real_escape_string($mysqli, trim($request->thumbnail));

  $sql = "INSERT INTO products VALUES (NULL, '$name','$price','$category','$stock', '$thumbnail')";
    if ($mysqli->query($sql) === TRUE) {
      echo json_encode(['success' => 'Successfully Added']);
    } else {
      echo json_encode(['failed' => 'Try Again']);
    }

}
