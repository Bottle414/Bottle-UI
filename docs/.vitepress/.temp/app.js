import { ssrRenderAttrs, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrRenderClass, renderToString } from "vue/server-renderer";
import { defineComponent, mergeProps, useSSRContext, computed, unref, ref, watch, onMounted, watchEffect, watchPostEffect, onUnmounted, onUpdated, resolveComponent, shallowRef, createVNode, resolveDynamicComponent, withCtx, renderSlot, createTextVNode, toDisplayString, inject, createBlock, createCommentVNode, openBlock, readonly, nextTick, Fragment, renderList, provide, toHandlers, withKeys, onBeforeUnmount, useSlots, createElementBlock, createElementVNode, h, useTemplateRef, normalizeClass, normalizeStyle, useAttrs, withModifiers, createSSRApp } from "vue";
import { u as useData$1, i as isExternal, t as treatAsHtml, w as withBase, a as isActive, g as getScrollOffset, o as onContentUpdated, E as EXTERNAL_URL_RE, b as useRoute, c as inBrowser, d as createTitle, m as mergeHead, p as pathToFile, R as RouterSymbol, e as initData, f as dataSymbol, C as Content, s as siteDataRef, h as createRouter } from "./Content.BOMT-NqN.js";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
import { useMediaQuery, useWindowSize, onKeyStroke, useWindowScroll, useScrollLock } from "@vueuse/core";
const _sfc_main$16 = /* @__PURE__ */ defineComponent({
  __name: "VPBadge",
  __ssrInlineRender: true,
  props: {
    text: {},
    type: { default: "tip" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<span${ssrRenderAttrs(mergeProps({
        class: ["VPBadge", _ctx.type]
      }, _attrs))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, () => {
        _push(`${ssrInterpolate(_ctx.text)}`);
      }, _push, _parent);
      _push(`</span>`);
    };
  }
});
const _sfc_setup$16 = _sfc_main$16.setup;
_sfc_main$16.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPBadge.vue");
  return _sfc_setup$16 ? _sfc_setup$16(props, ctx) : void 0;
};
const _sfc_main$15 = /* @__PURE__ */ defineComponent({
  __name: "VPBackdrop",
  __ssrInlineRender: true,
  props: {
    show: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.show) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPBackdrop" }, _attrs))} data-v-f10f4798></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$15 = _sfc_main$15.setup;
_sfc_main$15.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPBackdrop.vue");
  return _sfc_setup$15 ? _sfc_setup$15(props, ctx) : void 0;
};
const VPBackdrop = /* @__PURE__ */ _export_sfc(_sfc_main$15, [["__scopeId", "data-v-f10f4798"]]);
const useData = useData$1;
function throttleAndDebounce(fn2, delay) {
  let timeoutId;
  let called = false;
  return () => {
    if (timeoutId)
      clearTimeout(timeoutId);
    if (!called) {
      fn2();
      (called = true) && setTimeout(() => called = false, delay);
    } else
      timeoutId = setTimeout(fn2, delay);
  };
}
function ensureStartingSlash(path) {
  return path.startsWith("/") ? path : `/${path}`;
}
function normalizeLink$1(url) {
  const { pathname, search, hash, protocol } = new URL(url, "http://a.com");
  if (isExternal(url) || url.startsWith("#") || !protocol.startsWith("http") || !treatAsHtml(pathname))
    return url;
  const { site } = useData();
  const normalizedPath = pathname.endsWith("/") || pathname.endsWith(".html") ? url : url.replace(/(?:(^\.+)\/)?.*$/, `$1${pathname.replace(/(\.md)?$/, site.value.cleanUrls ? "" : ".html")}${search}${hash}`);
  return withBase(normalizedPath);
}
function useLangs({ correspondingLink = false } = {}) {
  const { site, localeIndex, page, theme: theme2, hash } = useData();
  const currentLang = computed(() => {
    var _a, _b;
    return {
      label: (_a = site.value.locales[localeIndex.value]) == null ? void 0 : _a.label,
      link: ((_b = site.value.locales[localeIndex.value]) == null ? void 0 : _b.link) || (localeIndex.value === "root" ? "/" : `/${localeIndex.value}/`)
    };
  });
  const localeLinks = computed(() => Object.entries(site.value.locales).flatMap(([key, value]) => currentLang.value.label === value.label ? [] : {
    text: value.label,
    link: normalizeLink(value.link || (key === "root" ? "/" : `/${key}/`), theme2.value.i18nRouting !== false && correspondingLink, page.value.relativePath.slice(currentLang.value.link.length - 1), !site.value.cleanUrls) + hash.value
  }));
  return { localeLinks, currentLang };
}
function normalizeLink(link2, addPath, path, addExt) {
  return addPath ? link2.replace(/\/$/, "") + ensureStartingSlash(path.replace(/(^|\/)index\.md$/, "$1").replace(/\.md$/, addExt ? ".html" : "")) : link2;
}
const _sfc_main$14 = /* @__PURE__ */ defineComponent({
  __name: "NotFound",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { currentLang } = useLangs();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "NotFound" }, _attrs))} data-v-705ff6db><p class="code" data-v-705ff6db>${ssrInterpolate(((_a = unref(theme2).notFound) == null ? void 0 : _a.code) ?? "404")}</p><h1 class="title" data-v-705ff6db>${ssrInterpolate(((_b = unref(theme2).notFound) == null ? void 0 : _b.title) ?? "PAGE NOT FOUND")}</h1><div class="divider" data-v-705ff6db></div><blockquote class="quote" data-v-705ff6db>${ssrInterpolate(((_c = unref(theme2).notFound) == null ? void 0 : _c.quote) ?? "But if you don't change your direction, and if you keep looking, you may end up where you are heading.")}</blockquote><div class="action" data-v-705ff6db><a class="link"${ssrRenderAttr("href", unref(withBase)(unref(currentLang).link))}${ssrRenderAttr("aria-label", ((_d = unref(theme2).notFound) == null ? void 0 : _d.linkLabel) ?? "go to home")} data-v-705ff6db>${ssrInterpolate(((_e2 = unref(theme2).notFound) == null ? void 0 : _e2.linkText) ?? "Take me home")}</a></div></div>`);
    };
  }
});
const _sfc_setup$14 = _sfc_main$14.setup;
_sfc_main$14.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/NotFound.vue");
  return _sfc_setup$14 ? _sfc_setup$14(props, ctx) : void 0;
};
const NotFound = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["__scopeId", "data-v-705ff6db"]]);
function getSidebar(_sidebar, path) {
  if (Array.isArray(_sidebar))
    return addBase(_sidebar);
  if (_sidebar == null)
    return [];
  path = ensureStartingSlash(path);
  const dir = Object.keys(_sidebar).sort((a, b) => {
    return b.split("/").length - a.split("/").length;
  }).find((dir2) => {
    return path.startsWith(ensureStartingSlash(dir2));
  });
  const sidebar = dir ? _sidebar[dir] : [];
  return Array.isArray(sidebar) ? addBase(sidebar) : addBase(sidebar.items, sidebar.base);
}
function getSidebarGroups(sidebar) {
  const groups = [];
  let lastGroupIndex = 0;
  for (const index in sidebar) {
    const item = sidebar[index];
    if (item.items) {
      lastGroupIndex = groups.push(item);
      continue;
    }
    if (!groups[lastGroupIndex]) {
      groups.push({ items: [] });
    }
    groups[lastGroupIndex].items.push(item);
  }
  return groups;
}
function getFlatSideBarLinks(sidebar) {
  const links = [];
  function recursivelyExtractLinks(items) {
    for (const item of items) {
      if (item.text && item.link) {
        links.push({
          text: item.text,
          link: item.link,
          docFooterText: item.docFooterText
        });
      }
      if (item.items) {
        recursivelyExtractLinks(item.items);
      }
    }
  }
  recursivelyExtractLinks(sidebar);
  return links;
}
function hasActiveLink(path, items) {
  if (Array.isArray(items)) {
    return items.some((item) => hasActiveLink(path, item));
  }
  return isActive(path, items.link) ? true : items.items ? hasActiveLink(path, items.items) : false;
}
function addBase(items, _base) {
  return [...items].map((_item) => {
    const item = { ..._item };
    const base = item.base || _base;
    if (base && item.link)
      item.link = base + item.link;
    if (item.items)
      item.items = addBase(item.items, base);
    return item;
  });
}
function useSidebar() {
  const { frontmatter, page, theme: theme2 } = useData();
  const is960 = useMediaQuery("(min-width: 960px)");
  const isOpen = ref(false);
  const _sidebar = computed(() => {
    const sidebarConfig = theme2.value.sidebar;
    const relativePath = page.value.relativePath;
    return sidebarConfig ? getSidebar(sidebarConfig, relativePath) : [];
  });
  const sidebar = ref(_sidebar.value);
  watch(_sidebar, (next, prev) => {
    if (JSON.stringify(next) !== JSON.stringify(prev))
      sidebar.value = _sidebar.value;
  });
  const hasSidebar = computed(() => {
    return frontmatter.value.sidebar !== false && sidebar.value.length > 0 && frontmatter.value.layout !== "home";
  });
  const leftAside = computed(() => {
    if (hasAside)
      return frontmatter.value.aside == null ? theme2.value.aside === "left" : frontmatter.value.aside === "left";
    return false;
  });
  const hasAside = computed(() => {
    if (frontmatter.value.layout === "home")
      return false;
    if (frontmatter.value.aside != null)
      return !!frontmatter.value.aside;
    return theme2.value.aside !== false;
  });
  const isSidebarEnabled = computed(() => hasSidebar.value && is960.value);
  const sidebarGroups = computed(() => {
    return hasSidebar.value ? getSidebarGroups(sidebar.value) : [];
  });
  function open() {
    isOpen.value = true;
  }
  function close() {
    isOpen.value = false;
  }
  function toggle() {
    isOpen.value ? close() : open();
  }
  return {
    isOpen,
    sidebar,
    sidebarGroups,
    hasSidebar,
    hasAside,
    leftAside,
    isSidebarEnabled,
    open,
    close,
    toggle
  };
}
function useCloseSidebarOnEscape(isOpen, close) {
  let triggerElement;
  watchEffect(() => {
    triggerElement = isOpen.value ? document.activeElement : void 0;
  });
  onMounted(() => {
    window.addEventListener("keyup", onEscape);
  });
  onUnmounted(() => {
    window.removeEventListener("keyup", onEscape);
  });
  function onEscape(e) {
    if (e.key === "Escape" && isOpen.value) {
      close();
      triggerElement == null ? void 0 : triggerElement.focus();
    }
  }
}
function useSidebarControl(item) {
  const { page, hash } = useData();
  const collapsed = ref(false);
  const collapsible = computed(() => {
    return item.value.collapsed != null;
  });
  const isLink = computed(() => {
    return !!item.value.link;
  });
  const isActiveLink = ref(false);
  const updateIsActiveLink = () => {
    isActiveLink.value = isActive(page.value.relativePath, item.value.link);
  };
  watch([page, item, hash], updateIsActiveLink);
  onMounted(updateIsActiveLink);
  const hasActiveLink$1 = computed(() => {
    if (isActiveLink.value) {
      return true;
    }
    return item.value.items ? hasActiveLink(page.value.relativePath, item.value.items) : false;
  });
  const hasChildren = computed(() => {
    return !!(item.value.items && item.value.items.length);
  });
  watchEffect(() => {
    collapsed.value = !!(collapsible.value && item.value.collapsed);
  });
  watchPostEffect(() => {
    (isActiveLink.value || hasActiveLink$1.value) && (collapsed.value = false);
  });
  function toggle() {
    if (collapsible.value) {
      collapsed.value = !collapsed.value;
    }
  }
  return {
    collapsed,
    collapsible,
    isLink,
    isActiveLink,
    hasActiveLink: hasActiveLink$1,
    hasChildren,
    toggle
  };
}
function useAside() {
  const { hasSidebar } = useSidebar();
  const is960 = useMediaQuery("(min-width: 960px)");
  const is1280 = useMediaQuery("(min-width: 1280px)");
  const isAsideEnabled = computed(() => {
    if (!is1280.value && !is960.value) {
      return false;
    }
    return hasSidebar.value ? is1280.value : is960.value;
  });
  return {
    isAsideEnabled
  };
}
const ignoreRE = /\b(?:VPBadge|header-anchor|footnote-ref|ignore-header)\b/;
const resolvedHeaders = [];
function resolveTitle(theme2) {
  return typeof theme2.outline === "object" && !Array.isArray(theme2.outline) && theme2.outline.label || theme2.outlineTitle || "On this page";
}
function getHeaders(range) {
  const headers = [
    ...document.querySelectorAll(".VPDoc :where(h1,h2,h3,h4,h5,h6)")
  ].filter((el) => el.id && el.hasChildNodes()).map((el) => {
    const level = Number(el.tagName[1]);
    return {
      element: el,
      title: serializeHeader(el),
      link: "#" + el.id,
      level
    };
  });
  return resolveHeaders(headers, range);
}
function serializeHeader(h2) {
  let ret = "";
  for (const node of h2.childNodes) {
    if (node.nodeType === 1) {
      if (ignoreRE.test(node.className))
        continue;
      ret += node.textContent;
    } else if (node.nodeType === 3) {
      ret += node.textContent;
    }
  }
  return ret.trim();
}
function resolveHeaders(headers, range) {
  if (range === false) {
    return [];
  }
  const levelsRange = (typeof range === "object" && !Array.isArray(range) ? range.level : range) || 2;
  const [high, low] = typeof levelsRange === "number" ? [levelsRange, levelsRange] : levelsRange === "deep" ? [2, 6] : levelsRange;
  return buildTree(headers, high, low);
}
function useActiveAnchor(container, marker) {
  const { isAsideEnabled } = useAside();
  const onScroll = throttleAndDebounce(setActiveLink, 100);
  let prevActiveLink = null;
  onMounted(() => {
    requestAnimationFrame(setActiveLink);
    window.addEventListener("scroll", onScroll);
  });
  onUpdated(() => {
    activateLink(location.hash);
  });
  onUnmounted(() => {
    window.removeEventListener("scroll", onScroll);
  });
  function setActiveLink() {
    if (!isAsideEnabled.value) {
      return;
    }
    const scrollY = window.scrollY;
    const innerHeight = window.innerHeight;
    const offsetHeight = document.body.offsetHeight;
    const isBottom = Math.abs(scrollY + innerHeight - offsetHeight) < 1;
    const headers = resolvedHeaders.map(({ element, link: link2 }) => ({
      link: link2,
      top: getAbsoluteTop(element)
    })).filter(({ top }) => !Number.isNaN(top)).sort((a, b) => a.top - b.top);
    if (!headers.length) {
      activateLink(null);
      return;
    }
    if (scrollY < 1) {
      activateLink(null);
      return;
    }
    if (isBottom) {
      activateLink(headers[headers.length - 1].link);
      return;
    }
    let activeLink = null;
    for (const { link: link2, top } of headers) {
      if (top > scrollY + getScrollOffset() + 4) {
        break;
      }
      activeLink = link2;
    }
    activateLink(activeLink);
  }
  function activateLink(hash) {
    if (prevActiveLink) {
      prevActiveLink.classList.remove("active");
    }
    if (hash == null) {
      prevActiveLink = null;
    } else {
      prevActiveLink = container.value.querySelector(`a[href="${decodeURIComponent(hash)}"]`);
    }
    const activeLink = prevActiveLink;
    if (activeLink) {
      activeLink.classList.add("active");
      marker.value.style.top = activeLink.offsetTop + 39 + "px";
      marker.value.style.opacity = "1";
    } else {
      marker.value.style.top = "33px";
      marker.value.style.opacity = "0";
    }
  }
}
function getAbsoluteTop(element) {
  let offsetTop = 0;
  while (element !== document.body) {
    if (element === null) {
      return NaN;
    }
    offsetTop += element.offsetTop;
    element = element.offsetParent;
  }
  return offsetTop;
}
function buildTree(data, min, max) {
  resolvedHeaders.length = 0;
  const result = [];
  const stack = [];
  data.forEach((item) => {
    const node = { ...item, children: [] };
    let parent = stack[stack.length - 1];
    while (parent && parent.level >= node.level) {
      stack.pop();
      parent = stack[stack.length - 1];
    }
    if (node.element.classList.contains("ignore-header") || parent && "shouldIgnore" in parent) {
      stack.push({ level: node.level, shouldIgnore: true });
      return;
    }
    if (node.level > max || node.level < min)
      return;
    resolvedHeaders.push({ element: node.element, link: node.link });
    if (parent)
      parent.children.push(node);
    else
      result.push(node);
    stack.push(node);
  });
  return result;
}
const _sfc_main$13 = /* @__PURE__ */ defineComponent({
  __name: "VPDocOutlineItem",
  __ssrInlineRender: true,
  props: {
    headers: {},
    root: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPDocOutlineItem = resolveComponent("VPDocOutlineItem", true);
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: ["VPDocOutlineItem", _ctx.root ? "root" : "nested"]
      }, _attrs))} data-v-88813e6c><!--[-->`);
      ssrRenderList(_ctx.headers, ({ children, link: link2, title }) => {
        _push(`<li data-v-88813e6c><a class="outline-link"${ssrRenderAttr("href", link2)}${ssrRenderAttr("title", title)} data-v-88813e6c>${ssrInterpolate(title)}</a>`);
        if (children == null ? void 0 : children.length) {
          _push(ssrRenderComponent(_component_VPDocOutlineItem, { headers: children }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$13 = _sfc_main$13.setup;
_sfc_main$13.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDocOutlineItem.vue");
  return _sfc_setup$13 ? _sfc_setup$13(props, ctx) : void 0;
};
const VPDocOutlineItem = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["__scopeId", "data-v-88813e6c"]]);
const _sfc_main$12 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideOutline",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    const headers = shallowRef([]);
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const container = ref();
    const marker = ref();
    useActiveAnchor(container, marker);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        "aria-labelledby": "doc-outline-aria-label",
        class: ["VPDocAsideOutline", { "has-outline": headers.value.length > 0 }],
        ref_key: "container",
        ref: container
      }, _attrs))} data-v-e1662640><div class="content" data-v-e1662640><div class="outline-marker" data-v-e1662640></div><div aria-level="2" class="outline-title" id="doc-outline-aria-label" role="heading" data-v-e1662640>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</div>`);
      _push(ssrRenderComponent(VPDocOutlineItem, {
        headers: headers.value,
        root: true
      }, null, _parent));
      _push(`</div></nav>`);
    };
  }
});
const _sfc_setup$12 = _sfc_main$12.setup;
_sfc_main$12.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideOutline.vue");
  return _sfc_setup$12 ? _sfc_setup$12(props, ctx) : void 0;
};
const VPDocAsideOutline = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["__scopeId", "data-v-e1662640"]]);
const _sfc_main$11 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideCarbonAds",
  __ssrInlineRender: true,
  props: {
    carbonAds: {}
  },
  setup(__props) {
    const VPCarbonAds = () => null;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideCarbonAds" }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VPCarbonAds), { "carbon-ads": _ctx.carbonAds }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$11 = _sfc_main$11.setup;
_sfc_main$11.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideCarbonAds.vue");
  return _sfc_setup$11 ? _sfc_setup$11(props, ctx) : void 0;
};
const _sfc_main$10 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAside",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAside" }, _attrs))} data-v-6ea77097>`);
      ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPDocAsideOutline, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push, _parent);
      _push(`<div class="spacer" data-v-6ea77097></div>`);
      ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push, _parent);
      if (unref(theme2).carbonAds) {
        _push(ssrRenderComponent(_sfc_main$11, {
          "carbon-ads": unref(theme2).carbonAds
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$10 = _sfc_main$10.setup;
_sfc_main$10.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDocAside.vue");
  return _sfc_setup$10 ? _sfc_setup$10(props, ctx) : void 0;
};
const VPDocAside = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["__scopeId", "data-v-6ea77097"]]);
function useEditLink() {
  const { theme: theme2, page } = useData();
  return computed(() => {
    const { text = "Edit this page", pattern = "" } = theme2.value.editLink || {};
    let url;
    if (typeof pattern === "function") {
      url = pattern(page.value);
    } else {
      url = pattern.replace(/:path/g, page.value.filePath);
    }
    return { url, text };
  });
}
function usePrevNext() {
  const { page, theme: theme2, frontmatter } = useData();
  return computed(() => {
    var _a, _b, _c, _d, _e2, _f, _g, _h;
    const sidebar = getSidebar(theme2.value.sidebar, page.value.relativePath);
    const links = getFlatSideBarLinks(sidebar);
    const candidates = uniqBy(links, (link2) => link2.link.replace(/[?#].*$/, ""));
    const index = candidates.findIndex((link2) => {
      return isActive(page.value.relativePath, link2.link);
    });
    const hidePrev = ((_a = theme2.value.docFooter) == null ? void 0 : _a.prev) === false && !frontmatter.value.prev || frontmatter.value.prev === false;
    const hideNext = ((_b = theme2.value.docFooter) == null ? void 0 : _b.next) === false && !frontmatter.value.next || frontmatter.value.next === false;
    return {
      prev: hidePrev ? void 0 : {
        text: (typeof frontmatter.value.prev === "string" ? frontmatter.value.prev : typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.text : void 0) ?? ((_c = candidates[index - 1]) == null ? void 0 : _c.docFooterText) ?? ((_d = candidates[index - 1]) == null ? void 0 : _d.text),
        link: (typeof frontmatter.value.prev === "object" ? frontmatter.value.prev.link : void 0) ?? ((_e2 = candidates[index - 1]) == null ? void 0 : _e2.link)
      },
      next: hideNext ? void 0 : {
        text: (typeof frontmatter.value.next === "string" ? frontmatter.value.next : typeof frontmatter.value.next === "object" ? frontmatter.value.next.text : void 0) ?? ((_f = candidates[index + 1]) == null ? void 0 : _f.docFooterText) ?? ((_g = candidates[index + 1]) == null ? void 0 : _g.text),
        link: (typeof frontmatter.value.next === "object" ? frontmatter.value.next.link : void 0) ?? ((_h = candidates[index + 1]) == null ? void 0 : _h.link)
      }
    };
  });
}
function uniqBy(array, keyFn) {
  const seen = /* @__PURE__ */ new Set();
  return array.filter((item) => {
    const k = keyFn(item);
    return seen.has(k) ? false : seen.add(k);
  });
}
const _sfc_main$$ = /* @__PURE__ */ defineComponent({
  __name: "VPLink",
  __ssrInlineRender: true,
  props: {
    tag: {},
    href: {},
    noIcon: { type: Boolean },
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const tag = computed(() => props.tag ?? (props.href ? "a" : "span"));
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href) || props.target === "_blank"
    );
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(tag.value), mergeProps({
        class: ["VPLink", {
          link: _ctx.href,
          "vp-external-link-icon": isExternal2.value,
          "no-icon": _ctx.noIcon
        }],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: _ctx.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: _ctx.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$$ = _sfc_main$$.setup;
_sfc_main$$.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPLink.vue");
  return _sfc_setup$$ ? _sfc_setup$$(props, ctx) : void 0;
};
const _sfc_main$_ = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooterLastUpdated",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, lang } = useData();
    const date = computed(
      () => new Date(page.value.lastUpdated)
    );
    const isoDatetime = computed(() => date.value.toISOString());
    const datetime = ref("");
    onMounted(() => {
      watchEffect(() => {
        var _a, _b, _c;
        datetime.value = new Intl.DateTimeFormat(
          ((_b = (_a = theme2.value.lastUpdated) == null ? void 0 : _a.formatOptions) == null ? void 0 : _b.forceLocale) ? lang.value : void 0,
          ((_c = theme2.value.lastUpdated) == null ? void 0 : _c.formatOptions) ?? {
            dateStyle: "short",
            timeStyle: "short"
          }
        ).format(date.value);
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<p${ssrRenderAttrs(mergeProps({ class: "VPLastUpdated" }, _attrs))} data-v-ce0a4781>${ssrInterpolate(((_a = unref(theme2).lastUpdated) == null ? void 0 : _a.text) || unref(theme2).lastUpdatedText || "Last updated")}: <time${ssrRenderAttr("datetime", isoDatetime.value)} data-v-ce0a4781>${ssrInterpolate(datetime.value)}</time></p>`);
    };
  }
});
const _sfc_setup$_ = _sfc_main$_.setup;
_sfc_main$_.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDocFooterLastUpdated.vue");
  return _sfc_setup$_ ? _sfc_setup$_(props, ctx) : void 0;
};
const VPDocFooterLastUpdated = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["__scopeId", "data-v-ce0a4781"]]);
const _sfc_main$Z = /* @__PURE__ */ defineComponent({
  __name: "VPDocFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, page, frontmatter } = useData();
    const editLink = useEditLink();
    const control = usePrevNext();
    const hasEditLink = computed(
      () => theme2.value.editLink && frontmatter.value.editLink !== false
    );
    const hasLastUpdated = computed(() => page.value.lastUpdated);
    const showFooter = computed(
      () => hasEditLink.value || hasLastUpdated.value || control.value.prev || control.value.next
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      if (showFooter.value) {
        _push(`<footer${ssrRenderAttrs(mergeProps({ class: "VPDocFooter" }, _attrs))} data-v-549e2425>`);
        ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push, _parent);
        if (hasEditLink.value || hasLastUpdated.value) {
          _push(`<div class="edit-info" data-v-549e2425>`);
          if (hasEditLink.value) {
            _push(`<div class="edit-link" data-v-549e2425>`);
            _push(ssrRenderComponent(_sfc_main$$, {
              class: "edit-link-button",
              href: unref(editLink).url,
              "no-icon": true
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="vpi-square-pen edit-link-icon" data-v-549e2425${_scopeId}></span> ${ssrInterpolate(unref(editLink).text)}`);
                } else {
                  return [
                    createVNode("span", { class: "vpi-square-pen edit-link-icon" }),
                    createTextVNode(" " + toDisplayString(unref(editLink).text), 1)
                  ];
                }
              }),
              _: 1
            }, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          if (hasLastUpdated.value) {
            _push(`<div class="last-updated" data-v-549e2425>`);
            _push(ssrRenderComponent(VPDocFooterLastUpdated, null, null, _parent));
            _push(`</div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (((_a = unref(control).prev) == null ? void 0 : _a.link) || ((_b = unref(control).next) == null ? void 0 : _b.link)) {
          _push(`<nav class="prev-next" aria-labelledby="doc-footer-aria-label" data-v-549e2425><span class="visually-hidden" id="doc-footer-aria-label" data-v-549e2425>Pager</span><div class="pager" data-v-549e2425>`);
          if ((_c = unref(control).prev) == null ? void 0 : _c.link) {
            _push(ssrRenderComponent(_sfc_main$$, {
              class: "pager-link prev",
              href: unref(control).prev.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-549e2425${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.prev) || "Previous page"}</span><span class="title" data-v-549e2425${_scopeId}>${unref(control).prev.text ?? ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.prev) || "Previous page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).prev.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="pager" data-v-549e2425>`);
          if ((_d = unref(control).next) == null ? void 0 : _d.link) {
            _push(ssrRenderComponent(_sfc_main$$, {
              class: "pager-link next",
              href: unref(control).next.link
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                var _a2, _b2;
                if (_push2) {
                  _push2(`<span class="desc" data-v-549e2425${_scopeId}>${((_a2 = unref(theme2).docFooter) == null ? void 0 : _a2.next) || "Next page"}</span><span class="title" data-v-549e2425${_scopeId}>${unref(control).next.text ?? ""}</span>`);
                } else {
                  return [
                    createVNode("span", {
                      class: "desc",
                      innerHTML: ((_b2 = unref(theme2).docFooter) == null ? void 0 : _b2.next) || "Next page"
                    }, null, 8, ["innerHTML"]),
                    createVNode("span", {
                      class: "title",
                      innerHTML: unref(control).next.text
                    }, null, 8, ["innerHTML"])
                  ];
                }
              }),
              _: 1
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div></nav>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$Z = _sfc_main$Z.setup;
_sfc_main$Z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDocFooter.vue");
  return _sfc_setup$Z ? _sfc_setup$Z(props, ctx) : void 0;
};
const VPDocFooter = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["__scopeId", "data-v-549e2425"]]);
const _sfc_main$Y = /* @__PURE__ */ defineComponent({
  __name: "VPDoc",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const { hasSidebar, hasAside, leftAside } = useSidebar();
    const pageName = computed(
      () => route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPDoc", { "has-sidebar": unref(hasSidebar), "has-aside": unref(hasAside) }]
      }, _attrs))} data-v-b3ae3e17>`);
      ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push, _parent);
      _push(`<div class="container" data-v-b3ae3e17>`);
      if (unref(hasAside)) {
        _push(`<div class="${ssrRenderClass([{ "left-aside": unref(leftAside) }, "aside"])}" data-v-b3ae3e17><div class="aside-curtain" data-v-b3ae3e17></div><div class="aside-container" data-v-b3ae3e17><div class="aside-content" data-v-b3ae3e17>`);
        _push(ssrRenderComponent(VPDocAside, null, {
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="content" data-v-b3ae3e17><div class="content-container" data-v-b3ae3e17>`);
      ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push, _parent);
      _push(`<main class="main" data-v-b3ae3e17>`);
      _push(ssrRenderComponent(_component_Content, {
        class: ["vp-doc", [
          pageName.value,
          unref(theme2).externalLinkIcon && "external-link-icon-enabled"
        ]]
      }, null, _parent));
      _push(`</main>`);
      _push(ssrRenderComponent(VPDocFooter, null, {
        "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push, _parent);
      _push(`</div></div></div>`);
      ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$Y = _sfc_main$Y.setup;
_sfc_main$Y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDoc.vue");
  return _sfc_setup$Y ? _sfc_setup$Y(props, ctx) : void 0;
};
const VPDoc = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["__scopeId", "data-v-b3ae3e17"]]);
const _sfc_main$X = /* @__PURE__ */ defineComponent({
  __name: "VPButton",
  __ssrInlineRender: true,
  props: {
    tag: {},
    size: { default: "medium" },
    theme: { default: "brand" },
    text: {},
    href: {},
    target: {},
    rel: {}
  },
  setup(__props) {
    const props = __props;
    const isExternal2 = computed(
      () => props.href && EXTERNAL_URL_RE.test(props.href)
    );
    const component = computed(() => {
      return props.tag || (props.href ? "a" : "button");
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(component.value), mergeProps({
        class: ["VPButton", [_ctx.size, _ctx.theme]],
        href: _ctx.href ? unref(normalizeLink$1)(_ctx.href) : void 0,
        target: props.target ?? (isExternal2.value ? "_blank" : void 0),
        rel: props.rel ?? (isExternal2.value ? "noreferrer" : void 0)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(_ctx.text)}`);
          } else {
            return [
              createTextVNode(toDisplayString(_ctx.text), 1)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$X = _sfc_main$X.setup;
_sfc_main$X.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPButton.vue");
  return _sfc_setup$X ? _sfc_setup$X(props, ctx) : void 0;
};
const VPButton = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["__scopeId", "data-v-c906b091"]]);
const _sfc_main$W = /* @__PURE__ */ defineComponent({
  ...{ inheritAttrs: false },
  __name: "VPImage",
  __ssrInlineRender: true,
  props: {
    image: {},
    alt: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPImage = resolveComponent("VPImage", true);
      if (_ctx.image) {
        _push(`<!--[-->`);
        if (typeof _ctx.image === "string" || "src" in _ctx.image) {
          _push(`<img${ssrRenderAttrs(mergeProps({ class: "VPImage" }, typeof _ctx.image === "string" ? _ctx.$attrs : { ..._ctx.image, ..._ctx.$attrs }, {
            src: unref(withBase)(typeof _ctx.image === "string" ? _ctx.image : _ctx.image.src),
            alt: _ctx.alt ?? (typeof _ctx.image === "string" ? "" : _ctx.image.alt || "")
          }))} data-v-5d2412d0>`);
        } else {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "dark",
            image: _ctx.image.dark,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(ssrRenderComponent(_component_VPImage, mergeProps({
            class: "light",
            image: _ctx.image.light,
            alt: _ctx.image.alt
          }, _ctx.$attrs), null, _parent));
          _push(`<!--]-->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$W = _sfc_main$W.setup;
_sfc_main$W.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPImage.vue");
  return _sfc_setup$W ? _sfc_setup$W(props, ctx) : void 0;
};
const VPImage = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["__scopeId", "data-v-5d2412d0"]]);
const _sfc_main$V = /* @__PURE__ */ defineComponent({
  __name: "VPHero",
  __ssrInlineRender: true,
  props: {
    name: {},
    text: {},
    tagline: {},
    image: {},
    actions: {}
  },
  setup(__props) {
    const heroImageSlotExists = inject("hero-image-slot-exists");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHero", { "has-image": _ctx.image || unref(heroImageSlotExists) }]
      }, _attrs))} data-v-a967fe30><div class="container" data-v-a967fe30><div class="main" data-v-a967fe30>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, () => {
        _push(`<h1 class="heading" data-v-a967fe30>`);
        if (_ctx.name) {
          _push(`<span class="name clip" data-v-a967fe30>${_ctx.name ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.text) {
          _push(`<span class="text" data-v-a967fe30>${_ctx.text ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</h1>`);
        if (_ctx.tagline) {
          _push(`<p class="tagline" data-v-a967fe30>${_ctx.tagline ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
      }, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push, _parent);
      if (_ctx.actions) {
        _push(`<div class="actions" data-v-a967fe30><!--[-->`);
        ssrRenderList(_ctx.actions, (action) => {
          _push(`<div class="action" data-v-a967fe30>`);
          _push(ssrRenderComponent(VPButton, {
            tag: "a",
            size: "medium",
            theme: action.theme,
            text: action.text,
            href: action.link,
            target: action.target,
            rel: action.rel
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push, _parent);
      _push(`</div>`);
      if (_ctx.image || unref(heroImageSlotExists)) {
        _push(`<div class="image" data-v-a967fe30><div class="image-container" data-v-a967fe30><div class="image-bg" data-v-a967fe30></div>`);
        ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, () => {
          if (_ctx.image) {
            _push(ssrRenderComponent(VPImage, {
              class: "image-src",
              image: _ctx.image
            }, null, _parent));
          } else {
            _push(`<!---->`);
          }
        }, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$V = _sfc_main$V.setup;
_sfc_main$V.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPHero.vue");
  return _sfc_setup$V ? _sfc_setup$V(props, ctx) : void 0;
};
const VPHero = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["__scopeId", "data-v-a967fe30"]]);
const _sfc_main$U = /* @__PURE__ */ defineComponent({
  __name: "VPHomeHero",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).hero) {
        _push(ssrRenderComponent(VPHero, mergeProps({
          class: "VPHomeHero",
          name: unref(fm).hero.name,
          text: unref(fm).hero.text,
          tagline: unref(fm).hero.tagline,
          image: unref(fm).hero.image,
          actions: unref(fm).hero.actions
        }, _attrs), {
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before")
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info")
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after")
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after")
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image")
              ];
            }
          }),
          _: 3
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$U = _sfc_main$U.setup;
_sfc_main$U.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPHomeHero.vue");
  return _sfc_setup$U ? _sfc_setup$U(props, ctx) : void 0;
};
const _sfc_main$T = /* @__PURE__ */ defineComponent({
  __name: "VPFeature",
  __ssrInlineRender: true,
  props: {
    icon: {},
    title: {},
    details: {},
    link: {},
    linkText: {},
    rel: {},
    target: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: "VPFeature",
        href: _ctx.link,
        rel: _ctx.rel,
        target: _ctx.target,
        "no-icon": true,
        tag: _ctx.link ? "a" : "div"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<article class="box" data-v-b2891c40${_scopeId}>`);
            if (typeof _ctx.icon === "object" && _ctx.icon.wrap) {
              _push2(`<div class="icon" data-v-b2891c40${_scopeId}>`);
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else if (typeof _ctx.icon === "object") {
              _push2(ssrRenderComponent(VPImage, {
                image: _ctx.icon,
                alt: _ctx.icon.alt,
                height: _ctx.icon.height || 48,
                width: _ctx.icon.width || 48
              }, null, _parent2, _scopeId));
            } else if (_ctx.icon) {
              _push2(`<div class="icon" data-v-b2891c40${_scopeId}>${_ctx.icon ?? ""}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<h2 class="title" data-v-b2891c40${_scopeId}>${_ctx.title ?? ""}</h2>`);
            if (_ctx.details) {
              _push2(`<p class="details" data-v-b2891c40${_scopeId}>${_ctx.details ?? ""}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.linkText) {
              _push2(`<div class="link-text" data-v-b2891c40${_scopeId}><p class="link-text-value" data-v-b2891c40${_scopeId}>${ssrInterpolate(_ctx.linkText)} <span class="vpi-arrow-right link-text-icon" data-v-b2891c40${_scopeId}></span></p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</article>`);
          } else {
            return [
              createVNode("article", { class: "box" }, [
                typeof _ctx.icon === "object" && _ctx.icon.wrap ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "icon"
                }, [
                  createVNode(VPImage, {
                    image: _ctx.icon,
                    alt: _ctx.icon.alt,
                    height: _ctx.icon.height || 48,
                    width: _ctx.icon.width || 48
                  }, null, 8, ["image", "alt", "height", "width"])
                ])) : typeof _ctx.icon === "object" ? (openBlock(), createBlock(VPImage, {
                  key: 1,
                  image: _ctx.icon,
                  alt: _ctx.icon.alt,
                  height: _ctx.icon.height || 48,
                  width: _ctx.icon.width || 48
                }, null, 8, ["image", "alt", "height", "width"])) : _ctx.icon ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "icon",
                  innerHTML: _ctx.icon
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                createVNode("h2", {
                  class: "title",
                  innerHTML: _ctx.title
                }, null, 8, ["innerHTML"]),
                _ctx.details ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "details",
                  innerHTML: _ctx.details
                }, null, 8, ["innerHTML"])) : createCommentVNode("", true),
                _ctx.linkText ? (openBlock(), createBlock("div", {
                  key: 4,
                  class: "link-text"
                }, [
                  createVNode("p", { class: "link-text-value" }, [
                    createTextVNode(toDisplayString(_ctx.linkText) + " ", 1),
                    createVNode("span", { class: "vpi-arrow-right link-text-icon" })
                  ])
                ])) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$T = _sfc_main$T.setup;
_sfc_main$T.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPFeature.vue");
  return _sfc_setup$T ? _sfc_setup$T(props, ctx) : void 0;
};
const VPFeature = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["__scopeId", "data-v-b2891c40"]]);
const _sfc_main$S = /* @__PURE__ */ defineComponent({
  __name: "VPFeatures",
  __ssrInlineRender: true,
  props: {
    features: {}
  },
  setup(__props) {
    const props = __props;
    const grid = computed(() => {
      const length = props.features.length;
      if (!length) {
        return;
      } else if (length === 2) {
        return "grid-2";
      } else if (length === 3) {
        return "grid-3";
      } else if (length % 3 === 0) {
        return "grid-6";
      } else if (length > 3) {
        return "grid-4";
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.features) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPFeatures" }, _attrs))} data-v-9b4dc5bd><div class="container" data-v-9b4dc5bd><div class="items" data-v-9b4dc5bd><!--[-->`);
        ssrRenderList(_ctx.features, (feature) => {
          _push(`<div class="${ssrRenderClass([[grid.value], "item"])}" data-v-9b4dc5bd>`);
          _push(ssrRenderComponent(VPFeature, {
            icon: feature.icon,
            title: feature.title,
            details: feature.details,
            link: feature.link,
            "link-text": feature.linkText,
            rel: feature.rel,
            target: feature.target
          }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$S = _sfc_main$S.setup;
_sfc_main$S.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPFeatures.vue");
  return _sfc_setup$S ? _sfc_setup$S(props, ctx) : void 0;
};
const VPFeatures = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["__scopeId", "data-v-9b4dc5bd"]]);
const _sfc_main$R = /* @__PURE__ */ defineComponent({
  __name: "VPHomeFeatures",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter: fm } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(fm).features) {
        _push(ssrRenderComponent(VPFeatures, mergeProps({
          class: "VPHomeFeatures",
          features: unref(fm).features
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$R = _sfc_main$R.setup;
_sfc_main$R.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPHomeFeatures.vue");
  return _sfc_setup$R ? _sfc_setup$R(props, ctx) : void 0;
};
const _sfc_main$Q = /* @__PURE__ */ defineComponent({
  __name: "VPHomeContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { width: vw } = useWindowSize({
      initialWidth: 0,
      includeScrollbar: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "vp-doc container",
        style: unref(vw) ? { "--vp-offset": `calc(50% - ${unref(vw) / 2}px)` } : {}
      }, _attrs))} data-v-d44131bc>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$Q = _sfc_main$Q.setup;
_sfc_main$Q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPHomeContent.vue");
  return _sfc_setup$Q ? _sfc_setup$Q(props, ctx) : void 0;
};
const VPHomeContent = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["__scopeId", "data-v-d44131bc"]]);
const _sfc_main$P = /* @__PURE__ */ defineComponent({
  __name: "VPHome",
  __ssrInlineRender: true,
  setup(__props) {
    const { frontmatter, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPHome", {
          "external-link-icon-enabled": unref(theme2).externalLinkIcon
        }]
      }, _attrs))} data-v-c0b6baa6>`);
      ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$U, null, {
        "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
            ];
          }
        }),
        "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
            ];
          }
        }),
        "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
            ];
          }
        }),
        "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push, _parent);
      ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$R, null, null, _parent));
      ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push, _parent);
      if (unref(frontmatter).markdownStyles !== false) {
        _push(ssrRenderComponent(VPHomeContent, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_Content, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_Content)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_Content, null, null, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$P = _sfc_main$P.setup;
_sfc_main$P.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPHome.vue");
  return _sfc_setup$P ? _sfc_setup$P(props, ctx) : void 0;
};
const VPHome = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["__scopeId", "data-v-c0b6baa6"]]);
const _sfc_main$O = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Content = resolveComponent("Content");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPPage" }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_Content, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$O = _sfc_main$O.setup;
_sfc_main$O.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPPage.vue");
  return _sfc_setup$O ? _sfc_setup$O(props, ctx) : void 0;
};
const VPPage = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$N = /* @__PURE__ */ defineComponent({
  __name: "VPContent",
  __ssrInlineRender: true,
  setup(__props) {
    const { page, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPContent", {
          "has-sidebar": unref(hasSidebar),
          "is-home": unref(frontmatter).layout === "home"
        }],
        id: "VPContent"
      }, _attrs))} data-v-92c65b85>`);
      if (unref(page).isNotFound) {
        ssrRenderSlot(_ctx.$slots, "not-found", {}, () => {
          _push(ssrRenderComponent(NotFound, null, null, _parent));
        }, _push, _parent);
      } else if (unref(frontmatter).layout === "page") {
        _push(ssrRenderComponent(VPPage, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout === "home") {
        _push(ssrRenderComponent(VPHome, null, {
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      } else if (unref(frontmatter).layout && unref(frontmatter).layout !== "doc") {
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(frontmatter).layout), null, null), _parent);
      } else {
        _push(ssrRenderComponent(VPDoc, null, {
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$N = _sfc_main$N.setup;
_sfc_main$N.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPContent.vue");
  return _sfc_setup$N ? _sfc_setup$N(props, ctx) : void 0;
};
const VPContent = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["__scopeId", "data-v-92c65b85"]]);
const _sfc_main$M = /* @__PURE__ */ defineComponent({
  __name: "VPFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).footer && unref(frontmatter).footer !== false) {
        _push(`<footer${ssrRenderAttrs(mergeProps({
          class: ["VPFooter", { "has-sidebar": unref(hasSidebar) }]
        }, _attrs))} data-v-d4d5a044><div class="container" data-v-d4d5a044>`);
        if (unref(theme2).footer.message) {
          _push(`<p class="message" data-v-d4d5a044>${unref(theme2).footer.message ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(theme2).footer.copyright) {
          _push(`<p class="copyright" data-v-d4d5a044>${unref(theme2).footer.copyright ?? ""}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></footer>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$M = _sfc_main$M.setup;
_sfc_main$M.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPFooter.vue");
  return _sfc_setup$M ? _sfc_setup$M(props, ctx) : void 0;
};
const VPFooter = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["__scopeId", "data-v-d4d5a044"]]);
function useLocalNav() {
  const { theme: theme2, frontmatter } = useData();
  const headers = shallowRef([]);
  const hasLocalNav = computed(() => {
    return headers.value.length > 0;
  });
  onContentUpdated(() => {
    headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
  });
  return {
    headers,
    hasLocalNav
  };
}
const _sfc_main$L = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNavOutlineDropdown",
  __ssrInlineRender: true,
  props: {
    headers: {},
    navHeight: {}
  },
  setup(__props) {
    const { theme: theme2 } = useData();
    const open = ref(false);
    const vh = ref(0);
    const main = ref();
    ref();
    function closeOnClickOutside(e) {
      var _a;
      if (!((_a = main.value) == null ? void 0 : _a.contains(e.target))) {
        open.value = false;
      }
    }
    watch(open, (value) => {
      if (value) {
        document.addEventListener("click", closeOnClickOutside);
        return;
      }
      document.removeEventListener("click", closeOnClickOutside);
    });
    onKeyStroke("Escape", () => {
      open.value = false;
    });
    onContentUpdated(() => {
      open.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPLocalNavOutlineDropdown",
        style: { "--vp-vh": vh.value + "px" },
        ref_key: "main",
        ref: main
      }, _attrs))} data-v-b0b77412>`);
      if (_ctx.headers.length > 0) {
        _push(`<button class="${ssrRenderClass({ open: open.value })}" data-v-b0b77412><span class="menu-text" data-v-b0b77412>${ssrInterpolate(unref(resolveTitle)(unref(theme2)))}</span><span class="vpi-chevron-right icon" data-v-b0b77412></span></button>`);
      } else {
        _push(`<button data-v-b0b77412>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</button>`);
      }
      if (open.value) {
        _push(`<div class="items" data-v-b0b77412><div class="header" data-v-b0b77412><a class="top-link" href="#" data-v-b0b77412>${ssrInterpolate(unref(theme2).returnToTopLabel || "Return to top")}</a></div><div class="outline" data-v-b0b77412>`);
        _push(ssrRenderComponent(VPDocOutlineItem, { headers: _ctx.headers }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$L = _sfc_main$L.setup;
_sfc_main$L.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPLocalNavOutlineDropdown.vue");
  return _sfc_setup$L ? _sfc_setup$L(props, ctx) : void 0;
};
const VPLocalNavOutlineDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["__scopeId", "data-v-b0b77412"]]);
const _sfc_main$K = /* @__PURE__ */ defineComponent({
  __name: "VPLocalNav",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  emits: ["open-menu"],
  setup(__props) {
    const { theme: theme2, frontmatter } = useData();
    const { hasSidebar } = useSidebar();
    const { headers } = useLocalNav();
    const { y } = useWindowScroll();
    const navHeight = ref(0);
    onMounted(() => {
      navHeight.value = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--vp-nav-height"
        )
      );
    });
    onContentUpdated(() => {
      headers.value = getHeaders(frontmatter.value.outline ?? theme2.value.outline);
    });
    const empty = computed(() => {
      return headers.value.length === 0;
    });
    const emptyAndNoSidebar = computed(() => {
      return empty.value && !hasSidebar.value;
    });
    const classes = computed(() => {
      return {
        VPLocalNav: true,
        "has-sidebar": hasSidebar.value,
        empty: empty.value,
        fixed: emptyAndNoSidebar.value
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(frontmatter).layout !== "home" && (!emptyAndNoSidebar.value || unref(y) >= navHeight.value)) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: classes.value }, _attrs))} data-v-c9dc2bea><div class="container" data-v-c9dc2bea>`);
        if (unref(hasSidebar)) {
          _push(`<button class="menu"${ssrRenderAttr("aria-expanded", _ctx.open)} aria-controls="VPSidebarNav" data-v-c9dc2bea><span class="vpi-align-left menu-icon" data-v-c9dc2bea></span><span class="menu-text" data-v-c9dc2bea>${ssrInterpolate(unref(theme2).sidebarMenuLabel || "Menu")}</span></button>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(VPLocalNavOutlineDropdown, {
          headers: unref(headers),
          navHeight: navHeight.value
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$K = _sfc_main$K.setup;
_sfc_main$K.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPLocalNav.vue");
  return _sfc_setup$K ? _sfc_setup$K(props, ctx) : void 0;
};
const VPLocalNav = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["__scopeId", "data-v-c9dc2bea"]]);
function useNav() {
  const isScreenOpen = ref(false);
  function openScreen() {
    isScreenOpen.value = true;
    window.addEventListener("resize", closeScreenOnTabletWindow);
  }
  function closeScreen() {
    isScreenOpen.value = false;
    window.removeEventListener("resize", closeScreenOnTabletWindow);
  }
  function toggleScreen() {
    isScreenOpen.value ? closeScreen() : openScreen();
  }
  function closeScreenOnTabletWindow() {
    window.outerWidth >= 768 && closeScreen();
  }
  const route = useRoute();
  watch(() => route.path, closeScreen);
  return {
    isScreenOpen,
    openScreen,
    closeScreen,
    toggleScreen
  };
}
const _sfc_main$J = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: "VPSwitch",
    type: "button",
    role: "switch"
  }, _attrs))} data-v-d640dbf3><span class="check" data-v-d640dbf3>`);
  if (_ctx.$slots.default) {
    _push(`<span class="icon" data-v-d640dbf3>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</span></button>`);
}
const _sfc_setup$J = _sfc_main$J.setup;
_sfc_main$J.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSwitch.vue");
  return _sfc_setup$J ? _sfc_setup$J(props, ctx) : void 0;
};
const VPSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-d640dbf3"]]);
const _sfc_main$I = /* @__PURE__ */ defineComponent({
  __name: "VPSwitchAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark, theme: theme2 } = useData();
    const toggleAppearance = inject("toggle-appearance", () => {
      isDark.value = !isDark.value;
    });
    const switchTitle = ref("");
    watchPostEffect(() => {
      switchTitle.value = isDark.value ? theme2.value.lightModeSwitchTitle || "Switch to light theme" : theme2.value.darkModeSwitchTitle || "Switch to dark theme";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPSwitch, mergeProps({
        title: switchTitle.value,
        class: "VPSwitchAppearance",
        "aria-checked": unref(isDark),
        onClick: unref(toggleAppearance)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="vpi-sun sun" data-v-ec01d911${_scopeId}></span><span class="vpi-moon moon" data-v-ec01d911${_scopeId}></span>`);
          } else {
            return [
              createVNode("span", { class: "vpi-sun sun" }),
              createVNode("span", { class: "vpi-moon moon" })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$I = _sfc_main$I.setup;
_sfc_main$I.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSwitchAppearance.vue");
  return _sfc_setup$I ? _sfc_setup$I(props, ctx) : void 0;
};
const VPSwitchAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["__scopeId", "data-v-ec01d911"]]);
const _sfc_main$H = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarAppearance" }, _attrs))} data-v-0a6f98c0>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$H = _sfc_main$H.setup;
_sfc_main$H.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarAppearance.vue");
  return _sfc_setup$H ? _sfc_setup$H(props, ctx) : void 0;
};
const VPNavBarAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["__scopeId", "data-v-0a6f98c0"]]);
const focusedElement = ref();
let active = false;
let listeners = 0;
function useFlyout(options) {
  const focus = ref(false);
  if (inBrowser) {
    !active && activateFocusTracking();
    listeners++;
    const unwatch = watch(focusedElement, (el) => {
      var _a, _b, _c;
      if (el === options.el.value || ((_a = options.el.value) == null ? void 0 : _a.contains(el))) {
        focus.value = true;
        (_b = options.onFocus) == null ? void 0 : _b.call(options);
      } else {
        focus.value = false;
        (_c = options.onBlur) == null ? void 0 : _c.call(options);
      }
    });
    onUnmounted(() => {
      unwatch();
      listeners--;
      if (!listeners) {
        deactivateFocusTracking();
      }
    });
  }
  return readonly(focus);
}
function activateFocusTracking() {
  document.addEventListener("focusin", handleFocusIn);
  active = true;
  focusedElement.value = document.activeElement;
}
function deactivateFocusTracking() {
  document.removeEventListener("focusin", handleFocusIn);
}
function handleFocusIn() {
  focusedElement.value = document.activeElement;
}
const _sfc_main$G = /* @__PURE__ */ defineComponent({
  __name: "VPMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuLink" }, _attrs))} data-v-1d5818a8>`);
      _push(ssrRenderComponent(_sfc_main$$, {
        class: {
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-1d5818a8${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$G = _sfc_main$G.setup;
_sfc_main$G.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPMenuLink.vue");
  return _sfc_setup$G ? _sfc_setup$G(props, ctx) : void 0;
};
const VPMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["__scopeId", "data-v-1d5818a8"]]);
const _sfc_main$F = /* @__PURE__ */ defineComponent({
  __name: "VPMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenuGroup" }, _attrs))} data-v-9f029354>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-9f029354>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$F = _sfc_main$F.setup;
_sfc_main$F.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPMenuGroup.vue");
  return _sfc_setup$F ? _sfc_setup$F(props, ctx) : void 0;
};
const VPMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["__scopeId", "data-v-9f029354"]]);
const _sfc_main$E = /* @__PURE__ */ defineComponent({
  __name: "VPMenu",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPMenu" }, _attrs))} data-v-cd176524>`);
      if (_ctx.items) {
        _push(`<div class="items" data-v-cd176524><!--[-->`);
        ssrRenderList(_ctx.items, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(VPMenuGroup, {
              text: item.text,
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup$E = _sfc_main$E.setup;
_sfc_main$E.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPMenu.vue");
  return _sfc_setup$E ? _sfc_setup$E(props, ctx) : void 0;
};
const VPMenu = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["__scopeId", "data-v-cd176524"]]);
const _sfc_main$D = /* @__PURE__ */ defineComponent({
  __name: "VPFlyout",
  __ssrInlineRender: true,
  props: {
    icon: {},
    button: {},
    label: {},
    items: {}
  },
  setup(__props) {
    const open = ref(false);
    const el = ref();
    useFlyout({ el, onBlur });
    function onBlur() {
      open.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "VPFlyout",
        ref_key: "el",
        ref: el
      }, _attrs))} data-v-f1ea6045><button type="button" class="button" aria-haspopup="true"${ssrRenderAttr("aria-expanded", open.value)}${ssrRenderAttr("aria-label", _ctx.label)} data-v-f1ea6045>`);
      if (_ctx.button || _ctx.icon) {
        _push(`<span class="text" data-v-f1ea6045>`);
        if (_ctx.icon) {
          _push(`<span class="${ssrRenderClass([_ctx.icon, "option-icon"])}" data-v-f1ea6045></span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.button) {
          _push(`<span data-v-f1ea6045>${_ctx.button ?? ""}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="vpi-chevron-down text-icon" data-v-f1ea6045></span></span>`);
      } else {
        _push(`<span class="vpi-more-horizontal icon" data-v-f1ea6045></span>`);
      }
      _push(`</button><div class="menu" data-v-f1ea6045>`);
      _push(ssrRenderComponent(VPMenu, { items: _ctx.items }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$D = _sfc_main$D.setup;
_sfc_main$D.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPFlyout.vue");
  return _sfc_setup$D ? _sfc_setup$D(props, ctx) : void 0;
};
const VPFlyout = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["__scopeId", "data-v-f1ea6045"]]);
const _sfc_main$C = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLink",
  __ssrInlineRender: true,
  props: {
    icon: {},
    link: {},
    ariaLabel: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const el = ref();
    onMounted(async () => {
      var _a2;
      await nextTick();
      const span = (_a2 = el.value) == null ? void 0 : _a2.children[0];
      if (span instanceof HTMLElement && span.className.startsWith("vpi-social-") && (getComputedStyle(span).maskImage || getComputedStyle(span).webkitMaskImage) === "none") {
        span.style.setProperty(
          "--icon",
          `url('https://api.iconify.design/simple-icons/${props.icon}.svg')`
        );
      }
    });
    const svg = computed(() => {
      if (typeof props.icon === "object") return props.icon.svg;
      return `<span class="vpi-social-${props.icon}"></span>`;
    });
    {
      typeof props.icon === "string" && ((_a = useSSRContext()) == null ? void 0 : _a.vpSocialIcons.add(props.icon));
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        ref_key: "el",
        ref: el,
        class: "VPSocialLink no-icon",
        href: _ctx.link,
        "aria-label": _ctx.ariaLabel ?? (typeof _ctx.icon === "string" ? _ctx.icon : ""),
        target: "_blank",
        rel: "noopener"
      }, _attrs))} data-v-ffcb2918>${svg.value ?? ""}</a>`);
    };
  }
});
const _sfc_setup$C = _sfc_main$C.setup;
_sfc_main$C.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSocialLink.vue");
  return _sfc_setup$C ? _sfc_setup$C(props, ctx) : void 0;
};
const VPSocialLink = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["__scopeId", "data-v-ffcb2918"]]);
const _sfc_main$B = /* @__PURE__ */ defineComponent({
  __name: "VPSocialLinks",
  __ssrInlineRender: true,
  props: {
    links: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPSocialLinks" }, _attrs))} data-v-54583bb9><!--[-->`);
      ssrRenderList(_ctx.links, ({ link: link2, icon, ariaLabel }) => {
        _push(ssrRenderComponent(VPSocialLink, {
          key: link2,
          icon,
          link: link2,
          ariaLabel
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$B = _sfc_main$B.setup;
_sfc_main$B.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSocialLinks.vue");
  return _sfc_setup$B ? _sfc_setup$B(props, ctx) : void 0;
};
const VPSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["__scopeId", "data-v-54583bb9"]]);
const _sfc_main$A = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarExtra",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const hasExtraContent = computed(
      () => localeLinks.value.length && currentLang.value.label || site.value.appearance || theme2.value.socialLinks
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (hasExtraContent.value) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarExtra",
          label: "extra navigation"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(localeLinks).length && unref(currentLang).label) {
                _push2(`<div class="group translations" data-v-c0c49d2c${_scopeId}><p class="trans-title" data-v-c0c49d2c${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
                ssrRenderList(unref(localeLinks), (locale) => {
                  _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
                _push2(`<div class="group" data-v-c0c49d2c${_scopeId}><div class="item appearance" data-v-c0c49d2c${_scopeId}><p class="label" data-v-c0c49d2c${_scopeId}>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p><div class="appearance-action" data-v-c0c49d2c${_scopeId}>`);
                _push2(ssrRenderComponent(VPSwitchAppearance, null, null, _parent2, _scopeId));
                _push2(`</div></div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(theme2).socialLinks) {
                _push2(`<div class="group" data-v-c0c49d2c${_scopeId}><div class="item social-links" data-v-c0c49d2c${_scopeId}>`);
                _push2(ssrRenderComponent(VPSocialLinks, {
                  class: "social-links-list",
                  links: unref(theme2).socialLinks
                }, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                unref(localeLinks).length && unref(currentLang).label ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "group translations"
                }, [
                  createVNode("p", { class: "trans-title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])) : createCommentVNode("", true),
                unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto" ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "group"
                }, [
                  createVNode("div", { class: "item appearance" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(theme2).darkModeSwitchLabel || "Appearance"), 1),
                    createVNode("div", { class: "appearance-action" }, [
                      createVNode(VPSwitchAppearance)
                    ])
                  ])
                ])) : createCommentVNode("", true),
                unref(theme2).socialLinks ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "group"
                }, [
                  createVNode("div", { class: "item social-links" }, [
                    createVNode(VPSocialLinks, {
                      class: "social-links-list",
                      links: unref(theme2).socialLinks
                    }, null, 8, ["links"])
                  ])
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$A = _sfc_main$A.setup;
_sfc_main$A.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarExtra.vue");
  return _sfc_setup$A ? _sfc_setup$A(props, ctx) : void 0;
};
const VPNavBarExtra = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["__scopeId", "data-v-c0c49d2c"]]);
const _sfc_main$z = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarHamburger",
  __ssrInlineRender: true,
  props: {
    active: { type: Boolean }
  },
  emits: ["click"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: ["VPNavBarHamburger", { active: _ctx.active }],
        "aria-label": "mobile navigation",
        "aria-expanded": _ctx.active,
        "aria-controls": "VPNavScreen"
      }, _attrs))} data-v-a2487f38><span class="container" data-v-a2487f38><span class="top" data-v-a2487f38></span><span class="middle" data-v-a2487f38></span><span class="bottom" data-v-a2487f38></span></span></button>`);
    };
  }
});
const _sfc_setup$z = _sfc_main$z.setup;
_sfc_main$z.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarHamburger.vue");
  return _sfc_setup$z ? _sfc_setup$z(props, ctx) : void 0;
};
const VPNavBarHamburger = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["__scopeId", "data-v-a2487f38"]]);
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const { page } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: {
          VPNavBarMenuLink: true,
          active: unref(isActive)(
            unref(page).relativePath,
            _ctx.item.activeMatch || _ctx.item.link,
            !!_ctx.item.activeMatch
          )
        },
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon,
        tabindex: "0"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-d480e3ba${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$y = _sfc_main$y.setup;
_sfc_main$y.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuLink.vue");
  return _sfc_setup$y ? _sfc_setup$y(props, ctx) : void 0;
};
const VPNavBarMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-d480e3ba"]]);
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenuGroup",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const props = __props;
    const { page } = useData();
    const isChildActive = (navItem) => {
      if ("component" in navItem) return false;
      if ("link" in navItem) {
        return isActive(
          page.value.relativePath,
          navItem.link,
          !!props.item.activeMatch
        );
      }
      return navItem.items.some(isChildActive);
    };
    const childrenActive = computed(() => isChildActive(props.item));
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(VPFlyout, mergeProps({
        class: {
          VPNavBarMenuGroup: true,
          active: unref(isActive)(unref(page).relativePath, _ctx.item.activeMatch, !!_ctx.item.activeMatch) || childrenActive.value
        },
        button: _ctx.item.text,
        items: _ctx.item.items
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$x = _sfc_main$x.setup;
_sfc_main$x.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenuGroup.vue");
  return _sfc_setup$x ? _sfc_setup$x(props, ctx) : void 0;
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({
          "aria-labelledby": "main-nav-aria-label",
          class: "VPNavBarMenu"
        }, _attrs))} data-v-25b89b2d><span id="main-nav-aria-label" class="visually-hidden" data-v-25b89b2d> Main Navigation </span><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavBarMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props), null), _parent);
          } else {
            _push(ssrRenderComponent(_sfc_main$x, { item }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$w = _sfc_main$w.setup;
_sfc_main$w.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarMenu.vue");
  return _sfc_setup$w ? _sfc_setup$w(props, ctx) : void 0;
};
const VPNavBarMenu = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-25b89b2d"]]);
function createSearchTranslate(defaultTranslations) {
  const { localeIndex, theme: theme2 } = useData();
  function translate(key) {
    var _a, _b, _c;
    const keyPath = key.split(".");
    const themeObject = (_a = theme2.value.search) == null ? void 0 : _a.options;
    const isObject = themeObject && typeof themeObject === "object";
    const locales = isObject && ((_c = (_b = themeObject.locales) == null ? void 0 : _b[localeIndex.value]) == null ? void 0 : _c.translations) || null;
    const translations = isObject && themeObject.translations || null;
    let localeResult = locales;
    let translationResult = translations;
    let defaultResult = defaultTranslations;
    const lastKey = keyPath.pop();
    for (const k of keyPath) {
      let fallbackResult = null;
      const foundInFallback = defaultResult == null ? void 0 : defaultResult[k];
      if (foundInFallback) {
        fallbackResult = defaultResult = foundInFallback;
      }
      const foundInTranslation = translationResult == null ? void 0 : translationResult[k];
      if (foundInTranslation) {
        fallbackResult = translationResult = foundInTranslation;
      }
      const foundInLocale = localeResult == null ? void 0 : localeResult[k];
      if (foundInLocale) {
        fallbackResult = localeResult = foundInLocale;
      }
      if (!foundInFallback) {
        defaultResult = fallbackResult;
      }
      if (!foundInTranslation) {
        translationResult = fallbackResult;
      }
      if (!foundInLocale) {
        localeResult = fallbackResult;
      }
    }
    return (localeResult == null ? void 0 : localeResult[lastKey]) ?? (translationResult == null ? void 0 : translationResult[lastKey]) ?? (defaultResult == null ? void 0 : defaultResult[lastKey]) ?? "";
  }
  return translate;
}
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearchButton",
  __ssrInlineRender: true,
  setup(__props) {
    const defaultTranslations = {
      button: {
        buttonText: "Search",
        buttonAriaLabel: "Search"
      }
    };
    const translate = createSearchTranslate(defaultTranslations);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        type: "button",
        class: "DocSearch DocSearch-Button",
        "aria-label": unref(translate)("button.buttonAriaLabel")
      }, _attrs))}><span class="DocSearch-Button-Container"><span class="vp-icon DocSearch-Search-Icon"></span><span class="DocSearch-Button-Placeholder">${ssrInterpolate(unref(translate)("button.buttonText"))}</span></span><span class="DocSearch-Button-Keys"><kbd class="DocSearch-Button-Key"></kbd><kbd class="DocSearch-Button-Key">K</kbd></span></button>`);
    };
  }
});
const _sfc_setup$v = _sfc_main$v.setup;
_sfc_main$v.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearchButton.vue");
  return _sfc_setup$v ? _sfc_setup$v(props, ctx) : void 0;
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSearch",
  __ssrInlineRender: true,
  setup(__props) {
    const VPLocalSearchBox = () => null;
    const VPAlgoliaSearchBox = () => null;
    const { theme: theme2 } = useData();
    const loaded = ref(false);
    const actuallyLoaded = ref(false);
    onMounted(() => {
      {
        return;
      }
    });
    function load() {
      if (!loaded.value) {
        loaded.value = true;
        setTimeout(poll, 16);
      }
    }
    function poll() {
      const e = new Event("keydown");
      e.key = "k";
      e.metaKey = true;
      window.dispatchEvent(e);
      setTimeout(() => {
        if (!document.querySelector(".DocSearch-Modal")) {
          poll();
        }
      }, 16);
    }
    const showSearch = ref(false);
    const provider = "";
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavBarSearch" }, _attrs))}>`);
      if (unref(provider) === "local") {
        _push(`<!--[-->`);
        if (showSearch.value) {
          _push(ssrRenderComponent(unref(VPLocalSearchBox), {
            onClose: ($event) => showSearch.value = false
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<div id="local-search">`);
        _push(ssrRenderComponent(_sfc_main$v, {
          onClick: ($event) => showSearch.value = true
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else if (unref(provider) === "algolia") {
        _push(`<!--[-->`);
        if (loaded.value) {
          _push(ssrRenderComponent(unref(VPAlgoliaSearchBox), {
            algolia: ((_a = unref(theme2).search) == null ? void 0 : _a.options) ?? unref(theme2).algolia,
            onVnodeBeforeMount: ($event) => actuallyLoaded.value = true
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (!actuallyLoaded.value) {
          _push(`<div id="docsearch">`);
          _push(ssrRenderComponent(_sfc_main$v, { onClick: load }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$u = _sfc_main$u.setup;
_sfc_main$u.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSearch.vue");
  return _sfc_setup$u ? _sfc_setup$u(props, ctx) : void 0;
};
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavBarSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$t = _sfc_main$t.setup;
_sfc_main$t.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarSocialLinks.vue");
  return _sfc_setup$t ? _sfc_setup$t(props, ctx) : void 0;
};
const VPNavBarSocialLinks = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["__scopeId", "data-v-1c2be359"]]);
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    const { hasSidebar } = useSidebar();
    const { currentLang } = useLangs();
    const link2 = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? theme2.value.logoLink : (_a = theme2.value.logoLink) == null ? void 0 : _a.link;
      }
    );
    const rel = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.rel;
      }
    );
    const target = computed(
      () => {
        var _a;
        return typeof theme2.value.logoLink === "string" ? void 0 : (_a = theme2.value.logoLink) == null ? void 0 : _a.target;
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBarTitle", { "has-sidebar": unref(hasSidebar) }]
      }, _attrs))} data-v-30bd8894><a class="title"${ssrRenderAttr("href", link2.value ?? unref(normalizeLink$1)(unref(currentLang).link))}${ssrRenderAttr("rel", rel.value)}${ssrRenderAttr("target", target.value)} data-v-30bd8894>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push, _parent);
      if (unref(theme2).logo) {
        _push(ssrRenderComponent(VPImage, {
          class: "logo",
          image: unref(theme2).logo
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(theme2).siteTitle) {
        _push(`<span data-v-30bd8894>${unref(theme2).siteTitle ?? ""}</span>`);
      } else if (unref(theme2).siteTitle === void 0) {
        _push(`<span data-v-30bd8894>${ssrInterpolate(unref(site).title)}</span>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push, _parent);
      _push(`</a></div>`);
    };
  }
});
const _sfc_setup$s = _sfc_main$s.setup;
_sfc_main$s.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTitle.vue");
  return _sfc_setup$s ? _sfc_setup$s(props, ctx) : void 0;
};
const VPNavBarTitle = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["__scopeId", "data-v-30bd8894"]]);
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "VPNavBarTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(ssrRenderComponent(VPFlyout, mergeProps({
          class: "VPNavBarTranslations",
          icon: "vpi-languages",
          label: unref(theme2).langMenuLabel || "Change language"
        }, _attrs), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="items" data-v-ef0a715a${_scopeId}><p class="title" data-v-ef0a715a${_scopeId}>${ssrInterpolate(unref(currentLang).label)}</p><!--[-->`);
              ssrRenderList(unref(localeLinks), (locale) => {
                _push2(ssrRenderComponent(VPMenuLink, { item: locale }, null, _parent2, _scopeId));
              });
              _push2(`<!--]--></div>`);
            } else {
              return [
                createVNode("div", { class: "items" }, [
                  createVNode("p", { class: "title" }, toDisplayString(unref(currentLang).label), 1),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(localeLinks), (locale) => {
                    return openBlock(), createBlock(VPMenuLink, {
                      key: locale.link,
                      item: locale
                    }, null, 8, ["item"]);
                  }), 128))
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$r = _sfc_main$r.setup;
_sfc_main$r.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBarTranslations.vue");
  return _sfc_setup$r ? _sfc_setup$r(props, ctx) : void 0;
};
const VPNavBarTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["__scopeId", "data-v-ef0a715a"]]);
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "VPNavBar",
  __ssrInlineRender: true,
  props: {
    isScreenOpen: { type: Boolean }
  },
  emits: ["toggle-screen"],
  setup(__props) {
    const props = __props;
    const { y } = useWindowScroll();
    const { hasSidebar } = useSidebar();
    const { frontmatter } = useData();
    const classes = ref({});
    watchPostEffect(() => {
      classes.value = {
        "has-sidebar": hasSidebar.value,
        "home": frontmatter.value.layout === "home",
        "top": y.value === 0,
        "screen-open": props.isScreenOpen
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavBar", classes.value]
      }, _attrs))} data-v-37eb27ad><div class="wrapper" data-v-37eb27ad><div class="container" data-v-37eb27ad><div class="title" data-v-37eb27ad>`);
      _push(ssrRenderComponent(VPNavBarTitle, null, {
        "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
            ];
          }
        }),
        "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div><div class="content" data-v-37eb27ad><div class="content-body" data-v-37eb27ad>`);
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push, _parent);
      _push(ssrRenderComponent(_sfc_main$u, { class: "search" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarMenu, { class: "menu" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarTranslations, { class: "translations" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarAppearance, { class: "appearance" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarSocialLinks, { class: "social-links" }, null, _parent));
      _push(ssrRenderComponent(VPNavBarExtra, { class: "extra" }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push, _parent);
      _push(ssrRenderComponent(VPNavBarHamburger, {
        class: "hamburger",
        active: _ctx.isScreenOpen,
        onClick: ($event) => _ctx.$emit("toggle-screen")
      }, null, _parent));
      _push(`</div></div></div></div><div class="divider" data-v-37eb27ad><div class="divider-line" data-v-37eb27ad></div></div></div>`);
    };
  }
});
const _sfc_setup$q = _sfc_main$q.setup;
_sfc_main$q.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavBar.vue");
  return _sfc_setup$q ? _sfc_setup$q(props, ctx) : void 0;
};
const VPNavBar = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["__scopeId", "data-v-37eb27ad"]]);
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenAppearance",
  __ssrInlineRender: true,
  setup(__props) {
    const { site, theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(site).appearance && unref(site).appearance !== "force-dark" && unref(site).appearance !== "force-auto") {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenAppearance" }, _attrs))} data-v-32097ebb><p class="text" data-v-32097ebb>${ssrInterpolate(unref(theme2).darkModeSwitchLabel || "Appearance")}</p>`);
        _push(ssrRenderComponent(VPSwitchAppearance, null, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$p = _sfc_main$p.setup;
_sfc_main$p.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenAppearance.vue");
  return _sfc_setup$p ? _sfc_setup$p(props, ctx) : void 0;
};
const VPNavScreenAppearance = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["__scopeId", "data-v-32097ebb"]]);
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: "VPNavScreenMenuLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-39df2e7c${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$o = _sfc_main$o.setup;
_sfc_main$o.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuLink.vue");
  return _sfc_setup$o ? _sfc_setup$o(props, ctx) : void 0;
};
const VPNavScreenMenuLink = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["__scopeId", "data-v-39df2e7c"]]);
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupLink",
  __ssrInlineRender: true,
  props: {
    item: {}
  },
  setup(__props) {
    const closeScreen = inject("close-screen");
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(_sfc_main$$, mergeProps({
        class: "VPNavScreenMenuGroupLink",
        href: _ctx.item.link,
        target: _ctx.item.target,
        rel: _ctx.item.rel,
        "no-icon": _ctx.item.noIcon,
        onClick: unref(closeScreen)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span data-v-60211ce1${_scopeId}>${_ctx.item.text ?? ""}</span>`);
          } else {
            return [
              createVNode("span", {
                innerHTML: _ctx.item.text
              }, null, 8, ["innerHTML"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$n = _sfc_main$n.setup;
_sfc_main$n.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupLink.vue");
  return _sfc_setup$n ? _sfc_setup$n(props, ctx) : void 0;
};
const VPNavScreenMenuGroupLink = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["__scopeId", "data-v-60211ce1"]]);
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroupSection",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenuGroupSection" }, _attrs))} data-v-f7942d34>`);
      if (_ctx.text) {
        _push(`<p class="title" data-v-f7942d34>${ssrInterpolate(_ctx.text)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(ssrRenderComponent(VPNavScreenMenuGroupLink, {
          key: item.text,
          item
        }, null, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$m = _sfc_main$m.setup;
_sfc_main$m.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroupSection.vue");
  return _sfc_setup$m ? _sfc_setup$m(props, ctx) : void 0;
};
const VPNavScreenMenuGroupSection = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-f7942d34"]]);
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenuGroup",
  __ssrInlineRender: true,
  props: {
    text: {},
    items: {}
  },
  setup(__props) {
    const props = __props;
    const isOpen = ref(false);
    const groupId = computed(
      () => `NavScreenGroup-${props.text.replace(" ", "-").toLowerCase()}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPNavScreenMenuGroup", { open: isOpen.value }]
      }, _attrs))} data-v-d08cee54><button class="button"${ssrRenderAttr("aria-controls", groupId.value)}${ssrRenderAttr("aria-expanded", isOpen.value)} data-v-d08cee54><span class="button-text" data-v-d08cee54>${_ctx.text ?? ""}</span><span class="vpi-plus button-icon" data-v-d08cee54></span></button><div${ssrRenderAttr("id", groupId.value)} class="items" data-v-d08cee54><!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<!--[-->`);
        if ("link" in item) {
          _push(`<div class="item" data-v-d08cee54>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupLink, { item }, null, _parent));
          _push(`</div>`);
        } else if ("component" in item) {
          _push(`<div class="item" data-v-d08cee54>`);
          ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null), _parent);
          _push(`</div>`);
        } else {
          _push(`<div class="group" data-v-d08cee54>`);
          _push(ssrRenderComponent(VPNavScreenMenuGroupSection, {
            text: item.text,
            items: item.items
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$l = _sfc_main$l.setup;
_sfc_main$l.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenuGroup.vue");
  return _sfc_setup$l ? _sfc_setup$l(props, ctx) : void 0;
};
const VPNavScreenMenuGroup = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["__scopeId", "data-v-d08cee54"]]);
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).nav) {
        _push(`<nav${ssrRenderAttrs(mergeProps({ class: "VPNavScreenMenu" }, _attrs))}><!--[-->`);
        ssrRenderList(unref(theme2).nav, (item) => {
          _push(`<!--[-->`);
          if ("link" in item) {
            _push(ssrRenderComponent(VPNavScreenMenuLink, { item }, null, _parent));
          } else if ("component" in item) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(item.component), mergeProps({ ref_for: true }, item.props, { "screen-menu": "" }), null), _parent);
          } else {
            _push(ssrRenderComponent(VPNavScreenMenuGroup, {
              text: item.text || "",
              items: item.items
            }, null, _parent));
          }
          _push(`<!--]-->`);
        });
        _push(`<!--]--></nav>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$k = _sfc_main$k.setup;
_sfc_main$k.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenMenu.vue");
  return _sfc_setup$k ? _sfc_setup$k(props, ctx) : void 0;
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenSocialLinks",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(theme2).socialLinks) {
        _push(ssrRenderComponent(VPSocialLinks, mergeProps({
          class: "VPNavScreenSocialLinks",
          links: unref(theme2).socialLinks
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$j = _sfc_main$j.setup;
_sfc_main$j.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenSocialLinks.vue");
  return _sfc_setup$j ? _sfc_setup$j(props, ctx) : void 0;
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreenTranslations",
  __ssrInlineRender: true,
  setup(__props) {
    const { localeLinks, currentLang } = useLangs({ correspondingLink: true });
    const isOpen = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(localeLinks).length && unref(currentLang).label) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["VPNavScreenTranslations", { open: isOpen.value }]
        }, _attrs))} data-v-b1f00077><button class="title" data-v-b1f00077><span class="vpi-languages icon lang" data-v-b1f00077></span> ${ssrInterpolate(unref(currentLang).label)} <span class="vpi-chevron-down icon chevron" data-v-b1f00077></span></button><ul class="list" data-v-b1f00077><!--[-->`);
        ssrRenderList(unref(localeLinks), (locale) => {
          _push(`<li class="item" data-v-b1f00077>`);
          _push(ssrRenderComponent(_sfc_main$$, {
            class: "link",
            href: locale.link
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(locale.text)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(locale.text), 1)
                ];
              }
            }),
            _: 2
          }, _parent));
          _push(`</li>`);
        });
        _push(`<!--]--></ul></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$i = _sfc_main$i.setup;
_sfc_main$i.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreenTranslations.vue");
  return _sfc_setup$i ? _sfc_setup$i(props, ctx) : void 0;
};
const VPNavScreenTranslations = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-b1f00077"]]);
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "VPNavScreen",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const screen = ref(null);
    useScrollLock(inBrowser ? document.body : null);
    return (_ctx, _push, _parent, _attrs) => {
      if (_ctx.open) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "VPNavScreen",
          ref_key: "screen",
          ref: screen,
          id: "VPNavScreen"
        }, _attrs))} data-v-6b6184d6><div class="container" data-v-6b6184d6>`);
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(_sfc_main$k, { class: "menu" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenTranslations, { class: "translations" }, null, _parent));
        _push(ssrRenderComponent(VPNavScreenAppearance, { class: "appearance" }, null, _parent));
        _push(ssrRenderComponent(_sfc_main$j, { class: "social-links" }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push, _parent);
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$h = _sfc_main$h.setup;
_sfc_main$h.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNavScreen.vue");
  return _sfc_setup$h ? _sfc_setup$h(props, ctx) : void 0;
};
const VPNavScreen = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-6b6184d6"]]);
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "VPNav",
  __ssrInlineRender: true,
  setup(__props) {
    const { isScreenOpen, closeScreen, toggleScreen } = useNav();
    const { frontmatter } = useData();
    const hasNavbar = computed(() => {
      return frontmatter.value.navbar !== false;
    });
    provide("close-screen", closeScreen);
    watchEffect(() => {
      if (inBrowser) {
        document.documentElement.classList.toggle("hide-nav", !hasNavbar.value);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (hasNavbar.value) {
        _push(`<header${ssrRenderAttrs(mergeProps({ class: "VPNav" }, _attrs))} data-v-35c76f0b>`);
        _push(ssrRenderComponent(VPNavBar, {
          "is-screen-open": unref(isScreenOpen),
          onToggleScreen: unref(toggleScreen)
        }, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPNavScreen, { open: unref(isScreenOpen) }, {
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(`</header>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$g = _sfc_main$g.setup;
_sfc_main$g.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPNav.vue");
  return _sfc_setup$g ? _sfc_setup$g(props, ctx) : void 0;
};
const VPNav = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-35c76f0b"]]);
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarItem",
  __ssrInlineRender: true,
  props: {
    item: {},
    depth: {}
  },
  setup(__props) {
    const props = __props;
    const {
      collapsed,
      collapsible,
      isLink,
      isActiveLink,
      hasActiveLink: hasActiveLink2,
      hasChildren,
      toggle
    } = useSidebarControl(computed(() => props.item));
    const sectionTag = computed(() => hasChildren.value ? "section" : `div`);
    const linkTag = computed(() => isLink.value ? "a" : "div");
    const textTag = computed(() => {
      return !hasChildren.value ? "p" : props.depth + 2 === 7 ? "p" : `h${props.depth + 2}`;
    });
    const itemRole = computed(() => isLink.value ? void 0 : "button");
    const classes = computed(() => [
      [`level-${props.depth}`],
      { collapsible: collapsible.value },
      { collapsed: collapsed.value },
      { "is-link": isLink.value },
      { "is-active": isActiveLink.value },
      { "has-active": hasActiveLink2.value }
    ]);
    function onItemInteraction(e) {
      if ("key" in e && e.key !== "Enter") {
        return;
      }
      !props.item.link && toggle();
    }
    function onCaretClick() {
      props.item.link && toggle();
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VPSidebarItem = resolveComponent("VPSidebarItem", true);
      ssrRenderVNode(_push, createVNode(resolveDynamicComponent(sectionTag.value), mergeProps({
        class: ["VPSidebarItem", classes.value]
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.item.text) {
              _push2(`<div class="item"${ssrRenderAttr("role", itemRole.value)}${ssrRenderAttr("tabindex", _ctx.item.items && 0)} data-v-f8d74e31${_scopeId}><div class="indicator" data-v-f8d74e31${_scopeId}></div>`);
              if (_ctx.item.link) {
                _push2(ssrRenderComponent(_sfc_main$$, {
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      ssrRenderVNode(_push3, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent3, _scopeId2);
                    } else {
                      return [
                        (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                          class: "text",
                          innerHTML: _ctx.item.text
                        }, null, 8, ["innerHTML"]))
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(textTag.value), { class: "text" }, null), _parent2, _scopeId);
              }
              if (_ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length) {
                _push2(`<div class="caret" role="button" aria-label="toggle section" tabindex="0" data-v-f8d74e31${_scopeId}><span class="vpi-chevron-right caret-icon" data-v-f8d74e31${_scopeId}></span></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.item.items && _ctx.item.items.length) {
              _push2(`<div class="items" data-v-f8d74e31${_scopeId}>`);
              if (_ctx.depth < 5) {
                _push2(`<!--[-->`);
                ssrRenderList(_ctx.item.items, (i) => {
                  _push2(ssrRenderComponent(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.item.text ? (openBlock(), createBlock("div", mergeProps({
                key: 0,
                class: "item",
                role: itemRole.value
              }, toHandlers(
                _ctx.item.items ? { click: onItemInteraction, keydown: onItemInteraction } : {},
                true
              ), {
                tabindex: _ctx.item.items && 0
              }), [
                createVNode("div", { class: "indicator" }),
                _ctx.item.link ? (openBlock(), createBlock(_sfc_main$$, {
                  key: 0,
                  tag: linkTag.value,
                  class: "link",
                  href: _ctx.item.link,
                  rel: _ctx.item.rel,
                  target: _ctx.item.target
                }, {
                  default: withCtx(() => [
                    (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                      class: "text",
                      innerHTML: _ctx.item.text
                    }, null, 8, ["innerHTML"]))
                  ]),
                  _: 1
                }, 8, ["tag", "href", "rel", "target"])) : (openBlock(), createBlock(resolveDynamicComponent(textTag.value), {
                  key: 1,
                  class: "text",
                  innerHTML: _ctx.item.text
                }, null, 8, ["innerHTML"])),
                _ctx.item.collapsed != null && _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                  key: 2,
                  class: "caret",
                  role: "button",
                  "aria-label": "toggle section",
                  onClick: onCaretClick,
                  onKeydown: withKeys(onCaretClick, ["enter"]),
                  tabindex: "0"
                }, [
                  createVNode("span", { class: "vpi-chevron-right caret-icon" })
                ], 32)) : createCommentVNode("", true)
              ], 16, ["role", "tabindex"])) : createCommentVNode("", true),
              _ctx.item.items && _ctx.item.items.length ? (openBlock(), createBlock("div", {
                key: 1,
                class: "items"
              }, [
                _ctx.depth < 5 ? (openBlock(true), createBlock(Fragment, { key: 0 }, renderList(_ctx.item.items, (i) => {
                  return openBlock(), createBlock(_component_VPSidebarItem, {
                    key: i.text,
                    item: i,
                    depth: _ctx.depth + 1
                  }, null, 8, ["item", "depth"]);
                }), 128)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }), _parent);
    };
  }
});
const _sfc_setup$f = _sfc_main$f.setup;
_sfc_main$f.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSidebarItem.vue");
  return _sfc_setup$f ? _sfc_setup$f(props, ctx) : void 0;
};
const VPSidebarItem = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-f8d74e31"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VPSidebarGroup",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const disableTransition = ref(true);
    let timer = null;
    onMounted(() => {
      timer = setTimeout(() => {
        timer = null;
        disableTransition.value = false;
      }, 300);
    });
    onBeforeUnmount(() => {
      if (timer != null) {
        clearTimeout(timer);
        timer = null;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      ssrRenderList(_ctx.items, (item) => {
        _push(`<div class="${ssrRenderClass([{ "no-transition": disableTransition.value }, "group"])}" data-v-5c9c9b6c>`);
        _push(ssrRenderComponent(VPSidebarItem, {
          item,
          depth: 0
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$e = _sfc_main$e.setup;
_sfc_main$e.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSidebarGroup.vue");
  return _sfc_setup$e ? _sfc_setup$e(props, ctx) : void 0;
};
const VPSidebarGroup = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-5c9c9b6c"]]);
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "VPSidebar",
  __ssrInlineRender: true,
  props: {
    open: { type: Boolean }
  },
  setup(__props) {
    const { sidebarGroups, hasSidebar } = useSidebar();
    const props = __props;
    const navEl = ref(null);
    const isLocked = useScrollLock(inBrowser ? document.body : null);
    watch(
      [props, navEl],
      () => {
        var _a;
        if (props.open) {
          isLocked.value = true;
          (_a = navEl.value) == null ? void 0 : _a.focus();
        } else isLocked.value = false;
      },
      { immediate: true, flush: "post" }
    );
    const key = ref(0);
    watch(
      sidebarGroups,
      () => {
        key.value += 1;
      },
      { deep: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      if (unref(hasSidebar)) {
        _push(`<aside${ssrRenderAttrs(mergeProps({
          class: ["VPSidebar", { open: _ctx.open }],
          ref_key: "navEl",
          ref: navEl
        }, _attrs))} data-v-78225093><div class="curtain" data-v-78225093></div><nav class="nav" id="VPSidebarNav" aria-labelledby="sidebar-aria-label" tabindex="-1" data-v-78225093><span class="visually-hidden" id="sidebar-aria-label" data-v-78225093> Sidebar Navigation </span>`);
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSidebarGroup, {
          items: unref(sidebarGroups),
          key: key.value
        }, null, _parent));
        ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push, _parent);
        _push(`</nav></aside>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$d = _sfc_main$d.setup;
_sfc_main$d.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSidebar.vue");
  return _sfc_setup$d ? _sfc_setup$d(props, ctx) : void 0;
};
const VPSidebar = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["__scopeId", "data-v-78225093"]]);
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "VPSkipLink",
  __ssrInlineRender: true,
  setup(__props) {
    const { theme: theme2 } = useData();
    const route = useRoute();
    const backToTop = ref();
    watch(() => route.path, () => backToTop.value.focus());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><span tabindex="-1" data-v-a502eb1d></span><a href="#VPContent" class="VPSkipLink visually-hidden" data-v-a502eb1d>${ssrInterpolate(unref(theme2).skipToContentLabel || "Skip to content")}</a><!--]-->`);
    };
  }
});
const _sfc_setup$c = _sfc_main$c.setup;
_sfc_main$c.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSkipLink.vue");
  return _sfc_setup$c ? _sfc_setup$c(props, ctx) : void 0;
};
const VPSkipLink = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-a502eb1d"]]);
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Layout",
  __ssrInlineRender: true,
  setup(__props) {
    const {
      isOpen: isSidebarOpen,
      open: openSidebar,
      close: closeSidebar
    } = useSidebar();
    const route = useRoute();
    watch(() => route.path, closeSidebar);
    useCloseSidebarOnEscape(isSidebarOpen, closeSidebar);
    const { frontmatter } = useData();
    const slots = useSlots();
    const heroImageSlotExists = computed(() => !!slots["home-hero-image"]);
    provide("hero-image-slot-exists", heroImageSlotExists);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Content = resolveComponent("Content");
      if (unref(frontmatter).layout !== false) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: ["Layout", unref(frontmatter).pageClass]
        }, _attrs))} data-v-dbc3c9a0>`);
        ssrRenderSlot(_ctx.$slots, "layout-top", {}, null, _push, _parent);
        _push(ssrRenderComponent(VPSkipLink, null, null, _parent));
        _push(ssrRenderComponent(VPBackdrop, {
          class: "backdrop",
          show: unref(isSidebarOpen),
          onClick: unref(closeSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPNav, null, {
          "nav-bar-title-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-title-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-title-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-title-after", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-bar-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-bar-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-bar-content-after", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-before", {}, void 0, true)
              ];
            }
          }),
          "nav-screen-content-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "nav-screen-content-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "nav-screen-content-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPLocalNav, {
          open: unref(isSidebarOpen),
          onOpenMenu: unref(openSidebar)
        }, null, _parent));
        _push(ssrRenderComponent(VPSidebar, { open: unref(isSidebarOpen) }, {
          "sidebar-nav-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-before", {}, void 0, true)
              ];
            }
          }),
          "sidebar-nav-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "sidebar-nav-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "sidebar-nav-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPContent, null, {
          "page-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-top", {}, void 0, true)
              ];
            }
          }),
          "page-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "page-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "page-bottom", {}, void 0, true)
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "not-found", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "not-found", {}, void 0, true)
              ];
            }
          }),
          "home-hero-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-before", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info", {}, void 0, true)
              ];
            }
          }),
          "home-hero-info-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-info-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-info-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-actions-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-actions-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-actions-after", {}, void 0, true)
              ];
            }
          }),
          "home-hero-image": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-image", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-image", {}, void 0, true)
              ];
            }
          }),
          "home-hero-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-hero-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-hero-after", {}, void 0, true)
              ];
            }
          }),
          "home-features-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-before", {}, void 0, true)
              ];
            }
          }),
          "home-features-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "home-features-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "home-features-after", {}, void 0, true)
              ];
            }
          }),
          "doc-footer-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-footer-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-footer-before", {}, void 0, true)
              ];
            }
          }),
          "doc-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-before", {}, void 0, true)
              ];
            }
          }),
          "doc-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-after", {}, void 0, true)
              ];
            }
          }),
          "doc-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-top", {}, void 0, true)
              ];
            }
          }),
          "doc-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "doc-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "doc-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-top": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-top", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-top", {}, void 0, true)
              ];
            }
          }),
          "aside-bottom": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-bottom", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-bottom", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-before", {}, void 0, true)
              ];
            }
          }),
          "aside-outline-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-outline-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-outline-after", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-before": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-before", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-before", {}, void 0, true)
              ];
            }
          }),
          "aside-ads-after": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderSlot(_ctx.$slots, "aside-ads-after", {}, null, _push2, _parent2, _scopeId);
            } else {
              return [
                renderSlot(_ctx.$slots, "aside-ads-after", {}, void 0, true)
              ];
            }
          }),
          _: 3
        }, _parent));
        _push(ssrRenderComponent(VPFooter, null, null, _parent));
        ssrRenderSlot(_ctx.$slots, "layout-bottom", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_Content, _attrs, null, _parent));
      }
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/Layout.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Layout = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-dbc3c9a0"]]);
const GridSettings = {
  xmini: [[0, 2]],
  mini: [],
  small: [
    [920, 6],
    [768, 5],
    [640, 4],
    [480, 3],
    [0, 2]
  ],
  medium: [
    [960, 5],
    [832, 4],
    [640, 3],
    [480, 2]
  ],
  big: [
    [832, 3],
    [640, 2]
  ]
};
function useSponsorsGrid({ el, size = "medium" }) {
  const onResize = throttleAndDebounce(manage, 100);
  onMounted(() => {
    manage();
    window.addEventListener("resize", onResize);
  });
  onUnmounted(() => {
    window.removeEventListener("resize", onResize);
  });
  function manage() {
    adjustSlots(el.value, size);
  }
}
function adjustSlots(el, size) {
  const tsize = el.children.length;
  const asize = el.querySelectorAll(".vp-sponsor-grid-item:not(.empty)").length;
  const grid = setGrid(el, size, asize);
  manageSlots(el, grid, tsize, asize);
}
function setGrid(el, size, items) {
  const settings = GridSettings[size];
  const screen = window.innerWidth;
  let grid = 1;
  settings.some(([breakpoint, value]) => {
    if (screen >= breakpoint) {
      grid = items < value ? items : value;
      return true;
    }
  });
  setGridData(el, grid);
  return grid;
}
function setGridData(el, value) {
  el.dataset.vpGrid = String(value);
}
function manageSlots(el, grid, tsize, asize) {
  const diff = tsize - asize;
  const rem = asize % grid;
  const drem = rem === 0 ? rem : grid - rem;
  neutralizeSlots(el, drem - diff);
}
function neutralizeSlots(el, count) {
  if (count === 0) {
    return;
  }
  count > 0 ? addSlots(el, count) : removeSlots(el, count * -1);
}
function addSlots(el, count) {
  for (let i = 0; i < count; i++) {
    const slot = document.createElement("div");
    slot.classList.add("vp-sponsor-grid-item", "empty");
    el.append(slot);
  }
}
function removeSlots(el, count) {
  for (let i = 0; i < count; i++) {
    el.removeChild(el.lastElementChild);
  }
}
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "VPSponsorsGrid",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    data: {}
  },
  setup(__props) {
    const props = __props;
    const el = ref(null);
    useSponsorsGrid({ el, size: props.size });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsorsGrid vp-sponsor-grid", [_ctx.size]],
        ref_key: "el",
        ref: el
      }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (sponsor) => {
        _push(`<div class="vp-sponsor-grid-item"><a class="vp-sponsor-grid-link"${ssrRenderAttr("href", sponsor.url)} target="_blank" rel="sponsored noopener"><article class="vp-sponsor-grid-box"><h4 class="visually-hidden">${ssrInterpolate(sponsor.name)}</h4><img class="vp-sponsor-grid-image"${ssrRenderAttr("src", sponsor.img)}${ssrRenderAttr("alt", sponsor.name)}></article></a></div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSponsorsGrid.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "VPSponsors",
  __ssrInlineRender: true,
  props: {
    mode: { default: "normal" },
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    const sponsors = computed(() => {
      const isSponsors = props.data.some((s) => {
        return "items" in s;
      });
      if (isSponsors) {
        return props.data;
      }
      return [
        { tier: props.tier, size: props.size, items: props.data }
      ];
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPSponsors vp-sponsor", [_ctx.mode]]
      }, _attrs))}><!--[-->`);
      ssrRenderList(sponsors.value, (sponsor, index) => {
        _push(`<section class="vp-sponsor-section">`);
        if (sponsor.tier) {
          _push(`<h3 class="vp-sponsor-tier">${ssrInterpolate(sponsor.tier)}</h3>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_sfc_main$a, {
          size: sponsor.size,
          data: sponsor.items
        }, null, _parent));
        _push(`</section>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPSponsors.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "VPDocAsideSponsors",
  __ssrInlineRender: true,
  props: {
    tier: {},
    size: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "VPDocAsideSponsors" }, _attrs))}>`);
      _push(ssrRenderComponent(_sfc_main$9, {
        mode: "aside",
        tier: _ctx.tier,
        size: _ctx.size,
        data: _ctx.data
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPDocAsideSponsors.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "VPHomeSponsors",
  __ssrInlineRender: true,
  props: {
    message: {},
    actionText: { default: "Become a sponsor" },
    actionLink: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "VPHomeSponsors" }, _attrs))} data-v-9a702571><div class="container" data-v-9a702571><div class="header" data-v-9a702571><div class="love" data-v-9a702571><span class="vpi-heart icon" data-v-9a702571></span></div>`);
      if (_ctx.message) {
        _push(`<h2 class="message" data-v-9a702571>${ssrInterpolate(_ctx.message)}</h2>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="sponsors" data-v-9a702571>`);
      _push(ssrRenderComponent(_sfc_main$9, { data: _ctx.data }, null, _parent));
      _push(`</div>`);
      if (_ctx.actionLink) {
        _push(`<div class="action" data-v-9a702571>`);
        _push(ssrRenderComponent(VPButton, {
          theme: "sponsor",
          text: _ctx.actionText,
          href: _ctx.actionLink
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPHomeSponsors.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembersItem",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    member: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembersItem", [_ctx.size]]
      }, _attrs))} data-v-83b0269c><div class="profile" data-v-83b0269c><figure class="avatar" data-v-83b0269c><img class="avatar-img"${ssrRenderAttr("src", _ctx.member.avatar)}${ssrRenderAttr("alt", _ctx.member.name)} data-v-83b0269c></figure><div class="data" data-v-83b0269c><h1 class="name" data-v-83b0269c>${ssrInterpolate(_ctx.member.name)}</h1>`);
      if (_ctx.member.title || _ctx.member.org) {
        _push(`<p class="affiliation" data-v-83b0269c>`);
        if (_ctx.member.title) {
          _push(`<span class="title" data-v-83b0269c>${ssrInterpolate(_ctx.member.title)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.title && _ctx.member.org) {
          _push(`<span class="at" data-v-83b0269c> @ </span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.member.org) {
          _push(ssrRenderComponent(_sfc_main$$, {
            class: ["org", { link: _ctx.member.orgLink }],
            href: _ctx.member.orgLink,
            "no-icon": ""
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`${ssrInterpolate(_ctx.member.org)}`);
              } else {
                return [
                  createTextVNode(toDisplayString(_ctx.member.org), 1)
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.desc) {
        _push(`<p class="desc" data-v-83b0269c>${_ctx.member.desc ?? ""}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.member.links) {
        _push(`<div class="links" data-v-83b0269c>`);
        _push(ssrRenderComponent(VPSocialLinks, {
          links: _ctx.member.links
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
      if (_ctx.member.sponsor) {
        _push(`<div class="sp" data-v-83b0269c>`);
        _push(ssrRenderComponent(_sfc_main$$, {
          class: "sp-link",
          href: _ctx.member.sponsor,
          "no-icon": ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="vpi-heart sp-icon" data-v-83b0269c${_scopeId}></span> ${ssrInterpolate(_ctx.member.actionText || "Sponsor")}`);
            } else {
              return [
                createVNode("span", { class: "vpi-heart sp-icon" }),
                createTextVNode(" " + toDisplayString(_ctx.member.actionText || "Sponsor"), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</article>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembersItem.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const VPTeamMembersItem = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-83b0269c"]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "VPTeamMembers",
  __ssrInlineRender: true,
  props: {
    size: { default: "medium" },
    members: {}
  },
  setup(__props) {
    const props = __props;
    const classes = computed(() => [props.size, `count-${props.members.length}`]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["VPTeamMembers", classes.value]
      }, _attrs))} data-v-0b0a9b67><div class="container" data-v-0b0a9b67><!--[-->`);
      ssrRenderList(_ctx.members, (member) => {
        _push(`<div class="item" data-v-0b0a9b67>`);
        _push(ssrRenderComponent(VPTeamMembersItem, {
          size: _ctx.size,
          member
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPTeamMembers.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = {};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPTeamPage.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageSection.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("../node_modules/.pnpm/vitepress@1.6.3_@algolia+cl_74aa40d66eb10082ecd018d1b5b818e7/node_modules/vitepress/dist/client/theme-default/components/VPTeamPageTitle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const theme = {
  Layout,
  enhanceApp: ({ app }) => {
    app.component("Badge", _sfc_main$16);
  }
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...{
    name: "example"
  },
  __name: "example",
  __ssrInlineRender: true,
  setup(__props) {
    let pull = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_sapn = resolveComponent("sapn");
      _push(`<!--[--><div class="${ssrRenderClass([{ "example-active": unref(pull) }, "example"])}" data-v-d4fe777d><div class="content" data-v-d4fe777d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div><div class="foot" data-v-d4fe777d>`);
      _push(ssrRenderComponent(_component_sapn, { title: "复制代码" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Copy`);
          } else {
            return [
              createTextVNode("Copy")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span title="查看源代码" data-v-d4fe777d>Code</span></div></div><div class="${ssrRenderClass([{ "pulldown-active": unref(pull) }, "pulldown"])}" data-v-d4fe777d>`);
      ssrRenderSlot(_ctx.$slots, "code", {}, () => {
        _push(` 还在施工中... `);
      }, _push, _parent);
      _push(`</div><!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/vitepress/example.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Example = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d4fe777d"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "table",
  __ssrInlineRender: true,
  props: ["data"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<table${ssrRenderAttrs(mergeProps({ class: "table" }, _attrs))} data-v-97308cf6><thead data-v-97308cf6><tr data-v-97308cf6><th data-v-97308cf6>属性名</th><th data-v-97308cf6>说明</th><th data-v-97308cf6>类型</th><th data-v-97308cf6>默认值</th></tr></thead><tbody data-v-97308cf6><!--[-->`);
      ssrRenderList(__props.data, (item, index) => {
        _push(`<tr data-v-97308cf6><!--[-->`);
        ssrRenderList(item, (i) => {
          _push(`<td data-v-97308cf6>${ssrInterpolate(i)}</td>`);
        });
        _push(`<!--]--></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add(".vitepress/vitepress/table.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Table = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-97308cf6"]]);
const et = "b", tt = "is";
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
const nt = [
  "primary",
  "success",
  "warning",
  "error",
  "default"
], rt = {
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
}, st = {
  // 一些事件
  click: (r) => r instanceof MouseEvent,
  mousedown: (r) => r instanceof MouseEvent
}, at = {
  color: String,
  depth: Number,
  // 限制depth为 1, 2, 3, 4
  size: [Number, String]
  // 告诉这不是数组而是两个类型
}, it = /* @__PURE__ */ defineComponent({
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
}), De = (r, e) => {
  const t = r.__vccOpts || r;
  for (const [n, s] of e)
    t[n] = s;
  return t;
}, ot = /* @__PURE__ */ De(it, [["__scopeId", "data-v-0ff12b8d"]]);
function D(r) {
  return r.install = (e) => {
    e.component(r.name, r);
  }, r;
}
const se = D(ot), lt = {
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  viewBox: "0 0 1024 1024"
}, ut = defineComponent({
  name: "ReloadOutlined",
  render: function(e, t) {
    return openBlock(), createElementBlock(
      "svg",
      lt,
      t[0] || (t[0] = [
        createElementVNode(
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
}), ct = ["type", "disabled"], dt = /* @__PURE__ */ defineComponent({
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
}), ft = D(dt), pt = {
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
}, yt = ["bodyStyle"], ht = /* @__PURE__ */ defineComponent({
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
      createElementVNode("div", {
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
}), mt = D(ht), gt = {
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
}, vt = {
  "update:modelValue": (r) => r,
  Change: (r) => r
}, bt = ["checked", "disabled"], wt = { key: 0 }, kt = /* @__PURE__ */ defineComponent({
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
      createElementVNode("input", {
        ref_key: "inputRef",
        ref: p,
        type: "checkbox",
        style: { display: "none" },
        checked: d.value,
        disabled: unref(l),
        onChange: S
      }, null, 40, bt),
      h2[0] || (h2[0] = createElementVNode("span", { class: "b-custom-checkbox" }, null, -1)),
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
}), Ft = /* @__PURE__ */ De(kt, [["__scopeId", "data-v-eb4e0224"]]), Me = D(Ft), St = {
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
}, ze = Symbol(), _t = {
  model: Object,
  rules: Object,
  showMessage: {
    type: Boolean,
    default: true
  }
}, Ie = Symbol();
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
var Ot = /%[sdj%]/g, Ue = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ue = function(e, t) {
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
var Ae = /* @__PURE__ */ function(r) {
  Bt(e, r);
  function e(t, n) {
    var s;
    return s = r.call(this, "Async Validation Error") || this, s.errors = t, s.fields = n, s;
  }
  return e;
}(/* @__PURE__ */ Se(Error));
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
}, Nt = function(e, t, n, s, i) {
  (/^\s+$/.test(t) || t === "") && s.push(I(i.messages.whitespace, e.fullField));
}, me, Tt = function() {
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
}, Te = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, le = {
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
}, Rt = function(e, t, n, s, i) {
  if (e.required && t === void 0) {
    He(e, t, n, s, i);
    return;
  }
  var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], o = e.type;
  a.indexOf(o) > -1 ? le[o](t) || s.push(I(i.messages.types[o], e.fullField, e.type)) : o && typeof t !== e.type && s.push(I(i.messages.types[o], e.fullField, e.type));
}, jt = function(e, t, n, s, i) {
  var a = typeof e.len == "number", o = typeof e.min == "number", l = typeof e.max == "number", c = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = t, p = null, S = typeof t == "number", F = typeof t == "string", h2 = Array.isArray(t);
  if (S ? p = "number" : F ? p = "string" : h2 && (p = "array"), !p)
    return false;
  h2 && (d = t.length), F && (d = t.replace(c, "_").length), a ? d !== e.len && s.push(I(i.messages[p].len, e.fullField, e.len)) : o && !l && d < e.min ? s.push(I(i.messages[p].min, e.fullField, e.min)) : l && !o && d > e.max ? s.push(I(i.messages[p].max, e.fullField, e.max)) : o && l && (d < e.min || d > e.max) && s.push(I(i.messages[p].range, e.fullField, e.min, e.max));
}, ne = "enum", Lt = function(e, t, n, s, i) {
  e[ne] = Array.isArray(e[ne]) ? e[ne] : [], e[ne].indexOf(t) === -1 && s.push(I(i.messages[ne], e.fullField, e[ne].join(", ")));
}, Kt = function(e, t, n, s, i) {
  if (e.pattern) {
    if (e.pattern instanceof RegExp)
      e.pattern.lastIndex = 0, e.pattern.test(t) || s.push(I(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    else if (typeof e.pattern == "string") {
      var a = new RegExp(e.pattern);
      a.test(t) || s.push(I(i.messages.pattern.mismatch, e.fullField, t, e.pattern));
    }
  }
}, O = {
  required: He,
  whitespace: Nt,
  type: Rt,
  range: jt,
  enum: Lt,
  pattern: Kt
}, Dt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t, "string") && !e.required)
      return n();
    O.required(e, t, s, a, i, "string"), N(t, "string") || (O.type(e, t, s, a, i), O.range(e, t, s, a, i), O.pattern(e, t, s, a, i), e.whitespace === true && O.whitespace(e, t, s, a, i));
  }
  n(a);
}, Mt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O.type(e, t, s, a, i);
  }
  n(a);
}, zt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (t === "" && (t = void 0), N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
}, It = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O.type(e, t, s, a, i);
  }
  n(a);
}, Ut = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), N(t) || O.type(e, t, s, a, i);
  }
  n(a);
}, Ht = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
}, Wt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
}, Yt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (t == null && !e.required)
      return n();
    O.required(e, t, s, a, i, "array"), t != null && (O.type(e, t, s, a, i), O.range(e, t, s, a, i));
  }
  n(a);
}, Jt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O.type(e, t, s, a, i);
  }
  n(a);
}, Zt = "enum", Xt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i), t !== void 0 && O[Zt](e, t, s, a, i);
  }
  n(a);
}, Gt = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t, "string") && !e.required)
      return n();
    O.required(e, t, s, a, i), N(t, "string") || O.pattern(e, t, s, a, i);
  }
  n(a);
}, Qt = function(e, t, n, s, i) {
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
}, en = function(e, t, n, s, i) {
  var a = [], o = Array.isArray(t) ? "array" : typeof t;
  O.required(e, t, s, a, i, o), n(a);
}, ke = function(e, t, n, s, i) {
  var a = e.type, o = [], l = e.required || !e.required && s.hasOwnProperty(e.field);
  if (l) {
    if (N(t, a) && !e.required)
      return n();
    O.required(e, t, s, o, i, a), N(t, a) || O.type(e, t, s, o, i);
  }
  n(o);
}, tn = function(e, t, n, s, i) {
  var a = [], o = e.required || !e.required && s.hasOwnProperty(e.field);
  if (o) {
    if (N(t) && !e.required)
      return n();
    O.required(e, t, s, a, i);
  }
  n(a);
}, de = {
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
var Ee = Be(), ye = /* @__PURE__ */ function() {
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
const nn = /* @__PURE__ */ defineComponent({
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
      createElementVNode("label", {
        class: normalizeClass(unref(e).e("label"))
      }, [
        renderSlot(F.$slots, "label", {}, () => [
          createTextVNode(toDisplayString(F.label), 1)
        ])
      ], 2),
      createElementVNode("div", {
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
}), rn = /* @__PURE__ */ defineComponent({
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
}), sn = D(nn), an = D(rn);
/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
process.env.NODE_ENV !== "production" && Object.freeze({});
process.env.NODE_ENV !== "production" && Object.freeze([]);
const z = () => {
}, Re = (r) => typeof r == "string", ln = {
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
}, un = {
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
}, cn = ["type", "placeholder", "clearable", "disabled", "readonly"], dn = /* @__PURE__ */ defineComponent({
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
      createElementVNode("label", null, [
        createTextVNode(toDisplayString(_.label) + " ", 1),
        createElementVNode("input", mergeProps({
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
}), fn = D(dn), pn = {
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
}, yn = ["aria-valuenow"], hn = { key: 1 }, mn = ["width", "height"], gn = ["cx", "cy", "r", "stroke-width"], vn = ["cx", "cy", "r", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-width"], bn = { key: 2 }, wn = ["width", "height"], kn = ["cx", "cy", "r", "stroke-dasharray", "stroke-dashoffset", "stroke-width"], Fn = ["cx", "cy", "r", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-width"], Sn = /* @__PURE__ */ defineComponent({
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
        createElementVNode("div", {
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
          createElementVNode("circle", {
            class: normalizeClass(unref(e).e("circle-background")),
            cx: o.value,
            cy: o.value,
            r: unref(s),
            "stroke-width": unref(n)
          }, null, 10, gn),
          createElementVNode("circle", {
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
          createElementVNode("circle", {
            class: normalizeClass(unref(e).e("dashboard-background")),
            cx: o.value,
            cy: o.value,
            r: unref(s),
            style: normalizeStyle({ transformOrigin: `${o.value}px ${o.value}px` }),
            "stroke-dasharray": 6.28 * unref(s),
            "stroke-dashoffset": 11 * unref(s),
            "stroke-width": unref(n)
          }, null, 14, kn),
          createElementVNode("circle", {
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
      createElementVNode("span", {
        class: normalizeClass([unref(e).e("text"), unref(e).is(d.type, true)])
      }, toDisplayString(unref(i)) + "%", 3)
    ], 2));
  }
}), _n = D(Sn), Bn = {
  multiple: Boolean,
  disabled: Boolean,
  placeholder: String,
  size: [Number, String]
}, En = {
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
}, $n = /* @__PURE__ */ defineComponent({
  name: "BTooltip",
  __name: "tooltip",
  props: En,
  setup(r) {
    const e = R("tooltip");
    return (t, n) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(e).b())
    }, [
      renderSlot(t.$slots, "default"),
      createElementVNode("div", {
        class: normalizeClass([unref(e).e("content"), unref(e).is(t.placement, true), unref(e).is("light", t.light)])
      }, toDisplayString(t.content), 3)
    ], 2));
  }
}), We = D($n), On = /* @__PURE__ */ defineComponent({
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
}), xn = D(On), qn = {
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
}, Pn = {
  "update:modelValue": (r) => r
}, Vn = /* @__PURE__ */ defineComponent({
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
      createElementVNode("input", {
        type: "checkbox",
        style: { display: "none" },
        onChange: i
      }, null, 32),
      createElementVNode("div", {
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
}), An = D(Vn);
let Cn = 0;
const Nn = () => Cn++, Ye = {
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
}, Je = {
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
}, Tn = {
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
const jn = /* @__PURE__ */ defineComponent({
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
}), Ln = ["name", "accept", "multiple", "disabled"], Kn = /* @__PURE__ */ defineComponent({
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
        createElementVNode("input", {
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
}), Dn = {
  fileList: {
    type: Array,
    default: () => []
  },
  listType: {
    type: String,
    default: "text"
  }
}, Mn = {
  remove: (r) => r
}, zn = {
  key: 0,
  style: { padding: "0 10px" }
}, In = ["src"], Un = /* @__PURE__ */ defineComponent({
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
        createElementVNode("div", {
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
          createElementVNode("span", {
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
}), Hn = /* @__PURE__ */ defineComponent({
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
      createElementVNode("div", {
        class: normalizeClass([unref(t).b(), unref(t).is("disabled", c.disabled)])
      }, [
        createVNode(Kn, mergeProps(l.value, { disabled: c.disabled }), {
          default: withCtx((p) => [
            renderSlot(c.$slots, "default", { dragging: p }, () => [
              createElementVNode("div", {
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
}), Wn = D(Hn), Yn = {
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
}, Jn = {
  // 同步响应式数据, 可以直接改为defineModel
  "update:selectedKeys": (r) => r
  // 注意时间名，不能使用自定义事件改变外部状态
}, Ze = Symbol(), Zn = {
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
}, Xn = {
  toggleExpand: (r) => r,
  handleSelect: (r) => r,
  handleCheck: (r) => r
}, Gn = {
  node: {
    type: Object,
    required: true
  }
}, Qn = defineComponent({
  name: "BTreeNodeContent",
  props: Gn,
  setup(r) {
    const e = inject(Ze);
    return () => e != null && e.slots.default ? e == null ? void 0 : e.slots.default({ node: r.node }) : "";
  }
}), er = defineComponent({
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
}), tr = defineComponent({
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
}), je = /* @__PURE__ */ defineComponent({
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
      createElementVNode("div", {
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
}), nr = {
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
}, rr = /* @__PURE__ */ defineComponent({
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
      createElementVNode("div", {
        class: normalizeClass(unref(e).e("scroll-bar")),
        ref: "scroll-bar"
      }, null, 2),
      createElementVNode("div", {
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
}), Xe = D(rr), sr = /* @__PURE__ */ defineComponent({
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
}), ar = D(sr), ir = { BButton: ft, BCard: mt, BCheckbox: Me, BForm: an, BFormItem: sn, BIcon: se, BProgress: _n, BSelect: xn, BInput: fn, BSwitch: An, BUpload: Wn, BTooltip: We, BTree: ar, BVirtualList: Xe }, cr = (r) => {
  Object.entries(ir).forEach(([e, t]) => {
    r.component(e, t);
  });
};
const RawTheme = {
  extends: theme,
  enhanceApp({ app }) {
    app.component("Example", Example);
    app.component("Table", Table);
    app.use(cr);
  }
};
const ClientOnly = defineComponent({
  setup(_, { slots }) {
    const show = ref(false);
    onMounted(() => {
      show.value = true;
    });
    return () => show.value && slots.default ? slots.default() : null;
  }
});
function useCodeGroups() {
  if (inBrowser) {
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches(".vp-code-group input")) {
        const group = (_a = el.parentElement) == null ? void 0 : _a.parentElement;
        if (!group)
          return;
        const i = Array.from(group.querySelectorAll("input")).indexOf(el);
        if (i < 0)
          return;
        const blocks = group.querySelector(".blocks");
        if (!blocks)
          return;
        const current = Array.from(blocks.children).find((child) => child.classList.contains("active"));
        if (!current)
          return;
        const next = blocks.children[i];
        if (!next || current === next)
          return;
        current.classList.remove("active");
        next.classList.add("active");
        const label = group == null ? void 0 : group.querySelector(`label[for="${el.id}"]`);
        label == null ? void 0 : label.scrollIntoView({ block: "nearest" });
      }
    });
  }
}
function useCopyCode() {
  if (inBrowser) {
    const timeoutIdMap = /* @__PURE__ */ new WeakMap();
    window.addEventListener("click", (e) => {
      var _a;
      const el = e.target;
      if (el.matches('div[class*="language-"] > button.copy')) {
        const parent = el.parentElement;
        const sibling = (_a = el.nextElementSibling) == null ? void 0 : _a.nextElementSibling;
        if (!parent || !sibling) {
          return;
        }
        const isShell = /language-(shellscript|shell|bash|sh|zsh)/.test(parent.className);
        const ignoredNodes = [".vp-copy-ignore", ".diff.remove"];
        const clone = sibling.cloneNode(true);
        clone.querySelectorAll(ignoredNodes.join(",")).forEach((node) => node.remove());
        let text = clone.textContent || "";
        if (isShell) {
          text = text.replace(/^ *(\$|>) /gm, "").trim();
        }
        copyToClipboard(text).then(() => {
          el.classList.add("copied");
          clearTimeout(timeoutIdMap.get(el));
          const timeoutId = setTimeout(() => {
            el.classList.remove("copied");
            el.blur();
            timeoutIdMap.delete(el);
          }, 2e3);
          timeoutIdMap.set(el, timeoutId);
        });
      }
    });
  }
}
async function copyToClipboard(text) {
  try {
    return navigator.clipboard.writeText(text);
  } catch {
    const element = document.createElement("textarea");
    const previouslyFocusedElement = document.activeElement;
    element.value = text;
    element.setAttribute("readonly", "");
    element.style.contain = "strict";
    element.style.position = "absolute";
    element.style.left = "-9999px";
    element.style.fontSize = "12pt";
    const selection = document.getSelection();
    const originalRange = selection ? selection.rangeCount > 0 && selection.getRangeAt(0) : null;
    document.body.appendChild(element);
    element.select();
    element.selectionStart = 0;
    element.selectionEnd = text.length;
    document.execCommand("copy");
    document.body.removeChild(element);
    if (originalRange) {
      selection.removeAllRanges();
      selection.addRange(originalRange);
    }
    if (previouslyFocusedElement) {
      previouslyFocusedElement.focus();
    }
  }
}
function useUpdateHead(route, siteDataByRouteRef) {
  let isFirstUpdate = true;
  let managedHeadElements = [];
  const updateHeadTags = (newTags) => {
    if (isFirstUpdate) {
      isFirstUpdate = false;
      newTags.forEach((tag) => {
        const headEl = createHeadElement(tag);
        for (const el of document.head.children) {
          if (el.isEqualNode(headEl)) {
            managedHeadElements.push(el);
            return;
          }
        }
      });
      return;
    }
    const newElements = newTags.map(createHeadElement);
    managedHeadElements.forEach((oldEl, oldIndex) => {
      const matchedIndex = newElements.findIndex((newEl) => newEl == null ? void 0 : newEl.isEqualNode(oldEl ?? null));
      if (matchedIndex !== -1) {
        delete newElements[matchedIndex];
      } else {
        oldEl == null ? void 0 : oldEl.remove();
        delete managedHeadElements[oldIndex];
      }
    });
    newElements.forEach((el) => el && document.head.appendChild(el));
    managedHeadElements = [...managedHeadElements, ...newElements].filter(Boolean);
  };
  watchEffect(() => {
    const pageData = route.data;
    const siteData = siteDataByRouteRef.value;
    const pageDescription = pageData && pageData.description;
    const frontmatterHead = pageData && pageData.frontmatter.head || [];
    const title = createTitle(siteData, pageData);
    if (title !== document.title) {
      document.title = title;
    }
    const description = pageDescription || siteData.description;
    let metaDescriptionElement = document.querySelector(`meta[name=description]`);
    if (metaDescriptionElement) {
      if (metaDescriptionElement.getAttribute("content") !== description) {
        metaDescriptionElement.setAttribute("content", description);
      }
    } else {
      createHeadElement(["meta", { name: "description", content: description }]);
    }
    updateHeadTags(mergeHead(siteData.head, filterOutHeadDescription(frontmatterHead)));
  });
}
function createHeadElement([tag, attrs, innerHTML]) {
  const el = document.createElement(tag);
  for (const key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
  if (innerHTML) {
    el.innerHTML = innerHTML;
  }
  if (tag === "script" && attrs.async == null) {
    el.async = false;
  }
  return el;
}
function isMetaDescription(headConfig) {
  return headConfig[0] === "meta" && headConfig[1] && headConfig[1].name === "description";
}
function filterOutHeadDescription(head) {
  return head.filter((h2) => !isMetaDescription(h2));
}
const hasFetched = /* @__PURE__ */ new Set();
const createLink = () => document.createElement("link");
const viaDOM = (url) => {
  const link2 = createLink();
  link2.rel = `prefetch`;
  link2.href = url;
  document.head.appendChild(link2);
};
const viaXHR = (url) => {
  const req = new XMLHttpRequest();
  req.open("GET", url, req.withCredentials = true);
  req.send();
};
let link;
const doFetch = inBrowser && (link = createLink()) && link.relList && link.relList.supports && link.relList.supports("prefetch") ? viaDOM : viaXHR;
function usePrefetch() {
  if (!inBrowser) {
    return;
  }
  if (!window.IntersectionObserver) {
    return;
  }
  let conn;
  if ((conn = navigator.connection) && (conn.saveData || /2g/.test(conn.effectiveType))) {
    return;
  }
  const rIC = window.requestIdleCallback || setTimeout;
  let observer = null;
  const observeLinks = () => {
    if (observer) {
      observer.disconnect();
    }
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const link2 = entry.target;
          observer.unobserve(link2);
          const { pathname } = link2;
          if (!hasFetched.has(pathname)) {
            hasFetched.add(pathname);
            const pageChunkPath = pathToFile(pathname);
            if (pageChunkPath)
              doFetch(pageChunkPath);
          }
        }
      });
    });
    rIC(() => {
      document.querySelectorAll("#app a").forEach((link2) => {
        const { hostname, pathname } = new URL(link2.href instanceof SVGAnimatedString ? link2.href.animVal : link2.href, link2.baseURI);
        const extMatch = pathname.match(/\.\w+$/);
        if (extMatch && extMatch[0] !== ".html") {
          return;
        }
        if (
          // only prefetch same tab navigation, since a new tab will load
          // the lean js chunk instead.
          link2.target !== "_blank" && // only prefetch inbound links
          hostname === location.hostname
        ) {
          if (pathname !== location.pathname) {
            observer.observe(link2);
          } else {
            hasFetched.add(pathname);
          }
        }
      });
    });
  };
  onMounted(observeLinks);
  const route = useRoute();
  watch(() => route.path, observeLinks);
  onUnmounted(() => {
    observer && observer.disconnect();
  });
}
function resolveThemeExtends(theme2) {
  if (theme2.extends) {
    const base = resolveThemeExtends(theme2.extends);
    return {
      ...base,
      ...theme2,
      async enhanceApp(ctx) {
        if (base.enhanceApp)
          await base.enhanceApp(ctx);
        if (theme2.enhanceApp)
          await theme2.enhanceApp(ctx);
      }
    };
  }
  return theme2;
}
const Theme = resolveThemeExtends(RawTheme);
const VitePressApp = defineComponent({
  name: "VitePressApp",
  setup() {
    const { site, lang, dir } = useData$1();
    onMounted(() => {
      watchEffect(() => {
        document.documentElement.lang = lang.value;
        document.documentElement.dir = dir.value;
      });
    });
    if (site.value.router.prefetchLinks) {
      usePrefetch();
    }
    useCopyCode();
    useCodeGroups();
    if (Theme.setup)
      Theme.setup();
    return () => h(Theme.Layout);
  }
});
async function createApp() {
  globalThis.__VITEPRESS__ = true;
  const router = newRouter();
  const app = newApp();
  app.provide(RouterSymbol, router);
  const data = initData(router.route);
  app.provide(dataSymbol, data);
  app.component("Content", Content);
  app.component("ClientOnly", ClientOnly);
  Object.defineProperties(app.config.globalProperties, {
    $frontmatter: {
      get() {
        return data.frontmatter.value;
      }
    },
    $params: {
      get() {
        return data.page.value.params;
      }
    }
  });
  if (Theme.enhanceApp) {
    await Theme.enhanceApp({
      app,
      router,
      siteData: siteDataRef
    });
  }
  return { app, router, data };
}
function newApp() {
  return createSSRApp(VitePressApp);
}
function newRouter() {
  let isInitialPageLoad = inBrowser;
  return createRouter((path) => {
    let pageFilePath = pathToFile(path);
    let pageModule = null;
    if (pageFilePath) {
      if (isInitialPageLoad) {
        pageFilePath = pageFilePath.replace(/\.js$/, ".lean.js");
      }
      if (false) ;
      else {
        pageModule = import(
          /*@vite-ignore*/
          pageFilePath
        );
      }
    }
    if (inBrowser) {
      isInitialPageLoad = false;
    }
    return pageModule;
  }, Theme.NotFound);
}
if (inBrowser) {
  createApp().then(({ app, router, data }) => {
    router.go().then(() => {
      useUpdateHead(router.route, data.site);
      app.mount("#app");
    });
  });
}
async function render(path) {
  const { app, router } = await createApp();
  await router.go(path);
  const ctx = { content: "", vpSocialIcons: /* @__PURE__ */ new Set() };
  ctx.content = await renderToString(app, ctx);
  return ctx;
}
export {
  render
};
