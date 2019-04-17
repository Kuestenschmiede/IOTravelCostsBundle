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

namespace con4gis\RoutingExpensesBundle\Entity;

use \Doctrine\ORM\Mapping as ORM;
use con4gis\CoreBundle\Entity\BaseEntity;

/**
 * Class RoutingExpensesSettings
 *
 * @ORM\Entity
 * @ORM\Table(name="tl_c4g_routing_expenses_settings")
 * @package con4gis\RoutingExpensesBundle\Entity
 */
class RoutingExpensesSettings extends BaseEntity
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
     * @var string
     * @ORM\Column(type="string")
     */
    protected $type = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $startBboxUpperx = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $startBboxUppery = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $startBboxDownerx = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $startBboxDownery = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $destBboxUpperx = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $destBboxUppery = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $destBboxDownerx = '';

    /**
     * @var float
     * @ORM\Column(type="float")
     */
    protected $destBboxDownery = '';

    /**
     * @var array
     * @ORM\Column(type="array")
     */
    protected $tariffs = '';

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $withDateTime = '0';

    /**
     * @var int
     * @ORM\Column(type="integer")
     */
    protected $withPositionButton = '0';

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
     * @return string
     */
    public function getType(): string
    {
        return $this->type;
    }

    /**
     * @param string $type
     */
    public function setType(string $type): void
    {
        $this->type = $type;
    }

    /**
     * @return float
     */
    public function getStartBboxUpperx(): float
    {
        return $this->startBboxUpperx;
    }

    /**
     * @param float $startBboxUpperx
     */
    public function setStartBboxUpperx(float $startBboxUpperx): void
    {
        $this->startBboxUpperx = $startBboxUpperx;
    }

    /**
     * @return float
     */
    public function getStartBboxUppery(): float
    {
        return $this->startBboxUppery;
    }

    /**
     * @param float $startBboxUppery
     */
    public function setStartBboxUppery(float $startBboxUppery): void
    {
        $this->startBboxUppery = $startBboxUppery;
    }

    /**
     * @return float
     */
    public function getStartBboxDownerx(): float
    {
        return $this->startBboxDownerx;
    }

    /**
     * @param float $startBboxDownerx
     */
    public function setStartBboxDownerx(float $startBboxDownerx): void
    {
        $this->startBboxDownerx = $startBboxDownerx;
    }

    /**
     * @return float
     */
    public function getStartBboxDownery(): float
    {
        return $this->startBboxDownery;
    }

    /**
     * @param float $startBboxDownery
     */
    public function setStartBboxDownery(float $startBboxDownery): void
    {
        $this->startBboxDownery = $startBboxDownery;
    }

    /**
     * @return float
     */
    public function getDestBboxUpperx(): float
    {
        return $this->destBboxUpperx;
    }

    /**
     * @param float $destBboxUpperx
     */
    public function setDestBboxUpperx(float $destBboxUpperx): void
    {
        $this->destBboxUpperx = $destBboxUpperx;
    }

    /**
     * @return float
     */
    public function getDestBboxUppery(): float
    {
        return $this->destBboxUppery;
    }

    /**
     * @param float $destBboxUppery
     */
    public function setDestBboxUppery(float $destBboxUppery): void
    {
        $this->destBboxUppery = $destBboxUppery;
    }

    /**
     * @return float
     */
    public function getDestBboxDownerx(): float
    {
        return $this->destBboxDownerx;
    }

    /**
     * @param float $destBboxDownerx
     */
    public function setDestBboxDownerx(float $destBboxDownerx): void
    {
        $this->destBboxDownerx = $destBboxDownerx;
    }

    /**
     * @return float
     */
    public function getDestBboxDownery(): float
    {
        return $this->destBboxDownery;
    }

    /**
     * @param float $destBboxDownery
     */
    public function setDestBboxDownery(float $destBboxDownery): void
    {
        $this->destBboxDownery = $destBboxDownery;
    }

    /**
     * @return array
     */
    public function getTariffs(): array
    {
        return $this->tariffs;
    }

    /**
     * @param array $tariffs
     */
    public function setTariffs(array $tariffs): void
    {
        $this->tariffs = $tariffs;
    }

    /**
     * @return int
     */
    public function getWithDateTime(): int
    {
        return $this->withDateTime;
    }

    /**
     * @param int $withDateTime
     */
    public function setWithDateTime(int $withDateTime): void
    {
        $this->withDateTime = $withDateTime;
    }

    /**
     * @return int
     */
    public function getWithPositionButton(): int
    {
        return $this->withPositionButton;
    }

    /**
     * @param int $withPositionButton
     */
    public function setWithPositionButton(int $withPositionButton): void
    {
        $this->withPositionButton = $withPositionButton;
    }
}