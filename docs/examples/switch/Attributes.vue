<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['modelValue | v-model', '绑定的值(必需)', 'boolean', ''],
        ['disabled', '禁用', 'boolean', 'false'],
        ['activeColor', '打开时颜色', 'string', '#bebe'],
        ['inactiveColor', '关闭时颜色', 'string', '#C0CCDA'],
        ['activeText', '打开时显示的文字', 'string', "''"],
        ['inactoveText', '关闭时显示的文字', 'string', "''"]
    ]
</script>

<style scoped>
</style>