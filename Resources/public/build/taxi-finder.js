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
  HEADLINE_BASE_PRICE: 'Base price',
  HEADLINE_DIST_PRICE: 'Price / km',
  HEADLINE_TIME_PRICE: 'Price / m',
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
/**
 * calls tariffService to fetch informations and pricing about the set tariffs and shows them
 * @returns {void}}
 */
function findTariffs() {
    let url = "con4gis/tariffService/" + window.settingId + "/";
    $.ajax({ url: url }).done(function (data) {
        let parent = $(".tariff-output");
        if (window.displayGrid === "1") {
            parent.css('display', 'grid');
        } else {
            parent.css('display', 'block');
        }
        let rowCount = "row-even";
        for (let i in data) {
            if (data.hasOwnProperty(i)) {
                if (window.displayGrid === "1") {
                    let itemName = document.createElement('div');
                    itemName.innerHTML = i;
                    itemName.className = "grid-item " + rowCount;
                    parent.append(itemName);
                    let itemBasePrice = document.createElement('div');
                    itemBasePrice.innerHTML = data[i].basePrice;
                    itemBasePrice.className = "grid-item " + rowCount;
                    parent.append(itemBasePrice);
                    let itemDistPrice = document.createElement('div');
                    itemDistPrice.innerHTML = data[i].distPrice;
                    itemDistPrice.className = "grid-item " + rowCount;
                    parent.append(itemDistPrice);
                    let itemTimePrice = document.createElement('div');
                    itemTimePrice.innerHTML = data[i].timePrice;
                    itemTimePrice.className = "grid-item " + rowCount;
                    parent.append(itemTimePrice);
                    rowCount = rowCount == "row-even" ? "row-uneven" : "row-even";
                } else {
                    let elementRow = document.createElement('tr');
                    elementRow.innerHTML = "<th>" + i + "</th>" + "<td>" + data[i].basePrice + "€</td>" + "<td>" + data[i].distPrice + "€</td>" + "<td>" + data[i].timePrice + "€</td>";
                    parent.append(elementRow);
                }
            }
        }
    });
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
            if (window.displayGrid === "1") {
                tableNode.css("display", "grid");
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
                let insertAfterHead = $(".headline-time");
                let insertAfterVal = $(".response-time");
                let autoAuto = "auto auto ";
                for (let tariffName in data.tariffs) {
                    let nodeName = $(document.createElement('div'));
                    nodeName.html(tariffName);
                    nodeName.addClass("response-headline");
                    nodeName.addClass("grid-item");
                    nodeName.insertAfter(insertAfterHead);
                    insertAfterHead = nodeName;
                    let responseElement = $(document.createElement('div'));
                    let responseTariff = data.tariffs[tariffName] + "";
                    responseTariff = responseTariff.replace(".", ",");
                    let indexDecimal = responseTariff.indexOf(',') + 3;
                    responseElement.html(responseTariff.substring(0, indexDecimal) + " €");
                    responseElement.addClass("response-value");
                    responseElement.addClass("grid-item");
                    responseElement.insertAfter(insertAfterVal);
                    insertAfterVal = responseElement;
                    autoAuto += "auto ";
                }
                // @Cool bonus feature
                // setInterval(function(){
                //     $("*").css("background-color", '#'+Math.floor(Math.random()*16777215).toString(16))
                // },20)
                tableNode.css("grid-template-columns", autoAuto);
            } else {
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
            }
        });
    }
}

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function () {
    let language = window.serviceLang || window.navigator.userLanguage || window.navigator.language;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50LWkxOG4tZW4uanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL3RheGktZmluZGVyLmpzIl0sIm5hbWVzIjpbInRheGlDb25zdGFudHNHZXJtYW4iLCJEVU1NWV9JTlBVVCIsIkhFQURMSU5FX0RJU1QiLCJIRUFETElORV9USU1FIiwiSEVBRExJTkVfQkFTRV9QUklDRSIsIkhFQURMSU5FX0RJU1RfUFJJQ0UiLCJIRUFETElORV9USU1FX1BSSUNFIiwiTk9ORSIsInRheGlDb25zdGFudHNFbmdsaXNoIiwidGF4aUNvbnN0YW50cyIsImxvbCIsIiQiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiYXJyRnJvbU5hbWVzIiwiYXJyRnJvbVBvc2l0aW9ucyIsImFyclRvTmFtZXMiLCJhcnJUb1Bvc2l0aW9ucyIsInRheGlEYXRhIiwicm91dGVGcm9tIiwicm91dGVUbyIsInJvdXRlRnJvbUlucHV0Iiwicm91dGVUb0lucHV0Iiwic2V0Um91dGVGcm9tIiwiYWRkcmVzcyIsImFkcmVzcyIsInNldFJvdXRlVG8iLCJoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbiIsImNvb3JkaW5hdGVzIiwiaGFuZGxlUG9zaXRpb24iLCJjYWxjdWxhdGVFeHBlbnNlcyIsImhhbmRsZVJvdXRlVG9Qb3NpdGlvbiIsInRvSHVtYW5EaXN0YW5jZSIsImRpc3RhbmNlSW5NZXRlcnMiLCJkaXN0YW5jZSIsImh1bWFuRGlzdGFuY2UiLCJwYXJzZUludCIsInRvRml4ZWQiLCJ0b0h1bWFuVGltZSIsInRpbWVJblNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaHVtYW5UaW1lIiwiY3NzSWQiLCJwcm9wTmFtZSIsImNvb3JkcyIsIndpbmRvdyIsImJCb3giLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImxvYyIsInVybCIsInByb3h5VXJsIiwia2V5UmV2ZXJzZSIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBlZGVzdHJpYW4iLCJob3VzZV9udW1iZXIiLCJwYXRoIiwibGVuZ3RoIiwicG9zdGNvZGUiLCJ0b3duIiwidmFsIiwiaGFuZGxlQWRyZXNzIiwiaW5wdXQiLCJrZXlGb3J3YXJkIiwiZGlzcGxheV9uYW1lIiwiaSIsImhhc093blByb3BlcnR5IiwibG9uIiwibGF0IiwicHVzaCIsImF1dG9jb21wbGV0ZSIsInNvdXJjZSIsInN1Ym1pdFNlYXJjaCIsImZpbmRUYXJpZmZzIiwic2V0dGluZ0lkIiwicGFyZW50IiwiZGlzcGxheUdyaWQiLCJjc3MiLCJyb3dDb3VudCIsIml0ZW1OYW1lIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaXRlbUJhc2VQcmljZSIsImJhc2VQcmljZSIsIml0ZW1EaXN0UHJpY2UiLCJkaXN0UHJpY2UiLCJpdGVtVGltZVByaWNlIiwidGltZVByaWNlIiwiZWxlbWVudFJvdyIsInRhYmxlTm9kZSIsInJlbW92ZSIsInRpbWUiLCJlbGVtZW50VGltZSIsImh0bWwiLCJkaXN0IiwiZWxlbWVudERpc3RhbmNlIiwicmVzcG9uc2VEaXN0YW5jZSIsInJlcGxhY2UiLCJpbmRleERlY2ltYWwiLCJpbmRleE9mIiwic3Vic3RyaW5nIiwiaW5zZXJ0QWZ0ZXJIZWFkIiwiaW5zZXJ0QWZ0ZXJWYWwiLCJhdXRvQXV0byIsInRhcmlmZk5hbWUiLCJ0YXJpZmZzIiwibm9kZU5hbWUiLCJhZGRDbGFzcyIsImluc2VydEFmdGVyIiwicmVzcG9uc2VFbGVtZW50IiwicmVzcG9uc2VUYXJpZmYiLCJoZWFkbGluZGVOb2RlIiwicmVzcG9uc2VOb2RlIiwiaGVhZGxpbmVFbGVtZW50IiwicmVhZHkiLCJsYW5ndWFnZSIsInNlcnZpY2VMYW5nIiwibmF2aWdhdG9yIiwidXNlckxhbmd1YWdlIiwiZXh0ZW5kIiwiSlNPTiIsInBhcnNlIiwib2JqSW5wdXRGcm9tIiwicGxhY2Vob2xkZXIiLCJvYmpJbnB1dFRvIiwib2JqSGVhZGxpbmVEaXN0Iiwib2JqSGVhZGxpbmVUaW1lIiwiZW50ZXJMaXN0ZW5lciIsImV2ZW50Iiwic2NvcGUiLCJrZXlDb2RlIiwiY2xhc3NMaXN0IiwiY3VyclRpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY291bnRlciIsInNldFRpbWVvdXQiLCJvbiIsInVpIiwidmFsdWUiLCJpdGVtIiwiZmluZEluZGV4IiwiZGFuZ2VyIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb25zb2xlIiwid2FybiIsIm9iakhlYWRsaW5lRGlzdFByaWNlIiwib2JqSGVhZGxpbmVUaW1lUHJpY2UiLCJvYmpIZWFkbGluZUJhc2VQcmljZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFD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RCxNQUVPO0FBQ0gySCxvQkFBUUMsSUFBUixDQUFhLDZHQUFiO0FBQ0g7QUFDSixLQU5EO0FBT0MsUUFBSUMsdUJBQXVCakosRUFBRSxzQkFBRixDQUEzQjtBQUNBaUoseUJBQXFCeEQsSUFBckIsQ0FBMEJ2RixjQUFjUixtQkFBeEM7QUFDQSxRQUFJd0osdUJBQXVCbEosRUFBRSxzQkFBRixDQUEzQjtBQUNBa0oseUJBQXFCekQsSUFBckIsQ0FBMEJ2RixjQUFjUCxtQkFBeEM7QUFDQSxRQUFJd0osdUJBQXVCbkosRUFBRSxzQkFBRixDQUEzQjtBQUNBbUoseUJBQXFCMUQsSUFBckIsQ0FBMEJ2RixjQUFjVCxtQkFBeEM7QUFDRHlFO0FBQ0gsQ0F4RkEsRSIsImZpbGUiOiJ0YXhpLWZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qc1wiKTtcbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHNHZXJtYW4gPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdQTFosIE9ydCBvZGVyIFN0cmHDn2UgZWluZ2ViZW4uLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdFbnRmZXJudW5nJyxcbiAgICBIRUFETElORV9USU1FOiAnRGF1ZXInLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6J0dydW5kcHJlaXMnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6J1ByZWlzIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6J1ByZWlzIC8gbScsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgIHZhciB0YXhpQ29uc3RhbnRzRW5nbGlzaCA9IHtcbiAgICBEVU1NWV9JTlBVVDogJ0VudGVyIHBvc3RhbCBjb2RlLCBjaXR5IG9yIHN0cmVldC4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0Rpc3RhbmNlJyxcbiAgICBIRUFETElORV9USU1FOiAnVGltZScsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTonQmFzZSBwcmljZScsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTonUHJpY2UgLyBrbScsXG4gICAgSEVBRExJTkVfVElNRV9QUklDRTonUHJpY2UgLyBtJyxcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIi8qXG4gKiBUaGlzIGZpbGUgaXMgcGFydCBvZiBjb240Z2lzLFxuICogdGhlIGdpcy1raXQgZm9yIENvbnRhbyBDTVMuXG4gKlxuICogQHBhY2thZ2UgICAgY29uNGdpc1xuICogQHZlcnNpb24gICAgNlxuICogQGF1dGhvciAgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgICBMR1BMLTMuMC1vci1sYXRlclxuICogQGNvcHlyaWdodCAgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ25cbiAqIEBsaW5rICAgICAgIGh0dHBzOi8vd3d3LmNvbjRnaXMub3JnXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiAgY29uc3RhbnRzXG4gKi9cbmV4cG9ydCAgdmFyIHRheGlDb25zdGFudHMgPSB7XG4gICAgbG9sOiAnUExaLCBPcnQgb2RlciBTdHJhw59lIGVpbmdlYmVuLi4uJyxcbiAgICBOT05FOiAnJyAvLyBsYXN0IGxpbmVcbn07IC8vIGVuZCBvZiBcImNzcyBjb25zdGFudHNcIiAtLS1cbiIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHt0YXhpQ29uc3RhbnRzRW5nbGlzaH0gZnJvbSBcIi4vdGF4aS1jb25zdGFudC1pMThuLWVuXCI7XG5pbXBvcnQge3RheGlDb25zdGFudHNHZXJtYW59IGZyb20gXCIuL3RheGktY29uc3RhbnQtaTE4bi1kZVwiO1xuaW1wb3J0IHt0YXhpQ29uc3RhbnRzfSBmcm9tIFwiLi90YXhpLWNvbnN0YW50cy5qc1wiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuY29uc3QgbGFuZ0NvbnN0YW50cyA9IHt9O1xudmFyIGFyckZyb21OYW1lcyA9IFtdO1xudmFyIGFyckZyb21Qb3NpdGlvbnMgPSBbXTtcbnZhciBhcnJUb05hbWVzID0gW107XG52YXIgYXJyVG9Qb3NpdGlvbnMgPSBbXTtcbnZhciB0YXhpRGF0YSA9IHtcbiAgICByb3V0ZUZyb206IHt9LFxuICAgIHJvdXRlVG86IHt9XG59O1xuXG5sZXQgcm91dGVGcm9tSW5wdXQgPSBudWxsO1xubGV0IHJvdXRlVG9JbnB1dCA9IG51bGw7XG5cbi8qKlxuICogU2F2ZXMgdGhlIHN0cmluZyBvZiB0aGUgc3RhcnQgYWRkcmVzcyB0byB0aGUgc2NyaXB0LXNjb3BlZCB2YXJpYWJsZVxuICogQHBhcmFtIGFkZHJlc3MgICAgIFN0cmluZyBmb3Igc3RhcnQgYWRkcmVzc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNldFJvdXRlRnJvbShhZGRyZXNzKSB7XG4gICAgdGF4aURhdGEucm91dGVGcm9tLmFkcmVzcyA9IGFkZHJlc3M7XG59XG5cbi8qKlxuICogU2F2ZXMgdGhlIHN0cmluZyBvZiB0aGUgZGVzdGluYXRpb24gYWRkcmVzcyB0byB0aGUgc2NyaXB0LXNjb3BlZCB2YXJpYWJsZVxuICogQHBhcmFtIGFkZHJlc3MgICAgIFN0cmluZyBmb3IgZGVzdGluYXRpb24gYWRkcmVzc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNldFJvdXRlVG8oYWRkcmVzcykge1xuICAgIHRheGlEYXRhLnJvdXRlVG8uYWRyZXNzID0gYWRkcmVzcztcbn1cblxuLyoqXG4gKiBIYW5kbGVzIHRoZSBidXR0b24gcHJlc3MgZm9yIHN0YXJ0IGFuZCB0cmllcyB0byBjYWxjdWxhdGUgdGhlIGV4cGVuc2VzXG4gKiBAcGFyYW0gY29vcmRpbmF0ZXMgICAgIGNvb3JkaW5hdGVzIGZyb20gbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlUm91dGVGcm9tUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcywgXCIucm91dGUtZnJvbVwiLCBcInJvdXRlRnJvbVwiKTtcbiAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuXG59XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgYnV0dG9uIHByZXNzIGZvciBkZXN0aW5hdGlvbiBhbmQgdHJpZXMgdG8gY2FsY3VsYXRlIHRoZSBleHBlbnNlc1xuICogQHBhcmFtIGNvb3JkaW5hdGVzICAgICBjb29yZGluYXRlcyBmcm9tIG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJvdXRlVG9Qb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBcIi5yb3V0ZS10b1wiLCBcInJvdXRlVG9cIik7XG4gICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpc3RhbmNlIGluIG1ldGVycyB0byBhIG1vcmUgcmVhZGFibGUgZm9ybWF0LlxuICogQHBhcmFtIGRpc3RhbmNlSW5NZXRlcnMgICAgIFRoZSBkaXN0YW5jZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9IdW1hbkRpc3RhbmNlKGRpc3RhbmNlSW5NZXRlcnMpIHtcblxuICAgIHZhciBkaXN0YW5jZSxcbiAgICAgICAgaHVtYW5EaXN0YW5jZTtcblxuICAgIGRpc3RhbmNlID0gcGFyc2VJbnQoZGlzdGFuY2VJbk1ldGVycywgMTApO1xuICAgIGRpc3RhbmNlID0gZGlzdGFuY2UgLyAxMDAwO1xuXG4gICAgaWYgKGRpc3RhbmNlID49IDEwMCkge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgwKSArICcmbmJzcDsnICsgJ2ttJztcbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID49IDEwKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDEpICsgJyZuYnNwOycgKyAna20nO1xuICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPj0gMC4xKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDIpICsgJyZuYnNwOycgKyAna20nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSAoZGlzdGFuY2UgKiAxMDAwKS50b0ZpeGVkKDApICsgJyZuYnNwOycgKyAnbSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFuRGlzdGFuY2U7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSB0aW1lIGluIHNlY29uZHMgdG8gYSBtb3JlIHJlYWRhYmxlIGZvcm1hdC5cbiAqIEBwYXJhbSB0aW1lSW5TZWNvbmRzICAgICBUaGUgdGltZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9IdW1hblRpbWUodGltZUluU2Vjb25kcykge1xuXG4gICAgdmFyIHNlY29uZHMsXG4gICAgICAgIG1pbnV0ZXMsXG4gICAgICAgIGhvdXJzLFxuICAgICAgICBodW1hblRpbWU7XG5cbiAgICBzZWNvbmRzID0gcGFyc2VJbnQodGltZUluU2Vjb25kcywgMTApO1xuICAgIG1pbnV0ZXMgPSBwYXJzZUludChzZWNvbmRzIC8gNjAsIDEwKTtcbiAgICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgaG91cnMgPSBwYXJzZUludChtaW51dGVzIC8gNjAsIDEwKTtcbiAgICBtaW51dGVzID0gbWludXRlcyAlIDYwO1xuXG4gICAgaWYgKGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgaHVtYW5UaW1lID0gc2Vjb25kcyArICcmbmJzcDsnICsgJ3MnO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgICAgaHVtYW5UaW1lID0gbWludXRlcyArICcmbmJzcDsnICsgJ21pbic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaHVtYW5UaW1lID0gaG91cnMgKyAnJm5ic3A7JyArICdoJyArICcmbmJzcDsnICsgbWludXRlcyArICcmbmJzcDsnICsgJ21pbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFuVGltZTtcbn1cblxuXG5cbi8qKlxuICogY2FsbHMgcmV2ZXJzZS1nZW9zZWFyY2ggdG8gc2V0IGFuIGFkZHJlc3Mtc3RyaW5nIGZvciBjb29yZGluYXRlcyBhbmQgc2V0IGl0IHRvIHRoZSBzY3JpcHQtc2NvcGVkIHZhcmlhYmxlXG4gKiBAcGFyYW0gY29vcmRpbmF0ZXMgICAgICAgY29vcmRpbmF0ZXMgZnJvbSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAqIEBwYXJhbSBjc3NpZCAgICAgICAgICAgICBjc3MtY2xhc3MgdG8gc2V0IHJlc3BvbnNlLXByb3BlcnR5IHRvXG4gKiBAcGFyYW0gcHJvcE5hbWUgICAgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBjc3NJZCwgcHJvcE5hbWUpIHtcbiAgICBsZXQgY29vcmRzID0gY29vcmRpbmF0ZXMuY29vcmRzO1xuICAgIC8vIFRPRE8gYXVzIG1vZHVsIGhpZXIgcmVpbiBnZWJlblxuICAgIGlmICh3aW5kb3cuYkJveCAmJiB3aW5kb3cuYkJveFswXSkge1xuICAgICAgICBpZiAod2luZG93LmJCb3hbMF0gPCBjb29yZHMubG9uZ2l0dWRlICYmIGNvb3Jkcy5sb25naXR1ZGUgPCB3aW5kb3cuYkJveFsyXSAmJiB3aW5kb3cuYkJveFsxXSA8IGNvb3Jkcy5sYXRpdHVkZSAmJiBjb29yZHMubGF0aXR1ZGUgPCB3aW5kb3cuYkJveFszXSkge1xuICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZUZyb20ubG9jID0gW2Nvb3Jkcy5sYXRpdHVkZSwgY29vcmRzLmxvbmdpdHVkZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZVRvLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArICcvcmV2ZXJzZS5waHA/a2V5PScrIHdpbmRvdy5rZXlSZXZlcnNlKycmZm9ybWF0PWpzb24mbGF0PScgKyBjb29yZHMubGF0aXR1ZGUgKyAnJmxvbj0nICsgY29vcmRzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4gKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5hZGRyZXNzLnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGF0aCArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wb3N0Y29kZSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wb3N0Y29kZSArIFwiIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChjc3NJZCkudmFsKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHRheGlEYXRhW3Byb3BOYW1lXS5hZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAVG9EbyBPdXRvZkJvdW5kc1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LnByb3h5VXJsICsgJy9yZXZlcnNlLnBocD9rZXk9Jysgd2luZG93LmtleVJldmVyc2UrJyZmb3JtYXQ9anNvbiZsYXQ9JyArIGNvb3Jkcy5sYXRpdHVkZSArICcmbG9uPScgKyBjb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4pIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyICsgXCIsIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5hZGRyZXNzLnBhdGgpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wYXRoICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IFwiLCBcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wb3N0Y29kZSkge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBvc3Rjb2RlICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy50b3duO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChjc3NJZCkudmFsKGFkZHJlc3MpO1xuICAgICAgICAgICAgdGF4aURhdGFbcHJvcE5hbWVdLmFkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKipcbiAqIGNhbGxzIGdlb3NlYXJjaCB0byBzZXQgYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb25zIGZvciBhbiBhZGRyZXNzLXN0cmluZ1xuICogQHBhcmFtIGlucHV0ICAgICAgIGFkZHJlc3Mtc3RyaW5nIGZyb20gaW5wdXRcbiAqIEBwYXJhbSBjc3NpZCAgICAgICBjc3MtY2xhc3MgdG8gc2V0IHJlc3BvbnNlLXByb3BlcnR5IHRvXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlQWRyZXNzKGlucHV0LCBjc3NJZCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyBcInNlYXJjaC5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgd2luZG93LmtleUZvcndhcmQgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSkge1xuICAgICAgICAgICAgLy8gJChjc3NJZCkudmFsKGRhdGFbMF0uZGlzcGxheV9uYW1lKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5iQm94ICYmIHdpbmRvdy5iQm94WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93LmJCb3hbMF0gPCBkYXRhW2ldLmxvbiAmJiBkYXRhW2ldLmxvbiA8IHdpbmRvdy5iQm94WzJdICYmIHdpbmRvdy5iQm94WzFdIDwgZGF0YVtpXS5sYXQgJiYgZGF0YVtpXS5sYXQgPCB3aW5kb3cuYkJveFszXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckZyb21OYW1lcy5wdXNoKGRhdGFbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbVBvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvUG9zaXRpb25zLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQFRvRG8gb3V0b2Zib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbU5hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckZyb21Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJUb05hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvUG9zaXRpb25zLnB1c2goW2RhdGFbaV0ubGF0LCBkYXRhW2ldLmxvbl0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgICAgICQoY3NzSWQpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogYXJyRnJvbU5hbWVzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGNzc0lkKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGFyclRvTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSlcbn1cblxuLyoqXG4gKiBjYWxscyByZXZlcnNlLWdlb3NlYXJjaCB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGFuIGFkZHJlc3Mtc3RyaW5nIGFuZCBzZXQgaXQgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBpbnB1dCAgICAgICBhZGRyZXNzLXN0cmluZyBmcm9tIGlucHV0XG4gKiBAcGFyYW0gY3NzaWQgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBzdWJtaXRTZWFyY2goaW5wdXQsIGNzc0lkKSB7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArIFwic2VhcmNoLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyB3aW5kb3cua2V5Rm9yd2FyZCArIFwiJnE9XCIgKyBpbnB1dDtcbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5iQm94ICYmIHdpbmRvdy5iQm94WzBdKSB7XG4gICAgICAgICAgICBpZiAod2luZG93LmJCb3hbMF0gPCBkYXRhWzBdLmxvbiAmJiBkYXRhWzBdLmxvbiA8IHdpbmRvdy5iQm94WzJdICYmIHdpbmRvdy5iQm94WzFdIDwgZGF0YVswXS5sYXQgJiYgZGF0YVswXS5sYXQgPCB3aW5kb3cuYkJveFszXSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtdG9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gJChjc3NJZCkudmFsKGRhdGFbMF0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLXRvXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSlcbn1cbi8qKlxuICogY2FsbHMgdGFyaWZmU2VydmljZSB0byBmZXRjaCBpbmZvcm1hdGlvbnMgYW5kIHByaWNpbmcgYWJvdXQgdGhlIHNldCB0YXJpZmZzIGFuZCBzaG93cyB0aGVtXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbmZ1bmN0aW9uIGZpbmRUYXJpZmZzKCkge1xuICAgIGxldCB1cmwgPSBcImNvbjRnaXMvdGFyaWZmU2VydmljZS9cIiArIHdpbmRvdy5zZXR0aW5nSWQgKyBcIi9cIjtcbiAgICAkLmFqYXgoe3VybDp1cmx9KVxuICAgICAgICAuZG9uZShmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgbGV0IHBhcmVudCA9ICQoXCIudGFyaWZmLW91dHB1dFwiKTtcbiAgICAgICAgaWYgKHdpbmRvdy5kaXNwbGF5R3JpZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgIHBhcmVudC5jc3MoJ2Rpc3BsYXknLCdncmlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXJlbnQuY3NzKCdkaXNwbGF5JywnYmxvY2snKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcm93Q291bnQgPSBcInJvdy1ldmVuXCI7XG4gICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuaW5uZXJIVE1MID0gaTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbU5hbWUuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtQmFzZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS5iYXNlUHJpY2U7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1CYXNlUHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtQmFzZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1EaXN0UHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLmRpc3RQcmljZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbURpc3RQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1EaXN0UHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbVRpbWVQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmlubmVySFRNTCA9IGRhdGFbaV0udGltZVByaWNlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtVGltZVByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbVRpbWVQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIHJvd0NvdW50ID0gcm93Q291bnQgPT0gXCJyb3ctZXZlblwiID8gXCJyb3ctdW5ldmVuXCIgOiBcInJvdy1ldmVuXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJyk7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRSb3cuaW5uZXJIVE1MID0gXCI8dGg+XCIgKyBpICsgXCI8L3RoPlwiICsgXCI8dGQ+XCIrIGRhdGFbaV0uYmFzZVByaWNlICsgXCLigqw8L3RkPlwiICsgXCI8dGQ+XCIrIGRhdGFbaV0uZGlzdFByaWNlICsgXCLigqw8L3RkPlwiICsgXCI8dGQ+XCIgKyBkYXRhW2ldLnRpbWVQcmljZSArIFwi4oKsPC90ZD5cIlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGVsZW1lbnRSb3cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG59XG5cbi8qKlxuICogQ2hlY2tzIHdldGhlciBhbGwgcGFyYW1zIGZvciB0aGUgY2FsY3VsYXRpb24gb2YgYW4gZXhwZW5zZSBhcmUgc2V0IGFuZCBjYWxscyB0aGUgc2VydmVyIGFuZCBkaXNwbGF5cyB0aGUgcmVwc29uc2VcbiAqIEBwYXJhbVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZUV4cGVuc2VzICgpIHtcbiAgICBpZiAodGF4aURhdGEucm91dGVGcm9tLmxvYyAmJiB0YXhpRGF0YS5yb3V0ZVRvLmxvYykge1xuICAgICAgICBsZXQgdXJsID0gXCJjb240Z2lzL2V4cGVuc2VTZXJ2aWNlL1wiICsgd2luZG93LnNldHRpbmdJZCArIFwiL1wiICsgdGF4aURhdGEucm91dGVGcm9tLmxvY1swXSArIFwiLFwiICsgdGF4aURhdGEucm91dGVGcm9tLmxvY1sxXSArIFwiO1wiICsgdGF4aURhdGEucm91dGVUby5sb2NbMF0gKyBcIixcIiArIHRheGlEYXRhLnJvdXRlVG8ubG9jWzFdICsgXCIvXCI7XG4gICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGxldCB0YWJsZU5vZGUgPSAkKFwiLnJvdXRlLW91dHB1dFwiKTtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuZGlzcGxheUdyaWQgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgdGFibGVOb2RlLmNzcyhcImRpc3BsYXlcIiwgXCJncmlkXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucmVzcG9uc2UtaGVhZGxpbmVcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJChcIi5yZXNwb25zZS12YWx1ZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VGltZSA9ICQoXCIucmVzcG9uc2UtdGltZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRpbWUuaHRtbCh0b0h1bWFuVGltZShkYXRhLnRpbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudERpc3RhbmNlID0gJChcIi5yZXNwb25zZS1kaXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEaXN0YW5jZSA9IGRhdGEuZGlzdCArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGlzdGFuY2UgPSByZXNwb25zZURpc3RhbmNlLnJlcGxhY2UoJy4nLCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZURpc3RhbmNlLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnREaXN0YW5jZS5odG1sKHJlc3BvbnNlRGlzdGFuY2Uuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCArIDMpICsgXCIga21cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBpbnNlcnRBZnRlckhlYWQgPSAkKFwiLmhlYWRsaW5lLXRpbWVcIik7XG4gICAgICAgICAgICAgICAgbGV0IGluc2VydEFmdGVyVmFsID0gJChcIi5yZXNwb25zZS10aW1lXCIpO1xuICAgICAgICAgICAgICAgIGxldCBhdXRvQXV0byA9IFwiYXV0byBhdXRvIFwiO1xuICAgICAgICAgICAgICAgIGZvcihsZXQgdGFyaWZmTmFtZSBpbiBkYXRhLnRhcmlmZnMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGVOYW1lID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lLmh0bWwodGFyaWZmTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lLmFkZENsYXNzKFwicmVzcG9uc2UtaGVhZGxpbmVcIik7XG4gICAgICAgICAgICAgICAgICAgIG5vZGVOYW1lLmFkZENsYXNzKFwiZ3JpZC1pdGVtXCIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlTmFtZS5pbnNlcnRBZnRlcihpbnNlcnRBZnRlckhlYWQpO1xuICAgICAgICAgICAgICAgICAgICBpbnNlcnRBZnRlckhlYWQgPSBub2RlTmFtZVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VFbGVtZW50ID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGEudGFyaWZmc1t0YXJpZmZOYW1lXSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUVsZW1lbnQuaHRtbChyZXNwb25zZVRhcmlmZi5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsKSArIFwiIOKCrFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VFbGVtZW50LmFkZENsYXNzKFwicmVzcG9uc2UtdmFsdWVcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRWxlbWVudC5hZGRDbGFzcyhcImdyaWQtaXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VFbGVtZW50Lmluc2VydEFmdGVyKGluc2VydEFmdGVyVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QWZ0ZXJWYWwgPSByZXNwb25zZUVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9BdXRvICs9IFwiYXV0byBcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gQENvb2wgYm9udXMgZmVhdHVyZVxuICAgICAgICAgICAgICAgIC8vIHNldEludGVydmFsKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgLy8gICAgICQoXCIqXCIpLmNzcyhcImJhY2tncm91bmQtY29sb3JcIiwgJyMnK01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSoxNjc3NzIxNSkudG9TdHJpbmcoMTYpKVxuICAgICAgICAgICAgICAgIC8vIH0sMjApXG4gICAgICAgICAgICAgICAgdGFibGVOb2RlLmNzcyhcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiLCBhdXRvQXV0byk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YWJsZU5vZGUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgICAgICQoXCIucmVzcG9uc2UtaGVhZGxpbmVcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgJChcIi5yZXNwb25zZS12YWx1ZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS50aW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VGltZSA9ICQoXCIucmVzcG9uc2UtdGltZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRpbWUuaHRtbCh0b0h1bWFuVGltZShkYXRhLnRpbWUpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuZGlzdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudERpc3RhbmNlID0gJChcIi5yZXNwb25zZS1kaXN0XCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VEaXN0YW5jZSA9IGRhdGEuZGlzdCArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGlzdGFuY2UgPSByZXNwb25zZURpc3RhbmNlLnJlcGxhY2UoJy4nLCcuJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZURpc3RhbmNlLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnREaXN0YW5jZS5odG1sKHJlc3BvbnNlRGlzdGFuY2Uuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCArIDMpICsgXCIga21cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBoZWFkbGluZGVOb2RlID0gJChcIi5yb3V0ZS1vdXRwdXQtaGVhZGxpbmVcIik7XG4gICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlTm9kZSA9ICQoXCIucm91dGUtb3V0cHV0LXZhbHVlc1wiKTtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRhcmlmZk5hbWUgaW4gZGF0YS50YXJpZmZzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBoZWFkbGluZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0aCcpO1xuICAgICAgICAgICAgICAgICAgICBoZWFkbGluZUVsZW1lbnQuaW5uZXJIVE1MID0gdGFyaWZmTmFtZTtcbiAgICAgICAgICAgICAgICAgICAgJChoZWFkbGluZUVsZW1lbnQpLmFkZENsYXNzKFwicmVzcG9uc2UtaGVhZGxpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZVRhcmlmZiA9IGRhdGEudGFyaWZmc1t0YXJpZmZOYW1lXSArIFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVGFyaWZmID0gcmVzcG9uc2VUYXJpZmYucmVwbGFjZShcIi5cIixcIixcIik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUVsZW1lbnQuaW5uZXJIVE1MID0gcmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIlxuICAgICAgICAgICAgICAgICAgICAkKHJlc3BvbnNlRWxlbWVudCkuYWRkQ2xhc3MoXCJyZXNwb25zZS12YWx1ZVwiKVxuICAgICAgICAgICAgICAgICAgICBoZWFkbGluZGVOb2RlLmFwcGVuZChoZWFkbGluZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU5vZGUuYXBwZW5kKHJlc3BvbnNlRWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbn1cblxuLyoqXG4gKiBJbml0aWFsIGZ1bmN0aW9uIHRvIGVuYWJsZSB1c2VyLWlucHV0IHRvIHRoZSBndWlcbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICBsZXQgbGFuZ3VhZ2UgPSB3aW5kb3cuc2VydmljZUxhbmcgfHwgd2luZG93Lm5hdmlnYXRvci51c2VyTGFuZ3VhZ2UgfHwgd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZTtcbiAgICAgaWYgKGxhbmd1YWdlID0gXCJlblwiKSB7XG4gICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzRW5nbGlzaClcbiAgICAgfVxuICAgICBlbHNlIGlmIChsYW5ndWFnZSA9PSBcImRlXCIpIHtcbiAgICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNHZXJtYW4pO1xuICAgICB9XG4gICAgIGVsc2Uge1xuICAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdGF4aUNvbnN0YW50c0VuZ2xpc2gpO1xuICAgICB9XG4gICAgIHdpbmRvdy5iQm94ID0gSlNPTi5wYXJzZSh3aW5kb3cuYkJveCk7XG4gICAgbGV0IG9iaklucHV0RnJvbSA9ICQoXCIucm91dGUtdG9cIik7XG4gICAgaWYgKG9iaklucHV0RnJvbVswXSkge1xuICAgICAgICBvYmpJbnB1dEZyb21bMF0ucGxhY2Vob2xkZXIgPSBsYW5nQ29uc3RhbnRzLkRVTU1ZX0lOUFVUO1xuICAgIH1cbiAgICBsZXQgb2JqSW5wdXRUbyA9ICQoXCIucm91dGUtZnJvbVwiKTtcbiAgICBpZiAob2JqSW5wdXRUb1swXSkge1xuICAgICAgICBvYmpJbnB1dFRvWzBdLnBsYWNlaG9sZGVyID0gbGFuZ0NvbnN0YW50cy5EVU1NWV9JTlBVVDtcbiAgICB9XG4gICAgbGV0IG9iakhlYWRsaW5lRGlzdCA9ICQoXCIuaGVhZGxpbmUtZGlzdFwiKTtcbiAgICBvYmpIZWFkbGluZURpc3QuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1QpO1xuICAgIGxldCBvYmpIZWFkbGluZVRpbWUgPSAkKFwiLmhlYWRsaW5lLXRpbWVcIik7XG4gICAgIG9iakhlYWRsaW5lVGltZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfVElNRSk7XG4gICAgY29uc3QgZW50ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyVGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICBzY29wZS5jb3VudGVyID0gY3VyclRpbWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDEwMDAgPCBNYXRoLmZsb29yKERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZS5jb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZHJlc3MoJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LDE1MDApXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2tleWRvd24nLCBlbnRlckxpc3RlbmVyKTtcbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2F1dG9jb21wbGV0ZXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50LCB1aSl7XG4gICAgICAgIGxldCB2YWx1ZSA9IHVpLml0ZW0udmFsdWU7XG4gICAgICAgIGxldCBsb2MgPSBhcnJGcm9tUG9zaXRpb25zW2FyckZyb21OYW1lcy5maW5kSW5kZXgoZGFuZ2VyID0+IGRhbmdlciA9PT0gdmFsdWUpXTtcbiAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IGxvYztcbiAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICB9KTtcbiAgICAkKFwiLnJvdXRlLXRvXCIpLm9uKCdrZXlkb3duJywgZW50ZXJMaXN0ZW5lcik7XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlRnJvbShhZGRyZXNzKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtdG9cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlVG8oYWRkcmVzcyk7XG4gICAgfSk7XG5cblxuICAgICQoXCIuc3RhcnQtc2VhcmNoXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzdWJtaXRTZWFyY2goKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtZnJvbS1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS10by1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZVRvUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAgbGV0IG9iakhlYWRsaW5lRGlzdFByaWNlID0gJChcIi5oZWFkbGluZS1kaXN0LXByaWNlXCIpO1xuICAgICBvYmpIZWFkbGluZURpc3RQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfRElTVF9QUklDRSk7XG4gICAgIGxldCBvYmpIZWFkbGluZVRpbWVQcmljZSA9ICQoXCIuaGVhZGxpbmUtdGltZS1wcmljZVwiKTtcbiAgICAgb2JqSGVhZGxpbmVUaW1lUHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX1RJTUVfUFJJQ0UpO1xuICAgICBsZXQgb2JqSGVhZGxpbmVCYXNlUHJpY2UgPSAkKFwiLmhlYWRsaW5lLWJhc2UtcHJpY2VcIik7XG4gICAgIG9iakhlYWRsaW5lQmFzZVByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9CQVNFX1BSSUNFKTtcbiAgICBmaW5kVGFyaWZmcygpO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==