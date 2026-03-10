<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\SoftDeletes;

class Coffin extends Model
{
    /** @use HasFactory<\Database\Factories\CoffinFactory> */
    use HasFactory, SoftDeletes;

    protected $table = 'coffins';
    protected $fillable = [
        'slug',
        'is_active',
    ];

    public function translation(): HasOne
    {
        return $this->hasOne(CoffinTranslation::class)->where('locale', app()->getLocale());
    }

    public function translations(): HasMany
    {
        return $this->hasMany(CoffinTranslation::class);
    }

    public function photos(): HasMany
    {
        return $this->hasMany(PhotoCoffin::class);
    }

    public function benefitcoffin(): BelongsToMany
    {
        return $this->belongsToMany(Benefit::class, 'benefit_coffins', 'coffin_id', 'benefit_id');
    }
}
