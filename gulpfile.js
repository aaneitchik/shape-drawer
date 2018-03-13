var gulp = require('gulp');

var bowerFiles = require('main-bower-files');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var inject = require('gulp-inject');
var jshint = require('gulp-jshint');
var ngAnnotate = require('gulp-ng-annotate');
var reload = browserSync.reload;
var rename = require('gulp-rename');
var webpack = require('gulp-webpack');

var bases = {
	app: 'app/',
	dist: 'dist/'
};

var paths = {
	css: 'app/**/*.css',
	scripts: 'app/**/*.js',
	html: 'app/**/*.html',
	ttf: 'app/**/*.ttf',
	svg: 'app/**/*.svg'
};

//Delete the dist directory
gulp.task('clean', function () {
	return gulp.src(bases.dist)
		.pipe(clean());
});

//Inject our dependencies in index.html
gulp.task('inject', ['copy', 'scripts'], function () {
	var target = gulp.src(bases.dist + 'index.html');
	var sources = gulp.src(['./dist/' + '**/*.js', bases.dist + '**/*.css']);
	return target
		.pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower', relative: true}))
		.pipe(inject(sources, {ignorePath: 'dist/', relative: true}))
		.pipe(gulp.dest('./dist'))
});

//Process scripts and concatenate them into one output file
gulp.task('scripts', ['clean'], function () {
	return gulp.src(paths.scripts)
		.pipe(jshint())
		.pipe(jshint.reporter())
		.pipe(webpack())
		.pipe(gulp.dest(bases.dist + 'scripts/'));
});

//Reload browser on file change
gulp.task('browser-reload', ['inject'], function () {
	browserSync.reload();
});

//Init browserSync and watch files
gulp.task('serve', ['inject'], function () {
	browserSync.init({
		startPath: '/',
		server: {
			baseDir: bases.dist,
			routes: {'/bower_components': 'bower_components'}
		}
	});

	gulp.watch(bases.app + '**/*.js', ['browser-reload']);
	gulp.watch(bases.app + '**/*.css', ['browser-reload']);
	gulp.watch(bases.app + '**/*.html', ['browser-reload']);

});

//Copy all other files to dist directly
gulp.task('copy', ['clean'], function () {

	//Copy html
	gulp.src(paths.html)
		.pipe(gulp.dest(bases.dist));

	//Copy css
	gulp.src(paths.css)
		.pipe(gulp.dest(bases.dist));

	//Copy fonts
	gulp.src(paths.ttf)
		.pipe(gulp.dest(bases.dist));

	//Copy loader
	gulp.src(paths.svg)
		.pipe(gulp.dest(bases.dist));

});

gulp.task('default', ['serve', 'browser-reload']);