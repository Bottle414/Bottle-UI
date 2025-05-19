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
        ['blur', '失去焦点时触发', "'update:modelValue': (val: string) => val"],
        ['input', '输入时触发', "input: (val: string) => isString(val)"],
        ['change', '值改变时触发', "change: (val: string) => isString(val)"],
        ['focus', '聚焦时触发', "focus: (e: FocusEvent) => e instanceof FocusEvent"],
        ['clean', '清空时触发', "clear: () => true"]
    ]
</script>