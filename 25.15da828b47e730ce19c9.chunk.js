// [AIV_SHORT]  Build version: 1.0.0 - Thursday, February 16th, 2023, 3:58:15 PM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "09e8164795f1f5564f62":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("0e326f80368fd0b1333e")(false);
// Module
exports.push([module.i, ".react-tags {\n  position: relative;\n  padding: 6px 0 0 6px;\n  border: 1px solid #D1D1D1;\n  border-radius: 1px;\n\n  /* shared font styles */\n  font-size: 1em;\n  line-height: 1.2;\n\n  /* clicking anywhere will focus the input */\n  cursor: text;\n}\n\n.react-tags.is-focused {\n  border-color: #B1B1B1;\n}\n\n.react-tags__selected {\n  display: inline;\n}\n\n.react-tags__selected-tag {\n  display: inline-block;\n  box-sizing: border-box;\n  margin: 0 6px 6px 0;\n  padding: 6px 8px;\n  border: 1px solid #D1D1D1;\n  border-radius: 2px;\n  background: #F1F1F1;\n\n  /* match the font styles */\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.react-tags__selected-tag:after {\n  content: '\\2715';\n  color: #AAA;\n  margin-left: 8px;\n}\n\n.react-tags__selected-tag:hover,\n.react-tags__selected-tag:focus {\n  border-color: #B1B1B1;\n}\n\n.react-tags__search {\n  display: inline-block;\n\n  /* match tag layout */\n  padding: 7px 2px;\n  margin-bottom: 6px;\n\n  /* prevent autoresize overflowing the container */\n  max-width: 100%;\n}\n\n@media screen and (min-width: 30em) {\n\n  .react-tags__search {\n    /* this will become the offsetParent for suggestions */\n    position: relative;\n  }\n\n}\n\n.react-tags__search-input {\n  /* prevent autoresize overflowing the container */\n  max-width: 100%;\n\n  /* remove styles and layout from this element */\n  margin: 0;\n  padding: 0;\n  border: 0;\n  outline: none;\n\n  /* match the font styles */\n  font-size: inherit;\n  line-height: inherit;\n}\n\n.react-tags__search-input::-ms-clear {\n  display: none;\n}\n\n.react-tags__suggestions {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n}\n\n@media screen and (min-width: 30em) {\n\n  .react-tags__suggestions {\n    width: 240px;\n  }\n\n}\n\n.react-tags__suggestions ul {\n  margin: 4px -1px;\n  padding: 0;\n  list-style: none;\n  background: white;\n  border: 1px solid #D1D1D1;\n  border-radius: 2px;\n  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);\n}\n\n.react-tags__suggestions li {\n  border-bottom: 1px solid #ddd;\n  padding: 6px 8px;\n}\n\n.react-tags__suggestions li mark {\n  text-decoration: underline;\n  background: none;\n  font-weight: 600;\n}\n\n.react-tags__suggestions li:hover {\n  cursor: pointer;\n  background: #eee;\n}\n\n.react-tags__suggestions li.is-active {\n  background: #b7cfe0;\n}\n\n.react-tags__suggestions li.is-disabled {\n  opacity: 0.5;\n  cursor: auto;\n}\n", ""]);



/***/ }),

/***/ "35b3bc3006adf74cdd9d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("8af190b70a6bc55c6f1b");

// EXTERNAL MODULE: ./node_modules/react-bootstrap/cjs/index.js
var cjs = __webpack_require__("cb12d4155305786bdcf4");

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("8a2d1b95e05b6a321e74");

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__("d7dd51e1bf6bfc2c9c3d");

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__("ab4cb61bcb2dc161defb");

// EXTERNAL MODULE: ./node_modules/@fortawesome/free-solid-svg-icons/index.es.js
var index_es = __webpack_require__("f01efac8284662da352d");

// EXTERNAL MODULE: ./node_modules/@fortawesome/react-fontawesome/index.es.js
var react_fontawesome_index_es = __webpack_require__("6643a48240e3ce4e96c0");

