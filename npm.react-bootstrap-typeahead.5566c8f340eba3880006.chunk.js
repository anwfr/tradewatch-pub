// [AIV_SHORT]  Build version: 1.0.0 - Thursday, March 16th, 2023, 9:01:21 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "02e985c90a0578b48cc6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getOptionProperty = _interopRequireDefault(__webpack_require__("f19ca3ec5bff59fcd109"));

var _nodash = __webpack_require__("9dbdce3fc23b010fa468");

function getIsOnlyResult(props) {
  var allowNew = props.allowNew,
      highlightOnlyResult = props.highlightOnlyResult,
      results = props.results;

  if (!highlightOnlyResult || allowNew) {
    return false;
  }

  return results.length === 1 && !(0, _getOptionProperty["default"])((0, _nodash.head)(results), 'disabled');
}

var _default = getIsOnlyResult;
exports["default"] = _default;

/***/ }),

/***/ "04ecb7f10b4887339e53":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var propTypes = {
  children: _propTypes["default"].string.isRequired,
  highlightClassName: _propTypes["default"].string,
  search: _propTypes["default"].string.isRequired
};
var defaultProps = {
  highlightClassName: 'rbt-highlight-text'
};

/**
 * Stripped-down version of https://github.com/helior/react-highlighter
 *
 * Results are already filtered by the time the component is used internally so
 * we can safely ignore case and diacritical marks for the purposes of matching.
 */
var Highlighter = /*#__PURE__*/function (_React$PureComponent) {
  (0, _inheritsLoose2["default"])(Highlighter, _React$PureComponent);

  function Highlighter() {
    return _React$PureComponent.apply(this, arguments) || this;
  }

  var _proto = Highlighter.prototype;

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        highlightClassName = _this$props.highlightClassName,
        search = _this$props.search;

    if (!search || !children) {
      return children;
    }

    var matchCount = 0;
    var remaining = children;
    var highlighterChildren = [];

    while (remaining) {
      var bounds = (0, _utils.getMatchBounds)(remaining, search); // No match anywhere in the remaining string, stop.

      if (!bounds) {
        highlighterChildren.push(remaining);
        break;
      } // Capture the string that leads up to a match.


      var nonMatch = remaining.slice(0, bounds.start);

      if (nonMatch) {
        highlighterChildren.push(nonMatch);
      } // Capture the matching string.


      var match = remaining.slice(bounds.start, bounds.end);
      highlighterChildren.push( /*#__PURE__*/_react["default"].createElement("mark", {
        className: highlightClassName,
        key: matchCount
      }, match));
      matchCount += 1; // And if there's anything left over, continue the loop.

      remaining = remaining.slice(bounds.end);
    }

    return highlighterChildren;
  };

  return Highlighter;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Highlighter, "propTypes", propTypes);
(0, _defineProperty2["default"])(Highlighter, "defaultProps", defaultProps);
var _default = Highlighter;
exports["default"] = _default;

/***/ }),

/***/ "04fd91eebdee15ff9033":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AsyncTypeahead", {
  enumerable: true,
  get: function get() {
    return _AsyncTypeahead2["default"];
  }
});
Object.defineProperty(exports, "ClearButton", {
  enumerable: true,
  get: function get() {
    return _ClearButton2["default"];
  }
});
Object.defineProperty(exports, "Highlighter", {
  enumerable: true,
  get: function get() {
    return _Highlighter2["default"];
  }
});
Object.defineProperty(exports, "Input", {
  enumerable: true,
  get: function get() {
    return _Input2["default"];
  }
});
Object.defineProperty(exports, "Loader", {
  enumerable: true,
  get: function get() {
    return _Loader2["default"];
  }
});
Object.defineProperty(exports, "Menu", {
  enumerable: true,
  get: function get() {
    return _Menu2["default"];
  }
});
Object.defineProperty(exports, "MenuItem", {
  enumerable: true,
  get: function get() {
    return _MenuItem2["default"];
  }
});
Object.defineProperty(exports, "Token", {
  enumerable: true,
  get: function get() {
    return _Token2["default"];
  }
});
Object.defineProperty(exports, "Typeahead", {
  enumerable: true,
  get: function get() {
    return _Typeahead2["default"];
  }
});
Object.defineProperty(exports, "TypeaheadInputMulti", {
  enumerable: true,
  get: function get() {
    return _TypeaheadInputMulti2["default"];
  }
});
Object.defineProperty(exports, "TypeaheadInputSingle", {
  enumerable: true,
  get: function get() {
    return _TypeaheadInputSingle2["default"];
  }
});
Object.defineProperty(exports, "TypeaheadMenu", {
  enumerable: true,
  get: function get() {
    return _TypeaheadMenu2["default"];
  }
});
Object.defineProperty(exports, "asyncContainer", {
  enumerable: true,
  get: function get() {
    return _asyncContainer2["default"];
  }
});
Object.defineProperty(exports, "hintContainer", {
  enumerable: true,
  get: function get() {
    return _hintContainer2["default"];
  }
});
Object.defineProperty(exports, "menuItemContainer", {
  enumerable: true,
  get: function get() {
    return _menuItemContainer2["default"];
  }
});
Object.defineProperty(exports, "tokenContainer", {
  enumerable: true,
  get: function get() {
    return _tokenContainer2["default"];
  }
});

var _AsyncTypeahead2 = _interopRequireDefault(__webpack_require__("c6507d6ee375de1c5105"));

var _ClearButton2 = _interopRequireDefault(__webpack_require__("b911809d552ef17b4f11"));

var _Highlighter2 = _interopRequireDefault(__webpack_require__("04ecb7f10b4887339e53"));

var _Input2 = _interopRequireDefault(__webpack_require__("46b8af817c6a99a5dcdd"));

var _Loader2 = _interopRequireDefault(__webpack_require__("5b410fe6e22d0147c23a"));

var _Menu2 = _interopRequireDefault(__webpack_require__("0d84ca9efe86b38a58d2"));

var _MenuItem2 = _interopRequireDefault(__webpack_require__("f2637435957acdcec91c"));

var _Token2 = _interopRequireDefault(__webpack_require__("c03afc1c02ac5b330b4b"));

var _Typeahead2 = _interopRequireDefault(__webpack_require__("dbc33af49843258b9329"));

var _TypeaheadInputMulti2 = _interopRequireDefault(__webpack_require__("9e8ac2d40efa92a02161"));

var _TypeaheadInputSingle2 = _interopRequireDefault(__webpack_require__("2a7462490a3781853e0d"));

var _TypeaheadMenu2 = _interopRequireDefault(__webpack_require__("6797fc9ba11866df4c66"));

var _asyncContainer2 = _interopRequireDefault(__webpack_require__("586d47f227396321eeae"));

var _hintContainer2 = _interopRequireDefault(__webpack_require__("3bffc1b4310b987a316b"));

var _menuItemContainer2 = _interopRequireDefault(__webpack_require__("e56eec0fa4870f94cfc4"));

var _tokenContainer2 = _interopRequireDefault(__webpack_require__("db4e80dd30a0317531e8"));

/***/ }),

/***/ "0d84ca9efe86b38a58d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _MenuItem = __webpack_require__("f2637435957acdcec91c");

var _propTypes2 = __webpack_require__("bbef3935a5d66d5be430");

var MenuDivider = function MenuDivider(props) {
  return /*#__PURE__*/_react["default"].createElement("li", {
    className: "divider dropdown-divider",
    role: "separator"
  });
};

var MenuHeader = function MenuHeader(props) {
  return /*#__PURE__*/_react["default"].createElement("li", (0, _extends2["default"])({}, props, {
    className: "dropdown-header"
  }));
};

var propTypes = {
  'aria-label': _propTypes["default"].string,

  /**
   * Message to display in the menu if there are no valid results.
   */
  emptyLabel: _propTypes["default"].node,

  /**
   * Needed for accessibility.
   */
  id: (0, _propTypes2.checkPropType)(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]), _propTypes2.isRequiredForA11y),

  /**
   * Maximum height of the dropdown menu.
   */
  maxHeight: _propTypes["default"].string
};
var defaultProps = {
  'aria-label': 'menu-options',
  emptyLabel: 'No matches found.',
  maxHeight: '300px'
};

/**
 * Menu component that handles empty state when passed a set of results.
 */
var Menu = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Menu, _React$Component);

  function Menu() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Menu.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props = this.props,
        inputHeight = _this$props.inputHeight,
        scheduleUpdate = _this$props.scheduleUpdate; // Update the menu position if the height of the input changes.

    if (inputHeight !== prevProps.inputHeight) {
      scheduleUpdate();
    }
  };

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        emptyLabel = _this$props2.emptyLabel,
        id = _this$props2.id,
        innerRef = _this$props2.innerRef,
        maxHeight = _this$props2.maxHeight,
        style = _this$props2.style,
        text = _this$props2.text;
    var contents = _react.Children.count(children) === 0 ? /*#__PURE__*/_react["default"].createElement(_MenuItem.BaseMenuItem, {
      disabled: true,
      role: "option"
    }, emptyLabel) : children;
    return /*#__PURE__*/_react["default"].createElement("ul", {
      "aria-label": this.props['aria-label'],
      className: (0, _classnames["default"])('rbt-menu', 'dropdown-menu', 'show', className),
      id: id,
      key: // Force a re-render if the text changes to ensure that menu
      // positioning updates correctly.
      text,
      ref: innerRef,
      role: "listbox",
      style: (0, _extends2["default"])({}, style, {
        display: 'block',
        maxHeight: maxHeight,
        overflow: 'auto'
      })
    }, contents);
  };

  return Menu;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Menu, "propTypes", propTypes);
(0, _defineProperty2["default"])(Menu, "defaultProps", defaultProps);
(0, _defineProperty2["default"])(Menu, "Divider", MenuDivider);
(0, _defineProperty2["default"])(Menu, "Header", MenuHeader);
var _default = Menu;
exports["default"] = _default;

/***/ }),

/***/ "226ab2d11bce5ed2897b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.escapeStringRegexp = escapeStringRegexp;
exports["default"] = getMatchBounds;

var _invariant = _interopRequireDefault(__webpack_require__("6a4f9c383785f9168266"));

var _stripDiacritics = _interopRequireDefault(__webpack_require__("da4516145deb7f2778dc"));

var CASE_INSENSITIVE = 'i';
var COMBINING_MARKS = /[\u0300-\u036F]/;

// Export for testing.
function escapeStringRegexp(str) {
  !(typeof str === 'string') ?  false ? undefined : invariant(false) : void 0; // Escape characters with special meaning either inside or outside character
  // sets. Use a simple backslash escape when it’s always valid, and a \unnnn
  // escape when the simpler form would be disallowed by Unicode patterns’
  // stricter grammar.

  return str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d');
}

function getMatchBounds(subject, str) {
  var search = new RegExp(escapeStringRegexp((0, _stripDiacritics["default"])(str)), CASE_INSENSITIVE);
  var matches = search.exec((0, _stripDiacritics["default"])(subject));

  if (!matches) {
    return null;
  }

  var start = matches.index;
  var matchLength = matches[0].length; // Account for combining marks, which changes the indices.

  if (COMBINING_MARKS.test(subject)) {
    // Starting at the beginning of the subject string, check for the number of
    // combining marks and increment the start index whenever one is found.
    for (var ii = 0; ii <= start; ii++) {
      if (COMBINING_MARKS.test(subject[ii])) {
        start += 1;
      }
    } // Similarly, increment the length of the match string if it contains a
    // combining mark.


    for (var _ii = start; _ii <= start + matchLength; _ii++) {
      if (COMBINING_MARKS.test(subject[_ii])) {
        matchLength += 1;
      }
    }
  }

  return {
    end: start + matchLength,
    start: start
  };
}

/***/ }),

/***/ "268de71d470774ddac1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _getMenuItemId = _interopRequireDefault(__webpack_require__("77962c0c400f4179885a"));

var getInputProps = function getInputProps(_ref) {
  var activeIndex = _ref.activeIndex,
      id = _ref.id,
      isFocused = _ref.isFocused,
      isMenuShown = _ref.isMenuShown,
      multiple = _ref.multiple,
      onFocus = _ref.onFocus,
      placeholder = _ref.placeholder,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["activeIndex", "id", "isFocused", "isMenuShown", "multiple", "onFocus", "placeholder"]);
  return function (_temp) {
    var _cx;

    var _ref2 = _temp === void 0 ? {} : _temp,
        className = _ref2.className,
        inputProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, ["className"]);

    var props = (0, _extends2["default"])({
      /* eslint-disable sort-keys */
      // These props can be overridden by values in `inputProps`.
      autoComplete: 'off',
      placeholder: placeholder,
      type: 'text'
    }, inputProps, {}, rest, {
      'aria-activedescendant': activeIndex >= 0 ? (0, _getMenuItemId["default"])(id, activeIndex) : undefined,
      'aria-autocomplete': 'both',
      'aria-expanded': isMenuShown,
      'aria-haspopup': 'listbox',
      'aria-owns': isMenuShown ? id : undefined,
      className: (0, _classnames["default"])((_cx = {}, _cx[className || ''] = !multiple, _cx.focus = isFocused, _cx)),
      // Re-open the menu, eg: if it's closed via ESC.
      onClick: onFocus,
      onFocus: onFocus,
      // Comboboxes are single-select by definition:
      // https://www.w3.org/TR/wai-aria-practices-1.1/#combobox
      role: 'combobox'
      /* eslint-enable sort-keys */

    });

    if (!multiple) {
      return props;
    }

    return (0, _extends2["default"])({}, props, {
      'aria-autocomplete': 'list',
      'aria-expanded': undefined,
      inputClassName: className,
      role: undefined
    });
  };
};

var _default = getInputProps;
exports["default"] = _default;

/***/ }),

/***/ "27b8ec3d0b900700e999":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getStringLabelKey;

var _constants = __webpack_require__("9c2d75f33016547e31e2");

function getStringLabelKey(labelKey) {
  return typeof labelKey === 'string' ? labelKey : _constants.DEFAULT_LABELKEY;
}

/***/ }),

/***/ "27ee3be4c8429979af3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = defaultFilterBy;

var _fastDeepEqual = _interopRequireDefault(__webpack_require__("4c61377aa1c7233aedf1"));

var _getOptionProperty = _interopRequireDefault(__webpack_require__("f19ca3ec5bff59fcd109"));

var _nodash = __webpack_require__("9dbdce3fc23b010fa468");

var _stripDiacritics = _interopRequireDefault(__webpack_require__("da4516145deb7f2778dc"));

var _warn = _interopRequireDefault(__webpack_require__("f139dc630071f0242e1b"));

function isMatch(input, string, props) {
  var searchStr = input;
  var str = string;

  if (!props.caseSensitive) {
    searchStr = searchStr.toLowerCase();
    str = str.toLowerCase();
  }

  if (props.ignoreDiacritics) {
    searchStr = (0, _stripDiacritics["default"])(searchStr);
    str = (0, _stripDiacritics["default"])(str);
  }

  return str.indexOf(searchStr) !== -1;
}
/**
 * Default algorithm for filtering results.
 */


