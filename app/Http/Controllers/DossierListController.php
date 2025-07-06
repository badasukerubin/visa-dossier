<?php

namespace App\Http\Controllers;

use App\ApiCode;
use App\Models\Dossier;
use Exception;
use Illuminate\Support\Facades\Log;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

class DossierListController extends Controller
{

    public function __invoke()
    {
        try {
            $dossiers = Dossier::with('files')->latest()->get();
        } catch (Exception $e) {
            Log::error('Error fetching dossier: ' . $e->getMessage());

            return RB::error(ApiCode::DATABASE_ERROR);
        }

        return RB::success(['items' => $dossiers]);
    }
}
