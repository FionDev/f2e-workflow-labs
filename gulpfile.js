var gulp = require('gulp');
gulp.task('default',['mytask1'], function() {
// place code for your default task here
console.log('My Default Task');
});
gulp.task('mytask1',['mytask2'], function() {
// place code for your default task here
console.log('Task1 output');
//cb();
});
gulp.task('mytask2', function() {
// place code for your default task here
console.log('Task2 output');

});

gulp.task('output1',function(){
gulp.src('assets/bootstrap/**/*.js').pipe(gulp.dest('output1'));

});

gulp.task('output2',function(){
gulp.src('assets/bootstrap/**/*.js',{base:'assets'}).pipe(gulp.dest('output2'));

});