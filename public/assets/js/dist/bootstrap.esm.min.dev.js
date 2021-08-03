"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tooltip = exports.Toast = exports.Tab = exports.ScrollSpy = exports.Popover = exports.Offcanvas = exports.Modal = exports.Dropdown = exports.Collapse = exports.Carousel = exports.Button = exports.Alert = void 0;

var Popper = _interopRequireWildcard(require("@popperjs/core"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var NODE_TEXT = 3,
    SelectorEngine = {
  find: function find(e) {
    var _ref;

    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(t, e)));
  },
  findOne: function findOne(e) {
    var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
    return Element.prototype.querySelector.call(t, e);
  },
  children: function children(e, t) {
    var _ref2;

    return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(e.children)).filter(function (e) {
      return e.matches(t);
    });
  },
  parents: function parents(e, t) {
    var n = [];
    var i = e.parentNode;

    for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
      i.matches(t) && n.push(i), i = i.parentNode;
    }

    return n;
  },
  prev: function prev(e, t) {
    var n = e.previousElementSibling;

    for (; n;) {
      if (n.matches(t)) return [n];
      n = n.previousElementSibling;
    }

    return [];
  },
  next: function next(e, t) {
    var n = e.nextElementSibling;

    for (; n;) {
      if (n.matches(t)) return [n];
      n = n.nextElementSibling;
    }

    return [];
  }
},
    MAX_UID = 1e6,
    MILLISECONDS_MULTIPLIER = 1e3,
    TRANSITION_END = "transitionend",
    toType = function toType(e) {
  return null == e ? "" + e : {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase();
},
    getUID = function getUID(e) {
  do {
    e += Math.floor(1e6 * Math.random());
  } while (document.getElementById(e));

  return e;
},
    getSelector = function getSelector(e) {
  var t = e.getAttribute("data-bs-target");

  if (!t || "#" === t) {
    var n = e.getAttribute("href");
    if (!n || !n.includes("#") && !n.startsWith(".")) return null;
    n.includes("#") && !n.startsWith("#") && (n = "#" + n.split("#")[1]), t = n && "#" !== n ? n.trim() : null;
  }

  return t;
},
    getSelectorFromElement = function getSelectorFromElement(e) {
  var t = getSelector(e);
  return t && document.querySelector(t) ? t : null;
},
    getElementFromSelector = function getElementFromSelector(e) {
  var t = getSelector(e);
  return t ? document.querySelector(t) : null;
},
    getTransitionDurationFromElement = function getTransitionDurationFromElement(e) {
  if (!e) return 0;

  var _window$getComputedSt = window.getComputedStyle(e),
      t = _window$getComputedSt.transitionDuration,
      n = _window$getComputedSt.transitionDelay;

  var i = Number.parseFloat(t),
      s = Number.parseFloat(n);
  return i || s ? (t = t.split(",")[0], n = n.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(n))) : 0;
},
    triggerTransitionEnd = function triggerTransitionEnd(e) {
  e.dispatchEvent(new Event(TRANSITION_END));
},
    isElement = function isElement(e) {
  return !(!e || "object" != _typeof(e)) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType);
},
    getElement = function getElement(e) {
  return isElement(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? SelectorEngine.findOne(e) : null;
},
    emulateTransitionEnd = function emulateTransitionEnd(e, t) {
  var n = !1;
  var i = t + 5;
  e.addEventListener(TRANSITION_END, function t() {
    n = !0, e.removeEventListener(TRANSITION_END, t);
  }), setTimeout(function () {
    n || triggerTransitionEnd(e);
  }, i);
},
    typeCheckConfig = function typeCheckConfig(e, t, n) {
  Object.keys(n).forEach(function (i) {
    var s = n[i],
        o = t[i],
        a = o && isElement(o) ? "element" : null == (r = o) ? "" + r : {}.toString.call(r).match(/\s([a-z]+)/i)[1].toLowerCase();
    var r;
    if (!new RegExp(s).test(a)) throw new TypeError("".concat(e.toUpperCase(), ": Option \"").concat(i, "\" provided type \"").concat(a, "\" but expected type \"").concat(s, "\"."));
  });
},
    isVisible = function isVisible(e) {
  if (!e) return !1;

  if (e.style && e.parentNode && e.parentNode.style) {
    var t = getComputedStyle(e),
        n = getComputedStyle(e.parentNode);
    return "none" !== t.display && "none" !== n.display && "hidden" !== t.visibility;
  }

  return !1;
},
    isDisabled = function isDisabled(e) {
  return !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled"));
},
    findShadowRoot = function findShadowRoot(e) {
  if (!document.documentElement.attachShadow) return null;

  if ("function" == typeof e.getRootNode) {
    var t = e.getRootNode();
    return t instanceof ShadowRoot ? t : null;
  }

  return e instanceof ShadowRoot ? e : e.parentNode ? findShadowRoot(e.parentNode) : null;
},
    noop = function noop() {},
    reflow = function reflow(e) {
  return e.offsetHeight;
},
    getjQuery = function getjQuery() {
  var _window = window,
      e = _window.jQuery;
  return e && !document.body.hasAttribute("data-bs-no-jquery") ? e : null;
},
    onDOMContentLoaded = function onDOMContentLoaded(e) {
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
},
    isRTL = function isRTL() {
  return "rtl" === document.documentElement.dir;
},
    defineJQueryPlugin = function defineJQueryPlugin(e) {
  var t;
  t = function t() {
    var t = getjQuery();

    if (t) {
      var n = e.NAME,
          i = t.fn[n];
      t.fn[n] = e.jQueryInterface, t.fn[n].Constructor = e, t.fn[n].noConflict = function () {
        return t.fn[n] = i, e.jQueryInterface;
      };
    }
  }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", t) : t();
},
    execute = function execute(e) {
  "function" == typeof e && e();
},
    elementMap = new Map();

var Data = {
  set: function set(e, t, n) {
    elementMap.has(e) || elementMap.set(e, new Map());
    var i = elementMap.get(e);
    i.has(t) || 0 === i.size ? i.set(t, n) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."));
  },
  get: function get(e, t) {
    return elementMap.has(e) && elementMap.get(e).get(t) || null;
  },
  remove: function remove(e, t) {
    if (!elementMap.has(e)) return;
    var n = elementMap.get(e);
    n["delete"](t), 0 === n.size && elementMap["delete"](e);
  }
};
var namespaceRegex = /[^.]*(?=\..*)\.|.*/,
    stripNameRegex = /\..*/,
    stripUidRegex = /::\d+$/,
    eventRegistry = {};
var uidEvent = 1;
var customEvents = {
  mouseenter: "mouseover",
  mouseleave: "mouseout"
},
    customEventsRegex = /^(mouseenter|mouseleave)/i,
    nativeEvents = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

function getUidEvent(e, t) {
  return t && "".concat(t, "::").concat(uidEvent++) || e.uidEvent || uidEvent++;
}

function getEvent(e) {
  var t = getUidEvent(e);
  return e.uidEvent = t, eventRegistry[t] = eventRegistry[t] || {}, eventRegistry[t];
}

function bootstrapHandler(e, t) {
  return function n(i) {
    return i.delegateTarget = e, n.oneOff && EventHandler.off(e, i.type, t), t.apply(e, [i]);
  };
}

function bootstrapDelegationHandler(e, t, n) {
  return function i(s) {
    var o = e.querySelectorAll(t);

    for (var a = s.target; a && a !== this; a = a.parentNode) {
      for (var r = o.length; r--;) {
        if (o[r] === a) return s.delegateTarget = a, i.oneOff && EventHandler.off(e, s.type, t, n), n.apply(a, [s]);
      }
    }

    return null;
  };
}

function findHandler(e, t) {
  var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var i = Object.keys(e);

  for (var s = 0, o = i.length; s < o; s++) {
    var _o = e[i[s]];
    if (_o.originalHandler === t && _o.delegationSelector === n) return _o;
  }

  return null;
}

function normalizeParams(e, t, n) {
  var i = "string" == typeof t,
      s = i ? n : t;
  var o = getTypeEvent(e);
  return nativeEvents.has(o) || (o = e), [i, s, o];
}

function addHandler(e, t, n, i, s) {
  if ("string" != typeof t || !e) return;

  if (n || (n = i, i = null), customEventsRegex.test(t)) {
    var _e = function _e(e) {
      return function (t) {
        if (!t.relatedTarget || t.relatedTarget !== t.delegateTarget && !t.delegateTarget.contains(t.relatedTarget)) return e.call(this, t);
      };
    };

    i ? i = _e(i) : n = _e(n);
  }

  var _normalizeParams = normalizeParams(t, n, i),
      _normalizeParams2 = _slicedToArray(_normalizeParams, 3),
      o = _normalizeParams2[0],
      a = _normalizeParams2[1],
      r = _normalizeParams2[2],
      l = getEvent(e),
      c = l[r] || (l[r] = {}),
      E = findHandler(c, a, o ? n : null);

  if (E) return void (E.oneOff = E.oneOff && s);

  var _ = getUidEvent(a, t.replace(namespaceRegex, "")),
      d = o ? bootstrapDelegationHandler(e, n, i) : bootstrapHandler(e, n);

  d.delegationSelector = o ? n : null, d.originalHandler = a, d.oneOff = s, d.uidEvent = _, c[_] = d, e.addEventListener(r, d, o);
}

function removeHandler(e, t, n, i, s) {
  var o = findHandler(t[n], i, s);
  o && (e.removeEventListener(n, o, Boolean(s)), delete t[n][o.uidEvent]);
}

function removeNamespacedHandlers(e, t, n, i) {
  var s = t[n] || {};
  Object.keys(s).forEach(function (o) {
    if (o.includes(i)) {
      var _i2 = s[o];
      removeHandler(e, t, n, _i2.originalHandler, _i2.delegationSelector);
    }
  });
}

function getTypeEvent(e) {
  return e = e.replace(stripNameRegex, ""), customEvents[e] || e;
}

var EventHandler = {
  on: function on(e, t, n, i) {
    addHandler(e, t, n, i, !1);
  },
  one: function one(e, t, n, i) {
    addHandler(e, t, n, i, !0);
  },
  off: function off(e, t, n, i) {
    if ("string" != typeof t || !e) return;

    var _normalizeParams3 = normalizeParams(t, n, i),
        _normalizeParams4 = _slicedToArray(_normalizeParams3, 3),
        s = _normalizeParams4[0],
        o = _normalizeParams4[1],
        a = _normalizeParams4[2],
        r = a !== t,
        l = getEvent(e),
        c = t.startsWith(".");

    if (void 0 !== o) {
      if (!l || !l[a]) return;
      return void removeHandler(e, l, a, o, s ? n : null);
    }

    c && Object.keys(l).forEach(function (n) {
      removeNamespacedHandlers(e, l, n, t.slice(1));
    });
    var E = l[a] || {};
    Object.keys(E).forEach(function (n) {
      var i = n.replace(stripUidRegex, "");

      if (!r || t.includes(i)) {
        var _t = E[n];
        removeHandler(e, l, a, _t.originalHandler, _t.delegationSelector);
      }
    });
  },
  trigger: function trigger(e, t, n) {
    if ("string" != typeof t || !e) return null;
    var i = getjQuery(),
        s = getTypeEvent(t),
        o = t !== s,
        a = nativeEvents.has(s);
    var r,
        l = !0,
        c = !0,
        E = !1,
        _ = null;
    return o && i && (r = i.Event(t, n), i(e).trigger(r), l = !r.isPropagationStopped(), c = !r.isImmediatePropagationStopped(), E = r.isDefaultPrevented()), a ? (_ = document.createEvent("HTMLEvents"), _.initEvent(s, l, !0)) : _ = new CustomEvent(t, {
      bubbles: l,
      cancelable: !0
    }), void 0 !== n && Object.keys(n).forEach(function (e) {
      Object.defineProperty(_, e, {
        get: function get() {
          return n[e];
        }
      });
    }), E && _.preventDefault(), c && e.dispatchEvent(_), _.defaultPrevented && void 0 !== r && r.preventDefault(), _;
  }
},
    VERSION = "5.0.1";

var BaseComponent =
/*#__PURE__*/
function () {
  function BaseComponent(e) {
    _classCallCheck(this, BaseComponent);

    (e = getElement(e)) && (this._element = e, Data.set(this._element, this.constructor.DATA_KEY, this));
  }

  _createClass(BaseComponent, [{
    key: "dispose",
    value: function dispose() {
      var _this = this;

      Data.remove(this._element, this.constructor.DATA_KEY), EventHandler.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (e) {
        _this[e] = null;
      });
    }
  }, {
    key: "_queueCallback",
    value: function _queueCallback(e, t) {
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
      if (!n) return void execute(e);
      var i = getTransitionDurationFromElement(t);
      EventHandler.one(t, "transitionend", function () {
        return execute(e);
      }), emulateTransitionEnd(t, i);
    }
  }], [{
    key: "getInstance",
    value: function getInstance(e) {
      return Data.get(e, this.DATA_KEY);
    }
  }, {
    key: "VERSION",
    get: function get() {
      return "5.0.1";
    }
  }, {
    key: "NAME",
    get: function get() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
  }, {
    key: "DATA_KEY",
    get: function get() {
      return "bs." + this.NAME;
    }
  }, {
    key: "EVENT_KEY",
    get: function get() {
      return "." + this.DATA_KEY;
    }
  }]);

  return BaseComponent;
}();

