<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);
set_time_limit(300);

$secret = 'ms_import_2026';
if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    die('Forbidden');
}

if (isset($_GET['info'])) { phpinfo(); die(); }

$host    = 'mysql.railway.internal';
$port    = 3306;
$user    = 'root';
$pass    = 'wCvyDaEpslAwuYNASxvbgvwRAoBUUOpz';
$db      = 'railway';
$sqlFile = __DIR__ . '/dbimport.sql';

echo "Host: $host | Port: $port | User: $user | DB: $db<br>";
echo "mysqli: " . (extension_loaded('mysqli') ? 'YES' : 'NO') . "<br>";
echo "SQL file: " . (file_exists($sqlFile) ? 'YES' : 'NO') . "<br>";
flush();

echo "Attempting connection...<br>";
flush();

// Set connection timeout via mysqli_real_connect
$conn = mysqli_init();
mysqli_options($conn, MYSQLI_OPT_CONNECT_TIMEOUT, 10);
$connected = mysqli_real_connect($conn, $host, $user, $pass, $db, $port);

if (!$connected) {
    die("Connection FAILED: " . mysqli_connect_error() . " (code: " . mysqli_connect_errno() . ")");
}

echo "Connected OK!<br>";
flush();

$sql = file_get_contents($sqlFile);
echo "SQL loaded: " . strlen($sql) . " bytes<br>";
flush();

$conn->multi_query($sql);
$ok = 0;
do { $ok++; } while ($conn->next_result());

echo "Import done! Statements: $ok<br>";
echo "Errors: " . $conn->errno . " - " . $conn->error . "<br>";
$conn->close();
?>
