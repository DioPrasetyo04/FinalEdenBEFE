<?php

namespace App\Filament\Resources\Coffins\Schemas;

use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;

use Filament\Schemas\Components\Grid;
use Filament\Schemas\Components\Section;
use Filament\Schemas\Components\Tabs;
use Filament\Schemas\Components\Tabs\Tab;
use Filament\Schemas\Components\Utilities\Set;
use Filament\Schemas\Schema;

use Illuminate\Support\Str;

class CoffinForm
{
    public static function configure(Schema $schema): Schema
    {
        return $schema->components([
            Section::make('Data Utama')
                ->schema([
                    Grid::make(2)->schema([
                        TextInput::make('slug')
                            ->label('Slug')
                            ->required()
                            ->unique(ignoreRecord: true)
                            ->live()
                            ->readOnly()
                            ->maxLength(255),

                        Toggle::make('is_active')
                            ->label('Aktif')
                            ->default(true)
                            ->inline(false)
                    ]),
                ])
                ->columnSpanFull(),

            Tabs::make('Terjemahan')
                ->tabs([
                    Tab::make('🇮🇩 Indonesia')
                        ->schema([
                            TextInput::make('translations.id.name')
                                ->label('Nama (ID)')
                                ->live()
                                ->afterStateUpdated(function ($state, Set $set) {
                                    $set('slug', Str::slug($state));
                                })
                                ->afterStateHydrated(function ($state, Set $set) {
                                    $set('slug', Str::slug($state));
                                })
                                ->required()
                                ->maxLength(255),

                            RichEditor::make('translations.id.description')
                                ->label('Deskripsi (ID)')
                                ->nullable(),

                            RichEditor::make('translations.id.detail_description')
                                ->label('Deskripsi Detail (ID)')
                                ->nullable(),
                        ]),

                    Tab::make('🇬🇧 English')
                        ->schema([
                            TextInput::make('translations.en.name')
                                ->label('Name (EN)')
                                ->maxLength(255),

                            RichEditor::make('translations.en.description')
                                ->label('Description (EN)')
                                ->nullable(),

                            RichEditor::make('translations.en.detail_description')
                                ->label('Detail Description (EN)')
                                ->nullable(),
                        ]),
                ])
                ->columnSpanFull(),

            Section::make('Benefit')
                ->schema([
                    Select::make('benefitcoffin')
                        ->label('Benefit Produk')
                        ->multiple()
                        ->relationship('benefitcoffin', 'slug')
                        ->getOptionLabelFromRecordUsing(
                            fn($record) => $record->translation?->name ?? $record->slug
                        )
                        ->createOptionUsing(function (array $data): int {
                            $translations = $data['translations'] ?? [];
                            unset($data['translations']);
                    
                            $benefit = \App\Models\Benefit::create($data);
                    
                            foreach (['id', 'en'] as $locale) {
                                if (isset($translations[$locale])) {
                                    $benefit->translations()->create([
                                        'locale' => $locale,
                                        'name' => $translations[$locale]['name'] ?? null,
                                        'description' => $translations[$locale]['description'] ?? null,
                                    ]);
                                }
                            }
                    
                            return $benefit->id;
                        })
                        ->createOptionForm([
                            Section::make('Data Utama')
                                ->schema([
                                    TextInput::make('slug')
                                        ->label('Slug')
                                        ->required()
                                        ->unique(ignoreRecord: true)
                                        ->live()
                                        ->readOnly()
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
                                                ->live()
                                                ->afterStateUpdated(function ($state, Set $set) {
                                                    $set('slug', Str::slug($state));
                                                })
                                                ->afterStateHydrated(function ($state, Set $set) {
                                                    $set('slug', Str::slug($state));
                                                })
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
                        ])
                        ->searchable()
                        ->preload(),
                ])
                ->columnSpanFull(),

            Section::make('Galeri Foto')
                ->schema([
                    Repeater::make('photos')
                        ->label('Foto')
                        ->relationship('photos')
                        ->schema([
                            FileUpload::make('photo')
                                ->label('Foto')
                                ->image()
                                ->disk('public')
                                ->directory('coffins/photos')
                                ->nullable(),
                        ])
                        ->columns(1)
                        ->addActionLabel('Tambah Foto'),
                ])
                ->columnSpanFull(),
        ]);
    }
}
