"use strict";

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

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
  * Bootstrap v5.0.1 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e(require("@popperjs/core")) : "function" == typeof define && define.amd ? define(["@popperjs/core"], e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e(t.Popper);
}(void 0, function (t) {
  "use strict";

  function e(t) {
    if (t && t.__esModule) return t;
    var e = Object.create(null);
    return t && Object.keys(t).forEach(function (s) {
      if ("default" !== s) {
        var i = Object.getOwnPropertyDescriptor(t, s);
        Object.defineProperty(e, s, i.get ? i : {
          enumerable: !0,
          get: function get() {
            return t[s];
          }
        });
      }
    }), e["default"] = t, Object.freeze(e);
  }

  var s = e(t);

  var i = {
    find: function find(t) {
      var _ref;

      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return (_ref = []).concat.apply(_ref, _toConsumableArray(Element.prototype.querySelectorAll.call(e, t)));
    },
    findOne: function findOne(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document.documentElement;
      return Element.prototype.querySelector.call(e, t);
    },
    children: function children(t, e) {
      var _ref2;

      return (_ref2 = []).concat.apply(_ref2, _toConsumableArray(t.children)).filter(function (t) {
        return t.matches(e);
      });
    },
    parents: function parents(t, e) {
      var s = [];
      var i = t.parentNode;

      for (; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) {
        i.matches(e) && s.push(i), i = i.parentNode;
      }

      return s;
    },
    prev: function prev(t, e) {
      var s = t.previousElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.previousElementSibling;
      }

      return [];
    },
    next: function next(t, e) {
      var s = t.nextElementSibling;

      for (; s;) {
        if (s.matches(e)) return [s];
        s = s.nextElementSibling;
      }

      return [];
    }
  },
      n = function n(t) {
    do {
      t += Math.floor(1e6 * Math.random());
    } while (document.getElementById(t));

    return t;
  },
      o = function o(t) {
    var e = t.getAttribute("data-bs-target");

    if (!e || "#" === e) {
      var _s = t.getAttribute("href");

      if (!_s || !_s.includes("#") && !_s.startsWith(".")) return null;
      _s.includes("#") && !_s.startsWith("#") && (_s = "#" + _s.split("#")[1]), e = _s && "#" !== _s ? _s.trim() : null;
    }

    return e;
  },
      r = function r(t) {
    var e = o(t);
    return e && document.querySelector(e) ? e : null;
  },
      a = function a(t) {
    var e = o(t);
    return e ? document.querySelector(e) : null;
  },
      l = function l(t) {
    if (!t) return 0;

    var _window$getComputedSt = window.getComputedStyle(t),
        e = _window$getComputedSt.transitionDuration,
        s = _window$getComputedSt.transitionDelay;

    var i = Number.parseFloat(e),
        n = Number.parseFloat(s);
    return i || n ? (e = e.split(",")[0], s = s.split(",")[0], 1e3 * (Number.parseFloat(e) + Number.parseFloat(s))) : 0;
  },
      c = function c(t) {
    t.dispatchEvent(new Event("transitionend"));
  },
      h = function h(t) {
    return !(!t || "object" != _typeof(t)) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType);
  },
      d = function d(t) {
    return h(t) ? t.jquery ? t[0] : t : "string" == typeof t && t.length > 0 ? i.findOne(t) : null;
  },
      u = function u(t, e) {
    var s = !1;
    var i = e + 5;
    t.addEventListener("transitionend", function e() {
      s = !0, t.removeEventListener("transitionend", e);
    }), setTimeout(function () {
      s || c(t);
    }, i);
  },
      g = function g(t, e, s) {
    Object.keys(s).forEach(function (i) {
      var n = s[i],
          o = e[i],
          r = o && h(o) ? "element" : null == (a = o) ? "" + a : {}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase();
      var a;
      if (!new RegExp(n).test(r)) throw new TypeError("".concat(t.toUpperCase(), ": Option \"").concat(i, "\" provided type \"").concat(r, "\" but expected type \"").concat(n, "\"."));
    });
  },
      f = function f(t) {
    if (!t) return !1;

    if (t.style && t.parentNode && t.parentNode.style) {
      var _e = getComputedStyle(t),
          _s2 = getComputedStyle(t.parentNode);

      return "none" !== _e.display && "none" !== _s2.display && "hidden" !== _e.visibility;
    }

    return !1;
  },
      p = function p(t) {
    return !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains("disabled") || (void 0 !== t.disabled ? t.disabled : t.hasAttribute("disabled") && "false" !== t.getAttribute("disabled"));
  },
      m = function m(t) {
    if (!document.documentElement.attachShadow) return null;

    if ("function" == typeof t.getRootNode) {
      var _e2 = t.getRootNode();

      return _e2 instanceof ShadowRoot ? _e2 : null;
    }

    return t instanceof ShadowRoot ? t : t.parentNode ? m(t.parentNode) : null;
  },
      _ = function _() {},
      b = function b(t) {
    return t.offsetHeight;
  },
      v = function v() {
    var _window = window,
        t = _window.jQuery;
    return t && !document.body.hasAttribute("data-bs-no-jquery") ? t : null;
  },
      y = function y() {
    return "rtl" === document.documentElement.dir;
  },
      w = function w(t) {
    var e;
    e = function e() {
      var e = v();

      if (e) {
        var _s3 = t.NAME,
            _i = e.fn[_s3];
        e.fn[_s3] = t.jQueryInterface, e.fn[_s3].Constructor = t, e.fn[_s3].noConflict = function () {
          return e.fn[_s3] = _i, t.jQueryInterface;
        };
      }
    }, "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", e) : e();
  },
      E = function E(t) {
    "function" == typeof t && t();
  },
      T = new Map();

  var A = {
    set: function set(t, e, s) {
      T.has(t) || T.set(t, new Map());
      var i = T.get(t);
      i.has(e) || 0 === i.size ? i.set(e, s) : console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: ".concat(Array.from(i.keys())[0], "."));
    },
    get: function get(t, e) {
      return T.has(t) && T.get(t).get(e) || null;
    },
    remove: function remove(t, e) {
      if (!T.has(t)) return;
      var s = T.get(t);
      s["delete"](e), 0 === s.size && T["delete"](t);
    }
  };
  var k = /[^.]*(?=\..*)\.|.*/,
      L = /\..*/,
      C = /::\d+$/,
      D = {};
  var N = 1;
  var S = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  },
      O = /^(mouseenter|mouseleave)/i,
      I = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

  function x(t, e) {
    return e && "".concat(e, "::").concat(N++) || t.uidEvent || N++;
  }

  function j(t) {
    var e = x(t);
    return t.uidEvent = e, D[e] = D[e] || {}, D[e];
  }

  function P(t, e) {
    var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var i = Object.keys(t);

    for (var _n = 0, _o = i.length; _n < _o; _n++) {
      var _o2 = t[i[_n]];
      if (_o2.originalHandler === e && _o2.delegationSelector === s) return _o2;
    }

    return null;
  }

  function M(t, e, s) {
    var i = "string" == typeof e,
        n = i ? s : e;
    var o = B(t);
    return I.has(o) || (o = t), [i, n, o];
  }

  function H(t, e, s, i, n) {
    if ("string" != typeof e || !t) return;

    if (s || (s = i, i = null), O.test(e)) {
      var _t2 = function _t2(t) {
        return function (e) {
          if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return t.call(this, e);
        };
      };

      i ? i = _t2(i) : s = _t2(s);
    }

    var _M = M(e, s, i),
        _M2 = _slicedToArray(_M, 3),
        o = _M2[0],
        r = _M2[1],
        a = _M2[2],
        l = j(t),
        c = l[a] || (l[a] = {}),
        h = P(c, r, o ? s : null);

    if (h) return void (h.oneOff = h.oneOff && n);
    var d = x(r, e.replace(k, "")),
        u = o ? function (t, e, s) {
      return function i(n) {
        var o = t.querySelectorAll(e);

        for (var _r = n.target; _r && _r !== this; _r = _r.parentNode) {
          for (var _a = o.length; _a--;) {
            if (o[_a] === _r) return n.delegateTarget = _r, i.oneOff && $.off(t, n.type, e, s), s.apply(_r, [n]);
          }
        }

        return null;
      };
    }(t, s, i) : function (t, e) {
      return function s(i) {
        return i.delegateTarget = t, s.oneOff && $.off(t, i.type, e), e.apply(t, [i]);
      };
    }(t, s);
    u.delegationSelector = o ? s : null, u.originalHandler = r, u.oneOff = n, u.uidEvent = d, c[d] = u, t.addEventListener(a, u, o);
  }

  function R(t, e, s, i, n) {
    var o = P(e[s], i, n);
    o && (t.removeEventListener(s, o, Boolean(n)), delete e[s][o.uidEvent]);
  }

  function B(t) {
    return t = t.replace(L, ""), S[t] || t;
  }

  var $ = {
    on: function on(t, e, s, i) {
      H(t, e, s, i, !1);
    },
    one: function one(t, e, s, i) {
      H(t, e, s, i, !0);
    },
    off: function off(t, e, s, i) {
      if ("string" != typeof e || !t) return;

      var _M3 = M(e, s, i),
          _M4 = _slicedToArray(_M3, 3),
          n = _M4[0],
          o = _M4[1],
          r = _M4[2],
          a = r !== e,
          l = j(t),
          c = e.startsWith(".");

      if (void 0 !== o) {
        if (!l || !l[r]) return;
        return void R(t, l, r, o, n ? s : null);
      }

      c && Object.keys(l).forEach(function (s) {
        !function (t, e, s, i) {
          var n = e[s] || {};
          Object.keys(n).forEach(function (o) {
            if (o.includes(i)) {
              var _i2 = n[o];
              R(t, e, s, _i2.originalHandler, _i2.delegationSelector);
            }
          });
        }(t, l, s, e.slice(1));
      });
      var h = l[r] || {};
      Object.keys(h).forEach(function (s) {
        var i = s.replace(C, "");

        if (!a || e.includes(i)) {
          var _e3 = h[s];
          R(t, l, r, _e3.originalHandler, _e3.delegationSelector);
        }
      });
    },
    trigger: function trigger(t, e, s) {
      if ("string" != typeof e || !t) return null;
      var i = v(),
          n = B(e),
          o = e !== n,
          r = I.has(n);
      var a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
      return o && i && (a = i.Event(e, s), i(t).trigger(a), l = !a.isPropagationStopped(), c = !a.isImmediatePropagationStopped(), h = a.isDefaultPrevented()), r ? (d = document.createEvent("HTMLEvents"), d.initEvent(n, l, !0)) : d = new CustomEvent(e, {
        bubbles: l,
        cancelable: !0
      }), void 0 !== s && Object.keys(s).forEach(function (t) {
        Object.defineProperty(d, t, {
          get: function get() {
            return s[t];
          }
        });
      }), h && d.preventDefault(), c && t.dispatchEvent(d), d.defaultPrevented && void 0 !== a && a.preventDefault(), d;
    }
  };

  var z =
  /*#__PURE__*/
  function () {
    function z(t) {
      _classCallCheck(this, z);

      (t = d(t)) && (this._element = t, A.set(this._element, this.constructor.DATA_KEY, this));
    }

    _createClass(z, [{
      key: "dispose",
      value: function dispose() {
        var _this = this;

        A.remove(this._element, this.constructor.DATA_KEY), $.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this).forEach(function (t) {
          _this[t] = null;
        });
      }
    }, {
      key: "_queueCallback",
      value: function _queueCallback(t, e) {
        var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (!s) return void E(t);
        var i = l(e);
        $.one(e, "transitionend", function () {
          return E(t);
        }), u(e, i);
      }
    }], [{
      key: "getInstance",
      value: function getInstance(t) {
        return A.get(t, this.DATA_KEY);
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

    return z;
  }();

  var U =
  /*#__PURE__*/
  function (_z) {
    _inherits(U, _z);

    function U() {
      _classCallCheck(this, U);

      return _possibleConstructorReturn(this, _getPrototypeOf(U).apply(this, arguments));
    }

    _createClass(U, [{
      key: "close",
      value: function close(t) {
        var e = t ? this._getRootElement(t) : this._element,
            s = this._triggerCloseEvent(e);

        null === s || s.defaultPrevented || this._removeElement(e);
      }
    }, {
      key: "_getRootElement",
      value: function _getRootElement(t) {
        return a(t) || t.closest(".alert");
      }
    }, {
      key: "_triggerCloseEvent",
      value: function _triggerCloseEvent(t) {
        return $.trigger(t, "close.bs.alert");
      }
    }, {
      key: "_removeElement",
      value: function _removeElement(t) {
        var _this2 = this;

        t.classList.remove("show");
        var e = t.classList.contains("fade");

        this._queueCallback(function () {
          return _this2._destroyElement(t);
        }, t, e);
      }
    }, {
      key: "_destroyElement",
      value: function _destroyElement(t) {
        t.parentNode && t.parentNode.removeChild(t), $.trigger(t, "closed.bs.alert");
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.alert");
          e || (e = new U(this)), "close" === t && e[t](this);
        });
      }
    }, {
      key: "handleDismiss",
      value: function handleDismiss(t) {
        return function (e) {
          e && e.preventDefault(), t.close(this);
        };
      }
    }, {
      key: "NAME",
      get: function get() {
        return "alert";
      }
    }]);

    return U;
  }(z);

  $.on(document, "click.bs.alert.data-api", '[data-bs-dismiss="alert"]', U.handleDismiss(new U())), w(U);

  var q =
  /*#__PURE__*/
  function (_z2) {
    _inherits(q, _z2);

    function q() {
      _classCallCheck(this, q);

      return _possibleConstructorReturn(this, _getPrototypeOf(q).apply(this, arguments));
    }

    _createClass(q, [{
      key: "toggle",
      value: function toggle() {
        this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.button");
          e || (e = new q(this)), "toggle" === t && e[t]();
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "button";
      }
    }]);

    return q;
  }(z);

  function F(t) {
    return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t);
  }

  function W(t) {
    return t.replace(/[A-Z]/g, function (t) {
      return "-" + t.toLowerCase();
    });
  }

  $.on(document, "click.bs.button.data-api", '[data-bs-toggle="button"]', function (t) {
    t.preventDefault();
    var e = t.target.closest('[data-bs-toggle="button"]');
    var s = A.get(e, "bs.button");
    s || (s = new q(e)), s.toggle();
  }), w(q);
  var K = {
    setDataAttribute: function setDataAttribute(t, e, s) {
      t.setAttribute("data-bs-" + W(e), s);
    },
    removeDataAttribute: function removeDataAttribute(t, e) {
      t.removeAttribute("data-bs-" + W(e));
    },
    getDataAttributes: function getDataAttributes(t) {
      if (!t) return {};
      var e = {};
      return Object.keys(t.dataset).filter(function (t) {
        return t.startsWith("bs");
      }).forEach(function (s) {
        var i = s.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length), e[i] = F(t.dataset[s]);
      }), e;
    },
    getDataAttribute: function getDataAttribute(t, e) {
      return F(t.getAttribute("data-bs-" + W(e)));
    },
    offset: function offset(t) {
      var e = t.getBoundingClientRect();
      return {
        top: e.top + document.body.scrollTop,
        left: e.left + document.body.scrollLeft
      };
    },
    position: function position(t) {
      return {
        top: t.offsetTop,
        left: t.offsetLeft
      };
    }
  },
      V = {
    interval: 5e3,
    keyboard: !0,
    slide: !1,
    pause: "hover",
    wrap: !0,
    touch: !0
  },
      Q = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    slide: "(boolean|string)",
    pause: "(string|boolean)",
    wrap: "boolean",
    touch: "boolean"
  },
      X = "next",
      Y = "prev",
      G = "left",
      Z = "right";

  var J =
  /*#__PURE__*/
  function (_z3) {
    _inherits(J, _z3);

    function J(t, e) {
      var _this3;

      _classCallCheck(this, J);

      _this3 = _possibleConstructorReturn(this, _getPrototypeOf(J).call(this, t)), _this3._items = null, _this3._interval = null, _this3._activeElement = null, _this3._isPaused = !1, _this3._isSliding = !1, _this3.touchTimeout = null, _this3.touchStartX = 0, _this3.touchDeltaX = 0, _this3._config = _this3._getConfig(e), _this3._indicatorsElement = i.findOne(".carousel-indicators", _this3._element), _this3._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, _this3._pointerEvent = Boolean(window.PointerEvent), _this3._addEventListeners();
      return _this3;
    }

    _createClass(J, [{
      key: "next",
      value: function next() {
        this._isSliding || this._slide(X);
      }
    }, {
      key: "nextWhenVisible",
      value: function nextWhenVisible() {
        !document.hidden && f(this._element) && this.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        this._isSliding || this._slide(Y);
      }
    }, {
      key: "pause",
      value: function pause(t) {
        t || (this._isPaused = !0), i.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (c(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null;
      }
    }, {
      key: "cycle",
      value: function cycle(t) {
        t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._updateInterval(), this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval));
      }
    }, {
      key: "to",
      value: function to(t) {
        var _this4 = this;

        this._activeElement = i.findOne(".active.carousel-item", this._element);

        var e = this._getItemIndex(this._activeElement);

        if (t > this._items.length - 1 || t < 0) return;
        if (this._isSliding) return void $.one(this._element, "slid.bs.carousel", function () {
          return _this4.to(t);
        });
        if (e === t) return this.pause(), void this.cycle();
        var s = t > e ? X : Y;

        this._slide(s, this._items[t]);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, V, {}, t), g("carousel", t, Q), t;
      }
    }, {
      key: "_handleSwipe",
      value: function _handleSwipe() {
        var t = Math.abs(this.touchDeltaX);
        if (t <= 40) return;
        var e = t / this.touchDeltaX;
        this.touchDeltaX = 0, e && this._slide(e > 0 ? Z : G);
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this5 = this;

        this._config.keyboard && $.on(this._element, "keydown.bs.carousel", function (t) {
          return _this5._keydown(t);
        }), "hover" === this._config.pause && ($.on(this._element, "mouseenter.bs.carousel", function (t) {
          return _this5.pause(t);
        }), $.on(this._element, "mouseleave.bs.carousel", function (t) {
          return _this5.cycle(t);
        })), this._config.touch && this._touchSupported && this._addTouchEventListeners();
      }
    }, {
      key: "_addTouchEventListeners",
      value: function _addTouchEventListeners() {
        var _this6 = this;

        var t = function t(_t3) {
          !_this6._pointerEvent || "pen" !== _t3.pointerType && "touch" !== _t3.pointerType ? _this6._pointerEvent || (_this6.touchStartX = _t3.touches[0].clientX) : _this6.touchStartX = _t3.clientX;
        },
            e = function e(t) {
          _this6.touchDeltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - _this6.touchStartX;
        },
            s = function s(t) {
          !_this6._pointerEvent || "pen" !== t.pointerType && "touch" !== t.pointerType || (_this6.touchDeltaX = t.clientX - _this6.touchStartX), _this6._handleSwipe(), "hover" === _this6._config.pause && (_this6.pause(), _this6.touchTimeout && clearTimeout(_this6.touchTimeout), _this6.touchTimeout = setTimeout(function (t) {
            return _this6.cycle(t);
          }, 500 + _this6._config.interval));
        };

        i.find(".carousel-item img", this._element).forEach(function (t) {
          $.on(t, "dragstart.bs.carousel", function (t) {
            return t.preventDefault();
          });
        }), this._pointerEvent ? ($.on(this._element, "pointerdown.bs.carousel", function (e) {
          return t(e);
        }), $.on(this._element, "pointerup.bs.carousel", function (t) {
          return s(t);
        }), this._element.classList.add("pointer-event")) : ($.on(this._element, "touchstart.bs.carousel", function (e) {
          return t(e);
        }), $.on(this._element, "touchmove.bs.carousel", function (t) {
          return e(t);
        }), $.on(this._element, "touchend.bs.carousel", function (t) {
          return s(t);
        }));
      }
    }, {
      key: "_keydown",
      value: function _keydown(t) {
        /input|textarea/i.test(t.target.tagName) || ("ArrowLeft" === t.key ? (t.preventDefault(), this._slide(Z)) : "ArrowRight" === t.key && (t.preventDefault(), this._slide(G)));
      }
    }, {
      key: "_getItemIndex",
      value: function _getItemIndex(t) {
        return this._items = t && t.parentNode ? i.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t);
      }
    }, {
      key: "_getItemByOrder",
      value: function _getItemByOrder(t, e) {
        var s = t === X,
            i = t === Y,
            n = this._getItemIndex(e),
            o = this._items.length - 1;

        if ((i && 0 === n || s && n === o) && !this._config.wrap) return e;
        var r = (n + (i ? -1 : 1)) % this._items.length;
        return -1 === r ? this._items[this._items.length - 1] : this._items[r];
      }
    }, {
      key: "_triggerSlideEvent",
      value: function _triggerSlideEvent(t, e) {
        var s = this._getItemIndex(t),
            n = this._getItemIndex(i.findOne(".active.carousel-item", this._element));

        return $.trigger(this._element, "slide.bs.carousel", {
          relatedTarget: t,
          direction: e,
          from: n,
          to: s
        });
      }
    }, {
      key: "_setActiveIndicatorElement",
      value: function _setActiveIndicatorElement(t) {
        if (this._indicatorsElement) {
          var _e4 = i.findOne(".active", this._indicatorsElement);

          _e4.classList.remove("active"), _e4.removeAttribute("aria-current");

          var _s4 = i.find("[data-bs-target]", this._indicatorsElement);

          for (var _e5 = 0; _e5 < _s4.length; _e5++) {
            if (Number.parseInt(_s4[_e5].getAttribute("data-bs-slide-to"), 10) === this._getItemIndex(t)) {
              _s4[_e5].classList.add("active"), _s4[_e5].setAttribute("aria-current", "true");
              break;
            }
          }
        }
      }
    }, {
      key: "_updateInterval",
      value: function _updateInterval() {
        var t = this._activeElement || i.findOne(".active.carousel-item", this._element);
        if (!t) return;
        var e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
        e ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = e) : this._config.interval = this._config.defaultInterval || this._config.interval;
      }
    }, {
      key: "_slide",
      value: function _slide(t, e) {
        var _this7 = this;

        var s = this._directionToOrder(t),
            n = i.findOne(".active.carousel-item", this._element),
            o = this._getItemIndex(n),
            r = e || this._getItemByOrder(s, n),
            a = this._getItemIndex(r),
            l = Boolean(this._interval),
            c = s === X,
            h = c ? "carousel-item-start" : "carousel-item-end",
            d = c ? "carousel-item-next" : "carousel-item-prev",
            u = this._orderToDirection(s);

        if (r && r.classList.contains("active")) return void (this._isSliding = !1);
        if (this._triggerSlideEvent(r, u).defaultPrevented) return;
        if (!n || !r) return;
        this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(r), this._activeElement = r;

        var g = function g() {
          $.trigger(_this7._element, "slid.bs.carousel", {
            relatedTarget: r,
            direction: u,
            from: o,
            to: a
          });
        };

        if (this._element.classList.contains("slide")) {
          r.classList.add(d), b(r), n.classList.add(h), r.classList.add(h);

          var _t4 = function _t4() {
            r.classList.remove(h, d), r.classList.add("active"), n.classList.remove("active", d, h), _this7._isSliding = !1, setTimeout(g, 0);
          };

          this._queueCallback(_t4, n, !0);
        } else n.classList.remove("active"), r.classList.add("active"), this._isSliding = !1, g();

        l && this.cycle();
      }
    }, {
      key: "_directionToOrder",
      value: function _directionToOrder(t) {
        return [Z, G].includes(t) ? y() ? t === G ? Y : X : t === G ? X : Y : t;
      }
    }, {
      key: "_orderToDirection",
      value: function _orderToDirection(t) {
        return [X, Y].includes(t) ? y() ? t === Y ? G : Z : t === Y ? Z : G : t;
      }
    }], [{
      key: "carouselInterface",
      value: function carouselInterface(t, e) {
        var s = A.get(t, "bs.carousel"),
            i = _objectSpread({}, V, {}, K.getDataAttributes(t));

        "object" == _typeof(e) && (i = _objectSpread({}, i, {}, e));
        var n = "string" == typeof e ? e : i.slide;
        if (s || (s = new J(t, i)), "number" == typeof e) s.to(e);else if ("string" == typeof n) {
          if (void 0 === s[n]) throw new TypeError("No method named \"".concat(n, "\""));
          s[n]();
        } else i.interval && i.ride && (s.pause(), s.cycle());
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          J.carouselInterface(this, t);
        });
      }
    }, {
      key: "dataApiClickHandler",
      value: function dataApiClickHandler(t) {
        var e = a(this);
        if (!e || !e.classList.contains("carousel")) return;

        var s = _objectSpread({}, K.getDataAttributes(e), {}, K.getDataAttributes(this)),
            i = this.getAttribute("data-bs-slide-to");

        i && (s.interval = !1), J.carouselInterface(e, s), i && A.get(e, "bs.carousel").to(i), t.preventDefault();
      }
    }, {
      key: "Default",
      get: function get() {
        return V;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "carousel";
      }
    }]);

    return J;
  }(z);

  $.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", J.dataApiClickHandler), $.on(window, "load.bs.carousel.data-api", function () {
    var t = i.find('[data-bs-ride="carousel"]');

    for (var _e6 = 0, _s5 = t.length; _e6 < _s5; _e6++) {
      J.carouselInterface(t[_e6], A.get(t[_e6], "bs.carousel"));
    }
  }), w(J);
  var tt = {
    toggle: !0,
    parent: ""
  },
      et = {
    toggle: "boolean",
    parent: "(string|element)"
  };

  var st =
  /*#__PURE__*/
  function (_z4) {
    _inherits(st, _z4);

    function st(t, e) {
      var _this8;

      _classCallCheck(this, st);

      _this8 = _possibleConstructorReturn(this, _getPrototypeOf(st).call(this, t)), _this8._isTransitioning = !1, _this8._config = _this8._getConfig(e), _this8._triggerArray = i.find("[data-bs-toggle=\"collapse\"][href=\"#".concat(_this8._element.id, "\"],[data-bs-toggle=\"collapse\"][data-bs-target=\"#").concat(_this8._element.id, "\"]"));
      var s = i.find('[data-bs-toggle="collapse"]');

      for (var _t5 = 0, _e7 = s.length; _t5 < _e7; _t5++) {
        var _e8 = s[_t5],
            _n2 = r(_e8),
            _o3 = i.find(_n2).filter(function (t) {
          return t === _this8._element;
        });

        null !== _n2 && _o3.length && (_this8._selector = _n2, _this8._triggerArray.push(_e8));
      }

      _this8._parent = _this8._config.parent ? _this8._getParent() : null, _this8._config.parent || _this8._addAriaAndCollapsedClass(_this8._element, _this8._triggerArray), _this8._config.toggle && _this8.toggle();
      return _this8;
    }

    _createClass(st, [{
      key: "toggle",
      value: function toggle() {
        this._element.classList.contains("show") ? this.hide() : this.show();
      }
    }, {
      key: "show",
      value: function show() {
        var _this9 = this;

        if (this._isTransitioning || this._element.classList.contains("show")) return;
        var t, e;
        this._parent && (t = i.find(".show, .collapsing", this._parent).filter(function (t) {
          return "string" == typeof _this9._config.parent ? t.getAttribute("data-bs-parent") === _this9._config.parent : t.classList.contains("collapse");
        }), 0 === t.length && (t = null));
        var s = i.findOne(this._selector);

        if (t) {
          var _i3 = t.find(function (t) {
            return s !== t;
          });

          if (e = _i3 ? A.get(_i3, "bs.collapse") : null, e && e._isTransitioning) return;
        }

        if ($.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
        t && t.forEach(function (t) {
          s !== t && st.collapseInterface(t, "hide"), e || A.set(t, "bs.collapse", null);
        });

        var n = this._getDimension();

        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[n] = 0, this._triggerArray.length && this._triggerArray.forEach(function (t) {
          t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0);
        }), this.setTransitioning(!0);
        var o = "scroll" + (n[0].toUpperCase() + n.slice(1));
        this._queueCallback(function () {
          _this9._element.classList.remove("collapsing"), _this9._element.classList.add("collapse", "show"), _this9._element.style[n] = "", _this9.setTransitioning(!1), $.trigger(_this9._element, "shown.bs.collapse");
        }, this._element, !0), this._element.style[n] = this._element[o] + "px";
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this10 = this;

        if (this._isTransitioning || !this._element.classList.contains("show")) return;
        if ($.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;

        var t = this._getDimension();

        this._element.style[t] = this._element.getBoundingClientRect()[t] + "px", b(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
        var e = this._triggerArray.length;
        if (e > 0) for (var _t6 = 0; _t6 < e; _t6++) {
          var _e9 = this._triggerArray[_t6],
              _s6 = a(_e9);

          _s6 && !_s6.classList.contains("show") && (_e9.classList.add("collapsed"), _e9.setAttribute("aria-expanded", !1));
        }
        this.setTransitioning(!0), this._element.style[t] = "", this._queueCallback(function () {
          _this10.setTransitioning(!1), _this10._element.classList.remove("collapsing"), _this10._element.classList.add("collapse"), $.trigger(_this10._element, "hidden.bs.collapse");
        }, this._element, !0);
      }
    }, {
      key: "setTransitioning",
      value: function setTransitioning(t) {
        this._isTransitioning = t;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread({}, tt, {}, t)).toggle = Boolean(t.toggle), g("collapse", t, et), t;
      }
    }, {
      key: "_getDimension",
      value: function _getDimension() {
        return this._element.classList.contains("width") ? "width" : "height";
      }
    }, {
      key: "_getParent",
      value: function _getParent() {
        var _this11 = this;

        var t = this._config.parent;
        t = d(t);
        var e = "[data-bs-toggle=\"collapse\"][data-bs-parent=\"".concat(t, "\"]");
        return i.find(e, t).forEach(function (t) {
          var e = a(t);

          _this11._addAriaAndCollapsedClass(e, [t]);
        }), t;
      }
    }, {
      key: "_addAriaAndCollapsedClass",
      value: function _addAriaAndCollapsedClass(t, e) {
        if (!t || !e.length) return;
        var s = t.classList.contains("show");
        e.forEach(function (t) {
          s ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", s);
        });
      }
    }], [{
      key: "collapseInterface",
      value: function collapseInterface(t, e) {
        var s = A.get(t, "bs.collapse");

        var i = _objectSpread({}, tt, {}, K.getDataAttributes(t), {}, "object" == _typeof(e) && e ? e : {});

        if (!s && i.toggle && "string" == typeof e && /show|hide/.test(e) && (i.toggle = !1), s || (s = new st(t, i)), "string" == typeof e) {
          if (void 0 === s[e]) throw new TypeError("No method named \"".concat(e, "\""));
          s[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          st.collapseInterface(this, t);
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return tt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "collapse";
      }
    }]);

    return st;
  }(z);

  $.on(document, "click.bs.collapse.data-api", '[data-bs-toggle="collapse"]', function (t) {
    ("A" === t.target.tagName || t.delegateTarget && "A" === t.delegateTarget.tagName) && t.preventDefault();
    var e = K.getDataAttributes(this),
        s = r(this);
    i.find(s).forEach(function (t) {
      var s = A.get(t, "bs.collapse");
      var i;
      s ? (null === s._parent && "string" == typeof e.parent && (s._config.parent = e.parent, s._parent = s._getParent()), i = "toggle") : i = e, st.collapseInterface(t, i);
    });
  }), w(st);
  var it = new RegExp("ArrowUp|ArrowDown|Escape"),
      nt = y() ? "top-end" : "top-start",
      ot = y() ? "top-start" : "top-end",
      rt = y() ? "bottom-end" : "bottom-start",
      at = y() ? "bottom-start" : "bottom-end",
      lt = y() ? "left-start" : "right-start",
      ct = y() ? "right-start" : "left-start",
      ht = {
    offset: [0, 2],
    boundary: "clippingParents",
    reference: "toggle",
    display: "dynamic",
    popperConfig: null,
    autoClose: !0
  },
      dt = {
    offset: "(array|string|function)",
    boundary: "(string|element)",
    reference: "(string|element|object)",
    display: "string",
    popperConfig: "(null|object|function)",
    autoClose: "(boolean|string)"
  };

  var ut =
  /*#__PURE__*/
  function (_z5) {
    _inherits(ut, _z5);

    function ut(t, e) {
      var _this12;

      _classCallCheck(this, ut);

      _this12 = _possibleConstructorReturn(this, _getPrototypeOf(ut).call(this, t)), _this12._popper = null, _this12._config = _this12._getConfig(e), _this12._menu = _this12._getMenuElement(), _this12._inNavbar = _this12._detectNavbar(), _this12._addEventListeners();
      return _this12;
    }

    _createClass(ut, [{
      key: "toggle",
      value: function toggle() {
        p(this._element) || (this._element.classList.contains("show") ? this.hide() : this.show());
      }
    }, {
      key: "show",
      value: function show() {
        if (p(this._element) || this._menu.classList.contains("show")) return;
        var t = ut.getParentFromElement(this._element),
            e = {
          relatedTarget: this._element
        };

        if (!$.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
          var _ref3;

          if (this._inNavbar) K.setDataAttribute(this._menu, "popper", "none");else {
            if (void 0 === s) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            var _e10 = this._element;
            "parent" === this._config.reference ? _e10 = t : h(this._config.reference) ? _e10 = d(this._config.reference) : "object" == _typeof(this._config.reference) && (_e10 = this._config.reference);

            var _i4 = this._getPopperConfig(),
                _n3 = _i4.modifiers.find(function (t) {
              return "applyStyles" === t.name && !1 === t.enabled;
            });

            this._popper = s.createPopper(_e10, this._menu, _i4), _n3 && K.setDataAttribute(this._menu, "popper", "static");
          }
          "ontouchstart" in document.documentElement && !t.closest(".navbar-nav") && (_ref3 = []).concat.apply(_ref3, _toConsumableArray(document.body.children)).forEach(function (t) {
            return $.on(t, "mouseover", _);
          }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.toggle("show"), this._element.classList.toggle("show"), $.trigger(this._element, "shown.bs.dropdown", e);
        }
      }
    }, {
      key: "hide",
      value: function hide() {
        if (p(this._element) || !this._menu.classList.contains("show")) return;
        var t = {
          relatedTarget: this._element
        };

        this._completeHide(t);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._popper && this._popper.destroy(), _get(_getPrototypeOf(ut.prototype), "dispose", this).call(this);
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

        $.on(this._element, "click.bs.dropdown", function (t) {
          t.preventDefault(), _this13.toggle();
        });
      }
    }, {
      key: "_completeHide",
      value: function _completeHide(t) {
        var _ref4;

        $.trigger(this._element, "hide.bs.dropdown", t).defaultPrevented || ("ontouchstart" in document.documentElement && (_ref4 = []).concat.apply(_ref4, _toConsumableArray(document.body.children)).forEach(function (t) {
          return $.off(t, "mouseover", _);
        }), this._popper && this._popper.destroy(), this._menu.classList.remove("show"), this._element.classList.remove("show"), this._element.setAttribute("aria-expanded", "false"), K.removeDataAttribute(this._menu, "popper"), $.trigger(this._element, "hidden.bs.dropdown", t));
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if (t = _objectSpread({}, this.constructor.Default, {}, K.getDataAttributes(this._element), {}, t), g("dropdown", t, this.constructor.DefaultType), "object" == _typeof(t.reference) && !h(t.reference) && "function" != typeof t.reference.getBoundingClientRect) throw new TypeError("dropdown".toUpperCase() + ': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');
        return t;
      }
    }, {
      key: "_getMenuElement",
      value: function _getMenuElement() {
        return i.next(this._element, ".dropdown-menu")[0];
      }
    }, {
      key: "_getPlacement",
      value: function _getPlacement() {
        var t = this._element.parentNode;
        if (t.classList.contains("dropend")) return lt;
        if (t.classList.contains("dropstart")) return ct;
        var e = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
        return t.classList.contains("dropup") ? e ? ot : nt : e ? at : rt;
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

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this14._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig() {
        var t = {
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
        return "static" === this._config.display && (t.modifiers = [{
          name: "applyStyles",
          enabled: !1
        }]), _objectSpread({}, t, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig);
      }
    }, {
      key: "_selectMenuItem",
      value: function _selectMenuItem(t) {
        var e = i.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(f);
        if (!e.length) return;
        var s = e.indexOf(t.target);
        "ArrowUp" === t.key && s > 0 && s--, "ArrowDown" === t.key && s < e.length - 1 && s++, s = -1 === s ? 0 : s, e[s].focus();
      }
    }], [{
      key: "dropdownInterface",
      value: function dropdownInterface(t, e) {
        var s = A.get(t, "bs.dropdown");

        if (s || (s = new ut(t, "object" == _typeof(e) ? e : null)), "string" == typeof e) {
          if (void 0 === s[e]) throw new TypeError("No method named \"".concat(e, "\""));
          s[e]();
        }
      }
    }, {
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          ut.dropdownInterface(this, t);
        });
      }
    }, {
      key: "clearMenus",
      value: function clearMenus(t) {
        if (t && (2 === t.button || "keyup" === t.type && "Tab" !== t.key)) return;
        var e = i.find('[data-bs-toggle="dropdown"]');

        for (var _s7 = 0, _i5 = e.length; _s7 < _i5; _s7++) {
          var _i6 = A.get(e[_s7], "bs.dropdown");

          if (!_i6 || !1 === _i6._config.autoClose) continue;
          if (!_i6._element.classList.contains("show")) continue;
          var _n4 = {
            relatedTarget: _i6._element
          };

          if (t) {
            var _e11 = t.composedPath(),
                _s8 = _e11.includes(_i6._menu);

            if (_e11.includes(_i6._element) || "inside" === _i6._config.autoClose && !_s8 || "outside" === _i6._config.autoClose && _s8) continue;
            if (_i6._menu.contains(t.target) && ("keyup" === t.type && "Tab" === t.key || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
            "click" === t.type && (_n4.clickEvent = t);
          }

          _i6._completeHide(_n4);
        }
      }
    }, {
      key: "getParentFromElement",
      value: function getParentFromElement(t) {
        return a(t) || t.parentNode;
      }
    }, {
      key: "dataApiKeydownHandler",
      value: function dataApiKeydownHandler(t) {
        var _this15 = this;

        if (/input|textarea/i.test(t.target.tagName) ? "Space" === t.key || "Escape" !== t.key && ("ArrowDown" !== t.key && "ArrowUp" !== t.key || t.target.closest(".dropdown-menu")) : !it.test(t.key)) return;
        var e = this.classList.contains("show");
        if (!e && "Escape" === t.key) return;
        if (t.preventDefault(), t.stopPropagation(), p(this)) return;

        var s = function s() {
          return _this15.matches('[data-bs-toggle="dropdown"]') ? _this15 : i.prev(_this15, '[data-bs-toggle="dropdown"]')[0];
        };

        if ("Escape" === t.key) return s().focus(), void ut.clearMenus();
        e || "ArrowUp" !== t.key && "ArrowDown" !== t.key ? e && "Space" !== t.key ? ut.getInstance(s())._selectMenuItem(t) : ut.clearMenus() : s().click();
      }
    }, {
      key: "Default",
      get: function get() {
        return ht;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return dt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "dropdown";
      }
    }]);

    return ut;
  }(z);

  $.on(document, "keydown.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', ut.dataApiKeydownHandler), $.on(document, "keydown.bs.dropdown.data-api", ".dropdown-menu", ut.dataApiKeydownHandler), $.on(document, "click.bs.dropdown.data-api", ut.clearMenus), $.on(document, "keyup.bs.dropdown.data-api", ut.clearMenus), $.on(document, "click.bs.dropdown.data-api", '[data-bs-toggle="dropdown"]', function (t) {
    t.preventDefault(), ut.dropdownInterface(this);
  }), w(ut);

  var gt = function gt() {
    var t = document.documentElement.clientWidth;
    return Math.abs(window.innerWidth - t);
  },
      ft = function ft() {
    var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : gt();
    pt(), mt("body", "paddingRight", function (e) {
      return e + t;
    }), mt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight", function (e) {
      return e + t;
    }), mt(".sticky-top", "marginRight", function (e) {
      return e - t;
    });
  },
      pt = function pt() {
    var t = document.body.style.overflow;
    t && K.setDataAttribute(document.body, "overflow", t), document.body.style.overflow = "hidden";
  },
      mt = function mt(t, e, s) {
    var n = gt();
    i.find(t).forEach(function (t) {
      if (t !== document.body && window.innerWidth > t.clientWidth + n) return;
      var i = t.style[e],
          o = window.getComputedStyle(t)[e];
      K.setDataAttribute(t, e, i), t.style[e] = s(Number.parseFloat(o)) + "px";
    });
  },
      _t = function _t() {
    bt("body", "overflow"), bt("body", "paddingRight"), bt(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", "paddingRight"), bt(".sticky-top", "marginRight");
  },
      bt = function bt(t, e) {
    i.find(t).forEach(function (t) {
      var s = K.getDataAttribute(t, e);
      void 0 === s ? t.style.removeProperty(e) : (K.removeDataAttribute(t, e), t.style[e] = s);
    });
  },
      vt = {
    isVisible: !0,
    isAnimated: !1,
    rootElement: document.body,
    clickCallback: null
  },
      yt = {
    isVisible: "boolean",
    isAnimated: "boolean",
    rootElement: "element",
    clickCallback: "(function|null)"
  };

  var wt =
  /*#__PURE__*/
  function () {
    function wt(t) {
      _classCallCheck(this, wt);

      this._config = this._getConfig(t), this._isAppended = !1, this._element = null;
    }

    _createClass(wt, [{
      key: "show",
      value: function show(t) {
        this._config.isVisible ? (this._append(), this._config.isAnimated && b(this._getElement()), this._getElement().classList.add("show"), this._emulateAnimation(function () {
          E(t);
        })) : E(t);
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this16 = this;

        this._config.isVisible ? (this._getElement().classList.remove("show"), this._emulateAnimation(function () {
          _this16.dispose(), E(t);
        })) : E(t);
      }
    }, {
      key: "_getElement",
      value: function _getElement() {
        if (!this._element) {
          var _t7 = document.createElement("div");

          _t7.className = "modal-backdrop", this._config.isAnimated && _t7.classList.add("fade"), this._element = _t7;
        }

        return this._element;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return (t = _objectSpread({}, vt, {}, "object" == _typeof(t) ? t : {})).rootElement = t.rootElement || document.body, g("backdrop", t, yt), t;
      }
    }, {
      key: "_append",
      value: function _append() {
        var _this17 = this;

        this._isAppended || (this._config.rootElement.appendChild(this._getElement()), $.on(this._getElement(), "mousedown.bs.backdrop", function () {
          E(_this17._config.clickCallback);
        }), this._isAppended = !0);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._isAppended && ($.off(this._element, "mousedown.bs.backdrop"), this._getElement().parentNode.removeChild(this._element), this._isAppended = !1);
      }
    }, {
      key: "_emulateAnimation",
      value: function _emulateAnimation(t) {
        if (!this._config.isAnimated) return void E(t);
        var e = l(this._getElement());
        $.one(this._getElement(), "transitionend", function () {
          return E(t);
        }), u(this._getElement(), e);
      }
    }]);

    return wt;
  }();

  var Et = {
    backdrop: !0,
    keyboard: !0,
    focus: !0
  },
      Tt = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    focus: "boolean"
  };

  var At =
  /*#__PURE__*/
  function (_z6) {
    _inherits(At, _z6);

    function At(t, e) {
      var _this18;

      _classCallCheck(this, At);

      _this18 = _possibleConstructorReturn(this, _getPrototypeOf(At).call(this, t)), _this18._config = _this18._getConfig(e), _this18._dialog = i.findOne(".modal-dialog", _this18._element), _this18._backdrop = _this18._initializeBackDrop(), _this18._isShown = !1, _this18._ignoreBackdropClick = !1, _this18._isTransitioning = !1;
      return _this18;
    }

    _createClass(At, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this19 = this;

        if (this._isShown || this._isTransitioning) return;
        this._isAnimated() && (this._isTransitioning = !0);
        var e = $.trigger(this._element, "show.bs.modal", {
          relatedTarget: t
        });
        this._isShown || e.defaultPrevented || (this._isShown = !0, ft(), document.body.classList.add("modal-open"), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), $.on(this._element, "click.dismiss.bs.modal", '[data-bs-dismiss="modal"]', function (t) {
          return _this19.hide(t);
        }), $.on(this._dialog, "mousedown.dismiss.bs.modal", function () {
          $.one(_this19._element, "mouseup.dismiss.bs.modal", function (t) {
            t.target === _this19._element && (_this19._ignoreBackdropClick = !0);
          });
        }), this._showBackdrop(function () {
          return _this19._showElement(t);
        }));
      }
    }, {
      key: "hide",
      value: function hide(t) {
        var _this20 = this;

        if (t && t.preventDefault(), !this._isShown || this._isTransitioning) return;
        if ($.trigger(this._element, "hide.bs.modal").defaultPrevented) return;
        this._isShown = !1;

        var e = this._isAnimated();

        e && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), $.off(document, "focusin.bs.modal"), this._element.classList.remove("show"), $.off(this._element, "click.dismiss.bs.modal"), $.off(this._dialog, "mousedown.dismiss.bs.modal"), this._queueCallback(function () {
          return _this20._hideModal();
        }, this._element, e);
      }
    }, {
      key: "dispose",
      value: function dispose() {
        [window, this._dialog].forEach(function (t) {
          return $.off(t, ".bs.modal");
        }), this._backdrop.dispose(), _get(_getPrototypeOf(At.prototype), "dispose", this).call(this), $.off(document, "focusin.bs.modal");
      }
    }, {
      key: "handleUpdate",
      value: function handleUpdate() {
        this._adjustDialog();
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        return new wt({
          isVisible: Boolean(this._config.backdrop),
          isAnimated: this._isAnimated()
        });
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Et, {}, K.getDataAttributes(this._element), {}, t), g("modal", t, Tt), t;
      }
    }, {
      key: "_showElement",
      value: function _showElement(t) {
        var _this21 = this;

        var e = this._isAnimated(),
            s = i.findOne(".modal-body", this._dialog);

        this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0, s && (s.scrollTop = 0), e && b(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus(), this._queueCallback(function () {
          _this21._config.focus && _this21._element.focus(), _this21._isTransitioning = !1, $.trigger(_this21._element, "shown.bs.modal", {
            relatedTarget: t
          });
        }, this._dialog, e);
      }
    }, {
      key: "_enforceFocus",
      value: function _enforceFocus() {
        var _this22 = this;

        $.off(document, "focusin.bs.modal"), $.on(document, "focusin.bs.modal", function (t) {
          document === t.target || _this22._element === t.target || _this22._element.contains(t.target) || _this22._element.focus();
        });
      }
    }, {
      key: "_setEscapeEvent",
      value: function _setEscapeEvent() {
        var _this23 = this;

        this._isShown ? $.on(this._element, "keydown.dismiss.bs.modal", function (t) {
          _this23._config.keyboard && "Escape" === t.key ? (t.preventDefault(), _this23.hide()) : _this23._config.keyboard || "Escape" !== t.key || _this23._triggerBackdropTransition();
        }) : $.off(this._element, "keydown.dismiss.bs.modal");
      }
    }, {
      key: "_setResizeEvent",
      value: function _setResizeEvent() {
        var _this24 = this;

        this._isShown ? $.on(window, "resize.bs.modal", function () {
          return _this24._adjustDialog();
        }) : $.off(window, "resize.bs.modal");
      }
    }, {
      key: "_hideModal",
      value: function _hideModal() {
        var _this25 = this;

        this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(function () {
          document.body.classList.remove("modal-open"), _this25._resetAdjustments(), _t(), $.trigger(_this25._element, "hidden.bs.modal");
        });
      }
    }, {
      key: "_showBackdrop",
      value: function _showBackdrop(t) {
        var _this26 = this;

        $.on(this._element, "click.dismiss.bs.modal", function (t) {
          _this26._ignoreBackdropClick ? _this26._ignoreBackdropClick = !1 : t.target === t.currentTarget && (!0 === _this26._config.backdrop ? _this26.hide() : "static" === _this26._config.backdrop && _this26._triggerBackdropTransition());
        }), this._backdrop.show(t);
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

        if ($.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
        var t = this._element.scrollHeight > document.documentElement.clientHeight;
        t || (this._element.style.overflowY = "hidden"), this._element.classList.add("modal-static");
        var e = l(this._dialog);
        $.off(this._element, "transitionend"), $.one(this._element, "transitionend", function () {
          _this27._element.classList.remove("modal-static"), t || ($.one(_this27._element, "transitionend", function () {
            _this27._element.style.overflowY = "";
          }), u(_this27._element, e));
        }), u(this._element, e), this._element.focus();
      }
    }, {
      key: "_adjustDialog",
      value: function _adjustDialog() {
        var t = this._element.scrollHeight > document.documentElement.clientHeight,
            e = gt(),
            s = e > 0;
        (!s && t && !y() || s && !t && y()) && (this._element.style.paddingLeft = e + "px"), (s && !t && !y() || !s && t && y()) && (this._element.style.paddingRight = e + "px");
      }
    }, {
      key: "_resetAdjustments",
      value: function _resetAdjustments() {
        this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t, e) {
        return this.each(function () {
          var s = At.getInstance(this) || new At(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === s[t]) throw new TypeError("No method named \"".concat(t, "\""));
            s[t](e);
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Et;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "modal";
      }
    }]);

    return At;
  }(z);

  $.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function (t) {
    var _this28 = this;

    var e = a(this);
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), $.one(e, "show.bs.modal", function (t) {
      t.defaultPrevented || $.one(e, "hidden.bs.modal", function () {
        f(_this28) && _this28.focus();
      });
    }), (At.getInstance(e) || new At(e)).toggle(this);
  }), w(At);
  var kt = {
    backdrop: !0,
    keyboard: !0,
    scroll: !1
  },
      Lt = {
    backdrop: "boolean",
    keyboard: "boolean",
    scroll: "boolean"
  };

  var Ct =
  /*#__PURE__*/
  function (_z7) {
    _inherits(Ct, _z7);

    function Ct(t, e) {
      var _this29;

      _classCallCheck(this, Ct);

      _this29 = _possibleConstructorReturn(this, _getPrototypeOf(Ct).call(this, t)), _this29._config = _this29._getConfig(e), _this29._isShown = !1, _this29._backdrop = _this29._initializeBackDrop(), _this29._addEventListeners();
      return _this29;
    }

    _createClass(Ct, [{
      key: "toggle",
      value: function toggle(t) {
        return this._isShown ? this.hide() : this.show(t);
      }
    }, {
      key: "show",
      value: function show(t) {
        var _this30 = this;

        this._isShown || $.trigger(this._element, "show.bs.offcanvas", {
          relatedTarget: t
        }).defaultPrevented || (this._isShown = !0, this._element.style.visibility = "visible", this._backdrop.show(), this._config.scroll || (ft(), this._enforceFocusOnElement(this._element)), this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add("show"), this._queueCallback(function () {
          $.trigger(_this30._element, "shown.bs.offcanvas", {
            relatedTarget: t
          });
        }, this._element, !0));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this31 = this;

        this._isShown && ($.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || ($.off(document, "focusin.bs.offcanvas"), this._element.blur(), this._isShown = !1, this._element.classList.remove("show"), this._backdrop.hide(), this._queueCallback(function () {
          _this31._element.setAttribute("aria-hidden", !0), _this31._element.removeAttribute("aria-modal"), _this31._element.removeAttribute("role"), _this31._element.style.visibility = "hidden", _this31._config.scroll || _t(), $.trigger(_this31._element, "hidden.bs.offcanvas");
        }, this._element, !0)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._backdrop.dispose(), _get(_getPrototypeOf(Ct.prototype), "dispose", this).call(this), $.off(document, "focusin.bs.offcanvas");
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, kt, {}, K.getDataAttributes(this._element), {}, "object" == _typeof(t) ? t : {}), g("offcanvas", t, Lt), t;
      }
    }, {
      key: "_initializeBackDrop",
      value: function _initializeBackDrop() {
        var _this32 = this;

        return new wt({
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
      value: function _enforceFocusOnElement(t) {
        $.off(document, "focusin.bs.offcanvas"), $.on(document, "focusin.bs.offcanvas", function (e) {
          document === e.target || t === e.target || t.contains(e.target) || t.focus();
        }), t.focus();
      }
    }, {
      key: "_addEventListeners",
      value: function _addEventListeners() {
        var _this33 = this;

        $.on(this._element, "click.dismiss.bs.offcanvas", '[data-bs-dismiss="offcanvas"]', function () {
          return _this33.hide();
        }), $.on(this._element, "keydown.dismiss.bs.offcanvas", function (t) {
          _this33._config.keyboard && "Escape" === t.key && _this33.hide();
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.offcanvas") || new Ct(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t] || t.startsWith("_") || "constructor" === t) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "offcanvas";
      }
    }, {
      key: "Default",
      get: function get() {
        return kt;
      }
    }]);

    return Ct;
  }(z);

  $.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function (t) {
    var _this34 = this;

    var e = a(this);
    if (["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this)) return;
    $.one(e, "hidden.bs.offcanvas", function () {
      f(_this34) && _this34.focus();
    });
    var s = i.findOne(".offcanvas.show");
    s && s !== e && Ct.getInstance(s).hide(), (A.get(e, "bs.offcanvas") || new Ct(e)).toggle(this);
  }), $.on(window, "load.bs.offcanvas.data-api", function () {
    i.find(".offcanvas.show").forEach(function (t) {
      return (A.get(t, "bs.offcanvas") || new Ct(t)).show();
    });
  }), w(Ct);

  var Dt = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
      Nt = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,
      St = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
      Ot = function Ot(t, e) {
    var s = t.nodeName.toLowerCase();
    if (e.includes(s)) return !Dt.has(s) || Boolean(Nt.test(t.nodeValue) || St.test(t.nodeValue));
    var i = e.filter(function (t) {
      return t instanceof RegExp;
    });

    for (var _t8 = 0, _e12 = i.length; _t8 < _e12; _t8++) {
      if (i[_t8].test(s)) return !0;
    }

    return !1;
  };

  function It(t, e, s) {
    var _ref5;

    if (!t.length) return t;
    if (s && "function" == typeof s) return s(t);

    var i = new window.DOMParser().parseFromString(t, "text/html"),
        n = Object.keys(e),
        o = (_ref5 = []).concat.apply(_ref5, _toConsumableArray(i.body.querySelectorAll("*")));

    var _loop = function _loop(_t9, _s9) {
      var _ref6;

      var s = o[_t9],
          i = s.nodeName.toLowerCase();

      if (!n.includes(i)) {
        s.parentNode.removeChild(s);
        return "continue";
      }

      var r = (_ref6 = []).concat.apply(_ref6, _toConsumableArray(s.attributes)),
          a = [].concat(e["*"] || [], e[i] || []);

      r.forEach(function (t) {
        Ot(t, a) || s.removeAttribute(t.nodeName);
      });
    };

    for (var _t9 = 0, _s9 = o.length; _t9 < _s9; _t9++) {
      var _ret = _loop(_t9, _s9);

      if (_ret === "continue") continue;
    }

    return i.body.innerHTML;
  }

  var xt = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
      jt = new Set(["sanitize", "allowList", "sanitizeFn"]),
      Pt = {
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
      Mt = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: y() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: y() ? "right" : "left"
  },
      Ht = {
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
    allowList: {
      "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
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
    },
    popperConfig: null
  },
      Rt = {
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
  };

  var Bt =
  /*#__PURE__*/
  function (_z8) {
    _inherits(Bt, _z8);

    function Bt(t, e) {
      var _this35;

      _classCallCheck(this, Bt);

      if (void 0 === s) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      _this35 = _possibleConstructorReturn(this, _getPrototypeOf(Bt).call(this, t)), _this35._isEnabled = !0, _this35._timeout = 0, _this35._hoverState = "", _this35._activeTrigger = {}, _this35._popper = null, _this35._config = _this35._getConfig(e), _this35.tip = null, _this35._setListeners();
      return _this35;
    }

    _createClass(Bt, [{
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
      value: function toggle(t) {
        if (this._isEnabled) if (t) {
          var _e13 = this._initializeOnDelegatedTarget(t);

          _e13._activeTrigger.click = !_e13._activeTrigger.click, _e13._isWithActiveTrigger() ? _e13._enter(null, _e13) : _e13._leave(null, _e13);
        } else {
          if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);

          this._enter(null, this);
        }
      }
    }, {
      key: "dispose",
      value: function dispose() {
        clearTimeout(this._timeout), $.off(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this.tip && this.tip.parentNode && this.tip.parentNode.removeChild(this.tip), this._popper && this._popper.destroy(), _get(_getPrototypeOf(Bt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "show",
      value: function show() {
        var _o$classList,
            _ref7,
            _this36 = this;

        if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
        if (!this.isWithContent() || !this._isEnabled) return;
        var t = $.trigger(this._element, this.constructor.Event.SHOW),
            e = m(this._element),
            i = null === e ? this._element.ownerDocument.documentElement.contains(this._element) : e.contains(this._element);
        if (t.defaultPrevented || !i) return;
        var o = this.getTipElement(),
            r = n(this.constructor.NAME);
        o.setAttribute("id", r), this._element.setAttribute("aria-describedby", r), this.setContent(), this._config.animation && o.classList.add("fade");

        var a = "function" == typeof this._config.placement ? this._config.placement.call(this, o, this._element) : this._config.placement,
            l = this._getAttachment(a);

        this._addAttachmentClass(l);

        var c = this._config.container;
        A.set(o, this.constructor.DATA_KEY, this), this._element.ownerDocument.documentElement.contains(this.tip) || (c.appendChild(o), $.trigger(this._element, this.constructor.Event.INSERTED)), this._popper ? this._popper.update() : this._popper = s.createPopper(this._element, o, this._getPopperConfig(l)), o.classList.add("show");
        var h = "function" == typeof this._config.customClass ? this._config.customClass() : this._config.customClass;
        h && (_o$classList = o.classList).add.apply(_o$classList, _toConsumableArray(h.split(" "))), "ontouchstart" in document.documentElement && (_ref7 = []).concat.apply(_ref7, _toConsumableArray(document.body.children)).forEach(function (t) {
          $.on(t, "mouseover", _);
        });
        var d = this.tip.classList.contains("fade");

        this._queueCallback(function () {
          var t = _this36._hoverState;
          _this36._hoverState = null, $.trigger(_this36._element, _this36.constructor.Event.SHOWN), "out" === t && _this36._leave(null, _this36);
        }, this.tip, d);
      }
    }, {
      key: "hide",
      value: function hide() {
        var _ref8,
            _this37 = this;

        if (!this._popper) return;
        var t = this.getTipElement();
        if ($.trigger(this._element, this.constructor.Event.HIDE).defaultPrevented) return;
        t.classList.remove("show"), "ontouchstart" in document.documentElement && (_ref8 = []).concat.apply(_ref8, _toConsumableArray(document.body.children)).forEach(function (t) {
          return $.off(t, "mouseover", _);
        }), this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1;
        var e = this.tip.classList.contains("fade");
        this._queueCallback(function () {
          _this37._isWithActiveTrigger() || ("show" !== _this37._hoverState && t.parentNode && t.parentNode.removeChild(t), _this37._cleanTipClass(), _this37._element.removeAttribute("aria-describedby"), $.trigger(_this37._element, _this37.constructor.Event.HIDDEN), _this37._popper && (_this37._popper.destroy(), _this37._popper = null));
        }, this.tip, e), this._hoverState = "";
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
        var t = document.createElement("div");
        return t.innerHTML = this._config.template, this.tip = t.children[0], this.tip;
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(i.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show");
      }
    }, {
      key: "setElementContent",
      value: function setElementContent(t, e) {
        if (null !== t) return h(e) ? (e = d(e), void (this._config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void (this._config.html ? (this._config.sanitize && (e = It(e, this._config.allowList, this._config.sanitizeFn)), t.innerHTML = e) : t.textContent = e);
      }
    }, {
      key: "getTitle",
      value: function getTitle() {
        var t = this._element.getAttribute("data-bs-original-title");

        return t || (t = "function" == typeof this._config.title ? this._config.title.call(this._element) : this._config.title), t;
      }
    }, {
      key: "updateAttachment",
      value: function updateAttachment(t) {
        return "right" === t ? "end" : "left" === t ? "start" : t;
      }
    }, {
      key: "_initializeOnDelegatedTarget",
      value: function _initializeOnDelegatedTarget(t, e) {
        var s = this.constructor.DATA_KEY;
        return (e = e || A.get(t.delegateTarget, s)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), A.set(t.delegateTarget, s, e)), e;
      }
    }, {
      key: "_getOffset",
      value: function _getOffset() {
        var _this38 = this;

        var t = this._config.offset;
        return "string" == typeof t ? t.split(",").map(function (t) {
          return Number.parseInt(t, 10);
        }) : "function" == typeof t ? function (e) {
          return t(e, _this38._element);
        } : t;
      }
    }, {
      key: "_getPopperConfig",
      value: function _getPopperConfig(t) {
        var _this39 = this;

        var e = {
          placement: t,
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
            fn: function fn(t) {
              return _this39._handlePopperPlacementChange(t);
            }
          }],
          onFirstUpdate: function onFirstUpdate(t) {
            t.options.placement !== t.placement && _this39._handlePopperPlacementChange(t);
          }
        };
        return _objectSpread({}, e, {}, "function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig);
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-tooltip-" + this.updateAttachment(t));
      }
    }, {
      key: "_getAttachment",
      value: function _getAttachment(t) {
        return Mt[t.toUpperCase()];
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this40 = this;

        this._config.trigger.split(" ").forEach(function (t) {
          if ("click" === t) $.on(_this40._element, _this40.constructor.Event.CLICK, _this40._config.selector, function (t) {
            return _this40.toggle(t);
          });else if ("manual" !== t) {
            var _e14 = "hover" === t ? _this40.constructor.Event.MOUSEENTER : _this40.constructor.Event.FOCUSIN,
                _s10 = "hover" === t ? _this40.constructor.Event.MOUSELEAVE : _this40.constructor.Event.FOCUSOUT;

            $.on(_this40._element, _e14, _this40._config.selector, function (t) {
              return _this40._enter(t);
            }), $.on(_this40._element, _s10, _this40._config.selector, function (t) {
              return _this40._leave(t);
            });
          }
        }), this._hideModalHandler = function () {
          _this40._element && _this40.hide();
        }, $.on(this._element.closest(".modal"), "hide.bs.modal", this._hideModalHandler), this._config.selector ? this._config = _objectSpread({}, this._config, {
          trigger: "manual",
          selector: ""
        }) : this._fixTitle();
      }
    }, {
      key: "_fixTitle",
      value: function _fixTitle() {
        var t = this._element.getAttribute("title"),
            e = _typeof(this._element.getAttribute("data-bs-original-title"));

        (t || "string" !== e) && (this._element.setAttribute("data-bs-original-title", t || ""), !t || this._element.getAttribute("aria-label") || this._element.textContent || this._element.setAttribute("aria-label", t), this._element.setAttribute("title", ""));
      }
    }, {
      key: "_enter",
      value: function _enter(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e._config.delay && e._config.delay.show ? e._timeout = setTimeout(function () {
          "show" === e._hoverState && e.show();
        }, e._config.delay.show) : e.show());
      }
    }, {
      key: "_leave",
      value: function _leave(t, e) {
        e = this._initializeOnDelegatedTarget(t, e), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = e._element.contains(t.relatedTarget)), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e._config.delay && e._config.delay.hide ? e._timeout = setTimeout(function () {
          "out" === e._hoverState && e.hide();
        }, e._config.delay.hide) : e.hide());
      }
    }, {
      key: "_isWithActiveTrigger",
      value: function _isWithActiveTrigger() {
        for (var _t10 in this._activeTrigger) {
          if (this._activeTrigger[_t10]) return !0;
        }

        return !1;
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        var e = K.getDataAttributes(this._element);
        return Object.keys(e).forEach(function (t) {
          jt.has(t) && delete e[t];
        }), (t = _objectSpread({}, this.constructor.Default, {}, e, {}, "object" == _typeof(t) && t ? t : {})).container = !1 === t.container ? document.body : d(t.container), "number" == typeof t.delay && (t.delay = {
          show: t.delay,
          hide: t.delay
        }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), g("tooltip", t, this.constructor.DefaultType), t.sanitize && (t.template = It(t.template, t.allowList, t.sanitizeFn)), t;
      }
    }, {
      key: "_getDelegateConfig",
      value: function _getDelegateConfig() {
        var t = {};
        if (this._config) for (var _e15 in this._config) {
          this.constructor.Default[_e15] !== this._config[_e15] && (t[_e15] = this._config[_e15]);
        }
        return t;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match(xt);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }, {
      key: "_handlePopperPlacementChange",
      value: function _handlePopperPlacementChange(t) {
        var e = t.state;
        e && (this.tip = e.elements.popper, this._cleanTipClass(), this._addAttachmentClass(this._getAttachment(e.placement)));
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.tooltip");
          var s = "object" == _typeof(t) && t;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Bt(this, s)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Ht;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tooltip";
      }
    }, {
      key: "Event",
      get: function get() {
        return Rt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Pt;
      }
    }]);

    return Bt;
  }(z);

  w(Bt);

  var $t = new RegExp("(^|\\s)bs-popover\\S+", "g"),
      zt = _objectSpread({}, Bt.Default, {
    placement: "right",
    offset: [0, 8],
    trigger: "click",
    content: "",
    template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
  }),
      Ut = _objectSpread({}, Bt.DefaultType, {
    content: "(string|element|function)"
  }),
      qt = {
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
  };

  var Ft =
  /*#__PURE__*/
  function (_Bt) {
    _inherits(Ft, _Bt);

    function Ft() {
      _classCallCheck(this, Ft);

      return _possibleConstructorReturn(this, _getPrototypeOf(Ft).apply(this, arguments));
    }

    _createClass(Ft, [{
      key: "isWithContent",
      value: function isWithContent() {
        return this.getTitle() || this._getContent();
      }
    }, {
      key: "setContent",
      value: function setContent() {
        var t = this.getTipElement();
        this.setElementContent(i.findOne(".popover-header", t), this.getTitle());

        var e = this._getContent();

        "function" == typeof e && (e = e.call(this._element)), this.setElementContent(i.findOne(".popover-body", t), e), t.classList.remove("fade", "show");
      }
    }, {
      key: "_addAttachmentClass",
      value: function _addAttachmentClass(t) {
        this.getTipElement().classList.add("bs-popover-" + this.updateAttachment(t));
      }
    }, {
      key: "_getContent",
      value: function _getContent() {
        return this._element.getAttribute("data-bs-content") || this._config.content;
      }
    }, {
      key: "_cleanTipClass",
      value: function _cleanTipClass() {
        var t = this.getTipElement(),
            e = t.getAttribute("class").match($t);
        null !== e && e.length > 0 && e.map(function (t) {
          return t.trim();
        }).forEach(function (e) {
          return t.classList.remove(e);
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.popover");
          var s = "object" == _typeof(t) ? t : null;

          if ((e || !/dispose|hide/.test(t)) && (e || (e = new Ft(this, s), A.set(this, "bs.popover", e)), "string" == typeof t)) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return zt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "popover";
      }
    }, {
      key: "Event",
      get: function get() {
        return qt;
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Ut;
      }
    }]);

    return Ft;
  }(Bt);

  w(Ft);
  var Wt = {
    offset: 10,
    method: "auto",
    target: ""
  },
      Kt = {
    offset: "number",
    method: "string",
    target: "(string|element)"
  };

  var Vt =
  /*#__PURE__*/
  function (_z9) {
    _inherits(Vt, _z9);

    function Vt(t, e) {
      var _this41;

      _classCallCheck(this, Vt);

      _this41 = _possibleConstructorReturn(this, _getPrototypeOf(Vt).call(this, t)), _this41._scrollElement = "BODY" === _this41._element.tagName ? window : _this41._element, _this41._config = _this41._getConfig(e), _this41._selector = "".concat(_this41._config.target, " .nav-link, ").concat(_this41._config.target, " .list-group-item, ").concat(_this41._config.target, " .dropdown-item"), _this41._offsets = [], _this41._targets = [], _this41._activeTarget = null, _this41._scrollHeight = 0, $.on(_this41._scrollElement, "scroll.bs.scrollspy", function () {
        return _this41._process();
      }), _this41.refresh(), _this41._process();
      return _this41;
    }

    _createClass(Vt, [{
      key: "refresh",
      value: function refresh() {
        var _this42 = this;

        var t = this._scrollElement === this._scrollElement.window ? "offset" : "position",
            e = "auto" === this._config.method ? t : this._config.method,
            s = "position" === e ? this._getScrollTop() : 0;
        this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), i.find(this._selector).map(function (t) {
          var n = r(t),
              o = n ? i.findOne(n) : null;

          if (o) {
            var _t11 = o.getBoundingClientRect();

            if (_t11.width || _t11.height) return [K[e](o).top + s, n];
          }

          return null;
        }).filter(function (t) {
          return t;
        }).sort(function (t, e) {
          return t[0] - e[0];
        }).forEach(function (t) {
          _this42._offsets.push(t[0]), _this42._targets.push(t[1]);
        });
      }
    }, {
      key: "dispose",
      value: function dispose() {
        $.off(this._scrollElement, ".bs.scrollspy"), _get(_getPrototypeOf(Vt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        if ("string" != typeof (t = _objectSpread({}, Wt, {}, K.getDataAttributes(this._element), {}, "object" == _typeof(t) && t ? t : {})).target && h(t.target)) {
          var _e16 = t.target.id;
          _e16 || (_e16 = n("scrollspy"), t.target.id = _e16), t.target = "#" + _e16;
        }

        return g("scrollspy", t, Kt), t;
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
        var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            s = this._config.offset + e - this._getOffsetHeight();

        if (this._scrollHeight !== e && this.refresh(), t >= s) {
          var _t12 = this._targets[this._targets.length - 1];
          this._activeTarget !== _t12 && this._activate(_t12);
        } else {
          if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();

          for (var _e17 = this._offsets.length; _e17--;) {
            this._activeTarget !== this._targets[_e17] && t >= this._offsets[_e17] && (void 0 === this._offsets[_e17 + 1] || t < this._offsets[_e17 + 1]) && this._activate(this._targets[_e17]);
          }
        }
      }
    }, {
      key: "_activate",
      value: function _activate(t) {
        this._activeTarget = t, this._clear();

        var e = this._selector.split(",").map(function (e) {
          return "".concat(e, "[data-bs-target=\"").concat(t, "\"],").concat(e, "[href=\"").concat(t, "\"]");
        }),
            s = i.findOne(e.join(","));

        s.classList.contains("dropdown-item") ? (i.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add("active"), s.classList.add("active")) : (s.classList.add("active"), i.parents(s, ".nav, .list-group").forEach(function (t) {
          i.prev(t, ".nav-link, .list-group-item").forEach(function (t) {
            return t.classList.add("active");
          }), i.prev(t, ".nav-item").forEach(function (t) {
            i.children(t, ".nav-link").forEach(function (t) {
              return t.classList.add("active");
            });
          });
        })), $.trigger(this._scrollElement, "activate.bs.scrollspy", {
          relatedTarget: t
        });
      }
    }, {
      key: "_clear",
      value: function _clear() {
        i.find(this._selector).filter(function (t) {
          return t.classList.contains("active");
        }).forEach(function (t) {
          return t.classList.remove("active");
        });
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = Vt.getInstance(this) || new Vt(this, "object" == _typeof(t) ? t : {});

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "Default",
      get: function get() {
        return Wt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "scrollspy";
      }
    }]);

    return Vt;
  }(z);

  $.on(window, "load.bs.scrollspy.data-api", function () {
    i.find('[data-bs-spy="scroll"]').forEach(function (t) {
      return new Vt(t);
    });
  }), w(Vt);

  var Qt =
  /*#__PURE__*/
  function (_z10) {
    _inherits(Qt, _z10);

    function Qt() {
      _classCallCheck(this, Qt);

      return _possibleConstructorReturn(this, _getPrototypeOf(Qt).apply(this, arguments));
    }

    _createClass(Qt, [{
      key: "show",
      value: function show() {
        var _this43 = this;

        if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active")) return;
        var t;

        var e = a(this._element),
            s = this._element.closest(".nav, .list-group");

        if (s) {
          var _e18 = "UL" === s.nodeName || "OL" === s.nodeName ? ":scope > li > .active" : ".active";

          t = i.find(_e18, s), t = t[t.length - 1];
        }

        var n = t ? $.trigger(t, "hide.bs.tab", {
          relatedTarget: this._element
        }) : null;
        if ($.trigger(this._element, "show.bs.tab", {
          relatedTarget: t
        }).defaultPrevented || null !== n && n.defaultPrevented) return;

        this._activate(this._element, s);

        var o = function o() {
          $.trigger(t, "hidden.bs.tab", {
            relatedTarget: _this43._element
          }), $.trigger(_this43._element, "shown.bs.tab", {
            relatedTarget: t
          });
        };

        e ? this._activate(e, e.parentNode, o) : o();
      }
    }, {
      key: "_activate",
      value: function _activate(t, e, s) {
        var _this44 = this;

        var n = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? i.children(e, ".active") : i.find(":scope > li > .active", e))[0],
            o = s && n && n.classList.contains("fade"),
            r = function r() {
          return _this44._transitionComplete(t, n, s);
        };

        n && o ? (n.classList.remove("show"), this._queueCallback(r, t, !0)) : r();
      }
    }, {
      key: "_transitionComplete",
      value: function _transitionComplete(t, e, s) {
        if (e) {
          e.classList.remove("active");

          var _t13 = i.findOne(":scope > .dropdown-menu .active", e.parentNode);

          _t13 && _t13.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1);
        }

        t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), b(t), t.classList.contains("fade") && t.classList.add("show");
        var n = t.parentNode;

        if (n && "LI" === n.nodeName && (n = n.parentNode), n && n.classList.contains("dropdown-menu")) {
          var _e19 = t.closest(".dropdown");

          _e19 && i.find(".dropdown-toggle", _e19).forEach(function (t) {
            return t.classList.add("active");
          }), t.setAttribute("aria-expanded", !0);
        }

        s && s();
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.tab") || new Qt(this);

          if ("string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t]();
          }
        });
      }
    }, {
      key: "NAME",
      get: function get() {
        return "tab";
      }
    }]);

    return Qt;
  }(z);

  $.on(document, "click.bs.tab.data-api", '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', function (t) {
    ["A", "AREA"].includes(this.tagName) && t.preventDefault(), p(this) || (A.get(this, "bs.tab") || new Qt(this)).show();
  }), w(Qt);
  var Xt = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  },
      Yt = {
    animation: !0,
    autohide: !0,
    delay: 5e3
  };

  var Gt =
  /*#__PURE__*/
  function (_z11) {
    _inherits(Gt, _z11);

    function Gt(t, e) {
      var _this45;

      _classCallCheck(this, Gt);

      _this45 = _possibleConstructorReturn(this, _getPrototypeOf(Gt).call(this, t)), _this45._config = _this45._getConfig(e), _this45._timeout = null, _this45._hasMouseInteraction = !1, _this45._hasKeyboardInteraction = !1, _this45._setListeners();
      return _this45;
    }

    _createClass(Gt, [{
      key: "show",
      value: function show() {
        var _this46 = this;

        $.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove("hide"), b(this._element), this._element.classList.add("showing"), this._queueCallback(function () {
          _this46._element.classList.remove("showing"), _this46._element.classList.add("show"), $.trigger(_this46._element, "shown.bs.toast"), _this46._maybeScheduleHide();
        }, this._element, this._config.animation));
      }
    }, {
      key: "hide",
      value: function hide() {
        var _this47 = this;

        this._element.classList.contains("show") && ($.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.remove("show"), this._queueCallback(function () {
          _this47._element.classList.add("hide"), $.trigger(_this47._element, "hidden.bs.toast");
        }, this._element, this._config.animation)));
      }
    }, {
      key: "dispose",
      value: function dispose() {
        this._clearTimeout(), this._element.classList.contains("show") && this._element.classList.remove("show"), _get(_getPrototypeOf(Gt.prototype), "dispose", this).call(this);
      }
    }, {
      key: "_getConfig",
      value: function _getConfig(t) {
        return t = _objectSpread({}, Yt, {}, K.getDataAttributes(this._element), {}, "object" == _typeof(t) && t ? t : {}), g("toast", t, this.constructor.DefaultType), t;
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
      value: function _onInteraction(t, e) {
        switch (t.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = e;
            break;

          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = e;
        }

        if (e) return void this._clearTimeout();
        var s = t.relatedTarget;
        this._element === s || this._element.contains(s) || this._maybeScheduleHide();
      }
    }, {
      key: "_setListeners",
      value: function _setListeners() {
        var _this49 = this;

        $.on(this._element, "click.dismiss.bs.toast", '[data-bs-dismiss="toast"]', function () {
          return _this49.hide();
        }), $.on(this._element, "mouseover.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), $.on(this._element, "mouseout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        }), $.on(this._element, "focusin.bs.toast", function (t) {
          return _this49._onInteraction(t, !0);
        }), $.on(this._element, "focusout.bs.toast", function (t) {
          return _this49._onInteraction(t, !1);
        });
      }
    }, {
      key: "_clearTimeout",
      value: function _clearTimeout() {
        clearTimeout(this._timeout), this._timeout = null;
      }
    }], [{
      key: "jQueryInterface",
      value: function jQueryInterface(t) {
        return this.each(function () {
          var e = A.get(this, "bs.toast");

          if (e || (e = new Gt(this, "object" == _typeof(t) && t)), "string" == typeof t) {
            if (void 0 === e[t]) throw new TypeError("No method named \"".concat(t, "\""));
            e[t](this);
          }
        });
      }
    }, {
      key: "DefaultType",
      get: function get() {
        return Xt;
      }
    }, {
      key: "Default",
      get: function get() {
        return Yt;
      }
    }, {
      key: "NAME",
      get: function get() {
        return "toast";
      }
    }]);

    return Gt;
  }(z);

  return w(Gt), {
    Alert: U,
    Button: q,
    Carousel: J,
    Collapse: st,
    Dropdown: ut,
    Modal: At,
    Offcanvas: Ct,
    Popover: Ft,
    ScrollSpy: Vt,
    Tab: Qt,
    Toast: Gt,
    Tooltip: Bt
  };
});