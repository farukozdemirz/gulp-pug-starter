const { src, dest, watch, task, series } = require("gulp");
const sass = require('gulp-sass')(require('sass'));
const pug = require("gulp-pug");
const concat = require("gulp-concat");
var browserSync = require('browser-sync').create();
var autoprefixer = require("gulp-autoprefixer");
var sourcemaps = require("gulp-sourcemaps");
const cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');


task("scss", function () {
    return src("./src/css/**/*.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(cleanCSS())
        .pipe(dest("./dist/assets/"))
        .pipe(browserSync.stream());
});

task("js", function () {
    return src("./src/js/*.js")
        .pipe(concat("app.js"))
        .pipe(uglify())
        .pipe(dest("./dist/assets/"))
        .pipe(browserSync.stream());
});

task("pug", function () {
    return src("./src/pug/*.pug")
        .pipe(pug({ pretty: true, }))
        .pipe(dest("./dist"))
        .pipe(browserSync.stream());
});

task("serve", function () {
    browserSync.init({
        server: "./dist"
    });

    watch("./src/**/*.scss", series("scss"));
    watch("./src/pug/*.pug", series("pug"));
    watch("./src/js/*.js", series("js"));
})