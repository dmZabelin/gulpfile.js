const rename = require('gulp-rename');
const babel = require('gulp-babel');
const webpack = require('webpack-stream');

const jsBuild = () => {
    return $.gulp.src($.path.js.src, {sourcemaps: $.app.isDev})
    .pipe($.plumber({
        errorHandler: $.notify.onError(error => ({
            title: 'JS',
            message: error.message,
        }))
    }))
    .pipe($.gulpIf($.app.isProd, babel()))
    .pipe(webpack($.app.webpack))
    .pipe(rename($.app.renameJS))
    .pipe($.gulp.dest($.path.js.dest, {sourcemaps: $.app.isDev}))
    .pipe($.browserSync.stream());
};

module.exports = jsBuild;