<?php

namespace App\Filament\Resources\Galeries;

use App\Filament\Resources\Galeries\Pages\CreateGalery;
use App\Filament\Resources\Galeries\Pages\EditGalery;
use App\Filament\Resources\Galeries\Pages\ListGaleries;
use App\Filament\Resources\Galeries\Schemas\GaleryForm;
use App\Filament\Resources\Galeries\Tables\GaleriesTable;
use App\Models\Galery;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class GaleryResource extends Resource
{
    protected static ?string $model = Galery::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedPhoto;

    protected static string|\UnitEnum|null $navigationGroup = 'Konten';

    protected static ?int $navigationSort = 4;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return GaleryForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return GaleriesTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListGaleries::route('/'),
            'create' => CreateGalery::route('/create'),
            'edit'   => EditGalery::route('/{record}/edit'),
        ];
    }

    public static function canViewAny(): bool
    {
        return auth()->user()?->can('view_galleries') ?? false;
    }

    public static function canCreate(): bool
    {
        return auth()->user()?->can('create_galleries') ?? false;
    }

    public static function canEdit($record): bool
    {
        return auth()->user()?->can('edit_galleries') ?? false;
    }

    public static function canDelete($record): bool
    {
        return auth()->user()?->can('delete_galleries') ?? false;
    }
}
