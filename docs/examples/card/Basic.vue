/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BCard>
            <template #header>
                Header
            </template>
            <li>List Item 1</li>
            <li>List Item 2</li>
            <li>List Item 3</li>
            <li>List Item 4</li>
            <template #footer>
                Footer
            </template>
        </BCard>
    </Example>
</template>

<script lang='ts' setup>
</script>

<style scoped>
    li {
        list-style: none;
    }
</style>