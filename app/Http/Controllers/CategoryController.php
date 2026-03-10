<?php

namespace App\Http\Controllers;

use App\Http\Interface\CategoryRepositoriesInterface;
use Illuminate\Http\Request;
use App\Http\Interface\CategoryRepositoryInterface;

class CategoryController extends Controller
{
    private $categoryRepositories;
    public function __construct(CategoryRepositoriesInterface $categoryRepositories)
    {
        $this->categoryRepositories = $categoryRepositories;
    }

    public function index()
    {
        return $this->categoryRepositories->index();
    }

    public function find($slug)
    {
        return $this->categoryRepositories->find($slug);
    }
}
