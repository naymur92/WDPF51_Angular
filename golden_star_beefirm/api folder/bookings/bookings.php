<?php

  include '../dbcon.php';
  $bookings = [];
  if($result = $mysqli->query("SELECT * FROM bookings")) {
    $i = 0;
    while($row = $result->fetch_assoc()){
      $bookings[$i]['id'] = $row['b_id'];
      $bookings[$i]['product_id'] = $row['b_p_id'];
      $bookings[$i]['product_name'] = $row['b_p_name'];
      $bookings[$i]['customer_name'] = $row['b_customer_name'];
      $bookings[$i]['customer_address'] = $row['b_custome_address'];
      $bookings[$i]['product_price'] = $row['b_p_price'];
      $bookings[$i]['product_quantity'] = $row['b_p_quantity'];
      $bookings[$i]['total_price'] = $row['b_total_price'];
      $bookings[$i]['booking_time'] = $row['b_time'];
      $bookings[$i]['booking_status'] = $row['b_status'];
      $i++;
    }
    echo json_encode($bookings);
  } else {
    http_response_code(404);
  }
