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
$GLOBALS['TL_LANG'][$strName]['caption'] = ['Bezeichnung','Bezeichnung der Fahrtkosten-Einstellung.'];
$GLOBALS['TL_LANG'][$strName]['startBboxUpperx'] = ['Linker Längengrad', 'Tragen Sie den linken Längengrad zur Begrenzung der Suche ein.'];
$GLOBALS['TL_LANG'][$strName]['startBboxUppery'] = ['Unterer Breitengrad', 'Tragen Sie den unteren Breitengrad zur Begrenzung der Suche ein.'];;
$GLOBALS['TL_LANG'][$strName]['startBboxDownerx'] = ['Rechter Längengrad', 'Tragen Sie den rechten Längengrad zur Begrenzung der Suche ein.'];
$GLOBALS['TL_LANG'][$strName]['startBboxDownery'] = ['Oberen Breitengrad', 'Tragen Sie den oberen Breitengrad zur Begrenzung der Suche ein.'];
$GLOBALS['TL_LANG'][$strName]['tariffs'] = ['Tarife auswählen', 'Wählen Sie die Tarife dieser Einstellung aus.'];
$GLOBALS['TL_LANG'][$strName]['displayGrid'] = ['Als Grid anzeigen', 'Bei aktivierter Checkbox werden die Daten in einem HTML-Grid dargestellt. Anderenfalls werden table-Elemente verwendet.'];
$GLOBALS['TL_LANG'][$strName]['withPositionButton'] = ['Knopf für aktuellen Standort', 'Aktuellen Standort für Bestimmung der Adresse benutzen.'];
$GLOBALS['TL_LANG'][$strName]['withSubmitButton'] = ['Knopf für Berechnung', 'Knopf für Berechnung anzeigen.'];
$GLOBALS['TL_LANG'][$strName]['withDeleteButton'] = ['Knopf zum Löschen', 'Knopf zum Löschen der Eingabe.'];
$GLOBALS['TL_LANG'][$strName]['distPrice'] = ['Art der Kostenberechnung', 'Art der Kostenberechnung für die Distanz.'];
$GLOBALS['TL_LANG'][$strName]['centerx'] = ['Längengrad des Zentrums', 'Längengrad des Zentrums, auf den die Suche fokussiert sein soll.'];
$GLOBALS['TL_LANG'][$strName]['centery'] = ['Breitengrad des Zentrums', 'Breitengrad des Zentrums, auf den die Suche fokussiert sein soll.'];
$GLOBALS['TL_LANG'][$strName]['errorMessageBounds'] = ['Fehler-Text: Außerhalb der Bounding-Box', 'Geben Sie hier einen eigenen Fehlertext ein, falls die Adresse außerhalb der gewählten Bounding-Box liegt.'];
$GLOBALS['TL_LANG'][$strName]['errorMessageNotFound'] = ['Fehler-Text: Adresse nicht gefunden', 'Geben Sie hier einen eigenen Fehlertext ein, falls die Adresse nicht gefunden wird.'];
$GLOBALS['TL_LANG'][$strName]['searchPlaceholder'] = ['Platzhalter der Suche', 'Geben Sie hier einen eigenen Platzhalter für die Suche ein.'];

/**
 * References
 */
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][0] = 'Preis für Entfernung entsprechend der Angaben (bspw. für Taxi-Fahrtpreis)';
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][1] = 'Gesamtstrecke bestimmt Kilometerpreis';

/** legend */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = 'Allgemeine Einstellungen';
$GLOBALS['TL_LANG'][$strName]['bbox_legend'] = 'Begrenzung durch Boundingbox';
$GLOBALS['TL_LANG'][$strName]['tariffLegend'] = 'Wähle die zugehörigen Tarife';
$GLOBALS['TL_LANG'][$strName]['controlLegend'] = 'Einstellungen der Oberfläche';
$GLOBALS['TL_LANG'][$strName]['centerLegend'] = 'Fokus der Suche';
$GLOBALS['TL_LANG'][$strName]['customMsgLegend'] = 'Benutzerdefinierte Nachrichten';

/**
 * Buttons
 */
$GLOBALS['TL_LANG'][$strName]['new']        = ['Neue Fahrtkosten-Einstellung', 'Eine neue Fahrtkosten-Einstellung erstellen'];
$GLOBALS['TL_LANG'][$strName]['edit']       = ['Fahrtkosten-Einstellung bearbeiten', 'Fahrtkosten-Einstellung ID %s bearbeiten'];
$GLOBALS['TL_LANG'][$strName]['copy']       = ['Fahrtkosten-Einstellung duplizieren', 'Fahrtkosten-Einstellung ID %s duplizieren'];
$GLOBALS['TL_LANG'][$strName]['delete']     = ['Fahrtkosten-Einstellung löschen', 'Fahrtkosten-Einstellung ID %s löschen'];
$GLOBALS['TL_LANG'][$strName]['show']       = ['Details', 'Die Details der Fahrtkosten-Einstellung ID %s anzeigen'];