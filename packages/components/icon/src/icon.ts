/**
 * Author: bottle414
 * License: MIT
 * Date: 2025-05-19
 */

// icon所需要的一些属性与类型
import { ExtractPropTypes, PropType } from 'vue'// 两个自带的泛型共聚

export const iconProps = {
    color: String,
    depth: Number as PropType<1 | 2 | 3 | 4>,// 限制depth为 1, 2, 3, 4
    size: [Number, String] as PropType<Number | String>// 告诉这不是数组而是两个类型
} as const// 变成只读的

// 抽离对象类型，而不是推导出Constructor
export type IconProps = ExtractPropTypes<typeof iconProps>