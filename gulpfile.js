var gulp = require('gulp');
var del=require('del');
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
gulp.src('assets/vendor/bootstrap/**/*.js').pipe(gulp.dest('output1'));

});

gulp.task('output2',['clean2'],function(){
gulp.src('assets/vendor/bootstrap/**/*.js',{base:'assets/vendor/'}).pipe(gulp.dest('output2'));

});

gulp.task('output3',function(){
gulp.src(['assets/vendor/**/*.js','assets/vendor/**/*.css'],{base:'assets/vendor/'}).pipe(gulp.dest('output3'));

});

gulp.task('output4',function(){
gulp.src(['assets/vendor/angular/angular*.js','assets/vendor/angular-animate/angular-*.js'],{base:'assets/vendor/'}).pipe(gulp.dest('output4'));

});

gulp.task('clenoutput2',function(){
del(['output2/bootstrap/**','!output2/bootstrap']);

});

gulp.task('clean2',function(cb){

	del(['output2/**','output2']).then(function(paths){
		console.log('Deleted file/folders:\n',paths.join('\n'))
	}).then(cb);
});

