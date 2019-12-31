<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class ProductsTest extends TestCase
{
    /**
     * Test for /products endpoint.
     *
     * @return void
     */
    public function testProductsList()
    {
        $response = $this->get('/api/products');

        $response->assertStatus(200);
        $response->assertJson([
            'data' => [
                'name' => 'AAT',
                'price' => 125.00
            ]
        ]);
    }
}
