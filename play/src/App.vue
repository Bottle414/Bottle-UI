/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <BUpload multiple :before-upload="handleBeforeUpload" action="http://localhost:3000/upload" showList listType="image">
        <BButton size="large">Upload</BButton>
    </BUpload>
    <br/>
    <BCard shadow="always">
        why
        <BButton>
            How about the buton
        </BButton>
    </BCard>

    <BVirtualList v-slot="item" :items="[1,2,3,9,5,6,7,2,3,6,4,3,53,2,5,6,7,1,3]">
        <div>
            <p>
                <span style="color:red">{{item.item}}</span>
                {{item}}
            </p>
        </div>
    </BVirtualList>
    <BTree virtual :data="data"></BTree>
</template>

<script lang='ts' setup>
    import { BUpload, BButton, BCard, BVirtualList, BTree } from '@bottle-ui/components'
    function handleBeforeUpload(){
        console.log('upload')
        return true
    }

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
            label: "Node 1",
            key: "3",
            isLeaf: false,
            children: [
                {
                    label: "Node 1.1",
                    key: "3.1",
                    // disabled: true,
                    children: []
                },
                {
                    label: "Node 1.2",
                    key: "4.2",
                    children: [
                        {
                            label: "Node 1.1.1",
                            key: "1.4.1",
                            children: []
                        }
                    ]
                }
            ]
        },
        {
            label: "Node 2",
            key: "5",
            children: []
        },
        {
            label: "Node 2",
            key: "5",
            children: []
        },
        {
            label: "Node 2",
            key: "8",
            children: []
        },
        {
            label: "Node 2",
            key: "7",
            children: []
        },
        {
            label: "Node 2",
            key: "6",
            children: []
        }
    ]
</script>

<style scoped>
    .b-card__body {
        display: flex;
        flex-direction: column;
    }
</style>