<?php

namespace App\Filament\Resources\Benefits\Pages;

use App\Filament\Resources\Benefits\BenefitResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;

class CreateBenefit extends CreateRecord
{
    protected static string $resource = BenefitResource::class;

    protected function handleRecordCreation(array $data): Model
    {
        $translations = $data['translations'] ?? [];
        unset($data['translations']);

        $record = static::getModel()::create($data);

        foreach (['id', 'en'] as $locale) {
            if (isset($translations[$locale])) {
                $record->translations()->create([
                    'locale' => $locale,
                    'name' => $translations[$locale]['name'] ?? null,
                    'description' => $translations[$locale]['description'] ?? null,
                ]);
            }
        }

        return $record;
    }
}
