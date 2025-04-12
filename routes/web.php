<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::fallback(function () {
    abort(404);
});

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/web/settings.php';
require __DIR__.'/web/auth.php';

if (App::environment('local')) {
    require __DIR__.'/web/debug/demos.php';
    require __DIR__.'/web/debug/errors.php';
}
