<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('home');
})->name('home');

Route::get('demos/laravel', function () {
    return Inertia::render('demos/laravel');
})->name('demos/laravel');

Route::get('demos/react', function () {
    return Inertia::render('demos/react');
})->name('demos/react');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