var NAME$c = "alert",
    DATA_KEY$b = "bs.alert",
    EVENT_KEY$b = ".bs.alert",
    DATA_API_KEY$8 = ".data-api",
    SELECTOR_DISMISS = '[data-bs-dismiss="alert"]',
    EVENT_CLOSE = "close.bs.alert",
    EVENT_CLOSED = "closed.bs.alert",
    EVENT_CLICK_DATA_API$7 = "click.bs.alert.data-api",
    CLASS_NAME_ALERT = "alert",
    CLASS_NAME_FADE$6 = "fade",
    CLASS_NAME_SHOW$9 = "show";

var Alert =
/*#__PURE__*/
function (_BaseComponent) {
  _inherits(Alert, _BaseComponent);

  function Alert() {
    _classCallCheck(this, Alert);

    return _possibleConstructorReturn(this, _getPrototypeOf(Alert).apply(this, arguments));
  }

  _createClass(Alert, [{
    key: "close",
    value: function close(e) {
      var t = e ? this._getRootElement(e) : this._element,
          n = this._triggerCloseEvent(t);

      null === n || n.defaultPrevented || this._removeElement(t);
    }
  }, {
    key: "_getRootElement",
    value: function _getRootElement(e) {
      return getElementFromSelector(e) || e.closest(".alert");
    }
  }, {
    key: "_triggerCloseEvent",
    value: function _triggerCloseEvent(e) {
      return EventHandler.trigger(e, EVENT_CLOSE);
    }
  }, {
    key: "_removeElement",
    value: function _removeElement(e) {
      var _this2 = this;

      e.classList.remove("show");
      var t = e.classList.contains("fade");

      this._queueCallback(function () {
        return _this2._destroyElement(e);
      }, e, t);
    }
  }, {
    key: "_destroyElement",
    value: function _destroyElement(e) {
      e.parentNode && e.parentNode.removeChild(e), EventHandler.trigger(e, EVENT_CLOSED);
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, "bs.alert");
        t || (t = new Alert(this)), "close" === e && t[e](this);
      });
    }
  }, {
    key: "handleDismiss",
    value: function handleDismiss(e) {
      return function (t) {
        t && t.preventDefault(), e.close(this);
      };
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$c;
    }
  }]);

  return Alert;
}(BaseComponent);

exports.Alert = Alert;
EventHandler.on(document, EVENT_CLICK_DATA_API$7, SELECTOR_DISMISS, Alert.handleDismiss(new Alert())), defineJQueryPlugin(Alert);
var NAME$b = "button",
    DATA_KEY$a = "bs.button",
    EVENT_KEY$a = ".bs.button",
    DATA_API_KEY$7 = ".data-api",
    CLASS_NAME_ACTIVE$3 = "active",
    SELECTOR_DATA_TOGGLE$5 = '[data-bs-toggle="button"]',
    EVENT_CLICK_DATA_API$6 = "click.bs.button.data-api";

var Button =
/*#__PURE__*/
function (_BaseComponent2) {
  _inherits(Button, _BaseComponent2);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "toggle",
    value: function toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$a);
        t || (t = new Button(this)), "toggle" === e && t[e]();
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$b;
    }
  }]);

  return Button;
}(BaseComponent);

exports.Button = Button;

function normalizeData(e) {
  return "true" === e || "false" !== e && (e === Number(e).toString() ? Number(e) : "" === e || "null" === e ? null : e);
}

function normalizeDataKey(e) {
  return e.replace(/[A-Z]/g, function (e) {
    return "-" + e.toLowerCase();
  });
}

EventHandler.on(document, EVENT_CLICK_DATA_API$6, SELECTOR_DATA_TOGGLE$5, function (e) {
  e.preventDefault();
  var t = e.target.closest(SELECTOR_DATA_TOGGLE$5);
  var n = Data.get(t, DATA_KEY$a);
  n || (n = new Button(t)), n.toggle();
}), defineJQueryPlugin(Button);
var Manipulator = {
  setDataAttribute: function setDataAttribute(e, t, n) {
    e.setAttribute("data-bs-" + normalizeDataKey(t), n);
  },
  removeDataAttribute: function removeDataAttribute(e, t) {
    e.removeAttribute("data-bs-" + normalizeDataKey(t));
  },
  getDataAttributes: function getDataAttributes(e) {
    if (!e) return {};
    var t = {};
    return Object.keys(e.dataset).filter(function (e) {
      return e.startsWith("bs");
    }).forEach(function (n) {
      var i = n.replace(/^bs/, "");
      i = i.charAt(0).toLowerCase() + i.slice(1, i.length), t[i] = normalizeData(e.dataset[n]);
    }), t;
  },
  getDataAttribute: function getDataAttribute(e, t) {
    return normalizeData(e.getAttribute("data-bs-" + normalizeDataKey(t)));
  },
  offset: function offset(e) {
    var t = e.getBoundingClientRect();
    return {
      top: t.top + document.body.scrollTop,
      left: t.left + document.body.scrollLeft
    };
  },
  position: function position(e) {
    return {
      top: e.offsetTop,
      left: e.offsetLeft
    };
  }
},
    NAME$a = "carousel",
    DATA_KEY$9 = "bs.carousel",
    EVENT_KEY$9 = ".bs.carousel",
    DATA_API_KEY$6 = ".data-api",
    ARROW_LEFT_KEY = "ArrowLeft",
    ARROW_RIGHT_KEY = "ArrowRight",
    TOUCHEVENT_COMPAT_WAIT = 500,
    SWIPE_THRESHOLD = 40,
    Default$9 = {
  interval: 5e3,
  keyboard: !0,
  slide: !1,
  pause: "hover",
  wrap: !0,
  touch: !0
},
    DefaultType$9 = {
  interval: "(number|boolean)",
  keyboard: "boolean",
  slide: "(boolean|string)",
  pause: "(string|boolean)",
  wrap: "boolean",
  touch: "boolean"
},
    ORDER_NEXT = "next",
    ORDER_PREV = "prev",
    DIRECTION_LEFT = "left",
    DIRECTION_RIGHT = "right",
    EVENT_SLIDE = "slide.bs.carousel",
    EVENT_SLID = "slid.bs.carousel",
    EVENT_KEYDOWN = "keydown.bs.carousel",
    EVENT_MOUSEENTER = "mouseenter.bs.carousel",
    EVENT_MOUSELEAVE = "mouseleave.bs.carousel",
    EVENT_TOUCHSTART = "touchstart.bs.carousel",
    EVENT_TOUCHMOVE = "touchmove.bs.carousel",
    EVENT_TOUCHEND = "touchend.bs.carousel",
    EVENT_POINTERDOWN = "pointerdown.bs.carousel",
    EVENT_POINTERUP = "pointerup.bs.carousel",
    EVENT_DRAG_START = "dragstart.bs.carousel",
    EVENT_LOAD_DATA_API$2 = "load.bs.carousel.data-api",
    EVENT_CLICK_DATA_API$5 = "click.bs.carousel.data-api",
    CLASS_NAME_CAROUSEL = "carousel",
    CLASS_NAME_ACTIVE$2 = "active",
    CLASS_NAME_SLIDE = "slide",
    CLASS_NAME_END = "carousel-item-end",
    CLASS_NAME_START = "carousel-item-start",
    CLASS_NAME_NEXT = "carousel-item-next",
    CLASS_NAME_PREV = "carousel-item-prev",
    CLASS_NAME_POINTER_EVENT = "pointer-event",
    SELECTOR_ACTIVE$1 = ".active",
    SELECTOR_ACTIVE_ITEM = ".active.carousel-item",
    SELECTOR_ITEM = ".carousel-item",
    SELECTOR_ITEM_IMG = ".carousel-item img",
    SELECTOR_NEXT_PREV = ".carousel-item-next, .carousel-item-prev",
    SELECTOR_INDICATORS = ".carousel-indicators",
    SELECTOR_INDICATOR = "[data-bs-target]",
    SELECTOR_DATA_SLIDE = "[data-bs-slide], [data-bs-slide-to]",
    SELECTOR_DATA_RIDE = '[data-bs-ride="carousel"]',
    POINTER_TYPE_TOUCH = "touch",
    POINTER_TYPE_PEN = "pen";

