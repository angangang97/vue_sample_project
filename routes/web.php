<?php
use App\Http\Controllers;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get('phonebooks/search/{term?}', 'PhonebooksController@index');
Route::resource('phonebooks', 'PhonebooksController');
// Route::resource('users', Controllers\PhonebooksController::class);

// Route::get('inventory/search/{term?}', 'InventoryController@index');
// Route::resource('inventory', 'InventoryController');


Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
