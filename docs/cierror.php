<?php
ini_set('display_errors', 1);
error_reporting(E_ALL);

// Simulate what index.php does to catch the real error
$system_path = __DIR__ . '/system';
$application_folder = __DIR__ . '/application';

echo "<h3>Paths</h3>";
echo "system exists: " . (is_dir($system_path) ? 'YES' : 'NO') . "<br>";
echo "application exists: " . (is_dir($application_folder) ? 'YES' : 'NO') . "<br>";
echo "DB config exists: " . (file_exists($application_folder . '/config/database.php') ? 'YES' : 'NO') . "<br>";
echo "Login controller: " . (file_exists($application_folder . '/controllers/Login.php') ? 'YES' : 'NO') . "<br>";

echo "<h3>Env Vars</h3>";
echo "MYSQLHOST: " . (getenv('MYSQLHOST') ?: 'NOT SET') . "<br>";
echo "MYSQLUSER: " . (getenv('MYSQLUSER') ?: 'NOT SET') . "<br>";
echo "MYSQLPASSWORD: " . (getenv('MYSQLPASSWORD') ? '***SET***' : 'NOT SET') . "<br>";
echo "MYSQLDATABASE: " . (getenv('MYSQLDATABASE') ?: 'NOT SET') . "<br>";

echo "<h3>Boot CI</h3>";
try {
    define('ENVIRONMENT', 'development');
    ob_start();
    require_once $system_path . '/core/CodeIgniter.php';
    $out = ob_get_clean();
    echo "CI output: " . htmlspecialchars($out);
} catch (Throwable $e) {
    echo "Error: " . $e->getMessage() . " in " . $e->getFile() . " line " . $e->getLine();
}
?>
