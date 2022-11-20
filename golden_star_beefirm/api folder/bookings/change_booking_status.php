<?php
include_once("../dbcon.php");
$postdata = file_get_contents("php://input");
if (isset($postdata) && !empty($postdata)) {
  $request = json_decode($postdata);
  $id = trim($request->id);
  $status = mysqli_real_escape_string($mysqli, trim($request->status));

  $sql = "UPDATE bookings SET b_status='$status' WHERE b_id=$id";
    if ($mysqli->query($sql) === TRUE) {
      echo json_encode(['success' => "Successfully {$status}"]);
    } else {
      echo json_encode(['failed' => 'Try Again']);
    }

}
