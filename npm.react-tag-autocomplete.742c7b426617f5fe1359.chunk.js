// [AIV_SHORT]  Build version: 1.0.0 - Friday, March 17th, 2023, 9:14:24 AM  
 (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "aec39b1cc4da90a5ec51":
/***/ (function(module, exports, __webpack_require__) {

(function (global, factory) {
   true ? module.exports = factory(__webpack_require__("8af190b70a6bc55c6f1b"), __webpack_require__("8a2d1b95e05b6a321e74")) :
  undefined;
}(this, (function (React, PropTypes) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;
  PropTypes = PropTypes && Object.prototype.hasOwnProperty.call(PropTypes, 'default') ? PropTypes['default'] : PropTypes;

  function Tag (props) { return (
    React.createElement( 'button', { type: 'button', className: props.classNames.selectedTag, title: props.removeButtonText, onClick: props.onDelete },
      React.createElement( 'span', { className: props.classNames.selectedTagName }, props.tag.name)
    )
  ); }

  var SIZER_STYLES = {
    position: 'absolute',
    width: 0,
    height: 0,
    visibility: 'hidden',
    overflow: 'scroll',
    whiteSpace: 'pre'
  };

  var STYLE_PROPS = [
    'fontSize',
    'fontFamily',
    'fontWeight',
    'fontStyle',
    'letterSpacing',
    'textTransform'
  ];

  var Input = /*@__PURE__*/(function (superclass) {
    function Input (props) {
      superclass.call(this, props);
      this.state = { inputWidth: null };

      this.input = React.createRef();
      this.sizer = React.createRef();
    }

    if ( superclass ) Input.__proto__ = superclass;
    Input.prototype = Object.create( superclass && superclass.prototype );
    Input.prototype.constructor = Input;

    Input.prototype.componentDidMount = function componentDidMount () {
      if (this.props.autoresize) {
        this.copyInputStyles();
        this.updateInputWidth();
      }
    };

    Input.prototype.componentDidUpdate = function componentDidUpdate (ref) {
      var query = ref.query;
      var placeholder = ref.placeholder;

      if (query !== this.props.query || placeholder !== this.props.placeholder) {
        this.updateInputWidth();
      }
    };

    Input.prototype.copyInputStyles = function copyInputStyles () {
      var this$1 = this;

      var inputStyle = window.getComputedStyle(this.input.current);

      STYLE_PROPS.forEach(function (prop) {
        this$1.sizer.current.style[prop] = inputStyle[prop];
      });
    };

    Input.prototype.updateInputWidth = function updateInputWidth () {
      var inputWidth;

      if (this.props.autoresize) {
        // scrollWidth is designed to be fast not accurate.
        // +2 is completely arbitrary but does the job.
        inputWidth = Math.ceil(this.sizer.current.scrollWidth) + 2;
      }

      if (inputWidth !== this.state.inputWidth) {
        this.setState({ inputWidth: inputWidth });
      }
    };

    Input.prototype.render = function render () {
      var ref = this.props;
      var id = ref.id;
      var query = ref.query;
      var ariaLabelText = ref.ariaLabelText;
      var placeholderText = ref.placeholderText;
      var expanded = ref.expanded;
      var classNames = ref.classNames;
      var inputAttributes = ref.inputAttributes;
      var inputEventHandlers = ref.inputEventHandlers;
      var index = ref.index;

      return (
        React.createElement( 'div', { className: classNames.searchWrapper },
          React.createElement( 'input', Object.assign({},
            inputAttributes, inputEventHandlers, { ref: this.input, value: query, placeholder: placeholderText, className: classNames.searchInput, role: 'combobox', 'aria-autocomplete': 'list', 'aria-label': ariaLabelText || placeholderText, 'aria-owns': id, 'aria-activedescendant': index > -1 ? (id + "-" + index) : null, 'aria-expanded': expanded, style: { width: this.state.inputWidth } })),
          React.createElement( 'div', { ref: this.sizer, style: SIZER_STYLES }, query || placeholderText)
        )
      )
    };

    return Input;
  }(React.Component));

  function escapeForRegExp (string) {
    return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&')
  }

  function matchAny (string) {
    return new RegExp(escapeForRegExp(string), 'gi')
  }

  function matchPartial (string) {
    return new RegExp(("(?:^|\\s)" + (escapeForRegExp(string))), 'i')
  }

  function matchExact (string) {
    return new RegExp(("^" + (escapeForRegExp(string)) + "$"), 'i')
  }

  function markIt (name, query) {
    var regexp = matchAny(query);
    return name.replace(regexp, '<mark>$&</mark>')
  }

  var DefaultSuggestionComponent = function (ref) {
    var item = ref.item;
    var query = ref.query;

    return (
    React.createElement( 'span', { dangerouslySetInnerHTML: { __html: markIt(item.name, query) } })
  );
  };

  var Suggestions = /*@__PURE__*/(function (superclass) {
    function Suggestions () {
      superclass.apply(this, arguments);
    }

    if ( superclass ) Suggestions.__proto__ = superclass;
    Suggestions.prototype = Object.create( superclass && superclass.prototype );
    Suggestions.prototype.constructor = Suggestions;

    Suggestions.prototype.onMouseDown = function onMouseDown (item, e) {
      // focus is shifted on mouse down but calling preventDefault prevents this
      e.preventDefault();
      this.props.addTag(item);
    };

    Suggestions.prototype.render = function render () {
      var this$1 = this;

      if (!this.props.expanded || !this.props.options.length) {
        return null
      }

      var SuggestionComponent = this.props.suggestionComponent || DefaultSuggestionComponent;

      var options = this.props.options.map(function (item, index) {
        var key = (this$1.props.id) + "-" + index;
        var classNames = [];

        if (this$1.props.index === index) {
          classNames.push(this$1.props.classNames.suggestionActive);
        }

        if (item.disabled) {
          classNames.push(this$1.props.classNames.suggestionDisabled);
        }

        return (
          React.createElement( 'li', {
            id: key, key: key, role: 'option', className: classNames.join(' '), 'aria-disabled': item.disabled === true, onMouseDown: this$1.onMouseDown.bind(this$1, item) },
            item.disableMarkIt ? item.name
              : React.createElement( SuggestionComponent, { item: item, query: this$1.props.query })
          )
        )
      });

      return (
        React.createElement( 'div', { className: this.props.classNames.suggestions },
          React.createElement( 'ul', { role: 'listbox', id: this.props.id }, options)
        )
      )
    };

    return Suggestions;
  }(React.Component));

  var KEYS = {
    ENTER: 'Enter',
    TAB: 'Tab',
    BACKSPACE: 'Backspace',
    UP_ARROW: 'ArrowUp',
    UP_ARROW_COMPAT: 'Up',
    DOWN_ARROW: 'ArrowDown',
    DOWN_ARROW_COMPAT: 'Down'
  };

  var CLASS_NAMES = {
    root: 'react-tags',
    rootFocused: 'is-focused',
    selected: 'react-tags__selected',
    selectedTag: 'react-tags__selected-tag',
    selectedTagName: 'react-tags__selected-tag-name',
    search: 'react-tags__search',
    searchWrapper: 'react-tags__search-wrapper',
    searchInput: 'react-tags__search-input',
    suggestions: 'react-tags__suggestions',
    suggestionActive: 'is-active',
    suggestionDisabled: 'is-disabled'
  };

  function pressDelimiter () {
    var this$1 = this;

    if (this.state.query.length >= this.props.minQueryLength) {
      // Check if the user typed in an existing suggestion.
      var match = this.state.options.findIndex(function (option) {
        return matchExact(this$1.state.query).test(option.name)
      });

      var index = this.state.index === -1 ? match : this.state.index;

      if (index > -1 && this.state.options[index]) {
        this.addTag(this.state.options[index]);
      } else if (this.props.allowNew) {
        this.addTag({ name: this.state.query });
      }
    }
  }

  function pressUpKey (e) {
    e.preventDefault();

    // if first item, cycle to the bottom
    var size = this.state.options.length - 1;
    this.setState({ index: this.state.index <= 0 ? size : this.state.index - 1 });
  }

  function pressDownKey (e) {
    e.preventDefault();

    // if last item, cycle to top
    var size = this.state.options.length - 1;
    this.setState({ index: this.state.index >= size ? 0 : this.state.index + 1 });
  }

  function pressBackspaceKey () {
    // when backspace key is pressed and query is blank, delete the last tag
    if (!this.state.query.length) {
      this.deleteTag(this.props.tags.length - 1);
    }
  }

  function defaultSuggestionsFilter (item, query) {
    var regexp = matchPartial(query);
    return regexp.test(item.name)
  }

  function getOptions (props, state) {
    var options;

    if (props.suggestionsTransform) {
      options = props.suggestionsTransform(state.query, props.suggestions);
    } else {
      options = props.suggestions.filter(function (item) { return props.suggestionsFilter(item, state.query); });
    }

    if (options.length === 0 && props.noSuggestionsText) {
      options.push({ id: 0, name: props.noSuggestionsText, disabled: true, disableMarkIt: true });
    }

    return options.slice(0, props.maxSuggestionsLength)
  }

  var ReactTags = /*@__PURE__*/(function (superclass) {
    function ReactTags (props) {
      superclass.call(this, props);

      this.state = {
        query: '',
        focused: false,
        index: -1
      };

      this.inputEventHandlers = {
        // Provide a no-op function to the input component to avoid warnings
        // <https://github.com/i-like-robots/react-tags/issues/135>
        // <https://github.com/facebook/react/issues/13835>
        onChange: function () {},
        onBlur: this.onBlur.bind(this),
        onFocus: this.onFocus.bind(this),
        onInput: this.onInput.bind(this),
        onKeyDown: this.onKeyDown.bind(this)
      };

      this.container = React.createRef();
      this.input = React.createRef();
      this.suggestions = React.createRef();
    }

    if ( superclass ) ReactTags.__proto__ = superclass;
    ReactTags.prototype = Object.create( superclass && superclass.prototype );
    ReactTags.prototype.constructor = ReactTags;

    ReactTags.prototype.onInput = function onInput (e) {
      var query = e.target.value;

      if (this.props.onInput) {
        this.props.onInput(query);
      }

      // NOTE: This test is a last resort for soft keyboards and browsers which do not
      // support `KeyboardEvent.key`.
      // <https://bugs.chromium.org/p/chromium/issues/detail?id=763559>
      // <https://bugs.chromium.org/p/chromium/issues/detail?id=118639>
      if (
        query.length === this.state.query.length + 1 &&
        this.props.delimiters.indexOf(query.slice(-1)) > -1
      ) {
        pressDelimiter.call(this);
      } else if (query !== this.state.query) {
        this.setState({ query: query });
      }
    };

    ReactTags.prototype.onKeyDown = function onKeyDown (e) {
      // when one of the terminating keys is pressed, add current query to the tags
      if (this.props.delimiters.indexOf(e.key) > -1) {
        if (this.state.query || this.state.index > -1) {
          e.preventDefault();
        }

        pressDelimiter.call(this);
      }

      // when backspace key is pressed and query is blank, delete the last tag
      if (e.key === KEYS.BACKSPACE && this.props.allowBackspace) {
        pressBackspaceKey.call(this, e);
      }

      if (e.key === KEYS.UP_ARROW || e.key === KEYS.UP_ARROW_COMPAT) {
        pressUpKey.call(this, e);
      }

      if (e.key === KEYS.DOWN_ARROW || e.key === KEYS.DOWN_ARROW_COMPAT) {
        pressDownKey.call(this, e);
      }
    };

    ReactTags.prototype.onClick = function onClick (e) {
      if (document.activeElement !== e.target) {
        this.input.current.input.current.focus();
      }
    };

    ReactTags.prototype.onBlur = function onBlur () {
      this.setState({ focused: false, index: -1 });

      if (this.props.onBlur) {
        this.props.onBlur();
      }

      if (this.props.addOnBlur) {
        pressDelimiter.call(this);
      }
    };

    ReactTags.prototype.onFocus = function onFocus () {
      this.setState({ focused: true });

      if (this.props.onFocus) {
        this.props.onFocus();
      }
    };

    ReactTags.prototype.onDeleteTag = function onDeleteTag (index, event) {
      // Because we'll destroy the element with cursor focus we need to ensure
      // it does not get lost and move it to the next interactive element
      if (this.container.current) {
        var interactiveEls = this.container.current.querySelectorAll('a,button,input');

        var currentEl = Array.prototype.findIndex.call(interactiveEls, function (element) {
          return element === event.currentTarget
        });

        var nextEl = interactiveEls[currentEl - 1] || interactiveEls[currentEl + 1];

        if (nextEl) {
          nextEl.focus();
        }
      }

      this.deleteTag(index);
    };

    ReactTags.prototype.addTag = function addTag (tag) {
      if (tag.disabled) {
        return
      }

      if (typeof this.props.onValidate === 'function' && !this.props.onValidate(tag)) {
        return
      }

      this.props.onAddition(tag);

      this.clearInput();
    };

    ReactTags.prototype.deleteTag = function deleteTag (i) {
      this.props.onDelete(i);
    };

    ReactTags.prototype.clearInput = function clearInput () {
      this.setState({
        query: '',
        index: -1
      });
    };

    ReactTags.prototype.render = function render () {
      var this$1 = this;

      var TagComponent = this.props.tagComponent || Tag;

      var expanded = this.state.focused && this.state.query.length >= this.props.minQueryLength;
      var classNames = [this.props.classNames.root];

      this.state.focused && classNames.push(this.props.classNames.rootFocused);

      return (
        React.createElement( 'div', { ref: this.container, className: classNames.join(' '), onClick: this.onClick.bind(this) },
          React.createElement( 'div', {
            className: this.props.classNames.selected, 'aria-relevant': 'additions removals', 'aria-live': 'polite' },
            this.props.tags.map(function (tag, i) { return (
              React.createElement( TagComponent, {
                key: i, tag: tag, removeButtonText: this$1.props.removeButtonText, classNames: this$1.props.classNames, onDelete: this$1.onDeleteTag.bind(this$1, i) })
            ); })
          ),
          React.createElement( 'div', { className: this.props.classNames.search },
            React.createElement( Input, Object.assign({},
              this.state, { id: this.props.id, ref: this.input, classNames: this.props.classNames, inputAttributes: this.props.inputAttributes, inputEventHandlers: this.inputEventHandlers, autoresize: this.props.autoresize, expanded: expanded, placeholderText: this.props.placeholderText, ariaLabelText: this.props.ariaLabelText })),
            React.createElement( Suggestions, Object.assign({},
              this.state, { id: this.props.id, ref: this.suggestions, classNames: this.props.classNames, expanded: expanded, addTag: this.addTag.bind(this), suggestionComponent: this.props.suggestionComponent }))
          )
        )
      )
    };

    ReactTags.getDerivedStateFromProps = function getDerivedStateFromProps (props, state) {
      if (state.prevQuery !== state.query || state.prevSuggestions !== props.suggestions) {
        return {
          prevQuery: state.query,
          prevSuggestions: props.suggestions,
          options: getOptions(props, state)
        }
      }

      return null
    };

    return ReactTags;
  }(React.Component));

  ReactTags.defaultProps = {
    id: 'ReactTags',
    tags: [],
    placeholderText: 'Add new tag',
    removeButtonText: 'Click to remove tag',
    noSuggestionsText: null,
    suggestions: [],
    suggestionsFilter: defaultSuggestionsFilter,
    suggestionsTransform: null,
    autoresize: true,
    classNames: CLASS_NAMES,
    delimiters: [KEYS.TAB, KEYS.ENTER],
    minQueryLength: 2,
    maxSuggestionsLength: 6,
    allowNew: false,
    allowBackspace: true,
    addOnBlur: false,
    tagComponent: null,
    suggestionComponent: null,
    inputAttributes: {}
  };

  ReactTags.propTypes = {
    id: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.object),
    placeholderText: PropTypes.string,
    ariaLabelText: PropTypes.string,
    removeButtonText: PropTypes.string,
    noSuggestionsText: PropTypes.string,
    suggestions: PropTypes.arrayOf(PropTypes.object),
    suggestionsFilter: PropTypes.func,
    suggestionsTransform: PropTypes.func,
    autoresize: PropTypes.bool,
    delimiters: PropTypes.arrayOf(PropTypes.string),
    onDelete: PropTypes.func.isRequired,
    onAddition: PropTypes.func.isRequired,
    onInput: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onValidate: PropTypes.func,
    minQueryLength: PropTypes.number,
    maxSuggestionsLength: PropTypes.number,
    classNames: PropTypes.object,
    allowNew: PropTypes.bool,
    allowBackspace: PropTypes.bool,
    addOnBlur: PropTypes.bool,
    tagComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    suggestionComponent: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.element
    ]),
    inputAttributes: PropTypes.object
  };

  return ReactTags;

})));


/***/ })

}]); 