const server = () => {
    $.browserSync.init({
        server: {
            baseDir: './dist',
        },
        browser: 'firefox',
        open: true,
    })
}
module.exports = server;