var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');

var autoprefixer = require('gulp-autoprefixer');

var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();

gulp.task('default', ['css', 'sync', 'watch']);

gulp.task('sync', function() {
	browserSync.init({
		server: {
			baseDir: "./www/"
		}
	});
});

gulp.task('css', function() {
	gulp.src('www/sass/main.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({
			outputStyle: 'compressed',
			errLogToConsole: false
		}).on('error', function(err) {
			return notify().write(err);
		}))
		.pipe(autoprefixer({
			browsers: ['> 1%'],
			cascade: false
		}))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('www/css'))
		.pipe(browserSync.stream())
		.pipe(notify('CSS Compiled' ));
});

gulp.task('watch', function () {
	gulp.watch('www/sass/**', ['css']);
	gulp.watch("www/*.html").on('change', browserSync.reload);
});
