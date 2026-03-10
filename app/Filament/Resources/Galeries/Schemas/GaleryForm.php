<?php

namespace App\Filament\Resources\Galeries\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Schema;

class GaleryForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Informasi Galeri')
                ->schema([
                    TextInput::make('name')
                        ->label('Judul Foto')
                        ->required()
                        ->maxLength(255),

                    Select::make('category_id')
                        ->label('Kategori')
                        ->relationship('category', 'name')
                        ->searchable()
                        ->preload()
                        ->nullable(),

                    Textarea::make('description')
                        ->label('Deskripsi')
                        ->nullable()
                        ->columnSpanFull(),

                    FileUpload::make('photo')
                        ->label('Foto Galeri')
                        ->image()
                        ->disk('public')
                        ->directory('galeries')
                        ->required()
                        ->columnSpanFull(),
                ])
                ->columns(2),
        ]);
    }
}
