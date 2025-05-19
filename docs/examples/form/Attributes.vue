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
        ['model', '绑定的对象', 'object', '{}'],
        ['rule', '校验规则', 'object | Array', '[]'],
        ['showMessage', '显示校验信息', 'boolean', 'true'],
        ['label', '标签', 'string', '']
    ]
</script>

<style scoped>
</style>