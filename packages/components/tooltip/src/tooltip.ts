import { ExtractPropTypes, PropType } from 'vue'

export const tooltipProps = {
    color: String,// 文字颜色
    background: String,// 背景色
    depth: Number as PropType<1 | 2 | 3 | 4>,// 限制depth为 1, 2, 3, 4
    size: [Number, String] as PropType<Number | String>,// 告诉这不是数组而是两个类型
    placement: String,// 弹出方向
    content: String// 提示框内容
} as const// 变成只读的

export type TooltipProps = ExtractPropTypes<typeof tooltipProps>