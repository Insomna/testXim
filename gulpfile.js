const elixir = require('laravel-elixir');

//require('laravel-elixir-vue-2');
var spritesmith  = require('gulp.spritesmith');
    pug = require('gulp-pug');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application as well as publishing vendor resources.
 |
 */

gulp.task('sprite-retina', function () {
  var data = gulp.src('resources/assets/img/sprites/*.png').pipe(spritesmith({
    retinaSrcFilter: 'resources/assets/img/sprites/*-2x.png',
    imgName: 'sprite-bitmap.png',
    retinaImgName: 'sprite-bitmap-2x.png',
    cssName: '_sprite.less'
  }));
  var imgStream = data.img.pipe(gulp.dest('public/css'));
  var cssStream = data.css.pipe(gulp.dest('resources/assets/less'));
  // return merge(imgStream, cssStream);
});

gulp.task('pug-to-html', function() {
    return gulp.src('resources/assets/pug/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('public/html'));
});

elixir((mix) => {
    mix.task('sprite-retina')
       .less('app.less')
       .scripts(['visual.js'])
       .copy('resources/assets/img/content', 'public/img/content')
       .task('pug-to-html')
       //.browserSync({proxy: 'birds.app'})
});