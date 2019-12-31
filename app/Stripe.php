<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class Stripe extends Model
{
    /**
    * Stripe constructor
    */
    public function __construct()
    {
        $this->client = new Client([
            'base_uri' => config('stripe.urls.BaseUri'),
            'headers' => [
                'Authorization' => 'Bearer ' . config('stripe.credentials.Secret')
            ]
        ]);
    }
    // constructor for the client?

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
        $paymentMethodId = $this->createPaymentMethod($userDetails['card_details']);
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
            'name' => $request->input('firstname') . ' ' . $request->input('lastname'),
            'phone' => $request->input('phone'),
            'email' => $request->input('email'),
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
     * @param array $cardDetails
     *
     * @return string`
     */
    protected function createPaymentMethod(array $cardDetails)
    {
        $paymentMethod = $this->client->request('POST', config('stripe.urls.PaymentMethod'), [
            'form_params' => [
                'type' => 'card',
                'card' => $cardDetails
            ]
        ]);

        return json_decode($paymentMethod->getBody())->id;
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
        $paymentIntent = $this->client->request('POST', config('stripe.urls.PaymentIntent'), [
            'form_params' => [
                'confirm' => 'true',
                'amount' => config('basket.course.price') * 100,
                'currency' => 'gbp',
                'payment_method' => $paymentMethodId
            ]
        ]);

        return json_decode($paymentIntent->getBody())->status;
    }
}
