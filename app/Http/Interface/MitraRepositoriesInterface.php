<?php

namespace App\Http\Interface;

interface MitraRepositoriesInterface
{
    public function getAll(): array;
    public function getPaginated(int $perPage = 12): \Illuminate\Pagination\LengthAwarePaginator;
}
