<?php

namespace App\Http\Repositories;

use App\Http\Interface\TeamRepositoriesInterface;
use App\Models\User;
use Illuminate\Pagination\LengthAwarePaginator;

class TeamRepositories implements TeamRepositoriesInterface
{
    /**
     * Get all team members (users that are NOT purely mitra role).
     * Show users with roles: super-admin, admin, editor, or any named role
     * that suggests they are internal staff.
     */
    public function getTeam(): array
    {
        return User::with('roles')
            ->whereHas('roles', fn($q) => $q->whereNotIn('name', ['mitra']))
            ->get()
            ->toArray();
    }

    public function getTeamPaginated(int $perPage = 8): LengthAwarePaginator
    {
        return User::with('roles')
            ->whereHas('roles', fn($q) => $q->whereNotIn('name', ['mitra']))
            ->paginate($perPage);
    }

    public function getStats(): array
    {
        $all = User::with('roles')
            ->whereHas('roles', fn($q) => $q->whereNotIn('name', ['mitra']))
            ->get();

        $strukturPengelola = $all->filter(
            fn($u) => $u->hasRole(['super-admin', 'admin'])
        )->count();

        $editor = $all->filter(
            fn($u) => $u->hasRole(['editor'])
        )->count();

        $totalStaff = $all->count();

        return [
            'struktur_pengelola' => $strukturPengelola,
            'editor'    => $editor,
            'total_staff'        => $totalStaff,
        ];
    }
}
