var gulp = require('gulp'),
    del = require('del'),
    runSequence = require('run-sequence'),
    streamSeries = require('stream-series'),
    angularFilesort = require('gulp-angular-filesort'),
    inject = require('gulp-inject'),
    serve = require('gulp-serve');

var config = require('./gulp/gulp.config.js');

gulp.task('default', function(callback){
    runSequence('build','serve', callback);
});

gulp.task('build', function (callback) {
    runSequence('clean','copy-build','index',callback);
});



gulp.task('index', function () {
    //var jsThirdPartyLibraryFiles = ['./build/libs/**/!(angular)*.js']
    //var jsAngularLibraryFiles = ['./build/libs/**/angular*.js'];
    //var jsAppFiles = ['./build/app/**/*.js', '!./build/app/**/*.spec.js'];
    //var cssFiles = ['./build/app/styles/*.css'];
    var jsAngularLibraryFilesStreamSorted = gulp.src(config.files.jsAngular).pipe(angularFilesort());
    var jsAppFilesStreamSorted = gulp.src(config.files.jsApp).pipe(angularFilesort());
    var jsThirdPartyFilesStream = gulp.src(config.files.jsThirdParty);

    return gulp.src('./app/index.html')
        .pipe(inject(streamSeries(jsAngularLibraryFilesStreamSorted,jsThirdPartyFilesStream, jsAppFilesStreamSorted ) , {ignorePath: 'build'}))
        .pipe(inject(gulp.src(config.files.css), {ignorePath: 'build'}))
        .pipe(gulp.dest(config.build_dir));
});

gulp.task('clean', function () {
    return del([config.build_dir], {force: true});
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

gulp.task('serve', serve({
        root: config.build_dir,
        port:4000
    }
));

