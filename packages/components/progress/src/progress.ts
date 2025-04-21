import { ExtractPropTypes, PropType } from "vue"

export type ProgressType = 'line' | 'cicle' | 'dashboard'
export type ProgressStatus = 'success' | 'warning' | 'error'

export const progressProps = {
    type: {
        type: String as PropType<ProgressType>,
        default: 'line'
    },
    percentage: {
        type: Number,
        default: 50
    },
    width: {
        type: Number,
        default: 200
    },
    height: {
        type: Number,
        default: 10
    },
    status: {
        type: String as PropType<ProgressStatus>,
        default: 'success'
    },
    color: {
        type: String
    },
    indeterminate: Boolean,// 动画
    showPercentage: Boolean// 显示进度
}as const

export type ProgressProps = ExtractPropTypes<typeof progressProps>