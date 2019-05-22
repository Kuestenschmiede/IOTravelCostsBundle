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

/***/ "../CoreBundle/Resources/public/js/c4g-cached-inputfield.js":
/*!******************************************************************!*\
  !*** ../CoreBundle/Resources/public/js/c4g-cached-inputfield.js ***!
  \******************************************************************/
/*! exports provided: CachedInputfield */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CachedInputfield", function() { return CachedInputfield; });
/**
 * This class generates an input field, which caches inputs into the browser's storage and suggests them, when they
 * match future inputs. Requires jQueryUI.
 */
class CachedInputfield {

  /**
   * Constructor.
   * @param inputSelector   The input element that shall cache its inputs.
   * @param defaultSaving   If true, the storing of input values will be bound to the change event of the input field.
   *                        This value can be set to false if you wish to take care of the input storing yourself.
   *                        This is recommended, as you have more control over when things get stored. You can add a
   *                        value to the suggestions and store it into the browser by calling the "storeValue" method.
   * @param cacheKey        This will be used as cache key for the inputs of this field.
   */
  constructor(inputSelector, defaultSaving, cacheKey) {
    this.cacheKey = cacheKey;
    this.inputField = jQuery(inputSelector);
    // this.setHoverStyle(this.highlightColor);
    if (!this.inputField) {
      console.warn("The given CSS selector matches no DOM element...");
      return;
    }
    this.suggestions = this.loadValues();
    this.inputField.autocomplete({
      source: this.suggestions,
      delay: 0
    });
    const scope = this;
    if (defaultSaving) {
      jQuery(this.inputField).on('change', function () {
        scope.storeValue(jQuery(this).val());
      });
    }
    jQuery(this.inputField).on('input', function () {
      let options = scope.loadValues();
      jQuery(this).autocomplete("option", "source", options);
    });
  }

  /**
   * Returns the cache key for this input field.
   * @returns {*}
   */
  getCacheKey() {
    return this.cacheKey;
  }

  /**
   * Adds a value to this.suggestions and updates the value stored in the browser.
   */
  storeValue(value) {
    if (value && !this.suggestions.includes(value)) {
      this.suggestions.push(value);
      this.inputField.autocomplete("option", "source", this.suggestions);
      this.serializeValues();
    }
  }

  /**
   * Writes the current suggestions into the browser storage.
   */
  serializeValues() {
    window.localStorage.setItem(this.getCacheKey(), JSON.stringify(this.suggestions));
  }

  /**
   * Loads the values from the browser storage.
   */
  loadValues() {
    const localStorage = window.localStorage;
    let tmpResult = localStorage.getItem(this.getCacheKey());
    if (tmpResult) {
      // only assign when a defined value was loaded
      // the loaded value is encoded json
      this.suggestions = JSON.parse(tmpResult);
      if (!this.suggestions) {
        this.suggestions = [];
      }
    } else {
      this.suggestions = [];
    }
    return this.suggestions;
  }
}

/***/ }),

/***/ "./Resources/public/js/taxi-finder.js":
/*!********************************************!*\
  !*** ./Resources/public/js/taxi-finder.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _con4gis_bundles_CoreBundle_Resources_public_js_c4g_cached_inputfield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../../../../con4gis/bundles/CoreBundle/Resources/public/js/c4g-cached-inputfield */ "../CoreBundle/Resources/public/js/c4g-cached-inputfield.js");




const $ = jQuery;

const taxiData = {
    routeFrom: "",
    routeTo: ""
};

let routeFromInput = null;
let routeToInput = null;

function setAreaAddres(address) {
    taxiData.areaAddress = address;
}

function setRouteFrom(address) {
    taxiData.routeFrom = address;
}

function setRouteTo(address) {
    taxiData.routeTo = address;
}

function handleRouteFromPosition(coordinates) {
    handlePosition(coordinates, ".route-from", "routeFrom");
}

function handleRouteToPosition(coordinates) {
    handlePosition(coordinates, ".route-to", "routeTo");
}

function handlePosition(coordinates, cssId, propName) {
    let coords = coordinates.coords;
    // TODO aus modul hier rein geben
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
        taxiData[propName] = address;
    });
}
function handleAdress(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + input;
    $.ajax({ url: url }).done(function (data) {
        if (data[0] && data[0].display_name) {
            $(cssId).val(data[0].display_name);
        }
    });
}

