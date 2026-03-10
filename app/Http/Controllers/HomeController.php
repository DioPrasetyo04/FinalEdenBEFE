<?php

namespace App\Http\Controllers;

use App\Http\Interface\CategoryServiceInterface;
use App\Http\Interface\CoffinServiceInterface;
use App\Http\Interface\GaleryServiceInterface;
use App\Http\Interface\MitraServiceInterface;
use App\Http\Interface\TeamServiceInterface;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function __construct(
        private CoffinServiceInterface   $coffinService,
        private CategoryServiceInterface $categoryService,
        private GaleryServiceInterface   $galeryService,
        private MitraServiceInterface    $mitraService,
        private TeamServiceInterface     $teamService,
    ) {}

    public function index(): Response
    {
        $coffins     = $this->coffinService->getAll();
        $categories  = $this->categoryService->getAll();
        $galeries    = $this->galeryService->getAll();
        $mitras      = $this->mitraService->getAll();
        $team        = $this->teamService->getAll();
        $team_stats  = $this->teamService->getStats();

        return Inertia::render('Home/Index', [
            'coffins'    => $coffins,
            'categories' => $categories,
            'galeries'   => $galeries,
            'mitras'     => $mitras,
            'team'       => $team,
            'team_stats' => $team_stats,
        ]);
    }

    public function show(string $slug): Response
    {
        $coffin = $this->coffinService->findBySlug($slug);

        if (!$coffin) {
            return Inertia::render('Errors/NotFound', [
                'type'    => 'coffin',
                'message' => 'Peti jenazah dengan slug "' . $slug . '" tidak ditemukan.',
            ]);
        }

        return Inertia::render('Coffin/Show', compact('coffin'));
    }
}
