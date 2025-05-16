<template>
    <Example>
        绑定的值: {{ modelValue }}
        <BCheckbox :model-value="modelValue">{{ modelValue }}</BCheckbox>
        <BCheckbox :label="label">{{ label }}</BCheckbox>
    </Example>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    let modelValue = ref(true)
    const label = '标签'
    
</script>

<style scoped>
</style>