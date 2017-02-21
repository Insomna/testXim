const elixir = require('laravel-elixir');

require('./elixir-extensions')

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

elixir((mix) => {
  mix.retinaSprites()
     .less('app.less')
     .scripts(['main.js'])
     .copy('resources/assets/img/content', 'public/img/content')
     .pugToHtml()
     .browserSync({
        proxy: false,
        server: {
          baseDir: './public'
        },
        files: './public/**/*.*'
      })
});