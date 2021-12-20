const pug = require('gulp-pug');
const webpHtml = require("gulp-webp-html");
const htmlMin = require("gulp-htmlmin");
const htmlFormat = require("gulp-format-html");

const pugBuild = () => {
    return $.gulp.src($.path.pug.src)
    .pipe(pug())
    .pipe($.gulpIf($.app.isProd, webpHtml()))
    .pipe(htmlFormat())
    .pipe($.gulp.dest($.path.pug.dest))
    .pipe($.gulpIf($.app.isProd, htmlMin ($.app.htmlmin)))
    .pipe($.gulp.dest($.path.pug.destHtml))
    .pipe($.browserSync.stream());

}
module.exports = pugBuild;