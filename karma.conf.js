module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'libs/angular.js',
            'libs/angular-route.js',
            'libs/angular-resource.js',
            'libs/angular-messages.js',
            'libs/lodash.js',
            'libs/restangular.js',
            'app/app.module.js',
            'app/services/app.services.module.js',
            'app/directives/directives.module.js',
            'app/**/!(*.spec).js',
            //'app/testing/js/unit-test-helpers.js',
            'app/**/*.html',
            'libs/angular-mocks.js',
            'app/**/*.spec.js'

        ],
        exclude: ['app/**/SpecRunner.html',
            'app/index.html','app/templates.js'],


        /*********************************************************/
        // Note: this was added AFTER karma init was completed.
        /*********************************************************/
        ngHtml2JsPreprocessor: {
            stripPrefix: 'src/',
            //stripSufix: '.ext',

            // setting this option will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'myAppTemplates'
        },

        // list of files to exclude
        //exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        //preprocessors: {
        //    'src/app/**/*.html': ['ng-html2js']
        //},


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false
    });
};