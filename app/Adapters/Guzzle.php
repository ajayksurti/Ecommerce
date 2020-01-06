<?php

namespace App\Adapters;

use GuzzleHttp\Client;

/**
 * Class GuzzleAdapter
 * @package App\Adapters
 */
class Guzzle implements HttpClient
{
    /**
     * @var Client
     */
    protected $client;

    /**
     * GuzzleAdapter constructor.
     * @param $baseUrl
     * @param $headers
     */
    public function __construct(string $baseUrl, array $headers)
    {
        $this->client = new Client([
            'base_uri' => $baseUrl,
            'headers' => $headers
        ]);
    }

    /**
     * @param string $uri
     * @param array $params
     * @return \Psr\Http\Message\ResponseInterface
     */
    public function post(string $uri, array $params)
    {
        return $this->client->post($uri, ['form_params' => $params]);
    }

    /**
     * @param $response
     * @return mixed
     */
    public function getResponseBody($response)
    {
        return json_decode($response->getBody());
    }
}