var Carousel =
/*#__PURE__*/
function (_BaseComponent3) {
  _inherits(Carousel, _BaseComponent3);

  function Carousel(e, t) {
    var _this3;

    _classCallCheck(this, Carousel);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(Carousel).call(this, e)), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(t), _this3._indicatorsElement = SelectorEngine.findOne(SELECTOR_INDICATORS, _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
    return _this3;
  }

  _createClass(Carousel, [{
    key: "next",
    value: function next() {
      this._isSliding || this._slide(ORDER_NEXT);
    }
  }, {
    key: "nextWhenVisible",
    value: function nextWhenVisible() {
      !document.hidden && isVisible(this._element) && this.next();
    }
  }, {
    key: "prev",
    value: function prev() {
      this._isSliding || this._slide(ORDER_PREV);
    }
  }, {
    key: "pause",
    value: function pause(e) {
      e || (this._isPaused = !0), SelectorEngine.findOne(SELECTOR_NEXT_PREV, this._element) && (triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
    }
  }, {
    key: "cycle",
    value: function cycle(e) {
      e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
    }
  }, {
    key: "to",
    value: function to(e) {
      var _this4 = this;

      this._activeElement = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);

      var t = this._getItemIndex(this._activeElement);

      if (e > this._items.length - 1 || e < 0) return;
      if (this._isSliding) return void EventHandler.one(this._element, EVENT_SLID, function () {
        return _this4.to(e);
      });
      if (t === e) return this.pause(), void this.cycle();
      var n = e > t ? ORDER_NEXT : ORDER_PREV;

      this._slide(n, this._items[e]);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$9, {}, e), typeCheckConfig(NAME$a, e, DefaultType$9), e;
    }
  }, {
    key: "_handleSwipe",
    value: function _handleSwipe() {
      var e = Math.abs(this.touchDeltaX);
      if (e <= 40) return;
      var t = e / this.touchDeltaX;
      this.touchDeltaX = 0, t && this._slide(t > 0 ? DIRECTION_RIGHT : DIRECTION_LEFT);
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this5 = this;

      this._config.keyboard && EventHandler.on(this._element, EVENT_KEYDOWN, function (e) {
        return _this5._keydown(e);
      }), "hover" === this._config.pause && (EventHandler.on(this._element, EVENT_MOUSEENTER, function (e) {
        return _this5.pause(e);
      }), EventHandler.on(this._element, EVENT_MOUSELEAVE, function (e) {
        return _this5.cycle(e);
      })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
    }
  }, {
    key: "_addTouchEventListeners",
    value: function _addTouchEventListeners() {
      var _this6 = this;

      var e = function e(_e2) {
        !_this6._pointerEvent || "pen" !== _e2.pointerType && "touch" !== _e2.pointerType ? _this6._pointerEvent || (_this6.touchStartX = _e2.touches[0].clientX) : _this6.touchStartX = _e2.clientX;
      },
          t = function t(e) {
        _this6.touchDeltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - _this6.touchStartX;
      },
          n = function n(e) {
        !_this6._pointerEvent || "pen" !== e.pointerType && "touch" !== e.pointerType || (_this6.touchDeltaX = e.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (e) {
          return _this6.cycle(e);
        }, 500 + _this6._config.interval));
      };

      SelectorEngine.find(SELECTOR_ITEM_IMG, this._element).forEach(function (e) {
        EventHandler.on(e, EVENT_DRAG_START, function (e) {
          return e.preventDefault();
        });
      }), this._pointerEvent ? (EventHandler.on(this._element, EVENT_POINTERDOWN, function (t) {
        return e(t);
      }), EventHandler.on(this._element, EVENT_POINTERUP, function (e) {
        return n(e);
      }), this._element.classList.add("pointer-event")) : (EventHandler.on(this._element, EVENT_TOUCHSTART, function (t) {
        return e(t);
      }), EventHandler.on(this._element, EVENT_TOUCHMOVE, function (e) {
        return t(e);
      }), EventHandler.on(this._element, EVENT_TOUCHEND, function (e) {
        return n(e);
      }));
    }
  }, {
    key: "_keydown",
    value: function _keydown(e) {
      /input|textarea/i.test(e.target.tagName) || ("ArrowLeft" === e.key ? (e.preventDefault(), this._slide(DIRECTION_RIGHT)) : "ArrowRight" === e.key && (e.preventDefault(), this._slide(DIRECTION_LEFT)));
    }
  }, {
    key: "_getItemIndex",
    value: function _getItemIndex(e) {
      return this._items = e && e.parentNode ? SelectorEngine.find(SELECTOR_ITEM, e.parentNode) : [], this._items.indexOf(e);
    }
  }, {
    key: "_getItemByOrder",
    value: function _getItemByOrder(e, t) {
      var n = e === ORDER_NEXT,
          i = e === ORDER_PREV,
          s = this._getItemIndex(t),
          o = this._items.length - 1;

      if ((i && 0 === s || n && s === o) && !this._config.wrap) return t;
      var a = (s + (i ? -1 : 1)) % this._items.length;
      return -1 === a ? this._items[this._items.length - 1] : this._items[a];
    }
  }, {
    key: "_triggerSlideEvent",
    value: function _triggerSlideEvent(e, t) {
      var n = this._getItemIndex(e),
          i = this._getItemIndex(SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element));

      return EventHandler.trigger(this._element, EVENT_SLIDE, {
        relatedTarget: e,
        direction: t,
        from: i,
        to: n
      });
    }
  }, {
    key: "_setActiveIndicatorElement",
    value: function _setActiveIndicatorElement(e) {
      if (this._indicatorsElement) {
        var t = SelectorEngine.findOne(".active", this._indicatorsElement);
        t.classList.remove("active"), t.removeAttribute("aria-current");
        var n = SelectorEngine.find("[data-bs-target]", this._indicatorsElement);

        for (var _t2 = 0; _t2 < n.length; _t2++) {
          if (Number.parseInt(n[_t2].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(e)) {
            n[_t2].classList.add("active"), n[_t2].setAttribute("aria-current", "true");
            break;
          }
        }
      }
    }
  }, {
    key: "_updateInterval",
    value: function _updateInterval() {
      var e = this._activeElement || SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element);
      if (!e) return;
      var t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
      t ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = t) : this._config.interval = this._config.defaultInterval || this._config.interval;
    }
  }, {
    key: "_slide",
    value: function _slide(e, t) {
      var _this7 = this;

      var n = this._directionToOrder(e),
          i = SelectorEngine.findOne(SELECTOR_ACTIVE_ITEM, this._element),
          s = this._getItemIndex(i),
          o = t || this._getItemByOrder(n, i),
          a = this._getItemIndex(o),
          r = Boolean(this._interval),
          l = n === ORDER_NEXT,
          c = l ? CLASS_NAME_START : CLASS_NAME_END,
          E = l ? CLASS_NAME_NEXT : CLASS_NAME_PREV,
          _ = this._orderToDirection(n);

      if (o && o.classList.contains("active")) return void (this._isSliding = !1);
      if (this._triggerSlideEvent(o, _).defaultPrevented) return;
      if (!i || !o) return;
      this._isSliding = !0, r && this.pause(), this._setActiveIndicatorElement(o), this._activeElement = o;

      var d = function d() {
        EventHandler.trigger(_this7._element, EVENT_SLID, {
          relatedTarget: o,
          direction: _,
          from: s,
          to: a
        });
      };

      if (this._element.classList.contains("slide")) {
        o.classList.add(E), reflow(o), i.classList.add(c), o.classList.add(c);

        var _e3 = function _e3() {
          o.classList.remove(c, E), o.classList.add("active"), i.classList.remove("active", E, c), _this7._isSliding = !1, setTimeout(d, 0);
        };

        this._queueCallback(_e3, i, !0);
      } else i.classList.remove("active"), o.classList.add("active"), this._isSliding = !1, d();

      r && this.cycle();
    }
  }, {
    key: "_directionToOrder",
    value: function _directionToOrder(e) {
      return [DIRECTION_RIGHT, DIRECTION_LEFT].includes(e) ? isRTL() ? e === DIRECTION_LEFT ? ORDER_PREV : ORDER_NEXT : e === DIRECTION_LEFT ? ORDER_NEXT : ORDER_PREV : e;
    }
  }, {
    key: "_orderToDirection",
    value: function _orderToDirection(e) {
      return [ORDER_NEXT, ORDER_PREV].includes(e) ? isRTL() ? e === ORDER_PREV ? DIRECTION_LEFT : DIRECTION_RIGHT : e === ORDER_PREV ? DIRECTION_RIGHT : DIRECTION_LEFT : e;
    }
  }], [{
    key: "carouselInterface",
    value: function carouselInterface(e, t) {
      var n = Data.get(e, DATA_KEY$9),
          i = _objectSpread({}, Default$9, {}, Manipulator.getDataAttributes(e));

      "object" == _typeof(t) && (i = _objectSpread({}, i, {}, t));
      var s = "string" == typeof t ? t : i.slide;
      if (n || (n = new Carousel(e, i)), "number" == typeof t) n.to(t);else if ("string" == typeof s) {
        if (void 0 === n[s]) throw new TypeError("No method named \"".concat(s, "\""));
        n[s]();
      } else i.interval && i.ride && (n.pause(), n.cycle());
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Carousel.carouselInterface(this, e);
      });
    }
  }, {
    key: "dataApiClickHandler",
    value: function dataApiClickHandler(e) {
      var t = getElementFromSelector(this);
      if (!t || !t.classList.contains("carousel")) return;

      var n = _objectSpread({}, Manipulator.getDataAttributes(t), {}, Manipulator.getDataAttributes(this)),
          i = this.getAttribute("data-bs-slide-to");

      i && (n.interval = !1), Carousel.carouselInterface(t, n), i && Data.get(t, DATA_KEY$9).to(i), e.preventDefault();
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$9;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$a;
    }
  }]);

  return Carousel;
}(BaseComponent);

exports.Carousel = Carousel;
EventHandler.on(document, EVENT_CLICK_DATA_API$5, SELECTOR_DATA_SLIDE, Carousel.dataApiClickHandler), EventHandler.on(window, EVENT_LOAD_DATA_API$2, function () {
  var e = SelectorEngine.find(SELECTOR_DATA_RIDE);

  for (var t = 0, n = e.length; t < n; t++) {
    Carousel.carouselInterface(e[t], Data.get(e[t], DATA_KEY$9));
  }
}), defineJQueryPlugin(Carousel);
var NAME$9 = "collapse",
    DATA_KEY$8 = "bs.collapse",
    EVENT_KEY$8 = ".bs.collapse",
    DATA_API_KEY$5 = ".data-api",
    Default$8 = {
  toggle: !0,
  parent: ""
},
    DefaultType$8 = {
  toggle: "boolean",
  parent: "(string|element)"
},
    EVENT_SHOW$5 = "show.bs.collapse",
    EVENT_SHOWN$5 = "shown.bs.collapse",
    EVENT_HIDE$5 = "hide.bs.collapse",
    EVENT_HIDDEN$5 = "hidden.bs.collapse",
    EVENT_CLICK_DATA_API$4 = "click.bs.collapse.data-api",
    CLASS_NAME_SHOW$8 = "show",
    CLASS_NAME_COLLAPSE = "collapse",
    CLASS_NAME_COLLAPSING = "collapsing",
    CLASS_NAME_COLLAPSED = "collapsed",
    WIDTH = "width",
    HEIGHT = "height",
    SELECTOR_ACTIVES = ".show, .collapsing",
    SELECTOR_DATA_TOGGLE$4 = '[data-bs-toggle="collapse"]';

var Collapse =
/*#__PURE__*/
function (_BaseComponent4) {
  _inherits(Collapse, _BaseComponent4);

  function Collapse(e, t) {
    var _this8;

    _classCallCheck(this, Collapse);

    _this8 = _possibleConstructorReturn(this, _getPrototypeOf(Collapse).call(this, e)), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(t), _this8._triggerArray = SelectorEngine.find("".concat(SELECTOR_DATA_TOGGLE$4, "[href=\"#").concat(_this8._element.id, "\"],").concat(SELECTOR_DATA_TOGGLE$4, "[data-bs-target=\"#").concat(_this8._element.id, "\"]"));
    var n = SelectorEngine.find(SELECTOR_DATA_TOGGLE$4);

    for (var _e4 = 0, _t3 = n.length; _e4 < _t3; _e4++) {
      var _t4 = n[_e4],
          i = getSelectorFromElement(_t4),
          s = SelectorEngine.find(i).filter(function (e) {
        return e === _this8._element;
      });
      null !== i && s.length && (_this8._selector = i, _this8._triggerArray.push(_t4));
    }

    _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
    return _this8;
  }

  _createClass(Collapse, [{
    key: "toggle",
    value: function toggle() {
      this._element.classList.contains("show") ? this.hide() : this.show();
    }
  }, {
    key: "show",
    value: function show() {
      var _this9 = this;

      if (this._isTransitioning || this._element.classList.contains("show")) return;
      var e, t;
      this._parent && (e = SelectorEngine.find(SELECTOR_ACTIVES, this._parent).filter(function (e) {
        return "string" == typeof _this9._config.parent ? e.getAttribute("data-bs-parent") === _this9._config.parent : e.classList.contains("collapse");
      }), 0 === e.length && (e = null));
      var n = SelectorEngine.findOne(this._selector);

      if (e) {
        var _i3 = e.find(function (e) {
          return n !== e;
        });

        if (t = _i3 ? Data.get(_i3, DATA_KEY$8) : null, t && t._isTransitioning) return;
      }

      if (EventHandler.trigger(this._element, EVENT_SHOW$5).defaultPrevented) return;
      e && e.forEach(function (e) {
        n !== e && Collapse.collapseInterface(e, "hide"), t || Data.set(e, DATA_KEY$8, null);
      });

      var i = this._getDimension();

      this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[i] = 0, this._triggerArray.length && this._triggerArray.forEach(function (e) {
        e.classList.remove("collapsed"), e.setAttribute("aria-expanded", !0);
      }), this.setTransitioning(!0);
      var s = "scroll" + (i[0].toUpperCase() + i.slice(1));
      this._queueCallback(function () {
        _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[i] = "", _this9.setTransitioning(!1), EventHandler.trigger(_this9._element, EVENT_SHOWN$5);
      }, this._element, !0), this._element.style[i] = this._element[s] + "px";
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this10 = this;

      if (this._isTransitioning || !this._element.classList.contains("show")) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$5).defaultPrevented) return;

      var e = this._getDimension();

      this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", reflow(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
      var t = this._triggerArray.length;
      if (t > 0) for (var _e5 = 0; _e5 < t; _e5++) {
        var _t5 = this._triggerArray[_e5],
            _n2 = getElementFromSelector(_t5);

        _n2 && !_n2.classList.contains("show") && (_t5.classList.add("collapsed"), _t5.setAttribute("aria-expanded", !1));
      }
      this.setTransitioning(!0), this._element.style[e] = "", this._queueCallback(function () {
        _this10.setTransitioning(!1), _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), EventHandler.trigger(_this10._element, EVENT_HIDDEN$5);
      }, this._element, !0);
    }
  }, {
    key: "setTransitioning",
    value: function setTransitioning(e) {
      this._isTransitioning = e;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread({}, Default$8, {}, e)).toggle = Boolean(e.toggle), typeCheckConfig(NAME$9, e, DefaultType$8), e;
    }
  }, {
    key: "_getDimension",
    value: function _getDimension() {
      return this._element.classList.contains(WIDTH) ? WIDTH : HEIGHT;
    }
  }, {
    key: "_getParent",
    value: function _getParent() {
      var _this11 = this;

      var e = this._config.parent;
      e = getElement(e);
      var t = "".concat(SELECTOR_DATA_TOGGLE$4, "[data-bs-parent=\"").concat(e, "\"]");
      return SelectorEngine.find(t, e).forEach(function (e) {
        var t = getElementFromSelector(e);

        _this11._addAriaAndCollapsedClass(t, [e]);
      }), e;
    }
  }, {
    key: "_addAriaAndCollapsedClass",
    value: function _addAriaAndCollapsedClass(e, t) {
      if (!e || !t.length) return;
      var n = e.classList.contains("show");
      t.forEach(function (e) {
        n ? e.classList.remove("collapsed") : e.classList.add("collapsed"), e.setAttribute("aria-expanded", n);
      });
    }
  }], [{
    key: "collapseInterface",
    value: function collapseInterface(e, t) {
      var n = Data.get(e, DATA_KEY$8);

      var i = _objectSpread({}, Default$8, {}, Manipulator.getDataAttributes(e), {}, "object" == _typeof(t) && t ? t : {});

      if (!n && i.toggle && "string" == typeof t && /show|hide/.test(t) && (i.toggle = !1), n || (n = new Collapse(e, i)), "string" == typeof t) {
        if (void 0 === n[t]) throw new TypeError("No method named \"".concat(t, "\""));
        n[t]();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Collapse.collapseInterface(this, e);
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$8;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$9;
    }
  }]);

  return Collapse;
}(BaseComponent);

