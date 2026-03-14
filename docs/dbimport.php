<?php
// One-time database import script — DELETE AFTER USE
// Access: /dbimport.php?key=ms_import_2026

$secret = 'ms_import_2026';
if (!isset($_GET['key']) || $_GET['key'] !== $secret) {
    http_response_code(403);
    die('Forbidden');
}

$host     = getenv('MYSQLHOST')     ?: 'mysql.railway.internal';
$port     = getenv('MYSQLPORT')     ?: 3306;
$user     = getenv('MYSQLUSER')     ?: 'root';
$pass     = getenv('MYSQLPASSWORD') ?: '';
$db       = getenv('MYSQLDATABASE') ?: 'railway';

$sqlFile  = __DIR__ . '/dbimport.sql';

if (!file_exists($sqlFile)) {
    die('SQL file not found at: ' . $sqlFile);
}

try {
    $pdo = new PDO(
        "mysql:host=$host;port=$port;dbname=$db;charset=utf8",
        $user, $pass,
        [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
    );

    $sql = file_get_contents($sqlFile);

    // Split by semicolons, skip empty/comment lines
    $statements = array_filter(
        array_map('trim', explode(';', $sql)),
        fn($s) => strlen($s) > 0 && !preg_match('/^(--|\/\*|#)/', $s)
    );

    $ok = 0; $fail = 0; $errors = [];
    foreach ($statements as $stmt) {
        try {
            $pdo->exec($stmt);
            $ok++;
        } catch (PDOException $e) {
            $fail++;
            if (count($errors) < 10) {
                $errors[] = substr($stmt, 0, 80) . ' → ' . $e->getMessage();
            }
        }
    }

    echo "<h2>Import Complete</h2>";
    echo "<p>✅ Success: $ok statements</p>";
    echo "<p>⚠️ Failed: $fail statements</p>";
    if ($errors) {
        echo "<pre>" . implode("\n", $errors) . "</pre>";
    }
    echo "<p><strong>Delete this file and dbimport.sql from your repo now.</strong></p>";

} catch (PDOException $e) {
    echo "<h2>Connection Failed</h2><pre>" . $e->getMessage() . "</pre>";
}
?>
