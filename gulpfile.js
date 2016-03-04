var gulp            = require('gulp'),
    config          = require('./gulp-config.json'),
    connect         = require('gulp-connect'),
    jade            = require('gulp-jade'),
    sass            = require('gulp-sass'),
    liveReload      = require('gulp-livereload'),
    mainBowerFiles  = require('gulp-main-bower-files'),
    ghPages         = require('gulp-gh-pages'),
    uglify          = require('gulp-uglify'),
    rename          = require('gulp-rename'),
    filter          = require('gulp-filter'),
    csso            = require('gulp-csso');

gulp.task('server', function() {
    connect.server({
        port: 80,
        root: 'dist',
        livereload: true
    });
});

gulp.task('jade', function() {
    return gulp.src(config.paths.src.jade)
        .pipe(jade({ pretty: true }))
        .pipe(gulp.dest(config.paths.dist.html))
        .pipe(liveReload());
});

gulp.task('sass', function () {
    return gulp.src(config.paths.src.sass)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest(config.paths.dist.css))
        .pipe(liveReload());
});

gulp.task('js', function () {
    return gulp.src(config.paths.src.js)
        .pipe(gulp.dest(config.paths.dist.js))
        .pipe(liveReload());
});

gulp.task('assets', function() {
    return gulp.src(config.paths.src.assets)
        .pipe(gulp.dest(config.paths.dist.assets));
});

gulp.task('partials', function() {
    return gulp.src(config.paths.src.partials)
        .pipe(gulp.dest(config.paths.dist.partials));
});

gulp.task('index', function() {
    return gulp.src(config.paths.src.index)
        .pipe(gulp.dest(config.paths.dist.index));
});

gulp.task('fonts', function() {
    return gulp.src(config.paths.src.fonts)
        .pipe(gulp.dest(config.paths.dist.fonts));
});

gulp.task('bower', function() {

    var filterJS = filter(['**/*.js', '!**/*.min.js'], { restore: true }),
        filterCSS = filter(['**/*.css', '!**/*.min.css'], { restore: true });
    gulp.src('./bower.json')
        .pipe(mainBowerFiles(), { base: config.paths.src.bower })
        .pipe(filterJS)
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(filterJS.restore)
        .pipe(filterCSS)
        .pipe(csso())
        .pipe(rename({ suffix: '.min' }))
        .pipe(filterCSS.restore)
        .pipe(gulp.dest(config.paths.dist.bower))
});

gulp.task('watch', function () {
    liveReload.listen();
    gulp.watch(config.paths.src.sass, ['sass']);
    gulp.watch(config.paths.src.js, ['js']);
    gulp.watch(config.paths.src.jade, ['jade']);
    gulp.watch(config.paths.src.index, ['index']);
    gulp.watch(config.paths.src.partials, ['partials']);
});

gulp.task('gh-pages', ['build'], function () {
    return gulp.src(config.paths.dist.all).pipe(ghPages());
});

gulp.task('build', ['jade', 'sass', 'js', 'partials', 'index', 'assets', 'fonts', 'bower']);
gulp.task('serve', ['build', 'server', 'watch']);
gulp.task('default', ['serve']);
