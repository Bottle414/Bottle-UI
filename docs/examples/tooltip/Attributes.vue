<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['content', '文字提示内容', 'string', ''],
        ['placement', '文字提示朝向', "'top' | 'bottom' | 'left' | 'right'"],
        ['light', '浅色样式', 'boolean', 'false']
    ]
</script>

<style scoped>
</style>