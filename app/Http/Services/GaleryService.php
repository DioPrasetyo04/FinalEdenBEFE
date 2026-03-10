<?php

namespace App\Http\Services;

use App\Http\Interface\GaleryServiceInterface;
use App\Http\Interface\GaleryRepositoriesInterface;

class GaleryService implements GaleryServiceInterface
{
    public function __construct(
        private GaleryRepositoriesInterface $galeryRepository
    ) {}

    public function getAll(): array
    {
        return array_map(fn($g) => $this->transform($g), $this->galeryRepository->index());
    }

    public function getByCategory(string $categorySlug): array
    {
        return array_map(fn($g) => $this->transform($g), $this->galeryRepository->findByCategory($categorySlug));
    }

    private function transform(array $galery): array
    {
        return [
            'id'          => $galery['id'],
            'name'        => $galery['name'],
            'photo'       => asset('storage/' . $galery['photo']),
            'description' => $galery['description'] ?? null,
            'category'    => isset($galery['category']) ? [
                'id'   => $galery['category']['id'],
                'name' => $galery['category']['name'],
                'slug' => $galery['category']['slug'],
            ] : null,
        ];
    }
}
