<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['size', '每一项的大小', 'number', '30'],
        ['remain', '每次展示的项数', 'number', '8'],
        ['items', '每一项的值', 'Array', '[]']
    ]
</script>

<style scoped>
</style>