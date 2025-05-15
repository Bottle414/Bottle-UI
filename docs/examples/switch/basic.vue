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