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
    if (!objSettings.hideDisplay) {
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
                        itemBasePrice.innerHTML = responseTariff + " €";
                    } else {
                        itemBasePrice.innerHTML = data[i].basePrice + '€';
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
                                    itemDistPrice.innerHTML = responseTariff + " €";
                                } else {
                                    itemDistPrice.innerHTML = priceElement['kilometerPrice'] + '€';
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
                        itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
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
                            itemTimePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                        } else {
                            itemTimePrice.innerHTML = data[i].timePrice + '€';
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
                    elementRow.innerHTML = "<th>" + i + "</th>" + "<td>" + data[i].basePrice + "€</td>" + "<td>" + data[i].distPrice + "€</td>" + "<td>" + data[i].timePrice + "€</td>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdHJhdmVsLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtY29uc3RhbnQtaTE4bi1lbi5qcyJdLCJuYW1lcyI6WyJsYW5nQ29uc3RhbnRzIiwib2JqU2V0dGluZ3MiLCJ3aW5kb3ciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxhbmd1YWdlIiwic2VydmljZUxhbmciLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJ0cmF2ZWxDb25zdGFudHNFbmdsaXNoIiwidHJhdmVsQ29uc3RhbnRzR2VybWFuIiwiaGlkZURpc3BsYXkiLCJmaW5kVGFyaWZmcyIsInJvdW5kVG9Ud28iLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInVybCIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcmVudCIsImRpc3BsYXlHcmlkIiwiY3NzIiwicm93Q291bnQiLCJvYmpIZWFkbGluZURpc3RQcmljZSIsImh0bWwiLCJIRUFETElORV9ESVNUX1BSSUNFIiwib2JqSGVhZGxpbmVUaW1lUHJpY2UiLCJIRUFETElORV9USU1FX1BSSUNFIiwib2JqSGVhZGxpbmVCYXNlUHJpY2UiLCJIRUFETElORV9CQVNFX1BSSUNFIiwiaGVhZGxpbmVTZXQiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJpdGVtTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJpdGVtQmFzZVByaWNlIiwiYmFzZVByaWNlIiwicmVzcG9uc2VUYXJpZmYiLCJyZXBsYWNlIiwiYXV0b2F1dG8iLCJsZW5ndGgiLCJwcmljZUluZGV4IiwicHJpY2VFbGVtZW50IiwiaGVhZExpbmVIdG1sIiwibGFzdCIsImFkZEhlYWRsaW5lIiwiYWZ0ZXIiLCJpdGVtRGlzdFByaWNlIiwiZGlzdFByaWNlIiwiaW5kZXhEZWNpbWFsIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsInRpbWVQcmljZSIsIml0ZW1UaW1lUHJpY2UiLCJyZW1vdmUiLCJlbGVtZW50Um93IiwiRFVNTVlfSU5QVVQiLCJIRUFETElORV9ESVNUIiwiSEVBRExJTkVfVElNRSIsIkVSUk9SX09VVF9PRl9CT1VORFMiLCJFUlJPUl9GQUxTRV9BRERSRVNTIiwiRVJST1IiLCJTVEFSVF9TRUFSQ0giLCJQT1NJVElPTl9PVVRfT0ZfQk9VTkRTIiwiTk9ORSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsZ0JBQWdCLEVBQXRCO0FBQ0EsTUFBTUMsY0FBY0MsT0FBT0QsV0FBM0I7O0FBRUE7Ozs7QUFJ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LCJmaWxlIjoidGFyaWZmLWZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzXCIpO1xuIiwiaW1wb3J0IHt0cmF2ZWxDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi90cmF2ZWwtY29uc3RhbnQtaTE4bi1lblwiO1xuaW1wb3J0IHt0cmF2ZWxDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL3RyYXZlbC1jb25zdGFudC1pMThuLWRlXCI7XG5jb25zdCBsYW5nQ29uc3RhbnRzID0ge307XG5jb25zdCBvYmpTZXR0aW5ncyA9IHdpbmRvdy5vYmpTZXR0aW5ncztcblxuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxhbmd1YWdlID0gd2luZG93LnNlcnZpY2VMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaClcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiZGVcIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0cmF2ZWxDb25zdGFudHNHZXJtYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCk7XG4gICAgfVxuICAgIGlmICghb2JqU2V0dGluZ3MuaGlkZURpc3BsYXkpIHtcbiAgICAgICAgZmluZFRhcmlmZnMoKTtcbiAgICB9XG59KTtcbmZ1bmN0aW9uIHJvdW5kVG9Ud28obnVtKSB7XG4gICAgaWYgKHR5cGVvZiBudW0gIT0gXCJmbG9hdFwiKSB7XG4gICAgICAgIG51bSA9cGFyc2VGbG9hdChudW0pO1xuICAgIH1cbiAgICByZXR1cm4gbnVtLnRvRml4ZWQoMik7XG59XG4vKipcbiAqIGNhbGxzIHRhcmlmZlNlcnZpY2UgdG8gZmV0Y2ggaW5mb3JtYXRpb25zIGFuZCBwcmljaW5nIGFib3V0IHRoZSBzZXQgdGFyaWZmcyBhbmQgc2hvd3MgdGhlbVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBmaW5kVGFyaWZmcygpIHtcbiAgICBsZXQgdXJsID0gXCJjb240Z2lzL3RhcmlmZlNlcnZpY2UvXCIgKyB3aW5kb3cuc2V0dGluZ0lkO1xuICAgICQuYWpheCh7dXJsOnVybH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi50YXJpZmYtb3V0cHV0XCIpO1xuICAgICAgICAgICAgaWYgKG9ialNldHRpbmdzLmhpZGVEaXNwbGF5ID09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnZ3JpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJvd0NvdW50ID0gXCJyb3ctZXZlblwiO1xuXG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZURpc3RQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVUaW1lUHJpY2UgPSAkKFwiLmhlYWRsaW5lLXRpbWUtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZVRpbWVQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfVElNRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVCYXNlUHJpY2UgPSAkKFwiLmhlYWRsaW5lLWJhc2UtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZUJhc2VQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfQkFTRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgaGVhZGxpbmVTZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZGlzcGxheUdyaWQgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUJhc2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0uYmFzZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IHJvdW5kVG9Ud28oZGF0YVtpXS5iYXNlUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQmFzZVByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtQmFzZVByaWNlLmlubmVySFRNTCA9IGRhdGFbaV0uYmFzZVByaWNlICsgJ+KCrCc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtQmFzZVByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1CYXNlUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF1dG9hdXRvID0gXCJhdXRvIGF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldWydkaXN0UHJpY2UnXS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgcHJpY2VJbmRleCBpbiBkYXRhW2ldWydkaXN0UHJpY2UnXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVsnZGlzdFByaWNlJ10uaGFzT3duUHJvcGVydHkocHJpY2VJbmRleCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcmljZUVsZW1lbnQgPSBkYXRhW2ldWydkaXN0UHJpY2UnXVtwcmljZUluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGVhZGxpbmVTZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZExpbmVIdG1sID0gbGFuZ0NvbnN0YW50cy5IRUFETElORV9ESVNUX1BSSUNFICsgJzxicj4nICsgcHJpY2VFbGVtZW50WyduYW1lJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlSW5kZXggPT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZURpc3RQcmljZSA9ICQoXCIuaGVhZGxpbmUtZGlzdC1wcmljZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChoZWFkTGluZUh0bWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmVudCA9ICQoXCIuaGVhZGxpbmUtZGlzdC1wcmljZVwiKS5sYXN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZGRIZWFkbGluZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lLWRpc3QtcHJpY2UgZ3JpZC1pdGVtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEhlYWRsaW5lLmlubmVySFRNTCA9IGhlYWRMaW5lSHRtbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFmdGVyKGFkZEhlYWRsaW5lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGlzdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2VFbGVtZW50WydraWxvbWV0ZXJQcmljZSddICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IHJvdW5kVG9Ud28ocHJpY2VFbGVtZW50WydraWxvbWV0ZXJQcmljZSddKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZiArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyAn4oKsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmVTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EaXN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLmRpc3RQcmljZVswXVsna2lsb21ldGVyUHJpY2UnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtRGlzdFByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpbWVQcmljZSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1UaW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50aW1lUHJpY2UgJSAxICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGFbaV0udGltZVByaWNlICsgXCIwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcuJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS50aW1lUHJpY2UgKyfigqwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtVGltZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDb3VudCA9IHJvd0NvdW50ID09PSBcInJvdy1ldmVuXCIgPyBcInJvdy11bmV2ZW5cIiA6IFwicm93LWV2ZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyonKS5yZW1vdmUoJy5oZWFkbGluZS10aW1lLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGFyaWZmLW91dHB1dCcpLmNzcygnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJywgYXV0b2F1dG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJvdy5pbm5lckhUTUwgPSBcIjx0aD5cIiArIGkgKyBcIjwvdGg+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5iYXNlUHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5kaXN0UHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIiArIGRhdGFbaV0udGltZVByaWNlICsgXCLigqw8L3RkPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGVsZW1lbnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRyYXZlbENvbnN0YW50c0dlcm1hbiA9IHtcbiAgICBEVU1NWV9JTlBVVDogJ1N0cmHDn2UsIE9ydCBvZGVyIFBMWiBlaW5nZWJlbiAuLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdFbnRmZXJudW5nJyxcbiAgICBIRUFETElORV9USU1FOiAnRGF1ZXInLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6ICdHcnVuZHByZWlzJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOiAnUHJlaXMgLyBrbScsXG4gICAgSEVBRExJTkVfVElNRV9QUklDRTogJ1ByZWlzIC8gbWluJyxcbiAgICBFUlJPUl9PVVRfT0ZfQk9VTkRTOiAnQWRyZXNzZSBhdcOfZXJoYWxiIGRlcyBUYXJpZmdlYmlldHMnLFxuICAgIEVSUk9SX0ZBTFNFX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuJyxcbiAgICBFUlJPUjonRmVobGVyJyxcbiAgICBTVEFSVF9TRUFSQ0g6ICdCZXJlY2huZW4nLFxuICAgIFBPU0lUSU9OX09VVF9PRl9CT1VORFM6IFwiSWhyZSBha3R1ZWxsZSBQb3NpdGlvbiBpc3QgYXXDn2VyaGFsYiBkZXMgVGFyaWZzZ2ViaWV0c1wiLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0IHZhciB0cmF2ZWxDb25zdGFudHNFbmdsaXNoID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnU3RyZWV0LCBjaXR5IG9yIGVudGVyIHBvc3RhbCBjb2RlIC4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0Rpc3RhbmNlJyxcbiAgICBIRUFETElORV9USU1FOiAnVGltZScsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTonQmFzZSBwcmljZScsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTonUHJpY2UgLyBrbScsXG4gICAgSEVBRExJTkVfVElNRV9QUklDRTonUHJpY2UgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZGRyZXNzIGlzIG91dCBvZiBib3VuZHMnLFxuICAgIEVSUk9SX0ZBTFNFX0FERFJFU1M6ICdBZGRyZXNzIG5vdCBmb3VuZCcsXG4gICAgRVJST1I6J0Vycm9yJyxcbiAgICBTVEFSVF9TRUFSQ0g6ICdDYWxjdWxhdGUnLFxuICAgIFBPU0lUSU9OX09VVF9PRl9CT1VORFM6IFwiWW91ciBjdXJyZW50IHBvc2l0aW9uIGlzIG91dCBvZiBib3VuZHNcIixcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiJdLCJzb3VyY2VSb290IjoiIn0=