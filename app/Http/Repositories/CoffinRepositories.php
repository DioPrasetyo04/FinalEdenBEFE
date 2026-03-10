<?php

namespace App\Http\Repositories;

use App\Http\Interface\CoffinRepositoriesInterface;
use App\Models\Coffin;

class CoffinRepositories implements CoffinRepositoriesInterface
{
    public function index(): array
    {
        return Coffin::with(['translations', 'translation', 'photos'])->get()->toArray();
    }

    public function find($slug): ?Coffin
    {
        return Coffin::where('slug', $slug)->with(['translations', 'translation', 'photos'])->first();
    }
}
