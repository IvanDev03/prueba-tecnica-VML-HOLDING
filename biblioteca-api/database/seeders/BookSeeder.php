<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class BookSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = Categorie::all();


        foreach ($categories as $category) {
            Book::factory()->count(5)->create([
                'categorie_id' => $category->id,
            ]);
        }
    }
}

