<?php

namespace Database\Seeders;


use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class RoleSeeder extends Seeder
{

    public function run(): void
    {
        $superAdminRole = Role::create(['name' => 'super-admin']);
        $adminRole = Role::create(['name' => 'admin']);
        $userRole = Role::create(['name' => 'user']);

        $manageUsersPermission = Permission::create(['name' => 'manage users']);

        $adminRole->givePermissionTo($manageUsersPermission);

        $superAdminUser = User::find(12);
        $superAdminUser->assignRole($superAdminRole);

        $adminUser = User::find(11);
        $adminUser->assignRole($adminRole);

        $regularUser = User::find(1);
        $regularUser->assignRole($userRole);
    }
}
