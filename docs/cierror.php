<?php
// Block CI from intercepting this file
define('BASEPATH', 'blocked');
ini_set('display_errors', 1);
error_reporting(E_ALL);

echo "<h3>File Checks</h3>";
echo "system dir: " . (is_dir(__DIR__.'/system') ? 'YES' : 'NO') . "<br>";
echo "application dir: " . (is_dir(__DIR__.'/application') ? 'YES' : 'NO') . "<br>";
echo "database.php: " . (file_exists(__DIR__.'/application/config/database.php') ? 'YES' : 'NO') . "<br>";
echo "Login.php: " . (file_exists(__DIR__.'/application/controllers/Login.php') ? 'YES' : 'NO') . "<br>";

echo "<h3>Env Vars</h3>";
echo "MYSQLHOST: " . (getenv('MYSQLHOST') ?: '<b>NOT SET</b>') . "<br>";
echo "MYSQLPORT: " . (getenv('MYSQLPORT') ?: '<b>NOT SET</b>') . "<br>";
echo "MYSQLUSER: " . (getenv('MYSQLUSER') ?: '<b>NOT SET</b>') . "<br>";
echo "MYSQLPASSWORD: " . (getenv('MYSQLPASSWORD') ? '***SET***' : '<b>NOT SET</b>') . "<br>";
echo "MYSQLDATABASE: " . (getenv('MYSQLDATABASE') ?: '<b>NOT SET</b>') . "<br>";

echo "<h3>Test DB Connection</h3>";
$h = getenv('MYSQLHOST') ?: 'mysql.railway.internal';
$p = getenv('MYSQLPORT') ?: 3306;
$u = getenv('MYSQLUSER') ?: 'root';
$pw = getenv('MYSQLPASSWORD') ?: '';
$db = getenv('MYSQLDATABASE') ?: 'railway';

$conn = mysqli_init();
mysqli_options($conn, MYSQLI_OPT_CONNECT_TIMEOUT, 5);
$ok = mysqli_real_connect($conn, $h, $u, $pw, $db, (int)$p);
echo $ok ? "DB Connected OK<br>" : "DB FAILED: ".mysqli_connect_error()."<br>";

echo "<h3>PHP</h3>";
echo "Version: ".PHP_VERSION."<br>";
echo "Done.";
?>
