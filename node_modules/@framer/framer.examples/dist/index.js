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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules[/].*)[/](build|dist).index.js/.exec(__module_i) || [])[1]
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

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ActionSheet.tsx": "./code/ActionSheet.tsx",
	"./AlertView.tsx": "./code/AlertView.tsx",
	"./NavigationBar.tsx": "./code/NavigationBar.tsx",
	"./NavigationBarLarge.tsx": "./code/NavigationBarLarge.tsx",
	"./PageControl.tsx": "./code/PageControl.tsx",
	"./ProgressIndicator.tsx": "./code/ProgressIndicator.tsx",
	"./SearchBar.tsx": "./code/SearchBar.tsx",
	"./SegmentedControl.tsx": "./code/SegmentedControl.tsx",
	"./Slider.tsx": "./code/Slider.tsx",
	"./StatusBar.tsx": "./code/StatusBar.tsx",
	"./Switch.tsx": "./code/Switch.tsx",
	"./Toolbar.tsx": "./code/Toolbar.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/ActionSheet.tsx":
/*!******************************!*\
  !*** ./code/ActionSheet.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWN0aW9uU2hlZXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0FjdGlvblNoZWV0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBc0Q7QUFnQnRELE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUFoRTs7UUF1QkksZ0JBQVcsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFOztZQUM1QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUNsQyxJQUFJLENBQUMsV0FBVztnQkFBRSxPQUFNO1lBQ3hCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUM5QyxXQUFXLENBQUMsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFBO1NBQ2xDLENBQUE7UUFFRCxpQkFBWSxHQUFHLEdBQUcsRUFBRTs7WUFDaEIsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7WUFDekQsT0FBTyxDQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDbEYsQ0FBQTtJQXVGTCxDQUFDO0lBckZHLE1BQU07O1FBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBQ2xFLE1BQU0sV0FBVyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUE7UUFFOUIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFBO1FBRXhDLE1BQU0sT0FBTyxHQUFHLFlBQVksQ0FBQyxHQUFH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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class ActionSheet extends React.Component {
    constructor() {
        super(...arguments);
        this.onTapAction = (index) => {
            window["__checkBudget__"]();
            const { onTapAction } = this.props;
            if (!onTapAction)
                return;
            const actionTitle = this.actionTitles()[index];
            onTapAction(index, actionTitle);
        };
        this.actionTitles = () => {
            window["__checkBudget__"]();
            const { action1, action2, action3, action4 } = this.props;
            return [action1, action2, action3, action4].filter(action => action.length > 0);
        };
    }
    render() {
        window["__checkBudget__"]();
        const { title, tintColor, dimOverlay, width, height } = this.props;
        const buttonWidth = width - 16;
        const actionTitles = this.actionTitles();
        const buttons = actionTitles.map((acionTitle, index) => {
            window["__checkBudget__"]();
            const isTop = title.length === 0 && index === 0;
            const isBottom = index === actionTitles.length - 1;
            return (React.createElement("div", { style: {
                    width: buttonWidth,
                    height: 56,
                    lineHeight: "56px",
                    textAlign: "center",
                    borderTopLeftRadius: isTop ? 14 : 0,
                    borderTopRightRadius: isTop ? 14 : 0,
                    borderBottomLeftRadius: isBottom ? 14 : 0,
                    borderBottomRightRadius: isBottom ? 14 : 0,
                    background: "rgba(248,248,248,.82)",
                    boxShadow: isBottom ? undefined : dividerShadow,
                    backdropFilter: "blur(20px)",
                }, key: index, onClick: this.onTapAction.bind(this, index) }, acionTitle));
        });
        return (React.createElement("div", { style: {
                width,
                height,
                color: tintColor,
                fontSize: 20,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                background: dimOverlay ? "rgba(4,4,15,.4)" : undefined,
            } },
            title && (React.createElement("div", { style: {
                    width: buttonWidth,
                    height: 45,
                    lineHeight: "45px",
                    textAlign: "center",
                    borderTopLeftRadius: 14,
                    borderTopRightRadius: 14,
                    background: "rgba(248,248,248,.82)",
                    fontSize: 13,
                    color: "#8E8E93",
                    boxShadow: actionTitles.length > 0 ? dividerShadow : undefined,
                    backdropFilter: "blur(20px)",
                }, onClick: this.props.onCancel }, title)),
            buttons,
            React.createElement("div", { style: {
                    width: width - 16,
                    height: 56,
                    lineHeight: `${56}px`,
                    textAlign: "center",
                    borderRadius: 14,
                    marginTop: 8,
                    marginBottom: 10,
                    background: "white",
                } }, "Cancel")));
    }
}
ActionSheet.defaultProps = {
    title: "A short description of the actions goes here.",
    action1: "Action 1",
    action2: "Action 2",
    action3: "",
    action4: "",
    tintColor: "#007AFF",
    dimOverlay: true,
    width: 375,
    height: 375,
};
ActionSheet.propertyControls = {
    title: { type: framer_1.ControlType.String, title: "Title" },
    action1: { type: framer_1.ControlType.String, title: "Action 1" },
    action2: { type: framer_1.ControlType.String, title: "Action 2" },
    action3: { type: framer_1.ControlType.String, title: "Action 3" },
    action4: { type: framer_1.ControlType.String, title: "Action 4" },
    tintColor: { type: framer_1.ControlType.Color, title: "Tint" },
    dimOverlay: { type: framer_1.ControlType.Boolean, disabledTitle: "Hide", enabledTitle: "Show", title: "DimOverlay" },
};
exports.ActionSheet = ActionSheet;
const dividerShadow = "inset 0 -1px 0 -0.5px rgba(0,0,0,.05)";
exports.__info__ = [{ name: "ActionSheet", children: false, type: "component" }];


/***/ }),

