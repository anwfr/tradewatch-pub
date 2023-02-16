// [AIV_SHORT]  Build version: 1.0.0 - Thursday, February 16th, 2023, 3:58:15 PM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "04246f24ceb46658ac34":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var ClassNames_1 = __webpack_require__("2a0e6625517f73d0f51b");
exports.ToolbarButtonGroup = function (props) {
    return (React.createElement("ul", { className: ClassNames_1.classNames("mde-header-group", { hidden: props.hidden }) }, props.children));
};


/***/ }),

/***/ "09f66eceaf918072c23d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* jshint browser: true */
Object.defineProperty(exports, "__esModule", { value: true });
// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
var properties = [
    "direction",
    "boxSizing",
    "width",
    "height",
    "overflowX",
    "overflowY",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderStyle",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "fontStretch",
    "fontSize",
    "fontSizeAdjust",
    "lineHeight",
    "fontFamily",
    "textAlign",
    "textTransform",
    "textIndent",
    "textDecoration",
    "letterSpacing",
    "wordSpacing",
    "tabSize",
    "MozTabSize"
];
var isBrowser = typeof window !== "undefined";
var isFirefox = isBrowser && window.mozInnerScreenX != null;
function getCaretCoordinates(element, append) {
    if (!isBrowser) {
        throw new Error("getCaretCoordinates should only be called in a browser");
    }
    // The mirror div will replicate the textarea's style
    var div = document.createElement("div");
    div.id = "input-textarea-caret-position-mirror-div";
    document.body.appendChild(div);
    var style = div.style;
    var computed = window.getComputedStyle
        ? window.getComputedStyle(element)
        : element.currentStyle; // currentStyle for IE < 9
    // Default textarea styles
    style.whiteSpace = "pre-wrap";
    style.wordWrap = "break-word"; // only for textarea-s
    // Position off-screen
    style.position = "absolute"; // required to return coordinates properly
    style.visibility = "hidden"; // not 'display: none' because we want rendering
    // Transfer the element's properties to the div
    properties.forEach(function (prop) {
        style[prop] = computed[prop];
    });
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > parseInt(computed.height))
            style.overflowY = "scroll";
    }
    else {
        style.overflow = "hidden"; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, element.selectionStart);
    if (append) {
        div.textContent += append;
    }
    var span = document.createElement("span");
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(element.selectionEnd) || "."; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    var coordinates = {
        top: span.offsetTop + parseInt(computed["borderTopWidth"]),
        left: span.offsetLeft + parseInt(computed["borderLeftWidth"]),
        lineHeight: parseInt(computed["lineHeight"])
    };
    document.body.removeChild(div);
    return coordinates;
}
exports.getCaretCoordinates = getCaretCoordinates;


/***/ }),

/***/ "1763ae4d971b75c4e41c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var ClassNames_1 = __webpack_require__("2a0e6625517f73d0f51b");
var Preview = /** @class */ (function (_super) {
    __extends(Preview, _super);
    function Preview(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            loading: true
        };
        return _this;
    }
    Preview.prototype.componentDidMount = function () {
        var _this = this;
        var _a = this.props, markdown = _a.markdown, generateMarkdownPreview = _a.generateMarkdownPreview;
        generateMarkdownPreview(markdown).then(function (preview) {
            _this.setState({
                preview: preview,
                loading: false
            });
        });
    };
    Preview.prototype.componentWillReceiveProps = function (nextProps) {
        var _this = this;
        if (nextProps.markdown !== this.props.markdown) {
            nextProps.generateMarkdownPreview(nextProps.markdown).then(function (preview) {
                _this.setState({
                    preview: preview,
                    loading: false
                });
            });
        }
    };
    Preview.prototype.render = function () {
        var _a = this.props, classes = _a.classes, minHeight = _a.minHeight, loadingPreview = _a.loadingPreview, refObject = _a.refObject;
        var _b = this.state, preview = _b.preview, loading = _b.loading;
        var finalHtml = loading ? loadingPreview : preview;
        var content;
        if (typeof finalHtml === "string") {
            content = (React.createElement("div", { className: "mde-preview-content", dangerouslySetInnerHTML: { __html: finalHtml || "<p>&nbsp;</p>" }, ref: refObject }));
        }
        else {
            content = React.createElement("div", { className: "mde-preview-content" }, finalHtml);
        }
        return (React.createElement("div", { className: ClassNames_1.classNames("mde-preview", classes, { loading: loading }), style: { minHeight: minHeight + 10 }, "data-testid": "mde-preview" }, content));
    };
    return Preview;
}(React.Component));
exports.Preview = Preview;


/***/ }),

/***/ "198db530b1bd8e1d2156":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("04246f24ceb46658ac34"));
__export(__webpack_require__("84bc03a12be8c7077169"));
__export(__webpack_require__("aa15075a839beec7a815"));
__export(__webpack_require__("1763ae4d971b75c4e41c"));
__export(__webpack_require__("8fc66e04d92a979fa07c"));
__export(__webpack_require__("59b5d49d1f13f1e0bd11"));
__export(__webpack_require__("250acea9733acc6eae98"));
__export(__webpack_require__("429d194df9dfacf0124b"));


/***/ }),

/***/ "1c03d118b527fa68ed67":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("0e326f80368fd0b1333e")(false);
// Module
exports.push([module.i, ".mde-header {\n  flex-shrink: 0;\n  display: flex;\n  flex-wrap: wrap;\n  align-items: stretch;\n  border-bottom: 1px solid #c8ccd0;\n  border-radius: 2px 2px 0 0;\n  background: #f9f9f9; }\n  .mde-header .mde-tabs {\n    display: flex;\n    flex-direction: row; }\n    .mde-header .mde-tabs button {\n      border-radius: 2px;\n      margin: 6px 3px;\n      background-color: transparent;\n      border: 1px solid transparent;\n      cursor: pointer; }\n      .mde-header .mde-tabs button:first-child {\n        margin-left: 6px; }\n      .mde-header .mde-tabs button.selected {\n        border: 1px solid #c8ccd0; }\n  .mde-header .svg-icon {\n    width: 1em;\n    height: 1em;\n    display: inline-block;\n    font-size: inherit;\n    overflow: visible;\n    vertical-align: -.125em; }\n  .mde-header ul.mde-header-group {\n    margin: 0;\n    padding: 10px;\n    list-style: none;\n    display: flex;\n    flex-wrap: nowrap; }\n    .mde-header ul.mde-header-group.hidden {\n      visibility: hidden; }\n    .mde-header ul.mde-header-group li.mde-header-item {\n      display: inline-block;\n      position: relative;\n      margin: 0 4px; }\n      .mde-header ul.mde-header-group li.mde-header-item button {\n        text-align: left;\n        cursor: pointer;\n        height: 22px;\n        padding: 4px;\n        margin: 0;\n        border: none;\n        background: none;\n        color: #242729; }\n\n@keyframes tooltip-appear {\n  from {\n    opacity: 0; }\n  to {\n    opacity: 1; } }\n        .mde-header ul.mde-header-group li.mde-header-item button.tooltipped:hover::before {\n          animation-name: tooltip-appear;\n          animation-duration: 0.2s;\n          animation-delay: 0.5s;\n          animation-fill-mode: forwards;\n          opacity: 0;\n          position: absolute;\n          z-index: 1000001;\n          width: 0;\n          height: 0;\n          color: rgba(0, 0, 0, 0.8);\n          pointer-events: none;\n          content: \"\";\n          border: 5px solid transparent;\n          top: -5px;\n          right: 50%;\n          bottom: auto;\n          margin-right: -5px;\n          border-top-color: rgba(0, 0, 0, 0.8); }\n        .mde-header ul.mde-header-group li.mde-header-item button.tooltipped:hover::after {\n          animation-name: tooltip-appear;\n          animation-duration: 0.2s;\n          animation-delay: 0.5s;\n          animation-fill-mode: forwards;\n          font-size: 11px;\n          opacity: 0;\n          position: absolute;\n          z-index: 1000000;\n          padding: 5px 8px;\n          color: #fff;\n          pointer-events: none;\n          content: attr(aria-label);\n          background: rgba(0, 0, 0, 0.8);\n          border-radius: 3px;\n          right: 50%;\n          bottom: 100%;\n          transform: translateX(50%);\n          margin-bottom: 5px;\n          white-space: nowrap; }\n\n.mde-textarea-wrapper {\n  position: relative; }\n  .mde-textarea-wrapper textarea.mde-text {\n    width: 100%;\n    border: 0;\n    padding: 10px;\n    vertical-align: top;\n    resize: none;\n    overflow-y: auto; }\n\n.mde-preview .mde-preview-content {\n  padding: 10px; }\n  .mde-preview .mde-preview-content p, .mde-preview .mde-preview-content blockquote, .mde-preview .mde-preview-content ul, .mde-preview .mde-preview-content ol, .mde-preview .mde-preview-content dl, .mde-preview .mde-preview-content table, .mde-preview .mde-preview-content pre {\n    margin-top: 0;\n    margin-bottom: 16px; }\n  .mde-preview .mde-preview-content h1, .mde-preview .mde-preview-content h2, .mde-preview .mde-preview-content h3 {\n    margin-top: 24px;\n    margin-bottom: 16px;\n    font-weight: 600;\n    line-height: 1.25;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 0.3em; }\n  .mde-preview .mde-preview-content h1 {\n    font-size: 1.6em; }\n  .mde-preview .mde-preview-content h2 {\n    font-size: 1.4em; }\n  .mde-preview .mde-preview-content h3 {\n    font-size: 1.2em; }\n  .mde-preview .mde-preview-content ul, .mde-preview .mde-preview-content ol {\n    padding-left: 2em; }\n  .mde-preview .mde-preview-content blockquote {\n    margin-left: 0;\n    padding: 0 1em;\n    color: #777;\n    border-left: 0.25em solid #ddd; }\n    .mde-preview .mde-preview-content blockquote > :first-child {\n      margin-top: 0; }\n    .mde-preview .mde-preview-content blockquote > :last-child {\n      margin-bottom: 0; }\n  .mde-preview .mde-preview-content code {\n    padding: 0.2em 0 0.2em 0;\n    margin: 0;\n    font-size: 90%;\n    background-color: rgba(0, 0, 0, 0.04);\n    border-radius: 3px; }\n    .mde-preview .mde-preview-content code::before, .mde-preview .mde-preview-content code::after {\n      letter-spacing: -0.2em;\n      content: \"\\00a0\"; }\n  .mde-preview .mde-preview-content pre {\n    padding: 16px;\n    overflow: auto;\n    font-size: 85%;\n    line-height: 1.45;\n    background-color: #f7f7f7;\n    border-radius: 3px; }\n    .mde-preview .mde-preview-content pre code {\n      display: inline;\n      padding: 0;\n      margin: 0;\n      overflow: visible;\n      line-height: inherit;\n      word-wrap: normal;\n      background-color: transparent;\n      border: 0; }\n      .mde-preview .mde-preview-content pre code::before, .mde-preview .mde-preview-content pre code::after {\n        content: none; }\n    .mde-preview .mde-preview-content pre > code {\n      padding: 0;\n      margin: 0;\n      font-size: 100%;\n      word-break: normal;\n      white-space: pre;\n      background: transparent;\n      border: 0; }\n  .mde-preview .mde-preview-content a {\n    color: #4078c0;\n    text-decoration: none; }\n    .mde-preview .mde-preview-content a:hover {\n      text-decoration: underline; }\n  .mde-preview .mde-preview-content > *:first-child {\n    margin-top: 0 !important; }\n  .mde-preview .mde-preview-content > *:last-child {\n    margin-bottom: 0 !important; }\n  .mde-preview .mde-preview-content::after {\n    display: table;\n    clear: both;\n    content: \"\"; }\n  .mde-preview .mde-preview-content table {\n    display: block;\n    width: 100%;\n    border-spacing: 0;\n    border-collapse: collapse; }\n    .mde-preview .mde-preview-content table thead th {\n      font-weight: bold; }\n    .mde-preview .mde-preview-content table th, .mde-preview .mde-preview-content table td {\n      padding: 6px 13px;\n      border: 1px solid #c8ccd0; }\n\n.react-mde {\n  border: 1px solid #c8ccd0;\n  border-radius: 2px; }\n  .react-mde * {\n    box-sizing: border-box; }\n  .react-mde .grip {\n    border-top: 1px solid #c8ccd0;\n    background-color: #f9f9f9;\n    text-align: center;\n    height: 10px;\n    color: black;\n    cursor: s-resize; }\n    .react-mde .grip .icon {\n      height: 10px; }\n  .react-mde .invisible {\n    display: none; }\n\nul.mde-suggestions {\n  position: absolute;\n  min-width: 180px;\n  padding: 0;\n  margin: 20px 0 0;\n  list-style: none;\n  cursor: pointer;\n  background: #fff;\n  border: 1px solid #c8ccd0;\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(27, 31, 35, 0.15); }\n  ul.mde-suggestions li {\n    padding: 4px 8px;\n    border-bottom: 1px solid #e1e4e8; }\n    ul.mde-suggestions li:first-child {\n      border-top-left-radius: 2px;\n      border-top-right-radius: 2px; }\n    ul.mde-suggestions li:last-child {\n      border-bottom-right-radius: 2px;\n      border-bottom-left-radius: 2px; }\n    ul.mde-suggestions li:hover, ul.mde-suggestions li[aria-selected=true] {\n      color: white;\n      background-color: #0366d6; }\n", ""]);



