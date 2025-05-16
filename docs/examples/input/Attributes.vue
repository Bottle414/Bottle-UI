<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['type', '原生类型', 'text | password', 'text'],
        ['modelValue', '绑定的值', 'any', 'modelValue'],
        ['placeholder', '占位符', 'string', ''],
        ['label', '标签内容', 'string', ''],
        ['showPassword', '是否显示密码', 'boolean', 'false'],
        ['clearable', '一键清空', 'boolean', 'false'],
        ['disabled', '禁用', 'boolean', 'false'],
        ['readonly', '只读', 'boolean', 'false']
    ]
</script>