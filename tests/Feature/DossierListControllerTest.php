<?php

use App\Models\Dossier;
use App\Models\User;
use Illuminate\Support\Facades\Storage;

use function Pest\Laravel\actingAs;

beforeEach(function () {
    Storage::fake('local');
});

beforeEach(function () {
    $this->dossierListRoute = route('dossier.list');
    $this->user = User::factory()->create();
});

it('returns an empty list when no dossiers exist', function () {
    $response = actingAs($this->user)->getJson($this->dossierListRoute);

    $response->assertSuccessful();
    expect($response->json('data.items'))->toBeArray()->toBeEmpty();
});

it('returns dossiers with files', function () {
    $dossier = Dossier::factory()->withName('Essential Documents')->withDossierFile()->create();

    $response = actingAs($this->user)->getJson($this->dossierListRoute);

    $response->assertSuccessful();

    $items = $response->json('data.items');

    expect($items[0]['name'])->toBe('Essential Documents');

    $filesGrouped = $items[0]['files'];
    $category = $dossier->files[0]->category->value;

    expect($filesGrouped)->toHaveKey($category);
    expect($filesGrouped[$category][0]['file_name'])->toBe($dossier->files[0]->file_name);
    expect($filesGrouped[$category][0]['file_path'])->toBe($dossier->files[0]->file_path);
    expect($filesGrouped[$category][0]['category'])->toBe($dossier->files[0]->category->value);
});

it('returns multiple dossiers with files', function () {
    $dossier1 = Dossier::factory()->withName('Travel Documents')->withDossierFile()->create();
    $dossier2 = Dossier::factory()->withName('Financial Documents')->withDossierFile()->create();

    $response = actingAs($this->user)->getJson($this->dossierListRoute);

    $response->assertSuccessful();

    $items = $response->json('data.items');

    $dossier1Item = collect($items)->first(fn($item) => $item['name'] === 'Travel Documents');
    $dossier2Item = collect($items)->first(fn($item) => $item['name'] === 'Financial Documents');

    $category1 = $dossier1->files[0]->category->value;
    $filesGrouped1 = $dossier1Item['files'];
    expect($filesGrouped1)->toHaveKey($category1);
    expect(collect($filesGrouped1[$category1])->pluck('file_name'))->toContain($dossier1->files[0]->file_name);

    $category2 = $dossier2->files[0]->category->value;
    $filesGrouped2 = $dossier2Item['files'];
    expect($filesGrouped2)->toHaveKey($category2);
    expect(collect($filesGrouped2[$category2])->pluck('file_name'))->toContain($dossier2->files[0]->file_name);
});
