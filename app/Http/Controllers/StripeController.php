<?php

namespace App\Http\Controllers;

use App\Stripe;
use Illuminate\Http\JsonResponse;

/**
 * Class StripeController
 * @package App\Http\Controllers
 */
class StripeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index(): JsonResponse
    {
        return response()->json([
            'data' => config('stripe.credentials')
        ]);
    }

    /**
     * Process card payment through Stripe
     *
     * @return JsonResponse
     */
    public function process(): JsonResponse
    {
        $stripe = new Stripe();
        return response()->json([
            'success' => $stripe->process(request())
        ]);
    }
}
