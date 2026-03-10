<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\CoffinsResource;
use App\Models\Coffin;
use Illuminate\Http\Request;

class CoffinController extends Controller
{

    public function index()
    {
        $coffins = Coffin::where('is_active', true)->get();

        return CoffinsResource::collection($coffins);
    }

    public function show(string $slug)
    {
        $coffin = Coffin::where('slug', $slug)
            ->where('is_active', true)
            ->firstOrFail();

        return new CoffinsResource($coffin);
    }
}
