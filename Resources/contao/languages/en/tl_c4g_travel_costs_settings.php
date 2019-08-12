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
$GLOBALS['TL_LANG'][$strName]['withDeleteButton'] = ['Button to delete', 'Button to delete your search.'];
$GLOBALS['TL_LANG'][$strName]['distPrice'] = ['Type of cost calculation', 'Type of cost calculation for the distance.'];
$GLOBALS['TL_LANG'][$strName]['centerx'] = ['Longitude of the center', 'Longitude of the focus for the search.'];
$GLOBALS['TL_LANG'][$strName]['centery'] = ['Latitude of the center', 'Latitude of the focus for the search.'];
$GLOBALS['TL_LANG'][$strName]['errorMessageBounds'] = ['Error message: Out of Bounds', 'Enter your custom error message, if the address is out of bounds.'];
$GLOBALS['TL_LANG'][$strName]['errorMessageNotFound'] = ['Error message: Address not found', 'Enter your custom error message, if no matching address is found.'];
$GLOBALS['TL_LANG'][$strName]['searchPlaceholder'] = ['Placeholder for search', 'Enter a custom placeholder for the search input.'];
$GLOBALS['TL_LANG'][$strName]['tariffDisplay'] = ['Type of tariff-display', ''];
$GLOBALS['TL_LANG'][$strName]['displayText'] = ['Custom description for the tariffs', 'Enter a custom description for your tariffs.'];
$GLOBALS['TL_LANG'][$strName]['hideDisplay'] = ['Delay tariff description', 'Load the description of the tariffs after a calculation of the tariffs.'];
$GLOBALS['TL_LANG'][$strName]['language'] = ['Language', 'Set language.'];
$GLOBALS['TL_LANG'][$strName]['language'] = ['Currency', 'Set currency.'];
$GLOBALS['TL_LANG'][$strName]['limitAutocomplete'] = ['Count autocompletion', 'Enter the amount of autocompletion-responses.'];


/**
 * References
 */
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][0] = 'Price for the distinct kilometers (e.g. for taxis)';
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][1] = 'The whole distance sets the price';

$GLOBALS['TL_LANG'][$strName]['references']['tariffDisplay'][0] = 'Automatic display';
$GLOBALS['TL_LANG'][$strName]['references']['tariffDisplay'][1] = 'Custom display';

$GLOBALS['TL_LANG'][$strName]['references']['language'][0] = 'Browserlanguage';
$GLOBALS['TL_LANG'][$strName]['references']['language'][1] = 'English';
$GLOBALS['TL_LANG'][$strName]['references']['language'][2] = 'German';

/** legend */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = 'General settings';
$GLOBALS['TL_LANG'][$strName]['bbox_legend'] = 'Limit with boundingbox';
$GLOBALS['TL_LANG'][$strName]['tariffLegend'] = 'Pick your tariffs';
$GLOBALS['TL_LANG'][$strName]['controlLegend'] = 'Customize your controls';
$GLOBALS['TL_LANG'][$strName]['centerLegend'] = 'Focus search with center';
$GLOBALS['TL_LANG'][$strName]['customMsgLegend'] = 'Custom Messages';
$GLOBALS['TL_LANG'][$strName]['descriptionLegend'] = 'Description for the tariffs';



/**
 * Buttons
 */
$GLOBALS['TL_LANG'][$strName]['new'] = ['New fare-settings', 'Create a new fare-setting'];
$GLOBALS['TL_LANG'][$strName]['edit'] = ['Edit fare-setting', 'Edit fare-setting with ID %s'];
$GLOBALS['TL_LANG'][$strName]['copy'] = ['Copy fare-setting', 'Copy fare-setting with ID %s'];
$GLOBALS['TL_LANG'][$strName]['delete'] = ['Delete fare-setting', 'Delete fare-setting with ID %s'];
$GLOBALS['TL_LANG'][$strName]['show'] = ['Details', 'Show details for fare-setting ID %s'];