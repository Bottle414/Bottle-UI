/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { PropType } from "vue"
import { TreeNode } from "./tree"

export const treeNodeProps = {
    node: {
        type: Object as PropType<TreeNode>,
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
    checked: {// 是否被选中
        type: Boolean
    },
    disabled: {
        type: Boolean
    },
    indeterminate: {
        type: Boolean
    }
}

export const treeNodeEmits = {
    toggleExpand: (node: TreeNode) => node,
    handleSelect: (node: TreeNode) => node,
    handleCheck: (node: TreeNode) => node
}

export const treeNodeContentProps = {
    node: {
        type: Object as PropType<TreeNode>,
        required: true
    }
}