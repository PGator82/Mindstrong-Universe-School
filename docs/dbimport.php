<?php
// One-time database import script — DELETE AFTER USE
// Access: /dbimport.php?key=ms_import_2026

$secret = 'ms_import_2026';
if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    die('Forbidden');
}

// Show loaded extensions for debugging
if (isset($_GET['info'])) {
    phpinfo();
    die();
}

$host    = getenv('MYSQLHOST')     ?: 'mysql.railway.internal';
$port    = (int)(getenv('MYSQLPORT')     ?: 3306);
$user    = getenv('MYSQLUSER')     ?: 'root';
$pass    = getenv('MYSQLPASSWORD') ?: '';
$db      = getenv('MYSQLDATABASE') ?: 'railway';
$sqlFile = __DIR__ . '/dbimport.sql';

echo "<h2>Debug Info</h2>";
echo "<p>Host: $host | Port: $port | User: $user | DB: $db</p>";
echo "<p>mysqli loaded: " . (extension_loaded('mysqli') ? 'YES' : 'NO') . "</p>";
echo "<p>pdo_mysql loaded: " . (extension_loaded('pdo_mysql') ? 'YES' : 'NO') . "</p>";
echo "<p>SQL file exists: " . (file_exists($sqlFile) ? 'YES' : 'NO') . "</p>";

if (!file_exists($sqlFile)) {
    die('<p>SQL file not found.</p>');
}

if (!extension_loaded('mysqli')) {
    die('<p>mysqli extension not available. Check extensions above.</p>');
}

$conn = new mysqli($host, $user, $pass, $db, $port);

if ($conn->connect_error) {
    die("<p>Connection failed: " . $conn->connect_error . "</p>");
}

echo "<p>✅ Connected to MySQL successfully!</p>";

$sql = file_get_contents($sqlFile);
$conn->multi_query($sql);

$ok = 0; $fail = 0;
do {
    $ok++;
    if ($conn->errno) { $fail++; }
} while ($conn->next_result());

echo "<h2>Import Complete</h2>";
echo "<p>✅ Statements run: $ok</p>";
echo "<p>⚠️ Errors: $fail</p>";
echo "<p><strong>Done! Delete this file and dbimport.sql from your repo now.</strong></p>";

$conn->close();
?>
