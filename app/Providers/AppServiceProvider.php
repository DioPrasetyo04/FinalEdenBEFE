<?php

namespace App\Providers;

use App\Http\Interface\CategoryRepositoriesInterface;
use App\Http\Interface\CategoryServiceInterface;
use App\Http\Interface\CoffinRepositoriesInterface;
use App\Http\Interface\CoffinServiceInterface;
use App\Http\Interface\GaleryRepositoriesInterface;
use App\Http\Interface\GaleryServiceInterface;
use App\Http\Interface\MitraRepositoriesInterface;
use App\Http\Interface\MitraServiceInterface;
use App\Http\Interface\TeamRepositoriesInterface;
use App\Http\Interface\TeamServiceInterface;
use App\Http\Repositories\CategoryRepositories;
use App\Http\Repositories\CoffinRepositories;
use App\Http\Repositories\GaleryRepositories;
use App\Http\Repositories\MitraRepositories;
use App\Http\Repositories\TeamRepositories;
use App\Http\Services\CategoryService;
use App\Http\Services\CoffinService;
use App\Http\Services\GaleryService;
use App\Http\Services\MitraService;
use App\Http\Services\TeamService;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        // Repositories
        $this->app->bind(CoffinRepositoriesInterface::class, CoffinRepositories::class);
        $this->app->bind(CategoryRepositoriesInterface::class, CategoryRepositories::class);
        $this->app->bind(GaleryRepositoriesInterface::class, GaleryRepositories::class);
        $this->app->bind(TeamRepositoriesInterface::class, TeamRepositories::class);
        $this->app->bind(MitraRepositoriesInterface::class, MitraRepositories::class);

        // Services
        $this->app->bind(CoffinServiceInterface::class, CoffinService::class);
        $this->app->bind(CategoryServiceInterface::class, CategoryService::class);
        $this->app->bind(GaleryServiceInterface::class, GaleryService::class);
        $this->app->bind(TeamServiceInterface::class, TeamService::class);
        $this->app->bind(MitraServiceInterface::class, MitraService::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
