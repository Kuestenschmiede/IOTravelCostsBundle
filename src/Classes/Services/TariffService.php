<?php

namespace con4gis\IOTravelCostsBundle\Classes\Services;

use con4gis\IOTravelCostsBundle\Entity\TravelCostsSettings;
use con4gis\IOTravelCostsBundle\Entity\TravelCostsTariff;
use Contao\Database;
use Doctrine\ORM\EntityManager;

class TariffService
{
    /**
     * @var EntityManager
     */
    private $entityManager = null;

    /**
     * AreaService constructor.
     */
    public function __construct(EntityManager $manager)
    {
        $this->entityManager = $manager;
    }
    public function getResponse($settingsId)
    {
        $objExpenseSettings = $this->entityManager->getRepository(TravelCostsSettings::class)->findOneBy(['id' => $settingsId]);
        if ($objExpenseSettings instanceof TravelCostsSettings) {
            $arrTariffIds = $objExpenseSettings->getTariffs();
            $arrTariffs = $this->entityManager->getRepository(TravelCostsTariff::class)->findBy(['id' => $arrTariffIds]);
            if ($arrTariffs[0]) {
                $arrSendTariffs = [];
                foreach ($arrTariffs as $key => $objTariff) {
                    if ($objTariff  instanceof TravelCostsTariff) {
                        $arrSendTariffs[$objTariff->getCaption()] =
                            ['basePrice' => $objTariff->getBasePrice(),
                                'distPrice' => $objTariff->getDistancePrice(),
                                'timePrice' => $objTariff->getTimePrice(),
                            ];
                    }
                }
            }
        }

        return $arrSendTariffs ? $arrSendTariffs : '';
    }
}
