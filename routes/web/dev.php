<?php

// Enable debug routes only if the environment is local
if (App::environment('local')) {
    require __DIR__.'/dev/demos.php';
    require __DIR__.'/dev/errors.php';
}