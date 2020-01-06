<?php

namespace App\Adapters;

use Unirest\Request;

/**
 * Class GuzzleAdapter
 * @package App\Adapters
 */
class Unirest implements HttpClient
{
    /**
     * @var Request
     */
    protected $client;

    /**
     * @var string
     */
    protected $baseUrl;

    /**
     * @var array
     */
    protected $headers;

    /**
     * GuzzleAdapter constructor.
     * @param string $baseUrl
     * @param array $headers
     */
    public function __construct(string $baseUrl, array $headers)
    {
        $this->client = new Request();
        $this->baseUrl = $baseUrl;
        $this->headers = $headers;
    }

    /**
     * @param string $uri
     * @param array $params
     * @return \Unirest\Response
     */
    public function post(string $uri, array $params)
    {
        $body = Request\Body::form($params);
        return $this->client->post($this->baseUrl . $uri, $this->headers, $body);
    }

    /**
     * @param $response
     * @return mixed
     */
    public function getResponseBody($response)
    {
        return $response->body;
    }
}