var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch('./*.css').on('change', browserSync.reload);
});