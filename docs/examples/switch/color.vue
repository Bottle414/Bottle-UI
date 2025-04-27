<template>
    <Example>
        <BSwitch v-model="modelValue" active-color='yellow' inactive-color="#eee"></BSwitch>
        <BSwitch v-model="modelValue" active-color="#bebe" inactive-color="#eef"></BSwitch>
    </Example>
</template>

<script lang='ts' setup>
    import { BSwitch } from '@bottle-ui/components'
    import { ref } from 'vue'
    let modelValue = ref(true)
</script>

<style scoped>
</style>