<?php
$servername = "localhost";
$username = "root";
$password = "processor";
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

	$sql = "UPDATE todo_list SET status='0' where id='$id'";

}

if ($conn->query($sql) === TRUE) {
   	$query = "Select * from todo_list where id ='$id'";
    $result = $conn->query($query);

                            if ($result->num_rows > 0) {
                                // output data of each row
                                while($row = $result->fetch_assoc()) {
                                    echo $row['task'];
                                }
                            } else {
                                echo "0 results";
                            }
   
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>