<?php

namespace App\Http\Controllers;

use App\Http\Interface\CoffinRepositoriesInterface;
use Illuminate\Http\Request;

class CoffinController extends Controller
{
    private $coffinRepositories;

    public function __construct(CoffinRepositoriesInterface $coffinRepositories)
    {
        $this->coffinRepositories = $coffinRepositories;
    }

    public function index()
    {
        return $this->coffinRepositories->index();
    }

    public function find($slug)
    {
        return $this->coffinRepositories->find($slug);
    }
}
