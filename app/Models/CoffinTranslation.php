<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CoffinTranslation extends Model
{
    protected $table = 'coffin_translations';

    protected $fillable = [
        'coffin_id',
        'locale',
        'name',
        'description',
        'detail_description',
    ];

    public function coffin(): BelongsTo
    {
        return $this->belongsTo(Coffin::class, 'coffin_id');
    }

    public function photocoffin(): HasMany
    {
        return $this->hasMany(PhotoCoffin::class);
    }
}
