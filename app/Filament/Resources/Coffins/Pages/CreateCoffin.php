<?php

namespace App\Filament\Resources\Coffins\Pages;

use App\Filament\Resources\Coffins\CoffinResource;
use Filament\Resources\Pages\CreateRecord;
use Illuminate\Database\Eloquent\Model;

class CreateCoffin extends CreateRecord
{
    protected static string $resource = CoffinResource::class;

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
                    'detail_description' => $translations[$locale]['detail_description'] ?? null,
                ]);
            }
        }

        return $record;
    }
}
