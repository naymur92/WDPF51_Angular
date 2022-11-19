<?php
require '../dbcon.php';
$id = ($_GET['id'] !== null && (int)$_GET['id'] > 0)? mysqli_real_escape_string($mysqli, (int)$_GET['id']) : false;

if($result = $mysqli->query("SELECT * FROM products WHERE p_id='$id'")) {
  while($row = $result->fetch_assoc()){
    $product['id'] = $row['p_id'];
    $product['name'] = $row['p_name'];
    $product['price'] = $row['p_price'];
    $product['category'] = $row['p_category'];
    $product['stock'] = $row['p_stock'];
    $product['thumbnail'] = $row['p_thumbnail'];
  }
  echo json_encode($product);
} else {
  http_response_code(404);
}