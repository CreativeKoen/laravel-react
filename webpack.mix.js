const { mix } = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/assets/react/app.js', 'public/app')
   .sass('resources/assets/sass/app.scss', 'public/css');
   //.browserSync({ proxy: 'localhost:8000' , port: 2000 });
