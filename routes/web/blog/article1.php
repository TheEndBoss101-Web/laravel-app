<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('blog/article1', function () {
    return Inertia::render('blog/article1');
})->name('blog_article1');