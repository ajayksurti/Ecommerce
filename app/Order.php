<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
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
     * @param array $orderDetails
     * @return bool
     */
    public function storeOrderDetails(array $orderDetails): bool
    {
        $session = new Session();
        $session->set('amount', $orderDetails['amount']);
        $session->set('currency', $orderDetails['currency']);
        return true;
    }
}
