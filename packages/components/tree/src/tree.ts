// tree所需要的一些属性与类型
import { ExtractPropTypes, PropType, SetupContext, InjectionKey } from 'vue'// 两个自带的泛型共聚

export type Key = number | string

export interface TreeOption {
    label?: Key
    key?: Key
    children?: TreeOption[]
    isLeaf?: Boolean,
    disabled?: Boolean,
    [key: string]: unknown
}

export interface TreeNode extends Required<TreeOption> {
    level: number
    raw: TreeOption
    children: TreeNode[]
    isLeaf: Boolean
}

export const treeProps = {
    data: {// 可以是任意值
        type: Array as PropType<TreeOption[]>,
        default: () => []
    },
    label: {// 绑定标准字段
        type: String,
        default: 'label'
    },
    keyField: {// key是vue 在VNode的保留字段，用key做名字会冲突
        type: String,
        default: 'key'
    },
    children: {
        type: String,
        default: 'children'
    },
    defaultExpandedKeys: {
        type: Array as PropType<Key[]>,
        default: () => []
    },
    selectedKeys: {
        type: Array as PropType<Key[]>,
        default: () => []
    },
    onLoad: {
        type: Function as PropType<(node: TreeOption) => Promise<TreeOption[]>>,
    },
    checkbox: {// 带勾选框
        type: Boolean,
        default: false
    },
    multiple: {// 多选
        type: Boolean,
        default: false
    },
    virtual: {// 虚拟滚动
        type: Boolean,
        default: false
    }
} as const// 变成只读的

// 抽离对象类型，而不是推导出Constructor    可传可不传

export const treeEmits = {// 同步响应式数据, 可以直接改为defineModel
    'update:selectedKeys': (keys: Key[]) => keys// 注意时间名，不能使用自定义事件改变外部状态
}

export interface TreeContext {
    slots: SetupContext['slots']// 插槽
    // emit: SetupContext['emit']// 事件
}
// 作为提供数据的属性
export const treeInjectKey: InjectionKey<TreeContext> = Symbol()// 使用symbol作为键值, 唯一、可靠 InjectionKey是vue3的一个Symbol拓展，可以让inject自动推导类型为TreeContext

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>// 表示字段可以不传