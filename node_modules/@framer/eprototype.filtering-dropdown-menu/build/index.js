(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), require("react")) : factory(root["Framer"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/]build.index.js/.exec(__module_i) || [])[1]
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./package.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone8-space-gray/build/index.js":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/admin/Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone8-space-gray/build/index.js ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
class DeviceSkin {
    constructor() {
        this.image = "device.png";
        this.imageWidth = 871;
        this.imageHeight = 1776;
        this.padding = 40;
        this.background = "black";
    }
}
exports.DeviceSkin = DeviceSkin;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Filtering_Dropdown_Menu.tsx": "./code/Filtering_Dropdown_Menu.tsx",
	"./Interface_Dropdown.tsx": "./code/Interface_Dropdown.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	var module = __webpack_require__(id);
	return module;
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/Filtering_Dropdown_Menu.tsx":
/*!******************************************!*\
  !*** ./code/Filtering_Dropdown_Menu.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst options1 = [\n    { value: \"one\", label: \"One\" },\n    { value: \"two\", label: \"Two\" }\n];\nconst options2 = [\n    { value: \"one-a\", label: \"One A\", link: \"one\" },\n    { value: \"one-b\", label: \"One B\", link: \"one\" },\n    { value: \"two-a\", label: \"Two A\", link: \"two\" },\n    { value: \"two-b\", label: \"Two B\", link: \"two\" }\n];\nclass Filtering_Dropdown_Menu extends React.Component {\n    constructor(props) {\n        window[\"__checkBudget__\"]();\n        super(props);\n        this.state = {\n            selectedOption: { value: \"one\" },\n            selectedOption2: { value: \"\" }\n        };\n        this.handleChange1 = this.handleChange1.bind(this);\n        this.handleChange2 = this.handleChange2.bind(this);\n    }\n    handleChange1(e) {\n        window[\"__checkBudget__\"]();\n        console.log(e);\n        this.setState({\n            selectedOption: { value: e.target.value }\n        });\n    }\n    ;\n    handleChange2(e) {\n        window[\"__checkBudget__\"]();\n        this.setState({\n            selectedOption2: { value: e.target.value }\n        });\n    }\n    ;\n    render() {\n        window[\"__checkBudget__\"]();\n        const filteredOptions = options2.filter(o => o.link === this.state.selectedOption.value);\n        return (React.createElement(\"div\", null,\n            React.createElement(\"div\", null,\n                React.createElement(\"label\", null, \"Select one\"),\n                React.createElement(\"select\", { value: this.state.selectedOption.value, onChange: this.handleChange1 }, options1.map(tag => (React.createElement(\"option\", null, tag.value))))),\n            React.createElement(\"div\", null,\n                React.createElement(\"label\", null, \"Then the other\"),\n                React.createElement(\"select\", { value: this.state.selectedOption2.value, onChange: this.handleChange2 }, filteredOptions.map(tag => (React.createElement(\"option\", null, tag.value)))))));\n    }\n}\nexports.Filtering_Dropdown_Menu = Filtering_Dropdown_Menu;\nexports.__info__ = [{ name: \"Filtering_Dropdown_Menu\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0ZpbHRlcmluZ19Ecm9wZG93bl9NZW51LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQSxLQUFLLDZCQUE2QjtBQUNsQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUssOENBQThDO0FBQ25ELEtBQUssOENBQThDO0FBQ25ELEtBQUssOENBQThDO0FBQ25ELEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZUFBZTtBQUM1Qyw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyx1RUFBdUU7QUFDdEg7QUFDQTtBQUNBLCtDQUErQyx3RUFBd0U7QUFDdkg7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHNFQUFzRSIsImZpbGUiOiIuL2NvZGUvRmlsdGVyaW5nX0Ryb3Bkb3duX01lbnUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IG9wdGlvbnMxID0gW1xuICAgIHsgdmFsdWU6IFwib25lXCIsIGxhYmVsOiBcIk9uZVwiIH0sXG4gICAgeyB2YWx1ZTogXCJ0d29cIiwgbGFiZWw6IFwiVHdvXCIgfVxuXTtcbmNvbnN0IG9wdGlvbnMyID0gW1xuICAgIHsgdmFsdWU6IFwib25lLWFcIiwgbGFiZWw6IFwiT25lIEFcIiwgbGluazogXCJvbmVcIiB9LFxuICAgIHsgdmFsdWU6IFwib25lLWJcIiwgbGFiZWw6IFwiT25lIEJcIiwgbGluazogXCJvbmVcIiB9LFxuICAgIHsgdmFsdWU6IFwidHdvLWFcIiwgbGFiZWw6IFwiVHdvIEFcIiwgbGluazogXCJ0d29cIiB9LFxuICAgIHsgdmFsdWU6IFwidHdvLWJcIiwgbGFiZWw6IFwiVHdvIEJcIiwgbGluazogXCJ0d29cIiB9XG5dO1xuY2xhc3MgRmlsdGVyaW5nX0Ryb3Bkb3duX01lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICBzZWxlY3RlZE9wdGlvbjogeyB2YWx1ZTogXCJvbmVcIiB9LFxuICAgICAgICAgICAgc2VsZWN0ZWRPcHRpb24yOiB7IHZhbHVlOiBcIlwiIH1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UxID0gdGhpcy5oYW5kbGVDaGFuZ2UxLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlMiA9IHRoaXMuaGFuZGxlQ2hhbmdlMi5iaW5kKHRoaXMpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2UxKGUpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uOiB7IHZhbHVlOiBlLnRhcmdldC52YWx1ZSB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICA7XG4gICAgaGFuZGxlQ2hhbmdlMihlKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uMjogeyB2YWx1ZTogZS50YXJnZXQudmFsdWUgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgO1xuICAgIHJlbmRlcigpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnMyLmZpbHRlcihvID0+IG8ubGluayA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbi52YWx1ZSk7XG4gICAgICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBcIlNlbGVjdCBvbmVcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uLnZhbHVlLCBvbkNoYW5nZTogdGhpcy5oYW5kbGVDaGFuZ2UxIH0sIG9wdGlvbnMxLm1hcCh0YWcgPT4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIiwgbnVsbCwgdGFnLnZhbHVlKSkpKSksXG4gICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIG51bGwsXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImxhYmVsXCIsIG51bGwsIFwiVGhlbiB0aGUgb3RoZXJcIiksXG4gICAgICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiLCB7IHZhbHVlOiB0aGlzLnN0YXRlLnNlbGVjdGVkT3B0aW9uMi52YWx1ZSwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlMiB9LCBmaWx0ZXJlZE9wdGlvbnMubWFwKHRhZyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBudWxsLCB0YWcudmFsdWUpKSkpKSkpO1xuICAgIH1cbn1cbmV4cG9ydHMuRmlsdGVyaW5nX0Ryb3Bkb3duX01lbnUgPSBGaWx0ZXJpbmdfRHJvcGRvd25fTWVudTtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIkZpbHRlcmluZ19Ecm9wZG93bl9NZW51XCIsIGNoaWxkcmVuOiBmYWxzZSwgdHlwZTogXCJjb21wb25lbnRcIiB9XTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./code/Filtering_Dropdown_Menu.tsx\n");

/***/ }),

