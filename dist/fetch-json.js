// [AIV]  Build version: 1.0.0 - Saturday, August 19th, 2017, 4:36:47 PM  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fetchJson"] = factory();
	else
		root["fetchJson"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = ensureHeader;
function ensureHeader(name, value, headers) {

    if (!name || typeof name !== 'string') {
        throw new TypeError('The header name should not be empty/null');
    }

    if (!value) {
        throw new TypeError('The header value should not be empty/null');
    }

    var result = headers == null ? new Headers() : new Headers(headers);

    result.set(name, value);

    return result;
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = requestJson;

var _ensureHeader = __webpack_require__(0);

var _ensureHeader2 = _interopRequireDefault(_ensureHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requestJson(input) {
    var init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var options = Object.assign({}, init, {
        headers: (0, _ensureHeader2.default)('accept', 'application/json, text/plain', init.headers)
    });

    return new Request(input, options);
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.requestJson = exports.putJson = exports.postJson = undefined;

var _fetchJson = __webpack_require__(3);

var _fetchJson2 = _interopRequireDefault(_fetchJson);

var _postJson = __webpack_require__(4);

var _postJson2 = _interopRequireDefault(_postJson);

var _putJson = __webpack_require__(5);

var _putJson2 = _interopRequireDefault(_putJson);

var _requestJson = __webpack_require__(1);

var _requestJson2 = _interopRequireDefault(_requestJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _fetchJson2.default;
exports.postJson = _postJson2.default;
exports.putJson = _putJson2.default;
exports.requestJson = _requestJson2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = fetchJson;

var _requestJson = __webpack_require__(1);

var _requestJson2 = _interopRequireDefault(_requestJson);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchJson() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
    }

    var request = _requestJson2.default.apply(null, args);

    return fetch(request).then(function (response) {
        return response.json().then(function (data) {
            return {
                data: data,
                response: response
            };
        });
    });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = postJson;

var _ensureHeader = __webpack_require__(0);

var _ensureHeader2 = _interopRequireDefault(_ensureHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function postJson(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var result = Object.assign({}, options, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: (0, _ensureHeader2.default)('Content-Type', 'application/json', options.headers)
    });

    return result;
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = putJson;

var _ensureHeader = __webpack_require__(0);

var _ensureHeader2 = _interopRequireDefault(_ensureHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function putJson(data) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};


    var result = Object.assign({}, options, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: (0, _ensureHeader2.default)('Content-Type', 'application/json', options.headers)
    });

    return result;
}

/***/ })
/******/ ]);
}); 