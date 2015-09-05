var gulp = require('gulp');
gulp.task('default',['mytask2','mytask1'], function() {
// place code for your default task here
console.log('My Default Task');
});
gulp.task('mytask1', function() {
// place code for your default task here
console.log('Task1 output');
//cb();
});
gulp.task('mytask2', function(cb) {
// place code for your default task here
console.log('Task2 output');
cb();
});
