// [AIV_SHORT]  Build version: 1.0.0 - Thursday, March 16th, 2023, 9:01:21 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[26],{

/***/ "0b8eb3e35929778b339a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("d7dd51e1bf6bfc2c9c3d");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ab4cb61bcb2dc161defb");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("cb12d4155305786bdcf4");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("c37fe5999f1498e7f04f");
/* harmony import */ var _HomePage_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_HomePage_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_uiUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("31745dad8e82e7819831");
/* harmony import */ var _services_accountService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("db6b135fcc75b7aee81a");
/* harmony import */ var _services_const__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("6111e2d656e177458f5a");
/* harmony import */ var _services_positionService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("634d38dc84e41265b60d");
/* harmony import */ var _components_Amount__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("133eead519bfb879e1fb");
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */











var _ref = /*#__PURE__*/_jsx("br", {});

var _ref2 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {});

var _ref3 = /*#__PURE__*/_jsx("h5", {}, void 0, "active accounts");

var _ref4 = /*#__PURE__*/_jsx("h5", {}, void 0, "open positions");

var _ref5 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {});

var _ref6 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {});

var _ref7 = /*#__PURE__*/_jsx("h5", {}, void 0, "balance");

var _ref8 = /*#__PURE__*/_jsx("h5", {}, void 0, "pending P/L");

var _ref9 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {});

var _ref10 = /*#__PURE__*/_jsx("br", {});

var _ref11 = /*#__PURE__*/_jsx("br", {});

var _ref12 = /*#__PURE__*/_jsx("br", {});

var _ref13 = /*#__PURE__*/_jsx("br", {});

var _ref14 = /*#__PURE__*/_jsx("br", {});

var _ref15 = /*#__PURE__*/_jsx("br", {});

var _ref16 = /*#__PURE__*/_jsx("br", {});

var _ref17 = /*#__PURE__*/_jsx("br", {});

var _ref18 = /*#__PURE__*/_jsx("br", {});

var _ref19 = /*#__PURE__*/_jsx("br", {});

var _ref20 = /*#__PURE__*/_jsx("br", {});

var _ref21 = /*#__PURE__*/_jsx("br", {});

var _ref22 = /*#__PURE__*/_jsx("br", {});

function HomePage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      accounts = _useState2[0],
      setAccounts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      positions = _useState4[0],
      setPositions = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(undefined),
      _useState6 = _slicedToArray(_useState5, 2),
      lastSync = _useState6[0],
      setLastSync = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var myLastSync = Math.max.apply(Math, _toConsumableArray(accounts.map(function (a) {
      return a.updated;
    }).filter(function (a) {
      return a !== undefined;
    })));
    setLastSync(myLastSync);
  }, [accounts]);
  var totals = _services_positionService__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].computePositionSums(positions);
  _services_accountService__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"].fetchListByStatus(setAccounts, _services_const__WEBPACK_IMPORTED_MODULE_7__[/* default */ "c"].ACCOUNT.STATUS.ACTIVE);
  _services_positionService__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].fetchList(setPositions);
  var currency = 'USD';

  var computeBalance = function computeBalance(o) {
    return o.balanceState && o.balanceState.totals[currency] ? o.balanceState.totals[currency].balance : undefined;
  };

  var sumBalance = accounts.map(function (o) {
    return computeBalance(o);
  }).filter(function (b) {
    return b !== undefined;
  }).reduce(function (a, b) {
    return a + b;
  }, 0);
  return _jsx("div", {
    className: "HomePage"
  }, void 0, _services_uiUtils__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].pageTitle('Dashboard'), _ref, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "text-center"
  }, void 0, _ref2, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 4
  }, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {}, void 0, _jsx("h1", {}, void 0, accounts.length), _ref3)), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 4
  }, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {}, void 0, _jsx("h1", {}, void 0, positions.length), _ref4)), _ref5), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Row"], {
    className: "text-center"
  }, void 0, _ref6, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 4
  }, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {}, void 0, _jsx("h1", {}, void 0, _jsx(_components_Amount__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    value: sumBalance,
    currency: currency,
    colorize: true
  })), _ref7)), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Col"], {
    sm: 4
  }, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_3__["Jumbotron"], {}, void 0, _jsx("h1", {}, void 0, Object.keys(totals.plSum).map(function (k) {
    return _jsx(_components_Amount__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      value: totals.plSum[k],
      diff: true,
      currency: k,
      colorize: true
    }, k);
  })), _ref8)), _ref9), _jsx("div", {
    className: "text-muted text-center"
  }, void 0, _jsx("small", {}, void 0, "Updated ", _services_uiUtils__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].dateFromNowSpan(lastSync))), _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref20, _ref21, _ref22);
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(null, mapDispatchToProps);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(withConnect)(HomePage));

/***/ }),

/***/ "210b70bdc8afc7b73c8f":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("0e326f80368fd0b1333e")(false);
// Module
exports.push([module.i, "", ""]);



/***/ }),

/***/ "c37fe5999f1498e7f04f":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("210b70bdc8afc7b73c8f");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("1e4534d1d62a11482e97")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

}]); 