<template>
    <table class="table">
        <thead>
            <tr>
                <th>属性名</th>
                <th>说明</th>
                <th>类型</th>
                <th>默认值</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in data" :key="index">
                <td v-for="i in item" :key="i">{{ i }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang='ts' setup>
    defineProps(['data'])
</script>

<style scoped>
    .table {
        width: 100%;
        border-collapse: collapse;
        table-layout: auto;
        overflow-x: auto;
    }

    .table th,
    .table td {
        border: 1px solid #ddd;
        padding: 12px 24px;
        text-align: left;
    }

    .table th {
        background-color: #f9f9f9;
        font-weight: bold;
    }
</style>