function defaultFilterBy(option, props) {
  var filterBy = props.filterBy,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text; // Don't show selected options in the menu for the multi-select case.

  if (multiple && selected.some(function (o) {
    return (0, _fastDeepEqual["default"])(o, option);
  })) {
    return false;
  }

  if ((0, _nodash.isFunction)(labelKey) && isMatch(text, labelKey(option), props)) {
    return true;
  }

  var fields = filterBy.slice();

  if ((0, _nodash.isString)(labelKey)) {
    // Add the `labelKey` field to the list of fields if it isn't already there.
    if (fields.indexOf(labelKey) === -1) {
      fields.unshift(labelKey);
    }
  }

  if ((0, _nodash.isString)(option)) {
    (0, _warn["default"])(fields.length <= 1, 'You cannot filter by properties when `option` is a string.');
    return isMatch(text, option, props);
  }

  return fields.some(function (field) {
    var value = (0, _getOptionProperty["default"])(option, field);

    if (!(0, _nodash.isString)(value)) {
      (0, _warn["default"])(false, 'Fields passed to `filterBy` should have string values. Value will ' + 'be converted to a string; results may be unexpected.');
      value = String(value);
    }

    return isMatch(text, value, props);
  });
}

/***/ }),

/***/ "2a7462490a3781853e0d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Input = _interopRequireDefault(__webpack_require__("46b8af817c6a99a5dcdd"));

var _hintContainer = _interopRequireDefault(__webpack_require__("3bffc1b4310b987a316b"));

var _withClassNames = _interopRequireDefault(__webpack_require__("54039156ea48b2e7ede6"));

var HintedInput = (0, _hintContainer["default"])(_Input["default"]);

var _default = (0, _withClassNames["default"])(function (_ref) {
  var inputRef = _ref.inputRef,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["inputRef"]);
  return /*#__PURE__*/_react["default"].createElement(HintedInput, (0, _extends2["default"])({}, props, {
    ref: inputRef
  }));
});

exports["default"] = _default;

/***/ }),

/***/ "3bffc1b4310b987a316b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Context = __webpack_require__("75f894429043191ab885");

var _utils = __webpack_require__("52099a70d0b1a298ae96");

// IE doesn't seem to get the composite computed value (eg: 'padding',
// 'borderStyle', etc.), so generate these from the individual values.
function interpolateStyle(styles, attr, subattr) {
  if (subattr === void 0) {
    subattr = '';
  }

  // Title-case the sub-attribute.
  if (subattr) {
    /* eslint-disable-next-line no-param-reassign */
    subattr = subattr.replace(subattr[0], subattr[0].toUpperCase());
  }

  return ['Top', 'Right', 'Bottom', 'Left'].map(function (dir) {
    return styles[attr + dir + subattr];
  }).join(' ');
}

function copyStyles(inputNode, hintNode) {
  if (!inputNode || !hintNode) {
    return;
  }

  var inputStyle = window.getComputedStyle(inputNode);
  /* eslint-disable no-param-reassign */

  hintNode.style.borderStyle = interpolateStyle(inputStyle, 'border', 'style');
  hintNode.style.borderWidth = interpolateStyle(inputStyle, 'border', 'width');
  hintNode.style.fontSize = inputStyle.fontSize;
  hintNode.style.height = inputStyle.height;
  hintNode.style.lineHeight = inputStyle.lineHeight;
  hintNode.style.margin = interpolateStyle(inputStyle, 'margin');
  hintNode.style.padding = interpolateStyle(inputStyle, 'padding');
  /* eslint-enable no-param-reassign */
}

function hintContainer(Input) {
  var HintedInput = /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2["default"])(HintedInput, _React$Component);

    function HintedInput() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hintRef", _react["default"].createRef());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleKeyDown", function (e) {
        var _this$props = _this.props,
            initialItem = _this$props.initialItem,
            onAdd = _this$props.onAdd,
            onKeyDown = _this$props.onKeyDown;

        if ((0, _utils.shouldSelectHint)(e, _this.props)) {
          e.preventDefault(); // Prevent input from blurring on TAB.

          onAdd(initialItem);
        }

        onKeyDown(e);
      });
      return _this;
    }

    var _proto = HintedInput.prototype;

    _proto.componentDidMount = function componentDidMount() {
      copyStyles(this.props.inputNode, this.hintRef.current);
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      copyStyles(this.props.inputNode, this.hintRef.current);
    };

    _proto.render = function render() {
      var _this$props2 = this.props,
          forwardedRef = _this$props2.forwardedRef,
          hintText = _this$props2.hintText,
          initialItem = _this$props2.initialItem,
          inputNode = _this$props2.inputNode,
          onAdd = _this$props2.onAdd,
          selectHintOnEnter = _this$props2.selectHintOnEnter,
          props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["forwardedRef", "hintText", "initialItem", "inputNode", "onAdd", "selectHintOnEnter"]);
      return /*#__PURE__*/_react["default"].createElement("div", {
        style: {
          display: 'flex',
          flex: 1,
          height: '100%',
          position: 'relative'
        }
      }, /*#__PURE__*/_react["default"].createElement(Input, (0, _extends2["default"])({}, props, {
        onKeyDown: this._handleKeyDown,
        ref: forwardedRef
      })), /*#__PURE__*/_react["default"].createElement("input", {
        "aria-hidden": true,
        className: "rbt-input-hint",
        ref: this.hintRef,
        readOnly: true,
        style: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          boxShadow: 'none',
          color: 'rgba(0, 0, 0, 0.35)',
          left: 0,
          pointerEvents: 'none',
          position: 'absolute',
          top: 0,
          width: '100%'
        },
        tabIndex: -1,
        value: hintText
      }));
    };

    return HintedInput;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(HintedInput, "displayName", "hintContainer(" + (0, _utils.getDisplayName)(Input) + ")");
  var HintedInputWithContext = (0, _Context.withContext)(HintedInput, ['hintText', 'initialItem', 'inputNode', 'onAdd', 'selectHintOnEnter']);
  return _react["default"].forwardRef(function (props, ref) {
    return /*#__PURE__*/_react["default"].createElement(HintedInputWithContext, (0, _extends2["default"])({}, props, {
      forwardedRef: ref
    }));
  });
}

var _default = hintContainer;
exports["default"] = _default;

/***/ }),

/***/ "42d15e1430cb7937377c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isSizeLarge = isSizeLarge;
exports.isSizeSmall = isSizeSmall;

function isSizeLarge(size) {
  return size === 'large' || size === 'lg';
}

function isSizeSmall(size) {
  return size === 'small' || size === 'sm';
}

/***/ }),

/***/ "46b8af817c6a99a5dcdd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var Input = _react["default"].forwardRef(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement("input", (0, _extends2["default"])({}, props, {
    className: (0, _classnames["default"])('rbt-input-main', props.className),
    ref: ref
  }));
});

var _default = Input;
exports["default"] = _default;

/***/ }),

/***/ "52099a70d0b1a298ae96":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  addCustomOption: true,
  defaultFilterBy: true,
  getDisplayName: true,
  getHintText: true,
  getInputProps: true,
  getInputText: true,
  getIsOnlyResult: true,
  getMatchBounds: true,
  escapeStringRegexp: true,
  getMenuItemId: true,
  getOptionLabel: true,
  getOptionProperty: true,
  getStringLabelKey: true,
  getTruncatedOptions: true,
  getUpdatedActiveIndex: true,
  isSelectable: true,
  isShown: true,
  preventInputBlur: true,
  shouldSelectHint: true,
  stripDiacritics: true,
  validateSelectedPropChange: true,
  warn: true
};
Object.defineProperty(exports, "addCustomOption", {
  enumerable: true,
  get: function get() {
    return _addCustomOption2["default"];
  }
});
Object.defineProperty(exports, "defaultFilterBy", {
  enumerable: true,
  get: function get() {
    return _defaultFilterBy2["default"];
  }
});
Object.defineProperty(exports, "getDisplayName", {
  enumerable: true,
  get: function get() {
    return _getDisplayName2["default"];
  }
});
Object.defineProperty(exports, "getHintText", {
  enumerable: true,
  get: function get() {
    return _getHintText2["default"];
  }
});
Object.defineProperty(exports, "getInputProps", {
  enumerable: true,
  get: function get() {
    return _getInputProps2["default"];
  }
});
Object.defineProperty(exports, "getInputText", {
  enumerable: true,
  get: function get() {
    return _getInputText2["default"];
  }
});
Object.defineProperty(exports, "getIsOnlyResult", {
  enumerable: true,
  get: function get() {
    return _getIsOnlyResult2["default"];
  }
});
Object.defineProperty(exports, "getMatchBounds", {
  enumerable: true,
  get: function get() {
    return _getMatchBounds2["default"];
  }
});
Object.defineProperty(exports, "escapeStringRegexp", {
  enumerable: true,
  get: function get() {
    return _getMatchBounds2.escapeStringRegexp;
  }
});
Object.defineProperty(exports, "getMenuItemId", {
  enumerable: true,
  get: function get() {
    return _getMenuItemId2["default"];
  }
});
Object.defineProperty(exports, "getOptionLabel", {
  enumerable: true,
  get: function get() {
    return _getOptionLabel2["default"];
  }
});
Object.defineProperty(exports, "getOptionProperty", {
  enumerable: true,
  get: function get() {
    return _getOptionProperty2["default"];
  }
});
Object.defineProperty(exports, "getStringLabelKey", {
  enumerable: true,
  get: function get() {
    return _getStringLabelKey2["default"];
  }
});
Object.defineProperty(exports, "getTruncatedOptions", {
  enumerable: true,
  get: function get() {
    return _getTruncatedOptions2["default"];
  }
});
Object.defineProperty(exports, "getUpdatedActiveIndex", {
  enumerable: true,
  get: function get() {
    return _getUpdatedActiveIndex2["default"];
  }
});
Object.defineProperty(exports, "isSelectable", {
  enumerable: true,
  get: function get() {
    return _isSelectable2["default"];
  }
});
Object.defineProperty(exports, "isShown", {
  enumerable: true,
  get: function get() {
    return _isShown2["default"];
  }
});
Object.defineProperty(exports, "preventInputBlur", {
  enumerable: true,
  get: function get() {
    return _preventInputBlur2["default"];
  }
});
Object.defineProperty(exports, "shouldSelectHint", {
  enumerable: true,
  get: function get() {
    return _shouldSelectHint2["default"];
  }
});
Object.defineProperty(exports, "stripDiacritics", {
  enumerable: true,
  get: function get() {
    return _stripDiacritics2["default"];
  }
});
Object.defineProperty(exports, "validateSelectedPropChange", {
  enumerable: true,
  get: function get() {
    return _validateSelectedPropChange2["default"];
  }
});
Object.defineProperty(exports, "warn", {
  enumerable: true,
  get: function get() {
    return _warn2["default"];
  }
});

var _addCustomOption2 = _interopRequireDefault(__webpack_require__("9868283e4f2fa9ebe81c"));

var _defaultFilterBy2 = _interopRequireDefault(__webpack_require__("27ee3be4c8429979af3c"));

var _getDisplayName2 = _interopRequireDefault(__webpack_require__("64632ba06f96a8c46429"));

var _getHintText2 = _interopRequireDefault(__webpack_require__("c34a16323dac1fa9f45a"));

var _getInputProps2 = _interopRequireDefault(__webpack_require__("268de71d470774ddac1b"));

var _getInputText2 = _interopRequireDefault(__webpack_require__("b90fe70071e0be4b5d29"));

var _getIsOnlyResult2 = _interopRequireDefault(__webpack_require__("02e985c90a0578b48cc6"));

var _getMatchBounds2 = _interopRequireWildcard(__webpack_require__("226ab2d11bce5ed2897b"));

var _getMenuItemId2 = _interopRequireDefault(__webpack_require__("77962c0c400f4179885a"));

var _getOptionLabel2 = _interopRequireDefault(__webpack_require__("a61bd54a88f468b3eb5b"));

var _getOptionProperty2 = _interopRequireDefault(__webpack_require__("f19ca3ec5bff59fcd109"));

var _getStringLabelKey2 = _interopRequireDefault(__webpack_require__("27b8ec3d0b900700e999"));

var _getTruncatedOptions2 = _interopRequireDefault(__webpack_require__("c69f27b8eabed90cfdd3"));

var _getUpdatedActiveIndex2 = _interopRequireDefault(__webpack_require__("b40f59226bb18652b5c3"));

var _isSelectable2 = _interopRequireDefault(__webpack_require__("907db5e1ea8d342e81aa"));

var _isShown2 = _interopRequireDefault(__webpack_require__("cde6e4e5258dd6320d52"));

var _nodash = __webpack_require__("9dbdce3fc23b010fa468");

Object.keys(_nodash).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _nodash[key];
    }
  });
});

var _preventInputBlur2 = _interopRequireDefault(__webpack_require__("bd47273ea76379d20133"));

var _shouldSelectHint2 = _interopRequireDefault(__webpack_require__("9bc38d5d5e47a118ee84"));

var _size = __webpack_require__("42d15e1430cb7937377c");

Object.keys(_size).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _size[key];
    }
  });
});

var _stripDiacritics2 = _interopRequireDefault(__webpack_require__("da4516145deb7f2778dc"));

var _validateSelectedPropChange2 = _interopRequireDefault(__webpack_require__("9ea837b510fdc421b1b2"));

var _warn2 = _interopRequireDefault(__webpack_require__("f139dc630071f0242e1b"));

/***/ }),

/***/ "54039156ea48b2e7ede6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

function withClassNames(Component) {
  // Use a class instead of function component to support refs.

  /* eslint-disable-next-line react/prefer-stateless-function */
  var WrappedComponent = /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2["default"])(WrappedComponent, _React$Component);

    function WrappedComponent() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = WrappedComponent.prototype;

    _proto.render = function render() {
      var _this$props = this.props,
          className = _this$props.className,
          isInvalid = _this$props.isInvalid,
          isValid = _this$props.isValid,
          size = _this$props.size,
          props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["className", "isInvalid", "isValid", "size"]);
      return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, {
        className: (0, _classnames["default"])('form-control', 'rbt-input', {
          'input-lg form-control-lg': (0, _utils.isSizeLarge)(size),
          'input-sm form-control-sm': (0, _utils.isSizeSmall)(size),
          'is-invalid': isInvalid,
          'is-valid': isValid
        }, className)
      }));
    };

    return WrappedComponent;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(WrappedComponent, "displayName", "withClassNames(" + (0, _utils.getDisplayName)(Component) + ")");
  return WrappedComponent;
}

var _default = withClassNames;
exports["default"] = _default;

/***/ }),

/***/ "586d47f227396321eeae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _lodash = _interopRequireDefault(__webpack_require__("f9afcabf039666982141"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Typeahead = _interopRequireDefault(__webpack_require__("ecd477baddc27ea5b1b0"));