exports.Collapse = Collapse;
EventHandler.on(document, EVENT_CLICK_DATA_API$4, SELECTOR_DATA_TOGGLE$4, function (e) {
  ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
  var t = Manipulator.getDataAttributes(this),
      n = getSelectorFromElement(this);
  SelectorEngine.find(n).forEach(function (e) {
    var n = Data.get(e, DATA_KEY$8);
    var i;
    n ? (null === n._parent && "string" == typeof t.parent && (n._config.parent = t.parent, n._parent = n._getParent()), i = "toggle") : i = t, Collapse.collapseInterface(e, i);
  });
}), defineJQueryPlugin(Collapse);
var NAME$8 = "dropdown",
    DATA_KEY$7 = "bs.dropdown",
    EVENT_KEY$7 = ".bs.dropdown",
    DATA_API_KEY$4 = ".data-api",
    ESCAPE_KEY$2 = "Escape",
    SPACE_KEY = "Space",
    TAB_KEY = "Tab",
    ARROW_UP_KEY = "ArrowUp",
    ARROW_DOWN_KEY = "ArrowDown",
    RIGHT_MOUSE_BUTTON = 2,
    REGEXP_KEYDOWN = new RegExp("ArrowUp|ArrowDown|Escape"),
    EVENT_HIDE$4 = "hide.bs.dropdown",
    EVENT_HIDDEN$4 = "hidden.bs.dropdown",
    EVENT_SHOW$4 = "show.bs.dropdown",
    EVENT_SHOWN$4 = "shown.bs.dropdown",
    EVENT_CLICK = "click.bs.dropdown",
    EVENT_CLICK_DATA_API$3 = "click.bs.dropdown.data-api",
    EVENT_KEYDOWN_DATA_API = "keydown.bs.dropdown.data-api",
    EVENT_KEYUP_DATA_API = "keyup.bs.dropdown.data-api",
    CLASS_NAME_SHOW$7 = "show",
    CLASS_NAME_DROPUP = "dropup",
    CLASS_NAME_DROPEND = "dropend",
    CLASS_NAME_DROPSTART = "dropstart",
    CLASS_NAME_NAVBAR = "navbar",
    SELECTOR_DATA_TOGGLE$3 = '[data-bs-toggle="dropdown"]',
    SELECTOR_MENU = ".dropdown-menu",
    SELECTOR_NAVBAR_NAV = ".navbar-nav",
    SELECTOR_VISIBLE_ITEMS = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
    PLACEMENT_TOP = isRTL() ? "top-end" : "top-start",
    PLACEMENT_TOPEND = isRTL() ? "top-start" : "top-end",
    PLACEMENT_BOTTOM = isRTL() ? "bottom-end" : "bottom-start",
    PLACEMENT_BOTTOMEND = isRTL() ? "bottom-start" : "bottom-end",
    PLACEMENT_RIGHT = isRTL() ? "left-start" : "right-start",
    PLACEMENT_LEFT = isRTL() ? "right-start" : "left-start",
    Default$7 = {
  offset: [0, 2],
  boundary: "clippingParents",
  reference: "toggle",
  display: "dynamic",
  popperConfig: null,
  autoClose: !0
},
    DefaultType$7 = {
  offset: "(array|string|function)",
  boundary: "(string|element)",
  reference: "(string|element|object)",
  display: "string",
  popperConfig: "(null|object|function)",
  autoClose: "(boolean|string)"
};

var Dropdown =
/*#__PURE__*/
function (_BaseComponent5) {
  _inherits(Dropdown, _BaseComponent5);

  function Dropdown(e, t) {
    var _this12;

    _classCallCheck(this, Dropdown);

    _this12 = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, e)), _this12._popper = null, _this12._config = _this12._getConfig(t), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
    return _this12;
  }

  _createClass(Dropdown, [{
    key: "toggle",
    value: function toggle() {
      isDisabled(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
    }
  }, {
    key: "show",
    value: function show() {
      if (isDisabled(this._element) || this._menu.classList.contains("show")) return;
      var e = Dropdown.getParentFromElement(this._element),
          t = {
        relatedTarget: this._element
      };

      if (!EventHandler.trigger(this._element, EVENT_SHOW$4, t).defaultPrevented) {
        var _ref3;

        if (this._inNavbar) Manipulator.setDataAttribute(this._menu, "popper", "none");else {
          if (void 0 === Popper) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
          var _t6 = this._element;
          "parent" === this._config.reference ? _t6 = e : isElement(this._config.reference) ? _t6 = getElement(this._config.reference) : "object" == _typeof(this._config.reference) && (_t6 = this._config.reference);

          var _n3 = this._getPopperConfig(),
              i = _n3.modifiers.find(function (e) {
            return "applyStyles" === e.name && !1 === e.enabled;
          });

          this._popper = Popper.createPopper(_t6, this._menu, _n3), i && Manipulator.setDataAttribute(this._menu, "popper", "static");
        }
        "ontouchstart" in document.documentElement && !e.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (e) {
          return EventHandler.on(e, "mouseover", noop);
        }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), EventHandler.trigger(this._element, EVENT_SHOWN$4, t);
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (isDisabled(this._element) || !this._menu.classList.contains("show")) return;
      var e = {
        relatedTarget: this._element
      };

      this._completeHide(e);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._popper && this._popper.destroy(), _get(_getPrototypeOf(Dropdown.prototype), "dispose", this).call(this);
    }
  }, {
    key: "update",
    value: function update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this13 = this;

      EventHandler.on(this._element, EVENT_CLICK, function (e) {
        e.preventDefault(), _this13.toggle();
      });
    }
  }, {
    key: "_completeHide",
    value: function _completeHide(e) {
      var _ref4;

      EventHandler.trigger(this._element, EVENT_HIDE$4, e).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.off(e, "mouseover", noop);
      }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), Manipulator.removeDataAttribute(this._menu, "popper"), EventHandler.trigger(this._element, EVENT_HIDDEN$4, e));
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      if (e = _objectSpread({}, this.constructor.Default, {}, Manipulator.getDataAttributes(this._element), {}, e), typeCheckConfig(NAME$8, e, this.constructor.DefaultType), "object" == _typeof(e.reference) && !isElement(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw new TypeError(NAME$8.toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
      return e;
    }
  }, {
    key: "_getMenuElement",
    value: function _getMenuElement() {
      return SelectorEngine.next(this._element, SELECTOR_MENU)[0];
    }
  }, {
    key: "_getPlacement",
    value: function _getPlacement() {
      var e = this._element.parentNode;
      if (e.classList.contains("dropend")) return PLACEMENT_RIGHT;
      if (e.classList.contains("dropstart")) return PLACEMENT_LEFT;
      var t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return e.classList.contains("dropup") ? t ? PLACEMENT_TOPEND : PLACEMENT_TOP : t ? PLACEMENT_BOTTOMEND : PLACEMENT_BOTTOM;
    }
  }, {
    key: "_detectNavbar",
    value: function _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this14 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this14._element);
      } : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig() {
      var e = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      return "static" === this._config.display && (e.modifiers = [{
        name: "applyStyles",
        enabled: !1
      }]), _objectSpread({}, e, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
    }
  }, {
    key: "_selectMenuItem",
    value: function _selectMenuItem(e) {
      var t = SelectorEngine.find(SELECTOR_VISIBLE_ITEMS, this._menu).filter(isVisible);
      if (!t.length) return;
      var n = t.indexOf(e.target);
      "ArrowUp" === e.key && n > 0 && n--, "ArrowDown" === e.key && n < t.length - 1 && n++, n = -1 === n ? 0 : n, t[n].focus();
    }
  }], [{
    key: "dropdownInterface",
    value: function dropdownInterface(e, t) {
      var n = Data.get(e, DATA_KEY$7);

      if (n || (n = new Dropdown(e, "object" == _typeof(t) ? t : null)), "string" == typeof t) {
        if (void 0 === n[t]) throw new TypeError("No method named \"".concat(t, "\""));
        n[t]();
      }
    }
  }, {
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        Dropdown.dropdownInterface(this, e);
      });
    }
  }, {
    key: "clearMenus",
    value: function clearMenus(e) {
      if (e && (2 === e.button || "keyup" === e.type && "Tab" !== e.key)) return;
      var t = SelectorEngine.find(SELECTOR_DATA_TOGGLE$3);

      for (var _n4 = 0, i = t.length; _n4 < i; _n4++) {
        var _i4 = Data.get(t[_n4], DATA_KEY$7);

        if (!_i4 || !1 === _i4._config.autoClose) continue;
        if (!_i4._element.classList.contains("show")) continue;
        var s = {
          relatedTarget: _i4._element
        };

        if (e) {
          var _t7 = e.composedPath(),
              _n5 = _t7.includes(_i4._menu);

          if (_t7.includes(_i4._element) || "inside" === _i4._config.autoClose && !_n5 || "outside" === _i4._config.autoClose && _n5) continue;
          if (_i4._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
          "click" === e.type && (s.clickEvent = e);
        }

        _i4._completeHide(s);
      }
    }
  }, {
    key: "getParentFromElement",
    value: function getParentFromElement(e) {
      return getElementFromSelector(e) || e.parentNode;
    }
  }, {
    key: "dataApiKeydownHandler",
    value: function dataApiKeydownHandler(e) {
      var _this15 = this;

      if (/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(SELECTOR_MENU)) : !REGEXP_KEYDOWN.test(e.key)) return;
      var t = this.classList.contains("show");
      if (!t && "Escape" === e.key) return;
      if (e.preventDefault(), e.stopPropagation(), isDisabled(this)) return;

      var n = function n() {
        return _this15.matches(SELECTOR_DATA_TOGGLE$3) ? _this15 : SelectorEngine.prev(_this15, SELECTOR_DATA_TOGGLE$3)[0];
      };

      if ("Escape" === e.key) return n().focus(), void Dropdown.clearMenus();
      t || "ArrowUp" !== e.key && "ArrowDown" !== e.key ? t && "Space" !== e.key ? Dropdown.getInstance(n())._selectMenuItem(e) : Dropdown.clearMenus() : n().click();
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$7;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$7;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$8;
    }
  }]);

  return Dropdown;
}(BaseComponent);

exports.Dropdown = Dropdown;
EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_DATA_TOGGLE$3, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_KEYDOWN_DATA_API, SELECTOR_MENU, Dropdown.dataApiKeydownHandler), EventHandler.on(document, EVENT_CLICK_DATA_API$3, Dropdown.clearMenus), EventHandler.on(document, EVENT_KEYUP_DATA_API, Dropdown.clearMenus), EventHandler.on(document, EVENT_CLICK_DATA_API$3, SELECTOR_DATA_TOGGLE$3, function (e) {
  e.preventDefault(), Dropdown.dropdownInterface(this);
}), defineJQueryPlugin(Dropdown);

var SELECTOR_FIXED_CONTENT = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
    SELECTOR_STICKY_CONTENT = ".sticky-top",
    getWidth = function getWidth() {
  var e = document.documentElement.clientWidth;
  return Math.abs(window.innerWidth - e);
},
    hide = function hide() {
  var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : getWidth();
  _disableOverFlow(), _setElementAttributes("body", "paddingRight", function (t) {
    return t + e;
  }), _setElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight", function (t) {
    return t + e;
  }), _setElementAttributes(".sticky-top", "marginRight", function (t) {
    return t - e;
  });
},
    _disableOverFlow = function _disableOverFlow() {
  var e = document.body.style.overflow;
  e && Manipulator.setDataAttribute(document.body, "overflow", e), document.body.style.overflow = "hidden";
},
    _setElementAttributes = function _setElementAttributes(e, t, n) {
  var i = getWidth();
  SelectorEngine.find(e).forEach(function (e) {
    if (e !== document.body && window.innerWidth > e.clientWidth + i) return;
    var s = e.style[t],
        o = window.getComputedStyle(e)[t];
    Manipulator.setDataAttribute(e, t, s), e.style[t] = n(Number.parseFloat(o)) + "px";
  });
},
    reset = function reset() {
  _resetElementAttributes("body", "overflow"), _resetElementAttributes("body", "paddingRight"), _resetElementAttributes(SELECTOR_FIXED_CONTENT, "paddingRight"), _resetElementAttributes(".sticky-top", "marginRight");
},
    _resetElementAttributes = function _resetElementAttributes(e, t) {
  SelectorEngine.find(e).forEach(function (e) {
    var n = Manipulator.getDataAttribute(e, t);
    void 0 === n ? e.style.removeProperty(t) : (Manipulator.removeDataAttribute(e, t), e.style[t] = n);
  });
},
    Default$6 = {
  isVisible: !0,
  isAnimated: !1,
  rootElement: document.body,
  clickCallback: null
},
    DefaultType$6 = {
  isVisible: "boolean",
  isAnimated: "boolean",
  rootElement: "element",
  clickCallback: "(function|null)"
},
    NAME$7 = "backdrop",
    CLASS_NAME_BACKDROP = "modal-backdrop",
    CLASS_NAME_FADE$5 = "fade",
    CLASS_NAME_SHOW$6 = "show",
    EVENT_MOUSEDOWN = "mousedown.bs.backdrop";

