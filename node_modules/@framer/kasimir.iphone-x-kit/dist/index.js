(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-2"); } catch(e) {} }()), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/framer.device-hand-iphone-2", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.device-hand-iphone-2"); } catch(e) {} }()), require("react")) : factory(root["Framer"], root["framer-package-loader!@framer/framer.device-hand-iphone-2"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_2__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
	"./Home Button (iPhone X)/HomeButton.tsx": "./code/Home Button (iPhone X)/HomeButton.tsx",
	"./Status Bar/Status_Bar.tsx": "./code/Status Bar/Status_Bar.tsx",
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

/***/ "./code/Home Button (iPhone X)/HomeButton.tsx":
/*!****************************************************!*\
  !*** ./code/Home Button (iPhone X)/HomeButton.tsx ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSG9tZUJ1dHRvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvSG9tZSBCdXR0b24gKGlQaG9uZSBYKS9Ib21lQnV0dG9uLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBc0Q7QUFJdEQsTUFBYSxVQUFXLFNBQVEsS0FBSyxDQUFDLFNBQWdDO0lBZ0JsRSxNQUFNOztRQUNGLE1BQU0sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUE7UUFFaEQsT0FBTyxDQUNILDZCQUNJLEtBQUssRUFBRTtnQkFDSCxPQUFPLEVBQUUsTUFBTTtnQkFDZixjQUFjLEVBQUUsUUFBUTtnQkFDeEIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFO2dCQUNaLEtBQUssRUFBRSxVQUFVLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU87YUFDbkQ7WUFFRCw2QkFDSSxLQUFLLEVBQUU7b0JBQ0gsU0FBUyxFQUFFLEtBQUs7aUJBQ25CLEVBQ0QsdUJBQXVCLEVBQUU7b0JBQ3JCLE1BQU0sRUFBRSxhQUFhLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQztpQkFDM0MsR0FDSCxDQUNBLENBQ1QsQ0FBQTtLQUNKOztBQXRDTSx1QkFBWSxHQUFHO0lBQ2xCLFVBQVUsRUFBRSxPQUFPO0lBQ25CLEtBQUssRUFBRSxHQUFHO0lBQ1YsTUFBTSxFQUFFLEVBQUU7Q0FDYixDQUFBO0FBRU0sMkJBQWdCLEdBQTRCO0lBQy9DLFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxvQkFBVyxDQUFDLElBQUk7UUFDdEIsT0FBTyxFQUFFLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUMxQixZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDO1FBQy9CLEtBQUssRUFBRSxZQUFZO0tBQ3RCO0NBQ0osQ0FBQTtBQWRMLGdDQXdDQztBQUVELFNBQVMsYUFBYSxDQUFDLFVBQXNCLEVBQUUsS0FBYTs7SUFDeEQsTUFBTSxXQUFXLEdBQUcsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUE7SUFDNUMsTUFBTSxLQUFLLEdBQUcsVUFBVSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUE7SUFFdkQsT0FBTyxlQUFlLFdBQVcsaUNBQWlDLFdBQVc7Ozs7OzJHQUswQixLQUFLO2tFQUM5QyxXQUFXOzs7V0FHbEUsQ0FBQTtDQUNWO0FBQ0QifQ==

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class HomeButton extends React.Component {
    render() {
        window["__checkBudget__"]();
        const { appearance, width, height } = this.props;
        return (React.createElement("div", { style: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 12,
                color: appearance === "dark" ? "black" : "white",
            } },
            React.createElement("div", { style: {
                    marginTop: "6px",
                }, dangerouslySetInnerHTML: {
                    __html: homeButtonSVG(appearance, width),
                } })));
    }
}
HomeButton.defaultProps = {
    appearance: "light",
    width: 375,
    height: 34,
};
HomeButton.propertyControls = {
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance",
    },
};
exports.HomeButton = HomeButton;
function homeButtonSVG(appearance, width) {
    window["__checkBudget__"]();
    const buttonWidth = width >= 800 ? 210 : 134;
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="${buttonWidth}px" height="5px" viewBox="0 0 ${buttonWidth} 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 51.3 (57544) - http://www.bohemiancoding.com/sketch -->
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Bars-/-Home-Indicator-/-On-Dark" transform="translate(-121.000000, -20.000000)" fill="${color}">
                <rect id="Home-Indicator" x="121" y="20" width="${buttonWidth}" height="5" rx="2.5"></rect>
            </g>
        </g>
    </svg>`;
}
exports.__info__ = [{ name: "HomeButton", children: false, type: "component" }];


/***/ }),

