<template>
    <label :class="ns.b()" :style="(style as StyleValue)">
        <input
        ref="inputRef"
        type="checkbox"
        style="display: none"
        :checked="isChecked"
        :disabled="disabled"
        @change="handleChange"
      />      
      <span class="b-custom-checkbox"></span>
      <span v-if="$slots.default || label" :class="ns.b('label')">
        <slot>
          <span v-if="label">{{ label }}</span>
        </slot>
      </span>
    </label>
  </template>
  
  <script lang="ts" setup>
  import { checkboxProps, checkboxEmits } from './checkbox'
  import { computed, StyleValue, onMounted, ref, watch } from 'vue'
  import useNamespace from '@bottle-ui/hooks/useNamespace'
  
  const ns = useNamespace('checkbox')
  const props = defineProps(checkboxProps)
  const emit = defineEmits(checkboxEmits)
  
  const { label, color, size, disabled } = props
  
  // 样式变量
  const style = computed(() => ({
    '--checkbox-color': color || '#bebe',
    '--checkbox-size': size || '12px'
  }))
  
  // 当前是否为选中状态
  const isChecked = computed(() => {
    // 布尔值直接判断
    if (typeof props.modelValue === 'boolean') return props.modelValue
    // 非布尔值，用 props.checked 控制选中状态
    return props.checked
  })

  const inputRef = ref<HTMLInputElement | null>(null)

    onMounted(() => {
    if (inputRef.value) {
        inputRef.value.indeterminate = props.indeterminate
    }
    })

    watch(() => props.indeterminate, (val) => {
    if (inputRef.value) {
        inputRef.value.indeterminate = val
    }
    })

  
  // 当用户点击 checkbox 时的处理
  const handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement
    const checked = target.checked
  
    let newValue: boolean | string | number
  
    if (typeof props.modelValue === 'boolean') {
      newValue = checked
    } else {
      newValue = checked ? props.trueValue ?? true : props.falseValue ?? false
    }
  
    emit('update:modelValue', newValue)
    emit('Change', checked)
  }
  
  defineOptions({ name: 'BCheckbox' })
  </script>
  
  <style scoped>
  .b-custom-checkbox {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    position: relative;
    width: var(--checkbox-size);
    height: var(--checkbox-size);
    border: 2px solid #ccc;
    border-radius: 4px;
    margin-right: 8px;
    background-color: white;
    transition: background-color 0.3s ease;
  }
  
  input[type='checkbox']:checked + .b-custom-checkbox {
    background-color: var(--checkbox-color);
    border-color: var(--checkbox-color);
  }
  
  input[type='checkbox']:disabled + .b-custom-checkbox {
    background-color: #ccc;
    border-color: #bbb;
  }
  
  input[type='checkbox']:checked + .b-custom-checkbox::after {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    content: '✓';
    color: #fff;
    font-size: calc(var(--checkbox-size) * 0.75);
  }
  
  input[type='checkbox']:disabled + .b-custom-checkbox::after {
    color: #eee;
  }

  /* 补上 indeterminate 样式 */
input[type='checkbox']:indeterminate + .b-custom-checkbox {
    background-color: var(--checkbox-color);
    border-color: var(--checkbox-color);
  }
  
  input[type='checkbox']:indeterminate + .b-custom-checkbox::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: 50%;
    height: 2px;
    background-color: #fff;
    transform: translate(-50%, -50%);
  }
  
  </style>
  