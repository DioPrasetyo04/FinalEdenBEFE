<?php

namespace App\Http\Repositories;

use App\Http\Interface\CoffinRepositoriesInterface;
use App\Models\Category;
use App\Models\Coffin;

class CoffinRepositories implements CoffinRepositoriesInterface
{
    public function index(): array
    {
        return Coffin::all()->with(['translations', 'translation', 'photos'])->toArray();
    }

    public function find($slug): ?Coffin
    {
        return Category::where('slug', $slug)->with(['translations', 'translation', 'photos'])->first();
    }
}
