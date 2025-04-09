import { ExtractPropTypes, PropType } from 'vue'

type key = string | number

export interface TreeOption {
    label?: string | number,
    key?: key,
    children?: TreeOption[],
    [key: string]: unknown// 自定义属性
}

export interface TreeNode extends Required<TreeOption> {// 使得treeoption必填
    level: number,
    raw: TreeOption,    // 原数据
    isLeaf: boolean
}

export const treeProps = {
    data: {
        type: Array as PropType<TreeOption[]>,
        default: () => []// 不传返回空
    },
    label: {// 绑定label字段
        type: String,
        default: 'label'// 不传就叫label
    },
    key: {
        type: String,
        default: 'key'
    },
    children: {
        type: String,
        default: 'children'
    }
} as const// 这个对象的属性是只读的，并且推断出最精确的字面量类型

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>// 表示字段可以不传