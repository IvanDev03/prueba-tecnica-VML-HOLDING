<?php

namespace App\Http\Controllers\Api;

use App\Models\Categorie;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CategorieController extends Controller
{
    public function index()
    {
        $categories = Categorie::all();

        if ($categories->isEmpty()) {
            return response()->json([
                'message' => 'No categories found',
                'status' => '404'
            ], 404);
        }
        return response()->json([
            'categories' => $categories,
            'status' => '200'
        ], 200);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|min:5|unique:categories',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
                'status' => '400'
            ], 400);
        }
        $categories = Categorie::create($request->all());

        if (!$categories) {
            return response()->json([
                'message' => 'Error creating categorie',
                'status' => '500'
            ], 500);
        }

        return response()->json([
            'message' => 'Categorie created',
            'status' => '201'
        ], 201);
    }

    public function show($id)
    {
        $categorie = Categorie::find($id);

        if (!$categorie) {
            return response()->json([
                'message' => 'Categorie not found',
                'status' => '404'
            ], 404);
        }

        return response()->json([
            'categorie' => $categorie,
            'status' => '200'
        ], 200);
    }

    public function update(Request $request, int $id): \Illuminate\Http\JsonResponse
    {
        $categorie = Categorie::find($id);

        if (!$categorie) {
            return response()->json([
                'message' => 'Categorie not found',
                'status' => '404'
            ], 404);
        }

        $validator = Validator::make($request->all(), [
            'name' => 'required|min:5|unique:categories',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
                'status' => '400'
            ], 400);
        }

        $categorie->update($request->all());

        return response()->json([
            'message' => 'Categorie updated',
            'status' => '200'
        ], 200);
    }
}
