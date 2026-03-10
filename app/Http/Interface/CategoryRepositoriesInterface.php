<?php

namespace App\Http\Interface;

use App\Models\Category;

interface CategoryRepositoriesInterface
{
    public function index(): array;
    public function find(string $slug): ?Category;
}
