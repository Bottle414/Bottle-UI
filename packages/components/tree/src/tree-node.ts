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
    }
}

export const treeNodeEmits = {
    toggleExpand: (node: TreeNode) => node,
    handleSelect: (node: TreeNode) => node
}