<?php

  include '../dbcon.php';
  $products = [];
  if($result = $mysqli->query("SELECT * FROM products")) {
    $i = 0;
    while($row = $result->fetch_assoc()){
      $products[$i]['id'] = $row['p_id'];
      $products[$i]['name'] = $row['p_name'];
      $products[$i]['price'] = $row['p_price'];
      $products[$i]['category'] = $row['p_category'];
      $products[$i]['stock'] = $row['p_stock'];
      $products[$i]['thumbnail'] = $row['p_thumbnail'];
      $i++;
    }
    echo json_encode($products);
  } else {
    http_response_code(404);
  }
