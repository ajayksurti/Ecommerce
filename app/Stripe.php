<?php

namespace App;

use App\Adapters\Guzzle;
use Illuminate\Database\Eloquent\Model;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Session\Session;

class Stripe extends Model
{
    /**
     * @var Client
     */
    protected $client;

    /**
    * Stripe constructor
    */
    public function __construct()
    {
        $this->client = new Guzzle(config('stripe.urls.BaseUri'), [
            'Authorization' => 'Bearer ' . config('stripe.credentials.Secret')
        ]);
        parent::__construct();
    }

    /**
     * Process payment through Stripe
     *
     * @param Request $request
     * @return bool
     */
    public function process(Request $request): bool
    {
        $token = $request->input('token');
        $paymentMethodId = $this->createPaymentMethod($token);
        $paymentIntentStatus = $this->createAndConfirmPaymentIntent($paymentMethodId);
        return $paymentIntentStatus == 'succeeded' ? true : false;
    }

    /**
     * Create a PaymentMethod Stripe object using payment details
     *
     * @param string $stripeToken
     * @return string
     */
    protected function createPaymentMethod(string $stripeToken): string
    {
        $paymentMethod = $this->client->post(config('stripe.urls.PaymentMethod'), [
                'type' => 'card',
                'card[token]' => $stripeToken
        ]);

        return $this->client->getResponseBody($paymentMethod)->id;
    }

    /**
     * Create and confirm a Stripe PaymentIntent object
     *
     * @param string $paymentMethodId
     * @return string
     */
    protected function createAndConfirmPaymentIntent(string $paymentMethodId): string
    {
        $session = new Session();
        $paymentIntent = $this->client->post(config('stripe.urls.PaymentIntent'), [
                'confirm' => 'true',
                'amount' => $session->get('total') * 100,
                'currency' => 'gbp',
                'payment_method' => $paymentMethodId
        ]);

        return $this->client->getResponseBody($paymentIntent)->status;
    }
}
