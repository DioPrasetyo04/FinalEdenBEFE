<?php

use Illuminate\Foundation\Inspiring;
use Illuminate\Support\Facades\Artisan;

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->purpose('Display an inspiring quote');

Artisan::command('assign-admin {email}', function ($email) {
    if ($user = \App\Models\User::where('email', $email)->first()) {
        $user->assignRole('super-admin');
        $this->info("Assigned super-admin to {$email}");
    } else {
        $this->error("User {$email} not found");
    }
});
