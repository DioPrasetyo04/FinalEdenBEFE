<?php

namespace App\Http\Interface;

interface TeamServiceInterface
{
    public function getAll(): array;
    public function getStats(): array;
}