var _propTypes2 = __webpack_require__("bbef3935a5d66d5be430");

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var propTypes = {
  /**
   * Delay, in milliseconds, before performing search.
   */
  delay: _propTypes["default"].number,

  /**
   * Whether or not a request is currently pending. Necessary for the
   * container to know when new results are available.
   */
  isLoading: _propTypes["default"].bool.isRequired,

  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: _propTypes["default"].number,

  /**
   * Callback to perform when the search is executed.
   */
  onSearch: _propTypes["default"].func.isRequired,

  /**
   * Options to be passed to the typeahead. Will typically be the query
   * results, but can also be initial default options.
   */
  options: _propTypes["default"].arrayOf(_propTypes2.optionType),

  /**
   * Message displayed in the menu when there is no user input.
   */
  promptText: _propTypes["default"].node,

  /**
   * Message displayed in the menu while the request is pending.
   */
  searchText: _propTypes["default"].node,

  /**
   * Whether or not the component should cache query results.
   */
  useCache: _propTypes["default"].bool
};
var defaultProps = {
  delay: 200,
  minLength: 2,
  options: [],
  promptText: 'Type to search...',
  searchText: 'Searching...',
  useCache: true
};

/**
 * HoC that encapsulates common behavior and functionality for doing
 * asynchronous searches, including:
 *
 *  - Debouncing user input
 *  - Optional query caching
 *  - Search prompt and empty results behaviors
 */
var asyncContainer = function asyncContainer(TypeaheadComponent) {
  var AsyncTypeahead = /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2["default"])(AsyncTypeahead, _React$Component);

    function AsyncTypeahead() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_cache", {});
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSearchDebounced", void 0);
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_query", _this.props.defaultInputValue || '');
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_getEmptyLabel", function () {
        var _this$props = _this.props,
            emptyLabel = _this$props.emptyLabel,
            isLoading = _this$props.isLoading,
            promptText = _this$props.promptText,
            searchText = _this$props.searchText;

        if (!_this._query.length) {
          return promptText;
        }

        if (isLoading) {
          return searchText;
        }

        return emptyLabel;
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleInputChange", function (query, e) {
        _this.props.onInputChange && _this.props.onInputChange(query, e);

        _this._handleSearchDebounced(query);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSearch", function (query) {
        _this._query = query;
        var _this$props2 = _this.props,
            minLength = _this$props2.minLength,
            onSearch = _this$props2.onSearch,
            useCache = _this$props2.useCache;

        if (!query || minLength && query.length < minLength) {
          return;
        } // Use cached results, if applicable.


        if (useCache && _this._cache[query]) {
          // Re-render the component with the cached results.
          _this.forceUpdate();

          return;
        } // Perform the search.


        onSearch(query);
      });
      return _this;
    }

    var _proto = AsyncTypeahead.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this._handleSearchDebounced = (0, _lodash["default"])(this._handleSearch, this.props.delay);
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
      var _this$props3 = this.props,
          isLoading = _this$props3.isLoading,
          options = _this$props3.options,
          useCache = _this$props3.useCache; // Ensure that we've gone from a loading to a completed state. Otherwise
      // an empty response could get cached if the component updates during the
      // request (eg: if the parent re-renders for some reason).

      if (!isLoading && prevProps.isLoading && useCache) {
        this._cache[this._query] = options;
      }
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this._cache = {};
      this._query = '';
      this._handleSearchDebounced && this._handleSearchDebounced.cancel();
    };

    _proto.render = function render() {
      var _this$props4 = this.props,
          allowNew = _this$props4.allowNew,
          instanceRef = _this$props4.instanceRef,
          isLoading = _this$props4.isLoading,
          options = _this$props4.options,
          useCache = _this$props4.useCache,
          props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props4, ["allowNew", "instanceRef", "isLoading", "options", "useCache"]);
      var cachedQuery = this._cache[this._query];
      return /*#__PURE__*/_react["default"].createElement(TypeaheadComponent, (0, _extends2["default"])({}, props, {
        allowNew: // Disable custom selections during a search unless
        // `allowNew` is a function.
        (0, _utils.isFunction)(allowNew) ? allowNew : allowNew && !isLoading,
        emptyLabel: this._getEmptyLabel(),
        isLoading: isLoading,
        onInputChange: this._handleInputChange,
        options: useCache && cachedQuery ? cachedQuery : options,
        ref: instanceRef
      }));
    };

    return AsyncTypeahead;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(AsyncTypeahead, "displayName", "asyncContainer(" + (0, _utils.getDisplayName)(_Typeahead["default"]) + ")");
  (0, _defineProperty2["default"])(AsyncTypeahead, "propTypes", propTypes);
  (0, _defineProperty2["default"])(AsyncTypeahead, "defaultProps", defaultProps);
  return (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react["default"].createElement(AsyncTypeahead, (0, _extends2["default"])({}, props, {
      instanceRef: ref
    }));
  });
};

var _default = asyncContainer;
exports["default"] = _default;

/***/ }),

/***/ "5b410fe6e22d0147c23a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _propTypes = __webpack_require__("bbef3935a5d66d5be430");

var Loader = function Loader(_ref) {
  var size = _ref.size;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: (0, _classnames["default"])('rbt-loader', {
      'rbt-loader-lg': (0, _utils.isSizeLarge)(size),
      'rbt-loader-sm': (0, _utils.isSizeSmall)(size)
    })
  });
};

Loader.propTypes = {
  size: _propTypes.sizeType
};
var _default = Loader;
exports["default"] = _default;

/***/ }),

/***/ "64632ba06f96a8c46429":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getDisplayName;

function getDisplayName(Component) {
  return Component.displayName || Component.name || 'Component';
}

/***/ }),

/***/ "6797fc9ba11866df4c66":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var React = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _Highlighter = _interopRequireDefault(__webpack_require__("04ecb7f10b4887339e53"));

var _Menu = _interopRequireDefault(__webpack_require__("0d84ca9efe86b38a58d2"));

var _MenuItem = _interopRequireDefault(__webpack_require__("f2637435957acdcec91c"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var propTypes = {
  /**
   * Provides the ability to specify a prefix before the user-entered text to
   * indicate that the selection will be new. No-op unless `allowNew={true}`.
   */
  newSelectionPrefix: _propTypes["default"].node,

  /**
   * Prompt displayed when large data sets are paginated.
   */
  paginationText: _propTypes["default"].node,

  /**
   * Provides a hook for customized rendering of menu item contents.
   */
  renderMenuItemChildren: _propTypes["default"].func
};
var defaultProps = {
  newSelectionPrefix: 'New selection: ',
  paginationText: 'Display additional results...',
  renderMenuItemChildren: function renderMenuItemChildren(option, props, idx) {
    return /*#__PURE__*/React.createElement(_Highlighter["default"], {
      search: props.text
    }, (0, _utils.getOptionLabel)(option, props.labelKey));
  }
};

var TypeaheadMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(TypeaheadMenu, _React$Component);

  function TypeaheadMenu() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderMenuItem", function (option, position) {
      var _this$props = _this.props,
          labelKey = _this$props.labelKey,
          newSelectionPrefix = _this$props.newSelectionPrefix,
          paginationText = _this$props.paginationText,
          renderMenuItemChildren = _this$props.renderMenuItemChildren,
          text = _this$props.text;
      var label = (0, _utils.getOptionLabel)(option, labelKey);
      var menuItemProps = {
        disabled: (0, _utils.getOptionProperty)(option, 'disabled'),
        label: label,
        option: option,
        position: position
      };

      if (option.customOption) {
        return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
          className: "rbt-menu-custom-option",
          key: position,
          label: newSelectionPrefix + label
        }), newSelectionPrefix, /*#__PURE__*/React.createElement(_Highlighter["default"], {
          search: text
        }, label));
      }

      if (option.paginationOption) {
        return /*#__PURE__*/React.createElement(React.Fragment, {
          key: "pagination-item"
        }, /*#__PURE__*/React.createElement(_Menu["default"].Divider, null), /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
          className: "rbt-menu-pagination-option",
          label: paginationText
        }), paginationText));
      }

      return /*#__PURE__*/React.createElement(_MenuItem["default"], (0, _extends2["default"])({}, menuItemProps, {
        key: position
      }), renderMenuItemChildren(option, _this.props, position));
    });
    return _this;
  }

  var _proto = TypeaheadMenu.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        id = _this$props2.id,
        labelKey = _this$props2.labelKey,
        newSelectionPrefix = _this$props2.newSelectionPrefix,
        options = _this$props2.options,
        renderMenuItemChildren = _this$props2.renderMenuItemChildren,
        text = _this$props2.text,
        menuProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["id", "labelKey", "newSelectionPrefix", "options", "renderMenuItemChildren", "text"]);
    return (
      /*#__PURE__*/
      // Explictly pass some props so Flow doesn't complain...
      React.createElement(_Menu["default"], (0, _extends2["default"])({}, menuProps, {
        id: id,
        text: text
      }), options.map(this._renderMenuItem))
    );
  };

  return TypeaheadMenu;
}(React.Component);

(0, _defineProperty2["default"])(TypeaheadMenu, "propTypes", propTypes);
(0, _defineProperty2["default"])(TypeaheadMenu, "defaultProps", defaultProps);
var _default = TypeaheadMenu;
exports["default"] = _default;

/***/ }),

/***/ "75f894429043191ab885":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withContext = exports.TypeaheadContext = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var TypeaheadContext = (0, _react.createContext)({});
exports.TypeaheadContext = TypeaheadContext;

var withContext = function withContext(Component, values) {
  // Note: Use a class instead of function component to support refs.

  /* eslint-disable-next-line react/prefer-stateless-function */
  return /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2["default"])(_class, _React$Component);

    function _class() {
      return _React$Component.apply(this, arguments) || this;
    }

    var _proto = _class.prototype;

    _proto.render = function render() {
      var _this = this;

      return /*#__PURE__*/_react["default"].createElement(TypeaheadContext.Consumer, null, function (context) {
        return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, _this.props, (0, _utils.pick)(context, values)));
      });
    };

    return _class;
  }(_react["default"].Component);
};

exports.withContext = withContext;

/***/ }),

/***/ "77962c0c400f4179885a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getMenuItemId;

function getMenuItemId(id, position) {
  return (id || '') + "-item-" + position;
}

/***/ }),

/***/ "907db5e1ea8d342e81aa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSelectable;

/**
 * Check if an input type is selectable, based on WHATWG spec.
 *
 * See:
 *  - https://stackoverflow.com/questions/21177489/selectionstart-selectionend-on-input-type-number-no-longer-allowed-in-chrome/24175357
 *  - https://html.spec.whatwg.org/multipage/input.html#do-not-apply
 */
function isSelectable(inputNode) {
  return inputNode.selectionStart != null;
}

/***/ }),

/***/ "9868283e4f2fa9ebe81c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getOptionLabel = _interopRequireDefault(__webpack_require__("a61bd54a88f468b3eb5b"));

function addCustomOption(results, props) {
  var allowNew = props.allowNew,
      labelKey = props.labelKey,
      text = props.text;

  if (!allowNew || !text.trim()) {
    return false;
  } // If the consumer has provided a callback, use that to determine whether or
  // not to add the custom option.


  if (typeof allowNew === 'function') {
    return allowNew(results, props);
  } // By default, don't add the custom option if there is an exact text match
  // with an existing option.


  return !results.some(function (o) {
    return (0, _getOptionLabel["default"])(o, labelKey) === text;
  });
}

var _default = addCustomOption;
exports["default"] = _default;

/***/ }),

/***/ "9bc38d5d5e47a118ee84":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = shouldSelectHint;

var _isSelectable = _interopRequireDefault(__webpack_require__("907db5e1ea8d342e81aa"));

var _constants = __webpack_require__("9c2d75f33016547e31e2");

function shouldSelectHint(_ref, _ref2) {
  var currentTarget = _ref.currentTarget,
      keyCode = _ref.keyCode;
  var hintText = _ref2.hintText,
      selectHintOnEnter = _ref2.selectHintOnEnter,
      value = _ref2.value;

  if (!hintText) {
    return false;
  }

  if (keyCode === _constants.RIGHT) {
    // For selectable input types ("text", "search"), only select the hint if
    // it's at the end of the input value. For non-selectable types ("email",
    // "number"), always select the hint.
    return (0, _isSelectable["default"])(currentTarget) ? currentTarget.selectionStart === value.length : true;
  }

  if (keyCode === _constants.TAB) {
    return true;
  }

  if (keyCode === _constants.RETURN && selectHintOnEnter) {
    return true;
  }

  return false;
}

/***/ }),

/***/ "9c2d75f33016547e31e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SIZE = exports.ALIGN = exports.DEFAULT_LABELKEY = exports.DOWN = exports.RIGHT = exports.UP = exports.LEFT = exports.SPACE = exports.ESC = exports.RETURN = exports.TAB = exports.BACKSPACE = void 0;

/**
 * Common (non-printable) keycodes for `keydown` and `keyup` events. Note that
 * `keypress` handles things differently and may not return the same values.
 */
var BACKSPACE = 8;
exports.BACKSPACE = BACKSPACE;
var TAB = 9;
exports.TAB = TAB;
var RETURN = 13;
exports.RETURN = RETURN;
var ESC = 27;
exports.ESC = ESC;
var SPACE = 32;
exports.SPACE = SPACE;
var LEFT = 37;
exports.LEFT = LEFT;
var UP = 38;
exports.UP = UP;
var RIGHT = 39;
exports.RIGHT = RIGHT;
var DOWN = 40;
exports.DOWN = DOWN;
var DEFAULT_LABELKEY = 'label';
exports.DEFAULT_LABELKEY = DEFAULT_LABELKEY;
var ALIGN = {
  JUSTIFY: 'justify',
  LEFT: 'left',
  RIGHT: 'right'
};
exports.ALIGN = ALIGN;
var SIZE = {
  LARGE: 'large',
  LG: 'lg',
  SM: 'sm',
  SMALL: 'small'
};
exports.SIZE = SIZE;

/***/ }),

/***/ "9dbdce3fc23b010fa468":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.head = head;
exports.isFunction = isFunction;
exports.isString = isString;
exports.noop = noop;
exports.pick = pick;
exports.uniqueId = uniqueId;
exports.valuesPolyfill = valuesPolyfill;
exports.values = values;
var idCounter = 0;

function head(arr) {
  return Array.isArray(arr) && arr.length ? arr[0] : undefined;
}

function isFunction(value) {
  return typeof value === 'function';
}

function isString(value) {
  return typeof value === 'string';
}

function noop() {}

function pick(obj, keys) {
  var result = {};
  keys.forEach(function (k) {
    if (Object.prototype.hasOwnProperty.call(obj, k)) {
      result[k] = obj[k];
    }
  });
  return result;
}

function uniqueId(prefix) {
  idCounter += 1;
  return (prefix == null ? '' : String(prefix)) + idCounter;
} // Export for testing purposes.


function valuesPolyfill(obj) {
  return Object.keys(obj).reduce(function (accum, key) {
    if (Object.prototype.propertyIsEnumerable.call(obj, key)) {
      accum.push(obj[key]);
    }

    return accum;
  }, []);
}

function values(obj) {
  return isFunction(Object.values) ? Object.values(obj) : valuesPolyfill(obj);
}

/***/ }),

