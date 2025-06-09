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
</template>

<script lang='ts' setup>
    import { BUpload, BButton, BCard, BVirtualList } from '@bottle-ui/components'
    function handleBeforeUpload(){
        console.log('upload')
        return true
    }
</script>

<style scoped>
    .b-card__body {
        display: flex;
        flex-direction: column;
    }
</style>