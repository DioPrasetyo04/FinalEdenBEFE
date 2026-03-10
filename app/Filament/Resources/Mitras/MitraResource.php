<?php

namespace App\Filament\Resources\Mitras;

use App\Filament\Resources\Mitras\Pages\CreateMitra;
use App\Filament\Resources\Mitras\Pages\EditMitra;
use App\Filament\Resources\Mitras\Pages\ListMitras;
use App\Filament\Resources\Mitras\Schemas\MitraForm;
use App\Filament\Resources\Mitras\Tables\MitrasTable;
use App\Models\Mitra;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;

class MitraResource extends Resource
{
    protected static ?string $model = Mitra::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedBuildingOffice2;

    protected static string|\UnitEnum|null $navigationGroup = 'Konten';

    protected static ?string $modelLabel = 'Mitra';

    protected static ?string $pluralModelLabel = 'Mitra';

    protected static ?int $navigationSort = 5;

    protected static ?string $recordTitleAttribute = 'name';

    public static function form(Schema $schema): Schema
    {
        return MitraForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return MitrasTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListMitras::route('/'),
            'create' => CreateMitra::route('/create'),
            'edit'   => EditMitra::route('/{record}/edit'),
        ];
    }

    public static function canViewAny(): bool
    {
        return auth()->user()?->can('view_mitras') ?? false;
    }

    public static function canCreate(): bool
    {
        return auth()->user()?->can('create_mitras') ?? false;
    }

    public static function canEdit($record): bool
    {
        return auth()->user()?->can('edit_mitras') ?? false;
    }

    public static function canDelete($record): bool
    {
        return auth()->user()?->can('delete_mitras') ?? false;
    }
}
