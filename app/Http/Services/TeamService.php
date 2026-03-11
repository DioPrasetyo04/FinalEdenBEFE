<?php

namespace App\Http\Services;

use App\Http\Interface\TeamServiceInterface;
use App\Http\Interface\TeamRepositoriesInterface;

class TeamService implements TeamServiceInterface
{
    public function __construct(
        private TeamRepositoriesInterface $teamRepository
    ) {}

    public function getAll(): array
    {
        $members = $this->teamRepository->getTeam();

        return array_map(fn($member) => $this->transform($member), $members);
    }

    public function getStats(): array
    {
        return $this->teamRepository->getStats();
    }

    private function transform(array $member): array
    {
        $roles = $member['roles'] ?? [];

        $name = $member['name'] ?? [];

        // Map the Spatie role name to a friendly Indonesian job title
        $primaryRole = $roles[0]['name'] ?? null;
        $jobTitle = $this->mapRoleToTitle($primaryRole);

        return [
            'id'        => $member['id'],
            'name'      => $member['name'],
            'email'     => $member['email'],
            'phone'     => $member['phone'] ?? null,
            'photo'     => $member['photo']
                ? asset('storage/' . $member['photo'])
                : null,
            'job_title' => $jobTitle,
        ];
    }

    /**
     * Map Spatie role names to human-friendly Indonesian job titles.
     * Adjust as needed to match your business roles.
     */
    private function mapRoleToTitle(?string $role): string
    {
        return match ($role) {
            'super-admin' => 'Direktur Utama',
            'admin'       => 'Manajer Operasional',
            'editor'      => 'Koordinator Layanan',
            default       => 'Staf',
        };
    }
}
