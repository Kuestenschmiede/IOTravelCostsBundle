<?php

namespace con4gis\RoutingExpensesBundle\Classes\Services;

use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\RoutingExpensesBundle\Entity\RoutingExpensesSettings;
use con4gis\RoutingExpensesBundle\Entity\RoutingExpensesTariff;
use Contao\Database;
use Contao\System;
use Doctrine\ORM\EntityManager;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class ExpenseService
{
    private $eventDispatcher;
    /**
     * @var EntityManager
     */
    private $entityManager = null;


    /**
     * AreaService constructor.
     * @param $eventDispatcher
     * @param $entityManager
     */
    public function __construct($eventDispatcher, EntityManager $entityManager)
    {
        $this->eventDispatcher = $eventDispatcher;
        $this->entityManager = $entityManager;
        $this->db = Database::getInstance();
    }
    public function getResponse($expenseSetting, $locations, $tariffIds = null, $time  = null) {
        $objExpenseSettings = $this->entityManager->getRepository(RoutingExpensesSettings::class)->findOneBy(['id' => $expenseSetting]);
        if ($objExpenseSettings instanceof RoutingExpensesSettings) {
            $arrTariffIds = $objExpenseSettings->getTariffs();
            $arrTariffs = $this->entityManager->getRepository(RoutingExpensesTariff::class)->findBy(['id' => $arrTariffIds]);
            if ($arrTariffs[0]) {
                $arrSendTariffs = [];
                foreach ($arrTariffs as $key => $objTariff) {
                    if ($objTariff  instanceof RoutingExpensesTariff) {
                        $arrSendTariffs[$key] =
                            [   'basePrice' => $objTariff->getBasePrice(),
                                'distPrice' => $objTariff->getDistancePrice(),
                                'timePrice' => $objTariff->getTimePrice()
                            ];
                    }
                }

                $objSettings = C4gMapSettingsModel::findOnly();
                $apiKey = $objSettings->con4gisIoKey;
                $apiUrl = $objSettings->con4gisIoUrl;

                if ($apiKey && $apiUrl) {
                    $sendUrl = rtrim($apiUrl, "/") . "/" . "routingExpense.php?loc=" . $locations . "&tariffs=". \GuzzleHttp\json_encode($arrSendTariffs) . "&time=" . $time . "&key=" . $apiKey;
                    $REQUEST = new \Request();
                    if ($_SERVER['HTTP_REFERER']) {
                        $REQUEST->setHeader('Referer', $_SERVER['HTTP_REFERER']);
                    }
                    if ($_SERVER['HTTP_USER_AGENT']) {
                        $REQUEST->setHeader('User-Agent', $_SERVER['HTTP_USER_AGENT']);
                    }
                    $REQUEST->setHeader('Content-Type', "application/json");
                    $REQUEST->method = "GET";
                    $REQUEST->send($sendUrl);
                }

            }
        }
        $response = json_decode($REQUEST->response);
        if ($response->tariffs){
            $arrResponseTariffs = [];
            foreach ($response->tariffs as $key => $tariff) {
//                $objTariff = $arrTariffs[$key]
                $arrResponseTariffs[$arrTariffs[$key]->getCaption()] = $tariff;
            }
            $response->tariffs = $arrResponseTariffs;
        }
        return json_encode($response);

    }
}