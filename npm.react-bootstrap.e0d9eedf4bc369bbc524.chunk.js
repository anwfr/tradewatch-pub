// [AIV_SHORT]  Build version: 1.0.0 - Friday, March 17th, 2023, 9:14:24 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "026fa72aba871a7fa9f3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  fluid: false
};

var Container = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "fluid", "as", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'container');
  var suffix = typeof fluid === 'string' ? "-" + fluid : '-fluid';
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, fluid ? "" + prefix + suffix : prefix)
  }));
});

Container.displayName = 'Container';
Container.defaultProps = defaultProps;
var _default = Container;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "04b48582e102cd179009":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = useWrappedRefWithWarning;

var _invariant = _interopRequireDefault(__webpack_require__("6a4f9c383785f9168266"));

var _react = __webpack_require__("8af190b70a6bc55c6f1b");

var _useMergedRefs = _interopRequireDefault(__webpack_require__("d0c7e0066872e4e40b2c"));

function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (true) return ref; // eslint-disable-next-line react-hooks/rules-of-hooks

  var warningRef = (0, _react.useCallback)(function (refValue) {
    !(refValue == null || !refValue.isReactComponent) ?  false ? undefined : invariant(false) : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return (0, _useMergedRefs.default)(warningRef, ref);
}

module.exports = exports["default"];

/***/ }),

/***/ "06fdc6612000b1e70f3d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.map = map;
exports.forEach = forEach;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */
function map(children, func) {
  var index = 0;
  return _react.default.Children.map(children, function (child) {
    return _react.default.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;

  _react.default.Children.forEach(children, function (child) {
    if (_react.default.isValidElement(child)) func(child, index++);
  });
}

/***/ }),

/***/ "08e418f96a9da050efb6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _activeElement = _interopRequireDefault(__webpack_require__("d8a44e98293fa3bf3b44"));

var _contains = _interopRequireDefault(__webpack_require__("55e81e4240ff2893750e"));

var _canUseDOM = _interopRequireDefault(__webpack_require__("c2f6cf857090a00f2a1f"));

var _listen = _interopRequireDefault(__webpack_require__("2c8c73bb71efe74da7af"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _reactDom = _interopRequireDefault(__webpack_require__("63f14ac74ce296f77f4d"));

var _useMounted = _interopRequireDefault(__webpack_require__("124f44d56065859d227c"));

var _useWillUnmount = _interopRequireDefault(__webpack_require__("41816df7a98d57ea5c0b"));

var _usePrevious = _interopRequireDefault(__webpack_require__("26766f36e18b1fc89f1b"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _ModalManager = _interopRequireDefault(__webpack_require__("0db083887c1a20dde7f2"));

var _useWaitForDOMRef = _interopRequireDefault(__webpack_require__("afa754a59a0cd8ad63fc"));

/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */
var manager;

function getManager() {
  if (!manager) manager = new _ModalManager["default"]();
  return manager;
}

function useModalManager(provided) {
  var modalManager = provided || getManager();
  var modal = (0, _react.useRef)({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: function add(container, className) {
      return modalManager.add(modal.current, container, className);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: (0, _react.useCallback)(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: (0, _react.useCallback)(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  });
}

var Modal = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'dialog' : _ref$role,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      _ref$backdrop = _ref.backdrop,
      backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      onBackdropClick = _ref.onBackdropClick,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      transition = _ref.transition,
      backdropTransition = _ref.backdropTransition,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
      _ref$enforceFocus = _ref.enforceFocus,
      enforceFocus = _ref$enforceFocus === void 0 ? true : _ref$enforceFocus,
      _ref$restoreFocus = _ref.restoreFocus,
      restoreFocus = _ref$restoreFocus === void 0 ? true : _ref$restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      renderDialog = _ref.renderDialog,
      _ref$renderBackdrop = _ref.renderBackdrop,
      renderBackdrop = _ref$renderBackdrop === void 0 ? function (props) {
    return /*#__PURE__*/_react["default"].createElement("div", props);
  } : _ref$renderBackdrop,
      providedManager = _ref.manager,
      containerRef = _ref.container,
      containerClassName = _ref.containerClassName,
      onShow = _ref.onShow,
      _ref$onHide = _ref.onHide,
      onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
      onExit = _ref.onExit,
      onExited = _ref.onExited,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      rest = (0, _objectWithoutPropertiesLoose2["default"])(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);
  var container = (0, _useWaitForDOMRef["default"])(containerRef);
  var modal = useModalManager(providedManager);
  var isMounted = (0, _useMounted["default"])();
  var prevShow = (0, _usePrevious["default"])(show);

  var _useState = (0, _react.useState)(!show),
      exited = _useState[0],
      setExited = _useState[1];

  var lastFocusRef = (0, _react.useRef)(null);
  (0, _react.useImperativeHandle)(ref, function () {
    return modal;
  }, [modal]);

  if (_canUseDOM["default"] && !prevShow && show) {
    lastFocusRef.current = (0, _activeElement["default"])();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  var handleShow = (0, _useEventCallback["default"])(function () {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = (0, _listen["default"])(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = (0, _listen["default"])(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    function () {
      return setTimeout(handleEnforceFocus);
    }, true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      var currentActiveElement = (0, _activeElement["default"])(document);

      if (modal.dialog && currentActiveElement && !(0, _contains["default"])(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  var handleHide = (0, _useEventCallback["default"])(function () {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  (0, _react.useEffect)(function () {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  (0, _react.useEffect)(function () {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  (0, _useWillUnmount["default"])(function () {
    handleHide();
  }); // --------------------------------

  var handleEnforceFocus = (0, _useEventCallback["default"])(function () {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    var currentActiveElement = (0, _activeElement["default"])();

    if (modal.dialog && currentActiveElement && !(0, _contains["default"])(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  var handleBackdropClick = (0, _useEventCallback["default"])(function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  var handleDocumentKeyDown = (0, _useEventCallback["default"])(function (e) {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  var removeFocusListenerRef = (0, _react.useRef)();
  var removeKeydownListenerRef = (0, _react.useRef)();

  var handleHidden = function handleHidden() {
    setExited(true);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onExited == null ? void 0 : onExited.apply(void 0, args);
  };

  var Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  var dialogProps = (0, _extends2["default"])({
    role: role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style: style,
    className: className,
    tabIndex: -1
  });
  var dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/_react["default"].createElement("div", dialogProps, /*#__PURE__*/_react["default"].cloneElement(children, {
    role: 'document'
  }));

  if (Transition) {
    dialog = /*#__PURE__*/_react["default"].createElement(Transition, {
      appear: true,
      unmountOnExit: true,
      "in": !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }

  var backdropElement = null;

  if (backdrop) {
    var BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/_react["default"].createElement(BackdropTransition, {
        appear: true,
        "in": !!show
      }, backdropElement);
    }
  }

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_reactDom["default"].createPortal( /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, backdropElement, dialog), container));
});
var propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: _propTypes["default"].bool,

  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: _propTypes["default"].any,

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: _propTypes["default"].func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: _propTypes["default"].func,

  /**
   * Include a backdrop component.
   */
  backdrop: _propTypes["default"].oneOfType([_propTypes["default"].bool, _propTypes["default"].oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: _propTypes["default"].func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: _propTypes["default"].func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown: _propTypes["default"].func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: _propTypes["default"].func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: _propTypes["default"].string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: _propTypes["default"].bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: _propTypes["default"].elementType,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: _propTypes["default"].elementType,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: _propTypes["default"].bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: _propTypes["default"].bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: _propTypes["default"].bool,

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: _propTypes["default"].shape({
    preventScroll: _propTypes["default"].bool
  }),

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: _propTypes["default"].func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: _propTypes["default"].func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: _propTypes["default"].func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: _propTypes["default"].func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: _propTypes["default"].func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: _propTypes["default"].func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: _propTypes["default"].instanceOf(_ModalManager["default"])
};
Modal.displayName = 'Modal';
Modal.propTypes = propTypes;

var _default = Object.assign(Modal, {
  Manager: _ModalManager["default"]
});

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "08f089f2ae3de5523500":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _default = (0, _createWithBsPrefix.default)('carousel-caption');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "09800db97cfafd52530f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var CarouselItem = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      children = _ref.children,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "children", "className"]);
  var finalClassName = (0, _classnames.default)(className, (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: finalClassName
  }), children);
});

CarouselItem.displayName = 'CarouselItem';
var _default = CarouselItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "09e3cb8c466f0d61a74c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Collapse = _interopRequireDefault(__webpack_require__("1071238d53a57e392963"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _NavbarContext = _interopRequireDefault(__webpack_require__("ffb31eae7b0bff144515"));

var NavbarCollapse = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "bsPrefix"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-collapse');
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Consumer, null, function (context) {
    return /*#__PURE__*/_react.default.createElement(_Collapse.default, (0, _extends2.default)({
      in: !!(context && context.expanded)
    }, props), /*#__PURE__*/_react.default.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});

NavbarCollapse.displayName = 'NavbarCollapse';
var _default = NavbarCollapse;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "0a059c115e29cfe72a82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _TabContext = _interopRequireDefault(__webpack_require__("85686cb433cd9022c6c0"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__("8091d4c30d49f465376d"));

var _Fade = _interopRequireDefault(__webpack_require__("286777336e103589e6e9"));

function useTabContext(props) {
  var context = (0, _react.useContext)(_TabContext.default);
  if (!context) return props;
  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = (0, _objectWithoutPropertiesLoose2.default)(context, ["activeKey", "getControlledId", "getControllerId"]);
  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = (0, _SelectableContext.makeEventKey)(props.eventKey);
  return (0, _extends2.default)({}, props, {
    active: props.active == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || _Fade.default),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPane = _react.default.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      bsPrefix = _useTabContext.bsPrefix,
      className = _useTabContext.className,
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      Transition = _useTabContext.transition,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_useTabContext, ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tab-pane');
  if (!active && !Transition && unmountOnExit) return null;

  var pane = /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    role: "tabpanel",
    "aria-hidden": !active,
    className: (0, _classnames.default)(className, prefix, {
      active: active
    })
  }));

  if (Transition) pane = /*#__PURE__*/_react.default.createElement(Transition, {
    in: active,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/_react.default.createElement(_TabContext.default.Provider, {
    value: null
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: null
  }, pane));
});

TabPane.displayName = 'TabPane';
var _default = TabPane;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "0b21a2f378feddbf1783":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _AbstractNav = _interopRequireDefault(__webpack_require__("2282326ec9969f3c7ffe"));

var _ListGroupItem = _interopRequireDefault(__webpack_require__("3c9e0eef86623bfc9c44"));

var defaultProps = {
  variant: undefined,
  horizontal: undefined
};

var ListGroup = _react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      className = _useUncontrolled.className,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      horizontal = _useUncontrolled.horizontal,
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["className", "bsPrefix", "variant", "horizontal", "as"]);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'list-group');
  var horizontalVariant;

  if (horizontal) {
    horizontalVariant = horizontal === true ? 'horizontal' : "horizontal-" + horizontal;
  } else {
    horizontalVariant = null;
  }

   false ? undefined : void 0;
  return /*#__PURE__*/_react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    as: as,
    className: (0, _classnames.default)(className, bsPrefix, variant && bsPrefix + "-" + variant, horizontalVariant && bsPrefix + "-" + horizontalVariant)
  }));
});

ListGroup.defaultProps = defaultProps;
ListGroup.displayName = 'ListGroup';
ListGroup.Item = _ListGroupItem.default;
var _default = ListGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "0cea0e08f7620dad1133":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _default = function _default(className) {
  return _react.default.forwardRef(function (p, ref) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, p, {
      ref: ref,
      className: (0, _classnames.default)(p.className, className)
    }));
  });
};

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "0db083887c1a20dde7f2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _addClass = _interopRequireDefault(__webpack_require__("442a938a1deb7b295738"));

var _removeClass = _interopRequireDefault(__webpack_require__("fd23ab03a1691ca81318"));

var _css = _interopRequireDefault(__webpack_require__("1b43b4f548a0c483d331"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__("967ef5cd753367ae6601"));

var _isOverflowing = _interopRequireDefault(__webpack_require__("9b4dca59bf37c4e0ccc7"));

var _manageAriaHidden = __webpack_require__("8224cf6ab6360fa858ac");

function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }

    return false;
  });
  return idx;
}

/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */
var ModalManager = /*#__PURE__*/function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

    this.hideSiblingNodes = void 0;
    this.handleContainerOverflow = void 0;
    this.modals = void 0;
    this.containers = void 0;
    this.data = void 0;
    this.scrollbarSize = void 0;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = (0, _scrollbarSize["default"])();
  }

  var _proto = ModalManager.prototype;

  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };

  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt((0, _css["default"])(container, 'paddingRight') || '0', 10) + this.scrollbarSize + "px";
    }

    (0, _css["default"])(container, style);
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    Object.assign(container.style, containerState.style);
  };

  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      (0, _manageAriaHidden.hideSiblings)(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: (0, _isOverflowing["default"])(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(_addClass["default"].bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(_removeClass["default"].bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        (0, _manageAriaHidden.showSiblings)(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      // otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
          backdrop = _data$modals.backdrop,
          dialog = _data$modals.dialog;
      (0, _manageAriaHidden.ariaHidden)(false, dialog);
      (0, _manageAriaHidden.ariaHidden)(false, backdrop);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

var _default = ModalManager;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "1071238d53a57e392963":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _css = _interopRequireDefault(__webpack_require__("1b43b4f548a0c483d331"));

var _transitionEnd = _interopRequireDefault(__webpack_require__("3e61108919ae44da8e53"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Transition = _interopRequireWildcard(__webpack_require__("5f91333870c355d2b6da"));

var _createChainedFunction = _interopRequireDefault(__webpack_require__("a4ff8f03a4755a589ed2"));

var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__("7a010f9aa2c4e96b972e"));

var _collapseStyles;

var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt((0, _css.default)(elem, margins[0]), 10) + // @ts-ignore
  parseInt((0, _css.default)(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[_Transition.EXITED] = 'collapse', _collapseStyles[_Transition.EXITING] = 'collapsing', _collapseStyles[_Transition.ENTERING] = 'collapsing', _collapseStyles[_Transition.ENTERED] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};

var Collapse = _react.default.forwardRef(function (_ref, ref) {
  var onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      className = _ref.className,
      children = _ref.children,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 'height' : _ref$dimension,
      _ref$getDimensionValu = _ref.getDimensionValue,
      getDimensionValue = _ref$getDimensionValu === void 0 ? getDefaultDimensionValue : _ref$getDimensionValu,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"]);

  /* Compute dimension */
  var computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  var handleEnter = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = '0';
    }, onEnter);
  }, [computedDimension, onEnter]);
  var handleEntering = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      var scroll = "scroll" + computedDimension[0].toUpperCase() + computedDimension.slice(1);
      elem.style[computedDimension] = elem[scroll] + "px";
    }, onEntering);
  }, [computedDimension, onEntering]);
  var handleEntered = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = null;
    }, onEntered);
  }, [computedDimension, onEntered]);
  /* -- Collapsing -- */

  var handleExit = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = getDimensionValue(computedDimension, elem) + "px";
      (0, _triggerBrowserReflow.default)(elem);
    }, onExit);
  }, [onExit, getDimensionValue, computedDimension]);
  var handleExiting = (0, _react.useMemo)(function () {
    return (0, _createChainedFunction.default)(function (elem) {
      elem.style[computedDimension] = null;
    }, onExiting);
  }, [computedDimension, onExiting]);
  return /*#__PURE__*/_react.default.createElement(_Transition.default // @ts-ignore
  , (0, _extends2.default)({
    ref: ref,
    addEndListener: _transitionEnd.default
  }, props, {
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting
  }), function (state, innerProps) {
    return _react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
      className: (0, _classnames.default)(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'width')
    }));
  });
}); // @ts-ignore


// @ts-ignore
Collapse.defaultProps = defaultProps;
var _default = Collapse;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "10fa21b44717d82288e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = createWithBsPrefix;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _camelize = _interopRequireDefault(__webpack_require__("29c9401d02b1d3ec0c97"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + (0, _camelize.default)(str).slice(1);
};

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      Component = _ref.Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = _react.default.forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component || 'div' : _ref2$as,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["className", "bsPrefix", "as"]);
    var resolvedPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, prefix);
    return /*#__PURE__*/_react.default.createElement(Tag, (0, _extends2.default)({
      ref: ref,
      className: (0, _classnames.default)(className, resolvedPrefix)
    }, props));
  });

  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

module.exports = exports["default"];

/***/ }),

/***/ "1415969cf531928cc37f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _Dropdown = _interopRequireDefault(__webpack_require__("e3144497092950c6bb2f"));

var _DropdownToggle = _interopRequireDefault(__webpack_require__("d06396b6ecc5f398cc0c"));

