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
        ['data', '绑定的值', 'Array', '[]'],
        ['label', '标签绑定的字段', 'string', 'label'],
        ['keyField', '标识符绑定的字段', 'string', 'key'],
        ['children', '子节点绑定的字段', 'string', 'children'],
        ['checkbox', '带多选框', 'boolean', 'false'],
        ['multiple', '多选', 'boolean', 'false'],
        ['virtual', '虚拟滚动', 'boolean', 'false'],
        ['defaultExpandedKeys', '默认展开的节点(不选中)', 'Array', '[]'],
        ['defaultCheckedKeys', '默认选中的节点', 'Array', '[]'],
        ['selectedKeys', '选中的节点', 'Array', '[]'],
        ['disabledKeys', '禁用的节点', 'Array', '[]'],
        ['indeterminateKeys', '不定的节点', 'Array', '[]'],
        ['onLoad', '异步加载时获取节点的函数', '() => Promise<[]>', ''],

    ]
</script>

<style scoped>
</style>