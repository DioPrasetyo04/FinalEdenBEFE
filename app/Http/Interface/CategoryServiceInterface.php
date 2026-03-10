<?php

namespace App\Http\Interface;

interface CategoryServiceInterface
{
    public function getAll(): array;
    public function findBySlug(string $slug): ?array;
}
