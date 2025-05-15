import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createCommentVNode,
  createElementBlock,
  createTextVNode,
  createVNode,
  defineComponent,
  h,
  inject,
  mergeProps,
  nextTick,
  normalizeClass,
  normalizeStyle,
  onMounted,
  onUnmounted,
  openBlock,
  provide,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  unref,
  useAttrs,
  useSlots,
  useTemplateRef,
  watch,
  withCtx,
  withModifiers
} from "./chunk-QHC3C7AY.js";

// ../node_modules/.pnpm/@bottle414+bottle-ui@2.0.0/node_modules/@bottle414/bottle-ui/dist/bottle-ui.es.js
var et = "b";
var tt = "is";
function ee(r, e, t, n) {
  return e && (r += `-${e}`), t && (r += `__${t}`), n && (r += `--${n}`), r;
}
function R(r) {
  const e = `${et}-${r}`;
  return {
    // 类名
    b: (h2 = "") => ee(e, h2, "", ""),
    e: (h2 = "") => h2 ? ee(e, "", h2, "") : "",
    m: (h2 = "") => h2 ? ee(e, "", "", h2) : "",
    be: (h2 = "", f = "") => h2 && f ? ee(e, h2, f, "") : "",
    bm: (h2 = "", f = "") => h2 && f ? ee(e, h2, "", f) : "",
    em: (h2 = "", f = "") => h2 && f ? ee(e, "", h2, f) : "",
    bem: (h2 = "", f = "", b = "") => h2 && f && b ? ee(e, h2, f, b) : "",
    is: (h2, f) => f ? `${tt}-${h2}` : "",
    // css
    cssVar: (h2) => {
      const f = {};
      for (const b in h2)
        h2[b] && (f[`--${e}-${b}`] = h2[b]);
      return f;
    },
    cssVarName: () => `--${e}`,
    cssVarBlock: (h2) => {
      const f = {};
      for (const b in h2)
        h2[b] && (f[`--${e}-${b}`] = h2[b]);
      return f;
    },
    cssVarBlockName: (h2) => `--${e}-${h2}`
  };
}
var nt = [
  "primary",
  "success",
  "warning",
  "error",
  "default"
];
var rt = {
  size: {
    type: String,
    default: "32"
  },
  color: {
    type: String,
    default: "#bebe"
  },
  type: {
    type: String,
    // 这是一个限定范围的枚举,配合as const以后 里面只能是这些值
    values: nt,
    // validator:(val: string) => {// 复杂校验用
    //     return Types.includes(val)
    // },
    default: "default"
  },
  nativeType: {
    type: String,
    default: "button"
  },
  target: {
    // 进行滚动的目标元素
    type: String,
    default: "window"
  },
  round: Boolean,
  // 圆角，按百分比计算？
  circle: Boolean,
  // 圆形按钮
  disabled: Boolean,
  // 禁用
  loading: Boolean,
  // 加载状态
  toTop: Boolean
  // 回到顶部
};
var st = {
  // 一些事件
  click: (r) => r instanceof MouseEvent,
  mousedown: (r) => r instanceof MouseEvent
};
var at = {
  color: String,
  depth: Number,
  // 限制depth为 1, 2, 3, 4
  size: [Number, String]
  // 告诉这不是数组而是两个类型
};
var it = defineComponent({
  name: "BIcon",
  __name: "icon",
  props: at,
  setup(r) {
    const e = R("icon").b(), t = r, n = computed(() => {
      const { color: s, depth: i, size: a } = t;
      if (!(!s && !i && !a))
        return {
          ...s ? { color: s } : {},
          // 展开对象
          ...i ? { opacity: i * 0.25 } : {},
          ...a ? { "font-size": a + "px" } : {}
        };
    });
    return (s, i) => (openBlock(), createElementBlock("i", {
      class: normalizeClass(unref(e)),
      style: normalizeStyle(n.value)
    }, [
      renderSlot(s.$slots, "default", {}, void 0, true)
    ], 6));
  }
});
var De = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [n, s] of e)
    t[n] = s;
  return t;
};
var ot = De(it, [["__scopeId", "data-v-e615ebdb"]]);
function D(r) {
  return r.install = (e) => {
    e.component(r.name, r);
  }, r;
}
var se = D(ot);
var lt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
};
var ut = defineComponent({
  name: "ReloadOutlined",
  render: function(e, t) {
    return openBlock(), createElementBlock(
      "svg",
      lt,
      t[0] || (t[0] = [
        createBaseVNode(
          "path",
          {
            d: "M909.1 209.3l-56.4 44.1C775.8 155.1 656.2 92 521.9 92C290 92 102.3 279.5 102 511.5C101.7 743.7 289.8 932 521.9 932c181.3 0 335.8-115 394.6-276.1c1.5-4.2-.7-8.9-4.9-10.3l-56.7-19.5a8 8 0 0 0-10.1 4.8c-1.8 5-3.8 10-5.9 14.9c-17.3 41-42.1 77.8-73.7 109.4A344.77 344.77 0 0 1 655.9 829c-42.3 17.9-87.4 27-133.8 27c-46.5 0-91.5-9.1-133.8-27A341.5 341.5 0 0 1 279 755.2a342.16 342.16 0 0 1-73.7-109.4c-17.9-42.4-27-87.4-27-133.9s9.1-91.5 27-133.9c17.3-41 42.1-77.8 73.7-109.4c31.6-31.6 68.4-56.4 109.3-73.8c42.3-17.9 87.4-27 133.8-27c46.5 0 91.5 9.1 133.8 27a341.5 341.5 0 0 1 109.3 73.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 0 0 3 14.1l175.6 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c-.1-6.6-7.8-10.3-13-6.2z",
            fill: "currentColor"
          },
          null,
          -1
          /* HOISTED */
        )
      ])
    );
  }
});
var ct = ["type", "disabled"];
var dt = defineComponent({
  name: "BButton",
  inheritAttrs: false,
  __name: "button",
  props: rt,
  emits: st,
  setup(r, { emit: e }) {
    const t = R("button"), n = ref(false), s = r, i = e, a = ref(null);
    function o() {
      return s.target === "window" ? window : s.target === "document" ? document.documentElement : document.getElementById(s.target);
    }
    const l = () => {
      if (!a.value) return;
      const p = a.value instanceof Window ? window.scrollY : a.value instanceof Document ? document.documentElement.scrollTop : a.value.scrollTop;
      n.value = p > 100;
    };
    onMounted(() => {
      a.value = o(), a.value && a.value.addEventListener("scroll", l);
    }), onUnmounted(() => {
      a.value && a.value.removeEventListener("scroll", l);
    });
    const c = (p) => {
      a.value && (s.toTop && a.value.scrollTo({
        top: 0,
        behavior: "smooth"
      }), i("click", p));
    }, d = (p) => {
      i("mousedown", p);
    };
    return (p, S) => (openBlock(), createElementBlock("button", mergeProps({
      class: [
        unref(t).b(),
        unref(t).m(p.type),
        unref(t).m(p.size),
        unref(t).is("circle", p.circle),
        unref(t).is("round", p.round),
        unref(t).is("disabled", p.disabled || p.loading),
        unref(t).is("toTop", p.toTop),
        unref(t).is("visible", p.toTop && n.value)
      ]
    }, p.$attrs, {
      type: p.nativeType,
      disabled: p.disabled || p.loading,
      onClick: c,
      onMousedown: d
    }), [
      renderSlot(p.$slots, "default"),
      p.loading ? (openBlock(), createBlock(unref(se), {
        key: 0,
        class: normalizeClass(unref(t).is("loading", p.loading))
      }, {
        default: withCtx(() => [
          createVNode(unref(ut))
        ]),
        _: 1
      }, 8, ["class"])) : renderSlot(p.$slots, "icon", { key: 1 })
    ], 16, ct));
  }
});
var ft = D(dt);
var pt = {
  shadow: {
    type: String,
    default: "hover"
  },
  bodyStyle: {
    type: [Object, Array, String],
    default: ""
  },
  bodyClass: {
    type: String,
    default: ""
  }
};
var yt = ["bodyStyle"];
var ht = defineComponent({
  name: "BCard",
  __name: "card",
  props: pt,
  setup(r) {
    const e = R("card"), t = r;
    return (n, s) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b(), unref(e).is(`${t.shadow}`, true)])
    }, [
      n.$slots.header ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(e).e("header"))
      }, [
        renderSlot(n.$slots, "header")
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("div", {
        class: normalizeClass([unref(e).e("body"), n.bodyClass]),
        bodyStyle: n.bodyStyle
      }, [
        renderSlot(n.$slots, "default")
      ], 10, yt),
      n.$slots.footer ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(unref(e).e("footer"))
      }, [
        renderSlot(n.$slots, "footer")
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
});
var mt = D(ht);
var gt = {
  label: String,
  color: String,
  size: [Number, String],
  modelValue: [String, Number, Boolean],
  checked: Boolean,
  // 控制非布尔 modelValue 时的显示状态
  indeterminate: Boolean,
  disabled: Boolean,
  trueValue: [String, Number, Boolean],
  falseValue: [String, Number, Boolean]
};
var vt = {
  "update:modelValue": (r) => r,
  Change: (r) => r
};
var bt = ["checked", "disabled"];
var wt = { key: 0 };
var kt = defineComponent({
  name: "BCheckbox",
  __name: "checkbox",
  props: gt,
  emits: vt,
  setup(r, { emit: e }) {
    const t = R("checkbox"), n = r, s = e, { label: i, color: a, size: o, disabled: l } = n, c = computed(() => ({
      "--checkbox-color": a || "#bebe",
      "--checkbox-size": o || "12px"
    })), d = computed(() => typeof n.modelValue == "boolean" ? n.modelValue : n.checked), p = ref(null);
    onMounted(() => {
      p.value && (p.value.indeterminate = n.indeterminate);
    }), watch(() => n.indeterminate, (F) => {
      p.value && (p.value.indeterminate = F);
    });
    const S = (F) => {
      const f = F.target.checked;
      let b;
      typeof n.modelValue == "boolean" ? b = f : b = f ? n.trueValue ?? true : n.falseValue ?? false, s("update:modelValue", b), s("Change", f);
    };
    return (F, h2) => (openBlock(), createElementBlock("label", {
      class: normalizeClass(unref(t).b()),
      style: normalizeStyle(c.value)
    }, [
      createBaseVNode("input", {
        ref_key: "inputRef",
        ref: p,
        type: "checkbox",
        style: { display: "none" },
        checked: d.value,
        disabled: unref(l),
        onChange: S
      }, null, 40, bt),
      h2[0] || (h2[0] = createBaseVNode("span", { class: "b-custom-checkbox" }, null, -1)),
      F.$slots.default || unref(i) ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(t).b("label"))
      }, [
        renderSlot(F.$slots, "default", {}, () => [
          unref(i) ? (openBlock(), createElementBlock("span", wt, toDisplayString(unref(i)), 1)) : createCommentVNode("", true)
        ], true)
      ], 2)) : createCommentVNode("", true)
    ], 6));
  }
});
var Ft = De(kt, [["__scopeId", "data-v-769857f0"]]);
var Me = D(Ft);
var St = {
  prop: {
    type: String,
    default: ""
  },
  label: String,
  // 表单项标签
  rules: [Object, Array],
  // 校验规则,  可以是数组写法也可以是对象写法
  showMessage: {
    type: Boolean,
    default: true
  }
  // 是否显示校验错误信息
};
var ze = Symbol();
var _t = {
  model: Object,
  rules: Object,
  showMessage: {
    type: Boolean,
    default: true
  }
};
var Ie = Symbol();
function te() {
  return te = Object.assign ? Object.assign.bind() : function(r) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (r[n] = t[n]);
    }
    return r;
  }, te.apply(this, arguments);
}
function Bt(r, e) {
  r.prototype = Object.create(e.prototype), r.prototype.constructor = r, fe(r, e);
}
function Fe(r) {
  return Fe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, Fe(r);
}
function fe(r, e) {
  return fe = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, s) {
    return n.__proto__ = s, n;
  }, fe(r, e);
}
function Et() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return false;
  if (typeof Proxy == "function") return true;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), true;
  } catch {
    return false;
  }
}
function ve(r, e, t) {
  return Et() ? ve = Reflect.construct.bind() : ve = function(s, i, a) {
    var o = [null];
    o.push.apply(o, i);
    var l = Function.bind.apply(s, o), c = new l();
    return a && fe(c, a.prototype), c;
  }, ve.apply(null, arguments);
}
function $t(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function Se(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Se = function(n) {
    if (n === null || !$t(n)) return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n)) return e.get(n);
      e.set(n, s);
    }
    function s() {
      return ve(n, arguments, Fe(this).constructor);
    }
    return s.prototype = Object.create(n.prototype, {
      constructor: {
        value: s,
        enumerable: false,
        writable: true,
        configurable: true
      }
    }), fe(s, n);
  }, Se(r);
}
var Ot = /%[sdj%]/g;
var Ue = function() {
};
typeof process < "u" && process.env && true && typeof window < "u" && typeof document < "u" && (Ue = function(e, t) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && t.every(function(n) {
    return typeof n == "string";
  }) && console.warn(e, t);
});
function _e(r) {
  if (!r || !r.length) return null;
  var e = {};
  return r.forEach(function(t) {
    var n = t.field;
    e[n] = e[n] || [], e[n].push(t);
  }), e;
}
function I(r) {
  for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    t[n - 1] = arguments[n];
  var s = 0, i = t.length;
  if (typeof r == "function")
    return r.apply(null, t);
  if (typeof r == "string") {
    var a = r.replace(Ot, function(o) {
      if (o === "%%")
        return "%";
      if (s >= i)
        return o;
      switch (o) {
        case "%s":
          return String(t[s++]);
        case "%d":
          return Number(t[s++]);
        case "%j":
          try {
            return JSON.stringify(t[s++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return o;
      }
    });
    return a;
  }
  return r;
}
function xt(r) {
  return r === "string" || r === "url" || r === "hex" || r === "email" || r === "date" || r === "pattern";
}
function N(r, e) {
  return !!(r == null || e === "array" && Array.isArray(r) && !r.length || xt(e) && typeof r == "string" && !r);
}
function qt(r, e, t) {
  var n = [], s = 0, i = r.length;
  function a(o) {
    n.push.apply(n, o || []), s++, s === i && t(n);
  }
  r.forEach(function(o) {
    e(o, a);
  });
}
function Ve(r, e, t) {
  var n = 0, s = r.length;
  function i(a) {
    if (a && a.length) {
      t(a);
      return;
    }
    var o = n;
    n = n + 1, o < s ? e(r[o], i) : t([]);
  }
  i([]);
}
function Pt(r) {
  var e = [];
  return Object.keys(r).forEach(function(t) {
    e.push.apply(e, r[t] || []);
  }), e;
}
var Ae = function(r) {
  Bt(e, r);
  function e(t, n) {
    var s;
    return s = r.call(this, "Async Validation Error") || this, s.errors = t, s.fields = n, s;
  }
  return e;
}(Se(Error));
function Vt(r, e, t, n, s) {
  if (e.first) {
    var i = new Promise(function(S, F) {
      var h2 = function(m) {
        return n(m), m.length ? F(new Ae(m, _e(m))) : S(s);
      }, f = Pt(r);
      Ve(f, t, h2);
    });
    return i.catch(function(S) {
      return S;
    }), i;
  }
  var a = e.firstFields === true ? Object.keys(r) : e.firstFields || [], o = Object.keys(r), l = o.length, c = 0, d = [], p = new Promise(function(S, F) {
    var h2 = function(b) {
      if (d.push.apply(d, b), c++, c === l)
        return n(d), d.length ? F(new Ae(d, _e(d))) : S(s);
    };
    o.length || (n(d), S(s)), o.forEach(function(f) {
      var b = r[f];
      a.indexOf(f) !== -1 ? Ve(b, t, h2) : qt(b, t, h2);
    });
  });
  return p.catch(function(S) {
    return S;
  }), p;
}
function At(r) {
  return !!(r && r.message !== void 0);
}
function Ct(r, e) {
  for (var t = r, n = 0; n < e.length; n++) {
    if (t == null)
      return t;
    t = t[e[n]];
  }
  return t;
}
function Ce(r, e) {
  return function(t) {
    var n;
    return r.fullFields ? n = Ct(e, r.fullFields) : n = e[t.field || r.fullField], At(t) ? (t.field = t.field || r.fullField, t.fieldValue = n, t) : {
      message: typeof t == "function" ? t() : t,
      fieldValue: n,
      field: t.field || r.fullField
    };
  };
}
function Ne(r, e) {
  if (e) {
    for (var t in e)
      if (e.hasOwnProperty(t)) {
        var n = e[t];
        typeof n == "object" && typeof r[t] == "object" ? r[t] = te({}, r[t], n) : r[t] = n;
      }
  }
  return r;
}
var He = function(e, t, n, s, i, a) {
  e.required && (!n.hasOwnProperty(e.field) || N(t, a || e.type)) && s.push(I(i.messages.required, e.fullField));
};
var Nt = function(e, t, n, s, i) {
  (/^\s+$/.test(t) || t === "") && s.push(I(i.messages.whitespace, e.fullField));
};
var me;
var Tt = function() {
  if (me)
    return me;
  var r = "[a-fA-F\\d:]", e = function(x) {
    return x && x.includeBoundaries ? "(?:(?<=\\s|^)(?=" + r + ")|(?<=" + r + ")(?=\\s|$))" : "";
  }, t = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", n = "[a-fA-F\\d]{1,4}", s = (`
(?:
(?:` + n + ":){7}(?:" + n + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + n + ":){6}(?:" + t + "|:" + n + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + n + ":){5}(?::" + t + "|(?::" + n + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + n + ":){4}(?:(?::" + n + "){0,1}:" + t + "|(?::" + n + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + n + ":){3}(?:(?::" + n + "){0,2}:" + t + "|(?::" + n + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + n + ":){2}(?:(?::" + n + "){0,3}:" + t + "|(?::" + n + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + n + ":){1}(?:(?::" + n + "){0,4}:" + t + "|(?::" + n + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + n + "){0,5}:" + t + "|(?::" + n + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), i = new RegExp("(?:^" + t + "$)|(?:^" + s + "$)"), a = new RegExp("^" + t + "$"), o = new RegExp("^" + s + "$"), l = function(x) {
    return x && x.exact ? i : new RegExp("(?:" + e(x) + t + e(x) + ")|(?:" + e(x) + s + e(x) + ")", "g");
  };
  l.v4 = function(B) {
    return B && B.exact ? a : new RegExp("" + e(B) + t + e(B), "g");
  }, l.v6 = function(B) {
    return B && B.exact ? o : new RegExp("" + e(B) + s + e(B), "g");
  };
  var c = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", p = l.v4().source, S = l.v6().source, F = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h2 = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", f = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', j = "(?:" + c + "|www\\.)" + d + "(?:localhost|" + p + "|" + S + "|" + F + h2 + f + ")" + b + m;
  return me = new RegExp("(?:^" + j + "$)", "i"), me;
};
var Te = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
};
var le = {
  integer: function(e) {
    return le.number(e) && parseInt(e, 10) === e;
  },
  float: function(e) {
    return le.number(e) && !le.integer(e);
  },
  array: function(e) {
    return Array.isArray(e);
  },
  regexp: function(e) {
    if (e instanceof RegExp)
      return true;
    try {
      return !!new RegExp(e);
    } catch {
      return false;
    }
  },
  date: function(e) {
    return typeof e.getTime == "function" && typeof e.getMonth == "function" && typeof e.getYear == "function" && !isNaN(e.getTime());
  },
  number: function(e) {
    return isNaN(e) ? false : typeof e == "number";
  },
  object: function(e) {
    return typeof e == "object" && !le.array(e);
  },
  method: function(e) {
    return typeof e == "function";
  },
  email: function(e) {
    return typeof e == "string" && e.length <= 320 && !!e.match(Te.email);
  },
  url: function(e) {
    return typeof e == "string" && e.length <= 2048 && !!e.match(Tt());
  },
  hex: function(e) {
    return typeof e == "string" && !!e.match(Te.hex);
  }
};
var Rt = function(e, t, n, s, i) {
  if (e.required && t === void 0) {
    He(e, t, n, s, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = e.type;
  a.indexOf(o) > -1 ? le[o](t) || s.push(I(i.messages.types[o], e.fullField, e.type)) : o && typeof t !== e.type && s.push(I(i.messages.types[o], e.fullField, e.type));
};
var jt = function(e, t, n, s, i) {
  var a = typeof e.len == "number", o = typeof e.min == "number", l = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = t, p = null, S = typeof t == "number", F = typeof t == "string", h2 = Array.isArray(t);
  if (S ? p = "number" : F ? p = "string" : h2 && (p = "array"), !p)
    return false;
  h2 && (d = t.length), F && (d = t.replace(c, "_").length), a ? d !== e.len && s.push(I(i.messages[p].len, e.fullField, e.len)) : o && !l && d < e.min ? s.push(I(i.messages[p].min, e.fullField, e.min)) : l && !o && d > e.max ? s.push(I(i.messages[p].max, e.fullField, e.max)) : o && l && (d < e.min || d > e.max) && s.push(I(i.messages[p].range, e.fullField, e.min, e.max));
};
var ne = "enum";
var Lt = function(e, t, n, s, i) {
  e[ne] = Array.isArray(e[ne]) ? e[ne] : [], e[ne].indexOf(t) === -1 && s.push(I(i.messages[ne], e.fullField, e[ne].join(", ")));
};
var Kt = function(e, t, n, s, i) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(t) || s.push(I(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(t) || s.push(I(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    }
  }
};
var O = {
  required: He,
  whitespace: Nt,
  type: Rt,
  range: jt,
  enum: Lt,
  pattern: Kt
};
var Dt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t, "string") && !e.required)
      return n();
    O.required(e, t, s, a, i, "string"), N(t, "string") || (O.type(e, t, s, a, i), O.range(e, t, s, a, i), O.pattern(e, t, s, a, i), e.whitespace === true && O.whitespace(e, t, s, a, i));
  }
  n(a);
};
var Mt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O.type(e, t, s, a, i);
  }
  n(a);
};
var zt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (t === "" && (t = void 0), N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
};
var It = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O.type(e, t, s, a, i);
  }
  n(a);
};
var Ut = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), N(t) || O.type(e, t, s, a, i);
  }
  n(a);
};
var Ht = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
};
var Wt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
};
var Yt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (t == null && !e.required)
      return n();
    O.required(e, t, s, a, i, "array"), t != null && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
};
var Jt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O.type(e, t, s, a, i);
  }
  n(a);
};
var Zt = "enum";
var Xt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O[Zt](e, t, s, a, i);
  }
  n(a);
};
var Gt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t, "string") && !e.required)
      return n();
    O.required(e, t, s, a, i), N(t, "string") || O.pattern(e, t, s, a, i);
  }
  n(a);
};
var Qt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t, "date") && !e.required)
      return n();
    if (O.required(e, t, s, a, i), !N(t, "date")) {
      var l;
      t instanceof Date ? l = t : l = new Date(t), O.type(e, l, s, a, i), l && O.range(e, l.getTime(), s, a, i);
    }
  }
  n(a);
};
var en = function(e, t, n, s, i) {
  var a = [], o = Array.isArray(t) ? "array" : typeof t;
  O.required(e, t, s, a, i, o), n(a);
};
var ke = function(e, t, n, s, i) {
  var a = e.type, o = [], l = e.required || !e.required && s.hasOwnProperty(e.field);
  if (l) {
    if (N(t, a) && !e.required)
      return n();
    O.required(e, t, s, o, i, a), N(t, a) || O.type(e, t, s, o, i);
  }
  n(o);
};
var tn = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i);
  }
  n(a);
};
var de = {
  string: Dt,
  method: Mt,
  number: zt,
  boolean: It,
  regexp: Ut,
  integer: Ht,
  float: Wt,
  array: Yt,
  object: Jt,
  enum: Xt,
  pattern: Gt,
  date: Qt,
  url: ke,
  hex: ke,
  email: ke,
  required: en,
  any: tn
};
function Be() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var e = JSON.parse(JSON.stringify(this));
      return e.clone = this.clone, e;
    }
  };
}
var Ee = Be();
var ye = function() {
  function r(t) {
    this.rules = null, this._messages = Ee, this.define(t);
  }
  var e = r.prototype;
  return e.define = function(n) {
    var s = this;
    if (!n)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof n != "object" || Array.isArray(n))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(n).forEach(function(i) {
      var a = n[i];
      s.rules[i] = Array.isArray(a) ? a : [a];
    });
  }, e.messages = function(n) {
    return n && (this._messages = Ne(Be(), n)), this._messages;
  }, e.validate = function(n, s, i) {
    var a = this;
    s === void 0 && (s = {}), i === void 0 && (i = function() {
    });
    var o = n, l = s, c = i;
    if (typeof l == "function" && (c = l, l = {}), !this.rules || Object.keys(this.rules).length === 0)
      return c && c(null, o), Promise.resolve(o);
    function d(f) {
      var b = [], m = {};
      function j(x) {
        if (Array.isArray(x)) {
          var _;
          b = (_ = b).concat.apply(_, x);
        } else
          b.push(x);
      }
      for (var B = 0; B < f.length; B++)
        j(f[B]);
      b.length ? (m = _e(b), c(b, m)) : c(null, o);
    }
    if (l.messages) {
      var p = this.messages();
      p === Ee && (p = Be()), Ne(p, l.messages), l.messages = p;
    } else
      l.messages = this.messages();
    var S = {}, F = l.keys || Object.keys(this.rules);
    F.forEach(function(f) {
      var b = a.rules[f], m = o[f];
      b.forEach(function(j) {
        var B = j;
        typeof B.transform == "function" && (o === n && (o = te({}, o)), m = o[f] = B.transform(m)), typeof B == "function" ? B = {
          validator: B
        } : B = te({}, B), B.validator = a.getValidationMethod(B), B.validator && (B.field = f, B.fullField = B.fullField || f, B.type = a.getType(B), S[f] = S[f] || [], S[f].push({
          rule: B,
          value: m,
          source: o,
          field: f
        }));
      });
    });
    var h2 = {};
    return Vt(S, l, function(f, b) {
      var m = f.rule, j = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      j = j && (m.required || !m.required && f.value), m.field = f.field;
      function B($, H) {
        return te({}, H, {
          fullField: m.fullField + "." + $,
          fullFields: m.fullFields ? [].concat(m.fullFields, [$]) : [$]
        });
      }
      function x($) {
        $ === void 0 && ($ = []);
        var H = Array.isArray($) ? $ : [$];
        !l.suppressWarning && H.length && r.warning("async-validator:", H), H.length && m.message !== void 0 && (H = [].concat(m.message));
        var W = H.map(Ce(m, o));
        if (l.first && W.length)
          return h2[m.field] = 1, b(W);
        if (!j)
          b(W);
        else {
          if (m.required && !f.value)
            return m.message !== void 0 ? W = [].concat(m.message).map(Ce(m, o)) : l.error && (W = [l.error(m, I(l.messages.required, m.field))]), b(W);
          var Q = {};
          m.defaultField && Object.keys(f.value).map(function(U) {
            Q[U] = m.defaultField;
          }), Q = te({}, Q, f.rule.fields);
          var ie = {};
          Object.keys(Q).forEach(function(U) {
            var M = Q[U], oe = Array.isArray(M) ? M : [M];
            ie[U] = oe.map(B.bind(null, U));
          });
          var he = new r(ie);
          he.messages(l.messages), f.rule.options && (f.rule.options.messages = l.messages, f.rule.options.error = l.error), he.validate(f.value, f.rule.options || l, function(U) {
            var M = [];
            W && W.length && M.push.apply(M, W), U && U.length && M.push.apply(M, U), b(M.length ? M : null);
          });
        }
      }
      var _;
      if (m.asyncValidator)
        _ = m.asyncValidator(m, f.value, x, f.source, l);
      else if (m.validator) {
        try {
          _ = m.validator(m, f.value, x, f.source, l);
        } catch ($) {
          console.error == null || console.error($), l.suppressValidatorError || setTimeout(function() {
            throw $;
          }, 0), x($.message);
        }
        _ === true ? x() : _ === false ? x(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : _ instanceof Array ? x(_) : _ instanceof Error && x(_.message);
      }
      _ && _.then && _.then(function() {
        return x();
      }, function($) {
        return x($);
      });
    }, function(f) {
      d(f);
    }, o);
  }, e.getType = function(n) {
    if (n.type === void 0 && n.pattern instanceof RegExp && (n.type = "pattern"), typeof n.validator != "function" && n.type && !de.hasOwnProperty(n.type))
      throw new Error(I("Unknown rule type %s", n.type));
    return n.type || "string";
  }, e.getValidationMethod = function(n) {
    if (typeof n.validator == "function")
      return n.validator;
    var s = Object.keys(n), i = s.indexOf("message");
    return i !== -1 && s.splice(i, 1), s.length === 1 && s[0] === "required" ? de.required : de[this.getType(n)] || void 0;
  }, r;
}();
ye.register = function(e, t) {
  if (typeof t != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  de[e] = t;
};
ye.warning = Ue;
ye.messages = Ee;
ye.validators = de;
var nn = defineComponent({
  name: "BFormItem",
  __name: "form-item",
  props: St,
  setup(r) {
    const e = R("form-item"), t = r, n = ref(""), s = ref(""), i = inject(Ie);
    onMounted(() => {
      i == null || i.addField(S);
    });
    function a(F) {
      return F ? Array.isArray(F) ? F : [F] : [];
    }
    const o = computed(() => {
      const F = a(t.rules), h2 = i == null ? void 0 : i.rules;
      if (h2 && t.prop) {
        const f = h2[t.prop];
        f && F.push(...a(f));
      }
      return F;
    });
    function l(F) {
      return o.value.filter((f) => {
        const b = f.trigger;
        return !b || !f.trigger ? true : Array.isArray(b) ? b.includes(F) : b === F;
      });
    }
    function c() {
      n.value = "success";
    }
    function d(F) {
      n.value = "error";
      const { errors: h2 } = F;
      s.value = h2 ? h2[0].message : "验证失败";
    }
    const S = {
      // 传入所有的上下文
      ...t,
      // 直接...props会失去响应式 ...toRefs(props)但这样以后都会多一个.value  在最外层加上reactive就可以避免.value
      validate: async (F, h2) => {
        const f = l(F), b = t.prop, m = new ye({
          // [要校验的项]: 校验规则
          [b]: f
        }), j = i == null ? void 0 : i.model;
        return j ? m.validate({
          [b]: j[b]
          // 要校验form绑定的有效值, 有就校验对应的值，没有就undefined不校验了
        }).then(() => {
          c();
        }).catch((B) => (d(B), Promise.reject(B))) : Promise.reject("no model");
      }
    };
    return provide(ze, S), (F, h2) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([
        unref(e).b(),
        unref(e).is("success", n.value === "success"),
        unref(e).is("error", n.value === "error")
      ])
    }, [
      createBaseVNode("label", {
        class: normalizeClass(unref(e).e("label"))
      }, [
        renderSlot(F.$slots, "label", {}, () => [
          createTextVNode(toDisplayString(F.label), 1)
        ])
      ], 2),
      createBaseVNode("div", {
        class: normalizeClass(unref(e).e("content"))
      }, [
        renderSlot(F.$slots, "default"),
        n.value === "error" ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(unref(e).e("error"))
        }, [
          renderSlot(F.$slots, "error", {}, () => [
            createTextVNode(toDisplayString(s.value), 1)
          ])
        ], 2)) : n.value === "success" ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: normalizeClass(unref(e).e("success"))
        }, [
          renderSlot(F.$slots, "success", {}, () => [
            createVNode(unref(se), null, {
              default: withCtx(() => h2[0] || (h2[0] = [
                createTextVNode("OK")
              ])),
              _: 1
            })
          ])
        ], 2)) : createCommentVNode("", true)
      ], 2)
    ], 2));
  }
});
var rn = defineComponent({
  name: "BForm",
  __name: "form",
  props: _t,
  setup(r, { expose: e }) {
    const t = R("form"), n = r, s = async (l) => {
      let c = [];
      for (const d of i)
        try {
          await d.validate("");
        } catch (p) {
          c = {
            ...c,
            ...p.fields
          };
        }
      return Object.keys(c).length ? l ? l == null ? void 0 : l(false, c) : Promise.reject(c) : l ? l(true) : Promise.resolve(true);
    }, i = [], o = {
      ...n,
      addField: (l) => {
        i.push(l);
      }
    };
    return provide(Ie, o), e({
      formValidate: s
    }), (l, c) => (openBlock(), createElementBlock("form", {
      class: normalizeClass(unref(t).b())
    }, [
      renderSlot(l.$slots, "default")
    ], 2));
  }
});
var sn = D(nn);
var an = D(rn);
Object.freeze({});
Object.freeze([]);
var z = () => {
};
var on = Object.prototype.hasOwnProperty;
var ur = (r, e) => on.call(r, e);
var Re = (r) => typeof r == "string";
var ln = {
  type: {
    // 原生input类型
    type: String,
    default: "text"
  },
  modelValue: {
    // 绑定的值
    type: [String, Number],
    default: ""
  },
  placeholder: {
    // 占位符
    type: String,
    default: ""
  },
  label: {
    // 标签内容
    type: String,
    default: ""
  },
  showPassword: Boolean,
  // 展示密码
  clearable: Boolean,
  // 一键清除
  disabled: Boolean,
  // 禁用
  readonly: Boolean,
  // 只读
  resize: Boolean
  // 可缩放
};
var un = {
  "update:modelValue": (r) => r,
  // 双向绑定事件
  input: (r) => Re(r),
  // 边输入边触发
  change: (r) => Re(r),
  // 失去焦点触发
  focus: (r) => r instanceof FocusEvent,
  blur: (r) => r instanceof FocusEvent,
  clear: () => true
  // 清空事件
};
var cn = ["type", "placeholder", "clearable", "disabled", "readonly"];
var dn = defineComponent({
  name: "BInput",
  inheritAttrs: false,
  __name: "input",
  props: ln,
  emits: un,
  setup(r, { emit: e }) {
    const t = R("input"), n = r, s = e, i = useAttrs(), a = useSlots(), o = useTemplateRef("input"), l = ref(false), c = inject(ze);
    function d(_) {
      const $ = o.value;
      $ && ($.value = String(n.modelValue));
    }
    function p() {
      nextTick(() => {
        var _;
        (_ = o.value) == null || _.focus();
      });
    }
    const S = computed(() => n.modelValue && n.showPassword && !n.disabled && !n.readonly), F = computed(() => n.modelValue && n.clearable && !n.disabled && !n.readonly);
    function h2() {
      l.value = !l.value, p();
    }
    function f() {
      const _ = o.value;
      _ && (_.value = ""), p();
    }
    function b(_) {
      const $ = _.target.value;
      s("input", $), s("update:modelValue", $);
    }
    function m(_) {
      const $ = _.target.value;
      s("change", $);
    }
    function j(_) {
      c == null || c.validate("blur").catch(($) => {
        console.log($.errors);
      }), s("blur", _);
    }
    function B(_) {
      s("clear");
    }
    function x(_) {
      s("focus", _);
    }
    return watch(
      () => n.modelValue,
      (_) => {
        c == null || c.validate("change").catch(($) => {
          console.log($);
        }), d();
      }
    ), (_, $) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b()])
    }, [
      unref(a).prefix ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(t).e("prefix"))
      }, [
        renderSlot(_.$slots, "prefix")
      ], 2)) : createCommentVNode("", true),
      createBaseVNode("label", null, [
        createTextVNode(toDisplayString(_.label) + " ", 1),
        createBaseVNode("input", mergeProps({
          class: unref(t).e("inner"),
          type: _.showPassword ? l.value ? "text" : "password" : _.type
        }, unref(i), {
          placeholder: _.placeholder,
          clearable: _.clearable,
          disabled: _.disabled,
          readonly: _.readonly,
          onInput: b,
          onChange: m,
          onBlur: j,
          onClear: B,
          onFocus: x,
          ref_key: "input",
          ref: o
        }), null, 16, cn)
      ]),
      unref(a).suffix ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(unref(t).e("suffix"))
      }, [
        renderSlot(_.$slots, "suffix"),
        S.value ? (openBlock(), createBlock(unref(se), {
          key: 0,
          onClick: h2
        }, {
          default: withCtx(() => $[0] || ($[0] = [
            createTextVNode("E")
          ])),
          _: 1
        })) : createCommentVNode("", true),
        F.value ? (openBlock(), createBlock(unref(se), {
          key: 1,
          onClick: f
        }, {
          default: withCtx(() => $[1] || ($[1] = [
            createTextVNode("X")
          ])),
          _: 1
        })) : createCommentVNode("", true)
      ], 2)) : createCommentVNode("", true)
    ], 2));
  }
});
var fn = D(dn);
var pn = {
  type: {
    type: String,
    default: "line"
  },
  percentage: {
    type: Number,
    default: 50
  },
  width: {
    type: Number,
    default: 200
  },
  circleWidth: {
    type: Number,
    default: 10
  },
  radius: {
    type: Number,
    default: 100
  },
  height: {
    type: Number,
    default: 10
  },
  status: {
    type: String,
    default: "success"
  },
  color: {
    type: String,
    default: "#bebe"
  },
  indeterminate: Boolean,
  // 动画
  showPercentage: Boolean
  // 显示进度
};
var yn = ["aria-valuenow"];
var hn = { key: 1 };
var mn = ["width", "height"];
var gn = ["cx", "cy", "r", "stroke-width"];
var vn = ["cx", "cy", "r", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-width"];
var bn = { key: 2 };
var wn = ["width", "height"];
var kn = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width"];
var Fn = ["cx", "cy", "r", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-width"];
var Sn = defineComponent({
  name: "BProgress",
  __name: "progress",
  props: pn,
  setup(r) {
    const e = R("progress"), t = r, { circleWidth: n, radius: s } = t;
    let i = ref(t.percentage);
    const a = computed(() => s * 2 + n * 2), o = computed(() => s + n), l = computed(() => t.type === "dashboard" ? 6.28 * (270 / 360) * s : 6.28 * s), c = computed(() => l.value - i.value / 100 * l.value);
    return (d, p) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(e).b())
    }, [
      d.type === "line" ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(unref(e).e("line-background")),
        style: normalizeStyle({ height: d.height + "px", width: d.width + "px" })
      }, [
        createBaseVNode("div", {
          role: "progressbar",
          "aria-valuemin": "0",
          "aria-valuemax": "100",
          "aria-valuenow": unref(i),
          class: normalizeClass([
            unref(e).e("line"),
            unref(e).is("success", d.status === "success"),
            unref(e).is("warning", d.status === "warning"),
            unref(e).is("error", d.status === "error"),
            unref(e).is("indeterminate", d.indeterminate)
          ]),
          style: normalizeStyle({
            width: unref(i) + "%",
            background: d.color,
            height: "100%"
          })
        }, null, 14, yn)
      ], 6)) : d.type === "circle" ? (openBlock(), createElementBlock("div", hn, [
        (openBlock(), createElementBlock("svg", {
          width: a.value,
          height: a.value
        }, [
          createBaseVNode("circle", {
            class: normalizeClass(unref(e).e("circle-background")),
            cx: o.value,
            cy: o.value,
            r: unref(s),
            "stroke-width": unref(n)
          }, null, 10, gn),
          createBaseVNode("circle", {
            class: normalizeClass([unref(e).e("circle"), unref(e).is("indeterminate", d.indeterminate)]),
            cx: o.value,
            cy: o.value,
            r: unref(s),
            stroke: d.color,
            style: normalizeStyle({ transformOrigin: `${o.value}px ${o.value}px` }),
            "stroke-dasharray": l.value,
            "stroke-dashoffset": c.value,
            "stroke-width": unref(n)
          }, null, 14, vn)
        ], 8, mn))
      ])) : d.type === "dashboard" ? (openBlock(), createElementBlock("div", bn, [
        (openBlock(), createElementBlock("svg", {
          width: a.value,
          height: a.value
        }, [
          createBaseVNode("circle", {
            class: normalizeClass(unref(e).e("dashboard-background")),
            cx: o.value,
            cy: o.value,
            r: unref(s),
            style: normalizeStyle({ transformOrigin: `${o.value}px ${o.value}px` }),
            "stroke-dasharray": 6.28 * unref(s),
            "stroke-dashoffset": 11 * unref(s),
            "stroke-width": unref(n)
          }, null, 14, kn),
          createBaseVNode("circle", {
            class: normalizeClass([unref(e).e("dashboard"), unref(e).is("indeterminate", d.indeterminate)]),
            cx: o.value,
            cy: o.value,
            r: unref(s),
            stroke: d.color,
            style: normalizeStyle({ transformOrigin: `${o.value}px ${o.value}px` }),
            "stroke-dasharray": l.value,
            "stroke-dashoffset": c.value,
            "stroke-width": unref(n)
          }, null, 14, Fn)
        ], 8, wn))
      ])) : createCommentVNode("", true),
      createBaseVNode("span", {
        class: normalizeClass([unref(e).e("text"), unref(e).is(d.type, true)])
      }, toDisplayString(unref(i)) + "%", 3)
    ], 2));
  }
});
var _n = D(Sn);
var Bn = {
  multiple: Boolean,
  disabled: Boolean,
  placeholder: String,
  size: [Number, String]
};
var En = {
  placement: {
    type: String,
    default: "bottom"
  },
  // 弹出方向
  light: Boolean,
  content: {
    type: String,
    default: ""
  }
  // 提示框内容
};
var $n = defineComponent({
  name: "BTooltip",
  __name: "tooltip",
  props: En,
  setup(r) {
    const e = R("tooltip");
    return (t, n) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(e).b())
    }, [
      renderSlot(t.$slots, "default"),
      createBaseVNode("div", {
        class: normalizeClass([unref(e).e("content"), unref(e).is(t.placement, true), unref(e).is("light", t.light)])
      }, toDisplayString(t.content), 3)
    ], 2));
  }
});
var We = D($n);
var On = defineComponent({
  name: "BSelect",
  __name: "select",
  props: Bn,
  setup(r) {
    const e = r, { multiple: t, disabled: n, placeholder: s, size: i } = e;
    return (a, o) => (openBlock(), createElementBlock("select", null, [
      createVNode(unref(We), null, {
        default: withCtx(() => [
          renderSlot(a.$slots, "default")
        ]),
        _: 3
      })
    ]));
  }
});
var xn = D(On);
var qn = {
  modelValue: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  activeColor: {
    type: String,
    default: "#BEBE"
  },
  inactiveColor: {
    type: String,
    default: "#C0CCDA"
  },
  activeText: {
    type: String,
    default: ""
  },
  inactiveText: {
    type: String,
    default: ""
  }
};
var Pn = {
  "update:modelValue": (r) => r
};
var Vn = defineComponent({
  name: "BSwitch",
  __name: "switch",
  props: qn,
  emits: Pn,
  setup(r, { emit: e }) {
    const t = R("switch"), n = r, s = e, i = () => {
      n.disabled || s("update:modelValue", !n.modelValue);
    };
    return (a, o) => (openBlock(), createElementBlock("label", {
      class: normalizeClass([unref(t).b(), unref(t).is("active", a.modelValue), unref(t).is("disabled", a.disabled)]),
      style: normalizeStyle({ background: a.modelValue ? a.activeColor : a.inactiveColor })
    }, [
      createBaseVNode("input", {
        type: "checkbox",
        style: { display: "none" },
        onChange: i
      }, null, 32),
      createBaseVNode("div", {
        class: normalizeClass([unref(t).e("core"), unref(t).is("active", a.modelValue)])
      }, null, 2),
      a.modelValue ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(unref(t).e("active-text"))
      }, toDisplayString(a.activeText), 3)) : (openBlock(), createElementBlock("span", {
        key: 1,
        class: normalizeClass(unref(t).e("inactive-text"))
      }, toDisplayString(a.inactiveText), 3))
    ], 6));
  }
});
var An = D(Vn);
var Cn = 0;
var Nn = () => Cn++;
var Ye = {
  // 给别人用的 props通过对象生成类型
  fileList: {
    type: Array,
    // 只写Array是不会有类型提示的
    default: () => []
    // as const: 不要把它推断成never[]、any[]什么的，它就是[]
    // 要注意类型是只读的（尤其是联合类型或字面量类型时），否则 props 校验会不通过或失去提示。
    // 这样别人在里面写'file'就可以推断出类型叫'file'，而不是报错：不支持string类型
  },
  action: {
    // 上传路径
    type: String,
    default: ""
  },
  name: {
    // 上传名字
    type: String,
    default: "file"
  },
  accept: {
    // 接受上传的文件类型
    type: String,
    default: ""
  },
  method: {
    // 请求类型
    type: String,
    default: "POST"
  },
  headers: {
    // HTTP请求头
    type: Headers,
    default: () => ({})
  },
  data: {
    // 上传时的附带参数
    type: Object,
    default: () => ({})
  },
  listType: {
    type: String,
    default: "text"
  },
  multiple: Boolean,
  // 是否支持多文件上传
  limit: Number,
  // 最大上传文件数
  disabled: Boolean,
  // 禁用上传
  drag: Boolean,
  // 拖拽上传
  showList: {
    type: Boolean,
    default: true
  }
  // 显示文件列表
};
var Je = {
  ...Ye,
  beforeUpload: {
    type: Function,
    default: z
  },
  beforeRemove: {
    type: Function,
    default: z
  },
  onPreview: {
    type: Function,
    default: z
  },
  onChange: {
    type: Function,
    default: z
  },
  onRemove: {
    type: Function,
    default: z
  },
  onProgress: {
    type: Function,
    default: z
  },
  onSuccess: {
    type: Function,
    default: z
  },
  onError: {
    type: Function,
    default: z
  }
};
var Tn = {
  ...Ye,
  beforeUpload: Je.beforeUpload,
  onStart: {
    type: Function,
    default: z
  },
  onProgress: {
    type: Function,
    default: z
  },
  onRemove: {
    type: Function,
    default: z
  },
  onSuccess: {
    type: Function,
    default: z
  },
  onError: {
    type: Function,
    default: z
  }
};
function Rn(r) {
  const e = new XMLHttpRequest(), t = r.action, n = r.method;
  if (e.open(n, t), e.upload.addEventListener("progress", (a) => {
    const o = a;
    o.percentage = a.total > 0 ? a.loaded / a.total * 100 : 0, r.onProgress(o);
  }), r.headers)
    for (const [a, o] of Object.entries(r.headers))
      e.setRequestHeader(a, o);
  const i = new FormData();
  if (r.data)
    for (const [a, o] of Object.entries(r.data))
      i.append(a, o);
  return i.append(r.name, r.file), e.onload = function() {
    e.status < 300 && e.status >= 200 ? r.onSuccess(e.response) : r.onError({
      status: e.status
    });
  }, e.send(i), e;
}
var jn = defineComponent({
  __name: "upload-dragger",
  emits: {},
  setup(r, { emit: e }) {
    const t = R("upload-dragger"), n = ref(false), s = e;
    function i() {
      n.value = true;
    }
    function a() {
      n.value = false;
    }
    function o(l) {
      var c;
      l.stopPropagation(), n.value = false, l.dataTransfer && (s("file", Array.from(l.dataTransfer.files)), console.log((c = l.dataTransfer) == null ? void 0 : c.files));
    }
    return (l, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(t).b(), unref(t).is("dragging", n.value)]),
      onDragover: withModifiers(i, ["prevent"]),
      onDragleave: withModifiers(a, ["prevent"]),
      onDrop: withModifiers(o, ["prevent"])
    }, [
      renderSlot(l.$slots, "default")
    ], 34));
  }
});
var Ln = ["name", "accept", "multiple", "disabled"];
var Kn = defineComponent({
  name: "BUploadContent",
  __name: "upload-content",
  props: Tn,
  setup(r) {
    const e = R("upload-content"), t = r, n = useTemplateRef("input");
    async function s(l) {
      if (!n.value) return;
      n.value.value = "";
      const c = await t.beforeUpload(l);
      if (console.log(c), c === false) return t.onRemove(l);
      const { method: d, name: p, action: S, headers: F, data: h2 } = t;
      Rn({
        method: d,
        name: p,
        file: l,
        action: S,
        headers: F,
        data: h2,
        onProgress: (f) => {
          t.onProgress(f, l);
        },
        onSuccess: (f) => {
          t.onSuccess(f, l);
        },
        onError: (f) => {
          t.onError(f, l);
        }
      });
    }
    function i(l) {
      for (let c = 0; c < l.length; c++) {
        const d = l[c];
        d.uid = Nn(), t.onStart(d), s(d);
      }
    }
    const a = (l) => {
      const c = l.target.files;
      c && i(c);
    }, o = () => {
      var l;
      (l = n.value) == null || l.click();
    };
    return (l, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass([unref(e).b(), unref(e).is("disabled", l.disabled)]),
      onClick: o
    }, [
      l.drag ? (openBlock(), createBlock(jn, {
        key: 0,
        onFile: i
      }, {
        default: withCtx(() => [
          renderSlot(l.$slots, "default")
        ]),
        _: 3
      })) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        renderSlot(l.$slots, "default"),
        createBaseVNode("input", {
          type: "file",
          ref: "input",
          name: l.name,
          accept: l.accept,
          multiple: l.multiple,
          onChange: a,
          disabled: l.disabled
        }, null, 40, Ln)
      ], 64))
    ], 2));
  }
});
var Dn = {
  fileList: {
    type: Array,
    default: () => []
  },
  listType: {
    type: String,
    default: "text"
  }
};
var Mn = {
  remove: (r) => r
};
var zn = {
  key: 0,
  style: { padding: "0 10px" }
};
var In = ["src"];
var Un = defineComponent({
  name: "BUploadList",
  __name: "upload-list",
  props: Dn,
  emits: Mn,
  setup(r, { emit: e }) {
    const t = R("upload-list"), n = r, s = e;
    function i(a) {
      console.log("click", a, n.fileList), s("remove", a);
    }
    return (a, o) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(t).b())
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(a.fileList, (l, c) => (openBlock(), createElementBlock("li", {
        class: normalizeClass(unref(t).e("item")),
        key: l.uid || l.name
      }, [
        createBaseVNode("div", {
          class: normalizeClass(unref(t).e("detail"))
        }, [
          renderSlot(a.$slots, "default", {
            file: l,
            index: c
          }, () => [
            renderSlot(a.$slots, "icon", {}, () => [
              a.listType === "text" ? (openBlock(), createElementBlock("span", zn, " ☰ ")) : createCommentVNode("", true)
            ]),
            a.listType === "image" ? (openBlock(), createElementBlock("img", {
              key: 0,
              class: normalizeClass(unref(t).e("file-image")),
              src: l.url || "",
              alt: "上传文件缩略图"
            }, null, 10, In)) : createCommentVNode("", true),
            createTextVNode(" " + toDisplayString(l.name), 1)
          ]),
          createBaseVNode("span", {
            class: normalizeClass(unref(t).e("file-size"))
          }, toDisplayString(l.size) + "bit", 3)
        ], 2),
        createVNode(unref(se), {
          class: normalizeClass(unref(t).e("delete-icon")),
          onClick: (d) => i(l.uid)
        }, {
          default: withCtx(() => o[0] || (o[0] = [
            createTextVNode("x")
          ])),
          _: 2
        }, 1032, ["class", "onClick"])
      ], 2))), 128))
    ], 2));
  }
});
var Hn = defineComponent({
  name: "BUpload",
  __name: "upload",
  props: Je,
  emits: {},
  setup(r, { emit: e }) {
    const t = R("upload"), n = r, s = e, i = ref(n.fileList), a = (c) => i.value.find((d) => d.uid === c.uid);
    watch(i, (c) => {
      s("onUpdate:file-list", c);
    });
    function o(c) {
      console.log("removed!"), i.value = i.value.filter((d) => d.uid != c);
    }
    const l = computed(() => ({
      ...n,
      onStart: (c) => {
        if (n.disabled) return;
        if (n.limit && i.value.length >= n.limit || !n.multiple && i.value.length == 1) {
          console.log("limited!");
          return;
        }
        console.log("start");
        const d = {
          uid: c.uid,
          name: c.name,
          percentage: 0,
          raw: c,
          size: c.size,
          status: "start"
        };
        d.url = URL.createObjectURL(c), i.value = [...i.value, d], n.onChange(d);
      },
      onProgress: (c, d) => {
        console.log("progress");
        const p = a(d);
        p && (p.status = "progress", p.percentage = c.percentage, n.onProgress(c, p, i.value));
      },
      onRemove: async (c) => {
        console.log("remove");
        const d = a(c);
        if (!d) return;
        if (d.status = "remove", await n.beforeRemove(d, i.value) === true) {
          const S = i.value;
          S.splice(S.indexOf(d), 1), n.onRemove(d, i.value);
        }
      },
      onSuccess: (c, d) => {
        console.log("success");
        const p = a(d);
        if (!p) return;
        p.status = "success";
        const S = i.value;
        n.onSuccess(c, p, S);
      },
      onError: (c, d) => {
        console.log("error");
        const p = a(d);
        if (!p) return;
        p.status = "error";
        const S = i.value;
        S.splice(S.indexOf(p), 1), n.onError(c, p, i.value);
      }
    }));
    return (c, d) => (openBlock(), createElementBlock(Fragment, null, [
      createBaseVNode("div", {
        class: normalizeClass([unref(t).b(), unref(t).is("disabled", c.disabled)])
      }, [
        createVNode(Kn, mergeProps(l.value, { disabled: c.disabled }), {
          default: withCtx((p) => [
            renderSlot(c.$slots, "default", { dragging: p }, () => [
              createBaseVNode("div", {
                class: normalizeClass(unref(t).e("default"))
              }, "Upload", 2)
            ])
          ]),
          _: 3
        }, 16, ["disabled"])
      ], 2),
      c.showList ? (openBlock(), createBlock(Un, {
        key: 0,
        "file-list": i.value,
        "list-type": c.listType,
        onRemove: o
      }, {
        default: withCtx(() => [
          renderSlot(c.$slots, "icon")
        ]),
        _: 3
      }, 8, ["file-list", "list-type"])) : createCommentVNode("", true)
    ], 64));
  }
});
var Wn = D(Hn);
var Yn = {
  data: {
    // 可以是任意值
    type: Array,
    default: () => []
  },
  label: {
    // 绑定标准字段
    type: String,
    default: "label"
  },
  keyField: {
    // key是vue 在VNode的保留字段，用key做名字会冲突
    type: String,
    default: "key"
  },
  children: {
    type: String,
    default: "children"
  },
  defaultExpandedKeys: {
    type: Array,
    default: () => []
  },
  selectedKeys: {
    type: Array,
    default: () => []
  },
  defaultCheckedKeys: {
    type: Array,
    default: () => []
  },
  onLoad: {
    type: Function
  },
  checkbox: {
    // 带勾选框
    type: Boolean,
    default: false
  },
  multiple: {
    // 多选
    type: Boolean,
    default: false
  },
  virtual: {
    // 虚拟滚动
    type: Boolean,
    default: false
  },
  disabledKeys: {
    type: Array,
    default: () => []
  },
  indeterminateKeys: {
    type: Array,
    default: () => []
  }
};
var Jn = {
  // 同步响应式数据, 可以直接改为defineModel
  "update:selectedKeys": (r) => r
  // 注意时间名，不能使用自定义事件改变外部状态
};
var Ze = Symbol();
var Zn = {
  node: {
    type: Object,
    required: true
  },
  expanded: {
    type: Boolean,
    required: true
  },
  loading: {
    type: Boolean,
    required: true
  },
  selected: {
    type: Boolean
  },
  checkbox: {
    type: Boolean
  },
  checked: {
    // 是否被选中
    type: Boolean
  },
  disabled: {
    type: Boolean
  },
  indeterminate: {
    type: Boolean
  }
};
var Xn = {
  toggleExpand: (r) => r,
  handleSelect: (r) => r,
  handleCheck: (r) => r
};
var Gn = {
  node: {
    type: Object,
    required: true
  }
};
var Qn = defineComponent({
  name: "BTreeNodeContent",
  props: Gn,
  setup(r) {
    const e = inject(Ze);
    return () => e != null && e.slots.default ? e == null ? void 0 : e.slots.default({ node: r.node }) : "";
  }
});
var er = defineComponent({
  name: "expandIcon",
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 16 16",
        width: "16",
        height: "16",
        fill: "currentColor"
      },
      [
        h("path", {
          d: "M4 6l4 4 4-4z"
          // 一个向下的三角形
        })
      ]
    );
  }
});
var tr = defineComponent({
  name: "LoadingIcon",
  render() {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 50 50",
        width: "16",
        height: "16",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "4",
        "stroke-linecap": "round",
        class: "b-tree__icon b-tree__icon--loading"
      },
      [
        h("circle", {
          cx: "25",
          cy: "25",
          r: "20",
          "stroke-opacity": "0.3"
        }),
        h("path", {
          d: "M45 25a20 20 0 0 1-20 20"
        })
      ]
    );
  }
});
var je = defineComponent({
  name: "BTreeNode",
  __name: "tree-node",
  props: Zn,
  emits: Xn,
  setup(r, { emit: e }) {
    const t = r, n = t.node, s = R("tree-node"), i = e;
    function a() {
      i("toggleExpand", n);
    }
    function o() {
      i("handleSelect", n), i("handleCheck", n);
    }
    return (l, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(s).b())
    }, [
      createBaseVNode("div", {
        class: normalizeClass([unref(s).e("content"), unref(s).is("selected", l.selected)]),
        style: normalizeStyle({ paddingLeft: unref(n).level * 30 + "px", display: "flex", alignItems: "baseline" })
      }, [
        unref(n).isLeaf ? createCommentVNode("", true) : (openBlock(), createBlock(unref(er), {
          key: 0,
          class: normalizeClass([unref(s).e("expand-icon"), { expanded: l.expanded }]),
          onClick: withModifiers(a, ["prevent"])
        }, null, 8, ["class"])),
        t.checkbox ? (openBlock(), createBlock(unref(Me), {
          key: 1,
          onChange: o,
          checked: l.selected,
          disabled: unref(n).disabled || t.disabled,
          indeterminate: t.indeterminate,
          "model-value": t.checked
        }, null, 8, ["checked", "disabled", "indeterminate", "model-value"])) : createCommentVNode("", true),
        createTextVNode(" " + toDisplayString(unref(n).label) + " ", 1),
        createVNode(unref(Qn), { node: unref(n) }, null, 8, ["node"]),
        l.loading ? (openBlock(), createBlock(unref(tr), {
          key: 2,
          class: normalizeClass([unref(s).e("loading-icon"), { loading: l.loading }])
        }, null, 8, ["class"])) : createCommentVNode("", true)
      ], 6)
    ], 2));
  }
});
var nr = {
  size: {
    type: Number,
    default: 30
  },
  remain: {
    type: Number,
    default: 8
  },
  dynamic: Boolean,
  // 是否启用动态加载
  items: {
    type: Array,
    default: () => []
  }
};
var rr = defineComponent({
  name: "BVirtualList",
  __name: "vertual-list",
  props: nr,
  setup(r) {
    const e = R("virtual-list"), t = r, n = useTemplateRef("virtual-box"), s = useTemplateRef("scroll-bar"), i = useTemplateRef("item"), a = ref({
      start: 0,
      end: t.remain
    }), o = t.size || i.value.style.height, l = ref(0);
    nextTick(() => {
      n.value.style.height = o * t.remain + "px", s.value.style.height = t.items.length * o + "px";
    }), computed(() => Math.min(a.value.start, t.remain)), computed(() => Math.min(t.remain, t.items.length - a.value.end));
    const c = computed(() => t.items.slice(a.value.start, a.value.end));
    watch(t.items, () => {
      s.value && (s.value.style.height = t.items.length * o + "px");
    }, { immediate: true });
    function d() {
      var S;
      const p = (S = n.value) == null ? void 0 : S.scrollTop;
      a.value.start = Math.floor(p / o), a.value.end = a.value.start + t.remain, l.value = a.value.start * o;
    }
    return (p, S) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(e).b()),
      ref: "virtual-box",
      onScroll: d
    }, [
      createBaseVNode("div", {
        class: normalizeClass(unref(e).e("scroll-bar")),
        ref: "scroll-bar"
      }, null, 2),
      createBaseVNode("div", {
        class: normalizeClass(unref(e).e("scroll-list")),
        style: normalizeStyle({ transform: `translateY(${l.value + "px"})` })
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList(c.value, (F, h2) => (openBlock(), createElementBlock("div", {
          key: h2,
          class: normalizeClass(unref(e).e("item")),
          ref_for: true,
          ref_key: "item",
          ref: i
        }, [
          renderSlot(p.$slots, "default", {
            data: F,
            index: h2
          })
        ], 2))), 128))
      ], 6)
    ], 34));
  }
});
var Xe = D(rr);
var sr = defineComponent({
  name: "BTree",
  __name: "tree",
  props: Yn,
  emits: Jn,
  setup(r, { emit: e }) {
    const t = ref([]), n = r, s = n.virtual, i = R(s ? "virtual-tree" : "tree"), a = e, o = ref(new Set(n.defaultExpandedKeys)), l = ref(/* @__PURE__ */ new Set()), c = ref([]), d = ref(new Set(n.defaultCheckedKeys)), p = ref(new Set(n.disabledKeys)), S = ref(new Set(n.indeterminateKeys));
    function F(y, g, k) {
      return {
        getKey(q) {
          return q[g];
        },
        getLabel(q) {
          return q[y];
        },
        getChildren(q) {
          return q[k];
        }
      };
    }
    const h2 = F(n.label, n.keyField, n.children);
    function f(y, g) {
      return y.map((k) => {
        const q = h2.getChildren(k) || [], C = {
          label: h2.getLabel(k),
          key: h2.getKey(k),
          children: [],
          // 默认为空
          raw: k,
          disabled: k.disabled || false,
          // 看是否传入
          level: g ? g.level + 1 : 0,
          isLeaf: k.isLeaf ?? q.length == 0,
          // 判断是否自带isLeaf, 没有就看孩子长度
          parentKey: g == null ? void 0 : g.key
          // 父节点下标
        };
        return q.length && (C.children = f(q, C)), C;
      });
    }
    const b = (y, g) => f(y, g), m = computed(() => {
      let y = o.value, g = [];
      const k = t.value || [], q = [];
      for (let C = k.length - 1; C >= 0; --C)
        q.push(k[C]);
      for (; q.length; ) {
        const C = q.pop();
        if (C && (g.push(C), y.has(C.key) && C.children))
          for (let we = C.children.length - 1; we >= 0; we--)
            q.push(C.children[we]);
      }
      return g;
    });
    function j(y) {
      return o.value.has(y.key);
    }
    function B(y) {
      return l.value.has(y.key);
    }
    function x(y) {
      return c.value.includes(y.key);
    }
    function _(y) {
      return p.value.has(y.key);
    }
    function $(y) {
      return d.value.has(y.key);
    }
    function H(y) {
      return S.value.has(y.key);
    }
    function W(y) {
      if (n.onLoad && !y.isLeaf) {
        let g = l.value;
        g.has(y.key) || (g.add(y.key), n.onLoad(y.raw).then((k) => {
          y.raw.children = k, y.children = b(k, y), g.delete(y.key);
        }));
      }
    }
    function Q(y) {
      if (l.value.has(y.key)) return;
      const g = o.value;
      g.has(y.key) ? g.delete(y.key) : (W(y), g.add(y.key));
    }
    function ie(y) {
      if (y.disabled) return;
      let g = Array.from(c.value);
      if (n.multiple) {
        const k = g.findIndex((q) => q == y.key);
        k > -1 ? g.splice(k, 1) : g.push(y.key);
      } else
        g.includes(y.key) ? g = [] : g = [y.key];
      a("update:selectedKeys", g);
    }
    function he(y, g) {
      const k = d.value;
      y ? (k.add(g.key), S.value.delete(g.key)) : k.delete(g.key);
    }
    function U(y, g) {
      if (_(y) || y.disabled) return;
      y.parentKey && he(g, y);
      const k = y.children;
      y.children && k.forEach((q) => {
        U(q, g);
      });
    }
    function M(y) {
      return m.value.find((g) => y === g.key);
    }
    function oe(y) {
      if (!y.parentKey) return;
      const g = M(y.parentKey);
      if (!g) return;
      const k = g.children.every((C) => $(C)), q = g.children.some((C) => $(C) || H(C));
      k ? (d.value.add(g.key), S.value.delete(g.key)) : q ? (d.value.delete(g.key), S.value.add(g.key)) : (d.value.delete(g.key), S.value.delete(g.key)), oe(g);
    }
    function Pe(y) {
      if (_(y) || y.disabled) return;
      d.value[$(y) ? "delete" : "add"](y.key), U(y, $(y)), oe(y);
    }
    return onMounted(() => {
      d.value.forEach((y) => {
        const g = M(y);
        g && oe(g);
      });
    }), watch(() => n.data, (y) => {
      t.value = b(y, null);
    }, { immediate: true }), watch(() => n.selectedKeys, (y) => {
      y && (c.value = y);
    }, { immediate: true }), provide(Ze, {
      // 就是把App传给tree再到tree-node的插槽全部传给tree-node
      slots: useSlots()
    }), (y, g) => unref(s) ? (openBlock(), createBlock(unref(Xe), {
      key: 0,
      items: m.value
    }, {
      default: withCtx(({ data: k }) => [
        (openBlock(), createBlock(je, {
          node: k,
          key: k.key,
          expanded: j(k),
          loading: B(k),
          selected: x(k),
          checkbox: n.checkbox,
          checked: $(k),
          disabled: _(k),
          indeterminate: H(k),
          onToggleExpand: (q) => Q(k),
          onHandleSelect: (q) => ie(k),
          onHandleCheck: (q) => Pe(k)
        }, null, 8, ["node", "expanded", "loading", "selected", "checkbox", "checked", "disabled", "indeterminate", "onToggleExpand", "onHandleSelect", "onHandleCheck"]))
      ]),
      _: 1
    }, 8, ["items"])) : (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(unref(i).b())
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(m.value, (k) => (openBlock(), createBlock(je, {
        node: k,
        key: k.key,
        expanded: j(k),
        loading: B(k),
        selected: x(k),
        checkbox: n.checkbox,
        checked: $(k),
        disabled: _(k),
        indeterminate: H(k),
        onToggleExpand: (q) => Q(k),
        onHandleSelect: (q) => ie(k),
        onHandleCheck: (q) => Pe(k)
      }, null, 8, ["node", "expanded", "loading", "selected", "checkbox", "checked", "disabled", "indeterminate", "onToggleExpand", "onHandleSelect", "onHandleCheck"]))), 128))
    ], 2));
  }
});
var ar = D(sr);
var ir = { BButton: ft, BCard: mt, BCheckbox: Me, BForm: an, BFormItem: sn, BIcon: se, BProgress: _n, BSelect: xn, BInput: fn, BSwitch: An, BUpload: Wn, BTooltip: We, BTree: ar, BVirtualList: Xe };
var cr = (r) => {
  Object.entries(ir).forEach(([e, t]) => {
    r.component(e, t);
  });
};
export {
  ft as BButton,
  mt as BCard,
  Me as BCheckbox,
  an as BForm,
  sn as BFormItem,
  se as BIcon,
  fn as BInput,
  _n as BProgress,
  xn as BSelect,
  An as BSwitch,
  We as BTooltip,
  ar as BTree,
  Wn as BUpload,
  Xe as BVirtualList,
  z as NOOP,
  nt as Types,
  st as buttonEmits,
  rt as buttonProps,
  pt as cardProps,
  vt as checkboxEmits,
  gt as checkboxProps,
  cr as default,
  Nn as getId,
  ur as hasOwn,
  at as iconProps,
  un as inputEmits,
  ln as inputProps,
  pn as progressProps,
  Bn as selectProps,
  Pn as switchEmits,
  qn as switchProps,
  En as tooltipProps,
  Jn as treeEmits,
  Ze as treeInjectKey,
  Yn as treeProps,
  Ye as uploadBaseProps,
  Je as uploadProps,
  nr as virtualListProps,
  D as withInstall
};
/*! Bundled license information:

@bottle414/bottle-ui/dist/bottle-ui.es.js:
  (**
  * @vue/shared v3.5.13
  * (c) 2018-present Yuxi (Evan) You and Vue contributors
  * @license MIT
  **)
*/
//# sourceMappingURL=@bottle414_bottle-ui.js.map
