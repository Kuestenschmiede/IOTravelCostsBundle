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

namespace con4gis\IOTravelCostsBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use con4gis\CoreBundle\Entity\BaseEntity;

/**
 * Class TravelCostsTariff
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_travel_costs_tariffs")
 * @package con4gis\RoutingBundle\Entity
 */
class TravelCostsTariff extends BaseEntity
{
    /**
     * @var int
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    protected $id = 0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $tstamp = 0;

    /**
     * @var string
     * @ORM\Column(type="string")
     */
    protected $caption = '';

    /**
     * @var int
     * @ORM\Column(type="float")
     */
    protected $basePrice = 0.0;

    /**
     * @var null
     * @ORM\Column(type="array")
     */
    protected $distancePrice = [];
    
    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $timePrice = 0.0;

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $timeBegin = '';

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $timeEnd = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $monday = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $tuesday = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $wednesday = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $thursday = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $friday = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $saturday = '';

    /**
     * @var string
     * @ORM\Column(type="text")
     */
    protected $sunday = '';
    
    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $beginDistance = '';

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $endDistance = '';

    /**
     * @return int
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId(int $id): void
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getTstamp(): int
    {
        return $this->tstamp;
    }

    /**
     * @param int $tstamp
     */
    public function setTstamp(int $tstamp): void
    {
        $this->tstamp = $tstamp;
    }

    /**
     * @return string
     */
    public function getCaption(): string
    {
        return $this->caption;
    }

    /**
     * @param string $caption
     */
    public function setCaption(string $caption): void
    {
        $this->caption = $caption;
    }
    
    /**
     * @return float
     */
    public function getBasePrice(): float
    {
        return $this->basePrice;
    }
    
    /**
     * @param float $basePrice
     */
    public function setBasePrice(float $basePrice): void
    {
        $this->basePrice = $basePrice;
    }

    
    /**
     * @return float
     */
    public function getTimePrice(): float
    {
        return $this->timePrice;
    }

    /**
     * @return null
     */
    public function getDistancePrice()
    {
        return $this->distancePrice;
    }

    /**
     * @param null $distancePrice
     */
    public function setDistancePrice($distancePrice): void
    {
        $this->distancePrice = $distancePrice;
    }
    
    /**
     * @param float $timePrice
     */
    public function setTimePrice(float $timePrice): void
    {
        $this->timePrice = $timePrice;
    }
    
    /**
     * @return int
     */
    public function getTimeBegin(): int
    {
        return $this->timeBegin;
    }

    /**
     * @param int $timeBegin
     */
    public function setTimeBegin(int $timeBegin): void
    {
        $this->timeBegin = $timeBegin;
    }

    /**
     * @return int
     */
    public function getTimeEnd(): int
    {
        return $this->timeEnd;
    }

    /**
     * @param int $timeEnd
     */
    public function setTimeEnd(int $timeEnd): void
    {
        $this->timeEnd = $timeEnd;
    }

    /**
     * @return string
     */
    public function getMonday(): string
    {
        return $this->monday;
    }

    /**
     * @param string $monday
     */
    public function setMonday(string $monday): void
    {
        $this->monday = $monday;
    }

    /**
     * @return string
     */
    public function getTuesday(): string
    {
        return $this->tuesday;
    }

    /**
     * @param string $tuesday
     */
    public function setTuesday(string $tuesday): void
    {
        $this->tuesday = $tuesday;
    }

    /**
     * @return string
     */
    public function getWednesday(): string
    {
        return $this->wednesday;
    }

    /**
     * @param string $wednesday
     */
    public function setWednesday(string $wednesday): void
    {
        $this->wednesday = $wednesday;
    }

    /**
     * @return string
     */
    public function getThursday(): string
    {
        return $this->thursday;
    }

    /**
     * @param string $thursday
     */
    public function setThursday(string $thursday): void
    {
        $this->thursday = $thursday;
    }

    /**
     * @return string
     */
    public function getFriday(): string
    {
        return $this->friday;
    }

    /**
     * @param string $friday
     */
    public function setFriday(string $friday): void
    {
        $this->friday = $friday;
    }

    /**
     * @return string
     */
    public function getSaturday(): string
    {
        return $this->saturday;
    }

    /**
     * @param string $saturday
     */
    public function setSaturday(string $saturday): void
    {
        $this->saturday = $saturday;
    }

    /**
     * @return string
     */
    public function getSunday(): string
    {
        return $this->sunday;
    }

    /**
     * @param string $sunday
     */
    public function setSunday(string $sunday): void
    {
        $this->sunday = $sunday;
    }

    /**
     * @return int
     */
    public function getBeginDistance(): int
    {
        return $this->beginDistance;
    }

    /**
     * @param int $beginDistance
     */
    public function setBeginDistance(int $beginDistance): void
    {
        $this->beginDistance = $beginDistance;
    }

    /**
     * @return int
     */
    public function getEndDistance(): int
    {
        return $this->endDistance;
    }

    /**
     * @param int $endDistance
     */
    public function setEndDistance(int $endDistance): void
    {
        $this->endDistance = $endDistance;
    }
}