/***/ "9e8ac2d40efa92a02161":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Input = _interopRequireDefault(__webpack_require__("46b8af817c6a99a5dcdd"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _hintContainer = _interopRequireDefault(__webpack_require__("3bffc1b4310b987a316b"));

var _withClassNames = _interopRequireDefault(__webpack_require__("54039156ea48b2e7ede6"));

var _constants = __webpack_require__("9c2d75f33016547e31e2");

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
var HintedInput = (0, _hintContainer["default"])(_Input["default"]);

var TypeaheadInputMulti = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(TypeaheadInputMulti, _React$Component);

  function TypeaheadInputMulti() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "wrapperRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_input", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInputRef", function (input) {
      _this._input = input;

      _this.props.inputRef(input);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleContainerClickOrFocus", function (e) {
      // Don't focus the input if it's disabled.
      if (_this.props.disabled) {
        e.currentTarget.blur();
        return;
      } // Move cursor to the end if the user clicks outside the actual input.


      var inputNode = _this._input;

      if (!inputNode) {
        return;
      }

      if (e.currentTarget !== inputNode && (0, _utils.isSelectable)(inputNode)) {
        inputNode.selectionStart = inputNode.value.length;
      }

      inputNode.focus();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleKeyDown", function (e) {
      var _this$props = _this.props,
          onKeyDown = _this$props.onKeyDown,
          selected = _this$props.selected,
          value = _this$props.value;

      switch (e.keyCode) {
        case _constants.BACKSPACE:
          if (e.currentTarget === _this._input && selected.length && !value) {
            // Prevent browser from going back.
            e.preventDefault(); // If the input is selected and there is no text, focus the last
            // token when the user hits backspace.

            if (_this.wrapperRef.current) {
              var children = _this.wrapperRef.current.children;
              var lastToken = children[children.length - 2];
              lastToken && lastToken.focus();
            }
          }

          break;

        default:
          break;
      }

      onKeyDown(e);
    });
    return _this;
  }

  var _proto = TypeaheadInputMulti.prototype;

  _proto.render = function render() {
    var _this$props2 = this.props,
        children = _this$props2.children,
        className = _this$props2.className,
        inputClassName = _this$props2.inputClassName,
        inputRef = _this$props2.inputRef,
        placeholder = _this$props2.placeholder,
        selected = _this$props2.selected,
        props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props2, ["children", "className", "inputClassName", "inputRef", "placeholder", "selected"]);
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: (0, _classnames["default"])('rbt-input-multi', className),
      disabled: props.disabled,
      onClick: this._handleContainerClickOrFocus,
      onFocus: this._handleContainerClickOrFocus,
      tabIndex: -1
    }, /*#__PURE__*/_react["default"].createElement("div", {
      className: "rbt-input-wrapper",
      ref: this.wrapperRef
    }, children, /*#__PURE__*/_react["default"].createElement(HintedInput, (0, _extends2["default"])({}, props, {
      className: inputClassName,
      onKeyDown: this._handleKeyDown,
      placeholder: selected.length ? '' : placeholder,
      ref: this.getInputRef,
      style: {
        backgroundColor: 'transparent',
        border: 0,
        boxShadow: 'none',
        cursor: 'inherit',
        outline: 'none',
        padding: 0,
        width: '100%',
        zIndex: 1
      }
    }))));
  };

  return TypeaheadInputMulti;
}(_react["default"].Component);

var _default = (0, _withClassNames["default"])(TypeaheadInputMulti);

exports["default"] = _default;

/***/ }),

/***/ "9ea837b510fdc421b1b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = validateSelectedPropChange;

var _warn = _interopRequireDefault(__webpack_require__("f139dc630071f0242e1b"));

function validateSelectedPropChange(prevSelected, selected) {
  var uncontrolledToControlled = !prevSelected && selected;
  var controlledToUncontrolled = prevSelected && !selected;
  var from, to, precedent;

  if (uncontrolledToControlled) {
    from = 'uncontrolled';
    to = 'controlled';
    precedent = 'an';
  } else {
    from = 'controlled';
    to = 'uncontrolled';
    precedent = 'a';
  }

  var message = "You are changing " + precedent + " " + from + " typeahead to be " + to + ". " + ("Input elements should not switch from " + from + " to " + to + " (or vice versa). ") + 'Decide between using a controlled or uncontrolled element for the ' + 'lifetime of the component.';
  (0, _warn["default"])(!(uncontrolledToControlled || controlledToUncontrolled), message);
}

/***/ }),

/***/ "a61bd54a88f468b3eb5b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _invariant = _interopRequireDefault(__webpack_require__("6a4f9c383785f9168266"));

var _getStringLabelKey = _interopRequireDefault(__webpack_require__("27b8ec3d0b900700e999"));

var _nodash = __webpack_require__("9dbdce3fc23b010fa468");

/**
 * Retrieves the display string from an option. Options can be the string
 * themselves, or an object with a defined display string. Anything else throws
 * an error.
 */
function getOptionLabel(option, labelKey) {
  // Handle internally created options first.
  if (!(0, _nodash.isString)(option) && (option.paginationOption || option.customOption)) {
    return option[(0, _getStringLabelKey["default"])(labelKey)];
  }

  var optionLabel;

  if ((0, _nodash.isFunction)(labelKey)) {
    optionLabel = labelKey(option);
  } else if ((0, _nodash.isString)(option)) {
    optionLabel = option;
  } else {
    // `option` is an object and `labelKey` is a string.
    optionLabel = option[labelKey];
  }

  !(0, _nodash.isString)(optionLabel) ?  false ? undefined : invariant(false) : void 0;
  return optionLabel;
}

var _default = getOptionLabel;
exports["default"] = _default;

/***/ }),

/***/ "b40f59226bb18652b5c3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getUpdatedActiveIndex;

var _constants = __webpack_require__("9c2d75f33016547e31e2");

function skipDisabledOptions(currentIndex, keyCode, items) {
  var newIndex = currentIndex;

  while (items[newIndex] && items[newIndex].disabled) {
    newIndex += keyCode === _constants.UP ? -1 : 1;
  }

  return newIndex;
}

function getUpdatedActiveIndex(currentIndex, keyCode, items) {
  var newIndex = currentIndex; // Increment or decrement index based on user keystroke.

  newIndex += keyCode === _constants.UP ? -1 : 1; // Skip over any disabled options.

  newIndex = skipDisabledOptions(newIndex, keyCode, items); // If we've reached the end, go back to the beginning or vice-versa.

  if (newIndex === items.length) {
    newIndex = -1;
  } else if (newIndex === -2) {
    newIndex = items.length - 1; // Skip over any disabled options.

    newIndex = skipDisabledOptions(newIndex, keyCode, items);
  }

  return newIndex;
}

/***/ }),

/***/ "b90fe70071e0be4b5d29":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getOptionLabel = _interopRequireDefault(__webpack_require__("a61bd54a88f468b3eb5b"));

var _nodash = __webpack_require__("9dbdce3fc23b010fa468");

function getInputText(props) {
  var activeItem = props.activeItem,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text;

  if (activeItem) {
    // Display the input value if the pagination item is active.
    return (0, _getOptionLabel["default"])(activeItem, labelKey);
  }

  var selectedItem = !multiple && !!selected.length && (0, _nodash.head)(selected);

  if (selectedItem) {
    return (0, _getOptionLabel["default"])(selectedItem, labelKey);
  }

  return text;
}

var _default = getInputText;
exports["default"] = _default;

/***/ }),

/***/ "b911809d552ef17b4f11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _propTypes2 = __webpack_require__("bbef3935a5d66d5be430");

var propTypes = {
  label: _propTypes["default"].string,
  onClick: _propTypes["default"].func,
  size: _propTypes2.sizeType
};
var defaultProps = {
  label: 'Clear',
  onClick: _utils.noop
};

/**
 * ClearButton
 *
 * http://getbootstrap.com/css/#helper-classes-close
 */
var ClearButton = function ClearButton(_ref) {
  var className = _ref.className,
      label = _ref.label,
      _onClick = _ref.onClick,
      size = _ref.size,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["className", "label", "onClick", "size"]);
  return /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({}, props, {
    "aria-label": label,
    className: (0, _classnames["default"])('close', 'rbt-close', {
      'rbt-close-lg': (0, _utils.isSizeLarge)(size)
    }, className),
    onClick: function onClick(e) {
      e.stopPropagation();

      _onClick(e);
    },
    type: "button"
  }), /*#__PURE__*/_react["default"].createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/_react["default"].createElement("span", {
    className: "sr-only"
  }, label));
};

ClearButton.propTypes = propTypes;
ClearButton.defaultProps = defaultProps;
var _default = ClearButton;
exports["default"] = _default;

/***/ }),

/***/ "bbef3935a5d66d5be430":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkPropType = checkPropType;
exports.caseSensitiveType = caseSensitiveType;
exports.deprecated = deprecated;
exports.defaultInputValueType = defaultInputValueType;
exports.highlightOnlyResultType = highlightOnlyResultType;
exports.ignoreDiacriticsType = ignoreDiacriticsType;
exports.inputPropsType = inputPropsType;
exports.isRequiredForA11y = isRequiredForA11y;
exports.labelKeyType = labelKeyType;
exports.selectedType = selectedType;
exports.optionType = exports.sizeType = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _constants = __webpack_require__("9c2d75f33016547e31e2");

var INPUT_PROPS_BLACKLIST = [{
  alt: 'onBlur',
  prop: 'onBlur'
}, {
  alt: 'onInputChange',
  prop: 'onChange'
}, {
  alt: 'onFocus',
  prop: 'onFocus'
}, {
  alt: 'onKeyDown',
  prop: 'onKeyDown'
}];

var sizeType = _propTypes["default"].oneOf((0, _utils.values)(_constants.SIZE));
/**
 * Allows additional warnings or messaging related to prop validation.
 */


exports.sizeType = sizeType;

function checkPropType(validator, callback) {
  return function (props, propName, componentName) {
    var _PropTypes$checkPropT;

    _propTypes["default"].checkPropTypes((_PropTypes$checkPropT = {}, _PropTypes$checkPropT[propName] = validator, _PropTypes$checkPropT), props, 'prop', componentName);

    (0, _utils.isFunction)(callback) && callback(props, propName, componentName);
  };
}

function caseSensitiveType(props, propName, componentName) {
  var caseSensitive = props.caseSensitive,
      filterBy = props.filterBy;
  (0, _utils.warn)(!caseSensitive || typeof filterBy !== 'function', 'Your `filterBy` function will override the `caseSensitive` prop.');
}

function deprecated(validator, reason) {
  return function validate(props, propName, componentName) {
    var _PropTypes$checkPropT2;

    if (props[propName] != null) {
      (0, _utils.warn)(false, "The prop `" + propName + "` is deprecated. " + reason);
    }

    return _propTypes["default"].checkPropTypes((_PropTypes$checkPropT2 = {}, _PropTypes$checkPropT2[propName] = validator, _PropTypes$checkPropT2), props, 'prop', componentName);
  };
}

function defaultInputValueType(props, propName, componentName) {
  var defaultInputValue = props.defaultInputValue,
      defaultSelected = props.defaultSelected,
      multiple = props.multiple,
      selected = props.selected;
  var name = defaultSelected.length ? 'defaultSelected' : 'selected';
  (0, _utils.warn)(!(!multiple && defaultInputValue && (defaultSelected.length || selected && selected.length)), "`defaultInputValue` will be overridden by the value from `" + name + "`.");
}

function highlightOnlyResultType(props, propName, componentName) {
  var allowNew = props.allowNew,
      highlightOnlyResult = props.highlightOnlyResult;
  (0, _utils.warn)(!(highlightOnlyResult && allowNew), '`highlightOnlyResult` will not work with `allowNew`.');
}

function ignoreDiacriticsType(props, propName, componentName) {
  var filterBy = props.filterBy,
      ignoreDiacritics = props.ignoreDiacritics;
  (0, _utils.warn)(ignoreDiacritics || typeof filterBy !== 'function', 'Your `filterBy` function will override the `ignoreDiacritics` prop.');
}

function inputPropsType(props, propName, componentName) {
  var inputProps = props.inputProps;

  if (!(inputProps && Object.prototype.toString.call(inputProps) === '[object Object]')) {
    return;
  } // Blacklisted properties.


  INPUT_PROPS_BLACKLIST.forEach(function (_ref) {
    var alt = _ref.alt,
        prop = _ref.prop;
    var msg = alt ? " Use the top-level `" + alt + "` prop instead." : null;
    (0, _utils.warn)(!inputProps[prop], "The `" + prop + "` property of `inputProps` will be ignored." + msg);
  });
}

function isRequiredForA11y(props, propName, componentName) {
  (0, _utils.warn)(props[propName] != null, "The prop `" + propName + "` is required to make `" + componentName + "` " + 'accessible for users of assistive technologies such as screen readers.');
}

function labelKeyType(props, propName, componentName) {
  var allowNew = props.allowNew,
      labelKey = props.labelKey;
  (0, _utils.warn)(!((0, _utils.isFunction)(labelKey) && allowNew), '`labelKey` must be a string when `allowNew={true}`.');
}

var optionType = _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]);

exports.optionType = optionType;

function selectedType(props, propName, componentName) {
  var onChange = props.onChange,
      selected = props.selected;
  (0, _utils.warn)(!selected || selected && (0, _utils.isFunction)(onChange), 'You provided a `selected` prop without an `onChange` handler. If you ' + 'want the typeahead to be uncontrolled, use `defaultSelected`. ' + 'Otherwise, set `onChange`.');
}

/***/ }),

/***/ "bd47273ea76379d20133":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = preventInputBlur;

/**
 * Prevent the main input from blurring when a menu item or the clear button is
 * clicked. (#226 & #310)
 */
function preventInputBlur(e) {
  e.preventDefault();
}

/***/ }),

/***/ "c03afc1c02ac5b330b4b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _ClearButton = _interopRequireDefault(__webpack_require__("b911809d552ef17b4f11"));

var _tokenContainer = _interopRequireDefault(__webpack_require__("db4e80dd30a0317531e8"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var propTypes = {
  active: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,

  /**
   * Handler for removing/deleting the token. If not defined, the token will
   * be rendered in a read-only state.
   */
  onRemove: _propTypes["default"].func,

  /**
   * Explicitly force a read-only state on the token.
   */
  readOnly: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].number
};
var defaultProps = {
  active: false,
  disabled: false,
  tabIndex: 0
};

/**
 * Token
 *
 * Individual token component, generally displayed within the TokenizerInput
 * component, but can also be rendered on its own.
 */
var Token = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Token, _React$Component);

  function Token() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderRemoveableToken", function () {
      var _this$props = _this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          onRemove = _this$props.onRemove,
          props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props, ["active", "children", "className", "onRemove"]);
      return /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, props, {
        className: (0, _classnames["default"])('rbt-token', 'rbt-token-removeable', {
          'rbt-token-active': active
        }, className)
      }), children, /*#__PURE__*/_react["default"].createElement(_ClearButton["default"], {
        className: "rbt-token-remove-button",
        label: "Remove",
        onClick: onRemove,
        tabIndex: -1
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderToken", function () {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          href = _this$props2.href;
      var classnames = (0, _classnames["default"])('rbt-token', {
        'rbt-token-disabled': disabled
      }, className);

      if (href && !disabled) {
        return /*#__PURE__*/_react["default"].createElement("a", {
          className: classnames,
          href: href
        }, children);
      }

      return /*#__PURE__*/_react["default"].createElement("div", {
        className: classnames
      }, children);
    });
    return _this;
  }

  var _proto = Token.prototype;

  _proto.render = function render() {
    var _this$props3 = this.props,
        disabled = _this$props3.disabled,
        onRemove = _this$props3.onRemove,
        readOnly = _this$props3.readOnly;
    return !disabled && !readOnly && (0, _utils.isFunction)(onRemove) ? this._renderRemoveableToken() : this._renderToken();
  };

  return Token;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Token, "propTypes", propTypes);