/***/ }),

/***/ "250acea9733acc6eae98":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var _1 = __webpack_require__("198db530b1bd8e1d2156");
var defaults_1 = __webpack_require__("324086dcfe8ede518b6a");
var react_mde_en_1 = __webpack_require__("de6ce88c1e9a04216acc");
var icons_1 = __webpack_require__("79140c3e34b317c87e7d");
var ClassNames_1 = __webpack_require__("2a0e6625517f73d0f51b");
var command_orchestrator_1 = __webpack_require__("349c844e38140c09ff3c");
var grip_svg_1 = __webpack_require__("afcd6a87a46bff2c44df");
var ReactMde = /** @class */ (function (_super) {
    __extends(ReactMde, _super);
    function ReactMde(props) {
        var _a;
        var _this = _super.call(this, props) || this;
        // resizeYStart will be null when it is not resizing
        _this.gripDrag = null;
        _this.handleTextChange = function (value) {
            var onChange = _this.props.onChange;
            onChange(value);
        };
        _this.handleGripMouseDown = function (event) {
            _this.gripDrag = {
                originalHeight: _this.state.editorHeight,
                originalDragY: event.clientY
            };
        };
        _this.handleGripMouseUp = function () {
            _this.gripDrag = null;
        };
        _this.handleGripMouseMove = function (event) {
            if (_this.gripDrag !== null) {
                var newHeight = _this.gripDrag.originalHeight +
                    event.clientY -
                    _this.gripDrag.originalDragY;
                if (newHeight >= _this.props.minEditorHeight &&
                    newHeight <= _this.props.maxEditorHeight) {
                    _this.setState(__assign(__assign({}, _this.state), { editorHeight: _this.gripDrag.originalHeight +
                            (event.clientY - _this.gripDrag.originalDragY) }));
                }
            }
        };
        _this.handlePaste = function (event) { return __awaiter(_this, void 0, void 0, function () {
            var paste;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        paste = this.props.paste;
                        if (!paste || !paste.saveImage) {
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.commandOrchestrator.executePasteCommand(event)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.handleTabChange = function (newTab) {
            var onTabChange = _this.props.onTabChange;
            onTabChange(newTab);
        };
        _this.handleCommand = function (commandName) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.commandOrchestrator.executeCommand(commandName)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        _this.finalRefs = __assign({}, (props.refs || {}));
        if (!_this.finalRefs.textarea) {
            _this.finalRefs.textarea = React.createRef();
        }
        if (!_this.finalRefs.preview) {
            _this.finalRefs.preview = React.createRef();
        }
        _this.commandOrchestrator = new command_orchestrator_1.CommandOrchestrator(_this.props.commands, _this.finalRefs.textarea, _this.props.l18n, _this.props.paste);
        var minEditorHeight = Math.min(props.maxEditorHeight, props.minEditorHeight);
        _this.state = {
            editorHeight: (_a = props.initialEditorHeight, (_a !== null && _a !== void 0 ? _a : minEditorHeight))
        };
        return _this;
    }
    ReactMde.prototype.componentDidMount = function () {
        document.addEventListener("mousemove", this.handleGripMouseMove);
        document.addEventListener("mouseup", this.handleGripMouseUp);
    };
    ReactMde.prototype.render = function () {
        var _this = this;
        var _a, _b, _c, _d, _e, _f;
        var _g = this.props, getIcon = _g.getIcon, toolbarCommands = _g.toolbarCommands, classes = _g.classes, loadingPreview = _g.loadingPreview, readOnly = _g.readOnly, disablePreview = _g.disablePreview, value = _g.value, l18n = _g.l18n, minPreviewHeight = _g.minPreviewHeight, childProps = _g.childProps, selectedTab = _g.selectedTab, generateMarkdownPreview = _g.generateMarkdownPreview, loadSuggestions = _g.loadSuggestions, suggestionTriggerCharacters = _g.suggestionTriggerCharacters, textAreaComponent = _g.textAreaComponent;
        var finalChildProps = childProps || {};
        var toolbarButtons = toolbarCommands.map(function (group) {
            return group.map(function (commandName) {
                var command = _this.commandOrchestrator.getCommand(commandName);
                return {
                    commandName: commandName,
                    buttonContent: command.icon
                        ? command.icon(getIcon)
                        : getIcon(commandName),
                    buttonProps: command.buttonProps,
                    buttonComponentClass: command.buttonComponentClass
                };
            });
        });
        return (React.createElement("div", { className: ClassNames_1.classNames("react-mde", "react-mde-tabbed-layout", (_a = classes) === null || _a === void 0 ? void 0 : _a.reactMde) },
            React.createElement(_1.Toolbar, { classes: (_b = classes) === null || _b === void 0 ? void 0 : _b.toolbar, buttons: toolbarButtons, onCommand: this.handleCommand, onTabChange: this.handleTabChange, tab: selectedTab, readOnly: readOnly, disablePreview: disablePreview, l18n: l18n, buttonProps: finalChildProps.commandButtons, writeButtonProps: finalChildProps.writeButton, previewButtonProps: finalChildProps.previewButton }),
            React.createElement("div", { className: ClassNames_1.classNames({ invisible: selectedTab !== "write" }) },
                React.createElement(_1.TextArea, { classes: (_c = classes) === null || _c === void 0 ? void 0 : _c.textArea, suggestionsDropdownClasses: (_d = classes) === null || _d === void 0 ? void 0 : _d.suggestionsDropdown, refObject: this.finalRefs.textarea, onChange: this.handleTextChange, onPaste: this.handlePaste, readOnly: readOnly, textAreaComponent: textAreaComponent, textAreaProps: childProps && childProps.textArea, height: this.state.editorHeight, value: value, suggestionTriggerCharacters: suggestionTriggerCharacters, loadSuggestions: loadSuggestions, onPossibleKeyCommand: this.commandOrchestrator.handlePossibleKeyCommand }),
                React.createElement("div", { className: ClassNames_1.classNames("grip", (_e = classes) === null || _e === void 0 ? void 0 : _e.grip), onMouseDown: this.handleGripMouseDown },
                    React.createElement(grip_svg_1.GripSvg, null))),
            selectedTab !== "write" && (React.createElement(_1.Preview, { classes: (_f = classes) === null || _f === void 0 ? void 0 : _f.preview, refObject: this.finalRefs.preview, loadingPreview: loadingPreview, minHeight: minPreviewHeight, generateMarkdownPreview: generateMarkdownPreview, markdown: value }))));
    };
    ReactMde.defaultProps = {
        commands: defaults_1.getDefaultCommandMap(),
        toolbarCommands: defaults_1.getDefaultToolbarCommands(),
        getIcon: function (name) { return React.createElement(icons_1.SvgIcon, { icon: name }); },
        readOnly: false,
        l18n: react_mde_en_1.enL18n,
        minEditorHeight: 200,
        maxEditorHeight: 500,
        minPreviewHeight: 200,
        selectedTab: "write",
        disablePreview: false,
        suggestionTriggerCharacters: ["@"]
    };
    return ReactMde;
}(React.Component));
exports.ReactMde = ReactMde;


/***/ }),

/***/ "2a0e6625517f73d0f51b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
Object.defineProperty(exports, "__esModule", { value: true });
function isString(classValue) {
    return typeof classValue === "string";
}
function isNonEmptyArray(classValue) {
    return Array.isArray(classValue) && classValue.length > 0;
}
function isClassDictionary(classValue) {
    return typeof classValue === "object";
}
function classNames() {
    var classValues = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classValues[_i] = arguments[_i];
    }
    var classes = [];
    for (var i = 0; i < classValues.length; i++) {
        var classValue = classValues[i];
        if (!classValue)
            continue;
        if (isString(classValue)) {
            classes.push(classValue);
        }
        else if (isNonEmptyArray(classValue)) {
            var inner = classNames.apply(null, classValue);
            if (inner) {
                classes.push(inner);
            }
        }
        else if (isClassDictionary(classValue)) {
            for (var key in classValue) {
                if (classValue.hasOwnProperty(key) && classValue[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(" ");
}
exports.classNames = classNames;


/***/ }),

/***/ "2baf8fd4719676fe22b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function getSurroundingWord(text, position) {
    if (!text)
        throw Error("Argument 'text' should be truthy");
    var isWordDelimiter = function (c) { return c === " " || c.charCodeAt(0) === 10; };
    // leftIndex is initialized to 0 because if selection is 0, it won't even enter the iteration
    var start = 0;
    // rightIndex is initialized to text.length because if selection is equal to text.length it won't even enter the interation
    var end = text.length;
    // iterate to the left
    for (var i = position; i - 1 > -1; i--) {
        if (isWordDelimiter(text[i - 1])) {
            start = i;
            break;
        }
    }
    // iterate to the right
    for (var i = position; i < text.length; i++) {
        if (isWordDelimiter(text[i])) {
            end = i;
            break;
        }
    }
    return { start: start, end: end };
}
exports.getSurroundingWord = getSurroundingWord;
/**
 * If the cursor is inside a word and (selection.start === selection.end)
 * returns a new Selection where the whole word is selected
 * @param text
 * @param selection
 */
function selectWord(_a) {
    var text = _a.text, selection = _a.selection;
    if (text && text.length && selection.start === selection.end) {
        // the user is pointing to a word
        return getSurroundingWord(text, selection.start);
    }
    return selection;
}
exports.selectWord = selectWord;
/**
 *  Gets the number of line-breaks that would have to be inserted before the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the previous text
 */
function getBreaksNeededForEmptyLineBefore(text, startPosition) {
    if (text === void 0) { text = ""; }
    if (startPosition === 0)
        return 0;
    // rules:
    // - If we're in the first line, no breaks are needed
    // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
    //      may need to insert 0, 1 or 2 breaks
    var neededBreaks = 2;
    var isInFirstLine = true;
    for (var i = startPosition - 1; i >= 0 && neededBreaks >= 0; i--) {
        switch (text.charCodeAt(i)) {
            case 32: // blank space
                continue;
            case 10: // line break
                neededBreaks--;
                isInFirstLine = false;
                break;
            default:
                return neededBreaks;
        }
    }
    return isInFirstLine ? 0 : neededBreaks;
}
exports.getBreaksNeededForEmptyLineBefore = getBreaksNeededForEmptyLineBefore;
/**
 *  Gets the number of line-breaks that would have to be inserted after the given 'startPosition'
 *  to make sure there's an empty line between 'startPosition' and the next text
 */
function getBreaksNeededForEmptyLineAfter(text, startPosition) {
    if (text === void 0) { text = ""; }
    if (startPosition === text.length - 1)
        return 0;
    // rules:
    // - If we're in the first line, no breaks are needed
    // - Otherwise there must be 2 breaks before the previous character. Depending on how many breaks exist already, we
    //      may need to insert 0, 1 or 2 breaks
    var neededBreaks = 2;
    var isInLastLine = true;
    for (var i = startPosition; i < text.length && neededBreaks >= 0; i++) {
        switch (text.charCodeAt(i)) {
            case 32:
                continue;
            case 10: {
                neededBreaks--;
                isInLastLine = false;
                break;
            }
            default:
                return neededBreaks;
        }
    }
    return isInLastLine ? 0 : neededBreaks;
}
exports.getBreaksNeededForEmptyLineAfter = getBreaksNeededForEmptyLineAfter;


/***/ }),

/***/ "324086dcfe8ede518b6a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var headerCommand_1 = __webpack_require__("84573188ef3f6fecc3ee");
var boldCommand_1 = __webpack_require__("8e2599f340af13992630");
var italicCommand_1 = __webpack_require__("e002175ca9b88424d689");
var strikeThroughCommand_1 = __webpack_require__("b15f94dbe8f61c154d5c");
var linkCommand_1 = __webpack_require__("e8456e032b4de302dbc9");
var quoteCommand_1 = __webpack_require__("aef85b81f360b190b2cf");
var codeCommand_1 = __webpack_require__("9ff4013b8c6fbb3ad9ff");
var listCommands_1 = __webpack_require__("f1164b392c24f859977e");
var imageCommand_1 = __webpack_require__("c7494822964723200cae");
var save_image_command_1 = __webpack_require__("41f1eaedf23400f72ef5");
function getDefaultToolbarCommands() {
    return [
        ["header", "bold", "italic", "strikethrough"],
        ["link", "quote", "code", "image"],
        ["unordered-list", "ordered-list", "checked-list"]
    ];
}
exports.getDefaultToolbarCommands = getDefaultToolbarCommands;
function getDefaultCommandMap() {
    return {
        header: headerCommand_1.headerCommand,
        bold: boldCommand_1.boldCommand,
        italic: italicCommand_1.italicCommand,
        strikethrough: strikeThroughCommand_1.strikeThroughCommand,
        link: linkCommand_1.linkCommand,
        quote: quoteCommand_1.quoteCommand,
        code: codeCommand_1.codeCommand,
        image: imageCommand_1.imageCommand,
        "unordered-list": listCommands_1.unorderedListCommand,
        "ordered-list": listCommands_1.orderedListCommand,
        "checked-list": listCommands_1.checkedListCommand,
        "save-image": save_image_command_1.saveImageCommand
    };
}
exports.getDefaultCommandMap = getDefaultCommandMap;
function getDefaultSaveImageCommandName() {
    return "save-image";
}
exports.getDefaultSaveImageCommandName = getDefaultSaveImageCommandName;


/***/ }),

