/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

<template>
    <label :class="[ns.b(), ns.is('active', modelValue), ns.is('disabled', disabled)]" :style="{ background: modelValue ? activeColor : inactiveColor}">
        <input 
            type="checkbox"
            style="display: none;"
            @change="handleChange"
        />
        <div :class="[ns.e('core'), ns.is('active', modelValue)]"></div>
        <span v-if="modelValue" :class="ns.e('active-text')">
            {{ activeText }}
        </span>
        <span v-else :class="ns.e('inactive-text')">
            {{ inactiveText }}
        </span>
    </label>
</template>

<script setup lang="ts">
    import { switchProps, switchEmits } from './switch'
    import useNamespace from '@bottle-ui/hooks/useNamespace'

    const ns = useNamespace('switch')
    const props = defineProps(switchProps)
    const emit = defineEmits(switchEmits)

    const handleChange = () => {
        if (props.disabled) return
        emit('update:modelValue', !props.modelValue)
    }

    defineOptions({
        name: 'BSwitch'
    })
</script>

<style scoped>
    
</style>