(0, _defineProperty2["default"])(Token, "defaultProps", defaultProps);

var _default = (0, _tokenContainer["default"])(Token);

exports["default"] = _default;

/***/ }),

/***/ "c34a16323dac1fa9f45a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getMatchBounds = _interopRequireDefault(__webpack_require__("226ab2d11bce5ed2897b"));

var _getOptionLabel = _interopRequireDefault(__webpack_require__("a61bd54a88f468b3eb5b"));

function getHintText(props) {
  var activeIndex = props.activeIndex,
      initialItem = props.initialItem,
      isFocused = props.isFocused,
      isMenuShown = props.isMenuShown,
      labelKey = props.labelKey,
      multiple = props.multiple,
      selected = props.selected,
      text = props.text; // Don't display a hint under the following conditions:

  if ( // No text entered.
  !text || // The input is not focused.
  !isFocused || // The menu is hidden.
  !isMenuShown || // No item in the menu.
  !initialItem || // The initial item is a custom option.
  initialItem.customOption || // One of the menu items is active.
  activeIndex > -1 || // There's already a selection in single-select mode.
  !!selected.length && !multiple) {
    return '';
  }

  var initialItemStr = (0, _getOptionLabel["default"])(initialItem, labelKey);
  var bounds = (0, _getMatchBounds["default"])(initialItemStr.toLowerCase(), text.toLowerCase());

  if (!(bounds && bounds.start === 0)) {
    return '';
  } // Text matching is case- and accent-insensitive, so to display the hint
  // correctly, splice the input string with the hint string.


  return text + initialItemStr.slice(bounds.end, initialItemStr.length);
}

var _default = getHintText;
exports["default"] = _default;

/***/ }),

/***/ "c6507d6ee375de1c5105":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _asyncContainer = _interopRequireDefault(__webpack_require__("586d47f227396321eeae"));

var _Typeahead = _interopRequireDefault(__webpack_require__("dbc33af49843258b9329"));

var _default = (0, _asyncContainer["default"])(_Typeahead["default"]);

exports["default"] = _default;

/***/ }),

/***/ "c69f27b8eabed90cfdd3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/**
 * Truncates the result set based on `maxResults` and returns the new set.
 */
function getTruncatedOptions(options, maxResults) {
  if (!maxResults || maxResults >= options.length) {
    return options;
  }

  return options.slice(0, maxResults);
}

var _default = getTruncatedOptions;
exports["default"] = _default;

/***/ }),

/***/ "cde6e4e5258dd6320d52":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isShown;

function isShown(props) {
  var open = props.open,
      minLength = props.minLength,
      showMenu = props.showMenu,
      text = props.text; // If menu visibility is controlled via props, that value takes precedence.

  if (open || open === false) {
    return open;
  }

  if (text.length < minLength) {
    return false;
  }

  return showMenu;
}

/***/ }),

/***/ "d2412f0e1633b651ac62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Context = __webpack_require__("75f894429043191ab885");

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _constants = __webpack_require__("9c2d75f33016547e31e2");

var inputPropKeys = ['activeIndex', 'disabled', 'id', 'inputRef', 'isFocused', 'isMenuShown', 'multiple', 'onBlur', 'onChange', 'onFocus', 'onKeyDown', 'placeholder'];
var propKeys = ['activeIndex', 'hideMenu', 'isMenuShown', 'labelKey', 'onClear', 'onHide', 'onRemove', 'results', 'selected', 'text', 'toggleMenu'];
var typeaheadContextKeys = ['activeIndex', 'id', 'initialItem', 'inputNode', 'onActiveItemChange', 'onAdd', 'onInitialItemChange', 'onMenuItemClick', 'selectHintOnEnter', 'setItem'];

function getTypeaheadContextValue(props) {
  return (0, _extends2["default"])({}, (0, _utils.pick)(props, typeaheadContextKeys), {
    hintText: (0, _utils.getHintText)(props),
    isOnlyResult: (0, _utils.getIsOnlyResult)(props)
  });
}

var TypeaheadManager = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(TypeaheadManager, _React$Component);

  function TypeaheadManager() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleKeyDown", function (e) {
      var _this$props = _this.props,
          initialItem = _this$props.initialItem,
          onKeyDown = _this$props.onKeyDown,
          onAdd = _this$props.onAdd;

      switch (e.keyCode) {
        case _constants.RETURN:
          if (initialItem && (0, _utils.getIsOnlyResult)(_this.props)) {
            onAdd(initialItem);
          }

          break;

        default:
          break;
      }

      onKeyDown(e);
    });
    return _this;
  }

  var _proto = TypeaheadManager.prototype;

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this$props2 = this.props,
        allowNew = _this$props2.allowNew,
        isMenuShown = _this$props2.isMenuShown,
        onInitialItemChange = _this$props2.onInitialItemChange,
        onMenuToggle = _this$props2.onMenuToggle,
        results = _this$props2.results; // Clear the initial item when there are no results.

    if (!(allowNew || results.length)) {
      onInitialItemChange(null);
    }

    if (isMenuShown !== prevProps.isMenuShown) {
      onMenuToggle(isMenuShown);
    }
  };

  _proto.render = function render() {
    var childProps = (0, _extends2["default"])({}, (0, _utils.pick)(this.props, propKeys), {
      getInputProps: (0, _utils.getInputProps)((0, _extends2["default"])({}, (0, _utils.pick)(this.props, inputPropKeys), {
        onKeyDown: this._handleKeyDown,
        value: (0, _utils.getInputText)(this.props)
      }))
    });
    return /*#__PURE__*/_react["default"].createElement(_Context.TypeaheadContext.Provider, {
      value: getTypeaheadContextValue(this.props)
    }, this.props.children(childProps));
  };

  return TypeaheadManager;
}(_react["default"].Component);

var _default = TypeaheadManager;
exports["default"] = _default;

/***/ }),

/***/ "d39108c9d2114a3c8ab3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPlacement = getPlacement;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var React = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _reactPopper = __webpack_require__("fb6f24c09cd7ba3acfcd");

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _constants = __webpack_require__("9c2d75f33016547e31e2");

/* eslint-disable react/no-unused-prop-types */
// `Element` is not defined during server-side rendering, so shim it here.

/* istanbul ignore next */
var SafeElement = typeof Element === 'undefined' ? function () {} : Element;
var propTypes = {
  /**
   * Specify menu alignment. The default value is `justify`, which makes the
   * menu as wide as the input and truncates long values. Specifying `left`
   * or `right` will align the menu to that side and the width will be
   * determined by the length of menu item values.
   */
  align: _propTypes["default"].oneOf((0, _utils.values)(_constants.ALIGN)),
  children: _propTypes["default"].func.isRequired,

  /**
   * Specify whether the menu should appear above the input.
   */
  dropup: _propTypes["default"].bool,

  /**
   * Whether or not to automatically adjust the position of the menu when it
   * reaches the viewport boundaries.
   */
  flip: _propTypes["default"].bool,
  isMenuShown: _propTypes["default"].bool,
  positionFixed: _propTypes["default"].bool,
  referenceElement: _propTypes["default"].instanceOf(SafeElement)
};
var defaultProps = {
  align: _constants.ALIGN.JUSTIFY,
  dropup: false,
  flip: false,
  isMenuShown: false,
  positionFixed: false
};

function getModifiers(_ref) {
  var align = _ref.align,
      flip = _ref.flip;
  return {
    computeStyles: {
      enabled: true,
      fn: function fn(_ref2) {
        var styles = _ref2.styles,
            data = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, ["styles"]);
        return (0, _extends2["default"])({}, data, {
          styles: (0, _extends2["default"])({}, styles, {
            // Use the following condition instead of `align === 'justify'`
            // since it allows the component to fall back to justifying the
            // menu width if `align` is undefined.
            width: align !== _constants.ALIGN.RIGHT && align !== _constants.ALIGN.LEFT ? // Set the popper width to match the target width.
            data.offsets.reference.width : styles.width
          })
        });
      }
    },
    flip: {
      enabled: flip
    },
    preventOverflow: {
      escapeWithReference: true
    }
  };
} // Flow expects a string literal value for `placement`.


var PLACEMENT = {
  bottom: {
    end: 'bottom-end',
    start: 'bottom-start'
  },
  top: {
    end: 'top-end',
    start: 'top-start'
  }
};

function getPlacement(_ref3) {
  var align = _ref3.align,
      dropup = _ref3.dropup;
  var x = align === _constants.ALIGN.RIGHT ? 'end' : 'start';
  var y = dropup ? 'top' : 'bottom';
  return PLACEMENT[y][x];
}

var Overlay = function Overlay(props) {
  var children = props.children,
      isMenuShown = props.isMenuShown,
      positionFixed = props.positionFixed,
      referenceElement = props.referenceElement;

  if (!isMenuShown) {
    return null;
  }

  return /*#__PURE__*/React.createElement(_reactPopper.Popper, {
    modifiers: getModifiers(props),
    placement: getPlacement(props),
    positionFixed: positionFixed,
    referenceElement: referenceElement
  }, function (_ref4) {
    var ref = _ref4.ref,
        popperProps = (0, _objectWithoutPropertiesLoose2["default"])(_ref4, ["ref"]);
    return children((0, _extends2["default"])({}, popperProps, {
      innerRef: ref,
      inputHeight: referenceElement ? referenceElement.offsetHeight : 0
    }));
  });
};

Overlay.propTypes = propTypes;
Overlay.defaultProps = defaultProps;
var _default = Overlay;
exports["default"] = _default;

/***/ }),

/***/ "da4516145deb7f2778dc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = stripDiacritics;

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Taken from: http://stackoverflow.com/questions/990904/remove-accents-diacritics-in-a-string-in-javascript/18391901#18391901
 */

