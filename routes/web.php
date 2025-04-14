<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Env;
use Inertia\Inertia;

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