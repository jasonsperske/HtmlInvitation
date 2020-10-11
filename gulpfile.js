const gulp = require('gulp');
const babel = require('gulp-babel');
const terser = require('gulp-terser');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const flatten = require('gulp-flatten');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

function javascript() {
  return gulp.src([
      'node_modules/crypto-js/core.js',
      'node_modules/crypto-js/enc-base64.js',
      'node_modules/crypto-js/md5.js',
      'node_modules/crypto-js/evpkdf.js',
      'node_modules/crypto-js/cipher-core.js',
      'node_modules/crypto-js/aes.js',
      'node_modules/domjson/dist/domJSON.js',
      'node_modules/confetti-js/dist/index.min.js',
      'src/js/invitation.js'
    ], {
      base: '.'
    })
    .pipe(babel())
    .pipe(terser())
    .pipe(concat('invitation.min.js'))
    .pipe(gulp.dest('public/js/'));
}

function css() {
  return gulp.src('src/css/invitation.scss')
    .pipe(sass({
      paths: ['.']
    }))
    .pipe(cleanCSS())
    .pipe(rename('invitation.min.css'))
    .pipe(gulp.dest('public/css/'));
}

function fonts() {
  return gulp.src(['node_modules/font-awesome/fonts/*'], {
      base: './'
    })
    .pipe(flatten())
    .pipe(gulp.dest('public/css/fonts/'));
}

exports.default = gulp.series(javascript, css, fonts);
exports.watch = function() {
  gulp.watch(['src/js/*.js', 'src/css/*.scss'], gulp.series(javascript, css, fonts));
}