var _DropdownMenu = _interopRequireWildcard(__webpack_require__("e4875d417913942d157b"));

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /** An `href` passed to the Toggle component */
  href: _propTypes.default.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** Disables both Buttons  */
  disabled: _propTypes.default.bool,

  /**
   * Aligns the dropdown menu responsively.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"left"|"right"|{ sm: "left"|"right" }|{ md: "left"|"right" }|{ lg: "left"|"right" }|{ xl: "left"|"right"} }
   */
  menuAlign: _DropdownMenu.alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: _propTypes.default.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string,

  /** @ignore */
  variant: _propTypes.default.string,

  /** @ignore */
  size: _propTypes.default.string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`.
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu related props are passed to the `Dropdown.Menu`
 */

var DropdownButton = _react.default.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      variant = _ref.variant,
      size = _ref.size,
      menuAlign = _ref.menuAlign,
      menuRole = _ref.menuRole,
      renderMenuOnMount = _ref.renderMenuOnMount,
      disabled = _ref.disabled,
      href = _ref.href,
      id = _ref.id,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuAlign", "menuRole", "renderMenuOnMount", "disabled", "href", "id"]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement(_DropdownToggle.default, {
    id: id,
    href: href,
    size: size,
    variant: variant,
    disabled: disabled,
    childBsPrefix: bsPrefix
  }, title), /*#__PURE__*/_react.default.createElement(_DropdownMenu.default, {
    align: menuAlign,
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});

DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = propTypes;
var _default = DropdownButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "16ccf52d91a9ffc07cb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _Col = _interopRequireDefault(__webpack_require__("1f61575e8c12ef7ccb9f"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  column: false,
  srOnly: false
};

var FormLabel = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'label' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-label');
  var columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = columnClass + " " + columnClass + "-" + column;
  var classes = (0, _classnames.default)(className, bsPrefix, srOnly && 'sr-only', column && columnClass);
   false ? undefined : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/_react.default.createElement(_Col.default, (0, _extends2.default)({
    as: "label",
    className: classes,
    htmlFor: htmlFor
  }, props));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    _react.default.createElement(Component, (0, _extends2.default)({
      ref: ref,
      className: classes,
      htmlFor: htmlFor
    }, props))
  );
});

FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
var _default = FormLabel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "18c755cab954b2563001":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var PopoverTitle = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover-header');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(bsPrefix, className)
  }), children);
});

var _default = PopoverTitle;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "1d7da1db508b95e50e80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', { value: true });

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

// Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.
function getLayoutRect(element) {
  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: element.offsetWidth,
    height: element.offsetHeight
  };
}

/*:: import type { Window } from '../types'; */

/*:: declare function getWindow(node: Node | Window): Window; */
function getWindow(node) {
  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/*:: declare function isElement(node: mixed): boolean %checks(node instanceof
  Element); */

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}
/*:: declare function isHTMLElement(node: mixed): boolean %checks(node instanceof
  HTMLElement); */


function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}
/*:: declare function isShadowRoot(node: mixed): boolean %checks(node instanceof
  ShadowRoot); */


function isShadowRoot(node) {
  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getComputedStyle(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe: assume body is always available
  return ((isElement(element) ? element.ownerDocument : element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// $FlowFixMe: this is a quicker (but less type safe) way to save quite some bytes from the bundle
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || // DOM Element detected
    // $FlowFixMe: need a better way to handle this...
    element.host || // ShadowRoot detected
    // $FlowFixMe: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle(element).position === 'fixed') {
    return null;
  }

  var offsetParent = element.offsetParent;

  if (offsetParent) {
    var html = getDocumentElement(offsetParent);

    if (getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static' && getComputedStyle(html).position !== 'static') {
      return html;
    }
  }

  return offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.

    if (css.transform !== 'none' || css.perspective !== 'none' || css.willChange && css.willChange !== 'auto') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && getNodeName(offsetParent) === 'body' && getComputedStyle(offsetParent).position === 'static') {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

function within(min, value, max) {
  return Math.max(min, Math.min(value, max));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign(Object.assign({}, getFreshSideObject()), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = state.modifiersData[name + "#persistent"].padding;
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element,
      _options$padding = options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (false) {}

  if (!contains(state.elements.popper, arrowElement)) {
    if (false) {}

    return;
  }

  state.elements.arrow = arrowElement;
  state.modifiersData[name + "#persistent"] = {
    padding: mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements))
  };
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsets(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: Math.round(x * dpr) / dpr || 0,
    y: Math.round(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive;

  var _roundOffsets = roundOffsets(offsets),
      x = _roundOffsets.x,
      y = _roundOffsets.y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);
    } // $FlowFixMe: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it

    /*:: offsetParent = (offsetParent: Element); */


    if (placement === top) {
      sideY = bottom;
      y -= offsetParent.clientHeight - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right;
      x -= offsetParent.clientWidth - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign(Object.assign({}, commonStyles), {}, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref3) {
  var state = _ref3.state,
      options = _ref3.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive;

  if (false) { var transitionProperty; }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign(Object.assign({}, state.styles.popper), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign(Object.assign({}, state.styles.arrow), mapToStyles(Object.assign(Object.assign({}, commonStyles), {}, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false
    })));
  }

  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect$1(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect$1,
  data: {}
};

var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

var hash$1 = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash$1[matched];
  });
}

function getBoundingClientRect(element) {
  var rect = element.getBoundingClientRect();
  return {
    width: rect.width,
    height: rect.height,
    top: rect.top,
    right: rect.right,
    bottom: rect.bottom,
    left: rect.left,
    x: rect.left,
    y: rect.top
  };
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = element.ownerDocument.body;
  var width = Math.max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = Math.max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle(body || html).direction === 'rtl') {
    x += Math.max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the 
reference element's position.
*/

function listScrollParents(element, list) {
  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = getNodeName(scrollParent) === 'body';
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign(Object.assign({}, rect), {}, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = Math.max(rect.top, accRect.top);
    accRect.right = Math.min(rect.right, accRect.right);
    accRect.bottom = Math.min(rect.bottom, accRect.bottom);
    accRect.left = Math.max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) - Math.floor(reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = Math.floor(offsets[mainAxis]) + Math.ceil(reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign(Object.assign({}, popperRect), popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/*:: type OverflowsMap = { [ComputedPlacement]: number }; */

/*;; type OverflowsMap = { [key in ComputedPlacement]: number }; */
function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements; // $FlowFixMe

  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (false) {}
  } // $FlowFixMe: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign(Object.assign({}, state.attributes.popper), {}, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign(Object.assign({}, rects), {}, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign(Object.assign({}, state.rects), {}, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = popperOffsets[mainAxis] + overflow[mainSide];
    var max = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;
    var preventedOffset = within(tether ? Math.min(min, tetherMin) : min, offset, tether ? Math.max(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _mainSide = mainAxis === 'x' ? top : left;

    var _altSide = mainAxis === 'x' ? bottom : right;

    var _offset = popperOffsets[altAxis];

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var _preventedOffset = within(_min, _offset, _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

// Composite means it takes into account transforms as well as layout.

function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement);
  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign(Object.assign(Object.assign({}, existing), current), {}, {
      options: Object.assign(Object.assign({}, existing.options), current.options),
      data: Object.assign(Object.assign({}, existing.data), current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign(Object.assign({}, DEFAULT_OPTIONS), defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign(Object.assign(Object.assign({}, defaultOptions), state.options), options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (false) { var _getComputedStyle, marginTop, marginRight, marginBottom, marginLeft, flipModifier, modifiers; }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (false) {}

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (false) {}

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (false) {}

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

// For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment
const createPopper = popperGenerator({
  defaultModifiers: [
    hide$1,
    popperOffsets$1,
    computeStyles$1,
    eventListeners,
    offset$1,
    flip$1,
    preventOverflow$1,
    arrow$1,
  ],
});

exports.createPopper = createPopper;
exports.placements = placements;


/***/ }),

/***/ "1e0de56188c6a20f36d9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _all = _interopRequireDefault(__webpack_require__("dcd51803e40d5a652bc0"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _Feedback = _interopRequireDefault(__webpack_require__("637ce0e86e321ecdd9fe"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormControl = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      type = _ref.type,
      size = _ref.size,
      htmlSize = _ref.htmlSize,
      id = _ref.id,
      className = _ref.className,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      custom = _ref.custom,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-control'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else if (type === 'range') {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix + "-range"] = true, _classes3);
  } else if (Component === 'select' && custom) {
    var _classes4;

    classes = (_classes4 = {}, _classes4[bsPrefix + "-select"] = true, _classes4[bsPrefix + "-select-" + size] = size, _classes4);
  } else {
    var _classes5;

    classes = (_classes5 = {}, _classes5[bsPrefix] = true, _classes5[bsPrefix + "-" + size] = size, _classes5);
  }

   false ? undefined : void 0;
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: (0, _classnames.default)(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});

FormControl.displayName = 'FormControl';

var _default = Object.assign(FormControl, {
  Feedback: _Feedback.default
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "1f61575e8c12ef7ccb9f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];

var Col = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: _classnames.default.apply(void 0, [className].concat(spans, classes))
  }));
});

Col.displayName = 'Col';
var _default = Col;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "202d903a0e43824101d7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.useAccordionToggle = useAccordionToggle;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _SelectableContext = _interopRequireDefault(__webpack_require__("8091d4c30d49f465376d"));

var _AccordionContext = _interopRequireDefault(__webpack_require__("c2943968f56ce09054de"));

function useAccordionToggle(eventKey, onClick) {
  var contextEventKey = (0, _react.useContext)(_AccordionContext.default);
  var onSelect = (0, _react.useContext)(_SelectableContext.default);
  return function (e) {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    var eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}

var AccordionToggle = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "children", "eventKey", "onClick"]);
  var accordionOnClick = useAccordionToggle(eventKey, onClick);

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    onClick: accordionOnClick
  }, props), children);
});

var _default = AccordionToggle;
exports.default = _default;

/***/ }),

/***/ "2282326ec9969f3c7ffe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__("04d6e2d4983bf78bb6b9"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useForceUpdate = _interopRequireDefault(__webpack_require__("347719c90dbf0e10a5d9"));

var _useMergedRefs = _interopRequireDefault(__webpack_require__("d0c7e0066872e4e40b2c"));

var _NavContext = _interopRequireDefault(__webpack_require__("ba59d313afd15c5c668b"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__("8091d4c30d49f465376d"));

var _TabContext = _interopRequireDefault(__webpack_require__("85686cb433cd9022c6c0"));

// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function noop() {};

var AbstractNav = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'ul' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "onSelect", "activeKey", "role", "onKeyDown"]);
  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  var forceUpdate = (0, _useForceUpdate.default)();
  var needsRefocusRef = (0, _react.useRef)(false);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var tabContext = (0, _react.useContext)(_TabContext.default);
  var getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var listNode = (0, _react.useRef)(null);

  var getNextActiveChild = function getNextActiveChild(offset) {
    var currentListNode = listNode.current;
    if (!currentListNode) return null;
    var items = (0, _querySelectorAll.default)(currentListNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = currentListNode.querySelector('.active');
    if (!activeChild) return null;
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) onKeyDown(event);
    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  (0, _react.useEffect)(function () {
    if (listNode.current && needsRefocusRef.current) {
      var activeChild = listNode.current.querySelector('[data-rb-event-key].active');
      if (activeChild) activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  var mergedRef = (0, _useMergedRefs.default)(ref, listNode);
  return /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleSelect
  }, /*#__PURE__*/_react.default.createElement(_NavContext.default.Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: (0, _SelectableContext.makeEventKey)(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});

var _default = AbstractNav;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "22d6d5fb9c90c1dcf698":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var PopoverContent = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "bsPrefix", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover-body');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children);
});

var _default = PopoverContent;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "233051de8eb669d67289":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var DropdownContext = /*#__PURE__*/_react["default"].createContext(null);

var _default = DropdownContext;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "247799f4d48bc96b8aab":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var TabContent = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "as", "className"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tab-content');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, decoratedBsPrefix)
  }));
});

var _default = TabContent;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "286777336e103589e6e9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _transitionEnd = _interopRequireDefault(__webpack_require__("3e61108919ae44da8e53"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Transition = _interopRequireWildcard(__webpack_require__("5f91333870c355d2b6da"));

var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__("7a010f9aa2c4e96b972e"));

var _fadeStyles;

var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[_Transition.ENTERING] = 'show', _fadeStyles[_Transition.ENTERED] = 'show', _fadeStyles);

var Fade = _react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["className", "children"]);
  var handleEnter = (0, _react.useCallback)(function (node) {
    (0, _triggerBrowserReflow.default)(node);
    if (props.onEnter) props.onEnter(node);
  }, [props]);
  return /*#__PURE__*/_react.default.createElement(_Transition.default, (0, _extends2.default)({
    ref: ref,
    addEndListener: _transitionEnd.default
  }, props, {
    onEnter: handleEnter
  }), function (status, innerProps) {
    return _react.default.cloneElement(children, (0, _extends2.default)({}, innerProps, {
      className: (0, _classnames.default)('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});

Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
var _default = Fade;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "2abe74b091530301b9b6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _divWithClassName = _interopRequireDefault(__webpack_require__("0cea0e08f7620dad1133"));

var _CardContext = _interopRequireDefault(__webpack_require__("aa05138f193f25f491b7"));

var _CardImg = _interopRequireDefault(__webpack_require__("c7f37bf2bf1f3c83c044"));

var DivStyledAsH5 = (0, _divWithClassName.default)('h5');
var DivStyledAsH6 = (0, _divWithClassName.default)('h6');
var CardBody = (0, _createWithBsPrefix.default)('card-body');
var CardTitle = (0, _createWithBsPrefix.default)('card-title', {
  Component: DivStyledAsH5
});
var CardSubtitle = (0, _createWithBsPrefix.default)('card-subtitle', {
  Component: DivStyledAsH6
});
var CardLink = (0, _createWithBsPrefix.default)('card-link', {
  Component: 'a'
});
var CardText = (0, _createWithBsPrefix.default)('card-text', {
  Component: 'p'
});
var CardHeader = (0, _createWithBsPrefix.default)('card-header');
var CardFooter = (0, _createWithBsPrefix.default)('card-footer');
var CardImgOverlay = (0, _createWithBsPrefix.default)('card-img-overlay');
var defaultProps = {
  body: false
};

var Card = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card');
  var cardContext = (0, _react.useMemo)(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return /*#__PURE__*/_react.default.createElement(_CardContext.default.Provider, {
    value: cardContext
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ?
  /*#__PURE__*/
  // @ts-ignore
  _react.default.createElement(CardBody, null, children) : children));
});

Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = _CardImg.default;
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Text = CardText;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.ImgOverlay = CardImgOverlay;
var _default = Card;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "2ed07e30d87c4c4d3d59":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _CloseButton = _interopRequireDefault(__webpack_require__("acc61bc9e1ebe5d11576"));

var _ModalContext = _interopRequireDefault(__webpack_require__("b965a6a3307db3d4af80"));

var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};

var ModalHeader = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal-header');
  var context = (0, _react.useContext)(_ModalContext.default);
  var handleClick = (0, _useEventCallback.default)(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children, closeButton && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    label: closeLabel,
    onClick: handleClick
  }));
});

ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
var _default = ModalHeader;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "2f1c150dbf4475e58de7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var FigureCaption = (0, _createWithBsPrefix.default)('figure-caption', {
  Component: 'figcaption'
});
var _default = FigureCaption;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "2f47003c31e4fb470962":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _matches = _interopRequireDefault(__webpack_require__("689f9d6580ab1b341a70"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__("04d6e2d4983bf78bb6b9"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _usePrevious = _interopRequireDefault(__webpack_require__("26766f36e18b1fc89f1b"));

var _useCallbackRef2 = _interopRequireDefault(__webpack_require__("de2dc95fecbd64da4ffb"));

var _useForceUpdate = _interopRequireDefault(__webpack_require__("347719c90dbf0e10a5d9"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _DropdownContext = _interopRequireDefault(__webpack_require__("233051de8eb669d67289"));

var _DropdownMenu = _interopRequireDefault(__webpack_require__("bf2ff2ee7a4b3618c781"));

var _DropdownToggle = _interopRequireDefault(__webpack_require__("83906f29cc4ff0d5ac1b"));

var propTypes = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: _propTypes["default"].oneOf(['up', 'left', 'right', 'down']),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: _propTypes["default"].oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: _propTypes["default"].string,

  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: _propTypes["default"].bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: _propTypes["default"].bool,

  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: _propTypes["default"].bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: _propTypes["default"].func
};

/**
 * @displayName Dropdown
 */
function Dropdown(_ref) {
  var drop = _ref.drop,
      alignEnd = _ref.alignEnd,
      defaultShow = _ref.defaultShow,
      rawShow = _ref.show,
      rawOnToggle = _ref.onToggle,
      _ref$itemSelector = _ref.itemSelector,
      itemSelector = _ref$itemSelector === void 0 ? '* > *' : _ref$itemSelector,
      focusFirstItemOnShow = _ref.focusFirstItemOnShow,
      children = _ref.children;
  var forceUpdate = (0, _useForceUpdate["default"])();

  var _useUncontrolledProp = (0, _uncontrollable.useUncontrolledProp)(rawShow, defaultShow, rawOnToggle),
      show = _useUncontrolledProp[0],
      onToggle = _useUncontrolledProp[1];

  var _useCallbackRef = (0, _useCallbackRef2["default"])(),
      toggleElement = _useCallbackRef[0],
      setToggle = _useCallbackRef[1]; // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set


  var menuRef = (0, _react.useRef)(null);
  var menuElement = menuRef.current;
  var setMenu = (0, _react.useCallback)(function (ref) {
    menuRef.current = ref; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  var lastShow = (0, _usePrevious["default"])(show);
  var lastSourceEvent = (0, _react.useRef)(null);
  var focusInDropdown = (0, _react.useRef)(false);
  var toggle = (0, _react.useCallback)(function (event) {
    onToggle(!show, event);
  }, [onToggle, show]);
  var context = (0, _react.useMemo)(function () {
    return {
      toggle: toggle,
      drop: drop,
      show: show,
      alignEnd: alignEnd,
      menuElement: menuElement,
      toggleElement: toggleElement,
      setMenu: setMenu,
      setToggle: setToggle
    };
  }, [toggle, drop, show, alignEnd, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  var focusToggle = (0, _useEventCallback["default"])(function () {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  var maybeFocusFirst = (0, _useEventCallback["default"])(function () {
    var type = lastSourceEvent.current;
    var focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && (0, _matches["default"])(menuRef.current, '[role=menu]') ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    var first = (0, _querySelectorAll["default"])(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  (0, _react.useEffect)(function () {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  (0, _react.useEffect)(function () {
    lastSourceEvent.current = null;
  });

  var getNextFocusedChild = function getNextFocusedChild(current, offset) {
    if (!menuRef.current) return null;
    var items = (0, _querySelectorAll["default"])(menuRef.current, itemSelector);
    var index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  var handleKeyDown = function handleKeyDown(event) {
    var key = event.key;
    var target = event.target; // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    var isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && menuRef.current && menuRef.current.contains(target))) {
      return;
    }

    lastSourceEvent.current = event.type;

    switch (key) {
      case 'ArrowUp':
        {
          var next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          toggle(event);
        } else {
          var _next = getNextFocusedChild(target, 1);

          if (_next && _next.focus) _next.focus();
        }

        return;

      case 'Escape':
      case 'Tab':
        onToggle(false, event);
        break;

      default:
    }
  };

  return /*#__PURE__*/_react["default"].createElement(_DropdownContext["default"].Provider, {
    value: context
  }, children({
    props: {
      onKeyDown: handleKeyDown
    }
  }));
}

Dropdown.displayName = 'ReactOverlaysDropdown';
Dropdown.propTypes = propTypes;
Dropdown.Menu = _DropdownMenu["default"];
Dropdown.Toggle = _DropdownToggle["default"];
var _default = Dropdown;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "3bf77fa27aeae955e236":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__("8091d4c30d49f465376d"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _NavContext = _interopRequireDefault(__webpack_require__("ba59d313afd15c5c668b"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

var defaultProps = {
  as: _SafeAnchor.default,
  disabled: false
};

var DropdownItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      eventKey = _ref.eventKey,
      disabled = _ref.disabled,
      href = _ref.href,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      propActive = _ref.active,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-item');
  var onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey; // TODO: Restrict eventKey to string in v5?


  var key = (0, _SelectableContext.makeEventKey)(eventKey, href);
  var active = propActive == null && key != null ? (0, _SelectableContext.makeEventKey)(activeKey) === key : propActive;
  var handleClick = (0, _useEventCallback.default)(function (event) {
    // SafeAnchor handles the disabled case, but we handle it here
    // for other components
    if (disabled) return;
    if (onClick) onClick(event);
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
  });
  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    _react.default.createElement(Component, (0, _extends2.default)({}, props, {
      ref: ref,
      href: href,
      disabled: disabled,
      className: (0, _classnames.default)(className, prefix, active && 'active', disabled && 'disabled'),
      onClick: handleClick
    }), children)
  );
});

DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps;
var _default = DropdownItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "3c9e0eef86623bfc9c44":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _AbstractNavItem = _interopRequireDefault(__webpack_require__("e89a55f8a1933b8494ff"));

var _SelectableContext = __webpack_require__("8091d4c30d49f465376d");

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  variant: undefined,
  active: false,
  disabled: false
};

var ListGroupItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "eventKey", "onClick"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'list-group-item');
  var handleClick = (0, _react.useCallback)(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);
  return /*#__PURE__*/_react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    // TODO: Restrict eventKey to string in v5?
    eventKey: (0, _SelectableContext.makeEventKey)(eventKey, props.href) // eslint-disable-next-line no-nested-ternary
    ,
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: (0, _classnames.default)(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});

ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
var _default = ListGroupItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "3cbc255c4bdba3b881bb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__("1a5666701cabb0ba5667"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _PopoverTitle = _interopRequireDefault(__webpack_require__("18c755cab954b2563001"));

var _PopoverContent = _interopRequireDefault(__webpack_require__("22d6d5fb9c90c1dcf698"));

var defaultProps = {
  placement: 'right'
};

var Popover = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      content = _ref.content,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _1 = _ref.show,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "placement", "className", "style", "children", "content", "arrowProps", "popper", "show"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'popover');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, decoratedBsPrefix, primaryPlacement && "bs-popover-" + primaryPlacement)
  }, props), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), content ? /*#__PURE__*/_react.default.createElement(_PopoverContent.default, null, children) : children);
});

Popover.defaultProps = defaultProps;
Popover.Title = _PopoverTitle.default;
Popover.Content = _PopoverContent.default;
var _default = Popover;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "3e11203087780e4bc126":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _Fade = _interopRequireDefault(__webpack_require__("286777336e103589e6e9"));

var _CloseButton = _interopRequireDefault(__webpack_require__("acc61bc9e1ebe5d11576"));

var _divWithClassName = _interopRequireDefault(__webpack_require__("0cea0e08f7620dad1133"));

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
var AlertHeading = (0, _createWithBsPrefix.default)('alert-heading', {
  Component: DivStyledAsH4
});
var AlertLink = (0, _createWithBsPrefix.default)('alert-link', {
  Component: _SafeAnchor.default
});
var defaultProps = {
  show: true,
  transition: _Fade.default,
  closeLabel: 'Close alert'
};

var Alert = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    show: 'onClose'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      show = _useUncontrolled.show,
      closeLabel = _useUncontrolled.closeLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      variant = _useUncontrolled.variant,
      onClose = _useUncontrolled.onClose,
      dismissible = _useUncontrolled.dismissible,
      transition = _useUncontrolled.transition,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'alert');
  var handleClose = (0, _useEventCallback.default)(function (e) {
    if (onClose) {
      onClose(false, e);
    }
  });
  var Transition = transition === true ? _Fade.default : transition;

  var alert = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    role: "alert"
  }, Transition ? props : undefined, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    onClick: handleClose,
    label: closeLabel
  }), children);

  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/_react.default.createElement(Transition, (0, _extends2.default)({
    unmountOnExit: true
  }, props, {
    ref: undefined,
    in: show
  }), alert);
});

Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Link = AlertLink;
Alert.Heading = AlertHeading;
var _default = Alert;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "3f8a7a9a0f510812aa39":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var Table = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      striped = _ref.striped,
      bordered = _ref.bordered,
      borderless = _ref.borderless,
      hover = _ref.hover,
      size = _ref.size,
      variant = _ref.variant,
      responsive = _ref.responsive,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'table');
  var classes = (0, _classnames.default)(className, decoratedBsPrefix, variant && decoratedBsPrefix + "-" + variant, size && decoratedBsPrefix + "-" + size, striped && decoratedBsPrefix + "-striped", bordered && decoratedBsPrefix + "-bordered", borderless && decoratedBsPrefix + "-borderless", hover && decoratedBsPrefix + "-hover");

  var table = /*#__PURE__*/_react.default.createElement("table", (0, _extends2.default)({}, props, {
    className: classes,
    ref: ref
  }));

  if (responsive) {
    var responsiveClass = decoratedBsPrefix + "-responsive";

    if (typeof responsive === 'string') {
      responsiveClass = responsiveClass + "-" + responsive;
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: responsiveClass
    }, table);
  }

  return table;
});

var _default = Table;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "460fdd20e48be06f53ff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _useTimeout = _interopRequireDefault(__webpack_require__("dc8d440d4d2f0a35a67a"));

var _Fade = _interopRequireDefault(__webpack_require__("286777336e103589e6e9"));

var _ToastHeader = _interopRequireDefault(__webpack_require__("76f3c7e4879738d31a35"));

var _ToastBody = _interopRequireDefault(__webpack_require__("762d2ccb254685fa018b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _ToastContext = _interopRequireDefault(__webpack_require__("54af5bfd6eb4638321c6"));

var Toast = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$transition = _ref.transition,
      Transition = _ref$transition === void 0 ? _Fade.default : _ref$transition,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? true : _ref$animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 3000 : _ref$delay,
      _ref$autohide = _ref.autohide,
      autohide = _ref$autohide === void 0 ? false : _ref$autohide,
      onClose = _ref.onClose,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "transition", "show", "animation", "delay", "autohide", "onClose"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  var delayRef = (0, _react.useRef)(delay);
  var onCloseRef = (0, _react.useRef)(onClose);
  (0, _react.useEffect)(function () {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  var autohideTimeout = (0, _useTimeout.default)();
  var autohideToast = !!(autohide && show);
  var autohideFunc = (0, _react.useCallback)(function () {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  (0, _react.useEffect)(function () {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  var toastContext = (0, _react.useMemo)(function () {
    return {
      onClose: onClose
    };
  }, [onClose]);
  var hasAnimation = !!(Transition && animation);

  var toast = /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(bsPrefix, className, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }), children);

  return /*#__PURE__*/_react.default.createElement(_ToastContext.default.Provider, {
    value: toastContext
  }, hasAnimation && Transition ? /*#__PURE__*/_react.default.createElement(Transition, {
    in: show,
    unmountOnExit: true
  }, toast) : toast);
});

Toast.displayName = 'Toast';

var _default = Object.assign(Toast, {
  Body: _ToastBody.default,
  Header: _ToastHeader.default
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "48914f3eb940bdea746a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormText = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'small' : _ref$as,
      muted = _ref.muted,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as", "muted"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-text');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix, muted && 'text-muted')
  }));
});

FormText.displayName = 'FormText';
var _default = FormText;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "4afb215ecbe339533e9b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var NavItem = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-item');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children);
});

NavItem.displayName = 'NavItem';
var _default = NavItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "515b08b506beda290369":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _createChainedFunction = _interopRequireDefault(__webpack_require__("a4ff8f03a4755a589ed2"));

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = _react.default.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "disabled", "onKeyDown"]);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: (0, _createChainedFunction.default)(handleKeyDown, onKeyDown)
  }));
});

SafeAnchor.displayName = 'SafeAnchor';
var _default = SafeAnchor;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "54af5bfd6eb4638321c6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var ToastContext = _react.default.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
});

var _default = ToastContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "58317aeb4de2ce141196":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.toModifierMap = toModifierMap;
exports.toModifierArray = toModifierArray;
exports["default"] = mergeOptionsWithPopperConfig;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

function toModifierMap(modifiers) {
  var result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}

function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }

  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}

function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  var enabled = _ref.enabled,
      enableEvents = _ref.enableEvents,
      placement = _ref.placement,
      flip = _ref.flip,
      offset = _ref.offset,
      containerPadding = _ref.containerPadding,
      arrowElement = _ref.arrowElement,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return (0, _extends2["default"])({}, popperConfig, {
    placement: placement,
    enabled: enabled,
    modifiers: toModifierArray((0, _extends2["default"])({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: (0, _extends2["default"])({}, modifiers.preventOverflow, {
        options: containerPadding ? (0, _extends2["default"])({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: (0, _extends2["default"])({
          offset: offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: (0, _extends2["default"])({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: (0, _extends2["default"])({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: (0, _extends2["default"])({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

/***/ }),

/***/ "5ba26d9512ab490e3e27":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.Last = exports.Next = exports.Ellipsis = exports.Prev = exports.First = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

/* eslint-disable react/no-multi-comp */
var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};

var PageItem = _react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "disabled", "className", "style", "activeLabel", "children"]);
  var Component = active || disabled ? 'span' : _SafeAnchor.default;
  return /*#__PURE__*/_react.default.createElement("li", {
    ref: ref,
    style: style,
    className: (0, _classnames.default)(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
});

PageItem.defaultProps = defaultProps;
PageItem.displayName = 'PageItem';
var _default = PageItem;
exports.default = _default;

function createButton(name, defaultValue, label) {
  if (label === void 0) {
    label = name;
  }

  function Button(_ref2) {
    var children = _ref2.children,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["children"]);
    return /*#__PURE__*/_react.default.createElement(PageItem, props, /*#__PURE__*/_react.default.createElement("span", {
      "aria-hidden": "true"
    }, children || defaultValue), /*#__PURE__*/_react.default.createElement("span", {
      className: "sr-only"
    }, label));
  }

  Button.displayName = name;
  return Button;
}

var First = createButton('First', '«');
exports.First = First;
var Prev = createButton('Prev', '‹', 'Previous');
exports.Prev = Prev;
var Ellipsis = createButton('Ellipsis', '…', 'More');
exports.Ellipsis = Ellipsis;
var Next = createButton('Next', '›');
exports.Next = Next;
var Last = createButton('Last', '»');
exports.Last = Last;

/***/ }),

/***/ "5dacc1f50c9b820533df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var ModalDialog = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      contentClassName = _ref.contentClassName,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "contentClassName", "centered", "size", "children", "scrollable"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _classnames.default)(bsPrefix + "-content", contentClassName)
  }, children));
});

ModalDialog.displayName = 'ModalDialog';
var _default = ModalDialog;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "5db2369d4616698f94d2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  role: 'toolbar'
};

var ButtonToolbar = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn-toolbar');
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix)
  }));
});

ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps;
var _default = ButtonToolbar;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "637ce0e86e321ecdd9fe":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: _propTypes.default.string,

  /** Display feedback as a tooltip. */
  tooltip: _propTypes.default.bool,
  as: _propTypes.default.elementType
};

var Feedback = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'valid' : _ref$type,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "type", "tooltip"]);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, type + "-" + (tooltip ? 'tooltip' : 'feedback'))
  }));
});

Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
var _default = Feedback;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "659a3faed2392bdde51d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _Dropdown = _interopRequireDefault(__webpack_require__("e3144497092950c6bb2f"));

var _NavItem = _interopRequireDefault(__webpack_require__("4afb215ecbe339533e9b"));

var _NavLink = _interopRequireDefault(__webpack_require__("858b8678f66f499c4b82"));

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /** An `onClick` handler passed to the Toggle component */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** Disables the toggle NavLink  */
  disabled: _propTypes.default.bool,

  /** Style the toggle NavLink as active  */
  active: _propTypes.default.bool,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: _propTypes.default.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string
};

var NavDropdown = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      active = _ref.active,
      renderMenuOnMount = _ref.renderMenuOnMount,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "title", "children", "bsPrefix", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount"]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    as: _NavItem.default
  }), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Toggle, {
    id: id,
    eventKey: null,
    active: active,
    disabled: disabled,
    childBsPrefix: bsPrefix,
    as: _NavLink.default
  }, title), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});

NavDropdown.displayName = 'NavDropdown';
NavDropdown.propTypes = propTypes;
NavDropdown.Item = _Dropdown.default.Item;
NavDropdown.ItemText = _Dropdown.default.ItemText;
NavDropdown.Divider = _Dropdown.default.Divider;
NavDropdown.Header = _Dropdown.default.Header;
var _default = NavDropdown;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "6785d492ebe4c033b0ca":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _TabContext = _interopRequireDefault(__webpack_require__("85686cb433cd9022c6c0"));

var _SelectableContext = _interopRequireDefault(__webpack_require__("8091d4c30d49f465376d"));

var TabContainer = function TabContainer(props) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      generateCustomChildId = _useUncontrolled.generateChildId,
      onSelect = _useUncontrolled.onSelect,
      activeKey = _useUncontrolled.activeKey,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children;

  var generateChildId = (0, _react.useMemo)(function () {
    return generateCustomChildId || function (key, type) {
      return id ? id + "-" + type + "-" + key : null;
    };
  }, [id, generateCustomChildId]);
  var tabContext = (0, _react.useMemo)(function () {
    return {
      onSelect: onSelect,
      activeKey: activeKey,
      transition: transition,
      mountOnEnter: mountOnEnter || false,
      unmountOnExit: unmountOnExit || false,
      getControlledId: function getControlledId(key) {
        return generateChildId(key, 'tabpane');
      },
      getControllerId: function getControllerId(key) {
        return generateChildId(key, 'tab');
      }
    };
  }, [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/_react.default.createElement(_TabContext.default.Provider, {
    value: tabContext
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: onSelect || null
  }, children));
};

var _default = TabContainer;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "69369cbc1253f5a977ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var NavbarBrand = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

NavbarBrand.displayName = 'NavbarBrand';
var _default = NavbarBrand;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "6a058152bf977bf63e62":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _TabContainer = _interopRequireDefault(__webpack_require__("6785d492ebe4c033b0ca"));

var _TabContent = _interopRequireDefault(__webpack_require__("247799f4d48bc96b8aab"));

var _TabPane = _interopRequireDefault(__webpack_require__("0a059c115e29cfe72a82"));

/* eslint-disable react/require-render-return, react/no-unused-prop-types */
var Tab = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
    return null;
  };

  return Tab;
}(_react.default.Component);

Tab.Container = _TabContainer.default;
Tab.Content = _TabContent.default;
Tab.Pane = _TabPane.default;
var _default = Tab;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "6a5186955da734342719":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _default = (0, _createWithBsPrefix.default)('card-group');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "6e30c86de7a949ebfcf6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _all = _interopRequireDefault(__webpack_require__("dcd51803e40d5a652bc0"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _NavbarContext = _interopRequireDefault(__webpack_require__("ffb31eae7b0bff144515"));

var _CardContext = _interopRequireDefault(__webpack_require__("aa05138f193f25f491b7"));

var _AbstractNav = _interopRequireDefault(__webpack_require__("2282326ec9969f3c7ffe"));

var _NavItem = _interopRequireDefault(__webpack_require__("4afb215ecbe339533e9b"));

var _NavLink = _interopRequireDefault(__webpack_require__("858b8678f66f499c4b82"));

var defaultProps = {
  justify: false,
  fill: false
};

var Nav = _react.default.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "className", "children", "activeKey"]);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'nav');
  var navbarBsPrefix;
  var cardHeaderBsPrefix;
  var isNavbar = false;
  var navbarContext = (0, _react.useContext)(_NavbarContext.default);
  var cardContext = (0, _react.useContext)(_CardContext.default);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return /*#__PURE__*/_react.default.createElement(_AbstractNav.default, (0, _extends2.default)({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: (0, _classnames.default)(className, (_classNames = {}, _classNames[bsPrefix] = !isNavbar, _classNames[navbarBsPrefix + "-nav"] = isNavbar, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});

Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = _NavItem.default;
Nav.Link = _NavLink.default;
var _default = Nav;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "7023eb88dbe6e040e03d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group'
};

var ButtonGroup = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      toggle = _ref.toggle,
      vertical = _ref.vertical,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      rest = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "size", "toggle", "vertical", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn-group');
  var baseClass = prefix;
  if (vertical) baseClass = prefix + "-vertical";
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, rest, {
    ref: ref,
    className: (0, _classnames.default)(className, baseClass, size && prefix + "-" + size, toggle && prefix + "-toggle")
  }));
});

ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps;
var _default = ButtonGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "7071859886a56a3c3351":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _divWithClassName = _interopRequireDefault(__webpack_require__("0cea0e08f7620dad1133"));

var DivStyledAsH4 = (0, _divWithClassName.default)('h4');

var _default = (0, _createWithBsPrefix.default)('modal-title', {
  Component: DivStyledAsH4
});

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "72f45d30caa0c821511c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  aspectRatio: '1by1'
};

var ResponsiveEmbed = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      aspectRatio = _ref.aspectRatio,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "aspectRatio"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'embed-responsive');

  var child = _react.default.Children.only(children);

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(decoratedBsPrefix, className, aspectRatio && decoratedBsPrefix + "-" + aspectRatio)
  }), _react.default.cloneElement(child, {
    className: (0, _classnames.default)(child.props.className, decoratedBsPrefix + "-item")
  }));
});

ResponsiveEmbed.defaultProps = defaultProps;
var _default = ResponsiveEmbed;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "7412a688311388ec28e2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _Button = _interopRequireDefault(__webpack_require__("cbdd038bdcfd33980f7d"));

var _ButtonGroup = _interopRequireDefault(__webpack_require__("7023eb88dbe6e040e03d"));

var _Dropdown = _interopRequireDefault(__webpack_require__("e3144497092950c6bb2f"));

var _DropdownMenu = __webpack_require__("e4875d417913942d157b");

var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: _propTypes.default.any,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: _propTypes.default.string,

  /** An `href` passed to the non-toggle Button */
  href: _propTypes.default.string,

  /** An anchor `target` passed to the non-toggle Button */
  target: _propTypes.default.string,

  /** An `onClick` handler passed to the non-toggle Button */
  onClick: _propTypes.default.func,

  /** The content of the non-toggle Button.  */
  title: _propTypes.default.node.isRequired,

  /** A `type` passed to the non-toggle Button */
  type: _propTypes.default.string,

  /** Disables both Buttons  */
  disabled: _propTypes.default.bool,

  /**
   * Aligns the dropdown menu responsively.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"left"|"right"|{ sm: "left"|"right" }|{ md: "left"|"right" }|{ lg: "left"|"right" }|{ xl: "left"|"right"} }
   */
  menuAlign: _DropdownMenu.alignPropType,

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: _propTypes.default.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: _propTypes.default.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: _propTypes.default.string,

  /** @ignore */
  bsPrefix: _propTypes.default.string,

  /** @ignore */
  variant: _propTypes.default.string,

  /** @ignore */
  size: _propTypes.default.string
};
var defaultProps = {
  toggleLabel: 'Toggle dropdown',
  type: 'button'
};

var SplitButton = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      variant = _ref.variant,
      title = _ref.title,
      type = _ref.type,
      toggleLabel = _ref.toggleLabel,
      children = _ref.children,
      onClick = _ref.onClick,
      href = _ref.href,
      target = _ref.target,
      menuAlign = _ref.menuAlign,
      menuRole = _ref.menuRole,
      renderMenuOnMount = _ref.renderMenuOnMount,
      rootCloseEvent = _ref.rootCloseEvent,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "size", "variant", "title", "type", "toggleLabel", "children", "onClick", "href", "target", "menuAlign", "menuRole", "renderMenuOnMount", "rootCloseEvent"]);
  return /*#__PURE__*/_react.default.createElement(_Dropdown.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    as: _ButtonGroup.default
  }), /*#__PURE__*/_react.default.createElement(_Button.default, {
    size: size,
    variant: variant,
    disabled: props.disabled,
    bsPrefix: bsPrefix,
    href: href,
    target: target,
    onClick: onClick,
    type: type
  }, title), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Toggle, {
    split: true,
    id: id ? id.toString() : undefined,
    size: size,
    variant: variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, toggleLabel)), /*#__PURE__*/_react.default.createElement(_Dropdown.default.Menu, {
    align: menuAlign,
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});

SplitButton.propTypes = propTypes;
SplitButton.defaultProps = defaultProps;
SplitButton.displayName = 'SplitButton';
var _default = SplitButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "75d7e08c96b94d48e7fb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _BreadcrumbItem = _interopRequireDefault(__webpack_require__("95a1f3b6eaeaa6c73564"));

var defaultProps = {
  label: 'breadcrumb',
  listProps: {}
};

var Breadcrumb = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      listProps = _ref.listProps,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'nav' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "listProps", "children", "label", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'breadcrumb');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    "aria-label": label,
    className: className,
    ref: ref
  }, props), /*#__PURE__*/_react.default.createElement("ol", (0, _extends2.default)({}, listProps, {
    className: (0, _classnames.default)(prefix, listProps == null ? void 0 : listProps.className)
  }), children));
});

Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.Item = _BreadcrumbItem.default;
var _default = Breadcrumb;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "762d2ccb254685fa018b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _default = (0, _createWithBsPrefix.default)('toast-body');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "76f3c7e4879738d31a35":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _CloseButton = _interopRequireDefault(__webpack_require__("acc61bc9e1ebe5d11576"));

var _ToastContext = _interopRequireDefault(__webpack_require__("54af5bfd6eb4638321c6"));

var defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};

var ToastHeader = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      className = _ref.className,
      children = _ref.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "closeLabel", "closeButton", "className", "children"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'toast-header');
  var context = (0, _react.useContext)(_ToastContext.default);
  var handleClick = (0, _useEventCallback.default)(function (e) {
    if (context && context.onClose) {
      context.onClose(e);
    }
  });
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(bsPrefix, className)
  }), children, closeButton && /*#__PURE__*/_react.default.createElement(_CloseButton.default, {
    label: closeLabel,
    onClick: handleClick,
    className: "ml-2 mb-1",
    "data-dismiss": "toast"
  }));
});

ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
var _default = ToastHeader;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "7a010f9aa2c4e96b972e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = triggerBrowserReflow;

// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

module.exports = exports["default"];

/***/ }),

/***/ "7c847e3c906d524e78cb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormFileLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-label'] : [bsPrefix, 'form-file-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: (0, _classnames.default)(className, bsPrefix),
    "data-browse": props['data-browse']
  }));
});

FormFileLabel.displayName = 'FormFileLabel';
var _default = FormFileLabel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "8091d4c30d49f465376d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = exports.makeEventKey = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var SelectableContext = _react.default.createContext(null);

var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};

exports.makeEventKey = makeEventKey;
var _default = SelectableContext;
exports.default = _default;

/***/ }),

/***/ "8224cf6ab6360fa858ac":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ariaHidden = ariaHidden;
exports.hideSiblings = hideSiblings;
exports.showSiblings = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(hide, node) {
  if (!node) return;

  if (hide) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}

function hideSiblings(container, _ref2) {
  var dialog = _ref2.dialog,
      backdrop = _ref2.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}

function showSiblings(container, _ref3) {
  var dialog = _ref3.dialog,
      backdrop = _ref3.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),

/***/ "83906f29cc4ff0d5ac1b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.useDropdownToggle = useDropdownToggle;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _DropdownContext = _interopRequireDefault(__webpack_require__("233051de8eb669d67289"));

var noop = function noop() {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  var _ref = (0, _react.useContext)(_DropdownContext["default"]) || {},
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? noop : _ref$toggle,
      setToggle = _ref.setToggle;

  return [{
    ref: setToggle || noop,
    'aria-haspopup': true,
    'aria-expanded': !!show
  }, {
    show: show,
    toggle: toggle
  }];
}

var propTypes = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: _propTypes["default"].func.isRequired
};

/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
function DropdownToggle(_ref2) {
  var children = _ref2.children;

  var _useDropdownToggle = useDropdownToggle(),
      props = _useDropdownToggle[0],
      _useDropdownToggle$ = _useDropdownToggle[1],
      show = _useDropdownToggle$.show,
      toggle = _useDropdownToggle$.toggle;

  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, children({
    show: show,
    toggle: toggle,
    props: props
  }));
}

DropdownToggle.displayName = 'ReactOverlaysDropdownToggle';
DropdownToggle.propTypes = propTypes;
/** @component */

var _default = DropdownToggle;
exports["default"] = _default;

/***/ }),

/***/ "84064cd1cb85c3a87452":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _addEventListener = _interopRequireDefault(__webpack_require__("0610821415057bf7a005"));

var _canUseDOM = _interopRequireDefault(__webpack_require__("c2f6cf857090a00f2a1f"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("d3283488a838adab1d98"));

var _removeEventListener = _interopRequireDefault(__webpack_require__("d27d6a82dbe6f70b72a7"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__("967ef5cd753367ae6601"));

var _useCallbackRef2 = _interopRequireDefault(__webpack_require__("de2dc95fecbd64da4ffb"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _useWillUnmount = _interopRequireDefault(__webpack_require__("41816df7a98d57ea5c0b"));

var _transitionEnd = _interopRequireDefault(__webpack_require__("3e61108919ae44da8e53"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Modal = _interopRequireDefault(__webpack_require__("08e418f96a9da050efb6"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _BootstrapModalManager = _interopRequireDefault(__webpack_require__("e6d545cec3d57e45ef7c"));

var _Fade = _interopRequireDefault(__webpack_require__("286777336e103589e6e9"));

var _ModalBody = _interopRequireDefault(__webpack_require__("9a604eb1f24e1ff0cb52"));

var _ModalContext = _interopRequireDefault(__webpack_require__("b965a6a3307db3d4af80"));

var _ModalDialog = _interopRequireDefault(__webpack_require__("5dacc1f50c9b820533df"));

var _ModalFooter = _interopRequireDefault(__webpack_require__("869ae7eec70410ebd84b"));

var _ModalHeader = _interopRequireDefault(__webpack_require__("2ed07e30d87c4c4d3d59"));

var _ModalTitle = _interopRequireDefault(__webpack_require__("7071859886a56a3c3351"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var manager;
var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: _ModalDialog.default
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/_react.default.createElement(_Fade.default, props);
}

function BackdropTransition(props) {
  return /*#__PURE__*/_react.default.createElement(_Fade.default, props);
}
/* eslint-enable no-use-before-define */


var Modal = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      style = _ref.style,
      dialogClassName = _ref.dialogClassName,
      contentClassName = _ref.contentClassName,
      children = _ref.children,
      Dialog = _ref.dialogAs,
      ariaLabelledby = _ref['aria-labelledby'],
      show = _ref.show,
      animation = _ref.animation,
      backdrop = _ref.backdrop,
      keyboard = _ref.keyboard,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      onShow = _ref.onShow,
      onHide = _ref.onHide,
      container = _ref.container,
      autoFocus = _ref.autoFocus,
      enforceFocus = _ref.enforceFocus,
      restoreFocus = _ref.restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onExited = _ref.onExited,
      backdropClassName = _ref.backdropClassName,
      propsManager = _ref.manager,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"]);

  var _useState = (0, _react.useState)({}),
      modalStyle = _useState[0],
      setStyle = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      animateStaticModal = _useState2[0],
      setAnimateStaticModal = _useState2[1];

  var waitingForMouseUpRef = (0, _react.useRef)(false);
  var ignoreBackdropClickRef = (0, _react.useRef)(false);
  var removeStaticModalAnimationRef = (0, _react.useRef)(null); // TODO: what's this type

  var _useCallbackRef = (0, _useCallbackRef2.default)(),
      modal = _useCallbackRef[0],
      setModalRef = _useCallbackRef[1];

  var handleHide = (0, _useEventCallback.default)(onHide);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'modal');
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      get _modal() {
         false ? undefined : void 0;
        return modal;
      }

    };
  }, [modal]);
  var modalContext = (0, _react.useMemo)(function () {
    return {
      onHide: handleHide
    };
  }, [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    if (!manager) manager = new _BootstrapModalManager.default();
    return manager;
  }

  function updateDialogStyle(node) {
    if (!_canUseDOM.default) return;
    var containerIsOverflowing = getModalManager().isContainerOverflowing(modal);
    var modalIsOverflowing = node.scrollHeight > (0, _ownerDocument.default)(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? (0, _scrollbarSize.default)() : undefined
    });
  }

  var handleWindowResize = (0, _useEventCallback.default)(function () {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  (0, _useWillUnmount.default)(function () {
    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);

    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  var handleDialogMouseDown = function handleDialogMouseDown() {
    waitingForMouseUpRef.current = true;
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  var handleStaticModalAnimation = function handleStaticModalAnimation() {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = (0, _transitionEnd.default)(modal.dialog, function () {
      setAnimateStaticModal(false);
    });
  };

  var handleStaticBackdropClick = function handleStaticBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  var handleClick = function handleClick(e) {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide();
  };

  var handleEscapeKeyDown = function handleEscapeKeyDown(e) {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in react-overlays,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  var handleEnter = function handleEnter(node) {
    if (node) {
      node.style.display = 'block';
      updateDialogStyle(node);
    }

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (onEnter) onEnter.apply(void 0, [node].concat(args));
  };

  var handleExit = function handleExit(node) {
    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }

    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }

    if (onExit) onExit.apply(void 0, [node].concat(args));
  };

  var handleEntering = function handleEntering(node) {
    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if (onEntering) onEntering.apply(void 0, [node].concat(args)); // FIXME: This should work even when animation is disabled.

    (0, _addEventListener.default)(window, 'resize', handleWindowResize);
  };

  var handleExited = function handleExited(node) {
    if (node) node.style.display = ''; // RHL removes it sometimes

    for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
      args[_key4 - 1] = arguments[_key4];
    }

    if (onExited) onExited.apply(void 0, args); // FIXME: This should work even when animation is disabled.

    (0, _removeEventListener.default)(window, 'resize', handleWindowResize);
  };

  var renderBackdrop = (0, _react.useCallback)(function (backdropProps) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, backdropProps, {
      className: (0, _classnames.default)(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
    }));
  }, [animation, backdropClassName, bsPrefix]);
  var baseModalStyle = (0, _extends2.default)({}, style, {}, modalStyle); // Sets `display` always block when `animation` is false

  if (!animation) {
    baseModalStyle.display = 'block';
  }

  var renderDialog = function renderDialog(dialogProps) {
    return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
      role: "dialog"
    }, dialogProps, {
      style: baseModalStyle,
      className: (0, _classnames.default)(className, bsPrefix, animateStaticModal && bsPrefix + "-static"),
      onClick: backdrop ? handleClick : undefined,
      onMouseUp: handleMouseUp,
      "aria-labelledby": ariaLabelledby
    }), /*#__PURE__*/_react.default.createElement(Dialog, (0, _extends2.default)({}, props, {
      role: "document",
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName
    }), children));
  };

  return /*#__PURE__*/_react.default.createElement(_ModalContext.default.Provider, {
    value: modalContext
  }, /*#__PURE__*/_react.default.createElement(_Modal.default, {
    show: show,
    ref: setModalRef,
    backdrop: backdrop,
    container: container,
    keyboard: true // Always set true - see handleEscapeKeyDown
    ,
    autoFocus: autoFocus,
    enforceFocus: enforceFocus,
    restoreFocus: restoreFocus,
    restoreFocusOptions: restoreFocusOptions,
    onEscapeKeyDown: handleEscapeKeyDown,
    onShow: onShow,
    onHide: onHide,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: onEntered,
    onExit: handleExit,
    onExiting: onExiting,
    onExited: handleExited,
    manager: getModalManager(),
    containerClassName: bsPrefix + "-open",
    transition: animation ? DialogTransition : undefined,
    backdropTransition: animation ? BackdropTransition : undefined,
    renderBackdrop: renderBackdrop,
    renderDialog: renderDialog
  }));
});

Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps;
Modal.Body = _ModalBody.default;
Modal.Header = _ModalHeader.default;
Modal.Title = _ModalTitle.default;
Modal.Footer = _ModalFooter.default;
Modal.Dialog = _ModalDialog.default;
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
var _default = Modal;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "853acb4e3fa0559a1979":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var MediaBody = (0, _createWithBsPrefix.default)('media-body');

var Media = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'media');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, prefix)
  }));
});

Media.displayName = 'Media';
Media.Body = MediaBody;
var _default = Media;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "85686cb433cd9022c6c0":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var TabContext = _react.default.createContext(null);

var _default = TabContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "858b8678f66f499c4b82":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

var _AbstractNavItem = _interopRequireDefault(__webpack_require__("e89a55f8a1933b8494ff"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  disabled: false,
  as: _SafeAnchor.default
};

var NavLink = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'nav-link');
  return /*#__PURE__*/_react.default.createElement(_AbstractNavItem.default, (0, _extends2.default)({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: (0, _classnames.default)(className, bsPrefix, disabled && 'disabled')
  }));
});

NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
var _default = NavLink;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "85f74626e82fd9d527ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _FormCheck = _interopRequireDefault(__webpack_require__("8d77b4972c41061b968b"));

var _FormFile = _interopRequireDefault(__webpack_require__("b60f99953a589ddaafa9"));

var _FormControl = _interopRequireDefault(__webpack_require__("1e0de56188c6a20f36d9"));

var _FormGroup = _interopRequireDefault(__webpack_require__("f75d23563a720ec3ae95"));

var _FormLabel = _interopRequireDefault(__webpack_require__("16ccf52d91a9ffc07cb5"));

var _FormText = _interopRequireDefault(__webpack_require__("48914f3eb940bdea746a"));

var _Switch = _interopRequireDefault(__webpack_require__("be6fd90d958d93a722a8"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var FormRow = (0, _createWithBsPrefix.default)('form-row');
var defaultProps = {
  inline: false
};

var FormImpl = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "inline", "className", "validated", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});

FormImpl.displayName = 'Form';
FormImpl.defaultProps = defaultProps;
FormImpl.Row = FormRow;
FormImpl.Group = _FormGroup.default;
FormImpl.Control = _FormControl.default;
FormImpl.Check = _FormCheck.default;
FormImpl.File = _FormFile.default;
FormImpl.Switch = _Switch.default;
FormImpl.Label = _FormLabel.default;
FormImpl.Text = _FormText.default;
var _default = FormImpl;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "869ae7eec70410ebd84b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _default = (0, _createWithBsPrefix.default)('modal-footer');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "87c5342957385679ec7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Button = _interopRequireDefault(__webpack_require__("cbdd038bdcfd33980f7d"));

var noop = function noop() {
  return undefined;
};

var ToggleButton = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      name = _ref.name,
      className = _ref.className,
      checked = _ref.checked,
      type = _ref.type,
      onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef"]);

  var _useState = (0, _react.useState)(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var handleFocus = (0, _react.useCallback)(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(true);
  }, []);
  var handleBlur = (0, _react.useCallback)(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(false);
  }, []);
  return /*#__PURE__*/_react.default.createElement(_Button.default, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, focused && 'focus', disabled && 'disabled'),
    type: undefined,
    active: !!checked,
    as: "label"
  }), /*#__PURE__*/_react.default.createElement("input", {
    name: name,
    type: type,
    value: value,
    ref: inputRef,
    autoComplete: "off",
    checked: !!checked,
    disabled: !!disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: onChange || noop
  }), children);
});

ToggleButton.displayName = 'ToggleButton';
var _default = ToggleButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "89e528d82aad1a5b7245":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var FormContext = _react.default.createContext({
  controlId: undefined
});

var _default = FormContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "8aeed96bccbe1cbf0a5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _FigureImage = _interopRequireDefault(__webpack_require__("c7da1df19bd3d2c2faa6"));

var _FigureCaption = _interopRequireDefault(__webpack_require__("2f1c150dbf4475e58de7"));

var Figure = (0, _createWithBsPrefix.default)('figure', {
  Component: 'figure'
});
Figure.Image = _FigureImage.default;
Figure.Caption = _FigureCaption.default;
var _default = Figure;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "8d77b4972c41061b968b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _all = _interopRequireDefault(__webpack_require__("dcd51803e40d5a652bc0"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Feedback = _interopRequireDefault(__webpack_require__("637ce0e86e321ecdd9fe"));

var _FormCheckInput = _interopRequireDefault(__webpack_require__("fa0cc70445dcb306f97d"));

var _FormCheckLabel = _interopRequireDefault(__webpack_require__("a98e2f5d52d35bec184e"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormCheck = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$feedbackTooltip = _ref.feedbackTooltip,
      feedbackTooltip = _ref$feedbackTooltip === void 0 ? false : _ref$feedbackTooltip,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      label = _ref.label,
      children = _ref.children,
      propCustom = _ref.custom,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"]);
  var custom = type === 'switch' ? true : propCustom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control'] : [bsPrefix, 'form-check'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = custom || label != null && label !== false && !children;

  var input = /*#__PURE__*/_react.default.createElement(_FormCheckInput.default, (0, _extends2.default)({}, props, {
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled,
    as: as
  }));

  return /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: style,
    className: (0, _classnames.default)(className, bsPrefix, custom && "custom-" + type, inline && bsPrefix + "-inline")
  }, children || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, input, hasLabel && /*#__PURE__*/_react.default.createElement(_FormCheckLabel.default, {
    title: title
  }, label), (isValid || isInvalid) && /*#__PURE__*/_react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});

FormCheck.displayName = 'FormCheck';
FormCheck.Input = _FormCheckInput.default;
FormCheck.Label = _FormCheckLabel.default;
var _default = FormCheck;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "93b09faabedef6e40970":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = usePopperMarginModifiers;

var _react = __webpack_require__("8af190b70a6bc55c6f1b");

var _hasClass = _interopRequireDefault(__webpack_require__("b3b4d4cb3c81348b254a"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

function getMargins(element) {
  var styles = window.getComputedStyle(element);
  var top = parseFloat(styles.marginTop) || 0;
  var right = parseFloat(styles.marginRight) || 0;
  var bottom = parseFloat(styles.marginBottom) || 0;
  var left = parseFloat(styles.marginLeft) || 0;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
}

function usePopperMarginModifiers() {
  var overlayRef = (0, _react.useRef)(null);
  var margins = (0, _react.useRef)(null);
  var popoverClass = (0, _ThemeProvider.useBootstrapPrefix)(undefined, 'popover');
  var dropdownMenuClass = (0, _ThemeProvider.useBootstrapPrefix)(undefined, 'dropdown-menu');
  var callback = (0, _react.useCallback)(function (overlay) {
    if (!overlay || !((0, _hasClass.default)(overlay, popoverClass) || (0, _hasClass.default)(overlay, dropdownMenuClass))) return;
    margins.current = getMargins(overlay);
    overlay.style.margin = '0';
    overlayRef.current = overlay;
  }, [popoverClass, dropdownMenuClass]);
  var offset = (0, _react.useMemo)(function () {
    return {
      name: 'offset',
      options: {
        offset: function offset(_ref) {
          var placement = _ref.placement;
          if (!margins.current) return [0, 0];
          var _margins$current = margins.current,
              top = _margins$current.top,
              left = _margins$current.left,
              bottom = _margins$current.bottom,
              right = _margins$current.right;

          switch (placement.split('-')[0]) {
            case 'top':
              return [0, bottom];

            case 'left':
              return [0, right];

            case 'bottom':
              return [0, top];

            case 'right':
              return [0, left];

            default:
              return [0, 0];
          }
        }
      }
    };
  }, [margins]); // Converts popover arrow margin to arrow modifier padding

  var popoverArrowMargins = (0, _react.useMemo)(function () {
    return {
      name: 'popoverArrowMargins',
      enabled: true,
      phase: 'main',
      requiresIfExists: ['arrow'],
      effect: function effect(_ref2) {
        var state = _ref2.state;

        if (!overlayRef.current || !state.elements.arrow || !(0, _hasClass.default)(overlayRef.current, popoverClass) || !state.modifiersData['arrow#persistent']) {
          return undefined;
        }

        var _getMargins = getMargins(state.elements.arrow),
            top = _getMargins.top,
            right = _getMargins.right;

        var padding = top || right;
        state.modifiersData['arrow#persistent'].padding = {
          top: padding,
          left: padding,
          right: padding,
          bottom: padding
        };
        state.elements.arrow.style.margin = '0';
        return function () {
          if (state.elements.arrow) state.elements.arrow.style.margin = '';
        };
      }
    };
  }, [popoverClass]);
  return [callback, [offset, popoverArrowMargins]];
}

module.exports = exports["default"];

/***/ }),

/***/ "95a1f3b6eaeaa6c73564":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  active: false,
  linkProps: {}
};

var BreadcrumbItem = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'li' : _ref$as,
      _ref$linkAs = _ref.linkAs,
      LinkComponent = _ref$linkAs === void 0 ? _SafeAnchor.default : _ref$linkAs,
      linkProps = _ref.linkProps,
      href = _ref.href,
      title = _ref.title,
      target = _ref.target,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "active", "children", "className", "as", "linkAs", "linkProps", "href", "title", "target"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(prefix, className, {
      active: active
    }),
    "aria-current": active ? 'page' : undefined
  }), active ? children : /*#__PURE__*/_react.default.createElement(LinkComponent, (0, _extends2.default)({}, linkProps, {
    href: href,
    title: title,
    target: target
  }), children));
});

BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
var _default = BreadcrumbItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "9a604eb1f24e1ff0cb52":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _default = (0, _createWithBsPrefix.default)('modal-body');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "9b4dca59bf37c4e0ccc7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = isOverflowing;

var _isWindow = _interopRequireDefault(__webpack_require__("0ef2d2bcfd2f568d82ae"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("d3283488a838adab1d98"));

function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = (0, _isWindow["default"])(node) ? (0, _ownerDocument["default"])() : (0, _ownerDocument["default"])(node);
  var win = (0, _isWindow["default"])(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = (0, _isWindow["default"])(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

module.exports = exports.default;

/***/ }),

/***/ "9beb583d50c91fd501ed":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _NavbarBrand = _interopRequireDefault(__webpack_require__("69369cbc1253f5a977ac"));

var _NavbarCollapse = _interopRequireDefault(__webpack_require__("09e3cb8c466f0d61a74c"));

var _NavbarToggle = _interopRequireDefault(__webpack_require__("ba336afd6b16498c877c"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _NavbarContext = _interopRequireDefault(__webpack_require__("ffb31eae7b0bff144515"));

var _SelectableContext = _interopRequireDefault(__webpack_require__("8091d4c30d49f465376d"));

var NavbarText = (0, _createWithBsPrefix.default)('navbar-text', {
  Component: 'span'
});
var defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};

var Navbar = _react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    expanded: 'onToggle'
  }),
      initialBsPrefix = _useUncontrolled.bsPrefix,
      expand = _useUncontrolled.expand,
      variant = _useUncontrolled.variant,
      bg = _useUncontrolled.bg,
      fixed = _useUncontrolled.fixed,
      sticky = _useUncontrolled.sticky,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'nav' : _useUncontrolled$as,
      expanded = _useUncontrolled.expanded,
      _onToggle = _useUncontrolled.onToggle,
      onSelect = _useUncontrolled.onSelect,
      collapseOnSelect = _useUncontrolled.collapseOnSelect,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"]);

  var bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(initialBsPrefix, 'navbar');
  var handleCollapse = (0, _react.useCallback)(function () {
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      if (_onToggle) {
        _onToggle(false);
      }
    }
  }, [onSelect, collapseOnSelect, expanded, _onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  var expandClass = bsPrefix + "-expand";
  if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
  var navbarContext = (0, _react.useMemo)(function () {
    return {
      onToggle: function onToggle() {
        return _onToggle && _onToggle(!expanded);
      },
      bsPrefix: bsPrefix,
      expanded: !!expanded
    };
  }, [bsPrefix, expanded, _onToggle]);
  return /*#__PURE__*/_react.default.createElement(_NavbarContext.default.Provider, {
    value: navbarContext
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleCollapse
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    className: (0, _classnames.default)(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
  }), children)));
});

Navbar.defaultProps = defaultProps;
Navbar.displayName = 'Navbar';
Navbar.Brand = _NavbarBrand.default;
Navbar.Toggle = _NavbarToggle.default;
Navbar.Collapse = _NavbarCollapse.default;
Navbar.Text = NavbarText;
var _default = Navbar;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "9bfde907f7c97b036e3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _contains = _interopRequireDefault(__webpack_require__("55e81e4240ff2893750e"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useTimeout = _interopRequireDefault(__webpack_require__("dc8d440d4d2f0a35a67a"));

var _safeFindDOMNode = _interopRequireDefault(__webpack_require__("f49a8d2e97267410d236"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _Overlay = _interopRequireDefault(__webpack_require__("c8ad3d4061c4d15b2c8f"));

var RefHolder = /*#__PURE__*/function (_React$Component) {
  (0, _inheritsLoose2.default)(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(_react.default.Component);

function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
} // Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.


function handleMouseOverOut(handler, args, relatedNative) {
  var e = args[0];
  var target = e.currentTarget;
  var related = e.relatedTarget || e.nativeEvent[relatedNative];

  if ((!related || related !== target) && !(0, _contains.default)(target, related)) {
    handler.apply(void 0, args);
  }
}

var defaultProps = {
  defaultShow: false,
  trigger: ['hover', 'focus']
};

function OverlayTrigger(_ref) {
  var trigger = _ref.trigger,
      overlay = _ref.overlay,
      children = _ref.children,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      propsShow = _ref.show,
      _ref$defaultShow = _ref.defaultShow,
      defaultShow = _ref$defaultShow === void 0 ? false : _ref$defaultShow,
      onToggle = _ref.onToggle,
      propsDelay = _ref.delay,
      placement = _ref.placement,
      _ref$flip = _ref.flip,
      flip = _ref$flip === void 0 ? placement && placement.indexOf('auto') !== -1 : _ref$flip,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"]);
  var triggerNodeRef = (0, _react.useRef)(null);
  var timeout = (0, _useTimeout.default)();
  var hoverStateRef = (0, _react.useRef)('');

  var _useUncontrolledProp = (0, _uncontrollable.useUncontrolledProp)(propsShow, defaultShow, onToggle),
      show = _useUncontrolledProp[0],
      setShow = _useUncontrolledProp[1];

  var delay = normalizeDelay(propsDelay);

  var _ref2 = typeof children !== 'function' ? _react.default.Children.only(children).props : {},
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      onClick = _ref2.onClick;

  var getTarget = (0, _react.useCallback)(function () {
    return (0, _safeFindDOMNode.default)(triggerNodeRef.current);
  }, []);
  var handleShow = (0, _react.useCallback)(function () {
    timeout.clear();
    hoverStateRef.current = 'show';

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  var handleHide = (0, _react.useCallback)(function () {
    timeout.clear();
    hoverStateRef.current = 'hide';

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  var handleFocus = (0, _react.useCallback)(function () {
    handleShow();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onFocus == null ? void 0 : onFocus.apply(void 0, args);
  }, [handleShow, onFocus]);
  var handleBlur = (0, _react.useCallback)(function () {
    handleHide();

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    onBlur == null ? void 0 : onBlur.apply(void 0, args);
  }, [handleHide, onBlur]);
  var handleClick = (0, _react.useCallback)(function () {
    setShow(!show);
    if (onClick) onClick.apply(void 0, arguments);
  }, [onClick, setShow, show]);
  var handleMouseOver = (0, _react.useCallback)(function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  var handleMouseOut = (0, _react.useCallback)(function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  var triggers = trigger == null ? [] : [].concat(trigger);
  var triggerProps = {};

  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf('hover') !== -1) {
     false ? undefined : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, typeof children === 'function' ? children((0, _extends2.default)({}, triggerProps, {
    ref: triggerNodeRef
  })) : /*#__PURE__*/_react.default.createElement(RefHolder, {
    ref: triggerNodeRef
  }, (0, _react.cloneElement)(children, triggerProps)), /*#__PURE__*/_react.default.createElement(_Overlay.default, (0, _extends2.default)({}, props, {
    show: show,
    onHide: handleHide,
    flip: flip,
    placement: placement,
    popperConfig: popperConfig,
    target: getTarget
  }), overlay));
}

OverlayTrigger.defaultProps = defaultProps;
var _default = OverlayTrigger;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "9f78337b90eeae1d803c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormFileInput = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      lang = _ref.lang,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var type = 'file';

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-input'] : [bsPrefix, 'form-control-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    id: id || controlId,
    type: type,
    lang: lang,
    className: (0, _classnames.default)(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  }));
});

FormFileInput.displayName = 'FormFileInput';
var _default = FormFileInput;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "a4ff8f03a4755a589ed2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

var _default = createChainedFunction;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "a84044dbee7b2bbcdb7e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Collapse = _interopRequireDefault(__webpack_require__("1071238d53a57e392963"));

var _AccordionContext = _interopRequireDefault(__webpack_require__("c2943968f56ce09054de"));

var _SelectableContext = _interopRequireDefault(__webpack_require__("8091d4c30d49f465376d"));

var AccordionCollapse = _react.default.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "eventKey"]);
  var contextEventKey = (0, _react.useContext)(_AccordionContext.default); // Empty SelectableContext is to prevent elements in the collapse
  // from collapsing the accordion when clicked.

  return /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: null
  }, /*#__PURE__*/_react.default.createElement(_Collapse.default, (0, _extends2.default)({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), /*#__PURE__*/_react.default.createElement("div", null, _react.default.Children.only(children))));
});

AccordionCollapse.displayName = 'AccordionCollapse';
var _default = AccordionCollapse;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "a98e2f5d52d35bec184e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormCheckLabel = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-label'] : [bsPrefix, 'form-check-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: (0, _classnames.default)(className, bsPrefix)
  }));
});

FormCheckLabel.displayName = 'FormCheckLabel';
var _default = FormCheckLabel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "aa05138f193f25f491b7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var context = _react.default.createContext(null);

context.displayName = 'CardContext';
var _default = context;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "acc61bc9e1ebe5d11576":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
var defaultProps = {
  label: 'Close'
};

var CloseButton = _react.default.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["label", "onClick", "className"]);
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({
    ref: ref,
    type: "button",
    className: (0, _classnames.default)('close', className),
    onClick: onClick
  }, props), /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, label));
});

CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
var _default = CloseButton;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "aeb9d93e0e709f822a57":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _useUpdateEffect = _interopRequireDefault(__webpack_require__("1f9b441223cc60b0f9fa"));

var _useCommittedRef = _interopRequireDefault(__webpack_require__("c8b217a76a441ad6080f"));

var _useTimeout = _interopRequireDefault(__webpack_require__("dc8d440d4d2f0a35a67a"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _transitionEnd = _interopRequireDefault(__webpack_require__("3e61108919ae44da8e53"));

var _Transition = _interopRequireDefault(__webpack_require__("5f91333870c355d2b6da"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _CarouselCaption = _interopRequireDefault(__webpack_require__("08f089f2ae3de5523500"));

var _CarouselItem = _interopRequireDefault(__webpack_require__("09800db97cfafd52530f"));

var _ElementChildren = __webpack_require__("06fdc6612000b1e70f3d");

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _triggerBrowserReflow = _interopRequireDefault(__webpack_require__("7a010f9aa2c4e96b972e"));

var SWIPE_THRESHOLD = 40;
var propTypes = {
  /**
   * @default 'carousel'
   */
  bsPrefix: _propTypes.default.string,
  as: _propTypes.default.elementType,

  /**
   * Enables animation on the Carousel as it transitions between slides.
   */
  slide: _propTypes.default.bool,

  /** Cross fade slides instead of the default slide animation */
  fade: _propTypes.default.bool,

  /**
   * Show the Carousel previous and next arrows for changing the current slide
   */
  controls: _propTypes.default.bool,

  /**
   * Show a set of slide position indicators
   */
  indicators: _propTypes.default.bool,

  /**
   * Controls the current visible slide
   *
   * @controllable onSelect
   */
  activeIndex: _propTypes.default.number,

  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: number, event: Object | null) => void
   * ```
   *
   * @controllable activeIndex
   */
  onSelect: _propTypes.default.func,

  /**
   * Callback fired when a slide transition starts.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlide: _propTypes.default.func,

  /**
   * Callback fired when a slide transition ends.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlid: _propTypes.default.func,

  /**
   * The amount of time to delay between automatically cycling an item. If `null`, carousel will not automatically cycle.
   */
  interval: _propTypes.default.number,

  /** Whether the carousel should react to keyboard events. */
  keyboard: _propTypes.default.bool,

  /**
   * If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it.
   *
   * On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.
   */
  pause: _propTypes.default.oneOf(['hover', false]),

  /** Whether the carousel should cycle continuously or have hard stops. */
  wrap: _propTypes.default.bool,

  /**
   * Whether the carousel should support left/right swipe interactions on touchscreen devices.
   */
  touch: _propTypes.default.bool,

  /** Override the default button icon for the "previous" control */
  prevIcon: _propTypes.default.node,

  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: _propTypes.default.string,

  /** Override the default button icon for the "next" control */
  nextIcon: _propTypes.default.node,

  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: _propTypes.default.string
};
var defaultProps = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
  touch: true,
  prevIcon: /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }

  var elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}

