<?php

namespace App\Http\Repositories;

use App\Http\Interface\CoffinRepositoriesInterface;
use App\Models\Coffin;

class CoffinRepositories implements CoffinRepositoriesInterface
{
    public function index(): array
    {
        return Coffin::with(['translation', 'translations', 'photos', 'benefitcoffin.translation'])
            ->where('is_active', true)
            ->get()
            ->toArray();
    }

    public function find(string $slug): ?Coffin
    {
        return Coffin::where('slug', $slug)
            ->with(['translation', 'translations', 'photos', 'benefitcoffin.translation'])
            ->first();
    }
}