/***/ "./code/AlertView.tsx":
/*!****************************!*\
  !*** ./code/AlertView.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWxlcnRWaWV3LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9BbGVydFZpZXcudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUEwRTtBQWdCMUUsTUFBYSxTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQXlCO0lBNkIxRCxNQUFNOztRQUNGLE1BQU0sRUFDRixLQUFLLEVBQ0wsT0FBTyxFQUNQLE9BQU8sRUFDUCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxnQkFBZ0IsRUFDaEIsYUFBYSxFQUNiLGVBQWUsRUFDZixLQUFLLEVBQ0wsTUFBTSxHQUNULEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUVkLE9BQU8sQ0FDSCxvQkFBQyxjQUFLLElBQ0YsS0FBSyxFQUFFLEtBQUssRUFDWixNQUFNLEVBQUUsTUFBTSxFQUNkLFVBQVUsRUFBRSx1QkFBdUIsRUFDbkMsTUFBTSxFQUFFLEVBQUUsRUFDVixRQUFRLEVBQUUsUUFBUSxFQUNsQixLQUFLLEVBQUU7Z0JBQ0gsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osU0FBUyxFQUFFLFFBQVE7Z0JBQ25CLGNBQWMsRUFBRSxZQUFZO2FBQy9CO1lBRUQsb0JBQUMsY0FBSyxJQUNGLEdBQUcsRUFBRSxFQUFFLEVBQ1AsTUFBTSxFQUFFLEVBQUUsR0FBRyxFQUFFLEVBQ2YsSUFBSSxFQUFFLEVBQUUsRUFDUixLQUFLLEVBQUUsRUFBRSxFQUNULFVBQVUsRUFBRSxJQUFJO2dCQUVoQiw4QkFBTSxLQUFLLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDLEVBQUUsSUFDN0MsS0FBSyxDQUNIO2dCQUNQLDhCQUFNLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUMxQyxPQUFPLENBQ0wsQ0FDSDtZQUNSLG9CQUFDLGNBQUssSUFDRixNQUFNLEVBQUUsRUFBRSxFQUNWLEtBQUssRUFBRSxLQUFLLEVBQ1osSUFBSSxFQUFFLENBQUMsRUFDUCxNQUFNLEVBQUUsQ0FBQyxFQUNULFVBQVUsRUFBRSxJQUFJLEVBQ2hCLEtBQUssRUFBRTtvQkFDSCxRQUFRLEVBQUUsRUFBRTtvQkFDWixLQUFLLEVBQUUsU0FBUztvQkFDaEIsU0FBUyxFQUFFLGVBQWUsV0FBVyxFQUFFO2lCQUMxQztnQkFFQSxTQUFTLElBQUksQ0FDVixvQkFBQyxjQUFLLElBQ0YsTUFBTSxFQUFFLEVBQUUsRUFDVixJQUFJLEVBQUUsQ0FBQyxFQUNQLEtBQUssRUFBRSxLQUFLLEVBQ1osVUFBVSxFQUFFLElBQUksRUFDaEIsS0FBSyxFQUFFLGVBQWUsRUFDdEIsS0FBSyxFQUFFO3dCQUNILFdBQVcsRUFBRSxlQUFlLFdBQVcsRUFBRTtxQkFDNUMsSUFFQSxTQUFTLENBQ04sQ0FDWDtnQkFDRCxvQkFBQyxjQUFLLElBQ0YsTUFBTSxFQUFFLEVBQUUsRUFDVixLQUFLLEVBQUUsQ0FBQyxFQUNSLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUNqQyxVQUFVLEVBQUUsSUFBSSxFQUNoQixLQUFLLEVBQUU7d0JBQ0gsS0FBSyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVM7cUJBQ3BELEVBQ0QsS0FBSyxFQUFFLGFBQWEsSUFFbkIsT0FBTyxDQUNKLENBQ0osQ0FDSixDQUNYLENBQUE7S0FDSjs7QUEvR00sc0JBQVksR0FBRztJQUNsQixLQUFLLEVBQUUsZ0NBQWdDO0lBQ3ZDLE9BQU8sRUFBRSwyREFBMkQ7SUFDcEUsT0FBTyxFQUFFLElBQUk7SUFDYixTQUFTLEVBQUUsRUFBRTtJQUNiLFdBQVcsRUFBRSxLQUFLO0lBQ2xCLFNBQVMsRUFBRSxTQUFTO0lBQ3BCLGdCQUFnQixFQUFFLFNBQVM7SUFDM0IsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsR0FBRztDQUNkLENBQUE7QUFFTSwwQkFBZ0IsR0FBNEI7SUFDL0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbkQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdkQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDdkQsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUU7SUFDM0QsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDaEUsZ0JBQWdCLEVBQUU7UUFDZCxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxHQUFHO1FBQ1YsTUFBTSxDQUFDLEtBQUs7O1lBQ1IsT0FBTyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUE7U0FDNUI7S0FDSjtJQUNELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0NBQ3hELENBQUE7QUEzQkwsOEJBaUhDO0FBRUQsTUFBTSxXQUFXLEdBQUcsbUJBQW1CLENBQUE7QUFDdkMifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class AlertView extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { title, message, primary, secondary, destructive, tintColor, destructiveColor, primaryAction, secondaryAction, width, height, } = this.props;
        return (React.createElement(framer_1.Frame, { width: width, height: height, background: "rgba(248,248,248,.82)", radius: 14, overflow: "hidden", style: {
                fontSize: 17,
                textAlign: "center",
                backdropFilter: "blur(20px)",
            } },
            React.createElement(framer_1.Frame, { top: 18, bottom: 44 + 18, left: 16, right: 16, background: null },
                React.createElement("span", { style: { display: "block", marginBottom: 4 } }, title),
                React.createElement("span", { style: { display: "block", fontSize: 13 } }, message)),
            React.createElement(framer_1.Frame, { height: 44, width: width, left: 0, bottom: 0, background: null, style: {
                    fontSize: 17,
                    color: tintColor,
                    borderTop: `0.5px solid ${borderColor}`,
                } },
                secondary && (React.createElement(framer_1.Frame, { height: 44, left: 0, width: "50%", background: null, onTap: secondaryAction, style: {
                        borderRight: `0.5px solid ${borderColor}`,
                    } }, secondary)),
                React.createElement(framer_1.Frame, { height: 44, right: 0, width: secondary ? "50%" : "100%", background: null, style: {
                        color: destructive ? destructiveColor : tintColor,
                    }, onTap: primaryAction }, primary))));
    }
}
AlertView.defaultProps = {
    title: "Current Location Not Available",
    message: "Your current location can not be determined at this time.",
    primary: "OK",
    secondary: "",
    destructive: false,
    tintColor: "#007AFF",
    destructiveColor: "#FF3B30",
    width: 270,
    height: 140,
};
AlertView.propertyControls = {
    title: { type: framer_1.ControlType.String, title: "Title" },
    message: { type: framer_1.ControlType.String, title: "Message" },
    primary: { type: framer_1.ControlType.String, title: "Primary" },
    secondary: { type: framer_1.ControlType.String, title: "Secondary" },
    destructive: { type: framer_1.ControlType.Boolean, title: "Destructive" },
    destructiveColor: {
        type: framer_1.ControlType.Color,
        title: " ",
        hidden(props) {
            window["__checkBudget__"]();
            return !props.destructive;
        },
    },
    tintColor: { type: framer_1.ControlType.Color, title: "Tint" },
};
exports.AlertView = AlertView;
const borderColor = "rgba(63,63,63,.3)";
exports.__info__ = [{ name: "AlertView", children: false, type: "component" }];


/***/ }),

/***/ "./code/NavigationBar.tsx":
/*!********************************!*\
  !*** ./code/NavigationBar.tsx ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvbkJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvTmF2aWdhdGlvbkJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXNEO0FBaUJ0RCxNQUFhLGFBQWMsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFvQzlELE1BQU07O1FBQ0YsTUFBTSxFQUNGLEtBQUssRUFDTCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsVUFBVSxFQUNWLGVBQWUsRUFDZixLQUFLLEVBQ0wsTUFBTSxHQUNULEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUVkLElBQUksZUFBZSxHQUFHLG1CQUFtQixDQUFBO1FBQ3pDLElBQUksU0FBUyxHQUFHLDZDQUE2QyxDQUFBO1FBRTdELFFBQVEsVUFBVSxFQUFFO1lBQ2hCLEtBQUssT0FBTztnQkFDUixTQUFTLEdBQUcsdUNBQXVDLENBQUE7Z0JBQ25ELGVBQWUsR0FBRyx1QkFBdUIsQ0FBQTtnQkFDekMsTUFBSztZQUNULEtBQUssUUFBUTtnQkFDVCxlQUFlLEdBQUcsZ0JBQWdCLENBQUE7U0FDekM7UUFFRCxPQUFPLENBQ0gsNkJBQ0ksS0FBSyxFQUFFO2dCQUNILEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixlQUFlO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixjQUFjLEVBQUUsWUFBWTtnQkFDNUIsU0FBUztnQkFDVCxRQUFRLEVBQUUsRUFBRTtnQkFDWixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsY0FBYyxFQUFFLGVBQWU7YUFDbEM7WUFFRCw2QkFDSSxLQUFLLEVBQUU7b0JBQ0gsUUFBUSxFQUFFLENBQUM7b0JBQ1gsVUFBVSxFQUFFLENBQUM7b0JBQ2IsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLEVBQUU7b0JBQ1Qs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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class NavigationBar extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { title, backItemTitle, rightItemTitle, showChevron, tintColor, textColor, customBackground, appearance, backAction, rightItemAction, width, height, } = this.props;
        let backgroundColor = "rgba(33,33,33,.72";
        let boxShadow = "inset 0 -1px 0 -0.5px rgba(255,255,255,.16)";
        switch (appearance) {
            case "light":
                boxShadow = "inset 0 -1px 0 -0.5px rgba(0,0,0,.05)";
                backgroundColor = "rgba(248,248,248,.82)";
                break;
            case "custom":
                backgroundColor = customBackground;
        }
        return (React.createElement("div", { style: {
                width,
                height,
                backgroundColor,
                color: tintColor,
                backdropFilter: "blur(10px)",
                boxShadow,
                fontSize: 17,
                padding: "32px 16px 0",
                display: "flex",
                justifyContent: "space-between",
            } },
            React.createElement("div", { style: {
                    flexGrow: 2,
                    flexShrink: 0,
                    height: 20,
                    width: 10,
                    textAlign: "left",
                }, onClick: backAction },
                showChevron && (React.createElement("div", { style: { float: "left", marginLeft: -7, marginRight: 7 }, dangerouslySetInnerHTML: { __html: chevron(tintColor) } })),
                backItemTitle),
            React.createElement("div", { style: { color: textColor } }, title),
            React.createElement("div", { style: {
                    flexGrow: 2,
                    flexShrink: 0,
                    height: 20,
                    width: 10,
                    textAlign: "right",
                }, onClick: rightItemAction }, rightItemTitle)));
    }
}
NavigationBar.defaultProps = {
    title: "Title",
    backItemTitle: "Previous",
    rightItemTitle: "Edit",
    showChevron: true,
    appearance: "light",
    tintColor: "#007AFF",
    textColor: "black",
    customBackground: "#09F",
    width: 375,
    height: 64,
};
NavigationBar.propertyControls = {
    title: { type: framer_1.ControlType.String, title: "Title" },
    backItemTitle: { type: framer_1.ControlType.String, title: "BackTitle" },
    rightItemTitle: { type: framer_1.ControlType.String, title: "RightTitle" },
    showChevron: { type: framer_1.ControlType.Boolean, title: "Chevron" },
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light", "custom"],
        optionTitles: ["Dark", "Light", "Custom"],
        title: "Appearance",
    },
    customBackground: {
        type: framer_1.ControlType.Color,
        title: " ",
        hidden(props) {
            window["__checkBudget__"]();
            return props.appearance !== "custom";
        },
    },
    tintColor: { type: framer_1.ControlType.Color, title: "Tint" },
    textColor: { type: framer_1.ControlType.Color, title: "Text" },
};
exports.NavigationBar = NavigationBar;
function chevron(tint) {
    window["__checkBudget__"]();
    return `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="13px" height="21px" viewBox="0 0 13 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Bars/Navigation-Bar/_/Light/Left-Combinations/Back-Button" transform="translate(-8.000000, -11.000000)" fill="${tint}">
                <path d="M18.0371349,31.5826673 L8.79215185,22.4458042 C8.40261605,22.0611888 8.40261605,21.4398102 8.79215185,21.0541958 L18.0371349,11.9173327 C18.5994648,11.3608891 19.5143745,11.3608891 20.0777032,11.9173327 C20.6400331,12.4737762 20.6400331,13.3768731 20.0777032,13.9333167 L12.1691276,21.7504995 L20.0777032,29.5656843 C20.6400331,30.1231269 20.6400331,31.0262238 20.0777032,31.5826673 C19.5143745,32.1391109 18.5994648,32.1391109 18.0371349,31.5826673" id="Chevron"></path>
            </g>
        </g>
    </svg>`;
}
exports.__info__ = [{ name: "NavigationBar", children: false, type: "component" }];


/***/ }),

