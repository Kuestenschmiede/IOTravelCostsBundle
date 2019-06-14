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
namespace con4gis\TravelCostsBundle\Resources\contao\modules;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\classes\ResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use con4gis\TravelCostsBundle\Entity\TravelCostsSettings;
use Contao\System;
use Doctrine\ORM\EntityManager;
use Contao\Controller;

/**
 * Class ModuleC4gTravelCosts
 * @package \con4gis\TravelCostsBundle\Resources\contao\modules
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
        ResourceLoader::loadJavaScriptDeferred("taxi-finder", "bundles/con4gistravelcosts/build/taxi-finder.js");
        ResourceLoader::loadCssRessource("taxi-finder", "bundles/con4gistravelcosts/css/taxi-finder.css");
        ResourceLoader::loadCssRessource('jquery-ui-css', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.css");
//        ResourceLoader::loadCssRessource("c4g-cached-inputfield", "bundles/con4giscore/css/c4g-cached-inputfield.css");
        $template = $this->Template;
        $objSettings = C4gSettingsModel::findSettings();
        $template->proxyUrl = $objSettings->con4gisIoUrl;
        $template->keyReverse = C4GUtils::getKey($objSettings,3);
        $template->keyForward = C4GUtils::getKey($objSettings,2);
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
                $template->bBox = json_encode($bBox);
            }
            $template->displayGrid = $tariffConfig->getDisplayGrid();
            $template->posButton = $tariffConfig->getWithPositionButton();
        }
        $language = Controller::replaceInsertTags("{{page::language}}");
        $template->lang = $language;
        $template->settingId = $settingsId;
    }
}
