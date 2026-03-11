<?php

namespace App\Filament\Resources\Galeries\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;
use Illuminate\Support\Str;

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
                        ->createOptionForm([
                            TextInput::make('name')
                                ->label('Nama Kategori')
                                ->required()
                                ->live(onBlur: true)
                                ->afterStateUpdated(fn(string $operation, $state, Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null)
                                ->afterStateHydrated(fn(string $operation, $state, Set $set) => $operation === 'create' ? $set('slug', Str::slug($state)) : null)
                                ->maxLength(255),

                            TextInput::make('slug')
                                ->label('Slug')
                                ->required()
                                ->readOnly()
                                ->unique(ignoreRecord: true)
                                ->maxLength(255),
                        ])
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
                ->columnSpanFull(),
        ]);
    }
}
