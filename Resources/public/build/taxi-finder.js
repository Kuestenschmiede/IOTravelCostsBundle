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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/taxi-finder.js");
/******/ })
/************************************************************************/
/******/ ({

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
  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "./Resources/public/js/taxi-constants.js":
/*!***********************************************!*\
  !*** ./Resources/public/js/taxi-constants.js ***!
  \***********************************************/
/*! exports provided: taxiConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "taxiConstants", function() { return taxiConstants; });
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

var taxiConstants = {
  lol: 'PLZ, Ort oder Straße eingeben...',
  NONE: '' // last line
}; // end of "css constants" ---

/***/ }),

/***/ "./Resources/public/js/taxi-finder.js":
/*!********************************************!*\
  !*** ./Resources/public/js/taxi-finder.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taxi_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taxi-constant-i18n-en */ "./Resources/public/js/taxi-constant-i18n-en.js");
/* harmony import */ var _taxi_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taxi-constant-i18n-de */ "./Resources/public/js/taxi-constant-i18n-de.js");
/* harmony import */ var _taxi_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taxi-constants.js */ "./Resources/public/js/taxi-constants.js");






const $ = jQuery;
const langConstants = {};
var arrFromNames = [];
var arrFromPositions = [];
var arrToNames = [];
var arrToPositions = [];
var taxiData = {
    routeFrom: {},
    routeTo: {}
};

let routeFromInput = null;
let routeToInput = null;

/**
 * Saves the string of the start address to the script-scoped variable
 * @param address     String for start address
 * @returns {void}
 */
function setRouteFrom(address) {
    taxiData.routeFrom.adress = address;
}

/**
 * Saves the string of the destination address to the script-scoped variable
 * @param address     String for destination address
 * @returns {void}
 */
function setRouteTo(address) {
    taxiData.routeTo.adress = address;
}

/**
 * Handles the button press for start and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteFromPosition(coordinates) {
    handlePosition(coordinates, ".route-from", "routeFrom");
    calculateExpenses();
}

/**
 * Handles the button press for destination and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteToPosition(coordinates) {
    handlePosition(coordinates, ".route-to", "routeTo");
    calculateExpenses();
}

/**
 * Converts a distance in meters to a more readable format.
 * @param distanceInMeters     The distance to convert.
 * @returns {string}
 */
function toHumanDistance(distanceInMeters) {

    var distance, humanDistance;

    distance = parseInt(distanceInMeters, 10);
    distance = distance / 1000;

    if (distance >= 100) {
        humanDistance = distance.toFixed(0) + '&nbsp;' + 'km';
    } else if (distance >= 10) {
        humanDistance = distance.toFixed(1) + '&nbsp;' + 'km';
    } else if (distance >= 0.1) {
        humanDistance = distance.toFixed(2) + '&nbsp;' + 'km';
    } else {
        humanDistance = (distance * 1000).toFixed(0) + '&nbsp;' + 'm';
    }

    return humanDistance;
}

/**
 * Converts a time in seconds to a more readable format.
 * @param timeInSeconds     The time to convert.
 * @returns {string}
 */
function toHumanTime(timeInSeconds) {

    var seconds, minutes, hours, humanTime;

    seconds = parseInt(timeInSeconds, 10);
    minutes = parseInt(seconds / 60, 10);
    seconds = seconds % 60;

    hours = parseInt(minutes / 60, 10);
    minutes = minutes % 60;

    if (hours === 0 && minutes === 0) {
        humanTime = seconds + '&nbsp;' + 's';
    } else if (hours === 0) {
        humanTime = minutes + '&nbsp;' + 'min';
    } else {
        humanTime = hours + '&nbsp;' + 'h' + '&nbsp;' + minutes + '&nbsp;' + 'min';
    }

    return humanTime;
}

/**
 * Checks wether all params for the calculation of an expense are set and calls the server and displays the repsonse
 * @param
 * @returns {void}
 */
function calculateExpenses() {
    if (taxiData.routeFrom.loc && taxiData.routeTo.loc) {
        let url = "con4gis/expenseService/" + window.settingId + "/" + taxiData.routeFrom.loc[0] + "," + taxiData.routeFrom.loc[1] + ";" + taxiData.routeTo.loc[0] + "," + taxiData.routeTo.loc[1] + "/";
        $.ajax({ url: url }).done(function (data) {
            let tableNode = $(".route-output");
            tableNode.css("display", "block");
            $(".response-headline").remove();
            $(".response-value").remove();
            if (data.time) {
                let elementTime = $(".response-time");
                elementTime.html(toHumanTime(data.time));
            }
            if (data.dist) {
                let elementDistance = $(".response-dist");
                let responseDistance = data.dist + "";
                responseDistance = responseDistance.replace('.', '.');
                let indexDecimal = responseDistance.indexOf(',') + 3;

                elementDistance.html(responseDistance.substring(0, indexDecimal + 3) + " km");
            }
            let headlindeNode = $(".route-output-headline");
            let responseNode = $(".route-output-values");
            for (let tariffName in data.tariffs) {
                let headlineElement = document.createElement('th');
                headlineElement.innerHTML = tariffName;
                $(headlineElement).addClass("response-headline");
                let responseElement = document.createElement('td');
                let responseTariff = data.tariffs[tariffName] + "";
                responseTariff = responseTariff.replace(".", ",");
                let indexDecimal = responseTariff.indexOf(',') + 3;
                responseElement.innerHTML = responseTariff.substring(0, indexDecimal) + " €";
                $(responseElement).addClass("response-value");
                headlindeNode.append(headlineElement);
                responseNode.append(responseElement);
            }
        });
    }
}

