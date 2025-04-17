<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Env;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

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

Route::fallback(function () {
    abort(404);
});

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

require __DIR__.'/web/settings.php';
require __DIR__.'/web/auth.php';
require __DIR__.'/web/posts.php';
require __DIR__.'/web/dashboard.php';
require __DIR__.'/web/dev.php';