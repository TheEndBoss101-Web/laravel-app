<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('blog/', function () {
    return Inertia::render('blog/home');
})->name('blog_home');