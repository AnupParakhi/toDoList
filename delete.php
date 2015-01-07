<?php
	$servername = "localhost";
	$username = "root";
	$password = "";
	$dbname = "todo";

	//$task=$_POST['task'];
	$id=$_POST['id'];
	//$status=$_POST['status'];


	// Create connection
	$conn = new mysqli($servername, $username, $password, $dbname);
	// Check connection
	if ($conn->connect_error) {
	    die("Connection failed: " . $conn->connect_error);
	} else{

		$sql = "DELETE ";

	}
?>