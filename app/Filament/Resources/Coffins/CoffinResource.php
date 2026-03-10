<?php

namespace App\Filament\Resources\Coffins;

use App\Filament\Resources\Coffins\Pages\CreateCoffin;
use App\Filament\Resources\Coffins\Pages\EditCoffin;
use App\Filament\Resources\Coffins\Pages\ListCoffins;
use App\Filament\Resources\Coffins\Schemas\CoffinForm;
use App\Filament\Resources\Coffins\Tables\CoffinsTable;
use App\Models\Coffin;
use BackedEnum;
use Filament\Resources\Resource;
use Filament\Schemas\Schema;
use Filament\Support\Icons\Heroicon;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class CoffinResource extends Resource
{
    protected static ?string $model = Coffin::class;

    protected static string|BackedEnum|null $navigationIcon = Heroicon::OutlinedRectangleStack;

    protected static string|\UnitEnum|null $navigationGroup = 'Konten';

    protected static ?int $navigationSort = 1;

    protected static ?string $recordTitleAttribute = 'slug';

    public static function form(Schema $schema): Schema
    {
        return CoffinForm::configure($schema);
    }

    public static function table(Table $table): Table
    {
        return CoffinsTable::configure($table);
    }

    public static function getRelations(): array
    {
        return [];
    }

    public static function getPages(): array
    {
        return [
            'index'  => ListCoffins::route('/'),
            'create' => CreateCoffin::route('/create'),
            'edit'   => EditCoffin::route('/{record}/edit'),
        ];
    }

    public static function getRecordRouteBindingEloquentQuery(): Builder
    {
        return parent::getRecordRouteBindingEloquentQuery()
            ->withoutGlobalScopes([
                SoftDeletingScope::class,
            ]);
    }

    public static function canViewAny(): bool
    {
        return auth()->user()?->can('view_coffins') ?? false;
    }

    public static function canCreate(): bool
    {
        return auth()->user()?->can('create_coffins') ?? false;
    }

    public static function canEdit($record): bool
    {
        return auth()->user()?->can('edit_coffins') ?? false;
    }

    public static function canDelete($record): bool
    {
        return auth()->user()?->can('delete_coffins') ?? false;
    }
}
