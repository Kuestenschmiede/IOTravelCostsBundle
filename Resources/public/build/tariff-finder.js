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

    findTariffs();
});

/**
 * calls tariffService to fetch informations and pricing about the set tariffs and shows them
 * @returns {void}}
 */
function findTariffs() {
    let url = "con4gis/tariffService/" + window.settingId;
    $.ajax({ url: url }).done(function (data) {
        let parent = $(".tariff-output");
        if (window.displayGrid === "1") {
            parent.css('display', 'grid');
        } else {
            parent.css('display', 'block');
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
                        let responseTariff = data[i].basePrice + "0000";
                        let indexDecimal;
                        if (window.serviceLang === "de") {
                            responseTariff = responseTariff.replace(".", ",");
                            indexDecimal = responseTariff.indexOf(',') + 3;
                        } else {
                            indexDecimal = responseTariff.indexOf('.') + 3;
                        }
                        itemBasePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
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
                                    let responseTariff = priceElement['kilometerPrice'] + "0000";
                                    let indexDecimal;
                                    if (window.serviceLang === "de") {
                                        responseTariff = responseTariff.replace(".", ",");
                                        indexDecimal = responseTariff.indexOf(',') + 3;
                                    } else {
                                        indexDecimal = responseTariff.indexOf('.') + 3;
                                    }
                                    itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
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
                        let responseTariff = data[i].distPrice[0]['kilometerPrice'] + "0000";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdHJhdmVsLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtY29uc3RhbnQtaTE4bi1lbi5qcyJdLCJuYW1lcyI6WyJsYW5nQ29uc3RhbnRzIiwiJCIsImRvY3VtZW50IiwicmVhZHkiLCJsYW5ndWFnZSIsIndpbmRvdyIsInNlcnZpY2VMYW5nIiwibmF2aWdhdG9yIiwidXNlckxhbmd1YWdlIiwiZXh0ZW5kIiwidHJhdmVsQ29uc3RhbnRzRW5nbGlzaCIsInRyYXZlbENvbnN0YW50c0dlcm1hbiIsImZpbmRUYXJpZmZzIiwidXJsIiwic2V0dGluZ0lkIiwiYWpheCIsImRvbmUiLCJkYXRhIiwicGFyZW50IiwiZGlzcGxheUdyaWQiLCJjc3MiLCJyb3dDb3VudCIsIm9iakhlYWRsaW5lRGlzdFByaWNlIiwiaHRtbCIsIkhFQURMSU5FX0RJU1RfUFJJQ0UiLCJvYmpIZWFkbGluZVRpbWVQcmljZSIsIkhFQURMSU5FX1RJTUVfUFJJQ0UiLCJvYmpIZWFkbGluZUJhc2VQcmljZSIsIkhFQURMSU5FX0JBU0VfUFJJQ0UiLCJoZWFkbGluZVNldCIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsIml0ZW1OYW1lIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsImFwcGVuZCIsIml0ZW1CYXNlUHJpY2UiLCJiYXNlUHJpY2UiLCJyZXNwb25zZVRhcmlmZiIsImluZGV4RGVjaW1hbCIsInJlcGxhY2UiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwiYXV0b2F1dG8iLCJsZW5ndGgiLCJwcmljZUluZGV4IiwicHJpY2VFbGVtZW50IiwiaGVhZExpbmVIdG1sIiwibGFzdCIsImFkZEhlYWRsaW5lIiwiYWZ0ZXIiLCJpdGVtRGlzdFByaWNlIiwiZGlzdFByaWNlIiwidGltZVByaWNlIiwiaXRlbVRpbWVQcmljZSIsInJlbW92ZSIsImVsZW1lbnRSb3ciLCJEVU1NWV9JTlBVVCIsIkhFQURMSU5FX0RJU1QiLCJIRUFETElORV9USU1FIiwiRVJST1JfT1VUX09GX0JPVU5EUyIsIkVSUk9SX0ZBTFNFX0FERFJFU1MiLCJFUlJPUiIsIlNUQVJUX1NFQVJDSCIsIlBPU0lUSU9OX09VVF9PRl9CT1VORFMiLCJOT05FIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQSxNQUFNQSxnQkFBZ0IsRUFBdEI7QUFDQTs7OztBQUlBQyxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QixRQUFJQyxXQUFXQyxPQUFPQyxXQUFQLElBQXNCRCxPQUFPRSxTQUFQLENBQWlCQyxZQUF2QyxJQUF1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ZSI6InRhcmlmZi1maW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGFyaWZmLWZpbmRlci5qc1wiKTtcbiIsImltcG9ydCB7dHJhdmVsQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vdHJhdmVsLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dHJhdmVsQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi90cmF2ZWwtY29uc3RhbnQtaTE4bi1kZVwiO1xuY29uc3QgbGFuZ0NvbnN0YW50cyA9IHt9O1xuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxhbmd1YWdlID0gd2luZG93LnNlcnZpY2VMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaClcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiZGVcIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0cmF2ZWxDb25zdGFudHNHZXJtYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdHJhdmVsQ29uc3RhbnRzRW5nbGlzaCk7XG4gICAgfVxuXG4gICAgZmluZFRhcmlmZnMoKTtcbn0pO1xuXG4vKipcbiAqIGNhbGxzIHRhcmlmZlNlcnZpY2UgdG8gZmV0Y2ggaW5mb3JtYXRpb25zIGFuZCBwcmljaW5nIGFib3V0IHRoZSBzZXQgdGFyaWZmcyBhbmQgc2hvd3MgdGhlbVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBmaW5kVGFyaWZmcygpIHtcbiAgICBsZXQgdXJsID0gXCJjb240Z2lzL3RhcmlmZlNlcnZpY2UvXCIgKyB3aW5kb3cuc2V0dGluZ0lkO1xuICAgICQuYWpheCh7dXJsOnVybH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi50YXJpZmYtb3V0cHV0XCIpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5kaXNwbGF5R3JpZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnZ3JpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcm93Q291bnQgPSBcInJvdy1ldmVuXCI7XG5cbiAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZURpc3RQcmljZSA9ICQoXCIuaGVhZGxpbmUtZGlzdC1wcmljZVwiKTtcbiAgICAgICAgICAgIG9iakhlYWRsaW5lRGlzdFByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9ESVNUX1BSSUNFKTtcbiAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZVRpbWVQcmljZSA9ICQoXCIuaGVhZGxpbmUtdGltZS1wcmljZVwiKTtcbiAgICAgICAgICAgIG9iakhlYWRsaW5lVGltZVByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9USU1FX1BSSUNFKTtcbiAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZUJhc2VQcmljZSA9ICQoXCIuaGVhZGxpbmUtYmFzZS1wcmljZVwiKTtcbiAgICAgICAgICAgIG9iakhlYWRsaW5lQmFzZVByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9CQVNFX1BSSUNFKTtcbiAgICAgICAgICAgIGxldCBoZWFkbGluZVNldCA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5kaXNwbGF5R3JpZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQmFzZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS5iYXNlUHJpY2UgJSAxICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gZGF0YVtpXS5iYXNlUHJpY2UgKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLicpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLmJhc2VQcmljZSArICfigqwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtQmFzZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvYXV0byA9IFwiYXV0byBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVsnZGlzdFByaWNlJ10ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByaWNlSW5kZXggaW4gZGF0YVtpXVsnZGlzdFByaWNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bJ2Rpc3RQcmljZSddLmhhc093blByb3BlcnR5KHByaWNlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VFbGVtZW50ID0gZGF0YVtpXVsnZGlzdFByaWNlJ11bcHJpY2VJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhlYWRsaW5lU2V0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGhlYWRMaW5lSHRtbCA9IGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSArICc8YnI+JyArIHByaWNlRWxlbWVudFsnbmFtZSddO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZUluZGV4ID09PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iakhlYWRsaW5lRGlzdFByaWNlLmh0bWwoaGVhZExpbmVIdG1sKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJlbnQgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIikubGFzdCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSGVhZGxpbmUuY2xhc3NOYW1lID0gXCJoZWFkbGluZS1kaXN0LXByaWNlIGdyaWQtaXRlbVwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5pbm5lckhUTUwgPSBoZWFkTGluZUh0bWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZnRlcihhZGRIZWFkbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLicpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyAn4oKsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmVTZXQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EaXN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLmRpc3RQcmljZVswXVsna2lsb21ldGVyUHJpY2UnXSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1EaXN0UHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0udGltZVByaWNlICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVRpbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpbWVQcmljZSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gZGF0YVtpXS50aW1lUHJpY2UgKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4RGVjaW1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXJ2aWNlTGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJy4nKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLnRpbWVQcmljZSArJ+KCrCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1UaW1lUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50ID0gcm93Q291bnQgPT09IFwicm93LWV2ZW5cIiA/IFwicm93LXVuZXZlblwiIDogXCJyb3ctZXZlblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9hdXRvICs9IFwiIGF1dG9cIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJCgnKicpLnJlbW92ZSgnLmhlYWRsaW5lLXRpbWUtcHJpY2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJy50YXJpZmYtb3V0cHV0JykuY3NzKCdncmlkLXRlbXBsYXRlLWNvbHVtbnMnLCBhdXRvYXV0byk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50Um93LmlubmVySFRNTCA9IFwiPHRoPlwiICsgaSArIFwiPC90aD5cIiArIFwiPHRkPlwiKyBkYXRhW2ldLmJhc2VQcmljZSArIFwi4oKsPC90ZD5cIiArIFwiPHRkPlwiKyBkYXRhW2ldLmRpc3RQcmljZSArIFwi4oKsPC90ZD5cIiArIFwiPHRkPlwiICsgZGF0YVtpXS50aW1lUHJpY2UgKyBcIuKCrDwvdGQ+XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoZWxlbWVudFJvdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICApO1xufVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdHJhdmVsQ29uc3RhbnRzR2VybWFuID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnU3RyYcOfZSwgT3J0IG9kZXIgUExaIGVpbmdlYmVuIC4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0VudGZlcm51bmcnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdEYXVlcicsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTogJ0dydW5kcHJlaXMnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6ICdQcmVpcyAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOiAnUHJlaXMgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZHJlc3NlIGF1w59lcmhhbGIgZGVzIFRhcmlmZ2ViaWV0cycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4nLFxuICAgIEVSUk9SOidGZWhsZXInLFxuICAgIFNUQVJUX1NFQVJDSDogJ0JlcmVjaG5lbicsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJJaHJlIGFrdHVlbGxlIFBvc2l0aW9uIGlzdCBhdcOfZXJoYWxiIGRlcyBUYXJpZnNnZWJpZXRzXCIsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgdmFyIHRyYXZlbENvbnN0YW50c0VuZ2xpc2ggPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdTdHJlZXQsIGNpdHkgb3IgZW50ZXIgcG9zdGFsIGNvZGUgLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRGlzdGFuY2UnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdUaW1lJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOidCYXNlIHByaWNlJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOidQcmljZSAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOidQcmljZSAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kJyxcbiAgICBFUlJPUjonRXJyb3InLFxuICAgIFNUQVJUX1NFQVJDSDogJ0NhbGN1bGF0ZScsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJZb3VyIGN1cnJlbnQgcG9zaXRpb24gaXMgb3V0IG9mIGJvdW5kc1wiLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIl0sInNvdXJjZVJvb3QiOiIifQ==