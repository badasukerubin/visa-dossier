<?php

use App\ApiCode;
use App\Enums\Category;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\{postJson, assertDatabaseHas};

beforeEach(function () {
    Storage::fake('local');
});

beforeEach(function () {
    $this->fileUploadRoute = route('dossier.file.upload');
    $this->storage = Storage::disk('local');
});

it('requires a file', function () {
    $response = postJson($this->fileUploadRoute, []);

    $response->assertUnprocessable();

    expect($response->json('code'))->toBe(ApiCode::VALIDATION_ERROR);
    expect($response->json('data.messages.dossier_file_upload'))->toBeArray();

})->only();

it('requires a valid file type', function () {
    $file = UploadedFile::fake()->create('document.txt', 1000);

    $response = postJson($this->fileUploadRoute, [
        'dossier_file_upload' => $file,
    ]);

    $response->assertUnprocessable();

    expect($response->json('code'))->toBe(ApiCode::VALIDATION_ERROR);
    expect($response->json('data.messages.dossier_file_upload'))->toBeArray();
})->only();

it('requires a file size less than 4MB', function () {
    $file = UploadedFile::fake()->image('large_image.jpg')->size(5000);

    $response = postJson($this->fileUploadRoute, [
        'dossier_file_upload' => $file,
    ]);

    $response->assertUnprocessable();

    expect($response->json('code'))->toBe(ApiCode::VALIDATION_ERROR);
    expect($response->json('data.messages.dossier_file_upload'))->toBeArray();
})->only();

it('requires a valid category', function () {
    $response = postJson($this->fileUploadRoute, [
        'category' => 'invalid_category',
    ]);

    $response->assertUnprocessable();

    expect($response->json('code'))->toBe(ApiCode::VALIDATION_ERROR);
    expect($response->json('data.messages.category'))->toBeArray();
})->only();

it('uploads a valid file', function () {
    $file = UploadedFile::fake()->image('passport.jpg')->size(1000);

    $response = postJson($this->fileUploadRoute, [
        'dossier_name' => 'Essential Documents',
        'dossier_file_upload' => $file,
        'category' => Category::Passport->value,
    ]);

    $response->assertSuccessful();

    expect($response->json('data.item.name'))->toBe('Essential Documents');
    expect($response->json('data.item.files.0.file_name'))->toBe($file->hashName());
    expect($response->json('data.item.files.0.file_type'))->toBe('image/jpeg');
    expect($response->json('data.item.files.0.category'))->toBe(Category::Passport->value);

    assertDatabaseHas('dossiers', [
        'name' => 'Essential Documents',
    ]);

    assertDatabaseHas('dossier_files', [
        'file_name' => $file->hashName(),
        'file_type' => 'image/jpeg',
        'file_path' => "dossiers/{$file->hashName()}",
        'category' => Category::Passport->value,
    ]);

    $this->storage->assertExists("dossiers/{$file->hashName()}");
})->only();
