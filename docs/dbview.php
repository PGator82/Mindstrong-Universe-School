<?php

// ── Auto-connect using Railway DB credentials ──
$mysql_url = getenv('MYSQL_URL') ?: getenv('DATABASE_URL') ?: '';
if ($mysql_url) {
    $u = parse_url($mysql_url);
    $DB_SERVER = ($u['host'] ?? 'localhost') . ':' . ($u['port'] ?? 3306);
    $DB_USER   = $u['user'] ?? 'root';
    $DB_PASS   = $u['pass'] ?? '';
    $DB_NAME   = ltrim($u['path'] ?? '/railway', '/');
} else {
    $DB_SERVER = (getenv('MYSQLHOST') ?: 'caboose.proxy.rlwy.net') . ':' . (getenv('MYSQLPORT') ?: 41634);
    $DB_USER   = getenv('MYSQLUSER') ?: 'root';
    $DB_PASS   = getenv('MYSQLPASSWORD') ?: 'wCvyDaEpslAwuYNASxvbgvwRAoBUUOpz';
    $DB_NAME   = getenv('MYSQLDATABASE') ?: 'railway';
}

function adminer_object() {
    class AdminerSecure extends Adminer {
        function login($login, $password) { return true; }
        function credentials() {
            global $DB_SERVER, $DB_USER, $DB_PASS;
            return [$DB_SERVER, $DB_USER, $DB_PASS];
        }
        function database() { global $DB_NAME; return $DB_NAME; }
        function name() { return 'MindStrong DB'; }
        function permanentLogin() { return true; }
    }
    return new AdminerSecure();
}

$adminer = __DIR__ . '/adminer-4.8.1.php';
if (!file_exists($adminer)) {
    echo '<p style="font:16px system-ui;padding:40px;color:#fff;background:#05050f">
    Adminer loading on first deploy — wait 30 seconds and refresh.<br>
    If it persists, run manually:<br>
    <code>curl -o /app/adminer-4.8.1.php https://www.adminer.org/static/download/4.8.1/adminer-4.8.1.php</code></p>';
    exit;
}
include $adminer;
