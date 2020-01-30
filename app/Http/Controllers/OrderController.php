<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\JsonResponse;

/**
 * Class StripeController
 * @package App\Http\Controllers
 */
class OrderController extends Controller
{
    /**
     * Store the order details as part of the session.
     *
     * @return JsonResponse
     */
    public function store(): JsonResponse
    {
        $order = new Order();
        return response()->json([
            'success' => $order->storeOrderDetails(request()),
        ]);
    }

}
