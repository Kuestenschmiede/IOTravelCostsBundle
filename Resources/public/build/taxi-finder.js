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
            let tableNode = $(".route-output");
            tableNode.css("display", "block");
            $("response-headline").remove();
            $("response-value").remove();
            if (data.time) {
                let elementTime = $(".response-time");
                elementTime.html(data.time);
            }
            if (data.dist) {
                let elementDistance = $(".response-dist");
                elementDistance.html(data.dist);
            }
            let headlindeNode = $(".route-output-headline");
            let responseNode = $(".route-output-values");
            for (let tariffName in data.tariffs) {
                let headlineElement = document.createElement('th');
                headlineElement.innerHTML = tariffName;
                $(headlineElement).addClass("response-headline");
                let responseElement = document.createElement('td');
                responseElement.innerHTML = data.tariffs[tariffName];
                $(responseElement).addClass("response-value");
                headlindeNode.append(headlineElement);
                responseNode.append(responseElement);
            }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qcyJdLCJuYW1lcyI6WyIkIiwialF1ZXJ5IiwiYXJyRnJvbU5hbWVzIiwiYXJyRnJvbVBvc2l0aW9ucyIsImFyclRvTmFtZXMiLCJhcnJUb1Bvc2l0aW9ucyIsInRheGlEYXRhIiwicm91dGVGcm9tIiwicm91dGVUbyIsInJvdXRlRnJvbUlucHV0Iiwicm91dGVUb0lucHV0Iiwic2V0Um91dGVGcm9tIiwiYWRkcmVzcyIsImFkcmVzcyIsInNldFJvdXRlVG8iLCJoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbiIsImNvb3JkaW5hdGVzIiwiaGFuZGxlUG9zaXRpb24iLCJjYWxjdWxhdGVFeHBlbnNlcyIsImhhbmRsZVJvdXRlVG9Qb3NpdGlvbiIsImxvYyIsInVybCIsIndpbmRvdyIsInNldHRpbmdJZCIsImFqYXgiLCJkb25lIiwiZGF0YSIsInRhYmxlTm9kZSIsImNzcyIsInJlbW92ZSIsInRpbWUiLCJlbGVtZW50VGltZSIsImh0bWwiLCJkaXN0IiwiZWxlbWVudERpc3RhbmNlIiwiaGVhZGxpbmRlTm9kZSIsInJlc3BvbnNlTm9kZSIsInRhcmlmZk5hbWUiLCJ0YXJpZmZzIiwiaGVhZGxpbmVFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYWRkQ2xhc3MiLCJyZXNwb25zZUVsZW1lbnQiLCJhcHBlbmQiLCJjc3NJZCIsInByb3BOYW1lIiwiY29vcmRzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJwcm94eVVybCIsImtleVJldmVyc2UiLCJwZWRlc3RyaWFuIiwiaG91c2VfbnVtYmVyIiwicGF0aCIsImxlbmd0aCIsInBvc3Rjb2RlIiwidG93biIsInZhbCIsImhhbmRsZUFkcmVzcyIsImlucHV0Iiwia2V5Rm9yd2FyZCIsImRpc3BsYXlfbmFtZSIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJsYXQiLCJsb24iLCJhdXRvY29tcGxldGUiLCJzb3VyY2UiLCJzdWJtaXRTZWFyY2giLCJyZWFkeSIsImVudGVyTGlzdGVuZXIiLCJldmVudCIsInNjb3BlIiwia2V5Q29kZSIsImNsYXNzTGlzdCIsImN1cnJUaW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImNvdW50ZXIiLCJzZXRUaW1lb3V0Iiwib24iLCJ1aSIsInZhbHVlIiwiaXRlbSIsImZpbmRJbmRleCIsImRhbmdlciIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29uc29sZSIsIndhcm4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRmE7O0FBRWIsTUFBTUEsSUFBSUMsTUFBVjtBQUNBLElBQUlDLGVBQWUsRUFBbkI7QUFDQSxJQUFJQyxtQkFBbUIsRUFBdkI7QUFDQSxJQUFJQyxhQUFhLEVBQWpCO0FBQ0Es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dXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qc1wiKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xudmFyIGFyckZyb21OYW1lcyA9IFtdO1xudmFyIGFyckZyb21Qb3NpdGlvbnMgPSBbXTtcbnZhciBhcnJUb05hbWVzID0gW107XG52YXIgYXJyVG9Qb3NpdGlvbnMgPSBbXTtcbnZhciB0YXhpRGF0YSA9IHtcbiAgICByb3V0ZUZyb206IHt9LFxuICAgIHJvdXRlVG86IHt9XG59O1xuXG5sZXQgcm91dGVGcm9tSW5wdXQgPSBudWxsO1xubGV0IHJvdXRlVG9JbnB1dCA9IG51bGw7XG5cblxuZnVuY3Rpb24gc2V0Um91dGVGcm9tKGFkZHJlc3MpIHtcbiAgICB0YXhpRGF0YS5yb3V0ZUZyb20uYWRyZXNzID0gYWRkcmVzcztcbn1cblxuZnVuY3Rpb24gc2V0Um91dGVUbyhhZGRyZXNzKSB7XG4gICAgdGF4aURhdGEucm91dGVUby5hZHJlc3MgPSBhZGRyZXNzO1xufVxuXG5cbmZ1bmN0aW9uIGhhbmRsZVJvdXRlRnJvbVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIFwiLnJvdXRlLWZyb21cIiwgXCJyb3V0ZUZyb21cIik7XG4gICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcblxufVxuXG5mdW5jdGlvbiBoYW5kbGVSb3V0ZVRvUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcywgXCIucm91dGUtdG9cIiwgXCJyb3V0ZVRvXCIpO1xuICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG59XG5mdW5jdGlvbiBjYWxjdWxhdGVFeHBlbnNlcyAoKSB7XG4gICAgaWYgKHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgJiYgdGF4aURhdGEucm91dGVUby5sb2MpIHtcbiAgICAgICAgbGV0IHVybCA9IFwiY29uNGdpcy9leHBlbnNlU2VydmljZS9cIiArIHdpbmRvdy5zZXR0aW5nSWQgKyBcIi9cIiArIHRheGlEYXRhLnJvdXRlRnJvbS5sb2NbMF0gKyBcIixcIiArIHRheGlEYXRhLnJvdXRlRnJvbS5sb2NbMV0gKyBcIjtcIiArIHRheGlEYXRhLnJvdXRlVG8ubG9jWzBdICsgXCIsXCIgKyB0YXhpRGF0YS5yb3V0ZVRvLmxvY1sxXSArIFwiL1wiO1xuICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVOb2RlID0gJChcIi5yb3V0ZS1vdXRwdXRcIik7XG4gICAgICAgICAgICB0YWJsZU5vZGUuY3NzKFwiZGlzcGxheVwiLCBcImJsb2NrXCIpO1xuICAgICAgICAgICAgJChcInJlc3BvbnNlLWhlYWRsaW5lXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgJChcInJlc3BvbnNlLXZhbHVlXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgaWYgKGRhdGEudGltZSkge1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VGltZSA9ICQoXCIucmVzcG9uc2UtdGltZVwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50VGltZS5odG1sKGRhdGEudGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5kaXN0KSB7XG4gICAgICAgICAgICAgICAgbGV0IGVsZW1lbnREaXN0YW5jZSA9ICQoXCIucmVzcG9uc2UtZGlzdFwiKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50RGlzdGFuY2UuaHRtbChkYXRhLmRpc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGhlYWRsaW5kZU5vZGUgPSAkKFwiLnJvdXRlLW91dHB1dC1oZWFkbGluZVwiKTtcbiAgICAgICAgICAgIGxldCByZXNwb25zZU5vZGUgPSAkKFwiLnJvdXRlLW91dHB1dC12YWx1ZXNcIik7XG4gICAgICAgICAgICBmb3IobGV0IHRhcmlmZk5hbWUgaW4gZGF0YS50YXJpZmZzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhlYWRsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICAgICAgaGVhZGxpbmVFbGVtZW50LmlubmVySFRNTCA9IHRhcmlmZk5hbWU7XG4gICAgICAgICAgICAgICAgJChoZWFkbGluZUVsZW1lbnQpLmFkZENsYXNzKFwicmVzcG9uc2UtaGVhZGxpbmVcIilcbiAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKTtcbiAgICAgICAgICAgICAgICByZXNwb25zZUVsZW1lbnQuaW5uZXJIVE1MID0gZGF0YS50YXJpZmZzW3RhcmlmZk5hbWVdO1xuICAgICAgICAgICAgICAgICQocmVzcG9uc2VFbGVtZW50KS5hZGRDbGFzcyhcInJlc3BvbnNlLXZhbHVlXCIpXG4gICAgICAgICAgICAgICAgaGVhZGxpbmRlTm9kZS5hcHBlbmQoaGVhZGxpbmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICByZXNwb25zZU5vZGUuYXBwZW5kKHJlc3BvbnNlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIGNzc0lkLCBwcm9wTmFtZSkge1xuICAgIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gICAgLy8gVE9ETyBhdXMgbW9kdWwgaGllciByZWluIGdlYmVuXG4gICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgICB9XG4gICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArICcvcmV2ZXJzZS5waHA/a2V5PScrIHdpbmRvdy5rZXlSZXZlcnNlKycmZm9ybWF0PWpzb24mbGF0PScgKyBjb29yZHMubGF0aXR1ZGUgKyAnJmxvbj0nICsgY29vcmRzLmxvbmdpdHVkZTtcbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gXCJcIjtcbiAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuKSB7XG4gICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuICsgXCIgXCI7XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmFkZHJlc3MucGF0aCkge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGF0aCArIFwiIFwiO1xuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFkZHJlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBcIiwgXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnBvc3Rjb2RlKSB7XG4gICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wb3N0Y29kZSArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmFkZHJlc3MudG93bikge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICAgICAgfVxuICAgICAgICAkKGNzc0lkKS52YWwoYWRkcmVzcyk7XG4gICAgICAgIHRheGlEYXRhW3Byb3BOYW1lXS5hZHJlc3MgPSBhZGRyZXNzO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFuZGxlQWRyZXNzKGlucHV0LCBjc3NJZCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyBcInNlYXJjaC5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgd2luZG93LmtleUZvcndhcmQgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZihkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbU5hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyRnJvbVBvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyclRvTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhcnJUb1Bvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjc3NJZCA9PT0gXCIucm91dGUtZnJvbVwiKSB7XG4gICAgICAgICAgICAgICAgJChjc3NJZCkuYXV0b2NvbXBsZXRlKHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlOiBhcnJGcm9tTmFtZXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoY3NzSWQpLmF1dG9jb21wbGV0ZSh7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZTogYXJyVG9OYW1lc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KVxufVxuZnVuY3Rpb24gc3VibWl0U2VhcmNoKGlucHV0LCBjc3NJZCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyBcInNlYXJjaC5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgd2luZG93LmtleUZvcndhcmQgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZihkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS10b1wiKSB7XG4gICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4vLyAgICAgcm91dGVGcm9tSW5wdXQgPSBuZXcgQ2FjaGVkSW5wdXRmaWVsZChcIi5yb3V0ZS1mcm9tXCIsIGZhbHNlLCBcImM0Zy1yb3V0ZXItYWRkcmVzc1wiKTtcbi8vICAgICByb3V0ZVRvSW5wdXQgPSBuZXcgQ2FjaGVkSW5wdXRmaWVsZChcIi5yb3V0ZS10b1wiLCBmYWxzZSwgXCJjNGctcm91dGVyLWFkZHJlc3NcIik7XG4gICAgY29uc3QgZW50ZXJMaXN0ZW5lciA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHNjb3BlID0gdGhpcztcbiAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgICAgICBzdWJtaXRTZWFyY2goJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCBjdXJyVGltZSA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSk7XG4gICAgICAgICAgICBzY29wZS5jb3VudGVyID0gY3VyclRpbWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDEwMDAgPCBNYXRoLmZsb29yKERhdGUubm93KCkpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBzY29wZS5jb3VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoYW5kbGVBZHJlc3MoJChzY29wZSkudmFsKCksIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LDE1MDApXG4gICAgICAgIH1cblxuICAgIH07XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2tleWRvd24nLCBlbnRlckxpc3RlbmVyKTtcbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2F1dG9jb21wbGV0ZXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50LCB1aSl7XG4gICAgICAgIGxldCB2YWx1ZSA9IHVpLml0ZW0udmFsdWU7XG4gICAgICAgIGxldCBsb2MgPSBhcnJGcm9tUG9zaXRpb25zW2FyckZyb21OYW1lcy5maW5kSW5kZXgoZGFuZ2VyID0+IGRhbmdlciA9PT0gdmFsdWUpXTtcbiAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IGxvYztcbiAgICAgICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbiAgICB9KTtcbiAgICAkKFwiLnJvdXRlLXRvXCIpLm9uKCdrZXlkb3duJywgZW50ZXJMaXN0ZW5lcik7XG5cbiAgICAkKFwiLnJvdXRlLWZyb21cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlRnJvbShhZGRyZXNzKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtdG9cIikub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgICAgIHNldFJvdXRlVG8oYWRkcmVzcyk7XG4gICAgfSk7XG5cblxuICAgICQoXCIuc3RhcnQtc2VhcmNoXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBzdWJtaXRTZWFyY2goKTtcbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtZnJvbS1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS10by1nZW9sb2NhdGlvblwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZVRvUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=