const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function builkStyles() {
    return src('scss/**/*.scss')
        .pipe(sass())
        .pipe(dest('css')) // output
}

function watchTask() {
    watch(['scss/**/*.scss'], builkStyles);
}

exports.default = series(builkStyles, watchTask);