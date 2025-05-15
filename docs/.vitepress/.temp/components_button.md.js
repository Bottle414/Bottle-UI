import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { resolveComponent, mergeProps, withCtx, createTextVNode, createVNode, useSSRContext, defineComponent } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$7 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, mergeProps({ class: "example" }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BButton, { type: "success" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Success`);
            } else {
              return [
                createTextVNode("Success")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, { type: "warning" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Warning`);
            } else {
              return [
                createTextVNode("Warning")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, { type: "error" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Error`);
            } else {
              return [
                createTextVNode("Error")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, { type: "info" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Info`);
            } else {
              return [
                createTextVNode("Info")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "success",
          round: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Success`);
            } else {
              return [
                createTextVNode("Success")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "warning",
          round: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Warning`);
            } else {
              return [
                createTextVNode("Warning")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "error",
          round: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Error`);
            } else {
              return [
                createTextVNode("Error")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "info",
          round: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Info`);
            } else {
              return [
                createTextVNode("Info")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "success",
          circle: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Success`);
            } else {
              return [
                createTextVNode("Success")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "warning",
          circle: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Warning`);
            } else {
              return [
                createTextVNode("Warning")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "error",
          circle: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Error`);
            } else {
              return [
                createTextVNode("Error")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "info",
          circle: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Info`);
            } else {
              return [
                createTextVNode("Info")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BButton, { type: "success" }, {
            default: withCtx(() => [
              createTextVNode("Success")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, { type: "warning" }, {
            default: withCtx(() => [
              createTextVNode("Warning")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, { type: "error" }, {
            default: withCtx(() => [
              createTextVNode("Error")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, { type: "info" }, {
            default: withCtx(() => [
              createTextVNode("Info")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "success",
            round: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Success")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "warning",
            round: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Warning")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "error",
            round: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Error")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "info",
            round: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Info")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "success",
            circle: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Success")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "warning",
            circle: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Warning")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "error",
            circle: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Error")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "info",
            circle: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Info")
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/basic.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Basic = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    text: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` 没有插进去啊 算了 `);
      } else {
        return [
          createTextVNode(" 没有插进去啊 算了 ")
        ];
      }
    }),
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BButton, {
          type: "success",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Success`);
            } else {
              return [
                createTextVNode("Success")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "success",
          round: "",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Success`);
            } else {
              return [
                createTextVNode("Success")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          type: "success",
          circle: "",
          disabled: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Success`);
            } else {
              return [
                createTextVNode("Success")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BButton, {
            type: "success",
            disabled: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Success")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "success",
            round: "",
            disabled: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Success")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            type: "success",
            circle: "",
            disabled: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Success")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/disabled.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Disabled = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BButton = resolveComponent("BButton");
  const _component_BIcon = resolveComponent("BIcon");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BButton, null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` Icon `);
              _push3(ssrRenderComponent(_component_BIcon, {
                color: "#eef",
                size: 20,
                depth: 4
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` X `);
                  } else {
                    return [
                      createTextVNode(" X ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createTextVNode(" Icon "),
                createVNode(_component_BIcon, {
                  color: "#eef",
                  size: 20,
                  depth: 4
                }, {
                  default: withCtx(() => [
                    createTextVNode(" X ")
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
          createVNode(_component_BButton, null, {
            default: withCtx(() => [
              createTextVNode(" Icon "),
              createVNode(_component_BIcon, {
                color: "#eef",
                size: 20,
                depth: 4
              }, {
                default: withCtx(() => [
                  createTextVNode(" X ")
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
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/icon.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Icon = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BButton, { loading: "" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Loading`);
            } else {
              return [
                createTextVNode("Loading")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BButton, { loading: "" }, {
            default: withCtx(() => [
              createTextVNode("Loading")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/loading.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Loading = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$3 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BButton, { size: "large" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Large`);
            } else {
              return [
                createTextVNode("Large")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          size: "large",
          round: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Large`);
            } else {
              return [
                createTextVNode("Large")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, { size: "medium" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Medium`);
            } else {
              return [
                createTextVNode("Medium")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, { size: "small" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Small`);
            } else {
              return [
                createTextVNode("Small")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          size: "small",
          circle: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Small`);
            } else {
              return [
                createTextVNode("Small")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BButton, {
          style: { "width": "100px", "height": "40px" },
          round: ""
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`Custom`);
            } else {
              return [
                createTextVNode("Custom")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BButton, { size: "large" }, {
            default: withCtx(() => [
              createTextVNode("Large")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            size: "large",
            round: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Large")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, { size: "medium" }, {
            default: withCtx(() => [
              createTextVNode("Medium")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, { size: "small" }, {
            default: withCtx(() => [
              createTextVNode("Small")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            size: "small",
            circle: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Small")
            ]),
            _: 1
          }),
          createVNode(_component_BButton, {
            style: { "width": "100px", "height": "40px" },
            round: ""
          }, {
            default: withCtx(() => [
              createTextVNode("Custom")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/size.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Size = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["type", "按钮的类型", "'primary' | 'success' | 'warning' | 'error' | 'default'", "success"],
      ["nativeType", "原生type属性", "'button' | 'submit' | 'reset'", "button"],
      ["toTop", "是否触发回到顶部", "boolean", "false"],
      ["target", "触发回到顶部的目标元素id、window或者document", "string", "window"],
      ["size", "按钮尺寸", "string | 'large' | 'medium' | 'small'", "32"],
      ["color", "颜色", "string", "#bebe"],
      ["round", "圆角", "boolean", "false"],
      ["circle", "圆形", "boolean", "false"],
      ["disabled", "禁用", "boolean", "false"],
      ["loading", "加载中", "boolean", "false"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/attributes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BButton, {
          "to-top": "",
          color: "#33a6c7",
          size: "medium"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`toTopWindow`);
            } else {
              return [
                createTextVNode("toTopWindow")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`<div id="inner" data-v-bd467b55${_scopeId}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus blanditiis illo placeat sint quas nulla recusandae, veritatis enim dignissimos, vitae nisi! Distinctio sint sed perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure molestias, vitae laboriosam, aspernatur recusandae repellendus ullam minima maxime veritatis dolorum repellat vero, laborum quod tenetur repudiandae doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus blanditiis illo placeat sint quas nulla recusandae, veritatis enim dignissimos, vitae nisi! Distinctio sint sed perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure molestias, vitae laboriosam, aspernatur recusandae repellendus ullam minima maxime veritatis dolorum repellat vero, laborum quod tenetur repudiandae doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus blanditiis illo placeat sint quas nulla recusandae, veritatis enim dignissimos, vitae nisi! Distinctio sint sed perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure molestias, vitae laboriosam, aspernatur recusandae repellendus ullam minima maxime veritatis dolorum repellat vero, laborum quod tenetur repudiandae doloremque. `);
        _push2(ssrRenderComponent(_component_BButton, {
          id: "inner-btn",
          "to-top": "",
          color: "#33a6c7",
          size: "medium",
          target: "inner"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(` toTopInner `);
            } else {
              return [
                createTextVNode(" toTopInner ")
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(`</div>`);
      } else {
        return [
          createVNode(_component_BButton, {
            "to-top": "",
            color: "#33a6c7",
            size: "medium"
          }, {
            default: withCtx(() => [
              createTextVNode("toTopWindow")
            ]),
            _: 1
          }),
          createVNode("div", { id: "inner" }, [
            createTextVNode(" Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus blanditiis illo placeat sint quas nulla recusandae, veritatis enim dignissimos, vitae nisi! Distinctio sint sed perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure molestias, vitae laboriosam, aspernatur recusandae repellendus ullam minima maxime veritatis dolorum repellat vero, laborum quod tenetur repudiandae doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus blanditiis illo placeat sint quas nulla recusandae, veritatis enim dignissimos, vitae nisi! Distinctio sint sed perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure molestias, vitae laboriosam, aspernatur recusandae repellendus ullam minima maxime veritatis dolorum repellat vero, laborum quod tenetur repudiandae doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, possimus blanditiis illo placeat sint quas nulla recusandae, veritatis enim dignissimos, vitae nisi! Distinctio sint sed perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure molestias, vitae laboriosam, aspernatur recusandae repellendus ullam minima maxime veritatis dolorum repellat vero, laborum quod tenetur repudiandae doloremque. "),
            createVNode(_component_BButton, {
              id: "inner-btn",
              "to-top": "",
              color: "#33a6c7",
              size: "medium",
              target: "inner"
            }, {
              default: withCtx(() => [
                createTextVNode(" toTopInner ")
              ]),
              _: 1
            })
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/button/totop.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Totop = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bd467b55"]]);
const __pageData = JSON.parse('{"title":"Button 按钮","description":"","frontmatter":{},"headers":[],"relativePath":"components/button.md","filePath":"components/button.md"}');
const __default__ = { name: "components/button.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="button-按钮" tabindex="-1">Button 按钮 <a class="header-anchor" href="#button-按钮" aria-label="Permalink to &quot;Button 按钮&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>使用type、round、circle来定义按钮样式</p>`);
      _push(ssrRenderComponent(Basic, null, null, _parent));
      _push(`<h2 id="禁用状态" tabindex="-1">禁用状态 <a class="header-anchor" href="#禁用状态" aria-label="Permalink to &quot;禁用状态&quot;">​</a></h2><p>使用disabled属性设置按钮禁用</p>`);
      _push(ssrRenderComponent(Disabled, null, null, _parent));
      _push(`<h2 id="按钮图标" tabindex="-1">按钮图标 <a class="header-anchor" href="#按钮图标" aria-label="Permalink to &quot;按钮图标&quot;">​</a></h2><p>直接将图标嵌入按钮</p>`);
      _push(ssrRenderComponent(Icon, null, null, _parent));
      _push(`<h2 id="加载状态" tabindex="-1">加载状态 <a class="header-anchor" href="#加载状态" aria-label="Permalink to &quot;加载状态&quot;">​</a></h2><p>使用loading属性使按钮变为加载状态(按钮加载时会变为禁用)</p>`);
      _push(ssrRenderComponent(Loading, null, null, _parent));
      _push(`<h2 id="改变大小" tabindex="-1">改变大小 <a class="header-anchor" href="#改变大小" aria-label="Permalink to &quot;改变大小&quot;">​</a></h2><p>通过设置size属性来改变按钮大小</p>`);
      _push(ssrRenderComponent(Size, null, null, _parent));
      _push(`<h2 id="回到顶部" tabindex="-1">回到顶部 <a class="header-anchor" href="#回到顶部" aria-label="Permalink to &quot;回到顶部&quot;">​</a></h2><p>通过 toTop 属性为按钮设置回到顶部功能, 通过绑定 target 属性可以滚动到具有指定 id 的元素顶部</p>`);
      _push(ssrRenderComponent(Totop, null, null, _parent));
      _push(`<h1 id="button-api" tabindex="-1">Button API <a class="header-anchor" href="#button-api" aria-label="Permalink to &quot;Button API&quot;">​</a></h1><h2 id="button-attributes" tabindex="-1">Button Attributes <a class="header-anchor" href="#button-attributes" aria-label="Permalink to &quot;Button Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/button.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
