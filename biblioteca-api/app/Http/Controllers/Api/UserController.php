<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $users = User::paginate(5);
        return response()->json($users, 200);
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
                'status' => '400'
            ], 400);
        }

        $user = User::create($request->all());

        return response()->json([
            'message' => 'User created',
            'status' => '201'
        ], 201);
    }

    public function show($id): \Illuminate\Http\JsonResponse
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
                'status' => '404'
            ], 404);
        }
        return response()->json($user, 200);
    }

    public function update(Request $request, $id): \Illuminate\Http\JsonResponse
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
                'status' => '404'
            ], 404);
        }
        $user->update($request->all());
        return response()->json([
            'message' => 'User updated',
            'status' => '200'
        ], 200);
    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $user = User::find($id);
        if (!$user) {
            return response()->json([
                'message' => 'User not found',
                'status' => '404'
            ], 404);
        }
        $user->delete();
        return response()->json([
            'message' => 'User deleted',
            'status' => '200'
        ], 200);
    }
}
