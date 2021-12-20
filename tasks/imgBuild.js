const imagemin = require('gulp-imagemin');
const newer = require('gulp-newer');
const webp = require('gulp-webp');

const imgBuild = () => {
    return $.gulp.src($.path.img.src)
    .pipe($.plumber({
        errorHandler: $.notify.onError(error => ({
            title: 'IMG',
            message: error.message,
        }))
    }))
    .pipe(newer($.path.img.dest))
    .pipe($.gulpIf($.app.isProd, webp()))
    .pipe($.gulp.dest($.path.img.dest))
    .pipe($.gulpIf($.app.isProd, $.gulp.src($.path.img.src)))
    .pipe($.gulpIf($.app.isProd, newer($.path.img.dest)))
    .pipe($.gulpIf($.app.isProd, imagemin($.app.imagemin)))
    .pipe($.gulpIf($.app.isProd, $.gulp.dest($.path.img.dest)))
    .pipe($.browserSync.stream());
};

module.exports = imgBuild;