$(document).ready(function () {
    routeFromInput = new _con4gis_bundles_CoreBundle_Resources_public_js_c4g_cached_inputfield__WEBPACK_IMPORTED_MODULE_0__["CachedInputfield"](".route-from", false, "c4g-router-address");
    routeToInput = new _con4gis_bundles_CoreBundle_Resources_public_js_c4g_cached_inputfield__WEBPACK_IMPORTED_MODULE_0__["CachedInputfield"](".route-to", false, "c4g-router-address");
    const enterListener = function (event) {
        let currTime = Math.floor(Date.now() / 1000);
        if (window.counter && window.counter + 2 < currTime) {
            delete window.counter;
            handleAdress($(this).val(), ".route-from");
        } else {
            window.counter = currTime;
        }
    };

    $(".route-from").on('keydown', enterListener);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0NvcmVCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9jNGctY2FjaGVkLWlucHV0ZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qcyJdLCJuYW1lcyI6WyJDYWNoZWRJbnB1dGZpZWxkIiwiY29uc3RydWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiZGVmYXVsdFNhdmluZyIsImNhY2hlS2V5IiwiaW5wdXRGaWVsZCIsImpRdWVyeSIsImNvbnNvbGUiLCJ3YXJuIiwic3VnZ2VzdGlvbnMiLCJsb2FkVmFsdWVzIiwiYXV0b2NvbXBsZXRlIiwic291cmNlIiwiZGVsYXkiLCJzY29wZSIsIm9uIiwic3RvcmVWYWx1ZSIsInZhbCIsIm9wdGlvbnMiLCJnZXRDYWNoZUtleSIsInZhbHVlIiwiaW5jbHVkZXMiLCJwdXNoIiwic2VyaWFsaXplVmFsdWVzIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0bXBSZXN1bHQiLCJnZXRJdGVtIiwicGFyc2UiLCIkIiwidGF4aURhdGEiLCJyb3V0ZUZyb20iLCJyb3V0ZVRvIiwicm91dGVGcm9tSW5wdXQiLCJyb3V0ZVRvSW5wdXQiLCJzZXRBcmVhQWRkcmVzIiwiYWRkcmVzcyIsImFyZWFBZGRyZXNzIiwic2V0Um91dGVGcm9tIiwic2V0Um91dGVUbyIsImhhbmRsZVJvdXRlRnJvbVBvc2l0aW9uIiwiY29vcmRpbmF0ZXMiLCJoYW5kbGVQb3NpdGlvbiIsImhhbmRsZVJvdXRlVG9Qb3NpdGlvbiIsImNzc0lkIiwicHJvcE5hbWUiLCJjb29yZHMiLCJ1cmwiLCJwcm94eVVybCIsImtleVJldmVyc2UiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBlZGVzdHJpYW4iLCJob3VzZV9udW1iZXIiLCJwYXRoIiwibGVuZ3RoIiwicG9zdGNvZGUiLCJ0b3duIiwiaGFuZGxlQWRyZXNzIiwiaW5wdXQiLCJrZXlGb3J3YXJkIiwiZGlzcGxheV9uYW1lIiwiZG9jdW1lbnQiLCJyZWFkeSIsImVudGVyTGlzdGVuZXIiLCJldmVudCIsImN1cnJUaW1lIiwiTWF0aCIsImZsb29yIiwiRGF0ZSIsIm5vdyIsImNvdW50ZXIiLCJzdWJtaXRTZWFyY2giLCJuYXZpZ2F0b3IiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7Ozs7QUFJTyxNQUFNQSxnQkFBTixDQUF1Qjs7QUFFNUI7Ozs7Ozs7OztBQVNBQyxjQUFZQyxhQUFaLEVBQTJCQyxhQUEzQixFQUEwQ0MsUUFBMUMsRUFBb0Q7QUFDbEQsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLQyxVQUFMLEdBQWtCQyxPQUFPSixh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QUFzQkMsa0JBQXRCLENBQXlDbkMscUJBQXpDO0FBQ0gsU0FGRCxNQUVPO0FBQ0h2QyxvQkFBUUMsSUFBUixDQUFhLDZHQUFiO0FBQ0g7QUFDSixLQU5EO0FBT0gsQ0EvQ0QsRSIsImZpbGUiOiJ0YXhpLWZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qc1wiKTtcbiIsIi8qKlxuICogVGhpcyBjbGFzcyBnZW5lcmF0ZXMgYW4gaW5wdXQgZmllbGQsIHdoaWNoIGNhY2hlcyBpbnB1dHMgaW50byB0aGUgYnJvd3NlcidzIHN0b3JhZ2UgYW5kIHN1Z2dlc3RzIHRoZW0sIHdoZW4gdGhleVxuICogbWF0Y2ggZnV0dXJlIGlucHV0cy4gUmVxdWlyZXMgalF1ZXJ5VUkuXG4gKi9cbmV4cG9ydCBjbGFzcyBDYWNoZWRJbnB1dGZpZWxkIHtcblxuICAvKipcbiAgICogQ29uc3RydWN0b3IuXG4gICAqIEBwYXJhbSBpbnB1dFNlbGVjdG9yICAgVGhlIGlucHV0IGVsZW1lbnQgdGhhdCBzaGFsbCBjYWNoZSBpdHMgaW5wdXRzLlxuICAgKiBAcGFyYW0gZGVmYXVsdFNhdmluZyAgIElmIHRydWUsIHRoZSBzdG9yaW5nIG9mIGlucHV0IHZhbHVlcyB3aWxsIGJlIGJvdW5kIHRvIHRoZSBjaGFuZ2UgZXZlbnQgb2YgdGhlIGlucHV0IGZpZWxkLlxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgdmFsdWUgY2FuIGJlIHNldCB0byBmYWxzZSBpZiB5b3Ugd2lzaCB0byB0YWtlIGNhcmUgb2YgdGhlIGlucHV0IHN0b3JpbmcgeW91cnNlbGYuXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgVGhpcyBpcyByZWNvbW1lbmRlZCwgYXMgeW91IGhhdmUgbW9yZSBjb250cm9sIG92ZXIgd2hlbiB0aGluZ3MgZ2V0IHN0b3JlZC4gWW91IGNhbiBhZGQgYVxuICAgKiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlIHRvIHRoZSBzdWdnZXN0aW9ucyBhbmQgc3RvcmUgaXQgaW50byB0aGUgYnJvd3NlciBieSBjYWxsaW5nIHRoZSBcInN0b3JlVmFsdWVcIiBtZXRob2QuXG4gICAqIEBwYXJhbSBjYWNoZUtleSAgICAgICAgVGhpcyB3aWxsIGJlIHVzZWQgYXMgY2FjaGUga2V5IGZvciB0aGUgaW5wdXRzIG9mIHRoaXMgZmllbGQuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihpbnB1dFNlbGVjdG9yLCBkZWZhdWx0U2F2aW5nLCBjYWNoZUtleSkge1xuICAgIHRoaXMuY2FjaGVLZXkgPSBjYWNoZUtleTtcbiAgICB0aGlzLmlucHV0RmllbGQgPSBqUXVlcnkoaW5wdXRTZWxlY3Rvcik7XG4gICAgLy8gdGhpcy5zZXRIb3ZlclN0eWxlKHRoaXMuaGlnaGxpZ2h0Q29sb3IpO1xuICAgIGlmICghdGhpcy5pbnB1dEZpZWxkKSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2l2ZW4gQ1NTIHNlbGVjdG9yIG1hdGNoZXMgbm8gRE9NIGVsZW1lbnQuLi5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSB0aGlzLmxvYWRWYWx1ZXMoKTtcbiAgICB0aGlzLmlucHV0RmllbGQuYXV0b2NvbXBsZXRlKHtcbiAgICAgIHNvdXJjZTogdGhpcy5zdWdnZXN0aW9ucyxcbiAgICAgIGRlbGF5OiAwXG4gICAgfSk7XG4gICAgY29uc3Qgc2NvcGUgPSB0aGlzO1xuICAgIGlmIChkZWZhdWx0U2F2aW5nKSB7XG4gICAgICBqUXVlcnkodGhpcy5pbnB1dEZpZWxkKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHNjb3BlLnN0b3JlVmFsdWUoalF1ZXJ5KHRoaXMpLnZhbCgpKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBqUXVlcnkodGhpcy5pbnB1dEZpZWxkKS5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGxldCBvcHRpb25zID0gc2NvcGUubG9hZFZhbHVlcygpO1xuICAgICAgalF1ZXJ5KHRoaXMpLmF1dG9jb21wbGV0ZShcIm9wdGlvblwiLCBcInNvdXJjZVwiLCBvcHRpb25zKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjYWNoZSBrZXkgZm9yIHRoaXMgaW5wdXQgZmllbGQuXG4gICAqIEByZXR1cm5zIHsqfVxuICAgKi9cbiAgZ2V0Q2FjaGVLZXkoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2FjaGVLZXk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZhbHVlIHRvIHRoaXMuc3VnZ2VzdGlvbnMgYW5kIHVwZGF0ZXMgdGhlIHZhbHVlIHN0b3JlZCBpbiB0aGUgYnJvd3Nlci5cbiAgICovXG4gIHN0b3JlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgIXRoaXMuc3VnZ2VzdGlvbnMuaW5jbHVkZXModmFsdWUpKSB7XG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zLnB1c2godmFsdWUpO1xuICAgICAgdGhpcy5pbnB1dEZpZWxkLmF1dG9jb21wbGV0ZShcIm9wdGlvblwiLCBcInNvdXJjZVwiLCB0aGlzLnN1Z2dlc3Rpb25zKTtcbiAgICAgIHRoaXMuc2VyaWFsaXplVmFsdWVzKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdyaXRlcyB0aGUgY3VycmVudCBzdWdnZXN0aW9ucyBpbnRvIHRoZSBicm93c2VyIHN0b3JhZ2UuXG4gICAqL1xuICBzZXJpYWxpemVWYWx1ZXMoKSB7XG4gICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuZ2V0Q2FjaGVLZXkoKSwgSlNPTi5zdHJpbmdpZnkodGhpcy5zdWdnZXN0aW9ucykpO1xuICB9XG5cbiAgLyoqXG4gICAqIExvYWRzIHRoZSB2YWx1ZXMgZnJvbSB0aGUgYnJvd3NlciBzdG9yYWdlLlxuICAgKi9cbiAgbG9hZFZhbHVlcygpIHtcbiAgICBjb25zdCBsb2NhbFN0b3JhZ2UgPSB3aW5kb3cubG9jYWxTdG9yYWdlO1xuICAgIGxldCB0bXBSZXN1bHQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmdldENhY2hlS2V5KCkpO1xuICAgIGlmICh0bXBSZXN1bHQpIHtcbiAgICAgIC8vIG9ubHkgYXNzaWduIHdoZW4gYSBkZWZpbmVkIHZhbHVlIHdhcyBsb2FkZWRcbiAgICAgIC8vIHRoZSBsb2FkZWQgdmFsdWUgaXMgZW5jb2RlZCBqc29uXG4gICAgICB0aGlzLnN1Z2dlc3Rpb25zID0gSlNPTi5wYXJzZSh0bXBSZXN1bHQpO1xuICAgICAgaWYgKCF0aGlzLnN1Z2dlc3Rpb25zKSB7XG4gICAgICAgIHRoaXMuc3VnZ2VzdGlvbnMgPSBbXTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWdnZXN0aW9ucyA9IFtdO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdWdnZXN0aW9ucztcbiAgfVxufSIsIlwidXNlIHN0cmljdFwiO1xuaW1wb3J0IHtDYWNoZWRJbnB1dGZpZWxkfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi8uLi8uLi9jb240Z2lzL2J1bmRsZXMvQ29yZUJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL2M0Zy1jYWNoZWQtaW5wdXRmaWVsZFwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuXG5jb25zdCB0YXhpRGF0YSA9IHtcbiAgICByb3V0ZUZyb206IFwiXCIsXG4gICAgcm91dGVUbzogXCJcIlxufTtcblxubGV0IHJvdXRlRnJvbUlucHV0ID0gbnVsbDtcbmxldCByb3V0ZVRvSW5wdXQgPSBudWxsO1xuXG5mdW5jdGlvbiBzZXRBcmVhQWRkcmVzKGFkZHJlc3MpIHtcbiAgICB0YXhpRGF0YS5hcmVhQWRkcmVzcyA9IGFkZHJlc3M7XG59XG5cbmZ1bmN0aW9uIHNldFJvdXRlRnJvbShhZGRyZXNzKSB7XG4gICAgdGF4aURhdGEucm91dGVGcm9tID0gYWRkcmVzcztcbn1cblxuZnVuY3Rpb24gc2V0Um91dGVUbyhhZGRyZXNzKSB7XG4gICAgdGF4aURhdGEucm91dGVUbyA9IGFkZHJlc3M7XG59XG5cblxuZnVuY3Rpb24gaGFuZGxlUm91dGVGcm9tUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcywgXCIucm91dGUtZnJvbVwiLCBcInJvdXRlRnJvbVwiKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUm91dGVUb1Bvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gICAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIFwiLnJvdXRlLXRvXCIsIFwicm91dGVUb1wiKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIGNzc0lkLCBwcm9wTmFtZSkge1xuICAgIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gICAgLy8gVE9ETyBhdXMgbW9kdWwgaGllciByZWluIGdlYmVuXG4gICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArICcvcmV2ZXJzZS5waHA/a2V5PScrIHdpbmRvdy5rZXlSZXZlcnNlKycmZm9ybWF0PWpzb24mbGF0PScgKyBjb29yZHMubGF0aXR1ZGUgKyAnJmxvbj0nICsgY29vcmRzLmxvbmdpdHVkZTtcbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gXCJcIjtcbiAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuKSB7XG4gICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuICsgXCIgXCI7XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLmFkZHJlc3MucGF0aCkge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGF0aCArIFwiIFwiO1xuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGFkZHJlc3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBcIiwgXCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnBvc3Rjb2RlKSB7XG4gICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wb3N0Y29kZSArIFwiIFwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmFkZHJlc3MudG93bikge1xuICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICAgICAgfVxuICAgICAgICAkKGNzc0lkKS52YWwoYWRkcmVzcyk7XG4gICAgICAgIHRheGlEYXRhW3Byb3BOYW1lXSA9IGFkZHJlc3M7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBoYW5kbGVBZHJlc3MoaW5wdXQsIGNzc0lkKSB7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArIFwic2VhcmNoLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyB3aW5kb3cua2V5Rm9yd2FyZCArIFwiJnE9XCIgKyBpbnB1dDtcbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmKGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUpIHtcbiAgICAgICAgICAgICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICByb3V0ZUZyb21JbnB1dCA9IG5ldyBDYWNoZWRJbnB1dGZpZWxkKFwiLnJvdXRlLWZyb21cIiwgZmFsc2UsIFwiYzRnLXJvdXRlci1hZGRyZXNzXCIpO1xuICAgIHJvdXRlVG9JbnB1dCA9IG5ldyBDYWNoZWRJbnB1dGZpZWxkKFwiLnJvdXRlLXRvXCIsIGZhbHNlLCBcImM0Zy1yb3V0ZXItYWRkcmVzc1wiKTtcbiAgICBjb25zdCBlbnRlckxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgbGV0IGN1cnJUaW1lID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG4gICAgICAgIGlmICh3aW5kb3cuY291bnRlciAmJiB3aW5kb3cuY291bnRlciArIDIgPCBjdXJyVGltZSkge1xuICAgICAgICAgICAgZGVsZXRlIHdpbmRvdy5jb3VudGVyO1xuICAgICAgICAgICAgaGFuZGxlQWRyZXNzKCQodGhpcykudmFsKCksIFwiLnJvdXRlLWZyb21cIik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB3aW5kb3cuY291bnRlciA9IGN1cnJUaW1lO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQoXCIucm91dGUtZnJvbVwiKS5vbigna2V5ZG93bicsIGVudGVyTGlzdGVuZXIpO1xuICAgICQoXCIucm91dGUtdG9cIikub24oJ2tleWRvd24nLCBlbnRlckxpc3RlbmVyKTtcblxuICAgICQoXCIucm91dGUtZnJvbVwiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgc2V0Um91dGVGcm9tKGFkZHJlc3MpO1xuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS10b1wiKS5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBhZGRyZXNzID0gJCh0aGlzKS52YWwoKTtcbiAgICAgICAgc2V0Um91dGVUbyhhZGRyZXNzKTtcbiAgICB9KTtcblxuXG4gICAgJChcIi5zdGFydC1zZWFyY2hcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHN1Ym1pdFNlYXJjaCgpO1xuICAgIH0pO1xuXG4gICAgJChcIi5yb3V0ZS1mcm9tLWdlb2xvY2F0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZVJvdXRlRnJvbVBvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBnZW9sb2NhdGlvbiBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuIENvbnNpZGVyIHVwZGF0aW5nIGl0IG9yIHN3aXRjaGluZyB0byBhIG5ld2VyIGJyb3dzZXIuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiLnJvdXRlLXRvLWdlb2xvY2F0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XG4gICAgICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGhhbmRsZVJvdXRlVG9Qb3NpdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==