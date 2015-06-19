'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

gulp.task('default', ['clean', 'jade', 'sass', 'imagemin', 'svg-sprite'], function () {
  browserSync.init({
      server: {
          baseDir: "./dist"
      }
  });

  gulp.watch('./app/templates/**/*.jade', ['jade']);
  gulp.watch('./app/sass/**/*.scss', ['sass']);
  gulp.watch('./app/images/*.{jpg,png}', ['imagemin']);
  gulp.watch('./dist/*.html').on('change', browserSync.reload);
});
