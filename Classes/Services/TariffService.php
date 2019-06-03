<?php


namespace con4gis\RoutingExpensesBundle\Classes\Services;


use con4gis\MapsBundle\Resources\contao\models\C4gMapSettingsModel;
use con4gis\RoutingExpensesBundle\Entity\RoutingExpensesSettings;
use con4gis\RoutingExpensesBundle\Entity\RoutingExpensesTariff;
use Contao\Database;
use Doctrine\ORM\EntityManager;

class TariffService
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
    public function getResponse($settingsId) {
        $objExpenseSettings = $this->entityManager->getRepository(RoutingExpensesSettings::class)->findOneBy(['id' => $settingsId]);
        if ($objExpenseSettings instanceof RoutingExpensesSettings) {
            $arrTariffIds = $objExpenseSettings->getTariffs();
            $arrTariffs = $this->entityManager->getRepository(RoutingExpensesTariff::class)->findBy(['id' => $arrTariffIds]);
            if ($arrTariffs[0]) {
                $arrSendTariffs = [];
                foreach ($arrTariffs as $key => $objTariff) {
                    if ($objTariff  instanceof RoutingExpensesTariff) {
                        $arrSendTariffs[$objTariff->getCaption()] =
                            [   'basePrice' => $objTariff->getBasePrice(),
                                'distPrice' => $objTariff->getDistancePrice(),
                                'timePrice' => $objTariff->getTimePrice()
                            ];
                    }
                }
            }
        }
        return $arrSendTariffs ? json_encode($arrSendTariffs) : "FICK DICH WAL";
    }
}