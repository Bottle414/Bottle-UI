<template>
    <p v-for="node in tree">{{ node }}</p>
</template>

<script lang='ts' setup>
    import { ref, watch, computed } from 'vue';
    import { treeProps } from './tree'
    import type { TreeNode, TreeOption } from './tree'

    const props = defineProps(treeProps)
    const { label, key } = props// 解构出对应字段
    // 收到数据进行格式化
    const tree = ref<TreeNode[]>([])// 数据源 never 无法推导

    function formateNode(data: TreeOption[], parent: TreeNode | null) {
        return data.map(node => {
            const newNode: TreeNode = {
                label: node[label] as string,
                key: node[key] as number,
                children: [],
                raw: node,
                level: parent ? parent.level + 1 : 0,
                isLeaf: true
            }

            if (node.children?.length){
                newNode.isLeaf = false
                newNode.children = formateNode(node.children, newNode)
            }
            return newNode
        })
    }

    function formateTree(data: TreeOption[]): TreeNode[]{
        return formateNode(data, null)
    }

    const expandeedTreeSet = ref(new Set(props.checked))

    const flattenTree = computed(() => {
        let flatTree: TreeNode[] = []// 被拍平的节点们
        const nodes = tree.value || []// 格式化后的结果
        const stack: TreeNode[] = []// 用于遍历的栈

        for (let i = nodes.length - 1; i >= 0; i--){
            stack.push(nodes[i])
        }

        while(stack.length){
            const node = stack.pop()
            if (!node) continue// 栈空
            flattenTree.value.push(node)
            if (expandeedTreeSet.value.has(node.key)){// 要是这个节点需要展开
                const children = node.children
                for (let i = node.children.length - 1; i >= 0; --i){
                    stack.push(node.children[i])
                }
            }
        }

        return flatTree
    })

    watch(() => props.data, (data: TreeOption[]) => {// 监视数据传入, 格式化数据
        tree.value = formateTree(data)
        console.log(tree.value);
    },{ immediate: true })

    defineOptions({
        name: 'BTree'
    })
</script>

<style scoped>
   
</style>