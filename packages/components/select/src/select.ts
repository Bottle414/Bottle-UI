/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// select所需要的一些属性与类型
import { ExtractPropTypes, PropType } from 'vue'

export const selectProps = {
    multiple: Boolean,
    disabled: Boolean,
    placeholder: String,
    size: [Number, String] as PropType<Number | String>
} as const// 变成只读的

export type SelectProps = ExtractPropTypes<typeof selectProps>