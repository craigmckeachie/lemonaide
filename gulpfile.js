var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    streamSeries = require('stream-series'),
    angularFilesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject');

gulp.task('default', function(callback){
    runSequence('build', callback);
});

gulp.task('build', function (callback) {
    runSequence('clean','copy-build','index',callback);
});

gulp.task('index', function () {
    var jsThirdPartyLibraryFiles = ['./build/libs/**/!(angular)*.js']
    var jsAngularLibraryFiles = ['./build/libs/**/angular*.js'];
    var jsAppFiles = ['./build/app/**/*.js', '!./build/app/**/*.spec.js'];
    var cssFiles = ['./build/app/styles/*.css'];
    var jsAngularLibraryFilesStreamSorted = gulp.src(jsAngularLibraryFiles).pipe(angularFilesort());
    var jsAppFilesStreamSorted = gulp.src(jsAppFiles).pipe(angularFilesort());
    var jsThirdPartyFilesStream = gulp.src(jsThirdPartyLibraryFiles);

    return gulp.src('./app/index.html')
        .pipe(inject(streamSeries(jsAngularLibraryFilesStreamSorted,jsThirdPartyFilesStream, jsAppFilesStreamSorted ) , {ignorePath: 'build'}))
        .pipe(inject(gulp.src(cssFiles), {ignorePath: 'build'}))
        .pipe(gulp.dest('./build'));
});

gulp.task('clean', function () {
    return del(['./build'], {force: true});
});

gulp.task('copy-build',['copy-templates','copy-json','copy-styles','copy-fonts','copy-app-js','copy-vendor-js']);

gulp.task('copy-styles', function(){
    return gulp.src('./app/styles/**/*.css')
        .pipe(gulp.dest('./build/app/styles'));
});

gulp.task('copy-fonts', function(){
    return gulp.src('./app/fonts/*')
        .pipe(gulp.dest('./build/app/fonts'));
});

gulp.task('copy-app-js', function(){
    return gulp.src('./app/**/*.js')
        .pipe(gulp.dest('./build/app'));
});

gulp.task('copy-vendor-js', function(){
    return gulp.src('./libs/*.js')
        .pipe(gulp.dest('./build/libs'));
});

gulp.task('copy-templates', function(){
    return gulp.src('./app/**/!(index)!(SpecRunner)*.html')
        .pipe(gulp.dest('./build/app'));
});

gulp.task('copy-json', function(){
    return gulp.src('./app/**/*.json')
        .pipe(gulp.dest('./build/app'));
});

