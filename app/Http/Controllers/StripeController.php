<?php

namespace App\Http\Controllers;

use App\Stripe;
use Symfony\Component\HttpFoundation\Session\Session;


/**
 * Class StripeController
 * @package App\Http\Controllers
 */
class StripeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(['data' => config('stripe.credentials')]);
    }

    /**
     * Process card payment through Stripe
     *
     * @return \Illuminate\Http\JsonResponse
     */
    public function process()
    {
        $stripe = new Stripe();
        return response()->json([
            'success' => $stripe->process(request())
        ]);
    }
}
