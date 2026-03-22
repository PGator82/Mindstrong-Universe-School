<?php
// Simple password gate — change this to whatever you want
define('ACCESS_PASS', 'mindstrong2026');

session_start();
if (isset($_POST['pass'])) {
    if ($_POST['pass'] === ACCESS_PASS) {
        $_SESSION['db_access'] = true;
    } else {
        $error = 'Wrong password';
    }
}
if (!isset($_SESSION['db_access'])) { ?>
<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<title>DB Admin — MindStrong</title>
<style>
body{background:#05050f;color:#f0f0ff;font-family:system-ui,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;margin:0;}
.box{background:#0f0f2a;border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:40px;width:340px;text-align:center;}
h2{margin:0 0 8px;font-size:1.3rem;}
p{color:#888aaa;font-size:.85rem;margin:0 0 24px;}
input{width:100%;padding:10px 14px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:8px;color:#f0f0ff;font-size:.9rem;box-sizing:border-box;margin-bottom:12px;}
button{width:100%;padding:11px;background:linear-gradient(135deg,#7c3aed,#2563eb);border:none;border-radius:8px;color:#fff;font-weight:700;cursor:pointer;font-size:.9rem;}
.err{color:#ef4444;font-size:.8rem;margin-bottom:10px;}
</style></head><body>
<div class="box">
  <h2>🗄️ Database Admin</h2>
  <p>MindStrong Universe — Railway MySQL</p>
  <?php if (!empty($error)) echo '<div class="err">'.$error.'</div>'; ?>
  <form method="POST">
    <input type="password" name="pass" placeholder="Enter access password" autofocus>
    <button type="submit">Access Database</button>
  </form>
</div>
</body></html>
<?php exit; }

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
