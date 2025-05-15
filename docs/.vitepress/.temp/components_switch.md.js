import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { defineComponent, ref, resolveComponent, withCtx, unref, isRef, createTextVNode, createVNode, toDisplayString, useSSRContext, mergeProps } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "basic",
  __ssrInlineRender: true,
  setup(__props) {
    let modelValue = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BSwitch = resolveComponent("BSwitch");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(modelValue))} `);
            _push2(ssrRenderComponent(_component_BSwitch, {
              modelValue: unref(modelValue),
              "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(toDisplayString(unref(modelValue)) + " ", 1),
              createVNode(_component_BSwitch, {
                modelValue: unref(modelValue),
                "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/switch/basic.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "color",
  __ssrInlineRender: true,
  setup(__props) {
    let modelValue = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BSwitch = resolveComponent("BSwitch");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BSwitch, {
              modelValue: unref(modelValue),
              "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
              "active-color": "yellow",
              "inactive-color": "#eee"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BSwitch, {
              modelValue: unref(modelValue),
              "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
              "active-color": "#bebe",
              "inactive-color": "#eef"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BSwitch, {
                modelValue: unref(modelValue),
                "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
                "active-color": "yellow",
                "inactive-color": "#eee"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BSwitch, {
                modelValue: unref(modelValue),
                "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
                "active-color": "#bebe",
                "inactive-color": "#eef"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/switch/color.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BSwitch = resolveComponent("BSwitch");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BSwitch, { disabled: true }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BSwitch, { disabled: true })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/switch/disabled.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Disabled = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "text",
  __ssrInlineRender: true,
  setup(__props) {
    let modelValue = ref(true);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BSwitch = resolveComponent("BSwitch");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BSwitch, {
              modelValue: unref(modelValue),
              "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
              "active-color": "coral",
              "inactive-color": "#eef",
              "active-text": "on",
              "inactive-text": "off"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_BSwitch, {
              modelValue: unref(modelValue),
              "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
              "active-text": "开",
              "inactive-text": "关"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BSwitch, {
                modelValue: unref(modelValue),
                "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
                "active-color": "coral",
                "inactive-color": "#eef",
                "active-text": "on",
                "inactive-text": "off"
              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
              createVNode(_component_BSwitch, {
                modelValue: unref(modelValue),
                "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : modelValue = $event,
                "active-text": "开",
                "inactive-text": "关"
              }, null, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/switch/text.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["modelValue | v-model", "绑定的值(必需)", "boolean", ""],
      ["disabled", "禁用", "boolean", "false"],
      ["activeColor", "打开时颜色", "string", "#bebe"],
      ["inactiveColor", "关闭时颜色", "string", "#C0CCDA"],
      ["activeText", "打开时显示的文字", "string", "''"],
      ["inactoveText", "关闭时显示的文字", "string", "''"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/switch/attributes.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Switch 开关","description":"","frontmatter":{},"headers":[],"relativePath":"components/switch.md","filePath":"components/switch.md"}');
const __default__ = { name: "components/switch.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="switch-开关" tabindex="-1">Switch 开关 <a class="header-anchor" href="#switch-开关" aria-label="Permalink to &quot;Switch 开关&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>最普通的开关</p>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<h2 id="开关颜色" tabindex="-1">开关颜色 <a class="header-anchor" href="#开关颜色" aria-label="Permalink to &quot;开关颜色&quot;">​</a></h2><p>使用 activeColor 为开关打开时设置颜色, inactiveColor 为开关关闭时设置颜色</p>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<h2 id="禁用效果" tabindex="-1">禁用效果 <a class="header-anchor" href="#禁用效果" aria-label="Permalink to &quot;禁用效果&quot;">​</a></h2><p>使用 disabled 属性为开关设置禁用</p>`);
      _push(ssrRenderComponent(Disabled, null, null, _parent));
      _push(`<h2 id="文字" tabindex="-1">文字 <a class="header-anchor" href="#文字" aria-label="Permalink to &quot;文字&quot;">​</a></h2><p>使用 activeText 设置打开时显示的文字, inactiveText 设置关闭时显示的文字</p>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h1 id="switch-api" tabindex="-1">Switch API <a class="header-anchor" href="#switch-api" aria-label="Permalink to &quot;Switch API&quot;">​</a></h1><h2 id="switch-attributes" tabindex="-1">Switch Attributes <a class="header-anchor" href="#switch-attributes" aria-label="Permalink to &quot;Switch Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/switch.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
