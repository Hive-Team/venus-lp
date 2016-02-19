var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var webserver = require('gulp-webserver');
var buffer = require('vinyl-buffer');
var uglify= require('gulp-uglify');
var less = require('gulp-less');
var minifycss = require('gulp-minify-css');
var del = require('del');

/* 合并压缩LESS */
gulp.task('minifyless', function () {
  gulp.src('./app/assets/less/app.less')
    .pipe(less())
    //.pipe(minifycss())
    .pipe(gulp.dest('./app/assets/minicss'))
});

//打包js
gulp.task('browserify', function() {
  browserify('./app/common/app.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", function (err) { console.log("Error : " + err.message); })
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest('./app/build'))
});

//监听js的改变
gulp.task('watchjs', function() {
  gulp.watch('./app/common/**/**/*.js', ['cleanjs','browserify'])
});

//监听less的改变
gulp.task("watcherless",function(){
  gulp.watch(['./app/assets/less/**/*.less'],['cleancss','minifyless']);
});

//压缩js
gulp.task('uglify',function(){
  return gulp.src('./app/build/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./app/build'));
})

//删除build文件夹下的js文件
gulp.task("cleanjs",function(cb){
  del(['./app/build/*.js'], cb);
});

//删除minicss文件夹下的css文件
gulp.task("cleancss",function(cb){
    del(['./app/assets/minicss/*.css'], cb);
});

//web服务器
gulp.task('webserver', function() {
  gulp.src('./app')
    .pipe(webserver({
      host: '0.0.0.0',
	  port:9999,
      livereload: false
    })
  );
});

gulp.task('default', ['browserify', 'minifyless', 'watcherless', 'watchjs', 'webserver']);
