<?php

namespace App\Http\Interface;

interface GaleryServiceInterface
{
    public function getAll(): array;
    public function getByCategory(string $categorySlug): array;
}