/**
 * calls reverse-geosearch to set an address-string for coordinates and set it to the script-scoped variable
 * @param coordinates       coordinates from navigator.geolocation
 * @param cssid             css-class to set response-property to
 * @param propName          css-class to set response-property to
 * @returns {void}
 */
function handlePosition(coordinates, cssId, propName) {
    let coords = coordinates.coords;
    // TODO aus modul hier rein geben
    if (window.bBox && window.bBox[0]) {
        if (window.bBox[0] < coords.latitude && coords.latitude < window.bBox[2] && window.bBox[1] < coords.longitude && coords.longitude < window.bBox[3]) {
            if (cssId === ".route-from") {
                taxiData.routeFrom.loc = [coords.latitude, coords.longitude];
            } else {
                taxiData.routeTo.loc = [coords.latitude, coords.longitude];
            }
            let url = window.proxyUrl + '/reverse.php?key=' + window.keyReverse + '&format=json&lat=' + coords.latitude + '&lon=' + coords.longitude;
            $.ajax({ url: url }).done(function (data) {
                let address = "";
                if (data.address.pedestrian) {
                    address += data.address.pedestrian + " ";
                    if (data.address.house_number) {
                        address += data.address.house_number + ", ";
                    }
                } else if (data.address.path) {
                    address += data.address.path + " ";
                    if (data.address.house_number) {
                        address += data.address.house_number;
                    }
                }
                if (address.length > 0) {
                    address += ", ";
                }

                if (data.address.postcode) {
                    address += data.address.postcode + " ";
                }
                if (data.address.town) {
                    address += data.address.town;
                }
                $(cssId).val(address);
                taxiData[propName].adress = address;
            });
        } else {
            // @ToDo OutofBounds
        }
    } else {
        if (cssId === ".route-from") {
            taxiData.routeFrom.loc = [coords.latitude, coords.longitude];
        } else {
            taxiData.routeTo.loc = [coords.latitude, coords.longitude];
        }
        let url = window.proxyUrl + '/reverse.php?key=' + window.keyReverse + '&format=json&lat=' + coords.latitude + '&lon=' + coords.longitude;
        $.ajax({ url: url }).done(function (data) {
            let address = "";
            if (data.address.pedestrian) {
                address += data.address.pedestrian + " ";
                if (data.address.house_number) {
                    address += data.address.house_number + ", ";
                }
            } else if (data.address.path) {
                address += data.address.path + " ";
                if (data.address.house_number) {
                    address += data.address.house_number;
                }
            }
            if (address.length > 0) {
                address += ", ";
            }

            if (data.address.postcode) {
                address += data.address.postcode + " ";
            }
            if (data.address.town) {
                address += data.address.town;
            }
            $(cssId).val(address);
            taxiData[propName].adress = address;
        });
    }
}

/**
 * calls geosearch to set autocomplete suggestions for an address-string
 * @param input       address-string from input
 * @param cssid       css-class to set response-property to
 * @returns {void}
 */
function handleAdress(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({ url: url }).done(function (data) {
        if (data[0] && data[0].display_name) {
            // $(cssId).val(data[0].display_name);

            for (let i in data) {
                if (data.hasOwnProperty(i)) {
                    if (window.bBox && window.bBox[0]) {
                        if (window.bBox[0] < data[i].lon && data[i].lon < window.bBox[2] && window.bBox[1] < data[i].lat && data[i].lat < window.bBox[3]) {
                            if (cssId === ".route-from") {
                                arrFromNames.push(data[i].display_name);
                                arrFromPositions.push([data[i].lat, data[i].lon]);
                            } else {
                                arrToNames.push(data[i].display_name);
                                arrToPositions.push([data[i].lat, data[i].lon]);
                            }
                        } else {
                            //@ToDo outofbounds
                        }
                    } else {
                        if (cssId === ".route-from") {
                            arrFromNames.push(data[i].display_name);
                            arrFromPositions.push([data[i].lat, data[i].lon]);
                        } else {
                            arrToNames.push(data[i].display_name);
                            arrToPositions.push([data[i].lat, data[i].lon]);
                        }
                    }
                }
            }
            if (cssId === ".route-from") {
                $(cssId).autocomplete({
                    source: arrFromNames
                });
            } else {
                $(cssId).autocomplete({
                    source: arrToNames
                });
            }
        }
    });
}

/**
 * calls reverse-geosearch to set coordinates for an address-string and set it to the script-scoped variable
 * @param input       address-string from input
 * @param cssid       css-class to set response-property to
 * @returns {void}}
 */
