// button所需要的一些属性与类型
import { ExtractPropTypes, PropType } from 'vue'// 两个自带的泛型共聚

export const ButtonTypes = [
    'default',
    'primary',
    'success',
    'warning',
    'error'
]

export const buttonProps = {
    size: {
        type: String,
        default: '32'
    },
    color: {
        type: String,
        default: '#EEF'
    },
    type: {
        type: String,
        values: ButtonTypes,
        default: 'default'
    },
    radius: {
        type: Number,
        default: 10
    },// 按钮圆角，为百分比
    loading: {
        type: Boolean,
        default: false
    }// 加载状态
} as const// 变成只读的

// 抽离对象类型，而不是推导出Constructor
export type ButtonProps = ExtractPropTypes<typeof buttonProps>