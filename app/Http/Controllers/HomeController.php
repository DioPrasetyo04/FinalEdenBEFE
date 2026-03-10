<?php

namespace App\Http\Controllers;

use App\Http\Interface\CategoryRepositoriesInterface;
use App\Http\Interface\CoffinRepositoriesInterface;
use App\Http\Resources\CoffinsResource;
use App\Models\Coffin;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    private $categoryRepositories;
    private $coffinRepositories;
    public function __construct(CategoryRepositoriesInterface $categoryRepositories, CoffinRepositoriesInterface $coffinRepositories)
    {
        $this->categoryRepositories = $categoryRepositories;
        $this->coffinRepositories = $coffinRepositories;
    }
    public function index(): Response
    {
        $coffins = $this->coffinRepositories->index();
        $categories = $this->categoryRepositories->index();
        // $mitra
        // $team

        return Inertia::render('Home/Index', compact('coffins', 'categories'));
    }
}
