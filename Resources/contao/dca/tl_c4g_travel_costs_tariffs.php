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
$strName = 'tl_c4g_travel_costs_tariffs';

$GLOBALS['TL_DCA'][$strName] = array
(

    // Config
    'config' => array
    (
        'dataContainer'               => 'Table',
        'enableVersioning'            => true,
        'onsubmit_callback'             => array(
            array('\con4gis\CoreBundle\Resources\contao\classes\C4GAutomator', 'purgeApiCache')
        )
    ),

    // List
    'list' => array
    (
        'sorting' => array
        (
            'mode'                    => 1,
            'fields'                  => array('caption'),
            'flag'                    => 1
        ),
        'label' => array
        (
            'fields'                  => array('caption'),
            'format'                  => '%s'
        ),
        'global_operations' => array
        (
            'all' => array
            (
                'label'               => &$GLOBALS['TL_LANG']['MSC']['all'],
                'href'                => 'act=select',
                'class'               => 'header_edit_all',
                'attributes'          => 'onclick="Backend.getScrollOffset();" accesskey="e"'
            )
        ),
        'operations' => array
        (
            'edit' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['edit'],
                'href'                => 'act=edit',
                'icon'                => 'edit.gif'
            ),
            'copy' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['copy'],
                'href'                => 'act=copy',
                'icon'                => 'copy.gif'
            ),
            'delete' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['delete'],
                'href'                => 'act=delete',
                'icon'                => 'delete.gif',
                'attributes'          => 'onclick="if (!confirm(\'' . $GLOBALS['TL_LANG']['MSC']['deleteConfirm'] . '\')) return false; Backend.getScrollOffset();"'
            ),
            'show' => array
            (
                'label'               => &$GLOBALS['TL_LANG'][$strName]['show'],
                'href'                => 'act=show',
                'icon'                => 'show.gif'
            )
        )
    ),

    // Palettes
    'palettes' => array
    (
        '__selector__'                => array(''),
        'default'                     => '{general_legend},caption;'
            . '{price_legend},basePrice,distancePrice,timePrice;'
            .'{weekday_legend:hide},monday,tuesday,wednesday,thursday,friday,saturday,sunday;'
    ),


    // Subpalettes
    'subpalettes' => array
    (

    ),

    // Fields
    'fields' => array
    (
        'caption' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['caption'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['decodeEntities'=>true, 'maxlength'=>255, 'tl_class'=>'long'],
        ],
        'basePrice' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['basePrice'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['regxp'=>'digit'],
        ],'distancePrice' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['distancePrice'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['regxp'=>'digit'],
        ],'timePrice' => [
            'label'                   => &$GLOBALS['TL_LANG'][$strName]['timePrice'],
            'default'                 => '',
            'inputType'               => 'text',
            'eval'                    => ['regxp'=>'digit'],
        ],
        'monday' => array
        (
            'label'                   => $GLOBALS['TL_LANG'][$strName]['monday'],
            'default'                 => time(),
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => array('columnFields'	=> array
            (
                'time_begin' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_begin'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                ),
                'time_end' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_end'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                )
            ))
        ),
        'tuesday' => array
        (
            'label'                   => $GLOBALS['TL_LANG'][$strName]['tuesday'],
            'default'                 => time(),
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => array('columnFields'	=> array
            (
                'time_begin' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_begin'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                ),
                'time_end' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_end'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                )
            ))
        ),

        'wednesday' => array
        (
            'label'                   => $GLOBALS['TL_LANG'][$strName]['wednesday'],
            'default'                 => time(),
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => array('columnFields'	=> array
            (
                'time_begin' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_begin'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                ),
                'time_end' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_end'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                )
            ))
        ),

        'thursday' => array
        (
            'label'                   => $GLOBALS['TL_LANG'][$strName]['thursday'],
            'default'                 => time(),
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => array('columnFields'	=> array
            (
                'time_begin' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_begin'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                ),
                'time_end' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_end'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                )
            ))
        ),

        'friday' => array
        (
            'label'                   => $GLOBALS['TL_LANG'][$strName]['friday'],
            'default'                 => time(),
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => array('columnFields'	=> array
            (
                'time_begin' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_begin'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                ),
                'time_end' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_end'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                )
            ))
        ),

        'saturday' => array
        (
            'label'                   => $GLOBALS['TL_LANG'][$strName]['saturday'],
            'default'                 => time(),
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => array('columnFields'	=> array
            (
                'time_begin' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_begin'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                ),
                'time_end' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_end'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                )
            ))
        ),

        'sunday' => array
        (
            'label'                   => $GLOBALS['TL_LANG'][$strName]['sunday'],
            'default'                 => time(),
            'exclude'                 => true,
            'inputType'               => 'multiColumnWizard',
            'eval'                    => array('columnFields'	=> array
            (
                'time_begin' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_begin'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                ),
                'time_end' => array
                (
                    'label'                   => $GLOBALS['TL_LANG'][$strName]['time_end'],
                    'exclude'                 => true,
                    'inputType'               => 'text',
                    'eval'                    => array('rgxp'=>'time', 'mandatory'=>false, 'doNotCopy'=>true, 'datepicker'=>true, 'tl_class'=>'w50 wizard')
                )
            ))
        ),

    )
);

