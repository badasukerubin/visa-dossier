<?php

use App\Models\Dossier;
use App\Models\User;
use Illuminate\Support\Facades\Storage;
use function Pest\Laravel\{actingAs, assertDatabaseMissing};

beforeEach(function () {
    Storage::fake('local');
});

beforeEach(function () {
    $this->dossierFileDeleteUrl = 'dossier.file.delete';
    $this->storage = Storage::disk('local');
    $this->user = User::factory()->create();
});

it('deletes a dossier file', function () {
    $dossier = Dossier::factory()->withName('Visa Docs')->withDossierFile(withFile: true)->create();

    $dossierFileDeleteRoute = route($this->dossierFileDeleteUrl, $dossier->files[0]->id);

    $response = actingAs($this->user)->deleteJson($dossierFileDeleteRoute);

    $response->assertSuccessful();

    assertDatabaseMissing('dossier_files', [
        'id' => $dossier->files[0]->id,
    ]);

    $this->storage->assertMissing('dossiers/' . $dossier->files[0]->file_name);
});