function CarouselFunc(uncontrolledProps, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(uncontrolledProps, {
    activeIndex: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      bsPrefix = _useUncontrolled.bsPrefix,
      slide = _useUncontrolled.slide,
      fade = _useUncontrolled.fade,
      controls = _useUncontrolled.controls,
      indicators = _useUncontrolled.indicators,
      activeIndex = _useUncontrolled.activeIndex,
      onSelect = _useUncontrolled.onSelect,
      onSlide = _useUncontrolled.onSlide,
      onSlid = _useUncontrolled.onSlid,
      interval = _useUncontrolled.interval,
      keyboard = _useUncontrolled.keyboard,
      onKeyDown = _useUncontrolled.onKeyDown,
      pause = _useUncontrolled.pause,
      onMouseOver = _useUncontrolled.onMouseOver,
      onMouseOut = _useUncontrolled.onMouseOut,
      wrap = _useUncontrolled.wrap,
      touch = _useUncontrolled.touch,
      onTouchStart = _useUncontrolled.onTouchStart,
      onTouchMove = _useUncontrolled.onTouchMove,
      onTouchEnd = _useUncontrolled.onTouchEnd,
      prevIcon = _useUncontrolled.prevIcon,
      prevLabel = _useUncontrolled.prevLabel,
      nextIcon = _useUncontrolled.nextIcon,
      nextLabel = _useUncontrolled.nextLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "bsPrefix", "slide", "fade", "controls", "indicators", "activeIndex", "onSelect", "onSlide", "onSlid", "interval", "keyboard", "onKeyDown", "pause", "onMouseOver", "onMouseOut", "wrap", "touch", "onTouchStart", "onTouchMove", "onTouchEnd", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"]);

  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'carousel');
  var nextDirectionRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)('next'),
      direction = _useState[0],
      setDirection = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      isSliding = _useState2[0],
      setIsSliding = _useState2[1];

  var _useState3 = (0, _react.useState)(activeIndex || 0),
      renderedActiveIndex = _useState3[0],
      setRenderedActiveIndex = _useState3[1];

  if (!isSliding && activeIndex !== renderedActiveIndex) {
    if (nextDirectionRef.current) {
      setDirection(nextDirectionRef.current);
    } else {
      setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
    }

    if (slide) {
      setIsSliding(true);
    }

    setRenderedActiveIndex(activeIndex || 0);
  }

  (0, _react.useEffect)(function () {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  var numChildren = 0;
  var activeChildInterval; // Iterate to grab all of the children's interval values
  // (and count them, too)

  (0, _ElementChildren.forEach)(children, function (child, index) {
    ++numChildren;

    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  var activeChildIntervalRef = (0, _useCommittedRef.default)(activeChildInterval);
  var prev = (0, _react.useCallback)(function (event) {
    if (isSliding) {
      return;
    }

    var nextActiveIndex = renderedActiveIndex - 1;

    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = numChildren - 1;
    }

    nextDirectionRef.current = 'prev';

    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]); // This is used in the setInterval, so it should not invalidate.

  var next = (0, _useEventCallback.default)(function (event) {
    if (isSliding) {
      return;
    }

    var nextActiveIndex = renderedActiveIndex + 1;

    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = 0;
    }

    nextDirectionRef.current = 'next';

    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  });
  var elementRef = (0, _react.useRef)();
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      element: elementRef.current,
      prev: prev,
      next: next
    };
  }); // This is used in the setInterval, so it should not invalidate.

  var nextWhenVisible = (0, _useEventCallback.default)(function () {
    if (!document.hidden && isVisible(elementRef.current)) {
      next();
    }
  });
  var slideDirection = direction === 'next' ? 'left' : 'right';
  (0, _useUpdateEffect.default)(function () {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }

    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [renderedActiveIndex]);
  var orderClassName = prefix + "-item-" + direction;
  var directionalClassName = prefix + "-item-" + slideDirection;
  var handleEnter = (0, _react.useCallback)(function (node) {
    (0, _triggerBrowserReflow.default)(node);

    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }
  }, [onSlide, renderedActiveIndex, slideDirection]);
  var handleEntered = (0, _react.useCallback)(function () {
    setIsSliding(false);

    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [onSlid, renderedActiveIndex, slideDirection]);
  var handleKeyDown = (0, _react.useCallback)(function (event) {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prev(event);
          return;

        case 'ArrowRight':
          event.preventDefault();
          next(event);
          return;

        default:
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [keyboard, onKeyDown, prev, next]);

  var _useState4 = (0, _react.useState)(false),
      pausedOnHover = _useState4[0],
      setPausedOnHover = _useState4[1];

  var handleMouseOver = (0, _react.useCallback)(function (event) {
    if (pause === 'hover') {
      setPausedOnHover(true);
    }

    if (onMouseOver) {
      onMouseOver(event);
    }
  }, [pause, onMouseOver]);
  var handleMouseOut = (0, _react.useCallback)(function (event) {
    setPausedOnHover(false);

    if (onMouseOut) {
      onMouseOut(event);
    }
  }, [onMouseOut]);
  var touchStartXRef = (0, _react.useRef)(0);
  var touchDeltaXRef = (0, _react.useRef)(0);

  var _useState5 = (0, _react.useState)(false),
      pausedOnTouch = _useState5[0],
      setPausedOnTouch = _useState5[1];

  var touchUnpauseTimeout = (0, _useTimeout.default)();
  var handleTouchStart = (0, _react.useCallback)(function (event) {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;

    if (touch) {
      setPausedOnTouch(true);
    }

    if (onTouchStart) {
      onTouchStart(event);
    }
  }, [touch, onTouchStart]);
  var handleTouchMove = (0, _react.useCallback)(function (event) {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }

    if (onTouchMove) {
      onTouchMove(event);
    }
  }, [onTouchMove]);
  var handleTouchEnd = (0, _react.useCallback)(function (event) {
    if (touch) {
      var touchDeltaX = touchDeltaXRef.current;

      if (Math.abs(touchDeltaX) <= SWIPE_THRESHOLD) {
        return;
      }

      if (touchDeltaX > 0) {
        prev(event);
      } else {
        next(event);
      }
    }

    touchUnpauseTimeout.set(function () {
      setPausedOnTouch(false);
    }, interval || undefined);

    if (onTouchEnd) {
      onTouchEnd(event);
    }
  }, [touch, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  var shouldPlay = interval != null && !pausedOnHover && !pausedOnTouch && !isSliding;
  var intervalHandleRef = (0, _react.useRef)();
  (0, _react.useEffect)(function () {
    var _ref, _activeChildIntervalR;

    if (!shouldPlay) {
      return undefined;
    }

    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : next, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return function () {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, next, activeChildIntervalRef, interval, nextWhenVisible]);
  var indicatorOnClicks = (0, _react.useMemo)(function () {
    return indicators && Array.from({
      length: numChildren
    }, function (_, index) {
      return function (event) {
        if (onSelect) {
          onSelect(index, event);
        }
      };
    });
  }, [indicators, numChildren, onSelect]);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: elementRef
  }, props, {
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: (0, _classnames.default)(className, prefix, slide && 'slide', fade && prefix + "-fade")
  }), indicators && /*#__PURE__*/_react.default.createElement("ol", {
    className: prefix + "-indicators"
  }, (0, _ElementChildren.map)(children, function (_child, index) {
    return /*#__PURE__*/_react.default.createElement("li", {
      key: index,
      className: index === renderedActiveIndex ? 'active' : undefined,
      onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined
    });
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: prefix + "-inner"
  }, (0, _ElementChildren.map)(children, function (child, index) {
    var isActive = index === renderedActiveIndex;
    return slide ? /*#__PURE__*/_react.default.createElement(_Transition.default, {
      in: isActive,
      onEnter: isActive ? handleEnter : undefined,
      onEntered: isActive ? handleEntered : undefined,
      addEndListener: _transitionEnd.default
    }, function (status) {
      return _react.default.cloneElement(child, {
        className: (0, _classnames.default)(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
      });
    }) : _react.default.cloneElement(child, {
      className: (0, _classnames.default)(child.props.className, isActive && 'active')
    });
  })), controls && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, (wrap || activeIndex !== 0) && /*#__PURE__*/_react.default.createElement(_SafeAnchor.default, {
    className: prefix + "-control-prev",
    onClick: prev
  }, prevIcon, prevLabel && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, prevLabel)), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/_react.default.createElement(_SafeAnchor.default, {
    className: prefix + "-control-next",
    onClick: next
  }, nextIcon, nextLabel && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, nextLabel))));
}

