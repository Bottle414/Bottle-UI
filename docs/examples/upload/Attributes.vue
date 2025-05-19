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
        ['fileList', '上传的文件列表', 'UploadFiles', '[]'],
        ['action', '文件上传路径', 'string', "''"],
        ['name', '上传的文件名', 'string', '原本的文件名'],
        ['accept', '接受的文件类型', 'string', "''"],
        ['method', '请求类型', "'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH'", 'POST'],
        ['headers', '请求头', 'Headers', '{}'],
        ['data', '上传时附带的参数', 'Object', "{}"],
        ['showList', '是否显示上传列表', 'boolean', 'true'],
        ['listType', '文件列表样式, 需要showList为true', "'image' | 'text'", 'text'],
        ['disabled', '是否禁用上传', 'boolean', 'false'],
        ['multiple', '是否支持多文件上传', 'boolean', 'false'],
        ['drag', '是否为拖拽上传', 'boolean', 'false']
    ]
</script>

<style scoped>
</style>