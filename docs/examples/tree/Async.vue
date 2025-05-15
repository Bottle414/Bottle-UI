<template>
    <Example>
        <BTree :data="data" :keyField="'key'" :on-load="asyncload"></BTree>
    </Example>
</template>

<script lang="ts" setup>
    import { TreeOption } from '@bottle414/bottle-ui/components/tree'
    const data = [
        {
            label: 'Node 1',
            key: '1',
            isLeaf: false,
            children: []
        },
        {
            label: 'Node 2',
            key: '2',
            children: []
        }
    ]

    const asyncload = async (node: TreeOption) => {
        // 模拟异步加载
        // 模拟异步接口
        await new Promise((resolve) => setTimeout(resolve, 1000))

        return [
            {
                key: '3',
                label: '异步子节点1',
                children: [],
                isLeaf: true
            }
        ]
    }
</script>

<style scoped></style>
