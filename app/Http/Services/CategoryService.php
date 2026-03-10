<?php

namespace App\Http\Services;

use App\Http\Interface\CategoryServiceInterface;
use App\Http\Interface\CategoryRepositoriesInterface;

class CategoryService implements CategoryServiceInterface
{
    public function __construct(
        private CategoryRepositoriesInterface $categoryRepository
    ) {}

    public function getAll(): array
    {
        return $this->categoryRepository->index();
    }

    public function findBySlug(string $slug): ?array
    {
        $category = $this->categoryRepository->find($slug);

        if (!$category) {
            return null;
        }

        return [
            'id'   => $category->id,
            'name' => $category->name,
            'slug' => $category->slug,
        ];
    }
}