/***/ "./code/NavigationBarLarge.tsx":
/*!*************************************!*\
  !*** ./code/NavigationBarLarge.tsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTmF2aWdhdGlvbkJhckxhcmdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9OYXZpZ2F0aW9uQmFyTGFyZ2UudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFzRDtBQWlCdEQsTUFBYSxrQkFBbUIsU0FBUSxLQUFLLENBQUMsU0FBeUI7SUFvQ25FLE1BQU07O1FBQ0YsTUFBTSxFQUNGLEtBQUssRUFDTCxhQUFhLEVBQ2IsY0FBYyxFQUNkLFdBQVcsRUFDWCxTQUFTLEVBQ1QsU0FBUyxFQUNULGdCQUFnQixFQUNoQixVQUFVLEVBQ1YsVUFBVSxFQUNWLGVBQWUsRUFDZixLQUFLLEVBQ0wsTUFBTSxHQUNULEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUVkLElBQUksZUFBZSxHQUFHLG1CQUFtQixDQUFBO1FBQ3pDLElBQUksU0FBUyxHQUFHLDZDQUE2QyxDQUFBO1FBRTdELFFBQVEsVUFBVSxFQUFFO1lBQ2hCLEtBQUssT0FBTztnQkFDUixTQUFTLEdBQUcsdUNBQXVDLENBQUE7Z0JBQ25ELGVBQWUsR0FBRyx1QkFBdUIsQ0FBQTtnQkFDekMsTUFBSztZQUNULEtBQUssUUFBUTtnQkFDVCxlQUFlLEdBQUcsZ0JBQWdCLENBQUE7U0FDekM7UUFFRCxPQUFPLENBQ0gsNkJBQ0ksS0FBSyxFQUFFO2dCQUNILEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixlQUFlO2dCQUNmLEtBQUssRUFBRSxTQUFTO2dCQUNoQixjQUFjLEVBQUUsWUFBWTtnQkFDNUIsU0FBUztnQkFDVCxRQUFRLEVBQUUsRUFBRTtnQkFDWixPQUFPLEVBQUUsYUFBYTtnQkFDdEIsT0FBTyxFQUFFLE1BQU07Z0JBQ2YsY0FBYyxFQUFFLGVBQWU7YUFDbEM7WUFFRCw2QkFDSSxLQUFLLEVBQUU7b0JBQ0gsUUFBUSxFQUFFLENBQUM7b0JBQ1gsVUFBVSxFQUFFLENBQUM7b0JBQ2IsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsS0FBSyxFQUFF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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class NavigationBarLarge extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { title, backItemTitle, rightItemTitle, showChevron, tintColor, textColor, customBackground, appearance, backAction, rightItemAction, width, height, } = this.props;
        let backgroundColor = "rgba(33,33,33,.72";
        let boxShadow = "inset 0 -1px 0 -0.5px rgba(255,255,255,.16)";
        switch (appearance) {
            case "light":
                boxShadow = "inset 0 -1px 0 -0.5px rgba(0,0,0,.05)";
                backgroundColor = "rgba(248,248,248,.82)";
                break;
            case "custom":
                backgroundColor = customBackground;
        }
        return (React.createElement("div", { style: {
                width,
                height,
                backgroundColor,
                color: tintColor,
                backdropFilter: "blur(10px)",
                boxShadow,
                fontSize: 17,
                padding: "32px 16px 0",
                display: "flex",
                justifyContent: "space-between",
            } },
            React.createElement("div", { style: {
                    flexGrow: 2,
                    flexShrink: 0,
                    height: 20,
                    width: 10,
                    textAlign: "left",
                }, onClick: backAction },
                showChevron && (React.createElement("div", { style: { float: "left", marginLeft: -7, marginRight: 7 }, dangerouslySetInnerHTML: { __html: chevron(tintColor) } })),
                backItemTitle),
            React.createElement("div", { style: {
                    flexGrow: 2,
                    flexShrink: 0,
                    height: 20,
                    width: 10,
                    textAlign: "right",
                }, onClick: rightItemAction }, rightItemTitle),
            React.createElement("div", { style: {
                    color: textColor,
                    fontSize: 34,
                    position: "absolute",
                    top: 67,
                    left: 16,
                    right: 16,
                    letterSpacing: 1.8,
                } }, title)));
    }
}
NavigationBarLarge.defaultProps = {
    title: "Large Title",
    backItemTitle: "Previous",
    rightItemTitle: "Edit",
    showChevron: true,
    appearance: "light",
    tintColor: "#007AFF",
    textColor: "black",
    customBackground: "#09F",
    width: 375,
    height: 116,
};
NavigationBarLarge.propertyControls = {
    title: { type: framer_1.ControlType.String, title: "Title" },
    backItemTitle: { type: framer_1.ControlType.String, title: "BackTitle" },
    rightItemTitle: { type: framer_1.ControlType.String, title: "RightTitle" },
    showChevron: { type: framer_1.ControlType.Boolean, title: "Chevron" },
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light", "custom"],
        optionTitles: ["Dark", "Light", "Custom"],
        title: "Appearance",
    },
    customBackground: {
        type: framer_1.ControlType.Color,
        title: " ",
        hidden(props) {
            window["__checkBudget__"]();
            return props.appearance !== "custom";
        },
    },
    tintColor: { type: framer_1.ControlType.Color, title: "Tint" },
    textColor: { type: framer_1.ControlType.Color, title: "Text" },
};
exports.NavigationBarLarge = NavigationBarLarge;
function chevron(tint) {
    window["__checkBudget__"]();
    return `<?xml version="1.0" encoding="UTF-8"?>
    <svg width="13px" height="21px" viewBox="0 0 13 21" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Bars/Navigation-Bar/_/Light/Left-Combinations/Back-Button" transform="translate(-8.000000, -11.000000)" fill="${tint}">
                <path d="M18.0371349,31.5826673 L8.79215185,22.4458042 C8.40261605,22.0611888 8.40261605,21.4398102 8.79215185,21.0541958 L18.0371349,11.9173327 C18.5994648,11.3608891 19.5143745,11.3608891 20.0777032,11.9173327 C20.6400331,12.4737762 20.6400331,13.3768731 20.0777032,13.9333167 L12.1691276,21.7504995 L20.0777032,29.5656843 C20.6400331,30.1231269 20.6400331,31.0262238 20.0777032,31.5826673 C19.5143745,32.1391109 18.5994648,32.1391109 18.0371349,31.5826673" id="Chevron"></path>
            </g>
        </g>
    </svg>`;
}
exports.__info__ = [{ name: "NavigationBarLarge", children: false, type: "component" }];


/***/ }),