/***/ "349c844e38140c09ff3c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = __webpack_require__("c785a65f582f2bcc977a");
var InsertTextAtPosition_1 = __webpack_require__("b4b0e395f925ff8cfbb5");
var command_utils_1 = __webpack_require__("a38304430962b6d2374b");
var defaults_1 = __webpack_require__("324086dcfe8ede518b6a");
var TextAreaTextApi = /** @class */ (function () {
    function TextAreaTextApi(textAreaRef) {
        this.textAreaRef = textAreaRef;
    }
    TextAreaTextApi.prototype.replaceSelection = function (text) {
        var textArea = this.textAreaRef.current;
        InsertTextAtPosition_1.insertText(textArea, text);
        return getStateFromTextArea(textArea);
    };
    TextAreaTextApi.prototype.setSelectionRange = function (selection) {
        var textArea = this.textAreaRef.current;
        textArea.focus();
        textArea.selectionStart = selection.start;
        textArea.selectionEnd = selection.end;
        return getStateFromTextArea(textArea);
    };
    TextAreaTextApi.prototype.getState = function () {
        var textArea = this.textAreaRef.current;
        return getStateFromTextArea(textArea);
    };
    return TextAreaTextApi;
}());
exports.TextAreaTextApi = TextAreaTextApi;
function getStateFromTextArea(textArea) {
    return {
        selection: {
            start: textArea.selectionStart,
            end: textArea.selectionEnd
        },
        text: textArea.value,
        selectedText: textArea.value.slice(textArea.selectionStart, textArea.selectionEnd)
    };
}
exports.getStateFromTextArea = getStateFromTextArea;
var CommandOrchestrator = /** @class */ (function () {
    function CommandOrchestrator(customCommands, textArea, l18n, pasteOptions) {
        var _this = this;
        this.getCommand = function (name) {
            var command = _this.commandMap[name];
            if (!command) {
                throw new Error("Cannot execute command. Command not found: " + name);
            }
            return command;
        };
        /**
         * Tries to find a command the wants to handle the keyboard event.
         * If a command is found, it is executed and the function returns
         */
        this.handlePossibleKeyCommand = function (e) {
            for (var _i = 0, _a = _this.keyActivatedCommands; _i < _a.length; _i++) {
                var commandName = _a[_i];
                if (_this.getCommand(commandName).handleKeyCommand(e)) {
                    _this.executeCommand(commandName).then(function (r) { });
                    return true;
                }
            }
            return false;
        };
        if (pasteOptions && !pasteOptions.saveImage) {
            throw new Error("paste options are incomplete. saveImage are required ");
        }
        this.commandMap = __assign(__assign({}, __1.getDefaultCommandMap()), (customCommands || {}));
        this.pasteOptions = pasteOptions;
        this.keyActivatedCommands = command_utils_1.extractKeyActivatedCommands(customCommands);
        this.textAreaRef = textArea;
        this.textApi = new TextAreaTextApi(textArea);
        this.l18n = l18n;
    }
    CommandOrchestrator.prototype.executeCommand = function (commandName, context) {
        return __awaiter(this, void 0, void 0, function () {
            var command, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.isExecuting) {
                            // The simplest thing to do is to ignore commands while
                            // there is already a command executing. The alternative would be to queue commands
                            // but there is no guarantee that the state after one command executes will still be compatible
                            // with the next one. In fact, it is likely not to be.
                            return [2 /*return*/];
                        }
                        this.isExecuting = true;
                        command = this.commandMap[commandName];
                        result = command.execute({
                            initialState: getStateFromTextArea(this.textAreaRef.current),
                            textApi: this.textApi,
                            l18n: this.l18n,
                            context: context
                        });
                        return [4 /*yield*/, result];
                    case 1:
                        _a.sent();
                        this.isExecuting = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Executes the paste command
     */
    CommandOrchestrator.prototype.executePasteCommand = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (this.pasteOptions) {
                    return [2 /*return*/, this.executeCommand(this.pasteOptions.command || defaults_1.getDefaultSaveImageCommandName(), {
                            saveImage: this.pasteOptions.saveImage,
                            event: event
                        })];
                }
                return [2 /*return*/];
            });
        });
    };
    /**
     * Returns a command by name
     * @param name
     */
    CommandOrchestrator.prototype.getCommandByName = function (name) {
        return this.commandMap[name];
    };
    return CommandOrchestrator;
}());
exports.CommandOrchestrator = CommandOrchestrator;


