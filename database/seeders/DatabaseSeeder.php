<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => Hash::make('password'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'owner',
            'email' => 'owner@gmail.com',
            'password' => Hash::make('password'),
        ]);

        $owner = \App\Models\Role::create([
            'name' => 'owner',
            'display_name' => 'Project Owner', // optional
            'description' => 'User is the owner of a given project', // optional
        ]);
        
        $admin = \App\Models\Role::create([
            'name' => 'admin',
            'display_name' => 'User Administrator', // optional
            'description' => 'User is allowed to manage and edit other users', // optional
        ]);
    }
}
