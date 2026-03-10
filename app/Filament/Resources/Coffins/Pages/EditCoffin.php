<?php

namespace App\Filament\Resources\Coffins\Pages;

use App\Filament\Resources\Coffins\CoffinResource;
use Filament\Actions\DeleteAction;
use Filament\Actions\ForceDeleteAction;
use Filament\Actions\RestoreAction;
use Filament\Resources\Pages\EditRecord;

class EditCoffin extends EditRecord
{
    protected static string $resource = CoffinResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
            ForceDeleteAction::make(),
            RestoreAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $translations = $this->record->translations->keyBy('locale');
        
        $data['translations'] = [
            'id' => [
                'name' => $translations['id']->name ?? '',
                'description' => $translations['id']->description ?? '',
                'detail_description' => $translations['id']->detail_description ?? '',
            ],
            'en' => [
                'name' => $translations['en']->name ?? '',
                'description' => $translations['en']->description ?? '',
                'detail_description' => $translations['en']->detail_description ?? '',
            ]
        ];

        return $data;
    }

    protected function handleRecordUpdate(\Illuminate\Database\Eloquent\Model $record, array $data): \Illuminate\Database\Eloquent\Model
    {
        $translations = $data['translations'] ?? [];
        unset($data['translations']);

        $record->update($data);

        foreach (['id', 'en'] as $locale) {
            if (isset($translations[$locale])) {
                $record->translations()->updateOrCreate(
                    ['locale' => $locale],
                    [
                        'name' => $translations[$locale]['name'] ?? null,
                        'description' => $translations[$locale]['description'] ?? null,
                        'detail_description' => $translations[$locale]['detail_description'] ?? null,
                    ]
                );
            }
        }

        return $record;
    }
}