/***/ }),

/***/ "41f1eaedf23400f72ef5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var files_1 = __webpack_require__("96b53022fc189a67510b");
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.saveImageCommand = {
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi, context = _a.context, l18n = _a.l18n;
        return __awaiter(this, void 0, void 0, function () {
            var pasteContext, event, saveImage, items, _b, _c, _i, index, item, breaksBeforeCount, breaksBefore, placeHolder, blob, blobContents, savingImage, imageUrl, newState, uploadingText, realImageMarkdown, selectionDelta;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        if (!context && !isPasteContext(context)) {
                            throw new Error("wrong context");
                        }
                        pasteContext = context;
                        event = pasteContext.event, saveImage = pasteContext.saveImage;
                        items = event.clipboardData.items;
                        _b = [];
                        for (_c in items)
                            _b.push(_c);
                        _i = 0;
                        _d.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 5];
                        index = _b[_i];
                        item = items[index];
                        if (!(item.kind === "file")) return [3 /*break*/, 4];
                        breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(initialState.text, initialState.selection.start);
                        breaksBefore = Array(breaksBeforeCount + 1).join("\n");
                        placeHolder = breaksBefore + "![" + l18n.uploadingImage + "]()";
                        textApi.replaceSelection(placeHolder);
                        blob = item.getAsFile();
                        return [4 /*yield*/, files_1.readFileAsync(blob)];
                    case 2:
                        blobContents = _d.sent();
                        savingImage = saveImage(blobContents);
                        return [4 /*yield*/, savingImage.next()];
                    case 3:
                        imageUrl = (_d.sent()).value;
                        newState = textApi.getState();
                        uploadingText = newState.text.substr(initialState.selection.start, placeHolder.length);
                        if (uploadingText === placeHolder) {
                            // In this case, the user did not touch the placeholder. Good user
                            // we will replace it with the real one that came from the server
                            textApi.setSelectionRange({
                                start: initialState.selection.start,
                                end: initialState.selection.start + placeHolder.length
                            });
                            realImageMarkdown = breaksBefore + "![image](" + imageUrl + ")";
                            selectionDelta = realImageMarkdown.length - placeHolder.length;
                            textApi.replaceSelection(realImageMarkdown);
                            textApi.setSelectionRange({
                                start: newState.selection.start + selectionDelta,
                                end: newState.selection.end + selectionDelta
                            });
                        }
                        _d.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/];
                }
            });
        });
    }
};
function isPasteContext(context) {
    return context.type === "paste";
}


/***/ }),

/***/ "429d194df9dfacf0124b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var react_1 = __webpack_require__("8af190b70a6bc55c6f1b");
var ClassNames_1 = __webpack_require__("2a0e6625517f73d0f51b");
exports.SuggestionsDropdown = function (_a) {
    var classes = _a.classes, suggestions = _a.suggestions, caret = _a.caret, onSuggestionSelected = _a.onSuggestionSelected, focusIndex = _a.focusIndex, textAreaRef = _a.textAreaRef;
    var handleSuggestionClick = react_1.useCallback(function (event) {
        event.preventDefault();
        var index = parseInt(event.currentTarget.attributes["data-index"].value);
        onSuggestionSelected(index);
    }, [suggestions]);
    // onMouseDown should be cancelled because onClick will handle it propertly. This way, the textarea does not lose
    // focus
    var handleMouseDown = react_1.useCallback(function (event) { return event.preventDefault(); }, []);
    return (React.createElement("ul", { className: ClassNames_1.classNames("mde-suggestions", classes), style: {
            left: caret.left - textAreaRef.current.scrollLeft,
            top: caret.top - textAreaRef.current.scrollTop
        } }, suggestions.map(function (s, i) { return (React.createElement("li", { onClick: handleSuggestionClick, onMouseDown: handleMouseDown, key: i, "aria-selected": focusIndex === i ? "true" : "false", "data-index": "" + i }, s.preview)); })));
};


/***/ }),

/***/ "42ebac27a836ea7f1fe9":
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__("1c03d118b527fa68ed67");

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

/***/ "4e70200744e512e1f5b2":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Calculates modulus, like %, except that it works with negative numbers
 */
function mod(n, m) {
    return ((n % m) + m) % m;
}
exports.mod = mod;


/***/ }),

/***/ "59b5d49d1f13f1e0bd11":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var ClassNames_1 = __webpack_require__("2a0e6625517f73d0f51b");
var ToolbarButtonGroup_1 = __webpack_require__("04246f24ceb46658ac34");
var ToolbarButton_1 = __webpack_require__("84bc03a12be8c7077169");
var Toolbar = /** @class */ (function (_super) {
    __extends(Toolbar, _super);
    function Toolbar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleTabChange = function (tab) {
            var onTabChange = _this.props.onTabChange;
            onTabChange(tab);
        };
        return _this;
    }
    Toolbar.prototype.render = function () {
        var _this = this;
        var l18n = this.props.l18n;
        var _a = this.props, classes = _a.classes, children = _a.children, buttons = _a.buttons, onCommand = _a.onCommand, readOnly = _a.readOnly, disablePreview = _a.disablePreview, writeButtonProps = _a.writeButtonProps, previewButtonProps = _a.previewButtonProps, buttonProps = _a.buttonProps;
        if ((!buttons || buttons.length === 0) && !children) {
            return null;
        }
        var writePreviewTabs = (React.createElement("div", { className: "mde-tabs" },
            React.createElement("button", __assign({ type: "button", className: ClassNames_1.classNames({ selected: this.props.tab === "write" }), onClick: function () { return _this.handleTabChange("write"); } }, writeButtonProps), l18n.write),
            React.createElement("button", __assign({ type: "button", className: ClassNames_1.classNames({ selected: this.props.tab === "preview" }), onClick: function () { return _this.handleTabChange("preview"); } }, previewButtonProps), l18n.preview)));
        return (React.createElement("div", { className: ClassNames_1.classNames("mde-header", classes) },
            !disablePreview && writePreviewTabs,
            buttons.map(function (commandGroup, i) { return (React.createElement(ToolbarButtonGroup_1.ToolbarButtonGroup, { key: i, hidden: _this.props.tab === "preview" }, commandGroup.map(function (c, j) {
                return (React.createElement(ToolbarButton_1.ToolbarButton, { key: j, name: c.commandName, buttonContent: c.buttonContent, buttonProps: __assign(__assign({}, (buttonProps || {})), c.buttonProps), onClick: function () { return onCommand(c.commandName); }, readOnly: readOnly, buttonComponentClass: c.buttonComponentClass }));
            }))); })));
    };
    return Toolbar;
}(React.Component));
exports.Toolbar = Toolbar;


