<?php

namespace App\Http\Repositories;

use App\Http\Interface\CategoryRepositoriesInterface;
use App\Models\Category;

class CategoryRepositories implements CategoryRepositoriesInterface
{
    public function index(): array
    {
        return Category::all()->toArray();
    }

    public function find($slug): ?Category
    {
        return Category::where('slug', $slug)->first();
    }
}
