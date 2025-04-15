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
    }
}

export const treeNodeEmits = {
    toggleExpand: (node: TreeNode) => node
}