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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdHJhdmVsLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtY29uc3RhbnQtaTE4bi1lbi5qcyJdLCJuYW1lcyI6WyJsYW5nQ29uc3RhbnRzIiwib2JqU2V0dGluZ3MiLCJ3aW5kb3ciLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxhbmd1YWdlIiwic2VydmljZUxhbmciLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJ0cmF2ZWxDb25zdGFudHNFbmdsaXNoIiwidHJhdmVsQ29uc3RhbnRzR2VybWFuIiwiZGlzcGxheVR5cGUiLCJmaW5kVGFyaWZmcyIsInJvdW5kVG9Ud28iLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInVybCIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcmVudCIsImhpZGVEaXNwbGF5IiwiZGlzcGxheUdyaWQiLCJjc3MiLCJyb3dDb3VudCIsIm9iakhlYWRsaW5lRGlzdFByaWNlIiwiaHRtbCIsIkhFQURMSU5FX0RJU1RfUFJJQ0UiLCJvYmpIZWFkbGluZVRpbWVQcmljZSIsIkhFQURMSU5FX1RJTUVfUFJJQ0UiLCJvYmpIZWFkbGluZUJhc2VQcmljZSIsIkhFQURMSU5FX0JBU0VfUFJJQ0UiLCJoZWFkbGluZVNldCIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsIml0ZW1OYW1lIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImFwcGVuZCIsIml0ZW1CYXNlUHJpY2UiLCJiYXNlUHJpY2UiLCJyZXNwb25zZVRhcmlmZiIsInJlcGxhY2UiLCJhdXRvYXV0byIsImxlbmd0aCIsInByaWNlSW5kZXgiLCJwcmljZUVsZW1lbnQiLCJoZWFkTGluZUh0bWwiLCJsYXN0IiwiYWRkSGVhZGxpbmUiLCJhZnRlciIsIml0ZW1EaXN0UHJpY2UiLCJkaXN0UHJpY2UiLCJpbmRleERlY2ltYWwiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwidGltZVByaWNlIiwiaXRlbVRpbWVQcmljZSIsInJlbW92ZSIsImVsZW1lbnRSb3ciLCJEVU1NWV9JTlBVVCIsIkhFQURMSU5FX0RJU1QiLCJIRUFETElORV9USU1FIiwiRVJST1JfT1VUX09GX0JPVU5EUyIsIkVSUk9SX0ZBTFNFX0FERFJFU1MiLCJFUlJPUiIsIlNUQVJUX1NFQVJDSCIsIlBPU0lUSU9OX09VVF9PRl9CT1VORFMiLCJOT05FIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNQSxnQkFBZ0IsRUFBdEI7QUFDQSxNQUFNQyxjQUFjQyxPQUFPRCxXQUEz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Q0FBN0IsQyxDQWFKLDZCIiwiZmlsZSI6InRhcmlmZi1maW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGFyaWZmLWZpbmRlci5qc1wiKTtcbiIsImltcG9ydCB7dHJhdmVsQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vdHJhdmVsLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dHJhdmVsQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi90cmF2ZWwtY29uc3RhbnQtaTE4bi1kZVwiO1xuY29uc3QgbGFuZ0NvbnN0YW50cyA9IHt9O1xuY29uc3Qgb2JqU2V0dGluZ3MgPSB3aW5kb3cub2JqU2V0dGluZ3M7XG5cbi8qKlxuICogSW5pdGlhbCBmdW5jdGlvbiB0byBlbmFibGUgdXNlci1pbnB1dCB0byB0aGUgZ3VpXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGxldCBsYW5ndWFnZSA9IHdpbmRvdy5zZXJ2aWNlTGFuZyB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlO1xuICAgIGlmIChsYW5ndWFnZSA9PT0gXCJlblwiKSB7XG4gICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRyYXZlbENvbnN0YW50c0VuZ2xpc2gpXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhbmd1YWdlID09PSBcImRlXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzR2VybWFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRyYXZlbENvbnN0YW50c0VuZ2xpc2gpO1xuICAgIH1cbiAgICBpZiAoIW9ialNldHRpbmdzLmRpc3BsYXlUeXBlKSB7XG4gICAgICAgIGZpbmRUYXJpZmZzKCk7XG4gICAgfVxufSk7XG5mdW5jdGlvbiByb3VuZFRvVHdvKG51bSkge1xuICAgIGlmICh0eXBlb2YgbnVtICE9IFwiZmxvYXRcIikge1xuICAgICAgICBudW0gPXBhcnNlRmxvYXQobnVtKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bS50b0ZpeGVkKDIpO1xufVxuLyoqXG4gKiBjYWxscyB0YXJpZmZTZXJ2aWNlIHRvIGZldGNoIGluZm9ybWF0aW9ucyBhbmQgcHJpY2luZyBhYm91dCB0aGUgc2V0IHRhcmlmZnMgYW5kIHNob3dzIHRoZW1cbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuZnVuY3Rpb24gZmluZFRhcmlmZnMoKSB7XG4gICAgbGV0IHVybCA9IFwiY29uNGdpcy90YXJpZmZTZXJ2aWNlL1wiICsgd2luZG93LnNldHRpbmdJZDtcbiAgICAkLmFqYXgoe3VybDp1cmx9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9ICQoXCIudGFyaWZmLW91dHB1dFwiKTtcbiAgICAgICAgICAgIGlmIChvYmpTZXR0aW5ncy5oaWRlRGlzcGxheSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5kaXNwbGF5R3JpZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2dyaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByb3dDb3VudCA9IFwicm93LWV2ZW5cIjtcblxuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lRGlzdFByaWNlID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lVGltZVByaWNlID0gJChcIi5oZWFkbGluZS10aW1lLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVUaW1lUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX1RJTUVfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lQmFzZVByaWNlID0gJChcIi5oZWFkbGluZS1iYXNlLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVCYXNlUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0JBU0VfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IGhlYWRsaW5lU2V0ID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1OYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1CYXNlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLmJhc2VQcmljZSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSByb3VuZFRvVHdvKGRhdGFbaV0uYmFzZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZiArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLmJhc2VQcmljZSArICfigqwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtQmFzZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvYXV0byA9IFwiYXV0byBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVsnZGlzdFByaWNlJ10ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByaWNlSW5kZXggaW4gZGF0YVtpXVsnZGlzdFByaWNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bJ2Rpc3RQcmljZSddLmhhc093blByb3BlcnR5KHByaWNlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VFbGVtZW50ID0gZGF0YVtpXVsnZGlzdFByaWNlJ11bcHJpY2VJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhlYWRsaW5lU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRMaW5lSHRtbCA9IGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSArICc8YnI+JyArIHByaWNlRWxlbWVudFsnbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZUluZGV4ID09PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakhlYWRsaW5lRGlzdFByaWNlLmh0bWwoaGVhZExpbmVIdG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIikubGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSGVhZGxpbmUuY2xhc3NOYW1lID0gXCJoZWFkbGluZS1kaXN0LXByaWNlIGdyaWQtaXRlbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5pbm5lckhUTUwgPSBoZWFkTGluZUh0bWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZnRlcihhZGRIZWFkbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSByb3VuZFRvVHdvKHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXJ2aWNlTGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcHJpY2VFbGVtZW50WydraWxvbWV0ZXJQcmljZSddICsgJ+KCrCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1EaXN0UHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2F1dG8gKz0gXCIgYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRsaW5lU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGlzdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gZGF0YVtpXS5kaXN0UHJpY2VbMF1bJ2tpbG9tZXRlclByaWNlJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50aW1lUHJpY2UgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtVGltZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0udGltZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLnRpbWVQcmljZSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLicpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IGRhdGFbaV0udGltZVByaWNlICsn4oKsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbVRpbWVQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCA9PT0gXCJyb3ctZXZlblwiID8gXCJyb3ctdW5ldmVuXCIgOiBcInJvdy1ldmVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2F1dG8gKz0gXCIgYXV0b1wiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcqJykucmVtb3ZlKCcuaGVhZGxpbmUtdGltZS1wcmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRhcmlmZi1vdXRwdXQnKS5jc3MoJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsIGF1dG9hdXRvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRSb3cuaW5uZXJIVE1MID0gXCI8dGg+XCIgKyBpICsgXCI8L3RoPlwiICsgXCI8dGQ+XCIrIGRhdGFbaV0uYmFzZVByaWNlICsgXCLigqw8L3RkPlwiICsgXCI8dGQ+XCIrIGRhdGFbaV0uZGlzdFByaWNlICsgXCLigqw8L3RkPlwiICsgXCI8dGQ+XCIgKyBkYXRhW2ldLnRpbWVQcmljZSArIFwi4oKsPC90ZD5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChlbGVtZW50Um93KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgIHZhciB0cmF2ZWxDb25zdGFudHNHZXJtYW4gPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdTdHJhw59lLCBPcnQgb2RlciBQTFogZWluZ2ViZW4gLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRW50ZmVybnVuZycsXG4gICAgSEVBRExJTkVfVElNRTogJ0RhdWVyJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOiAnR3J1bmRwcmVpcycsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTogJ1ByZWlzIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6ICdQcmVpcyAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkcmVzc2UgYXXDn2VyaGFsYiBkZXMgVGFyaWZnZWJpZXRzJyxcbiAgICBFUlJPUl9GQUxTRV9BRERSRVNTOiAnQWRyZXNzZSBuaWNodCBnZWZ1bmRlbicsXG4gICAgRVJST1I6J0ZlaGxlcicsXG4gICAgU1RBUlRfU0VBUkNIOiAnQmVyZWNobmVuJyxcbiAgICBQT1NJVElPTl9PVVRfT0ZfQk9VTkRTOiBcIklocmUgYWt0dWVsbGUgUG9zaXRpb24gaXN0IGF1w59lcmhhbGIgZGVzIFRhcmlmc2dlYmlldHNcIixcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCB2YXIgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCA9IHtcbiAgICBEVU1NWV9JTlBVVDogJ1N0cmVldCwgY2l0eSBvciBlbnRlciBwb3N0YWwgY29kZSAuLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdEaXN0YW5jZScsXG4gICAgSEVBRExJTkVfVElNRTogJ1RpbWUnLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6J0Jhc2UgcHJpY2UnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6J1ByaWNlIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6J1ByaWNlIC8gbWluJyxcbiAgICBFUlJPUl9PVVRfT0ZfQk9VTkRTOiAnQWRkcmVzcyBpcyBvdXQgb2YgYm91bmRzJyxcbiAgICBFUlJPUl9GQUxTRV9BRERSRVNTOiAnQWRkcmVzcyBub3QgZm91bmQnLFxuICAgIEVSUk9SOidFcnJvcicsXG4gICAgU1RBUlRfU0VBUkNIOiAnQ2FsY3VsYXRlJyxcbiAgICBQT1NJVElPTl9PVVRfT0ZfQk9VTkRTOiBcIllvdXIgY3VycmVudCBwb3NpdGlvbiBpcyBvdXQgb2YgYm91bmRzXCIsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iXSwic291cmNlUm9vdCI6IiJ9