/***/ }),

/***/ "79140c3e34b317c87e7d":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(__webpack_require__("aa15075a839beec7a815"));
__export(__webpack_require__("eb277bee7b5f1ea3f3e6"));


/***/ }),

/***/ "84573188ef3f6fecc3ee":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
function setHeader(initialState, api, prefix) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
        text: initialState.text,
        selection: initialState.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    // Add the prefix to the selection
    var state2 = api.replaceSelection("" + prefix + state1.selectedText);
    // Adjust the selection to not contain the prefix
    api.setSelectionRange({
        start: state2.selection.end - state1.selectedText.length,
        end: state2.selection.end
    });
}
exports.headerCommand = {
    buttonProps: { "aria-label": "Add header" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        setHeader(initialState, textApi, "### ");
    }
};


/***/ }),

/***/ "84bc03a12be8c7077169":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var defaultButtonProps = {
    tabIndex: -1
};
exports.ToolbarButton = function (props) {
    var buttonComponentClass = props.buttonComponentClass, buttonContent = props.buttonContent, buttonProps = props.buttonProps, onClick = props.onClick, readOnly = props.readOnly, name = props.name;
    var finalButtonProps = __assign(__assign({}, defaultButtonProps), (buttonProps || {}));
    var finalButtonComponent = buttonComponentClass || "button";
    return (React.createElement("li", { className: "mde-header-item" }, React.createElement(finalButtonComponent, __assign(__assign({ "data-name": name }, finalButtonProps), {
        onClick: onClick,
        disabled: readOnly,
        type: "button"
    }), buttonContent)));
};


/***/ }),

/***/ "8e2599f340af13992630":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.boldCommand = {
    buttonProps: { "aria-label": "Add bold text" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({
            text: initialState.text,
            selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        // Replaces the current selection with the bold mark up
        var state2 = textApi.replaceSelection("**" + state1.selectedText + "**");
        // Adjust the selection to not contain the **
        textApi.setSelectionRange({
            start: state2.selection.end - 2 - state1.selectedText.length,
            end: state2.selection.end - 2
        });
    },
    handleKeyCommand: function (e) { return (e.ctrlKey || e.metaKey) && e.key == "b"; }
};


/***/ }),

/***/ "8fc66e04d92a979fa07c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var ClassNames_1 = __webpack_require__("2a0e6625517f73d0f51b");
var TextAreaCaretPosition_1 = __webpack_require__("09f66eceaf918072c23d");
var InsertTextAtPosition_1 = __webpack_require__("b4b0e395f925ff8cfbb5");
var Math_1 = __webpack_require__("4e70200744e512e1f5b2");
var SuggestionsDropdown_1 = __webpack_require__("429d194df9dfacf0124b");
var TextArea = /** @class */ (function (_super) {
    __extends(TextArea, _super);
    function TextArea(props) {
        var _this = _super.call(this, props) || this;
        _this.currentLoadSuggestionsPromise = Promise.resolve(undefined);
        /**
         * suggestionsPromiseIndex exists as a means to cancel what happens when the suggestions promise finishes loading.
         *
         * When the user is searching for suggestions, there is a promise that, when resolved, causes a re-render.
         * However, in case there is another promise to be resolved after the current one, it does not make sense to re-render
         * only to re-render again after the next one is complete.
         *
         * When there is a promise loading and the user cancels the suggestion, you don't want the status to go back to "active"
         * when the promise resolves.
         *
         * suggestionsPromiseIndex increments every time the mentions query
         */
        _this.suggestionsPromiseIndex = 0;
        _this.getTextArea = function () {
            return _this.props.refObject.current;
        };
        _this.handleOnChange = function (event) {
            var onChange = _this.props.onChange;
            onChange(event.target.value);
        };
        _this.handleBlur = function () {
            var mention = _this.state.mention;
            if (mention) {
                _this.setState({ mention: { status: "inactive", suggestions: [] } });
            }
        };
        _this.startLoadingSuggestions = function (text) {
            var promiseIndex = ++_this.suggestionsPromiseIndex;
            var loadSuggestions = _this.props.loadSuggestions;
            _this.currentLoadSuggestionsPromise = _this.currentLoadSuggestionsPromise
                .then(function () { return loadSuggestions(text, _this.state.mention.triggeredBy); })
                .then(function (suggestions) {
                if (_this.state.mention.status === "inactive") {
                    // This means this promise resolved too late when the status has already been set to inactice
                    return;
                }
                else if (_this.suggestionsPromiseIndex === promiseIndex) {
                    if (!suggestions || !suggestions.length) {
                        _this.setState({
                            mention: {
                                status: "inactive",
                                suggestions: []
                            }
                        });
                    }
                    else {
                        _this.setState({
                            mention: __assign(__assign({}, _this.state.mention), { status: "active", suggestions: suggestions, focusIndex: 0 })
                        });
                    }
                    _this.suggestionsPromiseIndex = 0;
                }
                return Promise.resolve();
            });
        };
        _this.loadEmptySuggestion = function (target, key) {
            var caret = TextAreaCaretPosition_1.getCaretCoordinates(target, key);
            _this.startLoadingSuggestions("");
            _this.setState({
                mention: {
                    status: "loading",
                    startPosition: target.selectionStart + 1,
                    caret: caret,
                    suggestions: [],
                    triggeredBy: key
                }
            });
        };
        _this.handleSuggestionSelected = function (index) {
            var mention = _this.state.mention;
            _this.getTextArea().selectionStart = mention.startPosition - 1;
            var textForInsert = _this.props.value.substr(_this.getTextArea().selectionStart, _this.getTextArea().selectionEnd - _this.getTextArea().selectionStart);
            InsertTextAtPosition_1.insertText(_this.getTextArea(), mention.suggestions[index].value + " ");
            _this.setState({
                mention: {
                    status: "inactive",
                    suggestions: []
                }
            });
        };
        _this.handleKeyDown = function (event) {
            if (_this.props.onPossibleKeyCommand) {
                var handled = _this.props.onPossibleKeyCommand(event);
                if (handled) {
                    event.preventDefault();
                    // If the keydown resulted in a command being executed, we will just close the suggestions if they are open.
                    // Resetting suggestionsPromiseIndex will cause any promise that is yet to be resolved to have no effect
                    // when they finish loading.
                    // TODO: The code below is duplicate, we need to clean this up
                    _this.suggestionsPromiseIndex = 0;
                    _this.setState({
                        mention: {
                            status: "inactive",
                            suggestions: []
                        }
                    });
                    return;
                }
            }
            if (!_this.suggestionsEnabled()) {
                return;
            }
            var key = event.key, shiftKey = event.shiftKey, currentTarget = event.currentTarget;
            var selectionStart = currentTarget.selectionStart;
            var mention = _this.state.mention;
            switch (mention.status) {
                case "loading":
                case "active":
                    if (key === "Escape" ||
                        (key === "Backspace" &&
                            selectionStart <= _this.state.mention.startPosition)) {
                        // resetting suggestionsPromiseIndex will cause any promise that is yet to be resolved to have no effect
                        // when they finish loading.
                        _this.suggestionsPromiseIndex = 0;
                        _this.setState({
                            mention: {
                                status: "inactive",
                                suggestions: []
                            }
                        });
                    }
                    else if (mention.status === "active" &&
                        (key === "ArrowUp" || key === "ArrowDown") &&
                        !shiftKey) {
                        event.preventDefault();
                        var focusDelta = key === "ArrowUp" ? -1 : 1;
                        _this.setState({
                            mention: __assign(__assign({}, mention), { focusIndex: Math_1.mod(mention.focusIndex + focusDelta, mention.suggestions.length) })
                        });
                    }
                    else if (key === "Enter" &&
                        mention.status === "active" &&
                        mention.suggestions.length) {
                        event.preventDefault();
                        _this.handleSuggestionSelected(mention.focusIndex);
                    }
                    break;
                default:
                // Ignore
            }
        };
        _this.handleKeyUp = function (event) {
            var key = event.key;
            var mention = _this.state.mention;
            var _a = _this.props, suggestionTriggerCharacters = _a.suggestionTriggerCharacters, value = _a.value;
            switch (mention.status) {
                case "loading":
                case "active":
                    if (key === "Backspace") {
                        var searchText = value.substr(mention.startPosition, _this.getTextArea().selectionStart - mention.startPosition);
                        _this.startLoadingSuggestions(searchText);
                        if (mention.status !== "loading") {
                            _this.setState({
                                mention: __assign(__assign({}, _this.state.mention), { status: "loading" })
                            });
                        }
                    }
                    break;
                case "inactive":
                    if (key === "Backspace") {
                        var prevChar = value.charAt(_this.getTextArea().selectionStart - 1);
                        var isAtMention = suggestionTriggerCharacters.includes(value.charAt(_this.getTextArea().selectionStart - 1));
                        if (isAtMention) {
                            _this.loadEmptySuggestion(event.currentTarget, prevChar);
                        }
                    }
                    break;
                default:
                // Ignore
            }
        };
        _this.handleKeyPress = function (event) {
            var _a = _this.props, suggestionTriggerCharacters = _a.suggestionTriggerCharacters, value = _a.value;
            var mention = _this.state.mention;
            var key = event.key;
            switch (mention.status) {
                case "loading":
                case "active":
                    if (key === " ") {
                        _this.setState({
                            mention: __assign(__assign({}, _this.state.mention), { status: "inactive" })
                        });
                        return;
                    }
                    var searchText = value.substr(mention.startPosition, _this.getTextArea().selectionStart - mention.startPosition) + key;
                    // In this case, the mentions box was open but the user typed something else
                    _this.startLoadingSuggestions(searchText);
                    if (mention.status !== "loading") {
                        _this.setState({
                            mention: __assign(__assign({}, _this.state.mention), { status: "loading" })
                        });
                    }
                    break;
                case "inactive":
                    if (suggestionTriggerCharacters.indexOf(event.key) === -1 ||
                        !/\s|\(|\[|^.{0}$/.test(value.charAt(_this.getTextArea().selectionStart - 1))) {
                        return;
                    }
                    _this.loadEmptySuggestion(event.currentTarget, event.key);
                    break;
            }
        };
        _this.state = { mention: { status: "inactive", suggestions: [] } };
        return _this;
    }
    TextArea.prototype.suggestionsEnabled = function () {
        return (this.props.suggestionTriggerCharacters &&
            this.props.suggestionTriggerCharacters.length &&
            this.props.loadSuggestions);
    };
    TextArea.prototype.render = function () {
        var _this = this;
        var _a = this.props, classes = _a.classes, readOnly = _a.readOnly, textAreaProps = _a.textAreaProps, height = _a.height, value = _a.value, suggestionTriggerCharacters = _a.suggestionTriggerCharacters, loadSuggestions = _a.loadSuggestions, suggestionsDropdownClasses = _a.suggestionsDropdownClasses, textAreaComponent = _a.textAreaComponent, onPaste = _a.onPaste;
        var suggestionsEnabled = suggestionTriggerCharacters &&
            suggestionTriggerCharacters.length &&
            loadSuggestions;
        var mention = this.state.mention;
        var TextAreaComponent = (textAreaComponent ||
            "textarea");
        return (React.createElement("div", { className: "mde-textarea-wrapper" },
            React.createElement(TextAreaComponent, __assign({ className: ClassNames_1.classNames("mde-text", classes), style: { height: height }, ref: this.props.refObject, readOnly: readOnly, value: value, "data-testid": "text-area" }, textAreaProps, { onChange: function (event) {
                    var _a, _b, _c;
                    (_c = (_a = textAreaProps) === null || _a === void 0 ? void 0 : (_b = _a).onChange) === null || _c === void 0 ? void 0 : _c.call(_b, event);
                    _this.handleOnChange(event);
                }, onBlur: function (event) {
                    var _a, _b, _c;
                    if (suggestionsEnabled) {
                        (_c = (_a = textAreaProps) === null || _a === void 0 ? void 0 : (_b = _a).onBlur) === null || _c === void 0 ? void 0 : _c.call(_b, event);
                        _this.handleBlur();
                    }
                }, onKeyDown: function (event) {
                    var _a, _b, _c;
                    (_c = (_a = textAreaProps) === null || _a === void 0 ? void 0 : (_b = _a).onKeyDown) === null || _c === void 0 ? void 0 : _c.call(_b, event);
                    _this.handleKeyDown(event);
                }, onKeyUp: function (event) {
                    var _a, _b, _c;
                    if (suggestionsEnabled) {
                        (_c = (_a = textAreaProps) === null || _a === void 0 ? void 0 : (_b = _a).onKeyUp) === null || _c === void 0 ? void 0 : _c.call(_b, event);
                        _this.handleKeyUp(event);
                    }
                }, onKeyPress: function (event) {
                    var _a, _b, _c;
                    if (suggestionsEnabled) {
                        (_c = (_a = textAreaProps) === null || _a === void 0 ? void 0 : (_b = _a).onKeyPress) === null || _c === void 0 ? void 0 : _c.call(_b, event);
                        _this.handleKeyPress(event);
                    }
                }, onPaste: function (event) {
                    var _a, _b, _c;
                    (_c = (_a = textAreaProps) === null || _a === void 0 ? void 0 : (_b = _a).onPaste) === null || _c === void 0 ? void 0 : _c.call(_b, event);
                    onPaste(event);
                } })),
            mention.status === "active" && mention.suggestions.length && (React.createElement(SuggestionsDropdown_1.SuggestionsDropdown, { classes: suggestionsDropdownClasses, caret: mention.caret, suggestions: mention.suggestions, onSuggestionSelected: this.handleSuggestionSelected, focusIndex: mention.focusIndex, textAreaRef: this.props.refObject }))));
    };
    return TextArea;
}(React.Component));
exports.TextArea = TextArea;


/***/ }),

