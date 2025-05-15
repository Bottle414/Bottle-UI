import { ssrRenderComponent, ssrRenderAttrs } from "vue/server-renderer";
import { resolveComponent, withCtx, createTextVNode, createVNode, useSSRContext, defineComponent, mergeProps } from "vue";
import { _ as _export_sfc } from "./plugin-vue_export-helper.1tPrXgE0.js";
const _sfc_main$9 = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BUpload = resolveComponent("BUpload");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BUpload, {
          action: "http://localhost:3000/upload",
          listType: "image"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, { size: "large" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Upload`);
                  } else {
                    return [
                      createTextVNode("Upload")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, { size: "large" }, {
                  default: withCtx(() => [
                    createTextVNode("Upload")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BUpload, { action: "http://localhost:3000/upload" }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_BUpload, {
            action: "http://localhost:3000/upload",
            listType: "image"
          }, {
            default: withCtx(() => [
              createVNode(_component_BButton, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode("Upload")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_BUpload, { action: "http://localhost:3000/upload" })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Basic.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const Basic = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$6]]);
const _sfc_main$8 = {};
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BUpload = resolveComponent("BUpload");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BUpload, {
          drag: "",
          action: "http://localhost:3000/upload"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, { size: "large" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Drag`);
                  } else {
                    return [
                      createTextVNode("Drag")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, { size: "large" }, {
                  default: withCtx(() => [
                    createTextVNode("Drag")
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
          createVNode(_component_BUpload, {
            drag: "",
            action: "http://localhost:3000/upload"
          }, {
            default: withCtx(() => [
              createVNode(_component_BButton, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode("Drag")
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
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Drag.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const Drag = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$7 = {};
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BUpload = resolveComponent("BUpload");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BUpload, {
          multiple: "",
          limit: 2,
          action: "http://localhost:3000/upload"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, { size: "large" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Limit 2`);
                  } else {
                    return [
                      createTextVNode("Limit 2")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, { size: "large" }, {
                  default: withCtx(() => [
                    createTextVNode("Limit 2")
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
          createVNode(_component_BUpload, {
            multiple: "",
            limit: 2,
            action: "http://localhost:3000/upload"
          }, {
            default: withCtx(() => [
              createVNode(_component_BButton, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode("Limit 2")
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
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Limit.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const Limit = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BUpload = resolveComponent("BUpload");
  const _component_BIcon = resolveComponent("BIcon");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BUpload, {
          action: "http://localhost:3000/upload",
          listType: "image"
        }, {
          icon: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BIcon, {
                color: "coral",
                style: { "width": "50px", "margin-left": "10px" }
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(` Icon `);
                  } else {
                    return [
                      createTextVNode(" Icon ")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BIcon, {
                  color: "coral",
                  style: { "width": "50px", "margin-left": "10px" }
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Icon ")
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
          createVNode(_component_BUpload, {
            action: "http://localhost:3000/upload",
            listType: "image"
          }, {
            icon: withCtx(() => [
              createVNode(_component_BIcon, {
                color: "coral",
                style: { "width": "50px", "margin-left": "10px" }
              }, {
                default: withCtx(() => [
                  createTextVNode(" Icon ")
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Custom.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const Custom = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$5 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BUpload = resolveComponent("BUpload");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BUpload, {
          multiple: "",
          action: "http://localhost:3000/upload",
          showList: "",
          listType: "image"
        }, {
          default: withCtx(({ dragging }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, { size: "large" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Multiple Upload`);
                  } else {
                    return [
                      createTextVNode("Multiple Upload")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, { size: "large" }, {
                  default: withCtx(() => [
                    createTextVNode("Multiple Upload")
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
          createVNode(_component_BUpload, {
            multiple: "",
            action: "http://localhost:3000/upload",
            showList: "",
            listType: "image"
          }, {
            default: withCtx(({ dragging }) => [
              createVNode(_component_BButton, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode("Multiple Upload")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Multiple.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Multiple = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$4 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BUpload = resolveComponent("BUpload");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BUpload, {
          action: "http://localhost:3000/upload",
          listType: "image"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, { size: "large" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Image`);
                  } else {
                    return [
                      createTextVNode("Image")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, { size: "large" }, {
                  default: withCtx(() => [
                    createTextVNode("Image")
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
        _push2(ssrRenderComponent(_component_BUpload, {
          action: "http://localhost:3000/upload",
          listType: "text"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, { size: "large" }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Text`);
                  } else {
                    return [
                      createTextVNode("Text")
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, { size: "large" }, {
                  default: withCtx(() => [
                    createTextVNode("Text")
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
          createVNode(_component_BUpload, {
            action: "http://localhost:3000/upload",
            listType: "image"
          }, {
            default: withCtx(() => [
              createVNode(_component_BButton, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode("Image")
                ]),
                _: 1
              })
            ]),
            _: 1
          }),
          createVNode(_component_BUpload, {
            action: "http://localhost:3000/upload",
            listType: "text"
          }, {
            default: withCtx(() => [
              createVNode(_component_BButton, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode("Text")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Preview.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const Preview = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$3 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Example = resolveComponent("Example");
  const _component_BUpload = resolveComponent("BUpload");
  const _component_BButton = resolveComponent("BButton");
  _push(ssrRenderComponent(_component_Example, _attrs, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_BUpload, {
          disabled: "",
          action: "http://localhost:3000/upload",
          showList: "",
          listType: "image"
        }, {
          default: withCtx(({ dragging }, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent(_component_BButton, { size: "large" }, {
                default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`Disabled`);
                  } else {
                    return [
                      createTextVNode("Disabled")
                    ];
                  }
                }),
                _: 2
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode(_component_BButton, { size: "large" }, {
                  default: withCtx(() => [
                    createTextVNode("Disabled")
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
          createVNode(_component_BUpload, {
            disabled: "",
            action: "http://localhost:3000/upload",
            showList: "",
            listType: "image"
          }, {
            default: withCtx(({ dragging }) => [
              createVNode(_component_BButton, { size: "large" }, {
                default: withCtx(() => [
                  createTextVNode("Disabled")
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
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Disabled.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const Disabled = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Attributes",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["fileList", "上传的文件列表", "UploadFiles", "[]"],
      ["action", "文件上传路径", "string", "''"],
      ["name", "上传的文件名", "string", "原本的文件名"],
      ["accept", "接受的文件类型", "string", "''"],
      ["method", "请求类型", "'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'", "POST"],
      ["headers", "请求头", "Headers", "{}"],
      ["data", "上传时附带的参数", "Object", "{}"],
      ["showList", "是否显示上传列表", "boolean", "true"],
      ["listType", "文件列表样式, 需要showList为true", "'image' | 'text'", "text"],
      ["disabled", "是否禁用上传", "boolean", "false"],
      ["multiple", "是否支持多文件上传", "boolean", "false"],
      ["drag", "是否为拖拽上传", "boolean", "false"]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Attributes.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "Slots",
  __ssrInlineRender: true,
  setup(__props) {
    const data = [
      ["default", "默认插槽, 显示被包裹的元素", "", ""],
      ["icon", "自定义图标插槽", "", ""]
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("examples/upload/Slots.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __pageData = JSON.parse('{"title":"Upload 上传组件","description":"","frontmatter":{},"headers":[],"relativePath":"components/upload.md","filePath":"components/upload.md"}');
const __default__ = { name: "components/upload.md" };
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1 id="upload-上传组件" tabindex="-1">Upload 上传组件 <a class="header-anchor" href="#upload-上传组件" aria-label="Permalink to &quot;Upload 上传组件&quot;">​</a></h1><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><p>在使用 Upload 包裹自定义元素后，点击自定义元素即可上传文件</p>`);
      _push(ssrRenderComponent(Basic, null, null, _parent));
      _push(`<h2 id="自定义图标" tabindex="-1">自定义图标 <a class="header-anchor" href="#自定义图标" aria-label="Permalink to &quot;自定义图标&quot;">​</a></h2><p>可以使用 #icon 插槽自定义图标</p>`);
      _push(ssrRenderComponent(Custom, null, null, _parent));
      _push(`<h2 id="文件预览" tabindex="-1">文件预览 <a class="header-anchor" href="#文件预览" aria-label="Permalink to &quot;文件预览&quot;">​</a></h2><p>使用 listType 属性设置预览类型, 需配合 showList 使用</p>`);
      _push(ssrRenderComponent(Preview, null, null, _parent));
      _push(`<h2 id="拖拽上传" tabindex="-1">拖拽上传 <a class="header-anchor" href="#拖拽上传" aria-label="Permalink to &quot;拖拽上传&quot;">​</a></h2><p>使用 drag 属性进行拖拽上传</p>`);
      _push(ssrRenderComponent(Drag, null, null, _parent));
      _push(`<h2 id="多文件上传" tabindex="-1">多文件上传 <a class="header-anchor" href="#多文件上传" aria-label="Permalink to &quot;多文件上传&quot;">​</a></h2><p>使用 multiple 进行多文件上传</p>`);
      _push(ssrRenderComponent(Multiple, null, null, _parent));
      _push(`<h2 id="禁用上传" tabindex="-1">禁用上传 <a class="header-anchor" href="#禁用上传" aria-label="Permalink to &quot;禁用上传&quot;">​</a></h2><p>使用 disabled 禁用文件上传</p>`);
      _push(ssrRenderComponent(Disabled, null, null, _parent));
      _push(`<h2 id="文件限制" tabindex="-1">文件限制 <a class="header-anchor" href="#文件限制" aria-label="Permalink to &quot;文件限制&quot;">​</a></h2><p>可以使用 accept 属性限制文件上传类型，使用 limit 属性限制最大上传数量</p>`);
      _push(ssrRenderComponent(Limit, null, null, _parent));
      _push(`<h1 id="upload-api" tabindex="-1">Upload API <a class="header-anchor" href="#upload-api" aria-label="Permalink to &quot;Upload API&quot;">​</a></h1><h2 id="upload-attributes" tabindex="-1">Upload Attributes <a class="header-anchor" href="#upload-attributes" aria-label="Permalink to &quot;Upload Attributes&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$2, null, null, _parent));
      _push(`<h2 id="upload-slots" tabindex="-1">Upload Slots <a class="header-anchor" href="#upload-slots" aria-label="Permalink to &quot;Upload Slots&quot;">​</a></h2>`);
      _push(ssrRenderComponent(_sfc_main$1, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/upload.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  __pageData,
  _sfc_main as default
};
