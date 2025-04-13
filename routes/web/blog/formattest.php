<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('blog/formattest', function () {
    return Inertia::render('blog/formattest');
})->name('blog/formattest');