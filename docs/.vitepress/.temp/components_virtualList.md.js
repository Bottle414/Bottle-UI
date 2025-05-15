import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { defineComponent, resolveComponent, withCtx, createVNode, toDisplayString, useSSRContext, mergeProps } from "vue";
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Basic",
  __ssrInlineRender: true,
  setup(__props) {
    const fakeData = [1, 2, 3, 4, 5, 6, 7, 8, 17, 34, 22, 11, 34, 9, 8, 7, 4, 2, 1, 4, 6, 19, 18, 17, 34, 22, 11, 34, 6];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BVirtualList = resolveComponent("BVirtualList");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BVirtualList, {
              items: fakeData,
              size: 23
            }, {
              default: withCtx(({ data }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p${_scopeId2}>${ssrInterpolate(data)}</p>`);
                } else {
                  return [
                    createVNode("p", null, toDisplayString(data), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BVirtualList, {
                items: fakeData,
                size: 23
              }, {
                default: withCtx(({ data }) => [
                  createVNode("p", null, toDisplayString(data), 1)
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/virtual-list/Basic.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["size", "每一项的大小", "number", "30"],
      ["remain", "每次展示的项数", "number", "8"],
      ["items", "每一项的值", "Array", "[]"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/virtual-list/Attributes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slots",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["default", "默认插槽, 展示要显示的items里的内容, 传出值为data", "", ""]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/virtual-list/Slots.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"VirtualList 虚拟列表","description":"","frontmatter":{},"headers":[],"relativePath":"components/virtualList.md","filePath":"components/virtualList.md"}');
const __default__ = { name: "components/virtualList.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="virtuallist-虚拟列表" tabindex="-1">VirtualList 虚拟列表 <a class="header-anchor" href="#virtuallist-虚拟列表" aria-label="Permalink to &quot;VirtualList 虚拟列表&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>包含最普通的列表项</p>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<h1 id="virtuallist-api" tabindex="-1">VirtualList API <a class="header-anchor" href="#virtuallist-api" aria-label="Permalink to &quot;VirtualList API&quot;">​</a></h1><h2 id="virtuallist-attributes" tabindex="-1">VirtualList Attributes <a class="header-anchor" href="#virtuallist-attributes" aria-label="Permalink to &quot;VirtualList Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h2 id="virtuallist-slots" tabindex="-1">VirtualList Slots <a class="header-anchor" href="#virtuallist-slots" aria-label="Permalink to &quot;VirtualList Slots&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/virtualList.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
