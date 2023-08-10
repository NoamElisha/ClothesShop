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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.carousel-item {\r\n  height: 50vh;\r\n}\r\n.card {\r\nbox-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\r\n}\r\n.footer-cta {\r\nbox-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px;\r\n}\r\n.price {\r\ncolor: #263238;\r\nfont-size: 24px;\r\n}\r\n\r\n.card-title {\r\ncolor:#263238\r\n}\r\n\r\n.sale {\r\ncolor: #E53935\r\n}\r\n\r\n.sale-badge {\r\nbackground-color: #E53935\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_test/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack_test/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack_test/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack_test/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_test/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_test/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_test/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_test/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_test/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_test/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/Components/Carousel/Carousel.component.js":
/*!*******************************************************!*\
  !*** ./src/Components/Carousel/Carousel.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction Carousel() {\r\n    return `\r\n    <!-- carousel -->\r\n    <div id=\"carouselExampleCaptions\" class=\"carousel slide carousel-fade\" data-mdb-ride=\"carousel\">\r\n      <div class=\"carousel-indicators\">\r\n        <button\r\n          type=\"button\"\r\n          data-mdb-target=\"#carouselExampleCaptions\"\r\n          data-mdb-slide-to=\"0\"\r\n          class=\"active\"\r\n          aria-current=\"true\"\r\n          aria-label=\"Slide 1\"\r\n        ></button>\r\n        <button\r\n          type=\"button\"\r\n          data-mdb-target=\"#carouselExampleCaptions\"\r\n          data-mdb-slide-to=\"1\"\r\n          aria-label=\"Slide 2\"\r\n        ></button>\r\n        <button\r\n          type=\"button\"\r\n          data-mdb-target=\"#carouselExampleCaptions\"\r\n          data-mdb-slide-to=\"2\"\r\n          aria-label=\"Slide 3\"\r\n        ></button>\r\n      </div>\r\n      <div class=\"carousel-inner\">\r\n        <div class=\"carousel-item active\">\r\n          <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg\" class=\"d-block w-100\" alt=\"Wild Landscape\"/>\r\n          <div class=\"mask\" style=\"background-color: rgba(0, 0, 0, 0.4)\"></div>\r\n          <div class=\"carousel-caption d-none d-sm-block mb-5\">\r\n            <h1 class=\"mb-4\">\r\n                    <strong>Welcome To ClothesShop</strong>\r\n                  </h1>\r\n     \r\n                  <p>\r\n                    <strong>This is the best clothes shop in town!</strong>\r\n                  </p>\r\n     \r\n                  <p class=\"mb-4 d-none d-md-block\">\r\n                    <strong>You can find here the best prices all over the town and the newest collections!</strong>\r\n                  </p>\r\n     \r\n   \r\n          </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg\" class=\"d-block w-100\" alt=\"Camera\"/>\r\n          <div class=\"mask\" style=\"background-color: rgba(0, 0, 0, 0.4)\"></div>\r\n          <div class=\"carousel-caption d-none d-md-block mb-5\">\r\n            <h1 class=\"mb-4\">\r\n            <strong>Welcome To ClothesShop</strong>\r\n            </h1>\r\n\r\n            <p>\r\n              <strong>This is the best clothes shop in town!</strong>\r\n            </p>\r\n\r\n            <p class=\"mb-4 d-none d-md-block\">\r\n              <strong>You can find here the best prices all over the town and the newest collections!</strong>\r\n            </p>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"carousel-item\">\r\n          <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg\" class=\"d-block w-100\" alt=\"Exotic Fruits\"/>\r\n          <div class=\"mask\" style=\"background-color: rgba(0, 0, 0, 0.4)\"></div>\r\n          <div class=\"carousel-caption d-none d-md-block mb-5\">\r\n            <h1 class=\"mb-4\">\r\n            <strong>Welcome To ClothesShop</strong>\r\n            </h1>\r\n\r\n            <p>\r\n              <strong>This is the best clothes shop in town!</strong>\r\n            </p>\r\n\r\n            <p class=\"mb-4 d-none d-md-block\">\r\n              <strong>You can find here the best prices all over the town and the newest collections!</strong>\r\n            </p>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <button class=\"carousel-control-prev\" type=\"button\" data-mdb-target=\"#carouselExampleCaptions\" data-mdb-slide=\"prev\">\r\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Previous</span>\r\n      </button>\r\n      <button class=\"carousel-control-next\" type=\"button\" data-mdb-target=\"#carouselExampleCaptions\" data-mdb-slide=\"next\">\r\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n        <span class=\"visually-hidden\">Next</span>\r\n      </button>\r\n    </div>\r\n    `;\r\n  };\r\n\r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Carousel);\r\n \n\n//# sourceURL=webpack://webpack_test/./src/Components/Carousel/Carousel.component.js?");

/***/ }),

