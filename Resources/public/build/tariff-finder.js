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
                    let responseTariff = data[i].basePrice + "0000";
                    responseTariff = responseTariff.replace(".", ",");
                    let indexDecimal = responseTariff.indexOf(',') + 3;
                    itemBasePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                    itemBasePrice.className = "grid-item " + rowCount;
                    parent.append(itemBasePrice);
                    let itemDistPrice = document.createElement('div');
                    responseTariff = data[i].distPrice + "0000";
                    responseTariff = responseTariff.replace(".", ",");
                    indexDecimal = responseTariff.indexOf(',') + 3;
                    itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                    itemDistPrice.className = "grid-item " + rowCount;
                    parent.append(itemDistPrice);
                    let itemTimePrice = document.createElement('div');
                    responseTariff = data[i].timePrice + "0000";
                    responseTariff = responseTariff.replace(".", ",");
                    indexDecimal = responseTariff.indexOf(',') + 3;
                    itemTimePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                    itemTimePrice.className = "grid-item " + rowCount;
                    parent.append(itemTimePrice);
                    rowCount = rowCount === "row-even" ? "row-uneven" : "row-even";
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
  DUMMY_INPUT: 'PLZ, Ort oder Straße eingeben...',
  HEADLINE_DIST: 'Entfernung',
  HEADLINE_TIME: 'Dauer',
  HEADLINE_BASE_PRICE: 'Grundpreis',
  HEADLINE_DIST_PRICE: 'Preis / km',
  HEADLINE_TIME_PRICE: 'Preis / min',
  ERROR_OUT_OF_BOUNDS: 'Adresse außerhalb des Tarifgebiets',
  ERROR_FALSE_ADDRESS: 'Adresse nicht gefunden',
  ERROR: 'Fehler',
  START_SEARCH: 'Suche starten',
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
  DUMMY_INPUT: 'Enter postal code, city or street...',
  HEADLINE_DIST: 'Distance',
  HEADLINE_TIME: 'Time',
  HEADLINE_BASE_PRICE: 'Base price',
  HEADLINE_DIST_PRICE: 'Price / km',
  HEADLINE_TIME_PRICE: 'Price / min',
  ERROR_OUT_OF_BOUNDS: 'Address is out of bounds',
  ERROR_FALSE_ADDRESS: 'Address not found',
  ERROR: 'Error',
  START_SEARCH: 'Start search',
  NONE: '' // last line
}; // end of "css constants" ---

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWVuLmpzIl0sIm5hbWVzIjpbImxhbmdDb25zdGFudHMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxhbmd1YWdlIiwid2luZG93Iiwic2VydmljZUxhbmciLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJ0YXhpQ29uc3RhbnRzRW5nbGlzaCIsInRheGlDb25zdGFudHNHZXJtYW4iLCJmaW5kVGFyaWZmcyIsInVybCIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcmVudCIsImRpc3BsYXlHcmlkIiwiY3NzIiwicm93Q291bnQiLCJvYmpIZWFkbGluZURpc3RQcmljZSIsImh0bWwiLCJIRUFETElORV9ESVNUX1BSSUNFIiwib2JqSGVhZGxpbmVUaW1lUHJpY2UiLCJIRUFETElORV9USU1FX1BSSUNFIiwib2JqSGVhZGxpbmVCYXNlUHJpY2UiLCJIRUFETElORV9CQVNFX1BSSUNFIiwiaSIsImhhc093blByb3BlcnR5IiwiaXRlbU5hbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaXRlbUJhc2VQcmljZSIsInJlc3BvbnNlVGFyaWZmIiwiYmFzZVByaWNlIiwicmVwbGFjZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJpdGVtRGlzdFByaWNlIiwiZGlzdFByaWNlIiwiaXRlbVRpbWVQcmljZSIsInRpbWVQcmljZSIsImVsZW1lbnRSb3ciLCJEVU1NWV9JTlBVVCIsIkhFQURMSU5FX0RJU1QiLCJIRUFETElORV9USU1FIiwiRVJST1JfT1VUX09GX0JPVU5EUyIsIkVSUk9SX0ZBTFNFX0FERFJFU1MiLCJFUlJPUiIsIlNUQVJUX1NFQVJDSCIsIk5PTkUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBLE1BQU1BLGdCQUFnQixFQUF0QjtBQUNBOzs7O0FBSUFDLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLFFBQUlDLFdBQVdDLE9BQU9DLFdBQVAsSUFBc0JELE9BQU9FLFNBQVAsQ0FBaUJDLFlBQXZDLElBQXVESCxPQUFPRSxTQUFQLENBQWlCSCxRQUF2RjtBQUNBLFFBQUlBLGFBQWEsSUFBakIsRUFBdUI7QUFDbkJILFVBQUVRLE1BQUYsQ0FBU1QsYUFBVCxFQUF3QlUsMkVBQXhCO0FBQ0gsS0FGRCxNQUdLLElBQUlOLGFBQWEsSUFBakIsRUFBdUI7QUFDeEJILFVBQUVR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TCw2Qjs7Ozs7Ozs7Ozs7O0FDNUJIO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXYTs7QUFFYjs7OztBQUdRLElBQUk3Qyx1QkFBdUI7QUFDL0JzQyxlQUFhLHNDQURrQjtBQUUvQkMsaUJBQWUsVUFGZ0I7QUFHL0JDLGlCQUFlLE1BSGdCO0FBSS9CdEIsdUJBQW9CLFlBSlc7QUFLL0JKLHVCQUFvQixZQUxXO0FBTS9CRSx1QkFBb0IsYUFOVztBQU8vQnlCLHVCQUFxQiwwQkFQVTtBQVEvQkMsdUJBQXFCLG1CQVJVO0FBUy9CQyxTQUFNLE9BVHlCO0FBVS9CQyxnQkFBYyxjQVZpQjtBQVcvQkMsUUFBTSxFQVh5QixDQVd0QjtBQVhzQixDQUEzQixDLENBWUwsNkIiLCJmaWxlIjoidGFyaWZmLWZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzXCIpO1xuIiwiaW1wb3J0IHt0YXhpQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vdGF4aS1jb25zdGFudC1pMThuLWVuXCI7XG5pbXBvcnQge3RheGlDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL3RheGktY29uc3RhbnQtaTE4bi1kZVwiO1xuY29uc3QgbGFuZ0NvbnN0YW50cyA9IHt9O1xuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgbGV0IGxhbmd1YWdlID0gd2luZG93LnNlcnZpY2VMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdGF4aUNvbnN0YW50c0VuZ2xpc2gpXG4gICAgfVxuICAgIGVsc2UgaWYgKGxhbmd1YWdlID09PSBcImRlXCIpIHtcbiAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdGF4aUNvbnN0YW50c0dlcm1hbik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzRW5nbGlzaCk7XG4gICAgfVxuXG4gICAgZmluZFRhcmlmZnMoKTtcbn0pO1xuXG4vKipcbiAqIGNhbGxzIHRhcmlmZlNlcnZpY2UgdG8gZmV0Y2ggaW5mb3JtYXRpb25zIGFuZCBwcmljaW5nIGFib3V0IHRoZSBzZXQgdGFyaWZmcyBhbmQgc2hvd3MgdGhlbVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBmaW5kVGFyaWZmcygpIHtcbiAgICBsZXQgdXJsID0gXCJjb240Z2lzL3RhcmlmZlNlcnZpY2UvXCIgKyB3aW5kb3cuc2V0dGluZ0lkO1xuICAgICQuYWpheCh7dXJsOnVybH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi50YXJpZmYtb3V0cHV0XCIpO1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5kaXNwbGF5R3JpZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnZ3JpZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcm93Q291bnQgPSBcInJvdy1ldmVuXCI7XG5cbiAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZURpc3RQcmljZSA9ICQoXCIuaGVhZGxpbmUtZGlzdC1wcmljZVwiKTtcbiAgICAgICAgICAgIG9iakhlYWRsaW5lRGlzdFByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9ESVNUX1BSSUNFKTtcbiAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZVRpbWVQcmljZSA9ICQoXCIuaGVhZGxpbmUtdGltZS1wcmljZVwiKTtcbiAgICAgICAgICAgIG9iakhlYWRsaW5lVGltZVByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9USU1FX1BSSUNFKTtcbiAgICAgICAgICAgIGxldCBvYmpIZWFkbGluZUJhc2VQcmljZSA9ICQoXCIuaGVhZGxpbmUtYmFzZS1wcmljZVwiKTtcbiAgICAgICAgICAgIG9iakhlYWRsaW5lQmFzZVByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9CQVNFX1BSSUNFKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZGlzcGxheUdyaWQgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLmlubmVySFRNTCA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbUJhc2VQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gZGF0YVtpXS5iYXNlUHJpY2UgKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbUJhc2VQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLmRpc3RQcmljZSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1EaXN0UHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1UaW1lUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gZGF0YVtpXS50aW1lUHJpY2UgKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtVGltZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0NvdW50ID0gcm93Q291bnQgPT09IFwicm93LWV2ZW5cIiA/IFwicm93LXVuZXZlblwiIDogXCJyb3ctZXZlblwiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJvdy5pbm5lckhUTUwgPSBcIjx0aD5cIiArIGkgKyBcIjwvdGg+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5iYXNlUHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5kaXN0UHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIiArIGRhdGFbaV0udGltZVByaWNlICsgXCLigqw8L3RkPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGVsZW1lbnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHNHZXJtYW4gPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdQTFosIE9ydCBvZGVyIFN0cmHDn2UgZWluZ2ViZW4uLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdFbnRmZXJudW5nJyxcbiAgICBIRUFETElORV9USU1FOiAnRGF1ZXInLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6ICdHcnVuZHByZWlzJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOiAnUHJlaXMgLyBrbScsXG4gICAgSEVBRExJTkVfVElNRV9QUklDRTogJ1ByZWlzIC8gbWluJyxcbiAgICBFUlJPUl9PVVRfT0ZfQk9VTkRTOiAnQWRyZXNzZSBhdcOfZXJoYWxiIGRlcyBUYXJpZmdlYmlldHMnLFxuICAgIEVSUk9SX0ZBTFNFX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuJyxcbiAgICBFUlJPUjonRmVobGVyJyxcbiAgICBTVEFSVF9TRUFSQ0g6ICdTdWNoZSBzdGFydGVuJyxcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHNFbmdsaXNoID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnRW50ZXIgcG9zdGFsIGNvZGUsIGNpdHkgb3Igc3RyZWV0Li4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRGlzdGFuY2UnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdUaW1lJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOidCYXNlIHByaWNlJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOidQcmljZSAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOidQcmljZSAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kJyxcbiAgICBFUlJPUjonRXJyb3InLFxuICAgIFNUQVJUX1NFQVJDSDogJ1N0YXJ0IHNlYXJjaCcsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iXSwic291cmNlUm9vdCI6IiJ9