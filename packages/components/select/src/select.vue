/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <select>
        <BTooltip>
            <slot></slot>
        </BTooltip>
    </select>
</template>

<script lang='ts' setup>
    import { ref } from 'vue'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { selectProps } from './select'
    import BTooltip from '@bottle-ui/components/tooltip'
    const ns = useNamespace('select')
    const props = defineProps(selectProps)
    const { multiple, disabled, placeholder, size } = props
    defineOptions({
        name: 'BSelect'
    })
    
</script>

<style scoped>
    
</style>