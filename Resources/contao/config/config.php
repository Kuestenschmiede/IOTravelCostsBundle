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
$GLOBALS['BE_MOD']['con4gis_core'] = array_merge($GLOBALS['BE_MOD']['con4gis_core'], [
    'tl_c4g_routing_expenses_settings' => [
        'tables' => ['tl_c4g_routing_expenses_settings','tl_c4g_routing_expenses_tariffs']
    ],
    'tl_c4g_routing_expenses_tariffs' => [
        'tables' => ['tl_c4g_routing_expenses_tariffs']
    ]
]);