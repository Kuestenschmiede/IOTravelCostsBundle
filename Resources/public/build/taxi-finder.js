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

/***/ "./Resources/public/js/taxi-finder.js":
/*!********************************************!*\
  !*** ./Resources/public/js/taxi-finder.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const $ = jQuery;
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

function setRouteFrom(address) {
    taxiData.routeFrom.adress = address;
}

function setRouteTo(address) {
    taxiData.routeTo.adress = address;
}

function handleRouteFromPosition(coordinates) {
    handlePosition(coordinates, ".route-from", "routeFrom");
    calculateExpenses();
}

function handleRouteToPosition(coordinates) {
    handlePosition(coordinates, ".route-to", "routeTo");
    calculateExpenses();
}
function calculateExpenses() {
    if (taxiData.routeFrom.loc && taxiData.routeTo.loc) {
        let url = "con4gis/expenseService/" + window.settingId + "/" + taxiData.routeFrom.loc[0] + "," + taxiData.routeFrom.loc[1] + ";" + taxiData.routeTo.loc[0] + "," + taxiData.routeTo.loc[1] + "/";
        $.ajax({ url: url }).done(function (data) {
            let parentNode = $(".output-content");
        });
    }
}

function handlePosition(coordinates, cssId, propName) {
    let coords = coordinates.coords;
    // TODO aus modul hier rein geben
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
function handleAdress(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({ url: url }).done(function (data) {
        if (data[0] && data[0].display_name) {
            // $(cssId).val(data[0].display_name);

            for (let i in data) {
                if (data.hasOwnProperty(i)) {
                    if (cssId === ".route-from") {
                        arrFromNames.push(data[i].display_name);
                        arrFromPositions.push([data[i].lat, data[i].lon]);
                    } else {
                        arrToNames.push(data[i].display_name);
                        arrToPositions.push([data[i].lat, data[i].lon]);
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
function submitSearch(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({ url: url }).done(function (data) {
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

$(document).ready(function () {
    //     routeFromInput = new CachedInputfield(".route-from", false, "c4g-router-address");
    //     routeToInput = new CachedInputfield(".route-to", false, "c4g-router-address");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qcyJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5IiwiYXJyRnJvbU5hbWVzIiwiYXJyRnJvbVBvc2l0aW9ucyIsImFyclRvTmFtZXMiLCJhcnJUb1Bvc2l0aW9ucyIsInRheGlEYXRhIiwicm91dGVGcm9tIiwicm91dGVUbyIsInJvdXRlRnJvbUlucHV0Iiwicm91dGVUb0lucHV0Iiwic2V0Um91dGVGcm9tIiwiYWRkcmVzcyIsImFkcmVzcyIsInNldFJvdXRlVG8iLCJoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbiIsImNvb3JkaW5hdGVzIiwiaGFuZGxlUG9zaXRpb24iLCJjYWxjdWxhdGVFeHBlbnNlcyIsImhhbmRsZVJvdXRlVG9Qb3NpdGlvbiIsImxvYyIsInVybCIsIndpbmRvdyIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcmVudE5vZGUiLCJjc3NJZCIsInByb3BOYW1lIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJwcm94eVVybCIsImtleVJldmVyc2UiLCJwZWRlc3RyaWFuIiwiaG91c2VfbnVtYmVyIiwicGF0aCIsImxlbmd0aCIsInBvc3Rjb2RlIiwidG93biIsInZhbCIsImhhbmRsZUFkcmVzcyIsImlucHV0Iiwia2V5Rm9yd2FyZCIsImRpc3BsYXlfbmFtZSIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJsYXQiLCJsb24iLCJhdXRvY29tcGxldGUiLCJzb3VyY2UiLCJzdWJtaXRTZWFyY2giLCJkb2N1bWVudCIsInJlYWR5IiwiZW50ZXJMaXN0ZW5lciIsImV2ZW50Iiwic2NvcGUiLCJrZXlDb2RlIiwiY2xhc3NMaXN0IiwiY3VyclRpbWUiLCJNYXRoIiwiZmxvb3IiLCJEYXRlIiwibm93IiwiY291bnRlciIsInNldFRpbWVvdXQiLCJvbiIsInVpIiwidmFsdWUiLCJpdGVtIiwiZmluZEluZGV4IiwiZGFuZ2VyIiwibmF2aWdhdG9yIiwiZ2VvbG9jYXRpb24iLCJnZXRDdXJyZW50UG9zaXRpb24iLCJjb25zb2xlIiwid2FybiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGYTs7QUFFYixNQUFNQSxJQUFJQyxNQUFWO0FBQ0EsSUFBSUMsZUFBZSxFQUFuQjtBQUNBLElBQUlDLG1CQUFtQixFQUF2QjtBQUNBLElBQUlDLGFBQWEsRUFBakI7QUFDQSxJQUFJQyxpQkFBaUIsRUFBckI7QUFDQSxJQUFJQyxXQUFXO0FBQ1hDLGVBQVcsRUFEQTtBQUVYQyxhQUFTO0FBRkUsQ0FBZjs7QUFLQSxJQUFJQyxpQkFBaUIsSUFBckI7QUFDQSxJQUFJQyxlQUFlLElBQW5COztBQUdBLFNBQVNDLFlBQVQsQ0FBc0JDLE9BQXRCLEVBQStCO0FBQzNCTixhQUFTQyxTQUFULENBQW1CTSxNQUFuQixHQUE0QkQsT0FBNUI7QUFDSDs7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LENBQWtCLFNBQWxCLEVBQTZCWixhQUE3Qjs7QUFFQXhELE1BQUUsYUFBRixFQUFpQm9FLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFlBQVc7QUFDckMsWUFBSXhELFVBQVVaLEVBQUUsSUFBRixFQUFReUMsR0FBUixFQUFkO0FBQ0E5QixxQkFBYUMsT0FBYjtBQUNILEtBSEQ7O0FBS0FaLE1BQUUsV0FBRixFQUFlb0UsRUFBZixDQUFrQixRQUFsQixFQUE0QixZQUFXO0FBQ25DLFlBQUl4RCxVQUFVWixFQUFFLElBQUYsRUFBUXlDLEdBQVIsRUFBZDtBQUNBM0IsbUJBQVdGLE9BQVg7QUFDSCxLQUhEOztBQU1BWixNQUFFLGVBQUYsRUFBbUJvRSxFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3RDZjtBQUNILEtBRkQ7O0FBSUFyRCxNQUFFLHlCQUFGLEVBQTZCb0UsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBWTtBQUNqRCxZQUFJTSxVQUFVQyxXQUFkLEVBQTJCO0FBQ3ZCRCxzQkFBVUMsV0FBVixDQUFzQkMsa0JBQXRCLENBQXlDN0QsdUJBQXpDO0FBQ0gsU0FGRCxNQUVPO0FBQ0g4RCxvQkFBUUMsSUFBUixDQUFhLDZHQUFiO0FBQ0g7QUFDSixLQU5EOztBQVFBOUUsTUFBRSx1QkFBRixFQUEyQm9FLEVBQTNCLENBQThCLE9BQTlCLEVBQXVDLFlBQVk7QUFDL0MsWUFBSU0sVUFBVUMsV0FBZCxFQUEyQjtBQUN2QkQsc0JBQVVDLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5Q3pELHFCQUF6QztBQUNILFNBRkQsTUFFTztBQUNIMEQsb0JBQVFDLElBQVIsQ0FBYSw2R0FBYjtBQUNIO0FBQ0osS0FORDtBQU9ILENBNURBLEUiLCJmaWxlIjoidGF4aS1maW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1maW5kZXIuanNcIik7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuY29uc3QgJCA9IGpRdWVyeTtcbnZhciBhcnJGcm9tTmFtZXMgPSBbXTtcbnZhciBhcnJGcm9tUG9zaXRpb25zID0gW107XG52YXIgYXJyVG9OYW1lcyA9IFtdO1xudmFyIGFyclRvUG9zaXRpb25zID0gW107XG52YXIgdGF4aURhdGEgPSB7XG4gICAgcm91dGVGcm9tOiB7fSxcbiAgICByb3V0ZVRvOiB7fVxufTtcblxubGV0IHJvdXRlRnJvbUlucHV0ID0gbnVsbDtcbmxldCByb3V0ZVRvSW5wdXQgPSBudWxsO1xuXG5cbmZ1bmN0aW9uIHNldFJvdXRlRnJvbShhZGRyZXNzKSB7XG4gICAgdGF4aURhdGEucm91dGVGcm9tLmFkcmVzcyA9IGFkZHJlc3M7XG59XG5cbmZ1bmN0aW9uIHNldFJvdXRlVG8oYWRkcmVzcykge1xuICAgIHRheGlEYXRhLnJvdXRlVG8uYWRyZXNzID0gYWRkcmVzcztcbn1cblxuXG5mdW5jdGlvbiBoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBcIi5yb3V0ZS1mcm9tXCIsIFwicm91dGVGcm9tXCIpO1xuICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG5cbn1cblxuZnVuY3Rpb24gaGFuZGxlUm91dGVUb1Bvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIFwiLnJvdXRlLXRvXCIsIFwicm91dGVUb1wiKTtcbiAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xufVxuZnVuY3Rpb24gY2FsY3VsYXRlRXhwZW5zZXMgKCkge1xuICAgIGlmICh0YXhpRGF0YS5yb3V0ZUZyb20ubG9jICYmIHRheGlEYXRhLnJvdXRlVG8ubG9jKSB7XG4gICAgICAgIGxldCB1cmwgPSBcImNvbjRnaXMvZXhwZW5zZVNlcnZpY2UvXCIgKyB3aW5kb3cuc2V0dGluZ0lkICsgXCIvXCIgKyB0YXhpRGF0YS5yb3V0ZUZyb20ubG9jWzBdICsgXCIsXCIgKyB0YXhpRGF0YS5yb3V0ZUZyb20ubG9jWzFdICsgXCI7XCIgKyB0YXhpRGF0YS5yb3V0ZVRvLmxvY1swXSArIFwiLFwiICsgdGF4aURhdGEucm91dGVUby5sb2NbMV0gKyBcIi9cIjtcbiAgICAgICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgbGV0IHBhcmVudE5vZGUgPSAkKFwiLm91dHB1dC1jb250ZW50XCIpO1xuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIGNzc0lkLCBwcm9wTmFtZSkge1xuICAgIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gICAgLy8gVE9ETyBhdXMgbW9kdWwgaGllciByZWluIGdlYmVuXG4gICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgICB9XG4gICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArICcvcmV2ZXJzZS5waHA/a2V5PScrIHdpbmRvdy5rZXlSZXZlcnNlKycmZm9ybWF0PWpzb24mbGF0PScgKyBjb29yZHMubGF0aXR1ZGUgKyAnJmxvbj0nICsgY29vcmRzLmxvbmdpdHVkZTtcbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gXCJcIjtcbiAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuKSB7XG4gICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuICsgXCIgXCI7XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmFkZHJlc3MucGF0aCkge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGF0aCArIFwiIFwiO1xuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFkZHJlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBcIiwgXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnBvc3Rjb2RlKSB7XG4gICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wb3N0Y29kZSArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmFkZHJlc3MudG93bikge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICAgICAgfVxuICAgICAgICAkKGNzc0lkKS52YWwoYWRkcmVzcyk7XG4gICAgICAgIHRheGlEYXRhW3Byb3BOYW1lXS5hZHJlc3MgPSBhZGRyZXNzO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFuZGxlQWRyZXNzKGlucHV0LCBjc3NJZCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyBcInNlYXJjaC5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgd2luZG93LmtleUZvcndhcmQgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZihkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbU5hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbVBvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJUb1Bvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgJChjc3NJZCkuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBhcnJGcm9tTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoY3NzSWQpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogYXJyVG9OYW1lc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxufVxuZnVuY3Rpb24gc3VibWl0U2VhcmNoKGlucHV0LCBjc3NJZCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyBcInNlYXJjaC5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgd2luZG93LmtleUZvcndhcmQgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZihkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS10b1wiKSB7XG4gICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4vLyAgICAgcm91dGVGcm9tSW5wdXQgPSBuZXcgQ2FjaGVkSW5wdXRmaWVsZChcIi5yb3V0ZS1mcm9tXCIsIGZhbHNlLCBcImM0Zy1yb3V0ZXItYWRkcmVzc1wiKTtcbi8vICAgICByb3V0ZVRvSW5wdXQgPSBuZXcgQ2FjaGVkSW5wdXRmaWVsZChcIi5yb3V0ZS10b1wiLCBmYWxzZSwgXCJjNGctcm91dGVyLWFkZHJlc3NcIik7XG4gICAgY29uc3QgZW50ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyVGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICBzY29wZS5jb3VudGVyID0gY3VyclRpbWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDEwMDAgPCBNYXRoLmZsb29yKERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZS5jb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZHJlc3MoJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LDE1MDApXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2tleWRvd24nLCBlbnRlckxpc3RlbmVyKTtcbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2F1dG9jb21wbGV0ZXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50LCB1aSl7XG4gICAgICAgIGxldCB2YWx1ZSA9IHVpLml0ZW0udmFsdWU7XG4gICAgICAgIGxldCBsb2MgPSBhcnJGcm9tUG9zaXRpb25zW2FyckZyb21OYW1lcy5maW5kSW5kZXgoZGFuZ2VyID0+IGRhbmdlciA9PT0gdmFsdWUpXTtcbiAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IGxvYztcbiAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICB9KTtcbiAgICAkKFwiLnJvdXRlLXRvXCIpLm9uKCdrZXlkb3duJywgZW50ZXJMaXN0ZW5lcik7XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlRnJvbShhZGRyZXNzKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtdG9cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlVG8oYWRkcmVzcyk7XG4gICAgfSk7XG5cblxuICAgICQoXCIuc3RhcnQtc2VhcmNoXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzdWJtaXRTZWFyY2goKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtZnJvbS1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS10by1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZVRvUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=