/***/ "./code/Status Bar/Status_Bar.tsx":
/*!****************************************!*\
  !*** ./code/Status Bar/Status_Bar.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RhdHVzX0Jhci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvZGUvU3RhdHVzIEJhci9TdGF0dXNfQmFyLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FBZ0Y7QUF5QmhGLE1BQWEsU0FBVSxTQUFRLEtBQUssQ0FBQyxTQUFnQztJQUFyRTs7UUFpR0ksVUFBSyxHQUFHO1lBQ0osSUFBSSxFQUFFLE9BQU87U0FDaEIsQ0FBQTtRQWdCRCxlQUFVLEdBQUcsR0FBRyxFQUFFOztZQUNkLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQTtZQUViLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3JCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUE7Z0JBQ3ZCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtnQkFFM0IsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRTtvQkFDdkIsS0FBSyxHQUFHLEtBQUssR0FBRyxFQUFFLENBQUE7b0JBQ2xCLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBO29CQUUxQixJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtpQkFDM0Q7cUJBQU07b0JBQ0gsSUFBSTt3QkFDQSxDQUFDLEdBQUcsR0FBRyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7NEJBQ3ZCLEdBQUc7NEJBQ0gsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7aUJBQzFDO2FBQ0o7aUJBQU07Z0JBQ0gsSUFBSSxHQUFHLElB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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
class StatusBar extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            time: "18:00",
        };
        this.updateTime = () => {
            window["__checkBudget__"]();
            let time = "";
            if (this.props.liveTime) {
                const date = new Date();
                var hours = date.getHours();
                if (this.props.twelveHour) {
                    hours = hours % 12;
                    hours = hours ? hours : 12;
                    time = hours + ":" + ("0" + date.getMinutes()).slice(-2);
                }
                else {
                    time =
                        ("0" + hours).slice(-2) +
                            ":" +
                            ("0" + date.getMinutes()).slice(-2);
                }
            }
            else {
                time = this.props.time;
            }
            if (this.time !== time) {
                this.time = time;
                this.setState({ time });
            }
        };
    }
    componentWillMount() {
        window["__checkBudget__"]();
        this.updateTime();
        if (this.props.liveTime) {
            this.timer = window.setInterval(() => {
                window["__checkBudget__"]();
                this.updateTime();
            }, 1000);
        }
    }
    componentWillUnmount() {
        window["__checkBudget__"]();
        window.clearInterval(this.timer);
    }
    render() {
        window["__checkBudget__"]();
        const { batteryLevel, signalLevel, wifiLevel, appearance, location, back, mode, width, height, } = this.props;
        if (width >= 800) {
            return React.createElement("div", null);
        }
        return (React.createElement("div", { style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                top: 0,
                left: 0,
                fontSize: 12,
                color: appearance === "dark" ? "black" : "white",
            } },
            React.createElement("div", { style: {
                    height: "44px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                } },
                React.createElement("div", { style: {
                        display: "flex",
                        height: "44px",
                        width: "90px",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    } },
                    React.createElement("div", { style: {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            fontSize: "15px",
                            letterSpacing: "-16",
                            width: "54px",
                            lineHeight: "21px",
                            fontWeight: 600,
                            background: mode,
                            color: mode != "transparent"
                                ? "#ffffff"
                                : "inherit",
                            borderRadius: "20px",
                        } },
                        this.state.time !== "" ? this.state.time : "18:00",
                        React.createElement("div", { style: {
                                height: "16px",
                                display: mode === "transparent" &&
                                    location !== "none"
                                    ? "block"
                                    : "none",
                            }, dangerouslySetInnerHTML: {
                                __html: locationSVG(appearance, location),
                            } })),
                    React.createElement("div", { style: {
                            alignSelf: "flex-start",
                            display: back != "" ? "flex" : "none",
                            marginLeft: "10px",
                            fontWeight: 400,
                            fontFamily: "SF-Pro-Text, system-ui, -apple-system",
                            fontSize: "12px",
                        } },
                        React.createElement("div", { style: {
                                height: "12px",
                                width: "12px",
                            }, dangerouslySetInnerHTML: {
                                __html: backSVG(appearance),
                            } }),
                        back)),
                React.createElement("div", { style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        height: "44px",
                        width: "95px",
                    } },
                    React.createElement("div", { style: {
                            width: "20px",
                            textAlign: "center",
                        }, dangerouslySetInnerHTML: {
                            __html: signalSVG(appearance, signalLevel),
                        } }),
                    React.createElement("div", { style: {
                            width: "20px",
                            textAlign: "center",
                        }, dangerouslySetInnerHTML: {
                            __html: wifiSVG(appearance, wifiLevel),
                        } }),
                    React.createElement("div", { style: {
                            width: "27px",
                            textAlign: "right",
                        }, dangerouslySetInnerHTML: {
                            __html: batterySVG(appearance, batteryLevel),
                        } })))));
    }
}
StatusBar.defaultProps = {
    appearance: "light",
    mode: "transparent",
    liveTime: true,
    back: "",
    twelveHour: false,
    time: "18.00",
    location: "none",
    signalLevel: 100,
    wifiLevel: 100,
    batteryLevel: 100,
    levels: null,
    width: 375,
    height: 44,
};
StatusBar.propertyControls = {
    appearance: {
        type: framer_1.ControlType.Enum,
        options: ["dark", "light"],
        optionTitles: ["Dark", "Light"],
        title: "Appearance",
    },
    mode: {
        type: framer_1.ControlType.Enum,
        options: ["transparent", "#4CD964", "#007AFF", "#FF3B30"],
        optionTitles: [
            "None",
            "On a call",
            "App actively using your location or Personal Hotspot is on",
            "Recording",
        ],
        title: "Task",
    },
    liveTime: {
        type: framer_1.ControlType.Boolean,
        disabledTitle: "No",
        enabledTitle: "Yes",
        title: "Real time",
    },
    twelveHour: {
        type: framer_1.ControlType.Boolean,
        disabledTitle: "24h",
        enabledTitle: "12h",
        title: "↳ Time format",
        hidden(props) {
            window["__checkBudget__"]();
            return props.liveTime === false;
        },
    },
    time: {
        type: framer_1.ControlType.String,
        placeholder: "18:00",
        title: "↳ Time",
        hidden(props) {
            window["__checkBudget__"]();
            return props.liveTime;
        },
    },
    location: {
        type: framer_1.ControlType.Enum,
        options: ["none", "background", "locating"],
        optionTitles: [
            "No Location",
            "Background Location",
            "Receiving Location",
        ],
        title: "Location",
    },
    back: {
        type: framer_1.ControlType.String,
        placeholder: "Settings",
        title: "Back to",
    },
    signalLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Signal",
    },
    wifiLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Wifi",
    },
    batteryLevel: {
        type: framer_1.ControlType.Number,
        min: 0,
        max: 100,
        title: "Battery",
    },
};
exports.StatusBar = StatusBar;
function backSVG(appearance) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg xmlns="http://www.w3.org/2000/svg" width="6px" height="7px" viewBox="0 0 7 8">
        <path fill="${color}" class="c" d="M0,4,7,0V8Z"/>
      </svg>`;
}
function locationSVG(appearance, location) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    const fill = location === "locating" ? color : "transparent";
    return `<svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g class="b" transform="translate(2.5 4)" fill-rule="nonzero" stroke-align="inside" stroke="${color}" fill="${fill}" stroke-dashoffset="1" stroke-width="1">
            <path class="c" d="M5.955,10.5,10.5,0,0,4.545H5.955Z"/>
          </g>
      </svg>`;
}
function batterySVG(appearance, batteryLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    const batteryJuiceColor = batteryLevel <= 10 ? "red" : batteryLevel <= 20 ? "#FFCC01" : color;
    return `<svg width="25px" height="12px" viewBox="0 0 25 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" stroke="none" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-336.000000, -17.000000)">
                  <g id="Battery" transform="translate(336.000000, 17.000000)">
                      <rect id="Border" stroke="${color}" opacity="0.35" x="0.5" y="0.833333333" width="21" height="10.3333333" rx="2.66666675"></rect>
                      <path d="M23,4 L23,8 C23.8047311,7.66122348 24.328038,6.87313328 24.328038,6 C24.328038,5.12686672 23.8047311,4.33877652 23,4" id="Cap" fill="${color}" fill-rule="nonzero" opacity="0.4"></path>
                      <rect id="Capacity" fill="${batteryJuiceColor}" fill-rule="nonzero" x="2" y="2.33333333" height="7.33333333" rx="1.33333337" width="${Math.round((batteryLevel / 100) * 17 + 1)}"></rect>
                  </g>
              </g>
          </g>
      </svg>`;
}
function signalSVG(appearance, signalLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="17.5px" height="12px" viewBox="0 0 18 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" stroke="none" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-293.000000, -17.000000)" fill-rule="nonzero" fill="${color}">
                <path d="M295.666667,24.3333333 C296.218951,24.3333333 296.666667,24.7810486 296.666667,25.3333333 L296.666667,27.3333333 C296.666667,27.8856181 296.218951,28.3333333 295.666667,28.3333333 L294.666667,28.3333333 C294.114382,28.3333333 293.666667,27.8856181 293.666667,27.3333333 L293.666667,25.3333333 C293.666667,24.7810486 294.114382,24.3333333 294.666667,24.3333333 L295.666667,24.3333333 Z" opacity="${signalLevel != 0 ? 1 : 0.4}"></path>
                <path d="M299.333333,22.3333333 L300.333333,22.3333333 C300.885618,22.3333333 301.333333,22.7810486 301.333333,23.3333333 L301.333333,27.3333333 C301.333333,27.8856181 300.885618,28.3333333 300.333333,28.3333333 L299.333333,28.3333333 C298.781049,28.3333333 298.333333,27.8856181 298.333333,27.3333333 L298.333333,23.3333333 C298.333333,22.7810486 298.781049,22.3333333 299.333333,22.3333333 Z" opacity="${signalLevel >= 25 ? 1 : 0.4}"></path>
                <path d="M304,20 L305,20 C305.552285,20 306,20.4477153 306,21 L306,27.3333333 C306,27.8856181 305.552285,28.3333333 305,28.3333333 L304,28.3333333 C303.447715,28.3333333 303,27.8856181 303,27.3333333 L303,21 C303,20.4477153 303.447715,20 304,20 Z" opacity="${signalLevel >= 50 ? 1 : 0.4}"></path>
                <path d="M308.666667,17.6666667 L309.666667,17.6666667 C310.218951,17.6666667 310.666667,18.1143819 310.666667,18.6666667 L310.666667,27.3333333 C310.666667,27.8856181 310.218951,28.3333333 309.666667,28.3333333 L308.666667,28.3333333 C308.114382,28.3333333 307.666667,27.8856181 307.666667,27.3333333 L307.666667,18.6666667 C307.666667,18.1143819 308.114382,17.6666667 308.666667,17.6666667 Z" opacity="${signalLevel >= 75 ? 1 : 0.4}"></path>
              </g>
          </g>
      </svg>`;
}
function wifiSVG(appearance, wifiLevel) {
    window["__checkBudget__"]();
    const color = appearance === "dark" ? "black" : "white";
    return `<svg width="15px" viewBox="0 0 16 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <g id="Symbols" fill="none" fill-rule="evenodd">
              <g id="Bars-/-Status-Bar-/-iPhone-X-/-On-Light" transform="translate(-315.000000, -17.000000)" fill="${color}" fill-rule="nonzero">
                <path d="M325.549333,26.188 C325.611087,26.127394 325.645095,26.0439919 325.643328,25.957485 C325.641561,25.8709782 325.604176,25.7890342 325.54,25.731 C324.264428,24.6521162 322.396238,24.6521162 321.120667,25.731 C321.056446,25.7889875 321.019,25.8709057 321.01717,25.957413 C321.01534,26.0439203 321.049289,26.1273487 321.111,26.188 L323.108667,28.2036667 C323.167217,28.2629057 323.247042,28.2962443 323.330333,28.2962443 C323.413624,28.2962443 323.49345,28.2629057 323.552,28.2036667 L325.549333,26.188 Z" opacity="${wifiLevel != 0 ? 1 : 0.4}"></path>
                <path d="M323.330333,23.4036667 C324.547823,23.4035921 325.721865,23.8561245 326.624333,24.6733333 C326.746397,24.7893139 326.938678,24.7867994 327.057667,24.6676667 L328.212333,23.501 C328.273141,23.439805 328.30688,23.3567887 328.306003,23.2705239 C328.305126,23.1842592 328.269706,23.101946 328.207667,23.042 C325.459468,20.4856177 321.203532,20.4856177 318.455333,23.042 C318.393256,23.1019453 318.357837,23.1842997 318.357023,23.2705923 C318.356208,23.356885 318.390065,23.4398934 318.451,23.501 L319.605333,24.6676667 C319.724322,24.7867994 319.916603,24.7893139 320.038667,24.6733333 C320.940539,23.8566645 322.113649,23.4041708 323.330333,23.4036667 Z" opacity="${wifiLevel >= 33 ? 1 : 0.4}"></path>
                <path d="M323.330333,19.608 C325.546226,19.6080971 327.677386,20.4595347 329.283333,21.9863333 C329.404265,22.1042079 329.597562,22.102721 329.716667,21.983 L330.872667,20.8163333 C330.932975,20.7556112 330.966599,20.6733595 330.966098,20.5877792 C330.965598,20.5021988 330.931014,20.420346 330.87,20.3603333 C326.654902,16.3207858 320.005098,16.3207858 315.79,20.3603333 C315.728941,20.4203015 315.694297,20.5021294 315.693734,20.5877099 C315.693171,20.6732903 315.726736,20.755567 315.787,20.8163333 L316.943333,21.983 C317.062362,22.1029017 317.255808,22.1043897 317.376667,21.9863333 C318.982819,20.4594344 321.114223,19.6079944 323.330333,19.608 Z" opacity="${wifiLevel >= 66 ? 1 : 0.4}"></path>
              </g>
          </g>
      </svg>`;
}
exports.__info__ = [{ name: "StatusBar", children: false, type: "component" }];


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

                packages["@framer/framer.device-hand-iphone-2"] = () => {
                    var package = {}
                    try {
                        package = __webpack_require__(/*! framer-package-loader!@framer/framer.device-hand-iphone-2 */ "framer-package-loader!@framer/framer.device-hand-iphone-2")
                    } catch (e) {
                        console.log(e)
                    }
                    package.__framer__ = package.__framer__ || {}
                    package.__framer__.packageJson = {"name":"@framer/framer.device-hand-iphone-2","version":"1.0.0","main":"build/index.js","license":"MIT","devDependencies":{"typescript":"^2.9.2"},"framer":{"components":[{"name":"DeviceHand","type":"deviceHand"}]}}
                    return package
                }

package.dependencies = packages

exports.__framer__ = package


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, version, devDependencies, peerDependencies, framer, keywords, author, name, default */
/***/ (function(module) {

module.exports = {"main":"dist/index.js","license":"MIT","version":"1.20.0","devDependencies":{"@framer/framer.device-hand-iphone-2":"1.0.0","@types/react":"^16.0.31"},"peerDependencies":{"framer":"0.10.1 || ^0.10 || ^1","react":"^16.3.0","react-dom":"^16.3.0"},"framer":{"id":"2970ec35-535a-4d7f-96d5-57c611da38d0","displayName":"iPhone X Kit"},"keywords":["Apple","iOS","iPhone","Kit","UI"],"author":"Kasimir Hirvikoski","name":"@framer/kasimir.iphone-x-kit"};

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.device-hand-iphone-2":
/*!****************************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.device-hand-iphone-2" ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_2__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.device-hand-iphone-2'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_device_hand_iphone_2__;

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