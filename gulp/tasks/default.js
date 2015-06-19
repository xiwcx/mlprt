'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('default', ['clean', 'jade', 'sass'], function () {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });

  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/templates/**/*.jade', ['jade']);
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
});
