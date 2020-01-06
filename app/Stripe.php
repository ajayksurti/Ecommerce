<?php

namespace App;

use App\Adapters\Guzzle;
use Illuminate\Database\Eloquent\Model;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

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
     * @param \Illuminate\Http\Request $request
     *
     * @return bool
     */
    public function process(Request $request)
    {
        $userDetails = $this->getUserDetails($request);
        $paymentMethodId = $this->createPaymentMethod($userDetails);
        $paymentIntentStatus = $this->createAndConfirmPaymentIntent($paymentMethodId);
        return $paymentIntentStatus == 'succeeded' ? true : false;
    }

    /**
     * Retrieve user and payment details from checkout form
     *
     * @param \Illuminate\Http\Request $request
     *
     * @return array
     */
    protected function getUserDetails(Request $request)
    {
        return [
            'billing_details' => [
                'name' => $request->input('firstname') . ' ' . $request->input('lastname'),
                'phone' => $request->input('phone'),
                'email' => $request->input('email'),
            ],
            'card_details' => [
                'number' => $request->input('cardnumber'),
                'exp_month' => $request->input('cardexpmonth'),
                'exp_year' => $request->input('cardexpyear'),
                'cvc' => $request->input('cardcvc')
            ]
        ];
    }

    /**
     * Create a PaymentMethod Stripe object using payment details
     *
     * @param array $userDetails
     *
     * @return string
     */
    protected function createPaymentMethod(array $userDetails)
    {
        $paymentMethod = $this->client->post(config('stripe.urls.PaymentMethod'), [
                'type' => 'card',
                'card' => $userDetails['card_details'],
                'billing_details' => $userDetails['billing_details']
        ]);

        return $this->client->getResponseBody($paymentMethod)->id;
    }

    /**
     * Create and confirm a Stripe PaymentIntent object
     *
     * @param string $paymentMethodId
     *
     * @return string
     */
    protected function createAndConfirmPaymentIntent(string $paymentMethodId)
    {
        $paymentIntent = $this->client->post(config('stripe.urls.PaymentIntent'), [
                'confirm' => 'true',
                'amount' => config('basket.course.price') * 100,
                'currency' => 'gbp',
                'payment_method' => $paymentMethodId
        ]);

        return $this->client->getResponseBody($paymentIntent)->status;
    }
}
