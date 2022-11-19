<?php
include_once("../dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $product_id = trim($request->product_id);
  $product_name = trim($request->product_name);
  $product_price = trim($request->product_price);
  $customer_name = mysqli_real_escape_string($mysqli, trim($request->customer_name));
  $customer_address = mysqli_real_escape_string($mysqli, trim($request->customer_address));
  $product_quantity = mysqli_real_escape_string($mysqli, trim($request->product_quantity));
  $total_price = mysqli_real_escape_string($mysqli, trim($request->total_price));
  $new_stock = mysqli_real_escape_string($mysqli, trim($request->new_stock));

  $sql = "INSERT INTO bookings VALUES (NULL,'$product_id','$product_name','$customer_name', '$customer_address', '$product_price', '$product_quantity', '$total_price', DEFAULT, DEFAULT)";
    if ($mysqli->query($sql) === TRUE) {
      echo json_encode(['success' => 'Booking Success']);

      // Update Product stock
      $mysqli->query("UPDATE products SET p_stock='$new_stock' WHERE p_id='$product_id'");

    } else {
      echo json_encode(['failed' => 'Try Again']);
    }

}