/***/ "./code/PageControl.tsx":
/*!******************************!*\
  !*** ./code/PageControl.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFnZUNvbnRyb2wuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1BhZ2VDb250cm9sLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBb0U7QUFvQnBFLE1BQWEsV0FBWSxTQUFRLEtBQUssQ0FBQyxTQUFnQztJQUF2RTs7UUF5QkksVUFBSyxHQUFHO1lBQ0osV0FBVyxFQUFFLENBQUM7WUFDZCxhQUFhLEVBQUUsQ0FBQztZQUNoQixtQkFBbUIsRUFBRSxDQUFDO1lBQ3RCLHFCQUFxQixFQUFFLENBQUM7U0FDM0IsQ0FBQTtRQUVELFNBQUksR0FBRyxHQUFHLEVBQUU7O1lBQ1IsTUFBTSxFQUFFLFFBQVEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7WUFDL0IsTUFBTSxFQUFFLFdBQVcsRUFBRSxhQUFhLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBQ2pELElBQUksV0FBVyxJQUFJLGFBQWEsR0FBRyxDQUFDO2dCQUFFLE9BQU07WUFFNUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsUUFBUSxFQUFFLENBQUE7YUFDYjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsUUFBUSxtQkFBTSxJQUFJLENBQUMsS0FBSyxJQUFFLFdBQVcsRUFBRSxXQUFXLEdBQUcsQ0FBQyxJQUFHLENBQUE7YUFDakU7U0FDSixDQUFBO1FBRUQsYUFBUSxHQUFHLEdBQUcsRUFBRTs7WUFDWixNQUFNLEVBQUUsWUFBWSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUNuQyxNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUNsQyxJQUFJLFdBQVcsSUFBSSxDQUFDO2dCQUFFLE9BQU07WUFFNUIsSUFBSSxZQUFZLEVBQUU7Z0JBQ2QsWUFBWSxFQUFFLENBQUE7YUFDakI7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFFBQVEsbUJBQU0sSUFBSSxDQUFDLEtBQUssSUFBRSxX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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class PageControl extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentPage: 0,
            numberOfPages: 7,
            externalCurrentPage: 0,
            externalNumberOfPages: 7,
        };
        this.next = () => {
            window["__checkBudget__"]();
            const { nextPage } = this.props;
            const { currentPage, numberOfPages } = this.state;
            if (currentPage >= numberOfPages - 1)
                return;
            if (nextPage) {
                nextPage();
            }
            else {
                this.setState(Object.assign({}, this.state, { currentPage: currentPage + 1 }));
            }
        };
        this.previous = () => {
            window["__checkBudget__"]();
            const { previousPage } = this.props;
            const { currentPage } = this.state;
            if (currentPage <= 0)
                return;
            if (previousPage) {
                previousPage();
            }
            else {
                this.setState(Object.assign({}, this.state, { currentPage: currentPage - 1 }));
            }
        };
    }
    componentDidMount() {
        window["__checkBudget__"]();
        const { currentPage, numberOfPages } = this.props;
        this.setState(Object.assign({}, this.state, { currentPage, numberOfPages }));
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        window["__checkBudget__"]();
        let { currentPage, numberOfPages } = nextProps;
        let { externalCurrentPage, externalNumberOfPages } = prevState;
        let update = null;
        if (currentPage !== externalCurrentPage) {
            if (!update)
                update = Object.assign({}, prevState);
            update.currentPage = currentPage;
            update.externalCurrentPage = currentPage;
        }
        if (numberOfPages !== externalNumberOfPages) {
            if (!update)
                update = Object.assign({}, prevState);
            update.numberOfPages = numberOfPages;
            update.externalNumberOfPages = numberOfPages;
        }
        return update;
    }
    render() {
        window["__checkBudget__"]();
        const { width, height, indicatorColor, currentIndicatorColor, } = this.props;
        const { numberOfPages, currentPage } = this.state;
        const dots = [];
        for (let i = 0, il = numberOfPages; i < il; i++) {
            window["__checkBudget__"]();
            const isCurrent = i === currentPage;
            const background = isCurrent
                ? currentIndicatorColor
                : indicatorColor;
            const dot = (React.createElement(framer_1.Frame, { key: i, size: 7, background: background, radius: 7 }));
            dots.push(dot);
        }
        return (React.createElement(framer_1.Stack, { width: "100%", height: "100%", direction: "horizontal", distribution: "center", gap: 9, background: null },
            dots,
            React.createElement(framer_1.Frame, { position: "absolute", left: 0, height: "100%", width: "50%", background: null, onTap: this.previous }),
            React.createElement(framer_1.Frame, { position: "absolute", right: 0, height: "100%", width: "50%", background: null, onTap: this.next })));
    }
}
PageControl.defaultProps = {
    currentPage: 0,
    numberOfPages: 3,
    indicatorColor: "rgba(0,0,0,.32)",
    currentIndicatorColor: "black",
    width: 100,
    height: 20,
};
PageControl.propertyControls = {
    currentPage: {
        type: framer_1.ControlType.Number,
        min: 0,
        title: "Current",
    },
    numberOfPages: {
        type: framer_1.ControlType.Number,
        min: 1,
        title: "Pages",
    },
    indicatorColor: { type: framer_1.ControlType.Color, title: "Indicator" },
    currentIndicatorColor: { type: framer_1.ControlType.Color, title: "Current" },
};
exports.PageControl = PageControl;
exports.__info__ = [{ name: "PageControl", children: false, type: "component" }];


/***/ }),

/***/ "./code/ProgressIndicator.tsx":
/*!************************************!*\
  !*** ./code/ProgressIndicator.tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZ3Jlc3NJbmRpY2F0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL1Byb2dyZXNzSW5kaWNhdG9yLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE4RTtBQVE5RSxTQUFnQixpQkFBaUIsQ0FBQyxFQUM5QixjQUFjLEdBQUcsdUJBQXVCLEdBQ3BDOztJQUNKLE1BQU0sSUFBSSxHQUFHLEVBQUUsQ0FBQTtJQUNmLE1BQU0sUUFBUSxHQUFHLHFCQUFZLEVBQUUsQ0FBQTtJQUUvQixTQUFTLGNBQWMsQ0FBQyxJQUFJOztRQUN4QixNQUFNLFFBQVEsR0FBRyxDQUFDLEVBQUUsQ0FBQTtRQUNwQixNQUFNLGFBQWEsR0FBRyxJQUFJLENBQUE7UUFDMUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFOztZQUMvQyxPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxVQUFVLEVBQ2YsR0FBRyxFQUFFLGtCQUFrQixLQUFLLEVBQUUsRUFDOUIsTUFBTSxFQUFFLElBQUksR0FBRyxDQUFDLEVBQ2hCLEtBQUssRUFBRSxJQUFJLEdBQUcsRUFBRSxFQUNoQixNQUFNLEVBQUUsUUFBUSxHQUFHLEtBQUssRUFDeEIsVUFBVSxFQUFFLGNBQWMsRUFDMUIsTUFBTSxFQUFFLElBQUksR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUNyQixNQUFNLEVBQUUsR0FBRyxFQUNYLE9BQU8sRUFBRSxHQUFHLEVBQ1osT0FBTyxFQUFFLENBQUMsRUFDVixPQUFPLEVBQUUsQ0FBQyxHQUFHLGFBQWEsR0FBRyxLQUFLLEdBQ3BDLENBQ0wsQ0FBQTtTQUNKLENBQUMsQ0FBQTtLQUNMO0lBRUQsU0FBZSxJQUFJOzs7WUFDZixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUE7WUFDbEIsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFBO1lBQ2hCLE1BQU0sVUFBVSxHQUFHLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUE7WUFDaEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTs7Z0JBQzVCLE1BQU0sUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQTthQUNuRTtZQUNELElBQUksRUFBRSxDQUFBOztLQUNUO0lBRUQsSUFBSSxFQUFFLENBQUE7SUFFTixPQUFPLENBQ0gsb0JBQUMsY0FBSyxJQUNGLElBQUksRUFBQyxTQUFTLEVBQ2QsSUFBSSxFQUFFLElBQUksRUFDVixNQUFNLEVBQUUsSUFBSSxFQUNaLFVBQVUsRUFBQyxFQUFFLEVBQ2IsT0FBTyxFQUFFLFFBQVEsSUFFaEIsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUNqQixDQUNYLENBQUE7Q0FDSjtBQW5ERCw4Q0FtREM7QUFFRCxpQkFBaUIsQ0FBQyxZQUFZLEdBQUc7SUFDN0IsS0FBSyxFQUFFLEVBQUU7SUFDVCxNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxpQkFBaUIsRUFBRTtJQUNuQyxjQUFjLEVBQUU7UUFDWixJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLO1FBQ3ZCLEtBQUssRUFBRSxXQUFXO1FBQ2xCLFlBQVksRUFBRSx1QkFBdUI7S0FDeEM7Q0FDSixDQUFDLENBQUE7QUFDRiJ9

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function ProgressIndicator({ indicatorColor = "rgba(142,142,147,100)", }) {
    window["__checkBudget__"]();
    const size = 20;
    const controls = framer_1.useAnimation();
    function buildParticles(size) {
        window["__checkBudget__"]();
        const rotation = -30;
        const opacityReduce = 0.08;
        return Array.from({ length: 12 }).map((n, index) => {
            window["__checkBudget__"]();
            return (React.createElement(framer_1.Frame, { name: "Particle", key: `SpinnerParticle${index}`, height: size / 4, width: size / 10, rotate: rotation * index, background: indicatorColor, radius: size / 10 / 2, center: "x", originX: 0.5, originY: 2, opacity: 1 - opacityReduce * index }));
        });
    }
    function spin() {
        return __awaiter(this, void 0, void 0, function* () {
            window["__checkBudget__"]();
            const delay = 0.05;
            const steps = 12;
            const transition = { duration: 0, delay: delay };
            for (let i = 0; i < steps; i++) {
                window["__checkBudget__"]();
                yield controls.start({ rotateZ: (360 / steps) * i, transition });
            }
            spin();
        });
    }
    spin();
    return (React.createElement(framer_1.Frame, { name: "Spinner", size: size, center: true, background: "", animate: controls }, buildParticles(size)));
}
exports.ProgressIndicator = ProgressIndicator;
ProgressIndicator.defaultProps = {
    width: 40,
    height: 40,
};
framer_1.addPropertyControls(ProgressIndicator, {
    indicatorColor: {
        type: framer_1.ControlType.Color,
        title: "Indicator",
        defaultValue: "rgba(142,142,147,100)",
    },
});
exports.__info__ = [{ name: "ProgressIndicator", children: false, type: "component" }];


/***/ }),