// EXTERNAL MODULE: ./app/services/uiUtils.js
var uiUtils = __webpack_require__("31745dad8e82e7819831");

// EXTERNAL MODULE: ./app/services/noteService.js
var noteService = __webpack_require__("4f112e147dfe55c933a7");

// EXTERNAL MODULE: ./app/services/MyTable.js
var MyTable = __webpack_require__("85266f8da1d22730bcf6");

// EXTERNAL MODULE: ./node_modules/react-router-dom/index.js
var react_router_dom = __webpack_require__("e95a63b25fb92ed15721");

// EXTERNAL MODULE: ./app/components/WatchButton/index.js + 1 modules
var WatchButton = __webpack_require__("99cc24420e411a5d1277");

// EXTERNAL MODULE: ./app/services/marketService.js
var marketService = __webpack_require__("ad94c3f16ea79fc55b25");

// CONCATENATED MODULE: ./app/components/NotesTable/index.js
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 *
 * NotesTable
 *
 */






 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

var _ref2 = /*#__PURE__*/_jsx("br", {});

function NotesTable(_ref) {
  var notes = _ref.notes;
  var columns = [{
    Header: 'Name',
    accessor: function accessor(o) {
      return o.name;
    },
    Cell: function Cell(o) {
      return _jsx("span", {}, void 0, _jsx(WatchButton["a" /* default */], {
        watch: o.row.original.watch,
        onToggle: function onToggle() {
          return noteService["a" /* default */].toggleWatch(o.row.original.id);
        }
      }), ' ', _jsx("strong", {}, void 0, _jsx(react_router_dom["Link"], {
        to: uiUtils["a" /* default */].linkNote(o.row.original.id)
      }, void 0, o.cell.value)));
    }
  }, {
    id: 'created',
    Header: 'Created',
    accessor: function accessor(o) {
      return o.created;
    },
    Cell: function Cell(o) {
      return uiUtils["a" /* default */].dateFromNowSpan(o.cell.value);
    }
  }, {
    id: 'updated',
    Header: 'Updated',
    accessor: function accessor(o) {
      return o.updated;
    },
    Cell: function Cell(o) {
      return uiUtils["a" /* default */].dateFromNowSpan(o.cell.value);
    }
  }, {
    id: 'checkNext',
    Header: 'Alert',
    accessor: function accessor(o) {
      return o.checkNext;
    },
    Cell: function Cell(o) {
      return _jsx("div", {}, void 0, uiUtils["a" /* default */].renderNextAlert(o.cell.value, true), _ref2, _jsx("small", {}, void 0, "last ", uiUtils["a" /* default */].dateFromNowSpan(o.cell.value)));
    }
  }];
  return _jsx(MyTable["a" /* default */], {
    columns: columns,
    data: notes,
    sortBy: [{
      id: 'checkNext',
      desc: false
    }]
  });
}

/* harmony default export */ var components_NotesTable = (NotesTable);
// EXTERNAL MODULE: ./app/components/EditNoteModal/index.js
var EditNoteModal = __webpack_require__("d36f24c4f5cd6043892f");

// EXTERNAL MODULE: ./app/components/ModalButton/index.js + 1 modules
var ModalButton = __webpack_require__("b755063fbdd5d440f452");

// CONCATENATED MODULE: ./app/containers/NotesPage/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotesPage", function() { return NotesPage; });
var NotesPage_REACT_ELEMENT_TYPE;

