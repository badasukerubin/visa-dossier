<?php

use Illuminate\Support\Facades\Route;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

Route::group(['prefix' => 'v1'], function () {
    Route::get('/health', function () {
        return RB::success([]);
    });

    Route::group(['prefix' => 'app'], function () {
    //
    });
});
