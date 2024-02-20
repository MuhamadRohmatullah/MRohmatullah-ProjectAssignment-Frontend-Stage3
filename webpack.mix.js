const mix = require("laravel-mix");

mix.js('resources/js/app.js', 'public/js/app.js')
   .vue()
   .postCss('resources/css/app.css', 'public/css/app.css', [])
   .sass('resources/sass/app.scss', 'public/css/app.css');