/***/ "./src/Components/Copyright/Copyright.component.js":
/*!*********************************************************!*\
  !*** ./src/Components/Copyright/Copyright.component.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction Copyright() {\r\n    return `\r\n    <div class=\"text-center p-3\" style=\"background-color: rgba(0, 0, 0, 0.2); text-color: #E0E0E0\">\r\n    © 2023 ClothesShop\r\n     \r\n  </div>\r\n    `;\r\n  }; // this screen is represent the user interface of the website\r\n  // the H1 get a counter inside him from the \"state\"\r\n\r\n  // <a class=\"text-white\" href=\"https://mdbootstrap.com/\">MDBootstrap.com</a> \r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Copyright);\r\n \r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_test/./src/Components/Copyright/Copyright.component.js?");

/***/ }),

/***/ "./src/Components/Links/link.js":
/*!**************************************!*\
  !*** ./src/Components/Links/link.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nasync function Links() {\r\n    \r\n    const app = `\r\n\r\n    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9\" crossorigin=\"anonymous\">\r\n    <link\r\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css\"\r\n    rel=\"stylesheet\"\r\n  />\r\n  <!-- Google Fonts -->\r\n  <link\r\n    href=\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\"\r\n    rel=\"stylesheet\"\r\n  />\r\n  <!-- MDB -->\r\n  <link\r\n    href=\"https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.css\"\r\n    rel=\"stylesheet\"\r\n  />\r\n  \r\n    `;\r\n    \r\n  return app;\r\n  };\r\n\r\n\r\n  \r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Links);\n\n//# sourceURL=webpack://webpack_test/./src/Components/Links/link.js?");

/***/ }),

/***/ "./src/Components/Links/scripts.js":
/*!*****************************************!*\
  !*** ./src/Components/Links/scripts.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction Scripts() {\r\n    const app = `\r\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js\" integrity=\"sha384-HwwvtgBNo3bZJJLYd8oVXjrBZt8cqVSpeBNS5n7C8IVInixGAoxmnlMuBnhbgrkm\" crossorigin=\"anonymous\"></script>\r\n    <script\r\n    type=\"text/javascript\"\r\n    src=\"https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.4.1/mdb.min.js\"\r\n    ></script>\r\n    `;\r\n    return app;\r\n  }\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scripts);\n\n//# sourceURL=webpack://webpack_test/./src/Components/Links/scripts.js?");

/***/ }),