/* eslint-disable max-len */
var map = [{
  base: 'A',
  letters: "A\u24B6\uFF21\xC0\xC1\xC2\u1EA6\u1EA4\u1EAA\u1EA8\xC3\u0100\u0102\u1EB0\u1EAE\u1EB4\u1EB2\u0226\u01E0\xC4\u01DE\u1EA2\xC5\u01FA\u01CD\u0200\u0202\u1EA0\u1EAC\u1EB6\u1E00\u0104\u023A\u2C6F"
}, {
  base: 'AA',
  letters: "\uA732"
}, {
  base: 'AE',
  letters: "\xC6\u01FC\u01E2"
}, {
  base: 'AO',
  letters: "\uA734"
}, {
  base: 'AU',
  letters: "\uA736"
}, {
  base: 'AV',
  letters: "\uA738\uA73A"
}, {
  base: 'AY',
  letters: "\uA73C"
}, {
  base: 'B',
  letters: "B\u24B7\uFF22\u1E02\u1E04\u1E06\u0243\u0182\u0181"
}, {
  base: 'C',
  letters: "C\u24B8\uFF23\u0106\u0108\u010A\u010C\xC7\u1E08\u0187\u023B\uA73E"
}, {
  base: 'D',
  letters: "D\u24B9\uFF24\u1E0A\u010E\u1E0C\u1E10\u1E12\u1E0E\u0110\u018B\u018A\u0189\uA779\xD0"
}, {
  base: 'DZ',
  letters: "\u01F1\u01C4"
}, {
  base: 'Dz',
  letters: "\u01F2\u01C5"
}, {
  base: 'E',
  letters: "E\u24BA\uFF25\xC8\xC9\xCA\u1EC0\u1EBE\u1EC4\u1EC2\u1EBC\u0112\u1E14\u1E16\u0114\u0116\xCB\u1EBA\u011A\u0204\u0206\u1EB8\u1EC6\u0228\u1E1C\u0118\u1E18\u1E1A\u0190\u018E"
}, {
  base: 'F',
  letters: "F\u24BB\uFF26\u1E1E\u0191\uA77B"
}, {
  base: 'G',
  letters: "G\u24BC\uFF27\u01F4\u011C\u1E20\u011E\u0120\u01E6\u0122\u01E4\u0193\uA7A0\uA77D\uA77E"
}, {
  base: 'H',
  letters: "H\u24BD\uFF28\u0124\u1E22\u1E26\u021E\u1E24\u1E28\u1E2A\u0126\u2C67\u2C75\uA78D"
}, {
  base: 'I',
  letters: "I\u24BE\uFF29\xCC\xCD\xCE\u0128\u012A\u012C\u0130\xCF\u1E2E\u1EC8\u01CF\u0208\u020A\u1ECA\u012E\u1E2C\u0197"
}, {
  base: 'J',
  letters: "J\u24BF\uFF2A\u0134\u0248"
}, {
  base: 'K',
  letters: "K\u24C0\uFF2B\u1E30\u01E8\u1E32\u0136\u1E34\u0198\u2C69\uA740\uA742\uA744\uA7A2"
}, {
  base: 'L',
  letters: "L\u24C1\uFF2C\u013F\u0139\u013D\u1E36\u1E38\u013B\u1E3C\u1E3A\u0141\u023D\u2C62\u2C60\uA748\uA746\uA780"
}, {
  base: 'LJ',
  letters: "\u01C7"
}, {
  base: 'Lj',
  letters: "\u01C8"
}, {
  base: 'M',
  letters: "M\u24C2\uFF2D\u1E3E\u1E40\u1E42\u2C6E\u019C"
}, {
  base: 'N',
  letters: "N\u24C3\uFF2E\u01F8\u0143\xD1\u1E44\u0147\u1E46\u0145\u1E4A\u1E48\u0220\u019D\uA790\uA7A4"
}, {
  base: 'NJ',
  letters: "\u01CA"
}, {
  base: 'Nj',
  letters: "\u01CB"
}, {
  base: 'O',
  letters: "O\u24C4\uFF2F\xD2\xD3\xD4\u1ED2\u1ED0\u1ED6\u1ED4\xD5\u1E4C\u022C\u1E4E\u014C\u1E50\u1E52\u014E\u022E\u0230\xD6\u022A\u1ECE\u0150\u01D1\u020C\u020E\u01A0\u1EDC\u1EDA\u1EE0\u1EDE\u1EE2\u1ECC\u1ED8\u01EA\u01EC\xD8\u01FE\u0186\u019F\uA74A\uA74C"
}, {
  base: 'OI',
  letters: "\u01A2"
}, {
  base: 'OO',
  letters: "\uA74E"
}, {
  base: 'OU',
  letters: "\u0222"
}, {
  base: 'OE',
  letters: "\x8C\u0152"
}, {
  base: 'oe',
  letters: "\x9C\u0153"
}, {
  base: 'P',
  letters: "P\u24C5\uFF30\u1E54\u1E56\u01A4\u2C63\uA750\uA752\uA754"
}, {
  base: 'Q',
  letters: "Q\u24C6\uFF31\uA756\uA758\u024A"
}, {
  base: 'R',
  letters: "R\u24C7\uFF32\u0154\u1E58\u0158\u0210\u0212\u1E5A\u1E5C\u0156\u1E5E\u024C\u2C64\uA75A\uA7A6\uA782"
}, {
  base: 'S',
  letters: "S\u24C8\uFF33\u1E9E\u015A\u1E64\u015C\u1E60\u0160\u1E66\u1E62\u1E68\u0218\u015E\u2C7E\uA7A8\uA784"
}, {
  base: 'T',
  letters: "T\u24C9\uFF34\u1E6A\u0164\u1E6C\u021A\u0162\u1E70\u1E6E\u0166\u01AC\u01AE\u023E\uA786"
}, {
  base: 'TZ',
  letters: "\uA728"
}, {
  base: 'U',
  letters: "U\u24CA\uFF35\xD9\xDA\xDB\u0168\u1E78\u016A\u1E7A\u016C\xDC\u01DB\u01D7\u01D5\u01D9\u1EE6\u016E\u0170\u01D3\u0214\u0216\u01AF\u1EEA\u1EE8\u1EEE\u1EEC\u1EF0\u1EE4\u1E72\u0172\u1E76\u1E74\u0244"
}, {
  base: 'V',
  letters: "V\u24CB\uFF36\u1E7C\u1E7E\u01B2\uA75E\u0245"
}, {
  base: 'VY',
  letters: "\uA760"
}, {
  base: 'W',
  letters: "W\u24CC\uFF37\u1E80\u1E82\u0174\u1E86\u1E84\u1E88\u2C72"
}, {
  base: 'X',
  letters: "X\u24CD\uFF38\u1E8A\u1E8C"
}, {
  base: 'Y',
  letters: "Y\u24CE\uFF39\u1EF2\xDD\u0176\u1EF8\u0232\u1E8E\u0178\u1EF6\u1EF4\u01B3\u024E\u1EFE"
}, {
  base: 'Z',
  letters: "Z\u24CF\uFF3A\u0179\u1E90\u017B\u017D\u1E92\u1E94\u01B5\u0224\u2C7F\u2C6B\uA762"
}, {
  base: 'a',
  letters: "a\u24D0\uFF41\u1E9A\xE0\xE1\xE2\u1EA7\u1EA5\u1EAB\u1EA9\xE3\u0101\u0103\u1EB1\u1EAF\u1EB5\u1EB3\u0227\u01E1\xE4\u01DF\u1EA3\xE5\u01FB\u01CE\u0201\u0203\u1EA1\u1EAD\u1EB7\u1E01\u0105\u2C65\u0250"
}, {
  base: 'aa',
  letters: "\uA733"
}, {
  base: 'ae',
  letters: "\xE6\u01FD\u01E3"
}, {
  base: 'ao',
  letters: "\uA735"
}, {
  base: 'au',
  letters: "\uA737"
}, {
  base: 'av',
  letters: "\uA739\uA73B"
}, {
  base: 'ay',
  letters: "\uA73D"
}, {
  base: 'b',
  letters: "b\u24D1\uFF42\u1E03\u1E05\u1E07\u0180\u0183\u0253"
}, {
  base: 'c',
  letters: "c\u24D2\uFF43\u0107\u0109\u010B\u010D\xE7\u1E09\u0188\u023C\uA73F\u2184"
}, {
  base: 'd',
  letters: "d\u24D3\uFF44\u1E0B\u010F\u1E0D\u1E11\u1E13\u1E0F\u0111\u018C\u0256\u0257\uA77A"
}, {
  base: 'dz',
  letters: "\u01F3\u01C6"
}, {
  base: 'e',
  letters: "e\u24D4\uFF45\xE8\xE9\xEA\u1EC1\u1EBF\u1EC5\u1EC3\u1EBD\u0113\u1E15\u1E17\u0115\u0117\xEB\u1EBB\u011B\u0205\u0207\u1EB9\u1EC7\u0229\u1E1D\u0119\u1E19\u1E1B\u0247\u025B\u01DD"
}, {
  base: 'f',
  letters: "f\u24D5\uFF46\u1E1F\u0192\uA77C"
}, {
  base: 'g',
  letters: "g\u24D6\uFF47\u01F5\u011D\u1E21\u011F\u0121\u01E7\u0123\u01E5\u0260\uA7A1\u1D79\uA77F"
}, {
  base: 'h',
  letters: "h\u24D7\uFF48\u0125\u1E23\u1E27\u021F\u1E25\u1E29\u1E2B\u1E96\u0127\u2C68\u2C76\u0265"
}, {
  base: 'hv',
  letters: "\u0195"
}, {
  base: 'i',
  letters: "i\u24D8\uFF49\xEC\xED\xEE\u0129\u012B\u012D\xEF\u1E2F\u1EC9\u01D0\u0209\u020B\u1ECB\u012F\u1E2D\u0268\u0131"
}, {
  base: 'j',
  letters: "j\u24D9\uFF4A\u0135\u01F0\u0249"
}, {
  base: 'k',
  letters: "k\u24DA\uFF4B\u1E31\u01E9\u1E33\u0137\u1E35\u0199\u2C6A\uA741\uA743\uA745\uA7A3"
}, {
  base: 'l',
  letters: "l\u24DB\uFF4C\u0140\u013A\u013E\u1E37\u1E39\u013C\u1E3D\u1E3B\u017F\u0142\u019A\u026B\u2C61\uA749\uA781\uA747"
}, {
  base: 'lj',
  letters: "\u01C9"
}, {
  base: 'm',
  letters: "m\u24DC\uFF4D\u1E3F\u1E41\u1E43\u0271\u026F"
}, {
  base: 'n',
  letters: "n\u24DD\uFF4E\u01F9\u0144\xF1\u1E45\u0148\u1E47\u0146\u1E4B\u1E49\u019E\u0272\u0149\uA791\uA7A5"
}, {
  base: 'nj',
  letters: "\u01CC"
}, {
  base: 'o',
  letters: "o\u24DE\uFF4F\xF2\xF3\xF4\u1ED3\u1ED1\u1ED7\u1ED5\xF5\u1E4D\u022D\u1E4F\u014D\u1E51\u1E53\u014F\u022F\u0231\xF6\u022B\u1ECF\u0151\u01D2\u020D\u020F\u01A1\u1EDD\u1EDB\u1EE1\u1EDF\u1EE3\u1ECD\u1ED9\u01EB\u01ED\xF8\u01FF\u0254\uA74B\uA74D\u0275"
}, {
  base: 'oi',
  letters: "\u01A3"
}, {
  base: 'ou',
  letters: "\u0223"
}, {
  base: 'oo',
  letters: "\uA74F"
}, {
  base: 'p',
  letters: "p\u24DF\uFF50\u1E55\u1E57\u01A5\u1D7D\uA751\uA753\uA755"
}, {
  base: 'q',
  letters: "q\u24E0\uFF51\u024B\uA757\uA759"
}, {
  base: 'r',
  letters: "r\u24E1\uFF52\u0155\u1E59\u0159\u0211\u0213\u1E5B\u1E5D\u0157\u1E5F\u024D\u027D\uA75B\uA7A7\uA783"
}, {
  base: 's',
  letters: "s\u24E2\uFF53\xDF\u015B\u1E65\u015D\u1E61\u0161\u1E67\u1E63\u1E69\u0219\u015F\u023F\uA7A9\uA785\u1E9B"
}, {
  base: 't',
  letters: "t\u24E3\uFF54\u1E6B\u1E97\u0165\u1E6D\u021B\u0163\u1E71\u1E6F\u0167\u01AD\u0288\u2C66\uA787"
}, {
  base: 'tz',
  letters: "\uA729"
}, {
  base: 'u',
  letters: "u\u24E4\uFF55\xF9\xFA\xFB\u0169\u1E79\u016B\u1E7B\u016D\xFC\u01DC\u01D8\u01D6\u01DA\u1EE7\u016F\u0171\u01D4\u0215\u0217\u01B0\u1EEB\u1EE9\u1EEF\u1EED\u1EF1\u1EE5\u1E73\u0173\u1E77\u1E75\u0289"
}, {
  base: 'v',
  letters: "v\u24E5\uFF56\u1E7D\u1E7F\u028B\uA75F\u028C"
}, {
  base: 'vy',
  letters: "\uA761"
}, {
  base: 'w',
  letters: "w\u24E6\uFF57\u1E81\u1E83\u0175\u1E87\u1E85\u1E98\u1E89\u2C73"
}, {
  base: 'x',
  letters: "x\u24E7\uFF58\u1E8B\u1E8D"
}, {
  base: 'y',
  letters: "y\u24E8\uFF59\u1EF3\xFD\u0177\u1EF9\u0233\u1E8F\xFF\u1EF7\u1E99\u1EF5\u01B4\u024F\u1EFF"
}, {
  base: 'z',
  letters: "z\u24E9\uFF5A\u017A\u1E91\u017C\u017E\u1E93\u1E95\u01B6\u0225\u0240\u2C6C\uA763"
}];
/* eslint-enable max-len */

var diacriticsMap = {};

for (var ii = 0; ii < map.length; ii++) {
  var letters = map[ii].letters;

  for (var jj = 0; jj < letters.length; jj++) {
    diacriticsMap[letters[jj]] = map[ii].base;
  }
} // "what?" version ... http://jsperf.com/diacritics/12


function stripDiacritics(str) {
  return str.replace(/[\u0300-\u036F]/g, '') // Remove combining diacritics

  /* eslint-disable-next-line no-control-regex */
  .replace(/[^\u0000-\u007E]/g, function (a) {
    return diacriticsMap[a] || a;
  });
}

/***/ }),

/***/ "db4e80dd30a0317531e8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _RootCloseWrapper = _interopRequireDefault(__webpack_require__("066c59e3271ab9b190b6"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _constants = __webpack_require__("9c2d75f33016547e31e2");

var _propTypes2 = __webpack_require__("bbef3935a5d66d5be430");

var propTypes = {
  onBlur: _propTypes["default"].func,
  onClick: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onRemove: _propTypes["default"].func,
  option: _propTypes2.optionType.isRequired
};
var defaultProps = {
  onBlur: _utils.noop,
  onClick: _utils.noop,
  onFocus: _utils.noop
};
/**
 * Higher-order component to encapsulate Token behaviors.
 */

var tokenContainer = function tokenContainer(Component) {
  var WrappedComponent = /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2["default"])(WrappedComponent, _React$Component);

    function WrappedComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
        active: false
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleActiveChange", function (e, active, callback) {
        // e.persist() isn't always present.
        e.persist && e.persist();
        e.stopPropagation();

        _this.setState({
          active: active
        }, function () {
          return callback(e);
        });
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleBlur", function (e) {
        _this._handleActiveChange(e, false, _this.props.onBlur);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleClick", function (e) {
        _this._handleActiveChange(e, true, _this.props.onClick);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFocus", function (e) {
        _this._handleActiveChange(e, true, _this.props.onFocus);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleKeyDown", function (e) {
        switch (e.keyCode) {
          case _constants.BACKSPACE:
            if (_this.state.active) {
              // Prevent backspace keypress from triggering the browser "back"
              // action.
              e.preventDefault();

              _this._handleRemove();
            }

            break;

          default:
            break;
        }
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleRemove", function () {
        var _this$props = _this.props,
            onRemove = _this$props.onRemove,
            option = _this$props.option; // Flow having trouble with `isFunction` here for some reason...

        if (typeof onRemove === 'function') {
          onRemove(option);
        }
      });
      return _this;
    }

    var _proto = WrappedComponent.prototype;

    _proto.render = function render() {
      var onRemove = this.props.onRemove;
      var active = this.state.active;
      return /*#__PURE__*/_react["default"].createElement(_RootCloseWrapper["default"], {
        disabled: !active,
        onRootClose: this._handleBlur
      }, /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, this.props, {
        active: active,
        onBlur: this._handleBlur,
        onClick: this._handleClick,
        onFocus: this._handleFocus,
        onKeyDown: this._handleKeyDown,
        onRemove: (0, _utils.isFunction)(onRemove) ? this._handleRemove : undefined
      })));
    };

    return WrappedComponent;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(WrappedComponent, "displayName", "tokenContainer(" + (0, _utils.getDisplayName)(Component) + ")");
  (0, _defineProperty2["default"])(WrappedComponent, "propTypes", propTypes);
  (0, _defineProperty2["default"])(WrappedComponent, "defaultProps", defaultProps);
  return WrappedComponent;
};

var _default = tokenContainer;
exports["default"] = _default;

/***/ }),

/***/ "dbc33af49843258b9329":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _reactDom = __webpack_require__("63f14ac74ce296f77f4d");

var _RootCloseWrapper = _interopRequireDefault(__webpack_require__("066c59e3271ab9b190b6"));

var _Overlay = _interopRequireDefault(__webpack_require__("d39108c9d2114a3c8ab3"));

var _Typeahead = _interopRequireDefault(__webpack_require__("ecd477baddc27ea5b1b0"));

var _ClearButton = _interopRequireDefault(__webpack_require__("b911809d552ef17b4f11"));

var _Loader = _interopRequireDefault(__webpack_require__("5b410fe6e22d0147c23a"));

var _Token = _interopRequireDefault(__webpack_require__("c03afc1c02ac5b330b4b"));

var _TypeaheadInputMulti = _interopRequireDefault(__webpack_require__("9e8ac2d40efa92a02161"));

var _TypeaheadInputSingle = _interopRequireDefault(__webpack_require__("2a7462490a3781853e0d"));

var _TypeaheadMenu = _interopRequireDefault(__webpack_require__("6797fc9ba11866df4c66"));

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _propTypes2 = __webpack_require__("bbef3935a5d66d5be430");

var propTypes = {
  /**
   * Specifies the size of the input.
   */
  bsSize: (0, _propTypes2.deprecated)(_propTypes2.sizeType, 'Use the `size` prop instead.'),

  /**
   * Displays a button to clear the input when there are selections.
   */
  clearButton: _propTypes["default"].bool,

  /**
   * Props to be applied directly to the input. `onBlur`, `onChange`,
   * `onFocus`, and `onKeyDown` are ignored.
   */
  inputProps: (0, _propTypes2.checkPropType)(_propTypes["default"].object, _propTypes2.inputPropsType),

  /**
   * Bootstrap 4 only. Adds the `is-invalid` classname to the `form-control`.
   */
  isInvalid: _propTypes["default"].bool,

  /**
   * Indicate whether an asynchronous data fetch is happening.
   */
  isLoading: _propTypes["default"].bool,

  /**
   * Bootstrap 4 only. Adds the `is-valid` classname to the `form-control`.
   */
  isValid: _propTypes["default"].bool,

  /**
   * Callback for custom input rendering.
   */
  renderInput: _propTypes["default"].func,

  /**
   * Callback for custom menu rendering.
   */
  renderMenu: _propTypes["default"].func,

  /**
   * Callback for custom menu rendering.
   */
  renderToken: _propTypes["default"].func,

  /**
   * Specifies the size of the input.
   */
  size: _propTypes2.sizeType
};
var defaultProps = {
  clearButton: false,
  inputProps: {},
  isInvalid: false,
  isLoading: false,
  isValid: false,
  renderMenu: function renderMenu(results, menuProps, props) {
    return /*#__PURE__*/_react["default"].createElement(_TypeaheadMenu["default"], (0, _extends2["default"])({}, menuProps, {
      labelKey: props.labelKey,
      options: results,
      text: props.text
    }));
  },
  renderToken: function renderToken(option, props, idx) {
    return /*#__PURE__*/_react["default"].createElement(_Token["default"], {
      disabled: props.disabled,
      key: idx,
      onRemove: props.onRemove,
      option: option,
      tabIndex: props.tabIndex
    }, (0, _utils.getOptionLabel)(option, props.labelKey));
  }
};

