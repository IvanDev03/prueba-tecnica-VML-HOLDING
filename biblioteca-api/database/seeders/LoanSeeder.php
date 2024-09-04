<?php

namespace Database\Seeders;

use App\Models\Book;
use App\Models\Loan;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class LoanSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();
        $books = Book::all();

        foreach ($users as $user) {
            $randomBooks = $books->random(rand(1, 3));

            foreach ($randomBooks as $book) {
                Loan::create([
                    'user_id' => $user->id,
                    'book_id' => $book->id,
                    'loan_date' => now(),
                    'return_date' => now()->addDays(rand(7, 21)),
                    'status' => 'returned|pending',
                ]);
            }
        }
    }
}
