/* eslint strict: ["error", "global"] */
'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

gulp.task('');

gulp.task('compress', () => gulp.src('src/*.js')
         .pipe(concat('concat.js'))
         .pipe(gulp.dest('dist'))
         .pipe(rename('pomodoro.js'))
         .pipe(uglify())
         .pipe(gulp.dest('dist'))
);
