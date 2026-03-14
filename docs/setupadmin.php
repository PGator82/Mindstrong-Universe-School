<?php
// One-time SuperAdmin setup — DELETE AFTER USE
// Access: /setupadmin.php?key=sa_setup_2026

if (!isset($_GET['key']) || $_GET['key'] !== 'sa_setup_2026') {
    http_response_code(403); die('Forbidden');
}

$host = 'mysql.railway.internal';
$port = 3306;
$user = 'root';
$pass = 'wCvyDaEpslAwuYNASxvbgvwRAoBUUOpz';
$db   = 'railway';

$conn = mysqli_init();
mysqli_options($conn, MYSQLI_OPT_CONNECT_TIMEOUT, 10);
mysqli_real_connect($conn, $host, $user, $pass, $db, $port);

if (mysqli_connect_errno()) {
    die("Connection failed: " . mysqli_connect_error());
}

$email    = 'mindstrongcorp@gmail.com';
$password = sha1('Blackstreet.1'); // 36876465107f823f3e85beb12f2ad5fe51d3a427
$name     = 'MindStrong Corp';

// Check if already exists
$check = mysqli_query($conn, "SELECT admin_id FROM admin WHERE email = '$email'");
if (mysqli_num_rows($check) > 0) {
    // Update existing
    $row = mysqli_fetch_assoc($check);
    $id  = $row['admin_id'];
    mysqli_query($conn, "UPDATE admin SET password='$password', name='$name' WHERE admin_id=$id");
    echo "✅ Updated existing admin (ID: $id)<br>";
} else {
    // Insert new
    mysqli_query($conn, "INSERT INTO admin (name, email, password) VALUES ('$name', '$email', '$password')");
    $id = mysqli_insert_id($conn);
    echo "✅ Created new SuperAdmin (ID: $id)<br>";
}

echo "Email: $email<br>";
echo "Password: Blackstreet.1<br>";
echo "SHA1: $password<br>";
echo "<br><strong>Login at /login.html → select Super Admin role</strong><br>";
echo "<br><strong>DELETE this file now.</strong>";

mysqli_close($conn);
?>
