<?php

$servername = "mysql";
$username_db = "root";
$password_db = "rock";
$dbname = "concertDB";

$conn = new mysqli($servername, $username_db, $password_db, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

?>
