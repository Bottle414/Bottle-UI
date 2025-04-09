<template>
    <p v-for="node in tree">{{ node }}</p>
</template>

<script lang='ts' setup>
    import { ref, watch } from 'vue';
    import { treeProps } from './tree'
    import type { TreeNode, TreeOption } from './tree'

    const props = defineProps(treeProps)
    const { label, key, children } = props// 解构出对应字段
    // 收到数据进行格式化
    const tree = ref<TreeNode[]>([])// 数据源 never 无法推导

    function formateNode(data: TreeOption[], parent: TreeNode | null) {
        return data.map(node => {
            const newNode: TreeNode = {
                label: node[label] as string,
                key: key,
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