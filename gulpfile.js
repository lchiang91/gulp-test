var gulp = require('gulp');

var minhtml = require("gulp-htmlmin"),
    cssnano =require('gulp-cssnano'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    imagemin = require('gulp-imagemin');


gulp.task('html',function(){
  return gulp.src('./src/*.html')
  .pipe(minhtml({collapseWhitespace: true}))
  .pipe(gulp.dest('./dist'))

})
gulp.task('css',function(){
  return gulp.src('./src/css/style.css')
  .pipe(concat('merge.min.css'))
  .pipe(cssnano())
  .pipe(gulp.dest('./disc/css'));
})    

gulp.task('compress', function (cb) {
  
      return gulp.src('./src/js/*.js')
      .pipe(concat('merge.min.js'))
      .pipe(uglify())
      .pipe(gulp.dest('./disc/js'));
 
});

gulp.task('img', function(){
gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./disc/img'))
});
gulp.task('build',['html','css','compress','img']);