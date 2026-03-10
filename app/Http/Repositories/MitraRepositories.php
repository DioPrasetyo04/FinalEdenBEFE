<?php

namespace App\Http\Repositories;

use App\Http\Interface\MitraRepositoriesInterface;
use App\Models\Mitra;
use Illuminate\Pagination\LengthAwarePaginator;

class MitraRepositories implements MitraRepositoriesInterface
{
    public function getAll(): array
    {
        return Mitra::all()->toArray();
    }

    public function getPaginated(int $perPage = 12): LengthAwarePaginator
    {
        return Mitra::paginate($perPage);
    }
}
