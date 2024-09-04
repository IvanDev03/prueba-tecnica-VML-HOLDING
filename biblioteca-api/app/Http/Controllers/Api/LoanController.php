<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Loan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class LoanController extends Controller
{
    public function index(): \Illuminate\Http\JsonResponse
    {
        $loan = Loan::paginate(5);
        if ($loan->isEmpty()) {
            return response()->json([
                'message' => 'No loans found',
                'status' => '404'
            ], 404);
        }
        return response()->json($loan, 200);
    }

    public function store(Request $request): \Illuminate\Http\JsonResponse
    {
        $validator = Validator::make($request->all(), [
            'user_id' => 'required',
            'book_id' => 'required',
            'loan_date' => 'required',
            'return_date' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation error',
                'errors' => $validator->errors(),
                'status' => '400'
            ], 400);
        }
        $loan = Loan::create($request->all());

        if (!$loan) {
            return response()->json([
                'message' => 'Error creating loan',
                'status' => '500'
            ], 500);
        }

        return response()->json([
            'message' => 'Loan created',
            'status' => '201'
        ], 201);
    }

    public function show($id): \Illuminate\Http\JsonResponse
    {
        $loan = Loan::find($id);
        if (!$loan) {
            return response()->json([
                'message' => 'Loan not found',
                'status' => '404'
            ], 404);
        }
        return response()->json($loan, 200);
    }

    public function update(Request $request, int $id): \Illuminate\Http\JsonResponse
    {
        $loan = Loan::find($id);
        if (!$loan) {
            return response()->json([
                'message' => 'Loan not found',
                'status' => '404'
            ], 404);
        }
        $loan->update($request->all());
        return response()->json([
            'message' => 'Loan updated',
            'status' => '200'
        ], 200);
    }

    public function destroy($id): \Illuminate\Http\JsonResponse
    {
        $loan = Loan::find($id);
        if (!$loan) {
            return response()->json([
                'message' => 'Loan not found',
                'status' => '404'
            ], 404);
        }
        $loan->delete();
        return response()->json([
            'message' => 'Loan deleted',
            'status' => '200'
        ], 200);
    }
}
