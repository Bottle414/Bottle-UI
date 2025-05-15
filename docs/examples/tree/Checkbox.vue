<template>
    <Example>
        单选节点: {{ selected1 }}
        <BTree
            :data="data"
            :keyField="'key'"
            v-model:selectedKeys="selected1"
            checkbox
        ></BTree>
        多选节点: {{ selected2 }}
        <BTree
            :data="data"
            :keyField="'key'"
            v-model:selectedKeys="selected2"
            checkbox
            multiple
        ></BTree>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    const selected1 = ref([])
    const selected2 = ref([])
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
                    children: []
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