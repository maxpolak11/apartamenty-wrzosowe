
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const minify = require('gulp-minify-css');
const minifyJs = require('gulp-minify');
const browserSync = require('browser-sync').create();

const webp = require('gulp-webp');

// WebP //
gulp.task('webp', () => {
    
    return gulp.src(['assets/images/**/*.jpg', 'assets/images/**/*.png'])
        .pipe(webp())
        .pipe(gulp.dest('assets/images/webp/'));
});

// Sass //
gulp.task('sass', () => {
    return gulp.src('assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(minify())
        .pipe(gulp.dest('assets/css/'))
        .pipe(browserSync.stream());
});

// Javascript //
gulp.task('js', () => {
    return gulp.src('assets/js/build/**/*.js')
        .pipe(concat('main.js'))
        .pipe(minifyJs({
            noSource: true
        }))
        .pipe(gulp.dest('assets/js/'));
});

// main task - browser sync init + watch files for changes //
gulp.task('serve', function() {
    
    // init browsersync //
    browserSync.init({
        proxy: "pf-apartamenty.lh/"
    });

    // watch sass //
    gulp.watch(['assets/sass/**/*.scss', 'assets/sass/**/*.css'], gulp.series('sass'));

    // watch html,php and javascript files //
    gulp.watch(['**/*.html','**/*.php', 'assets/js/main-min.js']).on('change', browserSync.reload)

    // watch js //
    gulp.watch('assets/js/build/**/*.js').on('change', gulp.series('js'));


});

gulp.task('default', gulp.series(['serve']));
