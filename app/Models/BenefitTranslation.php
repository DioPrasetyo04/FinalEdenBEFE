<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class BenefitTranslation extends Model
{
    protected $table = 'benefit_translations';

    protected $fillable = [
        'benefit_id',
        'locale',
        'name',
        'description'
    ];

    public function benefit(): BelongsTo
    {
        return $this->belongsTo(Benefit::class, 'benefit_id');
    }
}
