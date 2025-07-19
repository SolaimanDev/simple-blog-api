<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Solaiman Ahmed',
            'email' => 'solaiman@example.com',
            'password' => Hash::make('password'),
        ]);

        // Create 5 random users
        User::factory()->count(5)->create();

        $this->call([
            // UserSeeder::class,
            PostSeeder::class,
        ]);
    }
}
