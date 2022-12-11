/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./screens/Error404Screen.js */ \"./src/screens/Error404Screen.js\");\n/* harmony import */ var _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./screens/HomeScreen.js */ \"./src/screens/HomeScreen.js\");\n/* harmony import */ var _screens_ProductScreen_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./screens/ProductScreen.js */ \"./src/screens/ProductScreen.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils.js */ \"./src/utils.js\");\n\n\n\n\nconst routes = {\n    '/' : _screens_HomeScreen_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    '/product/:id': _screens_ProductScreen_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n};\nconst router = async() =>{\n    const request = (0,_utils_js__WEBPACK_IMPORTED_MODULE_3__.parseRequestUrl)();\n    const parseUrl = \n       (request.resource ? `/${request.resource}`: '/') + \n       (request.id? '/:id': '') + \n       (request.verb ? `${request.verb}` : '');\n    const screen = routes[parseUrl]? routes[parseUrl]: _screens_Error404Screen_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];   \n    const main = document.getElementById('main-container');\n    main.innerHTML = await screen.render();\n};\nwindow.addEventListener('load', router);\nwindow.addEventListener('hashchange', router)\n\n//# sourceURL=webpack://frontend/./src/index.js?");

/***/ }),

/***/ "./src/screens/Error404Screen.js":
/*!***************************************!*\
  !*** ./src/screens/Error404Screen.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Error404Screen = {\n    render:()=>{\n        return ` <div>Page Not Found</div>`;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Error404Screen);\n\n//# sourceURL=webpack://frontend/./src/screens/Error404Screen.js?");

/***/ }),

/***/ "./src/screens/HomeScreen.js":
/*!***********************************!*\
  !*** ./src/screens/HomeScreen.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst HomeScreen = {\n    render: async() =>{\n        const response = await fetch(\"http://localhost:5000/api/products\", {\n            headers:{\n                'Content-Type': 'application/json',\n            },\n        });\n        if (!response || !response.ok) {\n            return ` <div>Error in getting Data</div>`;\n        }\n           \n        const products = await response.json();\n\n        return `\n        <ul class=\"products\">\n        ${products.map(product =>`\n        <li>\n        \n         <div class=\"product\">\n            <a href=\"/#/product/${product._id}\">\n                <img src=\"${product.image}\" alt=\" {product.name}\"/>\n            </a>\n            <div class=\"product-name\">\n                <a href=\"/#/product/1\">\n                   ${product.name}\n                </a>\n            </div>\n            \n            <div class=\"product-brand\">\n            ${product.brand}\n            </div>\n            <div class=\"product-price\">\n            ${product.price}FCFA\n            </div>\n        </li>\n        `).join('\\n')}\n        </ul>\n        `\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomeScreen);\n\n//# sourceURL=webpack://frontend/./src/screens/HomeScreen.js?");

/***/ }),

/***/ "./src/screens/ProductScreen.js":
/*!**************************************!*\
  !*** ./src/screens/ProductScreen.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ProductScreen = {\n    render:()=>{\n        return ` <div>ProductScreen</div>`;\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductScreen);\n\n//# sourceURL=webpack://frontend/./src/screens/ProductScreen.js?");

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseRequestUrl\": () => (/* binding */ parseRequestUrl)\n/* harmony export */ });\nconst parseRequestUrl = () =>{\n    const url = document.location.hash.toLocaleLowerCase();\n    const request = url.split(\"/\");\n    return{\n        resource: request[1],\n        id: request[2],\n        action: request[3]\n    }\n}\n\n//# sourceURL=webpack://frontend/./src/utils.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;