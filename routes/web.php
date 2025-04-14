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

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard/dashboard');
    })->name('dashboard');
});

require __DIR__.'/web/settings.php';
require __DIR__.'/web/auth.php';

// Enable blog routes only if APP_BLOG_ENABLED is true
if (config('app.blog_enabled')) {
    require __DIR__.'/web/blog/home.php';
    require __DIR__.'/web/blog/article1.php';
    require __DIR__.'/web/blog/formattest.php';
    require __DIR__.'/web/blog/markdowntest.php';
}

// Enable debug routes only if the environment is local
if (App::environment('local')) {
    require __DIR__.'/web/debug/demos.php';
    require __DIR__.'/web/debug/errors.php';
}