var Backdrop =
/*#__PURE__*/
function () {
  function Backdrop(e) {
    _classCallCheck(this, Backdrop);

    this._config = this._getConfig(e), this._isAppended = !1, this._element = null;
  }

  _createClass(Backdrop, [{
    key: "show",
    value: function show(e) {
      this._config.isVisible ? (this._append(), this._config.isAnimated && reflow(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
        execute(e);
      })) : execute(e);
    }
  }, {
    key: "hide",
    value: function hide(e) {
      var _this16 = this;

      this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
        _this16.dispose(), execute(e);
      })) : execute(e);
    }
  }, {
    key: "_getElement",
    value: function _getElement() {
      if (!this._element) {
        var e = document.createElement("div");
        e.className = "modal-backdrop", this._config.isAnimated && e.classList.add("fade"), this._element = e;
      }

      return this._element;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return (e = _objectSpread({}, Default$6, {}, "object" == _typeof(e) ? e : {})).rootElement = e.rootElement || document.body, typeCheckConfig(NAME$7, e, DefaultType$6), e;
    }
  }, {
    key: "_append",
    value: function _append() {
      var _this17 = this;

      this._isAppended || (this._config.rootElement.appendChild(this._getElement()), EventHandler.on(this._getElement(), EVENT_MOUSEDOWN, function () {
        execute(_this17._config.clickCallback);
      }), this._isAppended = !0);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._isAppended && (EventHandler.off(this._element, EVENT_MOUSEDOWN), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
    }
  }, {
    key: "_emulateAnimation",
    value: function _emulateAnimation(e) {
      if (!this._config.isAnimated) return void execute(e);
      var t = getTransitionDurationFromElement(this._getElement());
      EventHandler.one(this._getElement(), "transitionend", function () {
        return execute(e);
      }), emulateTransitionEnd(this._getElement(), t);
    }
  }]);

  return Backdrop;
}();

var NAME$6 = "modal",
    DATA_KEY$6 = "bs.modal",
    EVENT_KEY$6 = ".bs.modal",
    DATA_API_KEY$3 = ".data-api",
    ESCAPE_KEY$1 = "Escape",
    Default$5 = {
  backdrop: !0,
  keyboard: !0,
  focus: !0
},
    DefaultType$5 = {
  backdrop: "(boolean|string)",
  keyboard: "boolean",
  focus: "boolean"
},
    EVENT_HIDE$3 = "hide.bs.modal",
    EVENT_HIDE_PREVENTED = "hidePrevented.bs.modal",
    EVENT_HIDDEN$3 = "hidden.bs.modal",
    EVENT_SHOW$3 = "show.bs.modal",
    EVENT_SHOWN$3 = "shown.bs.modal",
    EVENT_FOCUSIN$2 = "focusin.bs.modal",
    EVENT_RESIZE = "resize.bs.modal",
    EVENT_CLICK_DISMISS$2 = "click.dismiss.bs.modal",
    EVENT_KEYDOWN_DISMISS$1 = "keydown.dismiss.bs.modal",
    EVENT_MOUSEUP_DISMISS = "mouseup.dismiss.bs.modal",
    EVENT_MOUSEDOWN_DISMISS = "mousedown.dismiss.bs.modal",
    EVENT_CLICK_DATA_API$2 = "click.bs.modal.data-api",
    CLASS_NAME_OPEN = "modal-open",
    CLASS_NAME_FADE$4 = "fade",
    CLASS_NAME_SHOW$5 = "show",
    CLASS_NAME_STATIC = "modal-static",
    SELECTOR_DIALOG = ".modal-dialog",
    SELECTOR_MODAL_BODY = ".modal-body",
    SELECTOR_DATA_TOGGLE$2 = '[data-bs-toggle="modal"]',
    SELECTOR_DATA_DISMISS$2 = '[data-bs-dismiss="modal"]';

var Modal =
/*#__PURE__*/
function (_BaseComponent6) {
  _inherits(Modal, _BaseComponent6);

  function Modal(e, t) {
    var _this18;

    _classCallCheck(this, Modal);

    _this18 = _possibleConstructorReturn(this, _getPrototypeOf(Modal).call(this, e)), _this18._config = _this18._getConfig(t), _this18._dialog = SelectorEngine.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1;
    return _this18;
  }

  _createClass(Modal, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this19 = this;

      if (this._isShown || this._isTransitioning) return;
      this._isAnimated() && (this._isTransitioning = !0);
      var t = EventHandler.trigger(this._element, EVENT_SHOW$3, {
        relatedTarget: e
      });
      this._isShown || t.defaultPrevented || (this._isShown = !0, hide(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, SELECTOR_DATA_DISMISS$2, function (e) {
        return _this19.hide(e);
      }), EventHandler.on(this._dialog, EVENT_MOUSEDOWN_DISMISS, function () {
        EventHandler.one(_this19._element, EVENT_MOUSEUP_DISMISS, function (e) {
          e.target === _this19._element && (_this19._ignoreBackdropClick = !0);
        });
      }), this._showBackdrop(function () {
        return _this19._showElement(e);
      }));
    }
  }, {
    key: "hide",
    value: function hide(e) {
      var _this20 = this;

      if (e && e.preventDefault(), !this._isShown || this._isTransitioning) return;
      if (EventHandler.trigger(this._element, EVENT_HIDE$3).defaultPrevented) return;
      this._isShown = !1;

      var t = this._isAnimated();

      t && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), EventHandler.off(document, EVENT_FOCUSIN$2), this._element.classList.remove("show"), EventHandler.off(this._element, EVENT_CLICK_DISMISS$2), EventHandler.off(this._dialog, EVENT_MOUSEDOWN_DISMISS), this._queueCallback(function () {
        return _this20._hideModal();
      }, this._element, t);
    }
  }, {
    key: "dispose",
    value: function dispose() {
      [window, this._dialog].forEach(function (e) {
        return EventHandler.off(e, ".bs.modal");
      }), this._backdrop.dispose(), _get(_getPrototypeOf(Modal.prototype), "dispose", this).call(this), EventHandler.off(document, EVENT_FOCUSIN$2);
    }
  }, {
    key: "handleUpdate",
    value: function handleUpdate() {
      this._adjustDialog();
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      return new Backdrop({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$5, {}, Manipulator.getDataAttributes(this._element), {}, e), typeCheckConfig(NAME$6, e, DefaultType$5), e;
    }
  }, {
    key: "_showElement",
    value: function _showElement(e) {
      var _this21 = this;

      var t = this._isAnimated(),
          n = SelectorEngine.findOne(".modal-body", this._dialog);

      this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, n && (n.scrollTop = 0), t && reflow(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(function () {
        _this21._config.focus && _this21._element.focus(), _this21._isTransitioning = !1, EventHandler.trigger(_this21._element, EVENT_SHOWN$3, {
          relatedTarget: e
        });
      }, this._dialog, t);
    }
  }, {
    key: "_enforceFocus",
    value: function _enforceFocus() {
      var _this22 = this;

      EventHandler.off(document, EVENT_FOCUSIN$2), EventHandler.on(document, EVENT_FOCUSIN$2, function (e) {
        document === e.target || _this22._element === e.target || _this22._element.contains(e.target) || _this22._element.focus();
      });
    }
  }, {
    key: "_setEscapeEvent",
    value: function _setEscapeEvent() {
      var _this23 = this;

      this._isShown ? EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS$1, function (e) {
        _this23._config.keyboard && "Escape" === e.key ? (e.preventDefault(), _this23.hide()) : _this23._config.keyboard || "Escape" !== e.key || _this23._triggerBackdropTransition();
      }) : EventHandler.off(this._element, EVENT_KEYDOWN_DISMISS$1);
    }
  }, {
    key: "_setResizeEvent",
    value: function _setResizeEvent() {
      var _this24 = this;

      this._isShown ? EventHandler.on(window, EVENT_RESIZE, function () {
        return _this24._adjustDialog();
      }) : EventHandler.off(window, EVENT_RESIZE);
    }
  }, {
    key: "_hideModal",
    value: function _hideModal() {
      var _this25 = this;

      this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
        document.body.classList.remove("modal-open"), _this25._resetAdjustments(), reset(), EventHandler.trigger(_this25._element, EVENT_HIDDEN$3);
      });
    }
  }, {
    key: "_showBackdrop",
    value: function _showBackdrop(e) {
      var _this26 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$2, function (e) {
        _this26._ignoreBackdropClick ? _this26._ignoreBackdropClick = !1 : e.target === e.currentTarget && (!0 === _this26._config.backdrop ? _this26.hide() : "static" === _this26._config.backdrop && _this26._triggerBackdropTransition());
      }), this._backdrop.show(e);
    }
  }, {
    key: "_isAnimated",
    value: function _isAnimated() {
      return this._element.classList.contains("fade");
    }
  }, {
    key: "_triggerBackdropTransition",
    value: function _triggerBackdropTransition() {
      var _this27 = this;

      if (EventHandler.trigger(this._element, EVENT_HIDE_PREVENTED).defaultPrevented) return;
      var e = this._element.scrollHeight > document.documentElement.clientHeight;
      e || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
      var t = getTransitionDurationFromElement(this._dialog);
      EventHandler.off(this._element, "transitionend"), EventHandler.one(this._element, "transitionend", function () {
        _this27._element.classList.remove("modal-static"), e || (EventHandler.one(_this27._element, "transitionend", function () {
          _this27._element.style.overflowY = "";
        }), emulateTransitionEnd(_this27._element, t));
      }), emulateTransitionEnd(this._element, t), this._element.focus();
    }
  }, {
    key: "_adjustDialog",
    value: function _adjustDialog() {
      var e = this._element.scrollHeight > document.documentElement.clientHeight,
          t = getWidth(),
          n = t > 0;
      (!n && e && !isRTL() || n && !e && isRTL()) && (this._element.style.paddingLeft = t + "px"), (n && !e && !isRTL() || !n && e && isRTL()) && (this._element.style.paddingRight = t + "px");
    }
  }, {
    key: "_resetAdjustments",
    value: function _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e, t) {
      return this.each(function () {
        var n = Modal.getInstance(this) || new Modal(this, "object" == _typeof(e) ? e : {});

        if ("string" == typeof e) {
          if (void 0 === n[e]) throw new TypeError("No method named \"".concat(e, "\""));
          n[e](t);
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$5;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$6;
    }
  }]);

  return Modal;
}(BaseComponent);

exports.Modal = Modal;
EventHandler.on(document, EVENT_CLICK_DATA_API$2, SELECTOR_DATA_TOGGLE$2, function (e) {
  var _this28 = this;

  var t = getElementFromSelector(this);
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), EventHandler.one(t, EVENT_SHOW$3, function (e) {
    e.defaultPrevented || EventHandler.one(t, EVENT_HIDDEN$3, function () {
      isVisible(_this28) && _this28.focus();
    });
  }), (Modal.getInstance(t) || new Modal(t)).toggle(this);
}), defineJQueryPlugin(Modal);
var NAME$5 = "offcanvas",
    DATA_KEY$5 = "bs.offcanvas",
    EVENT_KEY$5 = ".bs.offcanvas",
    DATA_API_KEY$2 = ".data-api",
    EVENT_LOAD_DATA_API$1 = "load.bs.offcanvas.data-api",
    ESCAPE_KEY = "Escape",
    Default$4 = {
  backdrop: !0,
  keyboard: !0,
  scroll: !1
},
    DefaultType$4 = {
  backdrop: "boolean",
  keyboard: "boolean",
  scroll: "boolean"
},
    CLASS_NAME_SHOW$4 = "show",
    OPEN_SELECTOR = ".offcanvas.show",
    EVENT_SHOW$2 = "show.bs.offcanvas",
    EVENT_SHOWN$2 = "shown.bs.offcanvas",
    EVENT_HIDE$2 = "hide.bs.offcanvas",
    EVENT_HIDDEN$2 = "hidden.bs.offcanvas",
    EVENT_FOCUSIN$1 = "focusin.bs.offcanvas",
    EVENT_CLICK_DATA_API$1 = "click.bs.offcanvas.data-api",
    EVENT_CLICK_DISMISS$1 = "click.dismiss.bs.offcanvas",
    EVENT_KEYDOWN_DISMISS = "keydown.dismiss.bs.offcanvas",
    SELECTOR_DATA_DISMISS$1 = '[data-bs-dismiss="offcanvas"]',
    SELECTOR_DATA_TOGGLE$1 = '[data-bs-toggle="offcanvas"]';

