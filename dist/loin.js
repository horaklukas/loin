module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.TICK = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (LoadingIndicator) {
	return function (_React$Component) {
		_inherits(Timer, _React$Component);

		function Timer(props) {
			_classCallCheck(this, Timer);

			var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));

			_this.state = {
				ticks: 0
			};
			return _this;
		}

		_createClass(Timer, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				var _this2 = this;

				this.timer = setInterval(function () {
					return _this2.incrementTicks();
				}, TICK);
			}
		}, {
			key: 'componentWillUnmount',
			value: function componentWillUnmount() {
				clearInterval(this.timer);
			}
		}, {
			key: 'incrementTicks',
			value: function incrementTicks() {
				var _this3 = this;

				this.setState(function (prevState) {
					return { ticks: _this3.state.ticks + 1 };
				});
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(LoadingIndicator, _extends({}, this.props, { ticks: this.state.ticks }));
			}
		}]);

		return Timer;
	}(_react2.default.Component);
};

var TICK = exports.TICK = 250;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  ellipsis: {
    marginLeft: 3,
    fontSize: '1.5em'
  },
  column: {
    display: 'inline-block',
    width: '0.25em',
    height: '1em',
    backgroundColor: 'black',
    marginLeft: '0.2em'
  }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Dots = __webpack_require__(5);

Object.defineProperty(exports, 'Dots', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Dots).default;
  }
});

var _Columns = __webpack_require__(4);

Object.defineProperty(exports, 'Columns', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Columns).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingIndicator = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

var _Timer = __webpack_require__(1);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_MAX_COLUMNS_COUNT = 3;

/**
 * type Props = {
 *   count?: number,
 *   color?: string
 * }
 */

var LoadingIndicator = exports.LoadingIndicator = function LoadingIndicator(props /*: Props */) {
  var maxColumnsCount = props.count || DEFAULT_MAX_COLUMNS_COUNT;
  var columnsCount = props.ticks % (maxColumnsCount + 1);
  var columnStyle = _styles2.default.column;

  if (props.color) {
    columnStyle.backgroundColor = props.color;
  }

  return _react2.default.createElement(
    'div',
    { className: 'indicator' },
    getColumns(columnsCount, columnStyle)
  );
};

var getColumns = function getColumns(count, style) {
  var columns = [];

  for (var i = 0; i < count; i++) {
    columns.push(_react2.default.createElement('span', { className: 'column', style: style, key: 'col' + i }));
  }

  return columns;
};

exports.default = (0, _Timer2.default)(LoadingIndicator);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.LoadingIndicator = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _styles = __webpack_require__(2);

var _styles2 = _interopRequireDefault(_styles);

var _Timer = __webpack_require__(1);

var _Timer2 = _interopRequireDefault(_Timer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAX_DOTS_COUNT = 3;

/**
 * type Props = {
 *   message?: string,
 * }
 */

var repeat = function repeat(str, count) {
	var rpt = '';

	for (;;) {
		if ((count & 1) == 1) {
			rpt += str;
		}
		count >>>= 1;
		if (count == 0) {
			break;
		}
		str += str;
	}

	return rpt;
};

var LoadingIndicator = exports.LoadingIndicator = function LoadingIndicator(props) {
	var ticks = props.ticks,
	    message = props.message;

	var messageText = message !== undefined ? message : 'Loading';
	var dotsCount = ticks % (MAX_DOTS_COUNT + 1);
	var dots = repeat('.', dotsCount);

	return _react2.default.createElement(
		'div',
		{ className: 'indicator' },
		_react2.default.createElement(
			'span',
			{ className: 'message' },
			messageText
		),
		_react2.default.createElement(
			'span',
			{ className: 'ellipsis', style: _styles2.default.ellipsis },
			dots
		)
	);
};

exports.default = (0, _Timer2.default)(LoadingIndicator);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ })
/******/ ]);