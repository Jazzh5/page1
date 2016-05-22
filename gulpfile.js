var gulp=require('gulp')
var jade=require('gulp-jade')
var jsmin=require('gulp-jsmin')
var cssmin=require('gulp-cssmin')
var less=require('gulp-less')

gulp.task('default',function(){
	gulp.src('Jade/body.jade')
	.pipe(jade())
	.pipe(gulp.dest('HTML/'))
})
gulp.task('css',function(){
	gulp.src('Jade/index.less')
	.pipe(less('new.css'))
	.pipe(gulp.dest('CSS/'))
})