/***/ "./code/SearchBar.tsx":
/*!****************************!*\
  !*** ./code/SearchBar.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VhcmNoQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TZWFyY2hCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFzRDtBQWlCdEQsTUFBYSxTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQWdDO0lBQXJFOztRQWlCSSxVQUFLLEdBQUc7WUFDSixLQUFLLEVBQUUsU0FBUyxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQ25DLGFBQWEsRUFBRSxTQUFTLENBQUMsWUFBWSxDQUFDLEtBQUs7U0FDOUMsQ0FBQTtRQVdELGFBQVEsR0FBRyxDQUFDLEtBQTBDLEVBQUUsRUFBRTs7WUFDdEQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQyxNQUEwQixDQUFBO1lBQzVELE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUE7WUFDM0IsSUFBSSxDQUFDLFFBQVEsbUJBQU0sSUFBSSxDQUFDLEtBQUssSUFBRSxLQUFLLElBQUcsQ0FBQTtZQUN2QyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYTtnQkFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtTQUNoRSxDQUFBO0lBY0wsQ0FBQztJQTVCRyxNQUFNLENBQUMsd0JBQXdCLENBQUMsU0FBZ0IsRUFBRSxTQUFnQjs7UUFDOUQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLFNBQVMsQ0FBQTtRQUMzQixNQUFNLEVBQUUsYUFBYSxFQUFFLEdBQUcsU0FBUyxDQUFBO1FBQ25DLElBQUksS0FBSyxLQUFLLGFBQWEsRUFBRTtZQUN6QixPQUFPLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsQ0FBQTtTQUN6QztRQUNELE9BQU8sSUFBSSxDQUFBO0tBQ2Q7SUFTRCxNQUFNOztRQUNGLE1BQU0sRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDOUQsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFDNUIsT0FBTyxDQUNILCtCQUNJLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUN2QixLQUFLLEVBQUUsS0FBSyxFQUNaLFdBQVcsRUFBRSxXQUFXLEVBQ3hCLEtBQUssb0JBQU8sS0FBSyxJQUFFLGVBQWUsRUFBRSxLQUFLLEVBQUUsU0FBUyxNQUN0RCxDQUNMLENBQUE7S0FDSjs7QUFoRE0sc0JBQVksR0FBRztJQUNsQixLQUFLLEVBQUUsRUFBRTtJQUNULFdBQVcsRUFBRSxRQUFRO0lBQ3JCLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7SUFDVixlQUFlLEVBQUUsd0JBQXdCO0lBQ3pDLFNBQVMsRUFBRSxPQUFPO0NBQ3JCLENBQUE7QUFFTSwwQkFBZ0IsR0FBNEI7SUFDL0MsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUU7SUFDbkQsV0FBVyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxhQUFhLEVBQUU7SUFDL0QsZUFBZSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxZQUFZLEVBQUU7SUFDakUsU0FBUyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Q0FDeEQsQ0FBQTtBQWZMLDhCQWtEQztBQUVELE1BQU0sS0FBSyxHQUF3QjtJQUMvQixZQUFZLEVBQUUsRUFBRTtJQUNoQixNQUFNLEVBQUUsTUFBTTtJQUNkLFdBQVcsRUFBRSxDQUFDO0lBQ2QsWUFBWSxFQUFFLENBQUM7SUFDZixRQUFRLEVBQUUsVUFBVTtJQUNwQixJQUFJLEVBQUUsQ0FBQztJQUNQLEtBQUssRUFBRSxDQUFDO0lBQ1IsR0FBRyxFQUFFLENBQUM7SUFDTixNQUFNLEVBQUUsQ0FBQztDQUNaLENBQUE7QUFDRCJ9

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class SearchBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: SearchBar.defaultProps.value,
            externalValue: SearchBar.defaultProps.value,
        };
        this.onChange = (event) => {
            window["__checkBudget__"]();
            const element = event.nativeEvent.target;
            const value = element.value;
            this.setState(Object.assign({}, this.state, { value }));
            if (this.props.onValueChange)
                this.props.onValueChange(value);
        };
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        window["__checkBudget__"]();
        const { value } = nextProps;
        const { externalValue } = prevState;
        if (value !== externalValue) {
            return { value, externalValue: value };
        }
        return null;
    }
    render() {
        window["__checkBudget__"]();
        const { placeholder, backgroundColor, textColor } = this.props;
        const { value } = this.state;
        return (React.createElement("input", { onChange: this.onChange, value: value, placeholder: placeholder, style: Object.assign({}, style, { backgroundColor, color: textColor }) }));
    }
}
SearchBar.defaultProps = {
    value: "",
    placeholder: "Search",
    width: 200,
    height: 36,
    backgroundColor: "rgba(142,142,142,0.12)",
    textColor: "black",
};
SearchBar.propertyControls = {
    value: { type: framer_1.ControlType.String, title: "Value" },
    placeholder: { type: framer_1.ControlType.String, title: "Placeholder" },
    backgroundColor: { type: framer_1.ControlType.Color, title: "Background" },
    textColor: { type: framer_1.ControlType.Color, title: "Text" },
};
exports.SearchBar = SearchBar;
const style = {
    borderRadius: 10,
    border: "none",
    paddingLeft: 8,
    paddingRight: 8,
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
};
exports.__info__ = [{ name: "SearchBar", children: false, type: "component" }];


/***/ }),

/***/ "./code/SegmentedControl.tsx":
/*!***********************************!*\
  !*** ./code/SegmentedControl.tsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2VnbWVudGVkQ29udHJvbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU2VnbWVudGVkQ29udHJvbC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQW9FO0FBb0JwRSxNQUFhLGdCQUFpQixTQUFRLEtBQUssQ0FBQyxTQUFnQztJQUE1RTs7UUF1QkksVUFBSyxHQUFHO1lBQ0osY0FBYyxFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxjQUFjO1lBQzVELHNCQUFzQixFQUFFLGdCQUFnQixDQUFDLFlBQVksQ0FBQyxjQUFjO1NBQ3ZFLENBQUE7UUFnQkQsaUJBQVksR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFOztZQUM3QixNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUN0QyxJQUFJLGVBQWUsRUFBRTtnQkFDakIsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNoRCxlQUFlLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxDQUFBO2FBQ3ZDO2lCQUFNO2dCQUNILElBQUksQ0FBQyxRQUFRLG1CQUFNLElBQUksQ0FBQyxLQUFLLElBQUUsY0FBYyxFQUFFLEtBQUssSUFBRyxDQUFBO2FBQzFEO1NBQ0osQ0FBQTtRQUVELGtCQUFhLEdBQUcsR0FBRyxFQUFFOztZQUNqQixNQUFNLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUM3RCxNQUFNLGFBQWEsR0FBYSxFQUFFLENBQUE7WUFDbEMsSUFBSSxRQUFRO2dCQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDMUMsSUFBSSxRQUFRO2dCQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDMUMsSUFBSSxRQUFRO2dCQUFF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Q0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUMxRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUMxRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUMxRCxRQUFRLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFFLFdBQVcsRUFBRTtJQUMxRCxjQUFjLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO0lBQ3RFLFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0lBQ3JELFNBQVMsRUFBRSxFQUFFLElBQUksRUFBRSxvQkFBVyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFO0NBQ3hELENBQUE7QUFyQkwsNENBNkdDO0FBQ0QifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class SegmentedControl extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            currentSegment: SegmentedControl.defaultProps.currentSegment,
            externalCurrentSegment: SegmentedControl.defaultProps.currentSegment,
        };
        this.onTapSegment = (index) => {
            window["__checkBudget__"]();
            const { onSegmentChange } = this.props;
            if (onSegmentChange) {
                const segmentTitle = this.segmentTitles()[index];
                onSegmentChange(index, segmentTitle);
            }
            else {
                this.setState(Object.assign({}, this.state, { currentSegment: index }));
            }
        };
        this.segmentTitles = () => {
            window["__checkBudget__"]();
            const { segment1, segment2, segment3, segment4 } = this.props;
            const segmentTitles = [];
            if (segment1)
                segmentTitles.push(segment1);
            if (segment2)
                segmentTitles.push(segment2);
            if (segment3)
                segmentTitles.push(segment3);
            if (segment4)
                segmentTitles.push(segment4);
            return segmentTitles;
        };
    }
    componentDidMount() {
        window["__checkBudget__"]();
        const { currentSegment } = this.props;
        this.setState(Object.assign({}, this.state, { currentSegment }));
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        window["__checkBudget__"]();
        const { currentSegment } = nextProps;
        const { externalCurrentSegment } = prevState;
        if (currentSegment !== externalCurrentSegment) {
            return { currentSegment, externalCurrentSegment: currentSegment };
        }
        return null;
    }
    render() {
        window["__checkBudget__"]();
        const { tintColor, textColor } = this.props;
        const { currentSegment } = this.state;
        return (React.createElement(framer_1.Stack, { width: "100%", height: "100%", backgroundColor: "transparent", radius: 4, overflow: "hidden", direction: "horizontal", gap: 0, style: {
                border: `1px solid ${tintColor}`,
                userSelect: "none",
                WebkitUserSelect: "none",
                cursor: "default",
            } }, this.segmentTitles().map((segmentTitle, idx) => {
            window["__checkBudget__"]();
            const isCurrent = idx === currentSegment;
            const borderLeftEnabled = idx !== 0;
            return (React.createElement(framer_1.Frame, { key: idx, width: "1fr", height: "100%", backgroundColor: isCurrent ? tintColor : "transparent", color: isCurrent ? textColor : tintColor, onTap: this.onTapSegment.bind(this, idx), style: {
                    borderLeft: borderLeftEnabled
                        ? `1px solid ${tintColor}`
                        : undefined,
                    fontSize: 13,
                } }, segmentTitle));
        })));
    }
}
SegmentedControl.defaultProps = {
    currentSegment: 0,
    segment1: "Item 1",
    segment2: "Item 2",
    segment3: "",
    segment4: "",
    tintColor: "#007AFF",
    textColor: "white",
    width: 120,
    height: 27,
};
SegmentedControl.propertyControls = {
    segment1: { type: framer_1.ControlType.String, title: "Segment 1" },
    segment2: { type: framer_1.ControlType.String, title: "Segment 2" },
    segment3: { type: framer_1.ControlType.String, title: "Segment 3" },
    segment4: { type: framer_1.ControlType.String, title: "Segment 4" },
    currentSegment: { type: framer_1.ControlType.Number, min: 0, title: "Current" },
    tintColor: { type: framer_1.ControlType.Color, title: "Tint" },
    textColor: { type: framer_1.ControlType.Color, title: "Text" },
};
exports.SegmentedControl = SegmentedControl;
exports.__info__ = [{ name: "SegmentedControl", children: false, type: "component" }];


/***/ }),

