<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['default', '默认插槽'],
        ['label', '标签'],
        ['error', '校验失败显示内容'],
        ['success', '校验成功显示内容']
    ]
</script>

<style scoped>
</style>