function getOverlayProps(props) {
  return (0, _utils.pick)(props, ['align', 'dropup', 'flip', 'positionFixed']);
}

var TypeaheadComponent = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(TypeaheadComponent, _React$Component);

  function TypeaheadComponent() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_referenceElement", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "referenceElementRef", function (element) {
      // Use `findDOMNode` here because it's easier and less fragile than
      // forwarding refs to the input's container.

      /* eslint-disable react/no-find-dom-node */
      // $FlowFixMe: `findDOMNode` could return Text or an Element.
      _this._referenceElement = (0, _reactDom.findDOMNode)(element);
      /* eslint-enable react/no-find-dom-node */
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderInput", function (inputProps, props) {
      var _this$props = _this.props,
          bsSize = _this$props.bsSize,
          isInvalid = _this$props.isInvalid,
          isValid = _this$props.isValid,
          multiple = _this$props.multiple,
          renderInput = _this$props.renderInput,
          renderToken = _this$props.renderToken,
          size = _this$props.size;

      if ((0, _utils.isFunction)(renderInput)) {
        return renderInput(inputProps, props);
      }

      var commonProps = (0, _extends2["default"])({}, inputProps, {
        isInvalid: isInvalid,
        isValid: isValid,
        size: bsSize || size
      });

      if (!multiple) {
        return /*#__PURE__*/_react["default"].createElement(_TypeaheadInputSingle["default"], commonProps);
      }

      var labelKey = props.labelKey,
          onRemove = props.onRemove,
          selected = props.selected;
      return /*#__PURE__*/_react["default"].createElement(_TypeaheadInputMulti["default"], (0, _extends2["default"])({}, commonProps, {
        selected: selected
      }), selected.map(function (option, idx) {
        return renderToken(option, (0, _extends2["default"])({}, commonProps, {
          labelKey: labelKey,
          onRemove: onRemove
        }), idx);
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderMenu", function (results, menuProps, props) {
      var _this$props2 = _this.props,
          emptyLabel = _this$props2.emptyLabel,
          id = _this$props2.id,
          maxHeight = _this$props2.maxHeight,
          newSelectionPrefix = _this$props2.newSelectionPrefix,
          paginationText = _this$props2.paginationText,
          renderMenu = _this$props2.renderMenu,
          renderMenuItemChildren = _this$props2.renderMenuItemChildren;
      return renderMenu(results, (0, _extends2["default"])({}, menuProps, {
        emptyLabel: emptyLabel,
        id: id,
        maxHeight: maxHeight,
        newSelectionPrefix: newSelectionPrefix,
        paginationText: paginationText,
        renderMenuItemChildren: renderMenuItemChildren
      }), props);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_renderAux", function (_ref) {
      var onClear = _ref.onClear,
          selected = _ref.selected;
      var _this$props3 = _this.props,
          bsSize = _this$props3.bsSize,
          clearButton = _this$props3.clearButton,
          disabled = _this$props3.disabled,
          isLoading = _this$props3.isLoading,
          size = _this$props3.size;
      var content;

      if (isLoading) {
        content = /*#__PURE__*/_react["default"].createElement(_Loader["default"], {
          size: bsSize || size
        });
      } else if (clearButton && !disabled && selected.length) {
        content = /*#__PURE__*/_react["default"].createElement(_ClearButton["default"], {
          size: bsSize || size,
          onClick: onClear,
          onFocus: function onFocus(e) {
            // Prevent the main input from auto-focusing again.
            e.stopPropagation();
          },
          onMouseDown: _utils.preventInputBlur
        });
      }

      return content ? /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('rbt-aux', {
          'rbt-aux-lg': (0, _utils.isSizeLarge)(bsSize)
        })
      }, content) : null;
    });
    return _this;
  }

  var _proto = TypeaheadComponent.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var _this$props4 = this.props,
        children = _this$props4.children,
        className = _this$props4.className,
        instanceRef = _this$props4.instanceRef,
        open = _this$props4.open,
        options = _this$props4.options,
        style = _this$props4.style;
    return /*#__PURE__*/_react["default"].createElement(_Typeahead["default"], (0, _extends2["default"])({}, this.props, {
      options: options,
      ref: instanceRef
    }), function (_ref2) {
      var getInputProps = _ref2.getInputProps,
          props = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, ["getInputProps"]);
      var hideMenu = props.hideMenu,
          isMenuShown = props.isMenuShown,
          results = props.results;

      var auxContent = _this2._renderAux(props);

      return /*#__PURE__*/_react["default"].createElement(_RootCloseWrapper["default"], {
        disabled: open || !isMenuShown,
        onRootClose: hideMenu
      }, /*#__PURE__*/_react["default"].createElement("div", {
        className: (0, _classnames["default"])('rbt', {
          'has-aux': !!auxContent
        }, className),
        style: (0, _extends2["default"])({}, style, {
          outline: 'none',
          position: 'relative'
        }),
        tabIndex: -1
      }, _this2._renderInput((0, _extends2["default"])({}, getInputProps(_this2.props.inputProps), {
        ref: _this2.referenceElementRef
      }), props), /*#__PURE__*/_react["default"].createElement(_Overlay["default"], (0, _extends2["default"])({}, getOverlayProps(_this2.props), {
        isMenuShown: isMenuShown,
        referenceElement: _this2._referenceElement
      }), function (menuProps) {
        return _this2._renderMenu(results, menuProps, props);
      }), auxContent, (0, _utils.isFunction)(children) ? children(props) : children));
    });
  };

  return TypeaheadComponent;
}(_react["default"].Component);

(0, _defineProperty2["default"])(TypeaheadComponent, "propTypes", propTypes);
(0, _defineProperty2["default"])(TypeaheadComponent, "defaultProps", defaultProps);

var _default = (0, _react.forwardRef)(function (props, ref) {
  return /*#__PURE__*/_react["default"].createElement(TypeaheadComponent, (0, _extends2["default"])({}, props, {
    instanceRef: ref
  }));
});

exports["default"] = _default;

/***/ }),

/***/ "e56eec0fa4870f94cfc4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _scrollIntoViewIfNeeded = _interopRequireDefault(__webpack_require__("321c2c12bf48fac7fc24"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _Context = __webpack_require__("75f894429043191ab885");

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var propTypes = {
  option: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].string]).isRequired,
  position: _propTypes["default"].number
};

var menuItemContainer = function menuItemContainer(Component) {
  var WrappedMenuItem = /*#__PURE__*/function (_React$Component) {
    (0, _inheritsLoose2["default"])(WrappedMenuItem, _React$Component);

    function WrappedMenuItem() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "itemRef", _react["default"].createRef());
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleClick", function (e) {
        var _this$props = _this.props,
            onMenuItemClick = _this$props.onMenuItemClick,
            option = _this$props.option,
            onClick = _this$props.onClick;
        onMenuItemClick(option, e);
        onClick && onClick(e);
      });
      (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_maybeUpdateItem", function () {
        var _this$props2 = _this.props,
            activeIndex = _this$props2.activeIndex,
            onActiveItemChange = _this$props2.onActiveItemChange,
            onInitialItemChange = _this$props2.onInitialItemChange,
            option = _this$props2.option,
            position = _this$props2.position;

        if (position === 0) {
          onInitialItemChange(option);
        }

        if (position === activeIndex) {
          onActiveItemChange(option); // Automatically scroll the menu as the user keys through it.

          var node = _this.itemRef.current;
          node && (0, _scrollIntoViewIfNeeded["default"])(node, {
            block: 'nearest',
            boundary: node.parentNode,
            inline: 'nearest',
            scrollMode: 'if-needed'
          });
        }
      });
      return _this;
    }

    var _proto = WrappedMenuItem.prototype;

    _proto.componentDidMount = function componentDidMount() {
      this._maybeUpdateItem();
    };

    _proto.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
      this._maybeUpdateItem();
    };

    _proto.render = function render() {
      var _this$props3 = this.props,
          activeIndex = _this$props3.activeIndex,
          id = _this$props3.id,
          isOnlyResult = _this$props3.isOnlyResult,
          label = _this$props3.label,
          onActiveItemChange = _this$props3.onActiveItemChange,
          onInitialItemChange = _this$props3.onInitialItemChange,
          onMenuItemClick = _this$props3.onMenuItemClick,
          option = _this$props3.option,
          position = _this$props3.position,
          setItem = _this$props3.setItem,
          props = (0, _objectWithoutPropertiesLoose2["default"])(_this$props3, ["activeIndex", "id", "isOnlyResult", "label", "onActiveItemChange", "onInitialItemChange", "onMenuItemClick", "option", "position", "setItem"]);
      var active = isOnlyResult || activeIndex === position; // Update the item's position in the item stack.

      setItem(option, position);
      return /*#__PURE__*/_react["default"].createElement(Component, (0, _extends2["default"])({}, props, {
        active: active,
        "aria-label": label,
        "aria-selected": active,
        id: (0, _utils.getMenuItemId)(id, position),
        onClick: this._handleClick,
        onMouseDown: _utils.preventInputBlur,
        ref: this.itemRef,
        role: "option"
      }));
    };

    return WrappedMenuItem;
  }(_react["default"].Component);

  (0, _defineProperty2["default"])(WrappedMenuItem, "displayName", "menuItemContainer(" + (0, _utils.getDisplayName)(Component) + ")");
  (0, _defineProperty2["default"])(WrappedMenuItem, "propTypes", propTypes);
  return (0, _Context.withContext)(WrappedMenuItem, ['activeIndex', 'id', 'isOnlyResult', 'items', 'onActiveItemChange', 'onInitialItemChange', 'onMenuItemClick', 'setItem']);
};

var _default = menuItemContainer;
exports["default"] = _default;

/***/ }),

/***/ "ecd477baddc27ea5b1b0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getInitialState = getInitialState;
exports.clearTypeahead = clearTypeahead;
exports.hideMenu = hideMenu;
exports.toggleMenu = toggleMenu;
exports["default"] = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__("27f61890603953b946f7"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _defineProperty2 = _interopRequireDefault(__webpack_require__("279f1c7ef5f95c5d63e2"));

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _fastDeepEqual = _interopRequireDefault(__webpack_require__("4c61377aa1c7233aedf1"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _TypeaheadManager = _interopRequireDefault(__webpack_require__("d2412f0e1633b651ac62"));

var _propTypes2 = __webpack_require__("bbef3935a5d66d5be430");

var _utils = __webpack_require__("52099a70d0b1a298ae96");

var _constants = __webpack_require__("9c2d75f33016547e31e2");

var propTypes = {
  /**
   * Allows the creation of new selections on the fly. Note that any new items
   * will be added to the list of selections, but not the list of original
   * options unless handled as such by `Typeahead`'s parent.
   *
   * If a function is specified, it will be used to determine whether a custom
   * option should be included. The return value should be true or false.
   */
  allowNew: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].func]),

  /**
   * Autofocus the input when the component initially mounts.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * Whether or not filtering should be case-sensitive.
   */
  caseSensitive: (0, _propTypes2.checkPropType)(_propTypes["default"].bool, _propTypes2.caseSensitiveType),

  /**
   * The initial value displayed in the text input.
   */
  defaultInputValue: (0, _propTypes2.checkPropType)(_propTypes["default"].string, _propTypes2.defaultInputValueType),

  /**
   * Whether or not the menu is displayed upon initial render.
   */
  defaultOpen: _propTypes["default"].bool,

  /**
   * Specify any pre-selected options. Use only if you want the component to
   * be uncontrolled.
   */
  defaultSelected: _propTypes["default"].arrayOf(_propTypes2.optionType),

  /**
   * Either an array of fields in `option` to search, or a custom filtering
   * callback.
   */
  filterBy: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string.isRequired), _propTypes["default"].func]),

  /**
   * Highlights the menu item if there is only one result and allows selecting
   * that item by hitting enter. Does not work with `allowNew`.
   */
  highlightOnlyResult: (0, _propTypes2.checkPropType)(_propTypes["default"].bool, _propTypes2.highlightOnlyResultType),

  /**
   * An html id attribute, required for assistive technologies such as screen
   * readers.
   */
  id: (0, _propTypes2.checkPropType)(_propTypes["default"].oneOfType([_propTypes["default"].number, _propTypes["default"].string]), _propTypes2.isRequiredForA11y),

  /**
   * Whether the filter should ignore accents and other diacritical marks.
   */
  ignoreDiacritics: (0, _propTypes2.checkPropType)(_propTypes["default"].bool, _propTypes2.ignoreDiacriticsType),

  /**
   * Specify the option key to use for display or a function returning the
   * display string. By default, the selector will use the `label` key.
   */
  labelKey: (0, _propTypes2.checkPropType)(_propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]), _propTypes2.labelKeyType),

  /**
   * Maximum number of results to display by default. Mostly done for
   * performance reasons so as not to render too many DOM nodes in the case of
   * large data sets.
   */
  maxResults: _propTypes["default"].number,

  /**
   * Number of input characters that must be entered before showing results.
   */
  minLength: _propTypes["default"].number,

  /**
   * Whether or not multiple selections are allowed.
   */
  multiple: _propTypes["default"].bool,

  /**
   * Invoked when the input is blurred. Receives an event.
   */
  onBlur: _propTypes["default"].func,

  /**
   * Invoked whenever items are added or removed. Receives an array of the
   * selected options.
   */
  onChange: _propTypes["default"].func,

  /**
   * Invoked when the input is focused. Receives an event.
   */
  onFocus: _propTypes["default"].func,

  /**
   * Invoked when the input value changes. Receives the string value of the
   * input.
   */
  onInputChange: _propTypes["default"].func,

  /**
   * Invoked when a key is pressed. Receives an event.
   */
  onKeyDown: _propTypes["default"].func,

  /**
   * Invoked when menu visibility changes.
   */
  onMenuToggle: _propTypes["default"].func,

  /**
   * Invoked when the pagination menu item is clicked. Receives an event.
   */
  onPaginate: _propTypes["default"].func,

  /**
   * Whether or not the menu should be displayed. `undefined` allows the
   * component to control visibility, while `true` and `false` show and hide
   * the menu, respectively.
   */
  open: _propTypes["default"].bool,

  /**
   * Full set of options, including pre-selected options. Must either be an
   * array of objects (recommended) or strings.
   */
  options: _propTypes["default"].arrayOf(_propTypes2.optionType).isRequired,

  /**
   * Give user the ability to display additional results if the number of
   * results exceeds `maxResults`.
   */
  paginate: _propTypes["default"].bool,

  /**
   * The selected option(s) displayed in the input. Use this prop if you want
   * to control the component via its parent.
   */
  selected: (0, _propTypes2.checkPropType)(_propTypes["default"].arrayOf(_propTypes2.optionType), _propTypes2.selectedType),

  /**
   * Allows selecting the hinted result by pressing enter.
   */
  selectHintOnEnter: _propTypes["default"].bool
};
var defaultProps = {
  allowNew: false,
  autoFocus: false,
  caseSensitive: false,
  defaultInputValue: '',
  defaultOpen: false,
  defaultSelected: [],
  filterBy: [],
  highlightOnlyResult: false,
  ignoreDiacritics: true,
  labelKey: _constants.DEFAULT_LABELKEY,
  maxResults: 100,
  minLength: 0,
  multiple: false,
  onBlur: _utils.noop,
  onFocus: _utils.noop,
  onInputChange: _utils.noop,
  onKeyDown: _utils.noop,
  onMenuToggle: _utils.noop,
  onPaginate: _utils.noop,
  paginate: true,
  selectHintOnEnter: false
};

