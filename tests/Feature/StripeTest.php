<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class StripeTest extends TestCase
{
    /**
     * Test for /stripe endpoint.
     *
     * @return void
     */
    public function testStripeCredentials()
    {
        $response = $this->get('/api/stripe');

        $response->assertStatus(200);
        $response->assertJson([
            'data' => [
                'Publishable' => env('STRIPE_PUBLISHABLE_KEY'),
                'Secret'      => env('STRIPE_SECRET_KEY')
            ]
        ]);
    }

    /**
     * Test for /submit endpoint.
     *
     * @return void
     */
    public function testProcessPayment()
    {
        $response = $this->post('/api/submit', [
            "firstname"    => 'Test',
            "lastname"     => 'User',
            "phone"        => '01234567890',
            "email"        => 'user@test.com',
            "cardnumber"   => '4242424242424242',
            "cardexpmonth" => '01',
            "cardexpyear"  => '2021',
            "cardcvc"      => '123'
        ]);

        $response->assertStatus(200);
        $response->assertJson([
            'success' => true
        ]);
    }
}
