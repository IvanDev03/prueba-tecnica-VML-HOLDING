<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\RoleController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\BookController;
use App\Http\Controllers\Api\CategorieController;
use App\Http\Controllers\Api\LoanController;
use App\Http\Controllers\Api\StatisticsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

#Books
Route::middleware('auth:sanctum')->get('/books', [BookController::class, 'index']);
Route::middleware('auth:sanctum')->get('/books/{id}', [BookController::class, 'show']);
Route::middleware('auth:sanctum')->put('/admin/books/{id}', [BookController::class, 'update']);
Route::middleware('auth:sanctum')->delete('/admin/books/{id}', [BookController::class, 'destroy']);
Route::middleware('auth:sanctum')->post('/admin/books', [BookController::class, 'store']);


# Categories
Route::middleware('auth:sanctum')->get('/categories', [CategorieController::class, 'index']);
Route::middleware('auth:sanctum')->get('/categories/{id}', [CategorieController::class, 'show']);
Route::middleware(['auth:sanctum', 'role:super-admin|admin'])->group(function () {
    Route::post('/categories', [CategorieController::class, 'store']);
    Route::put('/categories/{id}', [CategorieController::class, 'update']);
    Route::delete('/categories/{id}', [CategorieController::class, 'destroy']);
});

# Loans
Route::get('/loans', [LoanController::class, 'index']);
Route::get('/loans/{id}', [LoanController::class, 'show']);
Route::put('/loans/{id}', [LoanController::class, 'update']);
Route::middleware(['auth:sanctum', 'role:super-admin|admin'])->group(function () {
    Route::post('/loans', [LoanController::class, 'store']);
    Route::delete('/loans/{id}', [LoanController::class, 'destroy']);
});


# Statistics
Route::middleware('auth:sanctum')->get('/statistics/most-popular-books', [StatisticsController::class, 'mostPopularBooks']);
Route::middleware('auth:sanctum')->get('/statistics/most-active-users', [StatisticsController::class, 'mostActiveUsers']);
Route::middleware('auth:sanctum')->get('/statistics/loans-by-category', [StatisticsController::class, 'loansByCategory']);

# Auth
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');


Route::middleware(['auth:sanctum', 'role:super-admin'])->group(function () {
    Route::post('/assign-role', [RoleController::class, 'assignRole']);
});
