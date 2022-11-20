<?php
include_once("../dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $id = trim($request->id);
  $name = trim($request->name);
  $price = mysqli_real_escape_string($mysqli, trim($request->price));
  $category = mysqli_real_escape_string($mysqli, trim($request->category));
  $stock = mysqli_real_escape_string($mysqli, trim($request->stock));
  $thumbnail = mysqli_real_escape_string($mysqli, trim($request->thumbnail));

  $sql = "UPDATE products SET p_name='$name', p_price='$price', p_category='$category', p_stock='$stock', p_thumbnail='$thumbnail' WHERE p_id=$id";
    if ($mysqli->query($sql) === TRUE) {
      echo json_encode(['success' => 'Successfully Updated']);
    } else {
      echo json_encode(['failed' => 'Try Again']);
    }

}
