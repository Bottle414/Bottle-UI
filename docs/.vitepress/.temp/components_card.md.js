import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { resolveComponent, withCtx, createVNode, createTextVNode, useSSRContext, defineComponent, mergeProps } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BCard = resolveComponent("BCard");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCard, null, {
          header: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Header `);
            } else {
              return [
                createTextVNode(" Header ")
              ];
            }
          }),
          footer: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Footer `);
            } else {
              return [
                createTextVNode(" Footer ")
              ];
            }
          }),
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<li data-v-c21c7143${_scopeId2}>List Item 1</li><li data-v-c21c7143${_scopeId2}>List Item 2</li><li data-v-c21c7143${_scopeId2}>List Item 3</li><li data-v-c21c7143${_scopeId2}>List Item 4</li>`);
            } else {
              return [
                createVNode("li", null, "List Item 1"),
                createVNode("li", null, "List Item 2"),
                createVNode("li", null, "List Item 3"),
                createVNode("li", null, "List Item 4")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCard, null, {
            header: withCtx(() => [
              createTextVNode(" Header ")
            ]),
            footer: withCtx(() => [
              createTextVNode(" Footer ")
            ]),
            default: withCtx(() => [
              createVNode("li", null, "List Item 1"),
              createVNode("li", null, "List Item 2"),
              createVNode("li", null, "List Item 3"),
              createVNode("li", null, "List Item 4")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/card/Basic.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Basic = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c21c7143"]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BCard = resolveComponent("BCard");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCard, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<li data-v-4dd3d32a${_scopeId2}>List Item 1</li><li data-v-4dd3d32a${_scopeId2}>List Item 2</li><li data-v-4dd3d32a${_scopeId2}>List Item 3</li><li data-v-4dd3d32a${_scopeId2}>List Item 4</li>`);
            } else {
              return [
                createVNode("li", null, "List Item 1"),
                createVNode("li", null, "List Item 2"),
                createVNode("li", null, "List Item 3"),
                createVNode("li", null, "List Item 4")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCard, null, {
            default: withCtx(() => [
              createVNode("li", null, "List Item 1"),
              createVNode("li", null, "List Item 2"),
              createVNode("li", null, "List Item 3"),
              createVNode("li", null, "List Item 4")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/card/Simple.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Simple = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-4dd3d32a"]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BCard = resolveComponent("BCard");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BCard, { shadow: "always" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` always `);
            } else {
              return [
                createTextVNode(" always ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCard, { shadow: "hover" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Hover `);
            } else {
              return [
                createTextVNode(" Hover ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BCard, { shadow: "never" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Never `);
            } else {
              return [
                createTextVNode(" Never ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BCard, { shadow: "always" }, {
            default: withCtx(() => [
              createTextVNode(" always ")
            ]),
            _: 1
          }),
          createVNode(_component_BCard, { shadow: "hover" }, {
            default: withCtx(() => [
              createTextVNode(" Hover ")
            ]),
            _: 1
          }),
          createVNode(_component_BCard, { shadow: "never" }, {
            default: withCtx(() => [
              createTextVNode(" Never ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/card/Shadow.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Shadow = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["shadow", "阴影出现时机", "'always' | 'hover' | 'never'", "hover"],
      ["bodyStyle", "改变卡片中部的样式", "string | Array | Object", "null"],
      ["bodyClass", "绑定到卡片中部的类", "string", "null"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/card/Attributes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slots",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["header", "顶部插槽", "", ""],
      ["default", "默认, 中部插槽", "", ""],
      ["footer", "底部插槽", "", ""]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/card/Slots.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Card 卡片","description":"","frontmatter":{},"headers":[],"relativePath":"components/card.md","filePath":"components/card.md"}');
const __default__ = { name: "components/card.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="card-卡片" tabindex="-1">Card 卡片 <a class="header-anchor" href="#card-卡片" aria-label="Permalink to &quot;Card 卡片&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>Card 组件由header、body和footer组成。header 和 footer是可选的，其内容取决于一个具名的 slot。</p>`);
      _push(ssrRenderComponent(Basic, null, null, _parent));
      _push(`<h2 id="简单卡片" tabindex="-1">简单卡片 <a class="header-anchor" href="#简单卡片" aria-label="Permalink to &quot;简单卡片&quot;">​</a></h2><p>只含内容区域</p>`);
      _push(ssrRenderComponent(Simple, null, null, _parent));
      _push(`<h2 id="阴影效果" tabindex="-1">阴影效果 <a class="header-anchor" href="#阴影效果" aria-label="Permalink to &quot;阴影效果&quot;">​</a></h2><p>通过 shadow 属性设置卡片阴影出现的时机。 该属性的值可以是：always、hover 或 never。</p>`);
      _push(ssrRenderComponent(Shadow, null, null, _parent));
      _push(`<h1 id="card-api" tabindex="-1">Card API <a class="header-anchor" href="#card-api" aria-label="Permalink to &quot;Card API&quot;">​</a></h1><h2 id="card-attributes" tabindex="-1">Card Attributes <a class="header-anchor" href="#card-attributes" aria-label="Permalink to &quot;Card Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h2 id="card-slots" tabindex="-1">Card Slots <a class="header-anchor" href="#card-slots" aria-label="Permalink to &quot;Card Slots&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/card.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
