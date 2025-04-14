<?php

// Enable debug routes only if the environment is local
if (App::environment('local')) {
require __DIR__.'/demos.php';
require __DIR__.'/errors.php';
}