var Carousel = _react.default.forwardRef(CarouselFunc);

Carousel.displayName = 'Carousel';
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
Carousel.Caption = _CarouselCaption.default;
Carousel.Item = _CarouselItem.default;
var _default = Carousel;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "afa754a59a0cd8ad63fc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = useWaitForDOMRef;
exports.resolveContainerRef = void 0;

var _ownerDocument = _interopRequireDefault(__webpack_require__("d3283488a838adab1d98"));

var _react = __webpack_require__("8af190b70a6bc55c6f1b");

var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return (0, _ownerDocument["default"])().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) == null ? void 0 : _ref.nodeType) return ref || null;
  return null;
};

exports.resolveContainerRef = resolveContainerRef;

function useWaitForDOMRef(ref, onResolved) {
  var _useState = (0, _react.useState)(function () {
    return resolveContainerRef(ref);
  }),
      resolvedRef = _useState[0],
      setRef = _useState[1];

  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  (0, _react.useEffect)(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  (0, _react.useEffect)(function () {
    var nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

/***/ }),

/***/ "b489011d620936174477":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};

var Row = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "noGutters", "as"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: _classnames.default.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});

Row.displayName = 'Row';
Row.defaultProps = defaultProps;
var _default = Row;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "b5b7e86e9a17deed2d71":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _contains = _interopRequireDefault(__webpack_require__("55e81e4240ff2893750e"));

