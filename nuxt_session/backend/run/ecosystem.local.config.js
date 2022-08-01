module.exports = {
  apps: [
    {
      name: 'backend',
      cwd: './',
      script: 'app.js',
      watch: ['app.js'],
      max_memory_restart: '100M',
      restart_delay: 1000,
      env: {
        NODE_ENV: 'development',
        PORT: 3001
      }
    }
  ]
}
