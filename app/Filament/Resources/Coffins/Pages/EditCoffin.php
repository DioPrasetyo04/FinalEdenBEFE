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
}
