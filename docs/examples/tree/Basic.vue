<template>
    <Example>
        <BTree
            :data="data"
            :keyField="'key'"
        ></BTree>
    </Example>
</template>

<script lang='ts' setup>
    import { BTree } from '@bottle-ui/components'
    const data = [
        {
            label: "Node 1",
            key: "1",
            isLeaf: false,
            children: [
                {
                    label: "Node 1.1",
                    key: "1.1",
                    // disabled: true,
                    children: []
                },
                {
                    label: "Node 1.2",
                    key: "1.2",
                    children: [
                        {
                            label: "Node 1.1.1",
                            key: "1.1.1",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            label: "Node 2",
            key: "2",
            children: []
        }
    ]
</script>

<style scoped>
</style>