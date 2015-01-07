<?php
<<<<<<< HEAD
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "todo";

$id = $_POST['id'];
=======

$servername = "localhost";
$username = "root";
$password = "processor";
$dbname = "todo";

$task = $_POST['task'];
>>>>>>> 4778da76e3c29148dbe04b0c26e476755f1789b8

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

<<<<<<< HEAD
$sql = "DELETE FROM todo_list WHERE id = '$id'";

=======
// sql to delete a record
$sql = "DELETE FROM todo_list WHERE task='$task'";
>>>>>>> 4778da76e3c29148dbe04b0c26e476755f1789b8

if ($conn->query($sql) === TRUE) {
    echo "Record deleted successfully";
} else {
    echo "Error deleting record: " . $conn->error;
}

$conn->close();
?>