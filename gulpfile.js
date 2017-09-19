var gulp = require('gulp'),
  babel = require('gulp-babel'),
  babelify   = require("babelify"),
  browserify = require('browserify'),
  source = require('vinyl-source-stream');

//---------------------------------------------------babel

gulp.task('babel', function() {
  browserify({
    entries: ['src/js/app.js']
  })
    .transform(babelify, {
      presets: ["es2015"],
      plugins: ["transform-class-properties"]
    })
    .bundle()
    .on("error", function (err) {
      console.log("Error : " + err.message);
      this.emit("end");
    })
    .pipe(source('app.js'))
    .pipe(gulp.dest('app/js/'));
});
//---------------------------------------------------watching

gulp.task('watch', function () {
  gulp.watch('src/js/**/*.js', ['babel']);
});
