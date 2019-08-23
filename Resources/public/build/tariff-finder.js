/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/tariff-finder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Resources/public/js/tariff-finder.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/tariff-finder.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-constant-i18n-en */ "./Resources/public/js/travel-constant-i18n-en.js");
/* harmony import */ var _travel_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-constant-i18n-de */ "./Resources/public/js/travel-constant-i18n-de.js");


const langConstants = {};
const objSettings = window.objSettings;
const currency = window.currency || '€';

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function () {
    let language = window.serviceLang || window.navigator.userLanguage || window.navigator.language;
    if (language === "en") {
        $.extend(langConstants, _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["travelConstantsEnglish"]);
    } else if (language === "de") {
        $.extend(langConstants, _travel_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__["travelConstantsGerman"]);
    } else {
        $.extend(langConstants, _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["travelConstantsEnglish"]);
    }
    if (!objSettings.displayType) {
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
    $.ajax({ url: url }).done(function (data) {
        let parent = $(".tariff-output");
        if (objSettings.hideDisplay == 0) {
            if (window.displayGrid === "1") {
                parent.css('display', 'grid');
            } else {
                parent.css('display', 'block');
            }
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

/***/ }),

/***/ "./Resources/public/js/travel-constant-i18n-de.js":
/*!********************************************************!*\
  !*** ./Resources/public/js/travel-constant-i18n-de.js ***!
  \********************************************************/
/*! exports provided: travelConstantsGerman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelConstantsGerman", function() { return travelConstantsGerman; });
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
  HEADLINE_DIST: 'Entfernung',
  HEADLINE_TIME: 'Dauer',
  HEADLINE_BASE_PRICE: 'Grundpreis',
  HEADLINE_DIST_PRICE: 'Preis / km',
  HEADLINE_TIME_PRICE: 'Preis / min',
  ERROR_OUT_OF_BOUNDS: 'Adresse außerhalb des Tarifgebiets',
  ERROR_FALSE_ADDRESS: 'Adresse nicht gefunden',
  ERROR: 'Fehler',
  START_SEARCH: 'Berechnen',
  POSITION_OUT_OF_BOUNDS: "Ihre aktuelle Position ist außerhalb des Tarifsgebiets",
  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "./Resources/public/js/travel-constant-i18n-en.js":
/*!********************************************************!*\
  !*** ./Resources/public/js/travel-constant-i18n-en.js ***!
  \********************************************************/
/*! exports provided: travelConstantsEnglish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelConstantsEnglish", function() { return travelConstantsEnglish; });
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
  HEADLINE_DIST: 'Distance',
  HEADLINE_TIME: 'Time',
  HEADLINE_BASE_PRICE: 'Base price',
  HEADLINE_DIST_PRICE: 'Price / km',
  HEADLINE_TIME_PRICE: 'Price / min',
  ERROR_OUT_OF_BOUNDS: 'Address is out of bounds',
  ERROR_FALSE_ADDRESS: 'Address not found',
  ERROR: 'Error',
  START_SEARCH: 'Calculate',
  POSITION_OUT_OF_BOUNDS: "Your current position is out of bounds",
  NONE: '' // last line
}; // end of "css constants" ---

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdHJhdmVsLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtY29uc3RhbnQtaTE4bi1lbi5qcyJdLCJuYW1lcyI6WyJsYW5nQ29uc3RhbnRzIiwib2JqU2V0dGluZ3MiLCJ3aW5kb3ciLCJjdXJyZW5jeSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibGFuZ3VhZ2UiLCJzZXJ2aWNlTGFuZyIsIm5hdmlnYXRvciIsInVzZXJMYW5ndWFnZSIsImV4dGVuZCIsInRyYXZlbENvbnN0YW50c0VuZ2xpc2giLCJ0cmF2ZWxDb25zdGFudHNHZXJtYW4iLCJkaXNwbGF5VHlwZSIsImZpbmRUYXJpZmZzIiwicm91bmRUb1R3byIsIm51bSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwidXJsIiwic2V0dGluZ0lkIiwiYWpheCIsImRvbmUiLCJkYXRhIiwicGFyZW50IiwiaGlkZURpc3BsYXkiLCJkaXNwbGF5R3JpZCIsImNzcyIsInJvd0NvdW50Iiwib2JqSGVhZGxpbmVEaXN0UHJpY2UiLCJodG1sIiwiSEVBRExJTkVfRElTVF9QUklDRSIsIm9iakhlYWRsaW5lVGltZVByaWNlIiwiSEVBRExJTkVfVElNRV9QUklDRSIsIm9iakhlYWRsaW5lQmFzZVByaWNlIiwiSEVBRExJTkVfQkFTRV9QUklDRSIsImhlYWRsaW5lU2V0IiwiaSIsImhhc093blByb3BlcnR5IiwiaXRlbU5hbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaXRlbUJhc2VQcmljZSIsImJhc2VQcmljZSIsInJlc3BvbnNlVGFyaWZmIiwicmVwbGFjZSIsImF1dG9hdXRvIiwibGVuZ3RoIiwicHJpY2VJbmRleCIsInByaWNlRWxlbWVudCIsImhlYWRMaW5lSHRtbCIsImxhc3QiLCJhZGRIZWFkbGluZSIsImFmdGVyIiwiaXRlbURpc3RQcmljZSIsImRpc3RQcmljZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJ0aW1lUHJpY2UiLCJpdGVtVGltZVByaWNlIiwicmVtb3ZlIiwiRFVNTVlfSU5QVVQiLCJIRUFETElORV9ESVNUIiwiSEVBRExJTkVfVElNRSIsIkVSUk9SX09VVF9PRl9CT1VORFMiLCJFUlJPUl9GQUxTRV9BRERSRVNTIiwiRVJST1IiLCJTVEFSVF9TRUFSQ0giLCJQT1NJVElPTl9PVVRfT0ZfQk9VTkRTIiwiTk9ORSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsZ0JBQWdCLEVBQXRCO0FBQ0EsTUFBTUMsY0FBY0MsT0FBT0QsV0FBM0I7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QixRQUFqRDtBQUNIO0FBQ0o7QUFDSixLQW5ITDtBQXFISCxDOzs7Ozs7Ozs7Ozs7QUMxSkQ7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdhOztBQUViOzs7O0FBR1EsSUFBSXBDLHdCQUF3QjtBQUNoQ29ELGVBQWEsbUNBRG1CO0FBRWhDQyxpQkFBZSxZQUZpQjtBQUdoQ0MsaUJBQWUsT0FIaUI7QUFJaEMvQix1QkFBcUIsWUFKVztBQUtoQ0osdUJBQXFCLFlBTFc7QUFNaENFLHVCQUFxQixhQU5XO0FBT2hDa0MsdUJBQXFCLG9DQVBXO0FBUWhDQyx1QkFBcUIsd0JBUlc7QUFTaENDLFNBQU0sUUFUMEI7QUFVaENDLGdCQUFjLFdBVmtCO0FBV2hDQywwQkFBd0Isd0RBWFE7QUFZaENDLFFBQU0sRUFaMEIsQ0FZdkI7QUFadUIsQ0FBNUIsQyxDQWFMLDZCOzs7Ozs7Ozs7Ozs7QUM3Qkg7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdhOztBQUViOzs7O0FBR08sSUFBSTdELHlCQUF5QjtBQUNoQ3FELGVBQWEsdUNBRG1CO0FBRWhDQyxpQkFBZSxVQUZpQjtBQUdoQ0MsaUJBQWUsTUFIaUI7QUFJaEMvQix1QkFBb0IsWUFKWTtBQUtoQ0osdUJBQW9CLFlBTFk7QUFNaENFLHVCQUFvQixhQU5ZO0FBT2hDa0MsdUJBQXFCLDBCQVBXO0FBUWhDQyx1QkFBcUIsbUJBUlc7QUFTaENDLFNBQU0sT0FUMEI7QUFVaENDLGdCQUFjLFdBVmtCO0FBV2hDQywwQkFBd0Isd0NBWFE7QUFZaENDLFFBQU0sRUFaMEIsQ0FZdkI7QUFadUIsQ0FBN0IsQyxDQWFKLDZCIiwiZmlsZSI6InRhcmlmZi1maW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGFyaWZmLWZpbmRlci5qc1wiKTtcbiIsImltcG9ydCB7dHJhdmVsQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vdHJhdmVsLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dHJhdmVsQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi90cmF2ZWwtY29uc3RhbnQtaTE4bi1kZVwiO1xuY29uc3QgbGFuZ0NvbnN0YW50cyA9IHt9O1xuY29uc3Qgb2JqU2V0dGluZ3MgPSB3aW5kb3cub2JqU2V0dGluZ3M7XG5jb25zdCBjdXJyZW5jeSA9IHdpbmRvdy5jdXJyZW5jeSB8fCAn4oKsJztcblxuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxhbmd1YWdlID0gd2luZG93LnNlcnZpY2VMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaClcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiZGVcIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0cmF2ZWxDb25zdGFudHNHZXJtYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCk7XG4gICAgfVxuICAgIGlmICghb2JqU2V0dGluZ3MuZGlzcGxheVR5cGUpIHtcbiAgICAgICAgZmluZFRhcmlmZnMoKTtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIHJvdW5kVG9Ud28obnVtKSB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT0gXCJmbG9hdFwiKSB7XG4gICAgICAgIG51bSA9cGFyc2VGbG9hdChudW0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVtLnRvRml4ZWQoMik7XG59XG4vKipcbiAqIGNhbGxzIHRhcmlmZlNlcnZpY2UgdG8gZmV0Y2ggaW5mb3JtYXRpb25zIGFuZCBwcmljaW5nIGFib3V0IHRoZSBzZXQgdGFyaWZmcyBhbmQgc2hvd3MgdGhlbVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBmaW5kVGFyaWZmcygpIHtcbiAgICBsZXQgdXJsID0gXCJjb240Z2lzL3RhcmlmZlNlcnZpY2UvXCIgKyB3aW5kb3cuc2V0dGluZ0lkO1xuICAgICQuYWpheCh7dXJsOnVybH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi50YXJpZmYtb3V0cHV0XCIpO1xuICAgICAgICAgICAgaWYgKG9ialNldHRpbmdzLmhpZGVEaXNwbGF5ID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnZ3JpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJvd0NvdW50ID0gXCJyb3ctZXZlblwiO1xuXG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZURpc3RQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVUaW1lUHJpY2UgPSAkKFwiLmhlYWRsaW5lLXRpbWUtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZVRpbWVQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfVElNRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVCYXNlUHJpY2UgPSAkKFwiLmhlYWRsaW5lLWJhc2UtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZUJhc2VQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfQkFTRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgaGVhZGxpbmVTZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1CYXNlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0uYmFzZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gcm91bmRUb1R3byhkYXRhW2ldLmJhc2VQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZiArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQmFzZVByaWNlLmlubmVySFRNTCA9IGRhdGFbaV0uYmFzZVByaWNlICsgXCIgXCIgKyBjdXJyZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpdGVtQmFzZVByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbUJhc2VQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhdXRvYXV0byA9IFwiYXV0byBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldWydkaXN0UHJpY2UnXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcmljZUluZGV4IGluIGRhdGFbaV1bJ2Rpc3RQcmljZSddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bJ2Rpc3RQcmljZSddLmhhc093blByb3BlcnR5KHByaWNlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmljZUVsZW1lbnQgPSBkYXRhW2ldWydkaXN0UHJpY2UnXVtwcmljZUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoZWFkbGluZVNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRMaW5lSHRtbCA9IGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSArICc8YnI+JyArIHByaWNlRWxlbWVudFsnbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlSW5kZXggPT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lRGlzdFByaWNlID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakhlYWRsaW5lRGlzdFByaWNlLmh0bWwoaGVhZExpbmVIdG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIikubGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmUtZGlzdC1wcmljZSBncmlkLWl0ZW1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5pbm5lckhUTUwgPSBoZWFkTGluZUh0bWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFmdGVyKGFkZEhlYWRsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGlzdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gJSAxICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSByb3VuZFRvVHdvKHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZiArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmlubmVySFRNTCA9IHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1EaXN0UHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmVTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EaXN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGFbaV0uZGlzdFByaWNlWzBdWydraWxvbWV0ZXJQcmljZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1EaXN0UHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpbWVQcmljZSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVRpbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0udGltZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGFbaV0udGltZVByaWNlICsgXCIwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4RGVjaW1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJy4nKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLnRpbWVQcmljZSArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1UaW1lUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCA9PT0gXCJyb3ctZXZlblwiID8gXCJyb3ctdW5ldmVuXCIgOiBcInJvdy1ldmVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyonKS5yZW1vdmUoJy5oZWFkbGluZS10aW1lLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJCgnLnRhcmlmZi1vdXRwdXQnKS5jc3MoJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsIGF1dG9hdXRvKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdHJhdmVsQ29uc3RhbnRzR2VybWFuID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnU3RyYcOfZSwgT3J0IG9kZXIgUExaIGVpbmdlYmVuIC4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0VudGZlcm51bmcnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdEYXVlcicsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTogJ0dydW5kcHJlaXMnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6ICdQcmVpcyAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOiAnUHJlaXMgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZHJlc3NlIGF1w59lcmhhbGIgZGVzIFRhcmlmZ2ViaWV0cycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4nLFxuICAgIEVSUk9SOidGZWhsZXInLFxuICAgIFNUQVJUX1NFQVJDSDogJ0JlcmVjaG5lbicsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJJaHJlIGFrdHVlbGxlIFBvc2l0aW9uIGlzdCBhdcOfZXJoYWxiIGRlcyBUYXJpZnNnZWJpZXRzXCIsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgdmFyIHRyYXZlbENvbnN0YW50c0VuZ2xpc2ggPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdTdHJlZXQsIGNpdHkgb3IgZW50ZXIgcG9zdGFsIGNvZGUgLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRGlzdGFuY2UnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdUaW1lJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOidCYXNlIHByaWNlJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOidQcmljZSAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOidQcmljZSAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kJyxcbiAgICBFUlJPUjonRXJyb3InLFxuICAgIFNUQVJUX1NFQVJDSDogJ0NhbGN1bGF0ZScsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJZb3VyIGN1cnJlbnQgcG9zaXRpb24gaXMgb3V0IG9mIGJvdW5kc1wiLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIl0sInNvdXJjZVJvb3QiOiIifQ==