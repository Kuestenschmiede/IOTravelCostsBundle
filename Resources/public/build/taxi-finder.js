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

/***/ "../CoreBundle/Resources/public/js/AlertHandler.js":
/*!*********************************************************!*\
  !*** ../CoreBundle/Resources/public/js/AlertHandler.js ***!
  \*********************************************************/
/*! exports provided: AlertHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertHandler", function() { return AlertHandler; });
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ "../CoreBundle/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
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
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(title, content, "error");
  }

  showInfoDialog(title, content) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire(title, content, "info");
  }

  showConfirmDialog(title, text, confirmCallback, cancelCallback, confirmText, cancelText) {
    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
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
    const { value: selectedValue } = await sweetalert2__WEBPACK_IMPORTED_MODULE_1___default.a.fire({
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
  ERROR_OUT_OF_BOUNDS: 'Adresse außerhalb des Tarifgebiets',
  ERROR_FALSE_ADDRESS: 'Adresse nicht gefunden',
  ERROR: 'Fehler',
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
  ERROR_OUT_OF_BOUNDS: 'Address is out of bounds',
  ERROR_FALSE_ADDRESS: 'Address not found',
  ERROR: 'Error',
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
/* harmony import */ var _CoreBundle_Resources_public_js_AlertHandler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../CoreBundle/Resources/public/js/AlertHandler */ "../CoreBundle/Resources/public/js/AlertHandler.js");







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
        if (data.length > 0) {

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
        } else {}
    });
}

/**
 * calls reverse-geosearch to set coordinates for an address-string and set it to the script-scoped variable
 * @param input       address-string from input
 * @param cssid       css-class to set response-property to
 * @returns {void}}
 */
function submitSearch(input, cssId) {
    let url = window.proxyUrl + "search.php?format=json&key=" + window.keyForward + "&q=" + $(input).val();
    $.ajax({ url: url }).done(function (data) {
        let falseResponse = false;
        if (data.length > 0) {
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
                } else {
                    falseResponse = langConstants.ERROR_OUT_OF_BOUNDS;
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
        } else {
            falseResponse = langConstants.ERROR_FALSE_ADDRESS;
        }
        if (falseResponse) {
            let alertHandler = new _CoreBundle_Resources_public_js_AlertHandler__WEBPACK_IMPORTED_MODULE_3__["AlertHandler"]();
            alertHandler.showInfoDialog(langConstants.ERROR, falseResponse);
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
function showAdressError(errorText) {
    let errorDiv = document.createElement('div');
    $(errorDiv).addClass('contentError');
    $(errorDiv).addClass('contentHeadline');

    let errorLabel = document.createElement('label');
    errorLabel.innerHTML = errorText;
    errorDiv.appendChild(errorLabel);
    let buttonClose = document.createElement('button');
    $(buttonClose).addClass(_taxi_constants_js__WEBPACK_IMPORTED_MODULE_2__["taxiConstants"].POPUP_CLOSE);
    $(buttonClose).addClass(_taxi_constants_js__WEBPACK_IMPORTED_MODULE_2__["taxiConstants"].ICON);
    $(buttonClose).on('click', function () {
        $(this).parent().remove();
    });
    errorDiv.appendChild(buttonClose);
    return errorDiv;
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
            submitSearch(scope, "." + scope.classList[0]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4uL0NvcmVCdW5kbGUvUmVzb3VyY2VzL3B1YmxpYy9qcy9BbGVydEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL0NvcmVCdW5kbGUvbm9kZV9tb2R1bGVzL3N3ZWV0YWxlcnQyL2Rpc3Qvc3dlZXRhbGVydDIuYWxsLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWRlLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudC1pMThuLWVuLmpzIiwid2VicGFjazovLy8uL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vUmVzb3VyY2VzL3B1YmxpYy9qcy90YXhpLWZpbmRlci5qcyJdLCJuYW1lcyI6WyJBbGVydEhhbmRsZXIiLCJzaG93RXJyb3JEaWFsb2ciLCJ0aXRsZSIsImNvbnRlbnQiLCJTd2FsIiwiZmlyZSIsInNob3dJbmZvRGlhbG9nIiwic2hvd0NvbmZpcm1EaWFsb2ciLCJ0ZXh0IiwiY29uZmlybUNhbGxiYWNrIiwiY2FuY2VsQ2FsbGJhY2siLCJjb25maXJtVGV4dCIsImNhbmNlbFRleHQiLCJ0eXBlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImRhbmdlck1vZGUiLCJ0aGVuIiwid2lsbERlbGV0ZSIsInZhbHVlIiwic2hvd1NlbGVjdERpYWxvZyIsIm9iak9wdGlvbnMiLCJzZWxlY3RlZFZhbHVlIiwiaW5wdXQiLCJpbnB1dE9wdGlvbnMiLCJpbnB1dFBsYWNlaG9sZGVyIiwidGF4aUNvbnN0YW50c0dlcm1hbiIsIkRVTU1ZX0lOUFVUIiwiSEVBRExJTkVfRElTVCIsIkhFQURMSU5FX1RJTUUiLCJIRUFETElORV9CQVNFX1BSSUNFIiwiSEVBRExJTkVfRElTVF9QUklDRSIsIkhFQURMSU5FX1RJTUVfUFJJQ0UiLCJFUlJPUl9PVVRfT0ZfQk9VTkRTIiwiRVJST1JfRkFMU0VfQUREUkVTUyIsIkVSUk9SIiwiTk9ORSIsInRheGlDb25zdGFudHNFbmdsaXNoIiwidGF4aUNvbnN0YW50cyIsImxvbCIsIiQiLCJqUXVlcnkiLCJsYW5nQ29uc3RhbnRzIiwiYXJyRnJvbU5hbWVzIiwiYXJyRnJvbVBvc2l0aW9ucyIsImFyclRvTmFtZXMiLCJhcnJUb1Bvc2l0aW9ucyIsInRheGlEYXRhIiwicm91dGVGcm9tIiwicm91dGVUbyIsInJvdXRlRnJvbUlucHV0Iiwicm91dGVUb0lucHV0Iiwic2V0Um91dGVGcm9tIiwiYWRkcmVzcyIsImFkcmVzcyIsInNldFJvdXRlVG8iLCJoYW5kbGVSb3V0ZUZyb21Qb3NpdGlvbiIsImNvb3JkaW5hdGVzIiwiaGFuZGxlUG9zaXRpb24iLCJjYWxjdWxhdGVFeHBlbnNlcyIsImhhbmRsZVJvdXRlVG9Qb3NpdGlvbiIsInRvSHVtYW5EaXN0YW5jZSIsImRpc3RhbmNlSW5NZXRlcnMiLCJkaXN0YW5jZSIsImh1bWFuRGlzdGFuY2UiLCJwYXJzZUludCIsInRvRml4ZWQiLCJ0b0h1bWFuVGltZSIsInRpbWVJblNlY29uZHMiLCJzZWNvbmRzIiwibWludXRlcyIsImhvdXJzIiwiaHVtYW5UaW1lIiwiY3NzSWQiLCJwcm9wTmFtZSIsImNvb3JkcyIsIndpbmRvdyIsImJCb3giLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsImxvYyIsInVybCIsInByb3h5VXJsIiwia2V5UmV2ZXJzZSIsImFqYXgiLCJkb25lIiwiZGF0YSIsInBlZGVzdHJpYW4iLCJob3VzZV9udW1iZXIiLCJwYXRoIiwibGVuZ3RoIiwicG9zdGNvZGUiLCJ0b3duIiwidmFsIiwiaGFuZGxlQWRyZXNzIiwia2V5Rm9yd2FyZCIsImRpc3BsYXlfbmFtZSIsImkiLCJoYXNPd25Qcm9wZXJ0eSIsImxvbiIsImxhdCIsInB1c2giLCJhdXRvY29tcGxldGUiLCJzb3VyY2UiLCJzdWJtaXRTZWFyY2giLCJmYWxzZVJlc3BvbnNlIiwiYWxlcnRIYW5kbGVyIiwiZmluZFRhcmlmZnMiLCJzZXR0aW5nSWQiLCJwYXJlbnQiLCJkaXNwbGF5R3JpZCIsImNzcyIsInJvd0NvdW50IiwiaXRlbU5hbWUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJpdGVtQmFzZVByaWNlIiwiYmFzZVByaWNlIiwiaXRlbURpc3RQcmljZSIsImRpc3RQcmljZSIsIml0ZW1UaW1lUHJpY2UiLCJ0aW1lUHJpY2UiLCJlbGVtZW50Um93Iiwic2hvd0FkcmVzc0Vycm9yIiwiZXJyb3JUZXh0IiwiZXJyb3JEaXYiLCJhZGRDbGFzcyIsImVycm9yTGFiZWwiLCJhcHBlbmRDaGlsZCIsImJ1dHRvbkNsb3NlIiwiUE9QVVBfQ0xPU0UiLCJJQ09OIiwib24iLCJyZW1vdmUiLCJ0YWJsZU5vZGUiLCJ0aW1lIiwiZWxlbWVudFRpbWUiLCJodG1sIiwiZGlzdCIsImVsZW1lbnREaXN0YW5jZSIsInJlc3BvbnNlRGlzdGFuY2UiLCJyZXBsYWNlIiwiaW5kZXhEZWNpbWFsIiwiaW5kZXhPZiIsInN1YnN0cmluZyIsImluc2VydEFmdGVySGVhZCIsImluc2VydEFmdGVyVmFsIiwiYXV0b0F1dG8iLCJ0YXJpZmZOYW1lIiwidGFyaWZmcyIsIm5vZGVOYW1lIiwiaW5zZXJ0QWZ0ZXIiLCJyZXNwb25zZUVsZW1lbnQiLCJyZXNwb25zZVRhcmlmZiIsImhlYWRsaW5kZU5vZGUiLCJyZXNwb25zZU5vZGUiLCJoZWFkbGluZUVsZW1lbnQiLCJyZWFkeSIsImxhbmd1YWdlIiwic2VydmljZUxhbmciLCJuYXZpZ2F0b3IiLCJ1c2VyTGFuZ3VhZ2UiLCJleHRlbmQiLCJKU09OIiwicGFyc2UiLCJvYmpJbnB1dEZyb20iLCJwbGFjZWhvbGRlciIsIm9iaklucHV0VG8iLCJvYmpIZWFkbGluZURpc3QiLCJvYmpIZWFkbGluZVRpbWUiLCJlbnRlckxpc3RlbmVyIiwiZXZlbnQiLCJzY29wZSIsImtleUNvZGUiLCJjbGFzc0xpc3QiLCJjdXJyVGltZSIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJjb3VudGVyIiwic2V0VGltZW91dCIsInVpIiwiaXRlbSIsImZpbmRJbmRleCIsImRhbmdlciIsImdlb2xvY2F0aW9uIiwiZ2V0Q3VycmVudFBvc2l0aW9uIiwiY29uc29sZSIsIndhcm4iLCJvYmpIZWFkbGluZURpc3RQcmljZSIsIm9iakhlYWRsaW5lVGltZVByaWNlIiwib2JqSGVhZGxpbmVCYXNlUHJpY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBOztBQUVPLE1BQU1BLFlBQU4sQ0FBbUI7O0FBRXhCQyxrQkFBZ0JDLEtBQWhCLEVBQXVCQyxPQUF2QixFQUFnQztBQUM5QkMsc0RBQUlBLENBQUNDLElBQUwsQ0FBVUgsS0FBVixFQUFpQkMsT0FBakIsRUFB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Q0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLEdBQUcsRUFBRTs7QUFFTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsdzZDQUF3NkM7O0FBRXg2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixHQUFHO0FBQ0gsb0NBQW9DO0FBQ3BDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBOEQ7O0FBRTlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQsNEVBQTRFO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1Qzs7QUFFdkM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7OztBQUdILDJEQUEyRDs7QUFFM0QsaURBQWlEOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMENBQTBDOztBQUUxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUIsdUJBQXVCO0FBQ3hDO0FBQ0EsOERBQThEOztBQUU5RCx5REFBeUQ7O0FBRXpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsNkJBQTZCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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U0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUsseUJBQXlCOztBQUU5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7OztBQUdIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7O0FBRUY7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHOzs7QUFHSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQzs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSCx1Q0FBdUMsRUFBRTs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0ZBQWtGLCtCQUErQixFQUFFO0FBQ25IO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUM7QUFDakM7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsMkRBQTJELEtBQUs7QUFDaEUsR0FBRztBQUNIO0FBQ0E7QUFDQSxzREFBc0QsTUFBTSxRQUFRLEtBQUs7QUFDekU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHOzs7QUFHSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7O0FBR0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxHQUFHOzs7QUFHSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0I7O0FBRXBCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsK0JBQStCOztBQUUvQjtBQUNBLDZCQUE2Qjs7QUFFN0I7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7O0FBR0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSwwREFBMEQ7O0FBRTFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7OztBQUdMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTs7O0FBR047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07OztBQUdOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjs7QUFFQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsYUFBYTs7QUFFYixXQUFXO0FBQ1g7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsbUJBQW1CLG9CQUFvQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7OztBQUdMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxxQ0FBcUM7QUFDckM7O0FBRUE7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7OztBQUdSO0FBQ0E7QUFDQSwrQ0FBK0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSw0RUFBNEU7O0FBRTVFLHNCQUFzQiwrQkFBK0I7QUFDckQsa0NBQWtDOztBQUVsQztBQUNBLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTs7QUFFQTtBQUNBLE9BQU87OztBQUdQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQSx5QkFBeUIsZ0NBQWdDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQixPQUFPO0FBQ1A7QUFDQTtBQUNBLHdDQUF3QztBQUN4QyxTQUFTO0FBQ1Q7QUFDQSxTQUFTOztBQUVULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSzs7O0FBR0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQSxpQ0FBaUM7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvQkFBb0I7O0FBRXBCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFFQUFxRSxhQUFhO0FBQ2xGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOzs7QUFHRixnREFBZ0Q7OztBQUdoRCxvQ0FBb0M7OztBQUdwQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBLENBQUM7QUFDRCxxREFBcUQ7O0FBRXJELDRDQUE0QywrQkFBK0IsaUhBQWlILFNBQVMsY0FBYyxTQUFTLGVBQWUsOEJBQThCLDhCQUE4QixHQUFHLDRCQUE0QixvQkFBb0IsSUFBSSw4QkFBOEIsc0JBQXNCLElBQUksNkJBQTZCLHFCQUFxQixLQUFLLDJCQUEyQixvQkFBb0Isc0JBQXNCLEdBQUcsNEJBQTRCLG9CQUFvQixJQUFJLDhCQUE4QixzQkFBc0IsSUFBSSw2QkFBNkIscUJBQXFCLEtBQUssMkJBQTJCLG9CQUFvQiw4QkFBOEIsR0FBRywyQkFBMkIsbUJBQW1CLFVBQVUsS0FBSyw0QkFBNEIsb0JBQW9CLFdBQVcsc0JBQXNCLEdBQUcsMkJBQTJCLG1CQUFtQixVQUFVLEtBQUssNEJBQTRCLG9CQUFvQixXQUFXLGtEQUFrRCxHQUFHLGFBQWEsYUFBYSxRQUFRLElBQUksYUFBYSxZQUFZLFFBQVEsSUFBSSxhQUFhLGFBQWEsY0FBYyxJQUFJLFFBQVEsY0FBYyxlQUFlLEtBQUssYUFBYSxZQUFZLGdCQUFnQiwwQ0FBMEMsR0FBRyxhQUFhLGFBQWEsUUFBUSxJQUFJLGFBQWEsWUFBWSxRQUFRLElBQUksYUFBYSxhQUFhLGNBQWMsSUFBSSxRQUFRLGNBQWMsZUFBZSxLQUFLLGFBQWEsWUFBWSxnQkFBZ0IsbURBQW1ELEdBQUcsWUFBWSxjQUFjLFFBQVEsSUFBSSxZQUFZLGNBQWMsUUFBUSxJQUFJLGFBQWEsUUFBUSxlQUFlLEtBQUssWUFBWSxXQUFXLGdCQUFnQiwyQ0FBMkMsR0FBRyxZQUFZLGNBQWMsUUFBUSxJQUFJLFlBQVksY0FBYyxRQUFRLElBQUksYUFBYSxRQUFRLGVBQWUsS0FBSyxZQUFZLFdBQVcsZ0JBQWdCLHNEQUFzRCxHQUFHLGlDQUFpQyx5QkFBeUIsR0FBRyxpQ0FBaUMseUJBQXlCLElBQUksa0NBQWtDLDBCQUEwQixLQUFLLGtDQUFrQywyQkFBMkIsOENBQThDLEdBQUcsaUNBQWlDLHlCQUF5QixHQUFHLGlDQUFpQyx5QkFBeUIsSUFBSSxrQ0FBa0MsMEJBQTBCLEtBQUssa0NBQWtDLDJCQUEyQiw4Q0FBOEMsR0FBRyxtQkFBbUIsNEJBQTRCLG9CQUFvQixVQUFVLElBQUksbUJBQW1CLDRCQUE0QixvQkFBb0IsVUFBVSxJQUFJLG1CQUFtQiw4QkFBOEIsc0JBQXNCLEtBQUssYUFBYSwyQkFBMkIsbUJBQW1CLFdBQVcsc0NBQXNDLEdBQUcsbUJBQW1CLDRCQUE0QixvQkFBb0IsVUFBVSxJQUFJLG1CQUFtQiw0QkFBNEIsb0JBQW9CLFVBQVUsSUFBSSxtQkFBbUIsOEJBQThCLHNCQUFzQixLQUFLLGFBQWEsMkJBQTJCLG1CQUFtQixXQUFXLDRDQUE0QyxHQUFHLGtDQUFrQywwQkFBMEIsVUFBVSxLQUFLLDZCQUE2QixxQkFBcUIsV0FBVyxvQ0FBb0MsR0FBRyxrQ0FBa0MsMEJBQTBCLFVBQVUsS0FBSyw2QkFBNkIscUJBQXFCLFdBQVcsd0NBQXdDLDZCQUE2QixvREFBb0QsNkJBQTZCLGtEQUFrRCxNQUFNLFdBQVcsWUFBWSxTQUFTLG1DQUFtQywyQkFBMkIsOEdBQThHLE1BQU0sUUFBUSxZQUFZLFVBQVUsK0dBQStHLE1BQU0sV0FBVyxZQUFZLE9BQU8scUhBQXFILFFBQVEsV0FBVyxZQUFZLE9BQU8sbUNBQW1DLDJCQUEyQixxREFBcUQsUUFBUSxXQUFXLFlBQVksU0FBUyx1Q0FBdUMsK0JBQStCLG9IQUFvSCxRQUFRLFFBQVEsWUFBWSxVQUFVLG1DQUFtQywyQkFBMkIscUhBQXFILFNBQVMsV0FBVyxTQUFTLE9BQU8scURBQXFELFNBQVMsV0FBVyxTQUFTLFNBQVMsbUNBQW1DLDJCQUEyQixvSEFBb0gsU0FBUyxRQUFRLFNBQVMsVUFBVSxxQ0FBcUMsc0JBQXNCLG9CQUFvQixvREFBb0QsT0FBTyxtQkFBbUIsYUFBYSxtQkFBbUIsb0RBQW9ELHVCQUF1QixrREFBa0QsV0FBVyxvQkFBb0IsY0FBYywrREFBK0QsY0FBYyx5QkFBeUIsbUJBQW1CLG1CQUFtQixXQUFXLGVBQWUsa0JBQWtCLDhCQUE4Qix1Q0FBdUMsbUJBQW1CLHNDQUFzQyxZQUFZLDJCQUEyQixjQUFjLGNBQWMsdUNBQXVDLGdCQUFnQixpQkFBaUIsZUFBZSxzQ0FBc0MsZ0JBQWdCLFdBQVcsWUFBWSxlQUFlLHdDQUF3QywyQkFBMkIsY0FBYyxxQ0FBcUMsVUFBVSxjQUFjLFdBQVcsU0FBUyw2Q0FBNkMsYUFBYSxtQkFBbUIsY0FBYyxnQkFBZ0IsbUVBQW1FLDZDQUE2QyxpQkFBaUIsdUVBQXVFLFVBQVUsV0FBVyw0RUFBNEUsV0FBVyxjQUFjLHlGQUF5RixhQUFhLDBGQUEwRixjQUFjLHdDQUF3QywwQkFBMEIsWUFBWSxpQkFBaUIsdUNBQXVDLGlCQUFpQix1QkFBdUIsY0FBYyw2Q0FBNkMsK0RBQStELHdDQUF3QyxxQkFBcUIsNkVBQTZFLGtCQUFrQixZQUFZLFdBQVcsZ0NBQWdDLHdCQUF3QixrQkFBa0IsMEZBQTBGLFVBQVUsV0FBVyxpQ0FBaUMseUJBQXlCLGlDQUFpQyx5QkFBeUIsMEJBQTBCLDJGQUEyRixXQUFXLGFBQWEsaUNBQWlDLHlCQUF5QiwwQkFBMEIsNERBQTRELFVBQVUsV0FBVywyREFBMkQsTUFBTSxhQUFhLGNBQWMsZ0JBQWdCLG9FQUFvRSxlQUFlLGdGQUFnRixZQUFZLGFBQWEsWUFBWSxpRkFBaUYsWUFBWSxjQUFjLGNBQWMsb0NBQW9DLHVDQUF1QywrQkFBK0Isb0NBQW9DLGdEQUFnRCx3Q0FBd0MsNkVBQTZFLDREQUE0RCxvREFBb0QsOEVBQThFLDZEQUE2RCxxREFBcUQsb0NBQW9DLEdBQUcsb0RBQW9ELDRDQUE0QyxJQUFJLCtDQUErQyx1Q0FBdUMsSUFBSSxvREFBb0QsNENBQTRDLEtBQUssMkNBQTJDLG9DQUFvQyw0QkFBNEIsR0FBRyxvREFBb0QsNENBQTRDLElBQUksK0NBQStDLHVDQUF1QyxJQUFJLG9EQUFvRCw0Q0FBNEMsS0FBSywyQ0FBMkMsb0NBQW9DLG9DQUFvQyxLQUFLLGdDQUFnQyx3QkFBd0IsV0FBVyw0QkFBNEIsS0FBSyxnQ0FBZ0Msd0JBQXdCLFdBQVcsd0RBQXdELEdBQUcsWUFBWSxhQUFhLFFBQVEsSUFBSSxXQUFXLFlBQVksUUFBUSxJQUFJLFdBQVcsWUFBWSxjQUFjLElBQUksYUFBYSxXQUFXLFdBQVcsS0FBSyxZQUFZLGFBQWEsYUFBYSxnREFBZ0QsR0FBRyxZQUFZLGFBQWEsUUFBUSxJQUFJLFdBQVcsWUFBWSxRQUFRLElBQUksV0FBVyxZQUFZLGNBQWMsSUFBSSxhQUFhLFdBQVcsV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLHlEQUF5RCxHQUFHLFlBQVksY0FBYyxRQUFRLElBQUksV0FBVyxjQUFjLFFBQVEsSUFBSSxZQUFZLFFBQVEsY0FBYyxLQUFLLFlBQVksY0FBYyxlQUFlLGlEQUFpRCxHQUFHLFlBQVksY0FBYyxRQUFRLElBQUksV0FBVyxjQUFjLFFBQVEsSUFBSSxZQUFZLFFBQVEsY0FBYyxLQUFLLFlBQVksY0FBYyxlQUFlLGlFQUFpRSxnQkFBZ0IsdUJBQXVCLHNCQUFzQixvQ0FBb0MsU0FBUyxXQUFXLFlBQVksVUFBVSxrQ0FBa0MsNkJBQTZCLGlEQUFpRCxtQ0FBbUMsOENBQThDLE1BQU0sU0FBUyxtQ0FBbUMsMkJBQTJCLHVHQUF1RyxNQUFNLE9BQU8sc0dBQXNHLE1BQU0sUUFBUSxpREFBaUQsUUFBUSxTQUFTLHVDQUF1QywrQkFBK0IsNkdBQTZHLFFBQVEsT0FBTyxtQ0FBbUMsMkJBQTJCLDRHQUE0RyxRQUFRLFFBQVEsbUNBQW1DLDJCQUEyQixpREFBaUQsU0FBUyxTQUFTLG1DQUFtQywyQkFBMkIsNkdBQTZHLFNBQVMsT0FBTyw0R0FBNEcsUUFBUSxTQUFTLGlCQUFpQixhQUFhLGVBQWUsYUFBYSxNQUFNLFFBQVEsU0FBUyxPQUFPLG1CQUFtQixtQkFBbUIsdUJBQXVCLGVBQWUsa0JBQWtCLDZCQUE2QixpQ0FBaUMsMkJBQTJCLHVCQUF1QixpRUFBaUUsdUJBQXVCLDJCQUEyQixnRUFBZ0UsdUJBQXVCLHlCQUF5Qiw4QkFBOEIsbUJBQW1CLHVFQUF1RSxtQkFBbUIsMkJBQTJCLHNFQUFzRSxtQkFBbUIseUJBQXlCLDhCQUE4QixxQkFBcUIsdUVBQXVFLHFCQUFxQiwyQkFBMkIsc0VBQXNFLHFCQUFxQix5QkFBeUIsNE9BQTRPLGdCQUFnQixvREFBb0QsdUJBQXVCLE9BQU8sbUJBQW1CLHVCQUF1Qiw2Q0FBNkMsdUJBQXVCLE9BQU8scUJBQXFCLHVCQUF1QixtQ0FBbUMsT0FBTyxzQkFBc0IsNklBQTZJLG1CQUFtQiwyVEFBMlQsdUJBQXVCLHdUQUF3VCxxQkFBcUIsZ0RBQWdELHVCQUF1QixPQUFPLHFCQUFxQix1QkFBdUIsb1hBQW9YLFlBQVksbUVBQW1FLDhCQUE4QixvQkFBb0IsNEJBQTRCLGdDQUFnQyw2QkFBNkIsZ0NBQWdDLGFBQWEsYUFBYSxrQkFBa0Isc0JBQXNCLHNCQUFzQix1QkFBdUIsV0FBVyxlQUFlLGVBQWUsWUFBWSxzQkFBc0IsZ0JBQWdCLG9CQUFvQixlQUFlLG1CQUFtQixVQUFVLDJCQUEyQixrQkFBa0IsY0FBYyxhQUFhLHNCQUFzQixtQkFBbUIsYUFBYSxrQkFBa0IsZUFBZSxnQkFBZ0IsVUFBVSxjQUFjLGtCQUFrQixnQkFBZ0Isa0JBQWtCLG9CQUFvQixxQkFBcUIsZUFBZSxVQUFVLGVBQWUsbUJBQW1CLHVCQUF1QixXQUFXLHFCQUFxQiwyREFBMkQsV0FBVyx1REFBdUQsZ0VBQWdFLHdEQUF3RCxnRUFBZ0UseURBQXlELHNCQUFzQixZQUFZLGFBQWEsZ0JBQWdCLFVBQVUsc0VBQXNFLDhEQUE4RCwrQkFBK0IsbUJBQW1CLHlCQUF5Qix1Q0FBdUMsa0JBQWtCLGVBQWUseUJBQXlCLHNCQUFzQixxQkFBcUIsaUJBQWlCLHdEQUF3RCxrQkFBa0IsaUJBQWlCLHNFQUFzRSxhQUFhLHFCQUFxQixXQUFXLFlBQVksZ0JBQWdCLHNFQUFzRSw4REFBOEQsc0JBQXNCLGtCQUFrQiwrQkFBK0IsNEJBQTRCLGNBQWMsZUFBZSxtQkFBbUIsZ0JBQWdCLGdCQUFnQiw4QkFBOEIsZUFBZSw0QkFBNEIsU0FBUyxvQkFBb0IsbUJBQW1CLHlCQUF5QixXQUFXLG1CQUFtQiwyQkFBMkIsU0FBUyxvQkFBb0IsbUJBQW1CLHNCQUFzQixXQUFXLG1CQUFtQixvQkFBb0IsVUFBVSx3REFBd0QsZ0NBQWdDLFNBQVMsY0FBYyx1QkFBdUIsa0JBQWtCLGdCQUFnQiwwQkFBMEIsY0FBYyxjQUFjLGFBQWEsZUFBZSxtQkFBbUIsYUFBYSxrQkFBa0IsVUFBVSxNQUFNLFFBQVEsdUJBQXVCLFlBQVksYUFBYSxVQUFVLGdCQUFnQiw4QkFBOEIsWUFBWSxnQkFBZ0IsZ0JBQWdCLGVBQWUsV0FBVyxrQkFBa0IsZ0JBQWdCLGdCQUFnQixlQUFlLG1CQUFtQix1QkFBdUIsZUFBZSxlQUFlLGNBQWMsZUFBZSxVQUFVLHVCQUF1QixTQUFTLFVBQVUsY0FBYyxrQkFBa0IsZ0JBQWdCLG1CQUFtQixxQkFBcUIsZUFBZSxrQkFBa0Isb0ZBQW9GLGdCQUFnQix5Q0FBeUMsc0JBQXNCLFdBQVcsMkNBQTJDLHlCQUF5QixzQkFBc0IsbUJBQW1CLDJDQUEyQyxjQUFjLGtCQUFrQiw0RkFBNEYsK0JBQStCLHFDQUFxQywyREFBMkQseUJBQXlCLFVBQVUsMkJBQTJCLDBIQUEwSCxXQUFXLCtGQUErRixXQUFXLDJHQUEyRyxXQUFXLDhHQUE4RyxXQUFXLGdGQUFnRixXQUFXLGFBQWEsZ0JBQWdCLG1CQUFtQixtQkFBbUIsVUFBVSxvQkFBb0IsVUFBVSxjQUFjLGdCQUFnQixrQkFBa0IsdUNBQXVDLGVBQWUsVUFBVSxrQkFBa0Isb0JBQW9CLGFBQWEsZUFBZSxnQkFBZ0IsMEJBQTBCLGVBQWUsWUFBWSxtQkFBbUIsa0JBQWtCLGdCQUFnQixjQUFjLGNBQWMsY0FBYyxjQUFjLGVBQWUsc0JBQXNCLG1CQUFtQixjQUFjLGtCQUFrQiw2QkFBNkIsbUJBQW1CLHVCQUF1QixtQkFBbUIsY0FBYyx5Q0FBeUMsY0FBYyxrQkFBa0IseUNBQXlDLGNBQWMsMEJBQTBCLGFBQWEsbUJBQW1CLHVCQUF1QixlQUFlLGdCQUFnQixtQkFBbUIsV0FBVyxjQUFjLGdCQUFnQixrQ0FBa0MsY0FBYyxxQkFBcUIsWUFBWSxnQkFBZ0IsYUFBYSxnQkFBZ0IsWUFBWSxrQkFBa0IseUJBQXlCLFdBQVcsZ0JBQWdCLGtCQUFrQixrQkFBa0IsaUNBQWlDLG1CQUFtQixxQkFBcUIsb0JBQW9CLGNBQWMsbUVBQW1FLG1CQUFtQixxQkFBcUIsb0JBQW9CLGNBQWMsNEJBQTRCLG1CQUFtQix1Q0FBdUMsWUFBWSxrQkFBa0IsdUJBQXVCLHVCQUF1QixVQUFVLFdBQVcsMkJBQTJCLFlBQVksK0JBQStCLGtCQUFrQixnQkFBZ0IsZUFBZSx5QkFBeUIsc0JBQXNCLHFCQUFxQixpQkFBaUIsb0JBQW9CLGFBQWEsbUJBQW1CLFdBQVcsaUJBQWlCLHdCQUF3QixxQkFBcUIsc0NBQXNDLGtCQUFrQixZQUFZLG1EQUFtRCxjQUFjLGtCQUFrQixhQUFhLGVBQWUsZUFBZSxxQkFBcUIseUJBQXlCLGdFQUFnRSxjQUFjLGdDQUFnQyx3QkFBd0IsaUVBQWlFLFVBQVUsaUNBQWlDLHlCQUF5QiwwQkFBMEIscUJBQXFCLGNBQWMsa0NBQWtDLGNBQWMsdUJBQXVCLHFCQUFxQixjQUFjLCtCQUErQixjQUFjLDJCQUEyQixxQkFBcUIsY0FBYyxtQ0FBbUMsY0FBYyw4REFBOEQsY0FBYywwQkFBMEIscUJBQXFCLCtEQUErRCxrQkFBa0IsYUFBYSxhQUFhLGdDQUFnQyx3QkFBd0Isa0JBQWtCLDRFQUE0RSxhQUFhLGVBQWUsaUNBQWlDLHlCQUF5Qix1Q0FBdUMsK0JBQStCLDhCQUE4Qiw2RUFBNkUsYUFBYSxhQUFhLGlDQUFpQyx5QkFBeUIsa0NBQWtDLDBCQUEwQiw4QkFBOEIsOENBQThDLGtCQUFrQixVQUFVLFdBQVcsWUFBWSx1QkFBdUIsV0FBVyxZQUFZLHdDQUF3QyxrQkFBa0IsNkNBQTZDLGtCQUFrQixVQUFVLFNBQVMsYUFBYSxjQUFjLGVBQWUsaUNBQWlDLHlCQUF5QixzREFBc0QsY0FBYyxrQkFBa0IsVUFBVSxlQUFlLHFCQUFxQix5QkFBeUIsa0VBQWtFLFlBQVksWUFBWSxlQUFlLGdDQUFnQyx3QkFBd0IsbUVBQW1FLFlBQVksV0FBVyxlQUFlLGlDQUFpQyx5QkFBeUIsc0JBQXNCLG1CQUFtQixrQkFBa0IsVUFBVSxtQkFBbUIsZ0JBQWdCLHlCQUF5QixxQkFBcUIsa0JBQWtCLDJDQUEyQyxXQUFXLFVBQVUsV0FBVyxrQkFBa0IsbUJBQW1CLFdBQVcsZ0JBQWdCLGtCQUFrQixzRUFBc0UsbUJBQW1CLDJGQUEyRixtQkFBbUIsV0FBVyxnR0FBZ0csbUJBQW1CLGdEQUFnRCxXQUFXLFlBQVksWUFBWSxjQUFjLG1CQUFtQixlQUFlLHdDQUF3QyxZQUFZLGlDQUFpQyx5QkFBeUIsOEJBQThCLHVCQUF1QixlQUFlLFlBQVksMkNBQTJDLG1DQUFtQyw4QkFBOEIsdUJBQXVCLGVBQWUsd0JBQXdCLFdBQVcsT0FBTyxvREFBb0Qsc0RBQXNELDhDQUE4QyxxREFBcUQsdURBQXVELCtDQUErQywrREFBK0QsbUVBQW1FLDJEQUEyRCwwQkFBMEIsK0NBQStDLHVDQUF1Qyx3Q0FBd0MsaURBQWlELHlDQUF5Qyx3Q0FBd0MsR0FBRyw0QkFBNEIsb0JBQW9CLEtBQUssaUNBQWlDLDBCQUEwQixnQ0FBZ0MsR0FBRyw0QkFBNEIsb0JBQW9CLEtBQUssaUNBQWlDLDBCQUEwQixhQUFhLGlFQUFpRSw0QkFBNEIsb0ZBQW9GLGFBQWEsa0ZBQWtGLDJCQUEyQixHOzs7Ozs7Ozs7Ozs7QUN2dUY3bDFCO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXYTs7QUFFYjs7OztBQUdRLElBQUlJLHNCQUFzQjtBQUM5QkMsZUFBYSxrQ0FEaUI7QUFFOUJDLGlCQUFlLFlBRmU7QUFHOUJDLGlCQUFlLE9BSGU7QUFJOUJDLHVCQUFxQixZQUpTO0FBSzlCQyx1QkFBcUIsWUFMUztBQU05QkMsdUJBQXFCLFdBTlM7QUFPOUJDLHVCQUFxQixvQ0FQUztBQVE5QkMsdUJBQXFCLHdCQVJTO0FBUzlCQyxTQUFNLFFBVHdCO0FBVTlCQyxRQUFNLEVBVndCLENBVXJCO0FBVnFCLENBQTFCLEMsQ0FXTCw2Qjs7Ozs7Ozs7Ozs7O0FDM0JIO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFXYTs7QUFFYjs7OztBQUdRLElBQUlDLHVCQUF1QjtBQUMvQlYsZUFBYSxzQ0FEa0I7QUFFL0JDLGlCQUFlLFVBRmdCO0FBRy9CQyxpQkFBZSxNQUhnQjtBQUkvQkMsdUJBQW9CLFlBSlc7QUFLL0JDLHVCQUFvQixZQUxXO0FBTS9CQyx1QkFBb0IsV0FOVztBQU8vQkMsdUJBQXFCLDBCQVBVO0FBUS9CQyx1QkFBcUIsbUJBUlU7QUFTL0JDLFNBQU0sT0FUeUI7QUFVL0JDLFFBQU0sRUFWeUIsQ0FVdEI7QUFWc0IsQ0FBM0IsQyxDQVdMLDZCOzs7Ozs7Ozs7Ozs7QUMzQkg7QUFBQTtBQUFBOzs7Ozs7Ozs7OztBQVdhOztBQUViOzs7O0FBR1EsSUFBSUUsZ0JBQWdCO0FBQ3hCQyxPQUFLLGtDQURtQjtBQUV4QkgsUUFBTSxFQUZrQixDQUVmO0FBRmUsQ0FBcEIsQyxDQUdMLDZCOzs7Ozs7Ozs7Ozs7QUNuQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFhOztBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1JLElBQUlDLE1BQVY7QUFDQSxNQUFNQyxnQkFBZ0IsRUFBdEI7QUFDQSxJQUFJQyxlQUFlLEVBQW5CO0FBQ0EsSUFBSUMsbUJBQW1CLEVBQXZCO0FBQ0EsSUFBSUMsYUFBYSxFQUFqQjtBQUNBLElBQUlDLGlCQUFpQixFQUFyQjtBQUNBLElBQUlDLFdBQVc7QUFDWEMsZUFBVyxFQURBO0FBRVhDLGFBQVM7QUFGRSxDQUFmOztBQUtBLElBQUlDLGlCQUFpQixJQUFyQjtBQUNBLElBQUlDLGVBQWUsSUFBbkI7O0FBRUE7Ozs7O0FBS0EsU0FBU0MsWUFBVCxDQUFzQkMsT0FBdEIsRUFBK0I7QUFDM0JOLGFBQVNDLFNBQVQsQ0FBbUJNLE1BQW5CLEdBQTRCRCxPQUE1QjtBQUNIOztBQUVEOzs7OztBQUtBLFNBQVNFLFVBQVQsQ0FBb0JGLE9BQXBCLEVBQTZCO0FBQ3pCTixhQUFTRSxPQUFULENBQWlCSyxNQUFqQixHQUEwQkQsT0FBMUI7QUFDSDs7QUFFRDs7Ozs7QUFLQSxTQUFTRyx1QkFBVCxDQUFpQ0MsV0FBakMsRUFBOEM7QUFDMUNDLG1CQUFlRCxXQUFmLEVBQTRCLGFBQTVCLEVBQTJDLFdBQTNDO0FBQ0FFO0FBRUg7O0FBRUQ7Ozs7O0FBS0EsU0FBU0MscUJBQVQsQ0FBK0JILFdBQS9CLEVBQTRDO0FBQ3hDQyxtQkFBZUQsV0FBZixFQUE0QixXQUE1QixFQUF5QyxTQUF6QztBQUNBRTtBQUNIOztBQUVEOzs7OztBQUtBLFNBQVNFLGVBQVQsQ0FBeUJDLGdCQUF6QixFQUEyQzs7QUFFdkMsUUFBSUMsUUFBSixFQUNJQyxhQURKOztBQUdBRCxlQUFXRSxTQUFTSCxnQkFBVCxFQUEyQixFQUEzQixDQUFYO0FBQ0FDLGVBQVdBLFdBQVcsSUFBdEI7O0FBRUEsUUFBSUEsWUFBWSxHQUFoQixFQUFxQjtBQUNqQkMsd0JBQWdCRCxTQUFTRyxPQUFULENBQWlCLENBQWpCLElBQXNCLFFBQXRCLEdBQWlDLElBQWpEO0FBQ0gsS0FGRCxNQUVPLElBQUlILFlBQVksRUFBaEIsRUFBb0I7QUFDdkJDLHdCQUFnQkQsU0FBU0csT0FBVCxDQUFpQixDQUFqQixJQUFzQixRQUF0QixHQUFpQyxJQUFqRDtBQUNILEtBRk0sTUFFQSxJQUFJSCxZQUFZLEdBQWhCLEVBQXFCO0FBQ3hCQyx3QkFBZ0JELFNBQVNHLE9BQVQsQ0FBaUIsQ0FBakIsSUFBc0IsUUFBdEIsR0FBaUMsSUFBakQ7QUFDSCxLQUZNLE1BRUE7QUFDSEYsd0JBQWdCLENBQUNELFdBQVcsSUFBWixFQUFrQkcsT0FBbEIsQ0FBMEIsQ0FBMUIsSUFBK0IsUUFBL0IsR0FBMEMsR0FBMUQ7QUFDSDs7QUFFRCxXQUFPRixhQUFQO0FBQ0g7O0FBRUQ7Ozs7O0FBS0EsU0FBU0csV0FBVCxDQUFxQkMsYUFBckIsRUFBb0M7O0FBRWhDLFFBQUlDLE9BQUosRUFDSUMsT0FESixFQUVJQyxLQUZKLEVBR0lDLFNBSEo7O0FBS0FILGNBQVVKLFNBQVNHLGFBQVQsRUFBd0IsRUFBeEIsQ0FBVjtBQUNBRSxjQUFVTCxTQUFTSSxVQUFVLEVBQW5CLEVBQXVCLEVBQXZCLENBQVY7QUFDQUEsY0FBVUEsVUFBVSxFQUFwQjs7QUFFQUUsWUFBUU4sU0FBU0ssVUFBVSxFQUFuQixFQUF1QixFQUF2QixDQUFSO0FBQ0FBLGNBQVVBLFVBQVUsRUFBcEI7O0FBRUEsUUFBSUMsVUFBVSxDQUFWLElBQWVELFlBQVksQ0FBL0IsRUFBa0M7QUFDOUJFLG9CQUFZSCxVQUFVLFFBQVYsR0FBcUIsR0FBakM7QUFDSCxLQUZELE1BRU8sSUFBSUUsVUFBVSxDQUFkLEVBQWlCO0FBQ3BCQyxvQkFBWUYsVUFBVSxRQUFWLEdBQXFCLEtBQWpDO0FBQ0gsS0FGTSxNQUVBO0FBQ0hFLG9CQUFZRCxRQUFRLFFBQVIsR0FBbUIsR0FBbkIsR0FBeUIsUUFBekIsR0FBb0NELE9BQXBDLEdBQThDLFFBQTlDLEdBQXlELEtBQXJFO0FBQ0g7O0FBRUQsV0FBT0UsU0FBUDtBQUNIOztBQUlEOzs7Ozs7O0FBT0EsU0FBU2QsY0FBVCxDQUF3QkQsV0FBeEIsRUFBcUNnQixLQUFyQyxFQUE0Q0MsUUFBNUMsRUFBc0Q7QUFDbEQsUUFBSUMsU0FBU2xCLFlBQVlrQixNQUF6QjtBQUNBO0FBQ0EsUUFBSUMsT0FBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVksQ0FBWixDQUFuQixFQUFtQztBQUMvQixZQUFJRCxPQUFPQyxJQUFQLENBQVksQ0FBWixJQUFpQkYsT0FBT0csU0FBeEIsSUFBcUNILE9BQU9HLFNBQVAsR0FBbUJGLE9BQU9DLElBQVAsQ0FBWSxDQUFaLENBQXhELElBQTBFRCxPQUFPQyxJQUFQLENBQVksQ0FBWixJQUFpQkYsT0FBT0ksUUFBbEcsSUFBOEdKLE9BQU9JLFFBQVAsR0FBa0JILE9BQU9DLElBQVAsQ0FBWSxDQUFaLENBQXBJLEVBQW9KO0FBQ2hKLGdCQUFJSixVQUFVLGFBQWQsRUFBNkI7QUFDekIxQix5QkFBU0MsU0FBVCxDQUFtQmdDLEdBQW5CLEdBQXlCLENBQUNMLE9BQU9JLFFBQVIsRUFBa0JKLE9BQU9HLFNBQXpCLENBQXpCO0FBQ0gsYUFGRCxNQUdLO0FBQ0QvQix5QkFBU0UsT0FBVCxDQUFpQitCLEdBQWpCLEdBQXVCLENBQUNMLE9BQU9JLFFBQVIsRUFBa0JKLE9BQU9HLFNBQXpCLENBQXZCO0FBQ0g7QUFDRCxnQkFBSUcsTUFBTUwsT0FBT00sUUFBUCxHQUFrQixtQkFBbEIsR0FBdUNOLE9BQU9PLFVBQTlDLEdBQXlELG1CQUF6RCxHQUErRVIsT0FBT0ksUUFBdEYsR0FBaUcsT0FBakcsR0FBMkdKLE9BQU9HLFNBQTVIO0FBQ0F0QyxjQUFFNEMsSUFBRixDQUFPLEVBQUNILEtBQUtBLEdBQU4sRUFBUCxFQUFtQkksSUFBbkIsQ0FBd0IsVUFBU0MsSUFBVCxFQUFlO0FBQ25DLG9CQUFJakMsVUFBVSxFQUFkO0FBQ0Esb0JBQUlpQyxLQUFLakMsT0FBTCxDQUFha0MsVUFBakIsRUFBNkI7QUFDekJsQywrQkFBV2lDLEtBQUtqQyxPQUFMLENBQWFrQyxVQUFiLEdBQTBCLEdBQXJDO0FBQ0Esd0JBQUlELEtBQUtqQyxPQUFMLENBQWFtQyxZQUFqQixFQUErQjtBQUMzQm5DLG1DQUFXaUMsS0FBS2pDLE9BQUwsQ0FBYW1DLFlBQWIsR0FBNEIsSUFBdkM7QUFDSDtBQUNKLGlCQUxELE1BS08sSUFBSUYsS0FBS2pDLE9BQUwsQ0FBYW9DLElBQWpCLEVBQXVCO0FBQzFCcEMsK0JBQVdpQyxLQUFLakMsT0FBTCxDQUFhb0MsSUFBYixHQUFvQixHQUEvQjtBQUNBLHdCQUFJSCxLQUFLakMsT0FBTCxDQUFhbUMsWUFBakIsRUFBK0I7QUFDM0JuQyxtQ0FBV2lDLEtBQUtqQyxPQUFMLENBQWFtQyxZQUF4QjtBQUNIO0FBQ0o7QUFDRCxvQkFBSW5DLFFBQVFxQyxNQUFSLEdBQWlCLENBQXJCLEVBQXdCO0FBQ3BCckMsK0JBQVcsSUFBWDtBQUNIOztBQUVELG9CQUFJaUMsS0FBS2pDLE9BQUwsQ0FBYXNDLFFBQWpCLEVBQTJCO0FBQ3ZCdEMsK0JBQVdpQyxLQUFLakMsT0FBTCxDQUFhc0MsUUFBYixHQUF3QixHQUFuQztBQUNIO0FBQ0Qsb0JBQUlMLEtBQUtqQyxPQUFMLENBQWF1QyxJQUFqQixFQUF1QjtBQUNuQnZDLCtCQUFXaUMsS0FBS2pDLE9BQUwsQ0FBYXVDLElBQXhCO0FBQ0g7QUFDRHBELGtCQUFFaUMsS0FBRixFQUFTb0IsR0FBVCxDQUFheEMsT0FBYjtBQUNBTix5QkFBUzJCLFFBQVQsRUFBbUJwQixNQUFuQixHQUE0QkQsT0FBNUI7QUFDSCxhQXpCRDtBQTBCSCxTQWxDRCxNQW1DSztBQUNEO0FBQ0g7QUFDSixLQXZDRCxNQXdDSztBQUNELFlBQUlvQixVQUFVLGFBQWQsRUFBNkI7QUFDekIxQixxQkFBU0MsU0FBVCxDQUFtQmdDLEdBQW5CLEdBQXlCLENBQUNMLE9BQU9JLFFBQVIsRUFBa0JKLE9BQU9HLFNBQXpCLENBQXpCO0FBQ0gsU0FGRCxNQUdLO0FBQ0QvQixxQkFBU0UsT0FBVCxDQUFpQitCLEdBQWpCLEdBQXVCLENBQUNMLE9BQU9JLFFBQVIsRUFBa0JKLE9BQU9HLFNBQXpCLENBQXZCO0FBQ0g7QUFDRCxZQUFJRyxNQUFNTCxPQUFPTSxRQUFQLEdBQWtCLG1CQUFsQixHQUF1Q04sT0FBT08sVUFBOUMsR0FBeUQsbUJBQXpELEdBQStFUixPQUFPSSxRQUF0RixHQUFpRyxPQUFqRyxHQUEyR0osT0FBT0csU0FBNUg7QUFDQXRDLFVBQUU0QyxJQUFGLENBQU8sRUFBQ0gsS0FBS0EsR0FBTixFQUFQLEVBQW1CSSxJQUFuQixDQUF3QixVQUFTQyxJQUFULEVBQWU7QUFDbkMsZ0JBQUlqQyxVQUFVLEVBQWQ7QUFDQSxnQkFBSWlDLEtBQUtqQyxPQUFMLENBQWFrQyxVQUFqQixFQUE2QjtBQUN6QmxDLDJCQUFXaUMsS0FBS2pDLE9BQUwsQ0FBYWtDLFVBQWIsR0FBMEIsR0FBckM7QUFDQSxvQkFBSUQsS0FBS2pDLE9BQUwsQ0FBYW1DLFlBQWpCLEVBQStCO0FBQzNCbkMsK0JBQVdpQyxLQUFLakMsT0FBTCxDQUFhbUMsWUFBYixHQUE0QixJQUF2QztBQUNIO0FBQ0osYUFMRCxNQUtPLElBQUlGLEtBQUtqQyxPQUFMLENBQWFvQyxJQUFqQixFQUF1QjtBQUMxQnBDLDJCQUFXaUMsS0FBS2pDLE9BQUwsQ0FBYW9DLElBQWIsR0FBb0IsR0FBL0I7QUFDQSxvQkFBSUgsS0FBS2pDLE9BQUwsQ0FBYW1DLFlBQWpCLEVBQStCO0FBQzNCbkMsK0JBQVdpQyxLQUFLakMsT0FBTCxDQUFhbUMsWUFBeEI7QUFDSDtBQUNKO0FBQ0QsZ0JBQUluQyxRQUFRcUMsTUFBUixHQUFpQixDQUFyQixFQUF3QjtBQUNwQnJDLDJCQUFXLElBQVg7QUFDSDs7QUFFRCxnQkFBSWlDLEtBQUtqQyxPQUFMLENBQWFzQyxRQUFqQixFQUEyQjtBQUN2QnRDLDJCQUFXaUMsS0FBS2pDLE9BQUwsQ0FBYXNDLFFBQWIsR0FBd0IsR0FBbkM7QUFDSDtBQUNELGdCQUFJTCxLQUFLakMsT0FBTCxDQUFhdUMsSUFBakIsRUFBdUI7QUFDbkJ2QywyQkFBV2lDLEtBQUtqQyxPQUFMLENBQWF1QyxJQUF4QjtBQUNIO0FBQ0RwRCxjQUFFaUMsS0FBRixFQUFTb0IsR0FBVCxDQUFheEMsT0FBYjtBQUNBTixxQkFBUzJCLFFBQVQsRUFBbUJwQixNQUFuQixHQUE0QkQsT0FBNUI7QUFDSCxTQXpCRDtBQTBCSDtBQUVKOztBQUVEOzs7Ozs7QUFNQSxTQUFTeUMsWUFBVCxDQUFzQnZFLEtBQXRCLEVBQTZCa0QsS0FBN0IsRUFBb0M7QUFDaEMsUUFBSVEsTUFBTUwsT0FBT00sUUFBUCxHQUFrQiw2QkFBbEIsR0FBa0ROLE9BQU9tQixVQUF6RCxHQUFzRSxLQUF0RSxHQUE4RXhFLEtBQXhGO0FBQ0FpQixNQUFFNEMsSUFBRixDQUFPLEVBQUNILEtBQUtBLEdBQU4sRUFBUCxFQUFtQkksSUFBbkIsQ0FBd0IsVUFBU0MsSUFBVCxFQUFlO0FBQ25DLFlBQUlBLEtBQUtJLE1BQUwsR0FBYyxDQUFsQixFQUFxQjs7QUFFakIsZ0JBQUlKLEtBQUssQ0FBTCxLQUFXQSxLQUFLLENBQUwsRUFBUVUsWUFBdkIsRUFBcUM7QUFDakM7O0FBRUEscUJBQUssSUFBSUMsQ0FBVCxJQUFjWCxJQUFkLEVBQW9CO0FBQ2hCLHdCQUFJQSxLQUFLWSxjQUFMLENBQW9CRCxDQUFwQixDQUFKLEVBQTRCO0FBQ3hCLDRCQUFJckIsT0FBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVksQ0FBWixDQUFuQixFQUFtQztBQUMvQixnQ0FBSUQsT0FBT0MsSUFBUCxDQUFZLENBQVosSUFBaUJTLEtBQUtXLENBQUwsRUFBUUUsR0FBekIsSUFBZ0NiLEtBQUtXLENBQUwsRUFBUUUsR0FBUixHQUFjdkIsT0FBT0MsSUFBUCxDQUFZLENBQVosQ0FBOUMsSUFBZ0VELE9BQU9DLElBQVAsQ0FBWSxDQUFaLElBQWlCUyxLQUFLVyxDQUFMLEVBQVFHLEdBQXpGLElBQWdHZCxLQUFLVyxDQUFMLEVBQVFHLEdBQVIsR0FBY3hCLE9BQU9DLElBQVAsQ0FBWSxDQUFaLENBQWxILEVBQWtJO0FBQzlILG9DQUFJSixVQUFVLGFBQWQsRUFBNkI7QUFDekI5QixpREFBYTBELElBQWIsQ0FBa0JmLEtBQUtXLENBQUwsRUFBUUQsWUFBMUI7QUFDQXBELHFEQUFpQnlELElBQWpCLENBQXNCLENBQUNmLEtBQUtXLENBQUwsRUFBUUcsR0FBVCxFQUFjZCxLQUFLVyxDQUFMLEVBQVFFLEdBQXRCLENBQXRCO0FBQ0gsaUNBSEQsTUFJSztBQUNEdEQsK0NBQVd3RCxJQUFYLENBQWdCZixLQUFLVyxDQUFMLEVBQVFELFlBQXhCO0FBQ0FsRCxtREFBZXVELElBQWYsQ0FBb0IsQ0FBQ2YsS0FBS1csQ0FBTCxFQUFRRyxHQUFULEVBQWNkLEtBQUtXLENBQUwsRUFBUUUsR0FBdEIsQ0FBcEI7QUFDSDtBQUNKLDZCQVRELE1BVUs7QUFDRDtBQUNIO0FBQ0oseUJBZEQsTUFlSztBQUNELGdDQUFJMUIsVUFBVSxhQUFkLEVBQTZCO0FBQ3pCOUIsNkNBQWEwRCxJQUFiLENBQWtCZixLQUFLVyxDQUFMLEVBQVFELFlBQTFCO0FBQ0FwRCxpREFBaUJ5RCxJQUFqQixDQUFzQixDQUFDZixLQUFLVyxDQUFMLEVBQVFHLEdBQVQsRUFBY2QsS0FBS1csQ0FBTCxFQUFRRSxHQUF0QixDQUF0QjtBQUNILDZCQUhELE1BSUs7QUFDRHRELDJDQUFXd0QsSUFBWCxDQUFnQmYsS0FBS1csQ0FBTCxFQUFRRCxZQUF4QjtBQUNBbEQsK0NBQWV1RCxJQUFmLENBQW9CLENBQUNmLEtBQUtXLENBQUwsRUFBUUcsR0FBVCxFQUFjZCxLQUFLVyxDQUFMLEVBQVFFLEdBQXRCLENBQXBCO0FBQ0g7QUFDSjtBQUVKO0FBQ0o7QUFDRCxvQkFBSTFCLFVBQVUsYUFBZCxFQUE2QjtBQUN6QmpDLHNCQUFFaUMsS0FBRixFQUFTNkIsWUFBVCxDQUFzQjtBQUNsQkMsZ0NBQVE1RDtBQURVLHFCQUF0QjtBQUdILGlCQUpELE1BS0s7QUFDREgsc0JBQUVpQyxLQUFGLEVBQVM2QixZQUFULENBQXNCO0FBQ2xCQyxnQ0FBUTFEO0FBRFUscUJBQXRCO0FBR0g7QUFFSjtBQUNKLFNBL0NELE1BZ0RLLENBQ0o7QUFDSixLQW5ERDtBQW9ESDs7QUFFRDs7Ozs7O0FBTUEsU0FBUzJELFlBQVQsQ0FBc0JqRixLQUF0QixFQUE2QmtELEtBQTdCLEVBQW9DO0FBQ2hDLFFBQUlRLE1BQU1MLE9BQU9NLFFBQVAsR0FBa0IsNkJBQWxCLEdBQWtETixPQUFPbUIsVUFBekQsR0FBc0UsS0FBdEUsR0FBOEV2RCxFQUFFakIsS0FBRixFQUFTc0UsR0FBVCxFQUF4RjtBQUNBckQsTUFBRTRDLElBQUYsQ0FBTyxFQUFDSCxLQUFLQSxHQUFOLEVBQVAsRUFBbUJJLElBQW5CLENBQXdCLFVBQVNDLElBQVQsRUFBZTtBQUNuQyxZQUFJbUIsZ0JBQWdCLEtBQXBCO0FBQ0EsWUFBSW5CLEtBQUtJLE1BQUwsR0FBYyxDQUFsQixFQUFxQjtBQUNqQixnQkFBSWQsT0FBT0MsSUFBUCxJQUFlRCxPQUFPQyxJQUFQLENBQVksQ0FBWixDQUFuQixFQUFtQztBQUMvQixvQkFBSUQsT0FBT0MsSUFBUCxDQUFZLENBQVosSUFBaUJTLEtBQUssQ0FBTCxFQUFRYSxHQUF6QixJQUFnQ2IsS0FBSyxDQUFMLEVBQVFhLEdBQVIsR0FBY3ZCLE9BQU9DLElBQVAsQ0FBWSxDQUFaLENBQTlDLElBQWdFRCxPQUFPQyxJQUFQLENBQVksQ0FBWixJQUFpQlMsS0FBSyxDQUFMLEVBQVFjLEdBQXpGLElBQWdHZCxLQUFLLENBQUwsRUFBUWMsR0FBUixHQUFjeEIsT0FBT0MsSUFBUCxDQUFZLENBQVosQ0FBbEgsRUFBa0k7QUFDOUgsd0JBQUlTLEtBQUssQ0FBTCxLQUFXQSxLQUFLLENBQUwsRUFBUVUsWUFBdkIsRUFBcUM7QUFDakM7QUFDQSw0QkFBSXZCLFVBQVUsV0FBZCxFQUEyQjtBQUN2QjFCLHFDQUFTRSxPQUFULENBQWlCK0IsR0FBakIsR0FBdUIsQ0FBQ00sS0FBSyxDQUFMLEVBQVFjLEdBQVQsRUFBY2QsS0FBSyxDQUFMLEVBQVFhLEdBQXRCLENBQXZCO0FBQ0gseUJBRkQsTUFHSztBQUNEcEQscUNBQVNDLFNBQVQsQ0FBbUJnQyxHQUFuQixHQUF5QixDQUFDTSxLQUFLLENBQUwsRUFBUWMsR0FBVCxFQUFjZCxLQUFLLENBQUwsRUFBUWEsR0FBdEIsQ0FBekI7QUFDSDtBQUNEeEM7QUFDSDtBQUNKLGlCQVhELE1BWUs7QUFDRDhDLG9DQUFnQi9ELGNBQWNULG1CQUE5QjtBQUNIO0FBQ0osYUFoQkQsTUFpQks7QUFDRCxvQkFBSXFELEtBQUssQ0FBTCxLQUFXQSxLQUFLLENBQUwsRUFBUVUsWUFBdkIsRUFBcUM7QUFDakM7QUFDQSx3QkFBSXZCLFVBQVUsV0FBZCxFQUEyQjtBQUN2QjFCLGlDQUFTRSxPQUFULENBQWlCK0IsR0FBakIsR0FBdUIsQ0FBQ00sS0FBSyxDQUFMLEVBQVFjLEdBQVQsRUFBY2QsS0FBSyxDQUFMLEVBQVFhLEdBQXRCLENBQXZCO0FBQ0gscUJBRkQsTUFHSztBQUNEcEQsaUNBQVNDLFNBQVQsQ0FBbUJnQyxHQUFuQixHQUF5QixDQUFDTSxLQUFLLENBQUwsRUFBUWMsR0FBVCxFQUFjZCxLQUFLLENBQUwsRUFBUWEsR0FBdEIsQ0FBekI7QUFDSDtBQUNEeEM7QUFDSDtBQUNKO0FBRUosU0EvQkQsTUFnQ0s7QUFDRDhDLDRCQUFnQi9ELGNBQWNSLG1CQUE5QjtBQUNIO0FBQ0QsWUFBSXVFLGFBQUosRUFBbUI7QUFDZixnQkFBSUMsZUFBZSxJQUFJM0cseUZBQUosRUFBbkI7QUFDQTJHLHlCQUFhckcsY0FBYixDQUE0QnFDLGNBQWNQLEtBQTFDLEVBQWlEc0UsYUFBakQ7QUFDSDtBQUNKLEtBekNEO0FBMkNIO0FBQ0Q7Ozs7QUFJQSxTQUFTRSxXQUFULEdBQXVCO0FBQ25CLFFBQUkxQixNQUFNLDJCQUEyQkwsT0FBT2dDLFNBQWxDLEdBQThDLEdBQXhEO0FBQ0FwRSxNQUFFNEMsSUFBRixDQUFPLEVBQUNILEtBQUlBLEdBQUwsRUFBUCxFQUNLSSxJQURMLENBQ1UsVUFBU0MsSUFBVCxFQUFjO0FBQ3BCLFlBQUl1QixTQUFTckUsRUFBRSxnQkFBRixDQUFiO0FBQ0EsWUFBSW9DLE9BQU9rQyxXQUFQLEtBQXVCLEdBQTNCLEVBQWdDO0FBQzVCRCxtQkFBT0UsR0FBUCxDQUFXLFNBQVgsRUFBcUIsTUFBckI7QUFDSCxTQUZELE1BR0s7QUFDREYsbUJBQU9FLEdBQVAsQ0FBVyxTQUFYLEVBQXFCLE9BQXJCO0FBQ0g7QUFDRCxZQUFJQyxXQUFXLFVBQWY7QUFDQSxhQUFLLElBQUlmLENBQVQsSUFBY1gsSUFBZCxFQUFvQjtBQUNoQixnQkFBSUEsS0FBS1ksY0FBTCxDQUFvQkQsQ0FBcEIsQ0FBSixFQUE0QjtBQUN4QixvQkFBSXJCLE9BQU9rQyxXQUFQLEtBQXVCLEdBQTNCLEVBQWdDO0FBQzVCLHdCQUFJRyxXQUFXQyxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQUYsNkJBQVNHLFNBQVQsR0FBcUJuQixDQUFyQjtBQUNBZ0IsNkJBQVNJLFNBQVQsR0FBcUIsZUFBZUwsUUFBcEM7QUFDQUgsMkJBQU9TLE1BQVAsQ0FBY0wsUUFBZDtBQUNBLHdCQUFJTSxnQkFBZ0JMLFNBQVNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBcEI7QUFDQUksa0NBQWNILFNBQWQsR0FBMEI5QixLQUFLVyxDQUFMLEVBQVF1QixTQUFsQztBQUNBRCxrQ0FBY0YsU0FBZCxHQUEwQixlQUFlTCxRQUF6QztBQUNBSCwyQkFBT1MsTUFBUCxDQUFjQyxhQUFkO0FBQ0Esd0JBQUlFLGdCQUFnQlAsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFwQjtBQUNBTSxrQ0FBY0wsU0FBZCxHQUEwQjlCLEtBQUtXLENBQUwsRUFBUXlCLFNBQWxDO0FBQ0FELGtDQUFjSixTQUFkLEdBQTBCLGVBQWVMLFFBQXpDO0FBQ0FILDJCQUFPUyxNQUFQLENBQWNHLGFBQWQ7QUFDQSx3QkFBSUUsZ0JBQWdCVCxTQUFTQyxhQUFULENBQXVCLEtBQXZCLENBQXBCO0FBQ0FRLGtDQUFjUCxTQUFkLEdBQTBCOUIsS0FBS1csQ0FBTCxFQUFRMkIsU0FBbEM7QUFDQUQsa0NBQWNOLFNBQWQsR0FBMEIsZUFBZUwsUUFBekM7QUFDQUgsMkJBQU9TLE1BQVAsQ0FBY0ssYUFBZDtBQUNBWCwrQkFBV0EsWUFBWSxVQUFaLEdBQXlCLFlBQXpCLEdBQXdDLFVBQW5EO0FBQ0gsaUJBbEJELE1BbUJLO0FBQ0Qsd0JBQUlhLGFBQWFYLFNBQVNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBakI7QUFDQVUsK0JBQVdULFNBQVgsR0FBdUIsU0FBU25CLENBQVQsR0FBYSxPQUFiLEdBQXVCLE1BQXZCLEdBQStCWCxLQUFLVyxDQUFMLEVBQVF1QixTQUF2QyxHQUFtRCxRQUFuRCxHQUE4RCxNQUE5RCxHQUFzRWxDLEtBQUtXLENBQUwsRUFBUXlCLFNBQTlFLEdBQTBGLFFBQTFGLEdBQXFHLE1BQXJHLEdBQThHcEMsS0FBS1csQ0FBTCxFQUFRMkIsU0FBdEgsR0FBa0ksUUFBeko7QUFDQWYsMkJBQU9TLE1BQVAsQ0FBY08sVUFBZDtBQUNIO0FBQ0o7QUFDSjtBQUNKLEtBdENEO0FBdUNIO0FBQ0QsU0FBU0MsZUFBVCxDQUF5QkMsU0FBekIsRUFBb0M7QUFDaEMsUUFBSUMsV0FBV2QsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFmO0FBQ0EzRSxNQUFFd0YsUUFBRixFQUFZQyxRQUFaLENBQXFCLGNBQXJCO0FBQ0F6RixNQUFFd0YsUUFBRixFQUFZQyxRQUFaLENBQXFCLGlCQUFyQjs7QUFFQSxRQUFJQyxhQUFhaEIsU0FBU0MsYUFBVCxDQUF1QixPQUF2QixDQUFqQjtBQUNBZSxlQUFXZCxTQUFYLEdBQXVCVyxTQUF2QjtBQUNBQyxhQUFTRyxXQUFULENBQXFCRCxVQUFyQjtBQUNBLFFBQUlFLGNBQWNsQixTQUFTQyxhQUFULENBQXVCLFFBQXZCLENBQWxCO0FBQ0EzRSxNQUFFNEYsV0FBRixFQUFlSCxRQUFmLENBQXdCM0YsZ0VBQWFBLENBQUMrRixXQUF0QztBQUNBN0YsTUFBRTRGLFdBQUYsRUFBZUgsUUFBZixDQUF3QjNGLGdFQUFhQSxDQUFDZ0csSUFBdEM7QUFDQTlGLE1BQUU0RixXQUFGLEVBQWVHLEVBQWYsQ0FBa0IsT0FBbEIsRUFBMkIsWUFBWTtBQUMvQi9GLFVBQUUsSUFBRixFQUFRcUUsTUFBUixHQUFpQjJCLE1BQWpCO0FBQ0gsS0FGTDtBQUlBUixhQUFTRyxXQUFULENBQXFCQyxXQUFyQjtBQUNBLFdBQU9KLFFBQVA7QUFDSDs7QUFFRDs7Ozs7QUFLQSxTQUFTckUsaUJBQVQsR0FBOEI7QUFDMUIsUUFBSVosU0FBU0MsU0FBVCxDQUFtQmdDLEdBQW5CLElBQTBCakMsU0FBU0UsT0FBVCxDQUFpQitCLEdBQS9DLEVBQW9EO0FBQ2hELFlBQUlDLE1BQU0sNEJBQTRCTCxPQUFPZ0MsU0FBbkMsR0FBK0MsR0FBL0MsR0FBcUQ3RCxTQUFTQyxTQUFULENBQW1CZ0MsR0FBbkIsQ0FBdUIsQ0FBdkIsQ0FBckQsR0FBaUYsR0FBakYsR0FBdUZqQyxTQUFTQyxTQUFULENBQW1CZ0MsR0FBbkIsQ0FBdUIsQ0FBdkIsQ0FBdkYsR0FBbUgsR0FBbkgsR0FBeUhqQyxTQUFTRSxPQUFULENBQWlCK0IsR0FBakIsQ0FBcUIsQ0FBckIsQ0FBekgsR0FBbUosR0FBbkosR0FBeUpqQyxTQUFTRSxPQUFULENBQWlCK0IsR0FBakIsQ0FBcUIsQ0FBckIsQ0FBekosR0FBbUwsR0FBN0w7QUFDQXhDLFVBQUU0QyxJQUFGLENBQU8sRUFBQ0gsS0FBS0EsR0FBTixFQUFQLEVBQW1CSSxJQUFuQixDQUF3QixVQUFTQyxJQUFULEVBQWU7QUFDbkMsZ0JBQUltRCxZQUFZakcsRUFBRSxlQUFGLENBQWhCO0FBQ0EsZ0JBQUlvQyxPQUFPa0MsV0FBUCxLQUF1QixHQUEzQixFQUFnQztBQUM1QjJCLDBCQUFVMUIsR0FBVixDQUFjLFNBQWQsRUFBeUIsTUFBekI7QUFDQXZFLGtCQUFFLG9CQUFGLEVBQXdCZ0csTUFBeEI7QUFDQWhHLGtCQUFFLGlCQUFGLEVBQXFCZ0csTUFBckI7QUFDQSxvQkFBSWxELEtBQUtvRCxJQUFULEVBQWU7QUFDWCx3QkFBSUMsY0FBY25HLEVBQUUsZ0JBQUYsQ0FBbEI7QUFDQW1HLGdDQUFZQyxJQUFaLENBQWlCekUsWUFBWW1CLEtBQUtvRCxJQUFqQixDQUFqQjtBQUNIO0FBQ0Qsb0JBQUlwRCxLQUFLdUQsSUFBVCxFQUFlO0FBQ1gsd0JBQUlDLGtCQUFrQnRHLEVBQUUsZ0JBQUYsQ0FBdEI7QUFDQSx3QkFBSXVHLG1CQUFtQnpELEtBQUt1RCxJQUFMLEdBQVksRUFBbkM7QUFDQUUsdUNBQW1CQSxpQkFBaUJDLE9BQWpCLENBQXlCLEdBQXpCLEVBQTZCLEdBQTdCLENBQW5CO0FBQ0Esd0JBQUlDLGVBQWVGLGlCQUFpQkcsT0FBakIsQ0FBeUIsR0FBekIsSUFBZ0MsQ0FBbkQ7QUFDQUosb0NBQWdCRixJQUFoQixDQUFxQkcsaUJBQWlCSSxTQUFqQixDQUEyQixDQUEzQixFQUE4QkYsZUFBZSxDQUE3QyxJQUFrRCxLQUF2RTtBQUNIO0FBQ0Qsb0JBQUlHLGtCQUFrQjVHLEVBQUUsZ0JBQUYsQ0FBdEI7QUFDQSxvQkFBSTZHLGlCQUFpQjdHLEVBQUUsZ0JBQUYsQ0FBckI7QUFDQSxvQkFBSThHLFdBQVcsWUFBZjtBQUNBLHFCQUFJLElBQUlDLFVBQVIsSUFBc0JqRSxLQUFLa0UsT0FBM0IsRUFBb0M7QUFDaEMsd0JBQUlDLFdBQVdqSCxFQUFFMEUsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFGLENBQWY7QUFDQXNDLDZCQUFTYixJQUFULENBQWNXLFVBQWQ7QUFDQUUsNkJBQVN4QixRQUFULENBQWtCLG1CQUFsQjtBQUNBd0IsNkJBQVN4QixRQUFULENBQWtCLFdBQWxCO0FBQ0F3Qiw2QkFBU0MsV0FBVCxDQUFxQk4sZUFBckI7QUFDQUEsc0NBQWtCSyxRQUFsQjtBQUNBLHdCQUFJRSxrQkFBa0JuSCxFQUFFMEUsU0FBU0MsYUFBVCxDQUF1QixLQUF2QixDQUFGLENBQXRCO0FBQ0Esd0JBQUl5QyxpQkFBaUJ0RSxLQUFLa0UsT0FBTCxDQUFhRCxVQUFiLElBQTJCLEVBQWhEO0FBQ0FLLHFDQUFpQkEsZUFBZVosT0FBZixDQUF1QixHQUF2QixFQUEyQixHQUEzQixDQUFqQjtBQUNBLHdCQUFJQyxlQUFlVyxlQUFlVixPQUFmLENBQXVCLEdBQXZCLElBQThCLENBQWpEO0FBQ0FTLG9DQUFnQmYsSUFBaEIsQ0FBcUJnQixlQUFlVCxTQUFmLENBQXlCLENBQXpCLEVBQTRCRixZQUE1QixJQUE0QyxJQUFqRTtBQUNBVSxvQ0FBZ0IxQixRQUFoQixDQUF5QixnQkFBekI7QUFDQTBCLG9DQUFnQjFCLFFBQWhCLENBQXlCLFdBQXpCO0FBQ0EwQixvQ0FBZ0JELFdBQWhCLENBQTRCTCxjQUE1QjtBQUNBQSxxQ0FBaUJNLGVBQWpCO0FBQ0FMLGdDQUFZLE9BQVo7QUFDSDtBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0FiLDBCQUFVMUIsR0FBVixDQUFjLHVCQUFkLEVBQXVDdUMsUUFBdkM7QUFDSCxhQXpDRCxNQTBDSztBQUNEYiwwQkFBVTFCLEdBQVYsQ0FBYyxTQUFkLEVBQXlCLE9BQXpCO0FBQ0F2RSxrQkFBRSxvQkFBRixFQUF3QmdHLE1BQXhCO0FBQ0FoRyxrQkFBRSxpQkFBRixFQUFxQmdHLE1BQXJCO0FBQ0Esb0JBQUlsRCxLQUFLb0QsSUFBVCxFQUFlO0FBQ1gsd0JBQUlDLGNBQWNuRyxFQUFFLGdCQUFGLENBQWxCO0FBQ0FtRyxnQ0FBWUMsSUFBWixDQUFpQnpFLFlBQVltQixLQUFLb0QsSUFBakIsQ0FBakI7QUFDSDtBQUNELG9CQUFJcEQsS0FBS3VELElBQVQsRUFBZTtBQUNYLHdCQUFJQyxrQkFBa0J0RyxFQUFFLGdCQUFGLENBQXRCO0FBQ0Esd0JBQUl1RyxtQkFBbUJ6RCxLQUFLdUQsSUFBTCxHQUFZLEVBQW5DO0FBQ0FFLHVDQUFtQkEsaUJBQWlCQyxPQUFqQixDQUF5QixHQUF6QixFQUE2QixHQUE3QixDQUFuQjtBQUNBLHdCQUFJQyxlQUFlRixpQkFBaUJHLE9BQWpCLENBQXlCLEdBQXpCLElBQWdDLENBQW5EO0FBQ0FKLG9DQUFnQkYsSUFBaEIsQ0FBcUJHLGlCQUFpQkksU0FBakIsQ0FBMkIsQ0FBM0IsRUFBOEJGLGVBQWUsQ0FBN0MsSUFBa0QsS0FBdkU7QUFDSDtBQUNELG9CQUFJWSxnQkFBZ0JySCxFQUFFLHdCQUFGLENBQXBCO0FBQ0Esb0JBQUlzSCxlQUFldEgsRUFBRSxzQkFBRixDQUFuQjtBQUNBLHFCQUFJLElBQUkrRyxVQUFSLElBQXNCakUsS0FBS2tFLE9BQTNCLEVBQW9DO0FBQ2hDLHdCQUFJTyxrQkFBa0I3QyxTQUFTQyxhQUFULENBQXVCLElBQXZCLENBQXRCO0FBQ0E0QyxvQ0FBZ0IzQyxTQUFoQixHQUE0Qm1DLFVBQTVCO0FBQ0EvRyxzQkFBRXVILGVBQUYsRUFBbUI5QixRQUFuQixDQUE0QixtQkFBNUI7QUFDQSx3QkFBSTBCLGtCQUFrQnpDLFNBQVNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBdEI7QUFDQSx3QkFBSXlDLGlCQUFpQnRFLEtBQUtrRSxPQUFMLENBQWFELFVBQWIsSUFBMkIsRUFBaEQ7QUFDQUsscUNBQWlCQSxlQUFlWixPQUFmLENBQXVCLEdBQXZCLEVBQTJCLEdBQTNCLENBQWpCO0FBQ0Esd0JBQUlDLGVBQWVXLGVBQWVWLE9BQWYsQ0FBdUIsR0FBdkIsSUFBOEIsQ0FBakQ7QUFDQVMsb0NBQWdCdkMsU0FBaEIsR0FBNEJ3QyxlQUFlVCxTQUFmLENBQXlCLENBQXpCLEVBQTRCRixZQUE1QixJQUE0QyxJQUF4RTtBQUNBekcsc0JBQUVtSCxlQUFGLEVBQW1CMUIsUUFBbkIsQ0FBNEIsZ0JBQTVCO0FBQ0E0QixrQ0FBY3ZDLE1BQWQsQ0FBcUJ5QyxlQUFyQjtBQUNBRCxpQ0FBYXhDLE1BQWIsQ0FBb0JxQyxlQUFwQjtBQUNIO0FBQ0o7QUFDSixTQTNFRDtBQTRFSDtBQUNKOztBQUVEOzs7O0FBSUNuSCxFQUFFMEUsUUFBRixFQUFZOEMsS0FBWixDQUFrQixZQUFXO0FBQ3pCLFFBQUlDLFdBQVdyRixPQUFPc0YsV0FBUCxJQUFzQnRGLE9BQU91RixTQUFQLENBQWlCQyxZQUF2QyxJQUF1RHhGLE9BQU91RixTQUFQLENBQWlCRixRQUF2RjtBQUNBLFFBQUlBLFdBQVcsSUFBZixFQUFxQjtBQUNqQnpILFVBQUU2SCxNQUFGLENBQVMzSCxhQUFULEVBQXdCTCwyRUFBeEI7QUFDSCxLQUZELE1BR0ssSUFBSTRILFlBQVksSUFBaEIsRUFBc0I7QUFDdkJ6SCxVQUFFNkgsTUFBRixDQUFTM0gsYUFBVCxFQUF3QmhCLDBFQUF4QjtBQUNILEtBRkksTUFHQTtBQUNEYyxVQUFFNkgsTUFBRixDQUFTM0gsYUFBVCxFQUF3QkwsMkVBQXhCO0FBQ0g7QUFDRHVDLFdBQU9DLElBQVAsR0FBY3lGLEtBQUtDLEtBQUwsQ0FBVzNGLE9BQU9DLElBQWxCLENBQWQ7QUFDRCxRQUFJMkYsZUFBZWhJLEVBQUUsV0FBRixDQUFuQjtBQUNBLFFBQUlnSSxhQUFhLENBQWIsQ0FBSixFQUFxQjtBQUNqQkEscUJBQWEsQ0FBYixFQUFnQkMsV0FBaEIsR0FBOEIvSCxjQUFjZixXQUE1QztBQUNIO0FBQ0QsUUFBSStJLGFBQWFsSSxFQUFFLGFBQUYsQ0FBakI7QUFDQSxRQUFJa0ksV0FBVyxDQUFYLENBQUosRUFBbUI7QUFDZkEsbUJBQVcsQ0FBWCxFQUFjRCxXQUFkLEdBQTRCL0gsY0FBY2YsV0FBMUM7QUFDSDtBQUNELFFBQUlnSixrQkFBa0JuSSxFQUFFLGdCQUFGLENBQXRCO0FBQ0FtSSxvQkFBZ0IvQixJQUFoQixDQUFxQmxHLGNBQWNkLGFBQW5DO0FBQ0EsUUFBSWdKLGtCQUFrQnBJLEVBQUUsZ0JBQUYsQ0FBdEI7QUFDQ29JLG9CQUFnQmhDLElBQWhCLENBQXFCbEcsY0FBY2IsYUFBbkM7QUFDRCxVQUFNZ0osZ0JBQWdCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDbEMsY0FBTUMsUUFBUSxJQUFkO0FBQ0EsWUFBSUQsTUFBTUUsT0FBTixLQUFrQixFQUF0QixFQUEwQjtBQUN0QnhFLHlCQUFhdUUsS0FBYixFQUFvQixNQUFNQSxNQUFNRSxTQUFOLENBQWdCLENBQWhCLENBQTFCO0FBQ0gsU0FGRCxNQUdLO0FBQ0QsZ0JBQUlDLFdBQVdDLEtBQUtDLEtBQUwsQ0FBV0MsS0FBS0MsR0FBTCxFQUFYLENBQWY7QUFDQVAsa0JBQU1RLE9BQU4sR0FBZ0JMLFFBQWhCO0FBQ0FNLHVCQUFXLFlBQVU7QUFDakIsb0JBQUlULE1BQU1RLE9BQU4sSUFBaUJSLE1BQU1RLE9BQU4sR0FBZ0IsSUFBaEIsR0FBdUJKLEtBQUtDLEtBQUwsQ0FBV0MsS0FBS0MsR0FBTCxFQUFYLENBQTVDLEVBQW9FO0FBQ2hFLDJCQUFPUCxNQUFNUSxPQUFiO0FBQ0F6RixpQ0FBYXRELEVBQUV1SSxLQUFGLEVBQVNsRixHQUFULEVBQWIsRUFBNkIsTUFBTWtGLE1BQU1FLFNBQU4sQ0FBZ0IsQ0FBaEIsQ0FBbkM7QUFDSDtBQUNKLGFBTEQsRUFLRSxJQUxGO0FBTUg7QUFFSixLQWhCRDs7QUFrQkF6SSxNQUFFLGFBQUYsRUFBaUIrRixFQUFqQixDQUFvQixTQUFwQixFQUErQnNDLGFBQS9CO0FBQ0FySSxNQUFFLGFBQUYsRUFBaUIrRixFQUFqQixDQUFvQixvQkFBcEIsRUFBMEMsVUFBU3VDLEtBQVQsRUFBZ0JXLEVBQWhCLEVBQW1CO0FBQ3pELFlBQUl0SyxRQUFRc0ssR0FBR0MsSUFBSCxDQUFRdkssS0FBcEI7QUFDQSxZQUFJNkQsTUFBTXBDLGlCQUFpQkQsYUFBYWdKLFNBQWIsQ0FBdUJDLFVBQVVBLFdBQVd6SyxLQUE1QyxDQUFqQixDQUFWO0FBQ0E0QixpQkFBU0MsU0FBVCxDQUFtQmdDLEdBQW5CLEdBQXlCQSxHQUF6QjtBQUNBckI7QUFDSCxLQUxEO0FBTUFuQixNQUFFLFdBQUYsRUFBZStGLEVBQWYsQ0FBa0IsU0FBbEIsRUFBNkJzQyxhQUE3Qjs7QUFFQXJJLE1BQUUsYUFBRixFQUFpQitGLEVBQWpCLENBQW9CLFFBQXBCLEVBQThCLFlBQVc7QUFDckMsWUFBSWxGLFVBQVViLEVBQUUsSUFBRixFQUFRcUQsR0FBUixFQUFkO0FBQ0F6QyxxQkFBYUMsT0FBYjtBQUNILEtBSEQ7O0FBS0FiLE1BQUUsV0FBRixFQUFlK0YsRUFBZixDQUFrQixRQUFsQixFQUE0QixZQUFXO0FBQ25DLFlBQUlsRixVQUFVYixFQUFFLElBQUYsRUFBUXFELEdBQVIsRUFBZDtBQUNBdEMsbUJBQVdGLE9BQVg7QUFDSCxLQUhEOztBQU1BYixNQUFFLGVBQUYsRUFBbUIrRixFQUFuQixDQUFzQixPQUF0QixFQUErQixZQUFXO0FBQ3RDL0I7QUFDSCxLQUZEOztBQUlBaEUsTUFBRSx5QkFBRixFQUE2QitGLEVBQTdCLENBQWdDLE9BQWhDLEVBQXlDLFlBQVk7QUFDakQsWUFBSTRCLFVBQVUwQixXQUFkLEVBQTJCO0FBQ3ZCMUIsc0JBQVUwQixXQUFWLENBQXNCQyxrQkFBdEIsQ0FBeUN0SSx1QkFBekM7QUFDSCxTQUZELE1BRU87QUFDSHVJLG9CQUFRQyxJQUFSLENBQWEsNkdBQWI7QUFDSDtBQUNKLEtBTkQ7O0FBUUF4SixNQUFFLHVCQUFGLEVBQTJCK0YsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBWTtBQUMvQyxZQUFJNEIsVUFBVTBCLFdBQWQsRUFBMkI7QUFDdkIxQixzQkFBVTBCLFdBQVYsQ0FBc0JDLGtCQUF0QixDQUF5Q2xJLHFCQUF6QztBQUNILFNBRkQsTUFFTztBQUNIbUksb0JBQVFDLElBQVIsQ0FBYSw2R0FBYjtBQUNIO0FBQ0osS0FORDtBQU9DLFFBQUlDLHVCQUF1QnpKLEVBQUUsc0JBQUYsQ0FBM0I7QUFDQXlKLHlCQUFxQnJELElBQXJCLENBQTBCbEcsY0FBY1gsbUJBQXhDO0FBQ0EsUUFBSW1LLHVCQUF1QjFKLEVBQUUsc0JBQUYsQ0FBM0I7QUFDQTBKLHlCQUFxQnRELElBQXJCLENBQTBCbEcsY0FBY1YsbUJBQXhDO0FBQ0EsUUFBSW1LLHVCQUF1QjNKLEVBQUUsc0JBQUYsQ0FBM0I7QUFDQTJKLHlCQUFxQnZELElBQXJCLENBQTBCbEcsY0FBY1osbUJBQXhDO0FBQ0Q2RTtBQUNILENBeEZBLEUiLCJmaWxlIjoidGF4aS1maW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL1Jlc291cmNlcy9wdWJsaWMvanMvdGF4aS1maW5kZXIuanNcIik7XG4iLCIvKipcbiAqIGNvbjRnaXMgLSB0aGUgZ2lzLWtpdFxuICpcbiAqIEBwYWNrYWdlICAgY29uNGdpc1xuICogQGF1dGhvciAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgR05VL0xHUEwgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL2xncGwtMy4wLmh0bWxcbiAqIEBjb3B5cmlnaHQgS8O8c3RlbnNjaG1pZWRlIEdtYkggU29mdHdhcmUgJiBEZXNpZ24gMjAxMSAtIDIwMThcbiAqIEBsaW5rICAgICAgaHR0cHM6Ly93d3cua3Vlc3RlbnNjaG1pZWRlLmRlXG4gKi9cblxuaW1wb3J0IFN3YWwgZnJvbSAnc3dlZXRhbGVydDInO1xuXG5leHBvcnQgY2xhc3MgQWxlcnRIYW5kbGVyIHtcblxuICBzaG93RXJyb3JEaWFsb2codGl0bGUsIGNvbnRlbnQpIHtcbiAgICBTd2FsLmZpcmUodGl0bGUsIGNvbnRlbnQsIFwiZXJyb3JcIik7XG4gIH1cblxuICBzaG93SW5mb0RpYWxvZyh0aXRsZSwgY29udGVudCkge1xuICAgIFN3YWwuZmlyZSh0aXRsZSwgY29udGVudCwgXCJpbmZvXCIpO1xuICB9XG5cbiAgc2hvd0NvbmZpcm1EaWFsb2codGl0bGUsIHRleHQsIGNvbmZpcm1DYWxsYmFjaywgY2FuY2VsQ2FsbGJhY2ssIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0KSB7XG4gICAgU3dhbC5maXJlKHtcbiAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgIHRleHQ6IHRleHQsXG4gICAgICB0eXBlOiBcIndhcm5pbmdcIixcbiAgICAgIHNob3dDYW5jZWxCdXR0b246IHRydWUsXG4gICAgICBjb25maXJtQnV0dG9uVGV4dDogY29uZmlybVRleHQgPyBjb25maXJtVGV4dCA6IFwiQ29uZmlybVwiLFxuICAgICAgY2FuY2VsQnV0dG9uVGV4dDogY2FuY2VsVGV4dCA/IGNhbmNlbFRleHQgOiBcIkNhbmNlbFwiLFxuICAgICAgZGFuZ2VyTW9kZTogdHJ1ZVxuICAgIH0pLnRoZW4oKHdpbGxEZWxldGUpID0+IHtcbiAgICAgIGlmICh3aWxsRGVsZXRlLnZhbHVlKSB7XG4gICAgICAgIGNvbmZpcm1DYWxsYmFjaygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHNob3dTZWxlY3REaWFsb2codGl0bGUsIG9iak9wdGlvbnMsIGNvbmZpcm1UZXh0LCBjYW5jZWxUZXh0KSB7XG4gICAgY29uc3Qge3ZhbHVlOiBzZWxlY3RlZFZhbHVlfSA9IGF3YWl0IFN3YWwuZmlyZSh7XG4gICAgICB0aXRsZTogdGl0bGUsXG4gICAgICBpbnB1dDogJ3NlbGVjdCcsXG4gICAgICBpbnB1dE9wdGlvbnM6IG9iak9wdGlvbnMsXG4gICAgICBpbnB1dFBsYWNlaG9sZGVyOiAnU2VsZWN0IGEgZnJ1aXQnLFxuICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiBjb25maXJtVGV4dCxcbiAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IGNhbmNlbFRleHRcbiAgICB9KTtcbiAgICByZXR1cm4gc2VsZWN0ZWRWYWx1ZTtcbiAgfVxufSIsIi8qIVxuKiBzd2VldGFsZXJ0MiB2OC4xMi4xXG4qIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS5cbiovXG4oZnVuY3Rpb24gKGdsb2JhbCwgZmFjdG9yeSkge1xuXHR0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgPyBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKSA6XG5cdHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShmYWN0b3J5KSA6XG5cdChnbG9iYWwuU3dlZXRhbGVydDIgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIF90eXBlb2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBfc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpO1xufVxuXG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcblxuICByZXR1cm4gX3NldFByb3RvdHlwZU9mKG8sIHApO1xufVxuXG5mdW5jdGlvbiBpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7XG4gIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhUmVmbGVjdC5jb25zdHJ1Y3QpIHJldHVybiBmYWxzZTtcbiAgaWYgKFJlZmxlY3QuY29uc3RydWN0LnNoYW0pIHJldHVybiBmYWxzZTtcbiAgaWYgKHR5cGVvZiBQcm94eSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gdHJ1ZTtcblxuICB0cnkge1xuICAgIERhdGUucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoRGF0ZSwgW10sIGZ1bmN0aW9uICgpIHt9KSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gIGlmIChpc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkge1xuICAgIF9jb25zdHJ1Y3QgPSBSZWZsZWN0LmNvbnN0cnVjdDtcbiAgfSBlbHNlIHtcbiAgICBfY29uc3RydWN0ID0gZnVuY3Rpb24gX2NvbnN0cnVjdChQYXJlbnQsIGFyZ3MsIENsYXNzKSB7XG4gICAgICB2YXIgYSA9IFtudWxsXTtcbiAgICAgIGEucHVzaC5hcHBseShhLCBhcmdzKTtcbiAgICAgIHZhciBDb25zdHJ1Y3RvciA9IEZ1bmN0aW9uLmJpbmQuYXBwbHkoUGFyZW50LCBhKTtcbiAgICAgIHZhciBpbnN0YW5jZSA9IG5ldyBDb25zdHJ1Y3RvcigpO1xuICAgICAgaWYgKENsYXNzKSBfc2V0UHJvdG90eXBlT2YoaW5zdGFuY2UsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlbGY7XG59XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHtcbiAgaWYgKGNhbGwgJiYgKHR5cGVvZiBjYWxsID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gX2Fzc2VydFRoaXNJbml0aWFsaXplZChzZWxmKTtcbn1cblxuZnVuY3Rpb24gX3N1cGVyUHJvcEJhc2Uob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB3aGlsZSAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KSkge1xuICAgIG9iamVjdCA9IF9nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuICAgIGlmIChvYmplY3QgPT09IG51bGwpIGJyZWFrO1xuICB9XG5cbiAgcmV0dXJuIG9iamVjdDtcbn1cblxuZnVuY3Rpb24gX2dldCh0YXJnZXQsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAodHlwZW9mIFJlZmxlY3QgIT09IFwidW5kZWZpbmVkXCIgJiYgUmVmbGVjdC5nZXQpIHtcbiAgICBfZ2V0ID0gUmVmbGVjdC5nZXQ7XG4gIH0gZWxzZSB7XG4gICAgX2dldCA9IGZ1bmN0aW9uIF9nZXQodGFyZ2V0LCBwcm9wZXJ0eSwgcmVjZWl2ZXIpIHtcbiAgICAgIHZhciBiYXNlID0gX3N1cGVyUHJvcEJhc2UodGFyZ2V0LCBwcm9wZXJ0eSk7XG5cbiAgICAgIGlmICghYmFzZSkgcmV0dXJuO1xuICAgICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGJhc2UsIHByb3BlcnR5KTtcblxuICAgICAgaWYgKGRlc2MuZ2V0KSB7XG4gICAgICAgIHJldHVybiBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfZ2V0KHRhcmdldCwgcHJvcGVydHksIHJlY2VpdmVyIHx8IHRhcmdldCk7XG59XG5cbnZhciBjb25zb2xlUHJlZml4ID0gJ1N3ZWV0QWxlcnQyOic7XG4vKipcbiAqIEZpbHRlciB0aGUgdW5pcXVlIHZhbHVlcyBpbnRvIGEgbmV3IGFycmF5XG4gKiBAcGFyYW0gYXJyXG4gKi9cblxudmFyIHVuaXF1ZUFycmF5ID0gZnVuY3Rpb24gdW5pcXVlQXJyYXkoYXJyKSB7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgIGlmIChyZXN1bHQuaW5kZXhPZihhcnJbaV0pID09PSAtMSkge1xuICAgICAgcmVzdWx0LnB1c2goYXJyW2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbi8qKlxuICogUmV0dXJucyB0aGUgYXJyYXkgb2Igb2JqZWN0IHZhbHVlcyAoT2JqZWN0LnZhbHVlcyBpc24ndCBzdXBwb3J0ZWQgaW4gSUUxMSlcbiAqIEBwYXJhbSBvYmpcbiAqL1xuXG52YXIgb2JqZWN0VmFsdWVzID0gZnVuY3Rpb24gb2JqZWN0VmFsdWVzKG9iaikge1xuICByZXR1cm4gT2JqZWN0LmtleXMob2JqKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBvYmpba2V5XTtcbiAgfSk7XG59O1xuLyoqXG4gKiBDb252ZXJ0IE5vZGVMaXN0IHRvIEFycmF5XG4gKiBAcGFyYW0gbm9kZUxpc3RcbiAqL1xuXG52YXIgdG9BcnJheSA9IGZ1bmN0aW9uIHRvQXJyYXkobm9kZUxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKG5vZGVMaXN0KTtcbn07XG4vKipcbiAqIFN0YW5kYXJkaXNlIGNvbnNvbGUgd2FybmluZ3NcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIHdhcm4gPSBmdW5jdGlvbiB3YXJuKG1lc3NhZ2UpIHtcbiAgY29uc29sZS53YXJuKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogU3RhbmRhcmRpc2UgY29uc29sZSBlcnJvcnNcbiAqIEBwYXJhbSBtZXNzYWdlXG4gKi9cblxudmFyIGVycm9yID0gZnVuY3Rpb24gZXJyb3IobWVzc2FnZSkge1xuICBjb25zb2xlLmVycm9yKFwiXCIuY29uY2F0KGNvbnNvbGVQcmVmaXgsIFwiIFwiKS5jb25jYXQobWVzc2FnZSkpO1xufTtcbi8qKlxuICogUHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIGB3YXJuT25jZWBcbiAqIEB0eXBlIHtBcnJheX1cbiAqIEBwcml2YXRlXG4gKi9cblxudmFyIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcyA9IFtdO1xuLyoqXG4gKiBTaG93IGEgY29uc29sZSB3YXJuaW5nLCBidXQgb25seSBpZiBpdCBoYXNuJ3QgYWxyZWFkeSBiZWVuIHNob3duXG4gKiBAcGFyYW0gbWVzc2FnZVxuICovXG5cbnZhciB3YXJuT25jZSA9IGZ1bmN0aW9uIHdhcm5PbmNlKG1lc3NhZ2UpIHtcbiAgaWYgKCEocHJldmlvdXNXYXJuT25jZU1lc3NhZ2VzLmluZGV4T2YobWVzc2FnZSkgIT09IC0xKSkge1xuICAgIHByZXZpb3VzV2Fybk9uY2VNZXNzYWdlcy5wdXNoKG1lc3NhZ2UpO1xuICAgIHdhcm4obWVzc2FnZSk7XG4gIH1cbn07XG4vKipcbiAqIFNob3cgYSBvbmUtdGltZSBjb25zb2xlIHdhcm5pbmcgYWJvdXQgZGVwcmVjYXRlZCBwYXJhbXMvbWV0aG9kc1xuICovXG5cbnZhciB3YXJuQWJvdXREZXByZWF0aW9uID0gZnVuY3Rpb24gd2FybkFib3V0RGVwcmVhdGlvbihkZXByZWNhdGVkUGFyYW0sIHVzZUluc3RlYWQpIHtcbiAgd2Fybk9uY2UoXCJcXFwiXCIuY29uY2F0KGRlcHJlY2F0ZWRQYXJhbSwgXCJcXFwiIGlzIGRlcHJlY2F0ZWQgYW5kIHdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLiBQbGVhc2UgdXNlIFxcXCJcIikuY29uY2F0KHVzZUluc3RlYWQsIFwiXFxcIiBpbnN0ZWFkLlwiKSk7XG59O1xuLyoqXG4gKiBJZiBgYXJnYCBpcyBhIGZ1bmN0aW9uLCBjYWxsIGl0ICh3aXRoIG5vIGFyZ3VtZW50cyBvciBjb250ZXh0KSBhbmQgcmV0dXJuIHRoZSByZXN1bHQuXG4gKiBPdGhlcndpc2UsIGp1c3QgcGFzcyB0aGUgdmFsdWUgdGhyb3VnaFxuICogQHBhcmFtIGFyZ1xuICovXG5cbnZhciBjYWxsSWZGdW5jdGlvbiA9IGZ1bmN0aW9uIGNhbGxJZkZ1bmN0aW9uKGFyZykge1xuICByZXR1cm4gdHlwZW9mIGFyZyA9PT0gJ2Z1bmN0aW9uJyA/IGFyZygpIDogYXJnO1xufTtcbnZhciBpc1Byb21pc2UgPSBmdW5jdGlvbiBpc1Byb21pc2UoYXJnKSB7XG4gIHJldHVybiBhcmcgJiYgUHJvbWlzZS5yZXNvbHZlKGFyZykgPT09IGFyZztcbn07XG5cbnZhciBEaXNtaXNzUmVhc29uID0gT2JqZWN0LmZyZWV6ZSh7XG4gIGNhbmNlbDogJ2NhbmNlbCcsXG4gIGJhY2tkcm9wOiAnYmFja2Ryb3AnLFxuICBjbG9zZTogJ2Nsb3NlJyxcbiAgZXNjOiAnZXNjJyxcbiAgdGltZXI6ICd0aW1lcidcbn0pO1xuXG52YXIgYXJnc1RvUGFyYW1zID0gZnVuY3Rpb24gYXJnc1RvUGFyYW1zKGFyZ3MpIHtcbiAgdmFyIHBhcmFtcyA9IHt9O1xuXG4gIHN3aXRjaCAoX3R5cGVvZihhcmdzWzBdKSkge1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBfZXh0ZW5kcyhwYXJhbXMsIGFyZ3NbMF0pO1xuXG4gICAgICBicmVhaztcblxuICAgIGRlZmF1bHQ6XG4gICAgICBbJ3RpdGxlJywgJ2h0bWwnLCAndHlwZSddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUsIGluZGV4KSB7XG4gICAgICAgIHN3aXRjaCAoX3R5cGVvZihhcmdzW2luZGV4XSkpIHtcbiAgICAgICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgICAgICAgcGFyYW1zW25hbWVdID0gYXJnc1tpbmRleF07XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBlcnJvcihcIlVuZXhwZWN0ZWQgdHlwZSBvZiBcIi5jb25jYXQobmFtZSwgXCIhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBnb3QgXCIpLmNvbmNhdChfdHlwZW9mKGFyZ3NbaW5kZXhdKSkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBwYXJhbXM7XG59O1xuXG52YXIgc3dhbFByZWZpeCA9ICdzd2FsMi0nO1xudmFyIHByZWZpeCA9IGZ1bmN0aW9uIHByZWZpeChpdGVtcykge1xuICB2YXIgcmVzdWx0ID0ge307XG5cbiAgZm9yICh2YXIgaSBpbiBpdGVtcykge1xuICAgIHJlc3VsdFtpdGVtc1tpXV0gPSBzd2FsUHJlZml4ICsgaXRlbXNbaV07XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBzd2FsQ2xhc3NlcyA9IHByZWZpeChbJ2NvbnRhaW5lcicsICdzaG93bicsICdoZWlnaHQtYXV0bycsICdpb3NmaXgnLCAncG9wdXAnLCAnbW9kYWwnLCAnbm8tYmFja2Ryb3AnLCAndG9hc3QnLCAndG9hc3Qtc2hvd24nLCAndG9hc3QtY29sdW1uJywgJ2ZhZGUnLCAnc2hvdycsICdoaWRlJywgJ25vYW5pbWF0aW9uJywgJ2Nsb3NlJywgJ3RpdGxlJywgJ2hlYWRlcicsICdjb250ZW50JywgJ2FjdGlvbnMnLCAnY29uZmlybScsICdjYW5jZWwnLCAnZm9vdGVyJywgJ2ljb24nLCAnaW1hZ2UnLCAnaW5wdXQnLCAnZmlsZScsICdyYW5nZScsICdzZWxlY3QnLCAncmFkaW8nLCAnY2hlY2tib3gnLCAnbGFiZWwnLCAndGV4dGFyZWEnLCAnaW5wdXRlcnJvcicsICd2YWxpZGF0aW9uLW1lc3NhZ2UnLCAncHJvZ3Jlc3Mtc3RlcHMnLCAnYWN0aXZlLXByb2dyZXNzLXN0ZXAnLCAncHJvZ3Jlc3Mtc3RlcCcsICdwcm9ncmVzcy1zdGVwLWxpbmUnLCAnbG9hZGluZycsICdzdHlsZWQnLCAndG9wJywgJ3RvcC1zdGFydCcsICd0b3AtZW5kJywgJ3RvcC1sZWZ0JywgJ3RvcC1yaWdodCcsICdjZW50ZXInLCAnY2VudGVyLXN0YXJ0JywgJ2NlbnRlci1lbmQnLCAnY2VudGVyLWxlZnQnLCAnY2VudGVyLXJpZ2h0JywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLCAnYm90dG9tLWVuZCcsICdib3R0b20tbGVmdCcsICdib3R0b20tcmlnaHQnLCAnZ3Jvdy1yb3cnLCAnZ3Jvdy1jb2x1bW4nLCAnZ3Jvdy1mdWxsc2NyZWVuJywgJ3J0bCddKTtcbnZhciBpY29uVHlwZXMgPSBwcmVmaXgoWydzdWNjZXNzJywgJ3dhcm5pbmcnLCAnaW5mbycsICdxdWVzdGlvbicsICdlcnJvciddKTtcblxudmFyIHN0YXRlcyA9IHtcbiAgcHJldmlvdXNCb2R5UGFkZGluZzogbnVsbFxufTtcbnZhciBoYXNDbGFzcyA9IGZ1bmN0aW9uIGhhc0NsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICByZXR1cm4gZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoY2xhc3NOYW1lKTtcbn07XG52YXIgYXBwbHlDdXN0b21DbGFzcyA9IGZ1bmN0aW9uIGFwcGx5Q3VzdG9tQ2xhc3MoZWxlbSwgY3VzdG9tQ2xhc3MsIGNsYXNzTmFtZSkge1xuICAvLyBDbGVhbiB1cCBwcmV2aW91cyBjdXN0b20gY2xhc3Nlc1xuICB0b0FycmF5KGVsZW0uY2xhc3NMaXN0KS5mb3JFYWNoKGZ1bmN0aW9uIChjbGFzc05hbWUpIHtcbiAgICBpZiAoIShvYmplY3RWYWx1ZXMoc3dhbENsYXNzZXMpLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpICYmICEob2JqZWN0VmFsdWVzKGljb25UeXBlcykuaW5kZXhPZihjbGFzc05hbWUpICE9PSAtMSkpIHtcbiAgICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfSk7XG5cbiAgaWYgKGN1c3RvbUNsYXNzICYmIGN1c3RvbUNsYXNzW2NsYXNzTmFtZV0pIHtcbiAgICBhZGRDbGFzcyhlbGVtLCBjdXN0b21DbGFzc1tjbGFzc05hbWVdKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGdldElucHV0KGNvbnRlbnQsIGlucHV0VHlwZSkge1xuICBpZiAoIWlucHV0VHlwZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgc3dpdGNoIChpbnB1dFR5cGUpIHtcbiAgICBjYXNlICdzZWxlY3QnOlxuICAgIGNhc2UgJ3RleHRhcmVhJzpcbiAgICBjYXNlICdmaWxlJzpcbiAgICAgIHJldHVybiBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXNbaW5wdXRUeXBlXSk7XG5cbiAgICBjYXNlICdjaGVja2JveCc6XG4gICAgICByZXR1cm4gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCIgaW5wdXRcIikpO1xuXG4gICAgY2FzZSAncmFkaW8nOlxuICAgICAgcmV0dXJuIGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmNoZWNrZWRcIikpIHx8IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFkaW8sIFwiIGlucHV0OmZpcnN0LWNoaWxkXCIpKTtcblxuICAgIGNhc2UgJ3JhbmdlJzpcbiAgICAgIHJldHVybiBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLnJhbmdlLCBcIiBpbnB1dFwiKSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG4gIH1cbn1cbnZhciBmb2N1c0lucHV0ID0gZnVuY3Rpb24gZm9jdXNJbnB1dChpbnB1dCkge1xuICBpbnB1dC5mb2N1cygpOyAvLyBwbGFjZSBjdXJzb3IgYXQgZW5kIG9mIHRleHQgaW4gdGV4dCBpbnB1dFxuXG4gIGlmIChpbnB1dC50eXBlICE9PSAnZmlsZScpIHtcbiAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yMzQ1OTE1XG4gICAgdmFyIHZhbCA9IGlucHV0LnZhbHVlO1xuICAgIGlucHV0LnZhbHVlID0gJyc7XG4gICAgaW5wdXQudmFsdWUgPSB2YWw7XG4gIH1cbn07XG52YXIgdG9nZ2xlQ2xhc3MgPSBmdW5jdGlvbiB0b2dnbGVDbGFzcyh0YXJnZXQsIGNsYXNzTGlzdCwgY29uZGl0aW9uKSB7XG4gIGlmICghdGFyZ2V0IHx8ICFjbGFzc0xpc3QpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcbiAgICBjbGFzc0xpc3QgPSBjbGFzc0xpc3Quc3BsaXQoL1xccysvKS5maWx0ZXIoQm9vbGVhbik7XG4gIH1cblxuICBjbGFzc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgaWYgKHRhcmdldC5mb3JFYWNoKSB7XG4gICAgICB0YXJnZXQuZm9yRWFjaChmdW5jdGlvbiAoZWxlbSkge1xuICAgICAgICBjb25kaXRpb24gPyBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKSA6IGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbmRpdGlvbiA/IHRhcmdldC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSkgOiB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xuICAgIH1cbiAgfSk7XG59O1xudmFyIGFkZENsYXNzID0gZnVuY3Rpb24gYWRkQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QpIHtcbiAgdG9nZ2xlQ2xhc3ModGFyZ2V0LCBjbGFzc0xpc3QsIHRydWUpO1xufTtcbnZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uIHJlbW92ZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0KSB7XG4gIHRvZ2dsZUNsYXNzKHRhcmdldCwgY2xhc3NMaXN0LCBmYWxzZSk7XG59O1xudmFyIGdldENoaWxkQnlDbGFzcyA9IGZ1bmN0aW9uIGdldENoaWxkQnlDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoaGFzQ2xhc3MoZWxlbS5jaGlsZE5vZGVzW2ldLCBjbGFzc05hbWUpKSB7XG4gICAgICByZXR1cm4gZWxlbS5jaGlsZE5vZGVzW2ldO1xuICAgIH1cbiAgfVxufTtcbnZhciBhcHBseU51bWVyaWNhbFN0eWxlID0gZnVuY3Rpb24gYXBwbHlOdW1lcmljYWxTdHlsZShlbGVtLCBwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHZhbHVlIHx8IHBhcnNlSW50KHZhbHVlKSA9PT0gMCkge1xuICAgIGVsZW0uc3R5bGVbcHJvcGVydHldID0gdHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJyA/IHZhbHVlICsgJ3B4JyA6IHZhbHVlO1xuICB9IGVsc2Uge1xuICAgIGVsZW0uc3R5bGUucmVtb3ZlUHJvcGVydHkocHJvcGVydHkpO1xuICB9XG59O1xudmFyIHNob3cgPSBmdW5jdGlvbiBzaG93KGVsZW0pIHtcbiAgdmFyIGRpc3BsYXkgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6ICdmbGV4JztcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9IGRpc3BsYXk7XG59O1xudmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gIGVsZW0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG52YXIgdG9nZ2xlID0gZnVuY3Rpb24gdG9nZ2xlKGVsZW0sIGNvbmRpdGlvbiwgZGlzcGxheSkge1xuICBjb25kaXRpb24gPyBzaG93KGVsZW0sIGRpc3BsYXkpIDogaGlkZShlbGVtKTtcbn07IC8vIGJvcnJvd2VkIGZyb20ganF1ZXJ5ICQoZWxlbSkuaXMoJzp2aXNpYmxlJykgaW1wbGVtZW50YXRpb25cblxudmFyIGlzVmlzaWJsZSA9IGZ1bmN0aW9uIGlzVmlzaWJsZShlbGVtKSB7XG4gIHJldHVybiAhIShlbGVtICYmIChlbGVtLm9mZnNldFdpZHRoIHx8IGVsZW0ub2Zmc2V0SGVpZ2h0IHx8IGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGgpKTtcbn07XG52YXIgaXNTY3JvbGxhYmxlID0gZnVuY3Rpb24gaXNTY3JvbGxhYmxlKGVsZW0pIHtcbiAgcmV0dXJuICEhKGVsZW0uc2Nyb2xsSGVpZ2h0ID4gZWxlbS5jbGllbnRIZWlnaHQpO1xufTsgLy8gYm9ycm93ZWQgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvNDYzNTIxMTlcblxudmFyIGhhc0Nzc0FuaW1hdGlvbiA9IGZ1bmN0aW9uIGhhc0Nzc0FuaW1hdGlvbihlbGVtKSB7XG4gIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICB2YXIgYW5pbUR1cmF0aW9uID0gcGFyc2VGbG9hdChzdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdhbmltYXRpb24tZHVyYXRpb24nKSB8fCAnMCcpO1xuICB2YXIgdHJhbnNEdXJhdGlvbiA9IHBhcnNlRmxvYXQoc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndHJhbnNpdGlvbi1kdXJhdGlvbicpIHx8ICcwJyk7XG4gIHJldHVybiBhbmltRHVyYXRpb24gPiAwIHx8IHRyYW5zRHVyYXRpb24gPiAwO1xufTtcbnZhciBjb250YWlucyA9IGZ1bmN0aW9uIGNvbnRhaW5zKGhheXN0YWNrLCBuZWVkbGUpIHtcbiAgaWYgKHR5cGVvZiBoYXlzdGFjay5jb250YWlucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBoYXlzdGFjay5jb250YWlucyhuZWVkbGUpO1xuICB9XG59O1xuXG52YXIgZ2V0Q29udGFpbmVyID0gZnVuY3Rpb24gZ2V0Q29udGFpbmVyKCkge1xuICByZXR1cm4gZG9jdW1lbnQuYm9keS5xdWVyeVNlbGVjdG9yKCcuJyArIHN3YWxDbGFzc2VzLmNvbnRhaW5lcik7XG59O1xudmFyIGVsZW1lbnRCeVNlbGVjdG9yID0gZnVuY3Rpb24gZWxlbWVudEJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIHtcbiAgdmFyIGNvbnRhaW5lciA9IGdldENvbnRhaW5lcigpO1xuICByZXR1cm4gY29udGFpbmVyID8gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JTdHJpbmcpIDogbnVsbDtcbn07XG5cbnZhciBlbGVtZW50QnlDbGFzcyA9IGZ1bmN0aW9uIGVsZW1lbnRCeUNsYXNzKGNsYXNzTmFtZSkge1xuICByZXR1cm4gZWxlbWVudEJ5U2VsZWN0b3IoJy4nICsgY2xhc3NOYW1lKTtcbn07XG5cbnZhciBnZXRQb3B1cCA9IGZ1bmN0aW9uIGdldFBvcHVwKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMucG9wdXApO1xufTtcbnZhciBnZXRJY29ucyA9IGZ1bmN0aW9uIGdldEljb25zKCkge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpO1xuICByZXR1cm4gdG9BcnJheShwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcuJyArIHN3YWxDbGFzc2VzLmljb24pKTtcbn07XG52YXIgZ2V0SWNvbiA9IGZ1bmN0aW9uIGdldEljb24oKSB7XG4gIHZhciB2aXNpYmxlSWNvbiA9IGdldEljb25zKCkuZmlsdGVyKGZ1bmN0aW9uIChpY29uKSB7XG4gICAgcmV0dXJuIGlzVmlzaWJsZShpY29uKTtcbiAgfSk7XG4gIHJldHVybiB2aXNpYmxlSWNvbi5sZW5ndGggPyB2aXNpYmxlSWNvblswXSA6IG51bGw7XG59O1xudmFyIGdldFRpdGxlID0gZnVuY3Rpb24gZ2V0VGl0bGUoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy50aXRsZSk7XG59O1xudmFyIGdldENvbnRlbnQgPSBmdW5jdGlvbiBnZXRDb250ZW50KCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuY29udGVudCk7XG59O1xudmFyIGdldEltYWdlID0gZnVuY3Rpb24gZ2V0SW1hZ2UoKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5pbWFnZSk7XG59O1xudmFyIGdldFByb2dyZXNzU3RlcHMgPSBmdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3Byb2dyZXNzLXN0ZXBzJ10pO1xufTtcbnZhciBnZXRWYWxpZGF0aW9uTWVzc2FnZSA9IGZ1bmN0aW9uIGdldFZhbGlkYXRpb25NZXNzYWdlKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddKTtcbn07XG52YXIgZ2V0Q29uZmlybUJ1dHRvbiA9IGZ1bmN0aW9uIGdldENvbmZpcm1CdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5hY3Rpb25zICsgJyAuJyArIHN3YWxDbGFzc2VzLmNvbmZpcm0pO1xufTtcbnZhciBnZXRDYW5jZWxCdXR0b24gPSBmdW5jdGlvbiBnZXRDYW5jZWxCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlTZWxlY3RvcignLicgKyBzd2FsQ2xhc3Nlcy5hY3Rpb25zICsgJyAuJyArIHN3YWxDbGFzc2VzLmNhbmNlbCk7XG59O1xudmFyIGdldEFjdGlvbnMgPSBmdW5jdGlvbiBnZXRBY3Rpb25zKCkge1xuICByZXR1cm4gZWxlbWVudEJ5Q2xhc3Moc3dhbENsYXNzZXMuYWN0aW9ucyk7XG59O1xudmFyIGdldEhlYWRlciA9IGZ1bmN0aW9uIGdldEhlYWRlcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmhlYWRlcik7XG59O1xudmFyIGdldEZvb3RlciA9IGZ1bmN0aW9uIGdldEZvb3RlcigpIHtcbiAgcmV0dXJuIGVsZW1lbnRCeUNsYXNzKHN3YWxDbGFzc2VzLmZvb3Rlcik7XG59O1xudmFyIGdldENsb3NlQnV0dG9uID0gZnVuY3Rpb24gZ2V0Q2xvc2VCdXR0b24oKSB7XG4gIHJldHVybiBlbGVtZW50QnlDbGFzcyhzd2FsQ2xhc3Nlcy5jbG9zZSk7XG59O1xudmFyIGdldEZvY3VzYWJsZUVsZW1lbnRzID0gZnVuY3Rpb24gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKSB7XG4gIHZhciBmb2N1c2FibGVFbGVtZW50c1dpdGhUYWJpbmRleCA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSk6bm90KFt0YWJpbmRleD1cIjBcIl0pJykpIC8vIHNvcnQgYWNjb3JkaW5nIHRvIHRhYmluZGV4XG4gIC5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgYSA9IHBhcnNlSW50KGEuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpKTtcbiAgICBiID0gcGFyc2VJbnQoYi5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykpO1xuXG4gICAgaWYgKGEgPiBiKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9IGVsc2UgaWYgKGEgPCBiKSB7XG4gICAgICByZXR1cm4gLTE7XG4gICAgfVxuXG4gICAgcmV0dXJuIDA7XG4gIH0pOyAvLyBodHRwczovL2dpdGh1Yi5jb20vamt1cC9mb2N1c2FibGUvYmxvYi9tYXN0ZXIvaW5kZXguanNcblxuICB2YXIgb3RoZXJGb2N1c2FibGVFbGVtZW50cyA9IHRvQXJyYXkoZ2V0UG9wdXAoKS5xdWVyeVNlbGVjdG9yQWxsKCdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCBbdGFiaW5kZXg9XCIwXCJdLCBbY29udGVudGVkaXRhYmxlXSwgYXVkaW9bY29udHJvbHNdLCB2aWRlb1tjb250cm9sc10nKSkuZmlsdGVyKGZ1bmN0aW9uIChlbCkge1xuICAgIHJldHVybiBlbC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgIT09ICctMSc7XG4gIH0pO1xuICByZXR1cm4gdW5pcXVlQXJyYXkoZm9jdXNhYmxlRWxlbWVudHNXaXRoVGFiaW5kZXguY29uY2F0KG90aGVyRm9jdXNhYmxlRWxlbWVudHMpKS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7XG4gICAgcmV0dXJuIGlzVmlzaWJsZShlbCk7XG4gIH0pO1xufTtcbnZhciBpc01vZGFsID0gZnVuY3Rpb24gaXNNb2RhbCgpIHtcbiAgcmV0dXJuICFpc1RvYXN0KCkgJiYgIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbn07XG52YXIgaXNUb2FzdCA9IGZ1bmN0aW9uIGlzVG9hc3QoKSB7XG4gIHJldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucyhzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSk7XG59O1xudmFyIGlzTG9hZGluZyA9IGZ1bmN0aW9uIGlzTG9hZGluZygpIHtcbiAgcmV0dXJuIGdldFBvcHVwKCkuaGFzQXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnKTtcbn07XG5cbi8vIERldGVjdCBOb2RlIGVudlxudmFyIGlzTm9kZUVudiA9IGZ1bmN0aW9uIGlzTm9kZUVudigpIHtcbiAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCc7XG59O1xuXG52YXIgc3dlZXRIVE1MID0gXCJcXG4gPGRpdiBhcmlhLWxhYmVsbGVkYnk9XFxcIlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGFyaWEtZGVzY3JpYmVkYnk9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnBvcHVwLCBcIlxcXCIgdGFiaW5kZXg9XFxcIi0xXFxcIj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmhlYWRlciwgXCJcXFwiPlxcbiAgICAgPHVsIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwcyddLCBcIlxcXCI+PC91bD5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMuZXJyb3IsIFwiXFxcIj5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFya1xcXCI+PHNwYW4gY2xhc3M9XFxcInN3YWwyLXgtbWFyay1saW5lLWxlZnRcXFwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cXFwic3dhbDIteC1tYXJrLWxpbmUtcmlnaHRcXFwiPjwvc3Bhbj48L3NwYW4+XFxuICAgICA8L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMucXVlc3Rpb24sIFwiXFxcIj48L2Rpdj5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIgXCIpLmNvbmNhdChpY29uVHlwZXMud2FybmluZywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5pY29uLCBcIiBcIikuY29uY2F0KGljb25UeXBlcy5pbmZvLCBcIlxcXCI+PC9kaXY+XFxuICAgICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmljb24sIFwiIFwiKS5jb25jYXQoaWNvblR5cGVzLnN1Y2Nlc3MsIFwiXFxcIj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lLWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgICA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLXRpcFxcXCI+PC9zcGFuPiA8c3BhbiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1saW5lLWxvbmdcXFwiPjwvc3Bhbj5cXG4gICAgICAgPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1yaW5nXFxcIj48L2Rpdj4gPGRpdiBjbGFzcz1cXFwic3dhbDItc3VjY2Vzcy1maXhcXFwiPjwvZGl2PlxcbiAgICAgICA8ZGl2IGNsYXNzPVxcXCJzd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHRcXFwiPjwvZGl2PlxcbiAgICAgPC9kaXY+XFxuICAgICA8aW1nIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmltYWdlLCBcIlxcXCIgLz5cXG4gICAgIDxoMiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy50aXRsZSwgXCJcXFwiIGlkPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRpdGxlLCBcIlxcXCI+PC9oMj5cXG4gICAgIDxidXR0b24gdHlwZT1cXFwiYnV0dG9uXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jbG9zZSwgXCJcXFwiPiZ0aW1lczs8L2J1dHRvbj5cXG4gICA8L2Rpdj5cXG4gICA8ZGl2IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNvbnRlbnQsIFwiXFxcIj5cXG4gICAgIDxkaXYgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29udGVudCwgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGlucHV0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmlucHV0LCBcIlxcXCIgLz5cXG4gICAgIDxpbnB1dCB0eXBlPVxcXCJmaWxlXFxcIiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5maWxlLCBcIlxcXCIgLz5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiXFxcIj5cXG4gICAgICAgPGlucHV0IHR5cGU9XFxcInJhbmdlXFxcIiAvPlxcbiAgICAgICA8b3V0cHV0Pjwvb3V0cHV0PlxcbiAgICAgPC9kaXY+XFxuICAgICA8c2VsZWN0IGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnNlbGVjdCwgXCJcXFwiPjwvc2VsZWN0PlxcbiAgICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYWRpbywgXCJcXFwiPjwvZGl2PlxcbiAgICAgPGxhYmVsIGZvcj1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5jaGVja2JveCwgXCJcXFwiIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIlxcXCI+XFxuICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCIgLz5cXG4gICAgICAgPHNwYW4gY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMubGFiZWwsIFwiXFxcIj48L3NwYW4+XFxuICAgICA8L2xhYmVsPlxcbiAgICAgPHRleHRhcmVhIGNsYXNzPVxcXCJcIikuY29uY2F0KHN3YWxDbGFzc2VzLnRleHRhcmVhLCBcIlxcXCI+PC90ZXh0YXJlYT5cXG4gICAgIDxkaXYgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddLCBcIlxcXCIgaWQ9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXNbJ3ZhbGlkYXRpb24tbWVzc2FnZSddLCBcIlxcXCI+PC9kaXY+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5hY3Rpb25zLCBcIlxcXCI+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY29uZmlybSwgXCJcXFwiPk9LPC9idXR0b24+XFxuICAgICA8YnV0dG9uIHR5cGU9XFxcImJ1dHRvblxcXCIgY2xhc3M9XFxcIlwiKS5jb25jYXQoc3dhbENsYXNzZXMuY2FuY2VsLCBcIlxcXCI+Q2FuY2VsPC9idXR0b24+XFxuICAgPC9kaXY+XFxuICAgPGRpdiBjbGFzcz1cXFwiXCIpLmNvbmNhdChzd2FsQ2xhc3Nlcy5mb290ZXIsIFwiXFxcIj5cXG4gICA8L2Rpdj5cXG4gPC9kaXY+XFxuXCIpLnJlcGxhY2UoLyhefFxcbilcXHMqL2csICcnKTtcblxudmFyIHJlc2V0T2xkQ29udGFpbmVyID0gZnVuY3Rpb24gcmVzZXRPbGRDb250YWluZXIoKSB7XG4gIHZhciBvbGRDb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICBpZiAoIW9sZENvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIG9sZENvbnRhaW5lci5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG9sZENvbnRhaW5lcik7XG4gIHJlbW92ZUNsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldLCBbc3dhbENsYXNzZXNbJ25vLWJhY2tkcm9wJ10sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddLCBzd2FsQ2xhc3Nlc1snaGFzLWNvbHVtbiddXSk7XG59O1xuXG52YXIgb2xkSW5wdXRWYWw7IC8vIElFMTEgd29ya2Fyb3VuZCwgc2VlICMxMTA5IGZvciBkZXRhaWxzXG5cbnZhciByZXNldFZhbGlkYXRpb25NZXNzYWdlID0gZnVuY3Rpb24gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZShlKSB7XG4gIGlmIChTd2FsLmlzVmlzaWJsZSgpICYmIG9sZElucHV0VmFsICE9PSBlLnRhcmdldC52YWx1ZSkge1xuICAgIFN3YWwucmVzZXRWYWxpZGF0aW9uTWVzc2FnZSgpO1xuICB9XG5cbiAgb2xkSW5wdXRWYWwgPSBlLnRhcmdldC52YWx1ZTtcbn07XG5cbnZhciBhZGRJbnB1dENoYW5nZUxpc3RlbmVycyA9IGZ1bmN0aW9uIGFkZElucHV0Q2hhbmdlTGlzdGVuZXJzKCkge1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgdmFyIGlucHV0ID0gZ2V0Q2hpbGRCeUNsYXNzKGNvbnRlbnQsIHN3YWxDbGFzc2VzLmlucHV0KTtcbiAgdmFyIGZpbGUgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuZmlsZSk7XG4gIHZhciByYW5nZSA9IGNvbnRlbnQucXVlcnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMucmFuZ2UsIFwiIGlucHV0XCIpKTtcbiAgdmFyIHJhbmdlT3V0cHV0ID0gY29udGVudC5xdWVyeVNlbGVjdG9yKFwiLlwiLmNvbmNhdChzd2FsQ2xhc3Nlcy5yYW5nZSwgXCIgb3V0cHV0XCIpKTtcbiAgdmFyIHNlbGVjdCA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICB2YXIgY2hlY2tib3ggPSBjb250ZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIuY29uY2F0KHN3YWxDbGFzc2VzLmNoZWNrYm94LCBcIiBpbnB1dFwiKSk7XG4gIHZhciB0ZXh0YXJlYSA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gIGlucHV0Lm9uaW5wdXQgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICBmaWxlLm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgc2VsZWN0Lm9uY2hhbmdlID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgY2hlY2tib3gub25jaGFuZ2UgPSByZXNldFZhbGlkYXRpb25NZXNzYWdlO1xuICB0ZXh0YXJlYS5vbmlucHV0ID0gcmVzZXRWYWxpZGF0aW9uTWVzc2FnZTtcblxuICByYW5nZS5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcbiAgICByZXNldFZhbGlkYXRpb25NZXNzYWdlKGUpO1xuICAgIHJhbmdlT3V0cHV0LnZhbHVlID0gcmFuZ2UudmFsdWU7XG4gIH07XG5cbiAgcmFuZ2Uub25jaGFuZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZSk7XG4gICAgcmFuZ2UubmV4dFNpYmxpbmcudmFsdWUgPSByYW5nZS52YWx1ZTtcbiAgfTtcbn07XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIHJldHVybiB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KSA6IHRhcmdldDtcbn07XG5cbnZhciBzZXR1cEFjY2Vzc2liaWxpdHkgPSBmdW5jdGlvbiBzZXR1cEFjY2Vzc2liaWxpdHkocGFyYW1zKSB7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgncm9sZScsIHBhcmFtcy50b2FzdCA/ICdhbGVydCcgOiAnZGlhbG9nJyk7XG4gIHBvcHVwLnNldEF0dHJpYnV0ZSgnYXJpYS1saXZlJywgcGFyYW1zLnRvYXN0ID8gJ3BvbGl0ZScgOiAnYXNzZXJ0aXZlJyk7XG5cbiAgaWYgKCFwYXJhbXMudG9hc3QpIHtcbiAgICBwb3B1cC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbW9kYWwnLCAndHJ1ZScpO1xuICB9XG59O1xuXG52YXIgc2V0dXBSVEwgPSBmdW5jdGlvbiBzZXR1cFJUTCh0YXJnZXRFbGVtZW50KSB7XG4gIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0YXJnZXRFbGVtZW50KS5kaXJlY3Rpb24gPT09ICdydGwnKSB7XG4gICAgYWRkQ2xhc3MoZ2V0Q29udGFpbmVyKCksIHN3YWxDbGFzc2VzLnJ0bCk7XG4gIH1cbn07XG4vKlxuICogQWRkIG1vZGFsICsgYmFja2Ryb3AgdG8gRE9NXG4gKi9cblxuXG52YXIgaW5pdCA9IGZ1bmN0aW9uIGluaXQocGFyYW1zKSB7XG4gIC8vIENsZWFuIHVwIHRoZSBvbGQgcG9wdXAgY29udGFpbmVyIGlmIGl0IGV4aXN0c1xuICByZXNldE9sZENvbnRhaW5lcigpO1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuICBpZiAoaXNOb2RlRW52KCkpIHtcbiAgICBlcnJvcignU3dlZXRBbGVydDIgcmVxdWlyZXMgZG9jdW1lbnQgdG8gaW5pdGlhbGl6ZScpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTmFtZSA9IHN3YWxDbGFzc2VzLmNvbnRhaW5lcjtcbiAgY29udGFpbmVyLmlubmVySFRNTCA9IHN3ZWV0SFRNTDtcbiAgdmFyIHRhcmdldEVsZW1lbnQgPSBnZXRUYXJnZXQocGFyYW1zLnRhcmdldCk7XG4gIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgc2V0dXBBY2Nlc3NpYmlsaXR5KHBhcmFtcyk7XG4gIHNldHVwUlRMKHRhcmdldEVsZW1lbnQpO1xuICBhZGRJbnB1dENoYW5nZUxpc3RlbmVycygpO1xufTtcblxudmFyIHBhcnNlSHRtbFRvQ29udGFpbmVyID0gZnVuY3Rpb24gcGFyc2VIdG1sVG9Db250YWluZXIocGFyYW0sIHRhcmdldCkge1xuICAvLyBET00gZWxlbWVudFxuICBpZiAocGFyYW0gaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChwYXJhbSk7IC8vIEpRdWVyeSBlbGVtZW50KHMpXG4gIH0gZWxzZSBpZiAoX3R5cGVvZihwYXJhbSkgPT09ICdvYmplY3QnKSB7XG4gICAgaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIHBhcmFtKTsgLy8gUGxhaW4gc3RyaW5nXG4gIH0gZWxzZSBpZiAocGFyYW0pIHtcbiAgICB0YXJnZXQuaW5uZXJIVE1MID0gcGFyYW07XG4gIH1cbn07XG5cbnZhciBoYW5kbGVKcXVlcnlFbGVtID0gZnVuY3Rpb24gaGFuZGxlSnF1ZXJ5RWxlbSh0YXJnZXQsIGVsZW0pIHtcbiAgdGFyZ2V0LmlubmVySFRNTCA9ICcnO1xuXG4gIGlmICgwIGluIGVsZW0pIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSBpbiBlbGVtOyBpKyspIHtcbiAgICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtW2ldLmNsb25lTm9kZSh0cnVlKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHRhcmdldC5hcHBlbmRDaGlsZChlbGVtLmNsb25lTm9kZSh0cnVlKSk7XG4gIH1cbn07XG5cbnZhciBhbmltYXRpb25FbmRFdmVudCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKGlzTm9kZUVudigpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIHRlc3RFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB2YXIgdHJhbnNFbmRFdmVudE5hbWVzID0ge1xuICAgICdXZWJraXRBbmltYXRpb24nOiAnd2Via2l0QW5pbWF0aW9uRW5kJyxcbiAgICAnT0FuaW1hdGlvbic6ICdvQW5pbWF0aW9uRW5kIG9hbmltYXRpb25lbmQnLFxuICAgICdhbmltYXRpb24nOiAnYW5pbWF0aW9uZW5kJ1xuICB9O1xuXG4gIGZvciAodmFyIGkgaW4gdHJhbnNFbmRFdmVudE5hbWVzKSB7XG4gICAgaWYgKHRyYW5zRW5kRXZlbnROYW1lcy5oYXNPd25Qcm9wZXJ0eShpKSAmJiB0eXBlb2YgdGVzdEVsLnN0eWxlW2ldICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuIHRyYW5zRW5kRXZlbnROYW1lc1tpXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59KCk7XG5cbi8vIE1lYXN1cmUgd2lkdGggb2Ygc2Nyb2xsYmFyXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvanMvbW9kYWwuanMjTDI3OS1MMjg2XG52YXIgbWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uIG1lYXN1cmVTY3JvbGxiYXIoKSB7XG4gIHZhciBzdXBwb3J0c1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gd2luZG93IHx8IG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzO1xuXG4gIGlmIChzdXBwb3J0c1RvdWNoKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cblxuICB2YXIgc2Nyb2xsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNjcm9sbERpdi5zdHlsZS53aWR0aCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLmhlaWdodCA9ICc1MHB4JztcbiAgc2Nyb2xsRGl2LnN0eWxlLm92ZXJmbG93ID0gJ3Njcm9sbCc7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2Nyb2xsRGl2KTtcbiAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoO1xuICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNjcm9sbERpdik7XG4gIHJldHVybiBzY3JvbGxiYXJXaWR0aDtcbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUJ1dHRvbnNTdHlsaW5nKGNvbmZpcm1CdXR0b24sIGNhbmNlbEJ1dHRvbiwgcGFyYW1zKSB7XG4gIGFkZENsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpOyAvLyBCdXR0b25zIGJhY2tncm91bmQgY29sb3JzXG5cbiAgaWYgKHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3IpIHtcbiAgICBjb25maXJtQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jb25maXJtQnV0dG9uQ29sb3I7XG4gIH1cblxuICBpZiAocGFyYW1zLmNhbmNlbEJ1dHRvbkNvbG9yKSB7XG4gICAgY2FuY2VsQnV0dG9uLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHBhcmFtcy5jYW5jZWxCdXR0b25Db2xvcjtcbiAgfSAvLyBMb2FkaW5nIHN0YXRlXG5cblxuICB2YXIgY29uZmlybUJ1dHRvbkJhY2tncm91bmRDb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGNvbmZpcm1CdXR0b24pLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yO1xuICBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSBjb25maXJtQnV0dG9uQmFja2dyb3VuZENvbG9yO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCdXR0b24oYnV0dG9uLCBidXR0b25UeXBlLCBwYXJhbXMpIHtcbiAgdG9nZ2xlKGJ1dHRvbiwgcGFyYW1zWydzaG93QycgKyBidXR0b25UeXBlLnN1YnN0cmluZygxKSArICdCdXR0b24nXSwgJ2lubGluZS1ibG9jaycpO1xuICBidXR0b24uaW5uZXJIVE1MID0gcGFyYW1zW2J1dHRvblR5cGUgKyAnQnV0dG9uVGV4dCddOyAvLyBTZXQgY2FwdGlvbiB0ZXh0XG5cbiAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIHBhcmFtc1tidXR0b25UeXBlICsgJ0J1dHRvbkFyaWFMYWJlbCddKTsgLy8gQVJJQSBsYWJlbFxuICAvLyBBZGQgYnV0dG9ucyBjdXN0b20gY2xhc3Nlc1xuXG4gIGJ1dHRvbi5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlc1tidXR0b25UeXBlXTtcbiAgYXBwbHlDdXN0b21DbGFzcyhidXR0b24sIHBhcmFtcy5jdXN0b21DbGFzcywgYnV0dG9uVHlwZSArICdCdXR0b24nKTtcbiAgYWRkQ2xhc3MoYnV0dG9uLCBwYXJhbXNbYnV0dG9uVHlwZSArICdCdXR0b25DbGFzcyddKTtcbn1cblxudmFyIHJlbmRlckFjdGlvbnMgPSBmdW5jdGlvbiByZW5kZXJBY3Rpb25zKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7IC8vIEFjdGlvbnMgKGJ1dHRvbnMpIHdyYXBwZXJcblxuICBpZiAoIXBhcmFtcy5zaG93Q29uZmlybUJ1dHRvbiAmJiAhcGFyYW1zLnNob3dDYW5jZWxCdXR0b24pIHtcbiAgICBoaWRlKGFjdGlvbnMpO1xuICB9IGVsc2Uge1xuICAgIHNob3coYWN0aW9ucyk7XG4gIH0gLy8gQ3VzdG9tIGNsYXNzXG5cblxuICBhcHBseUN1c3RvbUNsYXNzKGFjdGlvbnMsIHBhcmFtcy5jdXN0b21DbGFzcywgJ2FjdGlvbnMnKTsgLy8gUmVuZGVyIGNvbmZpcm0gYnV0dG9uXG5cbiAgcmVuZGVyQnV0dG9uKGNvbmZpcm1CdXR0b24sICdjb25maXJtJywgcGFyYW1zKTsgLy8gcmVuZGVyIENhbmNlbCBCdXR0b25cblxuICByZW5kZXJCdXR0b24oY2FuY2VsQnV0dG9uLCAnY2FuY2VsJywgcGFyYW1zKTtcblxuICBpZiAocGFyYW1zLmJ1dHRvbnNTdHlsaW5nKSB7XG4gICAgaGFuZGxlQnV0dG9uc1N0eWxpbmcoY29uZmlybUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBwYXJhbXMpO1xuICB9IGVsc2Uge1xuICAgIHJlbW92ZUNsYXNzKFtjb25maXJtQnV0dG9uLCBjYW5jZWxCdXR0b25dLCBzd2FsQ2xhc3Nlcy5zdHlsZWQpO1xuICAgIGNvbmZpcm1CdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29uZmlybUJ1dHRvbi5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjb25maXJtQnV0dG9uLnN0eWxlLmJvcmRlclJpZ2h0Q29sb3IgPSAnJztcbiAgICBjYW5jZWxCdXR0b24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY2FuY2VsQnV0dG9uLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNhbmNlbEJ1dHRvbi5zdHlsZS5ib3JkZXJSaWdodENvbG9yID0gJyc7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBiYWNrZHJvcCkge1xuICBpZiAodHlwZW9mIGJhY2tkcm9wID09PSAnc3RyaW5nJykge1xuICAgIGNvbnRhaW5lci5zdHlsZS5iYWNrZ3JvdW5kID0gYmFja2Ryb3A7XG4gIH0gZWxzZSBpZiAoIWJhY2tkcm9wKSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVQb3NpdGlvblBhcmFtKGNvbnRhaW5lciwgcG9zaXRpb24pIHtcbiAgaWYgKHBvc2l0aW9uIGluIHN3YWxDbGFzc2VzKSB7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1twb3NpdGlvbl0pO1xuICB9IGVsc2Uge1xuICAgIHdhcm4oJ1RoZSBcInBvc2l0aW9uXCIgcGFyYW1ldGVyIGlzIG5vdCB2YWxpZCwgZGVmYXVsdGluZyB0byBcImNlbnRlclwiJyk7XG4gICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlcy5jZW50ZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIGdyb3cpIHtcbiAgaWYgKGdyb3cgJiYgdHlwZW9mIGdyb3cgPT09ICdzdHJpbmcnKSB7XG4gICAgdmFyIGdyb3dDbGFzcyA9ICdncm93LScgKyBncm93O1xuXG4gICAgaWYgKGdyb3dDbGFzcyBpbiBzd2FsQ2xhc3Nlcykge1xuICAgICAgYWRkQ2xhc3MoY29udGFpbmVyLCBzd2FsQ2xhc3Nlc1tncm93Q2xhc3NdKTtcbiAgICB9XG4gIH1cbn1cblxudmFyIHJlbmRlckNvbnRhaW5lciA9IGZ1bmN0aW9uIHJlbmRlckNvbnRhaW5lcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcblxuICBpZiAoIWNvbnRhaW5lcikge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGhhbmRsZUJhY2tkcm9wUGFyYW0oY29udGFpbmVyLCBwYXJhbXMuYmFja2Ryb3ApO1xuXG4gIGlmICghcGFyYW1zLmJhY2tkcm9wICYmIHBhcmFtcy5hbGxvd091dHNpZGVDbGljaykge1xuICAgIHdhcm4oJ1wiYWxsb3dPdXRzaWRlQ2xpY2tcIiBwYXJhbWV0ZXIgcmVxdWlyZXMgYGJhY2tkcm9wYCBwYXJhbWV0ZXIgdG8gYmUgc2V0IHRvIGB0cnVlYCcpO1xuICB9XG5cbiAgaGFuZGxlUG9zaXRpb25QYXJhbShjb250YWluZXIsIHBhcmFtcy5wb3NpdGlvbik7XG4gIGhhbmRsZUdyb3dQYXJhbShjb250YWluZXIsIHBhcmFtcy5ncm93KTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhjb250YWluZXIsIHBhcmFtcy5jdXN0b21DbGFzcywgJ2NvbnRhaW5lcicpO1xuXG4gIGlmIChwYXJhbXMuY3VzdG9tQ29udGFpbmVyQ2xhc3MpIHtcbiAgICAvLyBAZGVwcmVjYXRlZFxuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgcGFyYW1zLmN1c3RvbUNvbnRhaW5lckNsYXNzKTtcbiAgfVxufTtcblxuLyoqXG4gKiBUaGlzIG1vZHVsZSBjb250YWludHMgYFdlYWtNYXBgcyBmb3IgZWFjaCBlZmZlY3RpdmVseS1cInByaXZhdGUgIHByb3BlcnR5XCIgdGhhdCBhIGBTd2FsYCBoYXMuXG4gKiBGb3IgZXhhbXBsZSwgdG8gc2V0IHRoZSBwcml2YXRlIHByb3BlcnR5IFwiZm9vXCIgb2YgYHRoaXNgIHRvIFwiYmFyXCIsIHlvdSBjYW4gYHByaXZhdGVQcm9wcy5mb28uc2V0KHRoaXMsICdiYXInKWBcbiAqIFRoaXMgaXMgdGhlIGFwcHJvYWNoIHRoYXQgQmFiZWwgd2lsbCBwcm9iYWJseSB0YWtlIHRvIGltcGxlbWVudCBwcml2YXRlIG1ldGhvZHMvZmllbGRzXG4gKiAgIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByaXZhdGUtbWV0aG9kc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vYmFiZWwvYmFiZWwvcHVsbC83NTU1XG4gKiBPbmNlIHdlIGhhdmUgdGhlIGNoYW5nZXMgZnJvbSB0aGF0IFBSIGluIEJhYmVsLCBhbmQgb3VyIGNvcmUgY2xhc3MgZml0cyByZWFzb25hYmxlIGluICpvbmUgbW9kdWxlKlxuICogICB0aGVuIHdlIGNhbiB1c2UgdGhhdCBsYW5ndWFnZSBmZWF0dXJlLlxuICovXG52YXIgcHJpdmF0ZVByb3BzID0ge1xuICBwcm9taXNlOiBuZXcgV2Vha01hcCgpLFxuICBpbm5lclBhcmFtczogbmV3IFdlYWtNYXAoKSxcbiAgZG9tQ2FjaGU6IG5ldyBXZWFrTWFwKClcbn07XG5cbnZhciByZW5kZXJJbnB1dCA9IGZ1bmN0aW9uIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7XG4gIHZhciByZXJlbmRlciA9ICFpbm5lclBhcmFtcyB8fCBwYXJhbXMuaW5wdXQgIT09IGlubmVyUGFyYW1zLmlucHV0O1xuICB2YXIgY29udGVudCA9IGdldENvbnRlbnQoKTtcbiAgdmFyIGlucHV0VHlwZXMgPSBbJ2lucHV0JywgJ2ZpbGUnLCAncmFuZ2UnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ3RleHRhcmVhJ107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnB1dFR5cGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGlucHV0Q2xhc3MgPSBzd2FsQ2xhc3Nlc1tpbnB1dFR5cGVzW2ldXTtcbiAgICB2YXIgaW5wdXRDb250YWluZXIgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgaW5wdXRDbGFzcyk7IC8vIHNldCBhdHRyaWJ1dGVzXG5cbiAgICBzZXRBdHRyaWJ1dGVzKGlucHV0VHlwZXNbaV0sIHBhcmFtcy5pbnB1dEF0dHJpYnV0ZXMpOyAvLyBzZXQgY2xhc3NcblxuICAgIHNldENsYXNzKGlucHV0Q29udGFpbmVyLCBpbnB1dENsYXNzLCBwYXJhbXMpO1xuICAgIHJlcmVuZGVyICYmIGhpZGUoaW5wdXRDb250YWluZXIpO1xuICB9XG5cbiAgaWYgKCFwYXJhbXMuaW5wdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoIXJlbmRlcklucHV0VHlwZVtwYXJhbXMuaW5wdXRdKSB7XG4gICAgcmV0dXJuIGVycm9yKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0ISBFeHBlY3RlZCBcXFwidGV4dFxcXCIsIFxcXCJlbWFpbFxcXCIsIFxcXCJwYXNzd29yZFxcXCIsIFxcXCJudW1iZXJcXFwiLCBcXFwidGVsXFxcIiwgXFxcInNlbGVjdFxcXCIsIFxcXCJyYWRpb1xcXCIsIFxcXCJjaGVja2JveFxcXCIsIFxcXCJ0ZXh0YXJlYVxcXCIsIFxcXCJmaWxlXFxcIiBvciBcXFwidXJsXFxcIiwgZ290IFxcXCJcIi5jb25jYXQocGFyYW1zLmlucHV0LCBcIlxcXCJcIikpO1xuICB9XG5cbiAgaWYgKHJlcmVuZGVyKSB7XG4gICAgdmFyIGlucHV0ID0gcmVuZGVySW5wdXRUeXBlW3BhcmFtcy5pbnB1dF0ocGFyYW1zKTtcbiAgICBzaG93KGlucHV0KTtcbiAgfVxufTtcblxudmFyIHJlbW92ZUF0dHJpYnV0ZXMgPSBmdW5jdGlvbiByZW1vdmVBdHRyaWJ1dGVzKGlucHV0KSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXQuYXR0cmlidXRlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBhdHRyTmFtZSA9IGlucHV0LmF0dHJpYnV0ZXNbaV0ubmFtZTtcblxuICAgIGlmICghKFsndHlwZScsICd2YWx1ZScsICdzdHlsZSddLmluZGV4T2YoYXR0ck5hbWUpICE9PSAtMSkpIHtcbiAgICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZShhdHRyTmFtZSk7XG4gICAgfVxuICB9XG59O1xuXG52YXIgc2V0QXR0cmlidXRlcyA9IGZ1bmN0aW9uIHNldEF0dHJpYnV0ZXMoaW5wdXRUeXBlLCBpbnB1dEF0dHJpYnV0ZXMpIHtcbiAgdmFyIGlucHV0ID0gZ2V0SW5wdXQoZ2V0Q29udGVudCgpLCBpbnB1dFR5cGUpO1xuXG4gIGlmICghaW5wdXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICByZW1vdmVBdHRyaWJ1dGVzKGlucHV0KTtcblxuICBmb3IgKHZhciBhdHRyIGluIGlucHV0QXR0cmlidXRlcykge1xuICAgIC8vIERvIG5vdCBzZXQgYSBwbGFjZWhvbGRlciBmb3IgPGlucHV0IHR5cGU9XCJyYW5nZVwiPlxuICAgIC8vIGl0J2xsIGNyYXNoIEVkZ2UsICMxMjk4XG4gICAgaWYgKGlucHV0VHlwZSA9PT0gJ3JhbmdlJyAmJiBhdHRyID09PSAncGxhY2Vob2xkZXInKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoYXR0ciwgaW5wdXRBdHRyaWJ1dGVzW2F0dHJdKTtcbiAgfVxufTtcblxudmFyIHNldENsYXNzID0gZnVuY3Rpb24gc2V0Q2xhc3MoaW5wdXRDb250YWluZXIsIGlucHV0Q2xhc3MsIHBhcmFtcykge1xuICBpbnB1dENvbnRhaW5lci5jbGFzc05hbWUgPSBpbnB1dENsYXNzO1xuXG4gIGlmIChwYXJhbXMuaW5wdXRDbGFzcykge1xuICAgIGFkZENsYXNzKGlucHV0Q29udGFpbmVyLCBwYXJhbXMuaW5wdXRDbGFzcyk7XG4gIH1cblxuICBpZiAocGFyYW1zLmN1c3RvbUNsYXNzKSB7XG4gICAgYWRkQ2xhc3MoaW5wdXRDb250YWluZXIsIHBhcmFtcy5jdXN0b21DbGFzcy5pbnB1dCk7XG4gIH1cbn07XG5cbnZhciBzZXRJbnB1dFBsYWNlaG9sZGVyID0gZnVuY3Rpb24gc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKSB7XG4gIGlmICghaW5wdXQucGxhY2Vob2xkZXIgfHwgcGFyYW1zLmlucHV0UGxhY2Vob2xkZXIpIHtcbiAgICBpbnB1dC5wbGFjZWhvbGRlciA9IHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyO1xuICB9XG59O1xuXG52YXIgcmVuZGVySW5wdXRUeXBlID0ge307XG5cbnJlbmRlcklucHV0VHlwZS50ZXh0ID0gcmVuZGVySW5wdXRUeXBlLmVtYWlsID0gcmVuZGVySW5wdXRUeXBlLnBhc3N3b3JkID0gcmVuZGVySW5wdXRUeXBlLm51bWJlciA9IHJlbmRlcklucHV0VHlwZS50ZWwgPSByZW5kZXJJbnB1dFR5cGUudXJsID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgaW5wdXQgPSBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBzd2FsQ2xhc3Nlcy5pbnB1dCk7XG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMuaW5wdXRWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHBhcmFtcy5pbnB1dFZhbHVlID09PSAnbnVtYmVyJykge1xuICAgIGlucHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gIH0gZWxzZSBpZiAoIWlzUHJvbWlzZShwYXJhbXMuaW5wdXRWYWx1ZSkpIHtcbiAgICB3YXJuKFwiVW5leHBlY3RlZCB0eXBlIG9mIGlucHV0VmFsdWUhIEV4cGVjdGVkIFxcXCJzdHJpbmdcXFwiLCBcXFwibnVtYmVyXFxcIiBvciBcXFwiUHJvbWlzZVxcXCIsIGdvdCBcXFwiXCIuY29uY2F0KF90eXBlb2YocGFyYW1zLmlucHV0VmFsdWUpLCBcIlxcXCJcIikpO1xuICB9XG5cbiAgc2V0SW5wdXRQbGFjZWhvbGRlcihpbnB1dCwgcGFyYW1zKTtcbiAgaW5wdXQudHlwZSA9IHBhcmFtcy5pbnB1dDtcbiAgcmV0dXJuIGlucHV0O1xufTtcblxucmVuZGVySW5wdXRUeXBlLmZpbGUgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHZhciBpbnB1dCA9IGdldENoaWxkQnlDbGFzcyhnZXRDb250ZW50KCksIHN3YWxDbGFzc2VzLmZpbGUpO1xuICBzZXRJbnB1dFBsYWNlaG9sZGVyKGlucHV0LCBwYXJhbXMpO1xuICBpbnB1dC50eXBlID0gcGFyYW1zLmlucHV0O1xuICByZXR1cm4gaW5wdXQ7XG59O1xuXG5yZW5kZXJJbnB1dFR5cGUucmFuZ2UgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHZhciByYW5nZSA9IGdldENoaWxkQnlDbGFzcyhnZXRDb250ZW50KCksIHN3YWxDbGFzc2VzLnJhbmdlKTtcbiAgdmFyIHJhbmdlSW5wdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpO1xuICB2YXIgcmFuZ2VPdXRwdXQgPSByYW5nZS5xdWVyeVNlbGVjdG9yKCdvdXRwdXQnKTtcbiAgcmFuZ2VJbnB1dC52YWx1ZSA9IHBhcmFtcy5pbnB1dFZhbHVlO1xuICByYW5nZUlucHV0LnR5cGUgPSBwYXJhbXMuaW5wdXQ7XG4gIHJhbmdlT3V0cHV0LnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gIHJldHVybiByYW5nZTtcbn07XG5cbnJlbmRlcklucHV0VHlwZS5zZWxlY3QgPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBzd2FsQ2xhc3Nlcy5zZWxlY3QpO1xuICBzZWxlY3QuaW5uZXJIVE1MID0gJyc7XG5cbiAgaWYgKHBhcmFtcy5pbnB1dFBsYWNlaG9sZGVyKSB7XG4gICAgdmFyIHBsYWNlaG9sZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgcGxhY2Vob2xkZXIuaW5uZXJIVE1MID0gcGFyYW1zLmlucHV0UGxhY2Vob2xkZXI7XG4gICAgcGxhY2Vob2xkZXIudmFsdWUgPSAnJztcbiAgICBwbGFjZWhvbGRlci5kaXNhYmxlZCA9IHRydWU7XG4gICAgcGxhY2Vob2xkZXIuc2VsZWN0ZWQgPSB0cnVlO1xuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcik7XG4gIH1cblxuICByZXR1cm4gc2VsZWN0O1xufTtcblxucmVuZGVySW5wdXRUeXBlLnJhZGlvID0gZnVuY3Rpb24gKCkge1xuICB2YXIgcmFkaW8gPSBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gIHJhZGlvLmlubmVySFRNTCA9ICcnO1xuICByZXR1cm4gcmFkaW87XG59O1xuXG5yZW5kZXJJbnB1dFR5cGUuY2hlY2tib3ggPSBmdW5jdGlvbiAocGFyYW1zKSB7XG4gIHZhciBjaGVja2JveCA9IGdldENoaWxkQnlDbGFzcyhnZXRDb250ZW50KCksIHN3YWxDbGFzc2VzLmNoZWNrYm94KTtcbiAgdmFyIGNoZWNrYm94SW5wdXQgPSBnZXRJbnB1dChnZXRDb250ZW50KCksICdjaGVja2JveCcpO1xuICBjaGVja2JveElucHV0LnR5cGUgPSAnY2hlY2tib3gnO1xuICBjaGVja2JveElucHV0LnZhbHVlID0gMTtcbiAgY2hlY2tib3hJbnB1dC5pZCA9IHN3YWxDbGFzc2VzLmNoZWNrYm94O1xuICBjaGVja2JveElucHV0LmNoZWNrZWQgPSBCb29sZWFuKHBhcmFtcy5pbnB1dFZhbHVlKTtcbiAgdmFyIGxhYmVsID0gY2hlY2tib3gucXVlcnlTZWxlY3Rvcignc3BhbicpO1xuICBsYWJlbC5pbm5lckhUTUwgPSBwYXJhbXMuaW5wdXRQbGFjZWhvbGRlcjtcbiAgcmV0dXJuIGNoZWNrYm94O1xufTtcblxucmVuZGVySW5wdXRUeXBlLnRleHRhcmVhID0gZnVuY3Rpb24gKHBhcmFtcykge1xuICB2YXIgdGV4dGFyZWEgPSBnZXRDaGlsZEJ5Q2xhc3MoZ2V0Q29udGVudCgpLCBzd2FsQ2xhc3Nlcy50ZXh0YXJlYSk7XG4gIHRleHRhcmVhLnZhbHVlID0gcGFyYW1zLmlucHV0VmFsdWU7XG4gIHNldElucHV0UGxhY2Vob2xkZXIodGV4dGFyZWEsIHBhcmFtcyk7XG4gIHJldHVybiB0ZXh0YXJlYTtcbn07XG5cbnZhciByZW5kZXJDb250ZW50ID0gZnVuY3Rpb24gcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpLnF1ZXJ5U2VsZWN0b3IoJyMnICsgc3dhbENsYXNzZXMuY29udGVudCk7IC8vIENvbnRlbnQgYXMgSFRNTFxuXG4gIGlmIChwYXJhbXMuaHRtbCkge1xuICAgIHBhcnNlSHRtbFRvQ29udGFpbmVyKHBhcmFtcy5odG1sLCBjb250ZW50KTtcbiAgICBzaG93KGNvbnRlbnQsICdibG9jaycpOyAvLyBDb250ZW50IGFzIHBsYWluIHRleHRcbiAgfSBlbHNlIGlmIChwYXJhbXMudGV4dCkge1xuICAgIGNvbnRlbnQudGV4dENvbnRlbnQgPSBwYXJhbXMudGV4dDtcbiAgICBzaG93KGNvbnRlbnQsICdibG9jaycpOyAvLyBObyBjb250ZW50XG4gIH0gZWxzZSB7XG4gICAgaGlkZShjb250ZW50KTtcbiAgfVxuXG4gIHJlbmRlcklucHV0KGluc3RhbmNlLCBwYXJhbXMpOyAvLyBDdXN0b20gY2xhc3NcblxuICBhcHBseUN1c3RvbUNsYXNzKGdldENvbnRlbnQoKSwgcGFyYW1zLmN1c3RvbUNsYXNzLCAnY29udGVudCcpO1xufTtcblxudmFyIHJlbmRlckZvb3RlciA9IGZ1bmN0aW9uIHJlbmRlckZvb3RlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBmb290ZXIgPSBnZXRGb290ZXIoKTtcbiAgdG9nZ2xlKGZvb3RlciwgcGFyYW1zLmZvb3Rlcik7XG5cbiAgaWYgKHBhcmFtcy5mb290ZXIpIHtcbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMuZm9vdGVyLCBmb290ZXIpO1xuICB9IC8vIEN1c3RvbSBjbGFzc1xuXG5cbiAgYXBwbHlDdXN0b21DbGFzcyhmb290ZXIsIHBhcmFtcy5jdXN0b21DbGFzcywgJ2Zvb3RlcicpO1xufTtcblxudmFyIHJlbmRlckNsb3NlQnV0dG9uID0gZnVuY3Rpb24gcmVuZGVyQ2xvc2VCdXR0b24oaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgY2xvc2VCdXR0b24gPSBnZXRDbG9zZUJ1dHRvbigpOyAvLyBDdXN0b20gY2xhc3NcblxuICBhcHBseUN1c3RvbUNsYXNzKGNsb3NlQnV0dG9uLCBwYXJhbXMuY3VzdG9tQ2xhc3MsICdjbG9zZUJ1dHRvbicpO1xuICB0b2dnbGUoY2xvc2VCdXR0b24sIHBhcmFtcy5zaG93Q2xvc2VCdXR0b24pO1xuICBjbG9zZUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBwYXJhbXMuY2xvc2VCdXR0b25BcmlhTGFiZWwpO1xufTtcblxudmFyIHJlbmRlckljb24gPSBmdW5jdGlvbiByZW5kZXJJY29uKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGlubmVyUGFyYW1zID0gcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLmdldChpbnN0YW5jZSk7IC8vIGlmIHRoZSBpY29uIHdpdGggdGhlIGdpdmVuIHR5cGUgYWxyZWFkeSByZW5kZXJlZCxcbiAgLy8gYXBwbHkgdGhlIGN1c3RvbSBjbGFzcyB3aXRob3V0IHJlLXJlbmRlcmluZyB0aGUgaWNvblxuXG4gIGlmIChpbm5lclBhcmFtcyAmJiBwYXJhbXMudHlwZSA9PT0gaW5uZXJQYXJhbXMudHlwZSAmJiBnZXRJY29uKCkpIHtcbiAgICBhcHBseUN1c3RvbUNsYXNzKGdldEljb24oKSwgcGFyYW1zLmN1c3RvbUNsYXNzLCAnaWNvbicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGhpZGVBbGxJY29ucygpO1xuXG4gIGlmICghcGFyYW1zLnR5cGUpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBhZGp1c3RTdWNjZXNzSWNvbkJhY2tnb3VuZENvbG9yKCk7XG5cbiAgaWYgKE9iamVjdC5rZXlzKGljb25UeXBlcykuaW5kZXhPZihwYXJhbXMudHlwZSkgIT09IC0xKSB7XG4gICAgdmFyIGljb24gPSBlbGVtZW50QnlTZWxlY3RvcihcIi5cIi5jb25jYXQoc3dhbENsYXNzZXMuaWNvbiwgXCIuXCIpLmNvbmNhdChpY29uVHlwZXNbcGFyYW1zLnR5cGVdKSk7XG4gICAgc2hvdyhpY29uKTsgLy8gQ3VzdG9tIGNsYXNzXG5cbiAgICBhcHBseUN1c3RvbUNsYXNzKGljb24sIHBhcmFtcy5jdXN0b21DbGFzcywgJ2ljb24nKTsgLy8gQW5pbWF0ZSBpY29uXG5cbiAgICB0b2dnbGVDbGFzcyhpY29uLCBcInN3YWwyLWFuaW1hdGUtXCIuY29uY2F0KHBhcmFtcy50eXBlLCBcIi1pY29uXCIpLCBwYXJhbXMuYW5pbWF0aW9uKTtcbiAgfSBlbHNlIHtcbiAgICBlcnJvcihcIlVua25vd24gdHlwZSEgRXhwZWN0ZWQgXFxcInN1Y2Nlc3NcXFwiLCBcXFwiZXJyb3JcXFwiLCBcXFwid2FybmluZ1xcXCIsIFxcXCJpbmZvXFxcIiBvciBcXFwicXVlc3Rpb25cXFwiLCBnb3QgXFxcIlwiLmNvbmNhdChwYXJhbXMudHlwZSwgXCJcXFwiXCIpKTtcbiAgfVxufTtcblxudmFyIGhpZGVBbGxJY29ucyA9IGZ1bmN0aW9uIGhpZGVBbGxJY29ucygpIHtcbiAgdmFyIGljb25zID0gZ2V0SWNvbnMoKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGljb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgaGlkZShpY29uc1tpXSk7XG4gIH1cbn07IC8vIEFkanVzdCBzdWNjZXNzIGljb24gYmFja2dyb3VuZCBjb2xvciB0byBtYXRjaCB0aGUgcG9wdXAgYmFja2dyb3VuZCBjb2xvclxuXG5cbnZhciBhZGp1c3RTdWNjZXNzSWNvbkJhY2tnb3VuZENvbG9yID0gZnVuY3Rpb24gYWRqdXN0U3VjY2Vzc0ljb25CYWNrZ291bmRDb2xvcigpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIHBvcHVwQmFja2dyb3VuZENvbG9yID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUocG9wdXApLmdldFByb3BlcnR5VmFsdWUoJ2JhY2tncm91bmQtY29sb3InKTtcbiAgdmFyIHN1Y2Nlc3NJY29uUGFydHMgPSBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCdbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV0sIC5zd2FsMi1zdWNjZXNzLWZpeCcpO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3VjY2Vzc0ljb25QYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgIHN1Y2Nlc3NJY29uUGFydHNbaV0uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcG9wdXBCYWNrZ3JvdW5kQ29sb3I7XG4gIH1cbn07XG5cbnZhciByZW5kZXJJbWFnZSA9IGZ1bmN0aW9uIHJlbmRlckltYWdlKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGltYWdlID0gZ2V0SW1hZ2UoKTtcblxuICBpZiAoIXBhcmFtcy5pbWFnZVVybCkge1xuICAgIHJldHVybiBoaWRlKGltYWdlKTtcbiAgfVxuXG4gIHNob3coaW1hZ2UpOyAvLyBTcmMsIGFsdFxuXG4gIGltYWdlLnNldEF0dHJpYnV0ZSgnc3JjJywgcGFyYW1zLmltYWdlVXJsKTtcbiAgaW1hZ2Uuc2V0QXR0cmlidXRlKCdhbHQnLCBwYXJhbXMuaW1hZ2VBbHQpOyAvLyBXaWR0aCwgaGVpZ2h0XG5cbiAgYXBwbHlOdW1lcmljYWxTdHlsZShpbWFnZSwgJ3dpZHRoJywgcGFyYW1zLmltYWdlV2lkdGgpO1xuICBhcHBseU51bWVyaWNhbFN0eWxlKGltYWdlLCAnaGVpZ2h0JywgcGFyYW1zLmltYWdlSGVpZ2h0KTsgLy8gQ2xhc3NcblxuICBpbWFnZS5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5pbWFnZTtcbiAgYXBwbHlDdXN0b21DbGFzcyhpbWFnZSwgcGFyYW1zLmN1c3RvbUNsYXNzLCAnaW1hZ2UnKTtcblxuICBpZiAocGFyYW1zLmltYWdlQ2xhc3MpIHtcbiAgICBhZGRDbGFzcyhpbWFnZSwgcGFyYW1zLmltYWdlQ2xhc3MpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlU3RlcEVsZW1lbnQgPSBmdW5jdGlvbiBjcmVhdGVTdGVwRWxlbWVudChzdGVwKSB7XG4gIHZhciBzdGVwRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBhZGRDbGFzcyhzdGVwRWwsIHN3YWxDbGFzc2VzWydwcm9ncmVzcy1zdGVwJ10pO1xuICBzdGVwRWwuaW5uZXJIVE1MID0gc3RlcDtcbiAgcmV0dXJuIHN0ZXBFbDtcbn07XG5cbnZhciBjcmVhdGVMaW5lRWxlbWVudCA9IGZ1bmN0aW9uIGNyZWF0ZUxpbmVFbGVtZW50KHBhcmFtcykge1xuICB2YXIgbGluZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgYWRkQ2xhc3MobGluZUVsLCBzd2FsQ2xhc3Nlc1sncHJvZ3Jlc3Mtc3RlcC1saW5lJ10pO1xuXG4gIGlmIChwYXJhbXMucHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlKSB7XG4gICAgbGluZUVsLnN0eWxlLndpZHRoID0gcGFyYW1zLnByb2dyZXNzU3RlcHNEaXN0YW5jZTtcbiAgfVxuXG4gIHJldHVybiBsaW5lRWw7XG59O1xuXG52YXIgcmVuZGVyUHJvZ3Jlc3NTdGVwcyA9IGZ1bmN0aW9uIHJlbmRlclByb2dyZXNzU3RlcHMoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lciA9IGdldFByb2dyZXNzU3RlcHMoKTtcblxuICBpZiAoIXBhcmFtcy5wcm9ncmVzc1N0ZXBzIHx8IHBhcmFtcy5wcm9ncmVzc1N0ZXBzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBoaWRlKHByb2dyZXNzU3RlcHNDb250YWluZXIpO1xuICB9XG5cbiAgc2hvdyhwcm9ncmVzc1N0ZXBzQ29udGFpbmVyKTtcbiAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgdmFyIGN1cnJlbnRQcm9ncmVzc1N0ZXAgPSBwYXJzZUludChwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCA9PT0gbnVsbCA/IFN3YWwuZ2V0UXVldWVTdGVwKCkgOiBwYXJhbXMuY3VycmVudFByb2dyZXNzU3RlcCk7XG5cbiAgaWYgKGN1cnJlbnRQcm9ncmVzc1N0ZXAgPj0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoKSB7XG4gICAgd2FybignSW52YWxpZCBjdXJyZW50UHJvZ3Jlc3NTdGVwIHBhcmFtZXRlciwgaXQgc2hvdWxkIGJlIGxlc3MgdGhhbiBwcm9ncmVzc1N0ZXBzLmxlbmd0aCAnICsgJyhjdXJyZW50UHJvZ3Jlc3NTdGVwIGxpa2UgSlMgYXJyYXlzIHN0YXJ0cyBmcm9tIDApJyk7XG4gIH1cblxuICBwYXJhbXMucHJvZ3Jlc3NTdGVwcy5mb3JFYWNoKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgIHZhciBzdGVwRWwgPSBjcmVhdGVTdGVwRWxlbWVudChzdGVwKTtcbiAgICBwcm9ncmVzc1N0ZXBzQ29udGFpbmVyLmFwcGVuZENoaWxkKHN0ZXBFbCk7XG5cbiAgICBpZiAoaW5kZXggPT09IGN1cnJlbnRQcm9ncmVzc1N0ZXApIHtcbiAgICAgIGFkZENsYXNzKHN0ZXBFbCwgc3dhbENsYXNzZXNbJ2FjdGl2ZS1wcm9ncmVzcy1zdGVwJ10pO1xuICAgIH1cblxuICAgIGlmIChpbmRleCAhPT0gcGFyYW1zLnByb2dyZXNzU3RlcHMubGVuZ3RoIC0gMSkge1xuICAgICAgdmFyIGxpbmVFbCA9IGNyZWF0ZUxpbmVFbGVtZW50KHN0ZXApO1xuICAgICAgcHJvZ3Jlc3NTdGVwc0NvbnRhaW5lci5hcHBlbmRDaGlsZChsaW5lRWwpO1xuICAgIH1cbiAgfSk7XG59O1xuXG52YXIgcmVuZGVyVGl0bGUgPSBmdW5jdGlvbiByZW5kZXJUaXRsZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciB0aXRsZSA9IGdldFRpdGxlKCk7XG4gIHRvZ2dsZSh0aXRsZSwgcGFyYW1zLnRpdGxlIHx8IHBhcmFtcy50aXRsZVRleHQpO1xuXG4gIGlmIChwYXJhbXMudGl0bGUpIHtcbiAgICBwYXJzZUh0bWxUb0NvbnRhaW5lcihwYXJhbXMudGl0bGUsIHRpdGxlKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMudGl0bGVUZXh0KSB7XG4gICAgdGl0bGUuaW5uZXJUZXh0ID0gcGFyYW1zLnRpdGxlVGV4dDtcbiAgfSAvLyBDdXN0b20gY2xhc3NcblxuXG4gIGFwcGx5Q3VzdG9tQ2xhc3ModGl0bGUsIHBhcmFtcy5jdXN0b21DbGFzcywgJ3RpdGxlJyk7XG59O1xuXG52YXIgcmVuZGVySGVhZGVyID0gZnVuY3Rpb24gcmVuZGVySGVhZGVyKGluc3RhbmNlLCBwYXJhbXMpIHtcbiAgdmFyIGhlYWRlciA9IGdldEhlYWRlcigpOyAvLyBDdXN0b20gY2xhc3NcblxuICBhcHBseUN1c3RvbUNsYXNzKGhlYWRlciwgcGFyYW1zLmN1c3RvbUNsYXNzLCAnaGVhZGVyJyk7IC8vIFByb2dyZXNzIHN0ZXBzXG5cbiAgcmVuZGVyUHJvZ3Jlc3NTdGVwcyhpbnN0YW5jZSwgcGFyYW1zKTsgLy8gSWNvblxuXG4gIHJlbmRlckljb24oaW5zdGFuY2UsIHBhcmFtcyk7IC8vIEltYWdlXG5cbiAgcmVuZGVySW1hZ2UoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIFRpdGxlXG5cbiAgcmVuZGVyVGl0bGUoaW5zdGFuY2UsIHBhcmFtcyk7IC8vIENsb3NlIGJ1dHRvblxuXG4gIHJlbmRlckNsb3NlQnV0dG9uKGluc3RhbmNlLCBwYXJhbXMpO1xufTtcblxudmFyIHJlbmRlclBvcHVwID0gZnVuY3Rpb24gcmVuZGVyUG9wdXAoaW5zdGFuY2UsIHBhcmFtcykge1xuICB2YXIgcG9wdXAgPSBnZXRQb3B1cCgpOyAvLyBXaWR0aFxuXG4gIGFwcGx5TnVtZXJpY2FsU3R5bGUocG9wdXAsICd3aWR0aCcsIHBhcmFtcy53aWR0aCk7IC8vIFBhZGRpbmdcblxuICBhcHBseU51bWVyaWNhbFN0eWxlKHBvcHVwLCAncGFkZGluZycsIHBhcmFtcy5wYWRkaW5nKTsgLy8gQmFja2dyb3VuZFxuXG4gIGlmIChwYXJhbXMuYmFja2dyb3VuZCkge1xuICAgIHBvcHVwLnN0eWxlLmJhY2tncm91bmQgPSBwYXJhbXMuYmFja2dyb3VuZDtcbiAgfSAvLyBEZWZhdWx0IENsYXNzXG5cblxuICBwb3B1cC5jbGFzc05hbWUgPSBzd2FsQ2xhc3Nlcy5wb3B1cDtcblxuICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgYWRkQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIHN3YWxDbGFzc2VzWyd0b2FzdC1zaG93biddKTtcbiAgICBhZGRDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMudG9hc3QpO1xuICB9IGVsc2Uge1xuICAgIGFkZENsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5tb2RhbCk7XG4gIH0gLy8gQ3VzdG9tIGNsYXNzXG5cblxuICBhcHBseUN1c3RvbUNsYXNzKHBvcHVwLCBwYXJhbXMuY3VzdG9tQ2xhc3MsICdwb3B1cCcpO1xuXG4gIGlmICh0eXBlb2YgcGFyYW1zLmN1c3RvbUNsYXNzID09PSAnc3RyaW5nJykge1xuICAgIGFkZENsYXNzKHBvcHVwLCBwYXJhbXMuY3VzdG9tQ2xhc3MpO1xuICB9IC8vIENTUyBhbmltYXRpb25cblxuXG4gIHRvZ2dsZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5ub2FuaW1hdGlvbiwgIXBhcmFtcy5hbmltYXRpb24pO1xufTtcblxudmFyIHJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcihpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHJlbmRlclBvcHVwKGluc3RhbmNlLCBwYXJhbXMpO1xuICByZW5kZXJDb250YWluZXIoaW5zdGFuY2UsIHBhcmFtcyk7XG4gIHJlbmRlckhlYWRlcihpbnN0YW5jZSwgcGFyYW1zKTtcbiAgcmVuZGVyQ29udGVudChpbnN0YW5jZSwgcGFyYW1zKTtcbiAgcmVuZGVyQWN0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKTtcbiAgcmVuZGVyRm9vdGVyKGluc3RhbmNlLCBwYXJhbXMpO1xufTtcblxuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBkZXRlcm1pbmUgaWYgU3dlZXRBbGVydDIgcG9wdXAgaXMgc2hvd25cbiAqL1xuXG52YXIgaXNWaXNpYmxlJDEgPSBmdW5jdGlvbiBpc1Zpc2libGUkJDEoKSB7XG4gIHJldHVybiBpc1Zpc2libGUoZ2V0UG9wdXAoKSk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiB0byBjbGljayAnQ29uZmlybScgYnV0dG9uXG4gKi9cblxudmFyIGNsaWNrQ29uZmlybSA9IGZ1bmN0aW9uIGNsaWNrQ29uZmlybSgpIHtcbiAgcmV0dXJuIGdldENvbmZpcm1CdXR0b24oKSAmJiBnZXRDb25maXJtQnV0dG9uKCkuY2xpY2soKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIHRvIGNsaWNrICdDYW5jZWwnIGJ1dHRvblxuICovXG5cbnZhciBjbGlja0NhbmNlbCA9IGZ1bmN0aW9uIGNsaWNrQ2FuY2VsKCkge1xuICByZXR1cm4gZ2V0Q2FuY2VsQnV0dG9uKCkgJiYgZ2V0Q2FuY2VsQnV0dG9uKCkuY2xpY2soKTtcbn07XG5cbmZ1bmN0aW9uIGZpcmUoKSB7XG4gIHZhciBTd2FsID0gdGhpcztcblxuICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICB9XG5cbiAgcmV0dXJuIF9jb25zdHJ1Y3QoU3dhbCwgYXJncyk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBleHRlbmRlZCB2ZXJzaW9uIG9mIGBTd2FsYCBjb250YWluaW5nIGBwYXJhbXNgIGFzIGRlZmF1bHRzLlxuICogVXNlZnVsIGZvciByZXVzaW5nIFN3YWwgY29uZmlndXJhdGlvbi5cbiAqXG4gKiBGb3IgZXhhbXBsZTpcbiAqXG4gKiBCZWZvcmU6XG4gKiBjb25zdCB0ZXh0UHJvbXB0T3B0aW9ucyA9IHsgaW5wdXQ6ICd0ZXh0Jywgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSB9XG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBTd2FsLmZpcmUoeyAuLi50ZXh0UHJvbXB0T3B0aW9ucywgdGl0bGU6ICdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nIH0pXG4gKiBjb25zdCB7dmFsdWU6IGxhc3ROYW1lfSA9IGF3YWl0IFN3YWwuZmlyZSh7IC4uLnRleHRQcm9tcHRPcHRpb25zLCB0aXRsZTogJ1doYXQgaXMgeW91ciBsYXN0IG5hbWU/JyB9KVxuICpcbiAqIEFmdGVyOlxuICogY29uc3QgVGV4dFByb21wdCA9IFN3YWwubWl4aW4oeyBpbnB1dDogJ3RleHQnLCBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlIH0pXG4gKiBjb25zdCB7dmFsdWU6IGZpcnN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgZmlyc3QgbmFtZT8nKVxuICogY29uc3Qge3ZhbHVlOiBsYXN0TmFtZX0gPSBhd2FpdCBUZXh0UHJvbXB0KCdXaGF0IGlzIHlvdXIgbGFzdCBuYW1lPycpXG4gKlxuICogQHBhcmFtIG1peGluUGFyYW1zXG4gKi9cbmZ1bmN0aW9uIG1peGluKG1peGluUGFyYW1zKSB7XG4gIHZhciBNaXhpblN3YWwgPVxuICAvKiNfX1BVUkVfXyovXG4gIGZ1bmN0aW9uIChfdGhpcykge1xuICAgIF9pbmhlcml0cyhNaXhpblN3YWwsIF90aGlzKTtcblxuICAgIGZ1bmN0aW9uIE1peGluU3dhbCgpIHtcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNaXhpblN3YWwpO1xuXG4gICAgICByZXR1cm4gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX2dldFByb3RvdHlwZU9mKE1peGluU3dhbCkuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKE1peGluU3dhbCwgW3tcbiAgICAgIGtleTogXCJfbWFpblwiLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uIF9tYWluKHBhcmFtcykge1xuICAgICAgICByZXR1cm4gX2dldChfZ2V0UHJvdG90eXBlT2YoTWl4aW5Td2FsLnByb3RvdHlwZSksIFwiX21haW5cIiwgdGhpcykuY2FsbCh0aGlzLCBfZXh0ZW5kcyh7fSwgbWl4aW5QYXJhbXMsIHBhcmFtcykpO1xuICAgICAgfVxuICAgIH1dKTtcblxuICAgIHJldHVybiBNaXhpblN3YWw7XG4gIH0odGhpcyk7XG5cbiAgcmV0dXJuIE1peGluU3dhbDtcbn1cblxuLy8gcHJpdmF0ZSBnbG9iYWwgc3RhdGUgZm9yIHRoZSBxdWV1ZSBmZWF0dXJlXG52YXIgY3VycmVudFN0ZXBzID0gW107XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBjaGFpbmluZyBzd2VldEFsZXJ0IHBvcHVwc1xuICovXG5cbnZhciBxdWV1ZSA9IGZ1bmN0aW9uIHF1ZXVlKHN0ZXBzKSB7XG4gIHZhciBTd2FsID0gdGhpcztcbiAgY3VycmVudFN0ZXBzID0gc3RlcHM7XG5cbiAgdmFyIHJlc2V0QW5kUmVzb2x2ZSA9IGZ1bmN0aW9uIHJlc2V0QW5kUmVzb2x2ZShyZXNvbHZlLCB2YWx1ZSkge1xuICAgIGN1cnJlbnRTdGVwcyA9IFtdO1xuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbiAgICByZXNvbHZlKHZhbHVlKTtcbiAgfTtcblxuICB2YXIgcXVldWVSZXN1bHQgPSBbXTtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgKGZ1bmN0aW9uIHN0ZXAoaSwgY2FsbGJhY2spIHtcbiAgICAgIGlmIChpIDwgY3VycmVudFN0ZXBzLmxlbmd0aCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnNldEF0dHJpYnV0ZSgnZGF0YS1zd2FsMi1xdWV1ZS1zdGVwJywgaSk7XG4gICAgICAgIFN3YWwuZmlyZShjdXJyZW50U3RlcHNbaV0pLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0LnZhbHVlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcXVldWVSZXN1bHQucHVzaChyZXN1bHQudmFsdWUpO1xuICAgICAgICAgICAgc3RlcChpICsgMSwgY2FsbGJhY2spO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXNldEFuZFJlc29sdmUocmVzb2x2ZSwge1xuICAgICAgICAgICAgICBkaXNtaXNzOiByZXN1bHQuZGlzbWlzc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc2V0QW5kUmVzb2x2ZShyZXNvbHZlLCB7XG4gICAgICAgICAgdmFsdWU6IHF1ZXVlUmVzdWx0XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pKDApO1xuICB9KTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBnZXR0aW5nIHRoZSBpbmRleCBvZiBjdXJyZW50IHBvcHVwIGluIHF1ZXVlXG4gKi9cblxudmFyIGdldFF1ZXVlU3RlcCA9IGZ1bmN0aW9uIGdldFF1ZXVlU3RlcCgpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmJvZHkuZ2V0QXR0cmlidXRlKCdkYXRhLXN3YWwyLXF1ZXVlLXN0ZXAnKTtcbn07XG4vKlxuICogR2xvYmFsIGZ1bmN0aW9uIGZvciBpbnNlcnRpbmcgYSBwb3B1cCB0byB0aGUgcXVldWVcbiAqL1xuXG52YXIgaW5zZXJ0UXVldWVTdGVwID0gZnVuY3Rpb24gaW5zZXJ0UXVldWVTdGVwKHN0ZXAsIGluZGV4KSB7XG4gIGlmIChpbmRleCAmJiBpbmRleCA8IGN1cnJlbnRTdGVwcy5sZW5ndGgpIHtcbiAgICByZXR1cm4gY3VycmVudFN0ZXBzLnNwbGljZShpbmRleCwgMCwgc3RlcCk7XG4gIH1cblxuICByZXR1cm4gY3VycmVudFN0ZXBzLnB1c2goc3RlcCk7XG59O1xuLypcbiAqIEdsb2JhbCBmdW5jdGlvbiBmb3IgZGVsZXRpbmcgYSBwb3B1cCBmcm9tIHRoZSBxdWV1ZVxuICovXG5cbnZhciBkZWxldGVRdWV1ZVN0ZXAgPSBmdW5jdGlvbiBkZWxldGVRdWV1ZVN0ZXAoaW5kZXgpIHtcbiAgaWYgKHR5cGVvZiBjdXJyZW50U3RlcHNbaW5kZXhdICE9PSAndW5kZWZpbmVkJykge1xuICAgIGN1cnJlbnRTdGVwcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG59O1xuXG4vKipcbiAqIFNob3cgc3Bpbm5lciBpbnN0ZWFkIG9mIENvbmZpcm0gYnV0dG9uIGFuZCBkaXNhYmxlIENhbmNlbCBidXR0b25cbiAqL1xuXG52YXIgc2hvd0xvYWRpbmcgPSBmdW5jdGlvbiBzaG93TG9hZGluZygpIHtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICBpZiAoIXBvcHVwKSB7XG4gICAgU3dhbC5maXJlKCcnKTtcbiAgfVxuXG4gIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgdmFyIGFjdGlvbnMgPSBnZXRBY3Rpb25zKCk7XG4gIHZhciBjb25maXJtQnV0dG9uID0gZ2V0Q29uZmlybUJ1dHRvbigpO1xuICB2YXIgY2FuY2VsQnV0dG9uID0gZ2V0Q2FuY2VsQnV0dG9uKCk7XG4gIHNob3coYWN0aW9ucyk7XG4gIHNob3coY29uZmlybUJ1dHRvbik7XG4gIGFkZENsYXNzKFtwb3B1cCwgYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBjb25maXJtQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgY2FuY2VsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdkYXRhLWxvYWRpbmcnLCB0cnVlKTtcbiAgcG9wdXAuc2V0QXR0cmlidXRlKCdhcmlhLWJ1c3knLCB0cnVlKTtcbiAgcG9wdXAuZm9jdXMoKTtcbn07XG5cbnZhciBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQgPSAxMDA7XG5cbnZhciBnbG9iYWxTdGF0ZSA9IHt9O1xudmFyIGZvY3VzUHJldmlvdXNBY3RpdmVFbGVtZW50ID0gZnVuY3Rpb24gZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQoKSB7XG4gIGlmIChnbG9iYWxTdGF0ZS5wcmV2aW91c0FjdGl2ZUVsZW1lbnQgJiYgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKSB7XG4gICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgZ2xvYmFsU3RhdGUucHJldmlvdXNBY3RpdmVFbGVtZW50ID0gbnVsbDtcbiAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5KSB7XG4gICAgZG9jdW1lbnQuYm9keS5mb2N1cygpO1xuICB9XG59OyAvLyBSZXN0b3JlIHByZXZpb3VzIGFjdGl2ZSAoZm9jdXNlZCkgZWxlbWVudFxuXG5cbnZhciByZXN0b3JlQWN0aXZlRWxlbWVudCA9IGZ1bmN0aW9uIHJlc3RvcmVBY3RpdmVFbGVtZW50KCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICB2YXIgeCA9IHdpbmRvdy5zY3JvbGxYO1xuICAgIHZhciB5ID0gd2luZG93LnNjcm9sbFk7XG4gICAgZ2xvYmFsU3RhdGUucmVzdG9yZUZvY3VzVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgZm9jdXNQcmV2aW91c0FjdGl2ZUVsZW1lbnQoKTtcbiAgICAgIHJlc29sdmUoKTtcbiAgICB9LCBSRVNUT1JFX0ZPQ1VTX1RJTUVPVVQpOyAvLyBpc3N1ZXMvOTAwXG5cbiAgICBpZiAodHlwZW9mIHggIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB5ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gSUUgZG9lc24ndCBoYXZlIHNjcm9sbFgvc2Nyb2xsWSBzdXBwb3J0XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oeCwgeSk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXMgc2V0LCByZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBPdGhlcndpc2UsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5cbnZhciBnZXRUaW1lckxlZnQgPSBmdW5jdGlvbiBnZXRUaW1lckxlZnQoKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuZ2V0VGltZXJMZWZ0KCk7XG59O1xuLyoqXG4gKiBTdG9wIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5cbnZhciBzdG9wVGltZXIgPSBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gIHJldHVybiBnbG9iYWxTdGF0ZS50aW1lb3V0ICYmIGdsb2JhbFN0YXRlLnRpbWVvdXQuc3RvcCgpO1xufTtcbi8qKlxuICogUmVzdW1lIHRpbWVyLiBSZXR1cm5zIG51bWJlciBvZiBtaWxsaXNlY29uZHMgb2YgdGltZXIgcmVtYWluZWQuXG4gKiBJZiBgdGltZXJgIHBhcmFtZXRlciBpc24ndCBzZXQsIHJldHVybnMgdW5kZWZpbmVkLlxuICovXG5cbnZhciByZXN1bWVUaW1lciA9IGZ1bmN0aW9uIHJlc3VtZVRpbWVyKCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LnN0YXJ0KCk7XG59O1xuLyoqXG4gKiBSZXN1bWUgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiB0aW1lciByZW1haW5lZC5cbiAqIElmIGB0aW1lcmAgcGFyYW1ldGVyIGlzbid0IHNldCwgcmV0dXJucyB1bmRlZmluZWQuXG4gKi9cblxudmFyIHRvZ2dsZVRpbWVyID0gZnVuY3Rpb24gdG9nZ2xlVGltZXIoKSB7XG4gIHZhciB0aW1lciA9IGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gIHJldHVybiB0aW1lciAmJiAodGltZXIucnVubmluZyA/IHRpbWVyLnN0b3AoKSA6IHRpbWVyLnN0YXJ0KCkpO1xufTtcbi8qKlxuICogSW5jcmVhc2UgdGltZXIuIFJldHVybnMgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBvZiBhbiB1cGRhdGVkIHRpbWVyLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZC5cbiAqL1xuXG52YXIgaW5jcmVhc2VUaW1lciA9IGZ1bmN0aW9uIGluY3JlYXNlVGltZXIobikge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmluY3JlYXNlKG4pO1xufTtcbi8qKlxuICogQ2hlY2sgaWYgdGltZXIgaXMgcnVubmluZy4gUmV0dXJucyB0cnVlIGlmIHRpbWVyIGlzIHJ1bm5pbmdcbiAqIG9yIGZhbHNlIGlmIHRpbWVyIGlzIHBhdXNlZCBvciBzdG9wcGVkLlxuICogSWYgYHRpbWVyYCBwYXJhbWV0ZXIgaXNuJ3Qgc2V0LCByZXR1cm5zIHVuZGVmaW5lZFxuICovXG5cbnZhciBpc1RpbWVyUnVubmluZyA9IGZ1bmN0aW9uIGlzVGltZXJSdW5uaW5nKCkge1xuICByZXR1cm4gZ2xvYmFsU3RhdGUudGltZW91dCAmJiBnbG9iYWxTdGF0ZS50aW1lb3V0LmlzUnVubmluZygpO1xufTtcblxudmFyIGRlZmF1bHRQYXJhbXMgPSB7XG4gIHRpdGxlOiAnJyxcbiAgdGl0bGVUZXh0OiAnJyxcbiAgdGV4dDogJycsXG4gIGh0bWw6ICcnLFxuICBmb290ZXI6ICcnLFxuICB0eXBlOiBudWxsLFxuICB0b2FzdDogZmFsc2UsXG4gIGN1c3RvbUNsYXNzOiAnJyxcbiAgY3VzdG9tQ29udGFpbmVyQ2xhc3M6ICcnLFxuICB0YXJnZXQ6ICdib2R5JyxcbiAgYmFja2Ryb3A6IHRydWUsXG4gIGFuaW1hdGlvbjogdHJ1ZSxcbiAgaGVpZ2h0QXV0bzogdHJ1ZSxcbiAgYWxsb3dPdXRzaWRlQ2xpY2s6IHRydWUsXG4gIGFsbG93RXNjYXBlS2V5OiB0cnVlLFxuICBhbGxvd0VudGVyS2V5OiB0cnVlLFxuICBzdG9wS2V5ZG93blByb3BhZ2F0aW9uOiB0cnVlLFxuICBrZXlkb3duTGlzdGVuZXJDYXB0dXJlOiBmYWxzZSxcbiAgc2hvd0NvbmZpcm1CdXR0b246IHRydWUsXG4gIHNob3dDYW5jZWxCdXR0b246IGZhbHNlLFxuICBwcmVDb25maXJtOiBudWxsLFxuICBjb25maXJtQnV0dG9uVGV4dDogJ09LJyxcbiAgY29uZmlybUJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNvbmZpcm1CdXR0b25Db2xvcjogbnVsbCxcbiAgY29uZmlybUJ1dHRvbkNsYXNzOiAnJyxcbiAgY2FuY2VsQnV0dG9uVGV4dDogJ0NhbmNlbCcsXG4gIGNhbmNlbEJ1dHRvbkFyaWFMYWJlbDogJycsXG4gIGNhbmNlbEJ1dHRvbkNvbG9yOiBudWxsLFxuICBjYW5jZWxCdXR0b25DbGFzczogJycsXG4gIGJ1dHRvbnNTdHlsaW5nOiB0cnVlLFxuICByZXZlcnNlQnV0dG9uczogZmFsc2UsXG4gIGZvY3VzQ29uZmlybTogdHJ1ZSxcbiAgZm9jdXNDYW5jZWw6IGZhbHNlLFxuICBzaG93Q2xvc2VCdXR0b246IGZhbHNlLFxuICBjbG9zZUJ1dHRvbkFyaWFMYWJlbDogJ0Nsb3NlIHRoaXMgZGlhbG9nJyxcbiAgc2hvd0xvYWRlck9uQ29uZmlybTogZmFsc2UsXG4gIGltYWdlVXJsOiBudWxsLFxuICBpbWFnZVdpZHRoOiBudWxsLFxuICBpbWFnZUhlaWdodDogbnVsbCxcbiAgaW1hZ2VBbHQ6ICcnLFxuICBpbWFnZUNsYXNzOiAnJyxcbiAgdGltZXI6IG51bGwsXG4gIHdpZHRoOiBudWxsLFxuICBwYWRkaW5nOiBudWxsLFxuICBiYWNrZ3JvdW5kOiBudWxsLFxuICBpbnB1dDogbnVsbCxcbiAgaW5wdXRQbGFjZWhvbGRlcjogJycsXG4gIGlucHV0VmFsdWU6ICcnLFxuICBpbnB1dE9wdGlvbnM6IHt9LFxuICBpbnB1dEF1dG9UcmltOiB0cnVlLFxuICBpbnB1dENsYXNzOiAnJyxcbiAgaW5wdXRBdHRyaWJ1dGVzOiB7fSxcbiAgaW5wdXRWYWxpZGF0b3I6IG51bGwsXG4gIHZhbGlkYXRpb25NZXNzYWdlOiBudWxsLFxuICBncm93OiBmYWxzZSxcbiAgcG9zaXRpb246ICdjZW50ZXInLFxuICBwcm9ncmVzc1N0ZXBzOiBbXSxcbiAgY3VycmVudFByb2dyZXNzU3RlcDogbnVsbCxcbiAgcHJvZ3Jlc3NTdGVwc0Rpc3RhbmNlOiBudWxsLFxuICBvbkJlZm9yZU9wZW46IG51bGwsXG4gIG9uQWZ0ZXJDbG9zZTogbnVsbCxcbiAgb25PcGVuOiBudWxsLFxuICBvbkNsb3NlOiBudWxsLFxuICBzY3JvbGxiYXJQYWRkaW5nOiB0cnVlXG59O1xudmFyIHVwZGF0YWJsZVBhcmFtcyA9IFsndGl0bGUnLCAndGl0bGVUZXh0JywgJ3RleHQnLCAnaHRtbCcsICd0eXBlJywgJ2N1c3RvbUNsYXNzJywgJ3Nob3dDb25maXJtQnV0dG9uJywgJ3Nob3dDYW5jZWxCdXR0b24nLCAnY29uZmlybUJ1dHRvblRleHQnLCAnY29uZmlybUJ1dHRvbkFyaWFMYWJlbCcsICdjb25maXJtQnV0dG9uQ29sb3InLCAnY29uZmlybUJ1dHRvbkNsYXNzJywgJ2NhbmNlbEJ1dHRvblRleHQnLCAnY2FuY2VsQnV0dG9uQXJpYUxhYmVsJywgJ2NhbmNlbEJ1dHRvbkNvbG9yJywgJ2NhbmNlbEJ1dHRvbkNsYXNzJywgJ2J1dHRvbnNTdHlsaW5nJywgJ3JldmVyc2VCdXR0b25zJywgJ2ltYWdlVXJsJywgJ2ltYWdlV2lkdGgnLCAnaW1hZ2VIZWlndGgnLCAnaW1hZ2VBbHQnLCAnaW1hZ2VDbGFzcycsICdwcm9ncmVzc1N0ZXBzJywgJ2N1cnJlbnRQcm9ncmVzc1N0ZXAnXTtcbnZhciBkZXByZWNhdGVkUGFyYW1zID0ge1xuICBjdXN0b21Db250YWluZXJDbGFzczogJ2N1c3RvbUNsYXNzJyxcbiAgY29uZmlybUJ1dHRvbkNsYXNzOiAnY3VzdG9tQ2xhc3MnLFxuICBjYW5jZWxCdXR0b25DbGFzczogJ2N1c3RvbUNsYXNzJyxcbiAgaW1hZ2VDbGFzczogJ2N1c3RvbUNsYXNzJyxcbiAgaW5wdXRDbGFzczogJ2N1c3RvbUNsYXNzJ1xufTtcbnZhciB0b2FzdEluY29tcGF0aWJsZVBhcmFtcyA9IFsnYWxsb3dPdXRzaWRlQ2xpY2snLCAnYWxsb3dFbnRlcktleScsICdiYWNrZHJvcCcsICdmb2N1c0NvbmZpcm0nLCAnZm9jdXNDYW5jZWwnLCAnaGVpZ2h0QXV0bycsICdrZXlkb3duTGlzdGVuZXJDYXB0dXJlJ107XG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlclxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtTmFtZVxuICovXG5cbnZhciBpc1ZhbGlkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNWYWxpZFBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIGRlZmF1bHRQYXJhbXMuaGFzT3duUHJvcGVydHkocGFyYW1OYW1lKTtcbn07XG4vKipcbiAqIElzIHZhbGlkIHBhcmFtZXRlciBmb3IgU3dhbC51cGRhdGUoKSBtZXRob2RcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNVcGRhdGFibGVQYXJhbWV0ZXIgPSBmdW5jdGlvbiBpc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbU5hbWUpIHtcbiAgcmV0dXJuIHVwZGF0YWJsZVBhcmFtcy5pbmRleE9mKHBhcmFtTmFtZSkgIT09IC0xO1xufTtcbi8qKlxuICogSXMgZGVwcmVjYXRlZCBwYXJhbWV0ZXJcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbU5hbWVcbiAqL1xuXG52YXIgaXNEZXByZWNhdGVkUGFyYW1ldGVyID0gZnVuY3Rpb24gaXNEZXByZWNhdGVkUGFyYW1ldGVyKHBhcmFtTmFtZSkge1xuICByZXR1cm4gZGVwcmVjYXRlZFBhcmFtc1twYXJhbU5hbWVdO1xufTtcblxudmFyIGNoZWNrSWZQYXJhbUlzVmFsaWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc1ZhbGlkKHBhcmFtKSB7XG4gIGlmICghaXNWYWxpZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuKFwiVW5rbm93biBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiXCIpKTtcbiAgfVxufTtcblxudmFyIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZCA9IGZ1bmN0aW9uIGNoZWNrSWZUb2FzdFBhcmFtSXNWYWxpZChwYXJhbSkge1xuICBpZiAodG9hc3RJbmNvbXBhdGlibGVQYXJhbXMuaW5kZXhPZihwYXJhbSkgIT09IC0xKSB7XG4gICAgd2FybihcIlRoZSBwYXJhbWV0ZXIgXFxcIlwiLmNvbmNhdChwYXJhbSwgXCJcXFwiIGlzIGluY29tcGF0aWJsZSB3aXRoIHRvYXN0c1wiKSk7XG4gIH1cbn07XG5cbnZhciBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQgPSBmdW5jdGlvbiBjaGVja0lmUGFyYW1Jc0RlcHJlY2F0ZWQocGFyYW0pIHtcbiAgaWYgKGlzRGVwcmVjYXRlZFBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICB3YXJuQWJvdXREZXByZWF0aW9uKHBhcmFtLCBpc0RlcHJlY2F0ZWRQYXJhbWV0ZXIocGFyYW0pKTtcbiAgfVxufTtcbi8qKlxuICogU2hvdyByZWxldmFudCB3YXJuaW5ncyBmb3IgZ2l2ZW4gcGFyYW1zXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICovXG5cblxudmFyIHNob3dXYXJuaW5nc0ZvclBhcmFtcyA9IGZ1bmN0aW9uIHNob3dXYXJuaW5nc0ZvclBhcmFtcyhwYXJhbXMpIHtcbiAgZm9yICh2YXIgcGFyYW0gaW4gcGFyYW1zKSB7XG4gICAgY2hlY2tJZlBhcmFtSXNWYWxpZChwYXJhbSk7XG5cbiAgICBpZiAocGFyYW1zLnRvYXN0KSB7XG4gICAgICBjaGVja0lmVG9hc3RQYXJhbUlzVmFsaWQocGFyYW0pO1xuICAgIH1cblxuICAgIGNoZWNrSWZQYXJhbUlzRGVwcmVjYXRlZCgpO1xuICB9XG59O1xuXG5cblxudmFyIHN0YXRpY01ldGhvZHMgPSBPYmplY3QuZnJlZXplKHtcblx0aXNWYWxpZFBhcmFtZXRlcjogaXNWYWxpZFBhcmFtZXRlcixcblx0aXNVcGRhdGFibGVQYXJhbWV0ZXI6IGlzVXBkYXRhYmxlUGFyYW1ldGVyLFxuXHRpc0RlcHJlY2F0ZWRQYXJhbWV0ZXI6IGlzRGVwcmVjYXRlZFBhcmFtZXRlcixcblx0YXJnc1RvUGFyYW1zOiBhcmdzVG9QYXJhbXMsXG5cdGlzVmlzaWJsZTogaXNWaXNpYmxlJDEsXG5cdGNsaWNrQ29uZmlybTogY2xpY2tDb25maXJtLFxuXHRjbGlja0NhbmNlbDogY2xpY2tDYW5jZWwsXG5cdGdldENvbnRhaW5lcjogZ2V0Q29udGFpbmVyLFxuXHRnZXRQb3B1cDogZ2V0UG9wdXAsXG5cdGdldFRpdGxlOiBnZXRUaXRsZSxcblx0Z2V0Q29udGVudDogZ2V0Q29udGVudCxcblx0Z2V0SW1hZ2U6IGdldEltYWdlLFxuXHRnZXRJY29uOiBnZXRJY29uLFxuXHRnZXRJY29uczogZ2V0SWNvbnMsXG5cdGdldENsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbixcblx0Z2V0QWN0aW9uczogZ2V0QWN0aW9ucyxcblx0Z2V0Q29uZmlybUJ1dHRvbjogZ2V0Q29uZmlybUJ1dHRvbixcblx0Z2V0Q2FuY2VsQnV0dG9uOiBnZXRDYW5jZWxCdXR0b24sXG5cdGdldEhlYWRlcjogZ2V0SGVhZGVyLFxuXHRnZXRGb290ZXI6IGdldEZvb3Rlcixcblx0Z2V0Rm9jdXNhYmxlRWxlbWVudHM6IGdldEZvY3VzYWJsZUVsZW1lbnRzLFxuXHRnZXRWYWxpZGF0aW9uTWVzc2FnZTogZ2V0VmFsaWRhdGlvbk1lc3NhZ2UsXG5cdGlzTG9hZGluZzogaXNMb2FkaW5nLFxuXHRmaXJlOiBmaXJlLFxuXHRtaXhpbjogbWl4aW4sXG5cdHF1ZXVlOiBxdWV1ZSxcblx0Z2V0UXVldWVTdGVwOiBnZXRRdWV1ZVN0ZXAsXG5cdGluc2VydFF1ZXVlU3RlcDogaW5zZXJ0UXVldWVTdGVwLFxuXHRkZWxldGVRdWV1ZVN0ZXA6IGRlbGV0ZVF1ZXVlU3RlcCxcblx0c2hvd0xvYWRpbmc6IHNob3dMb2FkaW5nLFxuXHRlbmFibGVMb2FkaW5nOiBzaG93TG9hZGluZyxcblx0Z2V0VGltZXJMZWZ0OiBnZXRUaW1lckxlZnQsXG5cdHN0b3BUaW1lcjogc3RvcFRpbWVyLFxuXHRyZXN1bWVUaW1lcjogcmVzdW1lVGltZXIsXG5cdHRvZ2dsZVRpbWVyOiB0b2dnbGVUaW1lcixcblx0aW5jcmVhc2VUaW1lcjogaW5jcmVhc2VUaW1lcixcblx0aXNUaW1lclJ1bm5pbmc6IGlzVGltZXJSdW5uaW5nXG59KTtcblxuLyoqXG4gKiBFbmFibGVzIGJ1dHRvbnMgYW5kIGhpZGUgbG9hZGVyLlxuICovXG5cbmZ1bmN0aW9uIGhpZGVMb2FkaW5nKCkge1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuXG4gIGlmICghaW5uZXJQYXJhbXMuc2hvd0NvbmZpcm1CdXR0b24pIHtcbiAgICBoaWRlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuXG4gICAgaWYgKCFpbm5lclBhcmFtcy5zaG93Q2FuY2VsQnV0dG9uKSB7XG4gICAgICBoaWRlKGRvbUNhY2hlLmFjdGlvbnMpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUNsYXNzKFtkb21DYWNoZS5wb3B1cCwgZG9tQ2FjaGUuYWN0aW9uc10sIHN3YWxDbGFzc2VzLmxvYWRpbmcpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtYnVzeScpO1xuICBkb21DYWNoZS5wb3B1cC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtbG9hZGluZycpO1xuICBkb21DYWNoZS5jb25maXJtQnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBnZXRJbnB1dCQxKGluc3RhbmNlKSB7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQoaW5zdGFuY2UgfHwgdGhpcyk7XG4gIHZhciBkb21DYWNoZSA9IHByaXZhdGVQcm9wcy5kb21DYWNoZS5nZXQoaW5zdGFuY2UgfHwgdGhpcyk7XG4gIHJldHVybiBnZXRJbnB1dChkb21DYWNoZS5jb250ZW50LCBpbm5lclBhcmFtcy5pbnB1dCk7XG59XG5cbnZhciBmaXhTY3JvbGxiYXIgPSBmdW5jdGlvbiBmaXhTY3JvbGxiYXIoKSB7XG4gIC8vIGZvciBxdWV1ZXMsIGRvIG5vdCBkbyB0aGlzIG1vcmUgdGhhbiBvbmNlXG4gIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIHJldHVybjtcbiAgfSAvLyBpZiB0aGUgYm9keSBoYXMgb3ZlcmZsb3dcblxuXG4gIGlmIChkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xuICAgIC8vIGFkZCBwYWRkaW5nIHNvIHRoZSBjb250ZW50IGRvZXNuJ3Qgc2hpZnQgYWZ0ZXIgcmVtb3ZhbCBvZiBzY3JvbGxiYXJcbiAgICBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmJvZHkpLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5wYWRkaW5nUmlnaHQgPSBzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyArIG1lYXN1cmVTY3JvbGxiYXIoKSArICdweCc7XG4gIH1cbn07XG52YXIgdW5kb1Njcm9sbGJhciA9IGZ1bmN0aW9uIHVuZG9TY3JvbGxiYXIoKSB7XG4gIGlmIChzdGF0ZXMucHJldmlvdXNCb2R5UGFkZGluZyAhPT0gbnVsbCkge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucGFkZGluZ1JpZ2h0ID0gc3RhdGVzLnByZXZpb3VzQm9keVBhZGRpbmcgKyAncHgnO1xuICAgIHN0YXRlcy5wcmV2aW91c0JvZHlQYWRkaW5nID0gbnVsbDtcbiAgfVxufTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cblxudmFyIGlPU2ZpeCA9IGZ1bmN0aW9uIGlPU2ZpeCgpIHtcbiAgdmFyIGlPUyA9IC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpICYmICF3aW5kb3cuTVNTdHJlYW07XG5cbiAgaWYgKGlPUyAmJiAhaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcDtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCA9IG9mZnNldCAqIC0xICsgJ3B4JztcbiAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlcy5pb3NmaXgpO1xuICAgIGxvY2tCb2R5U2Nyb2xsKCk7XG4gIH1cbn07XG5cbnZhciBsb2NrQm9keVNjcm9sbCA9IGZ1bmN0aW9uIGxvY2tCb2R5U2Nyb2xsKCkge1xuICAvLyAjMTI0NlxuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwcmV2ZW50VG91Y2hNb3ZlO1xuXG4gIGNvbnRhaW5lci5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHByZXZlbnRUb3VjaE1vdmUgPSBlLnRhcmdldCA9PT0gY29udGFpbmVyIHx8ICFpc1Njcm9sbGFibGUoY29udGFpbmVyKSAmJiBlLnRhcmdldC50YWdOYW1lICE9PSAnSU5QVVQnIC8vICMxNjAzXG4gICAgO1xuICB9O1xuXG4gIGNvbnRhaW5lci5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHByZXZlbnRUb3VjaE1vdmUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9O1xufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxudmFyIHVuZG9JT1NmaXggPSBmdW5jdGlvbiB1bmRvSU9TZml4KCkge1xuICBpZiAoaGFzQ2xhc3MoZG9jdW1lbnQuYm9keSwgc3dhbENsYXNzZXMuaW9zZml4KSkge1xuICAgIHZhciBvZmZzZXQgPSBwYXJzZUludChkb2N1bWVudC5ib2R5LnN0eWxlLnRvcCwgMTApO1xuICAgIHJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksIHN3YWxDbGFzc2VzLmlvc2ZpeCk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS50b3AgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IG9mZnNldCAqIC0xO1xuICB9XG59O1xuXG52YXIgaXNJRTExID0gZnVuY3Rpb24gaXNJRTExKCkge1xuICByZXR1cm4gISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG59OyAvLyBGaXggSUUxMSBjZW50ZXJpbmcgc3dlZXRhbGVydDIvaXNzdWVzLzkzM1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbnZhciBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUgPSBmdW5jdGlvbiBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcbiAgY29udGFpbmVyLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdhbGlnbi1pdGVtcycpO1xuXG4gIGlmIChwb3B1cC5vZmZzZXRUb3AgPCAwKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLmFsaWduSXRlbXMgPSAnZmxleC1zdGFydCc7XG4gIH1cbn07XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuXG5cbnZhciBJRWZpeCA9IGZ1bmN0aW9uIElFZml4KCkge1xuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgaXNJRTExKCkpIHtcbiAgICBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUoKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZml4VmVydGljYWxQb3NpdGlvbklFKTtcbiAgfVxufTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cbnZhciB1bmRvSUVmaXggPSBmdW5jdGlvbiB1bmRvSUVmaXgoKSB7XG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiBpc0lFMTEoKSkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBmaXhWZXJ0aWNhbFBvc2l0aW9uSUUpO1xuICB9XG59O1xuXG4vLyBBZGRpbmcgYXJpYS1oaWRkZW49XCJ0cnVlXCIgdG8gZWxlbWVudHMgb3V0c2lkZSBvZiB0aGUgYWN0aXZlIG1vZGFsIGRpYWxvZyBlbnN1cmVzIHRoYXRcbi8vIGVsZW1lbnRzIG5vdCB3aXRoaW4gdGhlIGFjdGl2ZSBtb2RhbCBkaWFsb2cgd2lsbCBub3QgYmUgc3VyZmFjZWQgaWYgYSB1c2VyIG9wZW5zIGEgc2NyZWVuXG4vLyByZWFkZXLigJlzIGxpc3Qgb2YgZWxlbWVudHMgKGhlYWRpbmdzLCBmb3JtIGNvbnRyb2xzLCBsYW5kbWFya3MsIGV0Yy4pIGluIHRoZSBkb2N1bWVudC5cblxudmFyIHNldEFyaWFIaWRkZW4gPSBmdW5jdGlvbiBzZXRBcmlhSGlkZGVuKCkge1xuICB2YXIgYm9keUNoaWxkcmVuID0gdG9BcnJheShkb2N1bWVudC5ib2R5LmNoaWxkcmVuKTtcbiAgYm9keUNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGVsKSB7XG4gICAgaWYgKGVsID09PSBnZXRDb250YWluZXIoKSB8fCBjb250YWlucyhlbCwgZ2V0Q29udGFpbmVyKCkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXByZXZpb3VzLWFyaWEtaGlkZGVuJywgZWwuZ2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicpKTtcbiAgICB9XG5cbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgfSk7XG59O1xudmFyIHVuc2V0QXJpYUhpZGRlbiA9IGZ1bmN0aW9uIHVuc2V0QXJpYUhpZGRlbigpIHtcbiAgdmFyIGJvZHlDaGlsZHJlbiA9IHRvQXJyYXkoZG9jdW1lbnQuYm9keS5jaGlsZHJlbik7XG4gIGJvZHlDaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChlbCkge1xuICAgIGlmIChlbC5oYXNBdHRyaWJ1dGUoJ2RhdGEtcHJldmlvdXMtYXJpYS1oaWRkZW4nKSkge1xuICAgICAgZWwuc2V0QXR0cmlidXRlKCdhcmlhLWhpZGRlbicsIGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpKTtcbiAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1wcmV2aW91cy1hcmlhLWhpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJyk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogVGhpcyBtb2R1bGUgY29udGFpbnRzIGBXZWFrTWFwYHMgZm9yIGVhY2ggZWZmZWN0aXZlbHktXCJwcml2YXRlICBwcm9wZXJ0eVwiIHRoYXQgYSBgU3dhbGAgaGFzLlxuICogRm9yIGV4YW1wbGUsIHRvIHNldCB0aGUgcHJpdmF0ZSBwcm9wZXJ0eSBcImZvb1wiIG9mIGB0aGlzYCB0byBcImJhclwiLCB5b3UgY2FuIGBwcml2YXRlUHJvcHMuZm9vLnNldCh0aGlzLCAnYmFyJylgXG4gKiBUaGlzIGlzIHRoZSBhcHByb2FjaCB0aGF0IEJhYmVsIHdpbGwgcHJvYmFibHkgdGFrZSB0byBpbXBsZW1lbnQgcHJpdmF0ZSBtZXRob2RzL2ZpZWxkc1xuICogICBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcml2YXRlLW1ldGhvZHNcbiAqICAgaHR0cHM6Ly9naXRodWIuY29tL2JhYmVsL2JhYmVsL3B1bGwvNzU1NVxuICogT25jZSB3ZSBoYXZlIHRoZSBjaGFuZ2VzIGZyb20gdGhhdCBQUiBpbiBCYWJlbCwgYW5kIG91ciBjb3JlIGNsYXNzIGZpdHMgcmVhc29uYWJsZSBpbiAqb25lIG1vZHVsZSpcbiAqICAgdGhlbiB3ZSBjYW4gdXNlIHRoYXQgbGFuZ3VhZ2UgZmVhdHVyZS5cbiAqL1xudmFyIHByaXZhdGVNZXRob2RzID0ge1xuICBzd2FsUHJvbWlzZVJlc29sdmU6IG5ldyBXZWFrTWFwKClcbn07XG5cbi8qXG4gKiBJbnN0YW5jZSBtZXRob2QgdG8gY2xvc2Ugc3dlZXRBbGVydFxuICovXG5cbmZ1bmN0aW9uIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShjb250YWluZXIsIGlzVG9hc3QsIG9uQWZ0ZXJDbG9zZSkge1xuICBpZiAoaXNUb2FzdCkge1xuICAgIHRyaWdnZXJPbkFmdGVyQ2xvc2Uob25BZnRlckNsb3NlKTtcbiAgfSBlbHNlIHtcbiAgICByZXN0b3JlQWN0aXZlRWxlbWVudCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIHRyaWdnZXJPbkFmdGVyQ2xvc2Uob25BZnRlckNsb3NlKTtcbiAgICB9KTtcbiAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgY2FwdHVyZTogZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZVxuICAgIH0pO1xuICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgfSAvLyBVbnNldCBnbG9iYWxTdGF0ZSBwcm9wcyBzbyBHQyB3aWxsIGRpc3Bvc2UgZ2xvYmFsU3RhdGUgKCMxNTY5KVxuXG5cbiAgZGVsZXRlIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyO1xuICBkZWxldGUgZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldDtcblxuICBpZiAoY29udGFpbmVyLnBhcmVudE5vZGUpIHtcbiAgICBjb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICB9XG5cbiAgcmVtb3ZlQm9keUNsYXNzZXMoKTtcblxuICBpZiAoaXNNb2RhbCgpKSB7XG4gICAgdW5kb1Njcm9sbGJhcigpO1xuICAgIHVuZG9JT1NmaXgoKTtcbiAgICB1bmRvSUVmaXgoKTtcbiAgICB1bnNldEFyaWFIaWRkZW4oKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVCb2R5Q2xhc3NlcygpIHtcbiAgcmVtb3ZlQ2xhc3MoW2RvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgZG9jdW1lbnQuYm9keV0sIFtzd2FsQ2xhc3Nlcy5zaG93biwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10sIHN3YWxDbGFzc2VzWyduby1iYWNrZHJvcCddLCBzd2FsQ2xhc3Nlc1sndG9hc3Qtc2hvd24nXSwgc3dhbENsYXNzZXNbJ3RvYXN0LWNvbHVtbiddXSk7XG59XG5cbmZ1bmN0aW9uIHN3YWxDbG9zZUV2ZW50RmluaXNoZWQocG9wdXAsIGNvbnRhaW5lciwgaXNUb2FzdCwgb25BZnRlckNsb3NlKSB7XG4gIGlmIChoYXNDbGFzcyhwb3B1cCwgc3dhbENsYXNzZXMuaGlkZSkpIHtcbiAgICByZW1vdmVQb3B1cEFuZFJlc2V0U3RhdGUoY29udGFpbmVyLCBpc1RvYXN0LCBvbkFmdGVyQ2xvc2UpO1xuICB9IC8vIFVuc2V0IFdlYWtNYXBzIHNvIEdDIHdpbGwgYmUgYWJsZSB0byBkaXNwb3NlIHRoZW0gKCMxNTY5KVxuXG5cbiAgdW5zZXRXZWFrTWFwcyhwcml2YXRlUHJvcHMpO1xuICB1bnNldFdlYWtNYXBzKHByaXZhdGVNZXRob2RzKTtcbn1cblxuZnVuY3Rpb24gY2xvc2UocmVzb2x2ZVZhbHVlKSB7XG4gIHZhciBjb250YWluZXIgPSBnZXRDb250YWluZXIoKTtcbiAgdmFyIHBvcHVwID0gZ2V0UG9wdXAoKTtcblxuICBpZiAoIXBvcHVwIHx8IGhhc0NsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5oaWRlKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG4gIHZhciBzd2FsUHJvbWlzZVJlc29sdmUgPSBwcml2YXRlTWV0aG9kcy5zd2FsUHJvbWlzZVJlc29sdmUuZ2V0KHRoaXMpO1xuICB2YXIgb25DbG9zZSA9IGlubmVyUGFyYW1zLm9uQ2xvc2U7XG4gIHZhciBvbkFmdGVyQ2xvc2UgPSBpbm5lclBhcmFtcy5vbkFmdGVyQ2xvc2U7XG4gIHJlbW92ZUNsYXNzKHBvcHVwLCBzd2FsQ2xhc3Nlcy5zaG93KTtcbiAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLmhpZGUpOyAvLyBJZiBhbmltYXRpb24gaXMgc3VwcG9ydGVkLCBhbmltYXRlXG5cbiAgaWYgKGFuaW1hdGlvbkVuZEV2ZW50ICYmIGhhc0Nzc0FuaW1hdGlvbihwb3B1cCkpIHtcbiAgICBwb3B1cC5hZGRFdmVudExpc3RlbmVyKGFuaW1hdGlvbkVuZEV2ZW50LCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cCkge1xuICAgICAgICBzd2FsQ2xvc2VFdmVudEZpbmlzaGVkKHBvcHVwLCBjb250YWluZXIsIGlzVG9hc3QoKSwgb25BZnRlckNsb3NlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICAvLyBPdGhlcndpc2UsIHJlbW92ZSBpbW1lZGlhdGVseVxuICAgIHJlbW92ZVBvcHVwQW5kUmVzZXRTdGF0ZShjb250YWluZXIsIGlzVG9hc3QoKSwgb25BZnRlckNsb3NlKTtcbiAgfVxuXG4gIGlmIChvbkNsb3NlICE9PSBudWxsICYmIHR5cGVvZiBvbkNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb25DbG9zZShwb3B1cCk7XG4gIH0gLy8gUmVzb2x2ZSBTd2FsIHByb21pc2VcblxuXG4gIHN3YWxQcm9taXNlUmVzb2x2ZShyZXNvbHZlVmFsdWUgfHwge30pOyAvLyBVbnNldCB0aGlzLnBhcmFtcyBzbyBHQyB3aWxsIGRpc3Bvc2UgaXQgKCMxNTY5KVxuXG4gIGRlbGV0ZSB0aGlzLnBhcmFtcztcbn1cblxudmFyIHVuc2V0V2Vha01hcHMgPSBmdW5jdGlvbiB1bnNldFdlYWtNYXBzKG9iaikge1xuICBmb3IgKHZhciBpIGluIG9iaikge1xuICAgIG9ialtpXSA9IG5ldyBXZWFrTWFwKCk7XG4gIH1cbn07XG5cbnZhciB0cmlnZ2VyT25BZnRlckNsb3NlID0gZnVuY3Rpb24gdHJpZ2dlck9uQWZ0ZXJDbG9zZShvbkFmdGVyQ2xvc2UpIHtcbiAgaWYgKG9uQWZ0ZXJDbG9zZSAhPT0gbnVsbCAmJiB0eXBlb2Ygb25BZnRlckNsb3NlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBvbkFmdGVyQ2xvc2UoKTtcbiAgICB9KTtcbiAgfVxufTtcblxuZnVuY3Rpb24gc2V0QnV0dG9uc0Rpc2FibGVkKGluc3RhbmNlLCBidXR0b25zLCBkaXNhYmxlZCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KGluc3RhbmNlKTtcbiAgYnV0dG9ucy5mb3JFYWNoKGZ1bmN0aW9uIChidXR0b24pIHtcbiAgICBkb21DYWNoZVtidXR0b25dLmRpc2FibGVkID0gZGlzYWJsZWQ7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRJbnB1dERpc2FibGVkKGlucHV0LCBkaXNhYmxlZCkge1xuICBpZiAoIWlucHV0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKGlucHV0LnR5cGUgPT09ICdyYWRpbycpIHtcbiAgICB2YXIgcmFkaW9zQ29udGFpbmVyID0gaW5wdXQucGFyZW50Tm9kZS5wYXJlbnROb2RlO1xuICAgIHZhciByYWRpb3MgPSByYWRpb3NDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmFkaW9zLmxlbmd0aDsgaSsrKSB7XG4gICAgICByYWRpb3NbaV0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgaW5wdXQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgfVxufVxuXG5mdW5jdGlvbiBlbmFibGVCdXR0b25zKCkge1xuICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJywgJ2NhbmNlbEJ1dHRvbiddLCBmYWxzZSk7XG59XG5mdW5jdGlvbiBkaXNhYmxlQnV0dG9ucygpIHtcbiAgc2V0QnV0dG9uc0Rpc2FibGVkKHRoaXMsIFsnY29uZmlybUJ1dHRvbicsICdjYW5jZWxCdXR0b24nXSwgdHJ1ZSk7XG59IC8vIEBkZXByZWNhdGVkXG5cbmZ1bmN0aW9uIGVuYWJsZUNvbmZpcm1CdXR0b24oKSB7XG4gIHdhcm5BYm91dERlcHJlYXRpb24oJ1N3YWwuZGlzYWJsZUNvbmZpcm1CdXR0b24oKScsIFwiU3dhbC5nZXRDb25maXJtQnV0dG9uKCkucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpXCIpO1xuICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJ10sIGZhbHNlKTtcbn0gLy8gQGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gZGlzYWJsZUNvbmZpcm1CdXR0b24oKSB7XG4gIHdhcm5BYm91dERlcHJlYXRpb24oJ1N3YWwuZW5hYmxlQ29uZmlybUJ1dHRvbigpJywgXCJTd2FsLmdldENvbmZpcm1CdXR0b24oKS5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgJycpXCIpO1xuICBzZXRCdXR0b25zRGlzYWJsZWQodGhpcywgWydjb25maXJtQnV0dG9uJ10sIHRydWUpO1xufVxuZnVuY3Rpb24gZW5hYmxlSW5wdXQoKSB7XG4gIHJldHVybiBzZXRJbnB1dERpc2FibGVkKHRoaXMuZ2V0SW5wdXQoKSwgZmFsc2UpO1xufVxuZnVuY3Rpb24gZGlzYWJsZUlucHV0KCkge1xuICByZXR1cm4gc2V0SW5wdXREaXNhYmxlZCh0aGlzLmdldElucHV0KCksIHRydWUpO1xufVxuXG5mdW5jdGlvbiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UuaW5uZXJIVE1MID0gZXJyb3I7XG4gIHZhciBwb3B1cENvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkb21DYWNoZS5wb3B1cCk7XG4gIGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlLnN0eWxlLm1hcmdpbkxlZnQgPSBcIi1cIi5jb25jYXQocG9wdXBDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctbGVmdCcpKTtcbiAgZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2Uuc3R5bGUubWFyZ2luUmlnaHQgPSBcIi1cIi5jb25jYXQocG9wdXBDb21wdXRlZFN0eWxlLmdldFByb3BlcnR5VmFsdWUoJ3BhZGRpbmctcmlnaHQnKSk7XG4gIHNob3coZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICB2YXIgaW5wdXQgPSB0aGlzLmdldElucHV0KCk7XG5cbiAgaWYgKGlucHV0KSB7XG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdhcmlhLWludmFsaWQnLCB0cnVlKTtcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGVzY3JpYmVkQnknLCBzd2FsQ2xhc3Nlc1sndmFsaWRhdGlvbi1tZXNzYWdlJ10pO1xuICAgIGZvY3VzSW5wdXQoaW5wdXQpO1xuICAgIGFkZENsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgfVxufSAvLyBIaWRlIGJsb2NrIHdpdGggdmFsaWRhdGlvbiBtZXNzYWdlXG5cbmZ1bmN0aW9uIHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSgpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcblxuICBpZiAoZG9tQ2FjaGUudmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICBoaWRlKGRvbUNhY2hlLnZhbGlkYXRpb25NZXNzYWdlKTtcbiAgfVxuXG4gIHZhciBpbnB1dCA9IHRoaXMuZ2V0SW5wdXQoKTtcblxuICBpZiAoaW5wdXQpIHtcbiAgICBpbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtaW52YWxpZCcpO1xuICAgIGlucHV0LnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRCeScpO1xuICAgIHJlbW92ZUNsYXNzKGlucHV0LCBzd2FsQ2xhc3Nlcy5pbnB1dGVycm9yKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRQcm9ncmVzc1N0ZXBzJDEoKSB7XG4gIHdhcm5BYm91dERlcHJlYXRpb24oJ1N3YWwuZ2V0UHJvZ3Jlc3NTdGVwcygpJywgXCJjb25zdCBzd2FsSW5zdGFuY2UgPSBTd2FsLmZpcmUoe3Byb2dyZXNzU3RlcHM6IFsnMScsICcyJywgJzMnXX0pOyBjb25zdCBwcm9ncmVzc1N0ZXBzID0gc3dhbEluc3RhbmNlLnBhcmFtcy5wcm9ncmVzc1N0ZXBzXCIpO1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuICByZXR1cm4gaW5uZXJQYXJhbXMucHJvZ3Jlc3NTdGVwcztcbn1cbmZ1bmN0aW9uIHNldFByb2dyZXNzU3RlcHMocHJvZ3Jlc3NTdGVwcykge1xuICB3YXJuQWJvdXREZXByZWF0aW9uKCdTd2FsLnNldFByb2dyZXNzU3RlcHMoKScsICdTd2FsLnVwZGF0ZSgpJyk7XG4gIHZhciBpbm5lclBhcmFtcyA9IHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5nZXQodGhpcyk7XG5cbiAgdmFyIHVwZGF0ZWRQYXJhbXMgPSBfZXh0ZW5kcyh7fSwgaW5uZXJQYXJhbXMsIHtcbiAgICBwcm9ncmVzc1N0ZXBzOiBwcm9ncmVzc1N0ZXBzXG4gIH0pO1xuXG4gIHJlbmRlclByb2dyZXNzU3RlcHModGhpcywgdXBkYXRlZFBhcmFtcyk7XG4gIHByaXZhdGVQcm9wcy5pbm5lclBhcmFtcy5zZXQodGhpcywgdXBkYXRlZFBhcmFtcyk7XG59XG5mdW5jdGlvbiBzaG93UHJvZ3Jlc3NTdGVwcygpIHtcbiAgdmFyIGRvbUNhY2hlID0gcHJpdmF0ZVByb3BzLmRvbUNhY2hlLmdldCh0aGlzKTtcbiAgc2hvdyhkb21DYWNoZS5wcm9ncmVzc1N0ZXBzKTtcbn1cbmZ1bmN0aW9uIGhpZGVQcm9ncmVzc1N0ZXBzKCkge1xuICB2YXIgZG9tQ2FjaGUgPSBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuZ2V0KHRoaXMpO1xuICBoaWRlKGRvbUNhY2hlLnByb2dyZXNzU3RlcHMpO1xufVxuXG52YXIgVGltZXIgPVxuLyojX19QVVJFX18qL1xuZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBUaW1lcihjYWxsYmFjaywgZGVsYXkpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZXIpO1xuXG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucmVtYWluaW5nID0gZGVsYXk7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgdGhpcy5zdGFydCgpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKFRpbWVyLCBbe1xuICAgIGtleTogXCJzdGFydFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGFydCgpIHtcbiAgICAgIGlmICghdGhpcy5ydW5uaW5nKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlKCk7XG4gICAgICAgIHRoaXMuaWQgPSBzZXRUaW1lb3V0KHRoaXMuY2FsbGJhY2ssIHRoaXMucmVtYWluaW5nKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJzdG9wXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0b3AoKSB7XG4gICAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pZCk7XG4gICAgICAgIHRoaXMucmVtYWluaW5nIC09IG5ldyBEYXRlKCkgLSB0aGlzLnN0YXJ0ZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiaW5jcmVhc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5jcmVhc2Uobikge1xuICAgICAgdmFyIHJ1bm5pbmcgPSB0aGlzLnJ1bm5pbmc7XG5cbiAgICAgIGlmIChydW5uaW5nKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnJlbWFpbmluZyArPSBuO1xuXG4gICAgICBpZiAocnVubmluZykge1xuICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ2V0VGltZXJMZWZ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFRpbWVyTGVmdCgpIHtcbiAgICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgICAgdGhpcy5zdG9wKCk7XG4gICAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJpc1J1bm5pbmdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNSdW5uaW5nKCkge1xuICAgICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gVGltZXI7XG59KCk7XG5cbnZhciBkZWZhdWx0SW5wdXRWYWxpZGF0b3JzID0ge1xuICBlbWFpbDogZnVuY3Rpb24gZW1haWwoc3RyaW5nLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgIHJldHVybiAvXlthLXpBLVowLTkuK18tXStAW2EtekEtWjAtOS4tXStcXC5bYS16QS1aMC05LV17MiwyNH0kLy50ZXN0KHN0cmluZykgPyBQcm9taXNlLnJlc29sdmUoKSA6IFByb21pc2UucmVzb2x2ZSh2YWxpZGF0aW9uTWVzc2FnZSA/IHZhbGlkYXRpb25NZXNzYWdlIDogJ0ludmFsaWQgZW1haWwgYWRkcmVzcycpO1xuICB9LFxuICB1cmw6IGZ1bmN0aW9uIHVybChzdHJpbmcsIHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgLy8gdGFrZW4gZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzgwOTQzNSB3aXRoIGEgc21hbGwgY2hhbmdlIGZyb20gIzEzMDZcbiAgICByZXR1cm4gL15odHRwcz86XFwvXFwvKHd3d1xcLik/Wy1hLXpBLVowLTlAOiUuXyt+Iz1dezIsMjU2fVxcLlthLXpdezIsNjN9XFxiKFstYS16QS1aMC05QDolXysufiM/Ji89XSopJC8udGVzdChzdHJpbmcpID8gUHJvbWlzZS5yZXNvbHZlKCkgOiBQcm9taXNlLnJlc29sdmUodmFsaWRhdGlvbk1lc3NhZ2UgPyB2YWxpZGF0aW9uTWVzc2FnZSA6ICdJbnZhbGlkIFVSTCcpO1xuICB9XG59O1xuXG4vKipcbiAqIFNldCB0eXBlLCB0ZXh0IGFuZCBhY3Rpb25zIG9uIHBvcHVwXG4gKlxuICogQHBhcmFtIHBhcmFtc1xuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cblxuZnVuY3Rpb24gc2V0UGFyYW1ldGVycyhwYXJhbXMpIHtcbiAgLy8gVXNlIGRlZmF1bHQgYGlucHV0VmFsaWRhdG9yYCBmb3Igc3VwcG9ydGVkIGlucHV0IHR5cGVzIGlmIG5vdCBwcm92aWRlZFxuICBpZiAoIXBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgIE9iamVjdC5rZXlzKGRlZmF1bHRJbnB1dFZhbGlkYXRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHBhcmFtcy5pbnB1dCA9PT0ga2V5KSB7XG4gICAgICAgIHBhcmFtcy5pbnB1dFZhbGlkYXRvciA9IGRlZmF1bHRJbnB1dFZhbGlkYXRvcnNba2V5XTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSAvLyBzaG93TG9hZGVyT25Db25maXJtICYmIHByZUNvbmZpcm1cblxuXG4gIGlmIChwYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSAmJiAhcGFyYW1zLnByZUNvbmZpcm0pIHtcbiAgICB3YXJuKCdzaG93TG9hZGVyT25Db25maXJtIGlzIHNldCB0byB0cnVlLCBidXQgcHJlQ29uZmlybSBpcyBub3QgZGVmaW5lZC5cXG4nICsgJ3Nob3dMb2FkZXJPbkNvbmZpcm0gc2hvdWxkIGJlIHVzZWQgdG9nZXRoZXIgd2l0aCBwcmVDb25maXJtLCBzZWUgdXNhZ2UgZXhhbXBsZTpcXG4nICsgJ2h0dHBzOi8vc3dlZXRhbGVydDIuZ2l0aHViLmlvLyNhamF4LXJlcXVlc3QnKTtcbiAgfSAvLyBwYXJhbXMuYW5pbWF0aW9uIHdpbGwgYmUgYWN0dWFsbHkgdXNlZCBpbiByZW5kZXJQb3B1cC5qc1xuICAvLyBidXQgaW4gY2FzZSB3aGVuIHBhcmFtcy5hbmltYXRpb24gaXMgYSBmdW5jdGlvbiwgd2UgbmVlZCB0byBjYWxsIHRoYXQgZnVuY3Rpb25cbiAgLy8gYmVmb3JlIHBvcHVwIChyZSlpbml0aWFsaXphdGlvbiwgc28gaXQnbGwgYmUgcG9zc2libGUgdG8gY2hlY2sgU3dhbC5pc1Zpc2libGUoKVxuICAvLyBpbnNpZGUgdGhlIHBhcmFtcy5hbmltYXRpb24gZnVuY3Rpb25cblxuXG4gIHBhcmFtcy5hbmltYXRpb24gPSBjYWxsSWZGdW5jdGlvbihwYXJhbXMuYW5pbWF0aW9uKTsgLy8gRGV0ZXJtaW5lIGlmIHRoZSBjdXN0b20gdGFyZ2V0IGVsZW1lbnQgaXMgdmFsaWRcblxuICBpZiAoIXBhcmFtcy50YXJnZXQgfHwgdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnICYmICFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmFtcy50YXJnZXQpIHx8IHR5cGVvZiBwYXJhbXMudGFyZ2V0ICE9PSAnc3RyaW5nJyAmJiAhcGFyYW1zLnRhcmdldC5hcHBlbmRDaGlsZCkge1xuICAgIHdhcm4oJ1RhcmdldCBwYXJhbWV0ZXIgaXMgbm90IHZhbGlkLCBkZWZhdWx0aW5nIHRvIFwiYm9keVwiJyk7XG4gICAgcGFyYW1zLnRhcmdldCA9ICdib2R5JztcbiAgfSAvLyBSZXBsYWNlIG5ld2xpbmVzIHdpdGggPGJyPiBpbiB0aXRsZVxuXG5cbiAgaWYgKHR5cGVvZiBwYXJhbXMudGl0bGUgPT09ICdzdHJpbmcnKSB7XG4gICAgcGFyYW1zLnRpdGxlID0gcGFyYW1zLnRpdGxlLnNwbGl0KCdcXG4nKS5qb2luKCc8YnIgLz4nKTtcbiAgfVxuXG4gIHZhciBvbGRQb3B1cCA9IGdldFBvcHVwKCk7XG4gIHZhciB0YXJnZXRFbGVtZW50ID0gdHlwZW9mIHBhcmFtcy50YXJnZXQgPT09ICdzdHJpbmcnID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJhbXMudGFyZ2V0KSA6IHBhcmFtcy50YXJnZXQ7XG5cbiAgaWYgKCFvbGRQb3B1cCB8fCAvLyBJZiB0aGUgbW9kZWwgdGFyZ2V0IGhhcyBjaGFuZ2VkLCByZWZyZXNoIHRoZSBwb3B1cFxuICBvbGRQb3B1cCAmJiB0YXJnZXRFbGVtZW50ICYmIG9sZFBvcHVwLnBhcmVudE5vZGUgIT09IHRhcmdldEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIGluaXQocGFyYW1zKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzd2FsT3BlbkFuaW1hdGlvbkZpbmlzaGVkKHBvcHVwLCBjb250YWluZXIpIHtcbiAgcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcihhbmltYXRpb25FbmRFdmVudCwgc3dhbE9wZW5BbmltYXRpb25GaW5pc2hlZCk7XG4gIGNvbnRhaW5lci5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XG59XG4vKipcbiAqIE9wZW4gcG9wdXAsIGFkZCBuZWNlc3NhcnkgY2xhc3NlcyBhbmQgc3R5bGVzLCBmaXggc2Nyb2xsYmFyXG4gKlxuICogQHBhcmFtIHtBcnJheX0gcGFyYW1zXG4gKi9cblxuXG52YXIgb3BlblBvcHVwID0gZnVuY3Rpb24gb3BlblBvcHVwKHBhcmFtcykge1xuICB2YXIgY29udGFpbmVyID0gZ2V0Q29udGFpbmVyKCk7XG4gIHZhciBwb3B1cCA9IGdldFBvcHVwKCk7XG5cbiAgaWYgKHBhcmFtcy5vbkJlZm9yZU9wZW4gIT09IG51bGwgJiYgdHlwZW9mIHBhcmFtcy5vbkJlZm9yZU9wZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICBwYXJhbXMub25CZWZvcmVPcGVuKHBvcHVwKTtcbiAgfVxuXG4gIGlmIChwYXJhbXMuYW5pbWF0aW9uKSB7XG4gICAgYWRkQ2xhc3MocG9wdXAsIHN3YWxDbGFzc2VzLnNob3cpO1xuICAgIGFkZENsYXNzKGNvbnRhaW5lciwgc3dhbENsYXNzZXMuZmFkZSk7XG4gIH1cblxuICBzaG93KHBvcHVwKTsgLy8gc2Nyb2xsaW5nIGlzICdoaWRkZW4nIHVudGlsIGFuaW1hdGlvbiBpcyBkb25lLCBhZnRlciB0aGF0ICdhdXRvJ1xuXG4gIGlmIChhbmltYXRpb25FbmRFdmVudCAmJiBoYXNDc3NBbmltYXRpb24ocG9wdXApKSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIHBvcHVwLmFkZEV2ZW50TGlzdGVuZXIoYW5pbWF0aW9uRW5kRXZlbnQsIHN3YWxPcGVuQW5pbWF0aW9uRmluaXNoZWQuYmluZChudWxsLCBwb3B1cCwgY29udGFpbmVyKSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLnN0eWxlLm92ZXJmbG93WSA9ICdhdXRvJztcbiAgfVxuXG4gIGFkZENsYXNzKFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHksIGNvbnRhaW5lcl0sIHN3YWxDbGFzc2VzLnNob3duKTtcblxuICBpZiAocGFyYW1zLmhlaWdodEF1dG8gJiYgcGFyYW1zLmJhY2tkcm9wICYmICFwYXJhbXMudG9hc3QpIHtcbiAgICBhZGRDbGFzcyhbZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LCBkb2N1bWVudC5ib2R5XSwgc3dhbENsYXNzZXNbJ2hlaWdodC1hdXRvJ10pO1xuICB9XG5cbiAgaWYgKGlzTW9kYWwoKSkge1xuICAgIGlmIChwYXJhbXMuc2Nyb2xsYmFyUGFkZGluZykge1xuICAgICAgZml4U2Nyb2xsYmFyKCk7XG4gICAgfVxuXG4gICAgaU9TZml4KCk7XG4gICAgSUVmaXgoKTtcbiAgICBzZXRBcmlhSGlkZGVuKCk7IC8vIHN3ZWV0YWxlcnQyL2lzc3Vlcy8xMjQ3XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGNvbnRhaW5lci5zY3JvbGxUb3AgPSAwO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKCFpc1RvYXN0KCkgJiYgIWdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCkge1xuICAgIGdsb2JhbFN0YXRlLnByZXZpb3VzQWN0aXZlRWxlbWVudCA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBpZiAocGFyYW1zLm9uT3BlbiAhPT0gbnVsbCAmJiB0eXBlb2YgcGFyYW1zLm9uT3BlbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgcGFyYW1zLm9uT3Blbihwb3B1cCk7XG4gICAgfSk7XG4gIH1cbn07XG5cbnZhciBfdGhpcyA9IHVuZGVmaW5lZDtcblxudmFyIGhhbmRsZUlucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIGhhbmRsZUlucHV0T3B0aW9ucyhpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBjb250ZW50ID0gZ2V0Q29udGVudCgpO1xuXG4gIHZhciBwcm9jZXNzSW5wdXRPcHRpb25zID0gZnVuY3Rpb24gcHJvY2Vzc0lucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgICByZXR1cm4gcG9wdWxhdGVJbnB1dE9wdGlvbnNbcGFyYW1zLmlucHV0XShjb250ZW50LCBmb3JtYXRJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKSwgcGFyYW1zKTtcbiAgfTtcblxuICBpZiAoaXNQcm9taXNlKHBhcmFtcy5pbnB1dE9wdGlvbnMpKSB7XG4gICAgc2hvd0xvYWRpbmcoKTtcbiAgICBwYXJhbXMuaW5wdXRPcHRpb25zLnRoZW4oZnVuY3Rpb24gKGlucHV0T3B0aW9ucykge1xuICAgICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMoaW5wdXRPcHRpb25zKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChfdHlwZW9mKHBhcmFtcy5pbnB1dE9wdGlvbnMpID09PSAnb2JqZWN0Jykge1xuICAgIHByb2Nlc3NJbnB1dE9wdGlvbnMocGFyYW1zLmlucHV0T3B0aW9ucyk7XG4gIH0gZWxzZSB7XG4gICAgZXJyb3IoXCJVbmV4cGVjdGVkIHR5cGUgb2YgaW5wdXRPcHRpb25zISBFeHBlY3RlZCBvYmplY3QsIE1hcCBvciBQcm9taXNlLCBnb3QgXCIuY29uY2F0KF90eXBlb2YocGFyYW1zLmlucHV0T3B0aW9ucykpKTtcbiAgfVxufTtcbnZhciBoYW5kbGVJbnB1dFZhbHVlID0gZnVuY3Rpb24gaGFuZGxlSW5wdXRWYWx1ZShpbnN0YW5jZSwgcGFyYW1zKSB7XG4gIHZhciBpbnB1dCA9IGluc3RhbmNlLmdldElucHV0KCk7XG4gIGhpZGUoaW5wdXQpO1xuICBwYXJhbXMuaW5wdXRWYWx1ZS50aGVuKGZ1bmN0aW9uIChpbnB1dFZhbHVlKSB7XG4gICAgaW5wdXQudmFsdWUgPSBwYXJhbXMuaW5wdXQgPT09ICdudW1iZXInID8gcGFyc2VGbG9hdChpbnB1dFZhbHVlKSB8fCAwIDogaW5wdXRWYWx1ZSArICcnO1xuICAgIHNob3coaW5wdXQpO1xuICAgIGlucHV0LmZvY3VzKCk7XG4gICAgaW5zdGFuY2UuaGlkZUxvYWRpbmcoKTtcbiAgfSlbXCJjYXRjaFwiXShmdW5jdGlvbiAoZXJyKSB7XG4gICAgZXJyb3IoJ0Vycm9yIGluIGlucHV0VmFsdWUgcHJvbWlzZTogJyArIGVycik7XG4gICAgaW5wdXQudmFsdWUgPSAnJztcbiAgICBzaG93KGlucHV0KTtcbiAgICBpbnB1dC5mb2N1cygpO1xuXG4gICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcbiAgfSk7XG59O1xudmFyIHBvcHVsYXRlSW5wdXRPcHRpb25zID0ge1xuICBzZWxlY3Q6IGZ1bmN0aW9uIHNlbGVjdChjb250ZW50LCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIHZhciBzZWxlY3QgPSBnZXRDaGlsZEJ5Q2xhc3MoY29udGVudCwgc3dhbENsYXNzZXMuc2VsZWN0KTtcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoaW5wdXRPcHRpb24pIHtcbiAgICAgIHZhciBvcHRpb25WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgdmFyIG9wdGlvbkxhYmVsID0gaW5wdXRPcHRpb25bMV07XG4gICAgICB2YXIgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25WYWx1ZTtcbiAgICAgIG9wdGlvbi5pbm5lckhUTUwgPSBvcHRpb25MYWJlbDtcblxuICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IG9wdGlvblZhbHVlLnRvU3RyaW5nKCkpIHtcbiAgICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgfSk7XG4gICAgc2VsZWN0LmZvY3VzKCk7XG4gIH0sXG4gIHJhZGlvOiBmdW5jdGlvbiByYWRpbyhjb250ZW50LCBpbnB1dE9wdGlvbnMsIHBhcmFtcykge1xuICAgIHZhciByYWRpbyA9IGdldENoaWxkQnlDbGFzcyhjb250ZW50LCBzd2FsQ2xhc3Nlcy5yYWRpbyk7XG4gICAgaW5wdXRPcHRpb25zLmZvckVhY2goZnVuY3Rpb24gKGlucHV0T3B0aW9uKSB7XG4gICAgICB2YXIgcmFkaW9WYWx1ZSA9IGlucHV0T3B0aW9uWzBdO1xuICAgICAgdmFyIHJhZGlvTGFiZWwgPSBpbnB1dE9wdGlvblsxXTtcbiAgICAgIHZhciByYWRpb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgIHZhciByYWRpb0xhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICByYWRpb0lucHV0LnR5cGUgPSAncmFkaW8nO1xuICAgICAgcmFkaW9JbnB1dC5uYW1lID0gc3dhbENsYXNzZXMucmFkaW87XG4gICAgICByYWRpb0lucHV0LnZhbHVlID0gcmFkaW9WYWx1ZTtcblxuICAgICAgaWYgKHBhcmFtcy5pbnB1dFZhbHVlLnRvU3RyaW5nKCkgPT09IHJhZGlvVmFsdWUudG9TdHJpbmcoKSkge1xuICAgICAgICByYWRpb0lucHV0LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICBsYWJlbC5pbm5lckhUTUwgPSByYWRpb0xhYmVsO1xuICAgICAgbGFiZWwuY2xhc3NOYW1lID0gc3dhbENsYXNzZXMubGFiZWw7XG4gICAgICByYWRpb0xhYmVsRWxlbWVudC5hcHBlbmRDaGlsZChyYWRpb0lucHV0KTtcbiAgICAgIHJhZGlvTGFiZWxFbGVtZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgIHJhZGlvLmFwcGVuZENoaWxkKHJhZGlvTGFiZWxFbGVtZW50KTtcbiAgICB9KTtcbiAgICB2YXIgcmFkaW9zID0gcmFkaW8ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKTtcblxuICAgIGlmIChyYWRpb3MubGVuZ3RoKSB7XG4gICAgICByYWRpb3NbMF0uZm9jdXMoKTtcbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIENvbnZlcnRzIGBpbnB1dE9wdGlvbnNgIGludG8gYW4gYXJyYXkgb2YgYFt2YWx1ZSwgbGFiZWxdYHNcbiAgICogQHBhcmFtIGlucHV0T3B0aW9uc1xuICAgKi9cblxufTtcblxudmFyIGZvcm1hdElucHV0T3B0aW9ucyA9IGZ1bmN0aW9uIGZvcm1hdElucHV0T3B0aW9ucyhpbnB1dE9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gIGlmICh0eXBlb2YgTWFwICE9PSAndW5kZWZpbmVkJyAmJiBpbnB1dE9wdGlvbnMgaW5zdGFuY2VvZiBNYXApIHtcbiAgICBpbnB1dE9wdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgdmFsdWVdKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBPYmplY3Qua2V5cyhpbnB1dE9wdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgcmVzdWx0LnB1c2goW2tleSwgaW5wdXRPcHRpb25zW2tleV1dKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5mdW5jdGlvbiBfbWFpbih1c2VyUGFyYW1zKSB7XG4gIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgc2hvd1dhcm5pbmdzRm9yUGFyYW1zKHVzZXJQYXJhbXMpO1xuXG4gIHZhciBpbm5lclBhcmFtcyA9IF9leHRlbmRzKHt9LCBkZWZhdWx0UGFyYW1zLCB1c2VyUGFyYW1zKTtcblxuICBzZXRQYXJhbWV0ZXJzKGlubmVyUGFyYW1zKTtcbiAgT2JqZWN0LmZyZWV6ZShpbm5lclBhcmFtcyk7IC8vIGNsZWFyIHRoZSBwcmV2aW91cyB0aW1lclxuXG4gIGlmIChnbG9iYWxTdGF0ZS50aW1lb3V0KSB7XG4gICAgZ2xvYmFsU3RhdGUudGltZW91dC5zdG9wKCk7XG4gICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gIH0gLy8gY2xlYXIgdGhlIHJlc3RvcmUgZm9jdXMgdGltZW91dFxuXG5cbiAgY2xlYXJUaW1lb3V0KGdsb2JhbFN0YXRlLnJlc3RvcmVGb2N1c1RpbWVvdXQpO1xuICB2YXIgZG9tQ2FjaGUgPSB7XG4gICAgcG9wdXA6IGdldFBvcHVwKCksXG4gICAgY29udGFpbmVyOiBnZXRDb250YWluZXIoKSxcbiAgICBjb250ZW50OiBnZXRDb250ZW50KCksXG4gICAgYWN0aW9uczogZ2V0QWN0aW9ucygpLFxuICAgIGNvbmZpcm1CdXR0b246IGdldENvbmZpcm1CdXR0b24oKSxcbiAgICBjYW5jZWxCdXR0b246IGdldENhbmNlbEJ1dHRvbigpLFxuICAgIGNsb3NlQnV0dG9uOiBnZXRDbG9zZUJ1dHRvbigpLFxuICAgIHZhbGlkYXRpb25NZXNzYWdlOiBnZXRWYWxpZGF0aW9uTWVzc2FnZSgpLFxuICAgIHByb2dyZXNzU3RlcHM6IGdldFByb2dyZXNzU3RlcHMoKVxuICB9O1xuICBwcml2YXRlUHJvcHMuZG9tQ2FjaGUuc2V0KHRoaXMsIGRvbUNhY2hlKTtcbiAgcmVuZGVyKHRoaXMsIGlubmVyUGFyYW1zKTtcbiAgcHJpdmF0ZVByb3BzLmlubmVyUGFyYW1zLnNldCh0aGlzLCBpbm5lclBhcmFtcyk7XG4gIHZhciBjb25zdHJ1Y3RvciA9IHRoaXMuY29uc3RydWN0b3I7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgIC8vIGZ1bmN0aW9ucyB0byBoYW5kbGUgYWxsIGNsb3NpbmdzL2Rpc21pc3NhbHNcbiAgICB2YXIgc3VjY2VlZFdpdGggPSBmdW5jdGlvbiBzdWNjZWVkV2l0aCh2YWx1ZSkge1xuICAgICAgX3RoaXMuY2xvc2VQb3B1cCh7XG4gICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBkaXNtaXNzV2l0aCA9IGZ1bmN0aW9uIGRpc21pc3NXaXRoKGRpc21pc3MpIHtcbiAgICAgIF90aGlzLmNsb3NlUG9wdXAoe1xuICAgICAgICBkaXNtaXNzOiBkaXNtaXNzXG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgcHJpdmF0ZU1ldGhvZHMuc3dhbFByb21pc2VSZXNvbHZlLnNldChfdGhpcywgcmVzb2x2ZSk7IC8vIENsb3NlIG9uIHRpbWVyXG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudGltZXIpIHtcbiAgICAgIGdsb2JhbFN0YXRlLnRpbWVvdXQgPSBuZXcgVGltZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBkaXNtaXNzV2l0aCgndGltZXInKTtcbiAgICAgICAgZGVsZXRlIGdsb2JhbFN0YXRlLnRpbWVvdXQ7XG4gICAgICB9LCBpbm5lclBhcmFtcy50aW1lcik7XG4gICAgfSAvLyBHZXQgdGhlIHZhbHVlIG9mIHRoZSBwb3B1cCBpbnB1dFxuXG5cbiAgICB2YXIgZ2V0SW5wdXRWYWx1ZSA9IGZ1bmN0aW9uIGdldElucHV0VmFsdWUoKSB7XG4gICAgICB2YXIgaW5wdXQgPSBfdGhpcy5nZXRJbnB1dCgpO1xuXG4gICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgIGNhc2UgJ2NoZWNrYm94JzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IDEgOiAwO1xuXG4gICAgICAgIGNhc2UgJ3JhZGlvJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuY2hlY2tlZCA/IGlucHV0LnZhbHVlIDogbnVsbDtcblxuICAgICAgICBjYXNlICdmaWxlJzpcbiAgICAgICAgICByZXR1cm4gaW5wdXQuZmlsZXMubGVuZ3RoID8gaW5wdXQuZmlsZXNbMF0gOiBudWxsO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmV0dXJuIGlubmVyUGFyYW1zLmlucHV0QXV0b1RyaW0gPyBpbnB1dC52YWx1ZS50cmltKCkgOiBpbnB1dC52YWx1ZTtcbiAgICAgIH1cbiAgICB9OyAvLyBpbnB1dCBhdXRvZm9jdXNcblxuXG4gICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGlucHV0ID0gX3RoaXMuZ2V0SW5wdXQoKTtcblxuICAgICAgICBpZiAoaW5wdXQpIHtcbiAgICAgICAgICBmb2N1c0lucHV0KGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgfSwgMCk7XG4gICAgfVxuXG4gICAgdmFyIGNvbmZpcm0gPSBmdW5jdGlvbiBjb25maXJtKHZhbHVlKSB7XG4gICAgICBpZiAoaW5uZXJQYXJhbXMuc2hvd0xvYWRlck9uQ29uZmlybSkge1xuICAgICAgICBjb25zdHJ1Y3Rvci5zaG93TG9hZGluZygpOyAvLyBUT0RPOiBtYWtlIHNob3dMb2FkaW5nIGFuICppbnN0YW5jZSogbWV0aG9kXG4gICAgICB9XG5cbiAgICAgIGlmIChpbm5lclBhcmFtcy5wcmVDb25maXJtKSB7XG4gICAgICAgIF90aGlzLnJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UoKTtcblxuICAgICAgICB2YXIgcHJlQ29uZmlybVByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMucHJlQ29uZmlybSh2YWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgcHJlQ29uZmlybVByb21pc2UudGhlbihmdW5jdGlvbiAocHJlQ29uZmlybVZhbHVlKSB7XG4gICAgICAgICAgaWYgKGlzVmlzaWJsZShkb21DYWNoZS52YWxpZGF0aW9uTWVzc2FnZSkgfHwgcHJlQ29uZmlybVZhbHVlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgX3RoaXMuaGlkZUxvYWRpbmcoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3VjY2VlZFdpdGgodHlwZW9mIHByZUNvbmZpcm1WYWx1ZSA9PT0gJ3VuZGVmaW5lZCcgPyB2YWx1ZSA6IHByZUNvbmZpcm1WYWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN1Y2NlZWRXaXRoKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9OyAvLyBNb3VzZSBpbnRlcmFjdGlvbnNcblxuXG4gICAgdmFyIG9uQnV0dG9uRXZlbnQgPSBmdW5jdGlvbiBvbkJ1dHRvbkV2ZW50KGUpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgIHZhciBjb25maXJtQnV0dG9uID0gZG9tQ2FjaGUuY29uZmlybUJ1dHRvbixcbiAgICAgICAgICBjYW5jZWxCdXR0b24gPSBkb21DYWNoZS5jYW5jZWxCdXR0b247XG4gICAgICB2YXIgdGFyZ2V0ZWRDb25maXJtID0gY29uZmlybUJ1dHRvbiAmJiAoY29uZmlybUJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNvbmZpcm1CdXR0b24uY29udGFpbnModGFyZ2V0KSk7XG4gICAgICB2YXIgdGFyZ2V0ZWRDYW5jZWwgPSBjYW5jZWxCdXR0b24gJiYgKGNhbmNlbEJ1dHRvbiA9PT0gdGFyZ2V0IHx8IGNhbmNlbEJ1dHRvbi5jb250YWlucyh0YXJnZXQpKTtcblxuICAgICAgc3dpdGNoIChlLnR5cGUpIHtcbiAgICAgICAgY2FzZSAnY2xpY2snOlxuICAgICAgICAgIC8vIENsaWNrZWQgJ2NvbmZpcm0nXG4gICAgICAgICAgaWYgKHRhcmdldGVkQ29uZmlybSkge1xuICAgICAgICAgICAgX3RoaXMuZGlzYWJsZUJ1dHRvbnMoKTtcblxuICAgICAgICAgICAgaWYgKGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgICAgIHZhciBpbnB1dFZhbHVlID0gZ2V0SW5wdXRWYWx1ZSgpO1xuXG4gICAgICAgICAgICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dFZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLmRpc2FibGVJbnB1dCgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25Qcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5uZXJQYXJhbXMuaW5wdXRWYWxpZGF0b3IoaW5wdXRWYWx1ZSwgaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Qcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbGlkYXRpb25NZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICAgIF90aGlzLmVuYWJsZUlucHV0KCk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uZmlybShpbnB1dFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICghX3RoaXMuZ2V0SW5wdXQoKS5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5lbmFibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zaG93VmFsaWRhdGlvbk1lc3NhZ2UoaW5uZXJQYXJhbXMudmFsaWRhdGlvbk1lc3NhZ2UpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbmZpcm0oaW5wdXRWYWx1ZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbmZpcm0odHJ1ZSk7XG4gICAgICAgICAgICB9IC8vIENsaWNrZWQgJ2NhbmNlbCdcblxuICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0ZWRDYW5jZWwpIHtcbiAgICAgICAgICAgIF90aGlzLmRpc2FibGVCdXR0b25zKCk7XG5cbiAgICAgICAgICAgIGRpc21pc3NXaXRoKGNvbnN0cnVjdG9yLkRpc21pc3NSZWFzb24uY2FuY2VsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgYnV0dG9ucyA9IGRvbUNhY2hlLnBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJ2J1dHRvbicpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBidXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBidXR0b25zW2ldLm9uY2xpY2sgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlb3ZlciA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgICBidXR0b25zW2ldLm9ubW91c2VvdXQgPSBvbkJ1dHRvbkV2ZW50O1xuICAgICAgYnV0dG9uc1tpXS5vbm1vdXNlZG93biA9IG9uQnV0dG9uRXZlbnQ7XG4gICAgfSAvLyBDbG9zaW5nIHBvcHVwIGJ5IGNsb3NlIGJ1dHRvblxuXG5cbiAgICBkb21DYWNoZS5jbG9zZUJ1dHRvbi5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgfTtcblxuICAgIGlmIChpbm5lclBhcmFtcy50b2FzdCkge1xuICAgICAgLy8gQ2xvc2luZyBwb3B1cCBieSBpbnRlcm5hbCBjbGlja1xuICAgICAgZG9tQ2FjaGUucG9wdXAub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlubmVyUGFyYW1zLnNob3dDb25maXJtQnV0dG9uIHx8IGlubmVyUGFyYW1zLnNob3dDYW5jZWxCdXR0b24gfHwgaW5uZXJQYXJhbXMuc2hvd0Nsb3NlQnV0dG9uIHx8IGlubmVyUGFyYW1zLmlucHV0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5jbG9zZSk7XG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBwb3B1cCBidXQgbW91c2V1cCBvbiB0aGUgY29udGFpbmVyXG4gICAgICAvLyBUaGlzIGNhbiBoYXBwZW4gd2hlbiB0aGUgdXNlciBkcmFncyBhIHNsaWRlclxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2Ugb25seSBjaGVjayBpZiB0aGUgbW91c2V1cCB0YXJnZXQgaXMgdGhlIGNvbnRhaW5lciBiZWNhdXNlIHVzdWFsbHkgaXQgZG9lc24ndFxuICAgICAgICAgIC8vIGhhdmUgYW55IG90aGVyIGRpcmVjdCBjaGlsZHJlbiBhc2lkZSBvZiB0aGUgcG9wdXBcblxuICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gZG9tQ2FjaGUuY29udGFpbmVyKSB7XG4gICAgICAgICAgICBpZ25vcmVPdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH07IC8vIElnbm9yZSBjbGljayBldmVudHMgdGhhdCBoYWQgbW91c2Vkb3duIG9uIHRoZSBjb250YWluZXIgYnV0IG1vdXNldXAgb24gdGhlIHBvcHVwXG5cblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9ubW91c2Vkb3duID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb21DYWNoZS5wb3B1cC5vbm1vdXNldXAgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGRvbUNhY2hlLnBvcHVwLm9ubW91c2V1cCA9IHVuZGVmaW5lZDsgLy8gV2UgYWxzbyBuZWVkIHRvIGNoZWNrIGlmIHRoZSBtb3VzZXVwIHRhcmdldCBpcyBhIGNoaWxkIG9mIHRoZSBwb3B1cFxuXG4gICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBkb21DYWNoZS5wb3B1cCB8fCBkb21DYWNoZS5wb3B1cC5jb250YWlucyhlLnRhcmdldCkpIHtcbiAgICAgICAgICAgIGlnbm9yZU91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgZG9tQ2FjaGUuY29udGFpbmVyLm9uY2xpY2sgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoaWdub3JlT3V0c2lkZUNsaWNrKSB7XG4gICAgICAgICAgaWdub3JlT3V0c2lkZUNsaWNrID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0ICE9PSBkb21DYWNoZS5jb250YWluZXIpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dPdXRzaWRlQ2xpY2spKSB7XG4gICAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5iYWNrZHJvcCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSAvLyBSZXZlcnNlIGJ1dHRvbnMgKENvbmZpcm0gb24gdGhlIHJpZ2h0IHNpZGUpXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5yZXZlcnNlQnV0dG9ucykge1xuICAgICAgZG9tQ2FjaGUuY29uZmlybUJ1dHRvbi5wYXJlbnROb2RlLmluc2VydEJlZm9yZShkb21DYWNoZS5jYW5jZWxCdXR0b24sIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb21DYWNoZS5jb25maXJtQnV0dG9uLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24sIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbik7XG4gICAgfSAvLyBGb2N1cyBoYW5kbGluZ1xuXG5cbiAgICB2YXIgc2V0Rm9jdXMgPSBmdW5jdGlvbiBzZXRGb2N1cyhpbmRleCwgaW5jcmVtZW50KSB7XG4gICAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPSBnZXRGb2N1c2FibGVFbGVtZW50cyhpbm5lclBhcmFtcy5mb2N1c0NhbmNlbCk7IC8vIHNlYXJjaCBmb3IgdmlzaWJsZSBlbGVtZW50cyBhbmQgc2VsZWN0IHRoZSBuZXh0IHBvc3NpYmxlIG1hdGNoXG5cbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgaW5kZXggPSBpbmRleCArIGluY3JlbWVudDsgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuXG4gICAgICAgIGlmIChpbmRleCA9PT0gZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgaW5kZXggPSAwOyAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgICAgICBpbmRleCA9IGZvY3VzYWJsZUVsZW1lbnRzLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZm9jdXNhYmxlRWxlbWVudHNbaW5kZXhdLmZvY3VzKCk7XG4gICAgICB9IC8vIG5vIHZpc2libGUgZm9jdXNhYmxlIGVsZW1lbnRzLCBmb2N1cyB0aGUgcG9wdXBcblxuXG4gICAgICBkb21DYWNoZS5wb3B1cC5mb2N1cygpO1xuICAgIH07XG5cbiAgICB2YXIga2V5ZG93bkhhbmRsZXIgPSBmdW5jdGlvbiBrZXlkb3duSGFuZGxlcihlLCBpbm5lclBhcmFtcykge1xuICAgICAgaWYgKGlubmVyUGFyYW1zLnN0b3BLZXlkb3duUHJvcGFnYXRpb24pIHtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH1cblxuICAgICAgdmFyIGFycm93S2V5cyA9IFsnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnLCAnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnTGVmdCcsICdSaWdodCcsICdVcCcsICdEb3duJyAvLyBJRTExXG4gICAgICBdO1xuXG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicgJiYgIWUuaXNDb21wb3NpbmcpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ICYmIF90aGlzLmdldElucHV0KCkgJiYgZS50YXJnZXQub3V0ZXJIVE1MID09PSBfdGhpcy5nZXRJbnB1dCgpLm91dGVySFRNTCkge1xuICAgICAgICAgIGlmIChbJ3RleHRhcmVhJywgJ2ZpbGUnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gZG8gbm90IHN1Ym1pdFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0cnVjdG9yLmNsaWNrQ29uZmlybSgpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSAvLyBUQUJcblxuICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ1RhYicpIHtcbiAgICAgICAgdmFyIHRhcmdldEVsZW1lbnQgPSBlLnRhcmdldDtcbiAgICAgICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzID0gZ2V0Rm9jdXNhYmxlRWxlbWVudHMoaW5uZXJQYXJhbXMuZm9jdXNDYW5jZWwpO1xuICAgICAgICB2YXIgYnRuSW5kZXggPSAtMTtcblxuICAgICAgICBmb3IgKHZhciBfaTIgPSAwOyBfaTIgPCBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGg7IF9pMisrKSB7XG4gICAgICAgICAgaWYgKHRhcmdldEVsZW1lbnQgPT09IGZvY3VzYWJsZUVsZW1lbnRzW19pMl0pIHtcbiAgICAgICAgICAgIGJ0bkluZGV4ID0gX2kyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gQ3ljbGUgdG8gdGhlIG5leHQgYnV0dG9uXG4gICAgICAgICAgc2V0Rm9jdXMoYnRuSW5kZXgsIDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEN5Y2xlIHRvIHRoZSBwcmV2IGJ1dHRvblxuICAgICAgICAgIHNldEZvY3VzKGJ0bkluZGV4LCAtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIEFSUk9XUyAtIHN3aXRjaCBmb2N1cyBiZXR3ZWVuIGJ1dHRvbnNcbiAgICAgIH0gZWxzZSBpZiAoYXJyb3dLZXlzLmluZGV4T2YoZS5rZXkpICE9PSAtMSkge1xuICAgICAgICAvLyBmb2N1cyBDYW5jZWwgYnV0dG9uIGlmIENvbmZpcm0gYnV0dG9uIGlzIGN1cnJlbnRseSBmb2N1c2VkXG4gICAgICAgIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb21DYWNoZS5jb25maXJtQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgICAgZG9tQ2FjaGUuY2FuY2VsQnV0dG9uLmZvY3VzKCk7IC8vIGFuZCB2aWNlIHZlcnNhXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gZG9tQ2FjaGUuY2FuY2VsQnV0dG9uICYmIGlzVmlzaWJsZShkb21DYWNoZS5jb25maXJtQnV0dG9uKSkge1xuICAgICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgICAgfSAvLyBFU0NcblxuICAgICAgfSBlbHNlIGlmICgoZS5rZXkgPT09ICdFc2NhcGUnIHx8IGUua2V5ID09PSAnRXNjJykgJiYgY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFc2NhcGVLZXkpID09PSB0cnVlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZGlzbWlzc1dpdGgoY29uc3RydWN0b3IuRGlzbWlzc1JlYXNvbi5lc2MpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoZ2xvYmFsU3RhdGUua2V5ZG93blRhcmdldCAmJiBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlckFkZGVkKSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoIWlubmVyUGFyYW1zLnRvYXN0KSB7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHJldHVybiBrZXlkb3duSGFuZGxlcihlLCBpbm5lclBhcmFtcyk7XG4gICAgICB9O1xuXG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0ID0gaW5uZXJQYXJhbXMua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA/IHdpbmRvdyA6IGRvbUNhY2hlLnBvcHVwO1xuICAgICAgZ2xvYmFsU3RhdGUua2V5ZG93bkxpc3RlbmVyQ2FwdHVyZSA9IGlubmVyUGFyYW1zLmtleWRvd25MaXN0ZW5lckNhcHR1cmU7XG4gICAgICBnbG9iYWxTdGF0ZS5rZXlkb3duVGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnbG9iYWxTdGF0ZS5rZXlkb3duSGFuZGxlciwge1xuICAgICAgICBjYXB0dXJlOiBnbG9iYWxTdGF0ZS5rZXlkb3duTGlzdGVuZXJDYXB0dXJlXG4gICAgICB9KTtcbiAgICAgIGdsb2JhbFN0YXRlLmtleWRvd25IYW5kbGVyQWRkZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIF90aGlzLmVuYWJsZUJ1dHRvbnMoKTtcblxuICAgIF90aGlzLmhpZGVMb2FkaW5nKCk7XG5cbiAgICBfdGhpcy5yZXNldFZhbGlkYXRpb25NZXNzYWdlKCk7XG5cbiAgICBpZiAoaW5uZXJQYXJhbXMudG9hc3QgJiYgKGlubmVyUGFyYW1zLmlucHV0IHx8IGlubmVyUGFyYW1zLmZvb3RlciB8fCBpbm5lclBhcmFtcy5zaG93Q2xvc2VCdXR0b24pKSB7XG4gICAgICBhZGRDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmVDbGFzcyhkb2N1bWVudC5ib2R5LCBzd2FsQ2xhc3Nlc1sndG9hc3QtY29sdW1uJ10pO1xuICAgIH0gLy8gaW5wdXRPcHRpb25zLCBpbnB1dFZhbHVlXG5cblxuICAgIGlmIChpbm5lclBhcmFtcy5pbnB1dCA9PT0gJ3NlbGVjdCcgfHwgaW5uZXJQYXJhbXMuaW5wdXQgPT09ICdyYWRpbycpIHtcbiAgICAgIGhhbmRsZUlucHV0T3B0aW9ucyhfdGhpcywgaW5uZXJQYXJhbXMpO1xuICAgIH0gZWxzZSBpZiAoWyd0ZXh0JywgJ2VtYWlsJywgJ251bWJlcicsICd0ZWwnLCAndGV4dGFyZWEnXS5pbmRleE9mKGlubmVyUGFyYW1zLmlucHV0KSAhPT0gLTEgJiYgaXNQcm9taXNlKGlubmVyUGFyYW1zLmlucHV0VmFsdWUpKSB7XG4gICAgICBoYW5kbGVJbnB1dFZhbHVlKF90aGlzLCBpbm5lclBhcmFtcyk7XG4gICAgfVxuXG4gICAgb3BlblBvcHVwKGlubmVyUGFyYW1zKTtcblxuICAgIGlmICghaW5uZXJQYXJhbXMudG9hc3QpIHtcbiAgICAgIGlmICghY2FsbElmRnVuY3Rpb24oaW5uZXJQYXJhbXMuYWxsb3dFbnRlcktleSkpIHtcbiAgICAgICAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgdHlwZW9mIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1ciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlubmVyUGFyYW1zLmZvY3VzQ2FuY2VsICYmIGlzVmlzaWJsZShkb21DYWNoZS5jYW5jZWxCdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICAgICAgfSBlbHNlIGlmIChpbm5lclBhcmFtcy5mb2N1c0NvbmZpcm0gJiYgaXNWaXNpYmxlKGRvbUNhY2hlLmNvbmZpcm1CdXR0b24pKSB7XG4gICAgICAgIGRvbUNhY2hlLmNvbmZpcm1CdXR0b24uZm9jdXMoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEZvY3VzKC0xLCAxKTtcbiAgICAgIH1cbiAgICB9IC8vIGZpeCBzY3JvbGxcblxuXG4gICAgZG9tQ2FjaGUuY29udGFpbmVyLnNjcm9sbFRvcCA9IDA7XG4gIH0pO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgcG9wdXAgcGFyYW1ldGVycy5cbiAqL1xuXG5mdW5jdGlvbiB1cGRhdGUocGFyYW1zKSB7XG4gIHZhciB2YWxpZFVwZGF0YWJsZVBhcmFtcyA9IHt9OyAvLyBhc3NpZ24gdmFsaWQgcGFyYW1zIGZyb20gYHBhcmFtc2AgdG8gYGRlZmF1bHRzYFxuXG4gIE9iamVjdC5rZXlzKHBhcmFtcykuZm9yRWFjaChmdW5jdGlvbiAocGFyYW0pIHtcbiAgICBpZiAoU3dhbC5pc1VwZGF0YWJsZVBhcmFtZXRlcihwYXJhbSkpIHtcbiAgICAgIHZhbGlkVXBkYXRhYmxlUGFyYW1zW3BhcmFtXSA9IHBhcmFtc1twYXJhbV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHdhcm4oXCJJbnZhbGlkIHBhcmFtZXRlciB0byB1cGRhdGU6IFxcXCJcIi5jb25jYXQocGFyYW0sIFwiXFxcIi4gVXBkYXRhYmxlIHBhcmFtcyBhcmUgbGlzdGVkIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9zd2VldGFsZXJ0Mi9zd2VldGFsZXJ0Mi9ibG9iL21hc3Rlci9zcmMvdXRpbHMvcGFyYW1zLmpzXCIpKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaW5uZXJQYXJhbXMgPSBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuZ2V0KHRoaXMpO1xuXG4gIHZhciB1cGRhdGVkUGFyYW1zID0gX2V4dGVuZHMoe30sIGlubmVyUGFyYW1zLCB2YWxpZFVwZGF0YWJsZVBhcmFtcyk7XG5cbiAgcmVuZGVyKHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICBwcml2YXRlUHJvcHMuaW5uZXJQYXJhbXMuc2V0KHRoaXMsIHVwZGF0ZWRQYXJhbXMpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWx1ZTogX2V4dGVuZHMoe30sIHRoaXMucGFyYW1zLCBwYXJhbXMpLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG59XG5cblxuXG52YXIgaW5zdGFuY2VNZXRob2RzID0gT2JqZWN0LmZyZWV6ZSh7XG5cdGhpZGVMb2FkaW5nOiBoaWRlTG9hZGluZyxcblx0ZGlzYWJsZUxvYWRpbmc6IGhpZGVMb2FkaW5nLFxuXHRnZXRJbnB1dDogZ2V0SW5wdXQkMSxcblx0Y2xvc2U6IGNsb3NlLFxuXHRjbG9zZVBvcHVwOiBjbG9zZSxcblx0Y2xvc2VNb2RhbDogY2xvc2UsXG5cdGNsb3NlVG9hc3Q6IGNsb3NlLFxuXHRlbmFibGVCdXR0b25zOiBlbmFibGVCdXR0b25zLFxuXHRkaXNhYmxlQnV0dG9uczogZGlzYWJsZUJ1dHRvbnMsXG5cdGVuYWJsZUNvbmZpcm1CdXR0b246IGVuYWJsZUNvbmZpcm1CdXR0b24sXG5cdGRpc2FibGVDb25maXJtQnV0dG9uOiBkaXNhYmxlQ29uZmlybUJ1dHRvbixcblx0ZW5hYmxlSW5wdXQ6IGVuYWJsZUlucHV0LFxuXHRkaXNhYmxlSW5wdXQ6IGRpc2FibGVJbnB1dCxcblx0c2hvd1ZhbGlkYXRpb25NZXNzYWdlOiBzaG93VmFsaWRhdGlvbk1lc3NhZ2UsXG5cdHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2U6IHJlc2V0VmFsaWRhdGlvbk1lc3NhZ2UkMSxcblx0Z2V0UHJvZ3Jlc3NTdGVwczogZ2V0UHJvZ3Jlc3NTdGVwcyQxLFxuXHRzZXRQcm9ncmVzc1N0ZXBzOiBzZXRQcm9ncmVzc1N0ZXBzLFxuXHRzaG93UHJvZ3Jlc3NTdGVwczogc2hvd1Byb2dyZXNzU3RlcHMsXG5cdGhpZGVQcm9ncmVzc1N0ZXBzOiBoaWRlUHJvZ3Jlc3NTdGVwcyxcblx0X21haW46IF9tYWluLFxuXHR1cGRhdGU6IHVwZGF0ZVxufSk7XG5cbnZhciBjdXJyZW50SW5zdGFuY2U7IC8vIFN3ZWV0QWxlcnQgY29uc3RydWN0b3JcblxuZnVuY3Rpb24gU3dlZXRBbGVydCgpIHtcbiAgLy8gUHJldmVudCBydW4gaW4gTm9kZSBlbnZcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuO1xuICB9IC8vIENoZWNrIGZvciB0aGUgZXhpc3RlbmNlIG9mIFByb21pc2VcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cblxuXG4gIGlmICh0eXBlb2YgUHJvbWlzZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBlcnJvcignVGhpcyBwYWNrYWdlIHJlcXVpcmVzIGEgUHJvbWlzZSBsaWJyYXJ5LCBwbGVhc2UgaW5jbHVkZSBhIHNoaW0gdG8gZW5hYmxlIGl0IGluIHRoaXMgYnJvd3NlciAoU2VlOiBodHRwczovL2dpdGh1Yi5jb20vc3dlZXRhbGVydDIvc3dlZXRhbGVydDIvd2lraS9NaWdyYXRpb24tZnJvbS1Td2VldEFsZXJ0LXRvLVN3ZWV0QWxlcnQyIzEtaWUtc3VwcG9ydCknKTtcbiAgfVxuXG4gIGN1cnJlbnRJbnN0YW5jZSA9IHRoaXM7XG5cbiAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBvdXRlclBhcmFtcyA9IE9iamVjdC5mcmVlemUodGhpcy5jb25zdHJ1Y3Rvci5hcmdzVG9QYXJhbXMoYXJncykpO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7XG4gICAgcGFyYW1zOiB7XG4gICAgICB2YWx1ZTogb3V0ZXJQYXJhbXMsXG4gICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcblxuICB2YXIgcHJvbWlzZSA9IHRoaXMuX21haW4odGhpcy5wYXJhbXMpO1xuXG4gIHByaXZhdGVQcm9wcy5wcm9taXNlLnNldCh0aGlzLCBwcm9taXNlKTtcbn0gLy8gYGNhdGNoYCBjYW5ub3QgYmUgdGhlIG5hbWUgb2YgYSBtb2R1bGUgZXhwb3J0LCBzbyB3ZSBkZWZpbmUgb3VyIHRoZW5hYmxlIG1ldGhvZHMgaGVyZSBpbnN0ZWFkXG5cblxuU3dlZXRBbGVydC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChvbkZ1bGZpbGxlZCkge1xuICB2YXIgcHJvbWlzZSA9IHByaXZhdGVQcm9wcy5wcm9taXNlLmdldCh0aGlzKTtcbiAgcmV0dXJuIHByb21pc2UudGhlbihvbkZ1bGZpbGxlZCk7XG59O1xuXG5Td2VldEFsZXJ0LnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBwcm9taXNlID0gcHJpdmF0ZVByb3BzLnByb21pc2UuZ2V0KHRoaXMpO1xuICByZXR1cm4gcHJvbWlzZVtcImZpbmFsbHlcIl0ob25GaW5hbGx5KTtcbn07IC8vIEFzc2lnbiBpbnN0YW5jZSBtZXRob2RzIGZyb20gc3JjL2luc3RhbmNlTWV0aG9kcy8qLmpzIHRvIHByb3RvdHlwZVxuXG5cbl9leHRlbmRzKFN3ZWV0QWxlcnQucHJvdG90eXBlLCBpbnN0YW5jZU1ldGhvZHMpOyAvLyBBc3NpZ24gc3RhdGljIG1ldGhvZHMgZnJvbSBzcmMvc3RhdGljTWV0aG9kcy8qLmpzIHRvIGNvbnN0cnVjdG9yXG5cblxuX2V4dGVuZHMoU3dlZXRBbGVydCwgc3RhdGljTWV0aG9kcyk7IC8vIFByb3h5IHRvIGluc3RhbmNlIG1ldGhvZHMgdG8gY29uc3RydWN0b3IsIGZvciBub3csIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eVxuXG5cbk9iamVjdC5rZXlzKGluc3RhbmNlTWV0aG9kcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gIFN3ZWV0QWxlcnRba2V5XSA9IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoY3VycmVudEluc3RhbmNlKSB7XG4gICAgICB2YXIgX2N1cnJlbnRJbnN0YW5jZTtcblxuICAgICAgcmV0dXJuIChfY3VycmVudEluc3RhbmNlID0gY3VycmVudEluc3RhbmNlKVtrZXldLmFwcGx5KF9jdXJyZW50SW5zdGFuY2UsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9O1xufSk7XG5Td2VldEFsZXJ0LkRpc21pc3NSZWFzb24gPSBEaXNtaXNzUmVhc29uO1xuU3dlZXRBbGVydC52ZXJzaW9uID0gJzguMTIuMSc7XG5cbnZhciBTd2FsID0gU3dlZXRBbGVydDtcblN3YWxbXCJkZWZhdWx0XCJdID0gU3dhbDtcblxucmV0dXJuIFN3YWw7XG5cbn0pKSk7XG5pZiAodHlwZW9mIHRoaXMgIT09ICd1bmRlZmluZWQnICYmIHRoaXMuU3dlZXRhbGVydDIpeyAgdGhpcy5zd2FsID0gdGhpcy5zd2VldEFsZXJ0ID0gdGhpcy5Td2FsID0gdGhpcy5Td2VldEFsZXJ0ID0gdGhpcy5Td2VldGFsZXJ0Mn1cblxuXCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50JiZmdW5jdGlvbihlLHQpe3ZhciBuPWUuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO2lmKGUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJoZWFkXCIpWzBdLmFwcGVuZENoaWxkKG4pLG4uc3R5bGVTaGVldCluLnN0eWxlU2hlZXQuZGlzYWJsZWR8fChuLnN0eWxlU2hlZXQuY3NzVGV4dD10KTtlbHNlIHRyeXtuLmlubmVySFRNTD10fWNhdGNoKGUpe24uaW5uZXJUZXh0PXR9fShkb2N1bWVudCxcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLXNob3d7MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjcpO3RyYW5zZm9ybTpzY2FsZSguNyl9NDUley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMDUpO3RyYW5zZm9ybTpzY2FsZSgxLjA1KX04MCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjk1KTt0cmFuc2Zvcm06c2NhbGUoLjk1KX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKX19QGtleWZyYW1lcyBzd2FsMi1zaG93ezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC43KTt0cmFuc2Zvcm06c2NhbGUoLjcpfTQ1JXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjA1KTt0cmFuc2Zvcm06c2NhbGUoMS4wNSl9ODAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC45NSk7dHJhbnNmb3JtOnNjYWxlKC45NSl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSl9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1oaWRlezAley13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjF9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNSk7dHJhbnNmb3JtOnNjYWxlKC41KTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItaGlkZXswJXstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoLjUpO3RyYW5zZm9ybTpzY2FsZSguNSk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDoxLjE4NzVlbTtsZWZ0Oi4wNjI1ZW07d2lkdGg6MH01NCV7dG9wOjEuMDYyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDoyLjE4NzVlbTtsZWZ0Oi0uMzc1ZW07d2lkdGg6My4xMjVlbX04NCV7dG9wOjNlbTtsZWZ0OjEuMzEyNWVtO3dpZHRoOjEuMDYyNWVtfTEwMCV7dG9wOjIuODEyNWVtO2xlZnQ6Ljg3NWVtO3dpZHRoOjEuNTYyNWVtfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcHswJXt0b3A6MS4xODc1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDoxLjA2MjVlbTtsZWZ0Oi4xMjVlbTt3aWR0aDowfTcwJXt0b3A6Mi4xODc1ZW07bGVmdDotLjM3NWVtO3dpZHRoOjMuMTI1ZW19ODQle3RvcDozZW07bGVmdDoxLjMxMjVlbTt3aWR0aDoxLjA2MjVlbX0xMDAle3RvcDoyLjgxMjVlbTtsZWZ0Oi44NzVlbTt3aWR0aDoxLjU2MjVlbX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmd7MCV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTY1JXt0b3A6My4zNzVlbTtyaWdodDoyLjg3NWVtO3dpZHRoOjB9ODQle3RvcDoyLjE4NzVlbTtyaWdodDowO3dpZHRoOjMuNDM3NWVtfTEwMCV7dG9wOjIuMzc1ZW07cmlnaHQ6LjVlbTt3aWR0aDoyLjkzNzVlbX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nezAle3RvcDozLjM3NWVtO3JpZ2h0OjIuODc1ZW07d2lkdGg6MH02NSV7dG9wOjMuMzc1ZW07cmlnaHQ6Mi44NzVlbTt3aWR0aDowfTg0JXt0b3A6Mi4xODc1ZW07cmlnaHQ6MDt3aWR0aDozLjQzNzVlbX0xMDAle3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW19fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lezAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX01JXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9MTIley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZXswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9NSV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfTEyJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQwNWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDA1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00MDVkZWcpfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItYW5pbWF0ZS1lcnJvci14LW1hcmt7MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH01MCV7bWFyZ2luLXRvcDoxLjYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKC40KTt0cmFuc2Zvcm06c2NhbGUoLjQpO29wYWNpdHk6MH04MCV7bWFyZ2luLXRvcDotLjM3NWVtOy13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO3RyYW5zZm9ybTpzY2FsZSgxLjE1KX0xMDAle21hcmdpbi10b3A6MDstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxKTt0cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eToxfX1Aa2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrezAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9NTAle21hcmdpbi10b3A6MS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSguNCk7dHJhbnNmb3JtOnNjYWxlKC40KTtvcGFjaXR5OjB9ODAle21hcmdpbi10b3A6LS4zNzVlbTstd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTt0cmFuc2Zvcm06c2NhbGUoMS4xNSl9MTAwJXttYXJnaW4tdG9wOjA7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7dHJhbnNmb3JtOnNjYWxlKDEpO29wYWNpdHk6MX19QC13ZWJraXQta2V5ZnJhbWVzIHN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnswJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7dHJhbnNmb3JtOnJvdGF0ZVgoMTAwZGVnKTtvcGFjaXR5OjB9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGVYKDApO3RyYW5zZm9ybTpyb3RhdGVYKDApO29wYWNpdHk6MX19QGtleWZyYW1lcyBzd2FsMi1hbmltYXRlLWVycm9yLWljb257MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgxMDBkZWcpO3RyYW5zZm9ybTpyb3RhdGVYKDEwMGRlZyk7b3BhY2l0eTowfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWCgwKTt0cmFuc2Zvcm06cm90YXRlWCgwKTtvcGFjaXR5OjF9fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lcntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1zaG93bntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3B7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtZW5kLGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG99Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnR7dG9wOjA7cmlnaHQ6YXV0bztib3R0b206YXV0bztsZWZ0OjB9Ym9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1sZWZ0LGJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6MDstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpfWJvZHkuc3dhbDItdG9hc3Qtc2hvd24gLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtyaWdodDphdXRvO2JvdHRvbTphdXRvO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLXJpZ2h0e3RvcDo1MCU7cmlnaHQ6MDtib3R0b206YXV0bztsZWZ0OmF1dG87LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi10b2FzdC1zaG93biAuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydHt0b3A6YXV0bztyaWdodDphdXRvO2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOjA7bGVmdDo1MCU7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNTAlKX1ib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWVuZCxib2R5LnN3YWwyLXRvYXN0LXNob3duIC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0e3RvcDphdXRvO3JpZ2h0OjA7Ym90dG9tOjA7bGVmdDphdXRvfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdHtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6c3RyZXRjaH1ib2R5LnN3YWwyLXRvYXN0LWNvbHVtbiAuc3dhbDItdG9hc3QgLnN3YWwyLWFjdGlvbnN7ZmxleDoxO2FsaWduLXNlbGY6c3RyZXRjaDtoZWlnaHQ6Mi4yZW07bWFyZ2luLXRvcDouMzEyNWVtfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItbG9hZGluZ3tqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyfWJvZHkuc3dhbDItdG9hc3QtY29sdW1uIC5zd2FsMi10b2FzdCAuc3dhbDItaW5wdXR7aGVpZ2h0OjJlbTttYXJnaW46LjMxMjVlbSBhdXRvO2ZvbnQtc2l6ZToxZW19Ym9keS5zd2FsMi10b2FzdC1jb2x1bW4gLnN3YWwyLXRvYXN0IC5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3R7ZmxleC1kaXJlY3Rpb246cm93O2FsaWduLWl0ZW1zOmNlbnRlcjt3aWR0aDphdXRvO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93LXk6aGlkZGVuO2JveC1zaGFkb3c6MCAwIC42MjVlbSAjZDlkOWQ5fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaGVhZGVye2ZsZXgtZGlyZWN0aW9uOnJvd30uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXRpdGxle2ZsZXgtZ3JvdzoxO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O21hcmdpbjowIC42ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWZvb3RlcnttYXJnaW46LjVlbSAwIDA7cGFkZGluZzouNWVtIDAgMDtmb250LXNpemU6LjhlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWNsb3Nle3Bvc2l0aW9uOnN0YXRpYzt3aWR0aDouOGVtO2hlaWdodDouOGVtO2xpbmUtaGVpZ2h0Oi44fS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItY29udGVudHtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtmb250LXNpemU6MWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbnt3aWR0aDoyZW07bWluLXdpZHRoOjJlbTtoZWlnaHQ6MmVtO21hcmdpbjowfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbjo6YmVmb3Jle2Rpc3BsYXk6ZmxleDthbGlnbi1pdGVtczpjZW50ZXI7Zm9udC1zaXplOjJlbTtmb250LXdlaWdodDo3MDB9QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbjo6YmVmb3Jle2ZvbnQtc2l6ZTouMjVlbX19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLWljb24uc3dhbDItZXJyb3IgW2NsYXNzXj1zd2FsMi14LW1hcmstbGluZV17dG9wOi44NzVlbTt3aWR0aDoxLjM3NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9cmlnaHRde3JpZ2h0Oi4zMTI1ZW19LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1hY3Rpb25ze2ZsZXgtYmFzaXM6YXV0byFpbXBvcnRhbnQ7aGVpZ2h0OmF1dG87bWFyZ2luOjAgLjMxMjVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZHttYXJnaW46MCAuMzEyNWVtO3BhZGRpbmc6LjMxMjVlbSAuNjI1ZW07Zm9udC1zaXplOjFlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN0eWxlZDpmb2N1c3tib3gtc2hhZG93OjAgMCAwIC4wNjI1ZW0gI2ZmZiwwIDAgMCAuMTI1ZW0gcmdiYSg1MCwxMDAsMTUwLC40KX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXXtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDoxLjZlbTtoZWlnaHQ6M2VtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7Ym9yZGVyLXJhZGl1czo1MCV9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0IC5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9bGVmdF17dG9wOi0uOGVtO2xlZnQ6LS41ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjoyZW0gMmVtO3RyYW5zZm9ybS1vcmlnaW46MmVtIDJlbTtib3JkZXItcmFkaXVzOjRlbSAwIDAgNGVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV1bY2xhc3MkPXJpZ2h0XXt0b3A6LS4yNWVtO2xlZnQ6LjkzNzVlbTstd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46MCAxLjVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMS41ZW07Ym9yZGVyLXJhZGl1czowIDRlbSA0ZW0gMH0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3t3aWR0aDoyZW07aGVpZ2h0OjJlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3RvcDowO2xlZnQ6LjQzNzVlbTt3aWR0aDouNDM3NWVtO2hlaWdodDoyLjY4NzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3QgLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVde2hlaWdodDouMzEyNWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPXRpcF17dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDouOTM3NWVtO3JpZ2h0Oi4xODc1ZW07d2lkdGg6MS4zNzVlbX0uc3dhbDItcG9wdXAuc3dhbDItdG9hc3Quc3dhbDItc2hvd3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi10b2FzdC1zaG93IC41czthbmltYXRpb246c3dhbDItdG9hc3Qtc2hvdyAuNXN9LnN3YWwyLXBvcHVwLnN3YWwyLXRvYXN0LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItdG9hc3QtaGlkZSAuMXMgZm9yd2FyZHM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWhpZGUgLjFzIGZvcndhcmRzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXB7LXdlYmtpdC1hbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXM7YW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzfS5zd2FsMi1wb3B1cC5zd2FsMi10b2FzdCAuc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS1sb25ney13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXRvYXN0LWFuaW1hdGUtc3VjY2Vzcy1saW5lLWxvbmcgLjc1czthbmltYXRpb246c3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzfUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi10b2FzdC1zaG93ezAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLS42MjVlbSkgcm90YXRlWigyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpfTMzJXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooLTJkZWcpfTY2JXstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVZKC4zMTI1ZW0pIHJvdGF0ZVooMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKX0xMDAley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigwKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApfX1Aa2V5ZnJhbWVzIHN3YWwyLXRvYXN0LXNob3d7MCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgtLjYyNWVtKSByb3RhdGVaKDJkZWcpO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC0uNjI1ZW0pIHJvdGF0ZVooMmRlZyl9MzMley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoMCkgcm90YXRlWigtMmRlZyl9NjYley13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLjMxMjVlbSkgcm90YXRlWigyZGVnKTt0cmFuc2Zvcm06dHJhbnNsYXRlWSguMzEyNWVtKSByb3RhdGVaKDJkZWcpfTEwMCV7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWSgwKSByb3RhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVZKDApIHJvdGF0ZVooMCl9fUAtd2Via2l0LWtleWZyYW1lcyBzd2FsMi10b2FzdC1oaWRlezEwMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlWigxZGVnKTt0cmFuc2Zvcm06cm90YXRlWigxZGVnKTtvcGFjaXR5OjB9fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtaGlkZXsxMDAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7dHJhbnNmb3JtOnJvdGF0ZVooMWRlZyk7b3BhY2l0eTowfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwezAle3RvcDouNTYyNWVtO2xlZnQ6LjA2MjVlbTt3aWR0aDowfTU0JXt0b3A6LjEyNWVtO2xlZnQ6LjEyNWVtO3dpZHRoOjB9NzAle3RvcDouNjI1ZW07bGVmdDotLjI1ZW07d2lkdGg6MS42MjVlbX04NCV7dG9wOjEuMDYyNWVtO2xlZnQ6Ljc1ZW07d2lkdGg6LjVlbX0xMDAle3RvcDoxLjEyNWVtO2xlZnQ6LjE4NzVlbTt3aWR0aDouNzVlbX19QGtleWZyYW1lcyBzd2FsMi10b2FzdC1hbmltYXRlLXN1Y2Nlc3MtbGluZS10aXB7MCV7dG9wOi41NjI1ZW07bGVmdDouMDYyNWVtO3dpZHRoOjB9NTQle3RvcDouMTI1ZW07bGVmdDouMTI1ZW07d2lkdGg6MH03MCV7dG9wOi42MjVlbTtsZWZ0Oi0uMjVlbTt3aWR0aDoxLjYyNWVtfTg0JXt0b3A6MS4wNjI1ZW07bGVmdDouNzVlbTt3aWR0aDouNWVtfTEwMCV7dG9wOjEuMTI1ZW07bGVmdDouMTg3NWVtO3dpZHRoOi43NWVtfX1ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fUBrZXlmcmFtZXMgc3dhbDItdG9hc3QtYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZ3swJXt0b3A6MS42MjVlbTtyaWdodDoxLjM3NWVtO3dpZHRoOjB9NjUle3RvcDoxLjI1ZW07cmlnaHQ6LjkzNzVlbTt3aWR0aDowfTg0JXt0b3A6LjkzNzVlbTtyaWdodDowO3dpZHRoOjEuMTI1ZW19MTAwJXt0b3A6LjkzNzVlbTtyaWdodDouMTg3NWVtO3dpZHRoOjEuMzc1ZW19fWJvZHkuc3dhbDItc2hvd246bm90KC5zd2FsMi1uby1iYWNrZHJvcCk6bm90KC5zd2FsMi10b2FzdC1zaG93bil7b3ZlcmZsb3c6aGlkZGVufWJvZHkuc3dhbDItaGVpZ2h0LWF1dG97aGVpZ2h0OmF1dG8haW1wb3J0YW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3due3RvcDphdXRvO3JpZ2h0OmF1dG87Ym90dG9tOmF1dG87bGVmdDphdXRvO21heC13aWR0aDpjYWxjKDEwMCUgLSAuNjI1ZW0gKiAyKTtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50fWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duPi5zd2FsMi1tb2RhbHtib3gtc2hhZG93OjAgMCAxMHB4IHJnYmEoMCwwLDAsLjQpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcHt0b3A6MDtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO3RyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpfWJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1sZWZ0LGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLXRvcC1zdGFydHt0b3A6MDtsZWZ0OjB9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItdG9wLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi10b3AtcmlnaHR7dG9wOjA7cmlnaHQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXJ7dG9wOjUwJTtsZWZ0OjUwJTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTt0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLXN0YXJ0e3RvcDo1MCU7bGVmdDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItY2VudGVyLWVuZCxib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1jZW50ZXItcmlnaHR7dG9wOjUwJTtyaWdodDowOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVkoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9te2JvdHRvbTowO2xlZnQ6NTAlOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSk7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTUwJSl9Ym9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLWxlZnQsYm9keS5zd2FsMi1uby1iYWNrZHJvcCAuc3dhbDItc2hvd24uc3dhbDItYm90dG9tLXN0YXJ0e2JvdHRvbTowO2xlZnQ6MH1ib2R5LnN3YWwyLW5vLWJhY2tkcm9wIC5zd2FsMi1zaG93bi5zd2FsMi1ib3R0b20tZW5kLGJvZHkuc3dhbDItbm8tYmFja2Ryb3AgLnN3YWwyLXNob3duLnN3YWwyLWJvdHRvbS1yaWdodHtyaWdodDowO2JvdHRvbTowfS5zd2FsMi1jb250YWluZXJ7ZGlzcGxheTpmbGV4O3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTA2MDt0b3A6MDtyaWdodDowO2JvdHRvbTowO2xlZnQ6MDtmbGV4LWRpcmVjdGlvbjpyb3c7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpjZW50ZXI7cGFkZGluZzouNjI1ZW07b3ZlcmZsb3cteDpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcHthbGlnbi1pdGVtczpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItdG9wLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3Atc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydH0uc3dhbDItY29udGFpbmVyLnN3YWwyLXRvcC1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi10b3AtcmlnaHR7YWxpZ24taXRlbXM6ZmxleC1zdGFydDtqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXJ7YWxpZ24taXRlbXM6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1jZW50ZXItc3RhcnR7YWxpZ24taXRlbXM6Y2VudGVyO2p1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0fS5zd2FsMi1jb250YWluZXIuc3dhbDItY2VudGVyLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWNlbnRlci1yaWdodHthbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9te2FsaWduLWl0ZW1zOmZsZXgtZW5kfS5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tc3RhcnR7YWxpZ24taXRlbXM6ZmxleC1lbmQ7anVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20tZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0e2FsaWduLWl0ZW1zOmZsZXgtZW5kO2p1c3RpZnktY29udGVudDpmbGV4LWVuZH0uc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1lbmQ+OmZpcnN0LWNoaWxkLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLWxlZnQ+OmZpcnN0LWNoaWxkLC5zd2FsMi1jb250YWluZXIuc3dhbDItYm90dG9tLXJpZ2h0PjpmaXJzdC1jaGlsZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWJvdHRvbS1zdGFydD46Zmlyc3QtY2hpbGQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ib3R0b20+OmZpcnN0LWNoaWxke21hcmdpbi10b3A6YXV0b30uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctZnVsbHNjcmVlbj4uc3dhbDItbW9kYWx7ZGlzcGxheTpmbGV4IWltcG9ydGFudDtmbGV4OjE7YWxpZ24tc2VsZjpzdHJldGNoO2p1c3RpZnktY29udGVudDpjZW50ZXJ9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LXJvdz4uc3dhbDItbW9kYWx7ZGlzcGxheTpmbGV4IWltcG9ydGFudDtmbGV4OjE7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1ue2ZsZXg6MTtmbGV4LWRpcmVjdGlvbjpjb2x1bW59LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20sLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXIsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3B7YWxpZ24taXRlbXM6Y2VudGVyfS5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLWxlZnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tc3RhcnQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1jZW50ZXItbGVmdCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1zdGFydCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1sZWZ0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItdG9wLXN0YXJ0e2FsaWduLWl0ZW1zOmZsZXgtc3RhcnR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi1ib3R0b20tZW5kLC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItYm90dG9tLXJpZ2h0LC5zd2FsMi1jb250YWluZXIuc3dhbDItZ3Jvdy1jb2x1bW4uc3dhbDItY2VudGVyLWVuZCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLWNlbnRlci1yaWdodCwuc3dhbDItY29udGFpbmVyLnN3YWwyLWdyb3ctY29sdW1uLnN3YWwyLXRvcC1lbmQsLnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbi5zd2FsMi10b3AtcmlnaHR7YWxpZ24taXRlbXM6ZmxleC1lbmR9LnN3YWwyLWNvbnRhaW5lci5zd2FsMi1ncm93LWNvbHVtbj4uc3dhbDItbW9kYWx7ZGlzcGxheTpmbGV4IWltcG9ydGFudDtmbGV4OjE7YWxpZ24tY29udGVudDpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn0uc3dhbDItY29udGFpbmVyOm5vdCguc3dhbDItdG9wKTpub3QoLnN3YWwyLXRvcC1zdGFydCk6bm90KC5zd2FsMi10b3AtZW5kKTpub3QoLnN3YWwyLXRvcC1sZWZ0KTpub3QoLnN3YWwyLXRvcC1yaWdodCk6bm90KC5zd2FsMi1jZW50ZXItc3RhcnQpOm5vdCguc3dhbDItY2VudGVyLWVuZCk6bm90KC5zd2FsMi1jZW50ZXItbGVmdCk6bm90KC5zd2FsMi1jZW50ZXItcmlnaHQpOm5vdCguc3dhbDItYm90dG9tKTpub3QoLnN3YWwyLWJvdHRvbS1zdGFydCk6bm90KC5zd2FsMi1ib3R0b20tZW5kKTpub3QoLnN3YWwyLWJvdHRvbS1sZWZ0KTpub3QoLnN3YWwyLWJvdHRvbS1yaWdodCk6bm90KC5zd2FsMi1ncm93LWZ1bGxzY3JlZW4pPi5zd2FsMi1tb2RhbHttYXJnaW46YXV0b31AbWVkaWEgYWxsIGFuZCAoLW1zLWhpZ2gtY29udHJhc3Q6bm9uZSksKC1tcy1oaWdoLWNvbnRyYXN0OmFjdGl2ZSl7LnN3YWwyLWNvbnRhaW5lciAuc3dhbDItbW9kYWx7bWFyZ2luOjAhaW1wb3J0YW50fX0uc3dhbDItY29udGFpbmVyLnN3YWwyLWZhZGV7dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4xc30uc3dhbDItY29udGFpbmVyLnN3YWwyLXNob3due2JhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuNCl9LnN3YWwyLXBvcHVwe2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZmxleC1kaXJlY3Rpb246Y29sdW1uO2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6MzJlbTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjEuMjVlbTtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOi4zMTI1ZW07YmFja2dyb3VuZDojZmZmO2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjFyZW19LnN3YWwyLXBvcHVwOmZvY3Vze291dGxpbmU6MH0uc3dhbDItcG9wdXAuc3dhbDItbG9hZGluZ3tvdmVyZmxvdy15OmhpZGRlbn0uc3dhbDItaGVhZGVye2Rpc3BsYXk6ZmxleDtmbGV4LWRpcmVjdGlvbjpjb2x1bW47YWxpZ24taXRlbXM6Y2VudGVyfS5zd2FsMi10aXRsZXtwb3NpdGlvbjpyZWxhdGl2ZTttYXgtd2lkdGg6MTAwJTttYXJnaW46MCAwIC40ZW07cGFkZGluZzowO2NvbG9yOiM1OTU5NTk7Zm9udC1zaXplOjEuODc1ZW07Zm9udC13ZWlnaHQ6NjAwO3RleHQtYWxpZ246Y2VudGVyO3RleHQtdHJhbnNmb3JtOm5vbmU7d29yZC13cmFwOmJyZWFrLXdvcmR9LnN3YWwyLWFjdGlvbnN7ei1pbmRleDoxO2ZsZXgtd3JhcDp3cmFwO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvIDB9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkW2Rpc2FibGVkXXtvcGFjaXR5Oi40fS5zd2FsMi1hY3Rpb25zOm5vdCguc3dhbDItbG9hZGluZykgLnN3YWwyLXN0eWxlZDpob3ZlcntiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4xKSxyZ2JhKDAsMCwwLC4xKSl9LnN3YWwyLWFjdGlvbnM6bm90KC5zd2FsMi1sb2FkaW5nKSAuc3dhbDItc3R5bGVkOmFjdGl2ZXtiYWNrZ3JvdW5kLWltYWdlOmxpbmVhci1ncmFkaWVudChyZ2JhKDAsMCwwLC4yKSxyZ2JhKDAsMCwwLC4yKSl9LnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyAuc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym94LXNpemluZzpib3JkZXItYm94O3dpZHRoOjIuNWVtO2hlaWdodDoyLjVlbTttYXJnaW46LjQ2ODc1ZW07cGFkZGluZzowOy13ZWJraXQtYW5pbWF0aW9uOnN3YWwyLXJvdGF0ZS1sb2FkaW5nIDEuNXMgbGluZWFyIDBzIGluZmluaXRlIG5vcm1hbDthbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2JvcmRlcjouMjVlbSBzb2xpZCB0cmFuc3BhcmVudDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50O2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2NvbG9yOnRyYW5zcGFyZW50O2N1cnNvcjpkZWZhdWx0Oy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uc3dhbDItYWN0aW9ucy5zd2FsMi1sb2FkaW5nIC5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2Vse21hcmdpbi1yaWdodDozMHB4O21hcmdpbi1sZWZ0OjMwcHh9LnN3YWwyLWFjdGlvbnMuc3dhbDItbG9hZGluZyA6bm90KC5zd2FsMi1zdHlsZWQpLnN3YWwyLWNvbmZpcm06OmFmdGVye2NvbnRlbnQ6XFxcIlxcXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDttYXJnaW4tbGVmdDo1cHg7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLWxvYWRpbmcgMS41cyBsaW5lYXIgMHMgaW5maW5pdGUgbm9ybWFsO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtbG9hZGluZyAxLjVzIGxpbmVhciAwcyBpbmZpbml0ZSBub3JtYWw7Ym9yZGVyOjNweCBzb2xpZCAjOTk5O2JvcmRlci1yYWRpdXM6NTAlO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudDtib3gtc2hhZG93OjFweCAxcHggMXB4ICNmZmZ9LnN3YWwyLXN0eWxlZHttYXJnaW46LjMxMjVlbTtwYWRkaW5nOi42MjVlbSAyZW07Ym94LXNoYWRvdzpub25lO2ZvbnQtd2VpZ2h0OjUwMH0uc3dhbDItc3R5bGVkOm5vdChbZGlzYWJsZWRdKXtjdXJzb3I6cG9pbnRlcn0uc3dhbDItc3R5bGVkLnN3YWwyLWNvbmZpcm17Ym9yZGVyOjA7Ym9yZGVyLXJhZGl1czouMjVlbTtiYWNrZ3JvdW5kOmluaXRpYWw7YmFja2dyb3VuZC1jb2xvcjojMzA4NWQ2O2NvbG9yOiNmZmY7Zm9udC1zaXplOjEuMDYyNWVtfS5zd2FsMi1zdHlsZWQuc3dhbDItY2FuY2Vse2JvcmRlcjowO2JvcmRlci1yYWRpdXM6LjI1ZW07YmFja2dyb3VuZDppbml0aWFsO2JhY2tncm91bmQtY29sb3I6I2FhYTtjb2xvcjojZmZmO2ZvbnQtc2l6ZToxLjA2MjVlbX0uc3dhbDItc3R5bGVkOmZvY3Vze291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAwIDJweCAjZmZmLDAgMCAwIDRweCByZ2JhKDUwLDEwMCwxNTAsLjQpfS5zd2FsMi1zdHlsZWQ6Oi1tb3otZm9jdXMtaW5uZXJ7Ym9yZGVyOjB9LnN3YWwyLWZvb3RlcntqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO21hcmdpbjoxLjI1ZW0gMCAwO3BhZGRpbmc6MWVtIDAgMDtib3JkZXItdG9wOjFweCBzb2xpZCAjZWVlO2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOjFlbX0uc3dhbDItaW1hZ2V7bWF4LXdpZHRoOjEwMCU7bWFyZ2luOjEuMjVlbSBhdXRvfS5zd2FsMi1jbG9zZXtwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOjA7cmlnaHQ6MDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3dpZHRoOjEuMmVtO2hlaWdodDoxLjJlbTtwYWRkaW5nOjA7b3ZlcmZsb3c6aGlkZGVuO3RyYW5zaXRpb246Y29sb3IgLjFzIGVhc2Utb3V0O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6MDtvdXRsaW5lOmluaXRpYWw7YmFja2dyb3VuZDowIDA7Y29sb3I6I2NjYztmb250LWZhbWlseTpzZXJpZjtmb250LXNpemU6Mi41ZW07bGluZS1oZWlnaHQ6MS4yO2N1cnNvcjpwb2ludGVyfS5zd2FsMi1jbG9zZTpob3Zlcnstd2Via2l0LXRyYW5zZm9ybTpub25lO3RyYW5zZm9ybTpub25lO2JhY2tncm91bmQ6MCAwO2NvbG9yOiNmMjc0NzR9LnN3YWwyLWNvbnRlbnR7ei1pbmRleDoxO2p1c3RpZnktY29udGVudDpjZW50ZXI7bWFyZ2luOjA7cGFkZGluZzowO2NvbG9yOiM1NDU0NTQ7Zm9udC1zaXplOjEuMTI1ZW07Zm9udC13ZWlnaHQ6MzAwO2xpbmUtaGVpZ2h0Om5vcm1hbDt3b3JkLXdyYXA6YnJlYWstd29yZH0jc3dhbDItY29udGVudHt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItY2hlY2tib3gsLnN3YWwyLWZpbGUsLnN3YWwyLWlucHV0LC5zd2FsMi1yYWRpbywuc3dhbDItc2VsZWN0LC5zd2FsMi10ZXh0YXJlYXttYXJnaW46MWVtIGF1dG99LnN3YWwyLWZpbGUsLnN3YWwyLWlucHV0LC5zd2FsMi10ZXh0YXJlYXtib3gtc2l6aW5nOmJvcmRlci1ib3g7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOmJvcmRlci1jb2xvciAuM3MsYm94LXNoYWRvdyAuM3M7Ym9yZGVyOjFweCBzb2xpZCAjZDlkOWQ5O2JvcmRlci1yYWRpdXM6LjE4NzVlbTtiYWNrZ3JvdW5kOmluaGVyaXQ7Ym94LXNoYWRvdzppbnNldCAwIDFweCAxcHggcmdiYSgwLDAsMCwuMDYpO2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWZpbGUuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItaW5wdXQuc3dhbDItaW5wdXRlcnJvciwuc3dhbDItdGV4dGFyZWEuc3dhbDItaW5wdXRlcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NCFpbXBvcnRhbnQ7Ym94LXNoYWRvdzowIDAgMnB4ICNmMjc0NzQhaW1wb3J0YW50fS5zd2FsMi1maWxlOmZvY3VzLC5zd2FsMi1pbnB1dDpmb2N1cywuc3dhbDItdGV4dGFyZWE6Zm9jdXN7Ym9yZGVyOjFweCBzb2xpZCAjYjRkYmVkO291dGxpbmU6MDtib3gtc2hhZG93OjAgMCAzcHggI2M0ZTZmNX0uc3dhbDItZmlsZTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6Oi1tb3otcGxhY2Vob2xkZXIsLnN3YWwyLWlucHV0OjotbW96LXBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6LW1vei1wbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1maWxlOi1tcy1pbnB1dC1wbGFjZWhvbGRlciwuc3dhbDItaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXJ7Y29sb3I6I2NjY30uc3dhbDItZmlsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLC5zd2FsMi10ZXh0YXJlYTo6LW1zLWlucHV0LXBsYWNlaG9sZGVye2NvbG9yOiNjY2N9LnN3YWwyLWZpbGU6OnBsYWNlaG9sZGVyLC5zd2FsMi1pbnB1dDo6cGxhY2Vob2xkZXIsLnN3YWwyLXRleHRhcmVhOjpwbGFjZWhvbGRlcntjb2xvcjojY2NjfS5zd2FsMi1yYW5nZXttYXJnaW46MWVtIGF1dG87YmFja2dyb3VuZDppbmhlcml0fS5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDo4MCV9LnN3YWwyLXJhbmdlIG91dHB1dHt3aWR0aDoyMCU7Y29sb3I6aW5oZXJpdDtmb250LXdlaWdodDo2MDA7dGV4dC1hbGlnbjpjZW50ZXJ9LnN3YWwyLXJhbmdlIGlucHV0LC5zd2FsMi1yYW5nZSBvdXRwdXR7aGVpZ2h0OjIuNjI1ZW07cGFkZGluZzowO2ZvbnQtc2l6ZToxLjEyNWVtO2xpbmUtaGVpZ2h0OjIuNjI1ZW19LnN3YWwyLWlucHV0e2hlaWdodDoyLjYyNWVtO3BhZGRpbmc6MCAuNzVlbX0uc3dhbDItaW5wdXRbdHlwZT1udW1iZXJde21heC13aWR0aDoxMGVtfS5zd2FsMi1maWxle2JhY2tncm91bmQ6aW5oZXJpdDtmb250LXNpemU6MS4xMjVlbX0uc3dhbDItdGV4dGFyZWF7aGVpZ2h0OjYuNzVlbTtwYWRkaW5nOi43NWVtfS5zd2FsMi1zZWxlY3R7bWluLXdpZHRoOjUwJTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOi4zNzVlbSAuNjI1ZW07YmFja2dyb3VuZDppbmhlcml0O2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWNoZWNrYm94LC5zd2FsMi1yYWRpb3thbGlnbi1pdGVtczpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcjtiYWNrZ3JvdW5kOmluaGVyaXQ7Y29sb3I6aW5oZXJpdH0uc3dhbDItY2hlY2tib3ggbGFiZWwsLnN3YWwyLXJhZGlvIGxhYmVse21hcmdpbjowIC42ZW07Zm9udC1zaXplOjEuMTI1ZW19LnN3YWwyLWNoZWNrYm94IGlucHV0LC5zd2FsMi1yYWRpbyBpbnB1dHttYXJnaW46MCAuNGVtfS5zd2FsMi12YWxpZGF0aW9uLW1lc3NhZ2V7ZGlzcGxheTpub25lO2FsaWduLWl0ZW1zOmNlbnRlcjtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO3BhZGRpbmc6LjYyNWVtO292ZXJmbG93OmhpZGRlbjtiYWNrZ3JvdW5kOiNmMGYwZjA7Y29sb3I6IzY2Njtmb250LXNpemU6MWVtO2ZvbnQtd2VpZ2h0OjMwMH0uc3dhbDItdmFsaWRhdGlvbi1tZXNzYWdlOjpiZWZvcmV7Y29udGVudDpcXFwiIVxcXCI7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2lkdGg6MS41ZW07bWluLXdpZHRoOjEuNWVtO2hlaWdodDoxLjVlbTttYXJnaW46MCAuNjI1ZW07em9vbTpub3JtYWw7Ym9yZGVyLXJhZGl1czo1MCU7YmFja2dyb3VuZC1jb2xvcjojZjI3NDc0O2NvbG9yOiNmZmY7Zm9udC13ZWlnaHQ6NjAwO2xpbmUtaGVpZ2h0OjEuNWVtO3RleHQtYWxpZ246Y2VudGVyfUBzdXBwb3J0cyAoLW1zLWFjY2VsZXJhdG9yOnRydWUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QG1lZGlhIGFsbCBhbmQgKC1tcy1oaWdoLWNvbnRyYXN0Om5vbmUpLCgtbXMtaGlnaC1jb250cmFzdDphY3RpdmUpey5zd2FsMi1yYW5nZSBpbnB1dHt3aWR0aDoxMDAlIWltcG9ydGFudH0uc3dhbDItcmFuZ2Ugb3V0cHV0e2Rpc3BsYXk6bm9uZX19QC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpey5zd2FsMi1jbG9zZTpmb2N1c3tvdXRsaW5lOjJweCBzb2xpZCByZ2JhKDUwLDEwMCwxNTAsLjQpfX0uc3dhbDItaWNvbntwb3NpdGlvbjpyZWxhdGl2ZTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2p1c3RpZnktY29udGVudDpjZW50ZXI7d2lkdGg6NWVtO2hlaWdodDo1ZW07bWFyZ2luOjEuMjVlbSBhdXRvIDEuODc1ZW07em9vbTpub3JtYWw7Ym9yZGVyOi4yNWVtIHNvbGlkIHRyYW5zcGFyZW50O2JvcmRlci1yYWRpdXM6NTAlO2xpbmUtaGVpZ2h0OjVlbTtjdXJzb3I6ZGVmYXVsdDstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmV9LnN3YWwyLWljb246OmJlZm9yZXtkaXNwbGF5OmZsZXg7YWxpZ24taXRlbXM6Y2VudGVyO2hlaWdodDo5MiU7Zm9udC1zaXplOjMuNzVlbX0uc3dhbDItaWNvbi5zd2FsMi1lcnJvcntib3JkZXItY29sb3I6I2YyNzQ3NH0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciAuc3dhbDIteC1tYXJre3Bvc2l0aW9uOnJlbGF0aXZlO2ZsZXgtZ3JvdzoxfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVde2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246YWJzb2x1dGU7dG9wOjIuMzEyNWVtO3dpZHRoOjIuOTM3NWVtO2hlaWdodDouMzEyNWVtO2JvcmRlci1yYWRpdXM6LjEyNWVtO2JhY2tncm91bmQtY29sb3I6I2YyNzQ3NH0uc3dhbDItaWNvbi5zd2FsMi1lcnJvciBbY2xhc3NePXN3YWwyLXgtbWFyay1saW5lXVtjbGFzcyQ9bGVmdF17bGVmdDoxLjA2MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpfS5zd2FsMi1pY29uLnN3YWwyLWVycm9yIFtjbGFzc149c3dhbDIteC1tYXJrLWxpbmVdW2NsYXNzJD1yaWdodF17cmlnaHQ6MWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKX0uc3dhbDItaWNvbi5zd2FsMi13YXJuaW5ne2JvcmRlci1jb2xvcjojZmFjZWE4O2NvbG9yOiNmOGJiODZ9LnN3YWwyLWljb24uc3dhbDItd2FybmluZzo6YmVmb3Jle2NvbnRlbnQ6XFxcIiFcXFwifS5zd2FsMi1pY29uLnN3YWwyLWluZm97Ym9yZGVyLWNvbG9yOiM5ZGUwZjY7Y29sb3I6IzNmYzNlZX0uc3dhbDItaWNvbi5zd2FsMi1pbmZvOjpiZWZvcmV7Y29udGVudDpcXFwiaVxcXCJ9LnN3YWwyLWljb24uc3dhbDItcXVlc3Rpb257Ym9yZGVyLWNvbG9yOiNjOWRhZTE7Y29sb3I6Izg3YWRiZH0uc3dhbDItaWNvbi5zd2FsMi1xdWVzdGlvbjo6YmVmb3Jle2NvbnRlbnQ6XFxcIj9cXFwifS5zd2FsMi1pY29uLnN3YWwyLXF1ZXN0aW9uLnN3YWwyLWFyYWJpYy1xdWVzdGlvbi1tYXJrOjpiZWZvcmV7Y29udGVudDpcXFwi2J9cXFwifS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3N7Ym9yZGVyLWNvbG9yOiNhNWRjODZ9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtY2lyY3VsYXItbGluZV17cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6My43NWVtO2hlaWdodDo3LjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO3RyYW5zZm9ybTpyb3RhdGUoNDVkZWcpO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmVdW2NsYXNzJD1sZWZ0XXt0b3A6LS40Mzc1ZW07bGVmdDotMi4wNjM1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjozLjc1ZW0gMy43NWVtO3RyYW5zZm9ybS1vcmlnaW46My43NWVtIDMuNzVlbTtib3JkZXItcmFkaXVzOjcuNWVtIDAgMCA3LjVlbX0uc3dhbDItaWNvbi5zd2FsMi1zdWNjZXNzIFtjbGFzc149c3dhbDItc3VjY2Vzcy1jaXJjdWxhci1saW5lXVtjbGFzcyQ9cmlnaHRde3RvcDotLjY4NzVlbTtsZWZ0OjEuODc1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpOy13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjowIDMuNzVlbTt0cmFuc2Zvcm0tb3JpZ2luOjAgMy43NWVtO2JvcmRlci1yYWRpdXM6MCA3LjVlbSA3LjVlbSAwfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtcmluZ3twb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7dG9wOi0uMjVlbTtsZWZ0Oi0uMjVlbTtib3gtc2l6aW5nOmNvbnRlbnQtYm94O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOi4yNWVtIHNvbGlkIHJnYmEoMTY1LDIyMCwxMzQsLjMpO2JvcmRlci1yYWRpdXM6NTAlfS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgLnN3YWwyLXN1Y2Nlc3MtZml4e3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTt0b3A6LjVlbTtsZWZ0OjEuNjI1ZW07d2lkdGg6LjQzNzVlbTtoZWlnaHQ6NS42MjVlbTstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoLTQ1ZGVnKTt0cmFuc2Zvcm06cm90YXRlKC00NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV17ZGlzcGxheTpibG9jaztwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjI7aGVpZ2h0Oi4zMTI1ZW07Ym9yZGVyLXJhZGl1czouMTI1ZW07YmFja2dyb3VuZC1jb2xvcjojYTVkYzg2fS5zd2FsMi1pY29uLnN3YWwyLXN1Y2Nlc3MgW2NsYXNzXj1zd2FsMi1zdWNjZXNzLWxpbmVdW2NsYXNzJD10aXBde3RvcDoyLjg3NWVtO2xlZnQ6Ljg3NWVtO3dpZHRoOjEuNTYyNWVtOy13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LnN3YWwyLWljb24uc3dhbDItc3VjY2VzcyBbY2xhc3NePXN3YWwyLXN1Y2Nlc3MtbGluZV1bY2xhc3MkPWxvbmdde3RvcDoyLjM3NWVtO3JpZ2h0Oi41ZW07d2lkdGg6Mi45Mzc1ZW07LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKC00NWRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgtNDVkZWcpfS5zd2FsMi1wcm9ncmVzcy1zdGVwc3thbGlnbi1pdGVtczpjZW50ZXI7bWFyZ2luOjAgMCAxLjI1ZW07cGFkZGluZzowO2JhY2tncm91bmQ6aW5oZXJpdDtmb250LXdlaWdodDo2MDB9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlfS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcHt6LWluZGV4OjIwO3dpZHRoOjJlbTtoZWlnaHQ6MmVtO2JvcmRlci1yYWRpdXM6MmVtO2JhY2tncm91bmQ6IzMwODVkNjtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjJlbTt0ZXh0LWFsaWduOmNlbnRlcn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB7YmFja2dyb3VuZDojMzA4NWQ2fS5zd2FsMi1wcm9ncmVzcy1zdGVwcyAuc3dhbDItcHJvZ3Jlc3Mtc3RlcC5zd2FsMi1hY3RpdmUtcHJvZ3Jlc3Mtc3RlcH4uc3dhbDItcHJvZ3Jlc3Mtc3RlcHtiYWNrZ3JvdW5kOiNhZGQ4ZTY7Y29sb3I6I2ZmZn0uc3dhbDItcHJvZ3Jlc3Mtc3RlcHMgLnN3YWwyLXByb2dyZXNzLXN0ZXAuc3dhbDItYWN0aXZlLXByb2dyZXNzLXN0ZXB+LnN3YWwyLXByb2dyZXNzLXN0ZXAtbGluZXtiYWNrZ3JvdW5kOiNhZGQ4ZTZ9LnN3YWwyLXByb2dyZXNzLXN0ZXBzIC5zd2FsMi1wcm9ncmVzcy1zdGVwLWxpbmV7ei1pbmRleDoxMDt3aWR0aDoyLjVlbTtoZWlnaHQ6LjRlbTttYXJnaW46MCAtMXB4O2JhY2tncm91bmQ6IzMwODVkNn1bY2xhc3NePXN3YWwyXXstd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6dHJhbnNwYXJlbnR9LnN3YWwyLXNob3d7LXdlYmtpdC1hbmltYXRpb246c3dhbDItc2hvdyAuM3M7YW5pbWF0aW9uOnN3YWwyLXNob3cgLjNzfS5zd2FsMi1zaG93LnN3YWwyLW5vYW5pbWF0aW9uey13ZWJraXQtYW5pbWF0aW9uOm5vbmU7YW5pbWF0aW9uOm5vbmV9LnN3YWwyLWhpZGV7LXdlYmtpdC1hbmltYXRpb246c3dhbDItaGlkZSAuMTVzIGZvcndhcmRzO2FuaW1hdGlvbjpzd2FsMi1oaWRlIC4xNXMgZm9yd2FyZHN9LnN3YWwyLWhpZGUuc3dhbDItbm9hbmltYXRpb257LXdlYmtpdC1hbmltYXRpb246bm9uZTthbmltYXRpb246bm9uZX0uc3dhbDItcnRsIC5zd2FsMi1jbG9zZXtyaWdodDphdXRvO2xlZnQ6MH0uc3dhbDItYW5pbWF0ZS1zdWNjZXNzLWljb24gLnN3YWwyLXN1Y2Nlc3MtbGluZS10aXB7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtdGlwIC43NXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1saW5lLXRpcCAuNzVzfS5zd2FsMi1hbmltYXRlLXN1Y2Nlc3MtaWNvbiAuc3dhbDItc3VjY2Vzcy1saW5lLWxvbmd7LXdlYmtpdC1hbmltYXRpb246c3dhbDItYW5pbWF0ZS1zdWNjZXNzLWxpbmUtbG9uZyAuNzVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLXN1Y2Nlc3MtbGluZS1sb25nIC43NXN9LnN3YWwyLWFuaW1hdGUtc3VjY2Vzcy1pY29uIC5zd2FsMi1zdWNjZXNzLWNpcmN1bGFyLWxpbmUtcmlnaHR7LXdlYmtpdC1hbmltYXRpb246c3dhbDItcm90YXRlLXN1Y2Nlc3MtY2lyY3VsYXItbGluZSA0LjI1cyBlYXNlLWluO2FuaW1hdGlvbjpzd2FsMi1yb3RhdGUtc3VjY2Vzcy1jaXJjdWxhci1saW5lIDQuMjVzIGVhc2UtaW59LnN3YWwyLWFuaW1hdGUtZXJyb3ItaWNvbnstd2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzO2FuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLWljb24gLjVzfS5zd2FsMi1hbmltYXRlLWVycm9yLWljb24gLnN3YWwyLXgtbWFya3std2Via2l0LWFuaW1hdGlvbjpzd2FsMi1hbmltYXRlLWVycm9yLXgtbWFyayAuNXM7YW5pbWF0aW9uOnN3YWwyLWFuaW1hdGUtZXJyb3IteC1tYXJrIC41c31ALXdlYmtpdC1rZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBrZXlmcmFtZXMgc3dhbDItcm90YXRlLWxvYWRpbmd7MCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMCl9MTAwJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMzYwZGVnKTt0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyl9fUBtZWRpYSBwcmludHtib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pe292ZXJmbG93LXk6c2Nyb2xsIWltcG9ydGFudH1ib2R5LnN3YWwyLXNob3duOm5vdCguc3dhbDItbm8tYmFja2Ryb3ApOm5vdCguc3dhbDItdG9hc3Qtc2hvd24pPlthcmlhLWhpZGRlbj10cnVlXXtkaXNwbGF5Om5vbmV9Ym9keS5zd2FsMi1zaG93bjpub3QoLnN3YWwyLW5vLWJhY2tkcm9wKTpub3QoLnN3YWwyLXRvYXN0LXNob3duKSAuc3dhbDItY29udGFpbmVye3Bvc2l0aW9uOnN0YXRpYyFpbXBvcnRhbnR9fVwiKTsiLCIvKlxuICogVGhpcyBmaWxlIGlzIHBhcnQgb2YgY29uNGdpcyxcbiAqIHRoZSBnaXMta2l0IGZvciBDb250YW8gQ01TLlxuICpcbiAqIEBwYWNrYWdlICAgIGNvbjRnaXNcbiAqIEB2ZXJzaW9uICAgIDZcbiAqIEBhdXRob3IgICAgIGNvbjRnaXMgY29udHJpYnV0b3JzIChzZWUgXCJhdXRob3JzLnR4dFwiKVxuICogQGxpY2Vuc2UgICAgTEdQTC0zLjAtb3ItbGF0ZXJcbiAqIEBjb3B5cmlnaHQgIEvDvHN0ZW5zY2htaWVkZSBHbWJIIFNvZnR3YXJlICYgRGVzaWduXG4gKiBAbGluayAgICAgICBodHRwczovL3d3dy5jb240Z2lzLm9yZ1xuICovXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogIGNvbnN0YW50c1xuICovXG5leHBvcnQgIHZhciB0YXhpQ29uc3RhbnRzR2VybWFuID0ge1xuICAgIERVTU1ZX0lOUFVUOiAnUExaLCBPcnQgb2RlciBTdHJhw59lIGVpbmdlYmVuLi4uJyxcbiAgICBIRUFETElORV9ESVNUOiAnRW50ZmVybnVuZycsXG4gICAgSEVBRExJTkVfVElNRTogJ0RhdWVyJyxcbiAgICBIRUFETElORV9CQVNFX1BSSUNFOiAnR3J1bmRwcmVpcycsXG4gICAgSEVBRExJTkVfRElTVF9QUklDRTogJ1ByZWlzIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6ICdQcmVpcyAvIG0nLFxuICAgIEVSUk9SX09VVF9PRl9CT1VORFM6ICdBZHJlc3NlIGF1w59lcmhhbGIgZGVzIFRhcmlmZ2ViaWV0cycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkcmVzc2UgbmljaHQgZ2VmdW5kZW4nLFxuICAgIEVSUk9SOidGZWhsZXInLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdGF4aUNvbnN0YW50c0VuZ2xpc2ggPSB7XG4gICAgRFVNTVlfSU5QVVQ6ICdFbnRlciBwb3N0YWwgY29kZSwgY2l0eSBvciBzdHJlZXQuLi4nLFxuICAgIEhFQURMSU5FX0RJU1Q6ICdEaXN0YW5jZScsXG4gICAgSEVBRExJTkVfVElNRTogJ1RpbWUnLFxuICAgIEhFQURMSU5FX0JBU0VfUFJJQ0U6J0Jhc2UgcHJpY2UnLFxuICAgIEhFQURMSU5FX0RJU1RfUFJJQ0U6J1ByaWNlIC8ga20nLFxuICAgIEhFQURMSU5FX1RJTUVfUFJJQ0U6J1ByaWNlIC8gbScsXG4gICAgRVJST1JfT1VUX09GX0JPVU5EUzogJ0FkZHJlc3MgaXMgb3V0IG9mIGJvdW5kcycsXG4gICAgRVJST1JfRkFMU0VfQUREUkVTUzogJ0FkZHJlc3Mgbm90IGZvdW5kJyxcbiAgICBFUlJPUjonRXJyb3InLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiLypcbiAqIFRoaXMgZmlsZSBpcyBwYXJ0IG9mIGNvbjRnaXMsXG4gKiB0aGUgZ2lzLWtpdCBmb3IgQ29udGFvIENNUy5cbiAqXG4gKiBAcGFja2FnZSAgICBjb240Z2lzXG4gKiBAdmVyc2lvbiAgICA2XG4gKiBAYXV0aG9yICAgICBjb240Z2lzIGNvbnRyaWJ1dG9ycyAoc2VlIFwiYXV0aG9ycy50eHRcIilcbiAqIEBsaWNlbnNlICAgIExHUEwtMy4wLW9yLWxhdGVyXG4gKiBAY29weXJpZ2h0ICBLw7xzdGVuc2NobWllZGUgR21iSCBTb2Z0d2FyZSAmIERlc2lnblxuICogQGxpbmsgICAgICAgaHR0cHM6Ly93d3cuY29uNGdpcy5vcmdcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqICBjb25zdGFudHNcbiAqL1xuZXhwb3J0ICB2YXIgdGF4aUNvbnN0YW50cyA9IHtcbiAgICBsb2w6ICdQTFosIE9ydCBvZGVyIFN0cmHDn2UgZWluZ2ViZW4uLi4nLFxuICAgIE5PTkU6ICcnIC8vIGxhc3QgbGluZVxufTsgLy8gZW5kIG9mIFwiY3NzIGNvbnN0YW50c1wiIC0tLVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5pbXBvcnQge3RheGlDb25zdGFudHNFbmdsaXNofSBmcm9tIFwiLi90YXhpLWNvbnN0YW50LWkxOG4tZW5cIjtcbmltcG9ydCB7dGF4aUNvbnN0YW50c0dlcm1hbn0gZnJvbSBcIi4vdGF4aS1jb25zdGFudC1pMThuLWRlXCI7XG5pbXBvcnQge3RheGlDb25zdGFudHN9IGZyb20gXCIuL3RheGktY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQge0FsZXJ0SGFuZGxlcn0gZnJvbSBcIi4vLi4vLi4vLi4vLi4vQ29yZUJ1bmRsZS9SZXNvdXJjZXMvcHVibGljL2pzL0FsZXJ0SGFuZGxlclwiO1xuXG5jb25zdCAkID0galF1ZXJ5O1xuY29uc3QgbGFuZ0NvbnN0YW50cyA9IHt9O1xudmFyIGFyckZyb21OYW1lcyA9IFtdO1xudmFyIGFyckZyb21Qb3NpdGlvbnMgPSBbXTtcbnZhciBhcnJUb05hbWVzID0gW107XG52YXIgYXJyVG9Qb3NpdGlvbnMgPSBbXTtcbnZhciB0YXhpRGF0YSA9IHtcbiAgICByb3V0ZUZyb206IHt9LFxuICAgIHJvdXRlVG86IHt9XG59O1xuXG5sZXQgcm91dGVGcm9tSW5wdXQgPSBudWxsO1xubGV0IHJvdXRlVG9JbnB1dCA9IG51bGw7XG5cbi8qKlxuICogU2F2ZXMgdGhlIHN0cmluZyBvZiB0aGUgc3RhcnQgYWRkcmVzcyB0byB0aGUgc2NyaXB0LXNjb3BlZCB2YXJpYWJsZVxuICogQHBhcmFtIGFkZHJlc3MgICAgIFN0cmluZyBmb3Igc3RhcnQgYWRkcmVzc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNldFJvdXRlRnJvbShhZGRyZXNzKSB7XG4gICAgdGF4aURhdGEucm91dGVGcm9tLmFkcmVzcyA9IGFkZHJlc3M7XG59XG5cbi8qKlxuICogU2F2ZXMgdGhlIHN0cmluZyBvZiB0aGUgZGVzdGluYXRpb24gYWRkcmVzcyB0byB0aGUgc2NyaXB0LXNjb3BlZCB2YXJpYWJsZVxuICogQHBhcmFtIGFkZHJlc3MgICAgIFN0cmluZyBmb3IgZGVzdGluYXRpb24gYWRkcmVzc1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNldFJvdXRlVG8oYWRkcmVzcykge1xuICAgIHRheGlEYXRhLnJvdXRlVG8uYWRyZXNzID0gYWRkcmVzcztcbn1cblxuLyoqXG4gKiBIYW5kbGVzIHRoZSBidXR0b24gcHJlc3MgZm9yIHN0YXJ0IGFuZCB0cmllcyB0byBjYWxjdWxhdGUgdGhlIGV4cGVuc2VzXG4gKiBAcGFyYW0gY29vcmRpbmF0ZXMgICAgIGNvb3JkaW5hdGVzIGZyb20gbmF2aWdhdG9yLmdlb2xvY2F0aW9uXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlUm91dGVGcm9tUG9zaXRpb24oY29vcmRpbmF0ZXMpIHtcbiAgICBoYW5kbGVQb3NpdGlvbihjb29yZGluYXRlcywgXCIucm91dGUtZnJvbVwiLCBcInJvdXRlRnJvbVwiKTtcbiAgICBjYWxjdWxhdGVFeHBlbnNlcygpO1xuXG59XG5cbi8qKlxuICogSGFuZGxlcyB0aGUgYnV0dG9uIHByZXNzIGZvciBkZXN0aW5hdGlvbiBhbmQgdHJpZXMgdG8gY2FsY3VsYXRlIHRoZSBleHBlbnNlc1xuICogQHBhcmFtIGNvb3JkaW5hdGVzICAgICBjb29yZGluYXRlcyBmcm9tIG5hdmlnYXRvci5nZW9sb2NhdGlvblxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVJvdXRlVG9Qb3NpdGlvbihjb29yZGluYXRlcykge1xuICAgIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBcIi5yb3V0ZS10b1wiLCBcInJvdXRlVG9cIik7XG4gICAgY2FsY3VsYXRlRXhwZW5zZXMoKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBhIGRpc3RhbmNlIGluIG1ldGVycyB0byBhIG1vcmUgcmVhZGFibGUgZm9ybWF0LlxuICogQHBhcmFtIGRpc3RhbmNlSW5NZXRlcnMgICAgIFRoZSBkaXN0YW5jZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9IdW1hbkRpc3RhbmNlKGRpc3RhbmNlSW5NZXRlcnMpIHtcblxuICAgIHZhciBkaXN0YW5jZSxcbiAgICAgICAgaHVtYW5EaXN0YW5jZTtcblxuICAgIGRpc3RhbmNlID0gcGFyc2VJbnQoZGlzdGFuY2VJbk1ldGVycywgMTApO1xuICAgIGRpc3RhbmNlID0gZGlzdGFuY2UgLyAxMDAwO1xuXG4gICAgaWYgKGRpc3RhbmNlID49IDEwMCkge1xuICAgICAgICBodW1hbkRpc3RhbmNlID0gZGlzdGFuY2UudG9GaXhlZCgwKSArICcmbmJzcDsnICsgJ2ttJztcbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlID49IDEwKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDEpICsgJyZuYnNwOycgKyAna20nO1xuICAgIH0gZWxzZSBpZiAoZGlzdGFuY2UgPj0gMC4xKSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSBkaXN0YW5jZS50b0ZpeGVkKDIpICsgJyZuYnNwOycgKyAna20nO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGh1bWFuRGlzdGFuY2UgPSAoZGlzdGFuY2UgKiAxMDAwKS50b0ZpeGVkKDApICsgJyZuYnNwOycgKyAnbSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFuRGlzdGFuY2U7XG59XG5cbi8qKlxuICogQ29udmVydHMgYSB0aW1lIGluIHNlY29uZHMgdG8gYSBtb3JlIHJlYWRhYmxlIGZvcm1hdC5cbiAqIEBwYXJhbSB0aW1lSW5TZWNvbmRzICAgICBUaGUgdGltZSB0byBjb252ZXJ0LlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gdG9IdW1hblRpbWUodGltZUluU2Vjb25kcykge1xuXG4gICAgdmFyIHNlY29uZHMsXG4gICAgICAgIG1pbnV0ZXMsXG4gICAgICAgIGhvdXJzLFxuICAgICAgICBodW1hblRpbWU7XG5cbiAgICBzZWNvbmRzID0gcGFyc2VJbnQodGltZUluU2Vjb25kcywgMTApO1xuICAgIG1pbnV0ZXMgPSBwYXJzZUludChzZWNvbmRzIC8gNjAsIDEwKTtcbiAgICBzZWNvbmRzID0gc2Vjb25kcyAlIDYwO1xuXG4gICAgaG91cnMgPSBwYXJzZUludChtaW51dGVzIC8gNjAsIDEwKTtcbiAgICBtaW51dGVzID0gbWludXRlcyAlIDYwO1xuXG4gICAgaWYgKGhvdXJzID09PSAwICYmIG1pbnV0ZXMgPT09IDApIHtcbiAgICAgICAgaHVtYW5UaW1lID0gc2Vjb25kcyArICcmbmJzcDsnICsgJ3MnO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgICAgaHVtYW5UaW1lID0gbWludXRlcyArICcmbmJzcDsnICsgJ21pbic7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaHVtYW5UaW1lID0gaG91cnMgKyAnJm5ic3A7JyArICdoJyArICcmbmJzcDsnICsgbWludXRlcyArICcmbmJzcDsnICsgJ21pbic7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh1bWFuVGltZTtcbn1cblxuXG5cbi8qKlxuICogY2FsbHMgcmV2ZXJzZS1nZW9zZWFyY2ggdG8gc2V0IGFuIGFkZHJlc3Mtc3RyaW5nIGZvciBjb29yZGluYXRlcyBhbmQgc2V0IGl0IHRvIHRoZSBzY3JpcHQtc2NvcGVkIHZhcmlhYmxlXG4gKiBAcGFyYW0gY29vcmRpbmF0ZXMgICAgICAgY29vcmRpbmF0ZXMgZnJvbSBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cbiAqIEBwYXJhbSBjc3NpZCAgICAgICAgICAgICBjc3MtY2xhc3MgdG8gc2V0IHJlc3BvbnNlLXByb3BlcnR5IHRvXG4gKiBAcGFyYW0gcHJvcE5hbWUgICAgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIGhhbmRsZVBvc2l0aW9uKGNvb3JkaW5hdGVzLCBjc3NJZCwgcHJvcE5hbWUpIHtcbiAgICBsZXQgY29vcmRzID0gY29vcmRpbmF0ZXMuY29vcmRzO1xuICAgIC8vIFRPRE8gYXVzIG1vZHVsIGhpZXIgcmVpbiBnZWJlblxuICAgIGlmICh3aW5kb3cuYkJveCAmJiB3aW5kb3cuYkJveFswXSkge1xuICAgICAgICBpZiAod2luZG93LmJCb3hbMF0gPCBjb29yZHMubG9uZ2l0dWRlICYmIGNvb3Jkcy5sb25naXR1ZGUgPCB3aW5kb3cuYkJveFsyXSAmJiB3aW5kb3cuYkJveFsxXSA8IGNvb3Jkcy5sYXRpdHVkZSAmJiBjb29yZHMubGF0aXR1ZGUgPCB3aW5kb3cuYkJveFszXSkge1xuICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZUZyb20ubG9jID0gW2Nvb3Jkcy5sYXRpdHVkZSwgY29vcmRzLmxvbmdpdHVkZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZVRvLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArICcvcmV2ZXJzZS5waHA/a2V5PScrIHdpbmRvdy5rZXlSZXZlcnNlKycmZm9ybWF0PWpzb24mbGF0PScgKyBjb29yZHMubGF0aXR1ZGUgKyAnJmxvbj0nICsgY29vcmRzLmxvbmdpdHVkZTtcbiAgICAgICAgICAgICQuYWpheCh7dXJsOiB1cmx9KS5kb25lKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4gKyBcIiBcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlciArIFwiLCBcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5hZGRyZXNzLnBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MucGF0aCArIFwiIFwiO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLmhvdXNlX251bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBcIiwgXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wb3N0Y29kZSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wb3N0Y29kZSArIFwiIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MudG93bjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJChjc3NJZCkudmFsKGFkZHJlc3MpO1xuICAgICAgICAgICAgICAgIHRheGlEYXRhW3Byb3BOYW1lXS5hZHJlc3MgPSBhZGRyZXNzO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBAVG9EbyBPdXRvZkJvdW5kc1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtjb29yZHMubGF0aXR1ZGUsIGNvb3Jkcy5sb25naXR1ZGVdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbY29vcmRzLmxhdGl0dWRlLCBjb29yZHMubG9uZ2l0dWRlXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdXJsID0gd2luZG93LnByb3h5VXJsICsgJy9yZXZlcnNlLnBocD9rZXk9Jysgd2luZG93LmtleVJldmVyc2UrJyZmb3JtYXQ9anNvbiZsYXQ9JyArIGNvb3Jkcy5sYXRpdHVkZSArICcmbG9uPScgKyBjb29yZHMubG9uZ2l0dWRlO1xuICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBsZXQgYWRkcmVzcyA9IFwiXCI7XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnBlZGVzdHJpYW4pIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wZWRlc3RyaWFuICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyICsgXCIsIFwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5hZGRyZXNzLnBhdGgpIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy5wYXRoICsgXCIgXCI7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5ob3VzZV9udW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzcyArPSBkYXRhLmFkZHJlc3MuaG91c2VfbnVtYmVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhZGRyZXNzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IFwiLCBcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGRhdGEuYWRkcmVzcy5wb3N0Y29kZSkge1xuICAgICAgICAgICAgICAgIGFkZHJlc3MgKz0gZGF0YS5hZGRyZXNzLnBvc3Rjb2RlICsgXCIgXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5hZGRyZXNzLnRvd24pIHtcbiAgICAgICAgICAgICAgICBhZGRyZXNzICs9IGRhdGEuYWRkcmVzcy50b3duO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJChjc3NJZCkudmFsKGFkZHJlc3MpO1xuICAgICAgICAgICAgdGF4aURhdGFbcHJvcE5hbWVdLmFkcmVzcyA9IGFkZHJlc3M7XG4gICAgICAgIH0pO1xuICAgIH1cblxufVxuXG4vKipcbiAqIGNhbGxzIGdlb3NlYXJjaCB0byBzZXQgYXV0b2NvbXBsZXRlIHN1Z2dlc3Rpb25zIGZvciBhbiBhZGRyZXNzLXN0cmluZ1xuICogQHBhcmFtIGlucHV0ICAgICAgIGFkZHJlc3Mtc3RyaW5nIGZyb20gaW5wdXRcbiAqIEBwYXJhbSBjc3NpZCAgICAgICBjc3MtY2xhc3MgdG8gc2V0IHJlc3BvbnNlLXByb3BlcnR5IHRvXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gaGFuZGxlQWRyZXNzKGlucHV0LCBjc3NJZCkge1xuICAgIGxldCB1cmwgPSB3aW5kb3cucHJveHlVcmwgKyBcInNlYXJjaC5waHA/Zm9ybWF0PWpzb24ma2V5PVwiICsgd2luZG93LmtleUZvcndhcmQgKyBcIiZxPVwiICsgaW5wdXQ7XG4gICAgJC5hamF4KHt1cmw6IHVybH0pLmRvbmUoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgIGlmIChkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAgICAgLy8gJChjc3NJZCkudmFsKGRhdGFbMF0uZGlzcGxheV9uYW1lKTtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5iQm94ICYmIHdpbmRvdy5iQm94WzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvdy5iQm94WzBdIDwgZGF0YVtpXS5sb24gJiYgZGF0YVtpXS5sb24gPCB3aW5kb3cuYkJveFsyXSAmJiB3aW5kb3cuYkJveFsxXSA8IGRhdGFbaV0ubGF0ICYmIGRhdGFbaV0ubGF0IDwgd2luZG93LmJCb3hbM10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS1mcm9tXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckZyb21OYW1lcy5wdXNoKGRhdGFbaV0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckZyb21Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJUb05hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyVG9Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vQFRvRG8gb3V0b2Zib3VuZHNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJGcm9tTmFtZXMucHVzaChkYXRhW2ldLmRpc3BsYXlfbmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyckZyb21Qb3NpdGlvbnMucHVzaChbZGF0YVtpXS5sYXQsIGRhdGFbaV0ubG9uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJUb05hbWVzLnB1c2goZGF0YVtpXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnJUb1Bvc2l0aW9ucy5wdXNoKFtkYXRhW2ldLmxhdCwgZGF0YVtpXS5sb25dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoY3NzSWQgPT09IFwiLnJvdXRlLWZyb21cIikge1xuICAgICAgICAgICAgICAgICAgICAkKGNzc0lkKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBhcnJGcm9tTmFtZXNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKGNzc0lkKS5hdXRvY29tcGxldGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlOiBhcnJUb05hbWVzXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuLyoqXG4gKiBjYWxscyByZXZlcnNlLWdlb3NlYXJjaCB0byBzZXQgY29vcmRpbmF0ZXMgZm9yIGFuIGFkZHJlc3Mtc3RyaW5nIGFuZCBzZXQgaXQgdG8gdGhlIHNjcmlwdC1zY29wZWQgdmFyaWFibGVcbiAqIEBwYXJhbSBpbnB1dCAgICAgICBhZGRyZXNzLXN0cmluZyBmcm9tIGlucHV0XG4gKiBAcGFyYW0gY3NzaWQgICAgICAgY3NzLWNsYXNzIHRvIHNldCByZXNwb25zZS1wcm9wZXJ0eSB0b1xuICogQHJldHVybnMge3ZvaWR9fVxuICovXG5mdW5jdGlvbiBzdWJtaXRTZWFyY2goaW5wdXQsIGNzc0lkKSB7XG4gICAgbGV0IHVybCA9IHdpbmRvdy5wcm94eVVybCArIFwic2VhcmNoLnBocD9mb3JtYXQ9anNvbiZrZXk9XCIgKyB3aW5kb3cua2V5Rm9yd2FyZCArIFwiJnE9XCIgKyAkKGlucHV0KS52YWwoKTtcbiAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGxldCBmYWxzZVJlc3BvbnNlID0gZmFsc2U7XG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cuYkJveCAmJiB3aW5kb3cuYkJveFswXSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuYkJveFswXSA8IGRhdGFbMF0ubG9uICYmIGRhdGFbMF0ubG9uIDwgd2luZG93LmJCb3hbMl0gJiYgd2luZG93LmJCb3hbMV0gPCBkYXRhWzBdLmxhdCAmJiBkYXRhWzBdLmxhdCA8IHdpbmRvdy5iQm94WzNdKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhWzBdICYmIGRhdGFbMF0uZGlzcGxheV9uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAkKGNzc0lkKS52YWwoZGF0YVswXS5kaXNwbGF5X25hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS10b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVUby5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBbZGF0YVswXS5sYXQsIGRhdGFbMF0ubG9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZhbHNlUmVzcG9uc2UgPSBsYW5nQ29uc3RhbnRzLkVSUk9SX09VVF9PRl9CT1VORFM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbMF0gJiYgZGF0YVswXS5kaXNwbGF5X25hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gJChjc3NJZCkudmFsKGRhdGFbMF0uZGlzcGxheV9uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNzc0lkID09PSBcIi5yb3V0ZS10b1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXhpRGF0YS5yb3V0ZVRvLmxvYyA9IFtkYXRhWzBdLmxhdCwgZGF0YVswXS5sb25dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGF4aURhdGEucm91dGVGcm9tLmxvYyA9IFtkYXRhWzBdLmxhdCwgZGF0YVswXS5sb25dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmYWxzZVJlc3BvbnNlID0gbGFuZ0NvbnN0YW50cy5FUlJPUl9GQUxTRV9BRERSRVNTO1xuICAgICAgICB9XG4gICAgICAgIGlmIChmYWxzZVJlc3BvbnNlKSB7XG4gICAgICAgICAgICBsZXQgYWxlcnRIYW5kbGVyID0gbmV3IEFsZXJ0SGFuZGxlcigpO1xuICAgICAgICAgICAgYWxlcnRIYW5kbGVyLnNob3dJbmZvRGlhbG9nKGxhbmdDb25zdGFudHMuRVJST1IsIGZhbHNlUmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgfSlcblxufVxuLyoqXG4gKiBjYWxscyB0YXJpZmZTZXJ2aWNlIHRvIGZldGNoIGluZm9ybWF0aW9ucyBhbmQgcHJpY2luZyBhYm91dCB0aGUgc2V0IHRhcmlmZnMgYW5kIHNob3dzIHRoZW1cbiAqIEByZXR1cm5zIHt2b2lkfX1cbiAqL1xuZnVuY3Rpb24gZmluZFRhcmlmZnMoKSB7XG4gICAgbGV0IHVybCA9IFwiY29uNGdpcy90YXJpZmZTZXJ2aWNlL1wiICsgd2luZG93LnNldHRpbmdJZCArIFwiL1wiO1xuICAgICQuYWpheCh7dXJsOnVybH0pXG4gICAgICAgIC5kb25lKGZ1bmN0aW9uKGRhdGEpe1xuICAgICAgICBsZXQgcGFyZW50ID0gJChcIi50YXJpZmYtb3V0cHV0XCIpO1xuICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgcGFyZW50LmNzcygnZGlzcGxheScsJ2dyaWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudC5jc3MoJ2Rpc3BsYXknLCdibG9jaycpO1xuICAgICAgICB9XG4gICAgICAgIGxldCByb3dDb3VudCA9IFwicm93LWV2ZW5cIjtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShpKSkge1xuICAgICAgICAgICAgICAgIGlmICh3aW5kb3cuZGlzcGxheUdyaWQgPT09IFwiMVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5pbm5lckhUTUwgPSBpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtTmFtZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1OYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1CYXNlUHJpY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5pbm5lckhUTUwgPSBkYXRhW2ldLmJhc2VQcmljZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbUJhc2VQcmljZS5jbGFzc05hbWUgPSBcImdyaWQtaXRlbSBcIiArIHJvd0NvdW50O1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYXBwZW5kKGl0ZW1CYXNlUHJpY2UpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbURpc3RQcmljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmlubmVySFRNTCA9IGRhdGFbaV0uZGlzdFByaWNlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtRGlzdFByaWNlLmNsYXNzTmFtZSA9IFwiZ3JpZC1pdGVtIFwiICsgcm93Q291bnQ7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoaXRlbURpc3RQcmljZSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtVGltZVByaWNlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuaW5uZXJIVE1MID0gZGF0YVtpXS50aW1lUHJpY2U7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1UaW1lUHJpY2UuY2xhc3NOYW1lID0gXCJncmlkLWl0ZW0gXCIgKyByb3dDb3VudDtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFwcGVuZChpdGVtVGltZVByaWNlKTtcbiAgICAgICAgICAgICAgICAgICAgcm93Q291bnQgPSByb3dDb3VudCA9PSBcInJvdy1ldmVuXCIgPyBcInJvdy11bmV2ZW5cIiA6IFwicm93LWV2ZW5cIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBlbGVtZW50Um93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFJvdy5pbm5lckhUTUwgPSBcIjx0aD5cIiArIGkgKyBcIjwvdGg+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5iYXNlUHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIisgZGF0YVtpXS5kaXN0UHJpY2UgKyBcIuKCrDwvdGQ+XCIgKyBcIjx0ZD5cIiArIGRhdGFbaV0udGltZVByaWNlICsgXCLigqw8L3RkPlwiXG4gICAgICAgICAgICAgICAgICAgIHBhcmVudC5hcHBlbmQoZWxlbWVudFJvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbn1cbmZ1bmN0aW9uIHNob3dBZHJlc3NFcnJvcihlcnJvclRleHQpIHtcbiAgICBsZXQgZXJyb3JEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAkKGVycm9yRGl2KS5hZGRDbGFzcygnY29udGVudEVycm9yJyk7XG4gICAgJChlcnJvckRpdikuYWRkQ2xhc3MoJ2NvbnRlbnRIZWFkbGluZScpO1xuXG4gICAgbGV0IGVycm9yTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGVycm9yTGFiZWwuaW5uZXJIVE1MID0gZXJyb3JUZXh0O1xuICAgIGVycm9yRGl2LmFwcGVuZENoaWxkKGVycm9yTGFiZWwpO1xuICAgIGxldCBidXR0b25DbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICQoYnV0dG9uQ2xvc2UpLmFkZENsYXNzKHRheGlDb25zdGFudHMuUE9QVVBfQ0xPU0UpO1xuICAgICQoYnV0dG9uQ2xvc2UpLmFkZENsYXNzKHRheGlDb25zdGFudHMuSUNPTik7XG4gICAgJChidXR0b25DbG9zZSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIClcbiAgICBlcnJvckRpdi5hcHBlbmRDaGlsZChidXR0b25DbG9zZSk7XG4gICAgcmV0dXJuIGVycm9yRGl2O1xufVxuXG4vKipcbiAqIENoZWNrcyB3ZXRoZXIgYWxsIHBhcmFtcyBmb3IgdGhlIGNhbGN1bGF0aW9uIG9mIGFuIGV4cGVuc2UgYXJlIHNldCBhbmQgY2FsbHMgdGhlIHNlcnZlciBhbmQgZGlzcGxheXMgdGhlIHJlcHNvbnNlXG4gKiBAcGFyYW1cbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5mdW5jdGlvbiBjYWxjdWxhdGVFeHBlbnNlcyAoKSB7XG4gICAgaWYgKHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgJiYgdGF4aURhdGEucm91dGVUby5sb2MpIHtcbiAgICAgICAgbGV0IHVybCA9IFwiY29uNGdpcy9leHBlbnNlU2VydmljZS9cIiArIHdpbmRvdy5zZXR0aW5nSWQgKyBcIi9cIiArIHRheGlEYXRhLnJvdXRlRnJvbS5sb2NbMF0gKyBcIixcIiArIHRheGlEYXRhLnJvdXRlRnJvbS5sb2NbMV0gKyBcIjtcIiArIHRheGlEYXRhLnJvdXRlVG8ubG9jWzBdICsgXCIsXCIgKyB0YXhpRGF0YS5yb3V0ZVRvLmxvY1sxXSArIFwiL1wiO1xuICAgICAgICAkLmFqYXgoe3VybDogdXJsfSkuZG9uZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBsZXQgdGFibGVOb2RlID0gJChcIi5yb3V0ZS1vdXRwdXRcIik7XG4gICAgICAgICAgICBpZiAod2luZG93LmRpc3BsYXlHcmlkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgIHRhYmxlTm9kZS5jc3MoXCJkaXNwbGF5XCIsIFwiZ3JpZFwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnJlc3BvbnNlLWhlYWRsaW5lXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQoXCIucmVzcG9uc2UtdmFsdWVcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudGltZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRpbWUgPSAkKFwiLnJlc3BvbnNlLXRpbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUaW1lLmh0bWwodG9IdW1hblRpbWUoZGF0YS50aW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnREaXN0YW5jZSA9ICQoXCIucmVzcG9uc2UtZGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGlzdGFuY2UgPSBkYXRhLmRpc3QgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZURpc3RhbmNlID0gcmVzcG9uc2VEaXN0YW5jZS5yZXBsYWNlKCcuJywnLicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VEaXN0YW5jZS5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50RGlzdGFuY2UuaHRtbChyZXNwb25zZURpc3RhbmNlLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwgKyAzKSArIFwiIGttXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaW5zZXJ0QWZ0ZXJIZWFkID0gJChcIi5oZWFkbGluZS10aW1lXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpbnNlcnRBZnRlclZhbCA9ICQoXCIucmVzcG9uc2UtdGltZVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgYXV0b0F1dG8gPSBcImF1dG8gYXV0byBcIjtcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRhcmlmZk5hbWUgaW4gZGF0YS50YXJpZmZzKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlTmFtZSA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICAgICAgICAgICAgICBub2RlTmFtZS5odG1sKHRhcmlmZk5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBub2RlTmFtZS5hZGRDbGFzcyhcInJlc3BvbnNlLWhlYWRsaW5lXCIpO1xuICAgICAgICAgICAgICAgICAgICBub2RlTmFtZS5hZGRDbGFzcyhcImdyaWQtaXRlbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZU5hbWUuaW5zZXJ0QWZ0ZXIoaW5zZXJ0QWZ0ZXJIZWFkKTtcbiAgICAgICAgICAgICAgICAgICAgaW5zZXJ0QWZ0ZXJIZWFkID0gbm9kZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRWxlbWVudCA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhLnRhcmlmZnNbdGFyaWZmTmFtZV0gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VFbGVtZW50Lmh0bWwocmVzcG9uc2VUYXJpZmYuc3Vic3RyaW5nKDAsIGluZGV4RGVjaW1hbCkgKyBcIiDigqxcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRWxlbWVudC5hZGRDbGFzcyhcInJlc3BvbnNlLXZhbHVlXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUVsZW1lbnQuYWRkQ2xhc3MoXCJncmlkLWl0ZW1cIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRWxlbWVudC5pbnNlcnRBZnRlcihpbnNlcnRBZnRlclZhbCk7XG4gICAgICAgICAgICAgICAgICAgIGluc2VydEFmdGVyVmFsID0gcmVzcG9uc2VFbGVtZW50O1xuICAgICAgICAgICAgICAgICAgICBhdXRvQXV0byArPSBcImF1dG8gXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIEBDb29sIGJvbnVzIGZlYXR1cmVcbiAgICAgICAgICAgICAgICAvLyBzZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIC8vICAgICAkKFwiKlwiKS5jc3MoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsICcjJytNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkqMTY3NzcyMTUpLnRvU3RyaW5nKDE2KSlcbiAgICAgICAgICAgICAgICAvLyB9LDIwKVxuICAgICAgICAgICAgICAgIHRhYmxlTm9kZS5jc3MoXCJncmlkLXRlbXBsYXRlLWNvbHVtbnNcIiwgYXV0b0F1dG8pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFibGVOb2RlLmNzcyhcImRpc3BsYXlcIiwgXCJibG9ja1wiKTtcbiAgICAgICAgICAgICAgICAkKFwiLnJlc3BvbnNlLWhlYWRsaW5lXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgICQoXCIucmVzcG9uc2UtdmFsdWVcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudGltZSkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgZWxlbWVudFRpbWUgPSAkKFwiLnJlc3BvbnNlLXRpbWVcIik7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRUaW1lLmh0bWwodG9IdW1hblRpbWUoZGF0YS50aW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmRpc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGVsZW1lbnREaXN0YW5jZSA9ICQoXCIucmVzcG9uc2UtZGlzdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlRGlzdGFuY2UgPSBkYXRhLmRpc3QgKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZURpc3RhbmNlID0gcmVzcG9uc2VEaXN0YW5jZS5yZXBsYWNlKCcuJywnLicpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VEaXN0YW5jZS5pbmRleE9mKCcsJykgKyAzO1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50RGlzdGFuY2UuaHRtbChyZXNwb25zZURpc3RhbmNlLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwgKyAzKSArIFwiIGttXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgaGVhZGxpbmRlTm9kZSA9ICQoXCIucm91dGUtb3V0cHV0LWhlYWRsaW5lXCIpO1xuICAgICAgICAgICAgICAgIGxldCByZXNwb25zZU5vZGUgPSAkKFwiLnJvdXRlLW91dHB1dC12YWx1ZXNcIik7XG4gICAgICAgICAgICAgICAgZm9yKGxldCB0YXJpZmZOYW1lIGluIGRhdGEudGFyaWZmcykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaGVhZGxpbmVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKTtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmVFbGVtZW50LmlubmVySFRNTCA9IHRhcmlmZk5hbWU7XG4gICAgICAgICAgICAgICAgICAgICQoaGVhZGxpbmVFbGVtZW50KS5hZGRDbGFzcyhcInJlc3BvbnNlLWhlYWRsaW5lXCIpXG4gICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzcG9uc2VUYXJpZmYgPSBkYXRhLnRhcmlmZnNbdGFyaWZmTmFtZV0gKyBcIlwiO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVRhcmlmZiA9IHJlc3BvbnNlVGFyaWZmLnJlcGxhY2UoXCIuXCIsXCIsXCIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXhEZWNpbWFsID0gcmVzcG9uc2VUYXJpZmYuaW5kZXhPZignLCcpICsgMztcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VFbGVtZW50LmlubmVySFRNTCA9IHJlc3BvbnNlVGFyaWZmLnN1YnN0cmluZygwLCBpbmRleERlY2ltYWwpICsgXCIg4oKsXCJcbiAgICAgICAgICAgICAgICAgICAgJChyZXNwb25zZUVsZW1lbnQpLmFkZENsYXNzKFwicmVzcG9uc2UtdmFsdWVcIilcbiAgICAgICAgICAgICAgICAgICAgaGVhZGxpbmRlTm9kZS5hcHBlbmQoaGVhZGxpbmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VOb2RlLmFwcGVuZChyZXNwb25zZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG59XG5cbi8qKlxuICogSW5pdGlhbCBmdW5jdGlvbiB0byBlbmFibGUgdXNlci1pbnB1dCB0byB0aGUgZ3VpXG4gKiBAcmV0dXJucyB7dm9pZH19XG4gKi9cbiAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgbGV0IGxhbmd1YWdlID0gd2luZG93LnNlcnZpY2VMYW5nIHx8IHdpbmRvdy5uYXZpZ2F0b3IudXNlckxhbmd1YWdlIHx8IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2U7XG4gICAgIGlmIChsYW5ndWFnZSA9IFwiZW5cIikge1xuICAgICAgICAgJC5leHRlbmQobGFuZ0NvbnN0YW50cywgdGF4aUNvbnN0YW50c0VuZ2xpc2gpXG4gICAgIH1cbiAgICAgZWxzZSBpZiAobGFuZ3VhZ2UgPT0gXCJkZVwiKSB7XG4gICAgICAgICAkLmV4dGVuZChsYW5nQ29uc3RhbnRzLCB0YXhpQ29uc3RhbnRzR2VybWFuKTtcbiAgICAgfVxuICAgICBlbHNlIHtcbiAgICAgICAgICQuZXh0ZW5kKGxhbmdDb25zdGFudHMsIHRheGlDb25zdGFudHNFbmdsaXNoKTtcbiAgICAgfVxuICAgICB3aW5kb3cuYkJveCA9IEpTT04ucGFyc2Uod2luZG93LmJCb3gpO1xuICAgIGxldCBvYmpJbnB1dEZyb20gPSAkKFwiLnJvdXRlLXRvXCIpO1xuICAgIGlmIChvYmpJbnB1dEZyb21bMF0pIHtcbiAgICAgICAgb2JqSW5wdXRGcm9tWzBdLnBsYWNlaG9sZGVyID0gbGFuZ0NvbnN0YW50cy5EVU1NWV9JTlBVVDtcbiAgICB9XG4gICAgbGV0IG9iaklucHV0VG8gPSAkKFwiLnJvdXRlLWZyb21cIik7XG4gICAgaWYgKG9iaklucHV0VG9bMF0pIHtcbiAgICAgICAgb2JqSW5wdXRUb1swXS5wbGFjZWhvbGRlciA9IGxhbmdDb25zdGFudHMuRFVNTVlfSU5QVVQ7XG4gICAgfVxuICAgIGxldCBvYmpIZWFkbGluZURpc3QgPSAkKFwiLmhlYWRsaW5lLWRpc3RcIik7XG4gICAgb2JqSGVhZGxpbmVEaXN0Lmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9ESVNUKTtcbiAgICBsZXQgb2JqSGVhZGxpbmVUaW1lID0gJChcIi5oZWFkbGluZS10aW1lXCIpO1xuICAgICBvYmpIZWFkbGluZVRpbWUuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX1RJTUUpO1xuICAgIGNvbnN0IGVudGVyTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBjb25zdCBzY29wZSA9IHRoaXM7XG4gICAgICAgIGlmIChldmVudC5rZXlDb2RlID09PSAxMykge1xuICAgICAgICAgICAgc3VibWl0U2VhcmNoKHNjb3BlLCBcIi5cIiArIHNjb3BlLmNsYXNzTGlzdFswXSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgY3VyclRpbWUgPSBNYXRoLmZsb29yKERhdGUubm93KCkpO1xuICAgICAgICAgICAgc2NvcGUuY291bnRlciA9IGN1cnJUaW1lO1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGlmIChzY29wZS5jb3VudGVyICYmIHNjb3BlLmNvdW50ZXIgKyAxMDAwIDwgTWF0aC5mbG9vcihEYXRlLm5vdygpKSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgc2NvcGUuY291bnRlcjtcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQWRyZXNzKCQoc2NvcGUpLnZhbCgpLCBcIi5cIiArIHNjb3BlLmNsYXNzTGlzdFswXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwxNTAwKVxuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgJChcIi5yb3V0ZS1mcm9tXCIpLm9uKCdrZXlkb3duJywgZW50ZXJMaXN0ZW5lcik7XG4gICAgJChcIi5yb3V0ZS1mcm9tXCIpLm9uKCdhdXRvY29tcGxldGVzZWxlY3QnLCBmdW5jdGlvbihldmVudCwgdWkpe1xuICAgICAgICBsZXQgdmFsdWUgPSB1aS5pdGVtLnZhbHVlO1xuICAgICAgICBsZXQgbG9jID0gYXJyRnJvbVBvc2l0aW9uc1thcnJGcm9tTmFtZXMuZmluZEluZGV4KGRhbmdlciA9PiBkYW5nZXIgPT09IHZhbHVlKV07XG4gICAgICAgIHRheGlEYXRhLnJvdXRlRnJvbS5sb2MgPSBsb2M7XG4gICAgICAgIGNhbGN1bGF0ZUV4cGVuc2VzKCk7XG4gICAgfSk7XG4gICAgJChcIi5yb3V0ZS10b1wiKS5vbigna2V5ZG93bicsIGVudGVyTGlzdGVuZXIpO1xuXG4gICAgJChcIi5yb3V0ZS1mcm9tXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFkZHJlc3MgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBzZXRSb3V0ZUZyb20oYWRkcmVzcyk7XG4gICAgfSk7XG5cbiAgICAkKFwiLnJvdXRlLXRvXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFkZHJlc3MgPSAkKHRoaXMpLnZhbCgpO1xuICAgICAgICBzZXRSb3V0ZVRvKGFkZHJlc3MpO1xuICAgIH0pO1xuXG5cbiAgICAkKFwiLnN0YXJ0LXNlYXJjaFwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgc3VibWl0U2VhcmNoKCk7XG4gICAgfSk7XG5cbiAgICAkKFwiLnJvdXRlLWZyb20tZ2VvbG9jYXRpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlUm91dGVGcm9tUG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiVGhlIGdlb2xvY2F0aW9uIEFQSSBpcyBub3QgYXZhaWxhYmxlIGluIHlvdXIgYnJvd3Nlci4gQ29uc2lkZXIgdXBkYXRpbmcgaXQgb3Igc3dpdGNoaW5nIHRvIGEgbmV3ZXIgYnJvd3Nlci5cIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIucm91dGUtdG8tZ2VvbG9jYXRpb25cIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oaGFuZGxlUm91dGVUb1Bvc2l0aW9uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIlRoZSBnZW9sb2NhdGlvbiBBUEkgaXMgbm90IGF2YWlsYWJsZSBpbiB5b3VyIGJyb3dzZXIuIENvbnNpZGVyIHVwZGF0aW5nIGl0IG9yIHN3aXRjaGluZyB0byBhIG5ld2VyIGJyb3dzZXIuXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgIGxldCBvYmpIZWFkbGluZURpc3RQcmljZSA9ICQoXCIuaGVhZGxpbmUtZGlzdC1wcmljZVwiKTtcbiAgICAgb2JqSGVhZGxpbmVEaXN0UHJpY2UuaHRtbChsYW5nQ29uc3RhbnRzLkhFQURMSU5FX0RJU1RfUFJJQ0UpO1xuICAgICBsZXQgb2JqSGVhZGxpbmVUaW1lUHJpY2UgPSAkKFwiLmhlYWRsaW5lLXRpbWUtcHJpY2VcIik7XG4gICAgIG9iakhlYWRsaW5lVGltZVByaWNlLmh0bWwobGFuZ0NvbnN0YW50cy5IRUFETElORV9USU1FX1BSSUNFKTtcbiAgICAgbGV0IG9iakhlYWRsaW5lQmFzZVByaWNlID0gJChcIi5oZWFkbGluZS1iYXNlLXByaWNlXCIpO1xuICAgICBvYmpIZWFkbGluZUJhc2VQcmljZS5odG1sKGxhbmdDb25zdGFudHMuSEVBRExJTkVfQkFTRV9QUklDRSk7XG4gICAgZmluZFRhcmlmZnMoKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=