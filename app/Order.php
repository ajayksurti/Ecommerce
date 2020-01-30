<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Session\Session;

/**
 * Class Order
 * @package App
 */
class Order extends Model
{
    /**
     * Store the order details in the session to be used when processing payment.
     *
     * @param Request $request
     * @return bool
     */
    public function storeOrderDetails(Request $request): bool
    {
        $session = new Session();
        $session->set('items', $request->input('items'));
        $session->set('subtotal',  $request->input('subtotal'));
        $session->set('discounts',  $request->input('discounts'));
        $session->set('total',  $request->input('total'));
        return true;
    }
}
