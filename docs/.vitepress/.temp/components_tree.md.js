import { ssrRenderComponent, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { defineComponent, resolveComponent, withCtx, createVNode, useSSRContext, createTextVNode, ref, toDisplayString, mergeProps } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "Basic",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      {
        label: "Node 1",
        key: "1",
        isLeaf: false,
        children: [
          {
            label: "Node 1.1",
            key: "1.1",
            // disabled: true,
            children: []
          },
          {
            label: "Node 1.2",
            key: "1.2",
            children: [
              {
                label: "Node 1.1.1",
                key: "1.1.1",
                children: []
              }
            ]
          }
        ]
      },
      {
        label: "Node 2",
        key: "2",
        children: []
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BTree = resolveComponent("BTree");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key"
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BTree, {
                data,
                keyField: "key"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Basic.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "Custom",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      {
        label: "Node 1",
        key: "1",
        isLeaf: false,
        children: [
          {
            label: "Node 1.1",
            key: "1.1",
            // disabled: true,
            children: []
          },
          {
            label: "Node 1.2",
            key: "1.2",
            children: [
              {
                label: "Node 1.1.1",
                key: "1.1.1",
                children: []
              }
            ]
          }
        ]
      },
      {
        label: "Node 2",
        key: "2",
        children: []
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BTree = resolveComponent("BTree");
      const _component_BIcon = resolveComponent("BIcon");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<p class="text" data-v-070e25ea${_scopeId2}>Hello, Look at me!</p>`);
                  _push3(ssrRenderComponent(_component_BIcon, {
                    color: "#3d2",
                    style: { "padding-left": "20px" }
                  }, {
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
                    createVNode("p", { class: "text" }, "Hello, Look at me!"),
                    createVNode(_component_BIcon, {
                      color: "#3d2",
                      style: { "padding-left": "20px" }
                    }, {
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
              createVNode(_component_BTree, {
                data,
                keyField: "key"
              }, {
                default: withCtx(() => [
                  createVNode("p", { class: "text" }, "Hello, Look at me!"),
                  createVNode(_component_BIcon, {
                    color: "#3d2",
                    style: { "padding-left": "20px" }
                  }, {
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
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Custom.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Custom = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-070e25ea"]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "Async",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      {
        label: "Node 1",
        key: "1",
        isLeaf: false,
        children: []
      },
      {
        label: "Node 2",
        key: "2",
        children: []
      }
    ];
    const asyncload = async (node) => {
      await new Promise((resolve) => setTimeout(resolve, 1e3));
      return [
        {
          key: "3",
          label: "异步子节点1",
          children: [],
          isLeaf: true
        }
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BTree = resolveComponent("BTree");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key",
              "on-load": asyncload
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BTree, {
                data,
                keyField: "key",
                "on-load": asyncload
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Async.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Checkbox",
  __ssrInlineRender: true,
  setup(__props) {
    const selected1 = ref([]);
    const selected2 = ref([]);
    const data = [
      {
        label: "Node 1",
        key: "1",
        isLeaf: false,
        children: [
          {
            label: "Node 1.1",
            key: "1.1",
            // disabled: true,
            children: []
          },
          {
            label: "Node 1.2",
            key: "1.2",
            children: []
          }
        ]
      },
      {
        label: "Node 2",
        key: "2",
        children: []
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BTree = resolveComponent("BTree");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 单选节点: ${ssrInterpolate(selected1.value)} `);
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key",
              selectedKeys: selected1.value,
              "onUpdate:selectedKeys": ($event) => selected1.value = $event,
              checkbox: ""
            }, null, _parent2, _scopeId));
            _push2(` 多选节点: ${ssrInterpolate(selected2.value)} `);
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key",
              selectedKeys: selected2.value,
              "onUpdate:selectedKeys": ($event) => selected2.value = $event,
              checkbox: "",
              multiple: ""
            }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" 单选节点: " + toDisplayString(selected1.value) + " ", 1),
              createVNode(_component_BTree, {
                data,
                keyField: "key",
                selectedKeys: selected1.value,
                "onUpdate:selectedKeys": ($event) => selected1.value = $event,
                checkbox: ""
              }, null, 8, ["selectedKeys", "onUpdate:selectedKeys"]),
              createTextVNode(" 多选节点: " + toDisplayString(selected2.value) + " ", 1),
              createVNode(_component_BTree, {
                data,
                keyField: "key",
                selectedKeys: selected2.value,
                "onUpdate:selectedKeys": ($event) => selected2.value = $event,
                checkbox: "",
                multiple: ""
              }, null, 8, ["selectedKeys", "onUpdate:selectedKeys"])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Checkbox.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Disabled",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      {
        label: "Node 1",
        key: "1",
        children: [
          {
            label: "Node 1.1",
            key: "1.1",
            // disabled: true,
            children: []
          },
          {
            label: "Node 1.2",
            key: "1.2",
            children: [
              {
                label: "Node 1.1.1",
                key: "1.1.1",
                children: []
              }
            ]
          }
        ]
      },
      {
        label: "Node 2",
        key: "2",
        children: []
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BTree = resolveComponent("BTree");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key",
              checkbox: "",
              "disabled-keys": ["2", "1.1"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BTree, {
                data,
                keyField: "key",
                checkbox: "",
                "disabled-keys": ["2", "1.1"]
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Disabled.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "Default",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      {
        label: "Node 1",
        key: "1",
        isLeaf: false,
        children: [
          {
            label: "Node 1.1",
            key: "1.1",
            // disabled: true,
            children: []
          },
          {
            label: "Node 1.2",
            key: "1.2",
            children: [
              {
                label: "Node 1.1.1",
                key: "1.1.1",
                children: []
              }
            ]
          }
        ]
      },
      {
        label: "Node 2",
        key: "2",
        children: []
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BTree = resolveComponent("BTree");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key",
              checkbox: "",
              indeterminateKeys: ["1", "2"],
              defaultCheckedKeys: ["1.1"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BTree, {
                data,
                keyField: "key",
                checkbox: "",
                indeterminateKeys: ["1", "2"],
                defaultCheckedKeys: ["1.1"]
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Default.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Virtual",
  __ssrInlineRender: true,
  setup(__props) {
    const selected = ref([]);
    const checked = ["1", "3", "8"];
    const data = [
      {
        label: "Node 1",
        key: "1",
        isLeaf: false,
        children: [
          {
            label: "Node 1.1",
            key: "1.1",
            // disabled: true,
            children: []
          },
          {
            label: "Node 1.2",
            key: "1.2",
            children: [
              {
                label: "Node 1.1.1",
                key: "1.1.1",
                children: []
              }
            ]
          }
        ]
      },
      {
        label: "Node 2",
        key: "2",
        children: []
      },
      {
        label: "Node 3",
        key: "3",
        children: []
      },
      {
        label: "Node 4",
        key: "4",
        children: []
      },
      {
        label: "Node 5",
        key: "5",
        children: []
      },
      {
        label: "Node 6",
        key: "6",
        children: []
      },
      {
        label: "Node 7",
        key: "7",
        children: []
      },
      {
        label: "Node 8",
        key: "8",
        children: []
      },
      {
        label: "Node 9",
        key: "9",
        children: []
      },
      {
        label: "Node 10",
        key: "10",
        children: []
      },
      {
        label: "Node 11",
        key: "11",
        children: []
      },
      {
        label: "Node 12",
        key: "12",
        children: []
      },
      {
        label: "Node 13",
        key: "13",
        children: []
      },
      {
        label: "Node 14",
        key: "14",
        children: []
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Example = resolveComponent("Example");
      const _component_BTree = resolveComponent("BTree");
      _push(ssrRenderComponent(_component_Example, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_BTree, {
              data,
              keyField: "key",
              selectedKeys: selected.value,
              "onUpdate:selectedKeys": ($event) => selected.value = $event,
              virtual: "",
              checkbox: "",
              defaultCheckedKeys: checked,
              indeterminateKeys: ["1"]
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_BTree, {
                data,
                keyField: "key",
                selectedKeys: selected.value,
                "onUpdate:selectedKeys": ($event) => selected.value = $event,
                virtual: "",
                checkbox: "",
                defaultCheckedKeys: checked,
                indeterminateKeys: ["1"]
              }, null, 8, ["selectedKeys", "onUpdate:selectedKeys"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Virtual.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["data", "绑定的值", "Array", "[]"],
      ["label", "标签绑定的字段", "string", "label"],
      ["keyField", "标识符绑定的字段", "string", "key"],
      ["children", "子节点绑定的字段", "string", "children"],
      ["checkbox", "带多选框", "boolean", "false"],
      ["multiple", "多选", "boolean", "false"],
      ["virtual", "虚拟滚动", "boolean", "false"],
      ["defaultExpandedKeys", "默认展开的节点(不选中)", "Array", "[]"],
      ["defaultCheckedKeys", "默认选中的节点", "Array", "[]"],
      ["selectedKeys", "选中的节点", "Array", "[]"],
      ["disabledKeys", "禁用的节点", "Array", "[]"],
      ["indeterminateKeys", "不定的节点", "Array", "[]"],
      ["onLoad", "异步加载时获取节点的函数", "() => Promise<[]>", ""]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Attributes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slots",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["default", "默认插槽，自定义树节点内容", "", ""]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/tree/Slots.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Tree 树形组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/tree.md","filePath":"components/tree.md"}');
const __default__ = { name: "components/tree.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="tree-树形组件" tabindex="-1">Tree 树形组件 <a class="header-anchor" href="#tree-树形组件" aria-label="Permalink to &quot;Tree 树形组件&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>基础的树形结构展示</p>`);
      _push(ssrRenderComponent(_sfc_main$9, null, null, _parent));
      _push(`<h2 id="自定义内容" tabindex="-1">自定义内容 <a class="header-anchor" href="#自定义内容" aria-label="Permalink to &quot;自定义内容&quot;">​</a></h2><p>使用默认插槽对每个节点插入自定义内容</p>`);
      _push(ssrRenderComponent(Custom, null, null, _parent));
      _push(`<h2 id="异步加载" tabindex="-1">异步加载 <a class="header-anchor" href="#异步加载" aria-label="Permalink to &quot;异步加载&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$7, null, null, _parent));
      _push(`<h2 id="带勾选框" tabindex="-1">带勾选框 <a class="header-anchor" href="#带勾选框" aria-label="Permalink to &quot;带勾选框&quot;">​</a></h2><p>使用 checkbox 为树形组件带上勾选框</p>`);
      _push(ssrRenderComponent(_sfc_main$6, null, null, _parent));
      _push(`<h2 id="禁用效果" tabindex="-1">禁用效果 <a class="header-anchor" href="#禁用效果" aria-label="Permalink to &quot;禁用效果&quot;">​</a></h2><p>使用 disabledKeys 属性设置禁用</p>`);
      _push(ssrRenderComponent(_sfc_main$5, null, null, _parent));
      _push(`<h2 id="默认选中和默认不定状态" tabindex="-1">默认选中和默认不定状态 <a class="header-anchor" href="#默认选中和默认不定状态" aria-label="Permalink to &quot;默认选中和默认不定状态&quot;">​</a></h2><p>使用 defaultSeleckedKeys 和 indeterminateKeys 为树形组件设置默认选中节点与不定状态节点</p>`);
      _push(ssrRenderComponent(_sfc_main$4, null, null, _parent));
      _push(`<h2 id="虚拟滚动" tabindex="-1">虚拟滚动 <a class="header-anchor" href="#虚拟滚动" aria-label="Permalink to &quot;虚拟滚动&quot;">​</a></h2><p>使用 virtual 属性提供虚拟滚动</p>`);
      _push(ssrRenderComponent(_sfc_main$3, null, null, _parent));
      _push(`<h1 id="tree-api" tabindex="-1">Tree API <a class="header-anchor" href="#tree-api" aria-label="Permalink to &quot;Tree API&quot;">​</a></h1><h2 id="tree-attributes" tabindex="-1">Tree Attributes <a class="header-anchor" href="#tree-attributes" aria-label="Permalink to &quot;Tree Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h2 id="tree-slots" tabindex="-1">Tree Slots <a class="header-anchor" href="#tree-slots" aria-label="Permalink to &quot;Tree Slots&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/tree.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
