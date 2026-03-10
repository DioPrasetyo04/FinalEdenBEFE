<?php

namespace App\Http\Interface;

use App\Models\Coffin;

interface  CoffinRepositoriesInterface
{
    public function index(): array;
    public function find(string $slug): ?Coffin;
}
