// Static server for theme dev
var gulp = require('gulp'),
	paths = require('./config/paths'),
	browserSync = require('browser-sync');

// Static server
gulp.task('browserSync:server', function() {
	browserSync({
		server: paths.build.main,
		open: false
	});
});

gulp.task('browserSync:reload', function() {
	return browserSync.reload();
});
