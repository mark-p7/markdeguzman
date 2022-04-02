const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        proxy('/api/random', {
            target: 'https://zenquotes.io',
            secure: false,
            changeOrigin: true
        })
    );
}