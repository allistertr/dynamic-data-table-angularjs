(function () {
    const DEST = 'dist/';
    const gulp = require('gulp');
    const babel = require('gulp-babel');
    const uglify = require("gulp-uglify");
    const concat = require('gulp-concat');
    const rename = require('gulp-rename');
    const embedTemplates = require('gulp-angular-embed-templates');

    gulp.task('compress', function () {
        gulp.src(['app/**/*module.js', 'app/**/*.js'])
            .pipe(embedTemplates(
                { 'basePath': './' }
            ))
            .pipe(babel())
            .pipe(concat('dynamic-data-table-angularjs.js'))
            .pipe(gulp.dest(DEST))
            .pipe(uglify())
            .pipe(rename({
                extname: '.min.js'
            }))
            .pipe(gulp.dest(DEST));
    });
}()); 