/***/ "./code/Interface_Dropdown.tsx":
/*!*************************************!*\
  !*** ./code/Interface_Dropdown.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst framer_1 = __webpack_require__(/*! framer */ \"framer\");\nconst style = {\n    height: 400,\n    width: 250,\n    display: \"inline\",\n    alignItems: \"center\",\n    justifyContent: \"center\",\n    textAlign: \"left\",\n    fontSize: 25,\n    color: \"#000000\",\n    padding: 10,\n    overflow: \"hidden\"\n};\nclass Interface_Dropdown extends React.Component {\n    constructor(props) {\n        window[\"__checkBudget__\"]();\n        super(props);\n        this.selectRef = React.createRef();\n        this.handleChange1 = this.handleChange1.bind(this);\n        this.handleChange2 = this.handleChange2.bind(this);\n        this.state = { selectedOption1: null, selectedOption2: null };\n    }\n    componentDidMount() {\n        window[\"__checkBudget__\"]();\n        this.selectRef.current;\n    }\n    handleChange1(event) {\n        window[\"__checkBudget__\"]();\n        console.log(\"handle change 1, event is \", event);\n        this.setState({ selectedOption1: event.target.value || null });\n    }\n    handleChange2(event) {\n        window[\"__checkBudget__\"]();\n        console.log(\"handle change 2, event is \", event);\n        this.setState({ selectedOption2: event.target.value || null });\n    }\n    render() {\n        window[\"__checkBudget__\"]();\n        const options1 = [\n            { value: \"\", label: \"Default\" },\n            { value: \"one\", label: \"One\" },\n            { value: \"two\", label: \"Two\" }\n        ];\n        const options2 = [\n            { value: \"\", label: \"Default\" },\n            { value: \"one-a\", label: \"One A\", link: \"one\" },\n            { value: \"one-b\", label: \"One B\", link: \"one\" },\n            { value: \"two-a\", label: \"Two A\", link: \"two\" },\n            { value: \"two-b\", label: \"Two B\", link: \"two\" }\n        ];\n        const filteredOptions = options2.filter(o => o.link === this.state.selectedOption1);\n        return (React.createElement(\"div\", { style: style },\n            React.createElement(\"div\", null,\n                React.createElement(\"label\", null, \"Select This\"),\n                React.createElement(\"select\", { name: \"form-field-name\", value: this.state.selectedOption1 || \"\", onChange: this.handleChange1 }, options1.map(tag => (React.createElement(\"option\", null, tag.value)))),\n                React.createElement(\"input\", { type: \"button\", onClick: () => this.setState({ selectedOption1: null }), value: \"Reset\" })),\n            React.createElement(\"div\", null,\n                React.createElement(\"label\", null, \"Select That\"),\n                React.createElement(\"select\", { name: \"form-field-name\", value: this.state.selectedOption2 || \"\", onChange: this.handleChange2 }, filteredOptions.map(tag => (React.createElement(\"option\", null, tag.value)))))));\n    }\n}\n// Set default properties\nInterface_Dropdown.defaultProps = {\n    text: \"Hello World!\"\n};\n// Items shown in property panel\nInterface_Dropdown.propertyControls = {\n    text: { type: framer_1.ControlType.String, title: \"Text\" }\n};\nexports.Interface_Dropdown = Interface_Dropdown;\nexports.__info__ = [{ name: \"Interface_Dropdown\", children: false, type: \"component\" }];\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb2RlL0ludGVyZmFjZV9Ecm9wZG93bi50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSw4Q0FBOEMsY0FBYztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBOEM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQThDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSw4QkFBOEI7QUFDM0MsYUFBYSw2QkFBNkI7QUFDMUMsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhLDhCQUE4QjtBQUMzQyxhQUFhLDhDQUE4QztBQUMzRCxhQUFhLDhDQUE4QztBQUMzRCxhQUFhLDhDQUE4QztBQUMzRCxhQUFhO0FBQ2I7QUFDQTtBQUNBLDRDQUE0QyxlQUFlO0FBQzNEO0FBQ0E7QUFDQSwrQ0FBK0MsaUdBQWlHO0FBQ2hKLDhDQUE4QywrQ0FBK0Msd0JBQXdCLG1CQUFtQjtBQUN4STtBQUNBO0FBQ0EsK0NBQStDLGlHQUFpRztBQUNoSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxxQkFBcUIsaUVBQWlFIiwiZmlsZSI6Ii4vY29kZS9JbnRlcmZhY2VfRHJvcGRvd24udHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbmNvbnN0IGZyYW1lcl8xID0gcmVxdWlyZShcImZyYW1lclwiKTtcbmNvbnN0IHN0eWxlID0ge1xuICAgIGhlaWdodDogNDAwLFxuICAgIHdpZHRoOiAyNTAsXG4gICAgZGlzcGxheTogXCJpbmxpbmVcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHRleHRBbGlnbjogXCJsZWZ0XCIsXG4gICAgZm9udFNpemU6IDI1LFxuICAgIGNvbG9yOiBcIiMwMDAwMDBcIixcbiAgICBwYWRkaW5nOiAxMCxcbiAgICBvdmVyZmxvdzogXCJoaWRkZW5cIlxufTtcbmNsYXNzIEludGVyZmFjZV9Ecm9wZG93biBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHN1cGVyKHByb3BzKTtcbiAgICAgICAgdGhpcy5zZWxlY3RSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2UxID0gdGhpcy5oYW5kbGVDaGFuZ2UxLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlMiA9IHRoaXMuaGFuZGxlQ2hhbmdlMi5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZE9wdGlvbjE6IG51bGwsIHNlbGVjdGVkT3B0aW9uMjogbnVsbCB9O1xuICAgIH1cbiAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIHRoaXMuc2VsZWN0UmVmLmN1cnJlbnQ7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZTEoZXZlbnQpIHtcbiAgICAgICAgd2luZG93W1wiX19jaGVja0J1ZGdldF9fXCJdKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxlIGNoYW5nZSAxLCBldmVudCBpcyBcIiwgZXZlbnQpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb24xOiBldmVudC50YXJnZXQudmFsdWUgfHwgbnVsbCB9KTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlMihldmVudCkge1xuICAgICAgICB3aW5kb3dbXCJfX2NoZWNrQnVkZ2V0X19cIl0oKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJoYW5kbGUgY2hhbmdlIDIsIGV2ZW50IGlzIFwiLCBldmVudCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE9wdGlvbjI6IGV2ZW50LnRhcmdldC52YWx1ZSB8fCBudWxsIH0pO1xuICAgIH1cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIHdpbmRvd1tcIl9fY2hlY2tCdWRnZXRfX1wiXSgpO1xuICAgICAgICBjb25zdCBvcHRpb25zMSA9IFtcbiAgICAgICAgICAgIHsgdmFsdWU6IFwiXCIsIGxhYmVsOiBcIkRlZmF1bHRcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJvbmVcIiwgbGFiZWw6IFwiT25lXCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidHdvXCIsIGxhYmVsOiBcIlR3b1wiIH1cbiAgICAgICAgXTtcbiAgICAgICAgY29uc3Qgb3B0aW9uczIgPSBbXG4gICAgICAgICAgICB7IHZhbHVlOiBcIlwiLCBsYWJlbDogXCJEZWZhdWx0XCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwib25lLWFcIiwgbGFiZWw6IFwiT25lIEFcIiwgbGluazogXCJvbmVcIiB9LFxuICAgICAgICAgICAgeyB2YWx1ZTogXCJvbmUtYlwiLCBsYWJlbDogXCJPbmUgQlwiLCBsaW5rOiBcIm9uZVwiIH0sXG4gICAgICAgICAgICB7IHZhbHVlOiBcInR3by1hXCIsIGxhYmVsOiBcIlR3byBBXCIsIGxpbms6IFwidHdvXCIgfSxcbiAgICAgICAgICAgIHsgdmFsdWU6IFwidHdvLWJcIiwgbGFiZWw6IFwiVHdvIEJcIiwgbGluazogXCJ0d29cIiB9XG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkT3B0aW9ucyA9IG9wdGlvbnMyLmZpbHRlcihvID0+IG8ubGluayA9PT0gdGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbjEpO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgeyBzdHlsZTogc3R5bGUgfSxcbiAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgbnVsbCxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIiwgbnVsbCwgXCJTZWxlY3QgVGhpc1wiKSxcbiAgICAgICAgICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIsIHsgbmFtZTogXCJmb3JtLWZpZWxkLW5hbWVcIiwgdmFsdWU6IHRoaXMuc3RhdGUuc2VsZWN0ZWRPcHRpb24xIHx8IFwiXCIsIG9uQ2hhbmdlOiB0aGlzLmhhbmRsZUNoYW5nZTEgfSwgb3B0aW9uczEubWFwKHRhZyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBudWxsLCB0YWcudmFsdWUpKSkpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCB7IHR5cGU6IFwiYnV0dG9uXCIsIG9uQ2xpY2s6ICgpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE9wdGlvbjE6IG51bGwgfSksIHZhbHVlOiBcIlJlc2V0XCIgfSkpLFxuICAgICAgICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBudWxsLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiLCBudWxsLCBcIlNlbGVjdCBUaGF0XCIpLFxuICAgICAgICAgICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIiwgeyBuYW1lOiBcImZvcm0tZmllbGQtbmFtZVwiLCB2YWx1ZTogdGhpcy5zdGF0ZS5zZWxlY3RlZE9wdGlvbjIgfHwgXCJcIiwgb25DaGFuZ2U6IHRoaXMuaGFuZGxlQ2hhbmdlMiB9LCBmaWx0ZXJlZE9wdGlvbnMubWFwKHRhZyA9PiAoUmVhY3QuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiLCBudWxsLCB0YWcudmFsdWUpKSkpKSkpO1xuICAgIH1cbn1cbi8vIFNldCBkZWZhdWx0IHByb3BlcnRpZXNcbkludGVyZmFjZV9Ecm9wZG93bi5kZWZhdWx0UHJvcHMgPSB7XG4gICAgdGV4dDogXCJIZWxsbyBXb3JsZCFcIlxufTtcbi8vIEl0ZW1zIHNob3duIGluIHByb3BlcnR5IHBhbmVsXG5JbnRlcmZhY2VfRHJvcGRvd24ucHJvcGVydHlDb250cm9scyA9IHtcbiAgICB0ZXh0OiB7IHR5cGU6IGZyYW1lcl8xLkNvbnRyb2xUeXBlLlN0cmluZywgdGl0bGU6IFwiVGV4dFwiIH1cbn07XG5leHBvcnRzLkludGVyZmFjZV9Ecm9wZG93biA9IEludGVyZmFjZV9Ecm9wZG93bjtcbmV4cG9ydHMuX19pbmZvX18gPSBbeyBuYW1lOiBcIkludGVyZmFjZV9Ecm9wZG93blwiLCBjaGlsZHJlbjogZmFsc2UsIHR5cGU6IFwiY29tcG9uZW50XCIgfV07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./code/Interface_Dropdown.tsx\n");

