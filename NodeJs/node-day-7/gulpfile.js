const gulp = require('gulp');
const gutil = require('gulp-util');

gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('copyHtml', () => {
    gulp.src('source/*.html').pipe(gulp.dest('public'));
});


gulp.task('copyJs', () => {
    gulp.src('source/*.js').pipe(gulp.dest('public'));
});

gulp.task('copyAll', ['copyJs', 'copyHtml']);