function NotesPage_jsx(type, props, key, children) { if (!NotesPage_REACT_ELEMENT_TYPE) { NotesPage_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: NotesPage_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * NotesPage
 *
 */













var NotesPage_ref = /*#__PURE__*/NotesPage_jsx("small", {}, void 0, NotesPage_jsx(cjs["Button"], {}, void 0, "+"));

function NotesPage() {
  var _useState = Object(react["useState"])([]),
      _useState2 = _slicedToArray(_useState, 2),
      notes = _useState2[0],
      setNotes = _useState2[1]; // fetch notes


  noteService["a" /* default */].fetchList(setNotes);
  return NotesPage_jsx("div", {}, void 0, uiUtils["a" /* default */].pageTitle('Notes'), NotesPage_jsx("h1", {}, void 0, NotesPage_jsx(react_fontawesome_index_es["a" /* FontAwesomeIcon */], {
    icon: index_es["t" /* faStickyNote */],
    size: "xs"
  }), " Notes ", NotesPage_jsx(ModalButton["a" /* default */], {
    modal: function modal(onClose) {
      return NotesPage_jsx(EditNoteModal["a" /* default */], {
        onClose: onClose
      });
    }
  }, void 0, NotesPage_ref)), NotesPage_jsx(components_NotesTable, {
    notes: notes
  }));
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch
  };
}

var withConnect = Object(lib["connect"])(null, mapDispatchToProps);
/* harmony default export */ var containers_NotesPage = __webpack_exports__["default"] = (Object(redux["compose"])(withConnect)(NotesPage));

/***/ }),

/***/ "7fb4d186487e838ef309":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("09e8164795f1f5564f62");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__("1e4534d1d62a11482e97")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "85ace4905f1053a8a8e2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("8af190b70a6bc55c6f1b");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-mde/lib/js/index.js
var js = __webpack_require__("c785a65f582f2bcc977a");
var js_default = /*#__PURE__*/__webpack_require__.n(js);

// EXTERNAL MODULE: ./node_modules/react-mde/lib/styles/css/react-mde-all.css
var react_mde_all = __webpack_require__("42ebac27a836ea7f1fe9");

// EXTERNAL MODULE: ./app/services/uiUtils.js
var uiUtils = __webpack_require__("31745dad8e82e7819831");

// EXTERNAL MODULE: ./node_modules/react-tag-autocomplete/dist/ReactTags.umd.js
var ReactTags_umd = __webpack_require__("aec39b1cc4da90a5ec51");
var ReactTags_umd_default = /*#__PURE__*/__webpack_require__.n(ReactTags_umd);

// EXTERNAL MODULE: ./node_modules/match-sorter/dist/match-sorter.cjs.js
var match_sorter_cjs = __webpack_require__("b1074d361e6c2c6f6022");

// EXTERNAL MODULE: ./app/components/TagsEditor/TagsEditor.css
var TagsEditor = __webpack_require__("7fb4d186487e838ef309");

// EXTERNAL MODULE: ./app/services/dbSchema.js
var dbSchema = __webpack_require__("8b35cadba4aa7b6a77d5");

// EXTERNAL MODULE: ./app/services/tableService.js
var tableService = __webpack_require__("ef1c169128c9c55f3c30");

// CONCATENATED MODULE: ./app/services/tagService.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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





