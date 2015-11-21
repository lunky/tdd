var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var Server = require('karma').Server;

gulp.task('test', function (done) {
  return new Server({
    configFile: __dirname + '/karma.conf.js',
    singleRun: true
  }, done).start();
});

gulp.task('tdd', function (done) {
  new Server({
    configFile: __dirname + '/karma.conf.js',
  }, done).start();
});

gulp.task('default',['test']);