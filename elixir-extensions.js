var gulp = require('gulp');
var Elixir = require('laravel-elixir');
var pug = require('gulp-pug');
var spritesmith  = require('gulp.spritesmith');

var Task = Elixir.Task;

Elixir.extend('pugToHtml', function() {
    new Task('pug-html', function() {
        return gulp.src('resources/assets/pug/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('public'));
    })
    .watch('./resources/assets/pug/**/*.pug');
});

Elixir.extend('retinaSprites', function() {
    new Task('sprite-retina', function () {
      var data = gulp.src('resources/assets/img/sprites/*.png').pipe(spritesmith({
        retinaSrcFilter: 'resources/assets/img/sprites/*-2x.png',
        imgName: 'sprite-bitmap.png',
        retinaImgName: 'sprite-bitmap-2x.png',
        cssName: '_sprite.less'
      }));
      var imgStream = data.img.pipe(gulp.dest('public/css'));
      var cssStream = data.css.pipe(gulp.dest('resources/assets/less'));
    })
    .watch('./resources/assets/img/sprites/*.png');
});