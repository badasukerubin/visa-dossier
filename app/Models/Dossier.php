<?php

namespace App\Models;

use Database\Factories\DossierFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Dossier extends Model
{
    /** @use HasFactory<DossierFactory>*/
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int,string>
     */
    protected $fillable = ['name'];

    /**
     * @return BelongsToMany<DossierFile>
    */
    public function files(): BelongsToMany
    {
        return $this->belongsToMany(DossierFile::class)->using(DossierDossierFile::class)->withTimestamps();
    }

}
