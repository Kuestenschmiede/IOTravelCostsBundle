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
                                responseTariff = priceElement['kilometerPrice'] + "0000";
                                responseTariff = responseTariff.replace(".", ",");
                                indexDecimal = responseTariff.indexOf(',') + 3;
                                itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                                itemDistPrice.className = "grid-item " + rowCount;
                                parent.append(itemDistPrice);
                                autoauto += " auto";
                            }
                        }
                    } else {
                        let itemDistPrice = document.createElement('div');
                        responseTariff = data[i].distPrice[0]['kilometerPrice'] + "0000";
                        responseTariff = responseTariff.replace(".", ",");
                        indexDecimal = responseTariff.indexOf(',') + 3;
                        itemDistPrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                        itemDistPrice.className = "grid-item " + rowCount;
                        parent.append(itemDistPrice);
                    }
                    if (data[i].timePrice != 0) {
                        let itemTimePrice = document.createElement('div');
                        responseTariff = data[i].timePrice + "0000";
                        responseTariff = responseTariff.replace(".", ",");
                        indexDecimal = responseTariff.indexOf(',') + 3;
                        itemTimePrice.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                        itemTimePrice.className = "grid-item " + rowCount;
                        parent.append(itemTimePrice);
                        rowCount = rowCount === "row-even" ? "row-uneven" : "row-even";
                        autoauto += "auto";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXJpZmYtZmluZGVyLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWVuLmpzIl0sIm5hbWVzIjpbImxhbmdDb25zdGFudHMiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImxhbmd1YWdlIiwid2luZG93Iiwic2VydmljZUxhbmciLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJ0YXhpQ29uc3RhbnRzRW5nbGlzaCIsInRheGlDb25zdGFudHNHZXJtYW4iLCJmaW5kVGFyaWZmcyIsInVybCIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcmVudCIsImRpc3BsYXlHcmlkIiwiY3NzIiwicm93Q291bnQiLCJvYmpIZWFkbGluZURpc3RQcmljZSIsImh0bWwiLCJIRUFETElORV9ESVNUX1BSSUNFIiwib2JqSGVhZGxpbmVUaW1lUHJpY2UiLCJIRUFETElORV9USU1FX1BSSUNFIiwib2JqSGVhZGxpbmVCYXNlUHJpY2UiLCJIRUFETElORV9CQVNFX1BSSUNFIiwiaSIsImhhc093blByb3BlcnR5IiwiaXRlbU5hbWUiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaXRlbUJhc2VQcmljZSIsInJlc3BvbnNlVGFyaWZmIiwiYmFzZVByaWNlIiwicmVwbGFjZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJhdXRvYXV0byIsImxlbmd0aCIsInByaWNlSW5kZXgiLCJwcmljZUVsZW1lbnQiLCJoZWFkTGluZUh0bWwiLCJsYXN0IiwiYWRkSGVhZGxpbmUiLCJhZnRlciIsIml0ZW1EaXN0UHJpY2UiLCJkaXN0UHJpY2UiLCJ0aW1lUHJpY2UiLCJpdGVtVGltZVByaWNlIiwicmVtb3ZlIiwiZWxlbWVudFJvdyIsIkRVTU1ZX0lOUFVUIiwiSEVBRExJTkVfRElTVCIsIkhFQURMSU5FX1RJTUUiLCJFUlJPUl9PVVRfT0ZfQk9VTkRTIiwiRVJST1JfRkFMU0VfQUREUkVTUyIsIkVSUk9SIiwiU1RBUlRfU0VBUkNIIiwiTk9ORSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0EsTUFBTUEsZ0JBQWdCLEVBQXRCO0FBQ0E7Ozs7QUFJQUMsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekIsUUFBSUMsV0FBV0MsT0FBT0MsV0FBUCxJQUFzQkQsT0FBT0UsU0FBUCxDQUFpQkMsWUFBdkMsSUFBdURILE9BQU9FLFNBQVAsQ0FBaUJILFFBQXZGO0FBQ0EsUUFBSUEsYUFBYSxJQUFq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QW5ELEdBQThELE1BQTlELEdBQXNFckIsS0FBS1ksQ0FBTCxFQUFRdUIsU0FBOUUsR0FBMEYsUUFBMUYsR0FBcUcsTUFBckcsR0FBOEduQyxLQUFLWSxDQUFMLEVBQVF3QixTQUF0SCxHQUFrSSxRQUF6SjtBQUNBbkMsMkJBQU9pQixNQUFQLENBQWNxQixVQUFkO0FBQ0g7QUFDSjtBQUNKO0FBQ0osS0E3Rkw7QUErRkgsQzs7Ozs7Ozs7Ozs7O0FDM0hEO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXYTs7QUFFYjs7OztBQUdRLElBQUk3QyxzQkFBc0I7QUFDOUI4QyxlQUFhLGtDQURpQjtBQUU5QkMsaUJBQWUsWUFGZTtBQUc5QkMsaUJBQWUsT0FIZTtBQUk5Qi9CLHVCQUFxQixZQUpTO0FBSzlCSix1QkFBcUIsWUFMUztBQU05QkUsdUJBQXFCLGFBTlM7QUFPOUJrQyx1QkFBcUIsb0NBUFM7QUFROUJDLHVCQUFxQix3QkFSUztBQVM5QkMsU0FBTSxRQVR3QjtBQVU5QkMsZ0JBQWMsZUFWZ0I7QUFXOUJDLFFBQU0sRUFYd0IsQ0FXckI7QUFYcUIsQ0FBMUIsQyxDQVlMLDZCOzs7Ozs7Ozs7Ozs7QUM1Qkg7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdhOztBQUViOzs7O0FBR1EsSUFBSXRELHVCQUF1QjtBQUMvQitDLGVBQWEsc0NBRGtCO0FBRS9CQyxpQkFBZSxVQUZnQjtBQUcvQkMsaUJBQWUsTUFIZ0I7QUFJL0IvQix1QkFBb0IsWUFKVztBQUsvQkosdUJBQW9CLFlBTFc7QUFNL0JFLHVCQUFvQixhQU5XO0FBTy9Ca0MsdUJBQXFCLDBCQVBVO0FBUS9CQyx1QkFBcUIsbUJBUlU7QUFTL0JDLFNBQU0sT0FUeUI7QUFVL0JDLGdCQUFjLGNBVmlCO0FBVy9CQyxRQUFNLEVBWHlCLENBV3RCO0FBWHNCLENBQTNCLEMsQ0FZTCw2QiIsImZpbGUiOiJ0YXJpZmYtZmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9SZXNvdXJjZXMvcHVibGljL2pzL3RhcmlmZi1maW5kZXIuanNcIik7XG4iLCJpbXBvcnQge3RheGlDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi90YXhpLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dGF4aUNvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vdGF4aS1jb25zdGFudC1pMThuLWRlXCI7XG5jb25zdCBsYW5nQ29uc3RhbnRzID0ge307XG4vKipcbiAqIEluaXRpYWwgZnVuY3Rpb24gdG8gZW5hYmxlIHVzZXItaW5wdXQgdG8gdGhlIGd1aVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICBsZXQgbGFuZ3VhZ2UgPSB3aW5kb3cuc2VydmljZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZTtcbiAgICBpZiAobGFuZ3VhZ2UgPT09IFwiZW5cIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzRW5nbGlzaClcbiAgICB9XG4gICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT09IFwiZGVcIikge1xuICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzR2VybWFuKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNFbmdsaXNoKTtcbiAgICB9XG5cbiAgICBmaW5kVGFyaWZmcygpO1xufSk7XG5cbi8qKlxuICogY2FsbHMgdGFyaWZmU2VydmljZSB0byBmZXRjaCBpbmZvcm1hdGlvbnMgYW5kIHByaWNpbmcgYWJvdXQgdGhlIHNldCB0YXJpZmZzIGFuZCBzaG93cyB0aGVtXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbmZ1bmN0aW9uIGZpbmRUYXJpZmZzKCkge1xuICAgIGxldCB1cmwgPSBcImNvbjRnaXMvdGFyaWZmU2VydmljZS9cIiArIHdpbmRvdy5zZXR0aW5nSWQ7XG4gICAgJC5hamF4KHt1cmw6dXJsfSlcbiAgICAgICAgLmRvbmUoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBwYXJlbnQgPSAkKFwiLnRhcmlmZi1vdXRwdXRcIik7XG4gICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIHBhcmVudC5jc3MoJ2Rpc3BsYXknLCdncmlkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByb3dDb3VudCA9IFwicm93LWV2ZW5cIjtcblxuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lRGlzdFByaWNlID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lVGltZVByaWNlID0gJChcIi5oZWFkbGluZS10aW1lLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVUaW1lUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX1RJTUVfUFJJQ0UpO1xuICAgICAgICAgICAgbGV0IG9iakhlYWRsaW5lQmFzZVByaWNlID0gJChcIi5oZWFkbGluZS1iYXNlLXByaWNlXCIpO1xuICAgICAgICAgICAgb2JqSGVhZGxpbmVCYXNlUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0JBU0VfUFJJQ0UpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5kaXNwbGF5R3JpZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1OYW1lLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQmFzZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLmJhc2VQcmljZSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtQmFzZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdXRvYXV0byA9IFwiYXV0byBhdXRvXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXVsnZGlzdFByaWNlJ10ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IHByaWNlSW5kZXggaW4gZGF0YVtpXVsnZGlzdFByaWNlJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbaV1bJ2Rpc3RQcmljZSddLmhhc093blByb3BlcnR5KHByaWNlSW5kZXgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJpY2VFbGVtZW50ID0gZGF0YVtpXVsnZGlzdFByaWNlJ11bcHJpY2VJbmRleF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZExpbmVIdG1sID0gbGFuZ0NvbnN0YW50cy5IRUFETElORV9ESVNUX1BSSUNFICsgJzxicj4nICsgcHJpY2VFbGVtZW50WyduYW1lJ107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpY2VJbmRleCA9PT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChoZWFkTGluZUh0bWwpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFyZW50ID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpLmxhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkSGVhZGxpbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRIZWFkbGluZS5jbGFzc05hbWUgPSBcImhlYWRsaW5lLWRpc3QtcHJpY2UgZ3JpZC1pdGVtXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkSGVhZGxpbmUuaW5uZXJIVE1MID0gaGVhZExpbmVIdG1sO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZnRlcihhZGRIZWFkbGluZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSBwcmljZUVsZW1lbnRbJ2tpbG9tZXRlclByaWNlJ10gKyBcIjAwMDBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtRGlzdFByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9hdXRvICs9IFwiIGF1dG9cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtRGlzdFByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLmRpc3RQcmljZVswXVsna2lsb21ldGVyUHJpY2UnXSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YVtpXS50aW1lUHJpY2UgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpdGVtVGltZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSBkYXRhW2ldLnRpbWVQcmljZSArIFwiMDAwMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbVRpbWVQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbVRpbWVQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCA9PT0gXCJyb3ctZXZlblwiID8gXCJyb3ctdW5ldmVuXCIgOiBcInJvdy1ldmVuXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b2F1dG8gKz0gXCJhdXRvXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJyonKS5yZW1vdmUoJy5oZWFkbGluZS10aW1lLXByaWNlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcudGFyaWZmLW91dHB1dCcpLmNzcygnZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zJywgYXV0b2F1dG8pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJvdy5pbm5lckhUTUwgPSBcIjx0aD5cIiArIGkgKyBcIjwvdGg+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5iYXNlUHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5kaXN0UHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIiArIGRhdGFbaV0udGltZVByaWNlICsgXCLigqw8L3RkPlwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGVsZW1lbnRSb3cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgKTtcbn1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHNHZXJtYW4gPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdQTFosIE9ydCBvZGVyIFN0cmHDn2UgZWluZ2ViZW4uLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdFbnRmZXJudW5nJyxcbiAgICBIRUFETElORV9USU1FOiAnRGF1ZXInLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6ICdHcnVuZHByZWlzJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOiAnUHJlaXMgLyBrbScsXG4gICAgSEVBRExJTkVfVElNRV9QUklDRTogJ1ByZWlzIC8gbWluJyxcbiAgICBFUlJPUl9PVVRfT0ZfQk9VTkRTOiAnQWRyZXNzZSBhdcOfZXJoYWxiIGRlcyBUYXJpZmdlYmlldHMnLFxuICAgIEVSUk9SX0ZBTFNFX0FERFJFU1M6ICdBZHJlc3NlIG5pY2h0IGdlZnVuZGVuJyxcbiAgICBFUlJPUjonRmVobGVyJyxcbiAgICBTVEFSVF9TRUFSQ0g6ICdTdWNoZSBzdGFydGVuJyxcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHNFbmdsaXNoID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnRW50ZXIgcG9zdGFsIGNvZGUsIGNpdHkgb3Igc3RyZWV0Li4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRGlzdGFuY2UnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdUaW1lJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOidCYXNlIHByaWNlJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOidQcmljZSAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOidQcmljZSAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kJyxcbiAgICBFUlJPUjonRXJyb3InLFxuICAgIFNUQVJUX1NFQVJDSDogJ1N0YXJ0IHNlYXJjaCcsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iXSwic291cmNlUm9vdCI6IiJ9