<?php

namespace App\Http\Interface;

interface CoffinServiceInterface
{
    public function getAll(): array;
    public function findBySlug(string $slug): ?array;
}
