<?php

namespace App\Http\Interface;

interface TeamRepositoriesInterface
{
    public function getTeam(): array;
    public function getTeamPaginated(int $perPage = 8): \Illuminate\Pagination\LengthAwarePaginator;
    public function getStats(): array;
}
