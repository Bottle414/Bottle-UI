/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BSwitch v-model="modelValue" active-color="coral" inactive-color="#eef" active-text="on" inactive-text="off"></BSwitch>
        <BSwitch v-model="modelValue" active-text="开" inactive-text="关"></BSwitch>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let modelValue = ref(true)
</script>

<style scoped>
</style>