var tagService_TagService = /*#__PURE__*/function (_TableService) {
  _inherits(TagService, _TableService);

  var _super = _createSuper(TagService);

  function TagService() {
    _classCallCheck(this, TagService);

    return _super.call(this, 'TagService', dbSchema["a" /* default */].TABLES.TAGS, ['name']);
  }

  _createClass(TagService, [{
    key: "mapByName",
    value: function mapByName(tags) {
      var map = {};

      var _iterator = _createForOfIteratorHelper(tags),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var tag = _step.value;
          map[tag.name] = tag.id;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return map;
    }
  }, {
    key: "refreshTags",
    value: function () {
      var _refreshTags = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(tags, keepMissing) {
        var names, freshTags, freshTagsByName, _iterator2, _step2, tag;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                names = tags.map(function (tag) {
                  return tag.name;
                });
                _context.next = 3;
                return this.getListByNames(names);

              case 3:
                freshTags = _context.sent;

                if (keepMissing) {
                  freshTagsByName = this.mapByName(freshTags);
                  _iterator2 = _createForOfIteratorHelper(tags);

                  try {
                    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                      tag = _step2.value;

                      if (!freshTagsByName[tag.name]) {
                        freshTags.push(tag);
                      }
                    }
                  } catch (err) {
                    _iterator2.e(err);
                  } finally {
                    _iterator2.f();
                  }
                }

                this.logger.log('>> refreshTags', tags, freshTags);
                return _context.abrupt("return", freshTags);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshTags(_x, _x2) {
        return _refreshTags.apply(this, arguments);
      }

      return refreshTags;
    }()
  }, {
    key: "computeAndCreateAll",
    value: function () {
      var _computeAndCreateAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(tags) {
        var freshTags, freshTagsByName, toCreate, createdItems, _iterator3, _step3, createdItem;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.refreshTags(tags, false);

              case 2:
                freshTags = _context2.sent;
                freshTagsByName = this.mapByName(freshTags);
                toCreate = tags.filter(function (tag) {
                  return !freshTagsByName[tag.name];
                }).map(function (tag) {
                  return {
                    name: tag.name
                  };
                });
                this.logger.log('toCreate', toCreate);

                if (!(toCreate.length > 0)) {
                  _context2.next = 12;
                  break;
                }

                _context2.next = 9;
                return this.createsAndGet(toCreate);

              case 9:
                createdItems = _context2.sent;
                _iterator3 = _createForOfIteratorHelper(createdItems);

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    createdItem = _step3.value;
                    freshTags.push(createdItem);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

              case 12:
                this.logger.log('>> computeAndCreateAll', freshTags);
                return _context2.abrupt("return", freshTags);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function computeAndCreateAll(_x3) {
        return _computeAndCreateAll.apply(this, arguments);
      }

      return computeAndCreateAll;
    }() //

  }, {
    key: "getListByNames",
    value: function getListByNames(names) {
      if (!names) return Promise.resolve([]);
      return this.getDbTable().where('name').anyOf(names).toArray();
    }
  }]);

  return TagService;
}(tableService["a" /* default */]);

var tagService = new tagService_TagService();
/* harmony default export */ var services_tagService = (tagService);
// CONCATENATED MODULE: ./app/components/TagsEditor/index.js
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || TagsEditor_unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return TagsEditor_arrayLikeToArray(arr); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || TagsEditor_unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TagsEditor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TagsEditor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TagsEditor_arrayLikeToArray(o, minLen); }

function TagsEditor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * TagsEditor
 *
 */




 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

function TagsEditor_TagsEditor(props) {
  var _useState = Object(react["useState"])(props.value ? props.value : []),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = Object(react["useState"])([]),
      _useState4 = _slicedToArray(_useState3, 2),
      suggestions = _useState4[0],
      setSuggestions = _useState4[1];

  services_tagService.fetchList(setSuggestions); // update tag names from tag ids

  Object(react["useEffect"])(function () {
    if (value.length > 0) {
      services_tagService.refreshTags(value, true).then(function (freshTags) {
        return setValue(freshTags);
      });
    }
  }, [props.value]);

  var onDelete = function onDelete(i) {
    var newValue = value.slice(0);
    newValue.splice(i, 1);
    setValue(newValue);
    props.onChange(newValue);
  };

  var onAddition = function onAddition(tag) {
    var newValue = [].concat(_toConsumableArray(value), [tag]);
    setValue(newValue);
    props.onChange(newValue);
  };

  var onValidate = function onValidate(tag) {
    return value.filter(function (t) {
      return t.name === tag.name;
    }).length === 0;
  };

  var reactTags = react_default.a.createRef();
  return _jsx("div", {}, void 0, /*#__PURE__*/react_default.a.createElement(ReactTags_umd_default.a, {
    ref: reactTags,
    tags: value,
    suggestions: suggestions,
    suggestionsTransform: function suggestionsTransform(query, suggestions) {
      return Object(match_sorter_cjs["matchSorter"])(suggestions, query, {
        keys: ["name"]
      });
    },
    onDelete: onDelete,
    onAddition: onAddition,
    onValidate: onValidate,
    allowNew: true,
    delimiters: ['Enter', 'Tab', ';']
  }));
}

