<template>
    <Table :data="data"></Table>
</template>

<script lang='ts' setup>
    const data = [
        ['type', '按钮的类型', "'primary' | 'success' | 'warning' | 'error' | 'default'", 'success'],
        ['nativeType', '原生type属性', "'button' | 'submit' | 'reset'", 'button'],
        ['toTop', '是否触发回到顶部', 'boolean', 'false'],
        ['target', '触发回到顶部的目标元素id、window或者document', 'string', 'window'],
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