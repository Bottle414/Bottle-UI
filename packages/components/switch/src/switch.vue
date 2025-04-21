<template>
    <label :class="[ns.b(), ns.is('active', modelValue), ns.is('disabled', disabled)]">
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
    .b-switch {
        display: inline-flex;
        align-items: center;
        position: relative;
        height: 22px;
        border-radius: 11px;
        cursor: pointer;
        transition: background-color 0.3s;
        padding: 0 6px;
    }
    .b-switch__core {
        width: 16px;
        height: 16px;
        background: #fff;
        border-radius: 50%;
        transition: transform 0.3s;
        position: relative;
        z-index: 1;
    }
    .is-checked .b-switch__core {
        transform: translateX(20px);
    }
    .is-disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    .b-switch__label {
        font-size: 12px;
        color: #fff;
        user-select: none;
        white-space: nowrap;
        position: relative;
        z-index: 0;
        padding: 0 4px;
    }

    .b-switch__label--left {
        margin-right: 6px;
    }
    .b-switch__label--right {
        margin-left: 6px;
    }
</style>