var _listen = _interopRequireDefault(__webpack_require__("2c8c73bb71efe74da7af"));

var _react = __webpack_require__("8af190b70a6bc55c6f1b");

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _ownerDocument = _interopRequireDefault(__webpack_require__("c830979352108dc796f5"));

var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = (0, _react.useRef)(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = (0, _react.useCallback)(function (e) {
    var currentTarget = getRefTarget(ref);
    (0, _warning["default"])(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!(0, _contains["default"])(currentTarget, e.target);
  }, [ref]);
  var handleMouse = (0, _useEventCallback["default"])(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = (0, _useEventCallback["default"])(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  (0, _react.useEffect)(function () {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    var currentEvent = window.event;
    var doc = (0, _ownerDocument["default"])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = (0, _listen["default"])(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = (0, _listen["default"])(doc, clickTrigger, function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    var removeKeyupListener = (0, _listen["default"])(doc, 'keyup', function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return (0, _listen["default"])(el, 'mousemove', noop);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

var _default = useRootClose;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "b60f99953a589ddaafa9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _all = _interopRequireDefault(__webpack_require__("dcd51803e40d5a652bc0"));

var _Feedback = _interopRequireDefault(__webpack_require__("637ce0e86e321ecdd9fe"));

var _FormFileInput = _interopRequireDefault(__webpack_require__("9f78337b90eeae1d803c"));

var _FormFileLabel = _interopRequireDefault(__webpack_require__("7c847e3c906d524e78cb"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormFile = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$feedbackTooltip = _ref.feedbackTooltip,
      feedbackTooltip = _ref$feedbackTooltip === void 0 ? false : _ref$feedbackTooltip,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      lang = _ref.lang,
      dataBrowse = _ref['data-browse'],
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$inputAs = _ref.inputAs,
      inputAs = _ref$inputAs === void 0 ? 'input' : _ref$inputAs,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"]);

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  var type = 'file';

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId;

  var innerFormContext = (0, _react.useMemo)(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;

  var input = /*#__PURE__*/_react.default.createElement(_FormFileInput.default, (0, _extends2.default)({}, props, {
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: inputAs,
    lang: lang
  }));

  return /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: innerFormContext
  }, /*#__PURE__*/_react.default.createElement(Component, {
    style: style,
    className: (0, _classnames.default)(className, bsPrefix, custom && "custom-" + type)
  }, children || /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, custom ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, input, hasLabel && /*#__PURE__*/_react.default.createElement(_FormFileLabel.default, {
    "data-browse": dataBrowse
  }, label)) : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, hasLabel && /*#__PURE__*/_react.default.createElement(_FormFileLabel.default, null, label), input), (isValid || isInvalid) && /*#__PURE__*/_react.default.createElement(_Feedback.default, {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});

FormFile.displayName = 'FormFile';
FormFile.Input = _FormFileInput.default;
FormFile.Label = _FormFileLabel.default;
var _default = FormFile;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "b86dd250ddd8d5deb24f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _default = (0, _createWithBsPrefix.default)('card-columns');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "b965a6a3307db3d4af80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var ModalContext = _react.default.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide: function onHide() {}
});

var _default = ModalContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "ba336afd6b16498c877c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _NavbarContext = _interopRequireDefault(__webpack_require__("ffb31eae7b0bff144515"));

var defaultProps = {
  label: 'Toggle navigation'
};

var NavbarToggle = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      onClick = _ref.onClick,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "label", "as", "onClick"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'navbar-toggler');

  var _ref2 = (0, _react.useContext)(_NavbarContext.default) || {},
      onToggle = _ref2.onToggle,
      expanded = _ref2.expanded;

  var handleClick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: (0, _classnames.default)(className, bsPrefix, !expanded && 'collapsed')
  }), children || /*#__PURE__*/_react.default.createElement("span", {
    className: bsPrefix + "-icon"
  }));
});

NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps;
var _default = NavbarToggle;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "ba59d313afd15c5c668b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var NavContext = _react.default.createContext(null);

NavContext.displayName = 'NavContext';
var _default = NavContext;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "baa38980bc52ea3fb583":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _default = (0, _createWithBsPrefix.default)('card-deck');

exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "bdc313c6abbecdc23838":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _reactDom = _interopRequireDefault(__webpack_require__("63f14ac74ce296f77f4d"));

var _useCallbackRef3 = _interopRequireDefault(__webpack_require__("de2dc95fecbd64da4ffb"));

var _useMergedRefs = _interopRequireDefault(__webpack_require__("d0c7e0066872e4e40b2c"));

var _popper = __webpack_require__("1d7da1db508b95e50e80");

var _usePopper2 = _interopRequireDefault(__webpack_require__("c864e96f527ba89e710c"));

var _useRootClose = _interopRequireDefault(__webpack_require__("b5b7e86e9a17deed2d71"));

var _useWaitForDOMRef = _interopRequireDefault(__webpack_require__("afa754a59a0cd8ad63fc"));

var _mergeOptionsWithPopperConfig = _interopRequireDefault(__webpack_require__("58317aeb4de2ce141196"));

/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay = /*#__PURE__*/_react["default"].forwardRef(function (props, outerRef) {
  var flip = props.flip,
      offset = props.offset,
      placement = props.placement,
      _props$containerPaddi = props.containerPadding,
      containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition;

  var _useCallbackRef = (0, _useCallbackRef3["default"])(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1];

  var _useCallbackRef2 = (0, _useCallbackRef3["default"])(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1];

  var mergedRef = (0, _useMergedRefs["default"])(attachRef, outerRef);
  var container = (0, _useWaitForDOMRef["default"])(props.container);
  var target = (0, _useWaitForDOMRef["default"])(props.target);

  var _useState = (0, _react.useState)(!props.show),
      exited = _useState[0],
      setExited = _useState[1];

  var _usePopper = (0, _usePopper2["default"])(target, rootElement, (0, _mergeOptionsWithPopperConfig["default"])({
    placement: placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip,
    offset: offset,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  })),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = (0, _objectWithoutPropertiesLoose2["default"])(_usePopper, ["styles", "attributes"]);

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  var handleHidden = function handleHidden() {
    setExited(true);

    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  var mountOverlay = props.show || Transition && !exited;
  (0, _useRootClose["default"])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  var child = props.children((0, _extends2["default"])({}, popper, {
    show: !!props.show,
    props: (0, _extends2["default"])({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: (0, _extends2["default"])({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));

  if (Transition) {
    var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered;
    child = /*#__PURE__*/_react["default"].createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? /*#__PURE__*/_reactDom["default"].createPortal(child, container) : null;
});

Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: _propTypes["default"].bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: _propTypes["default"].oneOf(_popper.placements),

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: _propTypes["default"].any,

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: _propTypes["default"].any,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: _propTypes["default"].bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: _propTypes["default"].number,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: _propTypes["default"].object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: _propTypes["default"].bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: _propTypes["default"].oneOf(['click', 'mousedown']),

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: _propTypes["default"].bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (props.rootClose) {
      var _PropTypes$func;

      return (_PropTypes$func = _propTypes["default"].func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }

    return _propTypes["default"].func.apply(_propTypes["default"], [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: _propTypes["default"].elementType,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: _propTypes["default"].func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: _propTypes["default"].func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: _propTypes["default"].func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: _propTypes["default"].func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: _propTypes["default"].func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: _propTypes["default"].func
};
var _default = Overlay;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "be012c649ec0cf7c1724":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__("1a5666701cabb0ba5667"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  placement: 'right'
};

var Tooltip = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _2 = _ref.show,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'tooltip');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: (0, _classnames.default)(className, bsPrefix, "bs-tooltip-" + primaryPlacement)
  }, props), /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    className: "arrow"
  }, arrowProps)), /*#__PURE__*/_react.default.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
});

Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
var _default = Tooltip;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "be6fd90d958d93a722a8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _FormCheck = _interopRequireDefault(__webpack_require__("8d77b4972c41061b968b"));

var Switch = _react.default.forwardRef(function (props, ref) {
  return /*#__PURE__*/_react.default.createElement(_FormCheck.default, (0, _extends2.default)({}, props, {
    ref: ref,
    type: "switch"
  }));
});

Switch.displayName = 'Switch';
Switch.Input = _FormCheck.default.Input;
Switch.Label = _FormCheck.default.Label;
var _default = Switch;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "bf2ff2ee7a4b3618c781":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.useDropdownMenu = useDropdownMenu;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useCallbackRef2 = _interopRequireDefault(__webpack_require__("de2dc95fecbd64da4ffb"));

var _DropdownContext = _interopRequireDefault(__webpack_require__("233051de8eb669d67289"));

var _usePopper2 = _interopRequireDefault(__webpack_require__("c864e96f527ba89e710c"));

var _useRootClose = _interopRequireDefault(__webpack_require__("b5b7e86e9a17deed2d71"));

var _mergeOptionsWithPopperConfig = _interopRequireDefault(__webpack_require__("58317aeb4de2ce141196"));

var noop = function noop() {};
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */


function useDropdownMenu(options) {
  if (options === void 0) {
    options = {};
  }

  var context = (0, _react.useContext)(_DropdownContext["default"]);

  var _useCallbackRef = (0, _useCallbackRef2["default"])(),
      arrowElement = _useCallbackRef[0],
      attachArrowRef = _useCallbackRef[1];

  var hasShownRef = (0, _react.useRef)(false);
  var _options = options,
      flip = _options.flip,
      offset = _options.offset,
      rootCloseEvent = _options.rootCloseEvent,
      _options$popperConfig = _options.popperConfig,
      popperConfig = _options$popperConfig === void 0 ? {} : _options$popperConfig,
      _options$usePopper = _options.usePopper,
      shouldUsePopper = _options$usePopper === void 0 ? !!context : _options$usePopper;
  var show = (context == null ? void 0 : context.show) == null ? options.show : context.show;
  var alignEnd = (context == null ? void 0 : context.alignEnd) == null ? options.alignEnd : context.alignEnd;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  var handleClose = function handleClose(e) {
    context == null ? void 0 : context.toggle(false, e);
  };

  var _ref = context || {},
      drop = _ref.drop,
      setMenu = _ref.setMenu,
      menuElement = _ref.menuElement,
      toggleElement = _ref.toggleElement;

  var placement = alignEnd ? 'bottom-end' : 'bottom-start';
  if (drop === 'up') placement = alignEnd ? 'top-end' : 'top-start';else if (drop === 'right') placement = alignEnd ? 'right-end' : 'right-start';else if (drop === 'left') placement = alignEnd ? 'left-end' : 'left-start';

  var _usePopper = (0, _usePopper2["default"])(toggleElement, menuElement, (0, _mergeOptionsWithPopperConfig["default"])({
    placement: placement,
    enabled: !!(shouldUsePopper && show),
    enableEvents: show,
    offset: offset,
    flip: flip,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  })),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = (0, _objectWithoutPropertiesLoose2["default"])(_usePopper, ["styles", "attributes"]);

  var menu;
  var menuProps = {
    ref: setMenu || noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  };
  var childArgs = {
    show: show,
    alignEnd: alignEnd,
    hasShown: hasShownRef.current,
    close: handleClose
  };

  if (!shouldUsePopper) {
    menu = (0, _extends2["default"])({}, childArgs, {
      props: menuProps
    });
  } else {
    menu = (0, _extends2["default"])({}, popper, childArgs, {
      props: (0, _extends2["default"])({}, menuProps, attributes.popper, {
        style: styles.popper
      }),
      arrowProps: (0, _extends2["default"])({
        ref: attachArrowRef
      }, attributes.arrow, {
        style: styles.arrow
      })
    });
  }

  (0, _useRootClose["default"])(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !(menu && show)
  });
  return menu;
}

var propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: _propTypes["default"].func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: _propTypes["default"].bool,

  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: _propTypes["default"].bool,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: _propTypes["default"].bool,
  usePopper: _propTypes["default"].oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: _propTypes["default"].object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: _propTypes["default"].string
};
var defaultProps = {
  usePopper: true
};

/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
function DropdownMenu(_ref2) {
  var children = _ref2.children,
      options = (0, _objectWithoutPropertiesLoose2["default"])(_ref2, ["children"]);
  var args = useDropdownMenu(options);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, args.hasShown ? children(args) : null);
}

