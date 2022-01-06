<?php
/*
 * This file is part of con4gis,
 * the gis-kit for Contao CMS.
 *
 * @package    con4gis
 * @version    7
 * @author     con4gis contributors (see "authors.txt")
 * @license    LGPL-3.0-or-later
 * @copyright  Küstenschmiede GmbH Software & Design
 * @link       https://www.con4gis.org
 */

namespace con4gis\IOTravelCostsBundle\Controller;


use con4gis\CoreBundle\Controller\BaseController;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class TravelCostsController extends AbstractController
{
    /**
     * @Route("/con4gis/expenseService/{settings}/{locations}/{tariffId}/{time}", name="getExpenseService", methods={"GET"})
     * @param $request
     * @return JsonResponse
     */
    public function getExpensesAction(Request $request, $settings, $locations, $tariffId = null, $time = null){
        $this->get('contao.framework')->initialize();
        $expenseService = $this->get("con4gis.expense_service");
        $response = new JsonResponse();
        $response ->setData($expenseService->getResponse($settings, $locations, $tariffId, $time));
        return $response;
    }
    /**
     * @Route("/con4gis/tariffService/{settingId}", name="getTariffService", methods={"GET"})
     * @param $request
     * @return JsonResponse
     */
    public function getTariffAction(Request $request, $settingId){
        $this->get('contao.framework')->initialize();
        $tariffService = $this->get("con4gis.tariff_service");
        $response = new JsonResponse();
        $response ->setData($tariffService->getResponse($settingId));
        return $response;
    }
}