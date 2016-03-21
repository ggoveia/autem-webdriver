// get the dependencies
var gulp        = require('gulp'), 
  childProcess  = require('child_process'), 
  mocha         = require('gulp-mocha'),
  util          = require('gulp-util'),
  electron      = require('electron-prebuilt');

// create the gulp task
gulp.task('run', function () { 
  childProcess.spawn(electron, ['--debug=5858','./app'], { stdio: 'inherit' }); 
}); 

gulp.task('tests', tests);

gulp.task('watch-test', function () {
    tests();
    gulp.watch(['test/**', 'app/**/*'], ['tests']);
});

function tests () {
    return gulp.src(['test/**/*.js'], { read : false })
        .pipe(mocha({ reporter: 'spec' }))
        .on('error', util.log);;
}