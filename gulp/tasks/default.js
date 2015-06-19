'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('default', ['clean', 'jade', 'sass'], function () {
  browserSync.init({
      server: {
          baseDir: "./dist/"
      }
  });

  gulp.watch(['./*.html', './css/*.css']).on('change', browserSync.reload);
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/jade/**/*.jade', ['jade']);
});
