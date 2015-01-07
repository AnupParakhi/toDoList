<?php
$servername = "localhost";
$username = "root";
$password = "processor";
$dbname = "todo";

$task = $_POST['id'];

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} else {
	echo $task;
	$sql = "UPDATE todo_list SET status = '1' WHERE task = '$task'";
	if ($conn->query($sql) === TRUE) {
	     echo "Updated Successful";
	} else {
	    echo "Error: " . $sql . "<br>" . $conn->error;
	}
}


$conn->close();
?> 