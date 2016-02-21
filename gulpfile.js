var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jade = require('gulp-jade');
 
gulp.task('webserver', function() {
  connect.server({
    port: 80
  });
});
 
gulp.task('jade', function() {
    return gulp.src('src/templates/**/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('.'));
});

gulp.task('default', ['jade', 'webserver']);