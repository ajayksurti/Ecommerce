<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Session\Session;

/**
 * Class Basket
 * @package App
 */
class Basket extends Model
{
    /**
     * Store the basket details in the session to be used for the basket page.
     *
     * @param Request $request
     * @return bool
     */
    public function storeBasketDetails(Request $request): bool
    {
        $session = new Session();
        $session->set('basket', $request->input('data'));
        return true;
    }
}
