var gulp = require('gulp');
var tinypng = require('gulp-tinypng-compress');

gulp.task('tinypng', function (done) {
   gulp.src('img/**/*.{png,jpg,jpeg}')
      .pipe(tinypng({
         key: 'ILGj6BYXCPvw7nOQJ2KZ3ufdgWdDQ3NS',
      }))
      .pipe(gulp.dest('images'));
      done();
});