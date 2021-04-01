<?php
require_once 'adminfunction.php';
$_POST=json_decode(file_get_contents('php://input'),true);
$staff_id = $_POST['id'];

$getstaffid = new adminmethod;
$dd = $getstaffid->removeStaff($staff_id);
echo json_encode($dd);

?>