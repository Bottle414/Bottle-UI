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
        ['size', '每一项的预估大小', 'number', '30'],
        ['height', '窗口高度', 'number', '200'],
        ['bufferScale', '缓冲区比例', 'number', '.2'],
        ['items', '每一项的值', 'Array', '[]']
    ]
</script>

<style scoped>
</style>