DropdownMenu.displayName = 'ReactOverlaysDropdownMenu';
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
/** @component */

var _default = DropdownMenu;
exports["default"] = _default;

/***/ }),

/***/ "c01ad8f5710dcac98784":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = exports.propTypes = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: _propTypes.default.string,

  /**
   * Sets image as fluid image.
   */
  fluid: _propTypes.default.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: _propTypes.default.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: _propTypes.default.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: _propTypes.default.bool
};
exports.propTypes = propTypes;
var defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};

var Image = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      fluid = _ref.fluid,
      rounded = _ref.rounded,
      roundedCircle = _ref.roundedCircle,
      thumbnail = _ref.thumbnail,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'img');
  var classes = (0, _classnames.default)(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
  return /*#__PURE__*/_react.default.createElement("img", (0, _extends2.default)({
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, classes)
  }));
});

Image.displayName = 'Image';
Image.defaultProps = defaultProps;
var _default = Image;
exports.default = _default;

/***/ }),

/***/ "c2246cf2f30b754cff1d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _PageItem = _interopRequireWildcard(__webpack_require__("5ba26d9512ab490e3e27"));

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
var Pagination = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "size"]);
  var decoratedBsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'pagination');
  return /*#__PURE__*/_react.default.createElement("ul", (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, decoratedBsPrefix, size && decoratedBsPrefix + "-" + size)
  }), children);
});

Pagination.First = _PageItem.First;
Pagination.Prev = _PageItem.Prev;
Pagination.Ellipsis = _PageItem.Ellipsis;
Pagination.Item = _PageItem.default;
Pagination.Next = _PageItem.Next;
Pagination.Last = _PageItem.Last;
var _default = Pagination;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "c2943968f56ce09054de":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var context = _react.default.createContext(null);

context.displayName = 'AccordionContext';
var _default = context;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "c58af63bc990a5176640":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _ElementChildren = __webpack_require__("06fdc6612000b1e70f3d");

var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;

  _react.default.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */


    var element = /*#__PURE__*/_react.default.createElement(ProgressBar, null);

    if (child.type === element.type) return;
    var childType = child.type;
    var childIdentifier = _react.default.isValidElement(child) ? childType.displayName || childType.name || childType : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });

  return error;
}

var defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

function renderProgressBar(_ref, ref) {
  var _classNames;

  var min = _ref.min,
      now = _ref.now,
      max = _ref.max,
      label = _ref.label,
      srOnly = _ref.srOnly,
      striped = _ref.striped,
      animated = _ref.animated,
      className = _ref.className,
      style = _ref.style,
      variant = _ref.variant,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, props, {
    role: "progressbar",
    className: (0, _classnames.default)(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
    style: (0, _extends2.default)({
      width: getPercentage(now, min, max) + "%"
    }, style),
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max
  }), srOnly ? /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, label) : label);
}

var ProgressBar = _react.default.forwardRef(function (_ref2, ref) {
  var isChild = _ref2.isChild,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["isChild"]);
  props.bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(props.bsPrefix, 'progress');

  if (isChild) {
    return renderProgressBar(props, ref);
  }

  var min = props.min,
      now = props.now,
      max = props.max,
      label = props.label,
      srOnly = props.srOnly,
      striped = props.striped,
      animated = props.animated,
      bsPrefix = props.bsPrefix,
      variant = props.variant,
      className = props.className,
      children = props.children,
      wrapperProps = (0, _objectWithoutPropertiesLoose2.default)(props, ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"]);
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({
    ref: ref
  }, wrapperProps, {
    className: (0, _classnames.default)(className, bsPrefix)
  }), children ? (0, _ElementChildren.map)(children, function (child) {
    return (0, _react.cloneElement)(child, {
      isChild: true
    });
  }) : renderProgressBar({
    min: min,
    now: now,
    max: max,
    label: label,
    srOnly: srOnly,
    striped: striped,
    animated: animated,
    bsPrefix: bsPrefix,
    variant: variant
  }, ref));
});

ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = defaultProps;
var _default = ProgressBar;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "c7da1df19bd3d2c2faa6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Image = _interopRequireWildcard(__webpack_require__("c01ad8f5710dcac98784"));

var defaultProps = {
  fluid: true
};

var FigureImage = _react.default.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["className"]);
  return /*#__PURE__*/_react.default.createElement(_Image.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, 'figure-img')
  }));
});

FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = _Image.propTypes;
FigureImage.defaultProps = defaultProps;
var _default = FigureImage;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "c7f37bf2bf1f3c83c044":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  variant: null
};

var CardImg = _react.default.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "variant", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'card-img');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref,
    className: (0, _classnames.default)(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});

CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
var _default = CardImg;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "c830979352108dc796f5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _ownerDocument = _interopRequireDefault(__webpack_require__("d3283488a838adab1d98"));

var _safeFindDOMNode = _interopRequireDefault(__webpack_require__("f49a8d2e97267410d236"));

var _default = function _default(componentOrElement) {
  return (0, _ownerDocument["default"])((0, _safeFindDOMNode["default"])(componentOrElement));
};

exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "c864e96f527ba89e710c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = __webpack_require__("8af190b70a6bc55c6f1b");

var _useSafeState2 = _interopRequireDefault(__webpack_require__("d0840f89d74138e28970"));

var _popper = __webpack_require__("1d7da1db508b95e50e80");

var initialPopperStyles = function initialPopperStyles(position) {
  return {
    position: position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
};

var disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false
}; // until docjs supports type exports...

var ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: function effect(_ref) {
    var state = _ref.state;
    return function () {
      var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper;

      if ('removeAttribute' in reference) {
        var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;

    var state = _ref2.state;
    var _state$elements2 = state.elements,
        popper = _state$elements2.popper,
        reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      var ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
      _ref3$strategy = _ref3.strategy,
      strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
      _ref3$modifiers = _ref3.modifiers,
      modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
      config = (0, _objectWithoutPropertiesLoose2["default"])(_ref3, ["enabled", "placement", "strategy", "modifiers"]);

  var popperInstanceRef = (0, _react.useRef)();
  var update = (0, _react.useCallback)(function () {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = (0, _react.useCallback)(function () {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);

  var _useSafeState = (0, _useSafeState2["default"])((0, _react.useState)({
    placement: placement,
    update: update,
    forceUpdate: forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })),
      popperState = _useSafeState[0],
      setState = _useSafeState[1];

  var updateModifier = (0, _react.useMemo)(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'write',
      requires: ['computeStyles'],
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function (element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state: state,
          styles: styles,
          attributes: attributes,
          update: update,
          forceUpdate: forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  (0, _react.useEffect)(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, updateModifier, enabled]);
  (0, _react.useEffect)(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = (0, _popper.createPopper)(referenceElement, popperElement, (0, _extends2["default"])({}, config, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return (0, _extends2["default"])({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

var _default = usePopper;
exports["default"] = _default;
module.exports = exports.default;

/***/ }),

/***/ "c8ad3d4061c4d15b2c8f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _Overlay = _interopRequireDefault(__webpack_require__("bdc313c6abbecdc23838"));

var _safeFindDOMNode = _interopRequireDefault(__webpack_require__("f49a8d2e97267410d236"));

var _usePopperMarginModifiers = _interopRequireDefault(__webpack_require__("93b09faabedef6e40970"));

var _Fade = _interopRequireDefault(__webpack_require__("286777336e103589e6e9"));

var defaultProps = {
  transition: _Fade.default,
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref((0, _safeFindDOMNode.default)(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef((0, _safeFindDOMNode.default)(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      outerProps = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["children", "transition", "popperConfig"]);
  var popperRef = (0, _react.useRef)({});

  var _usePopperMarginModif = (0, _usePopperMarginModifiers.default)(),
      ref = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var actualTransition = transition === true ? _Fade.default : transition || null;
  return /*#__PURE__*/_react.default.createElement(_Overlay.default, (0, _extends2.default)({}, outerProps, {
    ref: ref,
    popperConfig: (0, _extends2.default)({}, popperConfig, {
      modifiers: marginModifiers.concat(popperConfig.modifiers || [])
    }),
    transition: actualTransition
  }), function (_ref2) {
    var _state$modifiersData$;

    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        update = _ref2.update,
        _ = _ref2.forceUpdate,
        placement = _ref2.placement,
        state = _ref2.state,
        props = (0, _objectWithoutPropertiesLoose2.default)(_ref2, ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"]);
    wrapRefs(overlayProps, arrowProps);
    var popper = Object.assign(popperRef.current, {
      state: state,
      scheduleUpdate: update,
      placement: placement,
      outOfBoundaries: (state == null ? void 0 : (_state$modifiersData$ = state.modifiersData.hide) == null ? void 0 : _state$modifiersData$.isReferenceHidden) || false
    });
    if (typeof overlay === 'function') return overlay((0, _extends2.default)({}, props, {}, overlayProps, {
      placement: placement,
      show: show,
      popper: popper,
      arrowProps: arrowProps
    }));
    return _react.default.cloneElement(overlay, (0, _extends2.default)({}, props, {}, overlayProps, {
      placement: placement,
      arrowProps: arrowProps,
      popper: popper,
      className: (0, _classnames.default)(overlay.props.className, !transition && show && 'show'),
      style: (0, _extends2.default)({}, overlay.props.style, {}, overlayProps.style)
    }));
  });
}

Overlay.defaultProps = defaultProps;
var _default = Overlay;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "cb12d4155305786bdcf4":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.useAccordionToggle = exports.Tooltip = exports.ToggleButtonGroup = exports.ToggleButton = exports.ToastHeader = exports.ToastBody = exports.Toast = exports.ThemeProvider = exports.Tabs = exports.TabPane = exports.Table = exports.TabContent = exports.TabContainer = exports.Tab = exports.SplitButton = exports.Spinner = exports.SafeAnchor = exports.Row = exports.ResponsiveEmbed = exports.ProgressBar = exports.PopoverContent = exports.PopoverTitle = exports.Popover = exports.Pagination = exports.PageItem = exports.OverlayTrigger = exports.Overlay = exports.NavLink = exports.NavItem = exports.NavDropdown = exports.NavbarBrand = exports.Navbar = exports.Nav = exports.ModalTitle = exports.ModalFooter = exports.ModalDialog = exports.ModalBody = exports.Modal = exports.Media = exports.ListGroupItem = exports.ListGroup = exports.Jumbotron = exports.InputGroup = exports.Figure = exports.Image = exports.Container = exports.FormText = exports.FormLabel = exports.FormGroup = exports.FormFile = exports.FormCheck = exports.FormControl = exports.Form = exports.Fade = exports.DropdownButton = exports.Dropdown = exports.Collapse = exports.Col = exports.CloseButton = exports.CarouselItem = exports.Carousel = exports.CardGroup = exports.CardImg = exports.CardDeck = exports.CardColumns = exports.Card = exports.ButtonToolbar = exports.ButtonGroup = exports.Button = exports.BreadcrumbItem = exports.Breadcrumb = exports.Badge = exports.Alert = exports.AccordionToggle = exports.AccordionCollapse = exports.AccordionContext = exports.Accordion = void 0;

var _Accordion = _interopRequireDefault(__webpack_require__("df0fc6492cb87837b6db"));

exports.Accordion = _Accordion.default;

var _AccordionContext = _interopRequireDefault(__webpack_require__("c2943968f56ce09054de"));

exports.AccordionContext = _AccordionContext.default;

var _AccordionCollapse = _interopRequireDefault(__webpack_require__("a84044dbee7b2bbcdb7e"));

exports.AccordionCollapse = _AccordionCollapse.default;

var _AccordionToggle = _interopRequireWildcard(__webpack_require__("202d903a0e43824101d7"));

exports.AccordionToggle = _AccordionToggle.default;
exports.useAccordionToggle = _AccordionToggle.useAccordionToggle;

var _Alert = _interopRequireDefault(__webpack_require__("3e11203087780e4bc126"));

exports.Alert = _Alert.default;

var _Badge = _interopRequireDefault(__webpack_require__("d1d89dc32f7dc2999821"));

exports.Badge = _Badge.default;

var _Breadcrumb = _interopRequireDefault(__webpack_require__("75d7e08c96b94d48e7fb"));

exports.Breadcrumb = _Breadcrumb.default;

var _BreadcrumbItem = _interopRequireDefault(__webpack_require__("95a1f3b6eaeaa6c73564"));

exports.BreadcrumbItem = _BreadcrumbItem.default;

var _Button = _interopRequireDefault(__webpack_require__("cbdd038bdcfd33980f7d"));

exports.Button = _Button.default;

var _ButtonGroup = _interopRequireDefault(__webpack_require__("7023eb88dbe6e040e03d"));

exports.ButtonGroup = _ButtonGroup.default;

var _ButtonToolbar = _interopRequireDefault(__webpack_require__("5db2369d4616698f94d2"));

exports.ButtonToolbar = _ButtonToolbar.default;

var _Card = _interopRequireDefault(__webpack_require__("2abe74b091530301b9b6"));

exports.Card = _Card.default;

var _CardColumns = _interopRequireDefault(__webpack_require__("b86dd250ddd8d5deb24f"));

exports.CardColumns = _CardColumns.default;

var _CardDeck = _interopRequireDefault(__webpack_require__("baa38980bc52ea3fb583"));

exports.CardDeck = _CardDeck.default;

var _CardImg = _interopRequireDefault(__webpack_require__("c7f37bf2bf1f3c83c044"));

exports.CardImg = _CardImg.default;

var _CardGroup = _interopRequireDefault(__webpack_require__("6a5186955da734342719"));

exports.CardGroup = _CardGroup.default;

var _Carousel = _interopRequireDefault(__webpack_require__("aeb9d93e0e709f822a57"));

exports.Carousel = _Carousel.default;

var _CarouselItem = _interopRequireDefault(__webpack_require__("09800db97cfafd52530f"));

exports.CarouselItem = _CarouselItem.default;

var _CloseButton = _interopRequireDefault(__webpack_require__("acc61bc9e1ebe5d11576"));

exports.CloseButton = _CloseButton.default;

var _Col = _interopRequireDefault(__webpack_require__("1f61575e8c12ef7ccb9f"));

exports.Col = _Col.default;

var _Collapse = _interopRequireDefault(__webpack_require__("1071238d53a57e392963"));

exports.Collapse = _Collapse.default;

var _Dropdown = _interopRequireDefault(__webpack_require__("e3144497092950c6bb2f"));

exports.Dropdown = _Dropdown.default;

var _DropdownButton = _interopRequireDefault(__webpack_require__("1415969cf531928cc37f"));

exports.DropdownButton = _DropdownButton.default;

var _Fade = _interopRequireDefault(__webpack_require__("286777336e103589e6e9"));

exports.Fade = _Fade.default;

var _Form = _interopRequireDefault(__webpack_require__("85f74626e82fd9d527ee"));

exports.Form = _Form.default;

var _FormControl = _interopRequireDefault(__webpack_require__("1e0de56188c6a20f36d9"));

exports.FormControl = _FormControl.default;

var _FormCheck = _interopRequireDefault(__webpack_require__("8d77b4972c41061b968b"));

exports.FormCheck = _FormCheck.default;

var _FormFile = _interopRequireDefault(__webpack_require__("b60f99953a589ddaafa9"));

exports.FormFile = _FormFile.default;

var _FormGroup = _interopRequireDefault(__webpack_require__("f75d23563a720ec3ae95"));

exports.FormGroup = _FormGroup.default;

var _FormLabel = _interopRequireDefault(__webpack_require__("16ccf52d91a9ffc07cb5"));

exports.FormLabel = _FormLabel.default;

var _FormText = _interopRequireDefault(__webpack_require__("48914f3eb940bdea746a"));

exports.FormText = _FormText.default;

var _Container = _interopRequireDefault(__webpack_require__("026fa72aba871a7fa9f3"));

exports.Container = _Container.default;

var _Image = _interopRequireDefault(__webpack_require__("c01ad8f5710dcac98784"));

exports.Image = _Image.default;

var _Figure = _interopRequireDefault(__webpack_require__("8aeed96bccbe1cbf0a5c"));

exports.Figure = _Figure.default;

var _InputGroup = _interopRequireDefault(__webpack_require__("e57c10a0dfe5a5071a80"));

exports.InputGroup = _InputGroup.default;

var _Jumbotron = _interopRequireDefault(__webpack_require__("d86bd4656849158bdb58"));

exports.Jumbotron = _Jumbotron.default;

var _ListGroup = _interopRequireDefault(__webpack_require__("0b21a2f378feddbf1783"));

exports.ListGroup = _ListGroup.default;

var _ListGroupItem = _interopRequireDefault(__webpack_require__("3c9e0eef86623bfc9c44"));

exports.ListGroupItem = _ListGroupItem.default;

var _Media = _interopRequireDefault(__webpack_require__("853acb4e3fa0559a1979"));

exports.Media = _Media.default;

var _Modal = _interopRequireDefault(__webpack_require__("84064cd1cb85c3a87452"));

exports.Modal = _Modal.default;

var _ModalBody = _interopRequireDefault(__webpack_require__("9a604eb1f24e1ff0cb52"));

exports.ModalBody = _ModalBody.default;

var _ModalDialog = _interopRequireDefault(__webpack_require__("5dacc1f50c9b820533df"));

exports.ModalDialog = _ModalDialog.default;

var _ModalFooter = _interopRequireDefault(__webpack_require__("869ae7eec70410ebd84b"));

exports.ModalFooter = _ModalFooter.default;

var _ModalTitle = _interopRequireDefault(__webpack_require__("7071859886a56a3c3351"));

exports.ModalTitle = _ModalTitle.default;

var _Nav = _interopRequireDefault(__webpack_require__("6e30c86de7a949ebfcf6"));

exports.Nav = _Nav.default;

var _Navbar = _interopRequireDefault(__webpack_require__("9beb583d50c91fd501ed"));

exports.Navbar = _Navbar.default;

var _NavbarBrand = _interopRequireDefault(__webpack_require__("69369cbc1253f5a977ac"));

exports.NavbarBrand = _NavbarBrand.default;

var _NavDropdown = _interopRequireDefault(__webpack_require__("659a3faed2392bdde51d"));

exports.NavDropdown = _NavDropdown.default;

var _NavItem = _interopRequireDefault(__webpack_require__("4afb215ecbe339533e9b"));

exports.NavItem = _NavItem.default;

var _NavLink = _interopRequireDefault(__webpack_require__("858b8678f66f499c4b82"));

exports.NavLink = _NavLink.default;

var _Overlay = _interopRequireDefault(__webpack_require__("c8ad3d4061c4d15b2c8f"));

exports.Overlay = _Overlay.default;

var _OverlayTrigger = _interopRequireDefault(__webpack_require__("9bfde907f7c97b036e3c"));

exports.OverlayTrigger = _OverlayTrigger.default;

var _PageItem = _interopRequireDefault(__webpack_require__("5ba26d9512ab490e3e27"));

exports.PageItem = _PageItem.default;

var _Pagination = _interopRequireDefault(__webpack_require__("c2246cf2f30b754cff1d"));

exports.Pagination = _Pagination.default;

var _Popover = _interopRequireDefault(__webpack_require__("3cbc255c4bdba3b881bb"));

exports.Popover = _Popover.default;

var _PopoverTitle = _interopRequireDefault(__webpack_require__("18c755cab954b2563001"));

exports.PopoverTitle = _PopoverTitle.default;

var _PopoverContent = _interopRequireDefault(__webpack_require__("22d6d5fb9c90c1dcf698"));

exports.PopoverContent = _PopoverContent.default;

var _ProgressBar = _interopRequireDefault(__webpack_require__("c58af63bc990a5176640"));

exports.ProgressBar = _ProgressBar.default;

var _ResponsiveEmbed = _interopRequireDefault(__webpack_require__("72f45d30caa0c821511c"));

exports.ResponsiveEmbed = _ResponsiveEmbed.default;

var _Row = _interopRequireDefault(__webpack_require__("b489011d620936174477"));

exports.Row = _Row.default;

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

exports.SafeAnchor = _SafeAnchor.default;

var _Spinner = _interopRequireDefault(__webpack_require__("dd8cab53f1ebd5482935"));

exports.Spinner = _Spinner.default;

var _SplitButton = _interopRequireDefault(__webpack_require__("7412a688311388ec28e2"));

exports.SplitButton = _SplitButton.default;

var _Tab = _interopRequireDefault(__webpack_require__("6a058152bf977bf63e62"));

exports.Tab = _Tab.default;

var _TabContainer = _interopRequireDefault(__webpack_require__("6785d492ebe4c033b0ca"));

exports.TabContainer = _TabContainer.default;

var _TabContent = _interopRequireDefault(__webpack_require__("247799f4d48bc96b8aab"));

exports.TabContent = _TabContent.default;

var _Table = _interopRequireDefault(__webpack_require__("3f8a7a9a0f510812aa39"));

exports.Table = _Table.default;

var _TabPane = _interopRequireDefault(__webpack_require__("0a059c115e29cfe72a82"));

exports.TabPane = _TabPane.default;

var _Tabs = _interopRequireDefault(__webpack_require__("df4ae03e51772d42e095"));

exports.Tabs = _Tabs.default;

var _ThemeProvider = _interopRequireDefault(__webpack_require__("de45080f617146192f27"));

exports.ThemeProvider = _ThemeProvider.default;

var _Toast = _interopRequireDefault(__webpack_require__("460fdd20e48be06f53ff"));

exports.Toast = _Toast.default;

var _ToastBody = _interopRequireDefault(__webpack_require__("762d2ccb254685fa018b"));

exports.ToastBody = _ToastBody.default;

var _ToastHeader = _interopRequireDefault(__webpack_require__("76f3c7e4879738d31a35"));

exports.ToastHeader = _ToastHeader.default;

var _ToggleButton = _interopRequireDefault(__webpack_require__("87c5342957385679ec7d"));

exports.ToggleButton = _ToggleButton.default;

var _ToggleButtonGroup = _interopRequireDefault(__webpack_require__("cbafdc58c41d32832eeb"));

exports.ToggleButtonGroup = _ToggleButtonGroup.default;

var _Tooltip = _interopRequireDefault(__webpack_require__("be012c649ec0cf7c1724"));

exports.Tooltip = _Tooltip.default;

/***/ }),

/***/ "cbafdc58c41d32832eeb":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _invariant = _interopRequireDefault(__webpack_require__("6a4f9c383785f9168266"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _createChainedFunction = _interopRequireDefault(__webpack_require__("a4ff8f03a4755a589ed2"));

var _ElementChildren = __webpack_require__("06fdc6612000b1e70f3d");

var _ButtonGroup = _interopRequireDefault(__webpack_require__("7023eb88dbe6e040e03d"));

var _ToggleButton = _interopRequireDefault(__webpack_require__("87c5342957385679ec7d"));

var defaultProps = {
  type: 'radio',
  vertical: false
};

var ToggleButtonGroup = _react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    value: 'onChange'
  }),
      children = _useUncontrolled.children,
      type = _useUncontrolled.type,
      name = _useUncontrolled.name,
      value = _useUncontrolled.value,
      onChange = _useUncontrolled.onChange,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["children", "type", "name", "value", "onChange"]);

  var getValues = function getValues() {
    return value == null ? [] : [].concat(value);
  };

  var handleToggle = function handleToggle(inputVal, event) {
    if (!onChange) {
      return;
    }

    var values = getValues();
    var isActive = values.indexOf(inputVal) !== -1;

    if (type === 'radio') {
      if (!isActive && onChange) onChange(inputVal, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== inputVal;
      }), event);
    } else {
      onChange([].concat(values, [inputVal]), event);
    }
  };

  !(type !== 'radio' || !!name) ?  false ? undefined : invariant(false) : void 0;
  return /*#__PURE__*/_react.default.createElement(_ButtonGroup.default, (0, _extends2.default)({}, controlledProps, {
    ref: ref,
    toggle: true
  }), (0, _ElementChildren.map)(children, function (child) {
    var values = getValues();
    var _child$props = child.props,
        childVal = _child$props.value,
        childOnChange = _child$props.onChange;

    var handler = function handler(e) {
      return handleToggle(childVal, e);
    };

    return _react.default.cloneElement(child, {
      type: type,
      name: child.name || name,
      checked: values.indexOf(childVal) !== -1,
      onChange: (0, _createChainedFunction.default)(childOnChange, handler)
    });
  }));
});

ToggleButtonGroup.defaultProps = defaultProps;
ToggleButtonGroup.Button = _ToggleButton.default;
var _default = ToggleButtonGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "cbdd038bdcfd33980f7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _SafeAnchor = _interopRequireDefault(__webpack_require__("515b08b506beda290369"));

var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};

var Button = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'btn');
  var classes = (0, _classnames.default)(className, prefix, active && 'active', variant && prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/_react.default.createElement(_SafeAnchor.default, (0, _extends2.default)({}, props, {
      as: as,
      ref: ref,
      className: (0, _classnames.default)(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (type) {
    props.type = type;
  } else if (!as) {
    props.type = 'button';
  }

  var Component = as || 'button';
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    className: classes
  }));
});

Button.displayName = 'Button';
Button.defaultProps = defaultProps;
var _default = Button;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "d06396b6ecc5f398cc0c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__("1a5666701cabb0ba5667"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _DropdownToggle = __webpack_require__("83906f29cc4ff0d5ac1b");

var _useMergedRefs = _interopRequireDefault(__webpack_require__("d0c7e0066872e4e40b2c"));

var _Button = _interopRequireDefault(__webpack_require__("cbdd038bdcfd33980f7d"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _useWrappedRefWithWarning = _interopRequireDefault(__webpack_require__("04b48582e102cd179009"));

var DropdownToggle = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      split = _ref.split,
      className = _ref.className,
      childBsPrefix = _ref.childBsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? _Button.default : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "split", "className", "childBsPrefix", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-toggle');

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  var _useDropdownToggle = (0, _DropdownToggle.useDropdownToggle)(),
      toggleProps = _useDropdownToggle[0],
      toggle = _useDropdownToggle[1].toggle;

  toggleProps.ref = (0, _useMergedRefs.default)(toggleProps.ref, (0, _useWrappedRefWithWarning.default)(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    onClick: toggle,
    className: (0, _classnames.default)(className, prefix, split && prefix + "-split")
  }, toggleProps, props));
});

DropdownToggle.displayName = 'DropdownToggle';
var _default = DropdownToggle;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "d1d89dc32f7dc2999821":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  pill: false
};

var Badge = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'span' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "pill", "className", "as"]);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'badge');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});

Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
var _default = Badge;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "d86bd4656849158bdb58":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var defaultProps = {
  fluid: false
};

