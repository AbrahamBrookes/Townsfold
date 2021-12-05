const mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.options({
    hmrOptions: {
        host: 'townsfolk.brookesy.dev',
        port: 8080
    }
})

mix.alias({
	// models
	'@Town': path.resolve(__dirname, 'resources/js/models/Town'),
	'@Culture': path.resolve(__dirname, 'resources/js/models/Culture'),
	'@Person': path.resolve(__dirname, 'resources/js/models/Person'),
	'@Family': path.resolve(__dirname, 'resources/js/models/Family'),
	
	// app
	'@mixins': path.resolve(__dirname, 'resources/js/mixins'),
	'@pages': path.resolve(__dirname, 'resources/js/pages'),
	'@components': path.resolve(__dirname, 'resources/js/components'),
	'@layout': path.resolve(__dirname, 'resources/js/layout'),
})

mix.js('resources/js/app.js', 'public/js').vue()
	.sass('resources/sass/app.scss', 'public/css')
