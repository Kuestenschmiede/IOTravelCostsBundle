<?php

namespace con4gis\TravelCostsBundle\Classes\Services;

use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\TravelCostsBundle\Entity\TravelCostsSettings;
use con4gis\TravelCostsBundle\Entity\TravelCostsTariff;
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
        $objExpenseSettings = $this->entityManager->getRepository(TravelCostsSettings::class)->findOneBy(['id' => $expenseSetting]);
        if ($objExpenseSettings instanceof TravelCostsSettings) {
            $arrTariffIds = $objExpenseSettings->getTariffs();
            $arrTariffs = $this->entityManager->getRepository(TravelCostsTariff::class)->findBy(['id' => $arrTariffIds]);
            if ($arrTariffs[0]) {
                $arrSendTariffs = [];
                foreach ($arrTariffs as $key => $objTariff) {
                    if ($objTariff  instanceof TravelCostsTariff) {
                        $arrSendTariffs[$key] =
                            [   'basePrice' => $objTariff->getBasePrice(),
                                'distPrice' => $objTariff->getDistancePrice(),
                                'timePrice' => $objTariff->getTimePrice()
                            ];
                    }
                }

                $objSettings = C4gSettingsModel::findSettings();
                $apiKey = $objSettings->con4gisIoKey;
                $apiUrl = $objSettings->con4gisIoUrl;

                if ($apiKey && $apiUrl) {
                    $typeCalc = $objExpenseSettings->getDistPrice();
                    $sendUrl = rtrim($apiUrl, "/") . "/" . "routingExpense.php?loc=" . $locations . "&tariffs=". urlencode(\GuzzleHttp\json_encode($arrSendTariffs)) . "&typeCalc=" . $typeCalc . "&time=" . $time . "&key=" . $apiKey;
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
        return $response;

    }
}