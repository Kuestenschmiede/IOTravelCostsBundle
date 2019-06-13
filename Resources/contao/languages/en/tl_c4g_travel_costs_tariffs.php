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

$strName = 'tl_c4g_travel_costs_tariffs';
$GLOBALS['TL_LANG'][$strName]['caption'] = ['Caption',''];
$GLOBALS['TL_LANG'][$strName]['basePrice'] = ['Base Price', 'Base price for a route'];
$GLOBALS['TL_LANG'][$strName]['distancePrice'] = ['Distance Price', 'The price per kilometer.'];
$GLOBALS['TL_LANG'][$strName]['timePrice'] = ['Price for Time', 'The price per minute.'];

$GLOBALS['TL_LANG'][$strName]['monday'] = ['Monday', ''];
$GLOBALS['TL_LANG'][$strName]['tuesday'] = ['Tuesday', ''];
$GLOBALS['TL_LANG'][$strName]['wednesday'] = ['Wednesday', ''];
$GLOBALS['TL_LANG'][$strName]['thursday'] = ['Thursday', ''];
$GLOBALS['TL_LANG'][$strName]['friday'] = ['Friday', ''];
$GLOBALS['TL_LANG'][$strName]['saturday'] = ['Saturday', ''];
$GLOBALS['TL_LANG'][$strName]['sunday'] = ['Sunday', ''];

$GLOBALS['TL_LANG'][$strName]['time_begin'] = ['Start', ''];
$GLOBALS['TL_LANG'][$strName]['time_end'] = ['End', ''];

/**
 * References
 */

/** legend */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = 'General Settings';
$GLOBALS['TL_LANG'][$strName]['price_legend'] = 'Settings for the price';
$GLOBALS['TL_LANG'][$strName]['weekday_legend'] = 'Limit for weekdays';

/**
 * Buttons
 */
$GLOBALS['TL_LANG'][$strName]['new']        = ['New Routing-Tariff', 'Create a new routing-tariff'];
$GLOBALS['TL_LANG'][$strName]['edit']       = ['Edit Routing-Tariff', 'Edit a routing-tariff'];
$GLOBALS['TL_LANG'][$strName]['copy']       = ['Copy Routing-Tariff', 'Copy a routing-tariff'];
$GLOBALS['TL_LANG'][$strName]['delete']     = ['Delete Routing-Tariff', 'Delete a routing-tariff'];
$GLOBALS['TL_LANG'][$strName]['show']       = ['Details', 'Show details for a routing-tariff'];