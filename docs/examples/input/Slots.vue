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
        ['prefix', '前缀, 不会覆盖 showPassword和clearable 自带的图标'],
        ['suffix', '后缀, 不会覆盖 showPassword和clearable 自带的图标']
    ]
</script>