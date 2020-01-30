<?php

namespace App\Http\Controllers;

use App\Order;
use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Session\Session;

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
        $session = new Session();
        $order = new Order();
        return response()->json([
            'success' => $order->storeOrderDetails(request()),
        ]);
    }

}
