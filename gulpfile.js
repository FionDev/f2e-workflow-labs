var gulp = require('gulp');
gulp.task('default',['mytask1','mytask2'], function() {
// place code for your default task here
console.log('My Default Task');
});
gulp.task('mytask1', function() {
// place code for your default task here
console.log('Task1 output');
});
gulp.task('mytask2', function() {
// place code for your default task here
console.log('Task2 output');
});
