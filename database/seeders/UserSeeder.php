<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // 1. Super Admin
        $superAdmin = User::firstOrCreate(
            ['email' => 'superadmin@webeden.com'],
            [
                'name' => 'Super Admin',
                'password' => Hash::make('password'), // password is 'password'
                'email_verified_at' => now(),
            ]
        );
        // Assign role super-admin yang memiliki semua akses (dibuat di RolePermissionSeeder)
        $superAdmin->assignRole('super-admin');

        // 2. Admin
        $admin = User::firstOrCreate(
            ['email' => 'admin@webeden.com'],
            [
                'name' => 'Admin User',
                'password' => Hash::make('password'), // password is 'password'
                'email_verified_at' => now(),
            ]
        );
        // Assign role admin yang memiliki banyak akses tapi tanpa manajemen roles/permissions
        $admin->assignRole('admin');
        
        // Catatan: Jika Anda sudah membuat user sebelumnya (misal melalui command filament:user), 
        // Anda juga bisa mengassign role secara langsung melalui code di bawah ini dengan mengganti emailnya.
        // 
        $myUser = User::where('email', 'admin@webeden.com')->first();
        if ($myUser) {
            $myUser->assignRole('super-admin');
        }
    }
}
