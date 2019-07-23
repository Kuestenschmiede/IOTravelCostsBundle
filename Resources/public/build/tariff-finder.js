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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWVuLmpzIl0sIm5hbWVzIjpbImxhbmdDb25zdGFudHMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxhbmd1YWdlIiwid2luZG93Iiwic2VydmljZUxhbmciLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJ0YXhpQ29uc3RhbnRzRW5nbGlzaCIsInRheGlDb25zdGFudHNHZXJtYW4iLCJmaW5kVGFyaWZmcyIsInVybCIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcmVudCIsImRpc3BsYXlHcmlkIiwiY3NzIiwicm93Q291bnQiLCJvYmpIZWFkbGluZURpc3RQcmljZSIsImh0bWwiLCJIRUFETElORV9ESVNUX1BSSUNFIiwib2JqSGVhZGxpbmVUaW1lUHJpY2UiLCJIRUFETElORV9USU1FX1BSSUNFIiwib2JqSGVhZGxpbmVCYXNlUHJpY2UiLCJIRUFETElORV9CQVNFX1BSSUNFIiwiaGVhZGxpbmVTZXQiLCJpIiwiaGFzT3duUHJvcGVydHkiLCJpdGVtTmFtZSIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJpdGVtQmFzZVByaWNlIiwiYmFzZVByaWNlIiwicmVzcG9uc2VUYXJpZmYiLCJpbmRleERlY2ltYWwiLCJyZXBsYWNlIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsImF1dG9hdXRvIiwibGVuZ3RoIiwicHJpY2VJbmRleCIsInByaWNlRWxlbWVudCIsImhlYWRMaW5lSHRtbCIsImxhc3QiLCJhZGRIZWFkbGluZSIsImFmdGVyIiwiaXRlbURpc3RQcmljZSIsImRpc3RQcmljZSIsInRpbWVQcmljZSIsIml0ZW1UaW1lUHJpY2UiLCJyZW1vdmUiLCJlbGVtZW50Um93IiwiRFVNTVlfSU5QVVQiLCJIRUFETElORV9ESVNUIiwiSEVBRExJTkVfVElNRSIsIkVSUk9SX09VVF9PRl9CT1VORFMiLCJFUlJPUl9GQUxTRV9BRERSRVNTIiwiRVJST1IiLCJTVEFSVF9TRUFSQ0giLCJQT1NJVElPTl9PVVRfT0ZfQk9VTkRTIiwiTk9ORSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsZ0JBQWdCLEVBQXRCO0FBQ0E7Ozs7QUFJQUMsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekIsUUFBSUMsV0FBV0MsT0FBT0MsV0FBUCxJQUFzQkQsT0FBT0UsU0FBUCxDQUFpQkMsWUFBdkMsSUFBdURILE9BQU9F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aW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGFyaWZmLWZpbmRlci5qc1wiKTtcbiIsImltcG9ydCB7dGF4aUNvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL3RheGktY29uc3RhbnQtaTE4bi1lblwiO1xuaW1wb3J0IHt0YXhpQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi90YXhpLWNvbnN0YW50LWkxOG4tZGVcIjtcbmNvbnN0IGxhbmdDb25zdGFudHMgPSB7fTtcbi8qKlxuICogSW5pdGlhbCBmdW5jdGlvbiB0byBlbmFibGUgdXNlci1pbnB1dCB0byB0aGUgZ3VpXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGxldCBsYW5ndWFnZSA9IHdpbmRvdy5zZXJ2aWNlTGFuZyB8fCB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlO1xuICAgIGlmIChsYW5ndWFnZSA9PT0gXCJlblwiKSB7XG4gICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNFbmdsaXNoKVxuICAgIH1cbiAgICBlbHNlIGlmIChsYW5ndWFnZSA9PT0gXCJkZVwiKSB7XG4gICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNHZXJtYW4pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdGF4aUNvbnN0YW50c0VuZ2xpc2gpO1xuICAgIH1cblxuICAgIGZpbmRUYXJpZmZzKCk7XG59KTtcblxuLyoqXG4gKiBjYWxscyB0YXJpZmZTZXJ2aWNlIHRvIGZldGNoIGluZm9ybWF0aW9ucyBhbmQgcHJpY2luZyBhYm91dCB0aGUgc2V0IHRhcmlmZnMgYW5kIHNob3dzIHRoZW1cbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuZnVuY3Rpb24gZmluZFRhcmlmZnMoKSB7XG4gICAgbGV0IHVybCA9IFwiY29uNGdpcy90YXJpZmZTZXJ2aWNlL1wiICsgd2luZG93LnNldHRpbmdJZDtcbiAgICAkLmFqYXgoe3VybDp1cmx9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHBhcmVudCA9ICQoXCIudGFyaWZmLW91dHB1dFwiKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZGlzcGxheUdyaWQgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2dyaWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJvd0NvdW50ID0gXCJyb3ctZXZlblwiO1xuXG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZURpc3RQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVUaW1lUHJpY2UgPSAkKFwiLmhlYWRsaW5lLXRpbWUtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZVRpbWVQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfVElNRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVCYXNlUHJpY2UgPSAkKFwiLmhlYWRsaW5lLWJhc2UtcHJpY2VcIik7XG4gICAgICAgICAgICBvYmpIZWFkbGluZUJhc2VQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfQkFTRV9QUklDRSk7XG4gICAgICAgICAgICBsZXQgaGVhZGxpbmVTZXQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZGlzcGxheUdyaWQgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUJhc2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV0uYmFzZVByaWNlICUgMSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGFbaV0uYmFzZVByaWNlICsgXCIwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4RGVjaW1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJy4nKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS5iYXNlUHJpY2UgKyAn4oKsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbUJhc2VQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXV0b2F1dG8gPSBcImF1dG8gYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bJ2Rpc3RQcmljZSddLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBwcmljZUluZGV4IGluIGRhdGFbaV1bJ2Rpc3RQcmljZSddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldWydkaXN0UHJpY2UnXS5oYXNPd25Qcm9wZXJ0eShwcmljZUluZGV4KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHByaWNlRWxlbWVudCA9IGRhdGFbaV1bJ2Rpc3RQcmljZSddW3ByaWNlSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoZWFkbGluZVNldCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBoZWFkTGluZUh0bWwgPSBsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UgKyAnPGJyPicgKyBwcmljZUVsZW1lbnRbJ25hbWUnXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2VJbmRleCA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lRGlzdFByaWNlID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmpIZWFkbGluZURpc3RQcmljZS5odG1sKGhlYWRMaW5lSHRtbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpLmxhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZEhlYWRsaW5lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZEhlYWRsaW5lLmNsYXNzTmFtZSA9IFwiaGVhZGxpbmUtZGlzdC1wcmljZSBncmlkLWl0ZW1cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSGVhZGxpbmUuaW5uZXJIVE1MID0gaGVhZExpbmVIdG1sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWZ0ZXIoYWRkSGVhZGxpbmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EaXN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gJSAxICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gcHJpY2VFbGVtZW50WydraWxvbWV0ZXJQcmljZSddICsgXCIwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4RGVjaW1hbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LnNlcnZpY2VMYW5nID09PSBcImRlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJy4nKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcHJpY2VFbGVtZW50WydraWxvbWV0ZXJQcmljZSddICsgJ+KCrCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1EaXN0UHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2F1dG8gKz0gXCIgYXV0b1wiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRsaW5lU2V0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGlzdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gZGF0YVtpXS5kaXN0UHJpY2VbMF1bJ2tpbG9tZXRlclByaWNlJ10gKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1EaXN0UHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtRGlzdFByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhW2ldLnRpbWVQcmljZSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1UaW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50aW1lUHJpY2UgJSAxICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGFbaV0udGltZVByaWNlICsgXCIwMDAwXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuc2VydmljZUxhbmcgPT09IFwiZGVcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcuJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS50aW1lUHJpY2UgKyfigqwnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtVGltZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dDb3VudCA9IHJvd0NvdW50ID09PSBcInJvdy1ldmVuXCIgPyBcInJvdy11bmV2ZW5cIiA6IFwicm93LWV2ZW5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdXRvYXV0byArPSBcIiBhdXRvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyonKS5yZW1vdmUoJy5oZWFkbGluZS10aW1lLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGFyaWZmLW91dHB1dCcpLmNzcygnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJywgYXV0b2F1dG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJvdy5pbm5lckhUTUwgPSBcIjx0aD5cIiArIGkgKyBcIjwvdGg+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5iYXNlUHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5kaXN0UHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIiArIGRhdGFbaV0udGltZVByaWNlICsgXCLigqw8L3RkPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGVsZW1lbnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHNHZXJtYW4gPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdTdHJhw59lLCBPcnQgb2RlciBQTFogZWluZ2ViZW4gLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRW50ZmVybnVuZycsXG4gICAgSEVBRExJTkVfVElNRTogJ0RhdWVyJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOiAnR3J1bmRwcmVpcycsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTogJ1ByZWlzIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6ICdQcmVpcyAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkcmVzc2UgYXXDn2VyaGFsYiBkZXMgVGFyaWZnZWJpZXRzJyxcbiAgICBFUlJPUl9GQUxTRV9BRERSRVNTOiAnQWRyZXNzZSBuaWNodCBnZWZ1bmRlbicsXG4gICAgRVJST1I6J0ZlaGxlcicsXG4gICAgU1RBUlRfU0VBUkNIOiAnQmVyZWNobmVuJyxcbiAgICBQT1NJVElPTl9PVVRfT0ZfQk9VTkRTOiBcIklocmUgYWt0dWVsbGUgUG9zaXRpb24gaXN0IGF1w59lcmhhbGIgZGVzIFRhcmlmc2dlYmlldHNcIixcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCB2YXIgdGF4aUNvbnN0YW50c0VuZ2xpc2ggPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdTdHJlZXQsIGNpdHkgb3IgZW50ZXIgcG9zdGFsIGNvZGUgLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRGlzdGFuY2UnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdUaW1lJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOidCYXNlIHByaWNlJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOidQcmljZSAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOidQcmljZSAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kJyxcbiAgICBFUlJPUjonRXJyb3InLFxuICAgIFNUQVJUX1NFQVJDSDogJ0NhbGN1bGF0ZScsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJZb3VyIGN1cnJlbnQgcG9zaXRpb24gaXMgb3V0IG9mIGJvdW5kc1wiLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIl0sInNvdXJjZVJvb3QiOiIifQ==