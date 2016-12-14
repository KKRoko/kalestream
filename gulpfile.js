var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function() {
  return browserify('./source/app.js')
    .transform('babelify', {presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('kalestream.js'))
    .pipe(gulp.dest('./build'));
});