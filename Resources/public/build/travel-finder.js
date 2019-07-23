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
/******/ 	return __webpack_require__(__webpack_require__.s = "./Resources/public/js/travel-finder.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../CoreBundle/Resources/public/js/AlertHandler.js":
/*!*********************************************************!*\
  !*** ../CoreBundle/Resources/public/js/AlertHandler.js ***!
  \*********************************************************/
/*! exports provided: AlertHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertHandler", function() { return AlertHandler; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
/**
 * con4gis - the gis-kit
 *
 * @package   con4gis
 * @author    con4gis contributors (see "authors.txt")
 * @license   GNU/LGPL http://opensource.org/licenses/lgpl-3.0.html
 * @copyright Küstenschmiede GmbH Software & Design 2011 - 2018
 * @link      https://www.kuestenschmiede.de
 */



class AlertHandler {

  showErrorDialog(title, content) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(title, content, "error");
  }

  showInfoDialog(title, content) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire(title, content, "info");
  }

  showConfirmDialog(title, text, confirmCallback, cancelCallback, confirmText, cancelText) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      text: text,
      type: "warning",
      showCancelButton: true,
      confirmButtonText: confirmText ? confirmText : "Confirm",
      cancelButtonText: cancelText ? cancelText : "Cancel",
      dangerMode: true
    }).then(willDelete => {
      if (willDelete.value) {
        confirmCallback();
      } else {
        cancelCallback();
      }
    });
  }

  async showSelectDialog(title, objOptions, confirmText, cancelText) {
    const { value: selectedValue } = await sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.fire({
      title: title,
      input: 'select',
      inputOptions: objOptions,
      inputPlaceholder: 'Select a fruit',
      showCancelButton: true,
      confirmButtonText: confirmText,
      cancelButtonText: cancelText
    });
    return selectedValue;
  }
}

/***/ }),

/***/ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js":
/*!**********************************************************************!*\
  !*** ../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
* sweetalert2 v8.12.1
* Released under the MIT License.
*/
(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);

      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

var consolePrefix = 'SweetAlert2:';
/**
 * Filter the unique values into a new array
 * @param arr
 */

var uniqueArray = function uniqueArray(arr) {
  var result = [];

  for (var i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};
/**
 * Returns the array ob object values (Object.values isn't supported in IE11)
 * @param obj
 */

var objectValues = function objectValues(obj) {
  return Object.keys(obj).map(function (key) {
    return obj[key];
  });
};
/**
 * Convert NodeList to Array
 * @param nodeList
 */

var toArray = function toArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
};
/**
 * Standardise console warnings
 * @param message
 */

var warn = function warn(message) {
  console.warn("".concat(consolePrefix, " ").concat(message));
};
/**
 * Standardise console errors
 * @param message
 */

var error = function error(message) {
  console.error("".concat(consolePrefix, " ").concat(message));
};
/**
 * Private global state for `warnOnce`
 * @type {Array}
 * @private
 */

var previousWarnOnceMessages = [];
/**
 * Show a console warning, but only if it hasn't already been shown
 * @param message
 */

var warnOnce = function warnOnce(message) {
  if (!(previousWarnOnceMessages.indexOf(message) !== -1)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};
/**
 * Show a one-time console warning about deprecated params/methods
 */

var warnAboutDepreation = function warnAboutDepreation(deprecatedParam, useInstead) {
  warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
};
/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 * @param arg
 */

var callIfFunction = function callIfFunction(arg) {
  return typeof arg === 'function' ? arg() : arg;
};
var isPromise = function isPromise(arg) {
  return arg && Promise.resolve(arg) === arg;
};

var DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

var argsToParams = function argsToParams(args) {
  var params = {};

  switch (_typeof(args[0])) {
    case 'object':
      _extends(params, args[0]);

      break;

    default:
      ['title', 'html', 'type'].forEach(function (name, index) {
        switch (_typeof(args[index])) {
          case 'string':
            params[name] = args[index];
            break;

          case 'undefined':
            break;

          default:
            error("Unexpected type of ".concat(name, "! Expected \"string\", got ").concat(_typeof(args[index])));
        }
      });
  }

  return params;
};

var swalPrefix = 'swal2-';
var prefix = function prefix(items) {
  var result = {};

  for (var i in items) {
    result[items[i]] = swalPrefix + items[i];
  }

  return result;
};
var swalClasses = prefix(['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'toast', 'toast-shown', 'toast-column', 'fade', 'show', 'hide', 'noanimation', 'close', 'title', 'header', 'content', 'actions', 'confirm', 'cancel', 'footer', 'icon', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl']);
var iconTypes = prefix(['success', 'warning', 'info', 'question', 'error']);

var states = {
  previousBodyPadding: null
};
var hasClass = function hasClass(elem, className) {
  return elem.classList.contains(className);
};
var applyCustomClass = function applyCustomClass(elem, customClass, className) {
  // Clean up previous custom classes
  toArray(elem.classList).forEach(function (className) {
    if (!(objectValues(swalClasses).indexOf(className) !== -1) && !(objectValues(iconTypes).indexOf(className) !== -1)) {
      elem.classList.remove(className);
    }
  });

  if (customClass && customClass[className]) {
    addClass(elem, customClass[className]);
  }
};
function getInput(content, inputType) {
  if (!inputType) {
    return null;
  }

  switch (inputType) {
    case 'select':
    case 'textarea':
    case 'file':
      return getChildByClass(content, swalClasses[inputType]);

    case 'checkbox':
      return content.querySelector(".".concat(swalClasses.checkbox, " input"));

    case 'radio':
      return content.querySelector(".".concat(swalClasses.radio, " input:checked")) || content.querySelector(".".concat(swalClasses.radio, " input:first-child"));

    case 'range':
      return content.querySelector(".".concat(swalClasses.range, " input"));

    default:
      return getChildByClass(content, swalClasses.input);
  }
}
var focusInput = function focusInput(input) {
  input.focus(); // place cursor at end of text in text input

  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    var val = input.value;
    input.value = '';
    input.value = val;
  }
};
var toggleClass = function toggleClass(target, classList, condition) {
  if (!target || !classList) {
    return;
  }

  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }

  classList.forEach(function (className) {
    if (target.forEach) {
      target.forEach(function (elem) {
        condition ? elem.classList.add(className) : elem.classList.remove(className);
      });
    } else {
      condition ? target.classList.add(className) : target.classList.remove(className);
    }
  });
};
var addClass = function addClass(target, classList) {
  toggleClass(target, classList, true);
};
var removeClass = function removeClass(target, classList) {
  toggleClass(target, classList, false);
};
var getChildByClass = function getChildByClass(elem, className) {
  for (var i = 0; i < elem.childNodes.length; i++) {
    if (hasClass(elem.childNodes[i], className)) {
      return elem.childNodes[i];
    }
  }
};
var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
  if (value || parseInt(value) === 0) {
    elem.style[property] = typeof value === 'number' ? value + 'px' : value;
  } else {
    elem.style.removeProperty(property);
  }
};
var show = function show(elem) {
  var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
  elem.style.opacity = '';
  elem.style.display = display;
};
var hide = function hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};
var toggle = function toggle(elem, condition, display) {
  condition ? show(elem, display) : hide(elem);
}; // borrowed from jquery $(elem).is(':visible') implementation

var isVisible = function isVisible(elem) {
  return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
};
var isScrollable = function isScrollable(elem) {
  return !!(elem.scrollHeight > elem.clientHeight);
}; // borrowed from https://stackoverflow.com/a/46352119

var hasCssAnimation = function hasCssAnimation(elem) {
  var style = window.getComputedStyle(elem);
  var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};
var contains = function contains(haystack, needle) {
  if (typeof haystack.contains === 'function') {
    return haystack.contains(needle);
  }
};

var getContainer = function getContainer() {
  return document.body.querySelector('.' + swalClasses.container);
};
var elementBySelector = function elementBySelector(selectorString) {
  var container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

var elementByClass = function elementByClass(className) {
  return elementBySelector('.' + className);
};

var getPopup = function getPopup() {
  return elementByClass(swalClasses.popup);
};
var getIcons = function getIcons() {
  var popup = getPopup();
  return toArray(popup.querySelectorAll('.' + swalClasses.icon));
};
var getIcon = function getIcon() {
  var visibleIcon = getIcons().filter(function (icon) {
    return isVisible(icon);
  });
  return visibleIcon.length ? visibleIcon[0] : null;
};
var getTitle = function getTitle() {
  return elementByClass(swalClasses.title);
};
var getContent = function getContent() {
  return elementByClass(swalClasses.content);
};
var getImage = function getImage() {
  return elementByClass(swalClasses.image);
};
var getProgressSteps = function getProgressSteps() {
  return elementByClass(swalClasses['progress-steps']);
};
var getValidationMessage = function getValidationMessage() {
  return elementByClass(swalClasses['validation-message']);
};
var getConfirmButton = function getConfirmButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.confirm);
};
var getCancelButton = function getCancelButton() {
  return elementBySelector('.' + swalClasses.actions + ' .' + swalClasses.cancel);
};
var getActions = function getActions() {
  return elementByClass(swalClasses.actions);
};
var getHeader = function getHeader() {
  return elementByClass(swalClasses.header);
};
var getFooter = function getFooter() {
  return elementByClass(swalClasses.footer);
};
var getCloseButton = function getCloseButton() {
  return elementByClass(swalClasses.close);
};
var getFocusableElements = function getFocusableElements() {
  var focusableElementsWithTabindex = toArray(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')) // sort according to tabindex
  .sort(function (a, b) {
    a = parseInt(a.getAttribute('tabindex'));
    b = parseInt(b.getAttribute('tabindex'));

    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    }

    return 0;
  }); // https://github.com/jkup/focusable/blob/master/index.js

  var otherFocusableElements = toArray(getPopup().querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable], audio[controls], video[controls]')).filter(function (el) {
    return el.getAttribute('tabindex') !== '-1';
  });
  return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter(function (el) {
    return isVisible(el);
  });
};
var isModal = function isModal() {
  return !isToast() && !document.body.classList.contains(swalClasses['no-backdrop']);
};
var isToast = function isToast() {
  return document.body.classList.contains(swalClasses['toast-shown']);
};
var isLoading = function isLoading() {
  return getPopup().hasAttribute('data-loading');
};

// Detect Node env
var isNodeEnv = function isNodeEnv() {
  return typeof window === 'undefined' || typeof document === 'undefined';
};

var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses.content, "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <div class=\"").concat(swalClasses.header, "\">\n     <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.error, "\">\n       <span class=\"swal2-x-mark\"><span class=\"swal2-x-mark-line-left\"></span><span class=\"swal2-x-mark-line-right\"></span></span>\n     </div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.question, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.warning, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.info, "\"></div>\n     <div class=\"").concat(swalClasses.icon, " ").concat(iconTypes.success, "\">\n       <div class=\"swal2-success-circular-line-left\"></div>\n       <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n       <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n       <div class=\"swal2-success-circular-line-right\"></div>\n     </div>\n     <img class=\"").concat(swalClasses.image, "\" />\n     <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n     <button type=\"button\" class=\"").concat(swalClasses.close, "\">&times;</button>\n   </div>\n   <div class=\"").concat(swalClasses.content, "\">\n     <div id=\"").concat(swalClasses.content, "\"></div>\n     <input class=\"").concat(swalClasses.input, "\" />\n     <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n     <div class=\"").concat(swalClasses.range, "\">\n       <input type=\"range\" />\n       <output></output>\n     </div>\n     <select class=\"").concat(swalClasses.select, "\"></select>\n     <div class=\"").concat(swalClasses.radio, "\"></div>\n     <label for=\"").concat(swalClasses.checkbox, "\" class=\"").concat(swalClasses.checkbox, "\">\n       <input type=\"checkbox\" />\n       <span class=\"").concat(swalClasses.label, "\"></span>\n     </label>\n     <textarea class=\"").concat(swalClasses.textarea, "\"></textarea>\n     <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   </div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\">OK</button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\">Cancel</button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\">\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

var resetOldContainer = function resetOldContainer() {
  var oldContainer = getContainer();

  if (!oldContainer) {
    return;
  }

  oldContainer.parentNode.removeChild(oldContainer);
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
};

var oldInputVal; // IE11 workaround, see #1109 for details

var resetValidationMessage = function resetValidationMessage(e) {
  if (Swal.isVisible() && oldInputVal !== e.target.value) {
    Swal.resetValidationMessage();
  }

  oldInputVal = e.target.value;
};

var addInputChangeListeners = function addInputChangeListeners() {
  var content = getContent();
  var input = getChildByClass(content, swalClasses.input);
  var file = getChildByClass(content, swalClasses.file);
  var range = content.querySelector(".".concat(swalClasses.range, " input"));
  var rangeOutput = content.querySelector(".".concat(swalClasses.range, " output"));
  var select = getChildByClass(content, swalClasses.select);
  var checkbox = content.querySelector(".".concat(swalClasses.checkbox, " input"));
  var textarea = getChildByClass(content, swalClasses.textarea);
  input.oninput = resetValidationMessage;
  file.onchange = resetValidationMessage;
  select.onchange = resetValidationMessage;
  checkbox.onchange = resetValidationMessage;
  textarea.oninput = resetValidationMessage;

  range.oninput = function (e) {
    resetValidationMessage(e);
    rangeOutput.value = range.value;
  };

  range.onchange = function (e) {
    resetValidationMessage(e);
    range.nextSibling.value = range.value;
  };
};

var getTarget = function getTarget(target) {
  return typeof target === 'string' ? document.querySelector(target) : target;
};

var setupAccessibility = function setupAccessibility(params) {
  var popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');

  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

var setupRTL = function setupRTL(targetElement) {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};
/*
 * Add modal + backdrop to DOM
 */


var init = function init(params) {
  // Clean up the old popup container if it exists
  resetOldContainer();
  /* istanbul ignore if */

  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }

  var container = document.createElement('div');
  container.className = swalClasses.container;
  container.innerHTML = sweetHTML;
  var targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param); // JQuery element(s)
  } else if (_typeof(param) === 'object') {
    handleJqueryElem(target, param); // Plain string
  } else if (param) {
    target.innerHTML = param;
  }
};

var handleJqueryElem = function handleJqueryElem(target, elem) {
  target.innerHTML = '';

  if (0 in elem) {
    for (var i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

var animationEndEvent = function () {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (isNodeEnv()) {
    return false;
  }

  var testEl = document.createElement('div');
  var transEndEventNames = {
    'WebkitAnimation': 'webkitAnimationEnd',
    'OAnimation': 'oAnimationEnd oanimationend',
    'animation': 'animationend'
  };

  for (var i in transEndEventNames) {
    if (transEndEventNames.hasOwnProperty(i) && typeof testEl.style[i] !== 'undefined') {
      return transEndEventNames[i];
    }
  }

  return false;
}();

// Measure width of scrollbar
// https://github.com/twbs/bootstrap/blob/master/js/modal.js#L279-L286
var measureScrollbar = function measureScrollbar() {
  var supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;

  if (supportsTouch) {
    return 0;
  }

  var scrollDiv = document.createElement('div');
  scrollDiv.style.width = '50px';
  scrollDiv.style.height = '50px';
  scrollDiv.style.overflow = 'scroll';
  document.body.appendChild(scrollDiv);
  var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

function handleButtonsStyling(confirmButton, cancelButton, params) {
  addClass([confirmButton, cancelButton], swalClasses.styled); // Buttons background colors

  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
  }

  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
  } // Loading state


  var confirmButtonBackgroundColor = window.getComputedStyle(confirmButton).getPropertyValue('background-color');
  confirmButton.style.borderLeftColor = confirmButtonBackgroundColor;
  confirmButton.style.borderRightColor = confirmButtonBackgroundColor;
}

function renderButton(button, buttonType, params) {
  toggle(button, params['showC' + buttonType.substring(1) + 'Button'], 'inline-block');
  button.innerHTML = params[buttonType + 'ButtonText']; // Set caption text

  button.setAttribute('aria-label', params[buttonType + 'ButtonAriaLabel']); // ARIA label
  // Add buttons custom classes

  button.className = swalClasses[buttonType];
  applyCustomClass(button, params.customClass, buttonType + 'Button');
  addClass(button, params[buttonType + 'ButtonClass']);
}

var renderActions = function renderActions(instance, params) {
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton(); // Actions (buttons) wrapper

  if (!params.showConfirmButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  } // Custom class


  applyCustomClass(actions, params.customClass, 'actions'); // Render confirm button

  renderButton(confirmButton, 'confirm', params); // render Cancel Button

  renderButton(cancelButton, 'cancel', params);

  if (params.buttonsStyling) {
    handleButtonsStyling(confirmButton, cancelButton, params);
  } else {
    removeClass([confirmButton, cancelButton], swalClasses.styled);
    confirmButton.style.backgroundColor = confirmButton.style.borderLeftColor = confirmButton.style.borderRightColor = '';
    cancelButton.style.backgroundColor = cancelButton.style.borderLeftColor = cancelButton.style.borderRightColor = '';
  }
};

function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

function handlePositionParam(container, position) {
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

function handleGrowParam(container, grow) {
  if (grow && typeof grow === 'string') {
    var growClass = 'grow-' + grow;

    if (growClass in swalClasses) {
      addClass(container, swalClasses[growClass]);
    }
  }
}

var renderContainer = function renderContainer(instance, params) {
  var container = getContainer();

  if (!container) {
    return;
  }

  handleBackdropParam(container, params.backdrop);

  if (!params.backdrop && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }

  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow); // Custom class

  applyCustomClass(container, params.customClass, 'container');

  if (params.customContainerClass) {
    // @deprecated
    addClass(container, params.customContainerClass);
  }
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateProps = {
  promise: new WeakMap(),
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

var renderInput = function renderInput(instance, params) {
  var innerParams = privateProps.innerParams.get(instance);
  var rerender = !innerParams || params.input !== innerParams.input;
  var content = getContent();
  var inputTypes = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

  for (var i = 0; i < inputTypes.length; i++) {
    var inputClass = swalClasses[inputTypes[i]];
    var inputContainer = getChildByClass(content, inputClass); // set attributes

    setAttributes(inputTypes[i], params.inputAttributes); // set class

    setClass(inputContainer, inputClass, params);
    rerender && hide(inputContainer);
  }

  if (!params.input) {
    return;
  }

  if (!renderInputType[params.input]) {
    return error("Unexpected type of input! Expected \"text\", \"email\", \"password\", \"number\", \"tel\", \"select\", \"radio\", \"checkbox\", \"textarea\", \"file\" or \"url\", got \"".concat(params.input, "\""));
  }

  if (rerender) {
    var input = renderInputType[params.input](params);
    show(input);
  }
};

var removeAttributes = function removeAttributes(input) {
  for (var i = 0; i < input.attributes.length; i++) {
    var attrName = input.attributes[i].name;

    if (!(['type', 'value', 'style'].indexOf(attrName) !== -1)) {
      input.removeAttribute(attrName);
    }
  }
};

var setAttributes = function setAttributes(inputType, inputAttributes) {
  var input = getInput(getContent(), inputType);

  if (!input) {
    return;
  }

  removeAttributes(input);

  for (var attr in inputAttributes) {
    // Do not set a placeholder for <input type="range">
    // it'll crash Edge, #1298
    if (inputType === 'range' && attr === 'placeholder') {
      continue;
    }

    input.setAttribute(attr, inputAttributes[attr]);
  }
};

var setClass = function setClass(inputContainer, inputClass, params) {
  inputContainer.className = inputClass;

  if (params.inputClass) {
    addClass(inputContainer, params.inputClass);
  }

  if (params.customClass) {
    addClass(inputContainer, params.customClass.input);
  }
};

var setInputPlaceholder = function setInputPlaceholder(input, params) {
  if (!input.placeholder || params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

var renderInputType = {};

renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = function (params) {
  var input = getChildByClass(getContent(), swalClasses.input);

  if (typeof params.inputValue === 'string' || typeof params.inputValue === 'number') {
    input.value = params.inputValue;
  } else if (!isPromise(params.inputValue)) {
    warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(params.inputValue), "\""));
  }

  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.file = function (params) {
  var input = getChildByClass(getContent(), swalClasses.file);
  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

renderInputType.range = function (params) {
  var range = getChildByClass(getContent(), swalClasses.range);
  var rangeInput = range.querySelector('input');
  var rangeOutput = range.querySelector('output');
  rangeInput.value = params.inputValue;
  rangeInput.type = params.input;
  rangeOutput.value = params.inputValue;
  return range;
};

renderInputType.select = function (params) {
  var select = getChildByClass(getContent(), swalClasses.select);
  select.innerHTML = '';

  if (params.inputPlaceholder) {
    var placeholder = document.createElement('option');
    placeholder.innerHTML = params.inputPlaceholder;
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }

  return select;
};

renderInputType.radio = function () {
  var radio = getChildByClass(getContent(), swalClasses.radio);
  radio.innerHTML = '';
  return radio;
};

renderInputType.checkbox = function (params) {
  var checkbox = getChildByClass(getContent(), swalClasses.checkbox);
  var checkboxInput = getInput(getContent(), 'checkbox');
  checkboxInput.type = 'checkbox';
  checkboxInput.value = 1;
  checkboxInput.id = swalClasses.checkbox;
  checkboxInput.checked = Boolean(params.inputValue);
  var label = checkbox.querySelector('span');
  label.innerHTML = params.inputPlaceholder;
  return checkbox;
};

renderInputType.textarea = function (params) {
  var textarea = getChildByClass(getContent(), swalClasses.textarea);
  textarea.value = params.inputValue;
  setInputPlaceholder(textarea, params);
  return textarea;
};

var renderContent = function renderContent(instance, params) {
  var content = getContent().querySelector('#' + swalClasses.content); // Content as HTML

  if (params.html) {
    parseHtmlToContainer(params.html, content);
    show(content, 'block'); // Content as plain text
  } else if (params.text) {
    content.textContent = params.text;
    show(content, 'block'); // No content
  } else {
    hide(content);
  }

  renderInput(instance, params); // Custom class

  applyCustomClass(getContent(), params.customClass, 'content');
};

var renderFooter = function renderFooter(instance, params) {
  var footer = getFooter();
  toggle(footer, params.footer);

  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  } // Custom class


  applyCustomClass(footer, params.customClass, 'footer');
};

var renderCloseButton = function renderCloseButton(instance, params) {
  var closeButton = getCloseButton(); // Custom class

  applyCustomClass(closeButton, params.customClass, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel);
};

var renderIcon = function renderIcon(instance, params) {
  var innerParams = privateProps.innerParams.get(instance); // if the icon with the given type already rendered,
  // apply the custom class without re-rendering the icon

  if (innerParams && params.type === innerParams.type && getIcon()) {
    applyCustomClass(getIcon(), params.customClass, 'icon');
    return;
  }

  hideAllIcons();

  if (!params.type) {
    return;
  }

  adjustSuccessIconBackgoundColor();

  if (Object.keys(iconTypes).indexOf(params.type) !== -1) {
    var icon = elementBySelector(".".concat(swalClasses.icon, ".").concat(iconTypes[params.type]));
    show(icon); // Custom class

    applyCustomClass(icon, params.customClass, 'icon'); // Animate icon

    toggleClass(icon, "swal2-animate-".concat(params.type, "-icon"), params.animation);
  } else {
    error("Unknown type! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.type, "\""));
  }
};

var hideAllIcons = function hideAllIcons() {
  var icons = getIcons();

  for (var i = 0; i < icons.length; i++) {
    hide(icons[i]);
  }
}; // Adjust success icon background color to match the popup background color


var adjustSuccessIconBackgoundColor = function adjustSuccessIconBackgoundColor() {
  var popup = getPopup();
  var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');

  for (var i = 0; i < successIconParts.length; i++) {
    successIconParts[i].style.backgroundColor = popupBackgroundColor;
  }
};

var renderImage = function renderImage(instance, params) {
  var image = getImage();

  if (!params.imageUrl) {
    return hide(image);
  }

  show(image); // Src, alt

  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt); // Width, height

  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight); // Class

  image.className = swalClasses.image;
  applyCustomClass(image, params.customClass, 'image');

  if (params.imageClass) {
    addClass(image, params.imageClass);
  }
};

var createStepElement = function createStepElement(step) {
  var stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  stepEl.innerHTML = step;
  return stepEl;
};

var createLineElement = function createLineElement(params) {
  var lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);

  if (params.progressStepsDistance) {
    lineEl.style.width = params.progressStepsDistance;
  }

  return lineEl;
};

var renderProgressSteps = function renderProgressSteps(instance, params) {
  var progressStepsContainer = getProgressSteps();

  if (!params.progressSteps || params.progressSteps.length === 0) {
    return hide(progressStepsContainer);
  }

  show(progressStepsContainer);
  progressStepsContainer.innerHTML = '';
  var currentProgressStep = parseInt(params.currentProgressStep === null ? Swal.getQueueStep() : params.currentProgressStep);

  if (currentProgressStep >= params.progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }

  params.progressSteps.forEach(function (step, index) {
    var stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);

    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }

    if (index !== params.progressSteps.length - 1) {
      var lineEl = createLineElement(step);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

var renderTitle = function renderTitle(instance, params) {
  var title = getTitle();
  toggle(title, params.title || params.titleText);

  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }

  if (params.titleText) {
    title.innerText = params.titleText;
  } // Custom class


  applyCustomClass(title, params.customClass, 'title');
};

var renderHeader = function renderHeader(instance, params) {
  var header = getHeader(); // Custom class

  applyCustomClass(header, params.customClass, 'header'); // Progress steps

  renderProgressSteps(instance, params); // Icon

  renderIcon(instance, params); // Image

  renderImage(instance, params); // Title

  renderTitle(instance, params); // Close button

  renderCloseButton(instance, params);
};

var renderPopup = function renderPopup(instance, params) {
  var popup = getPopup(); // Width

  applyNumericalStyle(popup, 'width', params.width); // Padding

  applyNumericalStyle(popup, 'padding', params.padding); // Background

  if (params.background) {
    popup.style.background = params.background;
  } // Default Class


  popup.className = swalClasses.popup;

  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  } // Custom class


  applyCustomClass(popup, params.customClass, 'popup');

  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  } // CSS animation


  toggleClass(popup, swalClasses.noanimation, !params.animation);
};

var render = function render(instance, params) {
  renderPopup(instance, params);
  renderContainer(instance, params);
  renderHeader(instance, params);
  renderContent(instance, params);
  renderActions(instance, params);
  renderFooter(instance, params);
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */

var isVisible$1 = function isVisible$$1() {
  return isVisible(getPopup());
};
/*
 * Global function to click 'Confirm' button
 */

var clickConfirm = function clickConfirm() {
  return getConfirmButton() && getConfirmButton().click();
};
/*
 * Global function to click 'Cancel' button
 */

var clickCancel = function clickCancel() {
  return getCancelButton() && getCancelButton().click();
};

function fire() {
  var Swal = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _construct(Swal, args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param mixinParams
 */
function mixin(mixinParams) {
  var MixinSwal =
  /*#__PURE__*/
  function (_this) {
    _inherits(MixinSwal, _this);

    function MixinSwal() {
      _classCallCheck(this, MixinSwal);

      return _possibleConstructorReturn(this, _getPrototypeOf(MixinSwal).apply(this, arguments));
    }

    _createClass(MixinSwal, [{
      key: "_main",
      value: function _main(params) {
        return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, _extends({}, mixinParams, params));
      }
    }]);

    return MixinSwal;
  }(this);

  return MixinSwal;
}

// private global state for the queue feature
var currentSteps = [];
/*
 * Global function for chaining sweetAlert popups
 */

var queue = function queue(steps) {
  var Swal = this;
  currentSteps = steps;

  var resetAndResolve = function resetAndResolve(resolve, value) {
    currentSteps = [];
    document.body.removeAttribute('data-swal2-queue-step');
    resolve(value);
  };

  var queueResult = [];
  return new Promise(function (resolve) {
    (function step(i, callback) {
      if (i < currentSteps.length) {
        document.body.setAttribute('data-swal2-queue-step', i);
        Swal.fire(currentSteps[i]).then(function (result) {
          if (typeof result.value !== 'undefined') {
            queueResult.push(result.value);
            step(i + 1, callback);
          } else {
            resetAndResolve(resolve, {
              dismiss: result.dismiss
            });
          }
        });
      } else {
        resetAndResolve(resolve, {
          value: queueResult
        });
      }
    })(0);
  });
};
/*
 * Global function for getting the index of current popup in queue
 */

var getQueueStep = function getQueueStep() {
  return document.body.getAttribute('data-swal2-queue-step');
};
/*
 * Global function for inserting a popup to the queue
 */

var insertQueueStep = function insertQueueStep(step, index) {
  if (index && index < currentSteps.length) {
    return currentSteps.splice(index, 0, step);
  }

  return currentSteps.push(step);
};
/*
 * Global function for deleting a popup from the queue
 */

var deleteQueueStep = function deleteQueueStep(index) {
  if (typeof currentSteps[index] !== 'undefined') {
    currentSteps.splice(index, 1);
  }
};

/**
 * Show spinner instead of Confirm button and disable Cancel button
 */

var showLoading = function showLoading() {
  var popup = getPopup();

  if (!popup) {
    Swal.fire('');
  }

  popup = getPopup();
  var actions = getActions();
  var confirmButton = getConfirmButton();
  var cancelButton = getCancelButton();
  show(actions);
  show(confirmButton);
  addClass([popup, actions], swalClasses.loading);
  confirmButton.disabled = true;
  cancelButton.disabled = true;
  popup.setAttribute('data-loading', true);
  popup.setAttribute('aria-busy', true);
  popup.focus();
};

var RESTORE_FOCUS_TIMEOUT = 100;

var globalState = {};
var focusPreviousActiveElement = function focusPreviousActiveElement() {
  if (globalState.previousActiveElement && globalState.previousActiveElement.focus) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
}; // Restore previous active (focused) element


var restoreActiveElement = function restoreActiveElement() {
  return new Promise(function (resolve) {
    var x = window.scrollX;
    var y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(function () {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    if (typeof x !== 'undefined' && typeof y !== 'undefined') {
      // IE doesn't have scrollX/scrollY support
      window.scrollTo(x, y);
    }
  });
};

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 */

var getTimerLeft = function getTimerLeft() {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};
/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var stopTimer = function stopTimer() {
  return globalState.timeout && globalState.timeout.stop();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var resumeTimer = function resumeTimer() {
  return globalState.timeout && globalState.timeout.start();
};
/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 */

var toggleTimer = function toggleTimer() {
  var timer = globalState.timeout;
  return timer && (timer.running ? timer.stop() : timer.start());
};
/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 */

var increaseTimer = function increaseTimer(n) {
  return globalState.timeout && globalState.timeout.increase(n);
};
/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 */

var isTimerRunning = function isTimerRunning() {
  return globalState.timeout && globalState.timeout.isRunning();
};

var defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  type: null,
  toast: false,
  customClass: '',
  customContainerClass: '',
  target: 'body',
  backdrop: true,
  animation: true,
  heightAuto: true,
  allowOutsideClick: true,
  allowEscapeKey: true,
  allowEnterKey: true,
  stopKeydownPropagation: true,
  keydownListenerCapture: false,
  showConfirmButton: true,
  showCancelButton: false,
  preConfirm: null,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: null,
  confirmButtonClass: '',
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: null,
  cancelButtonClass: '',
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusCancel: false,
  showCloseButton: false,
  closeButtonAriaLabel: 'Close this dialog',
  showLoaderOnConfirm: false,
  imageUrl: null,
  imageWidth: null,
  imageHeight: null,
  imageAlt: '',
  imageClass: '',
  timer: null,
  width: null,
  padding: null,
  background: null,
  input: null,
  inputPlaceholder: '',
  inputValue: '',
  inputOptions: {},
  inputAutoTrim: true,
  inputClass: '',
  inputAttributes: {},
  inputValidator: null,
  validationMessage: null,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: null,
  progressStepsDistance: null,
  onBeforeOpen: null,
  onAfterClose: null,
  onOpen: null,
  onClose: null,
  scrollbarPadding: true
};
var updatableParams = ['title', 'titleText', 'text', 'html', 'type', 'customClass', 'showConfirmButton', 'showCancelButton', 'confirmButtonText', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonClass', 'cancelButtonText', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonClass', 'buttonsStyling', 'reverseButtons', 'imageUrl', 'imageWidth', 'imageHeigth', 'imageAlt', 'imageClass', 'progressSteps', 'currentProgressStep'];
var deprecatedParams = {
  customContainerClass: 'customClass',
  confirmButtonClass: 'customClass',
  cancelButtonClass: 'customClass',
  imageClass: 'customClass',
  inputClass: 'customClass'
};
var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusCancel', 'heightAuto', 'keydownListenerCapture'];
/**
 * Is valid parameter
 * @param {String} paramName
 */

var isValidParameter = function isValidParameter(paramName) {
  return defaultParams.hasOwnProperty(paramName);
};
/**
 * Is valid parameter for Swal.update() method
 * @param {String} paramName
 */

var isUpdatableParameter = function isUpdatableParameter(paramName) {
  return updatableParams.indexOf(paramName) !== -1;
};
/**
 * Is deprecated parameter
 * @param {String} paramName
 */

var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
  return deprecatedParams[paramName];
};

var checkIfParamIsValid = function checkIfParamIsValid(param) {
  if (!isValidParameter(param)) {
    warn("Unknown parameter \"".concat(param, "\""));
  }
};

var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
  if (toastIncompatibleParams.indexOf(param) !== -1) {
    warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
  }
};

var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
  if (isDeprecatedParameter(param)) {
    warnAboutDepreation(param, isDeprecatedParameter(param));
  }
};
/**
 * Show relevant warnings for given params
 *
 * @param params
 */


var showWarningsForParams = function showWarningsForParams(params) {
  for (var param in params) {
    checkIfParamIsValid(param);

    if (params.toast) {
      checkIfToastParamIsValid(param);
    }

    checkIfParamIsDeprecated();
  }
};



var staticMethods = Object.freeze({
	isValidParameter: isValidParameter,
	isUpdatableParameter: isUpdatableParameter,
	isDeprecatedParameter: isDeprecatedParameter,
	argsToParams: argsToParams,
	isVisible: isVisible$1,
	clickConfirm: clickConfirm,
	clickCancel: clickCancel,
	getContainer: getContainer,
	getPopup: getPopup,
	getTitle: getTitle,
	getContent: getContent,
	getImage: getImage,
	getIcon: getIcon,
	getIcons: getIcons,
	getCloseButton: getCloseButton,
	getActions: getActions,
	getConfirmButton: getConfirmButton,
	getCancelButton: getCancelButton,
	getHeader: getHeader,
	getFooter: getFooter,
	getFocusableElements: getFocusableElements,
	getValidationMessage: getValidationMessage,
	isLoading: isLoading,
	fire: fire,
	mixin: mixin,
	queue: queue,
	getQueueStep: getQueueStep,
	insertQueueStep: insertQueueStep,
	deleteQueueStep: deleteQueueStep,
	showLoading: showLoading,
	enableLoading: showLoading,
	getTimerLeft: getTimerLeft,
	stopTimer: stopTimer,
	resumeTimer: resumeTimer,
	toggleTimer: toggleTimer,
	increaseTimer: increaseTimer,
	isTimerRunning: isTimerRunning
});

/**
 * Enables buttons and hide loader.
 */

function hideLoading() {
  var innerParams = privateProps.innerParams.get(this);
  var domCache = privateProps.domCache.get(this);

  if (!innerParams.showConfirmButton) {
    hide(domCache.confirmButton);

    if (!innerParams.showCancelButton) {
      hide(domCache.actions);
    }
  }

  removeClass([domCache.popup, domCache.actions], swalClasses.loading);
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.cancelButton.disabled = false;
}

function getInput$1(instance) {
  var innerParams = privateProps.innerParams.get(instance || this);
  var domCache = privateProps.domCache.get(instance || this);
  return getInput(domCache.content, innerParams.input);
}

var fixScrollbar = function fixScrollbar() {
  // for queues, do not do this more than once
  if (states.previousBodyPadding !== null) {
    return;
  } // if the body has overflow


  if (document.body.scrollHeight > window.innerHeight) {
    // add padding so the content doesn't shift after removal of scrollbar
    states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = states.previousBodyPadding + measureScrollbar() + 'px';
  }
};
var undoScrollbar = function undoScrollbar() {
  if (states.previousBodyPadding !== null) {
    document.body.style.paddingRight = states.previousBodyPadding + 'px';
    states.previousBodyPadding = null;
  }
};

/* istanbul ignore next */

var iOSfix = function iOSfix() {
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

  if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
    var offset = document.body.scrollTop;
    document.body.style.top = offset * -1 + 'px';
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

var lockBodyScroll = function lockBodyScroll() {
  // #1246
  var container = getContainer();
  var preventTouchMove;

  container.ontouchstart = function (e) {
    preventTouchMove = e.target === container || !isScrollable(container) && e.target.tagName !== 'INPUT' // #1603
    ;
  };

  container.ontouchmove = function (e) {
    if (preventTouchMove) {
      e.preventDefault();
      e.stopPropagation();
    }
  };
};
/* istanbul ignore next */


var undoIOSfix = function undoIOSfix() {
  if (hasClass(document.body, swalClasses.iosfix)) {
    var offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

var isIE11 = function isIE11() {
  return !!window.MSInputMethodContext && !!document.documentMode;
}; // Fix IE11 centering sweetalert2/issues/933

/* istanbul ignore next */


var fixVerticalPositionIE = function fixVerticalPositionIE() {
  var container = getContainer();
  var popup = getPopup();
  container.style.removeProperty('align-items');

  if (popup.offsetTop < 0) {
    container.style.alignItems = 'flex-start';
  }
};
/* istanbul ignore next */


var IEfix = function IEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    fixVerticalPositionIE();
    window.addEventListener('resize', fixVerticalPositionIE);
  }
};
/* istanbul ignore next */

var undoIEfix = function undoIEfix() {
  if (typeof window !== 'undefined' && isIE11()) {
    window.removeEventListener('resize', fixVerticalPositionIE);
  }
};

// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

var setAriaHidden = function setAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el === getContainer() || contains(el, getContainer())) {
      return;
    }

    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden'));
    }

    el.setAttribute('aria-hidden', 'true');
  });
};
var unsetAriaHidden = function unsetAriaHidden() {
  var bodyChildren = toArray(document.body.children);
  bodyChildren.forEach(function (el) {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden'));
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

/**
 * This module containts `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */
var privateMethods = {
  swalPromiseResolve: new WeakMap()
};

/*
 * Instance method to close sweetAlert
 */

function removePopupAndResetState(container, isToast, onAfterClose) {
  if (isToast) {
    triggerOnAfterClose(onAfterClose);
  } else {
    restoreActiveElement().then(function () {
      return triggerOnAfterClose(onAfterClose);
    });
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  } // Unset globalState props so GC will dispose globalState (#1569)


  delete globalState.keydownHandler;
  delete globalState.keydownTarget;

  if (container.parentNode) {
    container.parentNode.removeChild(container);
  }

  removeBodyClasses();

  if (isModal()) {
    undoScrollbar();
    undoIOSfix();
    undoIEfix();
    unsetAriaHidden();
  }
}

function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['toast-column']]);
}

function swalCloseEventFinished(popup, container, isToast, onAfterClose) {
  if (hasClass(popup, swalClasses.hide)) {
    removePopupAndResetState(container, isToast, onAfterClose);
  } // Unset WeakMaps so GC will be able to dispose them (#1569)


  unsetWeakMaps(privateProps);
  unsetWeakMaps(privateMethods);
}

function close(resolveValue) {
  var container = getContainer();
  var popup = getPopup();

  if (!popup || hasClass(popup, swalClasses.hide)) {
    return;
  }

  var innerParams = privateProps.innerParams.get(this);
  var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  var onClose = innerParams.onClose;
  var onAfterClose = innerParams.onAfterClose;
  removeClass(popup, swalClasses.show);
  addClass(popup, swalClasses.hide); // If animation is supported, animate

  if (animationEndEvent && hasCssAnimation(popup)) {
    popup.addEventListener(animationEndEvent, function (e) {
      if (e.target === popup) {
        swalCloseEventFinished(popup, container, isToast(), onAfterClose);
      }
    });
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(container, isToast(), onAfterClose);
  }

  if (onClose !== null && typeof onClose === 'function') {
    onClose(popup);
  } // Resolve Swal promise


  swalPromiseResolve(resolveValue || {}); // Unset this.params so GC will dispose it (#1569)

  delete this.params;
}

var unsetWeakMaps = function unsetWeakMaps(obj) {
  for (var i in obj) {
    obj[i] = new WeakMap();
  }
};

var triggerOnAfterClose = function triggerOnAfterClose(onAfterClose) {
  if (onAfterClose !== null && typeof onAfterClose === 'function') {
    setTimeout(function () {
      onAfterClose();
    });
  }
};

function setButtonsDisabled(instance, buttons, disabled) {
  var domCache = privateProps.domCache.get(instance);
  buttons.forEach(function (button) {
    domCache[button].disabled = disabled;
  });
}

function setInputDisabled(input, disabled) {
  if (!input) {
    return false;
  }

  if (input.type === 'radio') {
    var radiosContainer = input.parentNode.parentNode;
    var radios = radiosContainer.querySelectorAll('input');

    for (var i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], false);
}
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'cancelButton'], true);
} // @deprecated

function enableConfirmButton() {
  warnAboutDepreation('Swal.disableConfirmButton()', "Swal.getConfirmButton().removeAttribute('disabled')");
  setButtonsDisabled(this, ['confirmButton'], false);
} // @deprecated

function disableConfirmButton() {
  warnAboutDepreation('Swal.enableConfirmButton()', "Swal.getConfirmButton().setAttribute('disabled', '')");
  setButtonsDisabled(this, ['confirmButton'], true);
}
function enableInput() {
  return setInputDisabled(this.getInput(), false);
}
function disableInput() {
  return setInputDisabled(this.getInput(), true);
}

function showValidationMessage(error) {
  var domCache = privateProps.domCache.get(this);
  domCache.validationMessage.innerHTML = error;
  var popupComputedStyle = window.getComputedStyle(domCache.popup);
  domCache.validationMessage.style.marginLeft = "-".concat(popupComputedStyle.getPropertyValue('padding-left'));
  domCache.validationMessage.style.marginRight = "-".concat(popupComputedStyle.getPropertyValue('padding-right'));
  show(domCache.validationMessage);
  var input = this.getInput();

  if (input) {
    input.setAttribute('aria-invalid', true);
    input.setAttribute('aria-describedBy', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
} // Hide block with validation message

function resetValidationMessage$1() {
  var domCache = privateProps.domCache.get(this);

  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }

  var input = this.getInput();

  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedBy');
    removeClass(input, swalClasses.inputerror);
  }
}

function getProgressSteps$1() {
  warnAboutDepreation('Swal.getProgressSteps()', "const swalInstance = Swal.fire({progressSteps: ['1', '2', '3']}); const progressSteps = swalInstance.params.progressSteps");
  var innerParams = privateProps.innerParams.get(this);
  return innerParams.progressSteps;
}
function setProgressSteps(progressSteps) {
  warnAboutDepreation('Swal.setProgressSteps()', 'Swal.update()');
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, {
    progressSteps: progressSteps
  });

  renderProgressSteps(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
}
function showProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  show(domCache.progressSteps);
}
function hideProgressSteps() {
  var domCache = privateProps.domCache.get(this);
  hide(domCache.progressSteps);
}

var Timer =
/*#__PURE__*/
function () {
  function Timer(callback, delay) {
    _classCallCheck(this, Timer);

    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  _createClass(Timer, [{
    key: "start",
    value: function start() {
      if (!this.running) {
        this.running = true;
        this.started = new Date();
        this.id = setTimeout(this.callback, this.remaining);
      }

      return this.remaining;
    }
  }, {
    key: "stop",
    value: function stop() {
      if (this.running) {
        this.running = false;
        clearTimeout(this.id);
        this.remaining -= new Date() - this.started;
      }

      return this.remaining;
    }
  }, {
    key: "increase",
    value: function increase(n) {
      var running = this.running;

      if (running) {
        this.stop();
      }

      this.remaining += n;

      if (running) {
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "getTimerLeft",
    value: function getTimerLeft() {
      if (this.running) {
        this.stop();
        this.start();
      }

      return this.remaining;
    }
  }, {
    key: "isRunning",
    value: function isRunning() {
      return this.running;
    }
  }]);

  return Timer;
}();

var defaultInputValidators = {
  email: function email(string, validationMessage) {
    return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage ? validationMessage : 'Invalid email address');
  },
  url: function url(string, validationMessage) {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage ? validationMessage : 'Invalid URL');
  }
};

/**
 * Set type, text and actions on popup
 *
 * @param params
 * @returns {boolean}
 */

function setParameters(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (!params.inputValidator) {
    Object.keys(defaultInputValidators).forEach(function (key) {
      if (params.input === key) {
        params.inputValidator = defaultInputValidators[key];
      }
    });
  } // showLoaderOnConfirm && preConfirm


  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  } // params.animation will be actually used in renderPopup.js
  // but in case when params.animation is a function, we need to call that function
  // before popup (re)initialization, so it'll be possible to check Swal.isVisible()
  // inside the params.animation function


  params.animation = callIfFunction(params.animation); // Determine if the custom target element is valid

  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  } // Replace newlines with <br> in title


  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }

  var oldPopup = getPopup();
  var targetElement = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;

  if (!oldPopup || // If the model target has changed, refresh the popup
  oldPopup && targetElement && oldPopup.parentNode !== targetElement.parentNode) {
    init(params);
  }
}

function swalOpenAnimationFinished(popup, container) {
  popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
}
/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {Array} params
 */


var openPopup = function openPopup(params) {
  var container = getContainer();
  var popup = getPopup();

  if (params.onBeforeOpen !== null && typeof params.onBeforeOpen === 'function') {
    params.onBeforeOpen(popup);
  }

  if (params.animation) {
    addClass(popup, swalClasses.show);
    addClass(container, swalClasses.fade);
  }

  show(popup); // scrolling is 'hidden' until animation is done, after that 'auto'

  if (animationEndEvent && hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener(animationEndEvent, swalOpenAnimationFinished.bind(null, popup, container));
  } else {
    container.style.overflowY = 'auto';
  }

  addClass([document.documentElement, document.body, container], swalClasses.shown);

  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }

  if (isModal()) {
    if (params.scrollbarPadding) {
      fixScrollbar();
    }

    iOSfix();
    IEfix();
    setAriaHidden(); // sweetalert2/issues/1247

    setTimeout(function () {
      container.scrollTop = 0;
    });
  }

  if (!isToast() && !globalState.previousActiveElement) {
    globalState.previousActiveElement = document.activeElement;
  }

  if (params.onOpen !== null && typeof params.onOpen === 'function') {
    setTimeout(function () {
      params.onOpen(popup);
    });
  }
};

var _this = undefined;

var handleInputOptions = function handleInputOptions(instance, params) {
  var content = getContent();

  var processInputOptions = function processInputOptions(inputOptions) {
    return populateInputOptions[params.input](content, formatInputOptions(inputOptions), params);
  };

  if (isPromise(params.inputOptions)) {
    showLoading();
    params.inputOptions.then(function (inputOptions) {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (_typeof(params.inputOptions) === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
  }
};
var handleInputValue = function handleInputValue(instance, params) {
  var input = instance.getInput();
  hide(input);
  params.inputValue.then(function (inputValue) {
    input.value = params.input === 'number' ? parseFloat(inputValue) || 0 : inputValue + '';
    show(input);
    input.focus();
    instance.hideLoading();
  })["catch"](function (err) {
    error('Error in inputValue promise: ' + err);
    input.value = '';
    show(input);
    input.focus();

    _this.hideLoading();
  });
};
var populateInputOptions = {
  select: function select(content, inputOptions, params) {
    var select = getChildByClass(content, swalClasses.select);
    inputOptions.forEach(function (inputOption) {
      var optionValue = inputOption[0];
      var optionLabel = inputOption[1];
      var option = document.createElement('option');
      option.value = optionValue;
      option.innerHTML = optionLabel;

      if (params.inputValue.toString() === optionValue.toString()) {
        option.selected = true;
      }

      select.appendChild(option);
    });
    select.focus();
  },
  radio: function radio(content, inputOptions, params) {
    var radio = getChildByClass(content, swalClasses.radio);
    inputOptions.forEach(function (inputOption) {
      var radioValue = inputOption[0];
      var radioLabel = inputOption[1];
      var radioInput = document.createElement('input');
      var radioLabelElement = document.createElement('label');
      radioInput.type = 'radio';
      radioInput.name = swalClasses.radio;
      radioInput.value = radioValue;

      if (params.inputValue.toString() === radioValue.toString()) {
        radioInput.checked = true;
      }

      var label = document.createElement('span');
      label.innerHTML = radioLabel;
      label.className = swalClasses.label;
      radioLabelElement.appendChild(radioInput);
      radioLabelElement.appendChild(label);
      radio.appendChild(radioLabelElement);
    });
    var radios = radio.querySelectorAll('input');

    if (radios.length) {
      radios[0].focus();
    }
  }
  /**
   * Converts `inputOptions` into an array of `[value, label]`s
   * @param inputOptions
   */

};

var formatInputOptions = function formatInputOptions(inputOptions) {
  var result = [];

  if (typeof Map !== 'undefined' && inputOptions instanceof Map) {
    inputOptions.forEach(function (value, key) {
      result.push([key, value]);
    });
  } else {
    Object.keys(inputOptions).forEach(function (key) {
      result.push([key, inputOptions[key]]);
    });
  }

  return result;
};

function _main(userParams) {
  var _this = this;

  showWarningsForParams(userParams);

  var innerParams = _extends({}, defaultParams, userParams);

  setParameters(innerParams);
  Object.freeze(innerParams); // clear the previous timer

  if (globalState.timeout) {
    globalState.timeout.stop();
    delete globalState.timeout;
  } // clear the restore focus timeout


  clearTimeout(globalState.restoreFocusTimeout);
  var domCache = {
    popup: getPopup(),
    container: getContainer(),
    content: getContent(),
    actions: getActions(),
    confirmButton: getConfirmButton(),
    cancelButton: getCancelButton(),
    closeButton: getCloseButton(),
    validationMessage: getValidationMessage(),
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(this, domCache);
  render(this, innerParams);
  privateProps.innerParams.set(this, innerParams);
  var constructor = this.constructor;
  return new Promise(function (resolve) {
    // functions to handle all closings/dismissals
    var succeedWith = function succeedWith(value) {
      _this.closePopup({
        value: value
      });
    };

    var dismissWith = function dismissWith(dismiss) {
      _this.closePopup({
        dismiss: dismiss
      });
    };

    privateMethods.swalPromiseResolve.set(_this, resolve); // Close on timer

    if (innerParams.timer) {
      globalState.timeout = new Timer(function () {
        dismissWith('timer');
        delete globalState.timeout;
      }, innerParams.timer);
    } // Get the value of the popup input


    var getInputValue = function getInputValue() {
      var input = _this.getInput();

      if (!input) {
        return null;
      }

      switch (innerParams.input) {
        case 'checkbox':
          return input.checked ? 1 : 0;

        case 'radio':
          return input.checked ? input.value : null;

        case 'file':
          return input.files.length ? input.files[0] : null;

        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    }; // input autofocus


    if (innerParams.input) {
      setTimeout(function () {
        var input = _this.getInput();

        if (input) {
          focusInput(input);
        }
      }, 0);
    }

    var confirm = function confirm(value) {
      if (innerParams.showLoaderOnConfirm) {
        constructor.showLoading(); // TODO: make showLoading an *instance* method
      }

      if (innerParams.preConfirm) {
        _this.resetValidationMessage();

        var preConfirmPromise = Promise.resolve().then(function () {
          return innerParams.preConfirm(value, innerParams.validationMessage);
        });
        preConfirmPromise.then(function (preConfirmValue) {
          if (isVisible(domCache.validationMessage) || preConfirmValue === false) {
            _this.hideLoading();
          } else {
            succeedWith(typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
          }
        });
      } else {
        succeedWith(value);
      }
    }; // Mouse interactions


    var onButtonEvent = function onButtonEvent(e) {
      var target = e.target;
      var confirmButton = domCache.confirmButton,
          cancelButton = domCache.cancelButton;
      var targetedConfirm = confirmButton && (confirmButton === target || confirmButton.contains(target));
      var targetedCancel = cancelButton && (cancelButton === target || cancelButton.contains(target));

      switch (e.type) {
        case 'click':
          // Clicked 'confirm'
          if (targetedConfirm) {
            _this.disableButtons();

            if (innerParams.input) {
              var inputValue = getInputValue();

              if (innerParams.inputValidator) {
                _this.disableInput();

                var validationPromise = Promise.resolve().then(function () {
                  return innerParams.inputValidator(inputValue, innerParams.validationMessage);
                });
                validationPromise.then(function (validationMessage) {
                  _this.enableButtons();

                  _this.enableInput();

                  if (validationMessage) {
                    _this.showValidationMessage(validationMessage);
                  } else {
                    confirm(inputValue);
                  }
                });
              } else if (!_this.getInput().checkValidity()) {
                _this.enableButtons();

                _this.showValidationMessage(innerParams.validationMessage);
              } else {
                confirm(inputValue);
              }
            } else {
              confirm(true);
            } // Clicked 'cancel'

          } else if (targetedCancel) {
            _this.disableButtons();

            dismissWith(constructor.DismissReason.cancel);
          }

          break;

        default:
      }
    };

    var buttons = domCache.popup.querySelectorAll('button');

    for (var i = 0; i < buttons.length; i++) {
      buttons[i].onclick = onButtonEvent;
      buttons[i].onmouseover = onButtonEvent;
      buttons[i].onmouseout = onButtonEvent;
      buttons[i].onmousedown = onButtonEvent;
    } // Closing popup by close button


    domCache.closeButton.onclick = function () {
      dismissWith(constructor.DismissReason.close);
    };

    if (innerParams.toast) {
      // Closing popup by internal click
      domCache.popup.onclick = function () {
        if (innerParams.showConfirmButton || innerParams.showCancelButton || innerParams.showCloseButton || innerParams.input) {
          return;
        }

        dismissWith(constructor.DismissReason.close);
      };
    } else {
      var ignoreOutsideClick = false; // Ignore click events that had mousedown on the popup but mouseup on the container
      // This can happen when the user drags a slider

      domCache.popup.onmousedown = function () {
        domCache.container.onmouseup = function (e) {
          domCache.container.onmouseup = undefined; // We only check if the mouseup target is the container because usually it doesn't
          // have any other direct children aside of the popup

          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      }; // Ignore click events that had mousedown on the container but mouseup on the popup


      domCache.container.onmousedown = function () {
        domCache.popup.onmouseup = function (e) {
          domCache.popup.onmouseup = undefined; // We also need to check if the mouseup target is a child of the popup

          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };

      domCache.container.onclick = function (e) {
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }

        if (e.target !== domCache.container) {
          return;
        }

        if (callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(constructor.DismissReason.backdrop);
        }
      };
    } // Reverse buttons (Confirm on the right side)


    if (innerParams.reverseButtons) {
      domCache.confirmButton.parentNode.insertBefore(domCache.cancelButton, domCache.confirmButton);
    } else {
      domCache.confirmButton.parentNode.insertBefore(domCache.confirmButton, domCache.cancelButton);
    } // Focus handling


    var setFocus = function setFocus(index, increment) {
      var focusableElements = getFocusableElements(innerParams.focusCancel); // search for visible elements and select the next possible match

      for (var _i = 0; _i < focusableElements.length; _i++) {
        index = index + increment; // rollover to first item

        if (index === focusableElements.length) {
          index = 0; // go to last item
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }

        return focusableElements[index].focus();
      } // no visible focusable elements, focus the popup


      domCache.popup.focus();
    };

    var keydownHandler = function keydownHandler(e, innerParams) {
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }

      var arrowKeys = ['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Left', 'Right', 'Up', 'Down' // IE11
      ];

      if (e.key === 'Enter' && !e.isComposing) {
        if (e.target && _this.getInput() && e.target.outerHTML === _this.getInput().outerHTML) {
          if (['textarea', 'file'].indexOf(innerParams.input) !== -1) {
            return; // do not submit
          }

          constructor.clickConfirm();
          e.preventDefault();
        } // TAB

      } else if (e.key === 'Tab') {
        var targetElement = e.target;
        var focusableElements = getFocusableElements(innerParams.focusCancel);
        var btnIndex = -1;

        for (var _i2 = 0; _i2 < focusableElements.length; _i2++) {
          if (targetElement === focusableElements[_i2]) {
            btnIndex = _i2;
            break;
          }
        }

        if (!e.shiftKey) {
          // Cycle to the next button
          setFocus(btnIndex, 1);
        } else {
          // Cycle to the prev button
          setFocus(btnIndex, -1);
        }

        e.stopPropagation();
        e.preventDefault(); // ARROWS - switch focus between buttons
      } else if (arrowKeys.indexOf(e.key) !== -1) {
        // focus Cancel button if Confirm button is currently focused
        if (document.activeElement === domCache.confirmButton && isVisible(domCache.cancelButton)) {
          domCache.cancelButton.focus(); // and vice versa
        } else if (document.activeElement === domCache.cancelButton && isVisible(domCache.confirmButton)) {
          domCache.confirmButton.focus();
        } // ESC

      } else if ((e.key === 'Escape' || e.key === 'Esc') && callIfFunction(innerParams.allowEscapeKey) === true) {
        e.preventDefault();
        dismissWith(constructor.DismissReason.esc);
      }
    };

    if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
      globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = false;
    }

    if (!innerParams.toast) {
      globalState.keydownHandler = function (e) {
        return keydownHandler(e, innerParams);
      };

      globalState.keydownTarget = innerParams.keydownListenerCapture ? window : domCache.popup;
      globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
      globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
        capture: globalState.keydownListenerCapture
      });
      globalState.keydownHandlerAdded = true;
    }

    _this.enableButtons();

    _this.hideLoading();

    _this.resetValidationMessage();

    if (innerParams.toast && (innerParams.input || innerParams.footer || innerParams.showCloseButton)) {
      addClass(document.body, swalClasses['toast-column']);
    } else {
      removeClass(document.body, swalClasses['toast-column']);
    } // inputOptions, inputValue


    if (innerParams.input === 'select' || innerParams.input === 'radio') {
      handleInputOptions(_this, innerParams);
    } else if (['text', 'email', 'number', 'tel', 'textarea'].indexOf(innerParams.input) !== -1 && isPromise(innerParams.inputValue)) {
      handleInputValue(_this, innerParams);
    }

    openPopup(innerParams);

    if (!innerParams.toast) {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
      } else if (innerParams.focusCancel && isVisible(domCache.cancelButton)) {
        domCache.cancelButton.focus();
      } else if (innerParams.focusConfirm && isVisible(domCache.confirmButton)) {
        domCache.confirmButton.focus();
      } else {
        setFocus(-1, 1);
      }
    } // fix scroll


    domCache.container.scrollTop = 0;
  });
}

/**
 * Updates popup parameters.
 */

function update(params) {
  var validUpdatableParams = {}; // assign valid params from `params` to `defaults`

  Object.keys(params).forEach(function (param) {
    if (Swal.isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn("Invalid parameter to update: \"".concat(param, "\". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js"));
    }
  });
  var innerParams = privateProps.innerParams.get(this);

  var updatedParams = _extends({}, innerParams, validUpdatableParams);

  render(this, updatedParams);
  privateProps.innerParams.set(this, updatedParams);
  Object.defineProperties(this, {
    params: {
      value: _extends({}, this.params, params),
      writable: false,
      enumerable: true
    }
  });
}



var instanceMethods = Object.freeze({
	hideLoading: hideLoading,
	disableLoading: hideLoading,
	getInput: getInput$1,
	close: close,
	closePopup: close,
	closeModal: close,
	closeToast: close,
	enableButtons: enableButtons,
	disableButtons: disableButtons,
	enableConfirmButton: enableConfirmButton,
	disableConfirmButton: disableConfirmButton,
	enableInput: enableInput,
	disableInput: disableInput,
	showValidationMessage: showValidationMessage,
	resetValidationMessage: resetValidationMessage$1,
	getProgressSteps: getProgressSteps$1,
	setProgressSteps: setProgressSteps,
	showProgressSteps: showProgressSteps,
	hideProgressSteps: hideProgressSteps,
	_main: _main,
	update: update
});

var currentInstance; // SweetAlert constructor

function SweetAlert() {
  // Prevent run in Node env

  /* istanbul ignore if */
  if (typeof window === 'undefined') {
    return;
  } // Check for the existence of Promise

  /* istanbul ignore if */


  if (typeof Promise === 'undefined') {
    error('This package requires a Promise library, please include a shim to enable it in this browser (See: https://github.com/sweetalert2/sweetalert2/wiki/Migration-from-SweetAlert-to-SweetAlert2#1-ie-support)');
  }

  currentInstance = this;

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var outerParams = Object.freeze(this.constructor.argsToParams(args));
  Object.defineProperties(this, {
    params: {
      value: outerParams,
      writable: false,
      enumerable: true,
      configurable: true
    }
  });

  var promise = this._main(this.params);

  privateProps.promise.set(this, promise);
} // `catch` cannot be the name of a module export, so we define our thenable methods here instead


SweetAlert.prototype.then = function (onFulfilled) {
  var promise = privateProps.promise.get(this);
  return promise.then(onFulfilled);
};

SweetAlert.prototype["finally"] = function (onFinally) {
  var promise = privateProps.promise.get(this);
  return promise["finally"](onFinally);
}; // Assign instance methods from src/instanceMethods/*.js to prototype


_extends(SweetAlert.prototype, instanceMethods); // Assign static methods from src/staticMethods/*.js to constructor


_extends(SweetAlert, staticMethods); // Proxy to instance methods to constructor, for now, for backwards compatibility


Object.keys(instanceMethods).forEach(function (key) {
  SweetAlert[key] = function () {
    if (currentInstance) {
      var _currentInstance;

      return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
    }
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '8.12.1';

var Swal = SweetAlert;
Swal["default"] = Swal;

return Swal;

})));
if (typeof this !== 'undefined' && this.Sweetalert2){  this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2}

"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,"@charset \"UTF-8\";@-webkit-keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes swal2-show{0%{-webkit-transform:scale(.7);transform:scale(.7)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@keyframes swal2-hide{0%{-webkit-transform:scale(1);transform:scale(1);opacity:1}100%{-webkit-transform:scale(.5);transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.875em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}100%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}50%{margin-top:1.625em;-webkit-transform:scale(.4);transform:scale(.4);opacity:0}80%{margin-top:-.375em;-webkit-transform:scale(1.15);transform:scale(1.15)}100%{margin-top:0;-webkit-transform:scale(1);transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}100%{-webkit-transform:rotateX(0);transform:rotateX(0);opacity:1}}body.swal2-toast-shown .swal2-container{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-shown{background-color:transparent}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}body.swal2-toast-column .swal2-toast{flex-direction:column;align-items:stretch}body.swal2-toast-column .swal2-toast .swal2-actions{flex:1;align-self:stretch;height:2.2em;margin-top:.3125em}body.swal2-toast-column .swal2-toast .swal2-loading{justify-content:center}body.swal2-toast-column .swal2-toast .swal2-input{height:2em;margin:.3125em auto;font-size:1em}body.swal2-toast-column .swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast{flex-direction:row;align-items:center;width:auto;padding:.625em;overflow-y:hidden;box-shadow:0 0 .625em #d9d9d9}.swal2-popup.swal2-toast .swal2-header{flex-direction:row}.swal2-popup.swal2-toast .swal2-title{flex-grow:1;justify-content:flex-start;margin:0 .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{position:static;width:.8em;height:.8em;line-height:.8}.swal2-popup.swal2-toast .swal2-content{justify-content:flex-start;font-size:1em}.swal2-popup.swal2-toast .swal2-icon{width:2em;min-width:2em;height:2em;margin:0}.swal2-popup.swal2-toast .swal2-icon::before{display:flex;align-items:center;font-size:2em;font-weight:700}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-popup.swal2-toast .swal2-icon::before{font-size:.25em}}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{flex-basis:auto!important;height:auto;margin:0 .3125em}.swal2-popup.swal2-toast .swal2-styled{margin:0 .3125em;padding:.3125em .625em;font-size:1em}.swal2-popup.swal2-toast .swal2-styled:focus{box-shadow:0 0 0 .0625em #fff,0 0 0 .125em rgba(50,100,150,.4)}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.8em;left:-.5em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:2em 2em;transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.25em;left:.9375em;-webkit-transform-origin:0 1.5em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}@-webkit-keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0%{-webkit-transform:translateY(-.625em) rotateZ(2deg);transform:translateY(-.625em) rotateZ(2deg)}33%{-webkit-transform:translateY(0) rotateZ(-2deg);transform:translateY(0) rotateZ(-2deg)}66%{-webkit-transform:translateY(.3125em) rotateZ(2deg);transform:translateY(.3125em) rotateZ(2deg)}100%{-webkit-transform:translateY(0) rotateZ(0);transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100%{-webkit-transform:rotateZ(1deg);transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-shown{top:auto;right:auto;bottom:auto;left:auto;max-width:calc(100% - .625em * 2);background-color:transparent}body.swal2-no-backdrop .swal2-shown>.swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-no-backdrop .swal2-shown.swal2-top{top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-top-left,body.swal2-no-backdrop .swal2-shown.swal2-top-start{top:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-top-end,body.swal2-no-backdrop .swal2-shown.swal2-top-right{top:0;right:0}body.swal2-no-backdrop .swal2-shown.swal2-center{top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-left,body.swal2-no-backdrop .swal2-shown.swal2-center-start{top:50%;left:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-center-end,body.swal2-no-backdrop .swal2-shown.swal2-center-right{top:50%;right:0;-webkit-transform:translateY(-50%);transform:translateY(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom{bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}body.swal2-no-backdrop .swal2-shown.swal2-bottom-left,body.swal2-no-backdrop .swal2-shown.swal2-bottom-start{bottom:0;left:0}body.swal2-no-backdrop .swal2-shown.swal2-bottom-end,body.swal2-no-backdrop .swal2-shown.swal2-bottom-right{right:0;bottom:0}.swal2-container{display:flex;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;flex-direction:row;align-items:center;justify-content:center;padding:.625em;overflow-x:hidden;background-color:transparent;-webkit-overflow-scrolling:touch}.swal2-container.swal2-top{align-items:flex-start}.swal2-container.swal2-top-left,.swal2-container.swal2-top-start{align-items:flex-start;justify-content:flex-start}.swal2-container.swal2-top-end,.swal2-container.swal2-top-right{align-items:flex-start;justify-content:flex-end}.swal2-container.swal2-center{align-items:center}.swal2-container.swal2-center-left,.swal2-container.swal2-center-start{align-items:center;justify-content:flex-start}.swal2-container.swal2-center-end,.swal2-container.swal2-center-right{align-items:center;justify-content:flex-end}.swal2-container.swal2-bottom{align-items:flex-end}.swal2-container.swal2-bottom-left,.swal2-container.swal2-bottom-start{align-items:flex-end;justify-content:flex-start}.swal2-container.swal2-bottom-end,.swal2-container.swal2-bottom-right{align-items:flex-end;justify-content:flex-end}.swal2-container.swal2-bottom-end>:first-child,.swal2-container.swal2-bottom-left>:first-child,.swal2-container.swal2-bottom-right>:first-child,.swal2-container.swal2-bottom-start>:first-child,.swal2-container.swal2-bottom>:first-child{margin-top:auto}.swal2-container.swal2-grow-fullscreen>.swal2-modal{display:flex!important;flex:1;align-self:stretch;justify-content:center}.swal2-container.swal2-grow-row>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container.swal2-grow-column{flex:1;flex-direction:column}.swal2-container.swal2-grow-column.swal2-bottom,.swal2-container.swal2-grow-column.swal2-center,.swal2-container.swal2-grow-column.swal2-top{align-items:center}.swal2-container.swal2-grow-column.swal2-bottom-left,.swal2-container.swal2-grow-column.swal2-bottom-start,.swal2-container.swal2-grow-column.swal2-center-left,.swal2-container.swal2-grow-column.swal2-center-start,.swal2-container.swal2-grow-column.swal2-top-left,.swal2-container.swal2-grow-column.swal2-top-start{align-items:flex-start}.swal2-container.swal2-grow-column.swal2-bottom-end,.swal2-container.swal2-grow-column.swal2-bottom-right,.swal2-container.swal2-grow-column.swal2-center-end,.swal2-container.swal2-grow-column.swal2-center-right,.swal2-container.swal2-grow-column.swal2-top-end,.swal2-container.swal2-grow-column.swal2-top-right{align-items:flex-end}.swal2-container.swal2-grow-column>.swal2-modal{display:flex!important;flex:1;align-content:center;justify-content:center}.swal2-container:not(.swal2-top):not(.swal2-top-start):not(.swal2-top-end):not(.swal2-top-left):not(.swal2-top-right):not(.swal2-center-start):not(.swal2-center-end):not(.swal2-center-left):not(.swal2-center-right):not(.swal2-bottom):not(.swal2-bottom-start):not(.swal2-bottom-end):not(.swal2-bottom-left):not(.swal2-bottom-right):not(.swal2-grow-fullscreen)>.swal2-modal{margin:auto}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-container .swal2-modal{margin:0!important}}.swal2-container.swal2-fade{transition:background-color .1s}.swal2-container.swal2-shown{background-color:rgba(0,0,0,.4)}.swal2-popup{display:none;position:relative;box-sizing:border-box;flex-direction:column;justify-content:center;width:32em;max-width:100%;padding:1.25em;border:none;border-radius:.3125em;background:#fff;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-header{display:flex;flex-direction:column;align-items:center}.swal2-title{position:relative;max-width:100%;margin:0 0 .4em;padding:0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{z-index:1;flex-wrap:wrap;align-items:center;justify-content:center;width:100%;margin:1.25em auto 0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-actions.swal2-loading .swal2-styled.swal2-confirm{box-sizing:border-box;width:2.5em;height:2.5em;margin:.46875em;padding:0;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:.25em solid transparent;border-radius:100%;border-color:transparent;background-color:transparent!important;color:transparent;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-actions.swal2-loading .swal2-styled.swal2-cancel{margin-right:30px;margin-left:30px}.swal2-actions.swal2-loading :not(.swal2-styled).swal2-confirm::after{content:\"\";display:inline-block;width:15px;height:15px;margin-left:5px;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border:3px solid #999;border-radius:50%;border-right-color:transparent;box-shadow:1px 1px 1px #fff}.swal2-styled{margin:.3125em;padding:.625em 2em;box-shadow:none;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#3085d6;color:#fff;font-size:1.0625em}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#aaa;color:#fff;font-size:1.0625em}.swal2-styled:focus{outline:0;box-shadow:0 0 0 2px #fff,0 0 0 4px rgba(50,100,150,.4)}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1.25em 0 0;padding:1em 0 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-image{max-width:100%;margin:1.25em auto}.swal2-close{position:absolute;z-index:2;top:0;right:0;justify-content:center;width:1.2em;height:1.2em;padding:0;overflow:hidden;transition:color .1s ease-out;border:none;border-radius:0;outline:initial;background:0 0;color:#ccc;font-family:serif;font-size:2.5em;line-height:1.2;cursor:pointer}.swal2-close:hover{-webkit-transform:none;transform:none;background:0 0;color:#f27474}.swal2-content{z-index:1;justify-content:center;margin:0;padding:0;color:#545454;font-size:1.125em;font-weight:300;line-height:normal;word-wrap:break-word}#swal2-content{text-align:center}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em auto}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:100%;transition:border-color .3s,box-shadow .3s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06);color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:0 0 3px #c4e6f5}.swal2-file::-webkit-input-placeholder,.swal2-input::-webkit-input-placeholder,.swal2-textarea::-webkit-input-placeholder{color:#ccc}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::-ms-input-placeholder,.swal2-input::-ms-input-placeholder,.swal2-textarea::-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em auto;background:inherit}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-input[type=number]{max-width:10em}.swal2-file{background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:inherit;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{margin:0 .4em}.swal2-validation-message{display:none;align-items:center;justify-content:center;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;zoom:normal;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}@supports (-ms-accelerator:true){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.swal2-range input{width:100%!important}.swal2-range output{display:none}}@-moz-document url-prefix(){.swal2-close:focus{outline:2px solid rgba(50,100,150,.4)}}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:1.25em auto 1.875em;zoom:normal;border:.25em solid transparent;border-radius:50%;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon::before{display:flex;align-items:center;height:92%;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning::before{content:\"!\"}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info::before{content:\"i\"}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question::before{content:\"?\"}.swal2-icon.swal2-question.swal2-arabic-question-mark::before{content:\"؟\"}.swal2-icon.swal2-success{border-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-.4375em;left:-2.0635em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:3.75em 3.75em;transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-.6875em;left:1.875em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 3.75em;transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.875em;width:1.5625em;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal2-progress-steps{align-items:center;margin:0 0 1.25em;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;width:2em;height:2em;border-radius:2em;background:#3085d6;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#3085d6}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;width:2.5em;height:.4em;margin:0 -1px;background:#3085d6}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-show.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-hide.swal2-noanimation{-webkit-animation:none;animation:none}.swal2-rtl .swal2-close{right:auto;left:0}.swal2-animate-success-icon .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-animate-success-icon .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-animate-success-icon .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-animate-error-icon{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-animate-error-icon .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}@-webkit-keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}");

/***/ }),

/***/ "./Resources/public/js/travel-constant-i18n-de.js":
/*!********************************************************!*\
  !*** ./Resources/public/js/travel-constant-i18n-de.js ***!
  \********************************************************/
/*! exports provided: travelConstantsGerman */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelConstantsGerman", function() { return travelConstantsGerman; });
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

var travelConstantsGerman = {
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

/***/ "./Resources/public/js/travel-constant-i18n-en.js":
/*!********************************************************!*\
  !*** ./Resources/public/js/travel-constant-i18n-en.js ***!
  \********************************************************/
/*! exports provided: travelConstantsEnglish */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "travelConstantsEnglish", function() { return travelConstantsEnglish; });
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

var travelConstantsEnglish = {
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

/***/ }),

/***/ "./Resources/public/js/travel-finder.js":
/*!**********************************************!*\
  !*** ./Resources/public/js/travel-finder.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travel-constant-i18n-en */ "./Resources/public/js/travel-constant-i18n-en.js");
/* harmony import */ var _travel_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travel-constant-i18n-de */ "./Resources/public/js/travel-constant-i18n-de.js");
/* harmony import */ var _CoreBundle_Resources_public_js_AlertHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../../CoreBundle/Resources/public/js/AlertHandler */ "../CoreBundle/Resources/public/js/AlertHandler.js");






const $ = jQuery;
const langConstants = {};
const objSettings = window.objSettings;
var arrFromNames = [];
var arrFromPositions = [];
var arrToNames = [];
var arrToPositions = [];
var travelData = {
  routeFrom: {},
  routeTo: {}
};

function roundToTwo(num) {
  if (typeof num != "float") {
    num = parseFloat(num);
  }
  return num.toFixed(2);
}
/**
 * Saves the string of the start address to the script-scoped variable
 * @param address     String for start address
 * @returns {void}
 */
function setRouteFrom(address) {
  travelData.routeFrom.adress = address;
}

/**
 * Saves the string of the destination address to the script-scoped variable
 * @param address     String for destination address
 * @returns {void}
 */
function setRouteTo(address) {
  travelData.routeTo.adress = address;
}

/**
 * Handles the button press for start and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteFromPosition(coordinates) {
  handlePosition(coordinates, ".route-from", "routeFrom");
  if (!objSettings.submitButton) {
    calculateExpenses();
  }
}

/**
 * Handles the button press for destination and tries to calculate the expenses
 * @param coordinates     coordinates from navigator.geolocation
 * @returns {void}
 */
function handleRouteToPosition(coordinates) {
  handlePosition(coordinates, ".route-to", "routeTo");
  if (!objSettings.submitButton) {
    calculateExpenses();
  }
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
 * @param cssId             css-class to set response-property to
 * @param propName          css-class to set response-property to
 * @returns {void}
 */
function handlePosition(coordinates, cssId, propName) {
  let coords = coordinates.coords;
  // check bounds
  if (objSettings.bBox && objSettings.bBox[0]) {
    if (!isInBoundingBox(coords.longitude, coords.latitude)) {
      let alertHandler = new _CoreBundle_Resources_public_js_AlertHandler__WEBPACK_IMPORTED_MODULE_2__["AlertHandler"]();
      alertHandler.showInfoDialog(langConstants.ERROR, langConstants.POSITION_OUT_OF_BOUNDS);
      return;
    }
  }
  if (cssId === ".route-from") {
    travelData.routeFrom.loc = [coords.latitude, coords.longitude];
  } else {
    travelData.routeTo.loc = [coords.latitude, coords.longitude];
  }
  let url = objSettings.proxyUrl + 'reverse.php?key=' + objSettings.keyReverse + '&format=json&lat=' + coords.latitude + '&lon=' + coords.longitude;
  $.ajax({ url: url }).done(function (data) {
    let address = parseAddressString(data);
    $(cssId).val(address);
    travelData[propName].adress = address;
  });
}

function parseAddressString(data) {
  let address = "";
  if (data.address) {
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
  }
  if (address === "" && data.display_name) {
    address = data.display_name;
  }
  return address;
}

/**
 * calls geosearch to set autocomplete suggestions for an address-string
 * @param input       address-string from input
 * @param cssId       css-class to set response-property to
 * @returns {void}
 */
function autocompleteAddress(input, cssId) {
  let center;
  if (objSettings.center) {
    center = objSettings.center[0] + "," + objSettings.center[1];
  } else {
    center = (parseFloat(objSettings.bBox[0]) + parseFloat(objSettings.bBox[2])) / 2 + "," + (parseFloat(objSettings.bBox[1]) + parseFloat(objSettings.bBox[3])) / 2;
  }
  let url = objSettings.proxyUrl + "autocomplete.php?format=json&key=" + objSettings.keyAutocomplete + "&q=" + input + "&center=" + center;
  $.ajax({ url: url }).done(function (data) {
    let center;
    if (objSettings.center) {
      center = objSettings.center;
    } else {
      center = [(parseFloat(objSettings.bBox[0]) + parseFloat(objSettings.bBox[2])) / 2, (parseFloat(objSettings.bBox[1]) + parseFloat(objSettings.bBox[3])) / 2];
    }
    if (data.length > 0) {

      if (data[0] && data[0].display_name) {
        // $(cssId).val(data[0].display_name);
        let arrAddresses = [];
        for (let i in data) {
          if (data.hasOwnProperty(i)) {
            if (objSettings.bBox && objSettings.bBox[0]) {
              if (isInBoundingBox(data[i].lon, data[i].lat)) {
                let distance = Math.sqrt((center[0] - data[i].lon) * (center[0] - data[i].lon) + (center[1] - data[i].lat) * (center[1] - data[i].lat));
                let element = {
                  'dist': distance,
                  'pos': [data[i].lat, data[i].lon],
                  'name': data[i].display_name
                };
                arrAddresses.push(element);
              }
            }
          }
        }
        arrAddresses.sort((a, b) => a.dist - b.dist);

        for (let i in arrAddresses) {
          if (arrAddresses.hasOwnProperty(i)) {
            if (cssId === ".route-from") {
              // do not add twice
              if (!arrFromNames.includes(arrAddresses[i].name)) {
                arrFromNames.push(arrAddresses[i].name);
                arrFromPositions.push(arrAddresses[i].pos);
              }
            } else {
              if (!arrToNames.includes(arrAddresses[i].name)) {
                arrToNames.push(arrAddresses[i].name);
                arrToPositions.push(arrAddresses[i].pos);
              }
            }
          }
        }
        // trigger keydown event to show autocomplete options
        let event = jQuery.Event("keydown", { keyCode: 8 });
        $(cssId).trigger(event);
      }
    }
  });
}

/**
 * Checks if the given coordinates are within the bbox specified in objSettings.bBox.
 * @param longitude
 * @param latitude
 * @returns {boolean}
 */
function isInBoundingBox(longitude, latitude) {
  if (typeof longitude === "string") {
    longitude = parseFloat(longitude);
  }
  if (typeof latitude === "string") {
    latitude = parseFloat(latitude);
  }
  if (objSettings.bBox[0] < longitude && longitude < objSettings.bBox[2] && objSettings.bBox[1] < latitude && latitude < objSettings.bBox[3]) {
    return true;
  } else {
    return false;
  }
}

/**
 * calls reverse-geosearch to set coordinates for an address-string and set it to the script-scoped variable
 * @param input       address-string from input
 * @param cssId       css-class to set response-property to
 * @returns {void}}
 */
function submitSearch(input, cssId) {
  let url = objSettings.proxyUrl + "search.php?format=json&key=" + objSettings.keyForward + "&q=" + $(input).val();
  $.ajax({ url: url }).done(function (data) {
    let falseResponse = false;
    if (data.length > 0) {
      if (objSettings.bBox && objSettings.bBox[0]) {
        if (!isInBoundingBox(data[0].lon, data[0].lat)) {
          falseResponse = objSettings.errMsgBounds || langConstants.ERROR_OUT_OF_BOUNDS;
        }
      }

      if (data[0] && data[0].display_name && !falseResponse) {
        if (cssId === ".route-to") {
          travelData.routeTo.loc = [data[0].lat, data[0].lon];
        } else {
          travelData.routeFrom.loc = [data[0].lat, data[0].lon];
        }
        if (travelData.routeFrom.loc.length > 0 && travelData.routeTo.loc.length > 0) {
          if (!objSettings.submitButton) {
            calculateExpenses();
          }
        }
      }
    } else {
      falseResponse = objSettings.errMsgNotFound || langConstants.ERROR_FALSE_ADDRESS;
    }
    if (falseResponse) {
      let alertHandler = new _CoreBundle_Resources_public_js_AlertHandler__WEBPACK_IMPORTED_MODULE_2__["AlertHandler"]();
      alertHandler.showInfoDialog(langConstants.ERROR, falseResponse);
    }
  }).fail(function () {
    let alertHandler = new _CoreBundle_Resources_public_js_AlertHandler__WEBPACK_IMPORTED_MODULE_2__["AlertHandler"]();
    alertHandler.showInfoDialog(langConstants.ERROR, objSettings.errMsgNotFound || langConstants.ERROR_FALSE_ADDRESS);
  });
}

/**
 * Checks whether all params for the calculation of an expense are set and calls the server and displays the repsonse
 * @returns {void}
 */
function calculateExpenses() {
  if (travelData.routeFrom.loc && travelData.routeTo.loc) {
    let url = "con4gis/expenseService/" + objSettings.settingId + "/" + travelData.routeFrom.loc[0] + "," + travelData.routeFrom.loc[1] + ";" + travelData.routeTo.loc[0] + "," + travelData.routeTo.loc[1];
    $.ajax({ url: url }).done(function (data) {
      let tableNode = $(".route-output");
      if (objSettings.displayGrid === 1) {
        tableNode.css("display", "grid");
        $(".response-headline").remove();
        $(".response-value").remove();
        if (data.time) {
          let elementTime = $(".response-time");
          elementTime.html(toHumanTime(data.time));
        }
        if (data.dist) {
          let elementDistance = $(".response-dist");
          let responseDistance = toHumanDistance(data.dist * 1000);
          elementDistance.html(responseDistance);
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
          let responseTariff = roundToTwo(data.tariffs[tariffName]) + "";
          if (objSettings.lang === "de") {
            responseTariff = responseTariff.replace(".", ",");
          }
          responseElement.html(responseTariff + " €");
          responseElement.addClass("response-value");
          responseElement.addClass("grid-item");
          responseElement.insertAfter(insertAfterVal);
          insertAfterVal = responseElement;
          autoAuto += "auto ";
        }
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
          if (data.tariffs.hasOwnProperty(tariffName)) {
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
      }
    });
  }
}

/**
 * Initial function to enable user-input to the gui
 * @returns {void}}
 */
$(document).ready(function () {
  let language = objSettings.lang || objSettings.navigator.userLanguage || objSettings.navigator.language;
  if (language === "en") {
    $.extend(langConstants, _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["travelConstantsEnglish"]);
  } else if (language === "de") {
    $.extend(langConstants, _travel_constant_i18n_de__WEBPACK_IMPORTED_MODULE_1__["travelConstantsGerman"]);
  } else {
    $.extend(langConstants, _travel_constant_i18n_en__WEBPACK_IMPORTED_MODULE_0__["travelConstantsEnglish"]);
  }
  let objInputFrom = $(".route-from");
  if (objInputFrom[0]) {
    objInputFrom[0].placeholder = objSettings.searchPlaceholder || langConstants.DUMMY_INPUT;
  }
  let objInputTo = $(".route-to");
  if (objInputTo[0]) {
    objInputTo[0].placeholder = objSettings.searchPlaceholder || langConstants.DUMMY_INPUT;
  }
  let objHeadlineDist = $(".headline-dist");
  objHeadlineDist.html(langConstants.HEADLINE_DIST);
  let objHeadlineTime = $(".headline-time");
  objHeadlineTime.html(langConstants.HEADLINE_TIME);

  // submits search on "enter", autocompletes address after 0.5 seconds otherwise
  const enterListener = function (event) {
    const scope = this;
    if (event.keyCode === 13) {
      submitSearch(scope, "." + scope.classList[0]);
    } else if (event.keyCode === 8 || event.keyCode >= 37 && event.keyCode <= 40 || event.keyCode === 9) {
      // event.stopPropagation();
      // event.preventDefault();
    } else {
      if ($(scope).val().length == 0 && !event.keyCode) {
        let tableNode = $(".route-output");
        let cssClass = scope.classList[0];
        if (cssClass === "route-from") {
          travelData.routeFrom = {};
          arrFromNames = [];
          arrFromPositions = [];
        } else if (cssClass === "route-to") {
          travelData.routeTo = {};
          arrToNames = [];
          arrToPositions = [];
        } else {
          console.log("This is weird");
        }
        tableNode.css("display", "none");
      } else {
        let currTime = Math.floor(Date.now());
        scope.counter = currTime;
        setTimeout(function () {
          if (scope.counter && scope.counter + 400 < Math.floor(Date.now())) {
            delete scope.counter;
            autocompleteAddress($(scope).val(), "." + scope.classList[0]);
          }
        }, 500);
      }
    }
  };

  objInputFrom.autocomplete({
    source: arrFromNames
  });
  objInputFrom.on('keydown', enterListener);
  if (objSettings.delButton) {
    objInputFrom.on('search', enterListener);
  }
  objInputFrom.on('autocompleteselect', function (event, ui) {
    let value = ui.item.value;
    travelData.routeFrom.loc = arrFromPositions[arrFromNames.findIndex(danger => danger === value)];
    if (!objSettings.submitButton) {
      calculateExpenses();
    }
  });

  objInputTo.autocomplete({
    source: arrToNames
  });
  objInputTo.on('keydown', enterListener);
  objInputTo.on('autocompleteselect', function (event, ui) {
    let value = ui.item.value;
    travelData.routeTo.loc = arrToPositions[arrToNames.findIndex(danger => danger === value)];
    if (!objSettings.submitButton) {
      calculateExpenses();
    }
  });

  objInputFrom.on('change', function () {
    let address = $(this).val();
    setRouteFrom(address);
  });

  objInputTo.on('change', function () {
    let address = $(this).val();
    setRouteTo(address);
  });
  if (objSettings.submitButton) {
    let submitButton = document.getElementById('btn-submit-expense-calc');
    submitButton.innerText = langConstants.START_SEARCH;
    $(submitButton).on('click', function () {
      if (travelData.routeFrom.loc && travelData.routeTo.loc) {
        calculateExpenses();
      } else {
        travelData.routeFrom.loc = [];
        travelData.routeTo.loc = [];
        submitSearch(objInputFrom, ".route-from");
        submitSearch(objInputTo, ".route-to");
      }
    });
  }

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
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0NvcmVCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9BbGVydEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL0NvcmVCdW5kbGUvbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdHJhdmVsLWNvbnN0YW50LWkxOG4tZGUuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtY29uc3RhbnQtaTE4bi1lbi5qcyIsIndlYnBhY2s6Ly8vLi9SZXNvdXJjZXMvcHVibGljL2pzL3RyYXZlbC1maW5kZXIuanMiXSwibmFtZXMiOlsiQWxlcnRIYW5kbGVyIiwic2hvd0Vycm9yRGlhbG9nIiwidGl0bGUiLCJjb250ZW50IiwiU3dhbCIsImZpcmUiLCJzaG93SW5mb0RpYWxvZyIsInNob3dDb25maXJtRGlhbG9nIiwidGV4dCIsImNvbmZpcm1DYWxsYmFjayIsImNhbmNlbENhbGxiYWNrIiwiY29uZmlybVRleHQiLCJjYW5jZWxUZXh0IiwidHlwZSIsInNob3dDYW5jZWxCdXR0b24iLCJjb25maXJtQnV0dG9uVGV4dCIsImNhbmNlbEJ1dHRvblRleHQiLCJkYW5nZXJNb2RlIiwidGhlbiIsIndpbGxEZWxldGUiLCJ2YWx1ZSIsInNob3dTZWxlY3REaWFsb2ciLCJvYmpPcHRpb25zIiwic2VsZWN0ZWRWYWx1ZSIsImlucHV0IiwiaW5wdXRPcHRpb25zIiwiaW5wdXRQbGFjZWhvbGRlciIsInRyYXZlbENvbnN0YW50c0dlcm1hbiIsIkRVTU1ZX0lOUFVUIiwiSEVBRExJTkVfRElTVCIsIkhFQURMSU5FX1RJTUUiLCJIRUFETElORV9CQVNFX1BSSUNFIiwiSEVBRExJTkVfRElTVF9QUklDRSIsIkhFQURMSU5FX1RJTUVfUFJJQ0UiLCJFUlJPUl9PVVRfT0ZfQk9VTkRTIiwiRVJST1JfRkFMU0VfQUREUkVTUyIsIkVSUk9SIiwiU1RBUlRfU0VBUkNIIiwiUE9TSVRJT05fT1VUX09GX0JPVU5EUyIsIk5PTkUiLCJ0cmF2ZWxDb25zdGFudHNFbmdsaXNoIiwiJCIsImpRdWVyeSIsImxhbmdDb25zdGFudHMiLCJvYmpTZXR0aW5ncyIsIndpbmRvdyIsImFyckZyb21OYW1lcyIsImFyckZyb21Qb3NpdGlvbnMiLCJhcnJUb05hbWVzIiwiYXJyVG9Qb3NpdGlvbnMiLCJ0cmF2ZWxEYXRhIiwicm91dGVGcm9tIiwicm91dGVUbyIsInJvdW5kVG9Ud28iLCJudW0iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInNldFJvdXRlRnJvbSIsImFkZHJlc3MiLCJhZHJlc3MiLCJzZXRSb3V0ZVRvIiwiaGFuZGxlUm91dGVGcm9tUG9zaXRpb24iLCJjb29yZGluYXRlcyIsImhhbmRsZVBvc2l0aW9uIiwic3VibWl0QnV0dG9uIiwiY2FsY3VsYXRlRXhwZW5zZXMiLCJoYW5kbGVSb3V0ZVRvUG9zaXRpb24iLCJ0b0h1bWFuRGlzdGFuY2UiLCJkaXN0YW5jZUluTWV0ZXJzIiwiZGlzdGFuY2UiLCJodW1hbkRpc3RhbmNlIiwicGFyc2VJbnQiLCJ0b0h1bWFuVGltZSIsInRpbWVJblNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaHVtYW5UaW1lIiwiY3NzSWQiLCJwcm9wTmFtZSIsImNvb3JkcyIsImJCb3giLCJpc0luQm91bmRpbmdCb3giLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImFsZXJ0SGFuZGxlciIsImxvYyIsInVybCIsInByb3h5VXJsIiwia2V5UmV2ZXJzZSIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBhcnNlQWRkcmVzc1N0cmluZyIsInZhbCIsInBlZGVzdHJpYW4iLCJob3VzZV9udW1iZXIiLCJwYXRoIiwibGVuZ3RoIiwicG9zdGNvZGUiLCJ0b3duIiwiZGlzcGxheV9uYW1lIiwiYXV0b2NvbXBsZXRlQWRkcmVzcyIsImNlbnRlciIsImtleUF1dG9jb21wbGV0ZSIsImFyckFkZHJlc3NlcyIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImxvbiIsImxhdCIsIk1hdGgiLCJzcXJ0IiwiZWxlbWVudCIsInB1c2giLCJzb3J0IiwiYSIsImIiLCJkaXN0IiwiaW5jbHVkZXMiLCJuYW1lIiwicG9zIiwiZXZlbnQiLCJFdmVudCIsImtleUNvZGUiLCJ0cmlnZ2VyIiwic3VibWl0U2VhcmNoIiwia2V5Rm9yd2FyZCIsImZhbHNlUmVzcG9uc2UiLCJlcnJNc2dCb3VuZHMiLCJlcnJNc2dOb3RGb3VuZCIsImZhaWwiLCJzZXR0aW5nSWQiLCJ0YWJsZU5vZGUiLCJkaXNwbGF5R3JpZCIsImNzcyIsInJlbW92ZSIsInRpbWUiLCJlbGVtZW50VGltZSIsImh0bWwiLCJlbGVtZW50RGlzdGFuY2UiLCJyZXNwb25zZURpc3RhbmNlIiwiaW5zZXJ0QWZ0ZXJIZWFkIiwiaW5zZXJ0QWZ0ZXJWYWwiLCJhdXRvQXV0byIsInRhcmlmZk5hbWUiLCJ0YXJpZmZzIiwibm9kZU5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRDbGFzcyIsImluc2VydEFmdGVyIiwicmVzcG9uc2VFbGVtZW50IiwicmVzcG9uc2VUYXJpZmYiLCJsYW5nIiwicmVwbGFjZSIsImluZGV4RGVjaW1hbCIsImluZGV4T2YiLCJzdWJzdHJpbmciLCJoZWFkbGluZGVOb2RlIiwicmVzcG9uc2VOb2RlIiwiaGVhZGxpbmVFbGVtZW50IiwiaW5uZXJIVE1MIiwiYXBwZW5kIiwicmVhZHkiLCJsYW5ndWFnZSIsIm5hdmlnYXRvciIsInVzZXJMYW5ndWFnZSIsImV4dGVuZCIsIm9iaklucHV0RnJvbSIsInBsYWNlaG9sZGVyIiwic2VhcmNoUGxhY2Vob2xkZXIiLCJvYmpJbnB1dFRvIiwib2JqSGVhZGxpbmVEaXN0Iiwib2JqSGVhZGxpbmVUaW1lIiwiZW50ZXJMaXN0ZW5lciIsInNjb3BlIiwiY2xhc3NMaXN0IiwiY3NzQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwiY3VyclRpbWUiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjb3VudGVyIiwic2V0VGltZW91dCIsImF1dG9jb21wbGV0ZSIsInNvdXJjZSIsIm9uIiwiZGVsQnV0dG9uIiwidWkiLCJpdGVtIiwiZmluZEluZGV4IiwiZGFuZ2VyIiwiZ2V0RWxlbWVudEJ5SWQiLCJpbm5lclRleHQiLCJnZW9sb2NhdGlvbiIsImdldEN1cnJlbnRQb3NpdGlvbiIsIndhcm4iLCJvYmpIZWFkbGluZURpc3RQcmljZSIsIm9iakhlYWRsaW5lVGltZVByaWNlIiwib2JqSGVhZGxpbmVCYXNlUHJpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBOztBQUVPLE1BQU1BLFlBQU4sQ0FBbUI7O0FBRXhCQyxrQkFBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QkMsc0RBQUlBLENBQUNDLElBQUwsQ0FBVUgsS0FBVixFQUFpQkMsT0FB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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdzZDQUF3NkM7O0FBRXg2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixHQUFHO0FBQ0gsb0NBQW9DO0FBQ3BDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQsNEVBQTRFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdILDJEQUEyRDs7QUFFM0QsaURBQWlEOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0EsOERBQThEOztBQUU5RCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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O0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUJBQXlCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCx1Q0FBdUMsRUFBRTs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0ZBQWtGLCtCQUErQixFQUFFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FB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T0FBOUIsRUFBdUMsWUFBWTtBQUNqRCxRQUFJdkIsVUFBVStCLFdBQWQsRUFBMkI7QUFDekIvQixnQkFBVStCLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5Q25JLHFCQUF6QztBQUNELEtBRkQsTUFFTztBQUNMZ0gsY0FBUW9CLElBQVIsQ0FBYSw2R0FBYjtBQUNEO0FBQ0YsR0FORDs7QUFRQSxNQUFJQyx1QkFBdUI5SixFQUFFLHNCQUFGLENBQTNCO0FBQ0E4Six1QkFBcUI3RCxJQUFyQixDQUEwQi9GLGNBQWNYLG1CQUF4QztBQUNBLE1BQUl3Syx1QkFBdUIvSixFQUFFLHNCQUFGLENBQTNCO0FBQ0ErSix1QkFBcUI5RCxJQUFyQixDQUEwQi9GLGNBQWNWLG1CQUF4QztBQUNBLE1BQUl3Syx1QkFBdUJoSyxFQUFFLHNCQUFGLENBQTNCO0FBQ0FnSyx1QkFBcUIvRCxJQUFyQixDQUEwQi9GLGNBQWNaLG1CQUF4QztBQUNELENBN0lELEUiLCJmaWxlIjoidHJhdmVsLWZpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vUmVzb3VyY2VzL3B1YmxpYy9qcy90cmF2ZWwtZmluZGVyLmpzXCIpO1xuIiwiLyoqXG4gKiBjb240Z2lzIC0gdGhlIGdpcy1raXRcbiAqXG4gKiBAcGFja2FnZSAgIGNvbjRnaXNcbiAqIEBhdXRob3IgICAgY29uNGdpcyBjb250cmlidXRvcnMgKHNlZSBcImF1dGhvcnMudHh0XCIpXG4gKiBAbGljZW5zZSAgIEdOVS9MR1BMIGh0dHA6Ly9vcGVuc291cmNlLm9yZy9saWNlbnNlcy9sZ3BsLTMuMC5odG1sXG4gKiBAY29weXJpZ2h0IEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduIDIwMTEgLSAyMDE4XG4gKiBAbGluayAgICAgIGh0dHBzOi8vd3d3Lmt1ZXN0ZW5zY2htaWVkZS5kZVxuICovXG5cbmltcG9ydCBTd2FsIGZyb20gJ3N3ZWV0YWxlcnQyJztcblxuZXhwb3J0IGNsYXNzIEFsZXJ0SGFuZGxlciB7XG5cbiAgc2hvd0Vycm9yRGlhbG9nKHRpdGxlLCBjb250ZW50KSB7XG4gICAgU3dhbC5maXJlKHRpdGxlLCBjb250ZW50LCBcImVycm9yXCIpO1xuICB9XG5cbiAgc2hvd0luZm9EaWFsb2codGl0bGUsIGNvbnRlbnQpIHtcbiAgICBTd2FsLmZpcmUodGl0bGUsIGNvbnRlbnQsIFwiaW5mb1wiKTtcbiAgfVxuXG4gIHNob3dDb25maXJtRGlhbG9nKHRpdGxlLCB0ZXh0LCBjb25maXJtQ2FsbGJhY2ssIGNhbmNlbENhbGxiYWNrLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCkge1xuICAgIFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICB0ZXh0OiB0ZXh0LFxuICAgICAgdHlwZTogXCJ3YXJuaW5nXCIsXG4gICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxuICAgICAgY29uZmlybUJ1dHRvblRleHQ6IGNvbmZpcm1UZXh0ID8gY29uZmlybVRleHQgOiBcIkNvbmZpcm1cIixcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHQgPyBjYW5jZWxUZXh0IDogXCJDYW5jZWxcIixcbiAgICAgIGRhbmdlck1vZGU6IHRydWVcbiAgICB9KS50aGVuKCh3aWxsRGVsZXRlKSA9PiB7XG4gICAgICBpZiAod2lsbERlbGV0ZS52YWx1ZSkge1xuICAgICAgICBjb25maXJtQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBzaG93U2VsZWN0RGlhbG9nKHRpdGxlLCBvYmpPcHRpb25zLCBjb25maXJtVGV4dCwgY2FuY2VsVGV4dCkge1xuICAgIGNvbnN0IHt2YWx1ZTogc2VsZWN0ZWRWYWx1ZX0gPSBhd2FpdCBTd2FsLmZpcmUoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgaW5wdXQ6ICdzZWxlY3QnLFxuICAgICAgaW5wdXRPcHRpb25zOiBvYmpPcHRpb25zLFxuICAgICAgaW5wdXRQbGFjZWhvbGRlcjogJ1NlbGVjdCBhIGZydWl0JyxcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQsXG4gICAgICBjYW5jZWxCdXR0b25UZXh0OiBjYW5jZWxUZXh0XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGVjdGVkVmFsdWU7XG4gIH1cbn0iLCIvKiFcbiogc3dlZXRhbGVydDIgdjguMTIuMVxuKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuXG4qL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLlN3ZWV0YWxlcnQyID0gZmFjdG9yeSgpKTtcbn0odGhpcywgKGZ1bmN0aW9uICgpIHsgJ3VzZSBzdHJpY3QnO1xuXG5mdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBfdHlwZW9mID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn1cblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgIGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfTtcblxuICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZnVuY3Rpb24gX2luaGVyaXRzKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBpZiAoc3VwZXJDbGFzcykgX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKTtcbn1cblxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mIDogZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgICByZXR1cm4gby5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKG8pO1xuICB9O1xuICByZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO1xufVxuXG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8sIHApIHtcbiAgICBvLl9fcHJvdG9fXyA9IHA7XG4gICAgcmV0dXJuIG87XG4gIH07XG5cbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn1cblxuZnVuY3Rpb24gaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwidW5kZWZpbmVkXCIgfHwgIVJlZmxlY3QuY29uc3RydWN0KSByZXR1cm4gZmFsc2U7XG4gIGlmIChSZWZsZWN0LmNvbnN0cnVjdC5zaGFtKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgUHJveHkgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRydWU7XG5cbiAgdHJ5IHtcbiAgICBEYXRlLnByb3RvdHlwZS50b1N0cmluZy5jYWxsKFJlZmxlY3QuY29uc3RydWN0KERhdGUsIFtdLCBmdW5jdGlvbiAoKSB7fSkpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICBpZiAoaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkpIHtcbiAgICBfY29uc3RydWN0ID0gUmVmbGVjdC5jb25zdHJ1Y3Q7XG4gIH0gZWxzZSB7XG4gICAgX2NvbnN0cnVjdCA9IGZ1bmN0aW9uIF9jb25zdHJ1Y3QoUGFyZW50LCBhcmdzLCBDbGFzcykge1xuICAgICAgdmFyIGEgPSBbbnVsbF07XG4gICAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgICB2YXIgQ29uc3RydWN0b3IgPSBGdW5jdGlvbi5iaW5kLmFwcGx5KFBhcmVudCwgYSk7XG4gICAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAgIGlmIChDbGFzcykgX3NldFByb3RvdHlwZU9mKGluc3RhbmNlLCBDbGFzcy5wcm90b3R5cGUpO1xuICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2NvbnN0cnVjdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9XG5cbiAgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7XG59XG5cbmZ1bmN0aW9uIF9zdXBlclByb3BCYXNlKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgd2hpbGUgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSkpIHtcbiAgICBvYmplY3QgPSBfZ2V0UHJvdG90eXBlT2Yob2JqZWN0KTtcbiAgICBpZiAob2JqZWN0ID09PSBudWxsKSBicmVhaztcbiAgfVxuXG4gIHJldHVybiBvYmplY3Q7XG59XG5cbmZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgaWYgKHR5cGVvZiBSZWZsZWN0ICE9PSBcInVuZGVmaW5lZFwiICYmIFJlZmxlY3QuZ2V0KSB7XG4gICAgX2dldCA9IFJlZmxlY3QuZ2V0O1xuICB9IGVsc2Uge1xuICAgIF9nZXQgPSBmdW5jdGlvbiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gICAgICB2YXIgYmFzZSA9IF9zdXBlclByb3BCYXNlKHRhcmdldCwgcHJvcGVydHkpO1xuXG4gICAgICBpZiAoIWJhc2UpIHJldHVybjtcbiAgICAgIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihiYXNlLCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmIChkZXNjLmdldCkge1xuICAgICAgICByZXR1cm4gZGVzYy5nZXQuY2FsbChyZWNlaXZlcik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZXNjLnZhbHVlO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlciB8fCB0YXJnZXQpO1xufVxuXG52YXIgY29uc29sZVByZWZpeCA9ICdTd2VldEFsZXJ0MjonO1xuLyoqXG4gKiBGaWx0ZXIgdGhlIHVuaXF1ZSB2YWx1ZXMgaW50byBhIG5ldyBhcnJheVxuICogQHBhcmFtIGFyclxuICovXG5cbnZhciB1bmlxdWVBcnJheSA9IGZ1bmN0aW9uIHVuaXF1ZUFycmF5KGFycikge1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocmVzdWx0LmluZGV4T2YoYXJyW2ldKSA9PT0gLTEpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGFycltpXSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4vKipcbiAqIFJldHVybnMgdGhlIGFycmF5IG9iIG9iamVjdCB2YWx1ZXMgKE9iamVjdC52YWx1ZXMgaXNuJ3Qgc3VwcG9ydGVkIGluIElFMTEpXG4gKiBAcGFyYW0gb2JqXG4gKi9cblxudmFyIG9iamVjdFZhbHVlcyA9IGZ1bmN0aW9uIG9iamVjdFZhbHVlcyhvYmopIHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH0pO1xufTtcbi8qKlxuICogQ29udmVydCBOb2RlTGlzdCB0byBBcnJheVxuICogQHBhcmFtIG5vZGVMaXN0XG4gKi9cblxudmFyIHRvQXJyYXkgPSBmdW5jdGlvbiB0b0FycmF5KG5vZGVMaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XG59O1xuLyoqXG4gKiBTdGFuZGFyZGlzZSBjb25zb2xlIHdhcm5pbmdzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuID0gZnVuY3Rpb24gd2FybihtZXNzYWdlKSB7XG4gIGNvbnNvbGUud2FybihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgZXJyb3JzXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciBlcnJvciA9IGZ1bmN0aW9uIGVycm9yKG1lc3NhZ2UpIHtcbiAgY29uc29sZS5lcnJvcihcIlwiLmNvbmNhdChjb25zb2xlUHJlZml4LCBcIiBcIikuY29uY2F0KG1lc3NhZ2UpKTtcbn07XG4vKipcbiAqIFByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciBgd2Fybk9uY2VgXG4gKiBAdHlwZSB7QXJyYXl9XG4gKiBAcHJpdmF0ZVxuICovXG5cbnZhciBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMgPSBbXTtcbi8qKlxuICogU2hvdyBhIGNvbnNvbGUgd2FybmluZywgYnV0IG9ubHkgaWYgaXQgaGFzbid0IGFscmVhZHkgYmVlbiBzaG93blxuICogQHBhcmFtIG1lc3NhZ2VcbiAqL1xuXG52YXIgd2Fybk9uY2UgPSBmdW5jdGlvbiB3YXJuT25jZShtZXNzYWdlKSB7XG4gIGlmICghKHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5pbmRleE9mKG1lc3NhZ2UpICE9PSAtMSkpIHtcbiAgICBwcmV2aW91c1dhcm5PbmNlTWVzc2FnZXMucHVzaChtZXNzYWdlKTtcbiAgICB3YXJuKG1lc3NhZ2UpO1xuICB9XG59O1xuLyoqXG4gKiBTaG93IGEgb25lLXRpbWUgY29uc29sZSB3YXJuaW5nIGFib3V0IGRlcHJlY2F0ZWQgcGFyYW1zL21ldGhvZHNcbiAqL1xuXG52YXIgd2FybkFib3V0RGVwcmVhdGlvbiA9IGZ1bmN0aW9uIHdhcm5BYm91dERlcHJlYXRpb24oZGVwcmVjYXRlZFBhcmFtLCB1c2VJbnN0ZWFkKSB7XG4gIHdhcm5PbmNlKFwiXFxcIlwiLmNvbmNhdChkZXByZWNhdGVkUGFyYW0sIFwiXFxcIiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgcmVsZWFzZS4gUGxlYXNlIHVzZSBcXFwiXCIpLmNvbmNhdCh1c2VJbnN0ZWFkLCBcIlxcXCIgaW5zdGVhZC5cIikpO1xufTtcbi8qKlxuICogSWYgYGFyZ2AgaXMgYSBmdW5jdGlvbiwgY2FsbCBpdCAod2l0aCBubyBhcmd1bWVudHMgb3IgY29udGV4dCkgYW5kIHJldHVybiB0aGUgcmVzdWx0LlxuICogT3RoZXJ3aXNlLCBqdXN0IHBhc3MgdGhlIHZhbHVlIHRocm91Z2hcbiAqIEBwYXJhbSBhcmdcbiAqL1xuXG52YXIgY2FsbElmRnVuY3Rpb24gPSBmdW5jdGlvbiBjYWxsSWZGdW5jdGlvbihhcmcpIHtcbiAgcmV0dXJuIHR5cGVvZiBhcmcgPT09ICdmdW5jdGlvbicgPyBhcmcoKSA6IGFyZztcbn07XG52YXIgaXNQcm9taXNlID0gZnVuY3Rpb24gaXNQcm9taXNlKGFyZykge1xuICByZXR1cm4gYXJnICYmIFByb21pc2UucmVzb2x2ZShhcmcpID09PSBhcmc7XG59O1xuXG52YXIgRGlzbWlzc1JlYXNvbiA9IE9iamVjdC5mcmVlemUoe1xuICBjYW5jZWw6ICdjYW5jZWwnLFxuICBiYWNrZHJvcDogJ2JhY2tkcm9wJyxcbiAgY2xvc2U6ICdjbG9zZScsXG4gIGVzYzogJ2VzYycsXG4gIHRpbWVyOiAndGltZXInXG59KTtcblxudmFyIGFyZ3NUb1BhcmFtcyA9IGZ1bmN0aW9uIGFyZ3NUb1BhcmFtcyhhcmdzKSB7XG4gIHZhciBwYXJhbXMgPSB7fTtcblxuICBzd2l0Y2ggKF90eXBlb2YoYXJnc1swXSkpIHtcbiAgICBjYXNlICdvYmplY3QnOlxuICAgICAgX2V4dGVuZHMocGFyYW1zLCBhcmdzWzBdKTtcblxuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgWyd0aXRsZScsICdodG1sJywgJ3R5cGUnXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lLCBpbmRleCkge1xuICAgICAgICBzd2l0Y2ggKF90eXBlb2YoYXJnc1tpbmRleF0pKSB7XG4gICAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgICAgIHBhcmFtc1tuYW1lXSA9IGFyZ3NbaW5kZXhdO1xuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxuICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgXCIuY29uY2F0KG5hbWUsIFwiISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiwgZ290IFwiKS5jb25jYXQoX3R5cGVvZihhcmdzW2luZGV4XSkpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICByZXR1cm4gcGFyYW1zO1xufTtcblxudmFyIHN3YWxQcmVmaXggPSAnc3dhbDItJztcbnZhciBwcmVmaXggPSBmdW5jdGlvbiBwcmVmaXgoaXRlbXMpIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuXG4gIGZvciAodmFyIGkgaW4gaXRlbXMpIHtcbiAgICByZXN1bHRbaXRlbXNbaV1dID0gc3dhbFByZWZpeCArIGl0ZW1zW2ldO1xuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgc3dhbENsYXNzZXMgPSBwcmVmaXgoWydjb250YWluZXInLCAnc2hvd24nLCAnaGVpZ2h0LWF1dG8nLCAnaW9zZml4JywgJ3BvcHVwJywgJ21vZGFsJywgJ25vLWJhY2tkcm9wJywgJ3RvYXN0JywgJ3RvYXN0LXNob3duJywgJ3RvYXN0LWNvbHVtbicsICdmYWRlJywgJ3Nob3cnLCAnaGlkZScsICdub2FuaW1hdGlvbicsICdjbG9zZScsICd0aXRsZScsICdoZWFkZXInLCAnY29udGVudCcsICdhY3Rpb25zJywgJ2NvbmZpcm0nLCAnY2FuY2VsJywgJ2Zvb3RlcicsICdpY29uJywgJ2ltYWdlJywgJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ2xhYmVsJywgJ3RleHRhcmVhJywgJ2lucHV0ZXJyb3InLCAndmFsaWRhdGlvbi1tZXNzYWdlJywgJ3Byb2dyZXNzLXN0ZXBzJywgJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJywgJ3Byb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcC1saW5lJywgJ2xvYWRpbmcnLCAnc3R5bGVkJywgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICd0b3AtbGVmdCcsICd0b3AtcmlnaHQnLCAnY2VudGVyJywgJ2NlbnRlci1zdGFydCcsICdjZW50ZXItZW5kJywgJ2NlbnRlci1sZWZ0JywgJ2NlbnRlci1yaWdodCcsICdib3R0b20nLCAnYm90dG9tLXN0YXJ0JywgJ2JvdHRvbS1lbmQnLCAnYm90dG9tLWxlZnQnLCAnYm90dG9tLXJpZ2h0JywgJ2dyb3ctcm93JywgJ2dyb3ctY29sdW1uJywgJ2dyb3ctZnVsbHNjcmVlbicsICdydGwnXSk7XG52YXIgaWNvblR5cGVzID0gcHJlZml4KFsnc3VjY2VzcycsICd3YXJuaW5nJywgJ2luZm8nLCAncXVlc3Rpb24nLCAnZXJyb3InXSk7XG5cbnZhciBzdGF0ZXMgPSB7XG4gIHByZXZpb3VzQm9keVBhZGRpbmc6IG51bGxcbn07XG52YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmNvbnRhaW5zKGNsYXNzTmFtZSk7XG59O1xudmFyIGFwcGx5Q3VzdG9tQ2xhc3MgPSBmdW5jdGlvbiBhcHBseUN1c3RvbUNsYXNzKGVsZW0sIGN1c3RvbUNsYXNzLCBjbGFzc05hbWUpIHtcbiAgLy8gQ2xlYW4gdXAgcHJldmlvdXMgY3VzdG9tIGNsYXNzZXNcbiAgdG9BcnJheShlbGVtLmNsYXNzTGlzdCkuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKCEob2JqZWN0VmFsdWVzKHN3YWxDbGFzc2VzKS5pbmRleE9mKGNsYXNzTmFtZSkgIT09IC0xKSAmJiAhKG9iamVjdFZhbHVlcyhpY29uVHlwZXMpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpKSB7XG4gICAgICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0pO1xuXG4gIGlmIChjdXN0b21DbGFzcyAmJiBjdXN0b21DbGFzc1tjbGFzc05hbWVdKSB7XG4gICAgYWRkQ2xhc3MoZWxlbSwgY3VzdG9tQ2xhc3NbY2xhc3NOYW1lXSk7XG4gIH1cbn07XG5mdW5jdGlvbiBnZXRJbnB1dChjb250ZW50LCBpbnB1dFR5cGUpIHtcbiAgaWYgKCFpbnB1dFR5cGUpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN3aXRjaCAoaW5wdXRUeXBlKSB7XG4gICAgY2FzZSAnc2VsZWN0JzpcbiAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgY2FzZSAnZmlsZSc6XG4gICAgICByZXR1cm4gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzW2lucHV0VHlwZV0pO1xuXG4gICAgY2FzZSAnY2hlY2tib3gnOlxuICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiIGlucHV0XCIpKTtcblxuICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpjaGVja2VkXCIpKSB8fCBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhZGlvLCBcIiBpbnB1dDpmaXJzdC1jaGlsZFwiKSk7XG5cbiAgICBjYXNlICdyYW5nZSc6XG4gICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgaW5wdXRcIikpO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuaW5wdXQpO1xuICB9XG59XG52YXIgZm9jdXNJbnB1dCA9IGZ1bmN0aW9uIGZvY3VzSW5wdXQoaW5wdXQpIHtcbiAgaW5wdXQuZm9jdXMoKTsgLy8gcGxhY2UgY3Vyc29yIGF0IGVuZCBvZiB0ZXh0IGluIHRleHQgaW5wdXRcblxuICBpZiAoaW5wdXQudHlwZSAhPT0gJ2ZpbGUnKSB7XG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjM0NTkxNVxuICAgIHZhciB2YWwgPSBpbnB1dC52YWx1ZTtcbiAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIGlucHV0LnZhbHVlID0gdmFsO1xuICB9XG59O1xudmFyIHRvZ2dsZUNsYXNzID0gZnVuY3Rpb24gdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIGNvbmRpdGlvbikge1xuICBpZiAoIXRhcmdldCB8fCAhY2xhc3NMaXN0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBjbGFzc0xpc3QgPT09ICdzdHJpbmcnKSB7XG4gICAgY2xhc3NMaXN0ID0gY2xhc3NMaXN0LnNwbGl0KC9cXHMrLykuZmlsdGVyKEJvb2xlYW4pO1xuICB9XG5cbiAgY2xhc3NMaXN0LmZvckVhY2goZnVuY3Rpb24gKGNsYXNzTmFtZSkge1xuICAgIGlmICh0YXJnZXQuZm9yRWFjaCkge1xuICAgICAgdGFyZ2V0LmZvckVhY2goZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgY29uZGl0aW9uID8gZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25kaXRpb24gPyB0YXJnZXQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpIDogdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NOYW1lKTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uIGFkZENsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCB0cnVlKTtcbn07XG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbiByZW1vdmVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCkge1xuICB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgZmFsc2UpO1xufTtcbnZhciBnZXRDaGlsZEJ5Q2xhc3MgPSBmdW5jdGlvbiBnZXRDaGlsZEJ5Q2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbS5jaGlsZE5vZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGhhc0NsYXNzKGVsZW0uY2hpbGROb2Rlc1tpXSwgY2xhc3NOYW1lKSkge1xuICAgICAgcmV0dXJuIGVsZW0uY2hpbGROb2Rlc1tpXTtcbiAgICB9XG4gIH1cbn07XG52YXIgYXBwbHlOdW1lcmljYWxTdHlsZSA9IGZ1bmN0aW9uIGFwcGx5TnVtZXJpY2FsU3R5bGUoZWxlbSwgcHJvcGVydHksIHZhbHVlKSB7XG4gIGlmICh2YWx1ZSB8fCBwYXJzZUludCh2YWx1ZSkgPT09IDApIHtcbiAgICBlbGVtLnN0eWxlW3Byb3BlcnR5XSA9IHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicgPyB2YWx1ZSArICdweCcgOiB2YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICBlbGVtLnN0eWxlLnJlbW92ZVByb3BlcnR5KHByb3BlcnR5KTtcbiAgfVxufTtcbnZhciBzaG93ID0gZnVuY3Rpb24gc2hvdyhlbGVtKSB7XG4gIHZhciBkaXNwbGF5ID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiAnZmxleCc7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xufTtcbnZhciBoaWRlID0gZnVuY3Rpb24gaGlkZShlbGVtKSB7XG4gIGVsZW0uc3R5bGUub3BhY2l0eSA9ICcnO1xuICBlbGVtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59O1xudmFyIHRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShlbGVtLCBjb25kaXRpb24sIGRpc3BsYXkpIHtcbiAgY29uZGl0aW9uID8gc2hvdyhlbGVtLCBkaXNwbGF5KSA6IGhpZGUoZWxlbSk7XG59OyAvLyBib3Jyb3dlZCBmcm9tIGpxdWVyeSAkKGVsZW0pLmlzKCc6dmlzaWJsZScpIGltcGxlbWVudGF0aW9uXG5cbnZhciBpc1Zpc2libGUgPSBmdW5jdGlvbiBpc1Zpc2libGUoZWxlbSkge1xuICByZXR1cm4gISEoZWxlbSAmJiAoZWxlbS5vZmZzZXRXaWR0aCB8fCBlbGVtLm9mZnNldEhlaWdodCB8fCBlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoKSk7XG59O1xudmFyIGlzU2Nyb2xsYWJsZSA9IGZ1bmN0aW9uIGlzU2Nyb2xsYWJsZShlbGVtKSB7XG4gIHJldHVybiAhIShlbGVtLnNjcm9sbEhlaWdodCA+IGVsZW0uY2xpZW50SGVpZ2h0KTtcbn07IC8vIGJvcnJvd2VkIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzQ2MzUyMTE5XG5cbnZhciBoYXNDc3NBbmltYXRpb24gPSBmdW5jdGlvbiBoYXNDc3NBbmltYXRpb24oZWxlbSkge1xuICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgdmFyIGFuaW1EdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgnYW5pbWF0aW9uLWR1cmF0aW9uJykgfHwgJzAnKTtcbiAgdmFyIHRyYW5zRHVyYXRpb24gPSBwYXJzZUZsb2F0KHN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3RyYW5zaXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICByZXR1cm4gYW5pbUR1cmF0aW9uID4gMCB8fCB0cmFuc0R1cmF0aW9uID4gMDtcbn07XG52YXIgY29udGFpbnMgPSBmdW5jdGlvbiBjb250YWlucyhoYXlzdGFjaywgbmVlZGxlKSB7XG4gIGlmICh0eXBlb2YgaGF5c3RhY2suY29udGFpbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gaGF5c3RhY2suY29udGFpbnMobmVlZGxlKTtcbiAgfVxufTtcblxudmFyIGdldENvbnRhaW5lciA9IGZ1bmN0aW9uIGdldENvbnRhaW5lcigpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkucXVlcnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5jb250YWluZXIpO1xufTtcbnZhciBlbGVtZW50QnlTZWxlY3RvciA9IGZ1bmN0aW9uIGVsZW1lbnRCeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgcmV0dXJuIGNvbnRhaW5lciA/IGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yU3RyaW5nKSA6IG51bGw7XG59O1xuXG52YXIgZWxlbWVudEJ5Q2xhc3MgPSBmdW5jdGlvbiBlbGVtZW50QnlDbGFzcyhjbGFzc05hbWUpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeVNlbGVjdG9yKCcuJyArIGNsYXNzTmFtZSk7XG59O1xuXG52YXIgZ2V0UG9wdXAgPSBmdW5jdGlvbiBnZXRQb3B1cCgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLnBvcHVwKTtcbn07XG52YXIgZ2V0SWNvbnMgPSBmdW5jdGlvbiBnZXRJY29ucygpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgcmV0dXJuIHRvQXJyYXkocG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLicgKyBzd2FsQ2xhc3Nlcy5pY29uKSk7XG59O1xudmFyIGdldEljb24gPSBmdW5jdGlvbiBnZXRJY29uKCkge1xuICB2YXIgdmlzaWJsZUljb24gPSBnZXRJY29ucygpLmZpbHRlcihmdW5jdGlvbiAoaWNvbikge1xuICAgIHJldHVybiBpc1Zpc2libGUoaWNvbik7XG4gIH0pO1xuICByZXR1cm4gdmlzaWJsZUljb24ubGVuZ3RoID8gdmlzaWJsZUljb25bMF0gOiBudWxsO1xufTtcbnZhciBnZXRUaXRsZSA9IGZ1bmN0aW9uIGdldFRpdGxlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMudGl0bGUpO1xufTtcbnZhciBnZXRDb250ZW50ID0gZnVuY3Rpb24gZ2V0Q29udGVudCgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmNvbnRlbnQpO1xufTtcbnZhciBnZXRJbWFnZSA9IGZ1bmN0aW9uIGdldEltYWdlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuaW1hZ2UpO1xufTtcbnZhciBnZXRQcm9ncmVzc1N0ZXBzID0gZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddKTtcbn07XG52YXIgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UgPSBmdW5jdGlvbiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSk7XG59O1xudmFyIGdldENvbmZpcm1CdXR0b24gPSBmdW5jdGlvbiBnZXRDb25maXJtQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuYWN0aW9ucyArICcgLicgKyBzd2FsQ2xhc3Nlcy5jb25maXJtKTtcbn07XG52YXIgZ2V0Q2FuY2VsQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2FuY2VsQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoJy4nICsgc3dhbENsYXNzZXMuYWN0aW9ucyArICcgLicgKyBzd2FsQ2xhc3Nlcy5jYW5jZWwpO1xufTtcbnZhciBnZXRBY3Rpb25zID0gZnVuY3Rpb24gZ2V0QWN0aW9ucygpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmFjdGlvbnMpO1xufTtcbnZhciBnZXRIZWFkZXIgPSBmdW5jdGlvbiBnZXRIZWFkZXIoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5oZWFkZXIpO1xufTtcbnZhciBnZXRGb290ZXIgPSBmdW5jdGlvbiBnZXRGb290ZXIoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5mb290ZXIpO1xufTtcbnZhciBnZXRDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENsb3NlQnV0dG9uKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY2xvc2UpO1xufTtcbnZhciBnZXRGb2N1c2FibGVFbGVtZW50cyA9IGZ1bmN0aW9uIGdldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICB2YXIgZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXggPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnW3RhYmluZGV4XTpub3QoW3RhYmluZGV4PVwiLTFcIl0pOm5vdChbdGFiaW5kZXg9XCIwXCJdKScpKSAvLyBzb3J0IGFjY29yZGluZyB0byB0YWJpbmRleFxuICAuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIGEgPSBwYXJzZUludChhLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKSk7XG4gICAgYiA9IHBhcnNlSW50KGIuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcblxuICAgIGlmIChhID4gYikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChhIDwgYikge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cblxuICAgIHJldHVybiAwO1xuICB9KTsgLy8gaHR0cHM6Ly9naXRodWIuY29tL2prdXAvZm9jdXNhYmxlL2Jsb2IvbWFzdGVyL2luZGV4LmpzXG5cbiAgdmFyIG90aGVyRm9jdXNhYmxlRWxlbWVudHMgPSB0b0FycmF5KGdldFBvcHVwKCkucXVlcnlTZWxlY3RvckFsbCgnYVtocmVmXSwgYXJlYVtocmVmXSwgaW5wdXQ6bm90KFtkaXNhYmxlZF0pLCBzZWxlY3Q6bm90KFtkaXNhYmxlZF0pLCB0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSksIGJ1dHRvbjpub3QoW2Rpc2FibGVkXSksIGlmcmFtZSwgb2JqZWN0LCBlbWJlZCwgW3RhYmluZGV4PVwiMFwiXSwgW2NvbnRlbnRlZGl0YWJsZV0sIGF1ZGlvW2NvbnRyb2xzXSwgdmlkZW9bY29udHJvbHNdJykpLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtcbiAgICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9PSAnLTEnO1xuICB9KTtcbiAgcmV0dXJuIHVuaXF1ZUFycmF5KGZvY3VzYWJsZUVsZW1lbnRzV2l0aFRhYmluZGV4LmNvbmNhdChvdGhlckZvY3VzYWJsZUVsZW1lbnRzKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBpc1Zpc2libGUoZWwpO1xuICB9KTtcbn07XG52YXIgaXNNb2RhbCA9IGZ1bmN0aW9uIGlzTW9kYWwoKSB7XG4gIHJldHVybiAhaXNUb2FzdCgpICYmICFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG59O1xudmFyIGlzVG9hc3QgPSBmdW5jdGlvbiBpc1RvYXN0KCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10pO1xufTtcbnZhciBpc0xvYWRpbmcgPSBmdW5jdGlvbiBpc0xvYWRpbmcoKSB7XG4gIHJldHVybiBnZXRQb3B1cCgpLmhhc0F0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJyk7XG59O1xuXG4vLyBEZXRlY3QgTm9kZSBlbnZcbnZhciBpc05vZGVFbnYgPSBmdW5jdGlvbiBpc05vZGVFbnYoKSB7XG4gIHJldHVybiB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnO1xufTtcblxudmFyIHN3ZWV0SFRNTCA9IFwiXFxuIDxkaXYgYXJpYS1sYWJlbGxlZGJ5PVxcXCJcIi5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBhcmlhLWRlc2NyaWJlZGJ5PVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5wb3B1cCwgXCJcXFwiIHRhYmluZGV4PVxcXCItMVxcXCI+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5oZWFkZXIsIFwiXFxcIj5cXG4gICAgIDx1bCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcHMnXSwgXCJcXFwiPjwvdWw+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLmVycm9yLCBcIlxcXCI+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmtcXFwiPjxzcGFuIGNsYXNzPVxcXCJzd2FsMi14LW1hcmstbGluZS1sZWZ0XFxcIj48L3NwYW4+PHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLXJpZ2h0XFxcIj48L3NwYW4+PC9zcGFuPlxcbiAgICAgPC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnF1ZXN0aW9uLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLndhcm5pbmcsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuaW5mbywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5zdWNjZXNzLCBcIlxcXCI+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZS1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS10aXBcXFwiPjwvc3Bhbj4gPHNwYW4gY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtbGluZS1sb25nXFxcIj48L3NwYW4+XFxuICAgICAgIDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtcmluZ1xcXCI+PC9kaXY+IDxkaXYgY2xhc3M9XFxcInN3YWwyLXN1Y2Nlc3MtZml4XFxcIj48L2Rpdj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0XFxcIj48L2Rpdj5cXG4gICAgIDwvZGl2PlxcbiAgICAgPGltZyBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbWFnZSwgXCJcXFwiIC8+XFxuICAgICA8aDIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMudGl0bGUsIFwiXFxcIiBpZD1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiPjwvaDI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2xvc2UsIFwiXFxcIj4mdGltZXM7PC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jb250ZW50LCBcIlxcXCI+XFxuICAgICA8ZGl2IGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxpbnB1dCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pbnB1dCwgXCJcXFwiIC8+XFxuICAgICA8aW5wdXQgdHlwZT1cXFwiZmlsZVxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZmlsZSwgXCJcXFwiIC8+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJyYW5nZVxcXCIgLz5cXG4gICAgICAgPG91dHB1dD48L291dHB1dD5cXG4gICAgIDwvZGl2PlxcbiAgICAgPHNlbGVjdCBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5zZWxlY3QsIFwiXFxcIj48L3NlbGVjdD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxsYWJlbCBmb3I9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2hlY2tib3gsIFwiXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiPlxcbiAgICAgICA8aW5wdXQgdHlwZT1cXFwiY2hlY2tib3hcXFwiIC8+XFxuICAgICAgIDxzcGFuIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmxhYmVsLCBcIlxcXCI+PC9zcGFuPlxcbiAgICAgPC9sYWJlbD5cXG4gICAgIDx0ZXh0YXJlYSBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50ZXh0YXJlYSwgXCJcXFwiPjwvdGV4dGFyZWE+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWyd2YWxpZGF0aW9uLW1lc3NhZ2UnXSwgXCJcXFwiPjwvZGl2PlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuYWN0aW9ucywgXCJcXFwiPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbmZpcm0sIFwiXFxcIj5PSzwvYnV0dG9uPlxcbiAgICAgPGJ1dHRvbiB0eXBlPVxcXCJidXR0b25cXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNhbmNlbCwgXCJcXFwiPkNhbmNlbDwvYnV0dG9uPlxcbiAgIDwvZGl2PlxcbiAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuZm9vdGVyLCBcIlxcXCI+XFxuICAgPC9kaXY+XFxuIDwvZGl2PlxcblwiKS5yZXBsYWNlKC8oXnxcXG4pXFxzKi9nLCAnJyk7XG5cbnZhciByZXNldE9sZENvbnRhaW5lciA9IGZ1bmN0aW9uIHJlc2V0T2xkQ29udGFpbmVyKCkge1xuICB2YXIgb2xkQ29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG5cbiAgaWYgKCFvbGRDb250YWluZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBvbGRDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGRDb250YWluZXIpO1xuICByZW1vdmVDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgW3N3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ2hhcy1jb2x1bW4nXV0pO1xufTtcblxudmFyIG9sZElucHV0VmFsOyAvLyBJRTExIHdvcmthcm91bmQsIHNlZSAjMTEwOSBmb3IgZGV0YWlsc1xuXG52YXIgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSkge1xuICBpZiAoU3dhbC5pc1Zpc2libGUoKSAmJiBvbGRJbnB1dFZhbCAhPT0gZS50YXJnZXQudmFsdWUpIHtcbiAgICBTd2FsLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcbiAgfVxuXG4gIG9sZElucHV0VmFsID0gZS50YXJnZXQudmFsdWU7XG59O1xuXG52YXIgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMgPSBmdW5jdGlvbiBhZGRJbnB1dENoYW5nZUxpc3RlbmVycygpIHtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIHZhciBmaWxlID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmZpbGUpO1xuICB2YXIgcmFuZ2UgPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG4gIHZhciByYW5nZU91dHB1dCA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIG91dHB1dFwiKSk7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgdmFyIGNoZWNrYm94ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuICBpbnB1dC5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgZmlsZS5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gIHNlbGVjdC5vbmNoYW5nZSA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gIGNoZWNrYm94Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgdGV4dGFyZWEub25pbnB1dCA9IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U7XG5cbiAgcmFuZ2Uub25pbnB1dCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKTtcbiAgICByYW5nZU91dHB1dC52YWx1ZSA9IHJhbmdlLnZhbHVlO1xuICB9O1xuXG4gIHJhbmdlLm9uY2hhbmdlID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpO1xuICAgIHJhbmdlLm5leHRTaWJsaW5nLnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG59O1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICByZXR1cm4gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCkgOiB0YXJnZXQ7XG59O1xuXG52YXIgc2V0dXBBY2Nlc3NpYmlsaXR5ID0gZnVuY3Rpb24gc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcykge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCBwYXJhbXMudG9hc3QgPyAnYWxlcnQnIDogJ2RpYWxvZycpO1xuICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGl2ZScsIHBhcmFtcy50b2FzdCA/ICdwb2xpdGUnIDogJ2Fzc2VydGl2ZScpO1xuXG4gIGlmICghcGFyYW1zLnRvYXN0KSB7XG4gICAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLW1vZGFsJywgJ3RydWUnKTtcbiAgfVxufTtcblxudmFyIHNldHVwUlRMID0gZnVuY3Rpb24gc2V0dXBSVEwodGFyZ2V0RWxlbWVudCkge1xuICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUodGFyZ2V0RWxlbWVudCkuZGlyZWN0aW9uID09PSAncnRsJykge1xuICAgIGFkZENsYXNzKGdldENvbnRhaW5lcigpLCBzd2FsQ2xhc3Nlcy5ydGwpO1xuICB9XG59O1xuLypcbiAqIEFkZCBtb2RhbCArIGJhY2tkcm9wIHRvIERPTVxuICovXG5cblxudmFyIGluaXQgPSBmdW5jdGlvbiBpbml0KHBhcmFtcykge1xuICAvLyBDbGVhbiB1cCB0aGUgb2xkIHBvcHVwIGNvbnRhaW5lciBpZiBpdCBleGlzdHNcbiAgcmVzZXRPbGRDb250YWluZXIoKTtcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgZXJyb3IoJ1N3ZWV0QWxlcnQyIHJlcXVpcmVzIGRvY3VtZW50IHRvIGluaXRpYWxpemUnKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5jb250YWluZXI7XG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBzd2VldEhUTUw7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gZ2V0VGFyZ2V0KHBhcmFtcy50YXJnZXQpO1xuICB0YXJnZXRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIHNldHVwQWNjZXNzaWJpbGl0eShwYXJhbXMpO1xuICBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KTtcbiAgYWRkSW5wdXRDaGFuZ2VMaXN0ZW5lcnMoKTtcbn07XG5cbnZhciBwYXJzZUh0bWxUb0NvbnRhaW5lciA9IGZ1bmN0aW9uIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtLCB0YXJnZXQpIHtcbiAgLy8gRE9NIGVsZW1lbnRcbiAgaWYgKHBhcmFtIGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQocGFyYW0pOyAvLyBKUXVlcnkgZWxlbWVudChzKVxuICB9IGVsc2UgaWYgKF90eXBlb2YocGFyYW0pID09PSAnb2JqZWN0Jykge1xuICAgIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBwYXJhbSk7IC8vIFBsYWluIHN0cmluZ1xuICB9IGVsc2UgaWYgKHBhcmFtKSB7XG4gICAgdGFyZ2V0LmlubmVySFRNTCA9IHBhcmFtO1xuICB9XG59O1xuXG52YXIgaGFuZGxlSnF1ZXJ5RWxlbSA9IGZ1bmN0aW9uIGhhbmRsZUpxdWVyeUVsZW0odGFyZ2V0LCBlbGVtKSB7XG4gIHRhcmdldC5pbm5lckhUTUwgPSAnJztcblxuICBpZiAoMCBpbiBlbGVtKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgaW4gZWxlbTsgaSsrKSB7XG4gICAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbVtpXS5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoZWxlbS5jbG9uZU5vZGUodHJ1ZSkpO1xuICB9XG59O1xuXG52YXIgYW5pbWF0aW9uRW5kRXZlbnQgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmIChpc05vZGVFbnYoKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciB0ZXN0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAnV2Via2l0QW5pbWF0aW9uJzogJ3dlYmtpdEFuaW1hdGlvbkVuZCcsXG4gICAgJ09BbmltYXRpb24nOiAnb0FuaW1hdGlvbkVuZCBvYW5pbWF0aW9uZW5kJyxcbiAgICAnYW5pbWF0aW9uJzogJ2FuaW1hdGlvbmVuZCdcbiAgfTtcblxuICBmb3IgKHZhciBpIGluIHRyYW5zRW5kRXZlbnROYW1lcykge1xuICAgIGlmICh0cmFuc0VuZEV2ZW50TmFtZXMuaGFzT3duUHJvcGVydHkoaSkgJiYgdHlwZW9mIHRlc3RFbC5zdHlsZVtpXSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHJldHVybiB0cmFuc0VuZEV2ZW50TmFtZXNbaV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufSgpO1xuXG4vLyBNZWFzdXJlIHdpZHRoIG9mIHNjcm9sbGJhclxuLy8gaHR0cHM6Ly9naXRodWIuY29tL3R3YnMvYm9vdHN0cmFwL2Jsb2IvbWFzdGVyL2pzL21vZGFsLmpzI0wyNzktTDI4NlxudmFyIG1lYXN1cmVTY3JvbGxiYXIgPSBmdW5jdGlvbiBtZWFzdXJlU2Nyb2xsYmFyKCkge1xuICB2YXIgc3VwcG9ydHNUb3VjaCA9ICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyB8fCBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cztcblxuICBpZiAoc3VwcG9ydHNUb3VjaCkge1xuICAgIHJldHVybiAwO1xuICB9XG5cbiAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzY3JvbGxEaXYuc3R5bGUud2lkdGggPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5oZWlnaHQgPSAnNTBweCc7XG4gIHNjcm9sbERpdi5zdHlsZS5vdmVyZmxvdyA9ICdzY3JvbGwnO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNjcm9sbERpdik7XG4gIHZhciBzY3JvbGxiYXJXaWR0aCA9IHNjcm9sbERpdi5vZmZzZXRXaWR0aCAtIHNjcm9sbERpdi5jbGllbnRXaWR0aDtcbiAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpO1xuICByZXR1cm4gc2Nyb2xsYmFyV2lkdGg7XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVCdXR0b25zU3R5bGluZyhjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b24sIHBhcmFtcykge1xuICBhZGRDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTsgLy8gQnV0dG9ucyBiYWNrZ3JvdW5kIGNvbG9yc1xuXG4gIGlmIChwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yKSB7XG4gICAgY29uZmlybUJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY29uZmlybUJ1dHRvbkNvbG9yO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcikge1xuICAgIGNhbmNlbEJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBwYXJhbXMuY2FuY2VsQnV0dG9uQ29sb3I7XG4gIH0gLy8gTG9hZGluZyBzdGF0ZVxuXG5cbiAgdmFyIGNvbmZpcm1CdXR0b25CYWNrZ3JvdW5kQ29sb3IgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShjb25maXJtQnV0dG9uKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvcjtcbiAgY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvcjtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQnV0dG9uKGJ1dHRvbiwgYnV0dG9uVHlwZSwgcGFyYW1zKSB7XG4gIHRvZ2dsZShidXR0b24sIHBhcmFtc1snc2hvd0MnICsgYnV0dG9uVHlwZS5zdWJzdHJpbmcoMSkgKyAnQnV0dG9uJ10sICdpbmxpbmUtYmxvY2snKTtcbiAgYnV0dG9uLmlubmVySFRNTCA9IHBhcmFtc1tidXR0b25UeXBlICsgJ0J1dHRvblRleHQnXTsgLy8gU2V0IGNhcHRpb24gdGV4dFxuXG4gIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXNbYnV0dG9uVHlwZSArICdCdXR0b25BcmlhTGFiZWwnXSk7IC8vIEFSSUEgbGFiZWxcbiAgLy8gQWRkIGJ1dHRvbnMgY3VzdG9tIGNsYXNzZXNcblxuICBidXR0b24uY2xhc3NOYW1lID0gc3dhbENsYXNzZXNbYnV0dG9uVHlwZV07XG4gIGFwcGx5Q3VzdG9tQ2xhc3MoYnV0dG9uLCBwYXJhbXMuY3VzdG9tQ2xhc3MsIGJ1dHRvblR5cGUgKyAnQnV0dG9uJyk7XG4gIGFkZENsYXNzKGJ1dHRvbiwgcGFyYW1zW2J1dHRvblR5cGUgKyAnQnV0dG9uQ2xhc3MnXSk7XG59XG5cbnZhciByZW5kZXJBY3Rpb25zID0gZnVuY3Rpb24gcmVuZGVyQWN0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpOyAvLyBBY3Rpb25zIChidXR0b25zKSB3cmFwcGVyXG5cbiAgaWYgKCFwYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24gJiYgIXBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgaGlkZShhY3Rpb25zKTtcbiAgfSBlbHNlIHtcbiAgICBzaG93KGFjdGlvbnMpO1xuICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhhY3Rpb25zLCBwYXJhbXMuY3VzdG9tQ2xhc3MsICdhY3Rpb25zJyk7IC8vIFJlbmRlciBjb25maXJtIGJ1dHRvblxuXG4gIHJlbmRlckJ1dHRvbihjb25maXJtQnV0dG9uLCAnY29uZmlybScsIHBhcmFtcyk7IC8vIHJlbmRlciBDYW5jZWwgQnV0dG9uXG5cbiAgcmVuZGVyQnV0dG9uKGNhbmNlbEJ1dHRvbiwgJ2NhbmNlbCcsIHBhcmFtcyk7XG5cbiAgaWYgKHBhcmFtcy5idXR0b25zU3R5bGluZykge1xuICAgIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKTtcbiAgfSBlbHNlIHtcbiAgICByZW1vdmVDbGFzcyhbY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uXSwgc3dhbENsYXNzZXMuc3R5bGVkKTtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNvbmZpcm1CdXR0b24uc3R5bGUuYm9yZGVyTGVmdENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjYW5jZWxCdXR0b24uc3R5bGUuYm9yZGVyUmlnaHRDb2xvciA9ICcnO1xuICB9XG59O1xuXG5mdW5jdGlvbiBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgYmFja2Ryb3ApIHtcbiAgaWYgKHR5cGVvZiBiYWNrZHJvcCA9PT0gJ3N0cmluZycpIHtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IGJhY2tkcm9wO1xuICB9IGVsc2UgaWYgKCFiYWNrZHJvcCkge1xuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlUG9zaXRpb25QYXJhbShjb250YWluZXIsIHBvc2l0aW9uKSB7XG4gIGlmIChwb3NpdGlvbiBpbiBzd2FsQ2xhc3Nlcykge1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbcG9zaXRpb25dKTtcbiAgfSBlbHNlIHtcbiAgICB3YXJuKCdUaGUgXCJwb3NpdGlvblwiIHBhcmFtZXRlciBpcyBub3QgdmFsaWQsIGRlZmF1bHRpbmcgdG8gXCJjZW50ZXJcIicpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuY2VudGVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBncm93KSB7XG4gIGlmIChncm93ICYmIHR5cGVvZiBncm93ID09PSAnc3RyaW5nJykge1xuICAgIHZhciBncm93Q2xhc3MgPSAnZ3Jvdy0nICsgZ3JvdztcblxuICAgIGlmIChncm93Q2xhc3MgaW4gc3dhbENsYXNzZXMpIHtcbiAgICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXNbZ3Jvd0NsYXNzXSk7XG4gICAgfVxuICB9XG59XG5cbnZhciByZW5kZXJDb250YWluZXIgPSBmdW5jdGlvbiByZW5kZXJDb250YWluZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG5cbiAgaWYgKCFjb250YWluZXIpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBoYW5kbGVCYWNrZHJvcFBhcmFtKGNvbnRhaW5lciwgcGFyYW1zLmJhY2tkcm9wKTtcblxuICBpZiAoIXBhcmFtcy5iYWNrZHJvcCAmJiBwYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spIHtcbiAgICB3YXJuKCdcImFsbG93T3V0c2lkZUNsaWNrXCIgcGFyYW1ldGVyIHJlcXVpcmVzIGBiYWNrZHJvcGAgcGFyYW1ldGVyIHRvIGJlIHNldCB0byBgdHJ1ZWAnKTtcbiAgfVxuXG4gIGhhbmRsZVBvc2l0aW9uUGFyYW0oY29udGFpbmVyLCBwYXJhbXMucG9zaXRpb24pO1xuICBoYW5kbGVHcm93UGFyYW0oY29udGFpbmVyLCBwYXJhbXMuZ3Jvdyk7IC8vIEN1c3RvbSBjbGFzc1xuXG4gIGFwcGx5Q3VzdG9tQ2xhc3MoY29udGFpbmVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MsICdjb250YWluZXInKTtcblxuICBpZiAocGFyYW1zLmN1c3RvbUNvbnRhaW5lckNsYXNzKSB7XG4gICAgLy8gQGRlcHJlY2F0ZWRcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHBhcmFtcy5jdXN0b21Db250YWluZXJDbGFzcyk7XG4gIH1cbn07XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xudmFyIHByaXZhdGVQcm9wcyA9IHtcbiAgcHJvbWlzZTogbmV3IFdlYWtNYXAoKSxcbiAgaW5uZXJQYXJhbXM6IG5ldyBXZWFrTWFwKCksXG4gIGRvbUNhY2hlOiBuZXcgV2Vha01hcCgpXG59O1xuXG52YXIgcmVuZGVySW5wdXQgPSBmdW5jdGlvbiByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpO1xuICB2YXIgcmVyZW5kZXIgPSAhaW5uZXJQYXJhbXMgfHwgcGFyYW1zLmlucHV0ICE9PSBpbm5lclBhcmFtcy5pbnB1dDtcbiAgdmFyIGNvbnRlbnQgPSBnZXRDb250ZW50KCk7XG4gIHZhciBpbnB1dFR5cGVzID0gWydpbnB1dCcsICdmaWxlJywgJ3JhbmdlJywgJ3NlbGVjdCcsICdyYWRpbycsICdjaGVja2JveCcsICd0ZXh0YXJlYSddO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRUeXBlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpbnB1dENsYXNzID0gc3dhbENsYXNzZXNbaW5wdXRUeXBlc1tpXV07XG4gICAgdmFyIGlucHV0Q29udGFpbmVyID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIGlucHV0Q2xhc3MpOyAvLyBzZXQgYXR0cmlidXRlc1xuXG4gICAgc2V0QXR0cmlidXRlcyhpbnB1dFR5cGVzW2ldLCBwYXJhbXMuaW5wdXRBdHRyaWJ1dGVzKTsgLy8gc2V0IGNsYXNzXG5cbiAgICBzZXRDbGFzcyhpbnB1dENvbnRhaW5lciwgaW5wdXRDbGFzcywgcGFyYW1zKTtcbiAgICByZXJlbmRlciAmJiBoaWRlKGlucHV0Q29udGFpbmVyKTtcbiAgfVxuXG4gIGlmICghcGFyYW1zLmlucHV0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKCFyZW5kZXJJbnB1dFR5cGVbcGFyYW1zLmlucHV0XSkge1xuICAgIHJldHVybiBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dCEgRXhwZWN0ZWQgXFxcInRleHRcXFwiLCBcXFwiZW1haWxcXFwiLCBcXFwicGFzc3dvcmRcXFwiLCBcXFwibnVtYmVyXFxcIiwgXFxcInRlbFxcXCIsIFxcXCJzZWxlY3RcXFwiLCBcXFwicmFkaW9cXFwiLCBcXFwiY2hlY2tib3hcXFwiLCBcXFwidGV4dGFyZWFcXFwiLCBcXFwiZmlsZVxcXCIgb3IgXFxcInVybFxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KHBhcmFtcy5pbnB1dCwgXCJcXFwiXCIpKTtcbiAgfVxuXG4gIGlmIChyZXJlbmRlcikge1xuICAgIHZhciBpbnB1dCA9IHJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKHBhcmFtcyk7XG4gICAgc2hvdyhpbnB1dCk7XG4gIH1cbn07XG5cbnZhciByZW1vdmVBdHRyaWJ1dGVzID0gZnVuY3Rpb24gcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGlucHV0LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYXR0ck5hbWUgPSBpbnB1dC5hdHRyaWJ1dGVzW2ldLm5hbWU7XG5cbiAgICBpZiAoIShbJ3R5cGUnLCAndmFsdWUnLCAnc3R5bGUnXS5pbmRleE9mKGF0dHJOYW1lKSAhPT0gLTEpKSB7XG4gICAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoYXR0ck5hbWUpO1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNldEF0dHJpYnV0ZXMgPSBmdW5jdGlvbiBzZXRBdHRyaWJ1dGVzKGlucHV0VHlwZSwgaW5wdXRBdHRyaWJ1dGVzKSB7XG4gIHZhciBpbnB1dCA9IGdldElucHV0KGdldENvbnRlbnQoKSwgaW5wdXRUeXBlKTtcblxuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgcmVtb3ZlQXR0cmlidXRlcyhpbnB1dCk7XG5cbiAgZm9yICh2YXIgYXR0ciBpbiBpbnB1dEF0dHJpYnV0ZXMpIHtcbiAgICAvLyBEbyBub3Qgc2V0IGEgcGxhY2Vob2xkZXIgZm9yIDxpbnB1dCB0eXBlPVwicmFuZ2VcIj5cbiAgICAvLyBpdCdsbCBjcmFzaCBFZGdlLCAjMTI5OFxuICAgIGlmIChpbnB1dFR5cGUgPT09ICdyYW5nZScgJiYgYXR0ciA9PT0gJ3BsYWNlaG9sZGVyJykge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKGF0dHIsIGlucHV0QXR0cmlidXRlc1thdHRyXSk7XG4gIH1cbn07XG5cbnZhciBzZXRDbGFzcyA9IGZ1bmN0aW9uIHNldENsYXNzKGlucHV0Q29udGFpbmVyLCBpbnB1dENsYXNzLCBwYXJhbXMpIHtcbiAgaW5wdXRDb250YWluZXIuY2xhc3NOYW1lID0gaW5wdXRDbGFzcztcblxuICBpZiAocGFyYW1zLmlucHV0Q2xhc3MpIHtcbiAgICBhZGRDbGFzcyhpbnB1dENvbnRhaW5lciwgcGFyYW1zLmlucHV0Q2xhc3MpO1xuICB9XG5cbiAgaWYgKHBhcmFtcy5jdXN0b21DbGFzcykge1xuICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MuaW5wdXQpO1xuICB9XG59O1xuXG52YXIgc2V0SW5wdXRQbGFjZWhvbGRlciA9IGZ1bmN0aW9uIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcykge1xuICBpZiAoIWlucHV0LnBsYWNlaG9sZGVyIHx8IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgaW5wdXQucGxhY2Vob2xkZXIgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgfVxufTtcblxudmFyIHJlbmRlcklucHV0VHlwZSA9IHt9O1xuXG5yZW5kZXJJbnB1dFR5cGUudGV4dCA9IHJlbmRlcklucHV0VHlwZS5lbWFpbCA9IHJlbmRlcklucHV0VHlwZS5wYXNzd29yZCA9IHJlbmRlcklucHV0VHlwZS5udW1iZXIgPSByZW5kZXJJbnB1dFR5cGUudGVsID0gcmVuZGVySW5wdXRUeXBlLnVybCA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGdldENvbnRlbnQoKSwgc3dhbENsYXNzZXMuaW5wdXQpO1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmlucHV0VmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICBpbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICB9IGVsc2UgaWYgKCFpc1Byb21pc2UocGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgd2FybihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBpbnB1dFZhbHVlISBFeHBlY3RlZCBcXFwic3RyaW5nXFxcIiwgXFxcIm51bWJlclxcXCIgb3IgXFxcIlByb21pc2VcXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5pbnB1dFZhbHVlKSwgXCJcXFwiXCIpKTtcbiAgfVxuXG4gIHNldElucHV0UGxhY2Vob2xkZXIoaW5wdXQsIHBhcmFtcyk7XG4gIGlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gIHJldHVybiBpbnB1dDtcbn07XG5cbnJlbmRlcklucHV0VHlwZS5maWxlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBzd2FsQ2xhc3Nlcy5maWxlKTtcbiAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKTtcbiAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxucmVuZGVySW5wdXRUeXBlLnJhbmdlID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgcmFuZ2UgPSBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBzd2FsQ2xhc3Nlcy5yYW5nZSk7XG4gIHZhciByYW5nZUlucHV0ID0gcmFuZ2UucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gcmFuZ2UucXVlcnlTZWxlY3Rvcignb3V0cHV0Jyk7XG4gIHJhbmdlSW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXRWYWx1ZTtcbiAgcmFuZ2VJbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICByYW5nZU91dHB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICByZXR1cm4gcmFuZ2U7XG59O1xuXG5yZW5kZXJJbnB1dFR5cGUuc2VsZWN0ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGdldENvbnRlbnQoKSwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgc2VsZWN0LmlubmVySFRNTCA9ICcnO1xuXG4gIGlmIChwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcikge1xuICAgIHZhciBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIHBsYWNlaG9sZGVyLmlubmVySFRNTCA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICAgIHBsYWNlaG9sZGVyLnZhbHVlID0gJyc7XG4gICAgcGxhY2Vob2xkZXIuZGlzYWJsZWQgPSB0cnVlO1xuICAgIHBsYWNlaG9sZGVyLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdDtcbn07XG5cbnJlbmRlcklucHV0VHlwZS5yYWRpbyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIHJhZGlvID0gZ2V0Q2hpbGRCeUNsYXNzKGdldENvbnRlbnQoKSwgc3dhbENsYXNzZXMucmFkaW8pO1xuICByYWRpby5pbm5lckhUTUwgPSAnJztcbiAgcmV0dXJuIHJhZGlvO1xufTtcblxucmVuZGVySW5wdXRUeXBlLmNoZWNrYm94ID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgY2hlY2tib3ggPSBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBzd2FsQ2xhc3Nlcy5jaGVja2JveCk7XG4gIHZhciBjaGVja2JveElucHV0ID0gZ2V0SW5wdXQoZ2V0Q29udGVudCgpLCAnY2hlY2tib3gnKTtcbiAgY2hlY2tib3hJbnB1dC50eXBlID0gJ2NoZWNrYm94JztcbiAgY2hlY2tib3hJbnB1dC52YWx1ZSA9IDE7XG4gIGNoZWNrYm94SW5wdXQuaWQgPSBzd2FsQ2xhc3Nlcy5jaGVja2JveDtcbiAgY2hlY2tib3hJbnB1dC5jaGVja2VkID0gQm9vbGVhbihwYXJhbXMuaW5wdXRWYWx1ZSk7XG4gIHZhciBsYWJlbCA9IGNoZWNrYm94LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKTtcbiAgbGFiZWwuaW5uZXJIVE1MID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gIHJldHVybiBjaGVja2JveDtcbn07XG5cbnJlbmRlcklucHV0VHlwZS50ZXh0YXJlYSA9IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgdmFyIHRleHRhcmVhID0gZ2V0Q2hpbGRCeUNsYXNzKGdldENvbnRlbnQoKSwgc3dhbENsYXNzZXMudGV4dGFyZWEpO1xuICB0ZXh0YXJlYS52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICBzZXRJbnB1dFBsYWNlaG9sZGVyKHRleHRhcmVhLCBwYXJhbXMpO1xuICByZXR1cm4gdGV4dGFyZWE7XG59O1xuXG52YXIgcmVuZGVyQ29udGVudCA9IGZ1bmN0aW9uIHJlbmRlckNvbnRlbnQoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKS5xdWVyeVNlbGVjdG9yKCcjJyArIHN3YWxDbGFzc2VzLmNvbnRlbnQpOyAvLyBDb250ZW50IGFzIEhUTUxcblxuICBpZiAocGFyYW1zLmh0bWwpIHtcbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuaHRtbCwgY29udGVudCk7XG4gICAgc2hvdyhjb250ZW50LCAnYmxvY2snKTsgLy8gQ29udGVudCBhcyBwbGFpbiB0ZXh0XG4gIH0gZWxzZSBpZiAocGFyYW1zLnRleHQpIHtcbiAgICBjb250ZW50LnRleHRDb250ZW50ID0gcGFyYW1zLnRleHQ7XG4gICAgc2hvdyhjb250ZW50LCAnYmxvY2snKTsgLy8gTm8gY29udGVudFxuICB9IGVsc2Uge1xuICAgIGhpZGUoY29udGVudCk7XG4gIH1cblxuICByZW5kZXJJbnB1dChpbnN0YW5jZSwgcGFyYW1zKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhnZXRDb250ZW50KCksIHBhcmFtcy5jdXN0b21DbGFzcywgJ2NvbnRlbnQnKTtcbn07XG5cbnZhciByZW5kZXJGb290ZXIgPSBmdW5jdGlvbiByZW5kZXJGb290ZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgZm9vdGVyID0gZ2V0Rm9vdGVyKCk7XG4gIHRvZ2dsZShmb290ZXIsIHBhcmFtcy5mb290ZXIpO1xuXG4gIGlmIChwYXJhbXMuZm9vdGVyKSB7XG4gICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLmZvb3RlciwgZm9vdGVyKTtcbiAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gIGFwcGx5Q3VzdG9tQ2xhc3MoZm9vdGVyLCBwYXJhbXMuY3VzdG9tQ2xhc3MsICdmb290ZXInKTtcbn07XG5cbnZhciByZW5kZXJDbG9zZUJ1dHRvbiA9IGZ1bmN0aW9uIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGNsb3NlQnV0dG9uID0gZ2V0Q2xvc2VCdXR0b24oKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhjbG9zZUJ1dHRvbiwgcGFyYW1zLmN1c3RvbUNsYXNzLCAnY2xvc2VCdXR0b24nKTtcbiAgdG9nZ2xlKGNsb3NlQnV0dG9uLCBwYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKTtcbiAgY2xvc2VCdXR0b24uc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgcGFyYW1zLmNsb3NlQnV0dG9uQXJpYUxhYmVsKTtcbn07XG5cbnZhciByZW5kZXJJY29uID0gZnVuY3Rpb24gcmVuZGVySWNvbihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UpOyAvLyBpZiB0aGUgaWNvbiB3aXRoIHRoZSBnaXZlbiB0eXBlIGFscmVhZHkgcmVuZGVyZWQsXG4gIC8vIGFwcGx5IHRoZSBjdXN0b20gY2xhc3Mgd2l0aG91dCByZS1yZW5kZXJpbmcgdGhlIGljb25cblxuICBpZiAoaW5uZXJQYXJhbXMgJiYgcGFyYW1zLnR5cGUgPT09IGlubmVyUGFyYW1zLnR5cGUgJiYgZ2V0SWNvbigpKSB7XG4gICAgYXBwbHlDdXN0b21DbGFzcyhnZXRJY29uKCksIHBhcmFtcy5jdXN0b21DbGFzcywgJ2ljb24nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBoaWRlQWxsSWNvbnMoKTtcblxuICBpZiAoIXBhcmFtcy50eXBlKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpO1xuXG4gIGlmIChPYmplY3Qua2V5cyhpY29uVHlwZXMpLmluZGV4T2YocGFyYW1zLnR5cGUpICE9PSAtMSkge1xuICAgIHZhciBpY29uID0gZWxlbWVudEJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiLlwiKS5jb25jYXQoaWNvblR5cGVzW3BhcmFtcy50eXBlXSkpO1xuICAgIHNob3coaWNvbik7IC8vIEN1c3RvbSBjbGFzc1xuXG4gICAgYXBwbHlDdXN0b21DbGFzcyhpY29uLCBwYXJhbXMuY3VzdG9tQ2xhc3MsICdpY29uJyk7IC8vIEFuaW1hdGUgaWNvblxuXG4gICAgdG9nZ2xlQ2xhc3MoaWNvbiwgXCJzd2FsMi1hbmltYXRlLVwiLmNvbmNhdChwYXJhbXMudHlwZSwgXCItaWNvblwiKSwgcGFyYW1zLmFuaW1hdGlvbik7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3IoXCJVbmtub3duIHR5cGUhIEV4cGVjdGVkIFxcXCJzdWNjZXNzXFxcIiwgXFxcImVycm9yXFxcIiwgXFxcIndhcm5pbmdcXFwiLCBcXFwiaW5mb1xcXCIgb3IgXFxcInF1ZXN0aW9uXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLnR5cGUsIFwiXFxcIlwiKSk7XG4gIH1cbn07XG5cbnZhciBoaWRlQWxsSWNvbnMgPSBmdW5jdGlvbiBoaWRlQWxsSWNvbnMoKSB7XG4gIHZhciBpY29ucyA9IGdldEljb25zKCk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpY29ucy5sZW5ndGg7IGkrKykge1xuICAgIGhpZGUoaWNvbnNbaV0pO1xuICB9XG59OyAvLyBBZGp1c3Qgc3VjY2VzcyBpY29uIGJhY2tncm91bmQgY29sb3IgdG8gbWF0Y2ggdGhlIHBvcHVwIGJhY2tncm91bmQgY29sb3JcblxuXG52YXIgYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvciA9IGZ1bmN0aW9uIGFkanVzdFN1Y2Nlc3NJY29uQmFja2dvdW5kQ29sb3IoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciBwb3B1cEJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHBvcHVwKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWNvbG9yJyk7XG4gIHZhciBzdWNjZXNzSWNvblBhcnRzID0gcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdLCAuc3dhbDItc3VjY2Vzcy1maXgnKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN1Y2Nlc3NJY29uUGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBzdWNjZXNzSWNvblBhcnRzW2ldLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBvcHVwQmFja2dyb3VuZENvbG9yO1xuICB9XG59O1xuXG52YXIgcmVuZGVySW1hZ2UgPSBmdW5jdGlvbiByZW5kZXJJbWFnZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBpbWFnZSA9IGdldEltYWdlKCk7XG5cbiAgaWYgKCFwYXJhbXMuaW1hZ2VVcmwpIHtcbiAgICByZXR1cm4gaGlkZShpbWFnZSk7XG4gIH1cblxuICBzaG93KGltYWdlKTsgLy8gU3JjLCBhbHRcblxuICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHBhcmFtcy5pbWFnZVVybCk7XG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnYWx0JywgcGFyYW1zLmltYWdlQWx0KTsgLy8gV2lkdGgsIGhlaWdodFxuXG4gIGFwcGx5TnVtZXJpY2FsU3R5bGUoaW1hZ2UsICd3aWR0aCcsIHBhcmFtcy5pbWFnZVdpZHRoKTtcbiAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ2hlaWdodCcsIHBhcmFtcy5pbWFnZUhlaWdodCk7IC8vIENsYXNzXG5cbiAgaW1hZ2UuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMuaW1hZ2U7XG4gIGFwcGx5Q3VzdG9tQ2xhc3MoaW1hZ2UsIHBhcmFtcy5jdXN0b21DbGFzcywgJ2ltYWdlJyk7XG5cbiAgaWYgKHBhcmFtcy5pbWFnZUNsYXNzKSB7XG4gICAgYWRkQ2xhc3MoaW1hZ2UsIHBhcmFtcy5pbWFnZUNsYXNzKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZVN0ZXBFbGVtZW50ID0gZnVuY3Rpb24gY3JlYXRlU3RlcEVsZW1lbnQoc3RlcCkge1xuICB2YXIgc3RlcEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgYWRkQ2xhc3Moc3RlcEVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcCddKTtcbiAgc3RlcEVsLmlubmVySFRNTCA9IHN0ZXA7XG4gIHJldHVybiBzdGVwRWw7XG59O1xuXG52YXIgY3JlYXRlTGluZUVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVMaW5lRWxlbWVudChwYXJhbXMpIHtcbiAgdmFyIGxpbmVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGFkZENsYXNzKGxpbmVFbCwgc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXAtbGluZSddKTtcblxuICBpZiAocGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZSkge1xuICAgIGxpbmVFbC5zdHlsZS53aWR0aCA9IHBhcmFtcy5wcm9ncmVzc1N0ZXBzRGlzdGFuY2U7XG4gIH1cblxuICByZXR1cm4gbGluZUVsO1xufTtcblxudmFyIHJlbmRlclByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiByZW5kZXJQcm9ncmVzc1N0ZXBzKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIHByb2dyZXNzU3RlcHNDb250YWluZXIgPSBnZXRQcm9ncmVzc1N0ZXBzKCk7XG5cbiAgaWYgKCFwYXJhbXMucHJvZ3Jlc3NTdGVwcyB8fCBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gaGlkZShwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgfVxuXG4gIHNob3cocHJvZ3Jlc3NTdGVwc0NvbnRhaW5lcik7XG4gIHByb2dyZXNzU3RlcHNDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG4gIHZhciBjdXJyZW50UHJvZ3Jlc3NTdGVwID0gcGFyc2VJbnQocGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXAgPT09IG51bGwgPyBTd2FsLmdldFF1ZXVlU3RlcCgpIDogcGFyYW1zLmN1cnJlbnRQcm9ncmVzc1N0ZXApO1xuXG4gIGlmIChjdXJyZW50UHJvZ3Jlc3NTdGVwID49IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCkge1xuICAgIHdhcm4oJ0ludmFsaWQgY3VycmVudFByb2dyZXNzU3RlcCBwYXJhbWV0ZXIsIGl0IHNob3VsZCBiZSBsZXNzIHRoYW4gcHJvZ3Jlc3NTdGVwcy5sZW5ndGggJyArICcoY3VycmVudFByb2dyZXNzU3RlcCBsaWtlIEpTIGFycmF5cyBzdGFydHMgZnJvbSAwKScpO1xuICB9XG5cbiAgcGFyYW1zLnByb2dyZXNzU3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcbiAgICB2YXIgc3RlcEVsID0gY3JlYXRlU3RlcEVsZW1lbnQoc3RlcCk7XG4gICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChzdGVwRWwpO1xuXG4gICAgaWYgKGluZGV4ID09PSBjdXJyZW50UHJvZ3Jlc3NTdGVwKSB7XG4gICAgICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydhY3RpdmUtcHJvZ3Jlc3Mtc3RlcCddKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggIT09IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHZhciBsaW5lRWwgPSBjcmVhdGVMaW5lRWxlbWVudChzdGVwKTtcbiAgICAgIHByb2dyZXNzU3RlcHNDb250YWluZXIuYXBwZW5kQ2hpbGQobGluZUVsKTtcbiAgICB9XG4gIH0pO1xufTtcblxudmFyIHJlbmRlclRpdGxlID0gZnVuY3Rpb24gcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgdGl0bGUgPSBnZXRUaXRsZSgpO1xuICB0b2dnbGUodGl0bGUsIHBhcmFtcy50aXRsZSB8fCBwYXJhbXMudGl0bGVUZXh0KTtcblxuICBpZiAocGFyYW1zLnRpdGxlKSB7XG4gICAgcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW1zLnRpdGxlLCB0aXRsZSk7XG4gIH1cblxuICBpZiAocGFyYW1zLnRpdGxlVGV4dCkge1xuICAgIHRpdGxlLmlubmVyVGV4dCA9IHBhcmFtcy50aXRsZVRleHQ7XG4gIH0gLy8gQ3VzdG9tIGNsYXNzXG5cblxuICBhcHBseUN1c3RvbUNsYXNzKHRpdGxlLCBwYXJhbXMuY3VzdG9tQ2xhc3MsICd0aXRsZScpO1xufTtcblxudmFyIHJlbmRlckhlYWRlciA9IGZ1bmN0aW9uIHJlbmRlckhlYWRlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBoZWFkZXIgPSBnZXRIZWFkZXIoKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhoZWFkZXIsIHBhcmFtcy5jdXN0b21DbGFzcywgJ2hlYWRlcicpOyAvLyBQcm9ncmVzcyBzdGVwc1xuXG4gIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIEljb25cblxuICByZW5kZXJJY29uKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBJbWFnZVxuXG4gIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBUaXRsZVxuXG4gIHJlbmRlclRpdGxlKGluc3RhbmNlLCBwYXJhbXMpOyAvLyBDbG9zZSBidXR0b25cblxuICByZW5kZXJDbG9zZUJ1dHRvbihpbnN0YW5jZSwgcGFyYW1zKTtcbn07XG5cbnZhciByZW5kZXJQb3B1cCA9IGZ1bmN0aW9uIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTsgLy8gV2lkdGhcblxuICBhcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAnd2lkdGgnLCBwYXJhbXMud2lkdGgpOyAvLyBQYWRkaW5nXG5cbiAgYXBwbHlOdW1lcmljYWxTdHlsZShwb3B1cCwgJ3BhZGRpbmcnLCBwYXJhbXMucGFkZGluZyk7IC8vIEJhY2tncm91bmRcblxuICBpZiAocGFyYW1zLmJhY2tncm91bmQpIHtcbiAgICBwb3B1cC5zdHlsZS5iYWNrZ3JvdW5kID0gcGFyYW1zLmJhY2tncm91bmQ7XG4gIH0gLy8gRGVmYXVsdCBDbGFzc1xuXG5cbiAgcG9wdXAuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMucG9wdXA7XG5cbiAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnRvYXN0KTtcbiAgfSBlbHNlIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubW9kYWwpO1xuICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzLCAncG9wdXAnKTtcblxuICBpZiAodHlwZW9mIHBhcmFtcy5jdXN0b21DbGFzcyA9PT0gJ3N0cmluZycpIHtcbiAgICBhZGRDbGFzcyhwb3B1cCwgcGFyYW1zLmN1c3RvbUNsYXNzKTtcbiAgfSAvLyBDU1MgYW5pbWF0aW9uXG5cblxuICB0b2dnbGVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMubm9hbmltYXRpb24sICFwYXJhbXMuYW5pbWF0aW9uKTtcbn07XG5cbnZhciByZW5kZXIgPSBmdW5jdGlvbiByZW5kZXIoaW5zdGFuY2UsIHBhcmFtcykge1xuICByZW5kZXJQb3B1cChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgcmVuZGVyQ29udGFpbmVyKGluc3RhbmNlLCBwYXJhbXMpO1xuICByZW5kZXJIZWFkZXIoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJlbmRlckNvbnRlbnQoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJlbmRlckFjdGlvbnMoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKTtcbn07XG5cbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gZGV0ZXJtaW5lIGlmIFN3ZWV0QWxlcnQyIHBvcHVwIGlzIHNob3duXG4gKi9cblxudmFyIGlzVmlzaWJsZSQxID0gZnVuY3Rpb24gaXNWaXNpYmxlJCQxKCkge1xuICByZXR1cm4gaXNWaXNpYmxlKGdldFBvcHVwKCkpO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gdG8gY2xpY2sgJ0NvbmZpcm0nIGJ1dHRvblxuICovXG5cbnZhciBjbGlja0NvbmZpcm0gPSBmdW5jdGlvbiBjbGlja0NvbmZpcm0oKSB7XG4gIHJldHVybiBnZXRDb25maXJtQnV0dG9uKCkgJiYgZ2V0Q29uZmlybUJ1dHRvbigpLmNsaWNrKCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ2FuY2VsJyBidXR0b25cbiAqL1xuXG52YXIgY2xpY2tDYW5jZWwgPSBmdW5jdGlvbiBjbGlja0NhbmNlbCgpIHtcbiAgcmV0dXJuIGdldENhbmNlbEJ1dHRvbigpICYmIGdldENhbmNlbEJ1dHRvbigpLmNsaWNrKCk7XG59O1xuXG5mdW5jdGlvbiBmaXJlKCkge1xuICB2YXIgU3dhbCA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0KFN3YWwsIGFyZ3MpO1xufVxuXG4vKipcbiAqIFJldHVybnMgYW4gZXh0ZW5kZWQgdmVyc2lvbiBvZiBgU3dhbGAgY29udGFpbmluZyBgcGFyYW1zYCBhcyBkZWZhdWx0cy5cbiAqIFVzZWZ1bCBmb3IgcmV1c2luZyBTd2FsIGNvbmZpZ3VyYXRpb24uXG4gKlxuICogRm9yIGV4YW1wbGU6XG4gKlxuICogQmVmb3JlOlxuICogY29uc3QgdGV4dFByb21wdE9wdGlvbnMgPSB7IGlucHV0OiAndGV4dCcsIHNob3dDYW5jZWxCdXR0b246IHRydWUgfVxuICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgU3dhbC5maXJlKHsgLi4udGV4dFByb21wdE9wdGlvbnMsIHRpdGxlOiAnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JyB9KVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycgfSlcbiAqXG4gKiBBZnRlcjpcbiAqIGNvbnN0IFRleHRQcm9tcHQgPSBTd2FsLm1peGluKHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9KVxuICogY29uc3Qge3ZhbHVlOiBmaXJzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGZpcnN0IG5hbWU/JylcbiAqIGNvbnN0IHt2YWx1ZTogbGFzdE5hbWV9ID0gYXdhaXQgVGV4dFByb21wdCgnV2hhdCBpcyB5b3VyIGxhc3QgbmFtZT8nKVxuICpcbiAqIEBwYXJhbSBtaXhpblBhcmFtc1xuICovXG5mdW5jdGlvbiBtaXhpbihtaXhpblBhcmFtcykge1xuICB2YXIgTWl4aW5Td2FsID1cbiAgLyojX19QVVJFX18qL1xuICBmdW5jdGlvbiAoX3RoaXMpIHtcbiAgICBfaW5oZXJpdHMoTWl4aW5Td2FsLCBfdGhpcyk7XG5cbiAgICBmdW5jdGlvbiBNaXhpblN3YWwoKSB7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgTWl4aW5Td2FsKTtcblxuICAgICAgcmV0dXJuIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIF9nZXRQcm90b3R5cGVPZihNaXhpblN3YWwpLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbGFzcyhNaXhpblN3YWwsIFt7XG4gICAgICBrZXk6IFwiX21haW5cIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBfbWFpbihwYXJhbXMpIHtcbiAgICAgICAgcmV0dXJuIF9nZXQoX2dldFByb3RvdHlwZU9mKE1peGluU3dhbC5wcm90b3R5cGUpLCBcIl9tYWluXCIsIHRoaXMpLmNhbGwodGhpcywgX2V4dGVuZHMoe30sIG1peGluUGFyYW1zLCBwYXJhbXMpKTtcbiAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gTWl4aW5Td2FsO1xuICB9KHRoaXMpO1xuXG4gIHJldHVybiBNaXhpblN3YWw7XG59XG5cbi8vIHByaXZhdGUgZ2xvYmFsIHN0YXRlIGZvciB0aGUgcXVldWUgZmVhdHVyZVxudmFyIGN1cnJlbnRTdGVwcyA9IFtdO1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgY2hhaW5pbmcgc3dlZXRBbGVydCBwb3B1cHNcbiAqL1xuXG52YXIgcXVldWUgPSBmdW5jdGlvbiBxdWV1ZShzdGVwcykge1xuICB2YXIgU3dhbCA9IHRoaXM7XG4gIGN1cnJlbnRTdGVwcyA9IHN0ZXBzO1xuXG4gIHZhciByZXNldEFuZFJlc29sdmUgPSBmdW5jdGlvbiByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwgdmFsdWUpIHtcbiAgICBjdXJyZW50U3RlcHMgPSBbXTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH07XG5cbiAgdmFyIHF1ZXVlUmVzdWx0ID0gW107XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIChmdW5jdGlvbiBzdGVwKGksIGNhbGxiYWNrKSB7XG4gICAgICBpZiAoaSA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3dhbDItcXVldWUtc3RlcCcsIGkpO1xuICAgICAgICBTd2FsLmZpcmUoY3VycmVudFN0ZXBzW2ldKS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC52YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIHF1ZXVlUmVzdWx0LnB1c2gocmVzdWx0LnZhbHVlKTtcbiAgICAgICAgICAgIHN0ZXAoaSArIDEsIGNhbGxiYWNrKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVzZXRBbmRSZXNvbHZlKHJlc29sdmUsIHtcbiAgICAgICAgICAgICAgZGlzbWlzczogcmVzdWx0LmRpc21pc3NcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwge1xuICAgICAgICAgIHZhbHVlOiBxdWV1ZVJlc3VsdFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KSgwKTtcbiAgfSk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZ2V0dGluZyB0aGUgaW5kZXggb2YgY3VycmVudCBwb3B1cCBpbiBxdWV1ZVxuICovXG5cbnZhciBnZXRRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBnZXRRdWV1ZVN0ZXAoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmdldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJyk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgaW5zZXJ0aW5nIGEgcG9wdXAgdG8gdGhlIHF1ZXVlXG4gKi9cblxudmFyIGluc2VydFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGluc2VydFF1ZXVlU3RlcChzdGVwLCBpbmRleCkge1xuICBpZiAoaW5kZXggJiYgaW5kZXggPCBjdXJyZW50U3RlcHMubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRTdGVwcy5zcGxpY2UoaW5kZXgsIDAsIHN0ZXApO1xuICB9XG5cbiAgcmV0dXJuIGN1cnJlbnRTdGVwcy5wdXNoKHN0ZXApO1xufTtcbi8qXG4gKiBHbG9iYWwgZnVuY3Rpb24gZm9yIGRlbGV0aW5nIGEgcG9wdXAgZnJvbSB0aGUgcXVldWVcbiAqL1xuXG52YXIgZGVsZXRlUXVldWVTdGVwID0gZnVuY3Rpb24gZGVsZXRlUXVldWVTdGVwKGluZGV4KSB7XG4gIGlmICh0eXBlb2YgY3VycmVudFN0ZXBzW2luZGV4XSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjdXJyZW50U3RlcHMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTaG93IHNwaW5uZXIgaW5zdGVhZCBvZiBDb25maXJtIGJ1dHRvbiBhbmQgZGlzYWJsZSBDYW5jZWwgYnV0dG9uXG4gKi9cblxudmFyIHNob3dMb2FkaW5nID0gZnVuY3Rpb24gc2hvd0xvYWRpbmcoKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKCFwb3B1cCkge1xuICAgIFN3YWwuZmlyZSgnJyk7XG4gIH1cblxuICBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciBhY3Rpb25zID0gZ2V0QWN0aW9ucygpO1xuICB2YXIgY29uZmlybUJ1dHRvbiA9IGdldENvbmZpcm1CdXR0b24oKTtcbiAgdmFyIGNhbmNlbEJ1dHRvbiA9IGdldENhbmNlbEJ1dHRvbigpO1xuICBzaG93KGFjdGlvbnMpO1xuICBzaG93KGNvbmZpcm1CdXR0b24pO1xuICBhZGRDbGFzcyhbcG9wdXAsIGFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIGNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnZGF0YS1sb2FkaW5nJywgdHJ1ZSk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1idXN5JywgdHJ1ZSk7XG4gIHBvcHVwLmZvY3VzKCk7XG59O1xuXG52YXIgUkVTVE9SRV9GT0NVU19USU1FT1VUID0gMTAwO1xuXG52YXIgZ2xvYmFsU3RhdGUgPSB7fTtcbnZhciBmb2N1c1ByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCkge1xuICBpZiAoZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ICYmIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cykge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudC5mb2N1cygpO1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IG51bGw7XG4gIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keSkge1xuICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKTtcbiAgfVxufTsgLy8gUmVzdG9yZSBwcmV2aW91cyBhY3RpdmUgKGZvY3VzZWQpIGVsZW1lbnRcblxuXG52YXIgcmVzdG9yZUFjdGl2ZUVsZW1lbnQgPSBmdW5jdGlvbiByZXN0b3JlQWN0aXZlRWxlbWVudCgpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgdmFyIHggPSB3aW5kb3cuc2Nyb2xsWDtcbiAgICB2YXIgeSA9IHdpbmRvdy5zY3JvbGxZO1xuICAgIGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50KCk7XG4gICAgICByZXNvbHZlKCk7XG4gICAgfSwgUkVTVE9SRV9GT0NVU19USU1FT1VUKTsgLy8gaXNzdWVzLzkwMFxuXG4gICAgaWYgKHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgeSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIElFIGRvZXNuJ3QgaGF2ZSBzY3JvbGxYL3Njcm9sbFkgc3VwcG9ydFxuICAgICAgd2luZG93LnNjcm9sbFRvKHgsIHkpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzIHNldCwgcmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogT3RoZXJ3aXNlLCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgZ2V0VGltZXJMZWZ0ID0gZnVuY3Rpb24gZ2V0VGltZXJMZWZ0KCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmdldFRpbWVyTGVmdCgpO1xufTtcbi8qKlxuICogU3RvcCB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgc3RvcFRpbWVyID0gZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0b3AoKTtcbn07XG4vKipcbiAqIFJlc3VtZSB0aW1lci4gUmV0dXJucyBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIG9mIHRpbWVyIHJlbWFpbmVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgcmVzdW1lVGltZXIgPSBmdW5jdGlvbiByZXN1bWVUaW1lcigpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5zdGFydCgpO1xufTtcbi8qKlxuICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5cbnZhciB0b2dnbGVUaW1lciA9IGZ1bmN0aW9uIHRvZ2dsZVRpbWVyKCkge1xuICB2YXIgdGltZXIgPSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICByZXR1cm4gdGltZXIgJiYgKHRpbWVyLnJ1bm5pbmcgPyB0aW1lci5zdG9wKCkgOiB0aW1lci5zdGFydCgpKTtcbn07XG4vKipcbiAqIEluY3JlYXNlIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgYW4gdXBkYXRlZCB0aW1lci5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cblxudmFyIGluY3JlYXNlVGltZXIgPSBmdW5jdGlvbiBpbmNyZWFzZVRpbWVyKG4pIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5pbmNyZWFzZShuKTtcbn07XG4vKipcbiAqIENoZWNrIGlmIHRpbWVyIGlzIHJ1bm5pbmcuIFJldHVybnMgdHJ1ZSBpZiB0aW1lciBpcyBydW5uaW5nXG4gKiBvciBmYWxzZSBpZiB0aW1lciBpcyBwYXVzZWQgb3Igc3RvcHBlZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWRcbiAqL1xuXG52YXIgaXNUaW1lclJ1bm5pbmcgPSBmdW5jdGlvbiBpc1RpbWVyUnVubmluZygpIHtcbiAgcmV0dXJuIGdsb2JhbFN0YXRlLnRpbWVvdXQgJiYgZ2xvYmFsU3RhdGUudGltZW91dC5pc1J1bm5pbmcoKTtcbn07XG5cbnZhciBkZWZhdWx0UGFyYW1zID0ge1xuICB0aXRsZTogJycsXG4gIHRpdGxlVGV4dDogJycsXG4gIHRleHQ6ICcnLFxuICBodG1sOiAnJyxcbiAgZm9vdGVyOiAnJyxcbiAgdHlwZTogbnVsbCxcbiAgdG9hc3Q6IGZhbHNlLFxuICBjdXN0b21DbGFzczogJycsXG4gIGN1c3RvbUNvbnRhaW5lckNsYXNzOiAnJyxcbiAgdGFyZ2V0OiAnYm9keScsXG4gIGJhY2tkcm9wOiB0cnVlLFxuICBhbmltYXRpb246IHRydWUsXG4gIGhlaWdodEF1dG86IHRydWUsXG4gIGFsbG93T3V0c2lkZUNsaWNrOiB0cnVlLFxuICBhbGxvd0VzY2FwZUtleTogdHJ1ZSxcbiAgYWxsb3dFbnRlcktleTogdHJ1ZSxcbiAgc3RvcEtleWRvd25Qcm9wYWdhdGlvbjogdHJ1ZSxcbiAga2V5ZG93bkxpc3RlbmVyQ2FwdHVyZTogZmFsc2UsXG4gIHNob3dDb25maXJtQnV0dG9uOiB0cnVlLFxuICBzaG93Q2FuY2VsQnV0dG9uOiBmYWxzZSxcbiAgcHJlQ29uZmlybTogbnVsbCxcbiAgY29uZmlybUJ1dHRvblRleHQ6ICdPSycsXG4gIGNvbmZpcm1CdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjb25maXJtQnV0dG9uQ29sb3I6IG51bGwsXG4gIGNvbmZpcm1CdXR0b25DbGFzczogJycsXG4gIGNhbmNlbEJ1dHRvblRleHQ6ICdDYW5jZWwnLFxuICBjYW5jZWxCdXR0b25BcmlhTGFiZWw6ICcnLFxuICBjYW5jZWxCdXR0b25Db2xvcjogbnVsbCxcbiAgY2FuY2VsQnV0dG9uQ2xhc3M6ICcnLFxuICBidXR0b25zU3R5bGluZzogdHJ1ZSxcbiAgcmV2ZXJzZUJ1dHRvbnM6IGZhbHNlLFxuICBmb2N1c0NvbmZpcm06IHRydWUsXG4gIGZvY3VzQ2FuY2VsOiBmYWxzZSxcbiAgc2hvd0Nsb3NlQnV0dG9uOiBmYWxzZSxcbiAgY2xvc2VCdXR0b25BcmlhTGFiZWw6ICdDbG9zZSB0aGlzIGRpYWxvZycsXG4gIHNob3dMb2FkZXJPbkNvbmZpcm06IGZhbHNlLFxuICBpbWFnZVVybDogbnVsbCxcbiAgaW1hZ2VXaWR0aDogbnVsbCxcbiAgaW1hZ2VIZWlnaHQ6IG51bGwsXG4gIGltYWdlQWx0OiAnJyxcbiAgaW1hZ2VDbGFzczogJycsXG4gIHRpbWVyOiBudWxsLFxuICB3aWR0aDogbnVsbCxcbiAgcGFkZGluZzogbnVsbCxcbiAgYmFja2dyb3VuZDogbnVsbCxcbiAgaW5wdXQ6IG51bGwsXG4gIGlucHV0UGxhY2Vob2xkZXI6ICcnLFxuICBpbnB1dFZhbHVlOiAnJyxcbiAgaW5wdXRPcHRpb25zOiB7fSxcbiAgaW5wdXRBdXRvVHJpbTogdHJ1ZSxcbiAgaW5wdXRDbGFzczogJycsXG4gIGlucHV0QXR0cmlidXRlczoge30sXG4gIGlucHV0VmFsaWRhdG9yOiBudWxsLFxuICB2YWxpZGF0aW9uTWVzc2FnZTogbnVsbCxcbiAgZ3JvdzogZmFsc2UsXG4gIHBvc2l0aW9uOiAnY2VudGVyJyxcbiAgcHJvZ3Jlc3NTdGVwczogW10sXG4gIGN1cnJlbnRQcm9ncmVzc1N0ZXA6IG51bGwsXG4gIHByb2dyZXNzU3RlcHNEaXN0YW5jZTogbnVsbCxcbiAgb25CZWZvcmVPcGVuOiBudWxsLFxuICBvbkFmdGVyQ2xvc2U6IG51bGwsXG4gIG9uT3BlbjogbnVsbCxcbiAgb25DbG9zZTogbnVsbCxcbiAgc2Nyb2xsYmFyUGFkZGluZzogdHJ1ZVxufTtcbnZhciB1cGRhdGFibGVQYXJhbXMgPSBbJ3RpdGxlJywgJ3RpdGxlVGV4dCcsICd0ZXh0JywgJ2h0bWwnLCAndHlwZScsICdjdXN0b21DbGFzcycsICdzaG93Q29uZmlybUJ1dHRvbicsICdzaG93Q2FuY2VsQnV0dG9uJywgJ2NvbmZpcm1CdXR0b25UZXh0JywgJ2NvbmZpcm1CdXR0b25BcmlhTGFiZWwnLCAnY29uZmlybUJ1dHRvbkNvbG9yJywgJ2NvbmZpcm1CdXR0b25DbGFzcycsICdjYW5jZWxCdXR0b25UZXh0JywgJ2NhbmNlbEJ1dHRvbkFyaWFMYWJlbCcsICdjYW5jZWxCdXR0b25Db2xvcicsICdjYW5jZWxCdXR0b25DbGFzcycsICdidXR0b25zU3R5bGluZycsICdyZXZlcnNlQnV0dG9ucycsICdpbWFnZVVybCcsICdpbWFnZVdpZHRoJywgJ2ltYWdlSGVpZ3RoJywgJ2ltYWdlQWx0JywgJ2ltYWdlQ2xhc3MnLCAncHJvZ3Jlc3NTdGVwcycsICdjdXJyZW50UHJvZ3Jlc3NTdGVwJ107XG52YXIgZGVwcmVjYXRlZFBhcmFtcyA9IHtcbiAgY3VzdG9tQ29udGFpbmVyQ2xhc3M6ICdjdXN0b21DbGFzcycsXG4gIGNvbmZpcm1CdXR0b25DbGFzczogJ2N1c3RvbUNsYXNzJyxcbiAgY2FuY2VsQnV0dG9uQ2xhc3M6ICdjdXN0b21DbGFzcycsXG4gIGltYWdlQ2xhc3M6ICdjdXN0b21DbGFzcycsXG4gIGlucHV0Q2xhc3M6ICdjdXN0b21DbGFzcydcbn07XG52YXIgdG9hc3RJbmNvbXBhdGlibGVQYXJhbXMgPSBbJ2FsbG93T3V0c2lkZUNsaWNrJywgJ2FsbG93RW50ZXJLZXknLCAnYmFja2Ryb3AnLCAnZm9jdXNDb25maXJtJywgJ2ZvY3VzQ2FuY2VsJywgJ2hlaWdodEF1dG8nLCAna2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSddO1xuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNWYWxpZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzVmFsaWRQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiBkZWZhdWx0UGFyYW1zLmhhc093blByb3BlcnR5KHBhcmFtTmFtZSk7XG59O1xuLyoqXG4gKiBJcyB2YWxpZCBwYXJhbWV0ZXIgZm9yIFN3YWwudXBkYXRlKCkgbWV0aG9kXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cblxudmFyIGlzVXBkYXRhYmxlUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNVcGRhdGFibGVQYXJhbWV0ZXIocGFyYW1OYW1lKSB7XG4gIHJldHVybiB1cGRhdGFibGVQYXJhbXMuaW5kZXhPZihwYXJhbU5hbWUpICE9PSAtMTtcbn07XG4vKipcbiAqIElzIGRlcHJlY2F0ZWQgcGFyYW1ldGVyXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW1OYW1lXG4gKi9cblxudmFyIGlzRGVwcmVjYXRlZFBhcmFtZXRlciA9IGZ1bmN0aW9uIGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIGRlcHJlY2F0ZWRQYXJhbXNbcGFyYW1OYW1lXTtcbn07XG5cbnZhciBjaGVja0lmUGFyYW1Jc1ZhbGlkID0gZnVuY3Rpb24gY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSkge1xuICBpZiAoIWlzVmFsaWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgd2FybihcIlVua25vd24gcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIlwiKSk7XG4gIH1cbn07XG5cbnZhciBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQgPSBmdW5jdGlvbiBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQocGFyYW0pIHtcbiAgaWYgKHRvYXN0SW5jb21wYXRpYmxlUGFyYW1zLmluZGV4T2YocGFyYW0pICE9PSAtMSkge1xuICAgIHdhcm4oXCJUaGUgcGFyYW1ldGVyIFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIiBpcyBpbmNvbXBhdGlibGUgd2l0aCB0b2FzdHNcIikpO1xuICB9XG59O1xuXG52YXIgY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkID0gZnVuY3Rpb24gY2hlY2tJZlBhcmFtSXNEZXByZWNhdGVkKHBhcmFtKSB7XG4gIGlmIChpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgd2FybkFib3V0RGVwcmVhdGlvbihwYXJhbSwgaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtKSk7XG4gIH1cbn07XG4vKipcbiAqIFNob3cgcmVsZXZhbnQgd2FybmluZ3MgZm9yIGdpdmVuIHBhcmFtc1xuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqL1xuXG5cbnZhciBzaG93V2FybmluZ3NGb3JQYXJhbXMgPSBmdW5jdGlvbiBzaG93V2FybmluZ3NGb3JQYXJhbXMocGFyYW1zKSB7XG4gIGZvciAodmFyIHBhcmFtIGluIHBhcmFtcykge1xuICAgIGNoZWNrSWZQYXJhbUlzVmFsaWQocGFyYW0pO1xuXG4gICAgaWYgKHBhcmFtcy50b2FzdCkge1xuICAgICAgY2hlY2tJZlRvYXN0UGFyYW1Jc1ZhbGlkKHBhcmFtKTtcbiAgICB9XG5cbiAgICBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQoKTtcbiAgfVxufTtcblxuXG5cbnZhciBzdGF0aWNNZXRob2RzID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGlzVmFsaWRQYXJhbWV0ZXI6IGlzVmFsaWRQYXJhbWV0ZXIsXG5cdGlzVXBkYXRhYmxlUGFyYW1ldGVyOiBpc1VwZGF0YWJsZVBhcmFtZXRlcixcblx0aXNEZXByZWNhdGVkUGFyYW1ldGVyOiBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIsXG5cdGFyZ3NUb1BhcmFtczogYXJnc1RvUGFyYW1zLFxuXHRpc1Zpc2libGU6IGlzVmlzaWJsZSQxLFxuXHRjbGlja0NvbmZpcm06IGNsaWNrQ29uZmlybSxcblx0Y2xpY2tDYW5jZWw6IGNsaWNrQ2FuY2VsLFxuXHRnZXRDb250YWluZXI6IGdldENvbnRhaW5lcixcblx0Z2V0UG9wdXA6IGdldFBvcHVwLFxuXHRnZXRUaXRsZTogZ2V0VGl0bGUsXG5cdGdldENvbnRlbnQ6IGdldENvbnRlbnQsXG5cdGdldEltYWdlOiBnZXRJbWFnZSxcblx0Z2V0SWNvbjogZ2V0SWNvbixcblx0Z2V0SWNvbnM6IGdldEljb25zLFxuXHRnZXRDbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24sXG5cdGdldEFjdGlvbnM6IGdldEFjdGlvbnMsXG5cdGdldENvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24sXG5cdGdldENhbmNlbEJ1dHRvbjogZ2V0Q2FuY2VsQnV0dG9uLFxuXHRnZXRIZWFkZXI6IGdldEhlYWRlcixcblx0Z2V0Rm9vdGVyOiBnZXRGb290ZXIsXG5cdGdldEZvY3VzYWJsZUVsZW1lbnRzOiBnZXRGb2N1c2FibGVFbGVtZW50cyxcblx0Z2V0VmFsaWRhdGlvbk1lc3NhZ2U6IGdldFZhbGlkYXRpb25NZXNzYWdlLFxuXHRpc0xvYWRpbmc6IGlzTG9hZGluZyxcblx0ZmlyZTogZmlyZSxcblx0bWl4aW46IG1peGluLFxuXHRxdWV1ZTogcXVldWUsXG5cdGdldFF1ZXVlU3RlcDogZ2V0UXVldWVTdGVwLFxuXHRpbnNlcnRRdWV1ZVN0ZXA6IGluc2VydFF1ZXVlU3RlcCxcblx0ZGVsZXRlUXVldWVTdGVwOiBkZWxldGVRdWV1ZVN0ZXAsXG5cdHNob3dMb2FkaW5nOiBzaG93TG9hZGluZyxcblx0ZW5hYmxlTG9hZGluZzogc2hvd0xvYWRpbmcsXG5cdGdldFRpbWVyTGVmdDogZ2V0VGltZXJMZWZ0LFxuXHRzdG9wVGltZXI6IHN0b3BUaW1lcixcblx0cmVzdW1lVGltZXI6IHJlc3VtZVRpbWVyLFxuXHR0b2dnbGVUaW1lcjogdG9nZ2xlVGltZXIsXG5cdGluY3JlYXNlVGltZXI6IGluY3JlYXNlVGltZXIsXG5cdGlzVGltZXJSdW5uaW5nOiBpc1RpbWVyUnVubmluZ1xufSk7XG5cbi8qKlxuICogRW5hYmxlcyBidXR0b25zIGFuZCBoaWRlIGxvYWRlci5cbiAqL1xuXG5mdW5jdGlvbiBoaWRlTG9hZGluZygpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcblxuICBpZiAoIWlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uKSB7XG4gICAgaGlkZShkb21DYWNoZS5jb25maXJtQnV0dG9uKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMuc2hvd0NhbmNlbEJ1dHRvbikge1xuICAgICAgaGlkZShkb21DYWNoZS5hY3Rpb25zKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVDbGFzcyhbZG9tQ2FjaGUucG9wdXAsIGRvbUNhY2hlLmFjdGlvbnNdLCBzd2FsQ2xhc3Nlcy5sb2FkaW5nKTtcbiAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWJ1c3knKTtcbiAgZG9tQ2FjaGUucG9wdXAucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbiAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5wdXQkMShpbnN0YW5jZSkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KGluc3RhbmNlIHx8IHRoaXMpO1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KGluc3RhbmNlIHx8IHRoaXMpO1xuICByZXR1cm4gZ2V0SW5wdXQoZG9tQ2FjaGUuY29udGVudCwgaW5uZXJQYXJhbXMuaW5wdXQpO1xufVxuXG52YXIgZml4U2Nyb2xsYmFyID0gZnVuY3Rpb24gZml4U2Nyb2xsYmFyKCkge1xuICAvLyBmb3IgcXVldWVzLCBkbyBub3QgZG8gdGhpcyBtb3JlIHRoYW4gb25jZVxuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH0gLy8gaWYgdGhlIGJvZHkgaGFzIG92ZXJmbG93XG5cblxuICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAvLyBhZGQgcGFkZGluZyBzbyB0aGUgY29udGVudCBkb2Vzbid0IHNoaWZ0IGFmdGVyIHJlbW92YWwgb2Ygc2Nyb2xsYmFyXG4gICAgc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5ib2R5KS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgKyBtZWFzdXJlU2Nyb2xsYmFyKCkgKyAncHgnO1xuICB9XG59O1xudmFyIHVuZG9TY3JvbGxiYXIgPSBmdW5jdGlvbiB1bmRvU2Nyb2xsYmFyKCkge1xuICBpZiAoc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgIT09IG51bGwpIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCA9IHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nICsgJ3B4JztcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IG51bGw7XG4gIH1cbn07XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciBpT1NmaXggPSBmdW5jdGlvbiBpT1NmaXgoKSB7XG4gIHZhciBpT1MgPSAvaVBhZHxpUGhvbmV8aVBvZC8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSAmJiAhd2luZG93Lk1TU3RyZWFtO1xuXG4gIGlmIChpT1MgJiYgIWhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSBvZmZzZXQgKiAtMSArICdweCc7XG4gICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KTtcbiAgICBsb2NrQm9keVNjcm9sbCgpO1xuICB9XG59O1xuXG52YXIgbG9ja0JvZHlTY3JvbGwgPSBmdW5jdGlvbiBsb2NrQm9keVNjcm9sbCgpIHtcbiAgLy8gIzEyNDZcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcHJldmVudFRvdWNoTW92ZTtcblxuICBjb250YWluZXIub250b3VjaHN0YXJ0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICBwcmV2ZW50VG91Y2hNb3ZlID0gZS50YXJnZXQgPT09IGNvbnRhaW5lciB8fCAhaXNTY3JvbGxhYmxlKGNvbnRhaW5lcikgJiYgZS50YXJnZXQudGFnTmFtZSAhPT0gJ0lOUFVUJyAvLyAjMTYwM1xuICAgIDtcbiAgfTtcblxuICBjb250YWluZXIub250b3VjaG1vdmUgPSBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChwcmV2ZW50VG91Y2hNb3ZlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgfTtcbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbnZhciB1bmRvSU9TZml4ID0gZnVuY3Rpb24gdW5kb0lPU2ZpeCgpIHtcbiAgaWYgKGhhc0NsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCkpIHtcbiAgICB2YXIgb2Zmc2V0ID0gcGFyc2VJbnQoZG9jdW1lbnQuYm9keS5zdHlsZS50b3AsIDEwKTtcbiAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUudG9wID0gJyc7XG4gICAgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AgPSBvZmZzZXQgKiAtMTtcbiAgfVxufTtcblxudmFyIGlzSUUxMSA9IGZ1bmN0aW9uIGlzSUUxMSgpIHtcbiAgcmV0dXJuICEhd2luZG93Lk1TSW5wdXRNZXRob2RDb250ZXh0ICYmICEhZG9jdW1lbnQuZG9jdW1lbnRNb2RlO1xufTsgLy8gRml4IElFMTEgY2VudGVyaW5nIHN3ZWV0YWxlcnQyL2lzc3Vlcy85MzNcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG52YXIgZml4VmVydGljYWxQb3NpdGlvbklFID0gZnVuY3Rpb24gZml4VmVydGljYWxQb3NpdGlvbklFKCkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIGNvbnRhaW5lci5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYWxpZ24taXRlbXMnKTtcblxuICBpZiAocG9wdXAub2Zmc2V0VG9wIDwgMCkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5hbGlnbkl0ZW1zID0gJ2ZsZXgtc3RhcnQnO1xuICB9XG59O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxuXG52YXIgSUVmaXggPSBmdW5jdGlvbiBJRWZpeCgpIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIGlzSUUxMSgpKSB7XG4gICAgZml4VmVydGljYWxQb3NpdGlvbklFKCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGZpeFZlcnRpY2FsUG9zaXRpb25JRSk7XG4gIH1cbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG52YXIgdW5kb0lFZml4ID0gZnVuY3Rpb24gdW5kb0lFZml4KCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJRTExKCkpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4VmVydGljYWxQb3NpdGlvbklFKTtcbiAgfVxufTtcblxuLy8gQWRkaW5nIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIHRvIGVsZW1lbnRzIG91dHNpZGUgb2YgdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgZW5zdXJlcyB0aGF0XG4vLyBlbGVtZW50cyBub3Qgd2l0aGluIHRoZSBhY3RpdmUgbW9kYWwgZGlhbG9nIHdpbGwgbm90IGJlIHN1cmZhY2VkIGlmIGEgdXNlciBvcGVucyBhIHNjcmVlblxuLy8gcmVhZGVy4oCZcyBsaXN0IG9mIGVsZW1lbnRzIChoZWFkaW5ncywgZm9ybSBjb250cm9scywgbGFuZG1hcmtzLCBldGMuKSBpbiB0aGUgZG9jdW1lbnQuXG5cbnZhciBzZXRBcmlhSGlkZGVuID0gZnVuY3Rpb24gc2V0QXJpYUhpZGRlbigpIHtcbiAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbCA9PT0gZ2V0Q29udGFpbmVyKCkgfHwgY29udGFpbnMoZWwsIGdldENvbnRhaW5lcigpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSk7XG4gICAgfVxuXG4gICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsICd0cnVlJyk7XG4gIH0pO1xufTtcbnZhciB1bnNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiB1bnNldEFyaWFIaWRkZW4oKSB7XG4gIHZhciBib2R5Q2hpbGRyZW4gPSB0b0FycmF5KGRvY3VtZW50LmJvZHkuY2hpbGRyZW4pO1xuICBib2R5Q2hpbGRyZW4uZm9yRWFjaChmdW5jdGlvbiAoZWwpIHtcbiAgICBpZiAoZWwuaGFzQXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJykpIHtcbiAgICAgIGVsLnNldEF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nLCBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSk7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWhpZGRlbicpO1xuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqIFRoaXMgbW9kdWxlIGNvbnRhaW50cyBgV2Vha01hcGBzIGZvciBlYWNoIGVmZmVjdGl2ZWx5LVwicHJpdmF0ZSAgcHJvcGVydHlcIiB0aGF0IGEgYFN3YWxgIGhhcy5cbiAqIEZvciBleGFtcGxlLCB0byBzZXQgdGhlIHByaXZhdGUgcHJvcGVydHkgXCJmb29cIiBvZiBgdGhpc2AgdG8gXCJiYXJcIiwgeW91IGNhbiBgcHJpdmF0ZVByb3BzLmZvby5zZXQodGhpcywgJ2JhcicpYFxuICogVGhpcyBpcyB0aGUgYXBwcm9hY2ggdGhhdCBCYWJlbCB3aWxsIHByb2JhYmx5IHRha2UgdG8gaW1wbGVtZW50IHByaXZhdGUgbWV0aG9kcy9maWVsZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJpdmF0ZS1tZXRob2RzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS9iYWJlbC9iYWJlbC9wdWxsLzc1NTVcbiAqIE9uY2Ugd2UgaGF2ZSB0aGUgY2hhbmdlcyBmcm9tIHRoYXQgUFIgaW4gQmFiZWwsIGFuZCBvdXIgY29yZSBjbGFzcyBmaXRzIHJlYXNvbmFibGUgaW4gKm9uZSBtb2R1bGUqXG4gKiAgIHRoZW4gd2UgY2FuIHVzZSB0aGF0IGxhbmd1YWdlIGZlYXR1cmUuXG4gKi9cbnZhciBwcml2YXRlTWV0aG9kcyA9IHtcbiAgc3dhbFByb21pc2VSZXNvbHZlOiBuZXcgV2Vha01hcCgpXG59O1xuXG4vKlxuICogSW5zdGFuY2UgbWV0aG9kIHRvIGNsb3NlIHN3ZWV0QWxlcnRcbiAqL1xuXG5mdW5jdGlvbiByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoY29udGFpbmVyLCBpc1RvYXN0LCBvbkFmdGVyQ2xvc2UpIHtcbiAgaWYgKGlzVG9hc3QpIHtcbiAgICB0cmlnZ2VyT25BZnRlckNsb3NlKG9uQWZ0ZXJDbG9zZSk7XG4gIH0gZWxzZSB7XG4gICAgcmVzdG9yZUFjdGl2ZUVsZW1lbnQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiB0cmlnZ2VyT25BZnRlckNsb3NlKG9uQWZ0ZXJDbG9zZSk7XG4gICAgfSk7XG4gICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgIGNhcHR1cmU6IGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmVcbiAgICB9KTtcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gIH0gLy8gVW5zZXQgZ2xvYmFsU3RhdGUgcHJvcHMgc28gR0Mgd2lsbCBkaXNwb3NlIGdsb2JhbFN0YXRlICgjMTU2OSlcblxuXG4gIGRlbGV0ZSBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlcjtcbiAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQ7XG5cbiAgaWYgKGNvbnRhaW5lci5wYXJlbnROb2RlKSB7XG4gICAgY29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgfVxuXG4gIHJlbW92ZUJvZHlDbGFzc2VzKCk7XG5cbiAgaWYgKGlzTW9kYWwoKSkge1xuICAgIHVuZG9TY3JvbGxiYXIoKTtcbiAgICB1bmRvSU9TZml4KCk7XG4gICAgdW5kb0lFZml4KCk7XG4gICAgdW5zZXRBcmlhSGlkZGVuKCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQm9keUNsYXNzZXMoKSB7XG4gIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXMuc2hvd24sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddLCBzd2FsQ2xhc3Nlc1snbm8tYmFja2Ryb3AnXSwgc3dhbENsYXNzZXNbJ3RvYXN0LXNob3duJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1jb2x1bW4nXV0pO1xufVxuXG5mdW5jdGlvbiBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKHBvcHVwLCBjb250YWluZXIsIGlzVG9hc3QsIG9uQWZ0ZXJDbG9zZSkge1xuICBpZiAoaGFzQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpKSB7XG4gICAgcmVtb3ZlUG9wdXBBbmRSZXNldFN0YXRlKGNvbnRhaW5lciwgaXNUb2FzdCwgb25BZnRlckNsb3NlKTtcbiAgfSAvLyBVbnNldCBXZWFrTWFwcyBzbyBHQyB3aWxsIGJlIGFibGUgdG8gZGlzcG9zZSB0aGVtICgjMTU2OSlcblxuXG4gIHVuc2V0V2Vha01hcHMocHJpdmF0ZVByb3BzKTtcbiAgdW5zZXRXZWFrTWFwcyhwcml2YXRlTWV0aG9kcyk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlKHJlc29sdmVWYWx1ZSkge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKCFwb3B1cCB8fCBoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICB2YXIgc3dhbFByb21pc2VSZXNvbHZlID0gcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLmdldCh0aGlzKTtcbiAgdmFyIG9uQ2xvc2UgPSBpbm5lclBhcmFtcy5vbkNsb3NlO1xuICB2YXIgb25BZnRlckNsb3NlID0gaW5uZXJQYXJhbXMub25BZnRlckNsb3NlO1xuICByZW1vdmVDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuc2hvdyk7XG4gIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5oaWRlKTsgLy8gSWYgYW5pbWF0aW9uIGlzIHN1cHBvcnRlZCwgYW5pbWF0ZVxuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiBoYXNDc3NBbmltYXRpb24ocG9wdXApKSB7XG4gICAgcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldCA9PT0gcG9wdXApIHtcbiAgICAgICAgc3dhbENsb3NlRXZlbnRGaW5pc2hlZChwb3B1cCwgY29udGFpbmVyLCBpc1RvYXN0KCksIG9uQWZ0ZXJDbG9zZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gT3RoZXJ3aXNlLCByZW1vdmUgaW1tZWRpYXRlbHlcbiAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoY29udGFpbmVyLCBpc1RvYXN0KCksIG9uQWZ0ZXJDbG9zZSk7XG4gIH1cblxuICBpZiAob25DbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25DbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9uQ2xvc2UocG9wdXApO1xuICB9IC8vIFJlc29sdmUgU3dhbCBwcm9taXNlXG5cblxuICBzd2FsUHJvbWlzZVJlc29sdmUocmVzb2x2ZVZhbHVlIHx8IHt9KTsgLy8gVW5zZXQgdGhpcy5wYXJhbXMgc28gR0Mgd2lsbCBkaXNwb3NlIGl0ICgjMTU2OSlcblxuICBkZWxldGUgdGhpcy5wYXJhbXM7XG59XG5cbnZhciB1bnNldFdlYWtNYXBzID0gZnVuY3Rpb24gdW5zZXRXZWFrTWFwcyhvYmopIHtcbiAgZm9yICh2YXIgaSBpbiBvYmopIHtcbiAgICBvYmpbaV0gPSBuZXcgV2Vha01hcCgpO1xuICB9XG59O1xuXG52YXIgdHJpZ2dlck9uQWZ0ZXJDbG9zZSA9IGZ1bmN0aW9uIHRyaWdnZXJPbkFmdGVyQ2xvc2Uob25BZnRlckNsb3NlKSB7XG4gIGlmIChvbkFmdGVyQ2xvc2UgIT09IG51bGwgJiYgdHlwZW9mIG9uQWZ0ZXJDbG9zZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgb25BZnRlckNsb3NlKCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHNldEJ1dHRvbnNEaXNhYmxlZChpbnN0YW5jZSwgYnV0dG9ucywgZGlzYWJsZWQpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldChpbnN0YW5jZSk7XG4gIGJ1dHRvbnMuZm9yRWFjaChmdW5jdGlvbiAoYnV0dG9uKSB7XG4gICAgZG9tQ2FjaGVbYnV0dG9uXS5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0SW5wdXREaXNhYmxlZChpbnB1dCwgZGlzYWJsZWQpIHtcbiAgaWYgKCFpbnB1dCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmIChpbnB1dC50eXBlID09PSAncmFkaW8nKSB7XG4gICAgdmFyIHJhZGlvc0NvbnRhaW5lciA9IGlucHV0LnBhcmVudE5vZGUucGFyZW50Tm9kZTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW9zQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJhZGlvcy5sZW5ndGg7IGkrKykge1xuICAgICAgcmFkaW9zW2ldLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlucHV0LmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlQnV0dG9ucygpIHtcbiAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoKSB7XG4gIHNldEJ1dHRvbnNEaXNhYmxlZCh0aGlzLCBbJ2NvbmZpcm1CdXR0b24nLCAnY2FuY2VsQnV0dG9uJ10sIHRydWUpO1xufSAvLyBAZGVwcmVjYXRlZFxuXG5mdW5jdGlvbiBlbmFibGVDb25maXJtQnV0dG9uKCkge1xuICB3YXJuQWJvdXREZXByZWF0aW9uKCdTd2FsLmRpc2FibGVDb25maXJtQnV0dG9uKCknLCBcIlN3YWwuZ2V0Q29uZmlybUJ1dHRvbigpLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKVwiKTtcbiAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbiddLCBmYWxzZSk7XG59IC8vIEBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGRpc2FibGVDb25maXJtQnV0dG9uKCkge1xuICB3YXJuQWJvdXREZXByZWF0aW9uKCdTd2FsLmVuYWJsZUNvbmZpcm1CdXR0b24oKScsIFwiU3dhbC5nZXRDb25maXJtQnV0dG9uKCkuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsICcnKVwiKTtcbiAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbiddLCB0cnVlKTtcbn1cbmZ1bmN0aW9uIGVuYWJsZUlucHV0KCkge1xuICByZXR1cm4gc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIGZhbHNlKTtcbn1cbmZ1bmN0aW9uIGRpc2FibGVJbnB1dCgpIHtcbiAgcmV0dXJuIHNldElucHV0RGlzYWJsZWQodGhpcy5nZXRJbnB1dCgpLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGVycm9yKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLmlubmVySFRNTCA9IGVycm9yO1xuICB2YXIgcG9wdXBDb21wdXRlZFN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZG9tQ2FjaGUucG9wdXApO1xuICBkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZS5zdHlsZS5tYXJnaW5MZWZ0ID0gXCItXCIuY29uY2F0KHBvcHVwQ29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLWxlZnQnKSk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCItXCIuY29uY2F0KHBvcHVwQ29tcHV0ZWRTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdwYWRkaW5nLXJpZ2h0JykpO1xuICBzaG93KGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgdmFyIGlucHV0ID0gdGhpcy5nZXRJbnB1dCgpO1xuXG4gIGlmIChpbnB1dCkge1xuICAgIGlucHV0LnNldEF0dHJpYnV0ZSgnYXJpYS1pbnZhbGlkJywgdHJ1ZSk7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZEJ5Jywgc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcbiAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICBhZGRDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gIH1cbn0gLy8gSGlkZSBibG9jayB3aXRoIHZhbGlkYXRpb24gbWVzc2FnZVxuXG5mdW5jdGlvbiByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG5cbiAgaWYgKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgaGlkZShkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSk7XG4gIH1cblxuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWludmFsaWQnKTtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknKTtcbiAgICByZW1vdmVDbGFzcyhpbnB1dCwgc3dhbENsYXNzZXMuaW5wdXRlcnJvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UHJvZ3Jlc3NTdGVwcyQxKCkge1xuICB3YXJuQWJvdXREZXByZWF0aW9uKCdTd2FsLmdldFByb2dyZXNzU3RlcHMoKScsIFwiY29uc3Qgc3dhbEluc3RhbmNlID0gU3dhbC5maXJlKHtwcm9ncmVzc1N0ZXBzOiBbJzEnLCAnMicsICczJ119KTsgY29uc3QgcHJvZ3Jlc3NTdGVwcyA9IHN3YWxJbnN0YW5jZS5wYXJhbXMucHJvZ3Jlc3NTdGVwc1wiKTtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcbiAgcmV0dXJuIGlubmVyUGFyYW1zLnByb2dyZXNzU3RlcHM7XG59XG5mdW5jdGlvbiBzZXRQcm9ncmVzc1N0ZXBzKHByb2dyZXNzU3RlcHMpIHtcbiAgd2FybkFib3V0RGVwcmVhdGlvbignU3dhbC5zZXRQcm9ncmVzc1N0ZXBzKCknLCAnU3dhbC51cGRhdGUoKScpO1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gIHZhciB1cGRhdGVkUGFyYW1zID0gX2V4dGVuZHMoe30sIGlubmVyUGFyYW1zLCB7XG4gICAgcHJvZ3Jlc3NTdGVwczogcHJvZ3Jlc3NTdGVwc1xuICB9KTtcblxuICByZW5kZXJQcm9ncmVzc1N0ZXBzKHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xufVxuZnVuY3Rpb24gc2hvd1Byb2dyZXNzU3RlcHMoKSB7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQodGhpcyk7XG4gIHNob3coZG9tQ2FjaGUucHJvZ3Jlc3NTdGVwcyk7XG59XG5mdW5jdGlvbiBoaWRlUHJvZ3Jlc3NTdGVwcygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgaGlkZShkb21DYWNoZS5wcm9ncmVzc1N0ZXBzKTtcbn1cblxudmFyIFRpbWVyID1cbi8qI19fUFVSRV9fKi9cbmZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGltZXIoY2FsbGJhY2ssIGRlbGF5KSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFRpbWVyKTtcblxuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5O1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIHRoaXMuc3RhcnQoKTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhUaW1lciwgW3tcbiAgICBrZXk6IFwic3RhcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgICBpZiAoIXRoaXMucnVubmluZykge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB0aGlzLmlkID0gc2V0VGltZW91dCh0aGlzLmNhbGxiYWNrLCB0aGlzLnJlbWFpbmluZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwic3RvcFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuaWQpO1xuICAgICAgICB0aGlzLnJlbWFpbmluZyAtPSBuZXcgRGF0ZSgpIC0gdGhpcy5zdGFydGVkO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImluY3JlYXNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGluY3JlYXNlKG4pIHtcbiAgICAgIHZhciBydW5uaW5nID0gdGhpcy5ydW5uaW5nO1xuXG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICB0aGlzLnN0b3AoKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5yZW1haW5pbmcgKz0gbjtcblxuICAgICAgaWYgKHJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdldFRpbWVyTGVmdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaXNSdW5uaW5nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzUnVubmluZygpIHtcbiAgICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRpbWVyO1xufSgpO1xuXG52YXIgZGVmYXVsdElucHV0VmFsaWRhdG9ycyA9IHtcbiAgZW1haWw6IGZ1bmN0aW9uIGVtYWlsKHN0cmluZywgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICByZXR1cm4gL15bYS16QS1aMC05LitfLV0rQFthLXpBLVowLTkuLV0rXFwuW2EtekEtWjAtOS1dezIsMjR9JC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgPyB2YWxpZGF0aW9uTWVzc2FnZSA6ICdJbnZhbGlkIGVtYWlsIGFkZHJlc3MnKTtcbiAgfSxcbiAgdXJsOiBmdW5jdGlvbiB1cmwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIC8vIHRha2VuIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM4MDk0MzUgd2l0aCBhIHNtYWxsIGNoYW5nZSBmcm9tICMxMzA2XG4gICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLyh3d3dcXC4pP1stYS16QS1aMC05QDolLl8rfiM9XXsyLDI1Nn1cXC5bYS16XXsyLDYzfVxcYihbLWEtekEtWjAtOUA6JV8rLn4jPyYvPV0qKSQvLnRlc3Qoc3RyaW5nKSA/IFByb21pc2UucmVzb2x2ZSgpIDogUHJvbWlzZS5yZXNvbHZlKHZhbGlkYXRpb25NZXNzYWdlID8gdmFsaWRhdGlvbk1lc3NhZ2UgOiAnSW52YWxpZCBVUkwnKTtcbiAgfVxufTtcblxuLyoqXG4gKiBTZXQgdHlwZSwgdGV4dCBhbmQgYWN0aW9ucyBvbiBwb3B1cFxuICpcbiAqIEBwYXJhbSBwYXJhbXNcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5cbmZ1bmN0aW9uIHNldFBhcmFtZXRlcnMocGFyYW1zKSB7XG4gIC8vIFVzZSBkZWZhdWx0IGBpbnB1dFZhbGlkYXRvcmAgZm9yIHN1cHBvcnRlZCBpbnB1dCB0eXBlcyBpZiBub3QgcHJvdmlkZWRcbiAgaWYgKCFwYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICBPYmplY3Qua2V5cyhkZWZhdWx0SW5wdXRWYWxpZGF0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIGlmIChwYXJhbXMuaW5wdXQgPT09IGtleSkge1xuICAgICAgICBwYXJhbXMuaW5wdXRWYWxpZGF0b3IgPSBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzW2tleV07XG4gICAgICB9XG4gICAgfSk7XG4gIH0gLy8gc2hvd0xvYWRlck9uQ29uZmlybSAmJiBwcmVDb25maXJtXG5cblxuICBpZiAocGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0gJiYgIXBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgd2Fybignc2hvd0xvYWRlck9uQ29uZmlybSBpcyBzZXQgdG8gdHJ1ZSwgYnV0IHByZUNvbmZpcm0gaXMgbm90IGRlZmluZWQuXFxuJyArICdzaG93TG9hZGVyT25Db25maXJtIHNob3VsZCBiZSB1c2VkIHRvZ2V0aGVyIHdpdGggcHJlQ29uZmlybSwgc2VlIHVzYWdlIGV4YW1wbGU6XFxuJyArICdodHRwczovL3N3ZWV0YWxlcnQyLmdpdGh1Yi5pby8jYWpheC1yZXF1ZXN0Jyk7XG4gIH0gLy8gcGFyYW1zLmFuaW1hdGlvbiB3aWxsIGJlIGFjdHVhbGx5IHVzZWQgaW4gcmVuZGVyUG9wdXAuanNcbiAgLy8gYnV0IGluIGNhc2Ugd2hlbiBwYXJhbXMuYW5pbWF0aW9uIGlzIGEgZnVuY3Rpb24sIHdlIG5lZWQgdG8gY2FsbCB0aGF0IGZ1bmN0aW9uXG4gIC8vIGJlZm9yZSBwb3B1cCAocmUpaW5pdGlhbGl6YXRpb24sIHNvIGl0J2xsIGJlIHBvc3NpYmxlIHRvIGNoZWNrIFN3YWwuaXNWaXNpYmxlKClcbiAgLy8gaW5zaWRlIHRoZSBwYXJhbXMuYW5pbWF0aW9uIGZ1bmN0aW9uXG5cblxuICBwYXJhbXMuYW5pbWF0aW9uID0gY2FsbElmRnVuY3Rpb24ocGFyYW1zLmFuaW1hdGlvbik7IC8vIERldGVybWluZSBpZiB0aGUgY3VzdG9tIHRhcmdldCBlbGVtZW50IGlzIHZhbGlkXG5cbiAgaWYgKCFwYXJhbXMudGFyZ2V0IHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyAmJiAhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSB8fCB0eXBlb2YgcGFyYW1zLnRhcmdldCAhPT0gJ3N0cmluZycgJiYgIXBhcmFtcy50YXJnZXQuYXBwZW5kQ2hpbGQpIHtcbiAgICB3YXJuKCdUYXJnZXQgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImJvZHlcIicpO1xuICAgIHBhcmFtcy50YXJnZXQgPSAnYm9keSc7XG4gIH0gLy8gUmVwbGFjZSBuZXdsaW5lcyB3aXRoIDxicj4gaW4gdGl0bGVcblxuXG4gIGlmICh0eXBlb2YgcGFyYW1zLnRpdGxlID09PSAnc3RyaW5nJykge1xuICAgIHBhcmFtcy50aXRsZSA9IHBhcmFtcy50aXRsZS5zcGxpdCgnXFxuJykuam9pbignPGJyIC8+Jyk7XG4gIH1cblxuICB2YXIgb2xkUG9wdXAgPSBnZXRQb3B1cCgpO1xuICB2YXIgdGFyZ2V0RWxlbWVudCA9IHR5cGVvZiBwYXJhbXMudGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyYW1zLnRhcmdldCkgOiBwYXJhbXMudGFyZ2V0O1xuXG4gIGlmICghb2xkUG9wdXAgfHwgLy8gSWYgdGhlIG1vZGVsIHRhcmdldCBoYXMgY2hhbmdlZCwgcmVmcmVzaCB0aGUgcG9wdXBcbiAgb2xkUG9wdXAgJiYgdGFyZ2V0RWxlbWVudCAmJiBvbGRQb3B1cC5wYXJlbnROb2RlICE9PSB0YXJnZXRFbGVtZW50LnBhcmVudE5vZGUpIHtcbiAgICBpbml0KHBhcmFtcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZChwb3B1cCwgY29udGFpbmVyKSB7XG4gIHBvcHVwLnJlbW92ZUV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQpO1xuICBjb250YWluZXIuc3R5bGUub3ZlcmZsb3dZID0gJ2F1dG8nO1xufVxuLyoqXG4gKiBPcGVuIHBvcHVwLCBhZGQgbmVjZXNzYXJ5IGNsYXNzZXMgYW5kIHN0eWxlcywgZml4IHNjcm9sbGJhclxuICpcbiAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtc1xuICovXG5cblxudmFyIG9wZW5Qb3B1cCA9IGZ1bmN0aW9uIG9wZW5Qb3B1cChwYXJhbXMpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuXG4gIGlmIChwYXJhbXMub25CZWZvcmVPcGVuICE9PSBudWxsICYmIHR5cGVvZiBwYXJhbXMub25CZWZvcmVPcGVuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcGFyYW1zLm9uQmVmb3JlT3Blbihwb3B1cCk7XG4gIH1cblxuICBpZiAocGFyYW1zLmFuaW1hdGlvbikge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zaG93KTtcbiAgICBhZGRDbGFzcyhjb250YWluZXIsIHN3YWxDbGFzc2VzLmZhZGUpO1xuICB9XG5cbiAgc2hvdyhwb3B1cCk7IC8vIHNjcm9sbGluZyBpcyAnaGlkZGVuJyB1bnRpbCBhbmltYXRpb24gaXMgZG9uZSwgYWZ0ZXIgdGhhdCAnYXV0bydcblxuICBpZiAoYW5pbWF0aW9uRW5kRXZlbnQgJiYgaGFzQ3NzQW5pbWF0aW9uKHBvcHVwKSkge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkLmJpbmQobnVsbCwgcG9wdXAsIGNvbnRhaW5lcikpO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG4gIH1cblxuICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5LCBjb250YWluZXJdLCBzd2FsQ2xhc3Nlcy5zaG93bik7XG5cbiAgaWYgKHBhcmFtcy5oZWlnaHRBdXRvICYmIHBhcmFtcy5iYWNrZHJvcCAmJiAhcGFyYW1zLnRvYXN0KSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWydoZWlnaHQtYXV0byddKTtcbiAgfVxuXG4gIGlmIChpc01vZGFsKCkpIHtcbiAgICBpZiAocGFyYW1zLnNjcm9sbGJhclBhZGRpbmcpIHtcbiAgICAgIGZpeFNjcm9sbGJhcigpO1xuICAgIH1cblxuICAgIGlPU2ZpeCgpO1xuICAgIElFZml4KCk7XG4gICAgc2V0QXJpYUhpZGRlbigpOyAvLyBzd2VldGFsZXJ0Mi9pc3N1ZXMvMTI0N1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBjb250YWluZXIuc2Nyb2xsVG9wID0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIGlmICghaXNUb2FzdCgpICYmICFnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQpIHtcbiAgICBnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB9XG5cbiAgaWYgKHBhcmFtcy5vbk9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbk9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHBhcmFtcy5vbk9wZW4ocG9wdXApO1xuICAgIH0pO1xuICB9XG59O1xuXG52YXIgX3RoaXMgPSB1bmRlZmluZWQ7XG5cbnZhciBoYW5kbGVJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBoYW5kbGVJbnB1dE9wdGlvbnMoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcblxuICB2YXIgcHJvY2Vzc0lucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gICAgcmV0dXJuIHBvcHVsYXRlSW5wdXRPcHRpb25zW3BhcmFtcy5pbnB1dF0oY29udGVudCwgZm9ybWF0SW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyksIHBhcmFtcyk7XG4gIH07XG5cbiAgaWYgKGlzUHJvbWlzZShwYXJhbXMuaW5wdXRPcHRpb25zKSkge1xuICAgIHNob3dMb2FkaW5nKCk7XG4gICAgcGFyYW1zLmlucHV0T3B0aW9ucy50aGVuKGZ1bmN0aW9uIChpbnB1dE9wdGlvbnMpIHtcbiAgICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gICAgICBwcm9jZXNzSW5wdXRPcHRpb25zKGlucHV0T3B0aW9ucyk7XG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbXMuaW5wdXRPcHRpb25zKSA9PT0gJ29iamVjdCcpIHtcbiAgICBwcm9jZXNzSW5wdXRPcHRpb25zKHBhcmFtcy5pbnB1dE9wdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0T3B0aW9ucyEgRXhwZWN0ZWQgb2JqZWN0LCBNYXAgb3IgUHJvbWlzZSwgZ290IFwiLmNvbmNhdChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSk7XG4gIH1cbn07XG52YXIgaGFuZGxlSW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0VmFsdWUoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgaW5wdXQgPSBpbnN0YW5jZS5nZXRJbnB1dCgpO1xuICBoaWRlKGlucHV0KTtcbiAgcGFyYW1zLmlucHV0VmFsdWUudGhlbihmdW5jdGlvbiAoaW5wdXRWYWx1ZSkge1xuICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0ID09PSAnbnVtYmVyJyA/IHBhcnNlRmxvYXQoaW5wdXRWYWx1ZSkgfHwgMCA6IGlucHV0VmFsdWUgKyAnJztcbiAgICBzaG93KGlucHV0KTtcbiAgICBpbnB1dC5mb2N1cygpO1xuICAgIGluc3RhbmNlLmhpZGVMb2FkaW5nKCk7XG4gIH0pW1wiY2F0Y2hcIl0oZnVuY3Rpb24gKGVycikge1xuICAgIGVycm9yKCdFcnJvciBpbiBpbnB1dFZhbHVlIHByb21pc2U6ICcgKyBlcnIpO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgc2hvdyhpbnB1dCk7XG4gICAgaW5wdXQuZm9jdXMoKTtcblxuICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gIH0pO1xufTtcbnZhciBwb3B1bGF0ZUlucHV0T3B0aW9ucyA9IHtcbiAgc2VsZWN0OiBmdW5jdGlvbiBzZWxlY3QoY29udGVudCwgaW5wdXRPcHRpb25zLCBwYXJhbXMpIHtcbiAgICB2YXIgc2VsZWN0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLnNlbGVjdCk7XG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICB2YXIgb3B0aW9uVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgIHZhciBvcHRpb25MYWJlbCA9IGlucHV0T3B0aW9uWzFdO1xuICAgICAgdmFyIG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVmFsdWU7XG4gICAgICBvcHRpb24uaW5uZXJIVE1MID0gb3B0aW9uTGFiZWw7XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSBvcHRpb25WYWx1ZS50b1N0cmluZygpKSB7XG4gICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIHNlbGVjdC5mb2N1cygpO1xuICB9LFxuICByYWRpbzogZnVuY3Rpb24gcmFkaW8oY29udGVudCwgaW5wdXRPcHRpb25zLCBwYXJhbXMpIHtcbiAgICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMucmFkaW8pO1xuICAgIGlucHV0T3B0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChpbnB1dE9wdGlvbikge1xuICAgICAgdmFyIHJhZGlvVmFsdWUgPSBpbnB1dE9wdGlvblswXTtcbiAgICAgIHZhciByYWRpb0xhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICB2YXIgcmFkaW9JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICB2YXIgcmFkaW9MYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgcmFkaW9JbnB1dC50eXBlID0gJ3JhZGlvJztcbiAgICAgIHJhZGlvSW5wdXQubmFtZSA9IHN3YWxDbGFzc2VzLnJhZGlvO1xuICAgICAgcmFkaW9JbnB1dC52YWx1ZSA9IHJhZGlvVmFsdWU7XG5cbiAgICAgIGlmIChwYXJhbXMuaW5wdXRWYWx1ZS50b1N0cmluZygpID09PSByYWRpb1ZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgcmFkaW9JbnB1dC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgbGFiZWwuaW5uZXJIVE1MID0gcmFkaW9MYWJlbDtcbiAgICAgIGxhYmVsLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmxhYmVsO1xuICAgICAgcmFkaW9MYWJlbEVsZW1lbnQuYXBwZW5kQ2hpbGQocmFkaW9JbnB1dCk7XG4gICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICByYWRpby5hcHBlbmRDaGlsZChyYWRpb0xhYmVsRWxlbWVudCk7XG4gICAgfSk7XG4gICAgdmFyIHJhZGlvcyA9IHJhZGlvLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Jyk7XG5cbiAgICBpZiAocmFkaW9zLmxlbmd0aCkge1xuICAgICAgcmFkaW9zWzBdLmZvY3VzKCk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBDb252ZXJ0cyBgaW5wdXRPcHRpb25zYCBpbnRvIGFuIGFycmF5IG9mIGBbdmFsdWUsIGxhYmVsXWBzXG4gICAqIEBwYXJhbSBpbnB1dE9wdGlvbnNcbiAgICovXG5cbn07XG5cbnZhciBmb3JtYXRJbnB1dE9wdGlvbnMgPSBmdW5jdGlvbiBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZiAodHlwZW9mIE1hcCAhPT0gJ3VuZGVmaW5lZCcgJiYgaW5wdXRPcHRpb25zIGluc3RhbmNlb2YgTWFwKSB7XG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFtrZXksIHZhbHVlXSk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgT2JqZWN0LmtleXMoaW5wdXRPcHRpb25zKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKFtrZXksIGlucHV0T3B0aW9uc1trZXldXSk7XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcblxuZnVuY3Rpb24gX21haW4odXNlclBhcmFtcykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gIHNob3dXYXJuaW5nc0ZvclBhcmFtcyh1c2VyUGFyYW1zKTtcblxuICB2YXIgaW5uZXJQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgZGVmYXVsdFBhcmFtcywgdXNlclBhcmFtcyk7XG5cbiAgc2V0UGFyYW1ldGVycyhpbm5lclBhcmFtcyk7XG4gIE9iamVjdC5mcmVlemUoaW5uZXJQYXJhbXMpOyAvLyBjbGVhciB0aGUgcHJldmlvdXMgdGltZXJcblxuICBpZiAoZ2xvYmFsU3RhdGUudGltZW91dCkge1xuICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xuICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICB9IC8vIGNsZWFyIHRoZSByZXN0b3JlIGZvY3VzIHRpbWVvdXRcblxuXG4gIGNsZWFyVGltZW91dChnbG9iYWxTdGF0ZS5yZXN0b3JlRm9jdXNUaW1lb3V0KTtcbiAgdmFyIGRvbUNhY2hlID0ge1xuICAgIHBvcHVwOiBnZXRQb3B1cCgpLFxuICAgIGNvbnRhaW5lcjogZ2V0Q29udGFpbmVyKCksXG4gICAgY29udGVudDogZ2V0Q29udGVudCgpLFxuICAgIGFjdGlvbnM6IGdldEFjdGlvbnMoKSxcbiAgICBjb25maXJtQnV0dG9uOiBnZXRDb25maXJtQnV0dG9uKCksXG4gICAgY2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24oKSxcbiAgICBjbG9zZUJ1dHRvbjogZ2V0Q2xvc2VCdXR0b24oKSxcbiAgICB2YWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoKSxcbiAgICBwcm9ncmVzc1N0ZXBzOiBnZXRQcm9ncmVzc1N0ZXBzKClcbiAgfTtcbiAgcHJpdmF0ZVByb3BzLmRvbUNhY2hlLnNldCh0aGlzLCBkb21DYWNoZSk7XG4gIHJlbmRlcih0aGlzLCBpbm5lclBhcmFtcyk7XG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgaW5uZXJQYXJhbXMpO1xuICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAvLyBmdW5jdGlvbnMgdG8gaGFuZGxlIGFsbCBjbG9zaW5ncy9kaXNtaXNzYWxzXG4gICAgdmFyIHN1Y2NlZWRXaXRoID0gZnVuY3Rpb24gc3VjY2VlZFdpdGgodmFsdWUpIHtcbiAgICAgIF90aGlzLmNsb3NlUG9wdXAoe1xuICAgICAgICB2YWx1ZTogdmFsdWVcbiAgICAgIH0pO1xuICAgIH07XG5cbiAgICB2YXIgZGlzbWlzc1dpdGggPSBmdW5jdGlvbiBkaXNtaXNzV2l0aChkaXNtaXNzKSB7XG4gICAgICBfdGhpcy5jbG9zZVBvcHVwKHtcbiAgICAgICAgZGlzbWlzczogZGlzbWlzc1xuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHByaXZhdGVNZXRob2RzLnN3YWxQcm9taXNlUmVzb2x2ZS5zZXQoX3RoaXMsIHJlc29sdmUpOyAvLyBDbG9zZSBvbiB0aW1lclxuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRpbWVyKSB7XG4gICAgICBnbG9iYWxTdGF0ZS50aW1lb3V0ID0gbmV3IFRpbWVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZGlzbWlzc1dpdGgoJ3RpbWVyJyk7XG4gICAgICAgIGRlbGV0ZSBnbG9iYWxTdGF0ZS50aW1lb3V0O1xuICAgICAgfSwgaW5uZXJQYXJhbXMudGltZXIpO1xuICAgIH0gLy8gR2V0IHRoZSB2YWx1ZSBvZiB0aGUgcG9wdXAgaW5wdXRcblxuXG4gICAgdmFyIGdldElucHV0VmFsdWUgPSBmdW5jdGlvbiBnZXRJbnB1dFZhbHVlKCkge1xuICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXQoKTtcblxuICAgICAgaWYgKCFpbnB1dCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyAxIDogMDtcblxuICAgICAgICBjYXNlICdyYWRpbyc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmNoZWNrZWQgPyBpbnB1dC52YWx1ZSA6IG51bGw7XG5cbiAgICAgICAgY2FzZSAnZmlsZSc6XG4gICAgICAgICAgcmV0dXJuIGlucHV0LmZpbGVzLmxlbmd0aCA/IGlucHV0LmZpbGVzWzBdIDogbnVsbDtcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBpbm5lclBhcmFtcy5pbnB1dEF1dG9UcmltID8gaW5wdXQudmFsdWUudHJpbSgpIDogaW5wdXQudmFsdWU7XG4gICAgICB9XG4gICAgfTsgLy8gaW5wdXQgYXV0b2ZvY3VzXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IF90aGlzLmdldElucHV0KCk7XG5cbiAgICAgICAgaWYgKGlucHV0KSB7XG4gICAgICAgICAgZm9jdXNJbnB1dChpbnB1dCk7XG4gICAgICAgIH1cbiAgICAgIH0sIDApO1xuICAgIH1cblxuICAgIHZhciBjb25maXJtID0gZnVuY3Rpb24gY29uZmlybSh2YWx1ZSkge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dMb2FkZXJPbkNvbmZpcm0pIHtcbiAgICAgICAgY29uc3RydWN0b3Iuc2hvd0xvYWRpbmcoKTsgLy8gVE9ETzogbWFrZSBzaG93TG9hZGluZyBhbiAqaW5zdGFuY2UqIG1ldGhvZFxuICAgICAgfVxuXG4gICAgICBpZiAoaW5uZXJQYXJhbXMucHJlQ29uZmlybSkge1xuICAgICAgICBfdGhpcy5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cbiAgICAgICAgdmFyIHByZUNvbmZpcm1Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLnByZUNvbmZpcm0odmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByZUNvbmZpcm1Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHByZUNvbmZpcm1WYWx1ZSkge1xuICAgICAgICAgIGlmIChpc1Zpc2libGUoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHx8IHByZUNvbmZpcm1WYWx1ZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN1Y2NlZWRXaXRoKHR5cGVvZiBwcmVDb25maXJtVmFsdWUgPT09ICd1bmRlZmluZWQnID8gdmFsdWUgOiBwcmVDb25maXJtVmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdWNjZWVkV2l0aCh2YWx1ZSk7XG4gICAgICB9XG4gICAgfTsgLy8gTW91c2UgaW50ZXJhY3Rpb25zXG5cblxuICAgIHZhciBvbkJ1dHRvbkV2ZW50ID0gZnVuY3Rpb24gb25CdXR0b25FdmVudChlKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICB2YXIgY29uZmlybUJ1dHRvbiA9IGRvbUNhY2hlLmNvbmZpcm1CdXR0b24sXG4gICAgICAgICAgY2FuY2VsQnV0dG9uID0gZG9tQ2FjaGUuY2FuY2VsQnV0dG9uO1xuICAgICAgdmFyIHRhcmdldGVkQ29uZmlybSA9IGNvbmZpcm1CdXR0b24gJiYgKGNvbmZpcm1CdXR0b24gPT09IHRhcmdldCB8fCBjb25maXJtQnV0dG9uLmNvbnRhaW5zKHRhcmdldCkpO1xuICAgICAgdmFyIHRhcmdldGVkQ2FuY2VsID0gY2FuY2VsQnV0dG9uICYmIChjYW5jZWxCdXR0b24gPT09IHRhcmdldCB8fCBjYW5jZWxCdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG5cbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgIGNhc2UgJ2NsaWNrJzpcbiAgICAgICAgICAvLyBDbGlja2VkICdjb25maXJtJ1xuICAgICAgICAgIGlmICh0YXJnZXRlZENvbmZpcm0pIHtcbiAgICAgICAgICAgIF90aGlzLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICAgICAgICB2YXIgaW5wdXRWYWx1ZSA9IGdldElucHV0VmFsdWUoKTtcblxuICAgICAgICAgICAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5kaXNhYmxlSW5wdXQoKTtcblxuICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uUHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0VmFsaWRhdG9yKGlucHV0VmFsdWUsIGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB2YWxpZGF0aW9uUHJvbWlzZS50aGVuKGZ1bmN0aW9uICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIV90aGlzLmdldElucHV0KCkuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW5hYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICAgICAgX3RoaXMuc2hvd1ZhbGlkYXRpb25NZXNzYWdlKGlubmVyUGFyYW1zLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25maXJtKGlucHV0VmFsdWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25maXJtKHRydWUpO1xuICAgICAgICAgICAgfSAvLyBDbGlja2VkICdjYW5jZWwnXG5cbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldGVkQ2FuY2VsKSB7XG4gICAgICAgICAgICBfdGhpcy5kaXNhYmxlQnV0dG9ucygpO1xuXG4gICAgICAgICAgICBkaXNtaXNzV2l0aChjb25zdHJ1Y3Rvci5EaXNtaXNzUmVhc29uLmNhbmNlbCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGJ1dHRvbnMgPSBkb21DYWNoZS5wb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24nKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgYnV0dG9uc1tpXS5vbmNsaWNrID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZW92ZXIgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3V0ID0gb25CdXR0b25FdmVudDtcbiAgICAgIGJ1dHRvbnNbaV0ub25tb3VzZWRvd24gPSBvbkJ1dHRvbkV2ZW50O1xuICAgIH0gLy8gQ2xvc2luZyBwb3B1cCBieSBjbG9zZSBidXR0b25cblxuXG4gICAgZG9tQ2FjaGUuY2xvc2VCdXR0b24ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgIH07XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIC8vIENsb3NpbmcgcG9wdXAgYnkgaW50ZXJuYWwgY2xpY2tcbiAgICAgIGRvbUNhY2hlLnBvcHVwLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpbm5lclBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDbG9zZUJ1dHRvbiB8fCBpbm5lclBhcmFtcy5pbnB1dCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2xvc2UpO1xuICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlOyAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgcG9wdXAgYnV0IG1vdXNldXAgb24gdGhlIGNvbnRhaW5lclxuICAgICAgLy8gVGhpcyBjYW4gaGFwcGVuIHdoZW4gdGhlIHVzZXIgZHJhZ3MgYSBzbGlkZXJcblxuICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZWRvd24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNldXAgPSB1bmRlZmluZWQ7IC8vIFdlIG9ubHkgY2hlY2sgaWYgdGhlIG1vdXNldXAgdGFyZ2V0IGlzIHRoZSBjb250YWluZXIgYmVjYXVzZSB1c3VhbGx5IGl0IGRvZXNuJ3RcbiAgICAgICAgICAvLyBoYXZlIGFueSBvdGhlciBkaXJlY3QgY2hpbGRyZW4gYXNpZGUgb2YgdGhlIHBvcHVwXG5cbiAgICAgICAgICBpZiAoZS50YXJnZXQgPT09IGRvbUNhY2hlLmNvbnRhaW5lcikge1xuICAgICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9OyAvLyBJZ25vcmUgY2xpY2sgZXZlbnRzIHRoYXQgaGFkIG1vdXNlZG93biBvbiB0aGUgY29udGFpbmVyIGJ1dCBtb3VzZXVwIG9uIHRoZSBwb3B1cFxuXG5cbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUucG9wdXAub25tb3VzZXVwID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSB1bmRlZmluZWQ7IC8vIFdlIGFsc28gbmVlZCB0byBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgYSBjaGlsZCBvZiB0aGUgcG9wdXBcblxuICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUucG9wdXAgfHwgZG9tQ2FjaGUucG9wdXAuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07XG5cbiAgICAgIGRvbUNhY2hlLmNvbnRhaW5lci5vbmNsaWNrID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKGlnbm9yZU91dHNpZGVDbGljaykge1xuICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93T3V0c2lkZUNsaWNrKSkge1xuICAgICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uYmFja2Ryb3ApO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0gLy8gUmV2ZXJzZSBidXR0b25zIChDb25maXJtIG9uIHRoZSByaWdodCBzaWRlKVxuXG5cbiAgICBpZiAoaW5uZXJQYXJhbXMucmV2ZXJzZUJ1dHRvbnMpIHtcbiAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24ucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLCBkb21DYWNoZS5jb25maXJtQnV0dG9uKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb21DYWNoZS5jb25maXJtQnV0dG9uLCBkb21DYWNoZS5jYW5jZWxCdXR0b24pO1xuICAgIH0gLy8gRm9jdXMgaGFuZGxpbmdcblxuXG4gICAgdmFyIHNldEZvY3VzID0gZnVuY3Rpb24gc2V0Rm9jdXMoaW5kZXgsIGluY3JlbWVudCkge1xuICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwpOyAvLyBzZWFyY2ggZm9yIHZpc2libGUgZWxlbWVudHMgYW5kIHNlbGVjdCB0aGUgbmV4dCBwb3NzaWJsZSBtYXRjaFxuXG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGluZGV4ID0gaW5kZXggKyBpbmNyZW1lbnQ7IC8vIHJvbGxvdmVyIHRvIGZpcnN0IGl0ZW1cblxuICAgICAgICBpZiAoaW5kZXggPT09IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgIGluZGV4ID0gMDsgLy8gZ28gdG8gbGFzdCBpdGVtXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XS5mb2N1cygpO1xuICAgICAgfSAvLyBubyB2aXNpYmxlIGZvY3VzYWJsZSBlbGVtZW50cywgZm9jdXMgdGhlIHBvcHVwXG5cblxuICAgICAgZG9tQ2FjaGUucG9wdXAuZm9jdXMoKTtcbiAgICB9O1xuXG4gICAgdmFyIGtleWRvd25IYW5kbGVyID0gZnVuY3Rpb24ga2V5ZG93bkhhbmRsZXIoZSwgaW5uZXJQYXJhbXMpIHtcbiAgICAgIGlmIChpbm5lclBhcmFtcy5zdG9wS2V5ZG93blByb3BhZ2F0aW9uKSB7XG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBhcnJvd0tleXMgPSBbJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0JywgJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0xlZnQnLCAnUmlnaHQnLCAnVXAnLCAnRG93bicgLy8gSUUxMVxuICAgICAgXTtcblxuICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLmlzQ29tcG9zaW5nKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCAmJiBfdGhpcy5nZXRJbnB1dCgpICYmIGUudGFyZ2V0Lm91dGVySFRNTCA9PT0gX3RoaXMuZ2V0SW5wdXQoKS5vdXRlckhUTUwpIHtcbiAgICAgICAgICBpZiAoWyd0ZXh0YXJlYScsICdmaWxlJ10uaW5kZXhPZihpbm5lclBhcmFtcy5pbnB1dCkgIT09IC0xKSB7XG4gICAgICAgICAgICByZXR1cm47IC8vIGRvIG5vdCBzdWJtaXRcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdHJ1Y3Rvci5jbGlja0NvbmZpcm0oKTtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0gLy8gVEFCXG5cbiAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdUYWInKSB7XG4gICAgICAgIHZhciB0YXJnZXRFbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgICAgIHZhciBmb2N1c2FibGVFbGVtZW50cyA9IGdldEZvY3VzYWJsZUVsZW1lbnRzKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsKTtcbiAgICAgICAgdmFyIGJ0bkluZGV4ID0gLTE7XG5cbiAgICAgICAgZm9yICh2YXIgX2kyID0gMDsgX2kyIDwgZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgICAgIGlmICh0YXJnZXRFbGVtZW50ID09PSBmb2N1c2FibGVFbGVtZW50c1tfaTJdKSB7XG4gICAgICAgICAgICBidG5JbmRleCA9IF9pMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZS5zaGlmdEtleSkge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBuZXh0IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAxKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBDeWNsZSB0byB0aGUgcHJldiBidXR0b25cbiAgICAgICAgICBzZXRGb2N1cyhidG5JbmRleCwgLTEpO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBBUlJPV1MgLSBzd2l0Y2ggZm9jdXMgYmV0d2VlbiBidXR0b25zXG4gICAgICB9IGVsc2UgaWYgKGFycm93S2V5cy5pbmRleE9mKGUua2V5KSAhPT0gLTEpIHtcbiAgICAgICAgLy8gZm9jdXMgQ2FuY2VsIGJ1dHRvbiBpZiBDb25maXJtIGJ1dHRvbiBpcyBjdXJyZW50bHkgZm9jdXNlZFxuICAgICAgICBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9tQ2FjaGUuY29uZmlybUJ1dHRvbiAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpOyAvLyBhbmQgdmljZSB2ZXJzYVxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IGRvbUNhY2hlLmNhbmNlbEJ1dHRvbiAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY29uZmlybUJ1dHRvbikpIHtcbiAgICAgICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICAgIH0gLy8gRVNDXG5cbiAgICAgIH0gZWxzZSBpZiAoKGUua2V5ID09PSAnRXNjYXBlJyB8fCBlLmtleSA9PT0gJ0VzYycpICYmIGNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RXNjYXBlS2V5KSA9PT0gdHJ1ZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uZXNjKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKGdsb2JhbFN0YXRlLmtleWRvd25UYXJnZXQgJiYgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXJBZGRlZCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKCFpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZXR1cm4ga2V5ZG93bkhhbmRsZXIoZSwgaW5uZXJQYXJhbXMpO1xuICAgICAgfTtcblxuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPyB3aW5kb3cgOiBkb21DYWNoZS5wb3B1cDtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25MaXN0ZW5lckNhcHR1cmUgPSBpbm5lclBhcmFtcy5rZXlkb3duTGlzdGVuZXJDYXB0dXJlO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2xvYmFsU3RhdGUua2V5ZG93bkhhbmRsZXIsIHtcbiAgICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgICAgfSk7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICBfdGhpcy5oaWRlTG9hZGluZygpO1xuXG4gICAgX3RoaXMucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuXG4gICAgaWYgKGlubmVyUGFyYW1zLnRvYXN0ICYmIChpbm5lclBhcmFtcy5pbnB1dCB8fCBpbm5lclBhcmFtcy5mb290ZXIgfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uKSkge1xuICAgICAgYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddKTtcbiAgICB9IC8vIGlucHV0T3B0aW9ucywgaW5wdXRWYWx1ZVxuXG5cbiAgICBpZiAoaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdzZWxlY3QnIHx8IGlubmVyUGFyYW1zLmlucHV0ID09PSAncmFkaW8nKSB7XG4gICAgICBoYW5kbGVJbnB1dE9wdGlvbnMoX3RoaXMsIGlubmVyUGFyYW1zKTtcbiAgICB9IGVsc2UgaWYgKFsndGV4dCcsICdlbWFpbCcsICdudW1iZXInLCAndGVsJywgJ3RleHRhcmVhJ10uaW5kZXhPZihpbm5lclBhcmFtcy5pbnB1dCkgIT09IC0xICYmIGlzUHJvbWlzZShpbm5lclBhcmFtcy5pbnB1dFZhbHVlKSkge1xuICAgICAgaGFuZGxlSW5wdXRWYWx1ZShfdGhpcywgaW5uZXJQYXJhbXMpO1xuICAgIH1cblxuICAgIG9wZW5Qb3B1cChpbm5lclBhcmFtcyk7XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBpZiAoIWNhbGxJZkZ1bmN0aW9uKGlubmVyUGFyYW1zLmFsbG93RW50ZXJLZXkpKSB7XG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIHR5cGVvZiBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCAmJiBpc1Zpc2libGUoZG9tQ2FjaGUuY2FuY2VsQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jYW5jZWxCdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSBpZiAoaW5uZXJQYXJhbXMuZm9jdXNDb25maXJtICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmZvY3VzKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZXRGb2N1cygtMSwgMSk7XG4gICAgICB9XG4gICAgfSAvLyBmaXggc2Nyb2xsXG5cblxuICAgIGRvbUNhY2hlLmNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICB9KTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHBvcHVwIHBhcmFtZXRlcnMuXG4gKi9cblxuZnVuY3Rpb24gdXBkYXRlKHBhcmFtcykge1xuICB2YXIgdmFsaWRVcGRhdGFibGVQYXJhbXMgPSB7fTsgLy8gYXNzaWduIHZhbGlkIHBhcmFtcyBmcm9tIGBwYXJhbXNgIHRvIGBkZWZhdWx0c2BcblxuICBPYmplY3Qua2V5cyhwYXJhbXMpLmZvckVhY2goZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgaWYgKFN3YWwuaXNVcGRhdGFibGVQYXJhbWV0ZXIocGFyYW0pKSB7XG4gICAgICB2YWxpZFVwZGF0YWJsZVBhcmFtc1twYXJhbV0gPSBwYXJhbXNbcGFyYW1dO1xuICAgIH0gZWxzZSB7XG4gICAgICB3YXJuKFwiSW52YWxpZCBwYXJhbWV0ZXIgdG8gdXBkYXRlOiBcXFwiXCIuY29uY2F0KHBhcmFtLCBcIlxcXCIuIFVwZGF0YWJsZSBwYXJhbXMgYXJlIGxpc3RlZCBoZXJlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvYmxvYi9tYXN0ZXIvc3JjL3V0aWxzL3BhcmFtcy5qc1wiKSk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldCh0aGlzKTtcblxuICB2YXIgdXBkYXRlZFBhcmFtcyA9IF9leHRlbmRzKHt9LCBpbm5lclBhcmFtcywgdmFsaWRVcGRhdGFibGVQYXJhbXMpO1xuXG4gIHJlbmRlcih0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCB1cGRhdGVkUGFyYW1zKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHBhcmFtczoge1xuICAgICAgdmFsdWU6IF9leHRlbmRzKHt9LCB0aGlzLnBhcmFtcywgcGFyYW1zKSxcbiAgICAgIHdyaXRhYmxlOiBmYWxzZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xufVxuXG5cblxudmFyIGluc3RhbmNlTWV0aG9kcyA9IE9iamVjdC5mcmVlemUoe1xuXHRoaWRlTG9hZGluZzogaGlkZUxvYWRpbmcsXG5cdGRpc2FibGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcblx0Z2V0SW5wdXQ6IGdldElucHV0JDEsXG5cdGNsb3NlOiBjbG9zZSxcblx0Y2xvc2VQb3B1cDogY2xvc2UsXG5cdGNsb3NlTW9kYWw6IGNsb3NlLFxuXHRjbG9zZVRvYXN0OiBjbG9zZSxcblx0ZW5hYmxlQnV0dG9uczogZW5hYmxlQnV0dG9ucyxcblx0ZGlzYWJsZUJ1dHRvbnM6IGRpc2FibGVCdXR0b25zLFxuXHRlbmFibGVDb25maXJtQnV0dG9uOiBlbmFibGVDb25maXJtQnV0dG9uLFxuXHRkaXNhYmxlQ29uZmlybUJ1dHRvbjogZGlzYWJsZUNvbmZpcm1CdXR0b24sXG5cdGVuYWJsZUlucHV0OiBlbmFibGVJbnB1dCxcblx0ZGlzYWJsZUlucHV0OiBkaXNhYmxlSW5wdXQsXG5cdHNob3dWYWxpZGF0aW9uTWVzc2FnZTogc2hvd1ZhbGlkYXRpb25NZXNzYWdlLFxuXHRyZXNldFZhbGlkYXRpb25NZXNzYWdlOiByZXNldFZhbGlkYXRpb25NZXNzYWdlJDEsXG5cdGdldFByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMkMSxcblx0c2V0UHJvZ3Jlc3NTdGVwczogc2V0UHJvZ3Jlc3NTdGVwcyxcblx0c2hvd1Byb2dyZXNzU3RlcHM6IHNob3dQcm9ncmVzc1N0ZXBzLFxuXHRoaWRlUHJvZ3Jlc3NTdGVwczogaGlkZVByb2dyZXNzU3RlcHMsXG5cdF9tYWluOiBfbWFpbixcblx0dXBkYXRlOiB1cGRhdGVcbn0pO1xuXG52YXIgY3VycmVudEluc3RhbmNlOyAvLyBTd2VldEFsZXJ0IGNvbnN0cnVjdG9yXG5cbmZ1bmN0aW9uIFN3ZWV0QWxlcnQoKSB7XG4gIC8vIFByZXZlbnQgcnVuIGluIE5vZGUgZW52XG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfSAvLyBDaGVjayBmb3IgdGhlIGV4aXN0ZW5jZSBvZiBQcm9taXNlXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG5cblxuICBpZiAodHlwZW9mIFByb21pc2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgZXJyb3IoJ1RoaXMgcGFja2FnZSByZXF1aXJlcyBhIFByb21pc2UgbGlicmFyeSwgcGxlYXNlIGluY2x1ZGUgYSBzaGltIHRvIGVuYWJsZSBpdCBpbiB0aGlzIGJyb3dzZXIgKFNlZTogaHR0cHM6Ly9naXRodWIuY29tL3N3ZWV0YWxlcnQyL3N3ZWV0YWxlcnQyL3dpa2kvTWlncmF0aW9uLWZyb20tU3dlZXRBbGVydC10by1Td2VldEFsZXJ0MiMxLWllLXN1cHBvcnQpJyk7XG4gIH1cblxuICBjdXJyZW50SW5zdGFuY2UgPSB0aGlzO1xuXG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gIH1cblxuICB2YXIgb3V0ZXJQYXJhbXMgPSBPYmplY3QuZnJlZXplKHRoaXMuY29uc3RydWN0b3IuYXJnc1RvUGFyYW1zKGFyZ3MpKTtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcywge1xuICAgIHBhcmFtczoge1xuICAgICAgdmFsdWU6IG91dGVyUGFyYW1zLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIHByb21pc2UgPSB0aGlzLl9tYWluKHRoaXMucGFyYW1zKTtcblxuICBwcml2YXRlUHJvcHMucHJvbWlzZS5zZXQodGhpcywgcHJvbWlzZSk7XG59IC8vIGBjYXRjaGAgY2Fubm90IGJlIHRoZSBuYW1lIG9mIGEgbW9kdWxlIGV4cG9ydCwgc28gd2UgZGVmaW5lIG91ciB0aGVuYWJsZSBtZXRob2RzIGhlcmUgaW5zdGVhZFxuXG5cblN3ZWV0QWxlcnQucHJvdG90eXBlLnRoZW4gPSBmdW5jdGlvbiAob25GdWxmaWxsZWQpIHtcbiAgdmFyIHByb21pc2UgPSBwcml2YXRlUHJvcHMucHJvbWlzZS5nZXQodGhpcyk7XG4gIHJldHVybiBwcm9taXNlLnRoZW4ob25GdWxmaWxsZWQpO1xufTtcblxuU3dlZXRBbGVydC5wcm90b3R5cGVbXCJmaW5hbGx5XCJdID0gZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2VbXCJmaW5hbGx5XCJdKG9uRmluYWxseSk7XG59OyAvLyBBc3NpZ24gaW5zdGFuY2UgbWV0aG9kcyBmcm9tIHNyYy9pbnN0YW5jZU1ldGhvZHMvKi5qcyB0byBwcm90b3R5cGVcblxuXG5fZXh0ZW5kcyhTd2VldEFsZXJ0LnByb3RvdHlwZSwgaW5zdGFuY2VNZXRob2RzKTsgLy8gQXNzaWduIHN0YXRpYyBtZXRob2RzIGZyb20gc3JjL3N0YXRpY01ldGhvZHMvKi5qcyB0byBjb25zdHJ1Y3RvclxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQsIHN0YXRpY01ldGhvZHMpOyAvLyBQcm94eSB0byBpbnN0YW5jZSBtZXRob2RzIHRvIGNvbnN0cnVjdG9yLCBmb3Igbm93LCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHlcblxuXG5PYmplY3Qua2V5cyhpbnN0YW5jZU1ldGhvZHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICBTd2VldEFsZXJ0W2tleV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGN1cnJlbnRJbnN0YW5jZSkge1xuICAgICAgdmFyIF9jdXJyZW50SW5zdGFuY2U7XG5cbiAgICAgIHJldHVybiAoX2N1cnJlbnRJbnN0YW5jZSA9IGN1cnJlbnRJbnN0YW5jZSlba2V5XS5hcHBseShfY3VycmVudEluc3RhbmNlLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfTtcbn0pO1xuU3dlZXRBbGVydC5EaXNtaXNzUmVhc29uID0gRGlzbWlzc1JlYXNvbjtcblN3ZWV0QWxlcnQudmVyc2lvbiA9ICc4LjEyLjEnO1xuXG52YXIgU3dhbCA9IFN3ZWV0QWxlcnQ7XG5Td2FsW1wiZGVmYXVsdFwiXSA9IFN3YWw7XG5cbnJldHVybiBTd2FsO1xuXG59KSkpO1xuaWYgKHR5cGVvZiB0aGlzICE9PSAndW5kZWZpbmVkJyAmJiB0aGlzLlN3ZWV0YWxlcnQyKXsgIHRoaXMuc3dhbCA9IHRoaXMuc3dlZXRBbGVydCA9IHRoaXMuU3dhbCA9IHRoaXMuU3dlZXRBbGVydCA9IHRoaXMuU3dlZXRhbGVydDJ9XG5cblwidW5kZWZpbmVkXCIhPXR5cGVvZiBkb2N1bWVudCYmZnVuY3Rpb24oZSx0KXt2YXIgbj1lLmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtpZihlLmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXS5hcHBlbmRDaGlsZChuKSxuLnN0eWxlU2hlZXQpbi5zdHlsZVNoZWV0LmRpc2FibGVkfHwobi5zdHlsZVNoZWV0LmNzc1RleHQ9dCk7ZWxzZSB0cnl7bi5pbm5lckhUTUw9dH1jYXRjaChlKXtuLmlubmVyVGV4dD10fX0oZG9jdW1lbnQsXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO0Atd2Via2l0LWtleWZyYW1lcyBzd2FsMi1zaG93ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43KTt0cmFuc2Zvcm06c2NhbGUoLjcpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUBrZXlmcmFtZXMgc3dhbDItc2hvd3swJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNyk7dHJhbnNmb3JtOnNjYWxlKC43KX00NSV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4wNSk7dHJhbnNmb3JtOnNjYWxlKDEuMDUpfTgwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguOTUpO3RyYW5zZm9ybTpzY2FsZSguOTUpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItaGlkZXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLWhpZGV7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC41KTt0cmFuc2Zvcm06c2NhbGUoLjUpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44NzVlbTt3aWR0aDoxLjU2MjVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOjEuMTg3NWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6MS4wNjI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOjIuMTg3NWVtO2xlZnQ6LS4zNzVlbTt3aWR0aDozLjEyNWVtfTg0JXt0b3A6M2VtO2xlZnQ6MS4zMTI1ZW07d2lkdGg6MS4wNjI1ZW19MTAwJXt0b3A6Mi44MTI1ZW07bGVmdDouODc1ZW07d2lkdGg6MS41NjI1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9NjUle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH04NCV7dG9wOjIuMTg3NWVtO3JpZ2h0OjA7d2lkdGg6My40Mzc1ZW19MTAwJXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmV7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTUley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0xMiV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFya3swJXttYXJnaW4tdG9wOjEuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTUwJXttYXJnaW4tdG9wOjEuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjQpO3RyYW5zZm9ybTpzY2FsZSguNCk7b3BhY2l0eTowfTgwJXttYXJnaW4tdG9wOi0uMzc1ZW07LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7dHJhbnNmb3JtOnNjYWxlKDEuMTUpfTEwMCV7bWFyZ2luLXRvcDowOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwKTt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fUBrZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTt0cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO29wYWNpdHk6MH0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVgoMCk7dHJhbnNmb3JtOnJvdGF0ZVgoMCk7b3BhY2l0eToxfX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItc2hvd257YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9we3RvcDowO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e3RvcDowO3JpZ2h0OjA7Ym90dG9tOmF1dG87bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtbGVmdCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e3RvcDowO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDowfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItbGVmdCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e3RvcDo1MCU7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjA7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye3RvcDo1MCU7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodHt0b3A6NTAlO3JpZ2h0OjA7Ym90dG9tOmF1dG87bGVmdDphdXRvOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnR7dG9wOmF1dG87cmlnaHQ6YXV0bztib3R0b206MDtsZWZ0OjB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHt0b3A6YXV0bztyaWdodDowO2JvdHRvbTowO2xlZnQ6YXV0b31ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3R7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOnN0cmV0Y2h9Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25ze2ZsZXg6MTthbGlnbi1zZWxmOnN0cmV0Y2g7aGVpZ2h0OjIuMmVtO21hcmdpbi10b3A6LjMxMjVlbX1ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWxvYWRpbmd7anVzdGlmeS1jb250ZW50OmNlbnRlcn1ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWlucHV0e2hlaWdodDoyZW07bWFyZ2luOi4zMTI1ZW0gYXV0bztmb250LXNpemU6MWVtfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdle2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0e2ZsZXgtZGlyZWN0aW9uOnJvdzthbGlnbi1pdGVtczpjZW50ZXI7d2lkdGg6YXV0bztwYWRkaW5nOi42MjVlbTtvdmVyZmxvdy15OmhpZGRlbjtib3gtc2hhZG93OjAgMCAuNjI1ZW0gI2Q5ZDlkOX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWhlYWRlcntmbGV4LWRpcmVjdGlvbjpyb3d9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi10aXRsZXtmbGV4LWdyb3c6MTtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1mb290ZXJ7bWFyZ2luOi41ZW0gMCAwO3BhZGRpbmc6LjVlbSAwIDA7Zm9udC1zaXplOi44ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1jbG9zZXtwb3NpdGlvbjpzdGF0aWM7d2lkdGg6LjhlbTtoZWlnaHQ6LjhlbTtsaW5lLWhlaWdodDouOH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNvbnRlbnR7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb257d2lkdGg6MmVtO21pbi13aWR0aDoyZW07aGVpZ2h0OjJlbTttYXJnaW46MH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb246OmJlZm9yZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2ZvbnQtc2l6ZToyZW07Zm9udC13ZWlnaHQ6NzAwfUBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSwoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb246OmJlZm9yZXtmb250LXNpemU6LjI1ZW19fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVde3RvcDouODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPXJpZ2h0XXtyaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYWN0aW9uc3tmbGV4LWJhc2lzOmF1dG8haW1wb3J0YW50O2hlaWdodDphdXRvO21hcmdpbjowIC4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWR7bWFyZ2luOjAgLjMxMjVlbTtwYWRkaW5nOi4zMTI1ZW0gLjYyNWVtO2ZvbnQtc2l6ZToxZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdHlsZWQ6Zm9jdXN7Ym94LXNoYWRvdzowIDAgMCAuMDYyNWVtICNmZmYsMCAwIDAgLjEyNWVtIHJnYmEoNTAsMTAwLDE1MCwuNCl9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MS42ZW07aGVpZ2h0OjNlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPWxlZnRde3RvcDotLjhlbTtsZWZ0Oi0uNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTt0cmFuc2Zvcm0tb3JpZ2luOjJlbSAyZW07Ym9yZGVyLXJhZGl1czo0ZW0gMCAwIDRlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1yaWdodF17dG9wOi0uMjVlbTtsZWZ0Oi45Mzc1ZW07LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07dHJhbnNmb3JtLW9yaWdpbjowIDEuNWVtO2JvcmRlci1yYWRpdXM6MCA0ZW0gNGVtIDB9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7d2lkdGg6MmVtO2hlaWdodDoyZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHt0b3A6MDtsZWZ0Oi40Mzc1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6Mi42ODc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXXtoZWlnaHQ6LjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLXNob3d7LXdlYmtpdC1hbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LXNob3cgLjVzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdC5zd2FsMi1oaWRley13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzO2FuaW1hdGlvbjpzd2FsMi10b2FzdC1oaWRlIC4xcyBmb3J3YXJkc30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtbG9uZ3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1c31ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3Qtc2hvd3swJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKX0zMyV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKC0yZGVnKX02NiV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpfTMzJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWhpZGV7MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO3RyYW5zZm9ybTpyb3RhdGVaKDFkZWcpO29wYWNpdHk6MH19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6LjU2MjVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOi4xMjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6LjYyNWVtO2xlZnQ6LS4yNWVtO3dpZHRoOjEuNjI1ZW19ODQle3RvcDoxLjA2MjVlbTtsZWZ0Oi43NWVtO3dpZHRoOi41ZW19MTAwJXt0b3A6MS4xMjVlbTtsZWZ0Oi4xODc1ZW07d2lkdGg6Ljc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjEuNjI1ZW07cmlnaHQ6MS4zNzVlbTt3aWR0aDowfTY1JXt0b3A6MS4yNWVtO3JpZ2h0Oi45Mzc1ZW07d2lkdGg6MH04NCV7dG9wOi45Mzc1ZW07cmlnaHQ6MDt3aWR0aDoxLjEyNWVtfTEwMCV7dG9wOi45Mzc1ZW07cmlnaHQ6LjE4NzVlbTt3aWR0aDoxLjM3NWVtfX1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93OmhpZGRlbn1ib2R5LnN3YWwyLWhlaWdodC1hdXRve2hlaWdodDphdXRvIWltcG9ydGFudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bnt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6YXV0bzttYXgtd2lkdGg6Y2FsYygxMDAlIC0gLjYyNWVtICogMik7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bj4uc3dhbDItbW9kYWx7Ym94LXNoYWRvdzowIDAgMTBweCByZ2JhKDAsMCwwLC40KX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3B7dG9wOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtbGVmdCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3Atc3RhcnR7dG9wOjA7bGVmdDowfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLXJpZ2h0e3RvcDowO3JpZ2h0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVye3RvcDo1MCU7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1zdGFydHt0b3A6NTAlO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWNlbnRlci1lbmQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbXtib3R0b206MDtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1zdGFydHtib3R0b206MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tcmlnaHR7cmlnaHQ6MDtib3R0b206MH0uc3dhbDItY29udGFpbmVye2Rpc3BsYXk6ZmxleDtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjEwNjA7dG9wOjA7cmlnaHQ6MDtib3R0b206MDtsZWZ0OjA7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93LXg6aGlkZGVuO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7YWxpZ24taXRlbXM6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVye2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXN0YXJ0e2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItcmlnaHR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbXthbGlnbi1pdGVtczpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodHthbGlnbi1pdGVtczpmbGV4LWVuZDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kPjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1sZWZ0PjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1yaWdodD46Zmlyc3QtY2hpbGQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnQ+OmZpcnN0LWNoaWxkLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tPjpmaXJzdC1jaGlsZHttYXJnaW4tdG9wOmF1dG99LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWZ1bGxzY3JlZW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1yb3c+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbntmbGV4OjE7ZmxleC1kaXJlY3Rpb246Y29sdW1ufS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9we2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXN0YXJ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1zdGFydHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWJvdHRvbS1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItcmlnaHQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4+LnN3YWwyLW1vZGFse2Rpc3BsYXk6ZmxleCFpbXBvcnRhbnQ7ZmxleDoxO2FsaWduLWNvbnRlbnQ6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lcjpub3QoLnN3YWwyLXRvcCk6bm90KC5zd2FsMi10b3Atc3RhcnQpOm5vdCguc3dhbDItdG9wLWVuZCk6bm90KC5zd2FsMi10b3AtbGVmdCk6bm90KC5zd2FsMi10b3AtcmlnaHQpOm5vdCguc3dhbDItY2VudGVyLXN0YXJ0KTpub3QoLnN3YWwyLWNlbnRlci1lbmQpOm5vdCguc3dhbDItY2VudGVyLWxlZnQpOm5vdCguc3dhbDItY2VudGVyLXJpZ2h0KTpub3QoLnN3YWwyLWJvdHRvbSk6bm90KC5zd2FsMi1ib3R0b20tc3RhcnQpOm5vdCguc3dhbDItYm90dG9tLWVuZCk6bm90KC5zd2FsMi1ib3R0b20tbGVmdCk6bm90KC5zd2FsMi1ib3R0b20tcmlnaHQpOm5vdCguc3dhbDItZ3Jvdy1mdWxsc2NyZWVuKT4uc3dhbDItbW9kYWx7bWFyZ2luOmF1dG99QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1jb250YWluZXIgLnN3YWwyLW1vZGFse21hcmdpbjowIWltcG9ydGFudH19LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1mYWRle3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuMXN9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMCwwLDAsLjQpfS5zd2FsMi1wb3B1cHtkaXNwbGF5Om5vbmU7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94O2ZsZXgtZGlyZWN0aW9uOmNvbHVtbjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjMyZW07bWF4LXdpZHRoOjEwMCU7cGFkZGluZzoxLjI1ZW07Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czouMzEyNWVtO2JhY2tncm91bmQ6I2ZmZjtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxcmVtfS5zd2FsMi1wb3B1cDpmb2N1c3tvdXRsaW5lOjB9LnN3YWwyLXBvcHVwLnN3YWwyLWxvYWRpbmd7b3ZlcmZsb3cteTpoaWRkZW59LnN3YWwyLWhlYWRlcntkaXNwbGF5OmZsZXg7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2FsaWduLWl0ZW1zOmNlbnRlcn0uc3dhbDItdGl0bGV7cG9zaXRpb246cmVsYXRpdmU7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjAgMCAuNGVtO3BhZGRpbmc6MDtjb2xvcjojNTk1OTU5O2ZvbnQtc2l6ZToxLjg3NWVtO2ZvbnQtd2VpZ2h0OjYwMDt0ZXh0LWFsaWduOmNlbnRlcjt0ZXh0LXRyYW5zZm9ybTpub25lO3dvcmQtd3JhcDpicmVhay13b3JkfS5zd2FsMi1hY3Rpb25ze3otaW5kZXg6MTtmbGV4LXdyYXA6d3JhcDthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxMDAlO21hcmdpbjoxLjI1ZW0gYXV0byAwfS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZFtkaXNhYmxlZF17b3BhY2l0eTouNH0uc3dhbDItYWN0aW9uczpub3QoLnN3YWwyLWxvYWRpbmcpIC5zd2FsMi1zdHlsZWQ6aG92ZXJ7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuMSkscmdiYSgwLDAsMCwuMSkpfS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDphY3RpdmV7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQocmdiYSgwLDAsMCwuMikscmdiYSgwLDAsMCwuMikpfS5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgLnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoyLjVlbTtoZWlnaHQ6Mi41ZW07bWFyZ2luOi40Njg3NWVtO3BhZGRpbmc6MDstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7YW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDtib3JkZXI6LjI1ZW0gc29saWQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtjb2xvcjp0cmFuc3BhcmVudDtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbHttYXJnaW4tcmlnaHQ6MzBweDttYXJnaW4tbGVmdDozMHB4fS5zd2FsMi1hY3Rpb25zLnN3YWwyLWxvYWRpbmcgOm5vdCguc3dhbDItc3R5bGVkKS5zd2FsMi1jb25maXJtOjphZnRlcntjb250ZW50OlxcXCJcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjE1cHg7aGVpZ2h0OjE1cHg7bWFyZ2luLWxlZnQ6NXB4Oy13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2JvcmRlcjozcHggc29saWQgIzk5OTtib3JkZXItcmFkaXVzOjUwJTtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzoxcHggMXB4IDFweCAjZmZmfS5zd2FsMi1zdHlsZWR7bWFyZ2luOi4zMTI1ZW07cGFkZGluZzouNjI1ZW0gMmVtO2JveC1zaGFkb3c6bm9uZTtmb250LXdlaWdodDo1MDB9LnN3YWwyLXN0eWxlZDpub3QoW2Rpc2FibGVkXSl7Y3Vyc29yOnBvaW50ZXJ9LnN3YWwyLXN0eWxlZC5zd2FsMi1jb25maXJte2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6IzMwODVkNjtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxLjA2MjVlbX0uc3dhbDItc3R5bGVkLnN3YWwyLWNhbmNlbHtib3JkZXI6MDtib3JkZXItcmFkaXVzOi4yNWVtO2JhY2tncm91bmQ6aW5pdGlhbDtiYWNrZ3JvdW5kLWNvbG9yOiNhYWE7Y29sb3I6I2ZmZjtmb250LXNpemU6MS4wNjI1ZW19LnN3YWwyLXN0eWxlZDpmb2N1c3tvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgMCAycHggI2ZmZiwwIDAgMCA0cHggcmdiYSg1MCwxMDAsMTUwLC40KX0uc3dhbDItc3R5bGVkOjotbW96LWZvY3VzLWlubmVye2JvcmRlcjowfS5zd2FsMi1mb290ZXJ7anVzdGlmeS1jb250ZW50OmNlbnRlcjttYXJnaW46MS4yNWVtIDAgMDtwYWRkaW5nOjFlbSAwIDA7Ym9yZGVyLXRvcDoxcHggc29saWQgI2VlZTtjb2xvcjojNTQ1NDU0O2ZvbnQtc2l6ZToxZW19LnN3YWwyLWltYWdle21heC13aWR0aDoxMDAlO21hcmdpbjoxLjI1ZW0gYXV0b30uc3dhbDItY2xvc2V7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDowO3JpZ2h0OjA7anVzdGlmeS1jb250ZW50OmNlbnRlcjt3aWR0aDoxLjJlbTtoZWlnaHQ6MS4yZW07cGFkZGluZzowO292ZXJmbG93OmhpZGRlbjt0cmFuc2l0aW9uOmNvbG9yIC4xcyBlYXNlLW91dDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjA7b3V0bGluZTppbml0aWFsO2JhY2tncm91bmQ6MCAwO2NvbG9yOiNjY2M7Zm9udC1mYW1pbHk6c2VyaWY7Zm9udC1zaXplOjIuNWVtO2xpbmUtaGVpZ2h0OjEuMjtjdXJzb3I6cG9pbnRlcn0uc3dhbDItY2xvc2U6aG92ZXJ7LXdlYmtpdC10cmFuc2Zvcm06bm9uZTt0cmFuc2Zvcm06bm9uZTtiYWNrZ3JvdW5kOjAgMDtjb2xvcjojZjI3NDc0fS5zd2FsMi1jb250ZW50e3otaW5kZXg6MTtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjowO3BhZGRpbmc6MDtjb2xvcjojNTQ1NDU0O2ZvbnQtc2l6ZToxLjEyNWVtO2ZvbnQtd2VpZ2h0OjMwMDtsaW5lLWhlaWdodDpub3JtYWw7d29yZC13cmFwOmJyZWFrLXdvcmR9I3N3YWwyLWNvbnRlbnR7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLWNoZWNrYm94LC5zd2FsMi1maWxlLC5zd2FsMi1pbnB1dCwuc3dhbDItcmFkaW8sLnN3YWwyLXNlbGVjdCwuc3dhbDItdGV4dGFyZWF7bWFyZ2luOjFlbSBhdXRvfS5zd2FsMi1maWxlLC5zd2FsMi1pbnB1dCwuc3dhbDItdGV4dGFyZWF7Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjEwMCU7dHJhbnNpdGlvbjpib3JkZXItY29sb3IgLjNzLGJveC1zaGFkb3cgLjNzO2JvcmRlcjoxcHggc29saWQgI2Q5ZDlkOTtib3JkZXItcmFkaXVzOi4xODc1ZW07YmFja2dyb3VuZDppbmhlcml0O2JveC1zaGFkb3c6aW5zZXQgMCAxcHggMXB4IHJnYmEoMCwwLDAsLjA2KTtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1maWxlLnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLWlucHV0LnN3YWwyLWlucHV0ZXJyb3IsLnN3YWwyLXRleHRhcmVhLnN3YWwyLWlucHV0ZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzQhaW1wb3J0YW50O2JveC1zaGFkb3c6MCAwIDJweCAjZjI3NDc0IWltcG9ydGFudH0uc3dhbDItZmlsZTpmb2N1cywuc3dhbDItaW5wdXQ6Zm9jdXMsLnN3YWwyLXRleHRhcmVhOmZvY3Vze2JvcmRlcjoxcHggc29saWQgI2I0ZGJlZDtvdXRsaW5lOjA7Ym94LXNoYWRvdzowIDAgM3B4ICNjNGU2ZjV9LnN3YWwyLWZpbGU6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLWlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1maWxlOjotbW96LXBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6LW1vei1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItZmlsZTotbXMtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLWlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItdGV4dGFyZWE6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1maWxlOjpwbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6OnBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6cGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItcmFuZ2V7bWFyZ2luOjFlbSBhdXRvO2JhY2tncm91bmQ6aW5oZXJpdH0uc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6ODAlfS5zd2FsMi1yYW5nZSBvdXRwdXR7d2lkdGg6MjAlO2NvbG9yOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyfS5zd2FsMi1yYW5nZSBpbnB1dCwuc3dhbDItcmFuZ2Ugb3V0cHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MDtmb250LXNpemU6MS4xMjVlbTtsaW5lLWhlaWdodDoyLjYyNWVtfS5zd2FsMi1pbnB1dHtoZWlnaHQ6Mi42MjVlbTtwYWRkaW5nOjAgLjc1ZW19LnN3YWwyLWlucHV0W3R5cGU9bnVtYmVyXXttYXgtd2lkdGg6MTBlbX0uc3dhbDItZmlsZXtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLXRleHRhcmVhe2hlaWdodDo2Ljc1ZW07cGFkZGluZzouNzVlbX0uc3dhbDItc2VsZWN0e21pbi13aWR0aDo1MCU7bWF4LXdpZHRoOjEwMCU7cGFkZGluZzouMzc1ZW0gLjYyNWVtO2JhY2tncm91bmQ6aW5oZXJpdDtjb2xvcjppbmhlcml0O2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1jaGVja2JveCwuc3dhbDItcmFkaW97YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7YmFja2dyb3VuZDppbmhlcml0O2NvbG9yOmluaGVyaXR9LnN3YWwyLWNoZWNrYm94IGxhYmVsLC5zd2FsMi1yYWRpbyBsYWJlbHttYXJnaW46MCAuNmVtO2ZvbnQtc2l6ZToxLjEyNWVtfS5zd2FsMi1jaGVja2JveCBpbnB1dCwuc3dhbDItcmFkaW8gaW5wdXR7bWFyZ2luOjAgLjRlbX0uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdle2Rpc3BsYXk6bm9uZTthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtwYWRkaW5nOi42MjVlbTtvdmVyZmxvdzpoaWRkZW47YmFja2dyb3VuZDojZjBmMGYwO2NvbG9yOiM2NjY7Zm9udC1zaXplOjFlbTtmb250LXdlaWdodDozMDB9LnN3YWwyLXZhbGlkYXRpb24tbWVzc2FnZTo6YmVmb3Jle2NvbnRlbnQ6XFxcIiFcXFwiO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3dpZHRoOjEuNWVtO21pbi13aWR0aDoxLjVlbTtoZWlnaHQ6MS41ZW07bWFyZ2luOjAgLjYyNWVtO3pvb206bm9ybWFsO2JvcmRlci1yYWRpdXM6NTAlO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NDtjb2xvcjojZmZmO2ZvbnQtd2VpZ2h0OjYwMDtsaW5lLWhlaWdodDoxLjVlbTt0ZXh0LWFsaWduOmNlbnRlcn1Ac3VwcG9ydHMgKC1tcy1hY2NlbGVyYXRvcjp0cnVlKXsuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnR9LnN3YWwyLXJhbmdlIG91dHB1dHtkaXNwbGF5Om5vbmV9fUBtZWRpYSBhbGwgYW5kICgtbXMtaGlnaC1jb250cmFzdDpub25lKSwoLW1zLWhpZ2gtY29udHJhc3Q6YWN0aXZlKXsuc3dhbDItcmFuZ2UgaW5wdXR7d2lkdGg6MTAwJSFpbXBvcnRhbnR9LnN3YWwyLXJhbmdlIG91dHB1dHtkaXNwbGF5Om5vbmV9fUAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKXsuc3dhbDItY2xvc2U6Zm9jdXN7b3V0bGluZToycHggc29saWQgcmdiYSg1MCwxMDAsMTUwLC40KX19LnN3YWwyLWljb257cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpjb250ZW50LWJveDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjVlbTtoZWlnaHQ6NWVtO21hcmdpbjoxLjI1ZW0gYXV0byAxLjg3NWVtO3pvb206bm9ybWFsO2JvcmRlcjouMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjUwJTtsaW5lLWhlaWdodDo1ZW07Y3Vyc29yOmRlZmF1bHQ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbXMtdXNlci1zZWxlY3Q6bm9uZTt1c2VyLXNlbGVjdDpub25lfS5zd2FsMi1pY29uOjpiZWZvcmV7ZGlzcGxheTpmbGV4O2FsaWduLWl0ZW1zOmNlbnRlcjtoZWlnaHQ6OTIlO2ZvbnQtc2l6ZTozLjc1ZW19LnN3YWwyLWljb24uc3dhbDItZXJyb3J7Ym9yZGVyLWNvbG9yOiNmMjc0NzR9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgLnN3YWwyLXgtbWFya3twb3NpdGlvbjpyZWxhdGl2ZTtmbGV4LWdyb3c6MX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXXtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO3RvcDoyLjMxMjVlbTt3aWR0aDoyLjkzNzVlbTtoZWlnaHQ6LjMxMjVlbTtib3JkZXItcmFkaXVzOi4xMjVlbTtiYWNrZ3JvdW5kLWNvbG9yOiNmMjc0NzR9LnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV1bY2xhc3MkPWxlZnRde2xlZnQ6MS4wNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0OjFlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwyLWljb24uc3dhbDItd2FybmluZ3tib3JkZXItY29sb3I6I2ZhY2VhODtjb2xvcjojZjhiYjg2fS5zd2FsMi1pY29uLnN3YWwyLXdhcm5pbmc6OmJlZm9yZXtjb250ZW50OlxcXCIhXFxcIn0uc3dhbDItaWNvbi5zd2FsMi1pbmZve2JvcmRlci1jb2xvcjojOWRlMGY2O2NvbG9yOiMzZmMzZWV9LnN3YWwyLWljb24uc3dhbDItaW5mbzo6YmVmb3Jle2NvbnRlbnQ6XFxcImlcXFwifS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9ue2JvcmRlci1jb2xvcjojYzlkYWUxO2NvbG9yOiM4N2FkYmR9LnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb246OmJlZm9yZXtjb250ZW50OlxcXCI/XFxcIn0uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbi5zd2FsMi1hcmFiaWMtcXVlc3Rpb24tbWFyazo6YmVmb3Jle2NvbnRlbnQ6XFxcItifXFxcIn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNze2JvcmRlci1jb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVde3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjMuNzVlbTtoZWlnaHQ6Ny41ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKDQ1ZGVnKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uNDM3NWVtO2xlZnQ6LTIuMDYzNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46My43NWVtIDMuNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjMuNzVlbSAzLjc1ZW07Ym9yZGVyLXJhZGl1czo3LjVlbSAwIDAgNy41ZW19LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS42ODc1ZW07bGVmdDoxLjg3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAzLjc1ZW07dHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTtib3JkZXItcmFkaXVzOjAgNy41ZW0gNy41ZW0gMH0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLXJpbmd7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO3RvcDotLjI1ZW07bGVmdDotLjI1ZW07Ym94LXNpemluZzpjb250ZW50LWJveDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JvcmRlcjouMjVlbSBzb2xpZCByZ2JhKDE2NSwyMjAsMTM0LC4zKTtib3JkZXItcmFkaXVzOjUwJX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIC5zd2FsMi1zdWNjZXNzLWZpeHtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjE7dG9wOi41ZW07bGVmdDoxLjYyNWVtO3dpZHRoOi40Mzc1ZW07aGVpZ2h0OjUuNjI1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoyO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2E1ZGM4Nn0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1saW5lXVtjbGFzcyQ9dGlwXXt0b3A6Mi44NzVlbTtsZWZ0Oi44NzVlbTt3aWR0aDoxLjU2MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD1sb25nXXt0b3A6Mi4zNzVlbTtyaWdodDouNWVtO3dpZHRoOjIuOTM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHN7YWxpZ24taXRlbXM6Y2VudGVyO21hcmdpbjowIDAgMS4yNWVtO3BhZGRpbmc6MDtiYWNrZ3JvdW5kOmluaGVyaXQ7Zm9udC13ZWlnaHQ6NjAwfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyBsaXtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXB7ei1pbmRleDoyMDt3aWR0aDoyZW07aGVpZ2h0OjJlbTtib3JkZXItcmFkaXVzOjJlbTtiYWNrZ3JvdW5kOiMzMDg1ZDY7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoyZW07dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwe2JhY2tncm91bmQ6IzMwODVkNn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojYWRkOGU2O2NvbG9yOiNmZmZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLnN3YWwyLWFjdGl2ZS1wcm9ncmVzcy1zdGVwfi5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7YmFja2dyb3VuZDojYWRkOGU2fS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC1saW5le3otaW5kZXg6MTA7d2lkdGg6Mi41ZW07aGVpZ2h0Oi40ZW07bWFyZ2luOjAgLTFweDtiYWNrZ3JvdW5kOiMzMDg1ZDZ9W2NsYXNzXj1zd2FsMl17LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnRyYW5zcGFyZW50fS5zd2FsMi1zaG93ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzO2FuaW1hdGlvbjpzd2FsMi1zaG93IC4zc30uc3dhbDItc2hvdy5zd2FsMi1ub2FuaW1hdGlvbnstd2Via2l0LWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfS5zd2FsMi1oaWRley13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWhpZGUgLjE1cyBmb3J3YXJkczthbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzfS5zd2FsMi1oaWRlLnN3YWwyLW5vYW5pbWF0aW9uey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9LnN3YWwyLXJ0bCAuc3dhbDItY2xvc2V7cmlnaHQ6YXV0bztsZWZ0OjB9LnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWxpbmUtdGlwey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXAgLjc1c30uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25ney13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfS5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLXJpZ2h0ey13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1zdWNjZXNzLWNpcmN1bGFyLWxpbmUgNC4yNXMgZWFzZS1pbjthbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWlufS5zd2FsMi1hbmltYXRlLWVycm9yLWljb257LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41czthbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC41c30uc3dhbDItYW5pbWF0ZS1lcnJvci1pY29uIC5zd2FsMi14LW1hcmt7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmsgLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXN9QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1Aa2V5ZnJhbWVzIHN3YWwyLXJvdGF0ZS1sb2FkaW5nezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpfX1AbWVkaWEgcHJpbnR7Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKXtvdmVyZmxvdy15OnNjcm9sbCFpbXBvcnRhbnR9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKT5bYXJpYS1oaWRkZW49dHJ1ZV17ZGlzcGxheTpub25lfWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bikgLnN3YWwyLWNvbnRhaW5lcntwb3NpdGlvbjpzdGF0aWMhaW1wb3J0YW50fX1cIik7IiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdHJhdmVsQ29uc3RhbnRzR2VybWFuID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnU3RyYcOfZSwgT3J0IG9kZXIgUExaIGVpbmdlYmVuIC4uLicsXG4gICAgSEVBRExJTkVfRElTVDogJ0VudGZlcm51bmcnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdEYXVlcicsXG4gICAgSEVBRExJTkVfQkFTRV9QUklDRTogJ0dydW5kcHJlaXMnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6ICdQcmVpcyAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOiAnUHJlaXMgLyBtaW4nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZHJlc3NlIGF1w59lcmhhbGIgZGVzIFRhcmlmZ2ViaWV0cycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4nLFxuICAgIEVSUk9SOidGZWhsZXInLFxuICAgIFNUQVJUX1NFQVJDSDogJ0JlcmVjaG5lbicsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJJaHJlIGFrdHVlbGxlIFBvc2l0aW9uIGlzdCBhdcOfZXJoYWxiIGRlcyBUYXJpZnNnZWJpZXRzXCIsXG4gICAgTk9ORTogJycgLy8gbGFzdCBsaW5lXG59OyAvLyBlbmQgb2YgXCJjc3MgY29uc3RhbnRzXCIgLS0tXG4iLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgdmFyIHRyYXZlbENvbnN0YW50c0VuZ2xpc2ggPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdTdHJlZXQsIGNpdHkgb3IgZW50ZXIgcG9zdGFsIGNvZGUgLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRGlzdGFuY2UnLFxuICAgIEhFQURMSU5FX1RJTUU6ICdUaW1lJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOidCYXNlIHByaWNlJyxcbiAgICBIRUFETElORV9ESVNUX1BSSUNFOidQcmljZSAvIGttJyxcbiAgICBIRUFETElORV9USU1FX1BSSUNFOidQcmljZSAvIG1pbicsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kJyxcbiAgICBFUlJPUjonRXJyb3InLFxuICAgIFNUQVJUX1NFQVJDSDogJ0NhbGN1bGF0ZScsXG4gICAgUE9TSVRJT05fT1VUX09GX0JPVU5EUzogXCJZb3VyIGN1cnJlbnQgcG9zaXRpb24gaXMgb3V0IG9mIGJvdW5kc1wiLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQge3RyYXZlbENvbnN0YW50c0VuZ2xpc2h9IGZyb20gXCIuL3RyYXZlbC1jb25zdGFudC1pMThuLWVuXCI7XG5pbXBvcnQge3RyYXZlbENvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vdHJhdmVsLWNvbnN0YW50LWkxOG4tZGVcIjtcbmltcG9ydCB7QWxlcnRIYW5kbGVyfSBmcm9tIFwiLi8uLi8uLi8uLi8uLi9Db3JlQnVuZGxlL1Jlc291cmNlcy9wdWJsaWMvanMvQWxlcnRIYW5kbGVyXCI7XG5cbmNvbnN0ICQgPSBqUXVlcnk7XG5jb25zdCBsYW5nQ29uc3RhbnRzID0ge307XG5jb25zdCBvYmpTZXR0aW5ncyA9IHdpbmRvdy5vYmpTZXR0aW5ncztcbnZhciBhcnJGcm9tTmFtZXMgPSBbXTtcbnZhciBhcnJGcm9tUG9zaXRpb25zID0gW107XG52YXIgYXJyVG9OYW1lcyA9IFtdO1xudmFyIGFyclRvUG9zaXRpb25zID0gW107XG52YXIgdHJhdmVsRGF0YSA9IHtcbiAgcm91dGVGcm9tOiB7fSxcbiAgcm91dGVUbzoge31cbn07XG5cbmZ1bmN0aW9uIHJvdW5kVG9Ud28obnVtKSB7XG4gIGlmICh0eXBlb2YgbnVtICE9IFwiZmxvYXRcIikge1xuICAgIG51bSA9IHBhcnNlRmxvYXQobnVtKTtcbiAgfVxuICByZXR1cm4gbnVtLnRvRml4ZWQoMik7XG59XG4vKipcbiAqIFNhdmVzIHRoZSBzdHJpbmcgb2YgdGhlIHN0YXJ0IGFkZHJlc3MgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBhZGRyZXNzICAgICBTdHJpbmcgZm9yIHN0YXJ0IGFkZHJlc3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzZXRSb3V0ZUZyb20oYWRkcmVzcykge1xuICB0cmF2ZWxEYXRhLnJvdXRlRnJvbS5hZHJlc3MgPSBhZGRyZXNzO1xufVxuXG4vKipcbiAqIFNhdmVzIHRoZSBzdHJpbmcgb2YgdGhlIGRlc3RpbmF0aW9uIGFkZHJlc3MgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBhZGRyZXNzICAgICBTdHJpbmcgZm9yIGRlc3RpbmF0aW9uIGFkZHJlc3NcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBzZXRSb3V0ZVRvKGFkZHJlc3MpIHtcbiAgdHJhdmVsRGF0YS5yb3V0ZVRvLmFkcmVzcyA9IGFkZHJlc3M7XG59XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgYnV0dG9uIHByZXNzIGZvciBzdGFydCBhbmQgdHJpZXMgdG8gY2FsY3VsYXRlIHRoZSBleHBlbnNlc1xuICogQHBhcmFtIGNvb3JkaW5hdGVzICAgICBjb29yZGluYXRlcyBmcm9tIG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJvdXRlRnJvbVBvc2l0aW9uKGNvb3JkaW5hdGVzKSB7XG4gIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBcIi5yb3V0ZS1mcm9tXCIsIFwicm91dGVGcm9tXCIpO1xuICBpZiAoIW9ialNldHRpbmdzLnN1Ym1pdEJ1dHRvbikge1xuICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG4gIH1cblxufVxuXG4vKipcbiAqIEhhbmRsZXMgdGhlIGJ1dHRvbiBwcmVzcyBmb3IgZGVzdGluYXRpb24gYW5kIHRyaWVzIHRvIGNhbGN1bGF0ZSB0aGUgZXhwZW5zZXNcbiAqIEBwYXJhbSBjb29yZGluYXRlcyAgICAgY29vcmRpbmF0ZXMgZnJvbSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBoYW5kbGVSb3V0ZVRvUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgaGFuZGxlUG9zaXRpb24oY29vcmRpbmF0ZXMsIFwiLnJvdXRlLXRvXCIsIFwicm91dGVUb1wiKTtcbiAgaWYgKCFvYmpTZXR0aW5ncy5zdWJtaXRCdXR0b24pIHtcbiAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVydHMgYSBkaXN0YW5jZSBpbiBtZXRlcnMgdG8gYSBtb3JlIHJlYWRhYmxlIGZvcm1hdC5cbiAqIEBwYXJhbSBkaXN0YW5jZUluTWV0ZXJzICAgICBUaGUgZGlzdGFuY2UgdG8gY29udmVydC5cbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHRvSHVtYW5EaXN0YW5jZShkaXN0YW5jZUluTWV0ZXJzKSB7XG5cbiAgdmFyIGRpc3RhbmNlLFxuICAgIGh1bWFuRGlzdGFuY2U7XG5cbiAgZGlzdGFuY2UgPSBwYXJzZUludChkaXN0YW5jZUluTWV0ZXJzLCAxMCk7XG4gIGRpc3RhbmNlID0gZGlzdGFuY2UgLyAxMDAwO1xuXG4gIGlmIChkaXN0YW5jZSA+PSAxMDApIHtcbiAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgwKSArICcmbmJzcDsnICsgJ2ttJztcbiAgfSBlbHNlIGlmIChkaXN0YW5jZSA+PSAxMCkge1xuICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDEpICsgJyZuYnNwOycgKyAna20nO1xuICB9IGVsc2UgaWYgKGRpc3RhbmNlID49IDAuMSkge1xuICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDIpICsgJyZuYnNwOycgKyAna20nO1xuICB9IGVsc2Uge1xuICAgIGh1bWFuRGlzdGFuY2UgPSAoZGlzdGFuY2UgKiAxMDAwKS50b0ZpeGVkKDApICsgJyZuYnNwOycgKyAnbSc7XG4gIH1cblxuICByZXR1cm4gaHVtYW5EaXN0YW5jZTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIHRpbWUgaW4gc2Vjb25kcyB0byBhIG1vcmUgcmVhZGFibGUgZm9ybWF0LlxuICogQHBhcmFtIHRpbWVJblNlY29uZHMgICAgIFRoZSB0aW1lIHRvIGNvbnZlcnQuXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG5mdW5jdGlvbiB0b0h1bWFuVGltZSh0aW1lSW5TZWNvbmRzKSB7XG5cbiAgdmFyIHNlY29uZHMsXG4gICAgbWludXRlcyxcbiAgICBob3VycyxcbiAgICBodW1hblRpbWU7XG5cbiAgc2Vjb25kcyA9IHBhcnNlSW50KHRpbWVJblNlY29uZHMsIDEwKTtcbiAgbWludXRlcyA9IHBhcnNlSW50KHNlY29uZHMgLyA2MCwgMTApO1xuICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gIGhvdXJzID0gcGFyc2VJbnQobWludXRlcyAvIDYwLCAxMCk7XG4gIG1pbnV0ZXMgPSBtaW51dGVzICUgNjA7XG5cbiAgaWYgKGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICBodW1hblRpbWUgPSBzZWNvbmRzICsgJyZuYnNwOycgKyAncyc7XG4gIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICBodW1hblRpbWUgPSBtaW51dGVzICsgJyZuYnNwOycgKyAnbWluJztcbiAgfSBlbHNlIHtcbiAgICBodW1hblRpbWUgPSBob3VycyArICcmbmJzcDsnICsgJ2gnICsgJyZuYnNwOycgKyBtaW51dGVzICsgJyZuYnNwOycgKyAnbWluJztcbiAgfVxuXG4gIHJldHVybiBodW1hblRpbWU7XG59XG5cblxuXG4vKipcbiAqIGNhbGxzIHJldmVyc2UtZ2Vvc2VhcmNoIHRvIHNldCBhbiBhZGRyZXNzLXN0cmluZyBmb3IgY29vcmRpbmF0ZXMgYW5kIHNldCBpdCB0byB0aGUgc2NyaXB0LXNjb3BlZCB2YXJpYWJsZVxuICogQHBhcmFtIGNvb3JkaW5hdGVzICAgICAgIGNvb3JkaW5hdGVzIGZyb20gbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gKiBAcGFyYW0gY3NzSWQgICAgICAgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHBhcmFtIHByb3BOYW1lICAgICAgICAgIGNzcy1jbGFzcyB0byBzZXQgcmVzcG9uc2UtcHJvcGVydHkgdG9cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcywgY3NzSWQsIHByb3BOYW1lKSB7XG4gIGxldCBjb29yZHMgPSBjb29yZGluYXRlcy5jb29yZHM7XG4gIC8vIGNoZWNrIGJvdW5kc1xuICBpZiAob2JqU2V0dGluZ3MuYkJveCAmJiBvYmpTZXR0aW5ncy5iQm94WzBdKSB7XG4gICAgaWYgKCFpc0luQm91bmRpbmdCb3goY29vcmRzLmxvbmdpdHVkZSwgY29vcmRzLmxhdGl0dWRlKSkge1xuICAgICAgbGV0IGFsZXJ0SGFuZGxlciA9IG5ldyBBbGVydEhhbmRsZXIoKTtcbiAgICAgIGFsZXJ0SGFuZGxlci5zaG93SW5mb0RpYWxvZyhsYW5nQ29uc3RhbnRzLkVSUk9SLCBsYW5nQ29uc3RhbnRzLlBPU0lUSU9OX09VVF9PRl9CT1VORFMpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgIHRyYXZlbERhdGEucm91dGVGcm9tLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICB9XG4gIGVsc2Uge1xuICAgIHRyYXZlbERhdGEucm91dGVUby5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgfVxuICBsZXQgdXJsID0gb2JqU2V0dGluZ3MucHJveHlVcmwgKyAncmV2ZXJzZS5waHA/a2V5PScrIG9ialNldHRpbmdzLmtleVJldmVyc2UrJyZmb3JtYXQ9anNvbiZsYXQ9JyArIGNvb3Jkcy5sYXRpdHVkZSArICcmbG9uPScgKyBjb29yZHMubG9uZ2l0dWRlO1xuICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgbGV0IGFkZHJlc3MgPSBwYXJzZUFkZHJlc3NTdHJpbmcoZGF0YSk7XG4gICAgJChjc3NJZCkudmFsKGFkZHJlc3MpO1xuICAgIHRyYXZlbERhdGFbcHJvcE5hbWVdLmFkcmVzcyA9IGFkZHJlc3M7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBwYXJzZUFkZHJlc3NTdHJpbmcoZGF0YSkge1xuICBsZXQgYWRkcmVzcyA9IFwiXCI7XG4gIGlmIChkYXRhLmFkZHJlc3MpIHtcbiAgICBpZiAoZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4pIHtcbiAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4gKyBcIiBcIjtcbiAgICAgIGlmIChkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyKSB7XG4gICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGRhdGEuYWRkcmVzcy5wYXRoKSB7XG4gICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wYXRoICsgXCIgXCI7XG4gICAgICBpZiAoZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgIGFkZHJlc3MgKz0gXCIsIFwiO1xuICAgIH1cblxuICAgIGlmIChkYXRhLmFkZHJlc3MucG9zdGNvZGUpIHtcbiAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBvc3Rjb2RlICsgXCIgXCI7XG4gICAgfVxuICAgIGlmIChkYXRhLmFkZHJlc3MudG93bikge1xuICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICB9XG4gIH1cbiAgaWYgKGFkZHJlc3MgPT09IFwiXCIgJiYgZGF0YS5kaXNwbGF5X25hbWUpIHtcbiAgICBhZGRyZXNzID0gZGF0YS5kaXNwbGF5X25hbWU7XG4gIH1cbiAgcmV0dXJuIGFkZHJlc3M7XG59XG5cbi8qKlxuICogY2FsbHMgZ2Vvc2VhcmNoIHRvIHNldCBhdXRvY29tcGxldGUgc3VnZ2VzdGlvbnMgZm9yIGFuIGFkZHJlc3Mtc3RyaW5nXG4gKiBAcGFyYW0gaW5wdXQgICAgICAgYWRkcmVzcy1zdHJpbmcgZnJvbSBpbnB1dFxuICogQHBhcmFtIGNzc0lkICAgICAgIGNzcy1jbGFzcyB0byBzZXQgcmVzcG9uc2UtcHJvcGVydHkgdG9cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBhdXRvY29tcGxldGVBZGRyZXNzKGlucHV0LCBjc3NJZCkge1xuICBsZXQgY2VudGVyO1xuICBpZiAob2JqU2V0dGluZ3MuY2VudGVyKSB7XG4gICAgY2VudGVyID0gb2JqU2V0dGluZ3MuY2VudGVyWzBdICsgXCIsXCIgKyBvYmpTZXR0aW5ncy5jZW50ZXJbMV07XG4gIH1cbiAgZWxzZSB7XG4gICAgY2VudGVyID0gKHBhcnNlRmxvYXQob2JqU2V0dGluZ3MuYkJveFswXSkgKyBwYXJzZUZsb2F0KG9ialNldHRpbmdzLmJCb3hbMl0pKSAvIDIgKyBcIixcIiArIChwYXJzZUZsb2F0KG9ialNldHRpbmdzLmJCb3hbMV0pICsgcGFyc2VGbG9hdChvYmpTZXR0aW5ncy5iQm94WzNdKSkgLyAyO1xuICB9XG4gIGxldCB1cmwgPSBvYmpTZXR0aW5ncy5wcm94eVVybCArIFwiYXV0b2NvbXBsZXRlLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyBvYmpTZXR0aW5ncy5rZXlBdXRvY29tcGxldGUgKyBcIiZxPVwiICsgaW5wdXQgK1wiJmNlbnRlcj1cIiArIGNlbnRlcjtcbiAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgIGxldCBjZW50ZXI7XG4gICAgaWYgKG9ialNldHRpbmdzLmNlbnRlcikge1xuICAgICAgY2VudGVyID0gb2JqU2V0dGluZ3MuY2VudGVyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNlbnRlciA9IFsocGFyc2VGbG9hdChvYmpTZXR0aW5ncy5iQm94WzBdKSArIHBhcnNlRmxvYXQob2JqU2V0dGluZ3MuYkJveFsyXSkpIC8gMiwgKHBhcnNlRmxvYXQob2JqU2V0dGluZ3MuYkJveFsxXSkgKyBwYXJzZUZsb2F0KG9ialNldHRpbmdzLmJCb3hbM10pKSAvIDJdO1xuICAgIH1cbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cbiAgICAgIGlmIChkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgIC8vICQoY3NzSWQpLnZhbChkYXRhWzBdLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgIGxldCBhcnJBZGRyZXNzZXMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoaSkpIHtcbiAgICAgICAgICAgIGlmIChvYmpTZXR0aW5ncy5iQm94ICYmIG9ialNldHRpbmdzLmJCb3hbMF0pIHtcbiAgICAgICAgICAgICAgaWYgKGlzSW5Cb3VuZGluZ0JveChkYXRhW2ldLmxvbiwgZGF0YVtpXS5sYXQpKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRpc3RhbmNlID0gTWF0aC5zcXJ0KChjZW50ZXJbMF0gLSBkYXRhW2ldLmxvbikgKiAoY2VudGVyWzBdIC0gZGF0YVtpXS5sb24pICsgKGNlbnRlclsxXSAtIGRhdGFbaV0ubGF0KSAqIChjZW50ZXJbMV0gLSBkYXRhW2ldLmxhdCkpO1xuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50ID0ge1xuICAgICAgICAgICAgICAgICAgJ2Rpc3QnIDogZGlzdGFuY2UsXG4gICAgICAgICAgICAgICAgICAncG9zJyAgOiBbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSxcbiAgICAgICAgICAgICAgICAgICduYW1lJyA6IGRhdGFbaV0uZGlzcGxheV9uYW1lXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBhcnJBZGRyZXNzZXMucHVzaChlbGVtZW50KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhcnJBZGRyZXNzZXMuc29ydCgoYSxiKSA9PiBhLmRpc3QgLWIuZGlzdCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSBpbiBhcnJBZGRyZXNzZXMpIHtcbiAgICAgICAgICBpZiAoYXJyQWRkcmVzc2VzLmhhc093blByb3BlcnR5KGkpKSB7XG4gICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgICAvLyBkbyBub3QgYWRkIHR3aWNlXG4gICAgICAgICAgICAgIGlmICghYXJyRnJvbU5hbWVzLmluY2x1ZGVzKGFyckFkZHJlc3Nlc1tpXS5uYW1lKSkge1xuICAgICAgICAgICAgICAgIGFyckZyb21OYW1lcy5wdXNoKGFyckFkZHJlc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICBhcnJGcm9tUG9zaXRpb25zLnB1c2goYXJyQWRkcmVzc2VzW2ldLnBvcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICBpZiAoIWFyclRvTmFtZXMuaW5jbHVkZXMoYXJyQWRkcmVzc2VzW2ldLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgYXJyVG9OYW1lcy5wdXNoKGFyckFkZHJlc3Nlc1tpXS5uYW1lKTtcbiAgICAgICAgICAgICAgICBhcnJUb1Bvc2l0aW9ucy5wdXNoKGFyckFkZHJlc3Nlc1tpXS5wb3MpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHRyaWdnZXIga2V5ZG93biBldmVudCB0byBzaG93IGF1dG9jb21wbGV0ZSBvcHRpb25zXG4gICAgICAgIGxldCBldmVudCA9IGpRdWVyeS5FdmVudChcImtleWRvd25cIiwge2tleUNvZGU6IDh9KTtcbiAgICAgICAgJChjc3NJZCkudHJpZ2dlcihldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGNvb3JkaW5hdGVzIGFyZSB3aXRoaW4gdGhlIGJib3ggc3BlY2lmaWVkIGluIG9ialNldHRpbmdzLmJCb3guXG4gKiBAcGFyYW0gbG9uZ2l0dWRlXG4gKiBAcGFyYW0gbGF0aXR1ZGVcbiAqIEByZXR1cm5zIHtib29sZWFufVxuICovXG5mdW5jdGlvbiBpc0luQm91bmRpbmdCb3gobG9uZ2l0dWRlLCBsYXRpdHVkZSkge1xuICBpZiAodHlwZW9mIGxvbmdpdHVkZSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGxvbmdpdHVkZSA9IHBhcnNlRmxvYXQobG9uZ2l0dWRlKTtcbiAgfVxuICBpZiAodHlwZW9mIGxhdGl0dWRlID09PSBcInN0cmluZ1wiKSB7XG4gICAgbGF0aXR1ZGUgPSBwYXJzZUZsb2F0KGxhdGl0dWRlKTtcbiAgfVxuICBpZiAob2JqU2V0dGluZ3MuYkJveFswXSA8IGxvbmdpdHVkZSAmJlxuICAgIGxvbmdpdHVkZSA8IG9ialNldHRpbmdzLmJCb3hbMl0gJiZcbiAgICBvYmpTZXR0aW5ncy5iQm94WzFdIDwgbGF0aXR1ZGUgJiZcbiAgICBsYXRpdHVkZSA8IG9ialNldHRpbmdzLmJCb3hbM10pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuLyoqXG4gKiBjYWxscyByZXZlcnNlLWdlb3NlYXJjaCB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGFuIGFkZHJlc3Mtc3RyaW5nIGFuZCBzZXQgaXQgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBpbnB1dCAgICAgICBhZGRyZXNzLXN0cmluZyBmcm9tIGlucHV0XG4gKiBAcGFyYW0gY3NzSWQgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBzdWJtaXRTZWFyY2goaW5wdXQsIGNzc0lkKSB7XG4gIGxldCB1cmwgPSBvYmpTZXR0aW5ncy5wcm94eVVybCArIFwic2VhcmNoLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyBvYmpTZXR0aW5ncy5rZXlGb3J3YXJkICsgXCImcT1cIiArICQoaW5wdXQpLnZhbCgpO1xuICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgbGV0IGZhbHNlUmVzcG9uc2UgPSBmYWxzZTtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG4gICAgICBpZiAob2JqU2V0dGluZ3MuYkJveCAmJiBvYmpTZXR0aW5ncy5iQm94WzBdKSB7XG4gICAgICAgIGlmICghaXNJbkJvdW5kaW5nQm94KGRhdGFbMF0ubG9uLCBkYXRhWzBdLmxhdCkpIHtcbiAgICAgICAgICBmYWxzZVJlc3BvbnNlID0gb2JqU2V0dGluZ3MuZXJyTXNnQm91bmRzIHx8IGxhbmdDb25zdGFudHMuRVJST1JfT1VUX09GX0JPVU5EUztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZGF0YVswXSAmJiBkYXRhWzBdLmRpc3BsYXlfbmFtZSAmJiAhZmFsc2VSZXNwb25zZSkge1xuICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLXRvXCIpIHtcbiAgICAgICAgICB0cmF2ZWxEYXRhLnJvdXRlVG8ubG9jID0gW2RhdGFbMF0ubGF0LCBkYXRhWzBdLmxvbl07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgdHJhdmVsRGF0YS5yb3V0ZUZyb20ubG9jID0gW2RhdGFbMF0ubGF0LCBkYXRhWzBdLmxvbl07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRyYXZlbERhdGEucm91dGVGcm9tLmxvYy5sZW5ndGggPiAwICYmIHRyYXZlbERhdGEucm91dGVUby5sb2MubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmICghb2JqU2V0dGluZ3Muc3VibWl0QnV0dG9uKSB7XG4gICAgICAgICAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGZhbHNlUmVzcG9uc2UgPSBvYmpTZXR0aW5ncy5lcnJNc2dOb3RGb3VuZCB8fCBsYW5nQ29uc3RhbnRzLkVSUk9SX0ZBTFNFX0FERFJFU1M7XG4gICAgfVxuICAgIGlmIChmYWxzZVJlc3BvbnNlKSB7XG4gICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgYWxlcnRIYW5kbGVyLnNob3dJbmZvRGlhbG9nKGxhbmdDb25zdGFudHMuRVJST1IsIGZhbHNlUmVzcG9uc2UpO1xuICAgIH1cbiAgfSlcbiAgICAgIC5mYWlsKGZ1bmN0aW9uKCl7XG4gICAgICAgIGxldCBhbGVydEhhbmRsZXIgPSBuZXcgQWxlcnRIYW5kbGVyKCk7XG4gICAgICAgIGFsZXJ0SGFuZGxlci5zaG93SW5mb0RpYWxvZyhsYW5nQ29uc3RhbnRzLkVSUk9SLCBvYmpTZXR0aW5ncy5lcnJNc2dOb3RGb3VuZCB8fCBsYW5nQ29uc3RhbnRzLkVSUk9SX0ZBTFNFX0FERFJFU1MpO1xuICAgICAgfSk7XG5cbn1cblxuXG4vKipcbiAqIENoZWNrcyB3aGV0aGVyIGFsbCBwYXJhbXMgZm9yIHRoZSBjYWxjdWxhdGlvbiBvZiBhbiBleHBlbnNlIGFyZSBzZXQgYW5kIGNhbGxzIHRoZSBzZXJ2ZXIgYW5kIGRpc3BsYXlzIHRoZSByZXBzb25zZVxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZUV4cGVuc2VzICgpIHtcbiAgaWYgKHRyYXZlbERhdGEucm91dGVGcm9tLmxvYyAmJiB0cmF2ZWxEYXRhLnJvdXRlVG8ubG9jKSB7XG4gICAgbGV0IHVybCA9IFwiY29uNGdpcy9leHBlbnNlU2VydmljZS9cIiArIG9ialNldHRpbmdzLnNldHRpbmdJZCArIFwiL1wiICsgdHJhdmVsRGF0YS5yb3V0ZUZyb20ubG9jWzBdICsgXCIsXCIgKyB0cmF2ZWxEYXRhLnJvdXRlRnJvbS5sb2NbMV0gKyBcIjtcIiArIHRyYXZlbERhdGEucm91dGVUby5sb2NbMF0gKyBcIixcIiArIHRyYXZlbERhdGEucm91dGVUby5sb2NbMV07XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgbGV0IHRhYmxlTm9kZSA9ICQoXCIucm91dGUtb3V0cHV0XCIpO1xuICAgICAgaWYgKG9ialNldHRpbmdzLmRpc3BsYXlHcmlkID09PSAxKSB7XG4gICAgICAgIHRhYmxlTm9kZS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAgICAgJChcIi5yZXNwb25zZS1oZWFkbGluZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgJChcIi5yZXNwb25zZS12YWx1ZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgaWYgKGRhdGEudGltZSkge1xuICAgICAgICAgIGxldCBlbGVtZW50VGltZSA9ICQoXCIucmVzcG9uc2UtdGltZVwiKTtcbiAgICAgICAgICBlbGVtZW50VGltZS5odG1sKHRvSHVtYW5UaW1lKGRhdGEudGltZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRpc3QpIHtcbiAgICAgICAgICBsZXQgZWxlbWVudERpc3RhbmNlID0gJChcIi5yZXNwb25zZS1kaXN0XCIpO1xuICAgICAgICAgIGxldCByZXNwb25zZURpc3RhbmNlID0gdG9IdW1hbkRpc3RhbmNlKGRhdGEuZGlzdCAqIDEwMDApO1xuICAgICAgICAgIGVsZW1lbnREaXN0YW5jZS5odG1sKHJlc3BvbnNlRGlzdGFuY2UpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBpbnNlcnRBZnRlckhlYWQgPSAkKFwiLmhlYWRsaW5lLXRpbWVcIik7XG4gICAgICAgIGxldCBpbnNlcnRBZnRlclZhbCA9ICQoXCIucmVzcG9uc2UtdGltZVwiKTtcbiAgICAgICAgbGV0IGF1dG9BdXRvID0gXCJhdXRvIGF1dG8gXCI7XG4gICAgICAgIGZvcihsZXQgdGFyaWZmTmFtZSBpbiBkYXRhLnRhcmlmZnMpIHtcbiAgICAgICAgICBsZXQgbm9kZU5hbWUgPSAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKTtcbiAgICAgICAgICBub2RlTmFtZS5odG1sKHRhcmlmZk5hbWUpO1xuICAgICAgICAgIG5vZGVOYW1lLmFkZENsYXNzKFwicmVzcG9uc2UtaGVhZGxpbmVcIik7XG4gICAgICAgICAgbm9kZU5hbWUuYWRkQ2xhc3MoXCJncmlkLWl0ZW1cIik7XG4gICAgICAgICAgbm9kZU5hbWUuaW5zZXJ0QWZ0ZXIoaW5zZXJ0QWZ0ZXJIZWFkKTtcbiAgICAgICAgICBpbnNlcnRBZnRlckhlYWQgPSBub2RlTmFtZTtcbiAgICAgICAgICBsZXQgcmVzcG9uc2VFbGVtZW50ID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSk7XG4gICAgICAgICAgbGV0IHJlc3BvbnNlVGFyaWZmID0gcm91bmRUb1R3byhkYXRhLnRhcmlmZnNbdGFyaWZmTmFtZV0pICsgXCJcIjtcbiAgICAgICAgICBpZiAob2JqU2V0dGluZ3MubGFuZyA9PT0gXCJkZVwiKSB7XG4gICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXNwb25zZUVsZW1lbnQuaHRtbChyZXNwb25zZVRhcmlmZiArIFwiIOKCrFwiKTtcbiAgICAgICAgICByZXNwb25zZUVsZW1lbnQuYWRkQ2xhc3MoXCJyZXNwb25zZS12YWx1ZVwiKTtcbiAgICAgICAgICByZXNwb25zZUVsZW1lbnQuYWRkQ2xhc3MoXCJncmlkLWl0ZW1cIik7XG4gICAgICAgICAgcmVzcG9uc2VFbGVtZW50Lmluc2VydEFmdGVyKGluc2VydEFmdGVyVmFsKTtcbiAgICAgICAgICBpbnNlcnRBZnRlclZhbCA9IHJlc3BvbnNlRWxlbWVudDtcbiAgICAgICAgICBhdXRvQXV0byArPSBcImF1dG8gXCI7XG4gICAgICAgIH1cbiAgICAgICAgdGFibGVOb2RlLmNzcyhcImdyaWQtdGVtcGxhdGUtY29sdW1uc1wiLCBhdXRvQXV0byk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdGFibGVOb2RlLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgJChcIi5yZXNwb25zZS1oZWFkbGluZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgJChcIi5yZXNwb25zZS12YWx1ZVwiKS5yZW1vdmUoKTtcbiAgICAgICAgaWYgKGRhdGEudGltZSkge1xuICAgICAgICAgIGxldCBlbGVtZW50VGltZSA9ICQoXCIucmVzcG9uc2UtdGltZVwiKTtcbiAgICAgICAgICBlbGVtZW50VGltZS5odG1sKHRvSHVtYW5UaW1lKGRhdGEudGltZSkpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkYXRhLmRpc3QpIHtcbiAgICAgICAgICBsZXQgZWxlbWVudERpc3RhbmNlID0gJChcIi5yZXNwb25zZS1kaXN0XCIpO1xuICAgICAgICAgIGxldCByZXNwb25zZURpc3RhbmNlID0gZGF0YS5kaXN0ICsgXCJcIjtcbiAgICAgICAgICByZXNwb25zZURpc3RhbmNlID0gcmVzcG9uc2VEaXN0YW5jZS5yZXBsYWNlKCcuJywnLicpO1xuICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZURpc3RhbmNlLmluZGV4T2YoJywnKSArIDM7XG4gICAgICAgICAgZWxlbWVudERpc3RhbmNlLmh0bWwocmVzcG9uc2VEaXN0YW5jZS5zdWJzdHJpbmcoMCwgaW5kZXhEZWNpbWFsICsgMykgKyBcIiBrbVwiKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGVhZGxpbmRlTm9kZSA9ICQoXCIucm91dGUtb3V0cHV0LWhlYWRsaW5lXCIpO1xuICAgICAgICBsZXQgcmVzcG9uc2VOb2RlID0gJChcIi5yb3V0ZS1vdXRwdXQtdmFsdWVzXCIpO1xuICAgICAgICBmb3IobGV0IHRhcmlmZk5hbWUgaW4gZGF0YS50YXJpZmZzKSB7XG4gICAgICAgICAgaWYgKGRhdGEudGFyaWZmcy5oYXNPd25Qcm9wZXJ0eSh0YXJpZmZOYW1lKSkge1xuICAgICAgICAgICAgbGV0IGhlYWRsaW5lRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJyk7XG4gICAgICAgICAgICBoZWFkbGluZUVsZW1lbnQuaW5uZXJIVE1MID0gdGFyaWZmTmFtZTtcbiAgICAgICAgICAgICQoaGVhZGxpbmVFbGVtZW50KS5hZGRDbGFzcyhcInJlc3BvbnNlLWhlYWRsaW5lXCIpO1xuICAgICAgICAgICAgbGV0IHJlc3BvbnNlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJyk7XG4gICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhLnRhcmlmZnNbdGFyaWZmTmFtZV0gKyBcIlwiO1xuICAgICAgICAgICAgcmVzcG9uc2VUYXJpZmYgPSByZXNwb25zZVRhcmlmZi5yZXBsYWNlKFwiLlwiLFwiLFwiKTtcbiAgICAgICAgICAgIGxldCBpbmRleERlY2ltYWwgPSByZXNwb25zZVRhcmlmZi5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgcmVzcG9uc2VFbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCI7XG4gICAgICAgICAgICAkKHJlc3BvbnNlRWxlbWVudCkuYWRkQ2xhc3MoXCJyZXNwb25zZS12YWx1ZVwiKTtcbiAgICAgICAgICAgIGhlYWRsaW5kZU5vZGUuYXBwZW5kKGhlYWRsaW5lRWxlbWVudCk7XG4gICAgICAgICAgICByZXNwb25zZU5vZGUuYXBwZW5kKHJlc3BvbnNlRWxlbWVudCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfVxufVxuXG4vKipcbiAqIEluaXRpYWwgZnVuY3Rpb24gdG8gZW5hYmxlIHVzZXItaW5wdXQgdG8gdGhlIGd1aVxuICogQHJldHVybnMge3ZvaWR9fVxuICovXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgbGV0IGxhbmd1YWdlID0gb2JqU2V0dGluZ3MubGFuZyB8fCBvYmpTZXR0aW5ncy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IG9ialNldHRpbmdzLm5hdmlnYXRvci5sYW5ndWFnZTtcbiAgaWYgKGxhbmd1YWdlID09PSBcImVuXCIpIHtcbiAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0cmF2ZWxDb25zdGFudHNFbmdsaXNoKVxuICB9XG4gIGVsc2UgaWYgKGxhbmd1YWdlID09PSBcImRlXCIpIHtcbiAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0cmF2ZWxDb25zdGFudHNHZXJtYW4pO1xuICB9XG4gIGVsc2Uge1xuICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRyYXZlbENvbnN0YW50c0VuZ2xpc2gpO1xuICB9XG4gIGxldCBvYmpJbnB1dEZyb20gPSAkKFwiLnJvdXRlLWZyb21cIik7XG4gIGlmIChvYmpJbnB1dEZyb21bMF0pIHtcbiAgICBvYmpJbnB1dEZyb21bMF0ucGxhY2Vob2xkZXIgPSBvYmpTZXR0aW5ncy5zZWFyY2hQbGFjZWhvbGRlciB8fCBsYW5nQ29uc3RhbnRzLkRVTU1ZX0lOUFVUO1xuICB9XG4gIGxldCBvYmpJbnB1dFRvID0gJChcIi5yb3V0ZS10b1wiKTtcbiAgaWYgKG9iaklucHV0VG9bMF0pIHtcbiAgICBvYmpJbnB1dFRvWzBdLnBsYWNlaG9sZGVyID0gb2JqU2V0dGluZ3Muc2VhcmNoUGxhY2Vob2xkZXIgfHwgbGFuZ0NvbnN0YW50cy5EVU1NWV9JTlBVVDtcbiAgfVxuICBsZXQgb2JqSGVhZGxpbmVEaXN0ID0gJChcIi5oZWFkbGluZS1kaXN0XCIpO1xuICBvYmpIZWFkbGluZURpc3QuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1QpO1xuICBsZXQgb2JqSGVhZGxpbmVUaW1lID0gJChcIi5oZWFkbGluZS10aW1lXCIpO1xuICBvYmpIZWFkbGluZVRpbWUuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX1RJTUUpO1xuXG4gIC8vIHN1Ym1pdHMgc2VhcmNoIG9uIFwiZW50ZXJcIiwgYXV0b2NvbXBsZXRlcyBhZGRyZXNzIGFmdGVyIDAuNSBzZWNvbmRzIG90aGVyd2lzZVxuICBjb25zdCBlbnRlckxpc3RlbmVyID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDEzKSB7XG4gICAgICBzdWJtaXRTZWFyY2goc2NvcGUsIFwiLlwiICsgc2NvcGUuY2xhc3NMaXN0WzBdKTtcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDggfHwgKGV2ZW50LmtleUNvZGUgPj0gMzcgJiYgZXZlbnQua2V5Q29kZSA8PSA0MCkgfHwgZXZlbnQua2V5Q29kZSA9PT0gOSkge1xuICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoJChzY29wZSkudmFsKCkubGVuZ3RoID09IDAgJiYgIWV2ZW50LmtleUNvZGUpIHtcbiAgICAgICAgbGV0IHRhYmxlTm9kZSA9ICQoXCIucm91dGUtb3V0cHV0XCIpO1xuICAgICAgICBsZXQgY3NzQ2xhc3MgPSBzY29wZS5jbGFzc0xpc3RbMF07XG4gICAgICAgIGlmIChjc3NDbGFzcyA9PT0gXCJyb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICB0cmF2ZWxEYXRhLnJvdXRlRnJvbSA9IHt9O1xuICAgICAgICAgIGFyckZyb21OYW1lcyA9IFtdO1xuICAgICAgICAgIGFyckZyb21Qb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjc3NDbGFzcyA9PT0gXCJyb3V0ZS10b1wiKXtcbiAgICAgICAgICB0cmF2ZWxEYXRhLnJvdXRlVG8gPSB7fTtcbiAgICAgICAgICBhcnJUb05hbWVzID0gW107XG4gICAgICAgICAgYXJyVG9Qb3NpdGlvbnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVGhpcyBpcyB3ZWlyZFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0YWJsZU5vZGUuY3NzKFwiZGlzcGxheVwiLFwibm9uZVwiKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBsZXQgY3VyclRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkpO1xuICAgICAgICBzY29wZS5jb3VudGVyID0gY3VyclRpbWU7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKHNjb3BlLmNvdW50ZXIgJiYgc2NvcGUuY291bnRlciArIDQwMCA8IE1hdGguZmxvb3IoRGF0ZS5ub3coKSkpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBzY29wZS5jb3VudGVyO1xuICAgICAgICAgICAgYXV0b2NvbXBsZXRlQWRkcmVzcygkKHNjb3BlKS52YWwoKSwgXCIuXCIgKyBzY29wZS5jbGFzc0xpc3RbMF0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSw1MDApO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBvYmpJbnB1dEZyb20uYXV0b2NvbXBsZXRlKHtcbiAgICBzb3VyY2U6IGFyckZyb21OYW1lc1xuICB9KTtcbiAgb2JqSW5wdXRGcm9tLm9uKCdrZXlkb3duJywgZW50ZXJMaXN0ZW5lcik7XG4gIGlmIChvYmpTZXR0aW5ncy5kZWxCdXR0b24pIHtcbiAgICBvYmpJbnB1dEZyb20ub24oJ3NlYXJjaCcsIGVudGVyTGlzdGVuZXIpO1xuICB9XG4gIG9iaklucHV0RnJvbS5vbignYXV0b2NvbXBsZXRlc2VsZWN0JywgZnVuY3Rpb24oZXZlbnQsIHVpKXtcbiAgICBsZXQgdmFsdWUgPSB1aS5pdGVtLnZhbHVlO1xuICAgIHRyYXZlbERhdGEucm91dGVGcm9tLmxvYyA9IGFyckZyb21Qb3NpdGlvbnNbYXJyRnJvbU5hbWVzLmZpbmRJbmRleChcbiAgICAgIGRhbmdlciA9PiBkYW5nZXIgPT09IHZhbHVlXG4gICAgKV07XG4gICAgaWYgKCFvYmpTZXR0aW5ncy5zdWJtaXRCdXR0b24pIHtcbiAgICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG4gICAgfVxuICB9KTtcblxuICBvYmpJbnB1dFRvLmF1dG9jb21wbGV0ZSh7XG4gICAgc291cmNlOiBhcnJUb05hbWVzXG4gIH0pO1xuICBvYmpJbnB1dFRvLm9uKCdrZXlkb3duJywgZW50ZXJMaXN0ZW5lcik7XG4gIG9iaklucHV0VG8ub24oJ2F1dG9jb21wbGV0ZXNlbGVjdCcsIGZ1bmN0aW9uKGV2ZW50LCB1aSl7XG4gICAgbGV0IHZhbHVlID0gdWkuaXRlbS52YWx1ZTtcbiAgICB0cmF2ZWxEYXRhLnJvdXRlVG8ubG9jID0gYXJyVG9Qb3NpdGlvbnNbYXJyVG9OYW1lcy5maW5kSW5kZXgoXG4gICAgICBkYW5nZXIgPT4gZGFuZ2VyID09PSB2YWx1ZVxuICAgICldO1xuICAgIGlmICghb2JqU2V0dGluZ3Muc3VibWl0QnV0dG9uKSB7XG4gICAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuICAgIH1cbiAgfSk7XG5cbiAgb2JqSW5wdXRGcm9tLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgc2V0Um91dGVGcm9tKGFkZHJlc3MpO1xuICB9KTtcblxuICBvYmpJbnB1dFRvLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBsZXQgYWRkcmVzcyA9ICQodGhpcykudmFsKCk7XG4gICAgc2V0Um91dGVUbyhhZGRyZXNzKTtcbiAgfSk7XG4gIGlmIChvYmpTZXR0aW5ncy5zdWJtaXRCdXR0b24pIHtcbiAgICBsZXQgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi1zdWJtaXQtZXhwZW5zZS1jYWxjJyk7XG4gICAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IGxhbmdDb25zdGFudHMuU1RBUlRfU0VBUkNIO1xuICAgICQoc3VibWl0QnV0dG9uKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh0cmF2ZWxEYXRhLnJvdXRlRnJvbS5sb2MgJiYgdHJhdmVsRGF0YS5yb3V0ZVRvLmxvYykge1xuICAgICAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHRyYXZlbERhdGEucm91dGVGcm9tLmxvYyA9IFtdO1xuICAgICAgICB0cmF2ZWxEYXRhLnJvdXRlVG8ubG9jID0gW107XG4gICAgICAgIHN1Ym1pdFNlYXJjaChvYmpJbnB1dEZyb20sIFwiLnJvdXRlLWZyb21cIik7XG4gICAgICAgIHN1Ym1pdFNlYXJjaChvYmpJbnB1dFRvLCBcIi5yb3V0ZS10b1wiKTsgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgJChcIi5yb3V0ZS1mcm9tLWdlb2xvY2F0aW9uXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlUm91dGVGcm9tUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICB9XG4gIH0pO1xuXG4gICQoXCIucm91dGUtdG8tZ2VvbG9jYXRpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xuICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihoYW5kbGVSb3V0ZVRvUG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJUaGUgZ2VvbG9jYXRpb24gQVBJIGlzIG5vdCBhdmFpbGFibGUgaW4geW91ciBicm93c2VyLiBDb25zaWRlciB1cGRhdGluZyBpdCBvciBzd2l0Y2hpbmcgdG8gYSBuZXdlciBicm93c2VyLlwiKTtcbiAgICB9XG4gIH0pO1xuXG4gIGxldCBvYmpIZWFkbGluZURpc3RQcmljZSA9ICQoXCIuaGVhZGxpbmUtZGlzdC1wcmljZVwiKTtcbiAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UpO1xuICBsZXQgb2JqSGVhZGxpbmVUaW1lUHJpY2UgPSAkKFwiLmhlYWRsaW5lLXRpbWUtcHJpY2VcIik7XG4gIG9iakhlYWRsaW5lVGltZVByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9USU1FX1BSSUNFKTtcbiAgbGV0IG9iakhlYWRsaW5lQmFzZVByaWNlID0gJChcIi5oZWFkbGluZS1iYXNlLXByaWNlXCIpO1xuICBvYmpIZWFkbGluZUJhc2VQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfQkFTRV9QUklDRSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9