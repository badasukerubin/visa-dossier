<?php

namespace Database\Factories;

use App\Enums\Category;
use App\Models\Dossier;
use App\Models\DossierFile;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DossierFile>
 */
class DossierFileFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'file_name' => Str::random(40) . '.pdf',
            'file_type' => 'application/pdf',
            'file_path' => $this->faker->url,
            'category' => Category::Passport,
        ];
    }

    public function withFile(?string $mimeType = null, int $size = 1024): static
    {
        return $this->afterCreating(function (DossierFile $dossierFile) use ($mimeType, $size) {
            if (str_starts_with($mimeType, 'image/')) {
                $file = UploadedFile::fake()->image($dossierFile->name . '.jpg', 800, 600)->size($size);
            } else {
                $file = UploadedFile::fake()->create($dossierFile->name . '.pdf', $size, $mimeType);
            }

            $path = $file->storeAs('dossiers', $dossierFile->name);

            $dossierFile->file_path = $path;
            $dossierFile->file_type = $file->getClientMimeType();

            $dossierFile->save();
        });
    }

    public function withDossier(?Dossier $dossier = null): static
    {
        $dossier ??= Dossier::factory()->create();

        return $this->afterCreating(function (DossierFile $dossierFile) use ($dossier) {
            $dossierFile->dossiers()->attach($dossier);
        });
    }
}
