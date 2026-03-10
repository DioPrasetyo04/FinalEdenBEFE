<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolePermissionSeeder extends Seeder
{
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $permissions = [
            // Users
            'view_users', 'create_users', 'edit_users', 'delete_users',
            // Roles
            'view_roles', 'create_roles', 'edit_roles', 'delete_roles',
            // Permissions
            'view_permissions', 'create_permissions', 'edit_permissions', 'delete_permissions',
            // Coffins
            'view_coffins', 'create_coffins', 'edit_coffins', 'delete_coffins',
            // Benefits
            'view_benefits', 'create_benefits', 'edit_benefits', 'delete_benefits',
            // Categories
            'view_categories', 'create_categories', 'edit_categories', 'delete_categories',
            // Gallery
            'view_galleries', 'create_galleries', 'edit_galleries', 'delete_galleries',
            // Mitra
            'view_mitras', 'create_mitras', 'edit_mitras', 'delete_mitras',
        ];

        foreach ($permissions as $permission) {
            Permission::firstOrCreate(['name' => $permission, 'guard_name' => 'web']);
        }

        // Super Admin - all permissions
        $superAdmin = Role::firstOrCreate(['name' => 'super-admin', 'guard_name' => 'web']);
        $superAdmin->givePermissionTo(Permission::all());

        // Admin - all content + users (no roles/permissions management)
        $admin = Role::firstOrCreate(['name' => 'admin', 'guard_name' => 'web']);
        $admin->givePermissionTo([
            'view_users', 'create_users', 'edit_users', 'delete_users',
            'view_coffins', 'create_coffins', 'edit_coffins', 'delete_coffins',
            'view_benefits', 'create_benefits', 'edit_benefits', 'delete_benefits',
            'view_categories', 'create_categories', 'edit_categories', 'delete_categories',
            'view_galleries', 'create_galleries', 'edit_galleries', 'delete_galleries',
            'view_mitras', 'create_mitras', 'edit_mitras', 'delete_mitras',
        ]);

        // Editor - view + create + edit only (no users or access management)
        $editor = Role::firstOrCreate(['name' => 'editor', 'guard_name' => 'web']);
        $editor->givePermissionTo([
            'view_coffins', 'create_coffins', 'edit_coffins',
            'view_benefits', 'create_benefits', 'edit_benefits',
            'view_categories', 'create_categories', 'edit_categories',
            'view_galleries', 'create_galleries', 'edit_galleries',
            'view_mitras', 'create_mitras', 'edit_mitras',
        ]);
    }
}
