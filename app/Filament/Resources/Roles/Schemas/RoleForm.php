<?php

namespace App\Filament\Resources\Roles\Schemas;

use Filament\Forms\Components\CheckboxList;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;
use Spatie\Permission\Models\Permission;

class RoleForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Informasi Role')
                ->description('Nama dan daftar permission yang dimiliki role ini')
                ->schema([
                    TextInput::make('name')
                        ->label('Nama Role')
                        ->required()
                        ->unique(ignoreRecord: true)
                        ->maxLength(100),

                    CheckboxList::make('permissions')
                        ->label('Permissions')
                        ->relationship('permissions', 'name')
                        ->searchable()
                        ->bulkToggleable()
                        ->columns(3)
                        ->gridDirection('row'),
                ])
                ->columnSpanFull(),
        ]);
    }
}
