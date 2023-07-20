/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Resources/public/js/travel-constant-i18n-de.js":
/*!************************************************************!*\
  !*** ./src/Resources/public/js/travel-constant-i18n-de.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   travelConstantsGerman: () => (/* binding */ travelConstantsGerman)
/* harmony export */ });
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


/**
 *  constants
 */
var travelConstantsGerman = {
  DUMMY_INPUT: 'Straße, Ort oder PLZ eingeben ...',
  DUMMY_INPUT_TIME: 'Zusätzliche Haltezeit in Minuten eingeben...',
  HEADLINE_DIST: 'Entfernung',
  HEADLINE_TIME: 'Dauer',
  HEADLINE_BASE_PRICE: 'Grundpreis',
  HEADLINE_DIST_PRICE: 'Preis / km',
  HEADLINE_TIME_PRICE: 'Preis / min',
  ERROR_OUT_OF_BOUNDS: 'Adresse außerhalb des Tarifgebiets',
  ERROR_FALSE_ADDRESS: 'Adresse nicht gefunden',
  ERROR: 'Fehler',
  START_SEARCH: 'Berechnen',
  RESET: 'Zurücksetzen',
  POSITION_OUT_OF_BOUNDS: "Ihre aktuelle Position ist außerhalb des Tarifsgebiets",
  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "./src/Resources/public/js/travel-constant-i18n-en.js":
/*!************************************************************!*\
  !*** ./src/Resources/public/js/travel-constant-i18n-en.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   travelConstantsEnglish: () => (/* binding */ travelConstantsEnglish)
/* harmony export */ });
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


/**
 *  constants
 */
var travelConstantsEnglish = {
  DUMMY_INPUT: 'Street, city or enter postal code ...',
  DUMMY_INPUT_TIME: 'Enter additional time in minutes...',
  HEADLINE_DIST: 'Distance',
  HEADLINE_TIME: 'Time',
  HEADLINE_BASE_PRICE: 'Base price',
  HEADLINE_DIST_PRICE: 'Price / km',
  HEADLINE_TIME_PRICE: 'Price / min',
  ERROR_OUT_OF_BOUNDS: 'Address is out of bounds',
  ERROR_FALSE_ADDRESS: 'Address not found',
  ERROR: 'Error',
  START_SEARCH: 'Calculate',
  RESET: 'Reset',
  POSITION_OUT_OF_BOUNDS: "Your current position is out of bounds",
  NONE: '' // last line
}; // end of "css constants" ---

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************************!*\
  !*** ./src/Resources/public/js/tariff-finder.js ***!
  \**************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-constant-i18n-en */ "./src/Resources/public/js/travel-constant-i18n-en.js");
/* harmony import */ var _travel_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-constant-i18n-de */ "./src/Resources/public/js/travel-constant-i18n-de.js");


const langConstants = {};
const currency = window.currency || '€';

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function () {
  let language = window.serviceLang || window.navigator.userLanguage || window.navigator.language;
  if (language === "en") {
    $.extend(langConstants, _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__.travelConstantsEnglish);
  } else if (language === "de") {
    $.extend(langConstants, _travel_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__.travelConstantsGerman);
  } else {
    $.extend(langConstants, _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__.travelConstantsEnglish);
  }
  if (window.displayType == "0") {
    findTariffs();
  }
});
function roundToTwo(num) {
  if (typeof num != "float") {
    num = parseFloat(num);
  }
  return num.toFixed(2);
}
/**
 * calls tariffService to fetch informations and pricing about the set tariffs and shows them
 * @returns {void}}
 */
