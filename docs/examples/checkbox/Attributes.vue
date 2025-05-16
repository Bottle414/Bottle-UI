<template>
    <Table :data="data">

    </Table>
</template>

<script lang='ts' setup>
    const data = [
        ['modelValue', '绑定的值', 'string | number | boolean', 'null'],
        ['trueValue', '选中时的值', 'string | number | boolean', 'null'],
        ['falseValue', '未选中时的值', 'string | number | boolean', 'null'],
        ['label', '标签', 'string', 'null'],
        ['size', '尺寸', 'number | string', '12px'],
        ['color', '颜色', 'string', '#bebe'],
        ['checked', '是否勾选', 'boolean', 'false'],
        ['disabled', '是否禁用', 'boolean', 'false'],
        ['indeterminate', '是否为不定状态', 'boolean', 'false']
    ]
    
</script>

<style scoped>

</style>