<?php

namespace App\Http\Controllers;

use App\Stripe;
use Illuminate\Http\Request;


class StripeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response()->json(['data' => config('stripe.credentials.Secret')]);
    }

    /**
     * Process card payment through Stripe
     *
     * @return \Illuminate\Http\Response
     */
    public function process()
    {
        $stripe = new Stripe();
        return response()->json([
            'success' => $stripe->process(request())
        ]);
    }
}