<?php

  include 'dbcon.php';
  $employees = [];
  if($result = $mysqli->query("SELECT id, name, email, user_type FROM users")) {
    $i = 0;
    while($row = $result->fetch_assoc()){
      $employees[$i]['id'] = $row['id'];
      $employees[$i]['name'] = $row['name'];
      $employees[$i]['email'] = $row['email'];
      $employees[$i]['employee_type'] = $row['user_type'];
      $i++;
    }
    echo json_encode($employees);
  } else {
    http_response_code(404);
  }
