<?php

namespace App\Adapters;

/**
 * Class Httpful
 * @package App\Adapters
 */
class Httpful implements HttpClient
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
     * Httpful constructor.
     * @param string $baseUrl
     * @param array $headers
     */
    public function __construct(string $baseUrl, array $headers)
    {
        $this->baseUrl = $baseUrl;
        $this->headers = $headers;
    }

    /**
     * @param string $uri
     * @param array $params
     * @return \Httpful\Response
     * @throws \Httpful\Exception\ConnectionErrorException
     */
    public function post(string $uri, array $params)
    {
        return \Httpful\Request::post($this->baseUrl . $uri)
            ->addHeaders($this->headers)
            ->body($params, \Httpful\Mime::FORM)
            ->expectsJson()
            ->send();
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