/***/ "./src/Components/MainNavbar/Navbar.component.js":
/*!*******************************************************!*\
  !*** ./src/Components/MainNavbar/Navbar.component.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction MainNavbar() {\r\n    return `\r\n    <nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-white\">\r\n  <!-- Container wrapper -->\r\n  <div class=\"container\">    \r\n    <!-- Toggle button -->\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-mdb-toggle=\"collapse\"\r\n      data-mdb-target=\"#navbarSupportedContent1\"\r\n      aria-controls=\"navbarSupportedContent1\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <i class=\"fas fa-bars\"></i>\r\n    </button>\r\n \r\n    <!-- Collapsible wrapper -->\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">      \r\n      <!-- Navbar brand -->\r\n      <a class=\"navbar-brand mt-2 mt-sm-0\" href=\"https://mdbootstrap.com/\">\r\n        <img\r\n          src=\"https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp\"\r\n          height=\"20\"\r\n          alt=\"MDB Logo\"\r\n          loading=\"lazy\"\r\n        />\r\n      </a>\r\n      <!-- Left links -->\r\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link \" href=\"https://mdbootstrap.com/\">Home</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://mdbootstrap.com/docs/standard/\">About</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://mdbootstrap.com/docs/standard/getting-started/installation/\">Free download</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"https://mdbootstrap.com/education/bootstrap/\">Free tutorials</a>\r\n        </li>\r\n      </ul>\r\n      <!-- Left links -->      \r\n    </div>\r\n    <!-- Collapsible wrapper -->\r\n    \r\n    <!-- Right elements -->\r\n    <div class=\"d-flex align-items-center\">\r\n      <!-- Icon -->\r\n      <a class=\"nav-link me-3\" href=\"#\">\r\n        <i class=\"fas fa-shopping-cart\"></i>\r\n        <span class=\"badge rounded-pill badge-notification bg-danger\">1</span>\r\n      </a>\r\n \r\n      <a class=\"nav-link me-3\" href=\"#\">\r\n        <i class=\"fab fa-facebook-f\"></i>\r\n      </a>\r\n      <a class=\"nav-link me-3\" href=\"#\">\r\n        <i class=\"fab fa-twitter\"></i>\r\n      </a>\r\n      <a href=\"https://github.com/mdbootstrap/bootstrap-material-design\" class=\"border rounded px-2 nav-link\"\r\n              target=\"_blank\">\r\n              <i class=\"fab fa-github me-2\"></i>MDB GitHub\r\n            </a>\r\n    </div>\r\n    <!-- Right elements -->\r\n    \r\n  </div>\r\n  <!-- Container wrapper -->\r\n</nav>\r\n<!-- Navbar -->\r\n    `;\r\n  }; // this screen is represent the user interface of the website\r\n  // the H1 get a counter inside him from the \"state\"\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MainNavbar);\r\n //window.MainNavbar = MainNavbar; \r\n \r\n\r\n\r\n\n\n//# sourceURL=webpack://webpack_test/./src/Components/MainNavbar/Navbar.component.js?");

/***/ }),

/***/ "./src/Components/ProductPages/ProductPages.component.js":
/*!***************************************************************!*\
  !*** ./src/Components/ProductPages/ProductPages.component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction ProductPages() {\r\n    return `\r\n    <nav aria-label=\"Page navigation example\" class=\"d-flex justify-content-center mt-3\">\r\n    <ul class=\"pagination\">\r\n      <li class=\"page-item disabled\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Previous\">\r\n          <span aria-hidden=\"true\">&laquo;</span>\r\n        </a>\r\n      </li>\r\n      <li class=\"page-item active\"><a class=\"page-link\" href=\"#\">1</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">2</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">3</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">4</a></li>\r\n      <li class=\"page-item\"><a class=\"page-link\" href=\"#\">5</a></li>\r\n      <li class=\"page-item\">\r\n        <a class=\"page-link\" href=\"#\" aria-label=\"Next\">\r\n          <span aria-hidden=\"true\">&raquo;</span>\r\n        </a>\r\n      </li>\r\n    </ul>\r\n  </nav>  \r\n    `;\r\n  }; // this screen is represent the user interface of the website\r\n  // the H1 get a counter inside him from the \"state\"\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProductPages); \r\n\r\n\n\n//# sourceURL=webpack://webpack_test/./src/Components/ProductPages/ProductPages.component.js?");

/***/ }),

