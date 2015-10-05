module.exports = {
    build_dir : 'build',
    files: {
        js: ['./app/**/*.js'],
        jsThirdParty : ['./build/libs/**/!(angular)*.js'],
        jsAngular : ['./build/libs/**/angular*.js'],
        jsApp : ['./build/app/**/*.js', '!./build/app/**/*.spec.js'],
        css : ['./build/app/styles/*.css']
    }
}
