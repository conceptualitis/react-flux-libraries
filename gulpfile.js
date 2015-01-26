var gulp = require('gulp'),
    reactify = require('reactify'),
    browserify = require('browserify'),
    uglify = require('gulp-uglify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer');

var paths = {
    js: {
        app: './assets/js/index.js',
        bundle: './public/js/'
    },
    watch: './assets/**/*.{js,jsx,scss}'
};

gulp.task('js', function () {
    return browserify(paths.js.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(paths.js.bundle));
});

gulp.task('js-dist', function () {
    return browserify(paths.js.app)
        .transform(reactify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(paths.js.bundle));
});


gulp.task('watch', function () {
    gulp.watch(paths.watch, ['js']);
});

gulp.task('dist', ['js-dist']);
