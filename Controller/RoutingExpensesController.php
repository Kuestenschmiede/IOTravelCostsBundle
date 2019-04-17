<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    6
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

namespace con4gis\RoutingExpensesBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use con4gis\RoutingBundle\Classes\Services\AreaService;
use con4gis\RoutingBundle\Classes\Services\RouteService;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class RoutingExpensesController extends AbstractController
{
    /**
     * @Route("/con4gis/expenseService/{settings}/{locations}/{tariffId}/{time}", name="getExpenseService", methods={"GET"})
     * @param $request
     * @return JsonResponse
     */
    public function getExpensesAction(Request $request, $settings, $locations, $tariffId = null, $time = null){
        $this->get('contao.framework')->initialize();
        $expenseService = $this->get("con4gis.expense_service");
        $response = new Response();
        $response ->setContent($expenseService->getResponse($settings, $locations, $tariffId, $time));
        $response->headers->set('Content-Type', 'application/json');
        return $response;

    }
}