/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BSwitch v-model="modelValue" active-color='yellow' inactive-color="#eee"></BSwitch>
        <BSwitch v-model="modelValue" active-color="#bebe" inactive-color="#eef"></BSwitch>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let modelValue = ref(true)
</script>

<style scoped>
</style>