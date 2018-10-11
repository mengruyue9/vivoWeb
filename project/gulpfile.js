const gulp = require('gulp');
//拷贝html文件
gulp.task("copy-html",function () {
	return gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload());
})
//拷贝图片
gulp.task("images",function () {
	return gulp.src("*.{jpg,png,gif}")
	.pipe(gulp.dest("dist/images"))
	.pipe(connect.reload());
})
//sass
//压缩 gulp-minify-css
//重命名 gulp-rename
const scss = require("gulp-sass-china");
const minifyCSS = require("gulp-minify-css");
const rename = require("gulp-rename");
gulp.task("scss",function () {
	return gulp.src("stylesheet/index.scss")
	.pipe(scss())
	.pipe(gulp.dest("dist/css"))
	.pipe(minifyCSS())
	.pipe(rename("index.min.css"))
	.pipe(gulp.dest("dist/css"))
	.pipe(connect.reload());
})
//拷贝js
gulp.task("scripts",function () {
	return gulp.src(["*.js","!gulpfile.js"])
	.pipe(gulp.dest("dist/js"))
	.pipe(connect.reload());
})

//拷贝数据
gulp.task("data",function () {
	return gulp.src(["*.json","!package.json"])
	.pipe(gulp.dest("dist/data"))
	.pipe(connect.reload());
})

//建立工程的任务
gulp.task("build",["copy-html","images","scss","scripts","data"],function () {
	console.log("编译成功");
})
//监听任务
gulp.task("watch",function() {
	gulp.watch(["*.json","!package.json"],["data"]);
	gulp.watch(["*.js","!gulpfile.js"],["scripts"]);
	gulp.watch(["*.{jpg,png,gif}"],["images"]);
	gulp.watch(["stylesheet/index.scss"],["scss"]);
	gulp.watch(["*.html"],["copy-html"]);
})


//启动服务
 const connect = require("gulp-connect");
 gulp.task("server",function() {
 	connect.server({
 		root:"dist",
 		port:8080,
 		livereload:true
 	})
 })

 //启动默认任务
 gulp.task("default",["server","watch"]);