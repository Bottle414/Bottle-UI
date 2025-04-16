import { defineComponent, inject } from "vue";
import { treeNodeContentProps } from "./tree-node";
import { treeInjectKey } from "./tree";

export default defineComponent({
    name: 'BTreeNodeContent',
    props: treeNodeContentProps,
    setup(props){
        const TreeContext = inject(treeInjectKey)
        return () => {
            return TreeContext?.slots.default ? TreeContext?.slots.default({node: props.node}) : ''
        }
    }
})