/***/ "./code/Slider.tsx":
/*!*************************!*\
  !*** ./code/Slider.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xpZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TbGlkZXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUErRTtBQWlCL0UsTUFBYSxNQUFPLFNBQVEsS0FBSyxDQUFDLFNBQWdDO0lBQWxFOztRQWlCSSxVQUFLLEdBQUc7WUFDSixLQUFLLEVBQUUsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLO1lBQ2hDLGFBQWEsRUFBRSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUs7U0FDM0MsQ0FBQTtRQWVELFdBQU0sR0FBRyxDQUFDLEtBQVksRUFBRSxFQUFFOztZQUN0QixNQUFNLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7WUFDM0MsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQTtZQUM3QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFBO1lBQ2pFLElBQUksQ0FBQyxRQUFRLG1CQUFNLElBQUksQ0FBQyxLQUFLLElBQUUsS0FBSyxJQUFHLENBQUE7WUFDdkMsSUFBSSxhQUFhLEVBQUU7Z0JBQ2YsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFBO2FBQ3ZCO1NBQ0osQ0FBQTtJQStFTCxDQUFDO0lBcEdHLGlCQUFpQjs7UUFDYixNQUFNLEVBQUUsS0FBSyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtRQUM1QixJQUFJLENBQUMsUUFBUSxtQkFBTSxJQUFJLENBQUMsS0FBSyxJQUFFLEtBQUssSUFBRyxDQUFBO0tBQzFDO0lBRUQsTUFBTSxDQUFDLHdCQUF3QixDQUFDLFNBQWdCLEVBQUUsU0FBZ0I7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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Slider extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            value: Slider.defaultProps.value,
            externalValue: Slider.defaultProps.value,
        };
        this.onMove = (event) => {
            window["__checkBudget__"]();
            const { width, onValueChange } = this.props;
            const centerX = event.x + Slider.knobSize / 2;
            const value = Math.min(Math.max(0, (centerX / width) * 100), 100);
            this.setState(Object.assign({}, this.state, { value }));
            if (onValueChange) {
                onValueChange(value);
            }
        };
    }
    componentDidMount() {
        window["__checkBudget__"]();
        const { value } = this.props;
        this.setState(Object.assign({}, this.state, { value }));
    }
    static getDerivedStateFromProps(nextProps, prevState) {
        window["__checkBudget__"]();
        const { value } = nextProps;
        if (value !== prevState.externalValue) {
            return { value, externalValue: value };
        }
        return null;
    }
    render() {
        window["__checkBudget__"]();
        const { knob, track, tint, width, height } = this.props;
        const value = Math.min(Math.max(this.state.value, 0), 100);
        const ratio = value / 100;
        const left = Math.round(width * ratio - Slider.knobSize / 2);
        const constraints = {
            x: -Slider.knobSize / 2,
            y: height / 2 - Slider.knobSize / 2,
            width: width + Slider.knobSize,
            height: Slider.knobSize,
        };
        return (React.createElement(React.Fragment, null,
            React.createElement(framer_1.Frame, { left: 0, overflow: "hidden", height: 2, width: width, top: height / 2 - 1, background: track, style: { borderRadius: 50 } },
                React.createElement(framer_1.Frame, { width: `${ratio * 100}%`, top: 0, left: 0, bottom: 0, background: tint })),
            React.createElement(framer_1.Draggable, { width: Slider.knobSize, height: Slider.knobSize, constraints: constraints, bounce: false, overdrag: false, onMove: this.onMove, horizontal: true, vertical: false, left: left, top: height / 2 - Slider.knobSize / 2, background: knob, radius: Slider.knobSize, shadows: [
                    {
                        inset: false,
                        color: "rgba(0,0,0,0.1)",
                        x: 0,
                        y: 0,
                        blur: 0,
                        spread: 1,
                    },
                    {
                        inset: false,
                        color: "rgba(0,0,0,0.05)",
                        x: 0,
                        y: 3,
                        blur: 1,
                        spread: 0,
                    },
                    {
                        inset: false,
                        color: "rgba(0,0,0,0.1)",
                        x: 0,
                        y: 2,
                        blur: 2,
                        spread: 0,
                    },
                    {
                        inset: false,
                        color: "rgba(0,0,0,0.05)",
                        x: 0,
                        y: 3,
                        blur: 3,
                        spread: 0,
                    },
                ] })));
    }
}
Slider.defaultProps = {
    width: 120,
    height: 44,
    value: 50,
    knob: "white",
    track: "#A4AAB3",
    tint: "#007AFF",
};
Slider.propertyControls = {
    value: { type: framer_1.ControlType.Number, title: "Value" },
    tint: { type: framer_1.ControlType.Color, title: "Tint" },
};
Slider.knobSize = 28;
exports.Slider = Slider;
exports.__info__ = [{ name: "Slider", children: false, type: "component" }];


/***/ }),

