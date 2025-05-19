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
        ['default', '默认插槽，嵌入内容'],
        ['title', '头部插槽，嵌入标题', "'collapse'"],
        ['icon', '图标插槽，嵌入展开图标']
    ]
</script>