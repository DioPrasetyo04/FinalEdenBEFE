<?php

namespace App\Http\Services;

use App\Http\Interface\MitraServiceInterface;
use App\Http\Interface\MitraRepositoriesInterface;

class MitraService implements MitraServiceInterface
{
    public function __construct(
        private MitraRepositoriesInterface $mitraRepository
    ) {}

    public function getAll(): array
    {
        return array_map(fn($m) => $this->transform($m), $this->mitraRepository->getAll());
    }

    private function transform(array $mitra): array
    {
        // Generate 2-letter initials from name for the avatar fallback
        $words    = explode(' ', trim($mitra['name']));
        $initials = strtoupper(
            (strlen($words[0]) > 0 ? $words[0][0] : '') .
                (isset($words[1]) && strlen($words[1]) > 0 ? $words[1][0] : '')
        );

        return [
            'id'          => $mitra['id'],
            'name'        => $mitra['name'],
            'description' => $mitra['description'] ?? null,
            'photo'       => $mitra['photo']
                ? asset('storage/' . $mitra['photo'])
                : null,
            'initials'    => $initials,
        ];
    }
}
