/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BTree
            :data="data"
            :keyField="'key'"
            checkbox
            :indeterminateKeys="['1','2']"
            :defaultCheckedKeys="['1.1']"
        ></BTree>
    </Example>
</template>

<script lang='ts' setup>
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