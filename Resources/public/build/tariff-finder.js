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
                if (window.displayGrid === "1") {
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
                } else {
                    let elementRow = document.createElement('tr');
                    elementRow.innerHTML = "<th>" + i + "</th>" + "<td>" + data[i].basePrice + " " + currency + "</td>" + "<td>" + data[i].distPrice + " " + currency + "</td>" + data[i].timePrice + " " + currency + "</td>";
                    parent.append(elementRow);
                }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdHJhdmVsLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtY29uc3RhbnQtaTE4bi1lbi5qcyJdLCJuYW1lcyI6WyJsYW5nQ29uc3RhbnRzIiwib2JqU2V0dGluZ3MiLCJ3aW5kb3ciLCJjdXJyZW5jeSIsIiQiLCJkb2N1bWVudCIsInJlYWR5IiwibGFuZ3VhZ2UiLCJzZXJ2aWNlTGFuZyIsIm5hdmlnYXRvciIsInVzZXJMYW5ndWFnZSIsImV4dGVuZCIsInRyYXZlbENvbnN0YW50c0VuZ2xpc2giLCJ0cmF2ZWxDb25zdGFudHNHZXJtYW4iLCJkaXNwbGF5VHlwZSIsImZpbmRUYXJpZmZzIiwicm91bmRUb1R3byIsIm51bSIsInBhcnNlRmxvYXQiLCJ0b0ZpeGVkIiwidXJsIiwic2V0dGluZ0lkIiwiYWpheCIsImRvbmUiLCJkYXRhIiwicGFyZW50IiwiaGlkZURpc3BsYXkiLCJkaXNwbGF5R3JpZCIsImNzcyIsInJvd0NvdW50Iiwib2JqSGVhZGxpbmVEaXN0UHJpY2UiLCJodG1sIiwiSEVBRExJTkVfRElTVF9QUklDRSIsIm9iakhlYWRsaW5lVGltZVByaWNlIiwiSEVBRExJTkVfVElNRV9QUklDRSIsIm9iakhlYWRsaW5lQmFzZVByaWNlIiwiSEVBRExJTkVfQkFTRV9QUklDRSIsImhlYWRsaW5lU2V0IiwiaSIsImhhc093blByb3BlcnR5IiwiaXRlbU5hbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaXRlbUJhc2VQcmljZSIsImJhc2VQcmljZSIsInJlc3BvbnNlVGFyaWZmIiwicmVwbGFjZSIsImF1dG9hdXRvIiwibGVuZ3RoIiwicHJpY2VJbmRleCIsInByaWNlRWxlbWVudCIsImhlYWRMaW5lSHRtbCIsImxhc3QiLCJhZGRIZWFkbGluZSIsImFmdGVyIiwiaXRlbURpc3RQcmljZSIsImRpc3RQcmljZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJ0aW1lUHJpY2UiLCJpdGVtVGltZVByaWNlIiwicmVtb3ZlIiwiZWxlbWVudFJvdyIsIkRVTU1ZX0lOUFVUIiwiSEVBRExJTkVfRElTVCIsIkhFQURMSU5FX1RJTUUiLCJFUlJPUl9PVVRfT0ZfQk9VTkRTIiwiRVJST1JfRkFMU0VfQUREUkVTUyIsIkVSUk9SIiwiU1RBUlRfU0VBUkNIIiwiUE9TSVRJT05fT1VUX09GX0JPVU5EUyIsIk5PTkUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE1BQU1BLGdCQUFnQixFQUF0QjtBQUNBLE1BQU1DLGNBQWND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RWhDQyxpQkFBZSxVQUZpQjtBQUdoQ0MsaUJBQWUsTUFIaUI7QUFJaENoQyx1QkFBb0IsWUFKWTtBQUtoQ0osdUJBQW9CLFlBTFk7QUFNaENFLHVCQUFvQixhQU5ZO0FBT2hDbUMsdUJBQXFCLDBCQVBXO0FBUWhDQyx1QkFBcUIsbUJBUlc7QUFTaENDLFNBQU0sT0FUMEI7QUFVaENDLGdCQUFjLFdBVmtCO0FBV2hDQywwQkFBd0Isd0NBWFE7QUFZaENDLFFBQU0sRUFaMEIsQ0FZdkI7QUFadUIsQ0FBN0IsQyxDQWFKLDZCIiwiZmlsZSI6InRhcmlmZi1maW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGFyaWZmLWZpbmRlci5qc1wiKTtcbiIsImltcG9ydCB7dHJhdmVsQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vdHJhdmVsLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dHJhdmVsQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi90cmF2ZWwtY29uc3RhbnQtaTE4bi1kZVwiO1xuY29uc3QgbGFuZ0NvbnN0YW50cyA9IHt9O1xuY29uc3Qgb2JqU2V0dGluZ3MgPSB3aW5kb3cub2JqU2V0dGluZ3M7XG5jb25zdCBjdXJyZW5jeSA9IHdpbmRvdy5jdXJyZW5jeSB8fCAn4oKsJztcblxuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxhbmd1YWdlID0gd2luZG93LnNlcnZpY2VMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaClcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiZGVcIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0cmF2ZWxDb25zdGFudHNHZXJtYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCk7XG4gICAgfVxuICAgIGlmICghb2JqU2V0dGluZ3MuZGlzcGxheVR5cGUpIHtcbiAgICAgICAgZmluZFRhcmlmZnMoKTtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIHJvdW5kVG9Ud28obnVtKSB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT0gXCJmbG9hdFwiKSB7XG4gICAgICAgIG51bSA9cGFyc2VGbG9hdChudW0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVtLnRvRml4ZWQoMik7XG59XG4vKipcbiAqIGNhbGxzIHRhcmlmZlNlcnZpY2UgdG8gZmV0Y2ggaW5mb3JtYXRpb25zIGFuZCBwcmljaW5nIGFib3V0IHRoZSBzZXQgdGFyaWZmcyBhbmQgc2hvd3MgdGhlbVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBmaW5kVGFyaWZmcygpIHtcbiAgICBsZXQgdXJsID0gXCJjb240Z2lzL3RhcmlmZlNlcnZpY2UvXCIgKyB3aW5kb3cuc2V0dGluZ0lkO1xuICAgICQuYWpheCh7dXJsOnVybH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi50YXJpZmYtb3V0cHV0XCIpO1xuICAgICAgICAgICAgaWYgKG9ialNldHRpbmdzLmhpZGVEaXNwbGF5ID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnZ3JpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJvd0NvdW50ID0gXCJyb3ctZXZlblwiO1xuXG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZURpc3RQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVUaW1lUHJpY2UgPSAkKFwiLmhlYWRsaW5lLXRpbWUtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZVRpbWVQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfVElNRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVCYXNlUHJpY2UgPSAkKFwiLmhlYWRsaW5lLWJhc2UtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZUJhc2VQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfQkFTRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgaGVhZGxpbmVTZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZGlzcGxheUdyaWQgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUJhc2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0uYmFzZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IHJvdW5kVG9Ud28oZGF0YVtpXS5iYXNlUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQmFzZVByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmICsgXCIgXCIgKyBjdXJyZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS5iYXNlUHJpY2UgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtQmFzZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvYXV0byA9IFwiYXV0byBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVsnZGlzdFByaWNlJ10ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByaWNlSW5kZXggaW4gZGF0YVtpXVsnZGlzdFByaWNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bJ2Rpc3RQcmljZSddLmhhc093blByb3BlcnR5KHByaWNlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VFbGVtZW50ID0gZGF0YVtpXVsnZGlzdFByaWNlJ11bcHJpY2VJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhlYWRsaW5lU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRMaW5lSHRtbCA9IGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSArICc8YnI+JyArIHByaWNlRWxlbWVudFsnbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZUluZGV4ID09PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakhlYWRsaW5lRGlzdFByaWNlLmh0bWwoaGVhZExpbmVIdG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIikubGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSGVhZGxpbmUuY2xhc3NOYW1lID0gXCJoZWFkbGluZS1kaXN0LXByaWNlIGdyaWQtaXRlbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5pbm5lckhUTUwgPSBoZWFkTGluZUh0bWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZnRlcihhZGRIZWFkbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSByb3VuZFRvVHdvKHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXJ2aWNlTGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtRGlzdFByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9hdXRvICs9IFwiIGF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkbGluZVNldCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGFbaV0uZGlzdFByaWNlWzBdWydraWxvbWV0ZXJQcmljZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIFwiICsgY3VycmVuY3k7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50aW1lUHJpY2UgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtVGltZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0udGltZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLnRpbWVQcmljZSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLicpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIgXCIgKyBjdXJyZW5jeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS50aW1lUHJpY2UgKyBcIiBcIiArIGN1cnJlbmN5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtVGltZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDb3VudCA9IHJvd0NvdW50ID09PSBcInJvdy1ldmVuXCIgPyBcInJvdy11bmV2ZW5cIiA6IFwicm93LWV2ZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyonKS5yZW1vdmUoJy5oZWFkbGluZS10aW1lLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGFyaWZmLW91dHB1dCcpLmNzcygnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJywgYXV0b2F1dG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJvdy5pbm5lckhUTUwgPSBcIjx0aD5cIiArIGkgKyBcIjwvdGg+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5iYXNlUHJpY2UgKyBcIiBcIiArIGN1cnJlbmN5KyBcIjwvdGQ+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5kaXN0UHJpY2UgKyBcIiBcIiArIGN1cnJlbmN5KyBcIjwvdGQ+XCIgKyBkYXRhW2ldLnRpbWVQcmljZSArXCIgXCIgKyBjdXJyZW5jeSsgXCI8L3RkPlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChlbGVtZW50Um93KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgIHZhciB0cmF2ZWxDb25zdGFudHNHZXJtYW4gPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdTdHJhw59lLCBPcnQgb2RlciBQTFogZWluZ2ViZW4gLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRW50ZmVybnVuZycsXG4gICAgSEVBRExJTkVfVElNRTogJ0RhdWVyJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOiAnR3J1bmRwcmVpcycsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTogJ1ByZWlzIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6ICdQcmVpcyAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkcmVzc2UgYXXDn2VyaGFsYiBkZXMgVGFyaWZnZWJpZXRzJyxcbiAgICBFUlJPUl9GQUxTRV9BRERSRVNTOiAnQWRyZXNzZSBuaWNodCBnZWZ1bmRlbicsXG4gICAgRVJST1I6J0ZlaGxlcicsXG4gICAgU1RBUlRfU0VBUkNIOiAnQmVyZWNobmVuJyxcbiAgICBQT1NJVElPTl9PVVRfT0ZfQk9VTkRTOiBcIklocmUgYWt0dWVsbGUgUG9zaXRpb24gaXN0IGF1w59lcmhhbGIgZGVzIFRhcmlmc2dlYmlldHNcIixcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCB2YXIgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCA9IHtcbiAgICBEVU1NWV9JTlBVVDogJ1N0cmVldCwgY2l0eSBvciBlbnRlciBwb3N0YWwgY29kZSAuLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdEaXN0YW5jZScsXG4gICAgSEVBRExJTkVfVElNRTogJ1RpbWUnLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6J0Jhc2UgcHJpY2UnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6J1ByaWNlIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6J1ByaWNlIC8gbWluJyxcbiAgICBFUlJPUl9PVVRfT0ZfQk9VTkRTOiAnQWRkcmVzcyBpcyBvdXQgb2YgYm91bmRzJyxcbiAgICBFUlJPUl9GQUxTRV9BRERSRVNTOiAnQWRkcmVzcyBub3QgZm91bmQnLFxuICAgIEVSUk9SOidFcnJvcicsXG4gICAgU1RBUlRfU0VBUkNIOiAnQ2FsY3VsYXRlJyxcbiAgICBQT1NJVElPTl9PVVRfT0ZfQk9VTkRTOiBcIllvdXIgY3VycmVudCBwb3NpdGlvbiBpcyBvdXQgb2YgYm91bmRzXCIsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iXSwic291cmNlUm9vdCI6IiJ9