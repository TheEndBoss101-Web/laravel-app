<?php

use Illuminate\Support\Env;

return [

    /*
    |--------------------------------------------------------------------------
    | Enable Blog
    |--------------------------------------------------------------------------
    |
    | This option defines weather the blog is enabled or not.
    |
    */

    'blog_enabled' => Env::get('APP_BLOG_ENABLED', true),

    /*
    |--------------------------------------------------------------------------
    | Allow User Registration
    |--------------------------------------------------------------------------
    |
    | This option defines if user registration is allowed or not.
    |
    */

    'allow_registration' => Env::get('APP_ALLOW_REGISTRATION', false),

];
