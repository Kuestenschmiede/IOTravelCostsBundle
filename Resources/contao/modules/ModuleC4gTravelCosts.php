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
namespace con4gis\IOTravelCostsBundle\Resources\contao\modules;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\classes\ResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\MapsBundle\Resources\contao\models\C4gMapProfilesModel;
use con4gis\IOTravelCostsBundle\Entity\TravelCostsSettings;
use Contao\System;
use Doctrine\ORM\EntityManager;
use Contao\Controller;

/**
 * Class ModuleC4gTravelCosts
 * @package \con4gis\IOTravelCostsBundle\Resources\contao\modules
 */
class ModuleC4gTravelCosts extends \Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'c4g_travel_costs';

    /**
     * Generate content element
     */
    public function generate()
    {
        if (TL_MODE == 'BE') {
            $objTemplate = new \BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### '.$GLOBALS['TL_LANG']['FMD']['c4g_travel_costs'][0].' ###';
            $objTemplate->title = $this->headline;
            $objTemplate->id = $this->id;
            $objTemplate->link = $this->title;
            $objTemplate->href = 'contao/main.php?do=themes&amp;table=tl_module&amp;act=edit&amp;id=' . $this->id;
            return $objTemplate->parse();
        }
        return parent::generate();
    }

    /**
     * Generate module
     */
    protected function compile()
    {
        $pageId = $this->mapPage;
        $pageUrl = Controller::replaceInsertTags("{{link_url:: " . $pageId . "}}");
        ResourceLoader::loadJavaScriptDeferred('jquery-ui', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.js");
        ResourceLoader::loadJavaScriptDeferred("travel-finder", "bundles/con4gisiotravelcosts/build/travel-finder.js");
        ResourceLoader::loadCssRessource("travel-finder", "bundles/con4gisiotravelcosts/css/travel-finder.css");
        ResourceLoader::loadCssRessource('jquery-ui-css', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.css");
//        ResourceLoader::loadCssRessource("c4g-cached-inputfield", "bundles/con4giscore/css/c4g-cached-inputfield.css");
        $template = $this->Template;
        $objSettings = C4gSettingsModel::findSettings();
        $objMapsProfile = C4gMapProfilesModel::findByPk($objSettings->defaultprofile);
        $arrSettings = [];
        if($objMapsProfile->geosearchParams){
            $arrSettings['geosearchParams'] = [];
            foreach(unserialize($objMapsProfile->geosearchParams) as $geosearchParam){
                $arrSettings['geosearchParams'] = array_merge($arrSettings['geosearchParams'], [$geosearchParam['keys'] => $geosearchParam['params']]);
            }
        }
        $arrSettings['proxyUrl'] = $objSettings->con4gisIoUrl;
        $arrSettings['keyReverse'] = C4GUtils::getKey($objSettings,3);
        $arrSettings['keyForward'] = C4GUtils::getKey($objSettings,2);
        $arrSettings['keyAutocomplete'] = C4GUtils::getKey($objSettings,7);
        $settingsId = $this->expense_settings_id;
        $tariffConfig = System::getContainer()->get("doctrine.orm.default_entity_manager")->getRepository(TravelCostsSettings::class)
            ->findOneBy(['id' => $settingsId]);
        if ($tariffConfig instanceof TravelCostsSettings) {
            $bBox = [$tariffConfig->getStartBboxDownerx(), $tariffConfig->getStartBboxDownery(), $tariffConfig->getStartBboxUpperx(), $tariffConfig->getStartBboxUppery()];

            if($bBox) {
                // swap if coordinates build no bbox in the current form
                if ($bBox[0] > $bBox[2]) {
                    $bboxSaver = $bBox[0];
                    $bBox[0] = $bBox[2];
                    $bBox[2] = $bboxSaver;
                }
                if ($bBox[1] > $bBox[3]) {
                    $bboxSaver = $bBox[1];
                    $bBox[1] = $bBox[3];
                    $bBox[3] = $bboxSaver;
                }
                if ($bBox[0] === $bBox[1] && $bBox[1] === $bBox[2] && $bBox[2] === $bBox[3]) {
                    // catch case all bbox params are empty strings
                    $arrSettings['bBox'] = "";
                } else {
//                    $bBox = str_replace("\"", "\\\"", json_encode($bBox));
                    $arrSettings['bBox'] = $bBox;
                }
                
            }
            if ($tariffConfig->getCenterX() && $tariffConfig->getCenterY()) {
                $arrSettings['center'] = [$tariffConfig->getCenterX(), $tariffConfig->getCenterY()];
            }
            $arrSettings['errMsgBounds'] = $tariffConfig->getErrorMessageBounds();
            $arrSettings['errMsgNotFound'] = $tariffConfig->getErrorMessageNotFound();
            $arrSettings['searchPlaceholder'] = $tariffConfig->getSearchPlaceholder();
            $arrSettings['posButton'] = $tariffConfig->getWithPositionButton();
            $arrSettings['delButton'] = $tariffConfig->getWithDeleteButton();
            $arrSettings['submitButton'] = $tariffConfig->getWithSubmitButton();
            $arrSettings['hideDisplay'] = $tariffConfig->getHideDisplay();
            $arrSettings['displayType'] = $tariffConfig->getTariffDisplay();
            $arrSettings['currency'] = $tariffConfig->getCurrency();
        }
        if ($tariffConfig->getLanguage()) {
             $language = $tariffConfig->getLanguage() === 1 ? "en" : "de";
        }
        else {
            $language = Controller::replaceInsertTags("{{page::language}}");
        }
        $arrSettings['lang'] = $language;
        $arrSettings['autoLength'] = $tariffConfig->getLimitAutocomplete() ?: 10;
        $arrSettings['settingId'] = $settingsId;
        $template->arrSettings = $arrSettings;
    }
}
