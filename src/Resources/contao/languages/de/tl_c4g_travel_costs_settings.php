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
$GLOBALS['TL_LANG'][$strName]['overPositions'] = ['Zwischenziele ermöglichen', 'Ermöglicht die Eingabe von Zwischenzielen'];
$GLOBALS['TL_LANG'][$strName]['timeAtStop'] = ['Zeit beim Zwischenstop', 'Zeit bei Zwischenstops'];
$GLOBALS['TL_LANG'][$strName]['addTimes'] = ['Eingabefeld Wartezeit', 'Bringt ein Eingabefeld für die Wartezeit hinzu.'];
$GLOBALS['TL_LANG'][$strName]['distPrice'] = ['Art der Kostenberechnung', 'Art der Kostenberechnung für die Distanz.'];
$GLOBALS['TL_LANG'][$strName]['centerx'] = ['Längengrad des Zentrums', 'Längengrad des Zentrums, auf den die Suche fokussiert sein soll.'];
$GLOBALS['TL_LANG'][$strName]['centery'] = ['Breitengrad des Zentrums', 'Breitengrad des Zentrums, auf den die Suche fokussiert sein soll.'];
$GLOBALS['TL_LANG'][$strName]['errorMessageBounds'] = ['Fehler-Text: Außerhalb der Bounding-Box', 'Geben Sie hier einen eigenen Fehlertext ein, falls die Adresse außerhalb der gewählten Bounding-Box liegt.'];
$GLOBALS['TL_LANG'][$strName]['errorMessageNotFound'] = ['Fehler-Text: Adresse nicht gefunden', 'Geben Sie hier einen eigenen Fehlertext ein, falls die Adresse nicht gefunden wird.'];
$GLOBALS['TL_LANG'][$strName]['searchPlaceholder'] = ['Platzhalter der Suche', 'Geben Sie hier einen eigenen Platzhalter für die Suche ein.'];
$GLOBALS['TL_LANG'][$strName]['inputPlaceholder'] = ['Platzhalter dedse Inputs', 'Geben Sie hier einen eigenen Platzhalter für das Input-Feld ein.'];
$GLOBALS['TL_LANG'][$strName]['tariffDisplay'] = ['Art der Darstellung', 'Art der Darstellung der Tarife.'];
$GLOBALS['TL_LANG'][$strName]['displayText'] = ['Benutzerdefinierte Tarifbeschreibung', 'Geben Sie hier die benutzerdefinierte Tarifbeschreibung ein.'];
$GLOBALS['TL_LANG'][$strName]['hideDisplay'] = ['Tarifbeschreibung nachladen', 'Laden der Tarifbeschreibung erst nach erfolgreicher Berechnung von Fahrtkosten.'];
$GLOBALS['TL_LANG'][$strName]['language'] = ['Sprache', 'Sprache anpassen.'];
$GLOBALS['TL_LANG'][$strName]['currency'] = ['Währung', 'Währung anpassen.'];
$GLOBALS['TL_LANG'][$strName]['limitAutocomplete'] = ['Anzahl Vorschläge', 'Geben Sie die Anzahl der Vorschläge ein.'];
$GLOBALS['TL_LANG'][$strName]['addPriceOptions'] = ['Weitere Preis-Optionen', 'Geben Sie zusätzliche Kosten und Aufpreise an.'];
$GLOBALS['TL_LANG'][$strName]['name'] = ['Name', 'Name der Preis-Option.'];
$GLOBALS['TL_LANG'][$strName]['addPrice'] = ['Preis', 'Wert der Preis-Oütion'];



/**
 * References
 */
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][0] = 'Preis für Entfernung entsprechend der Angaben (bspw. für Taxi-Fahrtpreis)';
$GLOBALS['TL_LANG'][$strName]['references']['distPrice'][1] = 'Gesamtstrecke bestimmt Kilometerpreis';

$GLOBALS['TL_LANG'][$strName]['references']['tariffDisplay'][0] = 'Automatische Darstellung';
$GLOBALS['TL_LANG'][$strName]['references']['tariffDisplay'][1] = 'Benutzerdefinierte Darstellung';

$GLOBALS['TL_LANG'][$strName]['references']['language'][0] = 'Browsersprache';
$GLOBALS['TL_LANG'][$strName]['references']['language'][1] = 'Englisch';
$GLOBALS['TL_LANG'][$strName]['references']['language'][2] = 'Deutsch';



/** legend */
$GLOBALS['TL_LANG'][$strName]['general_legend'] = 'Allgemeine Einstellungen';
$GLOBALS['TL_LANG'][$strName]['bbox_legend'] = 'Begrenzung durch Boundingbox';
$GLOBALS['TL_LANG'][$strName]['tariffLegend'] = 'Wähle die zugehörigen Tarife';
$GLOBALS['TL_LANG'][$strName]['controlLegend'] = 'Einstellungen der Oberfläche';
$GLOBALS['TL_LANG'][$strName]['centerLegend'] = 'Fokus der Suche';
$GLOBALS['TL_LANG'][$strName]['customMsgLegend'] = 'Benutzerdefinierte Nachrichten';
$GLOBALS['TL_LANG'][$strName]['descriptionLegend'] = 'Beschreibung der Tarife';

/**
 * Buttons
 */
$GLOBALS['TL_LANG'][$strName]['new']        = ['Neue Fahrtkosten-Einstellung', 'Eine neue Fahrtkosten-Einstellung erstellen'];
$GLOBALS['TL_LANG'][$strName]['edit']       = ['Fahrtkosten-Einstellung bearbeiten', 'Fahrtkosten-Einstellung ID %s bearbeiten'];
$GLOBALS['TL_LANG'][$strName]['copy']       = ['Fahrtkosten-Einstellung duplizieren', 'Fahrtkosten-Einstellung ID %s duplizieren'];
$GLOBALS['TL_LANG'][$strName]['delete']     = ['Fahrtkosten-Einstellung löschen', 'Fahrtkosten-Einstellung ID %s löschen'];
$GLOBALS['TL_LANG'][$strName]['show']       = ['Details', 'Die Details der Fahrtkosten-Einstellung ID %s anzeigen'];