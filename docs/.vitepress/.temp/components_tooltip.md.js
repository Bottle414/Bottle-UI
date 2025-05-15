import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, mergeProps } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BTooltip = resolveComponent("BTooltip");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BTooltip, {
          placement: "top",
          content: "top"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Top`);
            } else {
              return [
                createTextVNode("Top")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BTooltip, {
          placement: "bottom",
          content: "bottom"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Bottom`);
            } else {
              return [
                createTextVNode("Bottom")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BTooltip, {
          placement: "left",
          content: "left"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Left`);
            } else {
              return [
                createTextVNode("Left")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BTooltip, {
          placement: "right",
          content: "right"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Right`);
            } else {
              return [
                createTextVNode("Right")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BTooltip, {
            placement: "top",
            content: "top"
          }, {
            default: withCtx(() => [
              createTextVNode("Top")
            ]),
            _: 1
          }),
          createVNode(_component_BTooltip, {
            placement: "bottom",
            content: "bottom"
          }, {
            default: withCtx(() => [
              createTextVNode("Bottom")
            ]),
            _: 1
          }),
          createVNode(_component_BTooltip, {
            placement: "left",
            content: "left"
          }, {
            default: withCtx(() => [
              createTextVNode("Left")
            ]),
            _: 1
          }),
          createVNode(_component_BTooltip, {
            placement: "right",
            content: "right"
          }, {
            default: withCtx(() => [
              createTextVNode("Right")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tooltip/Placement.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Placement = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BTooltip = resolveComponent("BTooltip");
  const _component_BButton = resolveComponent("BButton");
  const _component_BIcon = resolveComponent("BIcon");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BTooltip, { content: "button!" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Hover me!`);
                  } else {
                    return [
                      createTextVNode("Hover me!")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, null, {
                  default: withCtx(() => [
                    createTextVNode("Hover me!")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BTooltip, { content: "Icon!" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BIcon, { color: "coral" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Icon`);
                  } else {
                    return [
                      createTextVNode("Icon")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BIcon, { color: "coral" }, {
                  default: withCtx(() => [
                    createTextVNode("Icon")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BTooltip, { content: "button!" }, {
            default: withCtx(() => [
              createVNode(_component_BButton, null, {
                default: withCtx(() => [
                  createTextVNode("Hover me!")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_BTooltip, { content: "Icon!" }, {
            default: withCtx(() => [
              createVNode(_component_BIcon, { color: "coral" }, {
                default: withCtx(() => [
                  createTextVNode("Icon")
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tooltip/Custom.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Custom = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BTooltip = resolveComponent("BTooltip");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BTooltip, {
          content: "light",
          light: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`light`);
            } else {
              return [
                createTextVNode("light")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BTooltip, { content: "dark" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`dark`);
            } else {
              return [
                createTextVNode("dark")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BTooltip, {
            content: "light",
            light: ""
          }, {
            default: withCtx(() => [
              createTextVNode("light")
            ]),
            _: 1
          }),
          createVNode(_component_BTooltip, { content: "dark" }, {
            default: withCtx(() => [
              createTextVNode("dark")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tooltip/Theme.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Theme = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["content", "文字提示内容", "string", ""],
      ["placement", "文字提示朝向", "'top' | 'bottom' | 'left' | 'right'"],
      ["light", "浅色样式", "boolean", "false"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tooltip/Attributes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slots",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["default", "默认插槽, 存放目标元素", "", ""]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tooltip/Slots.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Tooltip 文字提示","description":"","frontmatter":{},"headers":[],"relativePath":"components/tooltip.md","filePath":"components/tooltip.md"}');
const __default__ = { name: "components/tooltip.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tooltip-文字提示" tabindex="-1">Tooltip 文字提示 <a class="header-anchor" href="#tooltip-文字提示" aria-label="Permalink to &quot;Tooltip 文字提示&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>可以通过设置placement属性来决定文字提示的方向, content属性设置文字效果</p>`);
      _push(ssrRenderComponent(Placement, null, null, _parent));
      _push(`<h2 id="为元素加上文字提示" tabindex="-1">为元素加上文字提示 <a class="header-anchor" href="#为元素加上文字提示" aria-label="Permalink to &quot;为元素加上文字提示&quot;">​</a></h2><p>使用插槽包裹元素即可为元素添加文字提示</p>`);
      _push(ssrRenderComponent(Custom, null, null, _parent));
      _push(`<h2 id="不同的主题" tabindex="-1">不同的主题 <a class="header-anchor" href="#不同的主题" aria-label="Permalink to &quot;不同的主题&quot;">​</a></h2><p>文字提示默认是黑底白字，可以通过light属性设置白底黑字</p>`);
      _push(ssrRenderComponent(Theme, null, null, _parent));
      _push(`<h1 id="tooltip-api" tabindex="-1">Tooltip API <a class="header-anchor" href="#tooltip-api" aria-label="Permalink to &quot;Tooltip API&quot;">​</a></h1><h2 id="tooltip-attributes" tabindex="-1">Tooltip Attributes <a class="header-anchor" href="#tooltip-attributes" aria-label="Permalink to &quot;Tooltip Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h2 id="tooltip-slots" tabindex="-1">Tooltip Slots <a class="header-anchor" href="#tooltip-slots" aria-label="Permalink to &quot;Tooltip Slots&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tooltip.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
