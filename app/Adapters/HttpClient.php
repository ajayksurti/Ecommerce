<?php

namespace App\Adapters;

/**
 * Interface HttpClient
 * @package App
 */
interface HttpClient {

    function __construct(string $baseUrl, array $headers);

    function post(string $uri, array $params);

    function getResponseBody($response);

}