<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['shadow', '阴影出现时机', "'always' | 'hover' | 'never'", 'hover'],
        ['bodyStyle', '改变卡片中部的样式', 'string | Array | Object', 'null'],
        ['bodyClass', '绑定到卡片中部的类', 'string', 'null']
    ]
</script>

<style scoped>
</style>