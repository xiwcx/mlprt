var gulp                = require('gulp');
var svgSprite           = require('gulp-svg-sprite');
var plumber             = require('gulp-plumber');

var config              = {
  shape: {
    dimension: {
      maxWidth: 75,
      maxHeight: 75
    }
  },
  mode: {
    symbol: {
      bust: false,
      dest: ".",
      sprite: "sprite.svg"
    }
  }
};

gulp.task('svg-sprite', function() {
  gulp.src('*.svg', {cwd: './app/images'})
    .pipe(plumber())
    .pipe(svgSprite( config ))
      .on('error', function(error){
        console.log( error );
      })
    .pipe(gulp.dest('./dist/images'));
});
