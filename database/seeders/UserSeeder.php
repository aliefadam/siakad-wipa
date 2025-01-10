<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            "name" => "Admin",
            "username" => "admin",
            "email" => "admin@siakadwipa.com",
            "password" => bcrypt("123"),
            "role" => "admin",
        ]);

        User::create([
            "name" => "Sutrisno",
            "username" => "909090",
            "email" => "sutrisno@gmail.com",
            "password" => bcrypt("123"),
            "role" => "teacher",
        ]);

        User::create([
            "name" => "Alief",
            "username" => "123123",
            "email" => "aliefadam6@gmail.com",
            "password" => bcrypt("123"),
            "role" => "student",
        ]);
    }
}
