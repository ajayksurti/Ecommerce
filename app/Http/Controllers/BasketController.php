<?php

namespace App\Http\Controllers;

use App\Basket;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;

/**
 * Class StripeController
 * @package App\Http\Controllers
 */
class BasketController extends Controller
{
  /**
   * Fetch the basket details from the session.
   *
   * @return JsonResponse
   */
    public function index(): JsonResponse
    {
        $session = new Session();
        return response()->json([
            'data' => $session->get('basket')
        ]);
    }

    /**
     * Store the order details as part of the session.
     *
     * @return JsonResponse
     */
    public function store(): JsonResponse
    {
        $basket = new Basket();
        return response()->json([
            'success' => $basket->storeBasketDetails(request())
        ]);
    }

}
