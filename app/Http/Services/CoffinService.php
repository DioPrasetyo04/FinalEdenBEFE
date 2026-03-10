<?php

namespace App\Http\Services;

use App\Http\Interface\CoffinServiceInterface;
use App\Http\Interface\CoffinRepositoriesInterface;

class CoffinService implements CoffinServiceInterface
{
    public function __construct(
        private CoffinRepositoriesInterface $coffinRepository
    ) {}

    public function getAll(): array
    {
        $coffins = $this->coffinRepository->index();

        return array_map(function ($coffin) {
            $translations = collect($coffin['translations'] ?? []);
            $t_id         = $translations->firstWhere('locale', 'id') ?? $translations->first();
            $t_en         = $translations->firstWhere('locale', 'en') ?? $t_id;

            return [
                'id'                 => $coffin['id'],
                'slug'               => $coffin['slug'],
                'is_active'          => $coffin['is_active'],
                'nameID'             => $t_id['name'] ?? null,
                'nameEN'             => $t_en['name'] ?? null,
                'descriptionID'      => $t_id['description'] ?? null,
                'descriptionEN'      => $t_en['description'] ?? null,
                'photos'             => array_map(fn($p) => [
                    'id'    => $p['id'],
                    'photo' => asset('storage/' . $p['photo']),
                ], $coffin['photos'] ?? []),
                'benefits' => array_map(function ($benefit) {
                    $t = $benefit['translation'] ?? null;
                    return [
                        'id'          => $benefit['id'],
                        'slug'        => $benefit['slug'],
                        'name'        => $t['name'] ?? null,
                        'description' => $t['description'] ?? null,
                    ];
                }, $coffin['benefitcoffin'] ?? []),
            ];
        }, $coffins);
    }

    public function findBySlug(string $slug): ?array
    {
        $coffin = $this->coffinRepository->find($slug);

        if (!$coffin) {
            return null;
        }

        $translation = $coffin->translation;
        $photos      = $coffin->photos ?? collect([]);
        $benefits    = $coffin->benefitcoffin ?? collect([]);

        $translations = $coffin->translations ?? collect([]);
        $t_id         = $translations->firstWhere('locale', 'id') ?? $translations->first();
        $t_en         = $translations->firstWhere('locale', 'en') ?? $t_id;

        return [
            'id'                 => $coffin->id,
            'slug'               => $coffin->slug,
            'is_active'          => $coffin->is_active,
            'nameID'             => $t_id?->name,
            'nameEN'             => $t_en?->name,
            'descriptionID'      => $t_id?->description,
            'descriptionEN'      => $t_en?->description,
            'photos'             => $photos->map(fn($p) => [
                'id'    => $p->id,
                'photo' => asset('storage/' . $p->photo),
            ])->toArray(),
            'benefits' => $benefits->map(function ($benefit) {
                $t = $benefit->translation;
                return [
                    'id'          => $benefit->id,
                    'slug'        => $benefit->slug,
                    'name'        => $t?->name,
                    'description' => $t?->description,
                ];
            })->toArray(),
        ];
    }
}
