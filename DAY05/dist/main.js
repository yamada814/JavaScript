/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./greeting-cjs.cjs":
/*!**************************!*\
  !*** ./greeting-cjs.cjs ***!
  \**************************/
/***/ ((module) => {

eval("//commonJSのエクスポート\n//module.exportsのプロパティに追加していく\nfunction hello(name) {\n  console.log(`こんにちは、${name}さん。`);\n}\nfunction goodMorning(name){\n  console.log(`おはよう、${name}さん。`);\n}  \nfunction goodEvening(name){\n  console.log(`こんばんは、${name}さん。`);\n}  \nfunction goodNight(name) {\n    console.log(`おやすみなさい、${name}さん。`);\n}\nmodule.exports.hello = hello;\nmodule.exports.goodMorning = goodMorning;\nmodule.exports.goodEvening = goodEvening;\nmodule.exports.goodNight = goodNight;\n\n//# sourceURL=webpack://javascript/./greeting-cjs.cjs?");

/***/ }),

/***/ "./main-cjs.cjs":
/*!**********************!*\
  !*** ./main-cjs.cjs ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const greeting = __webpack_require__(/*! ./greeting-cjs.cjs */ \"./greeting-cjs.cjs\");\nconst name = \"田中\";\n\n// greeting.hello(name);\n// greeting.goodMorning(name);\n// greeting.goodEvening(name);\n// greeting.goodNight(name);\n\nconst {\n    hello: h,\n    goodMorning: gm,\n    goodEvening: ge,\n    goodNight: gn\n} = greeting;\n\nh(name)\ngm(name);\nge(name);\ngn(name);\n\n//# sourceURL=webpack://javascript/./main-cjs.cjs?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./main-cjs.cjs");
/******/ 	
/******/ })()
;