/***/ "./code/StatusBar.tsx":
/*!****************************!*\
  !*** ./code/StatusBar.tsx ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzQmFyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9TdGF0dXNCYXIudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUE2RDtBQWdCN0QsTUFBYSxTQUFVLFNBQVEsS0FBSyxDQUFDLFNBQWdDO0lBQXJFOztRQTJCSSxVQUFLLEdBQUc7WUFDSixJQUFJLEVBQUUsTUFBTTtTQUNmLENBQUE7UUFjRCxlQUFVLEdBQUcsR0FBRyxFQUFFOztZQUNkLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7WUFDdkIsTUFBTSxJQUFJLEdBQ04sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxHQUFHO2dCQUNILENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1lBQ3ZDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssSUFBSTtnQkFBRSxPQUFNO1lBQ3BDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFBO1NBQzFCLENBQUE7SUFpRkwsQ0FBQztJQXJHRyxpQkFBaUI7O1FBQ2IsaUZBQWlGO1FBQ2pGLE1BQU0sS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFBO1FBQ3ZDLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUU7O1lBQ2pDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtTQUNwQixFQUFFLEtBQUssQ0FBQyxDQUFBO0tBQ1o7SUFFRCxvQkFBb0I7O1FBQ2hCLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0tBQ25DO0lBWUQsTUFBTTs7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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class StatusBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            time: "9:00",
        };
        this.updateTime = () => {
            window["__checkBudget__"]();
            const date = new Date();
            const time = ("0" + date.getHours()).slice(-2) +
                ":" +
                ("0" + date.getMinutes()).slice(-2);
            if (this.state.time === time)
                return;
            this.setState({ time });
        };
    }
    componentDidMount() {
        window["__checkBudget__"]();
        // we use a random delay, so just loaded documents don't all fire timers together
        const delay = 900 + Math.random() * 900;
        this.timer = window.setInterval(() => {
            window["__checkBudget__"]();
            this.updateTime();
        }, delay);
    }
    componentWillUnmount() {
        window["__checkBudget__"]();
        window.clearInterval(this.timer);
    }
    render() {
        window["__checkBudget__"]();
        const { carrier, batteryLevel, appearance, width, height } = this.props;
        return (React.createElement(framer_1.Frame, { width: width, height: height, background: null, style: {
                fontSize: 12,
                textAlign: "center",
                color: appearance === "dark" ? "black" : "white",
            } },
            React.createElement(framer_1.Frame, { top: 0, left: 0, right: 0, height: 20, background: null },
                React.createElement(framer_1.Frame, { width: 100, left: 0, top: 0, height: 20, background: null },
                    React.createElement("div", { style: {
                            fill: "black",
                            stroke: "black",
                            width: "auto",
                            float: "left",
                            padding: 3,
                            marginLeft: 2,
                            paddingTop: 3,
                        }, dangerouslySetInnerHTML: {
                            __html: signal(appearance),
                        } }),
                    React.createElement("div", { style: { float: "left", lineHeight: "20px" } }, carrier)),
                React.createElement(framer_1.Frame, { height: 20, top: 0, center: "x", background: null },
                    React.createElement("div", { style: {
                            fontFamily: "system-ui, -apple-system",
                            marginTop: "3px",
                        } }, this.state.time)),
                React.createElement(framer_1.Frame, { width: 100, right: 0, top: 0, height: 20, background: null },
                    React.createElement("div", { style: {
                            fill: "black",
                            stroke: "black",
                            width: "auto",
                            float: "right",
                            padding: 4,
                            paddingLeft: 5,
                            paddingTop: 4,
                        }, dangerouslySetInnerHTML: {
                            __html: batterSVG(appearance, batteryLevel),
                        } }),
                    React.createElement("div", { style: { float: "right", lineHeight: "20px" } }, `${Math.round(batteryLevel)}%`)))));
    }
}
StatusBar.defaultProps = {
    carrier: "Framer",
    appearance: "dark",
    batteryLevel: 100,
    width: 200,
    height: 20,
};
StatusBar.propertyControls = {
    carrier: { type: framer_1.ControlType.String, title: "Carrier" },
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance",
    },
    batteryLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Battery",
    },
};
exports.StatusBar = StatusBar;
function batterSVG(appearance, batteryLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    const batteryJuiceColor = batteryLevel <= 10 ? "red" : batteryLevel <= 20 ? "#FFCC01" : color;
    return `<svg width="27px" height="12px" viewBox="0 0 27 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Bars/Status/Black" transform="translate(-343.000000, -4.000000)">
            <g id="Pin-Right" transform="translate(298.000000, 3.000000)">
                <g id="Battery" transform="translate(9.000000, 0.000000)">
                    <g transform="translate(36.000000, 1.500000)">
                        <path d="M3.2048565,0.5 C2.26431807,0.5 1.89540921,0.571239588 1.5147423,0.774822479 C1.19446913,0.946106445 0.946106445,1.19446913 0.774822479,1.5147423 C0.571239588,1.89540921 0.5,2.26431807 0.5,3.2048565 L0.5,8.2951435 C0.5,9.23568193 0.571239588,9.60459079 0.774822479,9.9852577 C0.946106445,10.3055309 1.19446913,10.5538936 1.5147423,10.7251775 C1.89540921,10.9287604 2.26431807,11 3.2048565,11 L22.0738202,11 C22.8614775,11 23.5,10.3614775 23.5,9.57382015 L23.5,3.2048565 C23.5,2.26431807 23.4287604,1.89540921 23.2251775,1.5147423 C23.0538936,1.19446913 22.8055309,0.946106445 22.4852577,0.774822479 C22.1045908,0.571239588 21.7356819,0.5 20.7951435,0.5 L3.2048565,0.5 Z" id="Border" stroke="${color}" opacity="0.4"></path>
                        <path d="M25,4 C25.8626136,4.2220214 26.5,5.00507154 26.5,5.93699126 C26.5,6.86891097 25.8626136,7.65196112 25,7.87398251 L25,4 Z" id="Nub" stroke="none" fill="${color}" opacity="0.4"></path>
                        <rect id="Charge" fill="${batteryJuiceColor}" x="2" y="2" width="${Math.round((batteryLevel / 100) * 19 + 1)}" height="7.5" rx="0.5"></rect>
                    </g>
                </g>
            </g>
        </g>
    </g>
</svg>`;
}
function signal(appearance) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="17px" height="10px" viewBox="0 0 17 10" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Overrides/Status-Bar/Signal---Black" transform="translate(-6.000000, -5.000000)" fill="${color}">
            <g id="Group" transform="translate(6.000000, 3.000000)">
                <path d="M1,7.5 L2,7.5 C2.55228475,7.5 3,7.94771525 3,8.5 L3,11 C3,11.5522847 2.55228475,12 2,12 L1,12 C0.44771525,12 6.76353751e-17,11.5522847 0,11 L0,8.5 C-6.76353751e-17,7.94771525 0.44771525,7.5 1,7.5 Z M5.5,6 L6.5,6 C7.05228475,6 7.5,6.44771525 7.5,7 L7.5,11 C7.5,11.5522847 7.05228475,12 6.5,12 L5.5,12 C4.94771525,12 4.5,11.5522847 4.5,11 L4.5,7 C4.5,6.44771525 4.94771525,6 5.5,6 Z M10,4 L11,4 C11.5522847,4 12,4.44771525 12,5 L12,11 C12,11.5522847 11.5522847,12 11,12 L10,12 C9.44771525,12 9,11.5522847 9,11 L9,5 C9,4.44771525 9.44771525,4 10,4 Z M14.5,2 L15.5,2 C16.0522847,2 16.5,2.44771525 16.5,3 L16.5,11 C16.5,11.5522847 16.0522847,12 15.5,12 L14.5,12 C13.9477153,12 13.5,11.5522847 13.5,11 L13.5,3 C13.5,2.44771525 13.9477153,2 14.5,2 Z" id="Mobile-Signal"></path>
            </g>
        </g>
    </g>
</svg>`;
}
exports.__info__ = [{ name: "StatusBar", children: false, type: "component" }];


/***/ }),

/***/ "./code/Switch.tsx":
/*!*************************!*\
  !*** ./code/Switch.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3dpdGNoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vY29kZS9Td2l0Y2gudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0JBQThCO0FBQzlCLG1DQUFnRTtBQVFoRSxTQUFnQixNQUFNLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBUzs7SUFDckQsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQ2hELE1BQU0sQ0FBQyxjQUFjLEVBQUUsaUJBQWlCLENBQUMsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRW5FLElBQUksa0JBQWtCLENBQUMsT0FBTyxLQUFLLE9BQU8sRUFBRTtRQUN4QyxrQkFBa0IsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFBO1FBQ3BDLElBQUksY0FBYyxLQUFLLE9BQU8sRUFBRTtZQUM1QixpQkFBaUIsQ0FBQyxPQUFPLENBQUMsQ0FBQTtTQUM3QjtLQUNKO0lBRUQsT0FBTyxDQUNILG9CQUFDLGNBQUssSUFDRixLQUFLLEVBQUUsRUFBRSxFQUNULE1BQU0sRUFBRSxFQUFFLEVBQ1YsVUFBVSxFQUFFLElBQUksRUFDaEIsTUFBTSxFQUFFLElBQUksRUFDWixNQUFNLEVBQUUsSUFBSSxFQUNaLFVBQVUsRUFBRSxHQUFHLEVBQUU7O1lBQ2IsaUJBQWlCLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUNsQyxJQUFJLFFBQVE7Z0JBQUUsUUFBUSxDQUFDLENBQUMsY0FBYyxDQUFDLENBQUE7U0FDMUM7UUFFRCxvQkFBQyxjQUFLLElBQ0YsVUFBVSxFQUFFLFNBQVMsRUFDckIsR0FBRyxFQUFFLENBQUMsRUFDTixJQUFJLEVBQUUsQ0FBQyxFQUNQLEtBQUssRUFBRSxDQUFDLEVBQ1IsTUFBTSxFQUFFLENBQUMsRUFDVCxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUMxQyxPQUFPLEVBQUUsRUFBRSxLQUFLLEVBQUUsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUMxQyxVQUFVLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEVBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQ1osTUFBTSxFQUFFLHlCQUF5QixHQUNuQztRQUNGLG9CQUFDLGNBQUssSUFDRixVQUFVLEVBQUUsT0FBTyxFQUNuQixHQUFHLEVBQUUsQ0FBQyxFQUNOLE1BQU0sRUFBRSxDQUFDLEVBQ1QsS0FBSyxFQUFFLEVBQUUsRUFDVCxNQUFNLEVBQUUsSUFBSSxFQUNaLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzFDLE9BQU8sRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQzFDLE1BQU0sRUFBRSx1REFBdUQsR0FDakUsQ0FDRSxDQUNYLENBQUE7Q0FDSjtBQS9DRCx3QkErQ0M7QUFFRCxNQUFNLENBQUMsWUFBWSxHQUFHO0lBQ2xCLEtBQUssRUFBRSxFQUFFO0lBQ1QsTUFBTSxFQUFFLEVBQUU7SUFDVixPQUFPLEVBQUUsSUFBSTtJQUNiLElBQUksRUFBRSxTQUFTO0NBQ2xCLENBQUE7QUFFRCw0QkFBbUIsQ0FBQyxNQUFNLEVBQUU7SUFDeEIsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7SUFDeEQsSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7Q0FDbkQsQ0FBQyxDQUFBO0FBQ0YifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
function Switch({ enabled, tint, onChange }) {
    window["__checkBudget__"]();
    const externalEnabledRef = React.useRef(enabled);
    const [currentEnabled, setCurrentEnabled] = React.useState(enabled);
    if (externalEnabledRef.current !== enabled) {
        externalEnabledRef.current = enabled;
        if (currentEnabled !== enabled) {
            setCurrentEnabled(enabled);
        }
    }
    return (React.createElement(framer_1.Frame, { width: 51, height: 31, background: tint, radius: 1000, center: true, onTapStart: () => {
            window["__checkBudget__"]();
            setCurrentEnabled(!currentEnabled);
            if (onChange)
                onChange(!currentEnabled);
        } },
        React.createElement(framer_1.Frame, { background: "#F8F8F8", top: 0, left: 0, right: 0, bottom: 0, initial: { scale: currentEnabled ? 0 : 1 }, animate: { scale: currentEnabled ? 0 : 1 }, transition: { type: "tween" }, radius: 1000, shadow: "inset 0 0 0 1px #E4E4E4" }),
        React.createElement(framer_1.Frame, { background: "white", top: 1, bottom: 1, width: 31, radius: 1000, initial: { left: currentEnabled ? 19 : 1 }, animate: { left: currentEnabled ? 19 : 1 }, shadow: "0 2px 1px 1px rgba(0,0,0,.07), 0 0 1px rgba(0,0,0,.3)" })));
}
exports.Switch = Switch;
Switch.defaultProps = {
    width: 51,
    height: 31,
    enabled: true,
    tint: "#4BD964",
};
framer_1.addPropertyControls(Switch, {
    enabled: { type: framer_1.ControlType.Boolean, title: "Enabled" },
    tint: { type: framer_1.ControlType.Color, title: "Tint" },
});
exports.__info__ = [{ name: "Switch", children: false, type: "component" }];


/***/ }),

