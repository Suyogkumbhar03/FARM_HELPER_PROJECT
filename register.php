<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "farm";

// Create connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$username = $_POST['username'];
$password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash the password
$email = $_POST['email'];
$phone = $_POST['phone'];
$farmSize = $_POST['farmSize'];
$location = $_POST['location'];
$soilType = $_POST['soilType'];
$crops = $_POST['crops'];
$experience = $_POST['experience'];
$interests = $_POST['interests'];

// Insert data into the database
$sql = "INSERT INTO users (name, username, password, email, phone, farmSize, location, soilType, crops, experience, interests) 
        VALUES ('$name', '$username', '$password', '$email', '$phone', '$farmSize', '$location', '$soilType', '$crops', '$experience', '$interests')";

if ($conn->query($sql) === TRUE) {
    echo "Registration successful!";
    header('Location: login.html');
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
