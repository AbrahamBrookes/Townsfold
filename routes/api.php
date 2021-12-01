<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

	Route::resource('character',	'App\Http\Controllers\CharacterController');
	Route::resource('skill', 		'App\Http\Controllers\SkillController');
	Route::resource('skillbook', 	'App\Http\Controllers\SkillbookController');
	Route::resource('weapon', 		'App\Http\Controllers\WeaponController');
	Route::resource('weapon-type', 	'App\Http\Controllers\WeaponTypeController');
	Route::resource('armour', 		'App\Http\Controllers\ArmourController');
	Route::resource('armour-type', 	'App\Http\Controllers\ArmourTypeController');
	Route::resource('damage-type', 	'App\Http\Controllers\DamageTypeController');
	Route::resource('deck',      	'App\Http\Controllers\DeckController');
	Route::resource('spell', 	    'App\Http\Controllers\SpellController');
	Route::resource('item',      	'App\Http\Controllers\ItemController');
