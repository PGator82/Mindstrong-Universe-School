#!/bin/bash
set -e

# Default port if not set by Railway
export PORT="${PORT:-8080}"

# Write PHP-FPM config
cat > /tmp/php-fpm.conf << EOF
[global]
daemonize = no

[www]
listen = 127.0.0.1:9000
pm = dynamic
pm.max_children = 10
pm.start_servers = 2
pm.min_spare_servers = 1
pm.max_spare_servers = 5
EOF

# Write Nginx config with real PORT
cat > /tmp/nginx.conf << EOF
worker_processes 1;
error_log /dev/stderr;
pid /tmp/nginx.pid;

events { worker_connections 1024; }

http {
  include /etc/nginx/mime.types;
  default_type application/octet-stream;
  access_log /dev/stdout;
  sendfile on;

  server {
    listen ${PORT};
    root /app;
    index index.php index.html;
    charset utf-8;

    # Block sensitive directories and files
    location ~ ^/(application|system|School) { return 403; }
    location ~* \.(sql|log|env)$ { return 403; }

    # Static assets — serve directly with cache
    location ~* \.(css|js|png|jpg|jpeg|gif|svg|ico|woff|woff2|ttf|eot)$ {
      try_files \$uri =404;
      expires 7d;
    }

    # Root → serve home.html directly (no redirect)
    location = / {
      try_files /home.html =404;
    }

    # Static HTML pages — serve directly
    location ~* \.html$ {
      try_files \$uri =404;
    }

    # Everything else → CodeIgniter (api/login, login/validate_login, admin/*, etc.)
    location / {
      try_files \$uri \$uri/ /index.php?\$request_uri;
    }

    location ~ \.php$ {
      fastcgi_pass 127.0.0.1:9000;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME \$realpath_root\$fastcgi_script_name;
      fastcgi_param PATH_INFO \$fastcgi_path_info;
      include fastcgi_params;
      fastcgi_read_timeout 300;
    }
  }
}
EOF

# Start PHP-FPM in background
php-fpm82 -y /tmp/php-fpm.conf -F &

# Start Nginx in foreground
exec nginx -c /tmp/nginx.conf -g 'daemon off;'
