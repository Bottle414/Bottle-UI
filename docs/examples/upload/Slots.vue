/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['default', '默认插槽, 显示被包裹的元素', '', ''],
        ['icon', '自定义图标插槽', '', '']
    ]
</script>

<style scoped>
</style>