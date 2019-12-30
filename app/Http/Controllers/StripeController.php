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
        return response()->json(['data' => config('stripe')]);
    }
}
