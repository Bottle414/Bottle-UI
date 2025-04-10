import { PropType } from 'vue'
import { Node } from './tree'

export const treeNodeProps = {
    node: {
        type: Object as PropType<Node>,
        required: true
    }
} as const