/***/ "96b53022fc189a67510b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Reads a file and returns an ArrayBuffer
 * @param file
 */
function readFileAsync(file) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, new Promise(function (resolve, reject) {
                    var reader = new FileReader();
                    reader.onload = function () {
                        if (typeof reader.result === "string") {
                            throw new Error("reader.result is expected to be an ArrayBuffer");
                        }
                        resolve(reader.result);
                    };
                    reader.onerror = reject;
                    reader.readAsArrayBuffer(file);
                })];
        });
    });
}
exports.readFileAsync = readFileAsync;


/***/ }),

/***/ "9ff4013b8c6fbb3ad9ff":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.codeCommand = {
    buttonProps: { "aria-label": "Insert code" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({
            text: initialState.text,
            selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        // when there's no breaking line
        if (state1.selectedText.indexOf("\n") === -1) {
            textApi.replaceSelection("`" + state1.selectedText + "`");
            // Adjust the selection to not contain the **
            var selectionStart_1 = state1.selection.start + 1;
            var selectionEnd_1 = selectionStart_1 + state1.selectedText.length;
            textApi.setSelectionRange({
                start: selectionStart_1,
                end: selectionEnd_1
            });
            return;
        }
        var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
        var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
        var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
        var breaksAfter = Array(breaksAfterCount + 1).join("\n");
        textApi.replaceSelection(breaksBefore + "```\n" + state1.selectedText + "\n```" + breaksAfter);
        var selectionStart = state1.selection.start + breaksBeforeCount + 4;
        var selectionEnd = selectionStart + state1.selectedText.length;
        textApi.setSelectionRange({
            start: selectionStart,
            end: selectionEnd
        });
    }
};


/***/ }),

/***/ "a38304430962b6d2374b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Returns a flat array of commands that can be activated by the keyboard.
 * When keydowns happen, these commands 'handleKeyCommand' will be executed, in this order,
 * and the first that returns true will be executed.
 */
function extractKeyActivatedCommands(commandMap) {
    var result = [];
    for (var command in commandMap) {
        if (commandMap.hasOwnProperty(command)) {
            if (commandMap[command].handleKeyCommand) {
                result.push(command);
            }
        }
    }
    return result;
}
exports.extractKeyActivatedCommands = extractKeyActivatedCommands;


/***/ }),

/***/ "aa15075a839beec7a815":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
exports.MdeFontAwesomeIcon = function (_a) {
    var icon = _a.icon;
    var transformedIcon = icon;
    switch (icon) {
        case "header":
            transformedIcon = "heading";
            break;
        case "quote":
            transformedIcon = "quote-right";
            break;
        case "unordered-list":
            transformedIcon = "tasks";
            break;
        case "ordered-list":
            transformedIcon = "list-ol";
            break;
        case "checked-list":
            transformedIcon = "tasks";
            break;
        default:
            transformedIcon = icon;
    }
    return React.createElement("i", { className: "fas fa-" + transformedIcon, "aria-hidden": "true" });
};


/***/ }),

/***/ "aef85b81f360b190b2cf":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.quoteCommand = {
    buttonProps: { "aria-label": "Insert a quote" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({
            text: initialState.text,
            selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
        var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
        var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
        var breaksAfter = Array(breaksAfterCount + 1).join("\n");
        // Replaces the current selection with the quote mark up
        textApi.replaceSelection(breaksBefore + "> " + state1.selectedText + breaksAfter);
        var selectionStart = state1.selection.start + breaksBeforeCount + 2;
        var selectionEnd = selectionStart + state1.selectedText.length;
        textApi.setSelectionRange({
            start: selectionStart,
            end: selectionEnd
        });
    }
};


/***/ }),

/***/ "afcd6a87a46bff2c44df":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
function GripSvg() {
    return (React.createElement("svg", { "aria-hidden": "true", "data-prefix": "far", "data-icon": "ellipsis-h", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", className: "icon" },
        React.createElement("path", { fill: "currentColor", d: "M304 256c0 26.5-21.5 48-48 48s-48-21.5-48-48 21.5-48 48-48 48 21.5 48 48zm120-48c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48zm-336 0c-26.5 0-48 21.5-48 48s21.5 48 48 48 48-21.5 48-48-21.5-48-48-48z", className: "" })));
}
exports.GripSvg = GripSvg;


/***/ }),

/***/ "b15f94dbe8f61c154d5c":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.strikeThroughCommand = {
    buttonProps: { "aria-label": "Add strikethrough text" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({
            text: initialState.text,
            selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        // Replaces the current selection with the strikethrough mark up
        var state2 = textApi.replaceSelection("~~" + state1.selectedText + "~~");
        // Adjust the selection to not contain the ~~
        textApi.setSelectionRange({
            start: state2.selection.end - 2 - state1.selectedText.length,
            end: state2.selection.end - 2
        });
    }
};


/***/ }),

