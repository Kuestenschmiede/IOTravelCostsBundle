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
$GLOBALS['TL_LANG'][$strName]['caption'] = ['Bezeichnung','Bezeichnung des Tarifs.'];
$GLOBALS['TL_LANG'][$strName]['basePrice'] = ['Basispreis', 'Der Preis, der pauschal für eine Fahrt veranschlagt ist.'];
$GLOBALS['TL_LANG'][$strName]['distancePrice'] = ['Preis für Entfernung', 'Der Preis pro Kilometer.'];
$GLOBALS['TL_LANG'][$strName]['timePrice'] = ['Preis für Zeit', 'Der Preis pro Minute.'];

$GLOBALS['TL_LANG'][$strName]['monday'] = ['Montag', ''];
$GLOBALS['TL_LANG'][$strName]['tuesday'] = ['Dienstag', ''];
$GLOBALS['TL_LANG'][$strName]['wednesday'] = ['Mittwoch', ''];
$GLOBALS['TL_LANG'][$strName]['thursday'] = ['Donnerstag', ''];
$GLOBALS['TL_LANG'][$strName]['friday'] = ['Freitag', ''];
$GLOBALS['TL_LANG'][$strName]['saturday'] = ['Samstag', ''];
$GLOBALS['TL_LANG'][$strName]['sunday'] = ['Sonntag', ''];

$GLOBALS['TL_LANG'][$strName]['time_begin'] = ['Start', ''];
$GLOBALS['TL_LANG'][$strName]['time_end'] = ['Ende', ''];

/**
 * References
 */

/** legend */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = 'Allgemeine Einstellungen';
$GLOBALS['TL_LANG'][$strName]['price_legend'] = 'Einstellungen zum Preis';
$GLOBALS['TL_LANG'][$strName]['weekday_legend'] = 'Begrenzung durch Zeiteinstellung';

/**
 * Buttons
 */
$GLOBALS['TL_LANG'][$strName]['new']        = ['Neue Fahrtkosten-Tarif', 'Eine neue Fahrtkosten-Tarif erstellen'];
$GLOBALS['TL_LANG'][$strName]['edit']       = ['Fahrtkosten-Tarif bearbeiten', 'Fahrtkosten-Tarif ID %s bearbeiten'];
$GLOBALS['TL_LANG'][$strName]['copy']       = ['Fahrtkosten-Tarif duplizieren', 'Fahrtkosten-Tarif ID %s duplizieren'];
$GLOBALS['TL_LANG'][$strName]['delete']     = ['Fahrtkosten-Tarif löschen', 'Fahrtkosten-Tarif ID %s löschen'];
$GLOBALS['TL_LANG'][$strName]['show']       = ['Details', 'Die Details des Fahrtkosten-Tarif ID %s anzeigen'];