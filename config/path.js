const pathSrc = './app';
const pathDest = './dist';

module.exports = {
    root: pathDest,
    pug: {
        src: pathSrc + '/pug/pages/*.pug',
        watch: pathSrc + '/pug/**/*.pug',
        dest: pathSrc,
        destHtml: pathDest
    },
    scss: {
        src: pathSrc + '/assets/scss/*.scss',
        watch: pathSrc + '/assets/scss/**/*.scss',
        dest: pathSrc + '/assets/scss'
    },
    css: {
        src: pathSrc + '/assets/scss/*.css',
        watch: pathSrc + '/assets/scss/**/*.css',
        dest: pathDest + '/assets/css/'
    },
    js: {
        src: pathSrc + '/assets/js/*.js',
        watch: pathSrc + '/assets/js/**/*.js',
        dest: pathDest + '/assets/js/'
    },
    img: {
        src: pathSrc + '/assets/img/*.{png,jpg,jpeg,gif,svg}',
        watch: pathSrc + '/assets/img/**/*.{jpg,jpeg,png,gif,svg}',
        dest: pathDest + '/assets/img/'
    },
    font: {
        src: pathSrc + '/assets/fonts/*.otf',
        watch: pathSrc + '/assets/fonts/**/*.otf',
        dest: pathDest + '/assets/fonts/'
    }
}