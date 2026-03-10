<?php

namespace App\Http\Repositories;

use App\Http\Interface\GaleryRepositoriesInterface;
use App\Models\Category;
use App\Models\Galery;

class GaleryRepositories implements GaleryRepositoriesInterface
{
    public function index(): array
    {
        return Galery::with('category')->get()->toArray();
    }

    public function findByCategory(string $categorySlug): array
    {
        $category = Category::where('slug', $categorySlug)->first();

        if (!$category) {
            return [];
        }

        return Galery::where('category_id', $category->id)
            ->with('category')
            ->get()
            ->toArray();
    }
}
