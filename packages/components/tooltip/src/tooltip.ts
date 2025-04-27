import { ExtractPropTypes, PropType } from 'vue'

export type PlacementType = 'top' | 'bottom' | 'left' | 'right'

export const tooltipProps = {
    placement: {
        type: String as PropType<PlacementType>,
        default: 'bottom'
    },// 弹出方向
    light: Boolean,
    content: {
        type: String,
        default: ''
    }// 提示框内容
} as const// 变成只读的

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>