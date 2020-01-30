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
    public function store()
    {
        $order = new Order();
        $amount = request()->input('totalprice');
        $currency = request()->input('currency');
        return response()->json([
            'success' => $order->storeOrderDetails([
                'amount' => $amount,
                'currency' => $currency
            ]),
        ]);
    }

}