function findTariffs() {
  let url = "con4gis/tariffService/" + window.settingId;
  $.ajax({
    url: url
  }).done(function (data) {
    let parent = $(".tariff-output");
    if (window.hideDisplay == 0) {
      parent.css('display', 'grid');
    }
    let rowCount = "row-even";
    let objHeadlineDistPrice = $(".headline-dist-price");
    objHeadlineDistPrice.html(langConstants.HEADLINE_DIST_PRICE);
    let objHeadlineTimePrice = $(".headline-time-price");
    objHeadlineTimePrice.html(langConstants.HEADLINE_TIME_PRICE);
    let objHeadlineBasePrice = $(".headline-base-price");
    objHeadlineBasePrice.html(langConstants.HEADLINE_BASE_PRICE);
    let headlineSet = false;
    for (let i in data) {
      if (data.hasOwnProperty(i)) {
        let itemName = document.createElement('div');
        itemName.innerHTML = i;
        itemName.className = "grid-item " + rowCount;
        parent.append(itemName);
        let itemBasePrice = document.createElement('div');
        if (data[i].basePrice % 1 !== 0) {
          let responseTariff = roundToTwo(data[i].basePrice);
          if (window.serviceLang === "de") {
            responseTariff = responseTariff.replace(".", ",");
          }
          itemBasePrice.innerHTML = responseTariff + " " + currency;
        } else {
          itemBasePrice.innerHTML = data[i].basePrice + " " + currency;
        }
        itemBasePrice.className = "grid-item " + rowCount;
        parent.append(itemBasePrice);
        let autoauto = "auto auto";
        if (data[i]['distPrice'].length > 1) {
          for (let priceIndex in data[i]['distPrice']) {
            if (data[i]['distPrice'].hasOwnProperty(priceIndex)) {
              let priceElement = data[i]['distPrice'][priceIndex];
              if (!headlineSet) {
                let headLineHtml = langConstants.HEADLINE_DIST_PRICE + '<br>' + priceElement['name'];
                if (priceIndex === "0") {
                  let objHeadlineDistPrice = $(".headline-dist-price");
                  objHeadlineDistPrice.html(headLineHtml);
                } else {
                  let parent = $(".headline-dist-price").last();
                  let addHeadline = document.createElement('div');
                  addHeadline.className = "headline-dist-price grid-item";
                  addHeadline.innerHTML = headLineHtml;
                  parent.after(addHeadline);
                }
              }
              let itemDistPrice = document.createElement('div');
              if (priceElement['kilometerPrice'] % 1 !== 0) {
                let responseTariff = roundToTwo(priceElement['kilometerPrice']);
                if (window.serviceLang === "de") {
                  responseTariff = responseTariff.replace(".", ",");
                }
                itemDistPrice.innerHTML = responseTariff + " " + currency;
              } else {
                itemDistPrice.innerHTML = priceElement['kilometerPrice'] + " " + currency;
              }
              itemDistPrice.className = "grid-item " + rowCount;
              parent.append(itemDistPrice);
              autoauto += " auto";
            }
          }
          headlineSet = true;
        } else {
          let itemDistPrice = document.createElement('div');
          let responseTariff = data[i].distPrice[0]['kilometerPrice'];
          responseTariff = responseTariff.replace(".", ",");
          let indexDecimal = responseTariff.indexOf(',') + 3;
          itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " " + currency;
          itemDistPrice.className = "grid-item " + rowCount;
          parent.append(itemDistPrice);
        }
        if (data[i].timePrice != 0) {
          let itemTimePrice = document.createElement('div');
          if (data[i].timePrice % 1 !== 0) {
            let responseTariff = data[i].timePrice + "0000";
            let indexDecimal;
            if (window.serviceLang === "de") {
              responseTariff = responseTariff.replace(".", ",");
              indexDecimal = responseTariff.indexOf(',') + 3;
            } else {
              indexDecimal = responseTariff.indexOf('.') + 3;
            }
            itemTimePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " " + currency;
          } else {
            itemTimePrice.innerHTML = data[i].timePrice + " " + currency;
          }
          itemTimePrice.className = "grid-item " + rowCount;
          parent.append(itemTimePrice);
          rowCount = rowCount === "row-even" ? "row-uneven" : "row-even";
          autoauto += " auto";
        } else {
          $('*').remove('.headline-time-price');
        }
        $('.tariff-output').css('grid-template-columns', autoauto);
      }
    }
  });
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFyaWZmLWZpbmRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDUSxJQUFJQSxxQkFBcUIsR0FBRztFQUNoQ0MsV0FBVyxFQUFFLG1DQUFtQztFQUNoREMsZ0JBQWdCLEVBQUUsOENBQThDO0VBQ2hFQyxhQUFhLEVBQUUsWUFBWTtFQUMzQkMsYUFBYSxFQUFFLE9BQU87RUFDdEJDLG1CQUFtQixFQUFFLFlBQVk7RUFDakNDLG1CQUFtQixFQUFFLFlBQVk7RUFDakNDLG1CQUFtQixFQUFFLGFBQWE7RUFDbENDLG1CQUFtQixFQUFFLG9DQUFvQztFQUN6REMsbUJBQW1CLEVBQUUsd0JBQXdCO0VBQzdDQyxLQUFLLEVBQUMsUUFBUTtFQUNkQyxZQUFZLEVBQUUsV0FBVztFQUN6QkMsS0FBSyxFQUFFLGNBQWM7RUFDckJDLHNCQUFzQixFQUFFLHdEQUF3RDtFQUNoRkMsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7OztBQy9CSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ08sSUFBSUMsc0JBQXNCLEdBQUc7RUFDaENkLFdBQVcsRUFBRSx1Q0FBdUM7RUFDcERDLGdCQUFnQixFQUFFLHFDQUFxQztFQUN2REMsYUFBYSxFQUFFLFVBQVU7RUFDekJDLGFBQWEsRUFBRSxNQUFNO0VBQ3JCQyxtQkFBbUIsRUFBQyxZQUFZO0VBQ2hDQyxtQkFBbUIsRUFBQyxZQUFZO0VBQ2hDQyxtQkFBbUIsRUFBQyxhQUFhO0VBQ2pDQyxtQkFBbUIsRUFBRSwwQkFBMEI7RUFDL0NDLG1CQUFtQixFQUFFLG1CQUFtQjtFQUN4Q0MsS0FBSyxFQUFDLE9BQU87RUFDYkMsWUFBWSxFQUFFLFdBQVc7RUFDekJDLEtBQUssRUFBRSxPQUFPO0VBQ2RDLHNCQUFzQixFQUFFLHdDQUF3QztFQUNoRUMsSUFBSSxFQUFFLEVBQUUsQ0FBQztBQUNiLENBQUMsQ0FBQyxDQUFDOzs7Ozs7VUMvQkg7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOaUU7QUFDRDtBQUNoRSxNQUFNRSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBQ3hCLE1BQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDRCxRQUFRLElBQUksR0FBRzs7QUFFdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQUUsQ0FBQyxDQUFDQyxRQUFRLENBQUMsQ0FBQ0MsS0FBSyxDQUFDLFlBQVc7RUFDekIsSUFBSUMsUUFBUSxHQUFHSixNQUFNLENBQUNLLFdBQVcsSUFBSUwsTUFBTSxDQUFDTSxTQUFTLENBQUNDLFlBQVksSUFBSVAsTUFBTSxDQUFDTSxTQUFTLENBQUNGLFFBQVE7RUFDL0YsSUFBSUEsUUFBUSxLQUFLLElBQUksRUFBRTtJQUNuQkgsQ0FBQyxDQUFDTyxNQUFNLENBQUNWLGFBQWEsRUFBRUQsNEVBQXNCLENBQUM7RUFDbkQsQ0FBQyxNQUNJLElBQUlPLFFBQVEsS0FBSyxJQUFJLEVBQUU7SUFDeEJILENBQUMsQ0FBQ08sTUFBTSxDQUFDVixhQUFhLEVBQUVoQiwyRUFBcUIsQ0FBQztFQUNsRCxDQUFDLE1BQ0k7SUFDRG1CLENBQUMsQ0FBQ08sTUFBTSxDQUFDVixhQUFhLEVBQUVELDRFQUFzQixDQUFDO0VBQ25EO0VBQ0EsSUFBSUcsTUFBTSxDQUFDUyxXQUFXLElBQUksR0FBRyxFQUFFO0lBQzNCQyxXQUFXLENBQUMsQ0FBQztFQUNqQjtBQUNKLENBQUMsQ0FBQztBQUNGLFNBQVNDLFVBQVVBLENBQUNDLEdBQUcsRUFBRTtFQUNyQixJQUFJLE9BQU9BLEdBQUcsSUFBSSxPQUFPLEVBQUU7SUFDdkJBLEdBQUcsR0FBRUMsVUFBVSxDQUFDRCxHQUFHLENBQUM7RUFDeEI7RUFDQSxPQUFPQSxHQUFHLENBQUNFLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVNKLFdBQVdBLENBQUEsRUFBRztFQUNuQixJQUFJSyxHQUFHLEdBQUcsd0JBQXdCLEdBQUdmLE1BQU0sQ0FBQ2dCLFNBQVM7RUFDckRmLENBQUMsQ0FBQ2dCLElBQUksQ0FBQztJQUFDRixHQUFHLEVBQUNBO0VBQUcsQ0FBQyxDQUFDLENBQ1pHLElBQUksQ0FBQyxVQUFVQyxJQUFJLEVBQUU7SUFDbEIsSUFBSUMsTUFBTSxHQUFHbkIsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO0lBQ2hDLElBQUlELE1BQU0sQ0FBQ3FCLFdBQVcsSUFBSSxDQUFDLEVBQUU7TUFDekJELE1BQU0sQ0FBQ0UsR0FBRyxDQUFDLFNBQVMsRUFBQyxNQUFNLENBQUM7SUFDaEM7SUFDQSxJQUFJQyxRQUFRLEdBQUcsVUFBVTtJQUV6QixJQUFJQyxvQkFBb0IsR0FBR3ZCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRHVCLG9CQUFvQixDQUFDQyxJQUFJLENBQUMzQixhQUFhLENBQUNWLG1CQUFtQixDQUFDO0lBQzVELElBQUlzQyxvQkFBb0IsR0FBR3pCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRHlCLG9CQUFvQixDQUFDRCxJQUFJLENBQUMzQixhQUFhLENBQUNULG1CQUFtQixDQUFDO0lBQzVELElBQUlzQyxvQkFBb0IsR0FBRzFCLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQztJQUNwRDBCLG9CQUFvQixDQUFDRixJQUFJLENBQUMzQixhQUFhLENBQUNYLG1CQUFtQixDQUFDO0lBQzVELElBQUl5QyxXQUFXLEdBQUcsS0FBSztJQUN2QixLQUFLLElBQUlDLENBQUMsSUFBSVYsSUFBSSxFQUFFO01BQ2hCLElBQUlBLElBQUksQ0FBQ1csY0FBYyxDQUFDRCxDQUFDLENBQUMsRUFBRTtRQUN4QixJQUFJRSxRQUFRLEdBQUc3QixRQUFRLENBQUM4QixhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzVDRCxRQUFRLENBQUNFLFNBQVMsR0FBR0osQ0FBQztRQUN0QkUsUUFBUSxDQUFDRyxTQUFTLEdBQUcsWUFBWSxHQUFHWCxRQUFRO1FBQzVDSCxNQUFNLENBQUNlLE1BQU0sQ0FBQ0osUUFBUSxDQUFDO1FBQ3ZCLElBQUlLLGFBQWEsR0FBR2xDLFFBQVEsQ0FBQzhCLGFBQWEsQ0FBQyxLQUFLLENBQUM7UUFDakQsSUFBSWIsSUFBSSxDQUFDVSxDQUFDLENBQUMsQ0FBQ1EsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7VUFDN0IsSUFBSUMsY0FBYyxHQUFHM0IsVUFBVSxDQUFDUSxJQUFJLENBQUNVLENBQUMsQ0FBQyxDQUFDUSxTQUFTLENBQUM7VUFDbEQsSUFBSXJDLE1BQU0sQ0FBQ0ssV0FBVyxLQUFLLElBQUksRUFBRTtZQUM3QmlDLGNBQWMsR0FBR0EsY0FBYyxDQUFDQyxPQUFPLENBQUMsR0FBRyxFQUFDLEdBQUcsQ0FBQztVQUNwRDtVQUNBSCxhQUFhLENBQUNILFNBQVMsR0FBR0ssY0FBYyxHQUFHLEdBQUcsR0FBR3ZDLFFBQVE7UUFDN0QsQ0FBQyxNQUNJO1VBQ0RxQyxhQUFhLENBQUNILFNBQVMsR0FBR2QsSUFBSSxDQUFDVSxDQUFDLENBQUMsQ0FBQ1EsU0FBUyxHQUFHLEdBQUcsR0FBR3RDLFFBQVE7UUFDaEU7UUFDQXFDLGFBQWEsQ0FBQ0YsU0FBUyxHQUFHLFlBQVksR0FBR1gsUUFBUTtRQUNqREgsTUFBTSxDQUFDZSxNQUFNLENBQUNDLGFBQWEsQ0FBQztRQUM1QixJQUFJSSxRQUFRLEdBQUcsV0FBVztRQUMxQixJQUFJckIsSUFBSSxDQUFDVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ1ksTUFBTSxHQUFHLENBQUMsRUFBRTtVQUNqQyxLQUFLLElBQUlDLFVBQVUsSUFBSXZCLElBQUksQ0FBQ1UsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLEVBQUU7WUFDekMsSUFBSVYsSUFBSSxDQUFDVSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQ0MsY0FBYyxDQUFDWSxVQUFVLENBQUMsRUFBRTtjQUNqRCxJQUFJQyxZQUFZLEdBQUd4QixJQUFJLENBQUNVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDYSxVQUFVLENBQUM7Y0FDbkQsSUFBSSxDQUFDZCxXQUFXLEVBQUU7Z0JBQ2QsSUFBSWdCLFlBQVksR0FBRzlDLGFBQWEsQ0FBQ1YsbUJBQW1CLEdBQUcsTUFBTSxHQUFHdUQsWUFBWSxDQUFDLE1BQU0sQ0FBQztnQkFDcEYsSUFBSUQsVUFBVSxLQUFLLEdBQUcsRUFBRTtrQkFDcEIsSUFBSWxCLG9CQUFvQixHQUFHdkIsQ0FBQyxDQUFDLHNCQUFzQixDQUFDO2tCQUNwRHVCLG9CQUFvQixDQUFDQyxJQUFJLENBQUNtQixZQUFZLENBQUM7Z0JBQzNDLENBQUMsTUFDSTtrQkFDRCxJQUFJeEIsTUFBTSxHQUFHbkIsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUM0QyxJQUFJLENBQUMsQ0FBQztrQkFDN0MsSUFBSUMsV0FBVyxHQUFHNUMsUUFBUSxDQUFDOEIsYUFBYSxDQUFDLEtBQUssQ0FBQztrQkFDL0NjLFdBQVcsQ0FBQ1osU0FBUyxHQUFHLCtCQUErQjtrQkFDdkRZLFdBQVcsQ0FBQ2IsU0FBUyxHQUFHVyxZQUFZO2tCQUNwQ3hCLE1BQU0sQ0FBQzJCLEtBQUssQ0FBQ0QsV0FBVyxDQUFDO2dCQUM3QjtjQUNKO2NBRUEsSUFBSUUsYUFBYSxHQUFHOUMsUUFBUSxDQUFDOEIsYUFBYSxDQUFDLEtBQUssQ0FBQztjQUNqRCxJQUFJVyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUMxQyxJQUFJTCxjQUFjLEdBQUczQixVQUFVLENBQUNnQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQkFDL0QsSUFBSTNDLE1BQU0sQ0FBQ0ssV0FBVyxLQUFLLElBQUksRUFBRTtrQkFDN0JpQyxjQUFjLEdBQUdBLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7Z0JBQ3BEO2dCQUNBUyxhQUFhLENBQUNmLFNBQVMsR0FBR0ssY0FBYyxHQUFHLEdBQUcsR0FBR3ZDLFFBQVE7Y0FDN0QsQ0FBQyxNQUNJO2dCQUNEaUQsYUFBYSxDQUFDZixTQUFTLEdBQUdVLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsR0FBRzVDLFFBQVE7Y0FDN0U7Y0FDQWlELGFBQWEsQ0FBQ2QsU0FBUyxHQUFHLFlBQVksR0FBR1gsUUFBUTtjQUNqREgsTUFBTSxDQUFDZSxNQUFNLENBQUNhLGFBQWEsQ0FBQztjQUM1QlIsUUFBUSxJQUFJLE9BQU87WUFDdkI7VUFDSjtVQUNBWixXQUFXLEdBQUcsSUFBSTtRQUN0QixDQUFDLE1BQ0k7VUFDRCxJQUFJb0IsYUFBYSxHQUFHOUMsUUFBUSxDQUFDOEIsYUFBYSxDQUFDLEtBQUssQ0FBQztVQUNqRCxJQUFJTSxjQUFjLEdBQUduQixJQUFJLENBQUNVLENBQUMsQ0FBQyxDQUFDb0IsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDO1VBQzNEWCxjQUFjLEdBQUdBLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7VUFDaEQsSUFBSVcsWUFBWSxHQUFHWixjQUFjLENBQUNhLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1VBQ2xESCxhQUFhLENBQUNmLFNBQVMsR0FBR0ssY0FBYyxDQUFDYyxTQUFTLENBQUMsQ0FBQyxFQUFFRixZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUduRCxRQUFRO1VBQ3BGaUQsYUFBYSxDQUFDZCxTQUFTLEdBQUcsWUFBWSxHQUFHWCxRQUFRO1VBQ2pESCxNQUFNLENBQUNlLE1BQU0sQ0FBQ2EsYUFBYSxDQUFDO1FBQ2hDO1FBQ0EsSUFBSTdCLElBQUksQ0FBQ1UsQ0FBQyxDQUFDLENBQUN3QixTQUFTLElBQUksQ0FBQyxFQUFFO1VBQ3hCLElBQUlDLGFBQWEsR0FBR3BELFFBQVEsQ0FBQzhCLGFBQWEsQ0FBQyxLQUFLLENBQUM7VUFDakQsSUFBSWIsSUFBSSxDQUFDVSxDQUFDLENBQUMsQ0FBQ3dCLFNBQVMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLElBQUlmLGNBQWMsR0FBR25CLElBQUksQ0FBQ1UsQ0FBQyxDQUFDLENBQUN3QixTQUFTLEdBQUcsTUFBTTtZQUMvQyxJQUFJSCxZQUFZO1lBQ2hCLElBQUlsRCxNQUFNLENBQUNLLFdBQVcsS0FBSyxJQUFJLEVBQUU7Y0FDN0JpQyxjQUFjLEdBQUdBLGNBQWMsQ0FBQ0MsT0FBTyxDQUFDLEdBQUcsRUFBQyxHQUFHLENBQUM7Y0FDaERXLFlBQVksR0FBR1osY0FBYyxDQUFDYSxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQztZQUNsRCxDQUFDLE1BQ0k7Y0FDREQsWUFBWSxHQUFHWixjQUFjLENBQUNhLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDO1lBQ2xEO1lBQ0FHLGFBQWEsQ0FBQ3JCLFNBQVMsR0FBR0ssY0FBYyxDQUFDYyxTQUFTLENBQUMsQ0FBQyxFQUFFRixZQUFZLENBQUMsR0FBRyxHQUFHLEdBQUduRCxRQUFRO1VBQ3hGLENBQUMsTUFDSTtZQUNEdUQsYUFBYSxDQUFDckIsU0FBUyxHQUFHZCxJQUFJLENBQUNVLENBQUMsQ0FBQyxDQUFDd0IsU0FBUyxHQUFHLEdBQUcsR0FBR3RELFFBQVE7VUFDaEU7VUFDQXVELGFBQWEsQ0FBQ3BCLFNBQVMsR0FBRyxZQUFZLEdBQUdYLFFBQVE7VUFDakRILE1BQU0sQ0FBQ2UsTUFBTSxDQUFDbUIsYUFBYSxDQUFDO1VBQzVCL0IsUUFBUSxHQUFHQSxRQUFRLEtBQUssVUFBVSxHQUFHLFlBQVksR0FBRyxVQUFVO1VBQzlEaUIsUUFBUSxJQUFJLE9BQU87UUFFdkIsQ0FBQyxNQUNJO1VBQ0R2QyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUNzRCxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDekM7UUFDQXRELENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDcUIsR0FBRyxDQUFDLHVCQUF1QixFQUFFa0IsUUFBUSxDQUFDO01BQzlEO0lBQ0o7RUFDSixDQUNKLENBQUM7QUFDTCxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW90cmF2ZWxjb3N0c2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3RyYXZlbC1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovL2lvdHJhdmVsY29zdHNidW5kbGUvLi9zcmMvUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtY29uc3RhbnQtaTE4bi1lbi5qcyIsIndlYnBhY2s6Ly9pb3RyYXZlbGNvc3RzYnVuZGxlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2lvdHJhdmVsY29zdHNidW5kbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2lvdHJhdmVsY29zdHNidW5kbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pb3RyYXZlbGNvc3RzYnVuZGxlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW90cmF2ZWxjb3N0c2J1bmRsZS8uL3NyYy9SZXNvdXJjZXMvcHVibGljL2pzL3RhcmlmZi1maW5kZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdHJhdmVsQ29uc3RhbnRzR2VybWFuID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnU3RyYcOfZSwgT3J0IG9kZXIgUExaIGVpbmdlYmVuIC4uLicsXG4gICAgRFVNTVlfSU5QVVRfVElNRTogJ1p1c8OkdHpsaWNoZSBIYWx0ZXplaXQgaW4gTWludXRlbiBlaW5nZWJlbi4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0VudGZlcm51bmcnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdEYXVlcicsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTogJ0dydW5kcHJlaXMnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6ICdQcmVpcyAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOiAnUHJlaXMgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZHJlc3NlIGF1w59lcmhhbGIgZGVzIFRhcmlmZ2ViaWV0cycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4nLFxuICAgIEVSUk9SOidGZWhsZXInLFxuICAgIFNUQVJUX1NFQVJDSDogJ0JlcmVjaG5lbicsXG4gICAgUkVTRVQ6ICdadXLDvGNrc2V0emVuJyxcbiAgICBQT1NJVElPTl9PVVRfT0ZfQk9VTkRTOiBcIklocmUgYWt0dWVsbGUgUG9zaXRpb24gaXN0IGF1w59lcmhhbGIgZGVzIFRhcmlmc2dlYmlldHNcIixcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCB2YXIgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCA9IHtcbiAgICBEVU1NWV9JTlBVVDogJ1N0cmVldCwgY2l0eSBvciBlbnRlciBwb3N0YWwgY29kZSAuLi4nLFxuICAgIERVTU1ZX0lOUFVUX1RJTUU6ICdFbnRlciBhZGRpdGlvbmFsIHRpbWUgaW4gbWludXRlcy4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0Rpc3RhbmNlJyxcbiAgICBIRUFETElORV9USU1FOiAnVGltZScsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTonQmFzZSBwcmljZScsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTonUHJpY2UgLyBrbScsXG4gICAgSEVBRExJTkVfVElNRV9QUklDRTonUHJpY2UgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZGRyZXNzIGlzIG91dCBvZiBib3VuZHMnLFxuICAgIEVSUk9SX0ZBTFNFX0FERFJFU1M6ICdBZGRyZXNzIG5vdCBmb3VuZCcsXG4gICAgRVJST1I6J0Vycm9yJyxcbiAgICBTVEFSVF9TRUFSQ0g6ICdDYWxjdWxhdGUnLFxuICAgIFJFU0VUOiAnUmVzZXQnLFxuICAgIFBPU0lUSU9OX09VVF9PRl9CT1VORFM6IFwiWW91ciBjdXJyZW50IHBvc2l0aW9uIGlzIG91dCBvZiBib3VuZHNcIixcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt0cmF2ZWxDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi90cmF2ZWwtY29uc3RhbnQtaTE4bi1lblwiO1xuaW1wb3J0IHt0cmF2ZWxDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL3RyYXZlbC1jb25zdGFudC1pMThuLWRlXCI7XG5jb25zdCBsYW5nQ29uc3RhbnRzID0ge307XG5jb25zdCBjdXJyZW5jeSA9IHdpbmRvdy5jdXJyZW5jeSB8fCAn4oKsJztcblxuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxhbmd1YWdlID0gd2luZG93LnNlcnZpY2VMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaClcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiZGVcIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0cmF2ZWxDb25zdGFudHNHZXJtYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCk7XG4gICAgfVxuICAgIGlmICh3aW5kb3cuZGlzcGxheVR5cGUgPT0gXCIwXCIpIHtcbiAgICAgICAgZmluZFRhcmlmZnMoKTtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIHJvdW5kVG9Ud28obnVtKSB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT0gXCJmbG9hdFwiKSB7XG4gICAgICAgIG51bSA9cGFyc2VGbG9hdChudW0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVtLnRvRml4ZWQoMik7XG59XG4vKipcbiAqIGNhbGxzIHRhcmlmZlNlcnZpY2UgdG8gZmV0Y2ggaW5mb3JtYXRpb25zIGFuZCBwcmljaW5nIGFib3V0IHRoZSBzZXQgdGFyaWZmcyBhbmQgc2hvd3MgdGhlbVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBmaW5kVGFyaWZmcygpIHtcbiAgICBsZXQgdXJsID0gXCJjb240Z2lzL3RhcmlmZlNlcnZpY2UvXCIgKyB3aW5kb3cuc2V0dGluZ0lkO1xuICAgICQuYWpheCh7dXJsOnVybH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi50YXJpZmYtb3V0cHV0XCIpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5oaWRlRGlzcGxheSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2dyaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByb3dDb3VudCA9IFwicm93LWV2ZW5cIjtcblxuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lRGlzdFByaWNlID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lVGltZVByaWNlID0gJChcIi5oZWFkbGluZS10aW1lLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVUaW1lUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX1RJTUVfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lQmFzZVByaWNlID0gJChcIi5oZWFkbGluZS1iYXNlLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVCYXNlUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0JBU0VfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IGhlYWRsaW5lU2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQmFzZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLmJhc2VQcmljZSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IHJvdW5kVG9Ud28oZGF0YVtpXS5iYXNlUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXJ2aWNlTGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLmJhc2VQcmljZSArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1CYXNlUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b2F1dG8gPSBcImF1dG8gYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVsnZGlzdFByaWNlJ10ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJpY2VJbmRleCBpbiBkYXRhW2ldWydkaXN0UHJpY2UnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldWydkaXN0UHJpY2UnXS5oYXNPd25Qcm9wZXJ0eShwcmljZUluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VFbGVtZW50ID0gZGF0YVtpXVsnZGlzdFByaWNlJ11bcHJpY2VJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZGxpbmVTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoZWFkTGluZUh0bWwgPSBsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UgKyAnPGJyPicgKyBwcmljZUVsZW1lbnRbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZUluZGV4ID09PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZURpc3RQcmljZSA9ICQoXCIuaGVhZGxpbmUtZGlzdC1wcmljZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpIZWFkbGluZURpc3RQcmljZS5odG1sKGhlYWRMaW5lSHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpLmxhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lLWRpc3QtcHJpY2UgZ3JpZC1pdGVtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSGVhZGxpbmUuaW5uZXJIVE1MID0gaGVhZExpbmVIdG1sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZnRlcihhZGRIZWFkbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2VFbGVtZW50WydraWxvbWV0ZXJQcmljZSddICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gcm91bmRUb1R3byhwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXJ2aWNlTGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtRGlzdFByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2F1dG8gKz0gXCIgYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRsaW5lU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGlzdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLmRpc3RQcmljZVswXVsna2lsb21ldGVyUHJpY2UnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtRGlzdFByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50aW1lUHJpY2UgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1UaW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpbWVQcmljZSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLnRpbWVQcmljZSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXJ2aWNlTGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcuJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIgXCIgKyBjdXJyZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS50aW1lUHJpY2UgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtVGltZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50ID0gcm93Q291bnQgPT09IFwicm93LWV2ZW5cIiA/IFwicm93LXVuZXZlblwiIDogXCJyb3ctZXZlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2F1dG8gKz0gXCIgYXV0b1wiO1xuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcqJykucmVtb3ZlKCcuaGVhZGxpbmUtdGltZS1wcmljZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICQoJy50YXJpZmYtb3V0cHV0JykuY3NzKCdncmlkLXRlbXBsYXRlLWNvbHVtbnMnLCBhdXRvYXV0byk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ0cmF2ZWxDb25zdGFudHNHZXJtYW4iLCJEVU1NWV9JTlBVVCIsIkRVTU1ZX0lOUFVUX1RJTUUiLCJIRUFETElORV9ESVNUIiwiSEVBRExJTkVfVElNRSIsIkhFQURMSU5FX0JBU0VfUFJJQ0UiLCJIRUFETElORV9ESVNUX1BSSUNFIiwiSEVBRExJTkVfVElNRV9QUklDRSIsIkVSUk9SX09VVF9PRl9CT1VORFMiLCJFUlJPUl9GQUxTRV9BRERSRVNTIiwiRVJST1IiLCJTVEFSVF9TRUFSQ0giLCJSRVNFVCIsIlBPU0lUSU9OX09VVF9PRl9CT1VORFMiLCJOT05FIiwidHJhdmVsQ29uc3RhbnRzRW5nbGlzaCIsImxhbmdDb25zdGFudHMiLCJjdXJyZW5jeSIsIndpbmRvdyIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibGFuZ3VhZ2UiLCJzZXJ2aWNlTGFuZyIsIm5hdmlnYXRvciIsInVzZXJMYW5ndWFnZSIsImV4dGVuZCIsImRpc3BsYXlUeXBlIiwiZmluZFRhcmlmZnMiLCJyb3VuZFRvVHdvIiwibnVtIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJ1cmwiLCJzZXR0aW5nSWQiLCJhamF4IiwiZG9uZSIsImRhdGEiLCJwYXJlbnQiLCJoaWRlRGlzcGxheSIsImNzcyIsInJvd0NvdW50Iiwib2JqSGVhZGxpbmVEaXN0UHJpY2UiLCJodG1sIiwib2JqSGVhZGxpbmVUaW1lUHJpY2UiLCJvYmpIZWFkbGluZUJhc2VQcmljZSIsImhlYWRsaW5lU2V0IiwiaSIsImhhc093blByb3BlcnR5IiwiaXRlbU5hbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaXRlbUJhc2VQcmljZSIsImJhc2VQcmljZSIsInJlc3BvbnNlVGFyaWZmIiwicmVwbGFjZSIsImF1dG9hdXRvIiwibGVuZ3RoIiwicHJpY2VJbmRleCIsInByaWNlRWxlbWVudCIsImhlYWRMaW5lSHRtbCIsImxhc3QiLCJhZGRIZWFkbGluZSIsImFmdGVyIiwiaXRlbURpc3RQcmljZSIsImRpc3RQcmljZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJ0aW1lUHJpY2UiLCJpdGVtVGltZVByaWNlIiwicmVtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==