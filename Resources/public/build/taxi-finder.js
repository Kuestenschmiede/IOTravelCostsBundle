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
  HEADLINE_BASE_PRICE: 'Grundpreis',
  HEADLINE_DIST_PRICE: 'Preis / km',
  HEADLINE_TIME_PRICE: 'Preis / m',
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
  HEADLINE_BASE_PRICE: 'Grundpreis',
  HEADLINE_DIST_PRICE: 'Preis / km',
  HEADLINE_TIME_PRICE: 'Preis / m',
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
        if (window.bBox[0] < coords.longitude && coords.longitude < window.bBox[2] && window.bBox[1] < coords.latitude && coords.latitude < window.bBox[3]) {
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
            if (window.bBox[0] < data[0].lon && data[0].lon < window.bBox[2] && window.bBox[1] < data[0].lat && data[0].lat < window.bBox[3]) {
                if (data[0] && data[0].display_name) {
                    // $(cssId).val(data[0].display_name);
                    if (cssId === ".route-to") {
                        taxiData.routeTo.loc = [data[0].lat, data[0].lon];
                    } else {
                        taxiData.routeFrom.loc = [data[0].lat, data[0].lon];
                    }
                    calculateExpenses();
                }
            }
        } else {
            if (data[0] && data[0].display_name) {
                // $(cssId).val(data[0].display_name);
                if (cssId === ".route-to") {
                    taxiData.routeTo.loc = [data[0].lat, data[0].lon];
                } else {
                    taxiData.routeFrom.loc = [data[0].lat, data[0].lon];
                }
                calculateExpenses();
            }
        }
    });
}
function findTariffs() {
    let url = "con4gis/tariffService/" + window.settingId + "/";
    $.ajax({ url: url }).done(function (data) {
        let parent = $(".tariff-output");
        parent.css('display', 'block');
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                let elementRow = document.createElement('tr');
                elementRow.innerHTML = "<td>" + i + "</td>" + "<td>" + data[i].basePrice + "€</td>" + "<td>" + data[i].distPrice + "€</td>" + "<td>" + data[i].timePrice + "€</td>";
                parent.append(elementRow);
            }
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
    let objHeadlineDistPrice = $(".headline-dist-price");
    objHeadlineDistPrice.html(langConstants.HEADLINE_DIST_PRICE);
    let objHeadlineTimePrice = $(".headline-time-price");
    objHeadlineTimePrice.html(langConstants.HEADLINE_TIME_PRICE);
    let objHeadlineBasePrice = $(".headline-base-price");
    objHeadlineBasePrice.html(langConstants.HEADLINE_BASE_PRICE);
    findTariffs();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50LWkxOG4tZW4uanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL3RheGktZmluZGVyLmpzIl0sIm5hbWVzIjpbInRheGlDb25zdGFudHNHZXJtYW4iLCJEVU1NWV9JTlBVVCIsIkhFQURMSU5FX0RJU1QiLCJIRUFETElORV9USU1FIiwiSEVBRExJTkVfQkFTRV9QUklDRSIsIkhFQURMSU5FX0RJU1RfUFJJQ0UiLCJIRUFETElORV9USU1FX1BSSUNFIiwiTk9ORSIsInRheGlDb25zdGFudHNFbmdsaXNoIiwidGF4aUNvbnN0YW50cyIsImxvbCIsIiQiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiYXJyRnJvbU5hbWVzIiwiYXJyRnJvbVBvc2l0aW9ucyIsImFyclRvTmFtZXMiLCJhcnJUb1Bvc2l0aW9ucyIsInRheGlEYXRhIiwicm91dGVGcm9tIiwicm91dGVUbyIsInJvdXRlRnJvbUlucHV0Iiwicm91dGVUb0lucHV0Iiwic2V0Um91dGVGcm9tIiwiYWRkcmVzcyIsImFkcmVzcyIsInNldFJvdXRlVG8iLCJoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbiIsImNvb3JkaW5hdGVzIiwiaGFuZGxlUG9zaXRpb24iLCJjYWxjdWxhdGVFeHBlbnNlcyIsImhhbmRsZVJvdXRlVG9Qb3NpdGlvbiIsInRvSHVtYW5EaXN0YW5jZSIsImRpc3RhbmNlSW5NZXRlcnMiLCJkaXN0YW5jZSIsImh1bWFuRGlzdGFuY2UiLCJwYXJzZUludCIsInRvRml4ZWQiLCJ0b0h1bWFuVGltZSIsInRpbWVJblNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaHVtYW5UaW1lIiwibG9jIiwidXJsIiwid2luZG93Iiwic2V0dGluZ0lkIiwiYWpheCIsImRvbmUiLCJkYXRhIiwidGFibGVOb2RlIiwiY3NzIiwicmVtb3ZlIiwidGltZSIsImVsZW1lbnRUaW1lIiwiaHRtbCIsImRpc3QiLCJlbGVtZW50RGlzdGFuY2UiLCJyZXNwb25zZURpc3RhbmNlIiwicmVwbGFjZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJoZWFkbGluZGVOb2RlIiwicmVzcG9uc2VOb2RlIiwidGFyaWZmTmFtZSIsInRhcmlmZnMiLCJoZWFkbGluZUVsZW1lbnQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJhZGRDbGFzcyIsInJlc3BvbnNlRWxlbWVudCIsInJlc3BvbnNlVGFyaWZmIiwiYXBwZW5kIiwiY3NzSWQiLCJwcm9wTmFtZSIsImNvb3JkcyIsImJCb3giLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsInByb3h5VXJsIiwia2V5UmV2ZXJzZSIsInBlZGVzdHJpYW4iLCJob3VzZV9udW1iZXIiLCJwYXRoIiwibGVuZ3RoIiwicG9zdGNvZGUiLCJ0b3duIiwidmFsIiwiaGFuZGxlQWRyZXNzIiwiaW5wdXQiLCJrZXlGb3J3YXJkIiwiZGlzcGxheV9uYW1lIiwiaSIsImhhc093blByb3BlcnR5IiwibG9uIiwibGF0IiwicHVzaCIsImF1dG9jb21wbGV0ZSIsInNvdXJjZSIsInN1Ym1pdFNlYXJjaCIsImZpbmRUYXJpZmZzIiwicGFyZW50IiwiZWxlbWVudFJvdyIsImJhc2VQcmljZSIsImRpc3RQcmljZSIsInRpbWVQcmljZSIsInJlYWR5IiwibGFuZ3VhZ2UiLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJKU09OIiwicGFyc2UiLCJvYmpJbnB1dEZyb20iLCJwbGFjZWhvbGRlciIsIm9iaklucHV0VG8iLCJvYmpIZWFkbGluZURpc3QiLCJvYmpIZWFkbGluZVRpbWUiLCJlbnRlckxpc3RlbmVyIiwiZXZlbnQiLCJzY29wZSIsImtleUNvZGUiLCJjbGFzc0xpc3QiLCJjdXJyVGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjb3VudGVyIiwic2V0VGltZW91dCIsIm9uIiwidWkiLCJ2YWx1ZSIsIml0ZW0iLCJmaW5kSW5kZXgiLCJkYW5nZXIiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsImNvbnNvbGUiLCJ3YXJuIiwib2JqSGVhZGxpbmVEaXN0UHJpY2UiLCJvYmpIZWFkbGluZVRpbWVQcmljZSIsIm9iakhlYWRsaW5lQmFzZVByaWNlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXYTs7QUFFYjs7OztBQUdRLElBQUlBLHNCQUFzQjtBQUM5QkMsZUFBYSxrQ0FEaUI7QUFFOUJDLGlCQUFlLFlBRmU7QUFHOUJDLGlCQUFlLE9BSGU7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QUFWLENBQXNCQyxrQkFBdEIsQ0FBeUNqSCx1QkFBekM7QUFDSCxTQUZELE1BRU87QUFDSGtILG9CQUFRQyxJQUFSLENBQWEsNkdBQWI7QUFDSDtBQUNKLEtBTkQ7O0FBUUFuSSxNQUFFLHVCQUFGLEVBQTJCMEgsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBWTtBQUMvQyxZQUFJdEIsVUFBVTRCLFdBQWQsRUFBMkI7QUFDdkI1QixzQkFBVTRCLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5QzdHLHFCQUF6QztBQUNILFNBRkQsTUFFTztBQUNIOEcsb0JBQVFDLElBQVIsQ0FBYSw2R0FBYjtBQUNIO0FBQ0osS0FORDtBQU9DLFFBQUlDLHVCQUF1QnBJLEVBQUUsc0JBQUYsQ0FBM0I7QUFDQW9JLHlCQUFxQnZGLElBQXJCLENBQTBCM0MsY0FBY1IsbUJBQXhDO0FBQ0EsUUFBSTJJLHVCQUF1QnJJLEVBQUUsc0JBQUYsQ0FBM0I7QUFDQXFJLHlCQUFxQnhGLElBQXJCLENBQTBCM0MsY0FBY1AsbUJBQXhDO0FBQ0EsUUFBSTJJLHVCQUF1QnRJLEVBQUUsc0JBQUYsQ0FBM0I7QUFDQXNJLHlCQUFxQnpGLElBQXJCLENBQTBCM0MsY0FBY1QsbUJBQXhDO0FBQ0RtRztBQUNILENBekZBLEUiLCJmaWxlIjoidGF4aS1maW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1maW5kZXIuanNcIik7XG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgIHZhciB0YXhpQ29uc3RhbnRzR2VybWFuID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnUExaLCBPcnQgb2RlciBTdHJhw59lIGVpbmdlYmVuLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRW50ZmVybnVuZycsXG4gICAgSEVBRExJTkVfVElNRTogJ0RhdWVyJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOidHcnVuZHByZWlzJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOidQcmVpcyAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOidQcmVpcyAvIG0nLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdGF4aUNvbnN0YW50c0VuZ2xpc2ggPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdFbnRlciBwb3N0YWwgY29kZSwgY2l0eSBvciBzdHJlZXQuLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdEaXN0YW5jZScsXG4gICAgSEVBRExJTkVfVElNRTogJ1RpbWUnLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6J0dydW5kcHJlaXMnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6J1ByZWlzIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6J1ByZWlzIC8gbScsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgIHZhciB0YXhpQ29uc3RhbnRzID0ge1xuICAgIGxvbDogJ1BMWiwgT3J0IG9kZXIgU3RyYcOfZSBlaW5nZWJlbi4uLicsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iLCJcInVzZSBzdHJpY3RcIjtcbmltcG9ydCB7dGF4aUNvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL3RheGktY29uc3RhbnQtaTE4bi1lblwiO1xuaW1wb3J0IHt0YXhpQ29uc3RhbnRzR2VybWFufSBmcm9tIFwiLi90YXhpLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7dGF4aUNvbnN0YW50c30gZnJvbSBcIi4vdGF4aS1jb25zdGFudHMuanNcIjtcblxuY29uc3QgJCA9IGpRdWVyeTtcbmNvbnN0IGxhbmdDb25zdGFudHMgPSB7fTtcbnZhciBhcnJGcm9tTmFtZXMgPSBbXTtcbnZhciBhcnJGcm9tUG9zaXRpb25zID0gW107XG52YXIgYXJyVG9OYW1lcyA9IFtdO1xudmFyIGFyclRvUG9zaXRpb25zID0gW107XG52YXIgdGF4aURhdGEgPSB7XG4gICAgcm91dGVGcm9tOiB7fSxcbiAgICByb3V0ZVRvOiB7fVxufTtcblxubGV0IHJvdXRlRnJvbUlucHV0ID0gbnVsbDtcbmxldCByb3V0ZVRvSW5wdXQgPSBudWxsO1xuXG4vKipcbiAqIFNhdmVzIHRoZSBzdHJpbmcgb2YgdGhlIHN0YXJ0IGFkZHJlc3MgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBhZGRyZXNzICAgICBTdHJpbmcgZm9yIHN0YXJ0IGFkZHJlc3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzZXRSb3V0ZUZyb20oYWRkcmVzcykge1xuICAgIHRheGlEYXRhLnJvdXRlRnJvbS5hZHJlc3MgPSBhZGRyZXNzO1xufVxuXG4vKipcbiAqIFNhdmVzIHRoZSBzdHJpbmcgb2YgdGhlIGRlc3RpbmF0aW9uIGFkZHJlc3MgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBhZGRyZXNzICAgICBTdHJpbmcgZm9yIGRlc3RpbmF0aW9uIGFkZHJlc3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzZXRSb3V0ZVRvKGFkZHJlc3MpIHtcbiAgICB0YXhpRGF0YS5yb3V0ZVRvLmFkcmVzcyA9IGFkZHJlc3M7XG59XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgYnV0dG9uIHByZXNzIGZvciBzdGFydCBhbmQgdHJpZXMgdG8gY2FsY3VsYXRlIHRoZSBleHBlbnNlc1xuICogQHBhcmFtIGNvb3JkaW5hdGVzICAgICBjb29yZGluYXRlcyBmcm9tIG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJvdXRlRnJvbVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIFwiLnJvdXRlLWZyb21cIiwgXCJyb3V0ZUZyb21cIik7XG4gICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcblxufVxuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGJ1dHRvbiBwcmVzcyBmb3IgZGVzdGluYXRpb24gYW5kIHRyaWVzIHRvIGNhbGN1bGF0ZSB0aGUgZXhwZW5zZXNcbiAqIEBwYXJhbSBjb29yZGluYXRlcyAgICAgY29vcmRpbmF0ZXMgZnJvbSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBoYW5kbGVSb3V0ZVRvUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcywgXCIucm91dGUtdG9cIiwgXCJyb3V0ZVRvXCIpO1xuICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkaXN0YW5jZSBpbiBtZXRlcnMgdG8gYSBtb3JlIHJlYWRhYmxlIGZvcm1hdC5cbiAqIEBwYXJhbSBkaXN0YW5jZUluTWV0ZXJzICAgICBUaGUgZGlzdGFuY2UgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvSHVtYW5EaXN0YW5jZShkaXN0YW5jZUluTWV0ZXJzKSB7XG5cbiAgICB2YXIgZGlzdGFuY2UsXG4gICAgICAgIGh1bWFuRGlzdGFuY2U7XG5cbiAgICBkaXN0YW5jZSA9IHBhcnNlSW50KGRpc3RhbmNlSW5NZXRlcnMsIDEwKTtcbiAgICBkaXN0YW5jZSA9IGRpc3RhbmNlIC8gMTAwMDtcblxuICAgIGlmIChkaXN0YW5jZSA+PSAxMDApIHtcbiAgICAgICAgaHVtYW5EaXN0YW5jZSA9IGRpc3RhbmNlLnRvRml4ZWQoMCkgKyAnJm5ic3A7JyArICdrbSc7XG4gICAgfSBlbHNlIGlmIChkaXN0YW5jZSA+PSAxMCkge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgxKSArICcmbmJzcDsnICsgJ2ttJztcbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID49IDAuMSkge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgyKSArICcmbmJzcDsnICsgJ2ttJztcbiAgICB9IGVsc2Uge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gKGRpc3RhbmNlICogMTAwMCkudG9GaXhlZCgwKSArICcmbmJzcDsnICsgJ20nO1xuICAgIH1cblxuICAgIHJldHVybiBodW1hbkRpc3RhbmNlO1xufVxuXG4vKipcbiAqIENvbnZlcnRzIGEgdGltZSBpbiBzZWNvbmRzIHRvIGEgbW9yZSByZWFkYWJsZSBmb3JtYXQuXG4gKiBAcGFyYW0gdGltZUluU2Vjb25kcyAgICAgVGhlIHRpbWUgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvSHVtYW5UaW1lKHRpbWVJblNlY29uZHMpIHtcblxuICAgIHZhciBzZWNvbmRzLFxuICAgICAgICBtaW51dGVzLFxuICAgICAgICBob3VycyxcbiAgICAgICAgaHVtYW5UaW1lO1xuXG4gICAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVJblNlY29uZHMsIDEwKTtcbiAgICBtaW51dGVzID0gcGFyc2VJbnQoc2Vjb25kcyAvIDYwLCAxMCk7XG4gICAgc2Vjb25kcyA9IHNlY29uZHMgJSA2MDtcblxuICAgIGhvdXJzID0gcGFyc2VJbnQobWludXRlcyAvIDYwLCAxMCk7XG4gICAgbWludXRlcyA9IG1pbnV0ZXMgJSA2MDtcblxuICAgIGlmIChob3VycyA9PT0gMCAmJiBtaW51dGVzID09PSAwKSB7XG4gICAgICAgIGh1bWFuVGltZSA9IHNlY29uZHMgKyAnJm5ic3A7JyArICdzJztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICAgIGh1bWFuVGltZSA9IG1pbnV0ZXMgKyAnJm5ic3A7JyArICdtaW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGh1bWFuVGltZSA9IGhvdXJzICsgJyZuYnNwOycgKyAnaCcgKyAnJm5ic3A7JyArIG1pbnV0ZXMgKyAnJm5ic3A7JyArICdtaW4nO1xuICAgIH1cblxuICAgIHJldHVybiBodW1hblRpbWU7XG59XG5cbi8qKlxuICogQ2hlY2tzIHdldGhlciBhbGwgcGFyYW1zIGZvciB0aGUgY2FsY3VsYXRpb24gb2YgYW4gZXhwZW5zZSBhcmUgc2V0IGFuZCBjYWxscyB0aGUgc2VydmVyIGFuZCBkaXNwbGF5cyB0aGUgcmVwc29uc2VcbiAqIEBwYXJhbVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZUV4cGVuc2VzICgpIHtcbiAgICBpZiAodGF4aURhdGEucm91dGVGcm9tLmxvYyAmJiB0YXhpRGF0YS5yb3V0ZVRvLmxvYykge1xuICAgICAgICBsZXQgdXJsID0gXCJjb240Z2lzL2V4cGVuc2VTZXJ2aWNlL1wiICsgd2luZG93LnNldHRpbmdJZCArIFwiL1wiICsgdGF4aURhdGEucm91dGVGcm9tLmxvY1swXSArIFwiLFwiICsgdGF4aURhdGEucm91dGVGcm9tLmxvY1sxXSArIFwiO1wiICsgdGF4aURhdGEucm91dGVUby5sb2NbMF0gKyBcIixcIiArIHRheGlEYXRhLnJvdXRlVG8ubG9jWzFdICsgXCIvXCI7XG4gICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZU5vZGUgPSAkKFwiLnJvdXRlLW91dHB1dFwiKTtcbiAgICAgICAgICAgIHRhYmxlTm9kZS5jc3MoXCJkaXNwbGF5XCIsIFwiYmxvY2tcIik7XG4gICAgICAgICAgICAkKFwiLnJlc3BvbnNlLWhlYWRsaW5lXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJChcIi5yZXNwb25zZS12YWx1ZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmIChkYXRhLnRpbWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRpbWUgPSAkKFwiLnJlc3BvbnNlLXRpbWVcIik7XG4gICAgICAgICAgICAgICAgZWxlbWVudFRpbWUuaHRtbCh0b0h1bWFuVGltZShkYXRhLnRpbWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkYXRhLmRpc3QpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudERpc3RhbmNlID0gJChcIi5yZXNwb25zZS1kaXN0XCIpO1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURpc3RhbmNlID0gZGF0YS5kaXN0ICsgXCJcIjtcbiAgICAgICAgICAgICAgICByZXNwb25zZURpc3RhbmNlID0gcmVzcG9uc2VEaXN0YW5jZS5yZXBsYWNlKCcuJywnLicpO1xuICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZURpc3RhbmNlLmluZGV4T2YoJywnKSArIDM7XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50RGlzdGFuY2UuaHRtbChyZXNwb25zZURpc3RhbmNlLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwgKyAzKSArIFwiIGttXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGhlYWRsaW5kZU5vZGUgPSAkKFwiLnJvdXRlLW91dHB1dC1oZWFkbGluZVwiKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZU5vZGUgPSAkKFwiLnJvdXRlLW91dHB1dC12YWx1ZXNcIik7XG4gICAgICAgICAgICBmb3IobGV0IHRhcmlmZk5hbWUgaW4gZGF0YS50YXJpZmZzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhlYWRsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgaGVhZGxpbmVFbGVtZW50LmlubmVySFRNTCA9IHRhcmlmZk5hbWU7XG4gICAgICAgICAgICAgICAgJChoZWFkbGluZUVsZW1lbnQpLmFkZENsYXNzKFwicmVzcG9uc2UtaGVhZGxpbmVcIilcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhLnRhcmlmZnNbdGFyaWZmTmFtZV0gKyBcIlwiO1xuICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4RGVjaW1hbCA9IHJlc3BvbnNlVGFyaWZmLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VFbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCJcbiAgICAgICAgICAgICAgICAkKHJlc3BvbnNlRWxlbWVudCkuYWRkQ2xhc3MoXCJyZXNwb25zZS12YWx1ZVwiKVxuICAgICAgICAgICAgICAgIGhlYWRsaW5kZU5vZGUuYXBwZW5kKGhlYWRsaW5lRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VOb2RlLmFwcGVuZChyZXNwb25zZUVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICB9XG59XG5cbi8qKlxuICogY2FsbHMgcmV2ZXJzZS1nZW9zZWFyY2ggdG8gc2V0IGFuIGFkZHJlc3Mtc3RyaW5nIGZvciBjb29yZGluYXRlcyBhbmQgc2V0IGl0IHRvIHRoZSBzY3JpcHQtc2NvcGVkIHZhcmlhYmxlXG4gKiBAcGFyYW0gY29vcmRpbmF0ZXMgICAgICAgY29vcmRpbmF0ZXMgZnJvbSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAqIEBwYXJhbSBjc3NpZCAgICAgICAgICAgICBjc3MtY2xhc3MgdG8gc2V0IHJlc3BvbnNlLXByb3BlcnR5IHRvXG4gKiBAcGFyYW0gcHJvcE5hbWUgICAgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBjc3NJZCwgcHJvcE5hbWUpIHtcbiAgICBsZXQgY29vcmRzID0gY29vcmRpbmF0ZXMuY29vcmRzO1xuICAgIC8vIFRPRE8gYXVzIG1vZHVsIGhpZXIgcmVpbiBnZWJlblxuICAgIGlmICh3aW5kb3cuYkJveCAmJiB3aW5kb3cuYkJveFswXSkge1xuICAgICAgICBpZiAod2luZG93LmJCb3hbMF0gPCBjb29yZHMubG9uZ2l0dWRlICYmIGNvb3Jkcy5sb25naXR1ZGUgPCB3aW5kb3cuYkJveFsyXSAmJiB3aW5kb3cuYkJveFsxXSA8IGNvb3Jkcy5sYXRpdHVkZSAmJiBjb29yZHMubGF0aXR1ZGUgPCB3aW5kb3cuYkJveFszXSkge1xuICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZUZyb20ubG9jID0gW2Nvb3Jkcy5sYXRpdHVkZSwgY29vcmRzLmxvbmdpdHVkZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZVRvLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArICcvcmV2ZXJzZS5waHA/a2V5PScrIHdpbmRvdy5rZXlSZXZlcnNlKycmZm9ybWF0PWpzb24mbGF0PScgKyBjb29yZHMubGF0aXR1ZGUgKyAnJmxvbj0nICsgY29vcmRzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4gKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5hZGRyZXNzLnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGF0aCArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wb3N0Y29kZSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wb3N0Y29kZSArIFwiIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChjc3NJZCkudmFsKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHRheGlEYXRhW3Byb3BOYW1lXS5hZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAVG9EbyBPdXRvZkJvdW5kc1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LnByb3h5VXJsICsgJy9yZXZlcnNlLnBocD9rZXk9Jysgd2luZG93LmtleVJldmVyc2UrJyZmb3JtYXQ9anNvbiZsYXQ9JyArIGNvb3Jkcy5sYXRpdHVkZSArICcmbG9uPScgKyBjb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4pIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyICsgXCIsIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5hZGRyZXNzLnBhdGgpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wYXRoICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IFwiLCBcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wb3N0Y29kZSkge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBvc3Rjb2RlICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy50b3duO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChjc3NJZCkudmFsKGFkZHJlc3MpO1xuICAgICAgICAgICAgdGF4aURhdGFbcHJvcE5hbWVdLmFkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKipcbiAqIGNhbGxzIGdlb3NlYXJjaCB0byBzZXQgYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb25zIGZvciBhbiBhZGRyZXNzLXN0cmluZ1xuICogQHBhcmFtIGlucHV0ICAgICAgIGFkZHJlc3Mtc3RyaW5nIGZyb20gaW5wdXRcbiAqIEBwYXJhbSBjc3NpZCAgICAgICBjc3MtY2xhc3MgdG8gc2V0IHJlc3BvbnNlLXByb3BlcnR5IHRvXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlQWRyZXNzKGlucHV0LCBjc3NJZCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyBcInNlYXJjaC5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgd2luZG93LmtleUZvcndhcmQgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZihkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmJCb3ggJiYgd2luZG93LmJCb3hbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYkJveFswXSA8IGRhdGFbaV0ubG9uICYmIGRhdGFbaV0ubG9uIDwgd2luZG93LmJCb3hbMl0gJiYgd2luZG93LmJCb3hbMV0gPCBkYXRhW2ldLmxhdCAmJiBkYXRhW2ldLmxhdCA8IHdpbmRvdy5iQm94WzNdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbU5hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJGcm9tUG9zaXRpb25zLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyVG9OYW1lcy5wdXNoKGRhdGFbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyVG9Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9AVG9EbyBvdXRvZmJvdW5kc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJGcm9tTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbVBvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyVG9Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgJChjc3NJZCkuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBhcnJGcm9tTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoY3NzSWQpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogYXJyVG9OYW1lc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4vKipcbiAqIGNhbGxzIHJldmVyc2UtZ2Vvc2VhcmNoIHRvIHNldCBjb29yZGluYXRlcyBmb3IgYW4gYWRkcmVzcy1zdHJpbmcgYW5kIHNldCBpdCB0byB0aGUgc2NyaXB0LXNjb3BlZCB2YXJpYWJsZVxuICogQHBhcmFtIGlucHV0ICAgICAgIGFkZHJlc3Mtc3RyaW5nIGZyb20gaW5wdXRcbiAqIEBwYXJhbSBjc3NpZCAgICAgICBjc3MtY2xhc3MgdG8gc2V0IHJlc3BvbnNlLXByb3BlcnR5IHRvXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbmZ1bmN0aW9uIHN1Ym1pdFNlYXJjaChpbnB1dCwgY3NzSWQpIHtcbiAgICBsZXQgdXJsID0gd2luZG93LnByb3h5VXJsICsgXCJzZWFyY2gucGhwP2Zvcm1hdD1qc29uJmtleT1cIiArIHdpbmRvdy5rZXlGb3J3YXJkICsgXCImcT1cIiArIGlucHV0O1xuICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgICAgICBpZiAod2luZG93LmJCb3ggJiYgd2luZG93LmJCb3hbMF0pIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYkJveFswXSA8IGRhdGFbMF0ubG9uICYmIGRhdGFbMF0ubG9uIDwgd2luZG93LmJCb3hbMl0gJiYgd2luZG93LmJCb3hbMV0gPCBkYXRhWzBdLmxhdCAmJiBkYXRhWzBdLmxhdCA8IHdpbmRvdy5iQm94WzNdKSB7XG4gICAgICAgICAgICAgICAgaWYoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLXRvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlVG8ubG9jID0gW2RhdGFbMF0ubGF0LCBkYXRhWzBdLmxvbl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZUZyb20ubG9jID0gW2RhdGFbMF0ubGF0LCBkYXRhWzBdLmxvbl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZihkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gJChjc3NJZCkudmFsKGRhdGFbMF0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLXRvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcbn1cbmZ1bmN0aW9uIGZpbmRUYXJpZmZzKCkge1xuICAgIGxldCB1cmwgPSBcImNvbjRnaXMvdGFyaWZmU2VydmljZS9cIiArIHdpbmRvdy5zZXR0aW5nSWQgKyBcIi9cIjtcbiAgICAkLmFqYXgoe3VybDp1cmx9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgbGV0IHBhcmVudCA9ICQoXCIudGFyaWZmLW91dHB1dFwiKTtcbiAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2Jsb2NrJyk7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudFJvdy5pbm5lckhUTUwgPSBcIjx0ZD5cIiArIGkgKyBcIjwvdGQ+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5iYXNlUHJpY2UrXCLigqw8L3RkPlwiICsgXCI8dGQ+XCIrIGRhdGFbaV0uZGlzdFByaWNlK1wi4oKsPC90ZD5cIiArIFwiPHRkPlwiKyBkYXRhW2ldLnRpbWVQcmljZStcIuKCrDwvdGQ+XCJcbiAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGVsZW1lbnRSb3cpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cblxuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICBsZXQgbGFuZ3VhZ2UgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJMYW5ndWFnZSB8fCB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlO1xuICAgICBpZiAobGFuZ3VhZ2UgPSBcImVuXCIpIHtcbiAgICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNFbmdsaXNoKVxuICAgICB9XG4gICAgIGVsc2UgaWYgKGxhbmd1YWdlID09IFwiZGVcIikge1xuICAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdGF4aUNvbnN0YW50c0dlcm1hbilcblxuICAgICB9XG4gICAgIGVsc2Uge1xuICAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdGF4aUNvbnN0YW50c0VuZ2xpc2gpXG4gICAgIH1cbiAgICAgd2luZG93LmJCb3ggPSBKU09OLnBhcnNlKHdpbmRvdy5iQm94KTtcbiAgICBsZXQgb2JqSW5wdXRGcm9tID0gJChcIi5yb3V0ZS10b1wiKTtcbiAgICBpZiAob2JqSW5wdXRGcm9tWzBdKSB7XG4gICAgICAgIG9iaklucHV0RnJvbVswXS5wbGFjZWhvbGRlciA9IGxhbmdDb25zdGFudHMuRFVNTVlfSU5QVVQ7XG4gICAgfVxuICAgIGxldCBvYmpJbnB1dFRvID0gJChcIi5yb3V0ZS1mcm9tXCIpO1xuICAgIGlmIChvYmpJbnB1dFRvWzBdKSB7XG4gICAgICAgIG9iaklucHV0VG9bMF0ucGxhY2Vob2xkZXIgPSBsYW5nQ29uc3RhbnRzLkRVTU1ZX0lOUFVUO1xuICAgIH1cbiAgICBsZXQgb2JqSGVhZGxpbmVEaXN0ID0gJChcIi5oZWFkbGluZS1kaXN0XCIpO1xuICAgIG9iakhlYWRsaW5lRGlzdC5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVCk7XG4gICAgbGV0IG9iakhlYWRsaW5lVGltZSA9ICQoXCIuaGVhZGxpbmUtdGltZVwiKTtcbiAgICAgb2JqSGVhZGxpbmVUaW1lLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9USU1FKTtcbiAgICBjb25zdCBlbnRlckxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgICAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgICAgIHN1Ym1pdFNlYXJjaCgkKHNjb3BlKS52YWwoKSwgXCIuXCIgKyBzY29wZS5jbGFzc0xpc3RbMF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgbGV0IGN1cnJUaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpKTtcbiAgICAgICAgICAgIHNjb3BlLmNvdW50ZXIgPSBjdXJyVGltZTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBpZiAoc2NvcGUuY291bnRlciAmJiBzY29wZS5jb3VudGVyICsgMTAwMCA8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHNjb3BlLmNvdW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUFkcmVzcygkKHNjb3BlKS52YWwoKSwgXCIuXCIgKyBzY29wZS5jbGFzc0xpc3RbMF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sMTUwMClcbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQoXCIucm91dGUtZnJvbVwiKS5vbigna2V5ZG93bicsIGVudGVyTGlzdGVuZXIpO1xuICAgICQoXCIucm91dGUtZnJvbVwiKS5vbignYXV0b2NvbXBsZXRlc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQsIHVpKXtcbiAgICAgICAgbGV0IHZhbHVlID0gdWkuaXRlbS52YWx1ZTtcbiAgICAgICAgbGV0IGxvYyA9IGFyckZyb21Qb3NpdGlvbnNbYXJyRnJvbU5hbWVzLmZpbmRJbmRleChkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZSldO1xuICAgICAgICB0YXhpRGF0YS5yb3V0ZUZyb20ubG9jID0gbG9jO1xuICAgICAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuICAgIH0pO1xuICAgICQoXCIucm91dGUtdG9cIikub24oJ2tleWRvd24nLCBlbnRlckxpc3RlbmVyKTtcblxuICAgICQoXCIucm91dGUtZnJvbVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgc2V0Um91dGVGcm9tKGFkZHJlc3MpO1xuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS10b1wiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgc2V0Um91dGVUbyhhZGRyZXNzKTtcbiAgICB9KTtcblxuXG4gICAgJChcIi5zdGFydC1zZWFyY2hcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHN1Ym1pdFNlYXJjaCgpO1xuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS1mcm9tLWdlb2xvY2F0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZVJvdXRlRnJvbVBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBnZW9sb2NhdGlvbiBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuIENvbnNpZGVyIHVwZGF0aW5nIGl0IG9yIHN3aXRjaGluZyB0byBhIG5ld2VyIGJyb3dzZXIuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLnJvdXRlLXRvLWdlb2xvY2F0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZVJvdXRlVG9Qb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICBsZXQgb2JqSGVhZGxpbmVEaXN0UHJpY2UgPSAkKFwiLmhlYWRsaW5lLWRpc3QtcHJpY2VcIik7XG4gICAgIG9iakhlYWRsaW5lRGlzdFByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9ESVNUX1BSSUNFKTtcbiAgICAgbGV0IG9iakhlYWRsaW5lVGltZVByaWNlID0gJChcIi5oZWFkbGluZS10aW1lLXByaWNlXCIpO1xuICAgICBvYmpIZWFkbGluZVRpbWVQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfVElNRV9QUklDRSk7XG4gICAgIGxldCBvYmpIZWFkbGluZUJhc2VQcmljZSA9ICQoXCIuaGVhZGxpbmUtYmFzZS1wcmljZVwiKTtcbiAgICAgb2JqSGVhZGxpbmVCYXNlUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0JBU0VfUFJJQ0UpO1xuICAgIGZpbmRUYXJpZmZzKCk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9