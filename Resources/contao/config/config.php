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

/**
 * Backend Modules
 */
array_insert($GLOBALS['BE_MOD'], array_search('content', array_keys($GLOBALS['BE_MOD'])) + 3, [
    'con4gis_iotravelcosts' => [
        'tl_c4g_travel_costs_settings' => ['tables' => ['tl_c4g_travel_costs_settings','tl_c4g_travel_costs_tariffs']],
        'tl_c4g_travel_costs_tariffs' => ['tables' => ['tl_c4g_travel_costs_tariffs']]
    ]
]);

array_insert($GLOBALS['FE_MOD']['con4gis'], 1,
    [
        'c4g_travel_costs' => 'con4gis\IOTravelCostsBundle\Resources\contao\modules\ModuleC4gTravelCosts',
    ]);
array_insert($GLOBALS['FE_MOD']['con4gis'], 1,
    [
        'c4g_tariffs' => 'con4gis\IOTravelCostsBundle\Resources\contao\modules\ModuleC4gTariffs',
    ]);

$GLOBALS['con4gis']['io-travel-costs']['installed'] = true;

if(TL_MODE == "BE") {
    $GLOBALS['TL_CSS'][] = '/bundles/con4gisiotravelcosts/css/backend_svg.css';
}