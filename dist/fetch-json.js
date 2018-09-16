// [AIV_SHORT]  Build version: 1.0.1 - Sunday, September 16th, 2018, 5:20:59 PM  
 (function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["fetchJson"] = factory();
	else
		root["fetchJson"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./fetch-json/index.js":
/*!*****************************!*\
  !*** ./fetch-json/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = fetchJson;\n\nvar _requestJson = __webpack_require__(/*! ../request-json */ \"./request-json/index.js\");\n\nvar _requestJson2 = _interopRequireDefault(_requestJson);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction fetchJson() {\n\tfor (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n\t\targs[_key] = arguments[_key];\n\t}\n\n\tvar request = _requestJson2.default.apply(null, args);\n\n\treturn fetch(request).then(function (response) {\n\t\treturn response.json().then(function (data) {\n\t\t\treturn {\n\t\t\t\tdata: data,\n\t\t\t\tresponse: response\n\t\t\t};\n\t\t});\n\t});\n}\n\n//# sourceURL=webpack://fetchJson/./fetch-json/index.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.requestJson = exports.putJson = exports.postJson = undefined;\n\nvar _fetchJson = __webpack_require__(/*! ./fetch-json */ \"./fetch-json/index.js\");\n\nvar _fetchJson2 = _interopRequireDefault(_fetchJson);\n\nvar _postJson = __webpack_require__(/*! ./post-json */ \"./post-json/index.js\");\n\nvar _postJson2 = _interopRequireDefault(_postJson);\n\nvar _putJson = __webpack_require__(/*! ./put-json */ \"./put-json/index.js\");\n\nvar _putJson2 = _interopRequireDefault(_putJson);\n\nvar _requestJson = __webpack_require__(/*! ./request-json */ \"./request-json/index.js\");\n\nvar _requestJson2 = _interopRequireDefault(_requestJson);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _fetchJson2.default;\nexports.postJson = _postJson2.default;\nexports.putJson = _putJson2.default;\nexports.requestJson = _requestJson2.default;\n\n//# sourceURL=webpack://fetchJson/./index.js?");

/***/ }),

/***/ "./post-json/index.js":
/*!****************************!*\
  !*** ./post-json/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = postJson;\n\nvar _ensureHeader = __webpack_require__(/*! ../utils/ensure-header */ \"./utils/ensure-header.js\");\n\nvar _ensureHeader2 = _interopRequireDefault(_ensureHeader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction postJson(data) {\n\tvar options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\n\tvar result = Object.assign({}, options, {\n\t\tmethod: 'POST',\n\t\tbody: JSON.stringify(data),\n\t\theaders: (0, _ensureHeader2.default)('Content-Type', 'application/json', options.headers)\n\t});\n\n\treturn result;\n}\n\n//# sourceURL=webpack://fetchJson/./post-json/index.js?");

/***/ }),

/***/ "./put-json/index.js":
/*!***************************!*\
  !*** ./put-json/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = putJson;\n\nvar _ensureHeader = __webpack_require__(/*! ../utils/ensure-header */ \"./utils/ensure-header.js\");\n\nvar _ensureHeader2 = _interopRequireDefault(_ensureHeader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction putJson(data) {\n\tvar options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\n\tvar result = Object.assign({}, options, {\n\t\tmethod: 'PUT',\n\t\tbody: JSON.stringify(data),\n\t\theaders: (0, _ensureHeader2.default)('Content-Type', 'application/json', options.headers)\n\t});\n\n\treturn result;\n}\n\n//# sourceURL=webpack://fetchJson/./put-json/index.js?");

/***/ }),

/***/ "./request-json/index.js":
/*!*******************************!*\
  !*** ./request-json/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = requestJson;\n\nvar _ensureHeader = __webpack_require__(/*! ../utils/ensure-header */ \"./utils/ensure-header.js\");\n\nvar _ensureHeader2 = _interopRequireDefault(_ensureHeader);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction requestJson(input) {\n\tvar init = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n\n\tvar options = Object.assign({}, init, {\n\t\theaders: (0, _ensureHeader2.default)('accept', 'application/json, text/plain', init.headers)\n\t});\n\n\treturn new Request(input, options);\n}\n\n//# sourceURL=webpack://fetchJson/./request-json/index.js?");

/***/ }),

/***/ "./utils/ensure-header.js":
/*!********************************!*\
  !*** ./utils/ensure-header.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\nexports.default = ensureHeader;\nfunction ensureHeader(name, value, headers) {\n\n\tif (!name || typeof name !== 'string') {\n\t\tthrow new TypeError('The header name should not be empty/null');\n\t}\n\n\tif (!value) {\n\t\tthrow new TypeError('The header value should not be empty/null');\n\t}\n\n\tvar result = headers == null ? new Headers() : new Headers(headers);\n\n\tresult.set(name, value);\n\n\treturn result;\n}\n\n//# sourceURL=webpack://fetchJson/./utils/ensure-header.js?");

/***/ })

/******/ });
}); 