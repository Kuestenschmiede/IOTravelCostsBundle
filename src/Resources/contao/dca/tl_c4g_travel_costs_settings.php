<?php if (!defined('TL_ROOT')) die('You cannot access this file directly!');
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
            'flag' => 1,
            'icon' => 'bundles/con4giscore/images/be-icons/con4gis_blue.svg'
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
            ],
            'back' => [
                'href'                => 'key=back',
                'class'               => 'header_back',
                'button_callback'     => ['\con4gis\CoreBundle\Classes\Helper\DcaHelper', 'back'],
                'icon'                => 'back.svg',
                'label'               => &$GLOBALS['TL_LANG']['MSC']['backBT'],
            ],
        ],
        'operations' => [
            'edit' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['edit'],
                'href' => 'act=edit',
                'icon' => 'edit.svg',
            ],
            'copy' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['copy'],
                'href' => 'act=copy',
                'icon' => 'copy.svg'
            ],
            'delete' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['delete'],
                'href' => 'act=delete',
                'icon' => 'delete.svg',
                'attributes' => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ],
            'show' => [
                'label' => &$GLOBALS['TL_LANG'][$strName]['show'],
                'href' => 'act=show',
                'icon' => 'show.svg'
            ]
        ]
    ],

    // Palettes
    'palettes' => [
        '__selector__' => ['tariffDisplay'],
        'default' => '{general_legend},caption;{bbox_legend:hide},startBboxUpperx,startBboxUppery,startBboxDownerx,startBboxDownery;{tariffLegend},tariffs;{controlLegend},withPositionButton,withSubmitButton,withDeleteButton,overPositions,addTimes,distPrice,limitAutocomplete,addPriceOptions;{centerLegend},centerx,centery;{customMsgLegend:hide},errorMessageBounds,errorMessageNotFound,searchPlaceholder,language,currency;{descriptionLegend},tariffDisplay,hideDisplay;'
    ],


    // Subpalettes
    'subpalettes' => [
        'tariffDisplay_1' => "displayText"
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
            'wizard' => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLon']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'startBboxUppery' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['startBboxUppery'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLat']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'startBboxDownerx' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['startBboxDownerx'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLon']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'startBboxDownery' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['startBboxDownery'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
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
            'eval' => ['maxlength' => 255, 'tl_class' => 'long'],
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
            'label' => &$GLOBALS['TL_LANG'][$strName]['withPositionButton'],
            'default' => '0',
            'inputType' => 'checkbox',
            'eval' => ['maxlength' => 255, 'tl_class' => 'long']
        ],
        'withSubmitButton' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['withSubmitButton'],
            'default' => '0',
            'inputType' => 'checkbox',
            'eval' => ['maxlength' => 255, 'tl_class' => 'long']
        ],
        'withDeleteButton' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['withDeleteButton'],
            'default' => '0',
            'inputType' => 'checkbox',
            'eval' => ['maxlength' => 255, 'tl_class' => 'long']
        ],'overPositions' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['overPositions'],
            'default' => '0',
            'inputType' => 'checkbox',
            'eval' => ['maxlength' => 255, 'tl_class' => 'long']
        ],'timeAtStop' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['timeAtStop'],
            'default' => 0,
            'inputType' => 'text',
            'eval' => ['regex' => 'digit', 'tl_class' => 'long']
        ],'addTimes' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['addTimes'],
            'default' => '0',
            'inputType' => 'checkbox',
            'eval' => ['maxlength' => 255, 'tl_class' => 'long']
        ],
        'distPrice' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['distPrice'],
            'default' => 0,
            'options' => [0, 1],
            'eval' => ['mandatory'=>true],
            'reference' => &$GLOBALS['TL_LANG'][$strName]['references']['distPrice'],
            'inputType' => 'radio',
        ],
        'centerx' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['centerx'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLon']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'centery' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['centery'],
            'default' => '',
            'wizard' => [['con4gis\MapsBundle\Classes\GeoPicker', 'getPickerLink']],
            'save_callback' => [['tl_c4g_travel_costs_settings', 'setLat']],
            'inputType' => 'c4g_text',
            'eval' => ['maxlength' => 20, 'tl_class' => 'w50 wizard', 'require_input' => true]
        ],
        'errorMessageBounds' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['errorMessageBounds'],
            'default' => '',
            'inputType' => 'text',
            'eval' => ['decodeEntities' => true, 'tl_class' => 'long'],
        ],
        'errorMessageNotFound' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['errorMessageNotFound'],
            'default' => '',
            'inputType' => 'text',
            'eval' => ['decodeEntities' => true, 'tl_class' => 'long'],
        ],
        'searchPlaceholder' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['searchPlaceholder'],
            'default' => '',
            'inputType' => 'text',
            'eval' => ['decodeEntities' => true, 'tl_class' => 'long'],
        ],
        'language' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['language'],
            'default' => 0,
            'options' => [0, 1, 2],
            'reference' => &$GLOBALS['TL_LANG'][$strName]['references']['language'],
            'eval' => ['submitOnChange' => true],
            'inputType' => 'radio',
        ],
        'currency' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['currency'],
            'default' => '€',
            'inputType' => 'text',
            'eval' => ['maxlength' => 1, 'mandatory' => true]
        ],
        'tariffDisplay' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['tariffDisplay'],
            'default' => 0,
            'options' => [0, 1],
            'reference' => &$GLOBALS['TL_LANG'][$strName]['references']['tariffDisplay'],
            'eval' => ['submitOnChange' => true],
            'inputType' => 'radio',
        ],
        'displayText' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['displayText'],
            'default' => '',
            'eval' => ['rte'=>"tinyMCE"],
            'inputType' => 'text',
        ],
        'hideDisplay' => [
            'label' => &$GLOBALS['TL_LANG'][$strName]['hideDisplay'],
            'default' => '0',
            'inputType' => 'checkbox',
        ],
        'limitAutocomplete' => [

            'label' => &$GLOBALS['TL_LANG'][$strName]['limitAutocomplete'],
            'default' => 10,
            'inputType' => 'text',
            'eval' => ['rgxp' => 'digit']
        ],
        'importId' => [
            'eval' => ['doNotCopy' => true]
        ],
        'addPriceOptions' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['addPriceOptions'],
            'default'                 => '',
            'inputType'               => 'multiColumnWizard',
            'eval'                    => [
                'columnFields' => [
                    'name' => [
                        'label'             => &$GLOBALS['TL_LANG'][$strName]['name'],
                        'default'           => "",
                        'inputType'         => 'text',
                    ],
                    'addPrice' => [
                        'label'             => &$GLOBALS['TL_LANG'][$strName]['addPrice'],
                        'default'           => 0,
                        'inputType'         => 'text',
                        'eval'              => ['regxp'=>'digit']
                    ]
                ]
            ]
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
        if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
        }
        return $varValue;
    }

    public function setLat($varValue, DataContainer $dc)
    {
        if (!\con4gis\MapsBundle\Classes\Utils::validateLon($varValue)) {
            throw new Exception($GLOBALS['TL_LANG']['c4g_maps']['geox_invalid']);
        }
        return $varValue;
    }
}

