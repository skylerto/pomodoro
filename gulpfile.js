const gulp = require('gulp');
const concat = require('gulp-concat');

gulp.task('concat', () => gulp.src(['build/timer.js', 'build/pomodoro.js'])
                              .pipe(concat('pomodoro.js'))
                              .pipe(gulp.dest('dist'))
         );
