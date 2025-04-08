<template>
    Tree
</template>

<script lang='ts' setup>
    import { ref, watch } from 'vue';
    import { treeProps } from './tree'
    import type { TreeNode, TreeOption } from './tree'

    const props = defineProps(treeProps)
    // 收到数据进行格式化
    const tree = ref<TreeNode[]>([])// 数据源 never 无法推导

    function createTree(data: TreeOption[]): any{

    }

    watch(() => props.data, (data: TreeOption[]) => {// 监视数据传入, 格式化数据
        tree.value = createTree(data)
    },{ immediate: true })

    defineOptions({
        name: 'BTree'
    })
</script>

<style scoped>
   
</style>