<?php

namespace App\Http\Controllers\Api;

use App\Models\Book;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class BookController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $books = Book::paginate(5);
        if ($books->isEmpty()) {
            return response()->json([
                'message' => 'No books found',
                'status' => '404'
            ], 404);
        }
        return response()->json($books, 200);
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'author' => 'required',
            'genre' => 'required',
            'categorie_id' => 'required',
            'stock' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
                'status' => '400'
            ], 400);
        }
        $books = Book::create($request->all());

        if (!$books) {
            return response()->json([
                'message' => 'Error creating book',
                'status' => '500'
            ], 500);
        }

        return response()->json([
            'message' => 'Book created',
            'status' => '201'
        ], 201);
    }

    public function show($id): \Illuminate\Http\JsonResponse
    {
        $book = Book::find($id);
        if (!$book) {
            return response()->json([
                'message' => 'Book not found',
                'status' => '404'
            ], 404);
        }
        return response()->json($book, 200);
    }

    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $book = Book::find($id);
        if (!$book) {
            return response()->json([
                'message' => 'Book not found',
                'status' => '404'
            ], 404);
        }
        $book->update($request->all());
        return response()->json([
            'message' => 'Book updated',
            'status' => '200'
        ], 200);
    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $book = Book::find($id);
        if (!$book) {
            return response()->json([
                'message' => 'Book not found',
                'status' => '404'
            ], 404);
        }
        $book->delete();
        return response()->json([
            'message' => 'Book deleted',
            'status' => '200'
        ], 200);
    }
}
