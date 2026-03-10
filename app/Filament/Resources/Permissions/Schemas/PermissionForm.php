<?php

namespace App\Filament\Resources\Permissions\Schemas;

use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class PermissionForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Informasi Permission')
                ->description('Nama permission harus unik dan menggunakan format snake_case, contoh: edit_coffins')
                ->schema([
                    TextInput::make('name')
                        ->label('Nama Permission')
                        ->required()
                        ->unique(ignoreRecord: true)
                        ->maxLength(255)
                        ->placeholder('contoh: edit_coffins'),

                    TextInput::make('guard_name')
                        ->label('Guard')
                        ->default('web')
                        ->required(),
                ])
                ->columnSpanFull(),
        ]);
    }
}
