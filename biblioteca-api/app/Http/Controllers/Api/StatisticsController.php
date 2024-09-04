<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class StatisticsController extends Controller
{

    public function mostPopularBooks(): \Illuminate\Http\JsonResponse
    {
        $books = DB::table('book')
            ->join('loan', 'book.id', '=', 'loan.book_id')
            ->select('book.id', 'book.title', DB::raw('COUNT(loan.id) as loans_count'))
            ->groupBy('book.id', 'book.title')
            ->orderByDesc('loans_count')
            ->paginate(5);

        return response()->json($books);
    }

    public function mostActiveUsers(): \Illuminate\Http\JsonResponse
    {
        $users = DB::table('users')
            ->join('loan', 'users.id', '=', 'loan.user_id')
            ->select('users.id', 'users.name', DB::raw('COUNT(loan.id) as loans_count'))
            ->groupBy('users.id', 'users.name')
            ->orderByDesc('loans_count')
            ->paginate(5);

        return response()->json($users);
    }

    public function loansByCategory(): \Illuminate\Http\JsonResponse
    {
        $categories = DB::table('categorie')
            ->join('book', 'categorie.id', '=', 'book.categorie_id')
            ->join('loan', 'book.id', '=', 'loan.book_id')
            ->select('categorie.id', 'categorie.name', DB::raw('COUNT(loan.id) as loans_count'))
            ->groupBy('categorie.id', 'categorie.name')
            ->orderByDesc('loans_count')
            ->paginate(5);

        return response()->json($categories);
    }
}