/* harmony default export */ var components_TagsEditor = (TagsEditor_TagsEditor);
// CONCATENATED MODULE: ./app/components/Editor/index.js
var Editor_REACT_ELEMENT_TYPE;

function Editor_jsx(type, props, key, children) { if (!Editor_REACT_ELEMENT_TYPE) { Editor_REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: Editor_REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

function Editor_slicedToArray(arr, i) { return Editor_arrayWithHoles(arr) || Editor_iterableToArrayLimit(arr, i) || Editor_unsupportedIterableToArray(arr, i) || Editor_nonIterableRest(); }

function Editor_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function Editor_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return Editor_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Editor_arrayLikeToArray(o, minLen); }

function Editor_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function Editor_iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function Editor_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 *
 * Editor
 *
 */




 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

function Editor(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? undefined : _ref$tags,
      _ref$onTagsChange = _ref.onTagsChange,
      onTagsChange = _ref$onTagsChange === void 0 ? undefined : _ref$onTagsChange,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small;

  var _useState = Object(react["useState"])('write'),
      _useState2 = Editor_slicedToArray(_useState, 2),
      selectedTab = _useState2[0],
      setSelectedTab = _useState2[1];

  return Editor_jsx("div", {}, void 0, Editor_jsx(js_default.a, {
    value: value,
    onChange: onChange,
    selectedTab: selectedTab,
    onTabChange: setSelectedTab,
    generateMarkdownPreview: function generateMarkdownPreview(markdown) {
      return Promise.resolve(uiUtils["a" /* default */].renderMarkdown(markdown));
    },
    maxEditorHeight: small ? 60 : undefined
  }), onTagsChange && Editor_jsx(components_TagsEditor, {
    value: tags,
    onChange: onTagsChange
  }));
}

/* harmony default export */ var components_Editor = __webpack_exports__["a"] = (Editor);

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

/***/ }),

/***/ "d36f24c4f5cd6043892f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cb12d4155305786bdcf4");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_logService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("1a56969383e5bb307f53");
/* harmony import */ var _services_noteService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("4f112e147dfe55c933a7");
/* harmony import */ var _services_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("97d135cf685e82246c39");
/* harmony import */ var _services_uiUtils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("31745dad8e82e7819831");
/* harmony import */ var _services_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("ec08d56feea617277228");
/* harmony import */ var _Editor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("85ace4905f1053a8a8e2");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
 * EditNoteModal
 *
 */








 // import PropTypes from 'prop-types';
// import styled from 'styled-components';

var _ref3 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
  column: "lg",
  lg: 2
}, void 0, "Name");

var _ref4 = /*#__PURE__*/_jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
  column: "lg",
  lg: 2
}, void 0, "Content");

function EditNoteModal(_ref) {
  var onClose = _ref.onClose,
      editNote = _ref.editNote;
  var logger = _services_logService__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].getLogger('EditNoteModal');
  var initial = editNote || {
    name: '',
    content: ''
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(initial),
      _useState2 = _slicedToArray(_useState, 2),
      note = _useState2[0],
      setNote = _useState2[1];

  var handleSubmit = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!editNote) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return _services_noteService__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].update(editNote.id, note);

            case 3:
              _context.next = 7;
              break;

            case 5:
              _context.next = 7;
              return _services_noteService__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].create(note.name, note.body);

            case 7:
              onClose();

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit() {
      return _ref2.apply(this, arguments);
    };
  }();

  return _jsx("div", {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true
  }, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {}, void 0, editNote ? 'Edit note' : 'New note')), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {}, void 0, _ref3, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    value: note.name,
    onChange: function onChange(e) {
      return setNote(_objectSpread(_objectSpread({}, note), {}, {
        name: e.target.value
      }));
    }
  }))), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {}, void 0, _ref4, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"], {}, void 0, _jsx(_Editor__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    value: note.body,
    onChange: function onChange(v) {
      return setNote(_objectSpread(_objectSpread({}, note), {}, {
        body: v
      }));
    }
  })))))), _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {}, void 0, _jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    onClick: handleSubmit
  }, void 0, "Save changes")));
}

