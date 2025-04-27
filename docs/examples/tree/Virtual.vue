<template>
    <Example>
        <BTree
            :data="data"
            :keyField="'key'"
            v-model:selectedKeys="selected"
            virtual
            checkbox
            :defaultCheckedKeys="checked"
            :indeterminateKeys="['1']"
        ></BTree>
    </Example>
</template>

<script lang='ts' setup>
    import { BTree } from '@bottle-ui/components'
    import { ref } from 'vue';
    const selected = ref([])
    const checked = ['1', '3', '8']
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
        },
        {
            label: "Node 3",
            key: "3",
            children: []
        },
        {
            label: "Node 4",
            key: "4",
            children: []
        },
        {
            label: "Node 5",
            key: "5",
            children: []
        },
        {
            label: "Node 6",
            key: "6",
            children: []
        },
        {
            label: "Node 7",
            key: "7",
            children: []
        },
        {
            label: "Node 8",
            key: "8",
            children: []
        },
        {
            label: "Node 9",
            key: "9",
            children: []
        },
        {
            label: "Node 10",
            key: "10",
            children: []
        },
        {
            label: "Node 11",
            key: "11",
            children: []
        },
        {
            label: "Node 12",
            key: "12",
            children: []
        },
        {
            label: "Node 13",
            key: "13",
            children: []
        },
        {
            label: "Node 14",
            key: "14",
            children: []
        }
    ]
</script>

<style scoped>
</style>