var Offcanvas =
/*#__PURE__*/
function (_BaseComponent7) {
  _inherits(Offcanvas, _BaseComponent7);

  function Offcanvas(e, t) {
    var _this29;

    _classCallCheck(this, Offcanvas);

    _this29 = _possibleConstructorReturn(this, _getPrototypeOf(Offcanvas).call(this, e)), _this29._config = _this29._getConfig(t), _this29._isShown = !1, _this29._backdrop = _this29._initializeBackDrop(), _this29._addEventListeners();
    return _this29;
  }

  _createClass(Offcanvas, [{
    key: "toggle",
    value: function toggle(e) {
      return this._isShown ? this.hide() : this.show(e);
    }
  }, {
    key: "show",
    value: function show(e) {
      var _this30 = this;

      this._isShown || EventHandler.trigger(this._element, EVENT_SHOW$2, {
        relatedTarget: e
      }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (hide(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
        EventHandler.trigger(_this30._element, EVENT_SHOWN$2, {
          relatedTarget: e
        });
      }, this._element, !0));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this31 = this;

      this._isShown && (EventHandler.trigger(this._element, EVENT_HIDE$2).defaultPrevented || (EventHandler.off(document, EVENT_FOCUSIN$1), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
        _this31._element.setAttribute("aria-hidden", !0), _this31._element.removeAttribute("aria-modal"), _this31._element.removeAttribute("role"), _this31._element.style.visibility = "hidden", _this31._config.scroll || reset(), EventHandler.trigger(_this31._element, EVENT_HIDDEN$2);
      }, this._element, !0)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._backdrop.dispose(), _get(_getPrototypeOf(Offcanvas.prototype), "dispose", this).call(this), EventHandler.off(document, EVENT_FOCUSIN$1);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default$4, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) ? e : {}), typeCheckConfig(NAME$5, e, DefaultType$4), e;
    }
  }, {
    key: "_initializeBackDrop",
    value: function _initializeBackDrop() {
      var _this32 = this;

      return new Backdrop({
        isVisible: this._config.backdrop,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: function clickCallback() {
          return _this32.hide();
        }
      });
    }
  }, {
    key: "_enforceFocusOnElement",
    value: function _enforceFocusOnElement(e) {
      EventHandler.off(document, EVENT_FOCUSIN$1), EventHandler.on(document, EVENT_FOCUSIN$1, function (t) {
        document === t.target || e === t.target || e.contains(t.target) || e.focus();
      }), e.focus();
    }
  }, {
    key: "_addEventListeners",
    value: function _addEventListeners() {
      var _this33 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS$1, SELECTOR_DATA_DISMISS$1, function () {
        return _this33.hide();
      }), EventHandler.on(this._element, EVENT_KEYDOWN_DISMISS, function (e) {
        _this33._config.keyboard && "Escape" === e.key && _this33.hide();
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$5) || new Offcanvas(this, "object" == _typeof(e) ? e : {});

        if ("string" == typeof e) {
          if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$5;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$4;
    }
  }]);

  return Offcanvas;
}(BaseComponent);

exports.Offcanvas = Offcanvas;
EventHandler.on(document, EVENT_CLICK_DATA_API$1, SELECTOR_DATA_TOGGLE$1, function (e) {
  var _this34 = this;

  var t = getElementFromSelector(this);
  if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this)) return;
  EventHandler.one(t, EVENT_HIDDEN$2, function () {
    isVisible(_this34) && _this34.focus();
  });
  var n = SelectorEngine.findOne(OPEN_SELECTOR);
  n && n !== t && Offcanvas.getInstance(n).hide(), (Data.get(t, DATA_KEY$5) || new Offcanvas(t)).toggle(this);
}), EventHandler.on(window, EVENT_LOAD_DATA_API$1, function () {
  SelectorEngine.find(OPEN_SELECTOR).forEach(function (e) {
    return (Data.get(e, DATA_KEY$5) || new Offcanvas(e)).show();
  });
}), defineJQueryPlugin(Offcanvas);

var uriAttrs = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
    ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i,
    SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
    DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    allowedAttribute = function allowedAttribute(e, t) {
  var n = e.nodeName.toLowerCase();
  if (t.includes(n)) return !uriAttrs.has(n) || Boolean(SAFE_URL_PATTERN.test(e.nodeValue) || DATA_URL_PATTERN.test(e.nodeValue));
  var i = t.filter(function (e) {
    return e instanceof RegExp;
  });

  for (var _e6 = 0, _t8 = i.length; _e6 < _t8; _e6++) {
    if (i[_e6].test(n)) return !0;
  }

  return !1;
},
    DefaultAllowlist = {
  "*": ["class", "dir", "id", "lang", "role", ARIA_ATTRIBUTE_PATTERN],
  a: ["target", "href", "title", "rel"],
  area: [],
  b: [],
  br: [],
  col: [],
  code: [],
  div: [],
  em: [],
  hr: [],
  h1: [],
  h2: [],
  h3: [],
  h4: [],
  h5: [],
  h6: [],
  i: [],
  img: ["src", "srcset", "alt", "title", "width", "height"],
  li: [],
  ol: [],
  p: [],
  pre: [],
  s: [],
  small: [],
  span: [],
  sub: [],
  sup: [],
  strong: [],
  u: [],
  ul: []
};

function sanitizeHtml(e, t, n) {
  var _ref5;

  if (!e.length) return e;
  if (n && "function" == typeof n) return n(e);

  var i = new window.DOMParser().parseFromString(e, "text/html"),
      s = Object.keys(t),
      o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(i.body.querySelectorAll("*")));

  var _loop = function _loop(_e7, _n6) {
    var _ref6;

    var n = o[_e7],
        i = n.nodeName.toLowerCase();

    if (!s.includes(i)) {
      n.parentNode.removeChild(n);
      return "continue";
    }

    var a = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(n.attributes)),
        r = [].concat(t["*"] || [], t[i] || []);

    a.forEach(function (e) {
      allowedAttribute(e, r) || n.removeAttribute(e.nodeName);
    });
  };

  for (var _e7 = 0, _n6 = o.length; _e7 < _n6; _e7++) {
    var _ret = _loop(_e7, _n6);

    if (_ret === "continue") continue;
  }

  return i.body.innerHTML;
}

var NAME$4 = "tooltip",
    DATA_KEY$4 = "bs.tooltip",
    EVENT_KEY$4 = ".bs.tooltip",
    CLASS_PREFIX$1 = "bs-tooltip",
    BSCLS_PREFIX_REGEX$1 = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
    DISALLOWED_ATTRIBUTES = new Set(["sanitize", "allowList", "sanitizeFn"]),
    DefaultType$3 = {
  animation: "boolean",
  template: "string",
  title: "(string|element|function)",
  trigger: "string",
  delay: "(number|object)",
  html: "boolean",
  selector: "(string|boolean)",
  placement: "(string|function)",
  offset: "(array|string|function)",
  container: "(string|element|boolean)",
  fallbackPlacements: "array",
  boundary: "(string|element)",
  customClass: "(string|function)",
  sanitize: "boolean",
  sanitizeFn: "(null|function)",
  allowList: "object",
  popperConfig: "(null|object|function)"
},
    AttachmentMap = {
  AUTO: "auto",
  TOP: "top",
  RIGHT: isRTL() ? "left" : "right",
  BOTTOM: "bottom",
  LEFT: isRTL() ? "right" : "left"
},
    Default$3 = {
  animation: !0,
  template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
  trigger: "hover focus",
  title: "",
  delay: 0,
  html: !1,
  selector: !1,
  placement: "top",
  offset: [0, 0],
  container: !1,
  fallbackPlacements: ["top", "right", "bottom", "left"],
  boundary: "clippingParents",
  customClass: "",
  sanitize: !0,
  sanitizeFn: null,
  allowList: DefaultAllowlist,
  popperConfig: null
},
    Event$2 = {
  HIDE: "hide.bs.tooltip",
  HIDDEN: "hidden.bs.tooltip",
  SHOW: "show.bs.tooltip",
  SHOWN: "shown.bs.tooltip",
  INSERTED: "inserted.bs.tooltip",
  CLICK: "click.bs.tooltip",
  FOCUSIN: "focusin.bs.tooltip",
  FOCUSOUT: "focusout.bs.tooltip",
  MOUSEENTER: "mouseenter.bs.tooltip",
  MOUSELEAVE: "mouseleave.bs.tooltip"
},
    CLASS_NAME_FADE$3 = "fade",
    CLASS_NAME_MODAL = "modal",
    CLASS_NAME_SHOW$3 = "show",
    HOVER_STATE_SHOW = "show",
    HOVER_STATE_OUT = "out",
    SELECTOR_TOOLTIP_INNER = ".tooltip-inner",
    TRIGGER_HOVER = "hover",
    TRIGGER_FOCUS = "focus",
    TRIGGER_CLICK = "click",
    TRIGGER_MANUAL = "manual";

