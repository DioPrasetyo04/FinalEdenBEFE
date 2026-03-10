<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PhotoCoffin extends Model
{
    protected $table = 'photo_coffins';

    public $timestamps = false;

    protected $fillable = [
        'coffin_id',
        'photo',
    ];

    public function coffin(): BelongsTo
    {
        return $this->belongsTo(Coffin::class, 'coffin_id');
    }
}
