<?php

use App\Http\Controllers\API\V1\DossierFileDeleteController;
use App\Http\Controllers\API\V1\DossierFileUploadController;
use App\Http\Controllers\API\V1\DossierListController;
use Illuminate\Support\Facades\Route;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

Route::group(['prefix' => 'v1'], function () {
    Route::get('/health', function () {
        return RB::success([]);
    });

    Route::group(['prefix' => 'dossier'], function () {
        Route::post('file-upload', DossierFileUploadController::class)->name('dossier.file.upload');
        Route::delete('file-delete/{dossier_file}', DossierFileDeleteController::class)->name('dossier.file.delete');
        Route::get('list', DossierListController::class)->name('dossier.list');
    });
});
