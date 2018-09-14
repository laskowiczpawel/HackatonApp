module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./pages/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__("react");

var _react2 = _interopRequireDefault(_react);

var _reactSimpleMaps = __webpack_require__("react-simple-maps");

var _reactMotion = __webpack_require__("react-motion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var wrapperStyles = {
  width: "100%",
  maxWidth: 980,
  margin: "0 auto"
};

var cities = [{ name: "Zurich", coordinates: [8.5417, 47.3769] }, { name: "Singapore", coordinates: [103.8198, 1.3521] }, { name: "San Francisco", coordinates: [-122.4194, 37.7749] }, { name: "Sydney", coordinates: [151.2093, -33.8688] }, { name: "Lagos", coordinates: [3.3792, 6.5244] }, { name: "Buenos Aires", coordinates: [-58.3816, -34.6037] }, { name: "Shanghai", coordinates: [121.4737, 31.2304] }];

var AnimatedMap = function (_Component) {
  _inherits(AnimatedMap, _Component);

  function AnimatedMap() {
    _classCallCheck(this, AnimatedMap);

    var _this = _possibleConstructorReturn(this, (AnimatedMap.__proto__ || Object.getPrototypeOf(AnimatedMap)).call(this));

    _this.state = {
      center: [0, 20],
      zoom: 1
    };
    _this.handleZoomIn = _this.handleZoomIn.bind(_this);
    _this.handleZoomOut = _this.handleZoomOut.bind(_this);
    _this.handleCityClick = _this.handleCityClick.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  _createClass(AnimatedMap, [{
    key: "handleZoomIn",
    value: function handleZoomIn() {
      this.setState({
        zoom: this.state.zoom * 2
      });
    }
  }, {
    key: "handleZoomOut",
    value: function handleZoomOut() {
      this.setState({
        zoom: this.state.zoom / 2
      });
    }
  }, {
    key: "handleCityClick",
    value: function handleCityClick(city) {
      this.setState({
        zoom: 2,
        center: city.coordinates
      });
    }
  }, {
    key: "handleReset",
    value: function handleReset() {
      this.setState({
        center: [0, 20],
        zoom: 1
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { style: wrapperStyles },
        _react2.default.createElement(
          "button",
          { onClick: this.handleZoomIn },
          "Zoom in"
        ),
        _react2.default.createElement(
          "button",
          { onClick: this.handleZoomOut },
          "Zoom out"
        ),
        _react2.default.createElement(
          "button",
          { onClick: this.handleReset },
          "Reset"
        ),
        _react2.default.createElement(
          _reactMotion.Motion,
          {
            defaultStyle: {
              zoom: 1,
              x: 0,
              y: 20
            },
            style: {
              zoom: (0, _reactMotion.spring)(this.state.zoom, { stiffness: 210, damping: 20 }),
              x: (0, _reactMotion.spring)(this.state.center[0], { stiffness: 210, damping: 20 }),
              y: (0, _reactMotion.spring)(this.state.center[1], { stiffness: 210, damping: 20 })
            }
          },
          function (_ref) {
            var zoom = _ref.zoom,
                x = _ref.x,
                y = _ref.y;
            return _react2.default.createElement(
              _reactSimpleMaps.ComposableMap,
              {
                projectionConfig: { scale: 205 },
                width: 980,
                height: 551,
                style: {
                  width: "100%",
                  height: "auto"
                }
              },
              _react2.default.createElement(
                _reactSimpleMaps.ZoomableGroup,
                { center: [x, y], zoom: zoom },
                _react2.default.createElement(
                  _reactSimpleMaps.Geographies,
                  { geography: "/static/world-110m.json" },
                  function (geographies, projection) {
                    return geographies.map(function (geography, i) {
                      return geography.id !== "010" && _react2.default.createElement(_reactSimpleMaps.Geography, {
                        key: i,
                        geography: geography,
                        projection: projection,
                        style: {
                          default: {
                            fill: "#ECEFF1",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          hover: {
                            fill: "#CFD8DC",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          },
                          pressed: {
                            fill: "#FF5722",
                            stroke: "#607D8B",
                            strokeWidth: 0.75,
                            outline: "none"
                          }
                        }
                      });
                    });
                  }
                ),
                _react2.default.createElement(
                  _reactSimpleMaps.Markers,
                  null,
                  cities.map(function (city, i) {
                    return _react2.default.createElement(
                      _reactSimpleMaps.Marker,
                      {
                        key: i,
                        marker: city,
                        onClick: _this2.handleCityClick
                      },
                      _react2.default.createElement("circle", {
                        cx: 0,
                        cy: 0,
                        r: 6,
                        fill: "#FF5722",
                        stroke: "#DF3702"
                      })
                    );
                  })
                )
              )
            );
          }
        )
      );
    }
  }]);

  return AnimatedMap;
}(_react.Component);

exports.default = AnimatedMap;

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/index.js");


/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-motion":
/***/ (function(module, exports) {

module.exports = require("react-motion");

/***/ }),

/***/ "react-simple-maps":
/***/ (function(module, exports) {

module.exports = require("react-simple-maps");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map