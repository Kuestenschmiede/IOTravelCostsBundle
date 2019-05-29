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
namespace con4gis\RoutingExpensesBundle\Resources\contao\modules;


use con4gis\CoreBundle\Resources\contao\classes\C4GUtils;
use con4gis\CoreBundle\Resources\contao\classes\ResourceLoader;
use con4gis\CoreBundle\Resources\contao\models\C4gSettingsModel;
use Contao\Controller;

/**
 * Class ModuleC4gRoutingExpenses
 * @package \con4gis\RoutingExpensesBundle\Resources\contao\modules
 */
class ModuleC4gRoutingExpenses extends \Module
{
    /**
     * Template
     * @var string
     */
    protected $strTemplate = 'c4g_routing_expenses';

    /**
     * Generate content element
     */
    public function generate()
    {
        if (TL_MODE == 'BE') {
            $objTemplate = new \BackendTemplate('be_wildcard');
            $objTemplate->wildcard = '### '.$GLOBALS['TL_LANG']['FMD']['C4gRoutingExpensesModule'][0].' ###';
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
        ResourceLoader::loadJavaScriptDeferred("taxi-finder", "bundles/con4gisroutingexpenses/build/taxi-finder.js");
//        ResourceLoader::loadCssRessource("fuel-finder-module", "bundles/gasstationsfuel/css/fuel-finder-module.css");
        ResourceLoader::loadCssRessource('jquery-ui-css', "/bundles/con4giscore/vendor/jQuery/jquery-ui-1.12.1.custom/jquery-ui.css");
//        ResourceLoader::loadCssRessource("c4g-cached-inputfield", "bundles/con4giscore/css/c4g-cached-inputfield.css");
        $template = $this->Template;
        $objSettings = C4gSettingsModel::findSettings();
        $template->proxyUrl = $objSettings->con4gisIoUrl;
        $template->keyReverse = C4GUtils::getKey($objSettings,3);
        $template->keyForward = C4GUtils::getKey($objSettings,2);
        $template->settingId = 1;
    }



}
