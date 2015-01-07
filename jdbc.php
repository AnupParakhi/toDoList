<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo";

$task=$_POST['task'];
$status=$_POST['status'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else{
	$sql = "INSERT INTO todo_list (task, status)
VALUES ('".$task."', '".$status."')";

if ($conn->query($sql) === TRUE) {
   // echo "New record created successfully";
    echo $conn->insert_id;
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
}

$conn->close();
?>