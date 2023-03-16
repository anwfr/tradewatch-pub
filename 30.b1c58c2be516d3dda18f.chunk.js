// [AIV_SHORT]  Build version: 1.0.0 - Thursday, March 16th, 2023, 10:19:36 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[30],{

/***/ "8937ca26cad1b574ef33":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("8af190b70a6bc55c6f1b");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 12 modules
var index_es = __webpack_require__("ab039aecd4a1d4fedc0e");

// CONCATENATED MODULE: ./app/containers/NotFoundPage/messages.js
/*
 * NotFoundPage Messages
 *
 * This contains all the text for the NotFoundPage container.
 */

var scope = 'app.containers.NotFoundPage';
/* harmony default export */ var messages = (Object(index_es["defineMessages"])({
  header: {
    id: "".concat(scope, ".header"),
    defaultMessage: 'This is the NotFoundPage container!'
  }
}));
// EXTERNAL MODULE: ./app/services/uiUtils.js
var uiUtils = __webpack_require__("31745dad8e82e7819831");

// CONCATENATED MODULE: ./app/containers/NotFoundPage/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NotFound; });
var REACT_ELEMENT_TYPE;

function _jsx(type, props, key, children) { if (!REACT_ELEMENT_TYPE) { REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol["for"] && Symbol["for"]("react.element") || 0xeac7; } var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = { children: void 0 }; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = new Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }

/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 */




function NotFound() {
  return _jsx("div", {}, void 0, uiUtils["a" /* default */].pageTitle('Not found'), _jsx("h1", {}, void 0, /*#__PURE__*/react_default.a.createElement(index_es["FormattedMessage"], messages.header)));
}

/***/ })

}]); 