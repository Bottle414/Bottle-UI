import { ExtractPropTypes, PropType } from 'vue'
import { hasOwn } from '@bottle-ui/utils/object'

export interface TreeOption {
    label: string,
    key: number | string,
    children: TreeOption[],
    [key: string]: unknown// 自定义属性
}

export type TreeOptions = Partial<TreeOption>

export interface TreeNode extends Required<TreeOptions> {// 使得treeoption必填
    level: number,
    raw: TreeOption,    // 原数据
    children: TreeNode[],
    isLeaf: boolean
}

let nodeId = 0

export class Node {// 树的节点结构
    id: number
    text: string
    data: TreeOptions[]
    level: number

    full: boolean
    half: boolean
    expanded: boolean
    isLeaf: boolean

    parent: Node | null
    children: Node[]

    constructor(options: TreeOptions){
        this.id = nodeId ++
        this.text = ''
        this.data = []
        this.level = 0

        this.full = false
        this.half = false
        this.expanded = false
        this.isLeaf = false

        this.parent = null
        this.children = []

        for (const option in options){
            if (hasOwn(options, option)){
                this[option] = options[option]
            }
        }
    }
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
    },
    checked: {
        type: Array as PropType<number[]>,
        default: () => []
    },
    indent: {
        type: Number,
        default: 16
    }
} as const// 这个对象的属性是只读的，并且推断出最精确的字面量类型

export type TreeProps = Partial<ExtractPropTypes<typeof treeProps>>// 表示字段可以不传