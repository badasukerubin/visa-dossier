<?php

use App\Http\Controllers\DossierFileUploadController;
use Illuminate\Support\Facades\Route;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

Route::group(['prefix' => 'v1'], function () {
    Route::get('/health', function () {
        return RB::success([]);
    });

    Route::group(['prefix' => 'dossier'], function () {
        Route::post('file-upload', DossierFileUploadController::class)->name('dossier.file.upload');
    });
});
