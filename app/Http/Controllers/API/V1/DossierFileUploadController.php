<?php

namespace App\Http\Controllers\API\V1;

use App\ApiCode;
use App\Http\Controllers\Controller;
use App\Http\Requests\DossierFileUploadRequest;
use App\Models\Dossier;
use Exception;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use MarcinOrlowski\ResponseBuilder\ResponseBuilder as RB;

class DossierFileUploadController extends Controller
{
    public function __construct(private Filesystem $storage) {
        $this->storage = $storage;
    }

    public function __invoke(DossierFileUploadRequest $request)
    {
        try {
            DB::beginTransaction();

            $dossier = Dossier::create([
                'name' => $request->dossier_name,
            ]);

            $dossierFileUpload = $request->dossier_file_upload;

            $user = auth()->user();

            $dossierFilePath = $this->storage->putFileAs(
                'dossiers/'.$user->id,
                $dossierFileUpload,
                $dossierFileUpload->hashName()
            );

            if (!$dossierFilePath) {
                throw new Exception('File upload failed');
            }

            $dossier->files()->create([
                'file_name' => $dossierFileUpload->hashName(),
                'file_type' => $dossierFileUpload->getClientMimeType(),
                'file_path' => $dossierFilePath,
                'category' => $request->category,
            ]);

            DB::commit();
        } catch (Exception $e) {
            DB::rollBack();

            Log::error('Error creating dossier: ' . $e->getMessage());

            return RB::error(ApiCode::DATABASE_ERROR);
        }

        return RB::success($dossier->load('files'));
    }
}
