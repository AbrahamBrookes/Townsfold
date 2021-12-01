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
        host: 'cards.brookesy.dev',
        port: 8080
    }
})

mix.alias({
	'@Character': path.resolve(__dirname, 'resources/js/models/Character'),
	'@Skill': path.resolve(__dirname, 'resources/js/models/Skill'),
	'@Skillbook': path.resolve(__dirname, 'resources/js/models/Skillbook'),
	'@Weapon': path.resolve(__dirname, 'resources/js/models/Weapon'),
	'@WeaponType': path.resolve(__dirname, 'resources/js/models/WeaponType'),
	'@Armour': path.resolve(__dirname, 'resources/js/models/Armour'),
	'@ArmourType': path.resolve(__dirname, 'resources/js/models/ArmourType'),
	'@DamageType': path.resolve(__dirname, 'resources/js/models/DamageType'),
	'@Deck': path.resolve(__dirname, 'resources/js/models/Deck'),
	'@Deckable': path.resolve(__dirname, 'resources/js/models/Deckable'),
	'@Item': path.resolve(__dirname, 'resources/js/models/Item'),
	'@Spell': path.resolve(__dirname, 'resources/js/models/Spell'),
	'@mixins': path.resolve(__dirname, 'resources/js/mixins'),
	'@pages': path.resolve(__dirname, 'resources/js/pages'),
	'@components': path.resolve(__dirname, 'resources/js/components'),
	'@layout': path.resolve(__dirname, 'resources/js/layout'),
})

mix.js('resources/js/app.js', 'public/js').vue()
	.sass('resources/sass/app.scss', 'public/css')
