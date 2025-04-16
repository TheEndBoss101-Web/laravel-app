<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::middleware('guest')->group(function () {

});

Route::middleware('auth')->group(function () {

});


Route::get('posts', [PostController::class, 'index'])
    ->name('posts.index');

Route::post('posts', [PostController::class, 'store'])
    ->name('posts.store');

Route::get('posts/create', [PostController::class, 'create'])
    ->name('posts.create');

Route::get('posts/{post}', [PostController::class, 'show'])
    ->name('posts.show');

Route::put('posts/{post}', [PostController::class, 'update'])
    ->name('posts.update');

Route::patch('posts/{post}', [PostController::class, 'update'])
    ->name('posts.update');

Route::delete('posts/{post}', [PostController::class, 'delete'])
    ->name('posts.delete');

Route::get('posts/{post}/edit', [PostController::class, 'edit'])
    ->name('posts.edit');