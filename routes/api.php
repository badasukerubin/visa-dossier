<?php

use App\Http\Controllers\API\V1\DossierFileDeleteController;
use App\Http\Controllers\API\V1\DossierFileUploadController;
use App\Http\Controllers\API\V1\DossierListController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

Route::group(['prefix' => 'v1'], function () {
    Route::get('/health', function () {
        return RB::success([]);
    });

    Route::group(['prefix' => 'user', 'middleware' => 'auth:sanctum'], function () {
        Route::get('/get', function (Request $request) {
            return $request->user();
        })->name('user.get');
    });

    Route::group(['prefix' => 'dossier', 'middleware' => 'auth:sanctum'], function () {
        Route::post('file-upload', DossierFileUploadController::class)->name('dossier.file.upload');
        Route::delete('file-delete/{dossier_file}', DossierFileDeleteController::class)->name('dossier.file.delete');
        Route::get('list', DossierListController::class)->name('dossier.list');
    });
});
