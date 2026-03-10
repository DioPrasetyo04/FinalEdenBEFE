<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Benefit extends Model
{
    protected $table = 'benefits';

    protected $fillable = [
        'slug',
    ];

    public function benefitcoffin(): BelongsToMany
    {
        return $this->belongsToMany(Coffin::class, 'benefit_coffins', 'benefit_id', 'coffin_id');
    }

    public function translation(): HasOne
    {
        return $this->hasOne(BenefitTranslation::class)->where('locale', app()->getLocale());
    }

    public function translations(): HasMany
    {
        return $this->hasMany(BenefitTranslation::class);
    }
}
