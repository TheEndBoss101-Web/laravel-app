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

require __DIR__.'/webRoutes/dashboard/index.php';
require __DIR__.'/webRoutes/settings.php';
require __DIR__.'/webRoutes/auth.php';
require __DIR__.'/webRoutes/development/index.php';

// Enable blog routes only if APP_BLOG_ENABLED is true
if (config('app.blog_enabled')) {
    require __DIR__.'/web/blog/home.php';
    require __DIR__.'/web/blog/article1.php';
    require __DIR__.'/web/blog/formattest.php';
    require __DIR__.'/web/blog/markdowntest.php';
}

Route::resource('posts', PostController::class);