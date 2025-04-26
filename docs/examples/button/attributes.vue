<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['type', '按钮的类型', "'primary' | 'success' | 'warning' | 'error' | 'default'", 'success'],
        ['nativeType', '原生type属性', "'button' | 'submit' | 'reset'", 'button'],
        ['size', '按钮尺寸', "string | 'large' | 'medium' | 'small'", '32'],
        ['color', '颜色', 'string', '#bebe'],
        ['round', '圆角', 'boolean', 'false'],
        ['circle', '圆形', 'boolean', 'false'],
        ['disabled', '禁用', 'boolean', 'false'],
        ['loading', '加载中', 'boolean', 'false']
    ]
</script>

<style scoped>
   
</style>