/***/ "./code/Toolbar.tsx":
/*!**************************!*\
  !*** ./code/Toolbar.tsx ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVG9vbGJhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvVG9vbGJhci50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrQkFBOEI7QUFDOUIsbUNBQXNEO0FBY3RELE1BQWEsT0FBUSxTQUFRLEtBQUssQ0FBQyxTQUF5QjtJQUE1RDs7UUEwQkksZ0JBQVcsR0FBRyxDQUFDLEtBQWEsRUFBRSxFQUFFOztZQUM1QixNQUFNLEVBQUUsV0FBVyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQTtZQUNsQyxJQUFJLFdBQVcsRUFBRTtnQkFDYixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ3pDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUE7YUFDNUI7U0FDSixDQUFBO1FBRU8sa0JBQWEsR0FBRyxHQUFHLEVBQUU7O1lBQ3pCLE1BQU0sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1lBQ3pELE9BQU8sQ0FBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFBO1NBQ2hGLENBQUE7SUFvQ0wsQ0FBQztJQWxDRyxNQUFNOztRQUNGLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFBO1FBRTNELE1BQU0sS0FBSyxHQUFrQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFOztZQUNuRSxPQUFPLENBQ0gsNkJBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUN2RCxLQUFLLENBQ0osQ0FDVCxDQUFBO1NBQ0osQ0FBQyxDQUFBO1FBRUYsTUFBTSxNQUFNLEdBQUcsVUFBVSxLQUFLLE1BQU0sQ0FBQTtRQUNwQyxNQUFNLGVBQWUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQTtRQUMvRSxNQUFNLFNBQVMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLDRDQUE0QyxDQUFDLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQTtRQUVoSCxPQUFPLENBQ0gsNkJBQ0ksS0FBSyxFQUFFO2dCQUNILEtBQUs7Z0JBQ0wsTUFBTTtnQkFDTixlQUFlO2dCQUNmLE9BQU8sRUFBRSxNQUFNO2dCQUNmLGNBQWMsRUFBRSxlQUFlO2dCQUMvQixVQUFVLEVBQUUsUUFBUTtnQkFDcEIsT0FBTyxFQUFFLFFBQVE7Z0JBQ2pCLEtBQUssRUFBRSxTQUFTO2dCQUNoQixjQUFjLEVBQUUsWUFBWTtnQkFDNUIsU0FBUzthQUNaLElBRUEsS0FBSyxDQUNKLENBQ1QsQ0FBQTtLQUNKOztBQXZFTSxvQkFBWSxHQUFHO0lBQ2xCLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE9BQU8sRUFBRSxVQUFVO0lBQ25CLE9BQU8sRUFBRSxFQUFFO0lBQ1gsVUFBVSxFQUFFLE9BQU87SUFDbkIsU0FBUyxFQUFFLFNBQVM7SUFDcEIsS0FBSyxFQUFFLEdBQUc7SUFDVixNQUFNLEVBQUUsRUFBRTtDQUNiLENBQUE7QUFFTSx3QkFBZ0IsR0FBNEI7SUFDL0MsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEQsT0FBTyxFQUFFLEVBQUUsSUFBSSxFQUFFLG9CQUFXLENBQUMsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUU7SUFDeEQsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLG9CQUFXLENBQUMsSUFBSTtRQUN0QixPQUFPLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQzFCLFlBQVksRUFBRSxDQUFDLE1BQU0sRUFBRSxPQUFPLENBQUM7UUFDL0IsS0FBSyxFQUFFLFlBQVk7S0FDdEI7SUFDRCxTQUFTLEVBQUUsRUFBRSxJQUFJLEVBQUUsb0JBQVcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRTtDQUN4RCxDQUFBO0FBeEJMLDBCQXlFQztBQUNEIn0=

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class Toolbar extends React.Component {
    constructor() {
        super(...arguments);
        this.onTapAction = (index) => {
            window["__checkBudget__"]();
            const { onTapAction } = this.props;
            if (onTapAction) {
                const label = this.actionsLabels()[index];
                onTapAction(index, label);
            }
        };
        this.actionsLabels = () => {
            window["__checkBudget__"]();
            const { action1, action2, action3, action4 } = this.props;
            return [action1, action2, action3, action4].filter(label => label.length > 0);
        };
    }
    render() {
        window["__checkBudget__"]();
        const { width, height, tintColor, appearance } = this.props;
        const items = this.actionsLabels().map((label, index) => {
            window["__checkBudget__"]();
            return (React.createElement("div", { key: index, onClick: this.onTapAction.bind(this, index) }, label));
        });
        const isDark = appearance === "dark";
        const backgroundColor = isDark ? "rgba(33,33,33,.72)" : "rgba(248,248,248,.82)";
        const boxShadow = isDark ? "inset 0 1px 0 -0.5px rgba(255,255,255,.16)" : "inset 0 1px 0 -0.5px rgba(0,0,0,.05)";
        return (React.createElement("div", { style: {
                width,
                height,
                backgroundColor,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0 16px",
                color: tintColor,
                backdropFilter: "blur(10px)",
                boxShadow,
            } }, items));
    }
}
Toolbar.defaultProps = {
    action1: "Action 1",
    action2: "Action 2",
    action3: "Action 3",
    action4: "",
    appearance: "light",
    tintColor: "#007AFF",
    width: 375,
    height: 44,
};
Toolbar.propertyControls = {
    action1: { type: framer_1.ControlType.String, title: "Action 1" },
    action2: { type: framer_1.ControlType.String, title: "Action 2" },
    action3: { type: framer_1.ControlType.String, title: "Action 3" },
    action4: { type: framer_1.ControlType.String, title: "Action 4" },
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance",
    },
    tintColor: { type: framer_1.ControlType.Color, title: "Tint" },
};
exports.Toolbar = Toolbar;
exports.__info__ = [{ name: "Toolbar", children: false, type: "component" }];


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
const canvas = framer_1.CanvasStore.shared({"children":[]});


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

                packages["framer"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer */ "framer")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"framer","version":"1.0.2","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@microsoft/api-documenter":"^1.5.47","@microsoft/api-extractor":"7.0.13","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/react":"16.8.4","@types/react-dom":"^16.8","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^0.16.8","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"3.3","watch":"^1.0.2","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]},"dependencies":{"style-value-types":"^3.1.4"}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, devDependencies, peerDependencies, name, author, version, license, framer, keywords, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^0.7.11 || ^1","react":"^16.8"},"name":"@framer/framer.examples","author":"Framer","version":"1.6.0","license":"MIT","framer":{"id":"d52e8201-9936-42d9-8208-5c36c6f0e1bc","displayName":"Example Kit"},"keywords":["interactive","examples","ios","kit","apple","ui"]};

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