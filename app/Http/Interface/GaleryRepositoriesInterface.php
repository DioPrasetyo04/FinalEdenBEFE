<?php

namespace App\Http\Interface;

use App\Models\Galery;

interface GaleryRepositoriesInterface
{
    public function index(): array;
    public function findByCategory(string $categorySlug): array;
}
