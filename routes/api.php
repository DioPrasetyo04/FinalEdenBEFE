<?php

use App\Http\Controllers\Api\CoffinController;
use Illuminate\Support\Facades\Route;

Route::controller(CoffinController::class)->group(function () {
    Route::get('/coffins', 'index');
    Route::get('/coffin/{slug}', 'show');
});
