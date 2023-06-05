<?php
/*
 * This file is part of con4gis, the gis-kit for Contao CMS.
 * @package con4gis
 * @version 8
 * @author con4gis contributors (see "authors.txt")
 * @license LGPL-3.0-or-later
 * @copyright (c) 2010-2022, by Küstenschmiede GmbH Software & Design
 * @link https://www.con4gis.org
 */

namespace con4gis\IOTravelCostsBundle\Classes\Events;

use Symfony\Contracts\EventDispatcher\Event;
use con4gis\IOTravelCostsBundle\Entity\TravelCostsSettings;

class CalculateExpenseEvent extends Event
{
    const NAME = 'calculate.expenses';

    private TravelCostsSettings|null $settings = null;

    private array $tariffs = [];
    
    private string $input = "";
    
    private $locations = "";

    /**
     * @return TravelCostsSettings
     */
    public function getSettings(): TravelCostsSettings
    {
        return $this->settings;
    }

    /**
     * @param TravelCostsSettings $settings
     */
    public function setSettings(TravelCostsSettings $settings): void
    {
        $this->settings = $settings;
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
     * @return string
     */
    public function getInput(): string
    {
        return $this->input;
    }

    /**
     * @param string $input
     */
    public function setInput(string $input): void
    {
        $this->input = $input;
    }

    /**
     * @return string
     */
    public function getLocations(): string
    {
        return $this->locations;
    }

    /**
     * @param string $locations
     */
    public function setLocations(string $locations): void
    {
        $this->locations = $locations;
    }


}
