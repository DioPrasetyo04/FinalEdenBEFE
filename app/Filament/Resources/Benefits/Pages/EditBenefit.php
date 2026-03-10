<?php

namespace App\Filament\Resources\Benefits\Pages;

use App\Filament\Resources\Benefits\BenefitResource;
use Filament\Actions\DeleteAction;
use Filament\Resources\Pages\EditRecord;

class EditBenefit extends EditRecord
{
    protected static string $resource = BenefitResource::class;

    protected function getHeaderActions(): array
    {
        return [
            DeleteAction::make(),
        ];
    }

    protected function mutateFormDataBeforeFill(array $data): array
    {
        $translations = $this->record->translations->keyBy('locale');
        
        $data['translations'] = [
            'id' => [
                'name' => $translations['id']->name ?? '',
                'description' => $translations['id']->description ?? '',
            ],
            'en' => [
                'name' => $translations['en']->name ?? '',
                'description' => $translations['en']->description ?? '',
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
                    ]
                );
            }
        }

        return $record;
    }
}