/* harmony default export */ __webpack_exports__["a"] = (EditNoteModal);

/***/ }),

/***/ "dd518c8fc8a9267d0f07":
/***/ (function(module, exports) {

var characterMap = {
	"À": "A",
	"Á": "A",
	"Â": "A",
	"Ã": "A",
	"Ä": "A",
	"Å": "A",
	"Ấ": "A",
	"Ắ": "A",
	"Ẳ": "A",
	"Ẵ": "A",
	"Ặ": "A",
	"Æ": "AE",
	"Ầ": "A",
	"Ằ": "A",
	"Ȃ": "A",
	"Ç": "C",
	"Ḉ": "C",
	"È": "E",
	"É": "E",
	"Ê": "E",
	"Ë": "E",
	"Ế": "E",
	"Ḗ": "E",
	"Ề": "E",
	"Ḕ": "E",
	"Ḝ": "E",
	"Ȇ": "E",
	"Ì": "I",
	"Í": "I",
	"Î": "I",
	"Ï": "I",
	"Ḯ": "I",
	"Ȋ": "I",
	"Ð": "D",
	"Ñ": "N",
	"Ò": "O",
	"Ó": "O",
	"Ô": "O",
	"Õ": "O",
	"Ö": "O",
	"Ø": "O",
	"Ố": "O",
	"Ṍ": "O",
	"Ṓ": "O",
	"Ȏ": "O",
	"Ù": "U",
	"Ú": "U",
	"Û": "U",
	"Ü": "U",
	"Ý": "Y",
	"à": "a",
	"á": "a",
	"â": "a",
	"ã": "a",
	"ä": "a",
	"å": "a",
	"ấ": "a",
	"ắ": "a",
	"ẳ": "a",
	"ẵ": "a",
	"ặ": "a",
	"æ": "ae",
	"ầ": "a",
	"ằ": "a",
	"ȃ": "a",
	"ç": "c",
	"ḉ": "c",
	"è": "e",
	"é": "e",
	"ê": "e",
	"ë": "e",
	"ế": "e",
	"ḗ": "e",
	"ề": "e",
	"ḕ": "e",
	"ḝ": "e",
	"ȇ": "e",
	"ì": "i",
	"í": "i",
	"î": "i",
	"ï": "i",
	"ḯ": "i",
	"ȋ": "i",
	"ð": "d",
	"ñ": "n",
	"ò": "o",
	"ó": "o",
	"ô": "o",
	"õ": "o",
	"ö": "o",
	"ø": "o",
	"ố": "o",
	"ṍ": "o",
	"ṓ": "o",
	"ȏ": "o",
	"ù": "u",
	"ú": "u",
	"û": "u",
	"ü": "u",
	"ý": "y",
	"ÿ": "y",
	"Ā": "A",
	"ā": "a",
	"Ă": "A",
	"ă": "a",
	"Ą": "A",
	"ą": "a",
	"Ć": "C",
	"ć": "c",
	"Ĉ": "C",
	"ĉ": "c",
	"Ċ": "C",
	"ċ": "c",
	"Č": "C",
	"č": "c",
	"C̆": "C",
	"c̆": "c",
	"Ď": "D",
	"ď": "d",
	"Đ": "D",
	"đ": "d",
	"Ē": "E",
	"ē": "e",
	"Ĕ": "E",
	"ĕ": "e",
	"Ė": "E",
	"ė": "e",
	"Ę": "E",
	"ę": "e",
	"Ě": "E",
	"ě": "e",
	"Ĝ": "G",
	"Ǵ": "G",
	"ĝ": "g",
	"ǵ": "g",
	"Ğ": "G",
	"ğ": "g",
	"Ġ": "G",
	"ġ": "g",
	"Ģ": "G",
	"ģ": "g",
	"Ĥ": "H",
	"ĥ": "h",
	"Ħ": "H",
	"ħ": "h",
	"Ḫ": "H",
	"ḫ": "h",
	"Ĩ": "I",
	"ĩ": "i",
	"Ī": "I",
	"ī": "i",
	"Ĭ": "I",
	"ĭ": "i",
	"Į": "I",
	"į": "i",
	"İ": "I",
	"ı": "i",
	"Ĳ": "IJ",
	"ĳ": "ij",
	"Ĵ": "J",
	"ĵ": "j",
	"Ķ": "K",
	"ķ": "k",
	"Ḱ": "K",
	"ḱ": "k",
	"K̆": "K",
	"k̆": "k",
	"Ĺ": "L",
	"ĺ": "l",
	"Ļ": "L",
	"ļ": "l",
	"Ľ": "L",
	"ľ": "l",
	"Ŀ": "L",
	"ŀ": "l",
	"Ł": "l",
	"ł": "l",
	"Ḿ": "M",
	"ḿ": "m",
	"M̆": "M",
	"m̆": "m",
	"Ń": "N",
	"ń": "n",
	"Ņ": "N",
	"ņ": "n",
	"Ň": "N",
	"ň": "n",
	"ŉ": "n",
	"N̆": "N",
	"n̆": "n",
	"Ō": "O",
	"ō": "o",
	"Ŏ": "O",
	"ŏ": "o",
	"Ő": "O",
	"ő": "o",
	"Œ": "OE",
	"œ": "oe",
	"P̆": "P",
	"p̆": "p",
	"Ŕ": "R",
	"ŕ": "r",
	"Ŗ": "R",
	"ŗ": "r",
	"Ř": "R",
	"ř": "r",
	"R̆": "R",
	"r̆": "r",
	"Ȓ": "R",
	"ȓ": "r",
	"Ś": "S",
	"ś": "s",
	"Ŝ": "S",
	"ŝ": "s",
	"Ş": "S",
	"Ș": "S",
	"ș": "s",
	"ş": "s",
	"Š": "S",
	"š": "s",
	"Ţ": "T",
	"ţ": "t",
	"ț": "t",
	"Ț": "T",
	"Ť": "T",
	"ť": "t",
	"Ŧ": "T",
	"ŧ": "t",
	"T̆": "T",
	"t̆": "t",
	"Ũ": "U",
	"ũ": "u",
	"Ū": "U",
	"ū": "u",
	"Ŭ": "U",
	"ŭ": "u",
	"Ů": "U",
	"ů": "u",
	"Ű": "U",
	"ű": "u",
	"Ų": "U",
	"ų": "u",
	"Ȗ": "U",
	"ȗ": "u",
	"V̆": "V",
	"v̆": "v",
	"Ŵ": "W",
	"ŵ": "w",
	"Ẃ": "W",
	"ẃ": "w",
	"X̆": "X",
	"x̆": "x",
	"Ŷ": "Y",
	"ŷ": "y",
	"Ÿ": "Y",
	"Y̆": "Y",
	"y̆": "y",
	"Ź": "Z",
	"ź": "z",
	"Ż": "Z",
	"ż": "z",
	"Ž": "Z",
	"ž": "z",
	"ſ": "s",
	"ƒ": "f",
	"Ơ": "O",
	"ơ": "o",
	"Ư": "U",
	"ư": "u",
	"Ǎ": "A",
	"ǎ": "a",
	"Ǐ": "I",
	"ǐ": "i",
	"Ǒ": "O",
	"ǒ": "o",
	"Ǔ": "U",
	"ǔ": "u",
	"Ǖ": "U",
	"ǖ": "u",
	"Ǘ": "U",
	"ǘ": "u",
	"Ǚ": "U",
	"ǚ": "u",
	"Ǜ": "U",
	"ǜ": "u",
	"Ứ": "U",
	"ứ": "u",
	"Ṹ": "U",
	"ṹ": "u",
	"Ǻ": "A",
	"ǻ": "a",
	"Ǽ": "AE",
	"ǽ": "ae",
	"Ǿ": "O",
	"ǿ": "o",
	"Þ": "TH",
	"þ": "th",
	"Ṕ": "P",
	"ṕ": "p",
	"Ṥ": "S",
	"ṥ": "s",
	"X́": "X",
	"x́": "x",
	"Ѓ": "Г",
	"ѓ": "г",
	"Ќ": "К",
	"ќ": "к",
	"A̋": "A",
	"a̋": "a",
	"E̋": "E",
	"e̋": "e",
	"I̋": "I",
	"i̋": "i",
	"Ǹ": "N",
	"ǹ": "n",
	"Ồ": "O",
	"ồ": "o",
	"Ṑ": "O",
	"ṑ": "o",
	"Ừ": "U",
	"ừ": "u",
	"Ẁ": "W",
	"ẁ": "w",
	"Ỳ": "Y",
	"ỳ": "y",
	"Ȁ": "A",
	"ȁ": "a",
	"Ȅ": "E",
	"ȅ": "e",
	"Ȉ": "I",
	"ȉ": "i",
	"Ȍ": "O",
	"ȍ": "o",
	"Ȑ": "R",
	"ȑ": "r",
	"Ȕ": "U",
	"ȕ": "u",
	"B̌": "B",
	"b̌": "b",
	"Č̣": "C",
	"č̣": "c",
	"Ê̌": "E",
	"ê̌": "e",
	"F̌": "F",
	"f̌": "f",
	"Ǧ": "G",
	"ǧ": "g",
	"Ȟ": "H",
	"ȟ": "h",
	"J̌": "J",
	"ǰ": "j",
	"Ǩ": "K",
	"ǩ": "k",
	"M̌": "M",
	"m̌": "m",
	"P̌": "P",
	"p̌": "p",
	"Q̌": "Q",
	"q̌": "q",
	"Ř̩": "R",
	"ř̩": "r",
	"Ṧ": "S",
	"ṧ": "s",
	"V̌": "V",
	"v̌": "v",
	"W̌": "W",
	"w̌": "w",
	"X̌": "X",
	"x̌": "x",
	"Y̌": "Y",
	"y̌": "y",
	"A̧": "A",
	"a̧": "a",
	"B̧": "B",
	"b̧": "b",
	"Ḑ": "D",
	"ḑ": "d",
	"Ȩ": "E",
	"ȩ": "e",
	"Ɛ̧": "E",
	"ɛ̧": "e",
	"Ḩ": "H",
	"ḩ": "h",
	"I̧": "I",
	"i̧": "i",
	"Ɨ̧": "I",
	"ɨ̧": "i",
	"M̧": "M",
	"m̧": "m",
	"O̧": "O",
	"o̧": "o",
	"Q̧": "Q",
	"q̧": "q",
	"U̧": "U",
	"u̧": "u",
	"X̧": "X",
	"x̧": "x",
	"Z̧": "Z",
	"z̧": "z",
};

var chars = Object.keys(characterMap).join('|');
var allAccents = new RegExp(chars, 'g');
var firstAccent = new RegExp(chars, '');

var removeAccents = function(string) {	
	return string.replace(allAccents, function(match) {
		return characterMap[match];
	});
};

var hasAccents = function(string) {
	return !!string.match(firstAccent);
};

module.exports = removeAccents;
module.exports.has = hasAccents;
module.exports.remove = removeAccents;


/***/ })

}]); 