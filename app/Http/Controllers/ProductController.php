<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;

class ProductController extends Controller
{
    /**
     * Display a listing for the specified resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json(['data' => config('products.course')]);
    }

}
