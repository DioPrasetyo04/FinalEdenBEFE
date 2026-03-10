<?php

namespace App\Providers;

use App\Http\Interface\CategoryRepositoriesInterface;
use App\Http\Interface\CoffinRepositoriesInterface;
use App\Http\Repositories\CategoryRepositories;
use App\Http\Repositories\CoffinRepositories;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->bind(CategoryRepositoriesInterface::class, CategoryRepositories::class);
        $this->app->bind(CoffinRepositoriesInterface::class, CoffinRepositories::class);
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        //
    }
}
