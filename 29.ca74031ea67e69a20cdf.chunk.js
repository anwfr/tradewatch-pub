// [AIV_SHORT]  Build version: 1.0.0 - Thursday, March 16th, 2023, 10:19:36 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[29],{

/***/ "439c00c9a57647afdb8d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigPage", function() { return ConfigPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cb12d4155305786bdcf4");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8a2d1b95e05b6a321e74");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("d7dd51e1bf6bfc2c9c3d");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ab4cb61bcb2dc161defb");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("f01efac8284662da352d");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("6643a48240e3ce4e96c0");
/* harmony import */ var _services_uiUtils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("31745dad8e82e7819831");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("97d135cf685e82246c39");
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * ConfigPage
 *
 */










var _ref = /*#__PURE__*/_jsx("h2", {}, void 0, "General");

var _ref2 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
  column: true,
  lg: 2
}, void 0, "Currencies");

var _ref3 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
  column: true,
  lg: 2
}, void 0, "Date min (yyyy-mm-dd)");

function ConfigPage() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_services_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].isHideAmounts()),
      _useState2 = _slicedToArray(_useState, 2),
      hideAmounts = _useState2[0],
      setHideAmounts = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_services_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getDateMin()),
      _useState4 = _slicedToArray(_useState3, 2),
      dateMin = _useState4[0],
      setDateMin = _useState4[1];

  var currencies = _services_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].getCurrencies();
  console.log('currencies', currencies);

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currencies[0]),
      _useState6 = _slicedToArray(_useState5, 2),
      currency0 = _useState6[0],
      setCurrency0 = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(currencies[1]),
      _useState8 = _slicedToArray(_useState7, 2),
      currency1 = _useState8[0],
      setCurrency1 = _useState8[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _services_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].setHideAmounts(hideAmounts);
  }, [hideAmounts]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _services_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].setCurrencies([currency0, currency1]);
  }, [currency0, currency1]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    _services_config__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].setDateMin(dateMin);
  }, [dateMin]);
  return _jsx("div", {}, void 0, _services_uiUtils__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"].pageTitle('Config'), _jsx("h1", {}, void 0, _jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__[/* FontAwesomeIcon */ "a"], {
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__[/* faCog */ "k"],
    size: "xs"
  }), " Config"), _ref, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: function onClick() {
      return setHideAmounts(!hideAmounts);
    },
    variant: "info"
  }, void 0, hideAmounts ? 'Show amounts' : 'Hide amounts'), ' ', _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {}, void 0, _ref2, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    value: currency0,
    onChange: function onChange(e) {
      return setCurrency0(e.target.value);
    }
  }), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    value: currency1,
    onChange: function onChange(e) {
      return setCurrency1(e.target.value);
    }
  }))), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {}, void 0, _ref3, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    value: dateMin,
    onChange: function onChange(e) {
      return setDateMin(e.target.value);
    }
  }))))));
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var withConnect = Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, mapDispatchToProps);
/* harmony default export */ __webpack_exports__["default"] = (Object(redux__WEBPACK_IMPORTED_MODULE_4__["compose"])(withConnect)(ConfigPage));

/***/ })

}]); 