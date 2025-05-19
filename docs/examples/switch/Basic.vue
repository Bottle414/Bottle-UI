/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        {{ modelValue }}
        <BSwitch v-model="modelValue"></BSwitch>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let modelValue = ref(true)
</script>

<style scoped>
</style>