function submitSearch(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({ url: url }).done(function (data) {

        if (window.bBox && window.bBox[0]) {
            if (window.bBox[0] < data[0].lon && data[0].lon < window.bBox[2] && window.bBox[1] < data[0].lat && data[0].lat < window.bBox[3]) {}
        }
        if (data[0] && data[0].display_name) {
            // $(cssId).val(data[0].display_name);
            if (cssId === ".route-to") {
                taxiData.routeTo.loc = [data[0].lat, data[0].lon];
            } else {
                taxiData.routeFrom.loc = [data[0].lat, data[0].lon];
            }
            calculateExpenses();
        }
    });
}

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function () {
    let language = window.navigator.userLanguage || window.navigator.language;
    if (language = "en") {
        $.extend(langConstants, _taxi_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["taxiConstantsEnglish"]);
    } else if (language == "de") {
        $.extend(langConstants, _taxi_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__["taxiConstantsGerman"]);
    } else {
        $.extend(langConstants, _taxi_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["taxiConstantsEnglish"]);
    }
    window.bBox = JSON.parse(window.bBox);
    let objInputFrom = $(".route-to");
    if (objInputFrom[0]) {
        objInputFrom[0].placeholder = langConstants.DUMMY_INPUT;
    }
    let objInputTo = $(".route-from");
    if (objInputTo[0]) {
        objInputTo[0].placeholder = langConstants.DUMMY_INPUT;
    }
    let objHeadlineDist = $(".headline-dist");
    objHeadlineDist.html(langConstants.HEADLINE_DIST);
    let objHeadlineTime = $(".headline-time");
    objHeadlineTime.html(langConstants.HEADLINE_TIME);
    const enterListener = function (event) {
        const scope = this;
        if (event.keyCode === 13) {
            submitSearch($(scope).val(), "." + scope.classList[0]);
        } else {
            let currTime = Math.floor(Date.now());
            scope.counter = currTime;
            setTimeout(function () {
                if (scope.counter && scope.counter + 1000 < Math.floor(Date.now())) {
                    delete scope.counter;
                    handleAdress($(scope).val(), "." + scope.classList[0]);
                }
            }, 1500);
        }
    };

    $(".route-from").on('keydown', enterListener);
    $(".route-from").on('autocompleteselect', function (event, ui) {
        let value = ui.item.value;
        let loc = arrFromPositions[arrFromNames.findIndex(danger => danger === value)];
        taxiData.routeFrom.loc = loc;
        calculateExpenses();
    });
    $(".route-to").on('keydown', enterListener);

    $(".route-from").on('change', function () {
        let address = $(this).val();
        setRouteFrom(address);
    });

    $(".route-to").on('change', function () {
        let address = $(this).val();
        setRouteTo(address);
    });

    $(".start-search").on('click', function () {
        submitSearch();
    });

    $(".route-from-geolocation").on("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleRouteFromPosition);
        } else {
            console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
        }
    });

    $(".route-to-geolocation").on("click", function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(handleRouteToPosition);
        } else {
            console.warn("The geolocation API is not available in your browser. Consider updating it or switching to a newer browser.");
        }
    });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50LWkxOG4tZW4uanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL3RheGktZmluZGVyLmpzIl0sIm5hbWVzIjpbInRheGlDb25zdGFudHNHZXJtYW4iLCJEVU1NWV9JTlBVVCIsIkhFQURMSU5FX0RJU1QiLCJIRUFETElORV9USU1FIiwiTk9ORSIsInRheGlDb25zdGFudHNFbmdsaXNoIiwidGF4aUNvbnN0YW50cyIsImxvbCIsIiQiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiYXJyRnJvbU5hbWVzIiwiYXJyRnJvbVBvc2l0aW9ucyIsImFyclRvTmFtZXMiLCJhcnJUb1Bvc2l0aW9ucyIsInRheGlEYXRhIiwicm91dGVGcm9tIiwicm91dGVUbyIsInJvdXRlRnJvbUlucHV0Iiwicm91dGVUb0lucHV0Iiwic2V0Um91dGVGcm9tIiwiYWRkcmVzcyIsImFkcmVzcyIsInNldFJvdXRlVG8iLCJoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbiIsImNvb3JkaW5hdGVzIiwiaGFuZGxlUG9zaXRpb24iLCJjYWxjdWxhdGVFeHBlbnNlcyIsImhhbmRsZVJvdXRlVG9Qb3NpdGlvbiIsInRvSHVtYW5EaXN0YW5jZSIsImRpc3RhbmNlSW5NZXRlcnMiLCJkaXN0YW5jZSIsImh1bWFuRGlzdGFuY2UiLCJwYXJzZUludCIsInRvRml4ZWQiLCJ0b0h1bWFuVGltZSIsInRpbWVJblNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaHVtYW5UaW1lIiwibG9jIiwidXJsIiwid2luZG93Iiwic2V0dGluZ0lkIiwiYWpheCIsImRvbmUiLCJkYXRhIiwidGFibGVOb2RlIiwiY3NzIiwicmVtb3ZlIiwidGltZSIsImVsZW1lbnRUaW1lIiwiaHRtbCIsImRpc3QiLCJlbGVtZW50RGlzdGFuY2UiLCJyZXNwb25zZURpc3RhbmNlIiwicmVwbGFjZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJoZWFkbGluZGVOb2RlIiwicmVzcG9uc2VOb2RlIiwidGFyaWZmTmFtZSIsInRhcmlmZnMiLCJoZWFkbGluZUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhZGRDbGFzcyIsInJlc3BvbnNlRWxlbWVudCIsInJlc3BvbnNlVGFyaWZmIiwiYXBwZW5kIiwiY3NzSWQiLCJwcm9wTmFtZSIsImNvb3JkcyIsImJCb3giLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInByb3h5VXJsIiwia2V5UmV2ZXJzZSIsInBlZGVzdHJpYW4iLCJob3VzZV9udW1iZXIiLCJwYXRoIiwibGVuZ3RoIiwicG9zdGNvZGUiLCJ0b3duIiwidmFsIiwiaGFuZGxlQWRyZXNzIiwiaW5wdXQiLCJrZXlGb3J3YXJkIiwiZGlzcGxheV9uYW1lIiwiaSIsImhhc093blByb3BlcnR5IiwibG9uIiwibGF0IiwicHVzaCIsImF1dG9jb21wbGV0ZSIsInNvdXJjZSIsInN1Ym1pdFNlYXJjaCIsInJlYWR5IiwibGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJKU09OIiwicGFyc2UiLCJvYmpJbnB1dEZyb20iLCJwbGFjZWhvbGRlciIsIm9iaklucHV0VG8iLCJvYmpIZWFkbGluZURpc3QiLCJvYmpIZWFkbGluZVRpbWUiLCJlbnRlckxpc3RlbmVyIiwiZXZlbnQiLCJzY29wZSIsImtleUNvZGUiLCJjbGFzc0xpc3QiLCJjdXJyVGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjb3VudGVyIiwic2V0VGltZW91dCIsIm9uIiwidWkiLCJ2YWx1ZSIsIml0ZW0iLCJmaW5kSW5kZXgiLCJkYW5nZXIiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXYTs7QUFFYjs7OztBQUdRLElBQUlBLHNCQUFzQjtBQUM5QkMsZUFBYSxrQ0FEaUI7QUFFOUJDLGlCQUFlLFlBRmU7QUFHOUJDLGlCQUFlLE9BSGU7QUFJOUJDLFFBQU0sRUFKd0IsQ0FJckI7QUFKcUIsQ0FBMUIsQyxDQUtMLDZCOzs7Ozs7Ozs7Ozs7QUNyQkg7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdhOztBQUViOzs7O0FBR1EsSUFBSUMsdUJBQXVCO0FBQy9CSixlQUFhLHNDQURrQjtBQUUvQkMsaUJBQWUsVUFGZ0I7QUFHL0JDLGlCQUFlLE1BSGdCO0FBSS9CQyxRQUFNLEVBSnlCLENBSXRCO0FBSnNCLENBQTNC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QUxEO0FBTUFuQixNQUFFLFdBQUYsRUFBZW9ILEVBQWYsQ0FBa0IsU0FBbEIsRUFBNkJaLGFBQTdCOztBQUVBeEcsTUFBRSxhQUFGLEVBQWlCb0gsRUFBakIsQ0FBb0IsUUFBcEIsRUFBOEIsWUFBVztBQUNyQyxZQUFJdkcsVUFBVWIsRUFBRSxJQUFGLEVBQVErRSxHQUFSLEVBQWQ7QUFDQW5FLHFCQUFhQyxPQUFiO0FBQ0gsS0FIRDs7QUFLQWIsTUFBRSxXQUFGLEVBQWVvSCxFQUFmLENBQWtCLFFBQWxCLEVBQTRCLFlBQVc7QUFDbkMsWUFBSXZHLFVBQVViLEVBQUUsSUFBRixFQUFRK0UsR0FBUixFQUFkO0FBQ0FoRSxtQkFBV0YsT0FBWDtBQUNILEtBSEQ7O0FBTUFiLE1BQUUsZUFBRixFQUFtQm9ILEVBQW5CLENBQXNCLE9BQXRCLEVBQStCLFlBQVc7QUFDdEN6QjtBQUNILEtBRkQ7O0FBSUEzRixNQUFFLHlCQUFGLEVBQTZCb0gsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBWTtBQUNqRCxZQUFJdEIsVUFBVTRCLFdBQWQsRUFBMkI7QUFDdkI1QixzQkFBVTRCLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5QzNHLHVCQUF6QztBQUNILFNBRkQsTUFFTztBQUNINEcsb0JBQVFDLElBQVIsQ0FBYSw2R0FBYjtBQUNIO0FBQ0osS0FORDs7QUFRQTdILE1BQUUsdUJBQUYsRUFBMkJvSCxFQUEzQixDQUE4QixPQUE5QixFQUF1QyxZQUFZO0FBQy9DLFlBQUl0QixVQUFVNEIsV0FBZCxFQUEyQjtBQUN2QjVCLHNCQUFVNEIsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDdkcscUJBQXpDO0FBQ0gsU0FGRCxNQUVPO0FBQ0h3RyxvQkFBUUMsSUFBUixDQUFhLDZHQUFiO0FBQ0g7QUFDSixLQU5EO0FBT0gsQ0FsRkEsRSIsImZpbGUiOiJ0YXhpLWZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qc1wiKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHNHZXJtYW4gPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdQTFosIE9ydCBvZGVyIFN0cmHDn2UgZWluZ2ViZW4uLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdFbnRmZXJudW5nJyxcbiAgICBIRUFETElORV9USU1FOiAnRGF1ZXInLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdGF4aUNvbnN0YW50c0VuZ2xpc2ggPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdFbnRlciBwb3N0YWwgY29kZSwgY2l0eSBvciBzdHJlZXQuLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdEaXN0YW5jZScsXG4gICAgSEVBRExJTkVfVElNRTogJ1RpbWUnLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdGF4aUNvbnN0YW50cyA9IHtcbiAgICBsb2w6ICdQTFosIE9ydCBvZGVyIFN0cmHDn2UgZWluZ2ViZW4uLi4nLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQge3RheGlDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi90YXhpLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dGF4aUNvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vdGF4aS1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3RheGlDb25zdGFudHN9IGZyb20gXCIuL3RheGktY29uc3RhbnRzLmpzXCI7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5jb25zdCBsYW5nQ29uc3RhbnRzID0ge307XG52YXIgYXJyRnJvbU5hbWVzID0gW107XG52YXIgYXJyRnJvbVBvc2l0aW9ucyA9IFtdO1xudmFyIGFyclRvTmFtZXMgPSBbXTtcbnZhciBhcnJUb1Bvc2l0aW9ucyA9IFtdO1xudmFyIHRheGlEYXRhID0ge1xuICAgIHJvdXRlRnJvbToge30sXG4gICAgcm91dGVUbzoge31cbn07XG5cbmxldCByb3V0ZUZyb21JbnB1dCA9IG51bGw7XG5sZXQgcm91dGVUb0lucHV0ID0gbnVsbDtcblxuLyoqXG4gKiBTYXZlcyB0aGUgc3RyaW5nIG9mIHRoZSBzdGFydCBhZGRyZXNzIHRvIHRoZSBzY3JpcHQtc2NvcGVkIHZhcmlhYmxlXG4gKiBAcGFyYW0gYWRkcmVzcyAgICAgU3RyaW5nIGZvciBzdGFydCBhZGRyZXNzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2V0Um91dGVGcm9tKGFkZHJlc3MpIHtcbiAgICB0YXhpRGF0YS5yb3V0ZUZyb20uYWRyZXNzID0gYWRkcmVzcztcbn1cblxuLyoqXG4gKiBTYXZlcyB0aGUgc3RyaW5nIG9mIHRoZSBkZXN0aW5hdGlvbiBhZGRyZXNzIHRvIHRoZSBzY3JpcHQtc2NvcGVkIHZhcmlhYmxlXG4gKiBAcGFyYW0gYWRkcmVzcyAgICAgU3RyaW5nIGZvciBkZXN0aW5hdGlvbiBhZGRyZXNzXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2V0Um91dGVUbyhhZGRyZXNzKSB7XG4gICAgdGF4aURhdGEucm91dGVUby5hZHJlc3MgPSBhZGRyZXNzO1xufVxuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGJ1dHRvbiBwcmVzcyBmb3Igc3RhcnQgYW5kIHRyaWVzIHRvIGNhbGN1bGF0ZSB0aGUgZXhwZW5zZXNcbiAqIEBwYXJhbSBjb29yZGluYXRlcyAgICAgY29vcmRpbmF0ZXMgZnJvbSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBcIi5yb3V0ZS1mcm9tXCIsIFwicm91dGVGcm9tXCIpO1xuICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG5cbn1cblxuLyoqXG4gKiBIYW5kbGVzIHRoZSBidXR0b24gcHJlc3MgZm9yIGRlc3RpbmF0aW9uIGFuZCB0cmllcyB0byBjYWxjdWxhdGUgdGhlIGV4cGVuc2VzXG4gKiBAcGFyYW0gY29vcmRpbmF0ZXMgICAgIGNvb3JkaW5hdGVzIGZyb20gbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlUm91dGVUb1Bvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIFwiLnJvdXRlLXRvXCIsIFwicm91dGVUb1wiKTtcbiAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgZGlzdGFuY2UgaW4gbWV0ZXJzIHRvIGEgbW9yZSByZWFkYWJsZSBmb3JtYXQuXG4gKiBAcGFyYW0gZGlzdGFuY2VJbk1ldGVycyAgICAgVGhlIGRpc3RhbmNlIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b0h1bWFuRGlzdGFuY2UoZGlzdGFuY2VJbk1ldGVycykge1xuXG4gICAgdmFyIGRpc3RhbmNlLFxuICAgICAgICBodW1hbkRpc3RhbmNlO1xuXG4gICAgZGlzdGFuY2UgPSBwYXJzZUludChkaXN0YW5jZUluTWV0ZXJzLCAxMCk7XG4gICAgZGlzdGFuY2UgPSBkaXN0YW5jZSAvIDEwMDA7XG5cbiAgICBpZiAoZGlzdGFuY2UgPj0gMTAwKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDApICsgJyZuYnNwOycgKyAna20nO1xuICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPj0gMTApIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMSkgKyAnJm5ic3A7JyArICdrbSc7XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+PSAwLjEpIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMikgKyAnJm5ic3A7JyArICdrbSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IChkaXN0YW5jZSAqIDEwMDApLnRvRml4ZWQoMCkgKyAnJm5ic3A7JyArICdtJztcbiAgICB9XG5cbiAgICByZXR1cm4gaHVtYW5EaXN0YW5jZTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHRpbWUgaW4gc2Vjb25kcyB0byBhIG1vcmUgcmVhZGFibGUgZm9ybWF0LlxuICogQHBhcmFtIHRpbWVJblNlY29uZHMgICAgIFRoZSB0aW1lIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b0h1bWFuVGltZSh0aW1lSW5TZWNvbmRzKSB7XG5cbiAgICB2YXIgc2Vjb25kcyxcbiAgICAgICAgbWludXRlcyxcbiAgICAgICAgaG91cnMsXG4gICAgICAgIGh1bWFuVGltZTtcblxuICAgIHNlY29uZHMgPSBwYXJzZUludCh0aW1lSW5TZWNvbmRzLCAxMCk7XG4gICAgbWludXRlcyA9IHBhcnNlSW50KHNlY29uZHMgLyA2MCwgMTApO1xuICAgIHNlY29uZHMgPSBzZWNvbmRzICUgNjA7XG5cbiAgICBob3VycyA9IHBhcnNlSW50KG1pbnV0ZXMgLyA2MCwgMTApO1xuICAgIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgICBpZiAoaG91cnMgPT09IDAgJiYgbWludXRlcyA9PT0gMCkge1xuICAgICAgICBodW1hblRpbWUgPSBzZWNvbmRzICsgJyZuYnNwOycgKyAncyc7XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgICBodW1hblRpbWUgPSBtaW51dGVzICsgJyZuYnNwOycgKyAnbWluJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBodW1hblRpbWUgPSBob3VycyArICcmbmJzcDsnICsgJ2gnICsgJyZuYnNwOycgKyBtaW51dGVzICsgJyZuYnNwOycgKyAnbWluJztcbiAgICB9XG5cbiAgICByZXR1cm4gaHVtYW5UaW1lO1xufVxuXG4vKipcbiAqIENoZWNrcyB3ZXRoZXIgYWxsIHBhcmFtcyBmb3IgdGhlIGNhbGN1bGF0aW9uIG9mIGFuIGV4cGVuc2UgYXJlIHNldCBhbmQgY2FsbHMgdGhlIHNlcnZlciBhbmQgZGlzcGxheXMgdGhlIHJlcHNvbnNlXG4gKiBAcGFyYW1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBjYWxjdWxhdGVFeHBlbnNlcyAoKSB7XG4gICAgaWYgKHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgJiYgdGF4aURhdGEucm91dGVUby5sb2MpIHtcbiAgICAgICAgbGV0IHVybCA9IFwiY29uNGdpcy9leHBlbnNlU2VydmljZS9cIiArIHdpbmRvdy5zZXR0aW5nSWQgKyBcIi9cIiArIHRheGlEYXRhLnJvdXRlRnJvbS5sb2NbMF0gKyBcIixcIiArIHRheGlEYXRhLnJvdXRlRnJvbS5sb2NbMV0gKyBcIjtcIiArIHRheGlEYXRhLnJvdXRlVG8ubG9jWzBdICsgXCIsXCIgKyB0YXhpRGF0YS5yb3V0ZVRvLmxvY1sxXSArIFwiL1wiO1xuICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVOb2RlID0gJChcIi5yb3V0ZS1vdXRwdXRcIik7XG4gICAgICAgICAgICB0YWJsZU5vZGUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgJChcIi5yZXNwb25zZS1oZWFkbGluZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICQoXCIucmVzcG9uc2UtdmFsdWVcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICBpZiAoZGF0YS50aW1lKSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnRUaW1lID0gJChcIi5yZXNwb25zZS10aW1lXCIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnRUaW1lLmh0bWwodG9IdW1hblRpbWUoZGF0YS50aW1lKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5kaXN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnREaXN0YW5jZSA9ICQoXCIucmVzcG9uc2UtZGlzdFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEaXN0YW5jZSA9IGRhdGEuZGlzdCArIFwiXCI7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VEaXN0YW5jZSA9IHJlc3BvbnNlRGlzdGFuY2UucmVwbGFjZSgnLicsJy4nKTtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VEaXN0YW5jZS5pbmRleE9mKCcsJykgKyAzO1xuXG4gICAgICAgICAgICAgICAgZWxlbWVudERpc3RhbmNlLmh0bWwocmVzcG9uc2VEaXN0YW5jZS5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsICsgMykgKyBcIiBrbVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBoZWFkbGluZGVOb2RlID0gJChcIi5yb3V0ZS1vdXRwdXQtaGVhZGxpbmVcIik7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VOb2RlID0gJChcIi5yb3V0ZS1vdXRwdXQtdmFsdWVzXCIpO1xuICAgICAgICAgICAgZm9yKGxldCB0YXJpZmZOYW1lIGluIGRhdGEudGFyaWZmcykge1xuICAgICAgICAgICAgICAgIGxldCBoZWFkbGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgICAgIGhlYWRsaW5lRWxlbWVudC5pbm5lckhUTUwgPSB0YXJpZmZOYW1lO1xuICAgICAgICAgICAgICAgICQoaGVhZGxpbmVFbGVtZW50KS5hZGRDbGFzcyhcInJlc3BvbnNlLWhlYWRsaW5lXCIpXG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gZGF0YS50YXJpZmZzW3RhcmlmZk5hbWVdICsgXCJcIjtcbiAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlRWxlbWVudC5pbm5lckhUTUwgPSByZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiXG4gICAgICAgICAgICAgICAgJChyZXNwb25zZUVsZW1lbnQpLmFkZENsYXNzKFwicmVzcG9uc2UtdmFsdWVcIilcbiAgICAgICAgICAgICAgICBoZWFkbGluZGVOb2RlLmFwcGVuZChoZWFkbGluZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlTm9kZS5hcHBlbmQocmVzcG9uc2VFbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxufVxuXG4vKipcbiAqIGNhbGxzIHJldmVyc2UtZ2Vvc2VhcmNoIHRvIHNldCBhbiBhZGRyZXNzLXN0cmluZyBmb3IgY29vcmRpbmF0ZXMgYW5kIHNldCBpdCB0byB0aGUgc2NyaXB0LXNjb3BlZCB2YXJpYWJsZVxuICogQHBhcmFtIGNvb3JkaW5hdGVzICAgICAgIGNvb3JkaW5hdGVzIGZyb20gbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gKiBAcGFyYW0gY3NzaWQgICAgICAgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHBhcmFtIHByb3BOYW1lICAgICAgICAgIGNzcy1jbGFzcyB0byBzZXQgcmVzcG9uc2UtcHJvcGVydHkgdG9cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcywgY3NzSWQsIHByb3BOYW1lKSB7XG4gICAgbGV0IGNvb3JkcyA9IGNvb3JkaW5hdGVzLmNvb3JkcztcbiAgICAvLyBUT0RPIGF1cyBtb2R1bCBoaWVyIHJlaW4gZ2ViZW5cbiAgICBpZiAod2luZG93LmJCb3ggJiYgd2luZG93LmJCb3hbMF0pIHtcbiAgICAgICAgaWYgKHdpbmRvdy5iQm94WzBdIDwgY29vcmRzLmxhdGl0dWRlICYmIGNvb3Jkcy5sYXRpdHVkZSA8IHdpbmRvdy5iQm94WzJdICYmIHdpbmRvdy5iQm94WzFdIDwgY29vcmRzLmxvbmdpdHVkZSAmJiBjb29yZHMubG9uZ2l0dWRlIDwgd2luZG93LmJCb3hbM10pIHtcbiAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyAnL3JldmVyc2UucGhwP2tleT0nKyB3aW5kb3cua2V5UmV2ZXJzZSsnJmZvcm1hdD1qc29uJmxhdD0nICsgY29vcmRzLmxhdGl0dWRlICsgJyZsb249JyArIGNvb3Jkcy5sb25naXR1ZGU7XG4gICAgICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFkZHJlc3MucGVkZXN0cmlhbikge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIgKyBcIiwgXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuYWRkcmVzcy5wYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBhdGggKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWRkcmVzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gXCIsIFwiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFkZHJlc3MucG9zdGNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucG9zdGNvZGUgKyBcIiBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy50b3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnRvd247XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICQoY3NzSWQpLnZhbChhZGRyZXNzKTtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YVtwcm9wTmFtZV0uYWRyZXNzID0gYWRkcmVzcztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gQFRvRG8gT3V0b2ZCb3VuZHNcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlVG8ubG9jID0gW2Nvb3Jkcy5sYXRpdHVkZSwgY29vcmRzLmxvbmdpdHVkZV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArICcvcmV2ZXJzZS5waHA/a2V5PScrIHdpbmRvdy5rZXlSZXZlcnNlKycmZm9ybWF0PWpzb24mbGF0PScgKyBjb29yZHMubGF0aXR1ZGUgKyAnJmxvbj0nICsgY29vcmRzLmxvbmdpdHVkZTtcbiAgICAgICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgbGV0IGFkZHJlc3MgPSBcIlwiO1xuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuKSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGVkZXN0cmlhbiArIFwiIFwiO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuYWRkcmVzcy5wYXRoKSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGF0aCArIFwiIFwiO1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYWRkcmVzcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyArPSBcIiwgXCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChkYXRhLmFkZHJlc3MucG9zdGNvZGUpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wb3N0Y29kZSArIFwiIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy50b3duKSB7XG4gICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoY3NzSWQpLnZhbChhZGRyZXNzKTtcbiAgICAgICAgICAgIHRheGlEYXRhW3Byb3BOYW1lXS5hZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICB9KTtcbiAgICB9XG5cbn1cblxuLyoqXG4gKiBjYWxscyBnZW9zZWFyY2ggdG8gc2V0IGF1dG9jb21wbGV0ZSBzdWdnZXN0aW9ucyBmb3IgYW4gYWRkcmVzcy1zdHJpbmdcbiAqIEBwYXJhbSBpbnB1dCAgICAgICBhZGRyZXNzLXN0cmluZyBmcm9tIGlucHV0XG4gKiBAcGFyYW0gY3NzaWQgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZUFkcmVzcyhpbnB1dCwgY3NzSWQpIHtcbiAgICBsZXQgdXJsID0gd2luZG93LnByb3h5VXJsICsgXCJzZWFyY2gucGhwP2Zvcm1hdD1qc29uJmtleT1cIiArIHdpbmRvdy5rZXlGb3J3YXJkICsgXCImcT1cIiArIGlucHV0O1xuICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSkge1xuICAgICAgICAgICAgLy8gJChjc3NJZCkudmFsKGRhdGFbMF0uZGlzcGxheV9uYW1lKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5iQm94ICYmIHdpbmRvdy5iQm94WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmJCb3hbMF0gPCBkYXRhW2ldLmxvbiAmJiBkYXRhW2ldLmxvbiA8IHdpbmRvdy5iQm94WzJdICYmIHdpbmRvdy5iQm94WzFdIDwgZGF0YVtpXS5sYXQgJiYgZGF0YVtpXS5sYXQgPCB3aW5kb3cuYkJveFszXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckZyb21OYW1lcy5wdXNoKGRhdGFbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbVBvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvUG9zaXRpb25zLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQFRvRG8gb3V0b2Zib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbU5hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckZyb21Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJUb05hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvUG9zaXRpb25zLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgICAgICQoY3NzSWQpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogYXJyRnJvbU5hbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGNzc0lkKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGFyclRvTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcbn1cblxuLyoqXG4gKiBjYWxscyByZXZlcnNlLWdlb3NlYXJjaCB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGFuIGFkZHJlc3Mtc3RyaW5nIGFuZCBzZXQgaXQgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBpbnB1dCAgICAgICBhZGRyZXNzLXN0cmluZyBmcm9tIGlucHV0XG4gKiBAcGFyYW0gY3NzaWQgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBzdWJtaXRTZWFyY2goaW5wdXQsIGNzc0lkKSB7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArIFwic2VhcmNoLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyB3aW5kb3cua2V5Rm9yd2FyZCArIFwiJnE9XCIgKyBpbnB1dDtcbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5iQm94ICYmIHdpbmRvdy5iQm94WzBdKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmJCb3hbMF0gPCBkYXRhWzBdLmxvbiAmJiBkYXRhWzBdLmxvbiA8IHdpbmRvdy5iQm94WzJdICYmIHdpbmRvdy5iQm94WzFdIDwgZGF0YVswXS5sYXQgJiYgZGF0YVswXS5sYXQgPCB3aW5kb3cuYkJveFszXSkge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUpIHtcbiAgICAgICAgICAgIC8vICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLXRvXCIpIHtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZVRvLmxvYyA9IFtkYXRhWzBdLmxhdCwgZGF0YVswXS5sb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtkYXRhWzBdLmxhdCwgZGF0YVswXS5sb25dO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8qKlxuICogSW5pdGlhbCBmdW5jdGlvbiB0byBlbmFibGUgdXNlci1pbnB1dCB0byB0aGUgZ3VpXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbiAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgbGV0IGxhbmd1YWdlID0gd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZTtcbiAgICAgaWYgKGxhbmd1YWdlID0gXCJlblwiKSB7XG4gICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzRW5nbGlzaClcbiAgICAgfVxuICAgICBlbHNlIGlmIChsYW5ndWFnZSA9PSBcImRlXCIpIHtcbiAgICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNHZXJtYW4pXG5cbiAgICAgfVxuICAgICBlbHNlIHtcbiAgICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNFbmdsaXNoKVxuICAgICB9XG4gICAgIHdpbmRvdy5iQm94ID0gSlNPTi5wYXJzZSh3aW5kb3cuYkJveCk7XG4gICAgbGV0IG9iaklucHV0RnJvbSA9ICQoXCIucm91dGUtdG9cIik7XG4gICAgaWYgKG9iaklucHV0RnJvbVswXSkge1xuICAgICAgICBvYmpJbnB1dEZyb21bMF0ucGxhY2Vob2xkZXIgPSBsYW5nQ29uc3RhbnRzLkRVTU1ZX0lOUFVUO1xuICAgIH1cbiAgICBsZXQgb2JqSW5wdXRUbyA9ICQoXCIucm91dGUtZnJvbVwiKTtcbiAgICBpZiAob2JqSW5wdXRUb1swXSkge1xuICAgICAgICBvYmpJbnB1dFRvWzBdLnBsYWNlaG9sZGVyID0gbGFuZ0NvbnN0YW50cy5EVU1NWV9JTlBVVDtcbiAgICB9XG4gICAgbGV0IG9iakhlYWRsaW5lRGlzdCA9ICQoXCIuaGVhZGxpbmUtZGlzdFwiKTtcbiAgICBvYmpIZWFkbGluZURpc3QuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1QpO1xuICAgIGxldCBvYmpIZWFkbGluZVRpbWUgPSAkKFwiLmhlYWRsaW5lLXRpbWVcIik7XG4gICAgIG9iakhlYWRsaW5lVGltZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfVElNRSk7XG4gICAgY29uc3QgZW50ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyVGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICBzY29wZS5jb3VudGVyID0gY3VyclRpbWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDEwMDAgPCBNYXRoLmZsb29yKERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZS5jb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZHJlc3MoJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LDE1MDApXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2tleWRvd24nLCBlbnRlckxpc3RlbmVyKTtcbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2F1dG9jb21wbGV0ZXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50LCB1aSl7XG4gICAgICAgIGxldCB2YWx1ZSA9IHVpLml0ZW0udmFsdWU7XG4gICAgICAgIGxldCBsb2MgPSBhcnJGcm9tUG9zaXRpb25zW2FyckZyb21OYW1lcy5maW5kSW5kZXgoZGFuZ2VyID0+IGRhbmdlciA9PT0gdmFsdWUpXTtcbiAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IGxvYztcbiAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICB9KTtcbiAgICAkKFwiLnJvdXRlLXRvXCIpLm9uKCdrZXlkb3duJywgZW50ZXJMaXN0ZW5lcik7XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlRnJvbShhZGRyZXNzKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtdG9cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlVG8oYWRkcmVzcyk7XG4gICAgfSk7XG5cblxuICAgICQoXCIuc3RhcnQtc2VhcmNoXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzdWJtaXRTZWFyY2goKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtZnJvbS1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS10by1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZVRvUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=