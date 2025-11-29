module.exports = {
  apps: [
    {
      name: 'mycomatrix-nextjs',
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      cwd: '/var/www/mycomatrix/mushroom_frontend_new',
      instances: 1,
      exec_mode: 'fork',
      env: {
        NODE_ENV: 'production',
        PORT: 3000,
      },
      error_file: '/var/www/mycomatrix/logs/nextjs-error.log',
      out_file: '/var/www/mycomatrix/logs/nextjs-out.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      merge_logs: true,
      autorestart: true,
      max_memory_restart: '1G',
      watch: false,
    },
  ],
};

