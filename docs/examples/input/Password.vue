/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <Example>
        <BInput
            type="password"
            clearable
            v-model="inputValue"
            placeholder="please input..."
        >
        </BInput>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let inputValue = ref()
</script>

<style scoped>
</style>