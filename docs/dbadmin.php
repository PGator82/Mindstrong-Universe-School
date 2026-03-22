<?php
// ── Session guard: only logged-in admins can access ──
session_name('ci_session');
session_start();
$data = isset($_SESSION['__ci_vars']) ? [] : [];
// CI3 stores session data in the session directly
$admin_login = $_SESSION['admin_login'] ?? null;
if ($admin_login != 1) {
    header('Location: /login.html');
    exit;
}

// ── Auto-connect using Railway DB credentials ──
$mysql_url = getenv('MYSQL_URL') ?: getenv('DATABASE_URL') ?: '';
if ($mysql_url) {
    $u = parse_url($mysql_url);
    $DB_HOST = ($u['host'] ?? 'localhost') . ':' . ($u['port'] ?? 3306);
    $DB_USER = $u['user'] ?? 'root';
    $DB_PASS = $u['pass'] ?? '';
    $DB_NAME = ltrim($u['path'] ?? '/railway', '/');
} else {
    $DB_HOST = (getenv('MYSQLHOST') ?: 'caboose.proxy.rlwy.net') . ':' . (getenv('MYSQLPORT') ?: 41634);
    $DB_USER = getenv('MYSQLUSER') ?: 'root';
    $DB_PASS = getenv('MYSQLPASSWORD') ?: 'wCvyDaEpslAwuYNASxvbgvwRAoBUUOpz';
    $DB_NAME = getenv('MYSQLDATABASE') ?: 'railway';
}

// Pre-fill Adminer login fields via GET params
if (!isset($_GET['server'])) {
    header("Location: /dbadmin.php?server=" . urlencode($DB_HOST) .
           "&username=" . urlencode($DB_USER) .
           "&db=" . urlencode($DB_NAME));
    exit;
}

// ── Adminer customisation: auto-login ──
function adminer_object() {
    class AdminerAutoLogin extends Adminer {
        function login($login, $password) { return true; }
        function credentials() {
            global $DB_HOST, $DB_USER, $DB_PASS;
            return [$DB_HOST, $DB_USER, $DB_PASS];
        }
        function name() { return 'MindStrong DB Admin'; }
    }
    return new AdminerAutoLogin();
}

// ── Load Adminer ──
$adminer_file = __DIR__ . '/adminer-4.8.1.php';
if (!file_exists($adminer_file)) {
    echo '<p style="font:16px sans-serif;padding:40px">Adminer not found. Run: <code>curl -o ' . $adminer_file . ' https://www.adminer.org/static/download/4.8.1/adminer-4.8.1.php</code></p>';
    exit;
}
include $adminer_file;
