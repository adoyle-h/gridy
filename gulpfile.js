'use strict';

// include plugins
const gulp = require('gulp');
const minifyCSS = require('gulp-clean-css');
const prefix = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const rename = require('gulp-rename');
const sass = require('gulp-sass');

// sass and css
gulp.task('css', () => {
    gulp.src('src/**/*.scss')
        .pipe(plumber())
        .pipe(sass({
            sourceComments: null,
            precision: 7,
        }))
        .pipe(prefix({
            browsers: ['last 2 versions'],
            cascade: false,
        }))
        .pipe(gulp.dest('dist'))
        .pipe(minifyCSS())
        .pipe(rename('gridy.min.css'))
        .pipe(gulp.dest('dist'));
});

// watch files
gulp.task('watch', () => {
    gulp.watch('src/**/*.scss', ['css']);
});

// default task
gulp.task('default', ['css', 'watch']);
