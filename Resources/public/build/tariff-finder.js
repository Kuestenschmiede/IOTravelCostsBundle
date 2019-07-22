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
/* harmony import */ var _taxi_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxi-constant-i18n-en */ "./Resources/public/js/taxi-constant-i18n-en.js");
/* harmony import */ var _taxi_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taxi-constant-i18n-de */ "./Resources/public/js/taxi-constant-i18n-de.js");


const langConstants = {};
/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function () {
    let language = window.serviceLang || window.navigator.userLanguage || window.navigator.language;
    if (language === "en") {
        $.extend(langConstants, _taxi_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["taxiConstantsEnglish"]);
    } else if (language === "de") {
        $.extend(langConstants, _taxi_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__["taxiConstantsGerman"]);
    } else {
        $.extend(langConstants, _taxi_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["taxiConstantsEnglish"]);
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

/***/ "./Resources/public/js/taxi-constant-i18n-de.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/taxi-constant-i18n-de.js ***!
  \******************************************************/
/*! exports provided: taxiConstantsGerman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxiConstantsGerman", function() { return taxiConstantsGerman; });
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

var taxiConstantsGerman = {
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

/***/ "./Resources/public/js/taxi-constant-i18n-en.js":
/*!******************************************************!*\
  !*** ./Resources/public/js/taxi-constant-i18n-en.js ***!
  \******************************************************/
/*! exports provided: taxiConstantsEnglish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxiConstantsEnglish", function() { return taxiConstantsEnglish; });
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

var taxiConstantsEnglish = {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWVuLmpzIl0sIm5hbWVzIjpbImxhbmdDb25zdGFudHMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxhbmd1YWdlIiwid2luZG93Iiwic2VydmljZUxhbmciLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJ0YXhpQ29uc3RhbnRzRW5nbGlzaCIsInRheGlDb25zdGFudHNHZXJtYW4iLCJmaW5kVGFyaWZmcyIsInVybCIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcmVudCIsImRpc3BsYXlHcmlkIiwiY3NzIiwicm93Q291bnQiLCJvYmpIZWFkbGluZURpc3RQcmljZSIsImh0bWwiLCJIRUFETElORV9ESVNUX1BSSUNFIiwib2JqSGVhZGxpbmVUaW1lUHJpY2UiLCJIRUFETElORV9USU1FX1BSSUNFIiwib2JqSGVhZGxpbmVCYXNlUHJpY2UiLCJIRUFETElORV9CQVNFX1BSSUNFIiwiaSIsImhhc093blByb3BlcnR5IiwiaXRlbU5hbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaXRlbUJhc2VQcmljZSIsImJhc2VQcmljZSIsInJlc3BvbnNlVGFyaWZmIiwiaW5kZXhEZWNpbWFsIiwicmVwbGFjZSIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJhdXRvYXV0byIsImxlbmd0aCIsInByaWNlSW5kZXgiLCJwcmljZUVsZW1lbnQiLCJoZWFkTGluZUh0bWwiLCJsYXN0IiwiYWRkSGVhZGxpbmUiLCJhZnRlciIsIml0ZW1EaXN0UHJpY2UiLCJkaXN0UHJpY2UiLCJ0aW1lUHJpY2UiLCJpdGVtVGltZVByaWNlIiwicmVtb3ZlIiwiZWxlbWVudFJvdyIsIkRVTU1ZX0lOUFVUIiwiSEVBRExJTkVfRElTVCIsIkhFQURMSU5FX1RJTUUiLCJFUlJPUl9PVVRfT0ZfQk9VTkRTIiwiRVJST1JfRkFMU0VfQUREUkVTUyIsIkVSUk9SIiwiU1RBUlRfU0VBUkNIIiwiUE9TSVRJT05fT1VUX09GX0JPVU5EUyIsIk5PTkUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE1BQU1BLGdCQUFnQixFQUF0QjtBQUNBOzs7O0FBSUFDLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLFFBQUlDLFdBQVdDLE9BQU9DLFdBQVAsSUFBc0JELE9BQU9FLFNBQVAsQ0FBaUJDLFlBQXZDLElBQXVESCxPQUFPRSxTQUFQLENBQWlCSCxR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LEdBQTBGLFFBQTFGLEdBQXFHLE1BQXJHLEdBQThHbkMsS0FBS1ksQ0FBTCxFQUFRd0IsU0FBdEgsR0FBa0ksUUFBeko7QUFDQW5DLDJCQUFPaUIsTUFBUCxDQUFjcUIsVUFBZDtBQUNIO0FBQ0o7QUFDSjtBQUNKLEtBOUhMO0FBZ0lILEM7Ozs7Ozs7Ozs7OztBQzVKRDtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBV2E7O0FBRWI7Ozs7QUFHUSxJQUFJN0Msc0JBQXNCO0FBQzlCOEMsZUFBYSxtQ0FEaUI7QUFFOUJDLGlCQUFlLFlBRmU7QUFHOUJDLGlCQUFlLE9BSGU7QUFJOUIvQix1QkFBcUIsWUFKUztBQUs5QkosdUJBQXFCLFlBTFM7QUFNOUJFLHVCQUFxQixhQU5TO0FBTzlCa0MsdUJBQXFCLG9DQVBTO0FBUTlCQyx1QkFBcUIsd0JBUlM7QUFTOUJDLFNBQU0sUUFUd0I7QUFVOUJDLGdCQUFjLFdBVmdCO0FBVzlCQywwQkFBd0Isd0RBWE07QUFZOUJDLFFBQU0sRUFad0IsQ0FZckI7QUFacUIsQ0FBMUIsQyxDQWFMLDZCOzs7Ozs7Ozs7Ozs7QUM3Qkg7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdhOztBQUViOzs7O0FBR08sSUFBSXZELHVCQUF1QjtBQUM5QitDLGVBQWEsdUNBRGlCO0FBRTlCQyxpQkFBZSxVQUZlO0FBRzlCQyxpQkFBZSxNQUhlO0FBSTlCL0IsdUJBQW9CLFlBSlU7QUFLOUJKLHVCQUFvQixZQUxVO0FBTTlCRSx1QkFBb0IsYUFOVTtBQU85QmtDLHVCQUFxQiwwQkFQUztBQVE5QkMsdUJBQXFCLG1CQVJTO0FBUzlCQyxTQUFNLE9BVHdCO0FBVTlCQyxnQkFBYyxXQVZnQjtBQVc5QkMsMEJBQXdCLHdDQVhNO0FBWTlCQyxRQUFNLEVBWndCLENBWXJCO0FBWnFCLENBQTNCLEMsQ0FhSiw2QiIsImZpbGUiOiJ0YXJpZmYtZmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL3RhcmlmZi1maW5kZXIuanNcIik7XG4iLCJpbXBvcnQge3RheGlDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi90YXhpLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dGF4aUNvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vdGF4aS1jb25zdGFudC1pMThuLWRlXCI7XG5jb25zdCBsYW5nQ29uc3RhbnRzID0ge307XG4vKipcbiAqIEluaXRpYWwgZnVuY3Rpb24gdG8gZW5hYmxlIHVzZXItaW5wdXQgdG8gdGhlIGd1aVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBsZXQgbGFuZ3VhZ2UgPSB3aW5kb3cuc2VydmljZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZTtcbiAgICBpZiAobGFuZ3VhZ2UgPT09IFwiZW5cIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzRW5nbGlzaClcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiZGVcIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzR2VybWFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNFbmdsaXNoKTtcbiAgICB9XG5cbiAgICBmaW5kVGFyaWZmcygpO1xufSk7XG5cbi8qKlxuICogY2FsbHMgdGFyaWZmU2VydmljZSB0byBmZXRjaCBpbmZvcm1hdGlvbnMgYW5kIHByaWNpbmcgYWJvdXQgdGhlIHNldCB0YXJpZmZzIGFuZCBzaG93cyB0aGVtXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbmZ1bmN0aW9uIGZpbmRUYXJpZmZzKCkge1xuICAgIGxldCB1cmwgPSBcImNvbjRnaXMvdGFyaWZmU2VydmljZS9cIiArIHdpbmRvdy5zZXR0aW5nSWQ7XG4gICAgJC5hamF4KHt1cmw6dXJsfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSAkKFwiLnRhcmlmZi1vdXRwdXRcIik7XG4gICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jc3MoJ2Rpc3BsYXknLCdncmlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByb3dDb3VudCA9IFwicm93LWV2ZW5cIjtcblxuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lRGlzdFByaWNlID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lVGltZVByaWNlID0gJChcIi5oZWFkbGluZS10aW1lLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVUaW1lUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX1RJTUVfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lQmFzZVByaWNlID0gJChcIi5oZWFkbGluZS1iYXNlLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVCYXNlUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0JBU0VfUFJJQ0UpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5kaXNwbGF5R3JpZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQmFzZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS5iYXNlUHJpY2UgJSAxICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gZGF0YVtpXS5iYXNlUHJpY2UgKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLicpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLmJhc2VQcmljZSArICfigqwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtQmFzZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvYXV0byA9IFwiYXV0byBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVsnZGlzdFByaWNlJ10ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByaWNlSW5kZXggaW4gZGF0YVtpXVsnZGlzdFByaWNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bJ2Rpc3RQcmljZSddLmhhc093blByb3BlcnR5KHByaWNlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VFbGVtZW50ID0gZGF0YVtpXVsnZGlzdFByaWNlJ11bcHJpY2VJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZExpbmVIdG1sID0gbGFuZ0NvbnN0YW50cy5IRUFETElORV9ESVNUX1BSSUNFICsgJzxicj4nICsgcHJpY2VFbGVtZW50WyduYW1lJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2VJbmRleCA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChoZWFkTGluZUh0bWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpLmxhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lLWRpc3QtcHJpY2UgZ3JpZC1pdGVtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSGVhZGxpbmUuaW5uZXJIVE1MID0gaGVhZExpbmVIdG1sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZnRlcihhZGRIZWFkbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByaWNlRWxlbWVudFsna2lsb21ldGVyUHJpY2UnXSAlIDEgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLicpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyAn4oKsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGFbaV0uZGlzdFByaWNlWzBdWydraWxvbWV0ZXJQcmljZSddICsgXCIwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50aW1lUHJpY2UgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtVGltZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0udGltZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLnRpbWVQcmljZSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLicpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IGRhdGFbaV0udGltZVByaWNlICsn4oKsJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbVRpbWVQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCA9PT0gXCJyb3ctZXZlblwiID8gXCJyb3ctdW5ldmVuXCIgOiBcInJvdy1ldmVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2F1dG8gKz0gXCIgYXV0b1wiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcqJykucmVtb3ZlKCcuaGVhZGxpbmUtdGltZS1wcmljZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJCgnLnRhcmlmZi1vdXRwdXQnKS5jc3MoJ2dyaWQtdGVtcGxhdGUtY29sdW1ucycsIGF1dG9hdXRvKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRSb3cuaW5uZXJIVE1MID0gXCI8dGg+XCIgKyBpICsgXCI8L3RoPlwiICsgXCI8dGQ+XCIrIGRhdGFbaV0uYmFzZVByaWNlICsgXCLigqw8L3RkPlwiICsgXCI8dGQ+XCIrIGRhdGFbaV0uZGlzdFByaWNlICsgXCLigqw8L3RkPlwiICsgXCI8dGQ+XCIgKyBkYXRhW2ldLnRpbWVQcmljZSArIFwi4oKsPC90ZD5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChlbGVtZW50Um93KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICk7XG59XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgIHZhciB0YXhpQ29uc3RhbnRzR2VybWFuID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnU3RyYcOfZSwgT3J0IG9kZXIgUExaIGVpbmdlYmVuIC4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0VudGZlcm51bmcnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdEYXVlcicsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTogJ0dydW5kcHJlaXMnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6ICdQcmVpcyAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOiAnUHJlaXMgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZHJlc3NlIGF1w59lcmhhbGIgZGVzIFRhcmlmZ2ViaWV0cycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4nLFxuICAgIEVSUk9SOidGZWhsZXInLFxuICAgIFNUQVJUX1NFQVJDSDogJ0JlcmVjaG5lbicsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJJaHJlIGFrdHVlbGxlIFBvc2l0aW9uIGlzdCBhdcOfZXJoYWxiIGRlcyBUYXJpZnNnZWJpZXRzXCIsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgdmFyIHRheGlDb25zdGFudHNFbmdsaXNoID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnU3RyZWV0LCBjaXR5IG9yIGVudGVyIHBvc3RhbCBjb2RlIC4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0Rpc3RhbmNlJyxcbiAgICBIRUFETElORV9USU1FOiAnVGltZScsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTonQmFzZSBwcmljZScsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTonUHJpY2UgLyBrbScsXG4gICAgSEVBRExJTkVfVElNRV9QUklDRTonUHJpY2UgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZGRyZXNzIGlzIG91dCBvZiBib3VuZHMnLFxuICAgIEVSUk9SX0ZBTFNFX0FERFJFU1M6ICdBZGRyZXNzIG5vdCBmb3VuZCcsXG4gICAgRVJST1I6J0Vycm9yJyxcbiAgICBTVEFSVF9TRUFSQ0g6ICdDYWxjdWxhdGUnLFxuICAgIFBPU0lUSU9OX09VVF9PRl9CT1VORFM6IFwiWW91ciBjdXJyZW50IHBvc2l0aW9uIGlzIG91dCBvZiBib3VuZHNcIixcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiJdLCJzb3VyY2VSb290IjoiIn0=