/***/ "b4b0e395f925ff8cfbb5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*!
 * The MIT License
   Copyright (c) 2018 Dmitriy Kubyshkin
   Copied from https://github.com/grassator/insert-text-at-cursor
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Inserts the given text at the cursor. If the element contains a selection, the selection
 * will be replaced by the text.
 */
function insertText(input, text) {
    // Most of the used APIs only work with the field selected
    input.focus();
    // IE 8-10
    if (document.selection) {
        var ieRange = document.selection.createRange();
        ieRange.text = text;
        // Move cursor after the inserted text
        ieRange.collapse(false /* to the end */);
        ieRange.select();
        return;
    }
    // Webkit + Edge
    var isSuccess = document.execCommand("insertText", false, text);
    if (!isSuccess) {
        var start = input.selectionStart;
        var end = input.selectionEnd;
        // Firefox (non-standard method)
        if (typeof input.setRangeText === "function") {
            input.setRangeText(text);
        }
        else {
            if (canManipulateViaTextNodes(input)) {
                var textNode = document.createTextNode(text);
                var node = input.firstChild;
                // If textarea is empty, just insert the text
                if (!node) {
                    input.appendChild(textNode);
                }
                else {
                    // Otherwise we need to find a nodes for start and end
                    var offset = 0;
                    var startNode = null;
                    var endNode = null;
                    // To make a change we just need a Range, not a Selection
                    var range = document.createRange();
                    while (node && (startNode === null || endNode === null)) {
                        var nodeLength = node.nodeValue.length;
                        // if start of the selection falls into current node
                        if (start >= offset && start <= offset + nodeLength) {
                            range.setStart((startNode = node), start - offset);
                        }
                        // if end of the selection falls into current node
                        if (end >= offset && end <= offset + nodeLength) {
                            range.setEnd((endNode = node), end - offset);
                        }
                        offset += nodeLength;
                        node = node.nextSibling;
                    }
                    // If there is some text selected, remove it as we should replace it
                    if (start !== end) {
                        range.deleteContents();
                    }
                    // Finally insert a new node. The browser will automatically
                    // split start and end nodes into two if necessary
                    range.insertNode(textNode);
                }
            }
            else {
                // For the text input the only way is to replace the whole value :(
                var value = input.value;
                input.value = value.slice(0, start) + text + value.slice(end);
            }
        }
        // Correct the cursor position to be at the end of the insertion
        input.setSelectionRange(start + text.length, start + text.length);
        // Notify any possible listeners of the change
        var e = document.createEvent("UIEvent");
        e.initEvent("input", true, false);
        input.dispatchEvent(e);
    }
}
exports.insertText = insertText;
function canManipulateViaTextNodes(input) {
    if (input.nodeName !== "TEXTAREA") {
        return false;
    }
    var browserSupportsTextareaTextNodes;
    if (typeof browserSupportsTextareaTextNodes === "undefined") {
        var textarea = document.createElement("textarea");
        textarea.value = "1";
        browserSupportsTextareaTextNodes = !!textarea.firstChild;
    }
    return browserSupportsTextareaTextNodes;
}


/***/ }),

/***/ "c7494822964723200cae":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.imageCommand = {
    buttonProps: { "aria-label": "Add image" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        // Replaces the current selection with the whole word selected
        var state1 = textApi.setSelectionRange(MarkdownUtil_1.selectWord({
            text: initialState.text,
            selection: initialState.selection
        }));
        // Replaces the current selection with the image
        var imageTemplate = state1.selectedText || "https://example.com/your-image.png";
        textApi.replaceSelection("![](" + imageTemplate + ")");
        // Adjust the selection to not contain the **
        textApi.setSelectionRange({
            start: state1.selection.start + 4,
            end: state1.selection.start + 4 + imageTemplate.length
        });
    }
};


/***/ }),

/***/ "c785a65f582f2bcc977a":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil = __webpack_require__("2baf8fd4719676fe22b2");
exports.MarkdownUtil = MarkdownUtil;
var components_1 = __webpack_require__("198db530b1bd8e1d2156");
exports.TextArea = components_1.TextArea;
exports.SuggestionsDropdown = components_1.SuggestionsDropdown;
exports.Preview = components_1.Preview;
exports.Toolbar = components_1.Toolbar;
exports.ToolbarButtonGroup = components_1.ToolbarButtonGroup;
var icons_1 = __webpack_require__("79140c3e34b317c87e7d");
exports.SvgIcon = icons_1.SvgIcon;
exports.MdeFontAwesomeIcon = icons_1.MdeFontAwesomeIcon;
var defaults_1 = __webpack_require__("324086dcfe8ede518b6a");
exports.getDefaultCommandMap = defaults_1.getDefaultCommandMap;
exports.getDefaultToolbarCommands = defaults_1.getDefaultToolbarCommands;
exports.default = components_1.ReactMde;


/***/ }),

/***/ "de6ce88c1e9a04216acc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.enL18n = {
    write: "Write",
    preview: "Preview",
    uploadingImage: "Uploading image..."
};


/***/ }),

/***/ "e002175ca9b88424d689":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.italicCommand = {
    buttonProps: { "aria-label": "Add italic text" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({
            text: initialState.text,
            selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        // Replaces the current selection with the italic mark up
        var state2 = textApi.replaceSelection("*" + state1.selectedText + "*");
        // Adjust the selection to not contain the *
        textApi.setSelectionRange({
            start: state2.selection.end - 1 - state1.selectedText.length,
            end: state2.selection.end - 1
        });
    },
    handleKeyCommand: function (e) { return (e.ctrlKey || e.metaKey) && e.key == "i"; }
};


/***/ }),

/***/ "e8456e032b4de302dbc9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
exports.linkCommand = {
    buttonProps: { "aria-label": "Add a link" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        // Adjust the selection to encompass the whole word if the caret is inside one
        var newSelectionRange = MarkdownUtil_1.selectWord({
            text: initialState.text,
            selection: initialState.selection
        });
        var state1 = textApi.setSelectionRange(newSelectionRange);
        // Replaces the current selection with the bold mark up
        var state2 = textApi.replaceSelection("[" + state1.selectedText + "](url)");
        // Adjust the selection to not contain the **
        textApi.setSelectionRange({
            start: state2.selection.end - 6 - state1.selectedText.length,
            end: state2.selection.end - 6
        });
    },
    handleKeyCommand: function (e) { return (e.ctrlKey || e.metaKey) && e.key == "k"; }
};


/***/ }),

