<?php

namespace App\Filament\Resources\Coffins\Pages;

use App\Filament\Resources\Coffins\CoffinResource;
use Filament\Actions\CreateAction;
use Filament\Resources\Pages\ListRecords;

class ListCoffins extends ListRecords
{
    protected static string $resource = CoffinResource::class;

    protected function getHeaderActions(): array
    {
        return [
            CreateAction::make(),
        ];
    }
}