/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared(); // CANVAS_DATA;


/***/ }),

/***/ "./package.js":
/*!********************!*\
  !*** ./package.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const package = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

// This is a special webpack thing that watches the whole directory
// https://github.com/webpack/docs/wiki/context
const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

ctx.keys().forEach(key => {
    package.sourceModules[key] = () => ctx(key)
})

// The packages are passed in through a template
const packages = {}

                packages["@framer/framer.device-skin-apple-iphone8-space-gray"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-skin-apple-iphone8-space-gray */ "../../../../Applications/Framer X.app/Contents/Resources/Server/lib/framer-package-loader.js!./node_modules/@framer/framer.device-skin-apple-iphone8-space-gray/build/index.js")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-skin-apple-iphone8-space-gray","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceSkin","type":"deviceSkin"}]}}
                    return package
                }

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"0.9.2","main":"build/framer.js","types":"build/framer.d.ts","author":"Framer","license":"MIT","scripts":{"coverage":"jest --config jest.json --coverage","test":"jest --config jest.json","watch":"jest --config jest.json --watch"},"dependencies":{"draft-js":"0.10.4","eventemitter3":"^3.1.0","hsluv":"^0.0.3","immutable":"^3.8.2"},"devDependencies":{"@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/node":"^9.6.0","@types/react":"^16.0.0","@types/react-dom":"^16.0.0","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","dts-bundle":"^0.7.3","enzyme":"^3.3.0","enzyme-adapter-react-16":"^1.1.1","fork-ts-checker-webpack-plugin":"^0.4.1","hoist-non-react-statics":"^2.5.0","jest":"^23.1.0","jest-diff":"^22.0.3","jest-junit":"^3.4.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.5.0","react-dev-utils":"^5.0.1","react-dom":"^16.5.0","ts-jest":"^22.4.5","ts-loader":"^4.1.0","typescript":"^3.0.1","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^2.0.13","webpack-dev-server":"^3.1.4","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.5.0","react-dom":"^16.5.0"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneX","type":"device"},{"name":"FramerGoogleNexus4","type":"device"},{"name":"FramerGoogleNexus5X","type":"device"},{"name":"FramerGoogleNexus6","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerHTCOneA9","type":"device"},{"name":"FramerMicrosoftLumia950","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS8","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, scripts, name, version, default */
/***/ (function(module) {

module.exports = {"main":"build/index.js","license":"MIT","devDependencies":{"@framer/framer.device-skin-apple-iphone8-space-gray":"^1.0.0","@types/react":"^16.4.16","framer":"^0.9.2","react-scripts":"latest"},"peerDependencies":{"framer":"^0.9.2","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"6112cc5f-24b4-4713-ab34-e9896d098ac9","displayName":"Filtering Dropdown Menu"},"author":"Emilie Pedersen","dependencies":{"@types/react":"16.3.17","@types/react-dom":"16.0.6","react":"16.1.1","react-dom":"16.1.1","react-select":"1.1.0"},"scripts":{"start":"react-scripts start","build":"react-scripts build","test":"react-scripts test --env=jsdom","eject":"react-scripts eject"},"name":"@framer/eprototype.filtering-dropdown-menu","version":"1.2.0"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});