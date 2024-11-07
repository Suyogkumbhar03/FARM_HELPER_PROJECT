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

// Get login form data
$username = $_POST['username'];
$password = $_POST['password'];

// Search for user in the database
$sql = "SELECT * FROM users WHERE username = '$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch associated data
    $user = $result->fetch_assoc();
    
    // Verify the password
    if (password_verify($password, $user['password'])) {
        echo "Login successful!";
        // Redirect to the dashboard or another page
        header('Location: ph.html');
    } else {
        echo "Invalid password!";
    }
} else {
    echo "No user found with that username!";
}

$conn->close();
?>