/***/ "eb277bee7b5f1ea3f3e6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__("8af190b70a6bc55c6f1b");
var checkedListIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "tasks", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M208 132h288c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h288c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zM64 368c-26.5 0-48.6 21.5-48.6 48s22.1 48 48.6 48 48-21.5 48-48-21.5-48-48-48zm92.5-299l-72.2 72.2-15.6 15.6c-4.7 4.7-12.9 4.7-17.6 0L3.5 109.4c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.3c4.7-4.7 12.3-4.7 17 0l17 16.5c4.6 4.7 4.6 12.3-.1 17zm0 159.6l-72.2 72.2-15.7 15.7c-4.7 4.7-12.9 4.7-17.6 0L3.5 269c-4.7-4.7-4.7-12.3 0-17l15.7-15.7c4.7-4.7 12.3-4.7 17 0l22.7 22.1 63.7-63.7c4.7-4.7 12.3-4.7 17 0l17 17c4.6 4.6 4.6 12.2-.1 16.9z" })));
var orderedListIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "list-ol", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M3.263 139.527c0-7.477 3.917-11.572 11.573-11.572h15.131V88.078c0-5.163.534-10.503.534-10.503h-.356s-1.779 2.67-2.848 3.738c-4.451 4.273-10.504 4.451-15.666-1.068l-5.518-6.231c-5.342-5.341-4.984-11.216.534-16.379l21.72-19.938C32.815 33.602 36.732 32 42.785 32H54.89c7.656 0 11.749 3.916 11.749 11.572v84.384h15.488c7.655 0 11.572 4.094 11.572 11.572v8.901c0 7.477-3.917 11.572-11.572 11.572H14.836c-7.656 0-11.573-4.095-11.573-11.572v-8.902zM2.211 304.591c0-47.278 50.955-56.383 50.955-69.165 0-7.18-5.954-8.755-9.28-8.755-3.153 0-6.479 1.051-9.455 3.852-5.079 4.903-10.507 7.004-16.111 2.451l-8.579-6.829c-5.779-4.553-7.18-9.805-2.803-15.409C13.592 201.981 26.025 192 47.387 192c19.437 0 44.476 10.506 44.476 39.573 0 38.347-46.753 46.402-48.679 56.909h39.049c7.529 0 11.557 4.027 11.557 11.382v8.755c0 7.354-4.028 11.382-11.557 11.382h-67.94c-7.005 0-12.083-4.028-12.083-11.382v-4.028zM5.654 454.61l5.603-9.28c3.853-6.654 9.105-7.004 15.584-3.152 4.903 2.101 9.63 3.152 14.359 3.152 10.155 0 14.358-3.502 14.358-8.23 0-6.654-5.604-9.106-15.934-9.106h-4.728c-5.954 0-9.28-2.101-12.258-7.88l-1.05-1.926c-2.451-4.728-1.226-9.806 2.801-14.884l5.604-7.004c6.829-8.405 12.257-13.483 12.257-13.483v-.35s-4.203 1.051-12.608 1.051H16.685c-7.53 0-11.383-4.028-11.383-11.382v-8.755c0-7.53 3.853-11.382 11.383-11.382h58.484c7.529 0 11.382 4.027 11.382 11.382v3.327c0 5.778-1.401 9.806-5.079 14.183l-17.509 20.137c19.611 5.078 28.716 20.487 28.716 34.845 0 21.363-14.358 44.126-48.503 44.126-16.636 0-28.192-4.728-35.896-9.455-5.779-4.202-6.304-9.805-2.626-15.934zM144 132h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" })));
var unorderedListIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "list-ul", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M96 96c0 26.51-21.49 48-48 48S0 122.51 0 96s21.49-48 48-48 48 21.49 48 48zM48 208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm0 160c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm96-236h352c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h352c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H144c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" })));
var imageIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "image", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M464 448H48c-26.51 0-48-21.49-48-48V112c0-26.51 21.49-48 48-48h416c26.51 0 48 21.49 48 48v288c0 26.51-21.49 48-48 48zM112 120c-30.928 0-56 25.072-56 56s25.072 56 56 56 56-25.072 56-56-25.072-56-56-56zM64 384h384V272l-87.515-87.515c-4.686-4.686-12.284-4.686-16.971 0L208 320l-55.515-55.515c-4.686-4.686-12.284-4.686-16.971 0L64 336v48z" })));
var codeIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "code", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 640 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3.8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2.6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7.8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" })));
var quoteIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "quote-right", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M512 80v128c0 137.018-63.772 236.324-193.827 271.172-15.225 4.08-30.173-7.437-30.173-23.199v-33.895c0-10.057 6.228-19.133 15.687-22.55C369.684 375.688 408 330.054 408 256h-72c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h128c26.51 0 48 21.49 48 48zM176 32H48C21.49 32 0 53.49 0 80v128c0 26.51 21.49 48 48 48h72c0 74.054-38.316 119.688-104.313 143.528C6.228 402.945 0 412.021 0 422.078v33.895c0 15.762 14.948 27.279 30.173 23.199C160.228 444.324 224 345.018 224 208V80c0-26.51-21.49-48-48-48z" })));
var linkIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "link", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z" })));
var strikeThroughIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "strikethrough", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M496 288H16c-8.837 0-16-7.163-16-16v-32c0-8.837 7.163-16 16-16h480c8.837 0 16 7.163 16 16v32c0 8.837-7.163 16-16 16zm-214.666 16c27.258 12.937 46.524 28.683 46.524 56.243 0 33.108-28.977 53.676-75.621 53.676-32.325 0-76.874-12.08-76.874-44.271V368c0-8.837-7.164-16-16-16H113.75c-8.836 0-16 7.163-16 16v19.204c0 66.845 77.717 101.82 154.487 101.82 88.578 0 162.013-45.438 162.013-134.424 0-19.815-3.618-36.417-10.143-50.6H281.334zm-30.952-96c-32.422-13.505-56.836-28.946-56.836-59.683 0-33.92 30.901-47.406 64.962-47.406 42.647 0 64.962 16.593 64.962 32.985V136c0 8.837 7.164 16 16 16h45.613c8.836 0 16-7.163 16-16v-30.318c0-52.438-71.725-79.875-142.575-79.875-85.203 0-150.726 40.972-150.726 125.646 0 22.71 4.665 41.176 12.777 56.547h129.823z" })));
var italicIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "italic", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 320 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M204.758 416h-33.849l62.092-320h40.725a16 16 0 0 0 15.704-12.937l6.242-32C297.599 41.184 290.034 32 279.968 32H120.235a16 16 0 0 0-15.704 12.937l-6.242 32C96.362 86.816 103.927 96 113.993 96h33.846l-62.09 320H46.278a16 16 0 0 0-15.704 12.935l-6.245 32C22.402 470.815 29.967 480 40.034 480h158.479a16 16 0 0 0 15.704-12.935l6.245-32c1.927-9.88-5.638-19.065-15.704-19.065z" })));
var headerIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "heading", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 512 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M496 80V48c0-8.837-7.163-16-16-16H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.621v128H154.379V96H192c8.837 0 16-7.163 16-16V48c0-8.837-7.163-16-16-16H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h37.275v320H32c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.621V288H357.62v128H320c-8.837 0-16 7.163-16 16v32c0 8.837 7.163 16 16 16h160c8.837 0 16-7.163 16-16v-32c0-8.837-7.163-16-16-16h-37.275V96H480c8.837 0 16-7.163 16-16z" })));
var boldIcon = (React.createElement("svg", { className: "svg-icon", "aria-hidden": "true", "data-prefix": "fas", "data-icon": "bold", role: "img", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 384 512", "data-fa-i2svg": "" },
    React.createElement("path", { fill: "currentColor", d: "M304.793 243.891c33.639-18.537 53.657-54.16 53.657-95.693 0-48.236-26.25-87.626-68.626-104.179C265.138 34.01 240.849 32 209.661 32H24c-8.837 0-16 7.163-16 16v33.049c0 8.837 7.163 16 16 16h33.113v318.53H24c-8.837 0-16 7.163-16 16V464c0 8.837 7.163 16 16 16h195.69c24.203 0 44.834-1.289 66.866-7.584C337.52 457.193 376 410.647 376 350.014c0-52.168-26.573-91.684-71.207-106.123zM142.217 100.809h67.444c16.294 0 27.536 2.019 37.525 6.717 15.828 8.479 24.906 26.502 24.906 49.446 0 35.029-20.32 56.79-53.029 56.79h-76.846V100.809zm112.642 305.475c-10.14 4.056-22.677 4.907-31.409 4.907h-81.233V281.943h84.367c39.645 0 63.057 25.38 63.057 63.057.001 28.425-13.66 52.483-34.782 61.284z" })));
exports.SvgIcon = function (_a) {
    var icon = _a.icon;
    switch (icon) {
        case "header":
            return headerIcon;
        case "bold":
            return boldIcon;
        case "italic":
            return italicIcon;
        case "strikethrough":
            return strikeThroughIcon;
        case "link":
            return linkIcon;
        case "quote":
            return quoteIcon;
        case "code":
            return codeIcon;
        case "image":
            return imageIcon;
        case "unordered-list":
            return unorderedListIcon;
        case "ordered-list":
            return orderedListIcon;
        case "checked-list":
            return checkedListIcon;
        default:
            return null;
    }
};


/***/ }),

/***/ "f1164b392c24f859977e":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MarkdownUtil_1 = __webpack_require__("2baf8fd4719676fe22b2");
/**
 * Inserts insertionString before each line
 */
function insertBeforeEachLine(selectedText, insertBefore) {
    var lines = selectedText.split(/\n/);
    var insertionLength = 0;
    var modifiedText = lines
        .map(function (item, index) {
        if (typeof insertBefore === "string") {
            insertionLength += insertBefore.length;
            return insertBefore + item;
        }
        else if (typeof insertBefore === "function") {
            var insertionResult = insertBefore(item, index);
            insertionLength += insertionResult.length;
            return insertBefore(item, index) + item;
        }
        throw Error("insertion is expected to be either a string or a function");
    })
        .join("\n");
    return { modifiedText: modifiedText, insertionLength: insertionLength };
}
exports.insertBeforeEachLine = insertBeforeEachLine;
exports.makeList = function (state0, api, insertBefore) {
    // Adjust the selection to encompass the whole word if the caret is inside one
    var newSelectionRange = MarkdownUtil_1.selectWord({
        text: state0.text,
        selection: state0.selection
    });
    var state1 = api.setSelectionRange(newSelectionRange);
    var breaksBeforeCount = MarkdownUtil_1.getBreaksNeededForEmptyLineBefore(state1.text, state1.selection.start);
    var breaksBefore = Array(breaksBeforeCount + 1).join("\n");
    var breaksAfterCount = MarkdownUtil_1.getBreaksNeededForEmptyLineAfter(state1.text, state1.selection.end);
    var breaksAfter = Array(breaksAfterCount + 1).join("\n");
    var modifiedText = insertBeforeEachLine(state1.selectedText, insertBefore);
    api.replaceSelection("" + breaksBefore + modifiedText.modifiedText + breaksAfter);
    // Specifically when the text has only one line, we can exclude the "- ", for example, from the selection
    var oneLinerOffset = state1.selectedText.indexOf("\n") === -1 ? modifiedText.insertionLength : 0;
    var selectionStart = state1.selection.start + breaksBeforeCount + oneLinerOffset;
    var selectionEnd = selectionStart + modifiedText.modifiedText.length - oneLinerOffset;
    // Adjust the selection to not contain the **
    api.setSelectionRange({
        start: selectionStart,
        end: selectionEnd
    });
};
exports.unorderedListCommand = {
    buttonProps: { "aria-label": "Add unordered list" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        exports.makeList(initialState, textApi, "- ");
    }
};
exports.orderedListCommand = {
    buttonProps: { "aria-label": "Add ordered list" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        exports.makeList(initialState, textApi, function (item, index) { return index + 1 + ". "; });
    }
};
exports.checkedListCommand = {
    buttonProps: { "aria-label": "Add checked list" },
    execute: function (_a) {
        var initialState = _a.initialState, textApi = _a.textApi;
        exports.makeList(initialState, textApi, function (item, index) { return "- [ ] "; });
    }
};


/***/ })

}]); 