/***/ "./src/Components/Products/Products.js":
/*!*********************************************!*\
  !*** ./src/Components/Products/Products.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\nfunction Products() {\r\n    return `\r\n    <section>\r\n    <div class=\"text-center\">\r\n      <div class=\"row\">\r\n        \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple ripple-surface ripple-surface-light\"\r\n              data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">\r\n                <div class=\"mask\">\r\n                  <div class=\"d-flex justify-content-start align-items-end h-100\">\r\n                    <h5><span class=\"badge bg-dark ms-2\">NEW</span></h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Denim shirt</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset \">\r\n                <p>Shirt</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">120$</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n   \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple ripple-surface ripple-surface-light\"\r\n              data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">  \r\n                <div class=\"mask\">\r\n                  <div class=\"d-flex justify-content-start align-items-end h-100\">\r\n                    <h5><span class=\"badge bg-primary ms-2\">bestseller</span></h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Sweatshirt</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset \">\r\n                <p>Sport wear</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">139$</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple ripple-surface ripple-surface-light\"\r\n              data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">              \r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Grey blouse</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset \">\r\n                <p>Sport wear</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">99$</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n   \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple\" data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">\r\n                <div class=\"mask\">\r\n                  <div class=\"d-flex justify-content-start align-items-end h-100\">\r\n                    <h5><span class=\"badge sale-badge ms-2\">-10%</span></h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Black jacket</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset \">\r\n                <p>Outwear</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">\r\n                <s>199$</s><strong class=\"ms-2 sale\">179$</strong>\r\n              </h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n   \r\n      <div class=\"row\">\r\n        \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple ripple-surface ripple-surface-light\"\r\n              data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">              \r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Sweatshirt</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset \">\r\n                <p>Sport wear</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">139$</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n   \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple ripple-surface ripple-surface-light\"\r\n              data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">\r\n                <div class=\"mask\">\r\n                  <div class=\"d-flex justify-content-start align-items-end h-100\">\r\n                    <h5><span class=\"badge bg-success ms-2\">Eco</span></h5>\r\n                  </div>\r\n                </div>\r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Grey blouse</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset \">\r\n                <p>Sport wear</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">99$</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple\" data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">              \r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Black jacket</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset\">\r\n                <p>Outwear</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">199$</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n   \r\n        <div class=\"col-lg-3 col-md-6 mb-4\">\r\n          <div class=\"card\">\r\n            <div class=\"bg-image hover-zoom ripple ripple-surface ripple-surface-light\"\r\n              data-mdb-ripple-color=\"light\">\r\n              <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg\"\r\n                class=\"w-100\" />\r\n              <a href=\"#!\">              \r\n                <div class=\"hover-overlay\">\r\n                  <div class=\"mask\" style=\"background-color: rgba(251, 251, 251, 0.15);\"></div>\r\n                </div>\r\n              </a>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <a href=\"\" class=\"text-reset\">\r\n                <h5 class=\"card-title mb-2\">Denim shirt</h5>\r\n              </a>\r\n              <a href=\"\" class=\"text-reset \">\r\n                <p>Shirt</p>\r\n              </a>\r\n              <h6 class=\"mb-3 price\">120$</h6>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>  \r\n    `;\r\n  }; // this screen is represent the user interface of the website\r\n  // the H1 get a counter inside him from the \"state\"\r\n\r\n  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Products);\r\n   \r\n\n\n//# sourceURL=webpack://webpack_test/./src/Components/Products/Products.js?");

/***/ }),

