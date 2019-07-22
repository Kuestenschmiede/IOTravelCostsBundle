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

$strName = 'tl_c4g_travel_costs_settings';
$GLOBALS['TL_LANG'][$strName]['caption'] = ['Name', 'Name of the fare-settings.'];
$GLOBALS['TL_LANG'][$strName]['startBboxUpperx'] = ['Western Longitude', 'Enter the western longitude to limit the search.'];
$GLOBALS['TL_LANG'][$strName]['startBboxUppery'] = ['Southern Latitude', 'Enter the southern latitude to limit the search.'];;
$GLOBALS['TL_LANG'][$strName]['startBboxDownerx'] = ['Eastern Longitude', 'Enter the eastern longitude to limit the search.'];
$GLOBALS['TL_LANG'][$strName]['startBboxDownery'] = ['Northern Latitude', 'Enter the northern latitude to limit the search.'];
$GLOBALS['TL_LANG'][$strName]['tariffs'] = ['Choose tariffs', 'Choose the tariffs for these settings.'];
$GLOBALS['TL_LANG'][$strName]['displayGrid'] = ['Show as grid', 'Show the data as HTML-Grid.'];
$GLOBALS['TL_LANG'][$strName]['withPositionButton'] = ['Button for device position', 'Show a button to use the current position for locating the user.'];
$GLOBALS['TL_LANG'][$strName]['withSubmitButton'] = ['Button for calculation', 'Show a button to calculate the travel costs'];
$GLOBALS['TL_LANG'][$strName]['distPrice'] = ['Type of cost calculation', 'Type of cost calculation for the distance.'];

/**
 * References
 */
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][0] = 'Price for the distinct kilometers (e.g. for taxis)';
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][1] = 'The whole distance sets the price';

/** legend */
$GLOBALS['TL_LANG'][$strName]['bbox_legend'] = 'Limit with boundingbox';
$GLOBALS['TL_LANG'][$strName]['general_legend'] = 'Generell settings';

/**
 * Buttons
 */
$GLOBALS['TL_LANG'][$strName]['new'] = ['New fare-settings', 'Create a new fare-setting'];
$GLOBALS['TL_LANG'][$strName]['edit'] = ['Edit fare-setting', 'Edit fare-setting with ID %s'];
$GLOBALS['TL_LANG'][$strName]['copy'] = ['Copy fare-setting', 'Copy fare-setting with ID %s'];
$GLOBALS['TL_LANG'][$strName]['delete'] = ['Delete fare-setting', 'Delete fare-setting with ID %s'];
$GLOBALS['TL_LANG'][$strName]['show'] = ['Details', 'Show details for fare-setting ID %s'];