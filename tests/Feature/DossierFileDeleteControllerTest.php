<?php

use App\ApiCode;
use App\Enums\Category;
use App\Models\Dossier;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\{postJson, assertDatabaseHas, assertDatabaseMissing, deleteJson};

beforeEach(function () {
    Storage::fake('local');
});

beforeEach(function () {
    $this->dossierFileDeleteUrl = 'dossier.file.delete';
    $this->storage = Storage::disk('local');
});

it('deletes a dossier file', function () {
    $dossier = Dossier::factory()->withName('Visa Docs')->withDossierFile(withFile: true)->create();

    $dossierFileDeleteRoute = route($this->dossierFileDeleteUrl, $dossier->files[0]->id);

    $response = deleteJson($dossierFileDeleteRoute);

    $response->assertSuccessful();

    assertDatabaseMissing('dossier_files', [
        'id' => $dossier->files[0]->id,
    ]);

    $this->storage->assertMissing('dossiers/' . $dossier->files[0]->file_name);
});
