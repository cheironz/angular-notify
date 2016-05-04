var gulp = require('gulp'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	autoprefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css'),
	concat = require('gulp-concat'),
	jshint = require('gulp-jshint'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	plumber = require('gulp-plumber'),
	notify = require('gulp-notify');

// Configs
var combineJSName = 'angular-notify.js';
var autoprefixerConfig = {
	browsers: ['last 2 versions', 'Android >= 4.0'],
	cascade: true,
	remove: true
}

gulp.task('style', function(){
	return gulp.src('styles/sass/*.scss')
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(sourcemaps.init())
	.pipe(sass())
	.pipe(autoprefixer(autoprefixerConfig))
	.pipe(gulp.dest('styles/css'))
	.pipe(rename({ suffix: '.min'}))
	.pipe(cleanCSS())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('styles/css'))
});

gulp.task('js', function(){
	return gulp.src('scripts/src/*.js')
	.pipe(plumber({errorHandler: notify.onError('Error: <%= error.message %>')}))
	.pipe(sourcemaps.init())
	.pipe(jshint())
	.pipe(jshint.reporter('default'))
	.pipe(concat(combineJSName))
	.pipe(gulp.dest('scripts'))
	.pipe(rename({ suffix: '.min'}))
	.pipe(uglify())
	.pipe(sourcemaps.write('./'))
	.pipe(gulp.dest('scripts'))
});

gulp.task('watch', function(){
	gulp.watch('styles/sass/*.scss', ['style']);
	gulp.watch('scripts/src/*.js', ['js']);
});
	
gulp.task('default', function(){
	gulp.start('style', 'js', 'watch');
});