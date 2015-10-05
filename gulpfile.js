var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence');

gulp.task('default', function(callback){
    runSequence('build', callback);
});

gulp.task('build', function (callback) {
    runSequence('clean','copy-build',callback);
});

gulp.task('clean', function () {
    return del(['./build'], {force: true});
});

gulp.task('copy-build',['copy-styles','copy-fonts','copy-app-js','copy-vendor-js']);

gulp.task('copy-styles', function(){
    return gulp.src('./app/styles/**/*.css')
        .pipe(gulp.dest('./build/styles'));
});

gulp.task('copy-fonts', function(){
    return gulp.src('./app/fonts/*')
        .pipe(gulp.dest('./build/fonts'));
});

gulp.task('copy-app-js', function(){
    return gulp.src('./app/**/*.js')
        .pipe(gulp.dest('./build/'));
});

gulp.task('copy-vendor-js', function(){
    return gulp.src('./app/libs/*.js')
        .pipe(gulp.dest('./build/libs'));
});

