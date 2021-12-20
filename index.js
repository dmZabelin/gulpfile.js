global.$ = {
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),
    path: require('./config/path.js'),
    app: require('./config/app.js'),
    plumber: require('gulp-plumber'),
    gulpIf: require('gulp-if'),
    notify: require('gulp-notify'),
}

// Подключение задач
const reguireDir = require('require-dir');
const task = reguireDir('./tasks', {recurse: true});

// Наблюдатель
const watcher = () => {
    $.gulp.watch($.path.pug.watch, task.pugBuild);
    $.gulp.watch($.path.scss.watch, { readDelay: 1000 }, task.scssBuild);
    $.gulp.watch($.path.js.watch, task.jsBuild);
    $.gulp.watch($.path.img.watch, task.imgBuild);
}

// задачи
exports.server = task.server;
exports.pug = task.pugBuild;
exports.scss = task.scssBuild;
exports.js = task.jsBuild;
exports.img = task.imgBuild;
exports.font = task.fontBuild;
exports.watch = watcher;
exports.clear = task.clear;

// Сборка
const build = $.gulp.series (
    task.clear,
    $.gulp.parallel(task.pugBuild, task.scssBuild, task.jsBuild, task.imgBuild, task.fontBuild),
)

const dev = $.gulp.series (
    build,
    $.gulp.parallel(watcher, task.server)
)
exports.default = $.app.isProd ? build : dev;