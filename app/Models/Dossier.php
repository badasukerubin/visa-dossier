<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Dossier extends Model
{
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
