import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { defineComponent, ref, resolveComponent, withCtx, unref, createTextVNode, toDisplayString, createVNode, useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const label = "标签";
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    let modelValue = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BCheckbox = resolveComponent("BCheckbox");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 绑定的值: ${ssrInterpolate(unref(modelValue))} `);
            _push2(ssrRenderComponent(_component_BCheckbox, { "model-value": unref(modelValue) }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(modelValue))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(modelValue)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BCheckbox, { label }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(label)}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(label))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" 绑定的值: " + toDisplayString(unref(modelValue)) + " ", 1),
              createVNode(_component_BCheckbox, { "model-value": unref(modelValue) }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(unref(modelValue)), 1)
                ]),
                _: 1
              }, 8, ["model-value"]),
              createVNode(_component_BCheckbox, { label }, {
                default: withCtx(() => [
                  createTextVNode(toDisplayString(label))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/checkbox/basic.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BCheckbox = resolveComponent("BCheckbox");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCheckbox, { checked: true }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`checked`);
            } else {
              return [
                createTextVNode("checked")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCheckbox, { disabled: true }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`disabled`);
            } else {
              return [
                createTextVNode("disabled")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCheckbox, { indeterminate: true }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`indeterminate`);
            } else {
              return [
                createTextVNode("indeterminate")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCheckbox, { checked: true }, {
            default: withCtx(() => [
              createTextVNode("checked")
            ]),
            _: 1
          }),
          createVNode(_component_BCheckbox, { disabled: true }, {
            default: withCtx(() => [
              createTextVNode("disabled")
            ]),
            _: 1
          }),
          createVNode(_component_BCheckbox, { indeterminate: true }, {
            default: withCtx(() => [
              createTextVNode("indeterminate")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/checkbox/status.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Status = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BCheckbox = resolveComponent("BCheckbox");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCheckbox, {
          color: "#eef",
          size: "18px"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`#eef`);
            } else {
              return [
                createTextVNode("#eef")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCheckbox, {
          color: "#4f9bfa",
          size: "18px"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`#4f9bfa`);
            } else {
              return [
                createTextVNode("#4f9bfa")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCheckbox, {
          color: "yellow",
          size: "18px"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`yellow`);
            } else {
              return [
                createTextVNode("yellow")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCheckbox, {
            color: "#eef",
            size: "18px"
          }, {
            default: withCtx(() => [
              createTextVNode("#eef")
            ]),
            _: 1
          }),
          createVNode(_component_BCheckbox, {
            color: "#4f9bfa",
            size: "18px"
          }, {
            default: withCtx(() => [
              createTextVNode("#4f9bfa")
            ]),
            _: 1
          }),
          createVNode(_component_BCheckbox, {
            color: "yellow",
            size: "18px"
          }, {
            default: withCtx(() => [
              createTextVNode("yellow")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/checkbox/color.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Color = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$4 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BCheckbox = resolveComponent("BCheckbox");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCheckbox, { size: "16px" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`16`);
            } else {
              return [
                createTextVNode("16")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCheckbox, { size: "24px" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`24`);
            } else {
              return [
                createTextVNode("24")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCheckbox, { size: "32px" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`32`);
            } else {
              return [
                createTextVNode("32")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCheckbox, { size: "16px" }, {
            default: withCtx(() => [
              createTextVNode("16")
            ]),
            _: 1
          }),
          createVNode(_component_BCheckbox, { size: "24px" }, {
            default: withCtx(() => [
              createTextVNode("24")
            ]),
            _: 1
          }),
          createVNode(_component_BCheckbox, { size: "32px" }, {
            default: withCtx(() => [
              createTextVNode("32")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/checkbox/size.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Size = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["modelValue", "绑定的值", "string | number | boolean", "null"],
      ["trueValue", "选中时的值", "string | number | boolean", "null"],
      ["falseValue", "未选中时的值", "string | number | boolean", "null"],
      ["label", "标签", "string", "null"],
      ["size", "尺寸", "number | string", "12px"],
      ["color", "颜色", "string", "#bebe"],
      ["checked", "是否勾选", "boolean", "false"],
      ["disabled", "是否禁用", "boolean", "false"],
      ["indeterminate", "是否为不定状态", "boolean", "false"]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      _push(ssrRenderComponent(_component_Table, mergeProps({ data }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/checkbox/attributes.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "events",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["Change", "状态改变时触发", "Function: (checked: boolean) => checked", "null"]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      _push(ssrRenderComponent(_component_Table, mergeProps({ data }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/checkbox/events.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "slots",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["default", "自定义内容", "", ""]
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Table = resolveComponent("Table");
      _push(ssrRenderComponent(_component_Table, mergeProps({ data }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/checkbox/slots.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Checkbox 复选框","description":"","frontmatter":{},"headers":[],"relativePath":"components/checkbox.md","filePath":"components/checkbox.md"}');
const __default__ = { name: "components/checkbox.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="checkbox-复选框" tabindex="-1">Checkbox 复选框 <a class="header-anchor" href="#checkbox-复选框" aria-label="Permalink to &quot;Checkbox 复选框&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用modelValue绑定一个值进行两种状态的切换; 使用label或者默认插槽为复选框设置标签</p>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`<h2 id="状态" tabindex="-1">状态 <a class="header-anchor" href="#状态" aria-label="Permalink to &quot;状态&quot;">​</a></h2><p>使用disabled属性设置按钮禁用; checked属性设置为勾选状态; indeterminate属性设置为不定状态; loading设置加载状态</p>`);
      _push(ssrRenderComponent(Status, null, null, _parent));
      _push(`<h2 id="改变大小" tabindex="-1">改变大小 <a class="header-anchor" href="#改变大小" aria-label="Permalink to &quot;改变大小&quot;">​</a></h2><p>使用size属性设置大小</p>`);
      _push(ssrRenderComponent(Size, null, null, _parent));
      _push(`<h2 id="颜色" tabindex="-1">颜色 <a class="header-anchor" href="#颜色" aria-label="Permalink to &quot;颜色&quot;">​</a></h2><p>通过color属性来改变复选框颜色</p>`);
      _push(ssrRenderComponent(Color, null, null, _parent));
      _push(`<h1 id="checkbox-api" tabindex="-1">Checkbox API <a class="header-anchor" href="#checkbox-api" aria-label="Permalink to &quot;Checkbox API&quot;">​</a></h1><h2 id="checkbox-attributes" tabindex="-1">Checkbox Attributes <a class="header-anchor" href="#checkbox-attributes" aria-label="Permalink to &quot;Checkbox Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<h2 id="checkbox-events" tabindex="-1">Checkbox Events <a class="header-anchor" href="#checkbox-events" aria-label="Permalink to &quot;Checkbox Events&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h2 id="checkbox-slots" tabindex="-1">Checkbox Slots <a class="header-anchor" href="#checkbox-slots" aria-label="Permalink to &quot;Checkbox Slots&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/checkbox.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