var Tooltip =
/*#__PURE__*/
function (_BaseComponent8) {
  _inherits(Tooltip, _BaseComponent8);

  function Tooltip(e, t) {
    var _this35;

    _classCallCheck(this, Tooltip);

    if (void 0 === Popper) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
    _this35 = _possibleConstructorReturn(this, _getPrototypeOf(Tooltip).call(this, e)), _this35._isEnabled = !0, _this35._timeout = 0, _this35._hoverState = "", _this35._activeTrigger = {}, _this35._popper = null, _this35._config = _this35._getConfig(t), _this35.tip = null, _this35._setListeners();
    return _this35;
  }

  _createClass(Tooltip, [{
    key: "enable",
    value: function enable() {
      this._isEnabled = !0;
    }
  }, {
    key: "disable",
    value: function disable() {
      this._isEnabled = !1;
    }
  }, {
    key: "toggleEnabled",
    value: function toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
  }, {
    key: "toggle",
    value: function toggle(e) {
      if (this._isEnabled) if (e) {
        var t = this._initializeOnDelegatedTarget(e);

        t._activeTrigger.click = !t._activeTrigger.click, t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t);
      } else {
        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

        this._enter(null, this);
      }
    }
  }, {
    key: "dispose",
    value: function dispose() {
      clearTimeout(this._timeout), EventHandler.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), _get(_getPrototypeOf(Tooltip.prototype), "dispose", this).call(this);
    }
  }, {
    key: "show",
    value: function show() {
      var _i$classList,
          _ref7,
          _this36 = this;

      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this.isWithContent() || !this._isEnabled) return;
      var e = EventHandler.trigger(this._element, this.constructor.Event.SHOW),
          t = findShadowRoot(this._element),
          n = null === t ? this._element.ownerDocument.documentElement.contains(this._element) : t.contains(this._element);
      if (e.defaultPrevented || !n) return;
      var i = this.getTipElement(),
          s = getUID(this.constructor.NAME);
      i.setAttribute("id", s), this._element.setAttribute("aria-describedby", s), this.setContent(), this._config.animation && i.classList.add("fade");

      var o = "function" == typeof this._config.placement ? this._config.placement.call(this, i, this._element) : this._config.placement,
          a = this._getAttachment(o);

      this._addAttachmentClass(a);

      var r = this._config.container;
      Data.set(i, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (r.appendChild(i), EventHandler.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = Popper.createPopper(this._element, i, this._getPopperConfig(a)), i.classList.add("show");
      var l = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
      l && (_i$classList = i.classList).add.apply(_i$classList, _toConsumableArray(l.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (e) {
        EventHandler.on(e, "mouseover", noop);
      });
      var c = this.tip.classList.contains("fade");

      this._queueCallback(function () {
        var e = _this36._hoverState;
        _this36._hoverState = null, EventHandler.trigger(_this36._element, _this36.constructor.Event.SHOWN), "out" === e && _this36._leave(null, _this36);
      }, this.tip, c);
    }
  }, {
    key: "hide",
    value: function hide() {
      var _ref8,
          _this37 = this;

      if (!this._popper) return;
      var e = this.getTipElement();
      if (EventHandler.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
      e.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (e) {
        return EventHandler.off(e, "mouseover", noop);
      }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
      var t = this.tip.classList.contains("fade");
      this._queueCallback(function () {
        _this37._isWithActiveTrigger() || ("show" !== _this37._hoverState && e.parentNode && e.parentNode.removeChild(e), _this37._cleanTipClass(), _this37._element.removeAttribute("aria-describedby"), EventHandler.trigger(_this37._element, _this37.constructor.Event.HIDDEN), _this37._popper && (_this37._popper.destroy(), _this37._popper = null));
      }, this.tip, t), this._hoverState = "";
    }
  }, {
    key: "update",
    value: function update() {
      null !== this._popper && this._popper.update();
    }
  }, {
    key: "isWithContent",
    value: function isWithContent() {
      return Boolean(this.getTitle());
    }
  }, {
    key: "getTipElement",
    value: function getTipElement() {
      if (this.tip) return this.tip;
      var e = document.createElement("div");
      return e.innerHTML = this._config.template, this.tip = e.children[0], this.tip;
    }
  }, {
    key: "setContent",
    value: function setContent() {
      var e = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(".tooltip-inner", e), this.getTitle()), e.classList.remove("fade", "show");
    }
  }, {
    key: "setElementContent",
    value: function setElementContent(e, t) {
      if (null !== e) return isElement(t) ? (t = getElement(t), void (this._config.html ? t.parentNode !== e && (e.innerHTML = "", e.appendChild(t)) : e.textContent = t.textContent)) : void (this._config.html ? (this._config.sanitize && (t = sanitizeHtml(t, this._config.allowList, this._config.sanitizeFn)), e.innerHTML = t) : e.textContent = t);
    }
  }, {
    key: "getTitle",
    value: function getTitle() {
      var e = this._element.getAttribute("data-bs-original-title");

      return e || (e = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), e;
    }
  }, {
    key: "updateAttachment",
    value: function updateAttachment(e) {
      return "right" === e ? "end" : "left" === e ? "start" : e;
    }
  }, {
    key: "_initializeOnDelegatedTarget",
    value: function _initializeOnDelegatedTarget(e, t) {
      var n = this.constructor.DATA_KEY;
      return (t = t || Data.get(e.delegateTarget, n)) || (t = new this.constructor(e.delegateTarget, this._getDelegateConfig()), Data.set(e.delegateTarget, n, t)), t;
    }
  }, {
    key: "_getOffset",
    value: function _getOffset() {
      var _this38 = this;

      var e = this._config.offset;
      return "string" == typeof e ? e.split(",").map(function (e) {
        return Number.parseInt(e, 10);
      }) : "function" == typeof e ? function (t) {
        return e(t, _this38._element);
      } : e;
    }
  }, {
    key: "_getPopperConfig",
    value: function _getPopperConfig(e) {
      var _this39 = this;

      var t = {
        placement: e,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: ".".concat(this.constructor.NAME, "-arrow")
          }
        }, {
          name: "onChange",
          enabled: !0,
          phase: "afterWrite",
          fn: function fn(e) {
            return _this39._handlePopperPlacementChange(e);
          }
        }],
        onFirstUpdate: function onFirstUpdate(e) {
          e.options.placement !== e.placement && _this39._handlePopperPlacementChange(e);
        }
      };
      return _objectSpread({}, t, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(e) {
      this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(e));
    }
  }, {
    key: "_getAttachment",
    value: function _getAttachment(e) {
      return AttachmentMap[e.toUpperCase()];
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this40 = this;

      this._config.trigger.split(" ").forEach(function (e) {
        if ("click" === e) EventHandler.on(_this40._element, _this40.constructor.Event.CLICK, _this40._config.selector, function (e) {
          return _this40.toggle(e);
        });else if ("manual" !== e) {
          var t = "hover" === e ? _this40.constructor.Event.MOUSEENTER : _this40.constructor.Event.FOCUSIN,
              _n7 = "hover" === e ? _this40.constructor.Event.MOUSELEAVE : _this40.constructor.Event.FOCUSOUT;

          EventHandler.on(_this40._element, t, _this40._config.selector, function (e) {
            return _this40._enter(e);
          }), EventHandler.on(_this40._element, _n7, _this40._config.selector, function (e) {
            return _this40._leave(e);
          });
        }
      }), this._hideModalHandler = function () {
        _this40._element && _this40.hide();
      }, EventHandler.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread({}, this._config, {
        trigger: "manual",
        selector: ""
      }) : this._fixTitle();
    }
  }, {
    key: "_fixTitle",
    value: function _fixTitle() {
      var e = this._element.getAttribute("title"),
          t = _typeof(this._element.getAttribute("data-bs-original-title"));

      (e || "string" !== t) && (this._element.setAttribute("data-bs-original-title", e || ""), !e || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", e), this._element.setAttribute("title", ""));
    }
  }, {
    key: "_enter",
    value: function _enter(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusin" === e.type ? "focus" : "hover"] = !0), t.getTipElement().classList.contains("show") || "show" === t._hoverState ? t._hoverState = "show" : (clearTimeout(t._timeout), t._hoverState = "show", t._config.delay && t._config.delay.show ? t._timeout = setTimeout(function () {
        "show" === t._hoverState && t.show();
      }, t._config.delay.show) : t.show());
    }
  }, {
    key: "_leave",
    value: function _leave(e, t) {
      t = this._initializeOnDelegatedTarget(e, t), e && (t._activeTrigger["focusout" === e.type ? "focus" : "hover"] = t._element.contains(e.relatedTarget)), t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = "out", t._config.delay && t._config.delay.hide ? t._timeout = setTimeout(function () {
        "out" === t._hoverState && t.hide();
      }, t._config.delay.hide) : t.hide());
    }
  }, {
    key: "_isWithActiveTrigger",
    value: function _isWithActiveTrigger() {
      for (var e in this._activeTrigger) {
        if (this._activeTrigger[e]) return !0;
      }

      return !1;
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      var t = Manipulator.getDataAttributes(this._element);
      return Object.keys(t).forEach(function (e) {
        DISALLOWED_ATTRIBUTES.has(e) && delete t[e];
      }), (e = _objectSpread({}, this.constructor.Default, {}, t, {}, "object" == _typeof(e) && e ? e : {})).container = !1 === e.container ? document.body : getElement(e.container), "number" == typeof e.delay && (e.delay = {
        show: e.delay,
        hide: e.delay
      }), "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), typeCheckConfig(NAME$4, e, this.constructor.DefaultType), e.sanitize && (e.template = sanitizeHtml(e.template, e.allowList, e.sanitizeFn)), e;
    }
  }, {
    key: "_getDelegateConfig",
    value: function _getDelegateConfig() {
      var e = {};
      if (this._config) for (var t in this._config) {
        this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
      }
      return e;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var e = this.getTipElement(),
          t = e.getAttribute("class").match(BSCLS_PREFIX_REGEX$1);
      null !== t && t.length > 0 && t.map(function (e) {
        return e.trim();
      }).forEach(function (t) {
        return e.classList.remove(t);
      });
    }
  }, {
    key: "_handlePopperPlacementChange",
    value: function _handlePopperPlacementChange(e) {
      var t = e.state;
      t && (this.tip = t.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(t.placement)));
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$4);
        var n = "object" == _typeof(e) && e;

        if ((t || !/dispose|hide/.test(e)) && (t || (t = new Tooltip(this, n)), "string" == typeof e)) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$3;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$4;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$2;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$3;
    }
  }]);

  return Tooltip;
}(BaseComponent);

exports.Tooltip = Tooltip;
defineJQueryPlugin(Tooltip);

var NAME$3 = "popover",
    DATA_KEY$3 = "bs.popover",
    EVENT_KEY$3 = ".bs.popover",
    CLASS_PREFIX = "bs-popover",
    BSCLS_PREFIX_REGEX = new RegExp("(^|\\s)bs-popover\\S+", "g"),
    Default$2 = _objectSpread({}, Tooltip.Default, {
  placement: "right",
  offset: [0, 8],
  trigger: "click",
  content: "",
  template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
}),
    DefaultType$2 = _objectSpread({}, Tooltip.DefaultType, {
  content: "(string|element|function)"
}),
    Event$1 = {
  HIDE: "hide.bs.popover",
  HIDDEN: "hidden.bs.popover",
  SHOW: "show.bs.popover",
  SHOWN: "shown.bs.popover",
  INSERTED: "inserted.bs.popover",
  CLICK: "click.bs.popover",
  FOCUSIN: "focusin.bs.popover",
  FOCUSOUT: "focusout.bs.popover",
  MOUSEENTER: "mouseenter.bs.popover",
  MOUSELEAVE: "mouseleave.bs.popover"
},
    CLASS_NAME_FADE$2 = "fade",
    CLASS_NAME_SHOW$2 = "show",
    SELECTOR_TITLE = ".popover-header",
    SELECTOR_CONTENT = ".popover-body";

var Popover =
/*#__PURE__*/
function (_Tooltip) {
  _inherits(Popover, _Tooltip);

  function Popover() {
    _classCallCheck(this, Popover);

    return _possibleConstructorReturn(this, _getPrototypeOf(Popover).apply(this, arguments));
  }

  _createClass(Popover, [{
    key: "isWithContent",
    value: function isWithContent() {
      return this.getTitle() || this._getContent();
    }
  }, {
    key: "setContent",
    value: function setContent() {
      var e = this.getTipElement();
      this.setElementContent(SelectorEngine.findOne(SELECTOR_TITLE, e), this.getTitle());

      var t = this._getContent();

      "function" == typeof t && (t = t.call(this._element)), this.setElementContent(SelectorEngine.findOne(".popover-body", e), t), e.classList.remove("fade", "show");
    }
  }, {
    key: "_addAttachmentClass",
    value: function _addAttachmentClass(e) {
      this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(e));
    }
  }, {
    key: "_getContent",
    value: function _getContent() {
      return this._element.getAttribute("data-bs-content") || this._config.content;
    }
  }, {
    key: "_cleanTipClass",
    value: function _cleanTipClass() {
      var e = this.getTipElement(),
          t = e.getAttribute("class").match(BSCLS_PREFIX_REGEX);
      null !== t && t.length > 0 && t.map(function (e) {
        return e.trim();
      }).forEach(function (t) {
        return e.classList.remove(t);
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY$3);
        var n = "object" == _typeof(e) ? e : null;

        if ((t || !/dispose|hide/.test(e)) && (t || (t = new Popover(this, n), Data.set(this, DATA_KEY$3, t)), "string" == typeof e)) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$2;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$3;
    }
  }, {
    key: "Event",
    get: function get() {
      return Event$1;
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType$2;
    }
  }]);

  return Popover;
}(Tooltip);

exports.Popover = Popover;
defineJQueryPlugin(Popover);
var NAME$2 = "scrollspy",
    DATA_KEY$2 = "bs.scrollspy",
    EVENT_KEY$2 = ".bs.scrollspy",
    DATA_API_KEY$1 = ".data-api",
    Default$1 = {
  offset: 10,
  method: "auto",
  target: ""
},
    DefaultType$1 = {
  offset: "number",
  method: "string",
  target: "(string|element)"
},
    EVENT_ACTIVATE = "activate.bs.scrollspy",
    EVENT_SCROLL = "scroll.bs.scrollspy",
    EVENT_LOAD_DATA_API = "load.bs.scrollspy.data-api",
    CLASS_NAME_DROPDOWN_ITEM = "dropdown-item",
    CLASS_NAME_ACTIVE$1 = "active",
    SELECTOR_DATA_SPY = '[data-bs-spy="scroll"]',
    SELECTOR_NAV_LIST_GROUP$1 = ".nav, .list-group",
    SELECTOR_NAV_LINKS = ".nav-link",
    SELECTOR_NAV_ITEMS = ".nav-item",
    SELECTOR_LIST_ITEMS = ".list-group-item",
    SELECTOR_DROPDOWN$1 = ".dropdown",
    SELECTOR_DROPDOWN_TOGGLE$1 = ".dropdown-toggle",
    METHOD_OFFSET = "offset",
    METHOD_POSITION = "position";

