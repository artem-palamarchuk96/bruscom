var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var browsersync = require('browser-sync');
var imagemin = require('gulp-imagemin');
var rigger = require('gulp-rigger');
var less = require('gulp-less');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var rimraf = require('rimraf');
var sequence = require('gulp-sequence');
var modernizr = require('gulp-modernizr');

gulp.task('html', function() {
	return gulp.src('src/*.html')
			.pipe(rigger())
			.pipe(gulp.dest('dist'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('css', function() {
	return gulp.src('src/css/main.css')
			.pipe(less())
			.pipe(gulp.dest('dist/css'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('js', function() {
	return gulp.src('src/js/common.js')
			.pipe(rigger())
			.pipe(uglify())
			.pipe(gulp.dest('dist/js'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('images', function() {
	return gulp.src('src/images/**/*.*')
			.pipe(imagemin())
			.pipe(gulp.dest('dist/images'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('fonts', function() {
	return gulp.src('src/fonts/**/*.*')
			.pipe(gulp.dest('dist/fonts'))
			.pipe(browsersync.reload({stream: true}))
})

gulp.task('modernizr', function() {
  	return gulp.src('src/js/*.js')
    .pipe(modernizr({
    	options: [
    		'html5shiv',
    		'html5printshiv',
    		'addTest',
    		'testProp',
    		'testStyles'
    	]
    }))
    .pipe(gulp.dest("src/js/partials"))
});

gulp.task('watch', function(cb) {
	sequence('html', 'css', 'modernizr', 'js', ['images', 'fonts'], cb);
	gulp.watch('src/**/*.html', ['html']);
	gulp.watch('src/**/*.css', ['css']);
	gulp.watch('src/**/*.js', ['js']);
	gulp.watch('src/images/**/*.*', ['images']);
	gulp.watch('src/fonts/**/*.*', ['fonts']);
})

gulp.task('default', sequence('cleandist', 'watch', 'browser'));

gulp.task('browser', function() {
    browsersync.init({
        server: {
            baseDir: "dist"
        },
        notify: false
    });
});

gulp.task('cleandist', function(cb) {
	rimraf('./dist', cb);
})