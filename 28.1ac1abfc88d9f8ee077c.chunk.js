// [AIV_SHORT]  Build version: 1.0.0 - Thursday, February 16th, 2023, 3:58:15 PM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "96b8d354413d0a3608f7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("8af190b70a6bc55c6f1b");

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__("d7dd51e1bf6bfc2c9c3d");

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__("ab4cb61bcb2dc161defb");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/index.js
var cjs = __webpack_require__("cb12d4155305786bdcf4");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("f01efac8284662da352d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var react_fontawesome_index_es = __webpack_require__("6643a48240e3ce4e96c0");

// EXTERNAL MODULE: ./app/services/dbService.js + 1 modules
var dbService = __webpack_require__("81d892788976e62ec284");

// EXTERNAL MODULE: ./app/services/uiUtils.js
var uiUtils = __webpack_require__("31745dad8e82e7819831");

// EXTERNAL MODULE: ./app/services/logService.js
var logService = __webpack_require__("1a56969383e5bb307f53");

// CONCATENATED MODULE: ./app/components/ImportModal/index.js
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * ImportModal
 *
 */



 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

var _ref2 = /*#__PURE__*/_jsx(cjs["Modal"].Header, {
  closeButton: true
}, void 0, _jsx(cjs["Modal"].Title, {}, void 0, "Import database"));

function ImportModal(props) {
  var logger = logService["a" /* default */].getLogger('ImportModal');
  var onClose = props.onClose;

  var _useState = Object(react["useState"])(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      blob = _useState2[0],
      setBlob = _useState2[1];

  var _useState3 = Object(react["useState"])(undefined),
      _useState4 = _slicedToArray(_useState3, 2),
      error = _useState4[0],
      setError = _useState4[1];

  var reset = function reset() {
    setBlob(undefined);
    setError(undefined);
  };

  var handleInput = function handleInput(event) {
    var filename = event.target.files[0];
    setBlob(filename);
  };

  var handleSubmit = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              dbService["a" /* default */].import(blob).then(function () {
                logger.log('import success');
                reset();
                onClose();
              }).catch(function (e) {
                logger.error('import error');
                setError(e.message);
              });

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return _jsx("div", {}, void 0, _ref2, _jsx(cjs["Modal"].Body, {}, void 0, error && _jsx(cjs["Alert"], {
    variant: "danger"
  }, void 0, error), _jsx(cjs["Form"], {}, void 0, _jsx(cjs["Form"].Row, {}, void 0, _jsx(cjs["Col"], {}, void 0, _jsx("input", {
    type: "file",
    onChange: handleInput
  }))))), _jsx(cjs["Modal"].Footer, {}, void 0, _jsx(cjs["Button"], {
    variant: "primary",
    onClick: handleSubmit,
    disabled: !blob
  }, void 0, "Import database")));
}

/* harmony default export */ var components_ImportModal = (ImportModal);
// EXTERNAL MODULE: ./app/components/ModalButton/index.js + 1 modules
var ModalButton = __webpack_require__("b755063fbdd5d440f452");

// EXTERNAL MODULE: ./app/services/utils.js
var utils = __webpack_require__("ec08d56feea617277228");

// EXTERNAL MODULE: ./app/services/tableService.js
var tableService = __webpack_require__("ef1c169128c9c55f3c30");

// EXTERNAL MODULE: ./app/services/config.js
var config = __webpack_require__("97d135cf685e82246c39");

// CONCATENATED MODULE: ./app/containers/SystemPage/index.js
var SystemPage_REACT_ELEMENT_TYPE;

function SystemPage_jsx(type, props, key, children) { if (!SystemPage_REACT_ELEMENT_TYPE) { SystemPage_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: SystemPage_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = SystemPage_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function SystemPage_slicedToArray(arr, i) { return SystemPage_arrayWithHoles(arr) || SystemPage_iterableToArrayLimit(arr, i) || SystemPage_unsupportedIterableToArray(arr, i) || SystemPage_nonIterableRest(); }

function SystemPage_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function SystemPage_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SystemPage_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SystemPage_arrayLikeToArray(o, minLen); }

function SystemPage_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function SystemPage_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function SystemPage_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * SystemPage
 *
 */














var SystemPage_ref = /*#__PURE__*/SystemPage_jsx("h2", {}, void 0, "Database");

var _ref4 = /*#__PURE__*/SystemPage_jsx("br", {});

var _ref5 = /*#__PURE__*/SystemPage_jsx(cjs["Button"], {
  variant: "info"
}, void 0, "Import");

function SystemPage() {
  var _useState = Object(react["useState"])({}),
      _useState2 = SystemPage_slicedToArray(_useState, 2),
      tables = _useState2[0],
      setTables = _useState2[1]; // fetch tables


  utils["a" /* default */].useEffect(function () {
    var countTable = function countTable(label, count) {
      count.then(function (count) {
        tables[label] = count;
        setTables(Object.assign({}, tables));
      });
    };

    var fetch = function fetch() {
      var _iterator = _createForOfIteratorHelper(tableService["a" /* default */].getTableServices()),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var service = _step.value;
          countTable(service.TABLE, service.count());
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    return dbService["a" /* default */].onListener(fetch);
  }, []);

  var handleExport = function handleExport() {
    var dateStr = utils["a" /* default */].date().replace(new RegExp(' ', 'g'), '-').replace(new RegExp(':', 'g'), '');
    var filename = "tradewatch-".concat(dateStr, ".json");
    dbService["a" /* default */].export().then(function (blob) {
      return uiUtils["a" /* default */].responseBlob(blob, filename);
    });
  };

  var handleClear = function handleClear() {
    dbService["a" /* default */].clear().then(function () {
      return location.reload();
    });
  };

  return SystemPage_jsx("div", {}, void 0, uiUtils["a" /* default */].pageTitle('System'), SystemPage_jsx("h1", {}, void 0, SystemPage_jsx(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
    icon: index_es["m" /* faDatabase */],
    size: "xs"
  }), " System"), SystemPage_ref, Object.entries(tables).map(function (_ref2) {
    var _ref3 = SystemPage_slicedToArray(_ref2, 2),
        key = _ref3[0],
        label = _ref3[1];

    return SystemPage_jsx("div", {}, key, SystemPage_jsx("strong", {}, void 0, key, ":"), " ", label, _ref4);
  }), SystemPage_jsx(cjs["Button"], {
    onClick: function onClick() {
      return confirm('Clear database?') && handleClear();
    },
    variant: "danger"
  }, void 0, "Clear"), ' ', SystemPage_jsx(cjs["Button"], {
    onClick: handleExport,
    variant: "info"
  }, void 0, "Export"), ' ', SystemPage_jsx(ModalButton["a" /* default */], {
    modal: function modal(_onClose) {
      return SystemPage_jsx(components_ImportModal, {
        onClose: function onClose() {
          location.reload();

          _onClose();
        }
      });
    }
  }, void 0, _ref5), ' ');
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var withConnect = Object(lib["connect"])(null, mapDispatchToProps);
/* harmony default export */ var containers_SystemPage = __webpack_exports__["default"] = (Object(redux["compose"])(withConnect)(SystemPage));

/***/ }),

/***/ "b755063fbdd5d440f452":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("8af190b70a6bc55c6f1b");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/Modal.js
var Modal = __webpack_require__("84064cd1cb85c3a87452");
var Modal_default = /*#__PURE__*/__webpack_require__.n(Modal);

// EXTERNAL MODULE: ./node_modules/react-draggable/build/cjs/cjs.js
var cjs = __webpack_require__("f6efa02fe3f75b753dcb");
var cjs_default = /*#__PURE__*/__webpack_require__.n(cjs);

// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/ModalDialog.js
var ModalDialog = __webpack_require__("5dacc1f50c9b820533df");
var ModalDialog_default = /*#__PURE__*/__webpack_require__.n(ModalDialog);

// CONCATENATED MODULE: ./app/components/utils/DraggableModal.js
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var DraggableModal_MyDraggableModal = /*#__PURE__*/function (_React$Component) {
  _inherits(MyDraggableModal, _React$Component);

  var _super = _createSuper(MyDraggableModal);

  function MyDraggableModal() {
    _classCallCheck(this, MyDraggableModal);

    return _super.apply(this, arguments);
  }

  _createClass(MyDraggableModal, [{
    key: "render",
    value: function render() {
      return _jsx(cjs_default.a, {
        handle: ".modal-title"
      }, void 0, /*#__PURE__*/react_default.a.createElement(ModalDialog_default.a, this.props));
    }
  }]);

  return MyDraggableModal;
}(react_default.a.Component);

var DraggableModal_DraggableModal = /*#__PURE__*/function (_Component) {
  _inherits(DraggableModal, _Component);

  var _super2 = _createSuper(DraggableModal);

  function DraggableModal() {
    _classCallCheck(this, DraggableModal);

    return _super2.apply(this, arguments);
  }

  _createClass(DraggableModal, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/react_default.a.createElement(Modal_default.a, _extends({
        dialogAs: DraggableModal_MyDraggableModal
      }, this.props));
    }
  }]);

  return DraggableModal;
}(react["Component"]);


// CONCATENATED MODULE: ./app/components/ModalButton/index.js
var ModalButton_REACT_ELEMENT_TYPE;

function ModalButton_jsx(type, props, key, children) { if (!ModalButton_REACT_ELEMENT_TYPE) { ModalButton_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: ModalButton_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * ModalButton
 *
 */

 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

function ModalButton(props) {
  var _useState = Object(react["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var onClose = function onClose() {
    setShow(false);
  };

  var onHide = function onHide() {
    if (confirm('Close without saving?')) {
      onClose();
    }
  };

  return ModalButton_jsx("span", {}, void 0, ModalButton_jsx("a", {
    onClick: function onClick() {
      return setShow(true);
    }
  }, void 0, props.children), show && ModalButton_jsx(DraggableModal_DraggableModal, {
    show: show,
    onHide: onHide,
    size: "xl"
  }, void 0, props.modal(onClose)));
}

/* harmony default export */ var components_ModalButton = __webpack_exports__["a"] = (ModalButton);

/***/ })

}]); 