var ScrollSpy =
/*#__PURE__*/
function (_BaseComponent9) {
  _inherits(ScrollSpy, _BaseComponent9);

  function ScrollSpy(e, t) {
    var _this41;

    _classCallCheck(this, ScrollSpy);

    _this41 = _possibleConstructorReturn(this, _getPrototypeOf(ScrollSpy).call(this, e)), _this41._scrollElement = "BODY" === _this41._element.tagName ? window : _this41._element, _this41._config = _this41._getConfig(t), _this41._selector = "".concat(_this41._config.target, " .nav-link, ").concat(_this41._config.target, " .list-group-item, ").concat(_this41._config.target, " .dropdown-item"), _this41._offsets = [], _this41._targets = [], _this41._activeTarget = null, _this41._scrollHeight = 0, EventHandler.on(_this41._scrollElement, EVENT_SCROLL, function () {
      return _this41._process();
    }), _this41.refresh(), _this41._process();
    return _this41;
  }

  _createClass(ScrollSpy, [{
    key: "refresh",
    value: function refresh() {
      var _this42 = this;

      var e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
          t = "auto" === this._config.method ? e : this._config.method,
          n = "position" === t ? this._getScrollTop() : 0;
      this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), SelectorEngine.find(this._selector).map(function (e) {
        var i = getSelectorFromElement(e),
            s = i ? SelectorEngine.findOne(i) : null;

        if (s) {
          var _e8 = s.getBoundingClientRect();

          if (_e8.width || _e8.height) return [Manipulator[t](s).top + n, i];
        }

        return null;
      }).filter(function (e) {
        return e;
      }).sort(function (e, t) {
        return e[0] - t[0];
      }).forEach(function (e) {
        _this42._offsets.push(e[0]), _this42._targets.push(e[1]);
      });
    }
  }, {
    key: "dispose",
    value: function dispose() {
      EventHandler.off(this._scrollElement, EVENT_KEY$2), _get(_getPrototypeOf(ScrollSpy.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      if ("string" != typeof (e = _objectSpread({}, Default$1, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) && e ? e : {})).target && isElement(e.target)) {
        var t = e.target.id;
        t || (t = getUID(NAME$2), e.target.id = t), e.target = "#" + t;
      }

      return typeCheckConfig(NAME$2, e, DefaultType$1), e;
    }
  }, {
    key: "_getScrollTop",
    value: function _getScrollTop() {
      return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop;
    }
  }, {
    key: "_getScrollHeight",
    value: function _getScrollHeight() {
      return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
    }
  }, {
    key: "_getOffsetHeight",
    value: function _getOffsetHeight() {
      return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height;
    }
  }, {
    key: "_process",
    value: function _process() {
      var e = this._getScrollTop() + this._config.offset,
          t = this._getScrollHeight(),
          n = this._config.offset + t - this._getOffsetHeight();

      if (this._scrollHeight !== t && this.refresh(), e >= n) {
        var _e9 = this._targets[this._targets.length - 1];
        this._activeTarget !== _e9 && this._activate(_e9);
      } else {
        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

        for (var _t9 = this._offsets.length; _t9--;) {
          this._activeTarget !== this._targets[_t9] && e >= this._offsets[_t9] && (void 0 === this._offsets[_t9 + 1] || e < this._offsets[_t9 + 1]) && this._activate(this._targets[_t9]);
        }
      }
    }
  }, {
    key: "_activate",
    value: function _activate(e) {
      this._activeTarget = e, this._clear();

      var t = this._selector.split(",").map(function (t) {
        return "".concat(t, "[data-bs-target=\"").concat(e, "\"],").concat(t, "[href=\"").concat(e, "\"]");
      }),
          n = SelectorEngine.findOne(t.join(","));

      n.classList.contains("dropdown-item") ? (SelectorEngine.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), SelectorEngine.parents(n, ".nav, .list-group").forEach(function (e) {
        SelectorEngine.prev(e, ".nav-link, .list-group-item").forEach(function (e) {
          return e.classList.add("active");
        }), SelectorEngine.prev(e, ".nav-item").forEach(function (e) {
          SelectorEngine.children(e, ".nav-link").forEach(function (e) {
            return e.classList.add("active");
          });
        });
      })), EventHandler.trigger(this._scrollElement, EVENT_ACTIVATE, {
        relatedTarget: e
      });
    }
  }, {
    key: "_clear",
    value: function _clear() {
      SelectorEngine.find(this._selector).filter(function (e) {
        return e.classList.contains("active");
      }).forEach(function (e) {
        return e.classList.remove("active");
      });
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = ScrollSpy.getInstance(this) || new ScrollSpy(this, "object" == _typeof(e) ? e : {});

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "Default",
    get: function get() {
      return Default$1;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME$2;
    }
  }]);

  return ScrollSpy;
}(BaseComponent);

exports.ScrollSpy = ScrollSpy;
EventHandler.on(window, EVENT_LOAD_DATA_API, function () {
  SelectorEngine.find(SELECTOR_DATA_SPY).forEach(function (e) {
    return new ScrollSpy(e);
  });
}), defineJQueryPlugin(ScrollSpy);
var NAME$1 = "tab",
    DATA_KEY$1 = "bs.tab",
    EVENT_KEY$1 = ".bs.tab",
    DATA_API_KEY = ".data-api",
    EVENT_HIDE$1 = "hide.bs.tab",
    EVENT_HIDDEN$1 = "hidden.bs.tab",
    EVENT_SHOW$1 = "show.bs.tab",
    EVENT_SHOWN$1 = "shown.bs.tab",
    EVENT_CLICK_DATA_API = "click.bs.tab.data-api",
    CLASS_NAME_DROPDOWN_MENU = "dropdown-menu",
    CLASS_NAME_ACTIVE = "active",
    CLASS_NAME_FADE$1 = "fade",
    CLASS_NAME_SHOW$1 = "show",
    SELECTOR_DROPDOWN = ".dropdown",
    SELECTOR_NAV_LIST_GROUP = ".nav, .list-group",
    SELECTOR_ACTIVE = ".active",
    SELECTOR_ACTIVE_UL = ":scope > li > .active",
    SELECTOR_DATA_TOGGLE = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    SELECTOR_DROPDOWN_TOGGLE = ".dropdown-toggle",
    SELECTOR_DROPDOWN_ACTIVE_CHILD = ":scope > .dropdown-menu .active";

var Tab =
/*#__PURE__*/
function (_BaseComponent10) {
  _inherits(Tab, _BaseComponent10);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "show",
    value: function show() {
      var _this43 = this;

      if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
      var e;

      var t = getElementFromSelector(this._element),
          n = this._element.closest(".nav, .list-group");

      if (n) {
        var _t10 = "UL" === n.nodeName || "OL" === n.nodeName ? SELECTOR_ACTIVE_UL : ".active";

        e = SelectorEngine.find(_t10, n), e = e[e.length - 1];
      }

      var i = e ? EventHandler.trigger(e, EVENT_HIDE$1, {
        relatedTarget: this._element
      }) : null;
      if (EventHandler.trigger(this._element, EVENT_SHOW$1, {
        relatedTarget: e
      }).defaultPrevented || null !== i && i.defaultPrevented) return;

      this._activate(this._element, n);

      var s = function s() {
        EventHandler.trigger(e, EVENT_HIDDEN$1, {
          relatedTarget: _this43._element
        }), EventHandler.trigger(_this43._element, EVENT_SHOWN$1, {
          relatedTarget: e
        });
      };

      t ? this._activate(t, t.parentNode, s) : s();
    }
  }, {
    key: "_activate",
    value: function _activate(e, t, n) {
      var _this44 = this;

      var i = (!t || "UL" !== t.nodeName && "OL" !== t.nodeName ? SelectorEngine.children(t, ".active") : SelectorEngine.find(SELECTOR_ACTIVE_UL, t))[0],
          s = n && i && i.classList.contains("fade"),
          o = function o() {
        return _this44._transitionComplete(e, i, n);
      };

      i && s ? (i.classList.remove("show"), this._queueCallback(o, e, !0)) : o();
    }
  }, {
    key: "_transitionComplete",
    value: function _transitionComplete(e, t, n) {
      if (t) {
        t.classList.remove("active");

        var _e10 = SelectorEngine.findOne(SELECTOR_DROPDOWN_ACTIVE_CHILD, t.parentNode);

        _e10 && _e10.classList.remove("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1);
      }

      e.classList.add("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !0), reflow(e), e.classList.contains("fade") && e.classList.add("show");
      var i = e.parentNode;

      if (i && "LI" === i.nodeName && (i = i.parentNode), i && i.classList.contains("dropdown-menu")) {
        var _t11 = e.closest(".dropdown");

        _t11 && SelectorEngine.find(".dropdown-toggle", _t11).forEach(function (e) {
          return e.classList.add("active");
        }), e.setAttribute("aria-expanded", !0);
      }

      n && n();
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, "bs.tab") || new Tab(this);

        if ("string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e]();
        }
      });
    }
  }, {
    key: "NAME",
    get: function get() {
      return "tab";
    }
  }]);

  return Tab;
}(BaseComponent);

exports.Tab = Tab;
EventHandler.on(document, EVENT_CLICK_DATA_API, SELECTOR_DATA_TOGGLE, function (e) {
  ["A", "AREA"].includes(this.tagName) && e.preventDefault(), isDisabled(this) || (Data.get(this, "bs.tab") || new Tab(this)).show();
}), defineJQueryPlugin(Tab);
var NAME = "toast",
    DATA_KEY = "bs.toast",
    EVENT_KEY = ".bs.toast",
    EVENT_CLICK_DISMISS = "click.dismiss.bs.toast",
    EVENT_MOUSEOVER = "mouseover.bs.toast",
    EVENT_MOUSEOUT = "mouseout.bs.toast",
    EVENT_FOCUSIN = "focusin.bs.toast",
    EVENT_FOCUSOUT = "focusout.bs.toast",
    EVENT_HIDE = "hide.bs.toast",
    EVENT_HIDDEN = "hidden.bs.toast",
    EVENT_SHOW = "show.bs.toast",
    EVENT_SHOWN = "shown.bs.toast",
    CLASS_NAME_FADE = "fade",
    CLASS_NAME_HIDE = "hide",
    CLASS_NAME_SHOW = "show",
    CLASS_NAME_SHOWING = "showing",
    DefaultType = {
  animation: "boolean",
  autohide: "boolean",
  delay: "number"
},
    Default = {
  animation: !0,
  autohide: !0,
  delay: 5e3
},
    SELECTOR_DATA_DISMISS = '[data-bs-dismiss="toast"]';

var Toast =
/*#__PURE__*/
function (_BaseComponent11) {
  _inherits(Toast, _BaseComponent11);

  function Toast(e, t) {
    var _this45;

    _classCallCheck(this, Toast);

    _this45 = _possibleConstructorReturn(this, _getPrototypeOf(Toast).call(this, e)), _this45._config = _this45._getConfig(t), _this45._timeout = null, _this45._hasMouseInteraction = !1, _this45._hasKeyboardInteraction = !1, _this45._setListeners();
    return _this45;
  }

  _createClass(Toast, [{
    key: "show",
    value: function show() {
      var _this46 = this;

      EventHandler.trigger(this._element, EVENT_SHOW).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), reflow(this._element), this._element.classList.add("showing"), this._queueCallback(function () {
        _this46._element.classList.remove("showing"), _this46._element.classList.add("show"), EventHandler.trigger(_this46._element, EVENT_SHOWN), _this46._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this47 = this;

      this._element.classList.contains("show") && (EventHandler.trigger(this._element, EVENT_HIDE).defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(function () {
        _this47._element.classList.add("hide"), EventHandler.trigger(_this47._element, EVENT_HIDDEN);
      }, this._element, this._config.animation)));
    }
  }, {
    key: "dispose",
    value: function dispose() {
      this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(Toast.prototype), "dispose", this).call(this);
    }
  }, {
    key: "_getConfig",
    value: function _getConfig(e) {
      return e = _objectSpread({}, Default, {}, Manipulator.getDataAttributes(this._element), {}, "object" == _typeof(e) && e ? e : {}), typeCheckConfig(NAME, e, this.constructor.DefaultType), e;
    }
  }, {
    key: "_maybeScheduleHide",
    value: function _maybeScheduleHide() {
      var _this48 = this;

      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(function () {
        _this48.hide();
      }, this._config.delay)));
    }
  }, {
    key: "_onInteraction",
    value: function _onInteraction(e, t) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = t;
          break;

        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = t;
      }

      if (t) return void this._clearTimeout();
      var n = e.relatedTarget;
      this._element === n || this._element.contains(n) || this._maybeScheduleHide();
    }
  }, {
    key: "_setListeners",
    value: function _setListeners() {
      var _this49 = this;

      EventHandler.on(this._element, EVENT_CLICK_DISMISS, SELECTOR_DATA_DISMISS, function () {
        return _this49.hide();
      }), EventHandler.on(this._element, EVENT_MOUSEOVER, function (e) {
        return _this49._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_MOUSEOUT, function (e) {
        return _this49._onInteraction(e, !1);
      }), EventHandler.on(this._element, EVENT_FOCUSIN, function (e) {
        return _this49._onInteraction(e, !0);
      }), EventHandler.on(this._element, EVENT_FOCUSOUT, function (e) {
        return _this49._onInteraction(e, !1);
      });
    }
  }, {
    key: "_clearTimeout",
    value: function _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
  }], [{
    key: "jQueryInterface",
    value: function jQueryInterface(e) {
      return this.each(function () {
        var t = Data.get(this, DATA_KEY);

        if (t || (t = new Toast(this, "object" == _typeof(e) && e)), "string" == typeof e) {
          if (void 0 === t[e]) throw new TypeError("No method named \"".concat(e, "\""));
          t[e](this);
        }
      });
    }
  }, {
    key: "DefaultType",
    get: function get() {
      return DefaultType;
    }
  }, {
    key: "Default",
    get: function get() {
      return Default;
    }
  }, {
    key: "NAME",
    get: function get() {
      return NAME;
    }
  }]);

  return Toast;
}(BaseComponent);

exports.Toast = Toast;
defineJQueryPlugin(Toast);