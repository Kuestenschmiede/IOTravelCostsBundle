<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');
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
/**
 * Table tl_c4g_routing_expenses_settings
 */
$GLOBALS['TL_DCA'][$strName] = array
(

    // Config
    'config' => [
        'dataContainer' => 'Table',
        'enableVersioning' => true,
    ],

    // List
    'list' => [
        'sorting' => [
            'mode' => 1,
            'fields' => ['caption'],
            'flag' => 1
        ],
        'label' => [
            'fields' => ['caption'],
            'format' => '%s'
        ],
        'global_operations' => [
            'all' => [
                'label' => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href' => 'act=select',
                'class' => 'header_edit_all',
                'attributes' => 'onclick="Backend.getScrollOffset();" accesskey="e"'
            ]
        ],
        'operations' => [
            'edit' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['edit'],
                'href' => 'act=edit',
                'icon' => 'edit.gif'
            ],
            'copy' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['copy'],
                'href' => 'act=copy',
                'icon' => 'copy.gif'
            ],
            'delete' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['delete'],
                'href' => 'act=delete',
                'icon' => 'delete.gif',
                'attributes' => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ],
            'show' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['show'],
                'href' => 'act=show',
                'icon' => 'show.gif'
            ]
        ]
    ],

    // Palettes
    'palettes' => [
        '__selector__' => ['router_api_selection'],
        'default' => '{general_legend},caption;{bbox_legend},startBboxUpperx,startBboxUppery,startBboxDownerx,startBboxDownery;tariffs,displayGrid;'
    ],


    // Subpalettes
    'subpalettes' => [

    ],

    // Fields
    'fields' => [
        'caption' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['caption'],
            'default' => '',
            'inputType' => 'text',
            'eval' => ['decodeEntities' => true, 'maxlength' => 255, 'tl_class' => 'long'],
        ],
        'startBboxUpperx' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['startBboxUpperx'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLon']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'startBboxUppery' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['startBboxUppery'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLat']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'startBboxDownerx' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['startBboxDownerx'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLon']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'startBboxDownery' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['startBboxDownery'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Resources\contao\classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLat']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'tariffs' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['tariffs'],
            'default' => [],
            'inputType' => 'checkbox',
            'options_callback' => ['tl_c4g_travel_costs_settings', 'getTariffs'],
            'eval' => ['mandatory' => false, 'multiple' => true],
        ],
        'withDateTime' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['withDateTime'],
            'default' => 0,
            'inputType' => 'checkbox',
            'eval' => ['decodeEntities' => true, 'maxlength' => 255, 'tl_class' => 'long'],
        ],
        'displayGrid' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['displayGrid'],
            'default' => 0,
            'inputType' => 'checkbox',
            'eval' => ['decodeEntities' => true, 'maxlength' => 255, 'tl_class' => 'long'],
        ],
        'colors' => [
                'label'                     => &$GLOBALS['TL_LANG'][$strName]['colors'],
                'inputType'                 => 'select',
                'options_callback'          => ['tl_c4g_travel_costs_settings', 'getColorOptions'],
                'eval'                      => ['mandatory' => false, 'multiple' => false, 'includeBlankOption' => false],
        ],
        'type' => [
            'default' => ''
        ],
        'withPositionButton' => [
            'default' => 0
        ]
    ]
);
class tl_c4g_travel_costs_settings extends \Contao\Backend
{
    public function getTariffs(\Contao\DataContainer $dc)
    {
        $tariffs = $this->Database->prepare("SELECT id,caption FROM tl_c4g_travel_costs_tariffs ORDER BY caption")
            ->execute();
        while ($tariffs->next()) {
            $return[$tariffs->id] = $tariffs->caption;
        }
        return $return;
    }

    public function getColorOptions()
    {
        return $this->getFileArray('colors');
    }

        public function setLon($varValue, DataContainer $dc)
    {
        if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLon($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
        }
        return $varValue;
    }

    public function setLat($varValue, DataContainer $dc)
    {
        if (!\con4gis\MapsBundle\Resources\contao\classes\Utils::validateLon($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
        }
        return $varValue;
    }
}

