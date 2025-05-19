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
        ['header', '顶部插槽', '', ''],
        ['default', '默认, 中部插槽', '', ''],
        ['footer', '底部插槽', '', '']
    ]
</script>

<style scoped>
</style>