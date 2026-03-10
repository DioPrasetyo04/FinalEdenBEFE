<?php

namespace App\Filament\Resources\Benefits\Schemas;

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\TextInput;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Schema;

class BenefitForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Data Utama')
                ->schema([
                    TextInput::make('slug')
                        ->label('Slug')
                        ->required()
                        ->unique(ignoreRecord: true)
                        ->maxLength(255),
                ])
                ->columnSpanFull(),

            Tabs::make('Terjemahan')
                ->tabs([
                    Tab::make('🇮🇩 Indonesia')
                        ->schema([
                            TextInput::make('translations.id.name')
                                ->label('Nama Benefit (ID)')
                                ->required()
                                ->maxLength(255),

                            RichEditor::make('translations.id.description')
                                ->label('Deskripsi (ID)')
                                ->nullable(),
                        ]),

                    Tab::make('🇬🇧 English')
                        ->schema([
                            TextInput::make('translations.en.name')
                                ->label('Benefit Name (EN)')
                                ->maxLength(255),

                            RichEditor::make('translations.en.description')
                                ->label('Description (EN)')
                                ->nullable(),
                        ]),
                ])
                ->columnSpanFull(),
        ]);
    }
}
