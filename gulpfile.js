var gulp = require('gulp');
var textlint = require('gulp-textlint');

gulp.task('textlint', function(){
  return gulp.src(['./src/**/*.md'])
    .pipe(textlint());
});

gulp.task('watch', ['textlint'], function(){
  gulp.watch('./src/**/*.md', ['textlint']);
});
