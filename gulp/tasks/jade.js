var gulp = require('gulp');
var jade = require('gulp-jade');

gulp.task('jade', function() {
  gulp.src('./app/templates/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist/'))
});
