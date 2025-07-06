<?php

namespace Database\Factories;

use App\Models\Dossier;
use App\Models\DossierFile;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Dossier>
 */
class DossierFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->sentence(3),
        ];
    }

    public function withName(string $name): static
    {
        return $this->state([
            'name' => $name,
        ]);
    }

    public function withDossierFile(?DossierFile $dossierFile = null): static
    {
        $dossierFile ??= DossierFile::factory()->create();

        return $this->afterCreating(function (Dossier $dossier) use ($dossierFile) {
            $dossier->files()->attach($dossierFile);
        });
    }
}
