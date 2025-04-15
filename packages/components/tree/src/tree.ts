// tree所需要的一些属性与类型
import { ExtractPropTypes, PropType } from 'vue'// 两个自带的泛型共聚

type Key = number | string

export interface TreeOption {
    label?: Key
    key?: Key
    children?: TreeOption[]
    isLeaf?: Boolean
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
    }
} as const// 变成只读的

// 抽离对象类型，而不是推导出Constructor    可传可不传

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>// 表示字段可以不传