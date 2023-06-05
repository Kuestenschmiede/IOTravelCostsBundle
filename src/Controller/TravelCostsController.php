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


use Symfony\Component\EventDispatcher\EventDispatcher;
use con4gis\IOTravelCostsBundle\Classes\Services\ExpenseService;
use con4gis\IOTravelCostsBundle\Classes\Services\TariffService;
use Contao\CoreBundle\Framework\ContaoFramework;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;


class TravelCostsController extends AbstractController
{
    public function __construct(EntityManager $manager, EventDispatcher $eventDispatcher, ContaoFramework $contaoFramework)
    {
        $this->entityManager = $manager;
        $this->eventDispatcher = $eventDispatcher;
        $this->framework = $contaoFramework;
    }
    /**
     * @Route("/con4gis/expenseService/{settings}/{locations}/{tariffId}/{time}", defaults={"tariffId":null,"time":null}, name="getExpenseService", methods={"GET"})
     * @param $request
     * @return JsonResponse
     */
    public function getExpensesAction(Request $request, $settings, $locations, $tariffId = null, $time = null){
        $this->framework->initialize();
        $expenseService = new ExpenseService($this->entityManager, $this->eventDispatcher);
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
        $tariffService = new TariffService($this->entityManager);
        $response = new JsonResponse();
        $response ->setData($tariffService->getResponse($settingId));
        return $response;
    }
}