<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('demos/laravel', function () {
    return Inertia::render('demos/laravel');
})->name('demos/laravel');

Route::get('demos/react', function () {
    return Inertia::render('demos/react');
})->name('demos/react');