/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// button所需要的一些属性与类型
import { ExtractPropTypes, PropType } from 'vue'// 两个自带的泛型共聚

export const Types = [
    'primary',
    'success',
    'warning',
    'error',
    'default'
]as const// as const以后变成类型了

export type Size = 'small' | 'medium' | 'large'
export type NativeType = 'button' | 'submit' | 'reset'

export const buttonProps = {
    size: {
        type: String as PropType<Size>,
        default: '32'
    },
    color: {
        type: String,
        default: '#bebe'
    },
    type: {
        type: String,// 这是一个限定范围的枚举,配合as const以后 里面只能是这些值
        values: Types,
        // validator:(val: string) => {// 复杂校验用
        //     return Types.includes(val)
        // },
        default: 'default'
    },
    nativeType: {
        type: String as PropType<NativeType>,
        default: 'button'
    },
    target: {// 进行滚动的目标元素
        type: String,
        default: 'window'
    },
    round: Boolean,// 圆角，按百分比计算？
    circle: Boolean,// 圆形按钮
    disabled: Boolean,// 禁用
    loading: Boolean,// 加载状态
    toTop: Boolean,// 回到顶部
} as const// 变成只读的

export const buttonEmits = {// 一些事件
    click: (e: MouseEvent) => e instanceof MouseEvent,
    mousedown: (e: MouseEvent) => e instanceof MouseEvent
}

export type ButtonEmits = typeof buttonEmits

// 抽离对象类型，而不是推导出Constructor
export type ButtonProps = ExtractPropTypes<typeof buttonProps>