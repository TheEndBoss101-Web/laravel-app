<?php

use Illuminate\Support\Facades\Route;

Route::get('/errors/{code}', function ($code) {
    abort($code);
})->where('code', '[1-5][0-9]{2}');
