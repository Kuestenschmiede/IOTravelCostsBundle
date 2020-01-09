<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');
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

/***
 * Palettes
 */
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_travel_costs']         =   '{title_legend},name,type,headline,expense_settings_id';
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_tariffs']              =   '{title_legend},name,type,headline,expense_settings_id';
/***
 * Fields
 */
$GLOBALS['TL_DCA']['tl_module']['fields']['expense_settings_id'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['expense_settings_id'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_module_c4g_expenses', 'getExpenseSettings'],
        'eval'                    => ['tl_class'=>'clr','chosen' => true, 'includeBlankOption'=>true],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ];

/**
 * Class tl_module_c4g_expenses
 */
class tl_module_c4g_expenses extends Backend
{
    public function getExpenseSettings(DataContainer $dc){
        $stmt = $this->Database->prepare("SELECT id, caption FROM tl_c4g_travel_costs_settings");
        $result = $stmt->execute();
        $return = [];
        while ($row = $result->fetchAssoc()) {
            $return[$row['id']] = $row['caption'];
        }
        return $return;
    }
}
