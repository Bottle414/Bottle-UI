/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// input所需要的一些属性与类型
import { ExtractPropTypes, PropType } from 'vue'
import { isString } from '@vue/shared'

export type Type = 'text' | 'password' | 'textarea' // 一共23种，太逆天了

export const inputProps = {
    type: {
        // 原生input类型
        type: String as PropType<Type>,
        default: 'text'
    },
    modelValue: {
        // 绑定的值
        type: [String, Number] as PropType<string | number>,
        default: ''
    },
    placeholder: {
        // 占位符
        type: String,
        default: ''
    },
    label: {
        // 标签内容
        type: String,
        default: ''
    },
    showPassword: Boolean, // 展示密码
    clearable: Boolean, // 一键清除
    disabled: Boolean, // 禁用
    readonly: Boolean, // 只读
    resize: Boolean // 可缩放
} as const // 变成只读的

// 抽离对象类型，而不是推导出Constructor
export type InputProps = ExtractPropTypes<typeof inputProps>

export const inputEmits = {
    'update:modelValue': (val: string) => val, // 双向绑定事件
    input: (val: string) => isString(val), // 边输入边触发
    change: (val: string) => isString(val), // 失去焦点触发
    focus: (e: FocusEvent) => e instanceof FocusEvent,
    blur: (e: FocusEvent) => e instanceof FocusEvent,
    clear: () => true // 清空事件
}

export type InputEmis = typeof inputEmits
