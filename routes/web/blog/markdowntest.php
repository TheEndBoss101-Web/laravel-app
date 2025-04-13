<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('blog/markdowntest', function () {
    return Inertia::render('blog/markdowntest');
})->name('blog/markdowntest');