/***/ "./src/Components/SearchNavbar/SearchNavbar.component.js":
/*!***************************************************************!*\
  !*** ./src/Components/SearchNavbar/SearchNavbar.component.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\r\n\r\nfunction SearchNavbar() {\r\n    return `\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2\" style=\"background-color: #607D8B\">\r\n    <!-- Container wrapper -->\r\n    <div class=\"container-fluid\">\r\n   \r\n      <!-- Navbar brand -->\r\n      <a class=\"navbar-brand\" href=\"#\">Categories:</a>\r\n   \r\n      <!-- Toggle button -->\r\n      <button \r\n         class=\"navbar-toggler\" \r\n         type=\"button\" \r\n         data-mdb-toggle=\"collapse\" \r\n         data-mdb-target=\"#navbarSupportedContent2\" \r\n         aria-controls=\"navbarSupportedContent2\" \r\n         aria-expanded=\"false\" \r\n         aria-label=\"Toggle navigation\">\r\n        <i class=\"fas fa-bars\"></i>\r\n      </button>\r\n   \r\n      <!-- Collapsible wrapper -->\r\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent2\">\r\n        <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\r\n   \r\n          <!-- Link -->\r\n          <li class=\"nav-item acitve\">\r\n            <a class=\"nav-link text-white\" href=\"#\">All</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n                <a class=\"nav-link text-white\" href=\"#\">Shirts</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link text-white\" href=\"#\">Sport wears</a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                <a class=\"nav-link text-white\" href=\"#\">Outwears</a>\r\n              </li>\r\n   \r\n        </ul>\r\n   \r\n        <!-- Search -->\r\n        <form class=\"w-auto py-1\" style=\"max-width: 12rem\">\r\n          <input type=\"search\" class=\"form-control rounded-0\" placeholder=\"Search\" aria-label=\"Search\">\r\n        </form>\r\n   \r\n      </div>\r\n    </div>\r\n    <!-- Container wrapper -->\r\n  </nav>\r\n    `;\r\n  }; // this screen is represent the user interface of the website\r\n  // the H1 get a counter inside him from the \"state\"\r\n\r\n  \r\n /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SearchNavbar);\n\n//# sourceURL=webpack://webpack_test/./src/Components/SearchNavbar/SearchNavbar.component.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Components_MainNavbar_Navbar_component_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/MainNavbar/Navbar.component.js */ \"./src/Components/MainNavbar/Navbar.component.js\");\n/* harmony import */ var _Components_Links_scripts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Components/Links/scripts.js */ \"./src/Components/Links/scripts.js\");\n/* harmony import */ var _Components_Links_link_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/Links/link.js */ \"./src/Components/Links/link.js\");\n/* harmony import */ var _Components_Carousel_Carousel_component_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/Carousel/Carousel.component.js */ \"./src/Components/Carousel/Carousel.component.js\");\n/* harmony import */ var _Components_SearchNavbar_SearchNavbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Components/SearchNavbar/SearchNavbar.component */ \"./src/Components/SearchNavbar/SearchNavbar.component.js\");\n/* harmony import */ var _Components_Products_Products__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/Products/Products */ \"./src/Components/Products/Products.js\");\n/* harmony import */ var _Components_ProductPages_ProductPages_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/ProductPages/ProductPages.component */ \"./src/Components/ProductPages/ProductPages.component.js\");\n/* harmony import */ var _Components_Copyright_Copyright_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Components/Copyright/Copyright.component */ \"./src/Components/Copyright/Copyright.component.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfunction App() {\r\n  const element = document.createElement('div');\r\n    const app = `\r\n     \r\n      ${(0,_Components_MainNavbar_Navbar_component_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()}\r\n      ${(0,_Components_Carousel_Carousel_component_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()}\r\n    <div class=\"contanier\">\r\n      ${(0,_Components_SearchNavbar_SearchNavbar_component__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()}\r\n      ${(0,_Components_Products_Products__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()}\r\n      ${(0,_Components_ProductPages_ProductPages_component__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()}\r\n    </div>\r\n      ${(0,_Components_Copyright_Copyright_component__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()}\r\n      ${(0,_Components_Links_scripts_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()}\r\n    `;\r\n  element.innerHTML = app;\r\n  return element;\r\n}\r\n\r\ndocument.head.insertAdjacentHTML(\"beforeend\",await (0,_Components_Links_link_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])());\r\ndocument.body.appendChild(App());\r\n\r\n//document.body.insertAdjacentHTML(\"beforeend\", Scripts());\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } }, 1);\n\n//# sourceURL=webpack://webpack_test/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackQueues = typeof Symbol === "function" ? Symbol("webpack queues") : "__webpack_queues__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var webpackError = typeof Symbol === "function" ? Symbol("webpack error") : "__webpack_error__";
/******/ 		var resolveQueue = (queue) => {
/******/ 			if(queue && queue.d < 1) {
/******/ 				queue.d = 1;
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackQueues]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					queue.d = 0;
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						resolveQueue(queue);
/******/ 					}, (e) => {
/******/ 						obj[webpackError] = e;
/******/ 						resolveQueue(queue);
/******/ 					});
/******/ 					var obj = {};
/******/ 					obj[webpackQueues] = (fn) => (fn(queue));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 			ret[webpackQueues] = x => {};
/******/ 			ret[webpackExports] = dep;
/******/ 			return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue;
/******/ 			hasAwait && ((queue = []).d = -1);
/******/ 			var depQueues = new Set();
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = resolve;
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackQueues] = (fn) => (queue && fn(queue), depQueues.forEach(fn), promise["catch"](x => {}));
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn;
/******/ 				var getResult = () => (currentDeps.map((d) => {
/******/ 					if(d[webpackError]) throw d[webpackError];
/******/ 					return d[webpackExports];
/******/ 				}))
/******/ 				var promise = new Promise((resolve) => {
/******/ 					fn = () => (resolve(getResult));
/******/ 					fn.r = 0;
/******/ 					var fnQueue = (q) => (q !== queue && !depQueues.has(q) && (depQueues.add(q), q && !q.d && (fn.r++, q.push(fn))));
/******/ 					currentDeps.map((dep) => (dep[webpackQueues](fnQueue)));
/******/ 				});
/******/ 				return fn.r ? promise : getResult();
/******/ 			}, (err) => ((err ? reject(promise[webpackError] = err) : outerResolve(exports)), resolveQueue(queue)));
/******/ 			queue && queue.d < 0 && (queue.d = 0);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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