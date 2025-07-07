<?php

namespace App\Http\Controllers\API\V1;

use App\ApiCode;
use App\Http\Controllers\Controller;
use App\Models\DossierFile;
use Exception;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

class DossierFileDeleteController extends Controller
{
    public function __construct(private Filesystem $storage) {
        $this->storage = $storage;
    }

    public function __invoke(DossierFile $dossierFile)
    {
        try {
            DB::beginTransaction();

            if ($this->storage->exists($dossierFile->file_path)) {
                $this->storage->delete($dossierFile->file_path);
            }

            $dossierFile->dossiers()->detach();

            $dossierFile->delete();

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();

            Log::error('Error deleting dossier file: ' . $e->getMessage());

            return RB::error(ApiCode::DATABASE_ERROR);
        }

        return RB::success();
    }
}
