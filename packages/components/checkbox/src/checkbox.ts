/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

import { ExtractPropTypes, PropType } from 'vue'

export const checkboxProps = {
  label: String,
  color: String,
  size: [Number, String] as PropType<string | number>,
  modelValue: [String, Number, Boolean] as PropType<string | number | boolean>,
  checked: Boolean, // 控制非布尔 modelValue 时的显示状态
  indeterminate: Boolean,
  disabled: Boolean,
  trueValue: [String, Number, Boolean] as PropType<string | number | boolean>,
  falseValue: [String, Number, Boolean] as PropType<string | number | boolean>
} as const

export type CheckboxProps = Partial<ExtractPropTypes<typeof checkboxProps>>

export const checkboxEmits = {
  'update:modelValue': (val: string | number | boolean) => val,
  'Change': (checked: boolean) => checked
}

export type CheckboxEmits = typeof checkboxEmits