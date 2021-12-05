<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// prefix api
Route::prefix('api')->group(function () {
    Route::resource('town', \App\Http\Controllers\TownController::class);
    Route::resource('household', \App\Http\Controllers\FamilyController::class);
    Route::resource('person', \App\Http\Controllers\PersonController::class);
});

Route::get('/{route}', function () {
    return view('spa');
})->where('route', '^(?!api).*$');

Route::get('/phpinfo', function () {
    return view('welcome');
});
