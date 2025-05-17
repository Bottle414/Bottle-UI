<template>
    <Example>
        <BVirtualList :items="fakeData" :size="22" id="collapse">
            <template #default="{ data }">
                <p>{{ data }}</p>
            </template>
        </BVirtualList>
        <!-- 不知道为什么高度突然塌陷了，virtual-list生前还是好好的 -->
    </Example>
</template>

<script lang='ts' setup>
    const fakeData = [1,2,3,4,5,6,7,8,17,34,22,11,34,9,8,7,4,2,1,4,6,19,18,17,34,22,11,34,6]
</script>

<style scoped>
    #collapse {
        height: 200px;
    }
</style>