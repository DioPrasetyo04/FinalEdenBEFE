<?php

use Illuminate\Support\Str;

if (!function_exists('generateSlug')) {
    function generateSlug(string $name, string $modelClass): string
    {
        $prefix = 'new-eden-funeral-service';

        $baseSlug = $prefix . '-' . Str::slug($name);

        $slug = $baseSlug;
        $count = 1;

        while ($modelClass::where('slug', $slug)->exists()) {
            $slug = $baseSlug . '-' . $count;
            $count++;
        }

        return $slug;
    }
}
