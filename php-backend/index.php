<?php
$servername = "mysql";
$username = "root";
$password = "rootpass";

$conn = new mysqli($servername, $username, $password);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Backend → Database: Connected to MySQL!";
?>
