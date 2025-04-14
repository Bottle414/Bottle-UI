<template>
    <label :class="ns.b()" :style="style">
        <input
            type="checkbox"
            style="display: none"
            :value="value" :checked="checked"
            :indeterminate="indeterminate"
        />
        <span class="b-custom-checkbox"></span>
        <span v-if="label" :class="ns.b('label')">{{ label }}</span>
    </label>
    <!-- 此处label包裹input，点击label时: custom-checkbox会触发一次click, label会促使input触发click(即使input已经none), 所以事件会触发两次, 需要改成@change -->
</template>

<script lang='ts' setup>
    import { checkboxProps } from './checkbox'
    import useNamespace from '@bottle-ui/hooks/useNamespace'
    import { computed } from 'vue';

    const ns = useNamespace('checkbox')
    const props = defineProps(checkboxProps)
    const { label, color, size, value, checked, indeterminate } = props

    const style = computed(() => {
        return {
            '--checkbox-color': color || 'red',
            '--checkbox-size': size || '12px'
        }
    })

    defineOptions({
        name: 'BCheckbox'
    })
</script>

<style scoped>
    .b-custom-checkbox {
        display: inline-flex;
        align-items: center;
        cursor: pointer;
    }

    .b-custom-checkbox {
        position: relative;
        display: inline-block;
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: 2px solid #ccc;
        border-radius: 4px;
        margin-right: 8px;
        position: relative;
        background-color: white;
        transition: background-color 0.3s ease;
    }

    input[type='checkbox']:checked + .b-custom-checkbox {
        background-color: var(--checkbox-color);
        border-color: var(--checkbox-color);
    }

    input[type='checkbox']:checked+.b-custom-checkbox::after {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        content: '✓';
        color: #fff;
        font-size:  calc(var(--checkbox-size) * 0.75);/* 这里改成动态计算 */
    }
</style>