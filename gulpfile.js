var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var mocha = require('gulp-mocha');

gulp.task('');

gulp.task('compress', function() {
  return gulp.src('src/*.js')
         .pipe(concat('concat.js'))
         .pipe(gulp.dest('dist'))
         .pipe(rename('pomodoro.js'))
         .pipe(uglify())
         .pipe(gulp.dest('dist'));
});
