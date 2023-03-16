// [AIV_SHORT]  Build version: 1.0.0 - Thursday, March 16th, 2023, 10:19:36 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "745ee503ee01e9d0a8ef":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("8af190b70a6bc55c6f1b");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("8a2d1b95e05b6a321e74");

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__("d7dd51e1bf6bfc2c9c3d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("f01efac8284662da352d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var react_fontawesome_index_es = __webpack_require__("6643a48240e3ce4e96c0");

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__("ab4cb61bcb2dc161defb");

// EXTERNAL MODULE: ./app/services/uiUtils.js
var uiUtils = __webpack_require__("31745dad8e82e7819831");

// EXTERNAL MODULE: ./app/services/const.js
var services_const = __webpack_require__("6111e2d656e177458f5a");

// EXTERNAL MODULE: ./app/services/metricService.js
var metricService = __webpack_require__("5c299a94b95740198de1");

// EXTERNAL MODULE: ./app/services/transferService.js
var transferService = __webpack_require__("8a54b423a5184a5c3376");

// EXTERNAL MODULE: ./app/components/ChartBalance/index.js
var ChartBalance = __webpack_require__("ff8872920c5a1c6e0b0f");

// EXTERNAL MODULE: ./app/services/MyTable.js
var MyTable = __webpack_require__("85266f8da1d22730bcf6");

// EXTERNAL MODULE: ./app/services/utils.js
var utils = __webpack_require__("ec08d56feea617277228");

// EXTERNAL MODULE: ./app/services/config.js
var config = __webpack_require__("97d135cf685e82246c39");

// EXTERNAL MODULE: ./app/components/Amount/index.js
var Amount = __webpack_require__("133eead519bfb879e1fb");

// EXTERNAL MODULE: ./app/components/Colorify/index.js
var Colorify = __webpack_require__("4a45e9556aa0b9a527cf");

// EXTERNAL MODULE: ./app/services/accountService.js + 1 modules
var accountService = __webpack_require__("db6b135fcc75b7aee81a");

// CONCATENATED MODULE: ./app/components/TransfersTable/index.js
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 *
 * TransfersTable
 *
 */






 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

var ACCOUNT_DISABLED_VALUE = -1.111111; // TODO

var _ref2 = /*#__PURE__*/_jsx("strong", {}, void 0, _jsx(Colorify["a" /* default */], {}, void 0, "disabled"));

function TransfersTable(_ref) {
  var transfers = _ref.transfers,
      metrics = _ref.metrics;
  var currency = 'USD'; // filter dateMin

  var dateMin = config["a" /* default */].getDateMin();
  var filteredMetrics = utils["a" /* default */].deepCopy(metrics);

  if (dateMin) {
    var limit = utils["a" /* default */].now() - dateMin;
    filteredMetrics = filteredMetrics.filter(function (b) {
      return b[0] >= limit;
    });
  }

  var transferredMetrics = [];
  var previous = 0;
  var previousByAccount = {};

  for (var ii in filteredMetrics) {
    var i = parseInt(ii);
    var b = filteredMetrics[i];
    var bNext = filteredMetrics[i + 1];

    if (!filteredMetrics[i + 1] || utils["a" /* default */].dateSimple(b[0]) != utils["a" /* default */].dateSimple(bNext[0])) {
      // only consider last balance of the day
      var transferred = b[1][currency].transferred;

      if (transferred != previous) {
        var diff = transferred - previous;
        previous = transferred;
        var byAccount = {};
        var diffByAccount = {};

        for (var _i = 0, _Object$keys = Object.keys(b[2]); _i < _Object$keys.length; _i++) {
          var k = _Object$keys[_i];
          var previousValueTransferred = previousByAccount[k] ? previousByAccount[k] : 0;
          var valueTransferred = b[2][k][currency].transferred;

          if (previousValueTransferred != valueTransferred) {
            diffByAccount[k] = valueTransferred - previousValueTransferred;
          }

          byAccount[k] = valueTransferred;
        } // add missing accounts to diffByAccount (= disabled accounts)


        for (var _i2 = 0, _Object$keys2 = Object.keys(previousByAccount); _i2 < _Object$keys2.length; _i2++) {
          var _k = _Object$keys2[_i2];

          if (!byAccount[_k]) {
            diffByAccount[_k] = ACCOUNT_DISABLED_VALUE;
          }
        }

        previousByAccount = byAccount;
        transferredMetrics.push({
          created: b[0],
          diff: diff,
          diffByAccount: diffByAccount
        });
      }
    }
  }

  var renderDetailAmount = function renderDetailAmount(v) {
    if (v == ACCOUNT_DISABLED_VALUE) return _ref2;
    return _jsx(Amount["a" /* default */], {
      value: v,
      colorize: true
    });
  };

  var details = function details(o) {
    return _jsx("table", {
      style: {
        width: '70%'
      }
    }, void 0, _jsx("tr", {}, void 0, _jsx("td", {
      style: {
        width: '50%'
      }
    }, void 0, Object.keys(o).filter(function (k) {
      return o[k] < 0;
    }).sort(function (a, b) {
      return o[a] - o[b];
    }).map(function (k) {
      return _jsx("div", {}, void 0, _jsx("div", {
        style: {
          width: '30%',
          float: 'left'
        }
      }, void 0, renderDetailAmount(o[k])), " ", accountService["a" /* default */].adaptKey(k, true));
    })), _jsx("td", {}, void 0, Object.keys(o).filter(function (k) {
      return o[k] > 0;
    }).sort(function (a, b) {
      return o[b] - o[a];
    }).map(function (k) {
      return _jsx("div", {}, void 0, _jsx("div", {
        style: {
          width: '30%',
          float: 'left'
        }
      }, void 0, renderDetailAmount(o[k])), " ", accountService["a" /* default */].adaptKey(k, true));
    }))));
  };

  var columns = [];
  columns.push({
    id: 'date',
    Header: 'Date',
    accessor: function accessor(o) {
      return o.created;
    },
    Cell: function Cell(o) {
      return utils["a" /* default */].dateSimple(o.cell.value);
    }
  }, {
    id: 'transferred',
    Header: 'Transfers',
    accessor: function accessor(o) {
      return o.diff;
    },
    Cell: function Cell(o) {
      return _jsx(Amount["a" /* default */], {
        value: o.cell.value,
        currency: currency,
        colorize: true
      });
    }
  }, {
    id: 'details',
    Header: 'Details',
    accessor: function accessor(o) {
      return o.diffByAccount;
    },
    Cell: function Cell(o) {
      return details(o.cell.value);
    }
  });
  return _jsx(MyTable["a" /* default */], {
    size: "sm",
    columns: columns,
    data: transferredMetrics,
    sortBy: [{
      id: 'created',
      desc: true
    }]
  });
}

/* harmony default export */ var components_TransfersTable = (TransfersTable);
// CONCATENATED MODULE: ./app/containers/TransfersPage/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransfersPage", function() { return TransfersPage; });
var TransfersPage_REACT_ELEMENT_TYPE;

function TransfersPage_jsx(type, props, key, children) { if (!TransfersPage_REACT_ELEMENT_TYPE) { TransfersPage_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: TransfersPage_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * TransfersPage
 *
 */













var TransfersPage_ref = /*#__PURE__*/TransfersPage_jsx("br", {});

function TransfersPage() {
  var _useState = Object(react["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      transfers = _useState2[0],
      setTransfers = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      metrics = _useState4[0],
      setMetrics = _useState4[1];

  transferService["a" /* default */].fetchList(setTransfers);
  metricService["a" /* default */].fetchListByMetric(setMetrics, services_const["c" /* default */].METRICS.BALANCE);
  var metricsAdapted = metrics.map(function (m) {
    return [m.created, m.totals, m.byAccount];
  });
  return TransfersPage_jsx("div", {}, void 0, uiUtils["a" /* default */].pageTitle('Transfers'), TransfersPage_jsx("h1", {}, void 0, TransfersPage_jsx(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
    icon: index_es["x" /* faUserCircle */],
    size: "xs"
  }), " Transfers"), TransfersPage_ref, TransfersPage_jsx(ChartBalance["a" /* default */], {
    balanceTotals: metricsAdapted,
    onlyTransfers: true
  }), TransfersPage_jsx(components_TransfersTable, {
    transfers: transfers,
    metrics: metricsAdapted
  }));
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var withConnect = Object(lib["connect"])(null, mapDispatchToProps);
/* harmony default export */ var containers_TransfersPage = __webpack_exports__["default"] = (Object(redux["compose"])(withConnect)(TransfersPage));

/***/ }),

/***/ "ff8872920c5a1c6e0b0f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("97d135cf685e82246c39");
/* harmony import */ var _services_uiUtils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("31745dad8e82e7819831");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("34afdf6a7b524812949d");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("ec08d56feea617277228");
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 *
 * ChartBalance
 *
 */




 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ChartBalance(_ref) {
  var balanceTotals = _ref.balanceTotals,
      _ref$onlyTransfers = _ref.onlyTransfers,
      onlyTransfers = _ref$onlyTransfers === void 0 ? false : _ref$onlyTransfers,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 400 : _ref$height;
  var groupLeft = undefined;
  var groupRight = undefined;
  var periods = [];
  var data = [];

  var _loop = function _loop(i) {
    var currency = _services_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].currencies[i];
    var balanceTotalsFiltered = balanceTotals.filter(function (b) {
      return b[1][currency] !== undefined;
    });
    periods = _services_utils__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].findPeriods(balanceTotalsFiltered);

    if (!onlyTransfers) {
      // balance
      var balanceItems = balanceTotalsFiltered.map(function (b) {
        return [b[0], b[1][currency].balance];
      });
      data.push({
        "name": currency + ' balance',
        currency: currency,
        "type": 'line',
        "data": balanceItems,
        "color": _services_uiUtils__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].colorAssign(currency),
        "opposite": i % 2 != 0,
        "curve": "smooth",
        width: 5
      });
    }

    if (_services_utils__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].isFiat(currency)) {
      // transferred
      var transferredItems = balanceTotalsFiltered.map(function (b) {
        return [b[0], b[1][currency].transferred];
      });
      var opposite = i % 2 != 0;
      data.push({
        "name": currency + ' transferred',
        currency: currency,
        "type": 'line',
        "data": transferredItems,
        "color": _services_uiUtils__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].colorAssign(currency, -20),
        "opposite": opposite,
        "curve": "stepline",
        width: onlyTransfers ? 4 : 2,
        markerSize: 0.1
      });

      if (opposite) {
        groupRight = currency;
      } else {
        groupLeft = currency;
      }
    }
  };

  for (var i in _services_config__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].currencies) {
    _loop(i);
  }

  return _jsx(_Line__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    data: data,
    title: "Balance",
    xAxisPeriods: periods,
    width: "90%",
    height: height,
    groupLeft: groupLeft,
    groupRight: groupRight
  });
}

/* harmony default export */ __webpack_exports__["a"] = (ChartBalance);

/***/ })

}]); 