function getInitialState(props) {
  var defaultInputValue = props.defaultInputValue,
      defaultOpen = props.defaultOpen,
      defaultSelected = props.defaultSelected,
      maxResults = props.maxResults,
      multiple = props.multiple;
  var selected = props.selected ? props.selected.slice() : defaultSelected.slice();
  var text = defaultInputValue;

  if (!multiple && selected.length) {
    // Set the text if an initial selection is passed in.
    text = (0, _utils.getOptionLabel)((0, _utils.head)(selected), props.labelKey);

    if (selected.length > 1) {
      // Limit to 1 selection in single-select mode.
      selected = selected.slice(0, 1);
    }
  }

  return {
    activeIndex: -1,
    activeItem: null,
    initialItem: null,
    isFocused: false,
    selected: selected,
    showMenu: defaultOpen,
    shownResults: maxResults,
    text: text
  };
}

function clearTypeahead(state, props) {
  return (0, _extends2["default"])({}, getInitialState(props), {
    isFocused: state.isFocused,
    selected: [],
    text: ''
  });
}

function hideMenu(state, props) {
  var _getInitialState = getInitialState(props),
      activeIndex = _getInitialState.activeIndex,
      activeItem = _getInitialState.activeItem,
      initialItem = _getInitialState.initialItem,
      shownResults = _getInitialState.shownResults;

  return {
    activeIndex: activeIndex,
    activeItem: activeItem,
    initialItem: initialItem,
    showMenu: false,
    shownResults: shownResults
  };
}

function toggleMenu(state, props) {
  return state.showMenu ? hideMenu(state, props) : {
    showMenu: true
  };
}

var Typeahead = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2["default"])(Typeahead, _React$Component);

  function Typeahead() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", getInitialState(_this.props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputNode", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isMenuShown", false);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "items", []);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "blur", function () {
      _this.inputNode && _this.inputNode.blur();

      _this.hideMenu();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clear", function () {
      _this.setState(clearTypeahead);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "focus", function () {
      _this.inputNode && _this.inputNode.focus();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInput", function () {
      return _this.inputNode;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInstance", function () {
      (0, _utils.warn)(false, 'The `getInstance` method is deprecated. You can now access instance ' + 'methods directly on the ref.');
      return (0, _assertThisInitialized2["default"])(_this);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputRef", function (inputNode) {
      _this.inputNode = inputNode;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setItem", function (item, position) {
      _this.items[position] = item;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hideMenu", function () {
      _this.setState(hideMenu);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleMenu", function () {
      _this.setState(toggleMenu);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleActiveIndexChange", function (activeIndex) {
      _this.setState(function (state) {
        return {
          activeIndex: activeIndex,
          activeItem: activeIndex === -1 ? null : state.activeItem
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleActiveItemChange", function (activeItem) {
      // Don't update the active item if it hasn't changed.
      if (!(0, _fastDeepEqual["default"])(activeItem, _this.state.activeItem)) {
        _this.setState({
          activeItem: activeItem
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleBlur", function (e) {
      e.persist();

      _this.setState({
        isFocused: false
      }, function () {
        return _this.props.onBlur(e);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleChange", function (selected) {
      _this.props.onChange && _this.props.onChange(selected);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleClear", function () {
      _this.setState(clearTypeahead, function () {
        return _this._handleChange([]);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleFocus", function (e) {
      e.persist();

      _this.setState({
        isFocused: true,
        showMenu: true
      }, function () {
        return _this.props.onFocus(e);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleInitialItemChange", function (initialItem) {
      // Don't update the initial item if it hasn't changed.
      if (!(0, _fastDeepEqual["default"])(initialItem, _this.state.initialItem)) {
        _this.setState({
          initialItem: initialItem
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleInputChange", function (e) {
      e.persist();
      var text = e.currentTarget.value;
      var _this$props = _this.props,
          multiple = _this$props.multiple,
          onInputChange = _this$props.onInputChange; // Clear selections when the input value changes in single-select mode.

      var shouldClearSelections = _this.state.selected.length && !multiple;

      _this.setState(function (state, props) {
        var _getInitialState2 = getInitialState(props),
            activeIndex = _getInitialState2.activeIndex,
            activeItem = _getInitialState2.activeItem,
            shownResults = _getInitialState2.shownResults;

        return {
          activeIndex: activeIndex,
          activeItem: activeItem,
          selected: shouldClearSelections ? [] : state.selected,
          showMenu: true,
          shownResults: shownResults,
          text: text
        };
      }, function () {
        onInputChange(text, e);
        shouldClearSelections && _this._handleChange([]);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleKeyDown", function (e) {
      var activeItem = _this.state.activeItem; // Skip most actions when the menu is hidden.

      if (!_this.isMenuShown) {
        if (e.keyCode === _constants.UP || e.keyCode === _constants.DOWN) {
          _this.setState({
            showMenu: true
          });
        }

        _this.props.onKeyDown(e);

        return;
      }

      switch (e.keyCode) {
        case _constants.UP:
        case _constants.DOWN:
          // Prevent input cursor from going to the beginning when pressing up.
          e.preventDefault();

          _this._handleActiveIndexChange((0, _utils.getUpdatedActiveIndex)(_this.state.activeIndex, e.keyCode, _this.items));

          break;

        case _constants.RETURN:
          // Prevent form submission while menu is open.
          e.preventDefault();
          activeItem && _this._handleMenuItemSelect(activeItem, e);
          break;

        case _constants.ESC:
        case _constants.TAB:
          // ESC simply hides the menu. TAB will blur the input and move focus to
          // the next item; hide the menu so it doesn't gain focus.
          _this.hideMenu();

          break;

        default:
          break;
      }

      _this.props.onKeyDown(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleMenuItemSelect", function (option, e) {
      if (option.paginationOption) {
        _this._handlePaginate(e);
      } else {
        _this._handleSelectionAdd(option);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handlePaginate", function (e) {
      e.persist();

      _this.setState(function (state, props) {
        return {
          shownResults: state.shownResults + props.maxResults
        };
      }, function () {
        return _this.props.onPaginate(e, _this.state.shownResults);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSelectionAdd", function (option) {
      var _this$props2 = _this.props,
          multiple = _this$props2.multiple,
          labelKey = _this$props2.labelKey;
      var selected;
      var selection = option;
      var text; // Add a unique id to the custom selection. Avoid doing this in `render` so
      // the id doesn't increment every time.

      if (!(0, _utils.isString)(selection) && selection.customOption) {
        selection = (0, _extends2["default"])({}, selection, {
          id: (0, _utils.uniqueId)('new-id-')
        });
      }

      if (multiple) {
        // If multiple selections are allowed, add the new selection to the
        // existing selections.
        selected = _this.state.selected.concat(selection);
        text = '';
      } else {
        // If only a single selection is allowed, replace the existing selection
        // with the new one.
        selected = [selection];
        text = (0, _utils.getOptionLabel)(selection, labelKey);
      }

      _this.setState(function (state, props) {
        return (0, _extends2["default"])({}, hideMenu(state, props), {
          initialItem: selection,
          selected: selected,
          text: text
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "_handleSelectionRemove", function (selection) {
      var selected = _this.state.selected.filter(function (option) {
        return !(0, _fastDeepEqual["default"])(option, selection);
      }); // Make sure the input stays focused after the item is removed.


      _this.focus();

      _this.setState(function (state, props) {
        return (0, _extends2["default"])({}, hideMenu(state, props), {
          selected: selected
        });
      }, function () {
        return _this._handleChange(selected);
      });
    });
    return _this;
  }

  var _proto = Typeahead.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.props.autoFocus && this.focus();
  }
  /* eslint-disable-next-line camelcase */
  ;

  _proto.UNSAFE_componentWillReceiveProps = function UNSAFE_componentWillReceiveProps(nextProps) {
    var labelKey = nextProps.labelKey,
        multiple = nextProps.multiple,
        selected = nextProps.selected;
    (0, _utils.validateSelectedPropChange)(selected, this.props.selected);

    if (multiple !== this.props.multiple) {
      this.setState({
        text: ''
      });
    } // If new selections are passed via props, treat as a controlled input.


    if (selected && !(0, _fastDeepEqual["default"])(selected, this.state.selected)) {
      this.setState({
        selected: selected
      });

      if (multiple) {
        return;
      }

      this.setState({
        text: selected.length ? (0, _utils.getOptionLabel)((0, _utils.head)(selected), labelKey) : ''
      });
    } // Truncate selections when in single-select mode.


    var newSelected = selected || this.state.selected;

    if (!multiple && newSelected.length > 1) {
      newSelected = newSelected.slice(0, 1);
      this.setState({
        selected: newSelected,
        text: (0, _utils.getOptionLabel)((0, _utils.head)(newSelected), labelKey)
      });
    }
  };

  _proto.render = function render() {
    // Omit `onChange` so Flow doesn't complain.
    var _this$props3 = this.props,
        onChange = _this$props3.onChange,
        otherProps = (0, _objectWithoutPropertiesLoose2["default"])(_this$props3, ["onChange"]);
    var mergedPropsAndState = (0, _extends2["default"])({}, otherProps, {}, this.state);
    var filterBy = mergedPropsAndState.filterBy,
        labelKey = mergedPropsAndState.labelKey,
        options = mergedPropsAndState.options,
        paginate = mergedPropsAndState.paginate,
        shownResults = mergedPropsAndState.shownResults,
        text = mergedPropsAndState.text;
    this.isMenuShown = (0, _utils.isShown)(mergedPropsAndState);
    this.items = []; // Reset items on re-render.

    var results = [];

    if (this.isMenuShown) {
      var cb = typeof filterBy === 'function' ? filterBy : _utils.defaultFilterBy;
      results = options.filter(function (option) {
        return cb(option, mergedPropsAndState);
      }); // This must come before results are truncated.

      var shouldPaginate = paginate && results.length > shownResults; // Truncate results if necessary.

      results = (0, _utils.getTruncatedOptions)(results, shownResults); // Add the custom option if necessary.

      if ((0, _utils.addCustomOption)(results, mergedPropsAndState)) {
        var _results$push;

        results.push((_results$push = {
          customOption: true
        }, _results$push[(0, _utils.getStringLabelKey)(labelKey)] = text, _results$push));
      } // Add the pagination item if necessary.


      if (shouldPaginate) {
        var _results$push2;

        results.push((_results$push2 = {}, _results$push2[(0, _utils.getStringLabelKey)(labelKey)] = '', _results$push2.paginationOption = true, _results$push2));
      }
    }

    return /*#__PURE__*/_react["default"].createElement(_TypeaheadManager["default"], (0, _extends2["default"])({}, mergedPropsAndState, {
      hideMenu: this.hideMenu,
      inputNode: this.inputNode,
      inputRef: this.inputRef,
      isMenuShown: this.isMenuShown,
      onActiveItemChange: this._handleActiveItemChange,
      onAdd: this._handleSelectionAdd,
      onBlur: this._handleBlur,
      onChange: this._handleInputChange,
      onClear: this._handleClear,
      onFocus: this._handleFocus,
      onHide: this.hideMenu,
      onInitialItemChange: this._handleInitialItemChange,
      onKeyDown: this._handleKeyDown,
      onMenuItemClick: this._handleMenuItemSelect,
      onRemove: this._handleSelectionRemove,
      results: results,
      setItem: this.setItem,
      toggleMenu: this.toggleMenu
    }));
  };

  return Typeahead;
}(_react["default"].Component);

(0, _defineProperty2["default"])(Typeahead, "propTypes", propTypes);
(0, _defineProperty2["default"])(Typeahead, "defaultProps", defaultProps);
var _default = Typeahead;
exports["default"] = _default;

/***/ }),

/***/ "f139dc630071f0242e1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = warn;
exports.resetWarned = resetWarned;

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var warned = {};
/**
 * Copied from: https://github.com/ReactTraining/react-router/blob/master/modules/routerWarning.js
 */

function warn(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (!falseToWarn && message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning["default"].apply(void 0, [falseToWarn, "[react-bootstrap-typeahead] " + message].concat(args));
}

function resetWarned() {
  warned = {};
}

/***/ }),

/***/ "f19ca3ec5bff59fcd109":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getOptionProperty;

var _nodash = __webpack_require__("9dbdce3fc23b010fa468");

function getOptionProperty(option, key) {
  if ((0, _nodash.isString)(option)) {
    return undefined;
  }

  return option[key];
}

/***/ }),

/***/ "f2637435957acdcec91c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.BaseMenuItem = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _menuItemContainer = _interopRequireDefault(__webpack_require__("e56eec0fa4870f94cfc4"));

var BaseMenuItem = _react["default"].forwardRef(function (_ref, ref) {
  var active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      disabled = _ref.disabled,
      _onClick = _ref.onClick,
      onMouseDown = _ref.onMouseDown,
      props = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["active", "children", "className", "disabled", "onClick", "onMouseDown"]);
  var conditionalClassNames = {
    active: active,
    disabled: disabled
  };
  return (
    /*#__PURE__*/

    /* eslint-disable jsx-a11y/anchor-is-valid */
    _react["default"].createElement("li", (0, _extends2["default"])({}, props, {
      className: (0, _classnames["default"])(conditionalClassNames, className),
      ref: ref
    }), /*#__PURE__*/_react["default"].createElement("a", {
      className: (0, _classnames["default"])('dropdown-item', conditionalClassNames),
      href: "#",
      onClick: function onClick(e) {
        e.preventDefault();
        !disabled && _onClick && _onClick(e);
      },
      onMouseDown: onMouseDown
    }, children))
    /* eslint-enable jsx-a11y/anchor-is-valid */

  );
});

exports.BaseMenuItem = BaseMenuItem;

var _default = (0, _menuItemContainer["default"])(BaseMenuItem);

exports["default"] = _default;

/***/ })

}]); 