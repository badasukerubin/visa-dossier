<?php

namespace App\Models;

use App\Enums\Category;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Database\Factories\DossierFileFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class DossierFile extends Model
{
    /** @use HasFactory<DossierFileFactory>*/
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int,string>
     */
    protected $fillable = ['file_name', 'file_type', 'file_path', 'category'];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'category' => Category::class,
        ];
    }

    /**
     * @return BelongsToMany<Dossier>
    */
    public function dossiers(): BelongsToMany
    {
        return $this->belongsToMany(Dossier::class)->using(DossierDossierFile::class)->withTimestamps();
    }
}
