<?php

use App\Models\Dossier;
use Illuminate\Support\Facades\Storage;

use function Pest\Laravel\getJson;

beforeEach(function () {
    Storage::fake('local');
});

beforeEach(function () {
    $this->dossierListRoute = route('dossier.list');
});

it('returns an empty list when no dossiers exist', function () {
    $response = getJson($this->dossierListRoute);

    $response->assertSuccessful();
    expect($response->json('data.items'))->toBeArray()->toBeEmpty();
})->only();

it('returns dossiers with files', function () {
    $dossier = Dossier::factory()->withName('Essential Documents')->withDossierFile()->create();

    $response = getJson($this->dossierListRoute);

    $response->assertSuccessful();

    $items = $response->json('data.items');

    expect($items)->toHaveCount(1);
    expect($items[0]['name'])->toBe('Essential Documents');
    expect($items[0]['files'][0]['file_name'])->toBe($dossier->files[0]->file_name);
    expect($items[0]['files'][0]['file_path'])->toBe($dossier->files[0]->file_path);
    expect($items[0]['files'][0]['category'])->toBe($dossier->files[0]->category->value);
})->only();

it('returns multiple dossiers with files', function () {
    $dossier1 = Dossier::factory()->withName('Travel Documents')->withDossierFile()->create();
    $dossier2 = Dossier::factory()->withName('Financial Documents')->withDossierFile()->create();

    $response = getJson($this->dossierListRoute);

    $response->assertSuccessful();

    $items = $response->json('data.items');

    expect($items)->toHaveCount(2);
    expect($items[0]['name'])->toBe('Travel Documents');
    expect($items[0]['files'][0]['file_name'])->toBe($dossier1->files[0]->file_name);
    expect($items[1]['name'])->toBe('Financial Documents');
    expect($items[1]['files'][0]['file_name'])->toBe($dossier2->files[0]->file_name);
})->only();
