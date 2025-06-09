/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <BVirtualList v-slot="item" :items="fakeData">
        <div>
            <p>
                <span style="color:red">{{item.item}}</span>
                {{item}}
            </p>
        </div>
    </BVirtualList>
</template>

<script lang='ts' setup>
    const fakeData = [1,2,3,4,5,6,7,8,17,34,22,11,34,9,8,7,4,2,1,4,6,19,18,17,34,22,11,34,6]
</script>

<style scoped>
</style>