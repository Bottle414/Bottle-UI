import { useSSRContext, resolveComponent } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
const __pageData = JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"components.md","filePath":"components.md"}');
const __default__ = { name: "components.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BProgress = resolveComponent("BProgress");
      _push(`<div${ssrRenderAttrs(_attrs)}><h2 id="progress组件" tabindex="-1">Progress组件 <a class="header-anchor" href="#progress组件" aria-label="Permalink to &quot;Progress组件&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_component_BProgress, { indeterminate: "" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
