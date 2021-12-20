const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const shortHand = require('gulp-shorthand');
const webpCSS = require("gulp-webp-css");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

const scssBuild = () => {
    return $.gulp.src($.path.scss.src, {sourcemaps: $.app.isDev})
    .pipe($.plumber({
        errorHandler: $.notify.onError(error => ({
            title: 'SCSS',
            message: error.message,
        }))
    }))
    .pipe(sass())
    .pipe(sass($.app.sass))
    .pipe($.gulpIf($.app.isProd, webpCSS()))
    .pipe($.gulpIf($.app.isProd, autoprefixer($.app.autoprefixer)))
    .pipe($.gulpIf($.app.isProd, shortHand()))
    .pipe($.gulp.dest($.path.scss.dest), {sourcemaps: $.app.isDev})
    .pipe($.gulpIf($.app.isProd, cleanCSS($.app.cleanCSS)))
    .pipe(rename($.app.rename))
    .pipe($.gulp.dest($.path.css.dest), {sourcemaps: $.app.isDev})
    .pipe($.browserSync.stream());
}

module.exports = scssBuild;