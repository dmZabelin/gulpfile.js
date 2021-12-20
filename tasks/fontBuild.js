const newer = require('gulp-newer');
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');
const fontBuild = () => {
    return $.gulp.src($.path.font.src)
    .pipe($.plumber({
        errorHandler: $.notify.onError(error => ({
            title: 'IMG',
            message: error.message,
        }))
    }))
    .pipe(newer($.path.font.dest))
    .pipe(fonter($.app.fonter))
    .pipe($.gulp.dest($.path.font.dest))
    .pipe(ttf2woff2())
    .pipe($.gulp.dest($.path.font.dest))
};

module.exports = fontBuild;