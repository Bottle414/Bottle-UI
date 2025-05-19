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
        ['type', '进度条形状', 'line | circle', 'line'],
        ['percentage', '百分比', 'number', '50'],
        ['showPercentage', '显示百分比', 'boolean', 'true'],
        ['width', '线形进度条长度', 'number', '200'],
        ['height', '线形进度条高度', 'number', '10'],
        ['color', '颜色', 'string', '#bebe'],
        ['circleWidth', '圆形进度条直径', 'number', '100'],
        ['radius', '两端弧度百分比', 'number', '100'],
        ['status', '状态', "'success | waring | error'", 'success'],
        ['indeterminate', '不定状态', 'boolean', 'false']
    ]
</script>

<style scoped>
</style>