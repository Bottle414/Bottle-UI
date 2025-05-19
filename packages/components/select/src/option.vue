/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <div :class="ns.b()">
        {{ props.label }}
    </div>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { optionProps } from './option'

    const ns = useNamespace('option')

    const props = defineProps(optionProps)
    defineOptions({
        name: 'BOption'
    })
</script>

<style scoped>
    
</style>