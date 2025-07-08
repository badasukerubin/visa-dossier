<?php

namespace App\Http\Controllers\API\V1;

use App\ApiCode;
use App\Enums\Category;
use App\Http\Controllers\Controller;
use App\Models\Dossier;
use Exception;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

class DossierListController extends Controller
{

    public function __invoke()
    {
        $allowedCategories = [ Category::NationalVisaRequestForm->value, Category::PassportPhotograph->value, Category::Passport->value ];

        try {
            // If I cared for efficiency (i.e for large amount of data queries) and had more time, I would use a more complex DB query here instead. I could also rather use tanstack query and fetch the data from muliple APIs in a more efficient way.
            // For now, we KISS (Keep It Simple Stupid) and just fetch all dossiers with their files.
            $dossiers = Dossier::with('files')->latest()->get();

            $dossiers->each(function ($dossier) use ($allowedCategories) {
                $grouped = $dossier->files
                    ->groupBy('category')
                    ->filter(function ($files, $category) use ($allowedCategories) {
                        return in_array($category, $allowedCategories);
                    })
                    ->map(function ($files) {
                        return $files->values();
                    });

                $allCategories = collect($allowedCategories)
                    ->mapWithKeys(fn($cat) => [$cat => collect()]);

                $dossier->setRelation('files', $allCategories->merge($grouped));
            });

        } catch (Exception $e) {
            Log::error('Error fetching dossier: ' . $e->getMessage());

            return RB::error(ApiCode::DATABASE_ERROR);
        }

        return RB::success(['items' => $dossiers]);
    }
}
