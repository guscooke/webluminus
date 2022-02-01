<?php

declare(strict_types=1);

namespace App\Controller\Lead;

use Slim\Http\Request;
use Slim\Http\Response;

final class GetOne extends Base
{
    public function __invoke(Request $request, Response $response, array $args): Response
    {
        $lead = $this->getFindLeadService()->getOne((int) $args['id']);

        return $this->jsonResponse($response, 'success', $lead, 200);
    }
}
