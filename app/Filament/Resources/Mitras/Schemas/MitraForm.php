<?php

namespace App\Filament\Resources\Mitras\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class MitraForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Informasi Mitra')
                ->schema([
                    TextInput::make('name')
                        ->label('Nama Mitra/Partner')
                        ->required()
                        ->maxLength(255)
                        ->columnSpanFull(),

                    Textarea::make('description')
                        ->label('Deskripsi Singkat')
                        ->nullable()
                        ->columnSpanFull(),

                    FileUpload::make('photo')
                        ->label('Logo/Foto')
                        ->image()
                        ->disk('public')
                        ->directory('mitras')
                        ->nullable()
                        ->columnSpanFull(),
                ]),
        ]);
    }
}
