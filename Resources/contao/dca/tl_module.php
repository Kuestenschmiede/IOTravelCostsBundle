<?php if (!defined('TL_ROOT')) die('You can not access this file directly!');
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

/***
 * Palettes
 */
$GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_maps']         =   '{title_legend},name,headline,type;'.
    '{c4g_map_legend},c4g_map_id,c4g_map_default_mapservice,c4g_map_width,c4g_map_height,c4g_map_zoom;'.
    '{protected_legend:hide},protected;'.
    '{expert_legend:hide},guests,cssID,space';
if ($GLOBALS['con4gis']['forum']['installed'])
{
    $insert = '{c4g_forum_maps_legend},c4g_forum_enable_maps;{expert_legend:hide}';
    //insert c4g-maps support when forum is installed
    $GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_forum'] = str_replace('{expert_legend:hide}', $insert, $GLOBALS['TL_DCA']['tl_module']['palettes']['c4g_forum']);
    $GLOBALS['TL_DCA']['tl_module']['fields']['c4g_forum_enable_maps'] =
        [
            'label' => &$GLOBALS['TL_LANG']['tl_module']['c4g_forum_enable_maps'],
            'exclude' => true,
            'default' => '',
            'inputType' => 'checkbox',
            'sql' => "char(1) NOT NULL default ''"
        ];
}
/***
 * Fields
 */
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_id'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_id'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_module_c4g_expenses', 'get_maps'],
        'eval'                    => ['submitOnChange'=>true],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_width'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_width'],
        'exclude'                 => true,
        'inputType'               => 'inputUnit',
        'options'                 => ['px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'],
        'eval'                    => [
            'rgxp'=>'digit_auto_inherit',
            'tl_class'=>'w50',
            'includeBlankOption'=>true
        ],
        'sql'                     => "varchar(64) NOT NULL default ''"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_height'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_height'],
        'exclude'                 => true,
        'inputType'               => 'inputUnit',
        'options'                 => ['px', '%', 'em', 'vh', 'vw', 'vmin', 'vmax', 'pt', 'pc', 'in', 'cm', 'mm'],
        'eval'                    => [
            'rgxp'=>'digit_auto_inherit',
            'tl_class'=>'w50',
            'includeBlankOption'=>true
        ],
        'sql'                     => "varchar(64) NOT NULL default ''"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_zoom'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_zoom'],
        'exclude'                 => true,
        'inputType'               => 'text',
        'eval'                    => ['mandatory'=>false, 'rgxp'=>'digit'],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"
    ];
$GLOBALS['TL_DCA']['tl_module']['fields']['c4g_map_default_mapservice'] =
    [
        'label'                   => &$GLOBALS['TL_LANG']['tl_module']['c4g_map_default_mapservice'],
        'exclude'                 => true,
        'inputType'               => 'select',
        'options_callback'        => ['tl_module_c4g_expenses', 'get_baselayers'],
        'eval'                    => [
            'mandatory'=>false,
            'chosen'=>true,
            'includeBlankOption'=>true],
        'sql'                     => "int(10) unsigned NOT NULL default '0'"

    ];

/**
 * Class tl_module_c4g_expenses
 */
class tl_module_c4g_expenses extends Backend
{
    
}