var Jumbotron = _react.default.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["as", "className", "fluid", "bsPrefix"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, classes)
  }));
});

Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
var _default = Jumbotron;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "dd8cab53f1ebd5482935":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var Spinner = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      animation = _ref.animation,
      size = _ref.size,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "variant", "animation", "size", "children", "as", "className"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'spinner');
  var bsSpinnerPrefix = bsPrefix + "-" + animation;
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsSpinnerPrefix, size && bsSpinnerPrefix + "-" + size, variant && "text-" + variant)
  }), children);
});

Spinner.displayName = 'Spinner';
var _default = Spinner;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "de45080f617146192f27":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.useBootstrapPrefix = useBootstrapPrefix;
exports.createBootstrapComponent = createBootstrapComponent;
exports.default = exports.ThemeConsumer = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var ThemeContext = _react.default.createContext({});

var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;
exports.ThemeConsumer = Consumer;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = (0, _react.useMemo)(function () {
    return (0, _extends2.default)({}, prefixes);
  }, [prefixes]);
  return /*#__PURE__*/_react.default.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = (0, _react.useContext)(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;

  var Wrapped = _react.default.forwardRef(function (_ref2, ref) {
    var props = (0, _extends2.default)({}, _ref2);
    props[forwardRefAs] = ref;
    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
      bsPrefix: bsPrefix
    }));
  });

  Wrapped.displayName = "Bootstrap(" + (Component.displayName || Component.name) + ")";
  return Wrapped;
}

var _default = ThemeProvider;
exports.default = _default;

/***/ }),

/***/ "df0fc6492cb87837b6db":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _AccordionToggle = _interopRequireDefault(__webpack_require__("202d903a0e43824101d7"));

var _SelectableContext = _interopRequireDefault(__webpack_require__("8091d4c30d49f465376d"));

var _AccordionCollapse = _interopRequireDefault(__webpack_require__("a84044dbee7b2bbcdb7e"));

var _AccordionContext = _interopRequireDefault(__webpack_require__("c2943968f56ce09054de"));

var Accordion = _react.default.forwardRef(function (props, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      activeKey = _useUncontrolled.activeKey,
      bsPrefix = _useUncontrolled.bsPrefix,
      children = _useUncontrolled.children,
      className = _useUncontrolled.className,
      onSelect = _useUncontrolled.onSelect,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"]);

  var finalClassName = (0, _classnames.default)(className, (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'accordion'));
  return /*#__PURE__*/_react.default.createElement(_AccordionContext.default.Provider, {
    value: activeKey || null
  }, /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: onSelect || null
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, controlledProps, {
    className: finalClassName
  }), children)));
});

Accordion.displayName = 'Accordion';
Accordion.Toggle = _AccordionToggle.default;
Accordion.Collapse = _AccordionCollapse.default;
var _default = Accordion;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "df4ae03e51772d42e095":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _isRequiredForA11y = _interopRequireDefault(__webpack_require__("1a5666701cabb0ba5667"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _Nav = _interopRequireDefault(__webpack_require__("6e30c86de7a949ebfcf6"));

var _NavLink = _interopRequireDefault(__webpack_require__("858b8678f66f499c4b82"));

var _NavItem = _interopRequireDefault(__webpack_require__("4afb215ecbe339533e9b"));

var _TabContainer = _interopRequireDefault(__webpack_require__("6785d492ebe4c033b0ca"));

var _TabContent = _interopRequireDefault(__webpack_require__("247799f4d48bc96b8aab"));

var _TabPane = _interopRequireDefault(__webpack_require__("0a059c115e29cfe72a82"));

var _ElementChildren = __webpack_require__("06fdc6612000b1e70f3d");

var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  (0, _ElementChildren.forEach)(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  var _child$props = child.props,
      title = _child$props.title,
      eventKey = _child$props.eventKey,
      disabled = _child$props.disabled,
      tabClassName = _child$props.tabClassName,
      id = _child$props.id;

  if (title == null) {
    return null;
  }

  return /*#__PURE__*/_react.default.createElement(_NavItem.default, {
    as: _NavLink.default,
    eventKey: eventKey,
    disabled: disabled,
    id: id,
    className: tabClassName
  }, title);
}

var Tabs = function Tabs(props) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      onSelect = _useUncontrolled.onSelect,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children,
      _useUncontrolled$acti = _useUncontrolled.activeKey,
      activeKey = _useUncontrolled$acti === void 0 ? getDefaultActiveKey(children) : _useUncontrolled$acti,
      controlledProps = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"]);

  return /*#__PURE__*/_react.default.createElement(_TabContainer.default, {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: transition,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, /*#__PURE__*/_react.default.createElement(_Nav.default, (0, _extends2.default)({}, controlledProps, {
    role: "tablist",
    as: "nav"
  }), (0, _ElementChildren.map)(children, renderTab)), /*#__PURE__*/_react.default.createElement(_TabContent.default, null, (0, _ElementChildren.map)(children, function (child) {
    var childProps = (0, _extends2.default)({}, child.props);
    delete childProps.title;
    delete childProps.disabled;
    delete childProps.tabClassName;
    return /*#__PURE__*/_react.default.createElement(_TabPane.default, childProps);
  })));
};

Tabs.defaultProps = defaultProps;
Tabs.displayName = 'Tabs';
var _default = Tabs;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "e3144497092950c6bb2f":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _Dropdown = _interopRequireDefault(__webpack_require__("2f47003c31e4fb470962"));

var _uncontrollable = __webpack_require__("6ceae4e83b8e5dfc54a0");

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _DropdownItem = _interopRequireDefault(__webpack_require__("3bf77fa27aeae955e236"));

var _DropdownMenu = _interopRequireDefault(__webpack_require__("e4875d417913942d157b"));

var _DropdownToggle = _interopRequireDefault(__webpack_require__("d06396b6ecc5f398cc0c"));

var _SelectableContext = _interopRequireDefault(__webpack_require__("8091d4c30d49f465376d"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var DropdownHeader = (0, _createWithBsPrefix.default)('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
var DropdownDivider = (0, _createWithBsPrefix.default)('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
var DropdownItemText = (0, _createWithBsPrefix.default)('dropdown-item-text', {
  Component: 'span'
});
var defaultProps = {
  navbar: false
};

var Dropdown = _react.default.forwardRef(function (pProps, ref) {
  var _useUncontrolled = (0, _uncontrollable.useUncontrolled)(pProps, {
    show: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      drop = _useUncontrolled.drop,
      show = _useUncontrolled.show,
      className = _useUncontrolled.className,
      alignRight = _useUncontrolled.alignRight,
      onSelect = _useUncontrolled.onSelect,
      onToggle = _useUncontrolled.onToggle,
      focusFirstItemOnShow = _useUncontrolled.focusFirstItemOnShow,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      _4 = _useUncontrolled.navbar,
      props = (0, _objectWithoutPropertiesLoose2.default)(_useUncontrolled, ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"]);

  var onSelectCtx = (0, _react.useContext)(_SelectableContext.default);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown');
  var handleToggle = (0, _useEventCallback.default)(function (nextShow, event, source) {
    if (source === void 0) {
      source = event.type;
    }

    if (event.currentTarget === document) source = 'rootClose';

    if (onToggle) {
      onToggle(nextShow, event, {
        source: source
      });
    }
  });
  var handleSelect = (0, _useEventCallback.default)(function (key, event) {
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
    handleToggle(false, event, 'select');
  });
  return /*#__PURE__*/_react.default.createElement(_SelectableContext.default.Provider, {
    value: handleSelect
  }, /*#__PURE__*/_react.default.createElement(_Dropdown.default, {
    drop: drop,
    show: show,
    alignEnd: alignRight,
    onToggle: handleToggle,
    focusFirstItemOnShow: focusFirstItemOnShow,
    itemSelector: "." + prefix + "-item:not(.disabled):not(:disabled)"
  }, function (_ref) {
    var dropdownProps = _ref.props;
    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, dropdownProps, {
      ref: ref,
      className: (0, _classnames.default)(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
    }));
  }));
});

Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = defaultProps;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;
Dropdown.Item = _DropdownItem.default;
Dropdown.ItemText = DropdownItemText;
Dropdown.Menu = _DropdownMenu.default;
Dropdown.Toggle = _DropdownToggle.default;
var _default = Dropdown;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "e4875d417913942d157b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = exports.alignPropType = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _propTypes = _interopRequireDefault(__webpack_require__("8a2d1b95e05b6a321e74"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _DropdownMenu = __webpack_require__("bf2ff2ee7a4b3618c781");

var _useMergedRefs = _interopRequireDefault(__webpack_require__("d0c7e0066872e4e40b2c"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _NavbarContext = _interopRequireDefault(__webpack_require__("ffb31eae7b0bff144515"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var _useWrappedRefWithWarning = _interopRequireDefault(__webpack_require__("04b48582e102cd179009"));

var _usePopperMarginModifiers = _interopRequireDefault(__webpack_require__("93b09faabedef6e40970"));

var alignDirection = _propTypes.default.oneOf(['left', 'right']);

var alignPropType = _propTypes.default.oneOfType([alignDirection, _propTypes.default.shape({
  sm: alignDirection
}), _propTypes.default.shape({
  md: alignDirection
}), _propTypes.default.shape({
  lg: alignDirection
}), _propTypes.default.shape({
  xl: alignDirection
})]);

exports.alignPropType = alignPropType;
var defaultProps = {
  align: 'left',
  alignRight: false,
  flip: true
}; // TODO: remove this hack

var DropdownMenu = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      align = _ref.align,
      alignRight = _ref.alignRight,
      rootCloseEvent = _ref.rootCloseEvent,
      flip = _ref.flip,
      showProps = _ref.show,
      renderOnMount = _ref.renderOnMount,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      popperConfig = _ref.popperConfig,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "align", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"]);
  var isNavbar = (0, _react.useContext)(_NavbarContext.default);
  var prefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'dropdown-menu');

  var _usePopperMarginModif = (0, _usePopperMarginModifiers.default)(),
      popperRef = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var alignClasses = [];

  if (align) {
    if (typeof align === 'object') {
      var keys = Object.keys(align);
       false ? undefined : void 0;

      if (keys.length) {
        var brkPoint = keys[0];
        var direction = align[brkPoint]; // .dropdown-menu-right is required for responsively aligning
        // left in addition to align left classes.
        // Reuse alignRight to toggle the class below.

        alignRight = direction === 'left';
        alignClasses.push(prefix + "-" + brkPoint + "-" + direction);
      }
    } else if (align === 'right') {
      alignRight = true;
    }
  }

  var _ref2 = (0, _DropdownMenu.useDropdownMenu)({
    flip: flip,
    rootCloseEvent: rootCloseEvent,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar && alignClasses.length === 0,
    popperConfig: (0, _extends2.default)({}, popperConfig, {
      modifiers: marginModifiers.concat((popperConfig == null ? void 0 : popperConfig.modifiers) || [])
    })
  }),
      hasShown = _ref2.hasShown,
      placement = _ref2.placement,
      show = _ref2.show,
      alignEnd = _ref2.alignEnd,
      close = _ref2.close,
      menuProps = _ref2.props;

  menuProps.ref = (0, _useMergedRefs.default)(popperRef, (0, _useMergedRefs.default)((0, _useWrappedRefWithWarning.default)(ref, 'DropdownMenu'), menuProps.ref));
  if (!hasShown && !renderOnMount) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;
    menuProps.close = close;
    menuProps.alignRight = alignEnd;
  }

  if (placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    props.style = (0, _extends2.default)({}, props.style, {}, menuProps.style);
    props['x-placement'] = placement;
  }

  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, menuProps, {
    className: _classnames.default.apply(void 0, [className, prefix, show && 'show', alignEnd && prefix + "-right"].concat(alignClasses))
  }));
});

DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
var _default = DropdownMenu;
exports.default = _default;

/***/ }),

/***/ "e57c10a0dfe5a5071a80":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var _createWithBsPrefix = _interopRequireDefault(__webpack_require__("10fa21b44717d82288e9"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var InputGroupAppend = (0, _createWithBsPrefix.default)('input-group-append');
var InputGroupPrepend = (0, _createWithBsPrefix.default)('input-group-prepend');
var InputGroupText = (0, _createWithBsPrefix.default)('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return /*#__PURE__*/_react.default.createElement(InputGroupText, null, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return /*#__PURE__*/_react.default.createElement(InputGroupText, null, /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    type: "radio"
  }, props)));
};

/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "size", "className", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'input-group');
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({
    ref: ref
  }, props, {
    className: (0, _classnames.default)(className, bsPrefix, size && bsPrefix + "-" + size)
  }));
});

InputGroup.displayName = 'InputGroup';
var InputGroupWithExtras = (0, _extends2.default)({}, InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox,
  Append: InputGroupAppend,
  Prepend: InputGroupPrepend
});
var _default = InputGroupWithExtras;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "e6d545cec3d57e45ef7c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__("df7235aba277f4bc0911"));

var _css3 = _interopRequireDefault(__webpack_require__("1b43b4f548a0c483d331"));

var _querySelectorAll = _interopRequireDefault(__webpack_require__("04d6e2d4983bf78bb6b9"));

var _scrollbarSize = _interopRequireDefault(__webpack_require__("967ef5cd753367ae6601"));

var _ModalManager2 = _interopRequireDefault(__webpack_require__("0db083887c1a20dde7f2"));

var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager = /*#__PURE__*/function (_ModalManager) {
  (0, _inheritsLoose2.default)(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    return _ModalManager.apply(this, arguments) || this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.adjustAndStore = function adjustAndStore(prop, element, adjust) {
    var _css;

    var actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    (0, _css3.default)(element, (_css = {}, _css[prop] = parseFloat((0, _css3.default)(element, prop)) + adjust + "px", _css));
  };

  _proto.restore = function restore(prop, element) {
    var value = element.dataset[prop];

    if (value !== undefined) {
      var _css2;

      delete element.dataset[prop];
      (0, _css3.default)(element, (_css2 = {}, _css2[prop] = value, _css2));
    }
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = (0, _scrollbarSize.default)();
    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('paddingRight', el, size);
    });
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, -size);
    });
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    (0, _querySelectorAll.default)(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.restore('paddingRight', el);
    });
    (0, _querySelectorAll.default)(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
    (0, _querySelectorAll.default)(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
  };

  return BootstrapModalManager;
}(_ModalManager2.default);

exports.default = BootstrapModalManager;
module.exports = exports["default"];

/***/ }),

/***/ "e89a55f8a1933b8494ff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _useEventCallback = _interopRequireDefault(__webpack_require__("976c83b14986293285d6"));

var _warning = _interopRequireDefault(__webpack_require__("49a47d064cfbf2949ee5"));

var _NavContext = _interopRequireDefault(__webpack_require__("ba59d313afd15c5c668b"));

var _SelectableContext = _interopRequireWildcard(__webpack_require__("8091d4c30d49f465376d"));

var defaultProps = {
  disabled: false
};

var AbstractNavItem = _react.default.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["active", "className", "eventKey", "onSelect", "onClick", "as"]);
  var navKey = (0, _SelectableContext.makeEventKey)(eventKey, props.href);
  var parentOnSelect = (0, _react.useContext)(_SelectableContext.default);
  var navContext = (0, _react.useContext)(_NavContext.default);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    var contextControllerId = navContext.getControllerId(navKey);
    var contextControlledId = navContext.getControlledId(navKey);
     false ? undefined : void 0;
     false ? undefined : void 0;
    props['data-rb-event-key'] = navKey;
    props.id = contextControllerId || props.id;
    props['aria-controls'] = contextControlledId || props['aria-controls'];
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    props.tabIndex = isActive ? props.tabIndex : -1;
    props['aria-selected'] = isActive;
  }

  var handleOnclick = (0, _useEventCallback.default)(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: (0, _classnames.default)(className, isActive && 'active')
  }));
});

AbstractNavItem.defaultProps = defaultProps;
var _default = AbstractNavItem;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "f49a8d2e97267410d236":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports["default"] = safeFindDOMNode;

var _reactDom = _interopRequireDefault(__webpack_require__("63f14ac74ce296f77f4d"));

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return _reactDom["default"].findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

module.exports = exports.default;

/***/ }),

/***/ "f75d23563a720ec3ae95":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormGroup = _react.default.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["bsPrefix", "className", "children", "controlId", "as"]);
  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(bsPrefix, 'form-group');
  var context = (0, _react.useMemo)(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return /*#__PURE__*/_react.default.createElement(_FormContext.default.Provider, {
    value: context
  }, /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    className: (0, _classnames.default)(className, bsPrefix)
  }), children));
});

FormGroup.displayName = 'FormGroup';
var _default = FormGroup;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "fa0cc70445dcb306f97d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("16ed5e814ccb32d55f28");

var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("2c62cf50f9b98ad5e2af"));

var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__("84ed169f5b76a6b15fc0"));

var _classnames = _interopRequireDefault(__webpack_require__("b912ecc4473ae8a2ff0b"));

var _react = _interopRequireWildcard(__webpack_require__("8af190b70a6bc55c6f1b"));

var _FormContext = _interopRequireDefault(__webpack_require__("89e528d82aad1a5b7245"));

var _ThemeProvider = __webpack_require__("de45080f617146192f27");

var FormCheckInput = _react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      isStatic = _ref.isStatic,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = (0, _objectWithoutPropertiesLoose2.default)(_ref, ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"]);

  var _useContext = (0, _react.useContext)(_FormContext.default),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-input'] : [bsPrefix, 'form-check-input'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = (0, _ThemeProvider.useBootstrapPrefix)(prefix, defaultPrefix);
  return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
    ref: ref,
    type: type,
    id: id || controlId,
    className: (0, _classnames.default)(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});

FormCheckInput.displayName = 'FormCheckInput';
var _default = FormCheckInput;
exports.default = _default;
module.exports = exports["default"];

/***/ }),

/***/ "ffb31eae7b0bff144515":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("8e6d34d5e2b1c9c449c0");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__("8af190b70a6bc55c6f1b"));

var context = _react.default.createContext(null);

context.displayName = 'NavbarContext';
var _default = context;
exports.default = _default;
module.exports = exports["default"];

/***/ })

}]); 