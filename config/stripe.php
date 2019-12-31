<?php

return [
    'credentials' => [
        'Publishable' => env('STRIPE_PUBLISHABLE_KEY'),
        'Secret' => env('STRIPE_SECRET_KEY')
    ],
    'urls' => [
        'BaseUri' => 'https://api.stripe.com',
        'PaymentMethod' => '/v1/payment_methods',
        'PaymentIntent' => '/v1/payment_intents'
    ]
];
